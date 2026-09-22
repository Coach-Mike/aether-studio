import Link from "next/link";

export default function NotFound() {
  return (
    <div className="px-5 py-32 md:px-10">
      <p className="text-[11px] uppercase tracking-[0.22em] text-brass">404</p>
      <h1 className="mt-4 font-display text-6xl">This page was never set.</h1>
      <Link href="/" className="mt-8 inline-block text-[11px] uppercase tracking-[0.22em] text-brass">
        Return home →
      </Link>
    </div>
  );
}
