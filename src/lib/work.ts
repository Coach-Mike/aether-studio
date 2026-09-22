export type CaseStudy = {
  slug: string;
  client: string;
  sector: string;
  year: string;
  title: string;
  lede: string;
  problem: string;
  direction: string;
  decisions: string[];
  result: string;
  palette: [string, string, string];
};

export const cases: CaseStudy[] = [
  {
    slug: "vale-stone",
    client: "Vale & Stone",
    sector: "Architecture",
    year: "2026",
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
      "Inquiry quality changed in the first month. The URL replaced the PDF in new-business conversations.",
    palette: ["#E7DFD0", "#1A1714", "#9A7B4F"],
  },
  {
    slug: "meridian-counsel",
    client: "Meridian Counsel",
    sector: "Law",
    year: "2026",
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
      "The site now precedes the referral. Prospects arrive already oriented to how the firm works.",
    palette: ["#11100E", "#D7C4A0", "#EDE6D9"],
  },
  {
    slug: "lumen-house",
    client: "Lumen House",
    sector: "Hospitality",
    year: "2026",
    title: "A hotel site with the pacing of a film still.",
    lede: "An independent house in the desert needed bookings without looking like an OTA template in linen.",
    problem:
      "Stock hospitality language, carousel rooms, and a booking widget fighting the photography. The building is better than the internet said it was.",
    direction:
      "One long dusk sequence. Rooms as chapters. Booking as a quiet close, not a sticky bar.",
    decisions: [
      "Commissioned stills that hold empty rooms — no staged smiles.",
      "Wrote rates and seasons in plain type, not badges.",
      "Kept WebGL off. Performance is the luxury on mobile at 11pm.",
    ],
    result:
      "Direct bookings rose after launch. Guests mentioned the site in reviews — rare, and the point.",
    palette: ["#2A1F18", "#C9894A", "#F3E6D2"],
  },
];

export function getCase(slug: string) {
  return cases.find((item) => item.slug === slug);
}
