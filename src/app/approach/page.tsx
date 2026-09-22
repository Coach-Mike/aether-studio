import type { Metadata } from "next";
import Link from "next/link";
import { SectionLabel } from "@/components/section-label";

export const metadata: Metadata = {
  title: "Approach",
  description: "How Aether commissions a flagship site — system first, then code.",
};

const phases = [
  ["Qualify", "Budget, decision-maker, deadline, why now."],
  ["Discovery", "Offer, audience, proof, competitors, constraints."],
  ["Art direction", "Visual system plus two homepage directions. Pick one."],
  ["Narrative", "Homepage story, page map, CTAs."],
  ["Build", "Next.js, assets, motion, forms."],
  ["Staging", "Preview URL. Critique against craft and conversion."],
  ["QA", "Design, accessibility, performance, SEO, mobile, forms."],
  ["Launch", "Domain, analytics, redirects, Search Console."],
];

export default function ApproachPage() {
  return (
    <div className="px-5 py-16 md:px-10 md:py-24">
      <SectionLabel index="03">Approach</SectionLabel>
      <h1 className="mt-6 max-w-4xl font-display text-5xl tracking-tight md:text-7xl">System first. Then the site.</h1>
      <p className="mt-8 max-w-2xl text-lg leading-8 text-smoke">
        AI is the engine room, not the brand. The process is proprietary: research, Grok Code, Grok Imagine, and a brutal design standard. The client never buys “an AI website.” They commission a flagship.
      </p>
      <section className="mt-20 grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <h2 className="text-[11px] uppercase tracking-[0.22em] text-brass">Visual lock</h2>
        </div>
        <ul className="space-y-4 text-base leading-8 text-paper/85 md:col-span-8">
          <li>One distinctive display face. One refined text face. No Inter-as-luxury.</li>
          <li>One dominant field. One accent used like jewelry. Paper and ink.</li>
          <li>One material world — here: rag paper, brass type, darkroom grain.</li>
          <li>Motion that can sit still. Reduced-motion is a first-class path.</li>
        </ul>
      </section>
      <ol className="mt-20 divide-y divide-brass/15 border-y border-brass/15">
        {phases.map(([name, copy], i) => (
          <li key={name} className="grid gap-3 py-6 md:grid-cols-12 md:items-baseline">
            <span className="font-mono text-xs text-brass md:col-span-1">0{i + 1}</span>
            <span className="font-display text-2xl md:col-span-3">{name}</span>
            <span className="text-sm leading-7 text-smoke md:col-span-8">{copy}</span>
          </li>
        ))}
      </ol>
      <p className="mt-16 max-w-2xl text-base leading-8 text-smoke">
        Stack default: Next.js 16, React 19, TypeScript, Tailwind 4. Server Components first. Client only where the interaction earns it. No WordPress. No Webflow export as the product.
      </p>
      <Link href="/engage" className="mt-8 inline-block text-[11px] uppercase tracking-[0.22em] text-brass hover:text-paper">See packages →</Link>
    </div>
  );
}
