import { useEffect, useRef, useState } from 'react';

import { SacredSymbolIcon } from './SacredSymbolIcon';

interface Slide {
  icon: string;
  eyebrow: string;
  headline: string;
  subtext: string;
}

// Three emotionally-led marketing messages, rotating like an ad carousel at
// the top of the site — per direct user request ("advertise, marketing...
// emotionally attractive, god loving, god fearing... everything customers
// are looking for"). Each targets a distinct real pain point this product's
// own persona research already established (see PRD): the guilt of missing
// a child's rite while abroad, the fear of a ritual done wrong/dishonored,
// and a scattered family unable to share the moment. Framed as devotion and
// reverence for *the family's own faith* — never as this product having any
// religious authority itself (matches the marketplace framing already in
// Terms & Conditions / the Kundali disclaimer).
const SLIDES: Slide[] = [
  {
    icon: 'diya',
    eyebrow: 'For every family, everywhere',
    headline: "Never let your child's blessing wait for a flight home.",
    subtext:
      "From Namakarana to Upanayana, give your children every sacred rite they deserve — performed with devotion, hash-verified, and kept forever in your family's Vault.",
  },
  {
    icon: 'om',
    eyebrow: 'Faith you can verify',
    headline: 'Every ritual performed with reverence. Every blessing, proof-verified.',
    subtext:
      'Background-checked priests who know your Gotra, your Veda, your Kula Devata — because your family\'s tradition deserves to be honored exactly right.',
  },
  {
    icon: 'shankha',
    eyebrow: 'One family, wherever you are',
    headline: 'Distance never stopped devotion. Now it never has to.',
    subtext:
      'Grandparents in Chennai. Parents in Chicago. One sacred ceremony, streamed live — so no one misses the moment your family comes together in faith.',
  },
];

const AUTO_ADVANCE_MS = 6500;

export function HeroSlider() {
  const [active, setActive] = useState(0);
  const hovering = useRef(false);
  const intervalId = useRef<number | undefined>(undefined);

  // Starts (or restarts) the auto-advance timer. Also called from goTo below
  // — without this, a manual dot click can lose to a scheduled tick that was
  // already queued (e.g. click slide 3, but the pre-existing interval fires
  // moments later and advances 3→1, silently overriding the click). Resetting
  // the timer on every manual selection removes that race entirely.
  function startInterval() {
    window.clearInterval(intervalId.current);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    intervalId.current = window.setInterval(() => {
      if (hovering.current) return;
      setActive((i) => (i + 1) % SLIDES.length);
    }, AUTO_ADVANCE_MS);
  }

  useEffect(() => {
    startInterval();
    return () => window.clearInterval(intervalId.current);
  }, []);

  function goTo(i: number) {
    setActive(i);
    startInterval();
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => (hovering.current = true)}
      onMouseLeave={() => (hovering.current = false)}
    >
      {/* One real, visually-hidden <h1> for SEO/accessibility (a page needs
          exactly one) — the rotating per-slide headlines below are <p>
          elements styled identically, since a carousel with three <h1>s
          would be worse for both. All three slides stay mounted (just
          opacity-toggled, not conditionally rendered) so every message is
          still present in the prerendered HTML a crawler reads, not just
          whichever slide happened to be active at build time. */}
      <h1 className="sr-only">Never miss a samskara — every sacred rite your family deserves, wherever you live.</h1>

      {/* Every slide occupies the same grid cell (`[grid-area:1/1]`) instead
          of being absolutely positioned, so the container's height is
          whichever slide is tallest at the current viewport width — no
          min-height guess that can fall short and overlap the CTA buttons
          below when a slide's text wraps to an extra line. */}
      <div className="relative mx-auto grid" aria-live="polite">
        {SLIDES.map((slide, i) => (
          <div
            key={slide.headline}
            aria-hidden={i !== active}
            className={`[grid-area:1/1] transition-opacity duration-700 ease-out ${
              i === active ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
          >
            <div className="mb-4 flex justify-center">
              <SacredSymbolIcon name={slide.icon} size={40} color="#ffffff" />
            </div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">{slide.eyebrow}</p>
            <p className="mb-5 font-sans text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              {slide.headline}
            </p>
            <p className="mx-auto max-w-xl text-lg leading-relaxed text-white/90">{slide.subtext}</p>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.headline}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Show slide ${i + 1} of ${SLIDES.length}`}
            aria-current={i === active}
            className={`h-2 rounded-full transition-all ${i === active ? 'w-6 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'}`}
          />
        ))}
      </div>
    </div>
  );
}
