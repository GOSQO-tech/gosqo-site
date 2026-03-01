# Compliance Risks Before Submission

This document lists **discrepancies and gaps** between the generated legal/Resources texts and the current codebase, and any Shopify App Store or GDPR compliance risks that should be resolved before submission.

---

## 1. GDPR webhook registration (critical)

**Risk:** The Privacy Policy, DPA, FAQ, and Security page state that we process GDPR webhooks (`customers/data_request`, `customers/redact`, `shop/redact`) and delete data accordingly. **In code:** Handlers exist and verify HMAC; **in `shopify.app.toml`:** only `app/uninstalled`, `app_subscriptions/update`, and `app/scopes_update` are listed. GDPR topics are **not** declared in the toml.

**Impact:** If GDPR webhooks are not actually registered (e.g. via `registerWebhooks` in afterAuth or another install callback), Shopify will not send these webhooks and we will not fulfill GDPR deletion/acknowledgment for merchants. This can lead to non-compliance and App Store rejection.

**Action:** Confirm that GDPR webhook topics are subscribed (e.g. by calling Shopify's webhook subscription API at install time). If they are, document where and how. If not, add registration and then update or remove any policy text that promises GDPR handling via these webhooks until implemented.

---

## 2. Placeholders in published documents

**Risk:** The following placeholders must be replaced with real values before publishing; otherwise the listing and legal docs are incomplete or unenforceable.

| Document | Placeholder | Action |
|----------|-------------|--------|
| Privacy Policy | "[Insert date]" (Last updated) | Set to the effective date of the policy. |
| Privacy Policy, DPA, FAQ, Security | "[Insert email]" (privacy/legal/support) | Set to the actual contact email(s) for privacy, legal, and support. |
| Privacy Policy / DPA | "GOSQO" or legal entity name | Replace with the exact legal name of the company that operates the app (if different from "GOSQO"). |

**Action:** Replace every placeholder with the correct legal name, date, and contact email(s) before submission and before linking from the App Store.

---

## 3. Over-claiming security (avoided in generated texts)

**Status:** The generated texts **do not** claim SOC 2, ISO 27001, or other certifications. They state that we use encryption in transit, HMAC verification, server-side billing, rate limiting, and logging redaction, which **match the code**. No change needed unless you add a certification later; then update the Security page and Privacy Policy accordingly.

---

## 4. Consistency with Shopify App Store policies

**Checked:**

- **Data use:** Texts state we do not sell data and do not use data for AI training; this is consistent with code and intent.
- **Billing:** Texts state payment is via Shopify only; code uses only Shopify Billing API and does not store payment details. Consistent.
- **Uninstall:** Texts state full data deletion on uninstall; code implements `purgeShopData` on `app/uninstalled`. Consistent.
- **Scopes:** Listed scopes in the Compliance Audit match `shopify.app.toml`; ensure your App Store listing and permission justification text align with the same scopes and purposes.

**Action:** When filling the App Store listing, use the same scope justifications and data usage descriptions as in the Privacy Policy and FAQ to avoid inconsistency.

---

## 5. Subprocessor and hosting disclosure

**Risk:** The Privacy Policy and DPA refer to "database hosting" and "file storage" without naming the provider(s). The code references **Cloudflare R2** (and S3-compatible API) for files; the database host is not in code (e.g. Render is mentioned in comments). If merchants or Shopify expect a named list of subprocessors, the current wording may be too generic.

**Action:** Decide whether to name providers (e.g. "PostgreSQL hosted on [Provider]," "Cloudflare R2 for file storage"). If you do not name them, keep the generic wording and be prepared to provide a list on request, as stated in the DPA.

---

## 6. Data export (FAQ / Help Center)

**Risk:** The FAQ states that bulk export of chat data may be available on request and "subject to technical feasibility." **In code:** There is no implemented "export all my data" or GDPR data portability endpoint for merchants.

**Action:** Either (1) implement a minimal export (e.g. chat history for a shop) and update the FAQ to describe it, or (2) reword the FAQ to state that export is not currently offered and that merchants should save what they need before uninstalling. Avoid promising export "on request" if you cannot fulfill it in a reasonable time.

---

## 7. Summary table

| # | Risk | Severity | Action before submission |
|---|------|----------|--------------------------|
| 1 | GDPR webhooks may not be registered | Critical | Confirm registration; add if missing; document. |
| 2 | Placeholders (date, email, legal name) | High | Replace with real values in all docs. |
| 3 | Over-claiming security | N/A | Avoided; no change. |
| 4 | App Store vs policy consistency | Medium | Align listing text with Privacy Policy and scopes. |
| 5 | Subprocessor/hosting naming | Low | Name providers or keep generic and provide list on request. |
| 6 | Data export promise vs implementation | Medium | Implement export or reword FAQ/Help so no false promise. |

Resolving items 1 and 2 is strongly recommended before submitting to the Shopify App Store. Items 4–6 improve compliance and reduce post-submission risk.
