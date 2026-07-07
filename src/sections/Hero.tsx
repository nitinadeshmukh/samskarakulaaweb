import { Logo } from '../components/Logo';

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-kula-navy to-kula-navyDark px-6 pb-24 pt-20 text-center text-white">
      <div className="mx-auto max-w-3xl">
        <Logo size={72} className="mx-auto mb-8" />
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-kula-gold">
          संस्कार कुल
        </p>
        <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl">
          Never miss a samskara — wherever your family lives.
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-lg text-white/80">
          A family-tree-driven ritual calendar, a vetted priest marketplace, and a
          tamper-evident record of every rite performed — built for Hindu families
          across the diaspora.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#waitlist"
            className="rounded-xl bg-kula-amber px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-orange-900/30 hover:bg-orange-600"
          >
            Join the Waitlist
          </a>
          <a
            href="#how-it-works"
            className="rounded-xl border border-white/30 px-8 py-3.5 text-base font-semibold text-white hover:bg-white/10"
          >
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
