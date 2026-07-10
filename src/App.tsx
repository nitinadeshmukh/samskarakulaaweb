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

export default function App() {
  useEffect(() => {
    trackEvent('page_view', { path: window.location.pathname });
  }, []);

  const legalDoc = LEGAL_ROUTES[window.location.pathname];
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
