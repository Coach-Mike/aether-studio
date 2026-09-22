export const site = {
  name: "Aether Studio",
  wordmark: "AETHER",
  legal: "Aether Studio",
  url: "https://aether.studio",
  tagline:
    "One-of-one digital flagships. Designed with Grok. Owned by you. Deployed from GitHub.",
  thesis:
    "A commissioned company site should feel like an object — ink, metal, paper — not a template wearing a logo.",
  location: "Los Angeles",
  email: "hello@aether.studio",
  github: "https://github.com/Coach-Mike/aether-studio",
  twitter: "https://x.com",
} as const;

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/approach", label: "Approach" },
  { href: "/engage", label: "Engage" },
  { href: "/contact", label: "Contact" },
] as const;

export const packages = [
  {
    name: "Origin",
    price: "$3,500–$6,000",
    blurb: "One cinematic page for a single offer. A weapon, not a brochure.",
    includes: [
      "Original visual system",
      "Homepage as a complete sales surface",
      "Contact / intake",
      "GitHub + deploy",
      "One revision round",
    ],
  },
  {
    name: "Signature Home",
    price: "$6,000–$12,000",
    blurb: "Homepage plus two or three inner pages. For companies that need a flagship before a sitemap.",
    includes: [
      "Art direction + narrative",
      "3–4 pages at full craft",
      "Motion language",
      "SEO foundation",
      "Two revision rounds",
    ],
  },
  {
    name: "Flagship",
    price: "$12,000–$28,000",
    featured: true,
    blurb: "The commissioned site. Editorial, cinematic, owned. Built to convert like a sales asset.",
    includes: [
      "5–10 pages, original system",
      "Imagine art direction",
      "Lead flow + analytics",
      "GitHub + Vercel or Cloudflare",
      "Two revision rounds + 30 days polish",
    ],
  },
] as const;
