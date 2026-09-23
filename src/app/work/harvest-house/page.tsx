import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getCase } from "@/lib/work";

const item = getCase("harvest-house")!;

export const metadata: Metadata = {
  title: item.client,
  description: item.lede,
};

const facts = [
  ["Land", "18 private acres, Temecula foothills"],
  ["House", "4 bedrooms, sleeps 12"],
  ["Cycle", "Hot tub, cold plunge, barrel sauna"],
  ["Book", "Direct reserve — hosts confirm"],
];

export default function HarvestHouseCase() {
  return (
    <article className="pb-28">
      <header className="relative min-h-[78vh] overflow-hidden bg-[#2A1F18]">
        <div className="settle-photo absolute inset-0">
          <Image
            src={item.cover}
            alt={item.plates[0].caption}
            fill
            priority
            sizes="100vw"
            className="object-cover object-[center_60%]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#2A1F18] via-[#2A1F18]/25 to-transparent" />
        <div className="relative flex min-h-[78vh] flex-col justify-end px-5 pb-10 pt-28 md:px-10 md:pb-14">
          <p className="reveal reveal-1 text-[11px] uppercase tracking-[0.22em] text-[#E8C9A0]">
            {item.kind} · {item.sector} · {item.year}
          </p>
          <h1 className="reveal reveal-2 mt-4 max-w-4xl font-display text-5xl leading-[0.92] tracking-tight text-[#F3E6D2] md:text-7xl">
            The Harvest House
          </h1>
          <p className="reveal reveal-3 mt-5 max-w-xl text-base leading-8 text-[#F3E6D2]/75 md:text-lg md:leading-9">
            {item.lede}
          </p>
        </div>
      </header>

      <section className="border-b border-brass/15 px-5 md:px-10">
        <dl className="grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map(([label, value]) => (
            <div key={label}>
              <dt className="text-[11px] uppercase tracking-[0.22em] text-brass">{label}</dt>
              <dd className="mt-2 text-sm leading-6 text-paper/85">{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="grid gap-12 px-5 py-16 md:grid-cols-12 md:px-10 md:py-24">
        <div className="md:col-span-5">
          <p className="text-[11px] uppercase tracking-[0.22em] text-brass">The brief</p>
          <h2 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">
            Stop looking like a listing.
          </h2>
        </div>
        <div className="space-y-10 md:col-span-7">
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.22em] text-brass">Problem</h3>
            <p className="mt-3 max-w-xl text-base leading-8 text-paper/85">{item.problem}</p>
          </div>
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.22em] text-brass">Direction</h3>
            <p className="mt-3 max-w-xl text-base leading-8 text-paper/85">{item.direction}</p>
          </div>
        </div>
      </section>

      <figure className="px-5 md:px-10">
        <div className="relative aspect-[16/10] overflow-hidden bg-field md:aspect-[21/9]">
          <Image
            src={item.plates[1].src}
            alt={item.plates[1].caption}
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-[1.4s] ease-out hover:scale-[1.03]"
          />
        </div>
        <figcaption className="mt-3 text-[11px] uppercase tracking-[0.2em] text-smoke">
          {item.plates[1].caption}
        </figcaption>
      </figure>

      <section className="px-5 py-16 md:px-10 md:py-24">
        <p className="text-[11px] uppercase tracking-[0.22em] text-brass">Three decisions</p>
        <ol className="mt-10 divide-y divide-brass/15 border-y border-brass/15">
          {item.decisions.map((decision, i) => (
            <li key={decision} className="grid gap-4 py-8 md:grid-cols-12 md:items-baseline">
              <span className="font-mono text-xs text-brass md:col-span-1">0{i + 1}</span>
              <p className="max-w-3xl text-lg leading-8 text-paper/90 md:col-span-11 md:text-xl md:leading-9">
                {decision}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-5 border border-brass/20 bg-[#1a1612] px-6 py-14 md:mx-10 md:px-14 md:py-20">
        <p className="text-[11px] uppercase tracking-[0.22em] text-brass">Result</p>
        <p className="mt-5 max-w-3xl font-display text-3xl leading-snug tracking-tight text-[#F3E6D2] md:text-5xl md:leading-[1.12]">
          {item.result}
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-8">
          <a
            href={item.href}
            className="inline-flex border border-[#C9894A]/60 bg-[#C9894A] px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-[#2A1F18] hover:bg-[#F3E6D2]"
          >
            Visit harvesthousestays.com
          </a>
          <Link
            href="/contact"
            className="text-[11px] uppercase tracking-[0.22em] text-brass hover:text-paper"
          >
            Commission something this specific →
          </Link>
        </div>
      </section>
    </article>
  );
}
