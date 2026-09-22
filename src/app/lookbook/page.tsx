import type { Metadata } from "next";
import Link from "next/link";
import { Plate } from "@/components/plate";
import { SectionLabel } from "@/components/section-label";
import { cases } from "@/lib/work";

export const metadata: Metadata = {
  title: "Lookbook",
  description: "Plates and the visual system — the artifact we send before a call.",
};

const system = [
  ["Field", "Ink #0C0B09. The room is dark until a plate is opened."],
  ["Paper", "Cream #EDE6D9. Used as an object, not a light-mode invert."],
  ["Brass", "#C4A574. Jewelry. Rules, captions, one button."],
  ["Type", "Instrument Serif for display. Instrument Sans for the measure."],
  ["Motion", "Almost still. One lagged brass rule. Honor reduced motion."],
];

const plates = [
  { src: "/plates/hero-letterpress.jpg", caption: "Studio object — letterpress A." },
  { src: "/plates/harvest-dusk.jpg", caption: "Harvest House — terrace at last light." },
  { src: "/plates/harvest-hearth.jpg", caption: "Harvest House — hearth and valley." },
  { src: "/plates/vale-pavilion.jpg", caption: "Vale & Stone study — one chair." },
  { src: "/plates/meridian-desk.jpg", caption: "Meridian study — cotton paper." },
  { src: "/plates/lumen-dusk.jpg", caption: "Hospitality study — dusk house." },
  { src: "/plates/paper-ink.jpg", caption: "Material — rag paper, brass, ink." },
];

export default function LookbookPage() {
  return (
    <div className="px-5 py-16 md:px-10 md:py-24">
      <SectionLabel index="06">Lookbook</SectionLabel>
      <h1 className="mt-6 max-w-4xl font-display text-5xl tracking-tight md:text-7xl">
        The book we send.
      </h1>
      <p className="mt-6 max-w-xl text-base leading-8 text-smoke">
        Stills and the locked system. Forward this page. If the temperature is
        wrong, we are the wrong studio.
      </p>
      <section className="mt-16 grid gap-4 border-y border-brass/15 py-10 md:grid-cols-2">
        {system.map(([name, copy]) => (
          <div key={name} className="py-4">
            <p className="text-[11px] uppercase tracking-[0.22em] text-brass">{name}</p>
            <p className="mt-2 text-sm leading-7 text-smoke">{copy}</p>
          </div>
        ))}
      </section>
      <ul className="mt-16 space-y-16">
        {plates.map((plate) => (
          <li key={plate.src}>
            <Plate src={plate.src} alt={plate.caption} caption={plate.caption} />
          </li>
        ))}
      </ul>
      <section className="mt-20 border-t border-brass/15 pt-12">
        <p className="text-[11px] uppercase tracking-[0.22em] text-brass">On the wall</p>
        <ul className="mt-6 space-y-3">
          {cases.map((item) => (
            <li key={item.slug}>
              <Link href={`/work/${item.slug}`} className="text-paper hover:text-brass">
                {item.client}
                <span className="ml-3 text-[11px] uppercase tracking-[0.2em] text-smoke">{item.kind}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="mt-10 inline-flex border border-brass/50 bg-brass px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-ink hover:bg-paper"
        >
          Start a conversation
        </Link>
      </section>
    </div>
  );
}
