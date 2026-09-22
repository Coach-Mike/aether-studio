import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/section-label";
import { cases } from "@/lib/work";

export const metadata: Metadata = {
  title: "Work",
  description: "Selected commissions — architecture, counsel, hospitality.",
};

export default function WorkPage() {
  return (
    <div className="px-5 py-16 md:px-10 md:py-24">
      <SectionLabel index="02">Work</SectionLabel>
      <h1 className="mt-6 max-w-3xl font-display text-5xl tracking-tight md:text-7xl">Three rooms. No interchangeable logos.</h1>
      <p className="mt-6 max-w-xl text-base leading-8 text-smoke">
        Early studies used to set the studio standard. Each one invents a visual world the client could not buy off a marketplace.
      </p>
      <ul className="mt-16 space-y-16">
        {cases.map((item) => (
          <li key={item.slug}>
            <Link href={`/work/${item.slug}`} className="group block">
              <div
                className="plate flex min-h-[240px] items-end border border-brass/15 p-8 md:min-h-[320px] md:p-12"
                style={{ background: `linear-gradient(160deg, ${item.palette[0]}22, #0c0b09 55%), linear-gradient(180deg,#1a1714,#0c0b09)` }}
              >
                <p className="font-display text-4xl tracking-tight text-paper group-hover:text-brass md:text-6xl">{item.client}</p>
              </div>
              <p className="mt-4 text-[11px] uppercase tracking-[0.22em] text-brass">{item.sector} · {item.year}</p>
              <p className="mt-2 max-w-2xl text-lg text-paper/90">{item.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
