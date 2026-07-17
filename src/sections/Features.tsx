import { Reveal } from '../components/Reveal';
import { SacredWallpaper } from '../components/SacredWallpaper';
import { useSectionView } from '../hooks/useSectionView';

const FEATURES = [
  {
    icon: '📅',
    title: 'Ritual Calendar',
    body: 'Build your family tree and automatically get a personalized timeline of the 16 traditional Shodasha Samskaras for every member.',
  },
  {
    icon: '🕉️',
    title: 'Vetted Priest Marketplace',
    body: 'Book a background-checked priest — North Vedic or South Agamic tradition — in person or virtually, filtered by language and region.',
  },
  {
    icon: '🎥',
    title: 'Proof-of-Ritual',
    body: 'Every booking ends with a tamper-evident, hash-verified video record — real proof the rite was performed correctly, for the right person.',
  },
  {
    icon: '🔒',
    title: 'Generational Vault',
    body: "A permanent, private family archive of every ritual performed — yours to revisit and pass down, encrypted and access-controlled.",
  },
];

export function Features() {
  const ref = useSectionView('features');
  return (
    <section ref={ref} id="features" className="relative overflow-hidden bg-white px-6 py-24">
      <SacredWallpaper />
      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <p className="eyebrow">What you get</p>
          <h2 className="font-display text-3xl font-semibold text-neutral-900 sm:text-4xl">
            Everything a family needs, in one place.
          </h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-2">
          {FEATURES.map((f, i) => (
            <Reveal key={f.title} delay={i * 80}>
              <div className="flex h-full gap-5 rounded-2xl border border-neutral-200/70 p-7 shadow-soft transition hover:-translate-y-1 hover:border-kula-amber/30 hover:shadow-lg">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-kula-amber/15 to-kula-gold/10 text-2xl">
                  {f.icon}
                </div>
                <div>
                  <h3 className="mb-1.5 text-lg font-semibold text-neutral-900">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-neutral-600">{f.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
