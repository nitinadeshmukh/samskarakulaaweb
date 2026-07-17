import { SacredSymbolIcon } from '../components/SacredSymbolIcon';
import { Reveal } from '../components/Reveal';
import { SacredWallpaper } from '../components/SacredWallpaper';
import { useSectionView } from '../hooks/useSectionView';

// Real service names, not placeholders — these mirror the actual bookable
// catalog seeded in the live product (samskarakulaaapi migration 0009: the
// Shodasha Samskaras + a general puja/homam/shraddha catalog).
const SERVICES = [
  { name: 'Namakarana', category: 'Samskara', icon: 'om', body: 'The naming ceremony, welcoming a child by name.' },
  { name: 'Upanayana', category: 'Samskara', icon: 'mala', body: 'The sacred thread ceremony marking formal learning.' },
  { name: 'Vivaha', category: 'Samskara', icon: 'kalash', body: 'The wedding rites uniting two families in tradition.' },
  { name: 'Griha Pravesh', category: 'Puja', icon: 'diya', body: 'The housewarming ritual for a new home.' },
  { name: 'Satyanarayan Puja', category: 'Puja', icon: 'padma', body: 'A puja of gratitude, performed for any auspicious occasion.' },
  { name: 'Ganesh Chaturthi Puja', category: 'Puja', icon: 'padma', body: "Worship of Ganesha for a new beginning's blessing." },
  { name: 'Ayushya Homam', category: 'Homam', icon: 'damaru', body: 'A fire ritual invoking Ayur Devata for health and longevity.' },
  { name: 'Navagraha Shanti', category: 'Homam', icon: 'surya', body: 'A homam to pacify the nine celestial influences.' },
];

export function ServicesShowcase() {
  const ref = useSectionView('services');
  return (
    <section ref={ref} id="services" className="relative overflow-hidden bg-white px-6 py-24">
      <SacredWallpaper />
      <div className="relative z-10 mx-auto max-w-6xl">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <p className="eyebrow">Showcase</p>
          <h2 className="font-display text-3xl font-semibold text-neutral-900 sm:text-4xl">
            Every rite, ready to book.
          </h2>
          <p className="mt-3 text-base text-neutral-600">
            A sample of the Samskaras, Pujas, and Homams families book through Samskara Kula —
            in person or virtually, with a vetted priest matched to your tradition.
          </p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.name} delay={i * 60}>
              <div className="h-full rounded-2xl border border-neutral-100 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:shadow-lg">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-kula-amber/10">
                  <SacredSymbolIcon name={s.icon} size={22} />
                </div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-kula-amber">{s.category}</p>
                <h3 className="mb-1.5 text-base font-semibold text-neutral-900">{s.name}</h3>
                <p className="text-sm leading-relaxed text-neutral-500">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
