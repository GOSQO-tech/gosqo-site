# Security & Compliance

This page describes how the GOSQO AI Store Assistant app handles security and compliance. It is intended for the App Store listing (Resources) and for merchants who need assurance about data protection and Shopify compliance.

We do **not** claim certifications (e.g. SOC 2, ISO 27001) unless we have completed and published them. The following reflects our current technical and organizational practices as implemented in the application.

---

## Webhook HMAC verification

- Every webhook we receive from Shopify is verified using **HMAC-SHA256** with the shared app secret.
- The raw request body is hashed and compared (using constant-time comparison) to the value in the `X-Shopify-Hmac-Sha256` header. If verification fails, we respond with **401 Unauthorized** and do not process the request.
- This prevents forged or tampered webhooks from triggering data changes or deletions. Webhooks we handle include: app uninstall, subscription updates, scope updates, and GDPR (customers/data_request, customers/redact, shop/redact).

---

## Server-side billing validation

- **Plan and usage** are enforced **only on the server**. We never trust the client (browser or storefront) for billing state.
- Before performing quota-consuming or plan-gated actions (e.g. AI chat, copywriter, SEO audit, margin risk features), we check the store's plan and usage in our database and charge or block as appropriate.
- Subscription state is synced from Shopify after payment confirmation and on subscription update webhooks. Payment itself is processed entirely by Shopify; we do not store payment card or bank details.

---

## Role-based and scope-based access

- **Admin app:** All routes under the app (e.g. `/app/*`) require a valid **Shopify admin session**. The session is scoped to a single shop; there is no cross-shop access.
- **Storefront API:** Endpoints used by the chat widget (e.g. send message, get config, order tracking) do not use the admin session. Access is controlled by:
  - **App Proxy signature:** Requests must come through Shopify's App Proxy with a valid signature (HMAC) so we can verify they originate from a store that has the app installed.
  - **Identity and shop binding:** Where used, identity tokens bind the request to a shop and optional customer context; tokens are verified and optionally bound to origin to reduce replay risk.
- **Webhooks:** No session is used; only HMAC verification and the shop domain from headers.
- **Data isolation:** All stored data is keyed or filtered by shop (normalized domain). Queries and purge operations are scoped by shop so one merchant cannot access another's data.

---

## Encryption and transport security

- **In transit:** All traffic between clients, Shopify, and our servers (and between our servers and subprocessors such as OpenAI and file storage) uses **TLS**. We do not accept unencrypted connections for app or API traffic.
- **Secrets:** API keys and app secrets are stored in environment configuration, not in code or logs. They are used only on the server for OAuth, webhook verification, App Proxy verification, and identity token signing.

---

## Rate limiting

- We apply **rate limits** on storefront and public API endpoints (e.g. live chat, config, history, identity, order tracking, AI tools, SEO audit). Limits are defined per endpoint and per time window, and are enforced by **shop** and by **IP** where applicable.
- When a limit is exceeded, we respond with **429** and appropriate headers (e.g. retry-after). This reduces abuse, scraping, and overload and protects availability for all merchants.

---

## Logging and redaction

- We log request identifiers, route, timing, and (where useful) shop domain for operations and debugging. We **do not** log full request/response bodies or raw webhook payloads in a way that would expose personal or sensitive data.
- We **redact** or **omit** from logs: authorization headers, cookies, tokens, HMAC values, API keys, and other secrets. We **mask** emails and phone numbers in log content where applicable. This reduces the risk of accidental exposure of personal or sensitive data in log storage or support workflows.

---

## GDPR compliance

- We implement **data deletion** in response to:
  - **App uninstall:** Full deletion of all store data (including chat, customer profiles, settings, usage, and files) via the `app/uninstalled` webhook.
  - **Customers/redact:** Deletion of the customer's profile and all related chat sessions, messages, and attachments.
  - **Shop/redact:** Full shop data deletion (same as uninstall).
- We **verify HMAC** on all GDPR webhook requests before processing. We use receipt/dedupe logic where implemented to avoid duplicate processing.
- We act as a **processor** for store and customer data; the merchant is the controller. We process data only on the merchant's instructions and as set out in our Privacy Policy and Data Processing Addendum. We do not use store or customer data for training AI models or for marketing.

**Implementation confirmation:** GDPR webhook topics (customers/data_request, customers/redact, shop/redact) have handlers and HMAC verification in code. Their **registration** with Shopify (e.g. at install time) must be confirmed so that Shopify actually sends these webhooks to the app.

---

## Subprocessors and data sharing

- We use **OpenAI** for AI features (chat, copywriter, SEO). Data sent to OpenAI is limited to what is needed for each request and is not used for training (per our and OpenAI's policies).
- We use a **database** (PostgreSQL) and **file storage** (e.g. Cloudflare R2) to store app data and chat attachments. Hosting regions depend on our deployment.
- **Shopify** is used for OAuth, webhooks, and billing; payment is processed by Shopify.
- We do not sell or share data for advertising. A list of subprocessors can be provided on request; see our [Privacy Policy](/resources/privacy-policy) and [DPA](/resources/dpa).

---

## Incident and change management

- We monitor application health (e.g. liveness and readiness endpoints) and logs to detect errors and anomalies. We do not describe specific incident response or change management processes here; those are internal. For security or privacy incidents that affect merchant or customer data, we will act in accordance with applicable law and our commitments to merchants.

---

## Contact

For security or compliance questions: **[Insert email, e.g. security@yourcompany.com or privacy@yourcompany.com]**

For general support, use the in-app help or the channel indicated in the App listing.
