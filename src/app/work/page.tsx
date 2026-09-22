import type { Metadata } from "next";
import Link from "next/link";
import { Plate } from "@/components/plate";
import { SectionLabel } from "@/components/section-label";
import { cases } from "@/lib/work";

export const metadata: Metadata = {
  title: "Work",
  description: "Commissions and atelier studies — hospitality, architecture, counsel.",
};

export default function WorkPage() {
  return (
    <div className="px-5 py-16 md:px-10 md:py-24">
      <SectionLabel index="02">Work</SectionLabel>
      <h1 className="mt-6 max-w-4xl font-display text-5xl tracking-tight md:text-7xl">
        Rooms you can enter.
      </h1>
      <p className="mt-6 max-w-xl text-base leading-8 text-smoke">
        One live commission. Two atelier studies, labeled as such. Each invents
        a visual world you could not buy off a marketplace.
      </p>
      <ul className="mt-16 space-y-24">
        {cases.map((item) => (
          <li key={item.slug}>
            <Link href={`/work/${item.slug}`} className="group block" data-cursor={item.client}>
              <Plate src={item.cover} alt={item.client} cursor={item.client} />
              <p className="mt-5 text-[11px] uppercase tracking-[0.22em] text-brass">
                {item.kind} · {item.sector} · {item.year}
              </p>
              <h2 className="mt-3 font-display text-4xl tracking-tight group-hover:text-brass md:text-6xl">
                {item.client}
              </h2>
              <p className="mt-3 max-w-2xl text-lg leading-8 text-paper/85">{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
