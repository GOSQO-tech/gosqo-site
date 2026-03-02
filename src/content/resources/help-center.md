# Help Center — GOSQO AI Store Assistant

Content for your support site or Shopify App Listing Resources. Adjust links and product names to match your branding.

---

## Getting Started Guide

### 1. Install the app

- Install **GOSQO AI Store Assistant** from the Shopify App Store.
- Approve the requested permissions (e.g. products, orders, customers, policies, app proxy). We use these only to provide chat, copywriter, SEO, and support features.

### 2. Complete guided setup

- After install, complete the **guided setup**: connect policies, configure the chat widget (Chatbox), and choose a plan when the trial is offered.
- Add or import **FAQs and policies** so the AI can answer accurately. The more accurate your knowledge base, the better the chat replies.

### 3. Configure the widget and assistant

- **Chatbox:** Enable the widget, set appearance (position, colors, welcome messages), and choose which pages it appears on (via the theme app extension).
- **Assistant settings:** Choose the **AI mode** (Smart Support, Sales Assistant, or Autopilot, depending on your plan), default language, and tone.

### 4. Add the widget to your storefront

- Ensure the **app block** (or embed) for the live chat widget is added to your theme so the widget appears on the storefront. You can control visibility in the Chatbox settings.

### 5. Billing (after trial)

- When your trial ends, go to **Billing** in the app, pick a plan (Starter, Growth, or Pro), and confirm payment through Shopify. Billing is handled entirely by Shopify; we do not store your payment details.

---

## How Billing Works

- **Plans:** We offer **Starter**, **Growth**, and **Pro** (pricing as shown in the App and on the App Store). Each plan has different limits (e.g. AI tokens per day, copywriter generations, SEO operations, inbox features).
- **Trial:** New stores get a **free trial** on Starter (and optionally Growth). No charge until you choose a plan and confirm.
- **Payment:** You choose a plan in the app; you are redirected to **Shopify** to confirm and pay. All payment processing is done by Shopify. We only store your plan and usage so we can enforce limits and show usage in the app.
- **Usage and limits:** The app shows your current usage (e.g. AI tokens, copywriter runs). If you hit a limit, the related feature will be gated until the next period or until you upgrade. Pro plans may have overage options (see in-app billing page).
- **Cancellation:** You can cancel from the Billing page. Access continues until the end of the current billing period; after that, we rely on Shopify's subscription webhook and our uninstall/data-deletion process if you remove the app.

---

## How AI Chat Works

- **On the storefront:** Visitors see a chat widget. Messages are sent to our servers via Shopify's App Proxy (secure and verified). The AI uses your **policies, FAQs, and product catalog** to answer questions, suggest products, and help with order tracking (when the visitor provides order info).
- **AI modes:** You choose how "smart" the assistant is:
  - **Smart Support:** Answers from your knowledge base and policies.
  - **Sales Assistant:** Adds product recommendations and order-aware help (by plan).
  - **Autopilot:** Can suggest actions (e.g. address change, return) for you to approve before they are applied (by plan).
- **Inbox:** All conversations appear in the app Inbox. You can assign threads to staff, add notes, and (on higher plans) use AI summaries and suggested actions. The AI does not use your store or customer data for training (see FAQ).

---

## How SEO Audit Works

- **Scope:** You can run SEO audits on **products** (and, where supported, collections or pages). The app checks meta titles, descriptions, alt text, and other SEO-related fields.
- **Flow:** Start an audit from the SEO/audit section. The app processes items (often in batches) and stores results. You can view findings, fix issues in Shopify, and re-run as needed.
- **Limits:** Audit runs and SEO operations count toward your plan limits (e.g. SEO AI ops per month). Limits are shown in the app and on the Billing page.
- **Data:** Audit inputs and results are stored in our database so you can view history and progress. They are deleted when you uninstall the app.

---

## How Data Deletion Works

- **When you uninstall:** Uninstalling the app triggers an automatic **full deletion** of all data we hold for your store (chats, customer profiles, settings, usage, files, etc.). This is done in response to Shopify's uninstall webhook and is permanent.
- **GDPR (customer/shop redaction):** We respond to Shopify's GDPR webhooks:
  - **Customer redaction:** We delete that customer's profile and all related chat sessions, messages, and attachments.
  - **Shop redaction:** We delete all data for that shop (same as uninstall).
- **No long-term retention after deletion:** We do not keep your data for marketing or training. One internal record for the uninstall/webhook event may be kept for operational integrity.

For more detail, see our [Privacy Policy](/resources/privacy-policy) and [FAQ](/resources/faq).

---

## Troubleshooting

### The widget does not appear on my store

- Confirm the **theme app extension** (or app block) for the chat widget is **enabled** and added to your theme (e.g. on the layout or pages where you want it).
- Check that the widget is **enabled** in the app (Chatbox / Live chat settings).
- Clear cache and test in an incognito window or another device.

### Chat replies are wrong or generic

- **Improve your knowledge base:** Add or import FAQs and policies (returns, shipping, contact) so the AI has accurate answers.
- **Check AI mode:** Ensure the mode (Smart Support, Sales Assistant, Autopilot) matches what you want; some features require Growth or Pro.

### I hit a "limit reached" or "quota exceeded" message

- This means you've reached a plan limit (e.g. AI tokens per day, copywriter generations, SEO operations). Check **Billing** or the usage section for current usage and limits.
- Limits reset at the start of the next period (e.g. next day or next month, depending on the feature). You can also upgrade to a higher plan for higher limits.

### Order tracking in the widget does not work

- The visitor must enter information we can use to look up the order (e.g. order number and email or phone, as configured). Ensure your store uses order numbers/emails that Shopify can resolve.
- Verify we have the **read_orders** (and if needed **read_fulfillments**) scope so we can fetch order status.

### Billing or subscription issues

- **Payment** is processed by **Shopify**. If you have a payment or invoice issue, check your Shopify admin and payment method.
- If the app shows the wrong plan or "inactive" after you paid, try refreshing the Billing page or reopening the app. If it persists, contact support with your shop domain and what you see; we will sync with Shopify's subscription state.

### I need to export my data before uninstalling

- Use the **Inbox** to view and manage conversations. For a bulk export of chat or other data, contact support; we will help where technically feasible. After uninstall, we delete your data and cannot provide exports.

### Contacting support

- Use **in-app help** when available, or the support channel (e.g. email or link) shown in the App Store listing. Include your **shop domain** and a short description of the issue so we can help quickly.
