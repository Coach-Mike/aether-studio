import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
    <article className="px-5 py-16 md:px-10 md:py-24">
      <p className="text-[11px] uppercase tracking-[0.22em] text-brass">{item.sector} · {item.year}</p>
      <h1 className="mt-4 max-w-4xl font-display text-5xl tracking-tight md:text-7xl">{item.client}</h1>
      <p className="mt-6 max-w-2xl text-xl leading-9 text-smoke">{item.lede}</p>
      <div
        className="mt-14 min-h-[280px] border border-brass/15 md:min-h-[420px]"
        style={{ background: `linear-gradient(135deg, ${item.palette[0]}, ${item.palette[1]} 60%, ${item.palette[2]})` }}
        aria-hidden
      />
      <div className="mt-16 grid gap-16 md:grid-cols-12">
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
      <section className="mt-16 border-t border-brass/15 pt-12">
        <h2 className="text-[11px] uppercase tracking-[0.22em] text-brass">Result</h2>
        <p className="mt-4 max-w-3xl font-display text-3xl leading-snug">{item.result}</p>
        <Link href="/contact" className="mt-10 inline-block text-[11px] uppercase tracking-[0.22em] text-brass hover:text-paper">
          Commission something this specific →
        </Link>
      </section>
    </article>
  );
}
