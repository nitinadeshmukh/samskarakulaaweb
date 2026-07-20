import { useState } from 'react';

import { Reveal } from '../components/Reveal';
import { submitWaitlistEmail, trackEvent, trackMetaEvent } from '../lib/analytics';

// Persists to the real waitlist_signups table (samskarakulaaapi migration
// 0062) via submitWaitlistEmail — previously this only set local "thanks"
// state with nothing actually captured.
export function Waitlist() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    try {
      await submitWaitlistEmail(email);
      setSubmitted(true);
      trackEvent('waitlist_submitted', {});
      // Standard Meta event — lets Meta's algorithm optimize ad delivery
      // toward people likely to submit, and builds a Lead-based Custom
      // Audience for Lookalikes. Now fires only after a real, persisted
      // signup, not on every client-side "submit" regardless of outcome.
      trackMetaEvent('Lead');
    } catch {
      setError("Something went wrong — please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="waitlist" className="px-6 py-24">
      <Reveal className="mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-3xl bg-kula-navyDeep px-8 py-16 text-center text-white sm:px-16">
          <div className="bg-aurora pointer-events-none absolute inset-0" />
          <div className="relative">
            <h2 className="mb-3 font-display text-3xl font-semibold sm:text-4xl">Join the waitlist</h2>
            <p className="mx-auto mb-9 max-w-md text-white/70">
              Be the first to know when Samskara Kula launches in your region.
            </p>
            {submitted ? (
              <p className="mx-auto max-w-sm rounded-xl bg-emerald-400/15 px-6 py-4 text-emerald-300">
                Thanks — we&apos;ll be in touch.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="flex-1 rounded-full border border-white/20 bg-white/5 px-5 py-3.5 text-base text-white placeholder:text-white/40 focus:border-kula-gold focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full bg-kula-amber px-7 py-3.5 font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:bg-[#B91915] disabled:opacity-60"
                >
                  {isSubmitting ? 'Submitting…' : 'Notify Me'}
                </button>
              </form>
            )}
            {error && <p className="mt-3 text-sm text-red-300">{error}</p>}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
