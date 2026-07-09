import { Reveal } from '../components/Reveal';
import { useSectionView } from '../hooks/useSectionView';

// Samskara Kula is pre-launch — there are no real reviews yet (see
// samskarakulaaapp's priest_reviews table, which is real and live in the
// product, but has zero rows from actual families). Per explicit user
// direction, this section shows illustrative sample reviews rather than
// fabricated testimonials — every card is labeled "Sample" and the section
// itself discloses this upfront, and attribution is location-only (no
// invented personal names standing in for real people).
const SAMPLE_REVIEWS = [
  {
    quote:
      'We needed a South Agamic priest who spoke Tamil, in the Bay Area, within two weeks. The filters found one — and the booking was done that evening.',
    context: 'Illustrative — booking a Griha Pravesh',
    location: 'A family in Fremont, CA',
  },
  {
    quote:
      "My parents in Chennai couldn't travel for my son's Upanayana. The Proof-of-Ritual video meant they watched it performed correctly, the same day.",
    context: 'Illustrative — an Upanayana, performed virtually',
    location: 'A family in London, UK',
  },
  {
    quote:
      "I didn't know Namakarana had a proper Muhurta window until the calendar flagged it. We'd have missed it otherwise.",
    context: 'Illustrative — the ritual calendar',
    location: 'A family in Toronto, Canada',
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((n) => (
        <svg key={n} width={16} height={16} viewBox="0 0 24 24" fill="#F97316">
          <path d="M12 2 L15 9 L22 9.5 L17 14.5 L18.5 22 L12 18 L5.5 22 L7 14.5 L2 9.5 L9 9 Z" />
        </svg>
      ))}
    </div>
  );
}

export function RatingsReviews() {
  const ref = useSectionView('ratings-reviews');
  return (
    <section ref={ref} className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto mb-4 max-w-2xl text-center">
          <p className="eyebrow">Trust, built in</p>
          <h2 className="font-display text-3xl font-semibold text-neutral-900 sm:text-4xl">
            Every priest, rated by the families they&apos;ve served.
          </h2>
        </Reveal>
        <Reveal className="mx-auto mb-14 max-w-xl text-center text-sm text-neutral-500">
          Samskara Kula is pre-launch — the reviews below are illustrative examples of what you&apos;ll
          see once families start booking, not real testimonials.
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-3">
          {SAMPLE_REVIEWS.map((r, i) => (
            <Reveal key={r.location} delay={i * 100}>
              <div className="relative h-full rounded-2xl border border-neutral-100 bg-neutral-50 p-6 shadow-soft">
                <span className="absolute right-4 top-4 rounded-full bg-neutral-900 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                  Sample
                </span>
                <Stars />
                <p className="mb-4 mt-3 text-sm leading-relaxed text-neutral-700">&ldquo;{r.quote}&rdquo;</p>
                <p className="text-xs font-semibold text-neutral-900">{r.location}</p>
                <p className="text-xs text-neutral-400">{r.context}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
