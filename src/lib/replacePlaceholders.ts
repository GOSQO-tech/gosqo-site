import type { SiteConfig } from "../config/site";

/**
 * Replaces document placeholders with values from site config.
 * Used when rendering resource markdown for production.
 */
export function replacePlaceholders(
  content: string,
  config: SiteConfig,
  options?: { usePrivacyEmail?: boolean; useSecurityEmail?: boolean }
): string {
  const privacyEmail = options?.usePrivacyEmail !== false ? config.privacyEmail : config.supportEmail;
  const securityEmail = options?.useSecurityEmail !== false ? config.securityEmail : config.supportEmail;

  return content
    .replace(/\[Insert date\]/gi, config.policyLastUpdated)
    .replace(
      /\[Insert email, e\.g\. privacy@yourcompany\.com\]/gi,
      privacyEmail
    )
    .replace(
      /\[Insert email, e\.g\. security@yourcompany\.com or privacy@yourcompany\.com\]/gi,
      securityEmail
    )
    .replace(
      /\[Insert email, e\.g\. privacy@yourcompany\.com or legal@yourcompany\.com\]/gi,
      privacyEmail
    )
    .replace(/\[Insert email, e\.g\. \.\.\.\]/gi, privacyEmail)
    .replace(/\[Insert email, e\.g\. [^\]]+\]/gi, privacyEmail)
    .replace(/\*\*\[Insert email[^\]]*\]\*\*/g, `**${privacyEmail}**`);
}
