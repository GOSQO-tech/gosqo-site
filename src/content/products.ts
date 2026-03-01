/**
 * Product catalog for Apps section. Used by /apps overview and product pages.
 */
export interface ProductCTA {
  label: string;
  href: string;
  primary?: boolean;
}

export interface Product {
  slug: string;
  name: string;
  type: "Shopify App" | "Web App";
  shortDescription: string;
  features: string[];
  ctas: ProductCTA[];
  /** Optional: link to resources index or product-specific resources */
  resourcesHref?: string;
}

export const products: Product[] = [
  {
    slug: "gosqo-ai-store-manager",
    name: "GOSQO AI Store Manager",
    type: "Shopify App",
    shortDescription:
      "AI live chat, unified inbox, and product content tools for Shopify merchants.",
    features: [
      "AI-powered live chat and unified inbox",
      "Product copywriter and SEO audit tools",
      "Order tracking and support playbooks",
      "Knowledge base and policy-driven replies",
    ],
    ctas: [
      { label: "View product", href: "/apps/gosqo-ai-store-manager", primary: true },
      { label: "Resources", href: "/apps/gosqo-ai-store-manager#resources", primary: false },
      { label: "Contact", href: "mailto:support@gosqo.com", primary: false },
    ],
    resourcesHref: "/apps/gosqo-ai-store-manager#resources",
  },
  {
    slug: "vikno",
    name: "VIKNO.APP",
    type: "Web App",
    shortDescription:
      "CRM for client records, services, scheduling, and bookkeeping.",
    features: [
      "Appointments and calendar",
      "Services and client management",
      "Finance and bookkeeping",
      "Small business and service companies",
    ],
    ctas: [
      { label: "View product", href: "/apps/vikno", primary: true },
      { label: "Request demo / Contact", href: "mailto:support@gosqo.com", primary: false },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
