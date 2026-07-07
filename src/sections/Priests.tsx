export function Priests() {
  return (
    <section id="priests" className="bg-neutral-50 px-6 py-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 sm:grid-cols-2">
        <div>
          <h2 className="mb-4 text-3xl font-bold text-neutral-900">Are you a Pandit or Purohit?</h2>
          <p className="mb-6 leading-relaxed text-neutral-600">
            Join our vetted priest roster and get matched with families who need your tradition —
            North Indian Vedic or South Indian Agamic. Our companion app is built for simplicity:
            see your jobs, navigate to the venue, and capture Proof-of-Ritual in a few taps.
          </p>
          <a
            href="#waitlist"
            className="inline-block rounded-xl bg-kula-navy px-6 py-3 text-sm font-semibold text-white hover:bg-kula-navyDark"
          >
            Apply to join the roster
          </a>
        </div>
        <div className="rounded-2xl border border-neutral-200 bg-white p-8 text-center text-neutral-400">
          <p className="text-sm">Priest companion app screenshot</p>
        </div>
      </div>
    </section>
  );
}
