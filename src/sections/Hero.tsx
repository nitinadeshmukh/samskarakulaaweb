import { Logo } from '../components/Logo';
import { Reveal } from '../components/Reveal';
import { Squiggles } from '../components/Squiggles';
import { WaveDivider } from '../components/WaveDivider';
import { trackEvent } from '../lib/analytics';

const TRUST_ITEMS = [
  { label: '16 Shodasha Samskaras covered' },
  { label: 'Background-checked priests only' },
  { label: 'Tamper-evident Proof-of-Ritual' },
];

// A composed mock UI card, not a real screenshot (none exists yet) — original
// CSS/SVG composition, not a copy of any specific app's design. Styled as a
// bold white card with a thick dark outline (the Justinmind "sketch" look)
// rather than the previous dark-glass treatment, so it reads against a
// bright gradient background instead of a navy one.
function CalendarMock() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      <div className="relative rounded-3xl border-[3px] border-neutral-900 bg-white p-5 shadow-2xl">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">Ritual Calendar</p>
            <p className="font-display text-lg font-semibold text-neutral-900">Kumar Family</p>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-kula-amber/10">
            <Logo size={20} />
          </div>
        </div>

        {[
          { name: 'Upanayana — Arjun', when: 'Due in 14 days', tone: 'amber' },
          { name: 'Namakarana — Meera', when: 'Muhurta confirmed', tone: 'green' },
          { name: 'Vivaha — Priya', when: 'Proof-of-Ritual verified', tone: 'navy' },
        ].map((row) => (
          <div
            key={row.name}
            className="mb-2.5 flex items-center justify-between rounded-2xl bg-neutral-50 px-4 py-3 last:mb-0"
          >
            <div>
              <p className="text-sm font-semibold text-neutral-900">{row.name}</p>
              <p className="text-xs text-neutral-500">{row.when}</p>
            </div>
            <span
              className={`h-2.5 w-2.5 rounded-full ${
                row.tone === 'amber' ? 'bg-kula-amber' : row.tone === 'green' ? 'bg-emerald-500' : 'bg-kula-navy'
              }`}
            />
          </div>
        ))}

        <div className="mt-4 flex items-center gap-2 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-2.5">
          <svg width={16} height={16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="text-emerald-600">
            <path d="M20 6 L9 17 L4 12" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className="text-xs font-medium text-emerald-700">Hash-verified · stored in your family Vault</p>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-600 via-kula-amber to-kula-gold pb-28 pt-16 text-white">
      <Squiggles className="left-[-40px] top-8 hidden sm:block" />
      <Squiggles className="right-[-60px] top-20 hidden rotate-180 sm:block" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-white/80">संस्कार कुल</p>
          <h1 className="mb-6 font-sans text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Never miss a samskara.
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-white/90">
            A family-tree-driven ritual calendar, a vetted priest marketplace, and a tamper-evident
            record of every rite performed — built for Hindu families across the diaspora.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#waitlist"
              onClick={() => trackEvent('cta_clicked', { cta: 'join-waitlist', location: 'hero' })}
              className="rounded-full bg-neutral-900 px-8 py-4 text-center text-base font-semibold text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-black"
            >
              Join the Waitlist
            </a>
            <a
              href="#how-it-works"
              onClick={() => trackEvent('cta_clicked', { cta: 'how-it-works', location: 'hero' })}
              className="rounded-full border-2 border-white/70 px-8 py-4 text-center text-base font-semibold text-white transition hover:bg-white/10"
            >
              See how it works
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {TRUST_ITEMS.map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-sm text-white/85">
                <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} className="shrink-0 text-white">
                  <path d="M20 6 L9 17 L4 12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {item.label}
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={150} className="relative mt-14 px-6">
        <CalendarMock />
      </Reveal>

      <WaveDivider fill="#fafafa" />
    </section>
  );
}
