import { Features } from './sections/Features';
import { Footer } from './sections/Footer';
import { Hero } from './sections/Hero';
import { HowItWorks } from './sections/HowItWorks';
import { Nav } from './sections/Nav';
import { Priests } from './sections/Priests';
import { Problem } from './sections/Problem';
import { Waitlist } from './sections/Waitlist';

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Problem />
      <Features />
      <HowItWorks />
      <Priests />
      <Waitlist />
      <Footer />
    </div>
  );
}
