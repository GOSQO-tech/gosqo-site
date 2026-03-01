# Compliance Audit Before Writing (Shopify App Store & Legal)

**Purpose:** Factual baseline for Privacy Policy, DPA, and App Listing. Source: codebase only.  
**Date:** March 2026.

---

## 1. Shopify API scopes (from `shopify.app.toml`)

| Scope | Purpose (from code/docs) |
|-------|---------------------------|
| `read_customers` | Customer context for chat, identity, order history |
| `read_fulfillments` | Order tracking, delivery status (support playbooks, widget) |
| `read_legal_policies` | Policies for AI knowledge and FAQ |
| `read_orders` | Order context for live chat, AI actions, order lookup in widget |
| `read_products` | Product catalog for AI recommendations, copywriter, SEO |
| `write_app_proxy` | App Proxy for storefront widget API |
| `write_customers` | Update customer notes/tags for support |
| `write_products` | Apply AI-generated copy, SEO fields, alt text |
| `read_users` | Staff/assignment context in inbox |

---

## 2. Webhooks registered

**In `shopify.app.toml` (app-level subscriptions):**

| Topic | URI | Purpose |
|-------|-----|--------|
| `app/uninstalled` | `/webhooks/app/uninstalled` | Data purge for shop |
| `app_subscriptions/update` | `/webhooks/app/subscriptions_update` | Sync ShopPlan (tier, status, subscription id) |
| `app/scopes_update` | `/webhooks/app/scopes_update` | Acknowledge scope changes |

**Handlers with HMAC verification (routes exist); subscription method not in toml:**

| Topic | Route | Purpose |
|-------|--------|--------|
| `customers/data_request` | `webhooks.customers.data_request` | GDPR: acknowledge request; no payload logging |
| `customers/redact` | `webhooks.customers.redact` | GDPR: purge customer data (CustomerProfile + sessions/messages/attachments) |
| `shop/redact` | `webhooks.shop.redact` | GDPR: full shop purge (same as uninstall) |

**Gap:** GDPR webhooks are not listed in `shopify.app.toml`. They may be registered at install time via `registerWebhooks` (exported in `app/shopify.server.ts`). **Implementation confirmation required:** ensure GDPR topics are actually subscribed (e.g. in afterAuth or equivalent).

---

## 3. Data stored in database (PostgreSQL)

| Data type | Models | Scope | Notes |
|-----------|--------|--------|--------|
| Admin session | `Session` | Per shop | id, shop, state, accessToken, userId, firstName, lastName, email, scope, expires, etc. |
| Chat | `ChatSession`, `ChatMessage`, `ChatMessageAttachment` | Per shop | Conversations, content, attachments metadata |
| Customer profile | `CustomerProfile` | Per shop | customerId, email, phone, name, countryCode, firstSeenAt, lastSeenAt, lastUserAgent |
| Settings | `LiveChatSettings`, `AiProfile`, `ShopBrandProfile` | Per shop | Widget, AI mode, branding |
| Billing | `ShopPlan`, `UsageBucket`, `QuotaChargeEvent` | Per shop | Tier, status, trialEndsAt, usage, idempotency |
| Knowledge | `ShopKnowledgeDocument`, `FaqCategory`, `FaqItem`, `QuickReplyCategory`, `QuickReplyItem` | Per shop | FAQs, policies, macros |
| Products | `ShopProduct`, `ShopProductVariant`, `ShopProductSyncState` | Per shop | Catalog sync for AI/SEO |
| AI/SEO | `AiAction`, `SeoApplyLog`, `SeoGenerationRun`, `BulkCopyBatch`, `BulkCopyItem`, `SeoAuditJob`, `SeoAuditRun`, `SeoAuditFinding`, `SeoAuditTask` | Per shop | Actions, generations, audits |
| Opportunities | `AiOpportunity`, `AiImpactEvent`, `ShopOnboarding` | Per shop | Recommendations, onboarding |
| Margin/Risk | `MarginRiskSettings`, `RefundEvent`, `ReturnInsightAggregate`, `CustomerRiskAggregate`, `ReturnAnomaly` | Per shop | GIDs only (orderGid, customerGid, productGid, variantGid); no PII per design |
| Operational | `WebhookReceipt`, `OperationLock`, `RateLimitBucket` | Per shop / global | Dedupe, locks, rate limits |
| Agents | `AgentIdentity` | Per shop | Staff/agent identity refs |

**File storage (outside DB):** Chat attachments (files) in **Cloudflare R2** (or S3-compatible); keys by shop/session/message. Configured via `R2_*` env vars.

---

## 4. Customer data processed

- **Stored (app DB):** CustomerProfile (customerId, email, phone, name, countryCode); chat messages and attachments linked to sessions/customers.
- **Read from Shopify (not stored as raw):** Customer identity and order context via Admin GraphQL for live chat and support playbooks.
- **Margin/Risk:** Only Shopify GIDs (e.g. customerGid) and aggregates; no PII in RefundEvent, CustomerRiskAggregate, ReturnInsightAggregate, ReturnAnomaly (per code comments and schema).

---

## 5. Third-party AI provider

- **Provider:** **OpenAI** (via `openai` npm package, `OPENAI_API_KEY`).
- **Usage:** Chat completions for live chat, support replies, product copywriter, FAQ generation/rewrite, SEO (keywords, alt text), intent/slots, summarization. Single gateway in `app/ai-gateway.server.ts`; some routes call `https://api.openai.com/v1/chat/completions` directly.
- **No other AI providers** found in codebase.

---

## 6. Billing

- **Where:** **Shopify only.** App uses Shopify Billing API: `appSubscriptionCreate` (returns confirmationUrl), merchant confirms payment on Shopify; app syncs plan via `api.billing.confirm` and webhook `app_subscriptions/update`. Cancel via GraphQL and `api.billing.cancel`.
- **Storage:** Plan and usage stored in app DB (`ShopPlan`, `UsageBucket`, `QuotaChargeEvent`) for entitlements and quotas. No payment card or billing details stored by the app; payment processing is entirely via Shopify.

---

## 7. Data deletion on uninstall

- **Trigger:** Webhook `app/uninstalled` → handler verifies HMAC → creates WebhookReceipt (dedupe) → calls `purgeShopData(shop)` in `app/shop-data-purge.server.ts`.
- **Actions:**  
  - Delete R2 objects for chat attachments (keys collected from ChatMessageAttachment).  
  - In one DB transaction: delete in order (attachments → messages → AiActions → sessions); then all other shop-scoped tables (SEO, opportunities, products, billing, settings, FAQs, onboarding, margin/risk, CustomerProfile, AgentIdentity, BulkCopy, WebhookReceipt for shop, OperationLock, Session, RateLimitBucket by key).
- **Preserved:** WebhookReceipt row for the current uninstall event (so handler can mark PROCESSED); that row remains in DB. No automatic retention policy for old receipts in code.

---

## 8. GDPR topics registration

- **Handlers:** Implemented and HMAC-verified for `customers/data_request`, `customers/redact`, `shop/redact`.
- **Subscription:** Not declared in `shopify.app.toml`. **Implementation confirmation required** that these topics are registered (e.g. via `registerWebhooks` on install).

---

## 9. Personal data types (summary)

| Type | Examples | Where |
|------|----------|--------|
| Store/admin | Shop domain, session token; staff first/last name, email (Session) | PostgreSQL |
| Customer (end-user) | Email, phone, name, country (CustomerProfile); chat content; uploaded files | PostgreSQL, R2 |
| Order/product | Order/order line data read from Shopify; product titles/descriptions (sync/copywriter) | Read via API; stored as needed for features (e.g. ShopProduct, AiAction payloads) |

---

## 10. Sensitive data types

| Type | Handling |
|------|----------|
| Access tokens | Stored in Session; not logged (BLOCKED_KEYS in logger). |
| API secrets | Env only; redacted in logs. |
| Passwords | Not collected or stored. |
| Payment details | Not processed by app; Shopify handles. |
| PII in logs | Logger redacts/masks auth, tokens, and masks emails/phones in text. |

---

## 11. Data retention logic

- **In code:** No fixed retention period. Data is kept until: (1) uninstall → full purge, (2) GDPR customer redact → purge that customer's data, (3) shop/redact → full shop purge.
- **WebhookReceipt:** Kept after processing; no TTL or purge in code.

---

## 12. Data deletion logic

| Event | Action |
|-------|--------|
| App uninstall | `purgeShopData(shop)`: all shop data + R2 attachments. |
| customers/redact | `purgeCustomerData(shop, customerId, email)`: CustomerProfile + related sessions, messages, attachments (R2). |
| shop/redact | Same as uninstall: `purgeShopData(shop)`. |

---

## 13. Subprocessors (from code)

| Subprocessor | Role | Data |
|--------------|------|------|
| **OpenAI** | AI/LLM (chat, copywriter, SEO, FAQ, etc.) | Prompts and responses (store/customer/order/product context as needed for features). |
| **PostgreSQL** (host not in code) | Database | All application data. |
| **Cloudflare R2** | File storage | Chat attachment files (keys by shop/session/message). |
| **Shopify** | OAuth, webhooks, billing, App Proxy | Auth, webhook payloads, subscription state; payment processed by Shopify. |

Hosting provider for the app (e.g. Render) is not specified in code; document separately if required for DPA/Privacy Policy.
