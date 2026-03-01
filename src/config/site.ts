/**
 * Site-wide config for legal entity, contact emails, and policy dates.
 * Used to replace placeholders in resource documents and across the site.
 */
export const siteConfig = {
  siteUrl: "https://gosqo.com",
  legalEntityName: "GOSQO",
  privacyEmail: "support@gosqo.com",
  securityEmail: "support@gosqo.com",
  supportEmail: "support@gosqo.com",
  policyLastUpdated: "2026-03-01",
} as const;

/** Header navigation: label and href */
export const navLinks = [
  { href: "/", label: "About" },
  { href: "/apps", label: "Apps" },
  { href: "/resources/security", label: "Security" },
  { href: "/resources", label: "Resources" },
  { href: "mailto:support@gosqo.com", label: "Contact" },
] as const;

/** Footer legal and resource links */
export const footerLinks = [
  { href: "/resources/privacy-policy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/resources/changelog", label: "Changelog" },
  { href: "/resources/security", label: "Security" },
  { href: "mailto:support@gosqo.com", label: "Contact" },
] as const;

export type SiteConfig = typeof siteConfig;
