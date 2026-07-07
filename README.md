# samskarakulaaweb

Marketing site for **Samskara Kula**, deployed at `https://samskarakula.com`.

Built from scratch (Vite + React + TypeScript + Tailwind), static output — no Node process needed on the server, nginx serves `dist/` directly.

## Structure

```
/src
  /components/Logo.tsx     # genealogy-constellation mark, matches app branding
  /sections/               # Nav, Hero, Problem, Features, HowItWorks, Priests, Waitlist, Footer
  App.tsx
```

## Known gap

The waitlist form (`src/sections/Waitlist.tsx`) is **not wired to a real backend** — no collection endpoint exists yet (no Supabase table/Edge Function, no third-party form service). It shows a local "thanks" state on submit but doesn't actually capture the email anywhere. Wire this up before relying on it to capture real leads — either a Supabase table + Edge Function (consistent with the rest of the stack) or a service like Mailchimp/ConvertKit.

## Setup

```bash
npm install
npm run dev        # local dev server
npm run build       # static output to dist/
npm run typecheck
```

## Deployment

`.github/workflows/deploy.yml`: on push to `main`, builds and rsyncs `dist/` to the VPS path served by nginx for `samskarakula.com`. Requires repo secrets `VPS_HOST`, `VPS_USER`, `VPS_SSH_KEY`.
