import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = (await request.json()) as Record<string, string>;
  const name = body.name?.trim();
  const email = body.email?.trim();
  if (!name || !email || !email.includes("@")) {
    return NextResponse.json({ ok: false }, { status: 400 });
  }

  const payload = {
    name,
    email,
    company: body.company ?? "",
    budget: body.budget ?? "",
    belief: body.belief ?? "",
    references: body.references ?? "",
  };

  if (process.env.RESEND_API_KEY) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM ?? "Aether Studio <hello@aether.studio>",
        to: [process.env.LEAD_INBOX ?? "hello@aether.studio"],
        reply_to: email,
        subject: `Brief · ${payload.company || name}`,
        text: Object.entries(payload)
          .map(([key, value]) => `${key}: ${value}`)
          .join("\n"),
      }),
    });
    if (!res.ok) {
      return NextResponse.json({ ok: false }, { status: 502 });
    }
  } else {
    console.info("Aether brief", payload);
  }

  return NextResponse.json({ ok: true });
}
