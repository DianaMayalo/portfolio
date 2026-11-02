# Diana Mayalo — Portfolio

Portfolio site for Diana Mayalo, Data Scientist & AI Automation Engineer in Nairobi.

Built with Next.js (App Router), TypeScript and Tailwind CSS v4. Dark-only editorial design: near-black / warm-paper / one orange, Geist throughout, numbered sections with a side rail, giant-name hero on a dot grid, work rows with a marquee hover, sticky big-number services, tool marquees, reticle cursor, ⌘K command palette and a Null Island 404. All motion is CSS (scroll-driven animations and React `<ViewTransition>`), no animation library.

## Develop

```bash
npm run dev
```

## Content

All copy lives in typed content objects — no CMS:

- `content/site.ts` — name, role, email, links, availability, the About statement and stats, services, philosophy, process, current focus and "why work with me"
- `content/skills.ts` — the Toolkit groups and the two big marquees
- `content/projects.ts` — case studies (problem → role → decisions → outcomes), work experience and education

Project images live in `public/images/`. The CV is `public/Diana-Mayalo-CV.pdf` (`resumeUrl` in `content/site.ts`).

To change the accent colour, edit the `--accent*` tokens at the top of `app/globals.css`.

## Routes

- `/` — the single-page portfolio
- `/projects/[slug]` — one case study per project in `content/projects.ts`
- `/card` — a shareable one-screen card with links and the CV

## Contact form

The form in the "Let's talk" dialog sends through Resend (`app/actions/contact.ts`). Set `RESEND_API_KEY` (see `.env.example`). Until then it tells visitors to email directly.

## Deploy (Vercel)

Import the repo; the framework is auto-detected. `NEXT_PUBLIC_SITE_URL` is optional — Vercel's production host is used for metadata and the sitemap when it is unset.
