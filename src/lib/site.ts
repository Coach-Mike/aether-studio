export const site = {
  name: "Aether Studio",
  wordmark: "AETHER",
  legal: "Aether Studio",
  url: "https://aether.studio",
  tagline: "Custom. Premium. You own it. We invent it, ship it, and stay as partner.",
  promise: "One-of-one company sites. Commissioned, not templated.",
  thesis:
    "A commissioned company site should feel like an object — ink, metal, paper — not a template wearing a logo.",
  location: "Los Angeles",
  email: "hello@aether.studio",
} as const;

export const nav = [
  { href: "/work", label: "Work" },
  { href: "/approach", label: "Approach" },
  { href: "/lookbook", label: "Lookbook" },
  { href: "/engage", label: "Engage" },
] as const;

export const partner = [
  {
    name: "Discover",
    copy: "What you sell, to whom, at what price. The three sites you refuse to look like.",
  },
  {
    name: "Invent",
    copy: "A visual world that cannot be swapped onto another logo. Then the story that carries it.",
  },
  {
    name: "Ship",
    copy: "The site goes live on infrastructure you control. Domain, files, hosting — in your name.",
  },
  {
    name: "Stay",
    copy: "A partner after launch. Pages, experiments, care. Not a vendor who vanishes on invoice three.",
  },
] as const;

export const packages = [
  {
    name: "Origin",
    price: "$3,500–$6,000",
    blurb: "One cinematic page for a single offer. A weapon, not a brochure.",
    includes: [
      "Original visual system",
      "Homepage as a complete sales surface",
      "Inquiry path",
      "You own the site at launch",
      "One revision round",
    ],
  },
  {
    name: "Signature Home",
    price: "$6,000–$12,000",
    blurb: "Homepage plus two or three inner pages. The house, not the pamphlet.",
    includes: [
      "Art direction + narrative",
      "3–4 pages at full craft",
      "Motion language",
      "Search foundation",
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
      "Photography direction + plates",
      "Lead flow",
      "Launch on accounts you own",
      "Two revision rounds + 30 days polish",
    ],
  },
] as const;

export const partnerRetainer = {
  name: "Partner",
  price: "$1,500–$4,000 / month",
  blurb:
    "We stay. New pages, experiments, content, care. For companies already living in the system.",
};
