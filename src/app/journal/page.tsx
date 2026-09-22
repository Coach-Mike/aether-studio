import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/section-label";
import { notes } from "@/lib/journal";

export const metadata: Metadata = {
  title: "Journal",
  description: "Short notes on taste, ownership, and how work should be shown.",
};

export default function JournalPage() {
  return (
    <div className="px-5 py-16 md:px-10 md:py-24">
      <SectionLabel index="07">Journal</SectionLabel>
      <h1 className="mt-6 max-w-3xl font-display text-5xl tracking-tight md:text-7xl">
        Three notes.
      </h1>
      <p className="mt-6 max-w-xl text-base leading-8 text-smoke">
        Not a blog. The arguments we would rather publish than bury in a sales deck.
      </p>
      <ul className="mt-16 divide-y divide-brass/15 border-y border-brass/15">
        {notes.map((note) => (
          <li key={note.slug} className="py-10">
            <p className="text-[11px] uppercase tracking-[0.22em] text-brass">{note.date}</p>
            <Link href={`/journal/${note.slug}`} className="mt-3 block">
              <h2 className="font-display text-3xl tracking-tight hover:text-brass md:text-4xl">
                {note.title}
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-8 text-smoke">{note.dek}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
