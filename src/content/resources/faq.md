# FAQ — GOSQO AI Store Assistant (App Store Resources)

This FAQ is intended for the Shopify App Store listing (Resources) and for merchants considering or using the App.

---

## What data do you store?

We store only what is needed to run the App:

- **Your store:** Shop domain, session and subscription information (plan, trial, usage), app settings (e.g. chat widget, AI mode, branding), and knowledge base content (FAQs, policies, quick replies) that you add or import.
- **Chat:** Conversation history (messages and metadata), customer profiles used in chat (e.g. email, name, phone when provided), and any files uploaded in chat (stored in our secure file storage).
- **Products and SEO:** Cached product data and results of SEO audits and copywriter runs, so you can view history and apply changes.
- **Billing and usage:** Plan tier, usage counts (e.g. AI tokens, copywriter generations) to enforce limits and show usage in the App. We do **not** store payment card or bank details; payment is handled by Shopify.

We do not sell your data or your customers' data. Details are in our [Privacy Policy](/resources/privacy-policy).

---

## Do you use our data to train AI?

**No.** We use OpenAI to power chat replies, the copywriter, and SEO features. We do **not** use your store data, customer data, or chat content to train OpenAI's models. Data sent to OpenAI is used only to generate responses for your store and is handled in line with OpenAI's API policies (which do not use API content for training where applicable).

---

## What happens when I remove the app?

When you uninstall the App, we **delete all data** we hold for your store. This is triggered automatically by Shopify's uninstall webhook and includes:

- All chat conversations and customer profiles
- All uploaded files (e.g. chat attachments)
- Settings, FAQs, knowledge base, and product cache
- Plan and usage records
- Any other data we stored for your shop

Deletion is permanent. We do not keep backups of your data after uninstall for longer than our normal backup cycle. One internal record for the uninstall event may be kept for operational integrity.

---

## Where is data stored?

- **Application database:** Your app data (sessions, chat, settings, usage, etc.) is stored in a database (PostgreSQL) hosted by our infrastructure provider. The exact region depends on our deployment (e.g. same region as the app server).
- **File storage:** Chat file uploads are stored in a secure object storage service (e.g. Cloudflare R2 or S3-compatible). Keys are scoped by shop and conversation.
- **AI:** When we call the AI provider (OpenAI), the data needed for each request (e.g. conversation, policies, product info) is sent over encrypted connections and is not used for training (see above).

We do not move or replicate your data to jurisdictions beyond what is needed to run the App and as described in our Privacy Policy and DPA.

---

## How do you protect data?

We protect data with technical and organizational measures, including:

- **Encryption in transit:** All traffic between your browser, Shopify, and our servers (and between us and subprocessors) uses TLS.
- **Verification:** We verify every webhook from Shopify (HMAC) and every storefront request (App Proxy signature) so we do not process forged or tampered requests.
- **Access control:** Only authorized systems and personnel can access your data; access is limited to what is needed to run and support the App.
- **Secrets:** API keys and secrets are stored in secure configuration and are never logged or sent to the client.
- **Logs:** We redact or mask sensitive and personal data (tokens, emails, phones) in logs.
- **Rate limiting:** We apply rate limits on our storefront and API endpoints to reduce abuse and overload.

We describe our security practices in more detail on our [Security & Compliance](/resources/security) page. We do not claim certifications (e.g. SOC 2) unless we have completed and published them.

---

## Can I export my data?

- **Chat and conversations:** Today, you can view and manage conversations in the App's Inbox. If you need a bulk export of your chat data before uninstalling, contact support and we will work with you to provide what we can from our systems, subject to technical feasibility.
- **Products and SEO:** Product data remains in your Shopify admin; we only cache and use it for the App. SEO and copywriter results are visible in the App; export options may be added in future versions.
- **After uninstall:** Once the App is uninstalled, we delete your data and do not retain it for export. We recommend exporting anything you need before uninstalling.

---

## Who do I contact about privacy?

For privacy questions, data subject requests (access, deletion, etc.), or compliance inquiries, contact us at: **[Insert email, e.g. privacy@yourcompany.com]**

For general support or billing, use the in-app help or the support channel shown in the App listing.

For more detail on what we collect, how we use it, and your rights, see our [Privacy Policy](/resources/privacy-policy) and [Data Processing Addendum](/resources/dpa).
