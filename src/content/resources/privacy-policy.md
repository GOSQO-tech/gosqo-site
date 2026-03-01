# Privacy Policy

**Last updated:** [Insert date]

This Privacy Policy describes how **GOSQO** ("we," "our," or "us") collects, uses, stores, and protects information in connection with the GOSQO Merchant Assistant Shopify app ("App"). It applies to merchants who install the App and to end users (e.g. store visitors) whose data is processed through the App. We process data as a service provider to the merchant (the data controller for their store and customer data).

If you are a merchant, you are responsible for ensuring your own privacy policy and practices comply with applicable law and that you have a lawful basis to use the App and share data with us. By installing or using the App, you agree to this Privacy Policy.

---

## 1. Who We Are

The App is operated by **GOSQO** (or the legal entity that owns and operates the GOSQO Merchant Assistant product). For the purpose of data protection law, when we process store or customer data on behalf of a merchant, we act as a processor; the merchant is the controller for that data.

**Contact for privacy requests:** [Insert email, e.g. privacy@yourcompany.com]

---

## 2. Information We Collect

We collect and process the following categories of information. The exact data depends on how the App is used and which Shopify permissions are granted.

### 2.1 Store Information

- **Shop domain** and Shopify store identification.
- **Admin session data** (e.g. session identifier, scope, expiry) necessary to authenticate and call the Shopify Admin API on behalf of the store.
- **Staff/user identifiers** (e.g. Shopify user ID, first name, last name, email) when used for session or inbox assignment, if the store has granted the relevant scope.

### 2.2 Customer Data

- **Customer profile data** that we store to provide chat and support: customer identifier, email, phone, name, country code, and related timestamps. This is used to identify visitors in the live chat and to provide order tracking and support.
- **Chat content:** messages sent and received in the live chat (storefront and admin), including AI-generated replies.
- **Files uploaded in chat** (e.g. images); stored in our file storage (e.g. Cloudflare R2) and linked to the conversation.

We may also **read** customer data from Shopify via the Admin API (e.g. for order lookup or identity) without storing it beyond what is listed above.

### 2.3 Order Data

- We **read** order data from Shopify (e.g. order status, line items, fulfillments) to provide order tracking in the widget, support playbooks, and AI-assisted actions. We may store order identifiers and related context (e.g. in AI action records or support flows) only as necessary to provide these features.

### 2.4 Product Data

- We **read** and may **store** product data (e.g. product and variant IDs, titles, descriptions, images, tags) to provide product recommendations in chat, the product copywriter, and SEO tools. We may also **write** product data back to Shopify (e.g. AI-generated titles, descriptions, or alt text) when the merchant uses those features.

### 2.5 Usage Data

- **Plan and usage metrics:** subscription tier, trial status, and usage of quota-limited features (e.g. AI tokens, copywriter generations, SEO operations) to enforce plan limits and display usage in the App.

### 2.6 Billing Information

- We do **not** collect or store payment card or bank details. Billing is handled entirely by **Shopify**. We store the fact that a store has an active subscription (plan name, tier, status, Shopify subscription identifier) so we can enforce entitlements and display billing state in the App.

### 2.7 Technical Data

- **Logs:** request identifiers, route, timing, shop domain, and error information. We **redact** authorization headers, tokens, and other secrets, and **mask** emails and phone numbers in log content where applicable.
- **Rate-limiting data:** identifiers (e.g. IP, shop) used to enforce rate limits on API endpoints; stored temporarily per our rate-limit windows.
- **IP address** may be used (e.g. for rate limiting or security); we do not use it to build long-term profiles of individuals.

---

## 3. How We Use Information

We use the information above to:

- **Provide AI chat:** Operate the live chat widget, identify customers, and generate replies using store policies, FAQs, and product data.
- **Generate content:** Power the product copywriter (single and bulk) and SEO tools (e.g. meta titles, descriptions, alt text), using product and store context.
- **Run SEO audits:** Analyze product and store content for SEO issues and store results for the merchant.
- **Perform risk analysis:** Provide margin and refund-risk insights using order and refund data (e.g. Shopify GIDs and aggregates); we do not use this to identify individuals beyond what the merchant sees in their store.
- **Billing:** Enforce plan limits and display subscription and usage in the App; payment is processed by Shopify.
- **Security and operations:** Verify webhooks and App Proxy requests (HMAC), enforce rate limits, debug errors, and ensure availability (e.g. health checks).

We do not sell store or customer data. We do not use data for advertising or for building profiles for purposes unrelated to providing the App.

---

## 4. AI and Automated Processing

- **AI provider:** We use **OpenAI** to power chat replies, content generation, SEO suggestions, and related features. Data sent to OpenAI includes the context necessary for each request (e.g. conversation history, store policies, product info, customer/order context when relevant).
- **Training:** We do not use data submitted through the App to train OpenAI models. Our use of the OpenAI API is consistent with OpenAI's usage policies that do not use API content for model training where applicable.
- **Data minimization:** We send only the data required for the specific feature (e.g. limited conversation history, truncated knowledge, and bounded token limits) and apply technical limits (e.g. max tokens, knowledge caps) to reduce exposure.
- **Automated decisions:** The App can suggest or perform automated actions (e.g. AI-suggested replies or actions) according to the merchant's settings. The merchant remains responsible for how they use these features and for any decisions that affect their customers.

---

## 5. Data Retention

- **While the App is installed:** We retain store and customer data as long as needed to provide the App and as required by law or the merchant's instructions.
- **After uninstall:** When a store uninstalls the App, we **delete all data** associated with that store (including sessions, chat, customer profiles, settings, usage, and files in our storage) in response to the `app/uninstalled` webhook. One webhook receipt record may be retained for that event for operational integrity.
- **GDPR requests:** When we receive a valid data deletion or redaction request (e.g. via Shopify's customers/redact or shop/redact webhooks), we delete the relevant data as described in our Data Processing Addendum and in Shopify's requirements.

We do not define a fixed retention period for all data; retention is driven by uninstall, GDPR, and lawful instructions from the merchant or a supervisory authority.

---

## 6. Data Sharing and Subprocessors

We share data only as necessary to operate the App and as described below.

| Recipient | Role | Data shared |
|-----------|------|-------------|
| **OpenAI** | AI/LLM provider | Prompts and responses (store/customer/order/product context as needed for features). |
| **Database hosting** | Application database | All data we store (hosting provider as per your deployment; e.g. PostgreSQL). |
| **File storage** | Attachment storage | Chat file uploads (e.g. Cloudflare R2 or S3-compatible storage). |
| **Shopify** | Platform, auth, billing | OAuth and API calls; webhook payloads; subscription and payment are processed by Shopify. |

We ensure subprocessors are bound by appropriate safeguards (contract, DPA, or equivalent). A list of subprocessors can be provided on request. We do not sell or share data for marketing or advertising.

---

## 7. Your Rights (GDPR / CCPA and similar)

Where applicable (e.g. GDPR, CCPA), data subjects may have the right to:

- **Access:** Request a copy of their personal data that we process.
- **Deletion:** Request deletion of their personal data (we implement this via uninstall and GDPR webhooks as described above).
- **Correction:** Request correction of inaccurate data (we support this in line with our capabilities and the merchant's control over their store data).
- **Portability:** Request their data in a structured, machine-readable format where technically feasible.
- **Objection / restriction:** Object to certain processing or request restriction, where the law provides.

**Merchants:** Please direct requests relating to your store or your customers to us at the contact below. We will process them in accordance with our role (processor vs controller) and applicable law.

**End users (e.g. store visitors):** If your data is processed through a merchant's store that uses our App, the merchant is typically the controller. You may contact the merchant first; you may also contact us and we will work with the merchant where appropriate.

**Contact for privacy and data subject requests:** [Insert email, e.g. privacy@yourcompany.com]

---

## 8. Data Security

We implement technical and organizational measures to protect data, including:

- **Encryption in transit:** Communications with our servers and with third parties (e.g. Shopify, OpenAI) use TLS.
- **Access controls:** Access to systems and data is limited to personnel who need it to operate and support the App; access is tied to roles and authentication.
- **Webhook and request verification:** Incoming Shopify webhooks are verified using HMAC (SHA-256). Storefront API requests are verified using the App Proxy signature. Invalid requests are rejected.
- **Secrets:** API keys and secrets are kept in environment configuration and are not logged or exposed to the client.
- **Logging:** We redact or mask sensitive and personal data in logs (e.g. tokens, emails, phone numbers).

We do not claim certifications (e.g. SOC 2) unless we have completed and published them. Security practices are reviewed and updated as needed.

---

## 9. Changes and Contact

We may update this Privacy Policy from time to time. We will post the current version on our website or in the App listing and, where required by law, we will notify you of material changes.

**Contact:**  
For privacy questions, data subject requests, or compliance inquiries: **[Insert email, e.g. privacy@yourcompany.com]**

For general support: use in-app help or the support channel indicated in the App listing.
