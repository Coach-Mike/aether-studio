const budgetLine: Record<string, string> = {
  "$3.5k–$6k Origin": "an Origin page",
  "$6k–$12k Signature": "a Signature Home",
  "$12k–$28k Flagship": "a Flagship",
  Partner: "a Partner retainer",
};

export type Brief = {
  name: string;
  company: string;
  budget: string;
};

function firstName(name: string) {
  const token = name.trim().split(/\s+/)[0] ?? "friend";
  return token.charAt(0).toUpperCase() + token.slice(1);
}

function today() {
  return new Date().toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function CommissionLetter({ brief }: { brief: Brief }) {
  const packageLine = budgetLine[brief.budget] ?? "a commission";

  return (
    <article
      className="reveal paper-page relative mx-auto max-w-2xl px-7 py-12 shadow-[0_24px_80px_rgba(0,0,0,0.35)] md:px-16 md:py-16"
      aria-live="polite"
    >
      <p className="font-display text-2xl tracking-[0.18em] text-ink">AETHER</p>
      <span className="draw hairline mt-6 block w-16" aria-hidden />
      <p className="mt-8 text-[11px] uppercase tracking-[0.22em] text-brass-dim">
        {today()}
      </p>
      <p className="mt-10 font-display text-3xl tracking-tight text-ink md:text-4xl">
        Dear {firstName(brief.name)},
      </p>
      <div className="mt-8 space-y-6 text-base leading-8 text-ink/80">
        <p>
          We have the brief for {brief.company}. You asked for {packageLine}.
        </p>
        <p>
          We read every inquiry. If this is a fit, you will hear from us within
          two business days — with a date, not a brochure. If it is not, we
          will say so.
        </p>
        <p>The files, the domain, and the hosting stay in your name.</p>
      </div>
      <p className="mt-12 font-display text-2xl text-ink">Aether Studio</p>
      <p className="mt-10 text-[11px] uppercase tracking-[0.2em] text-brass-dim">
        {brief.budget}
      </p>
    </article>
  );
}
