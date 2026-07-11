import { SacredSymbolIcon } from '../components/SacredSymbolIcon';
import { HINDU_SYMBOLS } from '../data/hinduSymbols';
import { Reveal } from '../components/Reveal';
import { SacredWallpaper } from '../components/SacredWallpaper';

// Symbols with bespoke line-art render as icon tiles; the rest of the
// documented 24 (src/data/hinduSymbols.ts) still appear, as name-only chips,
// so the section is complete without overstating how many were illustrated.
const ICONIC = HINDU_SYMBOLS.filter((s) => s.icon);
const NAMED_ONLY = HINDU_SYMBOLS.filter((s) => !s.icon);

export function SacredSymbols() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24">
      <SacredWallpaper />
      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <Reveal>
          <p className="eyebrow">Rooted in tradition</p>
          <h2 className="mx-auto mb-4 max-w-3xl font-display text-3xl font-semibold text-neutral-900 sm:text-4xl">
            Every samskara. Every generation. Never missed —{' '}
            <span className="text-kula-amber">wherever your family lives.</span>
          </h2>
          <p className="mx-auto mb-14 max-w-2xl text-base leading-relaxed text-neutral-600">
            Samskara Kula exists so that distance never costs a family its rituals. The symbols below
            have carried that tradition for millennia — we&apos;re just making sure it reaches you, too.
          </p>
        </Reveal>

        <div className="mb-10 grid grid-cols-3 gap-4 sm:grid-cols-5">
          {ICONIC.map((s, i) => (
            <Reveal key={s.name} delay={i * 60}>
              <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-neutral-100 bg-neutral-50 p-5 shadow-soft transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm">
                  <SacredSymbolIcon name={s.icon!} size={26} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">{s.name}</p>
                  <p className="mt-1 text-xs leading-snug text-neutral-500">{s.meaning}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="flex flex-wrap items-center justify-center gap-2">
          {NAMED_ONLY.map((s) => (
            <span
              key={s.name}
              title={s.meaning}
              className="rounded-full border border-neutral-200 px-3 py-1.5 text-xs font-medium text-neutral-500"
            >
              {s.name}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
