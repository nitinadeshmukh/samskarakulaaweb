import { useState } from 'react';

// No waitlist-collection backend exists yet (no Edge Function/table for this,
// and no third-party form service is wired up) — this intentionally only
// shows a local "thanks" state rather than fabricating a successful submit.
// Wire this to a real endpoint (a Supabase table + Edge Function, or a
// service like Mailchimp/ConvertKit) before relying on it to capture leads.
export function Waitlist() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="px-6 py-20">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="mb-3 text-3xl font-bold text-neutral-900">Join the waitlist</h2>
        <p className="mb-8 text-neutral-600">
          Be the first to know when Samskara Kula launches in your region.
        </p>
        {submitted ? (
          <p className="rounded-xl bg-green-50 px-6 py-4 text-green-700">
            Thanks — we'll be in touch.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="flex-1 rounded-xl border border-neutral-300 px-4 py-3 text-base focus:border-kula-navy focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-xl bg-kula-amber px-6 py-3 font-semibold text-white hover:bg-orange-600"
            >
              Notify Me
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
