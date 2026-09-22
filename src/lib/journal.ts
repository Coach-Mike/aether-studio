export type Note = {
  slug: string;
  title: string;
  dek: string;
  date: string;
  body: string[];
};

export const notes: Note[] = [
  {
    slug: "expensive-in-eight-seconds",
    title: "Why it looks expensive or cheap in eight seconds",
    dek: "Nobody reads your positioning paragraph first. They read the temperature.",
    date: "2026-09-22",
    body: [
      "A first-time visitor decides if you are serious before they finish a sentence. They read margin, type, the honesty of a photograph, and whether anything is fidgeting for attention.",
      "Cheap is not a missing animation. Cheap is a system that could wear any other logo. Stock smiles. Three identical cards. A hero that announces the stack instead of the offer.",
      "Expensive is restraint with one obsessive choice. A plate that holds empty space. Type that is larger than it should be. Motion that can sit still. Proof placed where a template would put a carousel.",
      "If you cannot name the material world of your site — paper, stone, metal, dusk — it does not have one. And the visitor can tell.",
    ],
  },
  {
    slug: "ownership-without-a-landlord",
    title: "Ownership without a landlord",
    dek: "The site is yours. Domain, files, hosting account. We do not keep you on a platform we control.",
    date: "2026-09-22",
    body: [
      "Most premium web shops still rent you the house. The theme is theirs. The CMS is theirs. Leaving means starting over.",
      "We build the thing, then hand you the keys. At launch you hold the domain, the files, and the deploy account. Hosting is a setting, not a marriage.",
      "That is the partner position. We stay because the work is good and the relationship holds — not because you cannot leave.",
    ],
  },
  {
    slug: "one-plate-not-a-grid",
    title: "One plate, not a card grid",
    dek: "If every project is a thumbnail, none of them are a room.",
    date: "2026-09-22",
    body: [
      "The internet trained companies to display work as a mosaic. Equal tiles. Equal captions. Equal forgettability.",
      "A commission should be entered. One photograph that could hang. A sentence that could only belong to that client. Then another room.",
      "This is slower to produce. It is the entire point. If the work can be scanned like a catalog, it will be priced like one.",
    ],
  },
];

export function getNote(slug: string) {
  return notes.find((item) => item.slug === slug);
}
