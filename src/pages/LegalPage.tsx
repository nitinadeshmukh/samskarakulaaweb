import { marked } from 'marked';

import { Logo } from '../components/Logo';
import { Footer } from '../sections/Footer';

interface LegalPageProps {
  title: string;
  markdown: string;
}

// The source markdown in /legal cross-links via relative filenames (e.g.
// "./privacy-policy.md") since it's also read directly from the repo. Rewrite
// those to the actual site routes registered in App.tsx.
const DOC_LINK_TO_ROUTE: Record<string, string> = {
  './terms-and-conditions.md': '/legal/terms',
  './privacy-policy.md': '/legal/privacy',
  './refund-and-cancellation-policy.md': '/legal/refunds',
  './kundali-astrology-disclaimer.md': '/legal/kundali-disclaimer',
};

function resolveDocLinks(markdown: string): string {
  return Object.entries(DOC_LINK_TO_ROUTE).reduce(
    (text, [mdLink, route]) => text.split(mdLink).join(route),
    markdown,
  );
}

export function LegalPage({ title, markdown }: LegalPageProps) {
  const html = marked.parse(resolveDocLinks(markdown), { async: false }) as string;

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-neutral-200 bg-white">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2.5">
            <Logo size={28} />
            <img src="/wordmark.webp" alt="Samskara Kula" className="h-6 w-auto" />
          </a>
          <a href="/" className="text-sm font-medium text-kula-navy hover:underline">
            &larr; Back to home
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="font-display text-3xl font-semibold text-neutral-900">{title}</h1>
        <article
          className="prose prose-neutral mt-8 max-w-none prose-headings:font-display prose-a:text-kula-navy prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </main>

      <Footer />
    </div>
  );
}
