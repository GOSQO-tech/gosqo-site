# Data Processing Addendum (DPA)

This Data Processing Addendum ("DPA") is entered into between the **Merchant** (the Shopify store operator who installs the GOSQO Merchant Assistant app) and **GOSQO** ("Processor," "we," "us") and governs the processing of Personal Data by the Processor on behalf of the Merchant in connection with the App.

By installing or using the App, the Merchant agrees to this DPA. If the Merchant is acting on behalf of a company, they represent that they have authority to bind that company.

**Definitions** in this DPA have the same meaning as in the GDPR where applicable. "Personal Data," "Controller," "Processor," "Data Subject," "Processing," "Subprocessor," and "Supervisory Authority" are used as in the GDPR.

---

## 1. Roles

- **Merchant** is the **Controller** of Personal Data that they make available through their Shopify store and through the App (e.g. store data, customer data, order data).
- **GOSQO** is the **Processor** that processes Personal Data on behalf of the Merchant to provide the App.

The Merchant is responsible for ensuring that they have a lawful basis and any required notices/consents for providing Personal Data to the App and for instructions given to the Processor.

---

## 2. Instructions

- We will process Personal Data only on the Merchant's **documented instructions** (including as set out in the App's functionality, this DPA, and the Shopify app terms).
- We will not use Personal Data for our own purposes (e.g. marketing or building unrelated profiles). We may process data as required by applicable law; in that case we will inform the Merchant unless prohibited.
- If we believe an instruction infringes applicable data protection law, we will inform the Merchant before carrying it out (unless we are legally required to process without delay).

---

## 3. Confidentiality

- Personnel who process Personal Data are bound by confidentiality obligations (contractual or statutory).
- We will ensure that only authorized personnel access Personal Data and only as needed to provide the App and support.

---

## 4. Security Measures

We implement appropriate technical and organizational measures to protect Personal Data, including:

- **Encryption in transit:** TLS for data in transit.
- **Access control:** Access to systems and data limited to authorized personnel with need-to-know.
- **Integrity and verification:** HMAC verification of Shopify webhooks; verification of App Proxy requests; rejection of invalid or tampered requests.
- **Secrets management:** API keys and secrets stored in secure configuration; not logged or exposed to clients.
- **Logging:** Sensitive and personal data redacted or masked in logs.
- **Data minimization and retention:** We process and retain data only as necessary to provide the App and to comply with uninstall and GDPR deletion obligations.

We will not claim certifications (e.g. SOC 2, ISO 27001) unless we have completed and published them.

---

## 5. Subprocessors

We use the following categories of Subprocessors to provide the App:

| Subprocessor | Purpose | Location / transfer |
|--------------|---------|----------------------|
| **OpenAI** | AI/LLM (chat, copywriter, SEO, FAQ, etc.) | As per OpenAI's terms and data processing documentation. |
| **Database provider** | Hosting of application database (PostgreSQL) | As per deployment (e.g. same region as app or as disclosed). |
| **File storage provider** | Storage of chat attachments (e.g. Cloudflare R2) | As per provider's terms and region. |
| **Shopify** | Platform, OAuth, webhooks, billing | As per Shopify's terms and policies. |

We ensure that Subprocessors are bound by written agreements that require them to protect Personal Data in a manner consistent with this DPA. We will make available a current list of Subprocessors on request. If we add or replace a Subprocessor in a way that affects the processing of Personal Data, we will inform the Merchant (e.g. via our website or App listing) and, where required by law, allow the Merchant to object within a reasonable period.

---

## 6. Data Subject Rights and Assistance

- We will assist the Merchant in fulfilling requests from Data Subjects (e.g. access, rectification, erasure, restriction, portability) by providing the tools and procedures we have implemented (e.g. uninstall-triggered deletion, GDPR webhook handlers for customers/redact and shop/redact).
- We will forward to the Merchant any Data Subject request we receive that is properly directed to the Merchant, and we will not respond to the Data Subject except with the Merchant's agreement or as required by law.
- We will assist the Merchant in meeting obligations related to security, breach notification, and data protection impact assessments to the extent necessary and feasible given our role as Processor.

---

## 7. Data Deletion and Return

- **On uninstall:** When the Merchant uninstalls the App, we delete all Personal Data associated with their store (including in our database and file storage) in response to Shopify's `app/uninstalled` webhook, as described in our Privacy Policy and technical documentation.
- **On GDPR redaction:** We process Shopify's `customers/redact` and `shop/redact` webhooks and delete the relevant Personal Data as implemented in our systems.
- **On termination of the DPA:** At the end of the relationship (e.g. after uninstall and any post-uninstall retention required by law), we will delete or return Personal Data at the Merchant's choice, unless we are required to retain it by law. We do not retain copies beyond what is necessary for that period.

---

## 8. Audits and Demonstrating Compliance

- We will make available to the Merchant information reasonably necessary to demonstrate compliance with this DPA (e.g. descriptions of security measures, subprocessor list, and deletion/uninstall behavior), subject to confidentiality and security constraints.
- If the Merchant needs to audit our processing (e.g. for a Supervisory Authority or contractual audit right), we will cooperate by providing information and, if required and agreed, facilitating an audit at the Merchant's expense, no more than once per year unless required by law. Any audit will be subject to reasonable notice and confidentiality obligations.

---

## 9. International Transfers

Where Personal Data is transferred to a country not recognized as providing an adequate level of protection, we will ensure appropriate safeguards (e.g. Standard Contractual Clauses, or equivalent) as required by applicable law. Subprocessor locations and transfer mechanisms are as disclosed in the Subprocessor list and in the relevant provider's documentation (e.g. OpenAI, Shopify).

---

## 10. Term and Termination

- This DPA is effective for as long as we process Personal Data on behalf of the Merchant in connection with the App.
- Termination of the App relationship (e.g. uninstall) does not remove the Merchant's or our obligations that by their nature survive (e.g. confidentiality, deletion, audit rights for past processing).

---

## 11. Contact

For questions about this DPA or to exercise rights under it: **[Insert email, e.g. privacy@yourcompany.com or legal@yourcompany.com]**

For technical or support questions, use the in-app help or the support channel indicated in the App listing.
