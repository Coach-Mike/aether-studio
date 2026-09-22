import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json()) as Record<string, string>;
  const name = body.name?.trim();
  const email = body.email?.trim();
  const company = body.company?.trim() ?? "";
  const budget = body.budget?.trim() ?? "";
  const belief = body.belief?.trim() ?? "";
  const references = body.references?.trim() ?? "";

  if (!name || !email || !email.includes("@") || !company || !budget || !belief) {
    return NextResponse.json({ ok: false, error: "invalid" }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) {
    console.error("Aether brief dropped — RESEND_API_KEY is not set");
    return NextResponse.json({ ok: false, error: "unconfigured" }, { status: 503 });
  }

  const payload = { name, email, company, budget, belief, references };
  const inbox = process.env.LEAD_INBOX ?? "hello@aether.studio";
  const from = process.env.RESEND_FROM ?? "Aether Studio <onboarding@resend.dev>";

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [inbox],
      reply_to: email,
      subject: `Brief · ${company || name}`,
      text: Object.entries(payload)
        .map(([field, value]) => `${field}: ${value}`)
        .join("\n"),
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    console.error("Resend failed", res.status, detail);
    return NextResponse.json({ ok: false, error: "delivery" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
