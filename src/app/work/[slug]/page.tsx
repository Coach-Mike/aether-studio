import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Plate } from "@/components/plate";
import { cases, getCase } from "@/lib/work";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) return { title: "Work" };
  return { title: item.client, description: item.lede };
}

export default async function CasePage({ params }: Props) {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) notFound();

  return (
    <article className="pb-24">
      <header className="px-5 pt-16 md:px-10 md:pt-24">
        <p className="text-[11px] uppercase tracking-[0.22em] text-brass">
          {item.kind} · {item.sector} · {item.year}
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl tracking-tight md:text-7xl">
          {item.client}
        </h1>
        <p className="mt-6 max-w-2xl text-xl leading-9 text-smoke">{item.lede}</p>
      </header>
      <div className="mt-12 px-5 md:px-10">
        <Plate src={item.plates[0].src} alt={item.plates[0].caption} caption={item.plates[0].caption} priority cursor={item.client} />
      </div>
      <div className="mt-16 grid gap-16 px-5 md:grid-cols-12 md:px-10">
        <section className="md:col-span-7">
          <h2 className="text-[11px] uppercase tracking-[0.22em] text-brass">Problem</h2>
          <p className="mt-4 text-base leading-8 text-paper/85">{item.problem}</p>
          <h2 className="mt-12 text-[11px] uppercase tracking-[0.22em] text-brass">Direction</h2>
          <p className="mt-4 text-base leading-8 text-paper/85">{item.direction}</p>
        </section>
        <section className="md:col-span-5">
          <h2 className="text-[11px] uppercase tracking-[0.22em] text-brass">Three decisions</h2>
          <ol className="mt-4 space-y-5">
            {item.decisions.map((decision, i) => (
              <li key={decision} className="flex gap-4 text-sm leading-7 text-smoke">
                <span className="font-mono text-brass">0{i + 1}</span>
                {decision}
              </li>
            ))}
          </ol>
        </section>
      </div>
      {item.plates[1] ? (
        <div className="mt-16 px-5 md:px-10">
          <Plate src={item.plates[1].src} alt={item.plates[1].caption} caption={item.plates[1].caption} cursor={item.client} />
        </div>
      ) : null}
      <section className="mt-16 border-t border-brass/15 px-5 pt-12 md:px-10">
        <h2 className="text-[11px] uppercase tracking-[0.22em] text-brass">Result</h2>
        <p className="mt-4 max-w-3xl font-display text-3xl leading-snug">{item.result}</p>
        <div className="mt-10 flex flex-wrap gap-8">
          {item.href ? (
            <a href={item.href} className="text-[11px] uppercase tracking-[0.22em] text-brass hover:text-paper">
              Visit the live site →
            </a>
          ) : null}
          <Link href="/contact" className="text-[11px] uppercase tracking-[0.22em] text-brass hover:text-paper">
            Commission something this specific →
          </Link>
        </div>
      </section>
    </article>
  );
}
