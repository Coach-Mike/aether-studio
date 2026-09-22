import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/section-label";
import { packages, partnerRetainer } from "@/lib/site";

export const metadata: Metadata = {
  title: "Engage",
  description: "Origin, Signature Home, Flagship, and Partner.",
};

export default function EngagePage() {
  return (
    <div className="px-5 py-16 md:px-10 md:py-24">
      <SectionLabel index="04">Engage</SectionLabel>
      <h1 className="mt-6 max-w-3xl font-display text-5xl tracking-tight md:text-7xl">
        Choose the weight of the commission.
      </h1>
      <p className="mt-6 max-w-xl text-base leading-8 text-smoke">
        If the budget is under roughly $3,000 for a unique high-end site, we
        either sell Origin honestly or decline. We do not race the bottom.
      </p>
      <div className="mt-16 grid gap-4 lg:grid-cols-3">
        {packages.map((item) => (
          <article
            key={item.name}
            className={`border p-8 ${
              "featured" in item && item.featured ? "border-brass/50 plate" : "border-brass/15"
            }`}
          >
            <p className="text-[11px] uppercase tracking-[0.22em] text-brass">{item.name}</p>
            <p className="mt-4 font-display text-3xl">{item.price}</p>
            <p className="mt-4 text-sm leading-7 text-smoke">{item.blurb}</p>
            <ul className="mt-8 space-y-2 text-sm text-paper/80">
              {item.includes.map((line) => (
                <li key={line}>— {line}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <section className="mt-16 max-w-2xl border-t border-brass/15 pt-12">
        <h2 className="font-display text-3xl">{partnerRetainer.name}</h2>
        <p className="mt-4 text-base leading-8 text-smoke">
          {partnerRetainer.price}. {partnerRetainer.blurb}
        </p>
        <Link
          href="/contact"
          className="mt-8 inline-flex border border-brass/50 bg-brass px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-ink hover:bg-paper"
        >
          Request a date
        </Link>
      </section>
    </div>
  );
}
