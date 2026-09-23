export const edition = {
  no: "01",
  title: "The book we send",
  plates: 7,
} as const;

export const system = [
  ["Field", "Ink. The room is dark until a plate is opened."],
  ["Paper", "Cream. An object, not a light-mode invert."],
  ["Brass", "Jewelry. Rules, captions, one button."],
  ["Type", "Instrument Serif for display. Instrument Sans for the measure."],
  ["Motion", "Almost still. Honor reduced motion."],
] as const;

export const plates = [
  {
    src: "/plates/hero-letterpress.jpg",
    caption: "Studio object — letterpress A.",
    object: "object-[18%_58%]",
  },
  {
    src: "/plates/harvest-dusk.jpg",
    caption: "Harvest House — terrace at last light.",
    object: "object-center",
  },
  {
    src: "/plates/harvest-hearth.jpg",
    caption: "Harvest House — hearth and the valley.",
    object: "object-center",
  },
  {
    src: "/plates/vale-pavilion.jpg",
    caption: "Vale & Stone — one chair.",
    object: "object-center",
  },
  {
    src: "/plates/meridian-desk.jpg",
    caption: "Meridian — cotton paper, brass rule.",
    object: "object-center",
  },
  {
    src: "/plates/lumen-dusk.jpg",
    caption: "Study — last light.",
    object: "object-center",
  },
  {
    src: "/plates/paper-ink.jpg",
    caption: "Material — rag paper, brass, ink.",
    object: "object-center",
  },
] as const;
