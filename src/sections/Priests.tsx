import { GeoCircle, GeoDots, GeoTriangle } from '../components/GeoAccents';
import { Reveal } from '../components/Reveal';
import { SacredWallpaper } from '../components/SacredWallpaper';
import { useSectionView } from '../hooks/useSectionView';

// A composed mock of the priest companion app's Jobs screen — original CSS
// composition standing in for a real screenshot (none exists yet).
function PriestAppMock() {
  return (
    <div className="mx-auto w-full max-w-[280px] rounded-[2.5rem] border-8 border-neutral-900 bg-neutral-900 shadow-2xl">
      <div className="overflow-hidden rounded-[1.75rem] bg-[#FFF8EC]">
        <div className="flex items-center justify-between bg-[#C2410C] px-5 pb-4 pt-6">
          <p className="text-sm font-semibold text-white">My Jobs</p>
          <div className="h-6 w-6 rounded-full bg-white/25" />
        </div>
        <div className="space-y-2.5 p-4">
          {[
            { name: 'Upanayana', place: 'Fremont, CA', status: 'Today, 10:00 AM' },
            { name: 'Namakarana', place: 'Virtual', status: 'Tomorrow' },
            { name: 'Griha Pravesh', place: 'San Jose, CA', status: 'Fri, 2:00 PM' },
          ].map((job) => (
            <div key={job.name} className="rounded-2xl bg-white p-3.5 shadow-sm">
              <p className="text-sm font-semibold text-neutral-900">{job.name}</p>
              <p className="text-xs text-neutral-500">{job.place}</p>
              <p className="mt-1.5 text-xs font-semibold text-[#C2410C]">{job.status}</p>
            </div>
          ))}
          <div className="rounded-2xl border-2 border-dashed border-[#C2410C]/30 p-3.5 text-center">
            <p className="text-xs font-semibold text-[#C2410C]">Capture Proof-of-Ritual</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Priests() {
  const ref = useSectionView('priests');
  return (
    <section ref={ref} id="priests" className="relative overflow-hidden bg-neutral-50 px-6 py-24">
      <SacredWallpaper />
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-14 sm:grid-cols-2">
        <Reveal>
          <p className="eyebrow">For priests</p>
          <h2 className="mb-4 font-display text-3xl font-semibold text-neutral-900 sm:text-4xl">
            Are you a Pandit or Purohit?
          </h2>
          <p className="mb-8 leading-relaxed text-neutral-600">
            Join our vetted priest roster and get matched with families who need your tradition —
            North Indian Vedic or South Indian Agamic. Our companion app is built for simplicity:
            see your jobs, navigate to the venue, and capture Proof-of-Ritual in a few taps.
          </p>
          <a
            href="#waitlist"
            className="inline-block rounded-full bg-kula-navy px-8 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-kula-navyDark"
          >
            Apply to join the roster
          </a>
        </Reveal>
        <Reveal delay={150} className="relative">
          <GeoCircle className="right-2 top-[-24px] h-20 w-20 sm:right-8" color="#FBBF24" />
          <GeoTriangle className="bottom-2 left-0 sm:left-4" />
          <GeoDots className="right-[-8px] bottom-16 hidden sm:block" />
          <PriestAppMock />
        </Reveal>
      </div>
    </section>
  );
}
