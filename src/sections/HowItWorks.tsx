import { Reveal } from '../components/Reveal';
import { useSectionView } from '../hooks/useSectionView';

const STEPS = [
  { step: '1', title: 'Build your family tree', body: 'Add each family member — birth details, Gotra, Veda/Shakha, Kula Devata (or mark them unknown).' },
  { step: '2', title: 'Get your ritual calendar', body: 'We generate a personalized timeline of upcoming samskaras, automatically.' },
  { step: '3', title: 'Book a vetted priest', body: 'Choose in-person or virtual, filtered by tradition and language.' },
  { step: '4', title: 'Get verified Proof-of-Ritual', body: 'A tamper-evident video record lands in your family Vault, permanently.' },
];

export function HowItWorks() {
  const ref = useSectionView('how-it-works');
  return (
    <section ref={ref} id="how-it-works" className="relative overflow-hidden bg-kula-navyDeep px-6 py-24 text-white">
      <div className="bg-aurora pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-6xl">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-kula-gold">
            Process
          </p>
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">How it works</h2>
        </Reveal>

        <div className="relative grid gap-10 sm:grid-cols-4 sm:gap-6">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent sm:block" />
          {STEPS.map((s, i) => (
            <Reveal key={s.step} delay={i * 100} className="relative text-center">
              <div className="relative z-10 mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-kula-amber font-display text-lg font-semibold shadow-glow">
                {s.step}
              </div>
              <h3 className="mb-2 text-base font-semibold">{s.title}</h3>
              <p className="text-sm leading-relaxed text-white/60">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
