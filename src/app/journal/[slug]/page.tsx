import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNote, notes } from "@/lib/journal";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) return { title: "Journal" };
  return { title: note.title, description: note.dek };
}

export default async function NotePage({ params }: Props) {
  const { slug } = await params;
  const note = getNote(slug);
  if (!note) notFound();

  return (
    <article className="px-5 py-16 md:px-10 md:py-24">
      <p className="text-[11px] uppercase tracking-[0.22em] text-brass">{note.date}</p>
      <h1 className="mt-4 max-w-4xl font-display text-5xl tracking-tight md:text-6xl">
        {note.title}
      </h1>
      <p className="mt-6 max-w-2xl text-xl leading-9 text-smoke">{note.dek}</p>
      <div className="mt-14 max-w-2xl space-y-6">
        {note.body.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="text-base leading-8 text-paper/85">
            {paragraph}
          </p>
        ))}
      </div>
      <Link
        href="/contact"
        className="mt-16 inline-block text-[11px] uppercase tracking-[0.22em] text-brass hover:text-paper"
      >
        Commission a flagship →
      </Link>
    </article>
  );
}
