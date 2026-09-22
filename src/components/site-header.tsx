import Link from "next/link";
import { nav, site } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-brass/15 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-5 py-4 md:px-10">
        <Link
          href="/"
          className="shrink-0 font-display text-[1.35rem] tracking-[0.18em] text-paper"
        >
          {site.wordmark}
        </Link>
        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 md:flex"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[11px] uppercase tracking-[0.22em] text-smoke transition-colors hover:text-paper"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-5">
          <Link
            href="/contact"
            className="text-[11px] uppercase tracking-[0.22em] text-brass transition-colors hover:text-paper"
          >
            Begin
          </Link>
          <details className="relative md:hidden">
            <summary className="cursor-pointer list-none text-[11px] uppercase tracking-[0.22em] text-smoke [&::-webkit-details-marker]:hidden">
              Menu
            </summary>
            <div className="absolute right-0 mt-3 min-w-[11rem] border border-brass/20 bg-ink p-4 shadow-xl">
              <nav aria-label="Mobile" className="flex flex-col gap-3">
                {nav.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-[11px] uppercase tracking-[0.22em] text-paper hover:text-brass"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
