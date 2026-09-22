import Link from "next/link";
import { Plate } from "@/components/plate";
import { SectionLabel } from "@/components/section-label";
import { packages, partner, partnerRetainer, site } from "@/lib/site";
import { cases } from "@/lib/work";

export default function HomePage() {
  return (
    <div>
      <section
        className="relative min-h-[92vh] overflow-hidden bg-paper text-ink"
        data-cursor="Commissioned"
      >
        <div className="absolute inset-0">
          <Plate
            src="/plates/hero-letterpress.jpg"
            alt="Brass letterpress A on rag paper"
            priority
            className="h-full [&_div]:aspect-auto [&_div]:h-full"
          />
        </div>
        <div className="relative z-10 flex min-h-[92vh] items-end px-5 pb-16 pt-28 md:items-center md:justify-end md:px-12 md:pb-24">
          <div className="max-w-xl md:text-right">
            <p className="text-[11px] uppercase tracking-[0.32em] text-brass-dim">
              {site.location} · Commissioned sites
            </p>
            <h1 className="mt-6 font-display text-[clamp(3.2rem,8vw,6.4rem)] leading-[0.9] tracking-[-0.03em]">
              Custom.
              <br />
              Premium.
              <br />
              Yours.
            </h1>
            <p className="mt-6 text-base leading-8 text-ink/70 md:ml-auto md:max-w-sm">
              {site.tagline}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-8 md:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center border border-ink/20 bg-ink px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-paper transition-colors hover:bg-brass hover:text-ink"
              >
                Start a conversation
              </Link>
              <Link href="/work" className="text-[11px] uppercase tracking-[0.22em] text-ink/70 hover:text-ink">
                See the work →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-10 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28">
        <div className="md:col-span-4">
          <SectionLabel index="01">Belief</SectionLabel>
        </div>
        <div className="md:col-span-8">
          <p className="max-w-3xl font-display text-3xl leading-snug tracking-tight md:text-5xl md:leading-[1.12]">
            After fifteen seconds a first-time visitor should believe you take
            this as seriously as the thing you sell.
          </p>
          <p className="mt-8 max-w-xl text-base leading-8 text-smoke">
            {site.thesis} We do not sell brochure sites or page builders. We
            invent the object, ship it in your name, and remain as partner.
          </p>
        </div>
      </section>

      <section className="border-y border-brass/15">
        <div className="flex items-end justify-between px-5 py-12 md:px-10">
          <SectionLabel index="02">Selected work</SectionLabel>
          <Link href="/work" className="text-[11px] uppercase tracking-[0.22em] text-brass hover:text-paper">
            All plates →
          </Link>
        </div>
        <ul>
          {cases.map((item) => (
            <li key={item.slug} className="border-t border-brass/15">
              <Link
                href={`/work/${item.slug}`}
                className="group grid gap-8 px-5 py-10 md:grid-cols-12 md:px-10 md:py-14"
                data-cursor={item.client}
              >
                <div className="md:col-span-7">
                  <Plate src={item.cover} alt={item.client} className="[&_div]:aspect-[16/10]" cursor={item.client} />
                </div>
                <div className="flex flex-col justify-end md:col-span-5 md:pb-2">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-brass">
                    {item.kind} · {item.sector} · {item.year}
                  </p>
                  <h2 className="mt-4 font-display text-4xl tracking-tight group-hover:text-brass md:text-5xl">
                    {item.client}
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-7 text-smoke md:text-base md:leading-8">
                    {item.title}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="px-5 py-20 md:px-10 md:py-28">
        <SectionLabel index="03">How we partner</SectionLabel>
        <ol className="mt-14 divide-y divide-brass/15 border-y border-brass/15">
          {partner.map((phase, i) => (
            <li key={phase.name} className="grid gap-3 py-8 md:grid-cols-12 md:items-baseline">
              <span className="font-mono text-xs text-brass md:col-span-1">0{i + 1}</span>
              <span className="font-display text-3xl md:col-span-3">{phase.name}</span>
              <span className="text-sm leading-7 text-smoke md:col-span-8 md:text-base md:leading-8">{phase.copy}</span>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-brass/15 px-5 py-20 md:px-10 md:py-28">
        <SectionLabel index="04">Offer</SectionLabel>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {packages.map((item) => (
            <article
              key={item.name}
              className={`plate border p-8 ${
                "featured" in item && item.featured ? "border-brass/50" : "border-brass/15"
              }`}
            >
              <p className="text-[11px] uppercase tracking-[0.22em] text-brass">{item.name}</p>
              <p className="mt-4 font-display text-3xl">{item.price}</p>
              <p className="mt-4 text-sm leading-7 text-smoke">{item.blurb}</p>
              <ul className="mt-8 space-y-2 text-sm text-paper/80">
                {item.includes.map((line) => (
                  <li key={line} className="flex gap-3">
                    <span className="text-brass">—</span>
                    {line}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-2xl text-sm leading-7 text-smoke">
          {partnerRetainer.name}, {partnerRetainer.price}. {partnerRetainer.blurb}{" "}
          Payment: 50% to start, 40% at staging, 10% on launch.
        </p>
      </section>

      <section className="border-t border-brass/15 px-5 py-24 md:px-10 md:py-32">
        <p className="max-w-4xl font-display text-4xl leading-tight tracking-tight md:text-6xl">
          If the site could swap logos with another and still work, we failed.
        </p>
        <div className="mt-12 flex flex-wrap gap-8">
          <Link
            href="/contact"
            className="inline-flex border border-brass/50 bg-brass px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-ink hover:bg-paper"
          >
            Commission a flagship
          </Link>
          <Link href="/lookbook" className="inline-flex items-center text-[11px] uppercase tracking-[0.22em] text-brass hover:text-paper">
            Open the lookbook →
          </Link>
        </div>
      </section>
    </div>
  );
}
