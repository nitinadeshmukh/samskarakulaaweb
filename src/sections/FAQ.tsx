import { useState } from 'react';

import { Reveal } from '../components/Reveal';
import { useSectionView } from '../hooks/useSectionView';

const FAQS = [
  {
    question: 'What is Proof-of-Ritual, exactly?',
    answer:
      'Every booking ends with a tamper-evident, hash-verified video record of the ritual being performed. It\'s stored permanently in your family\'s Generational Vault — real evidence the rite happened, not just a booking confirmation.',
  },
  {
    question: 'How does the priest matching work with Gotra and tradition?',
    answer:
      'Build your family tree once — Gotra, Veda/Shakha, Kula Devata, or mark any of them unknown if that\'s where your family is right now. We use that, alongside your chosen tradition (North Vedic or South Agamic) and language, to filter for priests who can perform the rite correctly for your family.',
  },
  {
    question: 'Can a ritual be performed virtually if my family is spread across countries?',
    answer:
      'Yes — every booking can be in-person or virtual. Virtual bookings get a live link once scheduled, so family anywhere in the world can watch, and the same Proof-of-Ritual record still lands in your Vault afterward.',
  },
  {
    question: 'How are priests vetted before they can accept bookings?',
    answer:
      'Priests go through a background-check and credential review before their profile becomes visible to families — unvetted priests never appear in search results, on the website or in the app.',
  },
  {
    question: 'What if we don\'t know our family\'s Gotra or Kula Devata?',
    answer:
      'That\'s common, especially for NRI families who\'ve lost touch with these details. You can mark any of them as unknown — we never guess or fill in a placeholder, and priest matching still works using whatever you do have.',
  },
  {
    question: 'Which samskaras does Samskara Kula cover?',
    answer:
      'All 16 traditional Shodasha Samskaras — from Namakarana (naming) through Upanayana (thread ceremony) to Vivaha (marriage) — plus general pujas and homams families book for other occasions.',
  },
];

// FAQPage structured data, generated from the same FAQS array the accordion
// renders — a hand-duplicated JSON-LD block would silently drift out of sync
// with what's actually on the page.
const FAQ_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

export function FAQ() {
  const ref = useSectionView('faq');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section ref={ref} id="faq" className="bg-neutral-50 px-6 py-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_JSON_LD) }} />
      <div className="mx-auto max-w-3xl">
        <Reveal className="mb-12 text-center">
          <p className="eyebrow mx-auto">Questions</p>
          <h2 className="font-display text-3xl font-semibold text-neutral-900 sm:text-4xl">
            Frequently asked questions
          </h2>
        </Reveal>

        <div className="border-t border-neutral-200">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={item.question} delay={i * 60} className="border-b border-neutral-200">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="text-base font-semibold text-neutral-900">{item.question}</span>
                  <svg
                    width={18}
                    height={18}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    className={`flex-shrink-0 text-neutral-500 transition-transform ${isOpen ? 'rotate-45' : ''}`}
                  >
                    <path d="M12 4v16 M4 12h16" />
                  </svg>
                </button>
                {/* Always rendered (not conditional) so every answer — not just
                    whichever is expanded — is present in the prerendered HTML
                    for crawlers; `hidden` just keeps the visual accordion UX. */}
                <p className={`pb-5 pr-8 text-sm leading-relaxed text-neutral-600 ${isOpen ? '' : 'hidden'}`}>
                  {item.answer}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
