import { useEffect, useState } from 'react';

import { Logo } from '../components/Logo';
import { trackEvent } from '../lib/analytics';

const LINKS = [
  { href: '#services', label: 'Services' },
  { href: '#features', label: 'Features' },
  { href: '#how-it-works', label: 'How it works' },
  { href: '#faq', label: 'FAQ' },
  { href: '#priests', label: 'For Priests' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow ${scrolled ? 'shadow-sm shadow-neutral-900/5' : ''}`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-2.5">
          <Logo size={32} />
          <img src="/wordmark.webp" alt="Samskara Kula" className="h-7 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-600 sm:flex">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="transition-colors hover:text-neutral-900">
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#waitlist"
          onClick={() => trackEvent('cta_clicked', { cta: 'join-waitlist', location: 'nav' })}
          className="hidden rounded-full bg-neutral-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-black sm:inline-block"
        >
          Join the Waitlist
        </a>

        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          className="flex h-9 w-9 items-center justify-center rounded-lg text-neutral-900 sm:hidden"
        >
          <svg width={22} height={22} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
            {menuOpen ? <path d="M6 6 L18 18 M18 6 L6 18" /> : <path d="M4 7h16 M4 12h16 M4 17h16" />}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-neutral-100 bg-white px-6 py-4 sm:hidden">
          <nav className="flex flex-col gap-4 text-sm font-medium text-neutral-700">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
            <a
              href="#waitlist"
              onClick={() => {
                trackEvent('cta_clicked', { cta: 'join-waitlist', location: 'nav-mobile' });
                setMenuOpen(false);
              }}
              className="mt-1 rounded-full bg-neutral-900 px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Join the Waitlist
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
