export type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  year: string;
  kind: "Commission" | "Study";
  title: string;
  lede: string;
  problem: string;
  direction: string;
  decisions: string[];
  result: string;
  cover: string;
  plates: { src: string; caption: string }[];
  palette: [string, string, string];
  href?: string;
};

export const cases: CaseStudy[] = [
  {
    slug: "harvest-house",
    client: "Harvest House Stays",
    sector: "Hospitality",
    year: "2026",
    kind: "Commission",
    title: "A hilltop house that books itself — without looking like an OTA.",
    lede: "Eighteen acres in the Temecula foothills. Slow mornings, firelit evenings, wellness woven through the stay. The site had to feel like arriving, not browsing.",
    problem:
      "Hospitality on the internet defaults to carousels, badge soup, and a booking widget fighting the photography. The land is better than most templates will ever say.",
    direction:
      "Treat the site as dusk on the terrace. One house, one horizon, rates in plain type. Direct reservation as a quiet close — not a sticky bar borrowed from an OTA.",
    decisions: [
      "Led with the hill and the fire, not a grid of amenities.",
      "Wrote the stay in the pace of the place — seasons, not slogans.",
      "Kept the reservation path short enough to finish at 11pm on a phone.",
    ],
    result:
      "The URL is the property. Guests arrive already in the temperature of the house.",
    cover: "/plates/harvest-dusk.jpg",
    plates: [
      { src: "/plates/harvest-dusk.jpg", caption: "Terrace at last light, Temecula foothills." },
      { src: "/plates/harvest-hearth.jpg", caption: "Hearth and the valley. Empty on purpose." },
    ],
    palette: ["#2A1F18", "#C9894A", "#F3E6D2"],
    href: "https://harvesthousestays.com",
  },
  {
    slug: "vale-stone",
    client: "Vale & Stone",
    sector: "Architecture",
    year: "2026",
    kind: "Study",
    title: "A practice site that reads like a monograph.",
    lede: "An architecture atelier selling $8–40M residences needed a site that could hold silence — and still book the first conversation.",
    problem:
      "Their previous site was a gallery of renders with a contact form. Every competitor looked the same. Principals were sending PDFs instead of the URL.",
    direction:
      "Treat the site as a bound volume. Paper field, engraved type, one photograph per chapter. Projects revealed as plates, not cards.",
    decisions: [
      "Killed the project grid. One plate, one thesis, one plan excerpt per study.",
      "Moved contact behind a written inquiry — fewer leads, better ones.",
      "Set motion to almost still. Luxury here is time, not animation.",
    ],
    result:
      "The URL replaces the PDF in new-business conversations. Inquiry quality changes because the room is quieter.",
    cover: "/plates/vale-pavilion.jpg",
    plates: [
      { src: "/plates/vale-pavilion.jpg", caption: "One chair. One volume. No project grid." },
      { src: "/plates/paper-ink.jpg", caption: "Paper, brass rule, ink — the material brief." },
    ],
    palette: ["#E7DFD0", "#1A1714", "#9A7B4F"],
  },
  {
    slug: "meridian-counsel",
    client: "Meridian Counsel",
    sector: "Law",
    year: "2026",
    kind: "Study",
    title: "Counsel that looks as exacting as the work.",
    lede: "A founder-facing firm for recap and M&A needed to stop looking like every other serif-on-navy shop.",
    problem:
      "The site said trusted advisors in stock language. Partners were winning on reputation and losing the first-click test to larger firms.",
    direction:
      "Build a dark editorial instrument. Narrow measure, numbered sections, brass rules. Proof as figures, not testimonials.",
    decisions: [
      "Replaced partner headshots as the hero with a single operational claim.",
      "Wrote the homepage as an argument, not a bio stack.",
      "Published matter types as a table — scannable in eight seconds.",
    ],
    result:
      "The site precedes the referral. Prospects arrive already oriented to how the firm works.",
    cover: "/plates/meridian-desk.jpg",
    plates: [
      { src: "/plates/meridian-desk.jpg", caption: "Cotton paper, brass rule. No skyline cliche." },
      { src: "/plates/paper-ink.jpg", caption: "The instrument, not the handshake." },
    ],
    palette: ["#11100E", "#D7C4A0", "#EDE6D9"],
  },
];

export function getCase(slug: string) {
  return cases.find((item) => item.slug === slug);
}
