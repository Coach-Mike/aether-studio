import Link from "next/link";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-brass/15 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 py-4 md:px-10">
        <Link href="/" className="font-display text-[1.35rem] tracking-[0.18em] text-paper">
          {site.wordmark}
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-5 md:gap-8">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[10px] uppercase tracking-[0.18em] text-smoke transition-colors hover:text-paper md:text-[11px] md:tracking-[0.22em]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden text-[11px] uppercase tracking-[0.22em] text-brass transition-colors hover:text-paper sm:inline"
        >
          Begin a commission
        </Link>
      </div>
    </header>
  );
}
