// Runs after `vite build` (see package.json's "build" script). Vite/React
// only ship an empty <div id="root"> in dist/index.html — fine for browsers,
// but crawlers that don't execute JavaScript (GPTBot, ClaudeBot, and most
// other AI/LLM crawlers as of 2026) would see no content at all. This
// renders each route to a real HTML string via react-dom/server and writes
// it to a static file per route, so both humans and crawlers get the same
// content; main.tsx then hydrates onto it for interactivity.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { createServer } from 'vite';

const rootDir = path.dirname(fileURLToPath(import.meta.url)) + '/..';
const distDir = path.join(rootDir, 'dist');
const siteUrl = 'https://samskarakula.com';

const PAGES = [
  {
    path: '/',
    title: 'Samskara Kula — Never miss a samskara',
    description:
      'Samskara Kula — a family-tree-driven ritual calendar, vetted priest marketplace, and tamper-evident Proof-of-Ritual archive for Hindu life-cycle samskaras.',
  },
  {
    path: '/legal/terms',
    title: 'Terms & Conditions — Samskara Kula',
    description: 'Terms and conditions for using the Samskara Kula website, customer app, and priest app.',
  },
  {
    path: '/legal/privacy',
    title: 'Privacy Policy — Samskara Kula',
    description:
      "How Samskara Kula collects, uses, shares, and protects your family's data, including sensitive religious, lineage, and birth information.",
  },
  {
    path: '/legal/refunds',
    title: 'Refund & Cancellation Policy — Samskara Kula',
    description: 'Cancellation, rescheduling, and refund terms for priest bookings, Samagri, and Prasad shipping.',
  },
  {
    path: '/legal/kundali-disclaimer',
    title: 'Kundali & Astrology Disclaimer — Samskara Kula',
    description:
      "What Samskara Kula's computed Kundali (birth chart) is and isn't, and how it relates to your own uploaded chart.",
  },
];

async function main() {
  const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

  const vite = await createServer({
    root: rootDir,
    mode: 'production',
    appType: 'custom',
    server: { middlewareMode: true },
  });

  try {
    const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');

    for (const page of PAGES) {
      const appHtml = render(page.path);
      const canonical = siteUrl + page.path;
      const html = template
        .replaceAll('__TITLE__', page.title)
        .replaceAll('__DESCRIPTION__', page.description)
        .replaceAll('__CANONICAL__', canonical)
        .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

      const outDir = page.path === '/' ? distDir : path.join(distDir, page.path);
      fs.mkdirSync(outDir, { recursive: true });
      fs.writeFileSync(path.join(outDir, 'index.html'), html);
      console.log(`prerendered ${page.path}`);
    }
  } finally {
    await vite.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
