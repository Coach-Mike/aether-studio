import type { Metadata } from "next";
import { IntakeForm } from "@/components/intake-form";
import { SectionLabel } from "@/components/section-label";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Begin a commission with Aether Studio.",
};

export default function ContactPage() {
  return (
    <div className="grid gap-16 px-5 py-16 md:grid-cols-12 md:px-10 md:py-24">
      <div className="md:col-span-5">
        <SectionLabel index="05">Contact</SectionLabel>
        <h1 className="mt-6 font-display text-5xl tracking-tight md:text-6xl">Begin a brief.</h1>
        <p className="mt-6 max-w-sm text-base leading-8 text-smoke">
          Decision-maker, budget range, and a date. We do not chase tire-kickers. Write {site.email} if the form is the wrong tool.
        </p>
      </div>
      <div className="md:col-span-7">
        <IntakeForm />
      </div>
    </div>
  );
}
