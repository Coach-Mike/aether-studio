import Link from "next/link";
import { nav, site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-brass/15">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-14 md:grid-cols-12 md:px-10">
        <div className="md:col-span-5">
          <p className="font-display text-3xl tracking-[0.14em]">{site.wordmark}</p>
          <p className="mt-4 max-w-sm text-sm leading-7 text-smoke">{site.tagline}</p>
        </div>
        <div className="md:col-span-3">
          <p className="text-[11px] uppercase tracking-[0.22em] text-brass">Index</p>
          <ul className="mt-4 space-y-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-paper/80 hover:text-brass">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/journal" className="text-sm text-paper/80 hover:text-brass">
                Journal
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm text-paper/80 hover:text-brass">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="text-[11px] uppercase tracking-[0.22em] text-brass">Studio</p>
          <p className="mt-4 text-sm leading-7 text-smoke">
            <a className="text-paper hover:text-brass" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
          <p className="mt-6 text-xs leading-6 text-smoke">
            You own the domain, the files, and the hosting account at launch.
            We stay as partner — not as landlord.
          </p>
        </div>
      </div>
      <div className="border-t border-brass/10">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-3 px-5 py-4 text-[11px] uppercase tracking-[0.18em] text-smoke md:px-10">
          <span>
            © {new Date().getFullYear()} {site.legal}
          </span>
          <span>Not a template house</span>
        </div>
      </div>
    </footer>
  );
}
