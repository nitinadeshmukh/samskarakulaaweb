import { useEffect } from 'react';

import { trackEvent } from './lib/analytics';
import { LegalPage } from './pages/LegalPage';
import { FAQ } from './sections/FAQ';
import { Features } from './sections/Features';
import { Footer } from './sections/Footer';
import { Hero } from './sections/Hero';
import { HowItWorks } from './sections/HowItWorks';
import { Nav } from './sections/Nav';
import { Priests } from './sections/Priests';
import { Problem } from './sections/Problem';
import { RatingsReviews } from './sections/RatingsReviews';
import { SacredSymbols } from './sections/SacredSymbols';
import { ServicesShowcase } from './sections/ServicesShowcase';
import { Waitlist } from './sections/Waitlist';

import kundaliDisclaimerMd from '../legal/kundali-astrology-disclaimer.md?raw';
import privacyPolicyMd from '../legal/privacy-policy.md?raw';
import refundPolicyMd from '../legal/refund-and-cancellation-policy.md?raw';
import termsMd from '../legal/terms-and-conditions.md?raw';

// This app has no client-side router (single-page marketing site) — legal
// docs are the only additional routes, so a plain pathname lookup is enough.
// nginx's `try_files $uri $uri/ /index.html` fallback (see ../ops) means a
// direct load/refresh of any of these paths still resolves here correctly.
const LEGAL_ROUTES: Record<string, { title: string; markdown: string }> = {
  '/legal/terms': { title: 'Terms & Conditions', markdown: termsMd },
  '/legal/privacy': { title: 'Privacy Policy', markdown: privacyPolicyMd },
  '/legal/refunds': { title: 'Refund & Cancellation Policy', markdown: refundPolicyMd },
  '/legal/kundali-disclaimer': { title: 'Kundali & Astrology Disclaimer', markdown: kundaliDisclaimerMd },
};

interface AppProps {
  // Explicit so this component can be server-rendered per route by
  // scripts/prerender.js (no `window` there) — the client entry (main.tsx)
  // passes window.location.pathname.
  path: string;
}

export default function App({ path }: AppProps) {
  useEffect(() => {
    trackEvent('page_view', { path });
  }, [path]);

  // Strip a trailing slash before matching — a direct load of
  // /legal/kundali-disclaimer/ (nginx's `$uri/` fallback resolves this to the
  // right prerendered file, so the initial HTML looks correct) still leaves
  // window.location.pathname as ".../kundali-disclaimer/" once JS takes over.
  // Without normalizing, that fails the exact-match lookup below, and the
  // client-side render falls through to the homepage instead of the legal
  // page — a real bug, not just a lint nit: it visibly replaced the
  // disclaimer with the homepage after hydration.
  const normalizedPath = path.length > 1 ? path.replace(/\/+$/, '') : path;
  const legalDoc = LEGAL_ROUTES[normalizedPath];
  if (legalDoc) {
    return <LegalPage title={legalDoc.title} markdown={legalDoc.markdown} />;
  }

  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Problem />
      <ServicesShowcase />
      <Features />
      <HowItWorks />
      <RatingsReviews />
      <Priests />
      <SacredSymbols />
      <FAQ />
      <Waitlist />
      <Footer />
    </div>
  );
}
