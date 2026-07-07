import { Logo } from '../components/Logo';

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-kula-navy/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <Logo size={32} />
          <span className="text-lg font-bold text-white">Samskara Kula</span>
        </div>
        <nav className="hidden items-center gap-8 text-sm font-medium text-white/80 sm:flex">
          <a href="#features" className="hover:text-white">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-white">
            How it works
          </a>
          <a href="#priests" className="hover:text-white">
            For Priests
          </a>
        </nav>
        <a
          href="#waitlist"
          className="rounded-lg bg-kula-amber px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600"
        >
          Join the Waitlist
        </a>
      </div>
    </header>
  );
}
