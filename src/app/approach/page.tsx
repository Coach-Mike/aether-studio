import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Approach",
  description: "How Aether commissions a flagship — discover, invent, ship, stay.",
};

const phases = [
  ["Discover", "Offer, audience, proof, the sites they love and the ones they refuse."],
  ["Invent", "Visual system plus two homepage directions. Pick one. Then the story."],
  ["Ship", "Build, stage, critique, launch — on accounts the client owns."],
  ["Stay", "Partner after the URL is live. Pages, experiments, care."],
];

export default function ApproachPage() {
  return (
    <div className="px-5 py-16 md:px-10 md:py-24">
      <p className="flex items-center gap-3 text-[11px] uppercase tracking-[0.26em] text-brass-dim">
        <span className="tabular-nums">03</span>
        <span className="h-px w-8 bg-brass/50" aria-hidden />
        Approach
      </p>
      <h1 className="mt-6 max-w-4xl font-display text-5xl tracking-tight text-ink md:text-7xl">
        System first. Then the site.
      </h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-ink/75">
        The client never buys a toolkit. They commission a flagship. Process is
        proprietary. The public promise is simpler: we invent it, we ship it,
        you own it, we stay.
      </p>

      <div className="relative mt-16 aspect-[16/7] overflow-hidden bg-paper-2">
        <Image
          src="/plates/paper-ink.jpg"
          alt="Rag paper, brass rule, a drop of ink"
          fill
          className="object-cover object-[12%_center]"
          sizes="100vw"
        />
      </div>
      <p className="mt-3 text-[11px] uppercase tracking-[0.2em] text-ink/55">
        Material brief — paper, brass, ink.
      </p>

      <ol className="mt-20 divide-y divide-ink/15 border-y border-ink/15">
        {phases.map(([name, copy], i) => (
          <li key={name} className="grid gap-3 py-7 md:grid-cols-12 md:items-baseline">
            <span className="font-mono text-xs text-brass-dim md:col-span-1">0{i + 1}</span>
            <span className="font-display text-2xl text-ink md:col-span-3">{name}</span>
            <span className="text-sm leading-7 text-ink/75 md:col-span-8">{copy}</span>
          </li>
        ))}
      </ol>

      <p className="mt-16 max-w-2xl text-base leading-8 text-ink/75">
        We do not sell templates or page builders. If two sites could swap logos
        and still work, we failed.
      </p>
      <Link
        href="/engage"
        className="mt-8 inline-block text-[11px] uppercase tracking-[0.22em] text-brass-dim hover:text-ink"
      >
        See packages →
      </Link>
    </div>
  );
}
