import { GeoDots } from '../components/GeoAccents';
import { Reveal } from '../components/Reveal';
import { SacredWallpaper } from '../components/SacredWallpaper';
import { useSectionView } from '../hooks/useSectionView';

const PROBLEMS = [
  {
    icon: '📖',
    title: 'The knowledge gap',
    body: 'Families no longer track the correct Vedic timing (Muhurta) for each life-cycle rite, or which rites apply to which family member.',
  },
  {
    icon: '🌍',
    title: 'The access gap',
    body: "NRIs and urban families often can't find a qualified, background-checked priest who matches their regional tradition and language.",
  },
  {
    icon: '🔍',
    title: 'The trust gap',
    body: 'When a ritual is outsourced or performed remotely, families have no reliable way to verify it was performed correctly, for the right person, at the right time.',
  },
];

export function Problem() {
  const ref = useSectionView('problem');
  return (
    <section ref={ref} className="relative overflow-hidden bg-white px-6 py-24">
      <SacredWallpaper />
      <GeoDots className="left-8 top-8 hidden lg:block" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal className="relative mx-auto mb-16 max-w-2xl text-center">
          <p className="eyebrow">The problem</p>
          <h2 className="font-display text-3xl font-semibold text-neutral-900 sm:text-4xl">
            Tradition shouldn&apos;t get lost in distance.
          </h2>
        </Reveal>
        <div className="grid gap-6 sm:grid-cols-3">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <div className="h-full rounded-2xl border border-neutral-200/70 bg-white p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-kula-navy/5 text-2xl">
                  {p.icon}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-kula-navy">{p.title}</h3>
                <p className="text-sm leading-relaxed text-neutral-600">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
