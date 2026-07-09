import { useEffect } from 'react';

import { trackEvent } from './lib/analytics';
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

export default function App() {
  useEffect(() => {
    trackEvent('page_view', { path: window.location.pathname });
  }, []);

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
