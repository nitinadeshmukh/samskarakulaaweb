# CLAUDE.md — samskarakulaaweb

Marketing site for **Samskara Kula**, deployed at `https://samskarakula.com`. Built 2026-07-06, split-adjacent to the `samskarakulaaapi` (backend) and `samskarakulaaapp` (mobile apps) repos.

## Domain terms (use verbatim, see full glossary in the other two repos)

Samskara, Shodasha Samskaras, Gotra, Veda/Shakha, Kula Devata, Muhurta, Panchang/Ephemeris, Pandit/Purohit, Agamic tradition, Samagri, Havan/Homam. Do not paraphrase these into generic marketing-speak in copy — they're precise, and getting them wrong reads as inauthentic to the target audience.

## Tech stack

- Vite + React + TypeScript + Tailwind CSS, static build output (`dist/`).
- No backend of its own — this is a static marketing site. It intentionally does NOT talk to the Supabase backend (`samskarakulaaapi`) or reuse any app auth/data.
- Branding: genealogy-constellation mark (`src/components/Logo.tsx`), blue/navy (`kula-navy` `#0E4F9E`) + gold/amber (`kula-gold`/`kula-amber`) palette — matches `samskarakulaaapp`'s customer-app icon and UI accent color.

## Known gaps (do not silently "fix" by fabricating a working backend)

- **Waitlist form** (`src/sections/Waitlist.tsx`) has no real collection endpoint — it's a local-only "thanks" state. Needs a real destination (Supabase table + Edge Function, or a third-party service) before it actually captures leads. Flag this explicitly if asked to "make the waitlist work."
- **"Apply to join the roster"** (priest recruitment CTA) currently links to the same waitlist anchor — there's no distinct priest-application flow yet.
- No app store badges/links exist yet (no published app store listing at time of writing) — don't add App Store/Play Store buttons that link nowhere.

## Conventions

- Keep this a static site (no SSR/API routes) unless a real requirement forces otherwise — simplest to deploy via nginx serving `dist/`, no Node process to keep alive on the VPS.
- Commits: conventional commits (`feat:`, `fix:`, `chore:`), scoped to the section/component touched.

## Deployment

See `README.md` for the CI/CD summary. Full VPS-side nginx/certbot setup lives in `samskarakulaaapi`'s and the original `SamskaraKula` monorepo's operational notes.
