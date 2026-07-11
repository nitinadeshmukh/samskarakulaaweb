import { Reveal } from '../components/Reveal';
import { useSectionView } from '../hooks/useSectionView';

// Deliberately loud/high-visibility placement — direct product decision,
// not a footnote. Deposit-plus-auto-charge (see apps' CLAUDE.md §4g) was
// the single most-requested trust signal found researching real complaints
// about virtual pujas: "who knows if they even did it before I pay." This
// section exists to make that policy impossible to miss, not to bury it in
// a FAQ.
export function PaymentTrust() {
  const ref = useSectionView('payment_trust');
  return (
    <section
      ref={ref}
      id="payment-trust"
      className="bg-gradient-to-br from-kula-navyDeep via-kula-navy to-kula-navyDark px-6 py-20 text-white"
    >
      <div className="mx-auto max-w-4xl text-center">
        <Reveal>
          <p className="eyebrow text-kula-gold">Our promise</p>
          <h2 className="font-display text-3xl font-semibold sm:text-5xl">
            You never pay in full until your ritual is verified complete.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
            Pay just <span className="font-semibold text-kula-gold">25% now</span> to confirm your priest.
            We automatically collect the remaining balance only after your Proof-of-Ritual video confirms
            the rite was actually performed — never a moment before.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
              <div className="text-3xl font-bold text-kula-gold">25%</div>
              <p className="mt-2 text-sm text-white/70">Pay a small deposit to confirm your booking</p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
              <div className="text-3xl">🎥</div>
              <p className="mt-2 text-sm text-white/70">
                Your priest performs the ritual — Proof-of-Ritual video is verified server-side
              </p>
            </div>
            <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
              <div className="text-3xl">✅</div>
              <p className="mt-2 text-sm text-white/70">
                Only then is the remaining balance ever charged — automatically, no second payment step
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-8 text-xs text-white/50">
            No hidden fees. No pay-and-hope. If your ritual is never verified, you're never charged the
            balance.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
