"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { edition, plates, system } from "@/lib/lookbook";
import { cases } from "@/lib/work";

export function Folio() {
  const well = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const node = well.current;
    if (!node) return;
    const leaves = [...node.querySelectorAll<HTMLElement>("[data-leaf]")];
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const i = leaves.indexOf(visible.target as HTMLElement);
        if (i >= 0) setIndex(i);
      },
      { root: node, threshold: 0.55 },
    );
    leaves.forEach((leaf) => io.observe(leaf));
    return () => io.disconnect();
  }, []);

  return (
    <div className="pb-24">
      <section className="px-5 pb-12 pt-16 md:px-10 md:pt-24">
        <p className="text-[11px] uppercase tracking-[0.28em] text-brass">
          Edition {edition.no} · {edition.plates} plates
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[0.92] tracking-tight md:text-7xl">
          {edition.title}
        </h1>
        <p className="mt-6 max-w-md text-base leading-8 text-smoke">
          Forward this page. If the temperature is wrong, we are the wrong
          studio.
        </p>
        <dl className="mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
          {system.map(([name, copy]) => (
            <div key={name}>
              <dt className="text-[11px] uppercase tracking-[0.22em] text-brass">{name}</dt>
              <dd className="mt-2 text-sm leading-7 text-smoke">{copy}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="border-y border-brass/15">
        <div className="flex items-end justify-between px-5 py-4 md:px-10">
          <p className="text-[11px] uppercase tracking-[0.22em] text-brass">Plates</p>
          <p className="text-[11px] uppercase tracking-[0.22em] text-smoke">
            Swipe left in this frame
          </p>
        </div>
        <div className="relative">
          <div
            ref={well}
            tabIndex={0}
            className="folio flex h-[70dvh] min-h-[22rem] snap-x snap-mandatory flex-row overflow-x-auto overflow-y-hidden overscroll-x-contain md:h-[78dvh]"
            aria-label="Lookbook plates"
          >
            {plates.map((plate, i) => (
              <figure
                key={plate.src}
                data-leaf
                className="relative h-full w-screen max-w-none shrink-0 snap-start overflow-hidden bg-field"
              >
                <Image
                  src={plate.src}
                  alt={plate.caption}
                  fill
                  priority={i < 2}
                  sizes="100vw"
                  className={`object-cover ${plate.object}`}
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink via-ink/50 to-transparent px-5 pb-8 pt-16 md:px-10">
                  <p className="text-sm tracking-[0.04em] text-paper/90">{plate.caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="pointer-events-none absolute bottom-5 right-5 font-mono text-[11px] tracking-[0.22em] text-brass md:right-10">
            {String(index + 1).padStart(2, "0")} / {String(plates.length).padStart(2, "0")}
          </p>
        </div>
      </section>

      <section className="px-5 pt-16 md:px-10 md:pt-24">
        <p className="text-[11px] uppercase tracking-[0.28em] text-brass">Colophon</p>
        <p className="mt-6 max-w-lg font-display text-4xl tracking-tight md:text-6xl">
          Edition {edition.no}. Seven plates. One studio.
        </p>
        <ul className="mt-10 space-y-3">
          {cases.map((item) => (
            <li key={item.slug}>
              <Link href={`/work/${item.slug}`} className="text-paper hover:text-brass">
                {item.client}
                <span className="ml-3 text-[11px] uppercase tracking-[0.2em] text-smoke">
                  {item.kind}
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/contact"
          className="mt-12 inline-flex w-fit border border-brass/50 bg-brass px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-ink hover:bg-paper"
        >
          Start a conversation
        </Link>
      </section>
    </div>
  );
}
