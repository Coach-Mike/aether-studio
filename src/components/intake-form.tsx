"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { CommissionLetter, type Brief } from "@/components/commission-letter";

const budgets = ["$3.5k–$6k Origin", "$6k–$12k Signature", "$12k–$28k Flagship", "Partner"];

const previewBrief: Brief = {
  name: "Alex",
  company: "the house you are building",
  budget: "$12k–$28k Flagship",
};

export function IntakeForm() {
  const params = useSearchParams();
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error" | "unconfigured">("idle");
  const [brief, setBrief] = useState<Brief | null>(
    params.get("preview") === "letter" ? previewBrief : null,
  );

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const next: Brief = {
      name: String(data.name ?? ""),
      company: String(data.company ?? ""),
      budget: String(data.budget ?? ""),
    };
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.status === 503) {
        setStatus("unconfigured");
        return;
      }
      if (!res.ok) throw new Error("fail");
      setBrief(next);
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent" && brief) {
    return <CommissionLetter brief={brief} />;
  }

  if (brief && params.get("preview") === "letter") {
    return <CommissionLetter brief={brief} />;
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6">
      <label className="grid gap-2 text-[11px] uppercase tracking-[0.2em] text-brass">
        Name
        <input
          required
          name="name"
          autoComplete="name"
          className="border-b border-brass/25 bg-transparent py-3 text-base tracking-normal text-paper outline-none focus:border-brass"
        />
      </label>
      <label className="grid gap-2 text-[11px] uppercase tracking-[0.2em] text-brass">
        Email
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          className="border-b border-brass/25 bg-transparent py-3 text-base tracking-normal text-paper outline-none focus:border-brass"
        />
      </label>
      <label className="grid gap-2 text-[11px] uppercase tracking-[0.2em] text-brass">
        Company + URL
        <input
          required
          name="company"
          className="border-b border-brass/25 bg-transparent py-3 text-base tracking-normal text-paper outline-none focus:border-brass"
        />
      </label>
      <fieldset className="grid gap-3">
        <legend className="text-[11px] uppercase tracking-[0.2em] text-brass">Budget</legend>
        <div className="flex flex-wrap gap-2">
          {budgets.map((budget) => (
            <label
              key={budget}
              className="cursor-pointer border border-brass/25 px-3 py-2 text-[11px] uppercase tracking-[0.16em] text-smoke has-[:checked]:border-brass has-[:checked]:text-paper"
            >
              <input className="sr-only" type="radio" name="budget" value={budget} required />
              {budget}
            </label>
          ))}
        </div>
      </fieldset>
      <label className="grid gap-2 text-[11px] uppercase tracking-[0.2em] text-brass">
        What should a visitor believe after 15 seconds?
        <textarea
          required
          name="belief"
          rows={4}
          className="border border-brass/25 bg-transparent p-3 text-base leading-7 tracking-normal text-paper outline-none focus:border-brass"
        />
      </label>
      <label className="grid gap-2 text-[11px] uppercase tracking-[0.2em] text-brass">
        Three sites you love. Three you refuse.
        <textarea
          name="references"
          rows={3}
          className="border border-brass/25 bg-transparent p-3 text-base leading-7 tracking-normal text-paper outline-none focus:border-brass"
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="justify-self-start border border-brass/50 bg-brass px-6 py-3 text-[11px] uppercase tracking-[0.22em] text-ink disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send the brief"}
      </button>
      {status === "unconfigured" ? (
        <p role="alert" className="text-sm leading-7 text-brass">
          The brief did not leave the studio — email is not wired yet. Write{" "}
          <a className="underline hover:text-paper" href="mailto:hello@aether.studio">
            hello@aether.studio
          </a>{" "}
          with the same note, then add RESEND_API_KEY on Vercel.
        </p>
      ) : null}
      {status === "error" ? (
        <p role="alert" className="text-sm leading-7 text-brass">
          Could not send from the form. Email{" "}
          <a className="underline hover:text-paper" href="mailto:hello@aether.studio">
            hello@aether.studio
          </a>{" "}
          with the same brief.
        </p>
      ) : null}
    </form>
  );
}
