import Link from "next/link";
import { SectionLabel } from "@/components/section-label";
import { packages, site } from "@/lib/site";
import { cases } from "@/lib/work";

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden px-5 pb-24 pt-16 md:px-10 md:pb-36 md:pt-24">
        <p className="reveal text-[11px] uppercase tracking-[0.32em] text-brass">
          {site.location} · Commissioned sites
        </p>
        <h1 className="reveal mt-8 max-w-5xl font-display text-[clamp(3.4rem,12vw,9.5rem)] leading-[0.86] tracking-[-0.03em]">
          Sites that
          <br />
          feel commissioned.
        </h1>
        <p className="reveal mt-10 max-w-xl text-lg leading-8 text-smoke" style={{ animationDelay: "120ms" }}>
          {site.tagline}
        </p>
        <div className="reveal mt-12 flex flex-wrap items-center gap-8" style={{ animationDelay: "200ms" }}>
          <Link href="/contact" className="inline-flex items-center border border-brass/50 bg-brass px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-ink transition-colors hover:bg-paper">
            Start a brief
          </Link>
          <Link href="/work" className="text-[11px] uppercase tracking-[0.22em] text-paper/80 hover:text-brass">
            Selected work →
          </Link>
        </div>
      </section>
      <div className="hairline" />
      <section className="grid gap-10 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28">
        <div className="md:col-span-4">
          <SectionLabel index="01">Belief</SectionLabel>
        </div>
        <div className="md:col-span-8">
          <p className="max-w-3xl font-display text-3xl leading-snug tracking-tight md:text-5xl md:leading-[1.15]">
            After fifteen seconds a first-time visitor should believe you take this as seriously as the thing you sell.
          </p>
          <p className="mt-8 max-w-2xl text-base leading-8 text-smoke">
            {site.thesis} We do not sell five-page brochure sites, WordPress themes, or vibe-coded landing pages. We ship flagships you own — in GitHub — that convert like sales assets.
          </p>
        </div>
      </section>
      <section className="border-y border-brass/15">
        <div className="px-5 py-16 md:px-10">
          <SectionLabel index="02">Selected work</SectionLabel>
        </div>
        <ul>
          {cases.map((item, i) => (
            <li key={item.slug} className="border-t border-brass/15">
              <Link href={`/work/${item.slug}`} className="group grid gap-6 px-5 py-10 md:grid-cols-12 md:px-10 md:py-14">
                <span className="font-mono text-xs text-smoke md:col-span-1">0{i + 1}</span>
                <span className="md:col-span-4">
                  <span className="block font-display text-3xl tracking-tight group-hover:text-brass">{item.client}</span>
                  <span className="mt-2 block text-[11px] uppercase tracking-[0.2em] text-smoke">{item.sector} · {item.year}</span>
                </span>
                <span className="max-w-xl text-sm leading-7 text-smoke md:col-span-6 md:text-base md:leading-8">{item.title}</span>
                <span className="hidden self-center justify-self-end text-brass md:col-span-1 md:block">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="px-5 py-20 md:px-10 md:py-28">
        <SectionLabel index="03">Offer</SectionLabel>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {packages.map((item) => (
            <article key={item.name} className={`plate border p-8 ${"featured" in item && item.featured ? "border-brass/50" : "border-brass/15"}`}>
              <p className="text-[11px] uppercase tracking-[0.22em] text-brass">{item.name}</p>
              <p className="mt-4 font-display text-3xl">{item.price}</p>
              <p className="mt-4 text-sm leading-7 text-smoke">{item.blurb}</p>
              <ul className="mt-8 space-y-2 text-sm text-paper/80">
                {item.includes.map((line) => (
                  <li key={line} className="flex gap-3"><span className="text-brass">—</span>{line}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-8 text-sm text-smoke">Payment default: 50% to start, 40% at staging, 10% on launch. North America premium is the frame.</p>
      </section>
      <section className="border-t border-brass/15 px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionLabel index="04">Ownership</SectionLabel>
          </div>
          <div className="md:col-span-8 max-w-2xl">
            <h2 className="font-display text-4xl tracking-tight md:text-5xl">You own the repo. Hosting is a setting.</h2>
            <p className="mt-6 text-base leading-8 text-smoke">
              Every commission lives in GitHub. Preview deploys on every push. Production on main. Vercel Pro when the budget allows — Cloudflare Workers with OpenNext when it does not. At handoff you hold the domain, the repository, and the deploy account.
            </p>
            <Link href="/approach" className="mt-8 inline-block text-[11px] uppercase tracking-[0.22em] text-brass hover:text-paper">Read the approach →</Link>
          </div>
        </div>
      </section>
      <section className="border-t border-brass/15 px-5 py-24 md:px-10">
        <p className="font-display text-4xl leading-tight tracking-tight md:text-6xl">
          If the site could swap logos with another<br className="hidden md:block" /> and still work, we failed.
        </p>
        <Link href="/contact" className="mt-12 inline-flex border border-brass/50 px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-brass hover:bg-brass hover:text-ink">
          Commission a flagship
        </Link>
      </section>
    </div>
  );
}
