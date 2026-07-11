import { useEffect, useRef, useState } from 'react';

import { SacredSymbolIcon } from './SacredSymbolIcon';

interface Slide {
  icon: string;
  accentClass: string;
  eyebrow: string;
  headline: string;
  subtext: string;
  facts: string[];
}

// Three emotionally-led marketing messages, rotating like an ad carousel at
// the top of the site — per direct user request ("advertise, marketing...
// emotionally attractive, god loving, god fearing... everything customers
// are looking for", later: "more graphics... should look like a block").
// Each targets a distinct real pain point this product's own persona
// research already established (see PRD): the guilt of missing a child's
// rite while abroad, the fear of a ritual done wrong/dishonored, and a
// scattered family unable to share the moment. Framed as devotion and
// reverence for *the family's own faith* — never as this product having any
// religious authority itself (matches the marketplace framing already in
// Terms & Conditions / the Kundali disclaimer).
const SLIDES: Slide[] = [
  {
    icon: 'diya',
    accentClass: 'bg-kula-amber',
    eyebrow: 'For every family, everywhere',
    headline: "Never let your child's blessing wait for a flight home.",
    subtext:
      "From Namakarana to Upanayana, give your children every sacred rite they deserve — performed with devotion, hash-verified, and kept forever in your family's Vault.",
    facts: ['16 Shodasha Samskaras covered', 'Hash-verified Proof-of-Ritual'],
  },
  {
    icon: 'om',
    accentClass: 'bg-kula-navy',
    eyebrow: 'Faith you can verify',
    headline: 'Every ritual performed with reverence. Every blessing, proof-verified.',
    subtext:
      'Background-checked priests who know your Gotra, your Veda, your Kula Devata — because your family\'s tradition deserves to be honored exactly right.',
    facts: ['Gotra & Veda matched', 'Background-checked priests only'],
  },
  {
    icon: 'shankha',
    accentClass: 'bg-sky-600',
    eyebrow: 'One family, wherever you are',
    headline: 'Distance never stopped devotion. Now it never has to.',
    subtext:
      'Grandparents in Chennai. Parents in Chicago. One sacred ceremony, streamed live — so no one misses the moment your family comes together in faith.',
    facts: ['In-person or virtual', 'Live-streamed ceremonies'],
  },
];

const AUTO_ADVANCE_MS = 6500;

function FactBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-50 px-3 py-1.5 text-xs font-semibold text-neutral-700">
      <svg width={12} height={12} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="shrink-0 text-emerald-600">
        <path d="M20 6 L9 17 L4 12" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      {label}
    </span>
  );
}

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
            {/* Each slide is its own bordered "block" card — the thick-border
                white-card treatment already established by CalendarMock lower
                on this page — rather than bare text floating on the gradient. */}
            <div className="mx-auto max-w-2xl rounded-3xl border-[3px] border-neutral-900 bg-white p-8 text-center shadow-2xl sm:p-10">
              <div className={`mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full ${slide.accentClass}`}>
                <SacredSymbolIcon name={slide.icon} size={32} color="#ffffff" />
              </div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">{slide.eyebrow}</p>
              <p className="mb-4 font-sans text-3xl font-black leading-[1.1] tracking-tight text-neutral-900 sm:text-4xl">
                {slide.headline}
              </p>
              <p className="mx-auto mb-6 max-w-md text-base leading-relaxed text-neutral-600">{slide.subtext}</p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                {slide.facts.map((fact) => (
                  <FactBadge key={fact} label={fact} />
                ))}
              </div>
            </div>
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
