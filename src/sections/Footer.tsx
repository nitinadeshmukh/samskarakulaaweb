import { Logo } from '../components/Logo';

const PRODUCT_LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#faq', label: 'FAQ' },
];

const LEGAL_LINKS = [
  { href: '/legal/terms', label: 'Terms & Conditions' },
  { href: '/legal/privacy', label: 'Privacy Policy' },
  { href: '/legal/refunds', label: 'Refund & Cancellation' },
  { href: '/legal/kundali-disclaimer', label: 'Kundali Disclaimer' },
];

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-5">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2.5">
              <Logo size={26} />
              <div>
                <p className="font-display text-sm font-semibold text-neutral-800">Samskara Kula</p>
                <p className="text-xs text-neutral-400">संस्कार कुल</p>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-neutral-500">
              A family-tree-driven ritual calendar, a vetted priest marketplace, and a tamper-evident
              record of every rite performed — wherever your family lives.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-400">Product</p>
            <nav className="flex flex-col gap-3 text-sm text-neutral-500">
              {PRODUCT_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-neutral-800">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-400">
              For Priests
            </p>
            <nav className="flex flex-col gap-3 text-sm text-neutral-500">
              <a href="#priests" className="hover:text-neutral-800">
                Join the roster
              </a>
            </nav>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-400">
              Get started
            </p>
            <nav className="flex flex-col gap-3 text-sm text-neutral-500">
              <a href="#waitlist" className="hover:text-neutral-800">
                Join the waitlist
              </a>
            </nav>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-neutral-400">Legal</p>
            <nav className="flex flex-col gap-3 text-sm text-neutral-500">
              {LEGAL_LINKS.map((l) => (
                <a key={l.href} href={l.href} className="hover:text-neutral-800">
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-neutral-200 pt-8 sm:flex-row sm:justify-between">
          <p className="text-xs text-neutral-400">
            &copy; {new Date().getFullYear()} Samskara Kula. All rights reserved.
          </p>
          <p className="text-xs text-neutral-400">संस्कार कुल</p>
        </div>
      </div>
    </footer>
  );
}
