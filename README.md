# Aether Studio

One-of-one digital flagships. Designed with Grok. Owned by you. Deployed from GitHub.

Public flagship site for the studio. Next.js 16 · App Router · Tailwind 4.

## Local

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Request a change (non-technical)

1. Open an issue in this repo describing the page and the change.
2. Or email the studio with a screenshot and one sentence of intent.
3. Preview URLs appear on every push. Production is `main`.

Do not edit live hosting by hand. GitHub is the source of truth.

## Environment

Copy `.env.example`. Resend is optional until you want the contact form to email rather than log.

- `RESEND_API_KEY`
- `RESEND_FROM`
- `LEAD_INBOX`
- `NEXT_PUBLIC_SITE_URL`

## Deploy — GitHub → Vercel

Preferred: Vercel Pro on the studio team (`aistuff`) because this site sells.

1. Repo: `https://github.com/Coach-Mike/aether-studio`
2. Vercel → Add New Project → Import that repo
3. Framework: Next.js (auto)
4. Root: `/`
5. Env vars from `.env.example`
6. Production branch: `main`
7. Domain: add `aether.studio` (or interim `*.vercel.app`)
   - APEX: ANAME / ALIAS to Vercel’s documented target
   - `www` CNAME to `cname.vercel-dns.com`

Every `git push` to `main` ships production. Pull requests get preview URLs.

### If Vercel Pro is not on yet

Hobby is personal / non-commercial. Commercial alternative: Cloudflare Workers + OpenNext (`@opennextjs/cloudflare`). Do not rewrite the app to move hosts — GitHub stays the source.

## QA before calling it launched

- Lighthouse: Performance, A11y, Best Practices, SEO
- Keyboard through header, form, and work list
- `prefers-reduced-motion`
- Form submit with and without Resend
- Mobile 390px hero type does not overflow
- OG title/description

## Visual system

See `STUDIO.md`.
