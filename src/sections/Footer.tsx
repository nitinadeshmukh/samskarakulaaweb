import { Logo } from '../components/Logo';

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-2.5">
          <Logo size={26} />
          <div>
            <p className="font-display text-sm font-semibold text-neutral-800">Samskara Kula</p>
            <p className="text-xs text-neutral-400">संस्कार कुल</p>
          </div>
        </div>
        <nav className="flex gap-6 text-sm text-neutral-500">
          <a href="#features" className="hover:text-neutral-800">
            Features
          </a>
          <a href="#how-it-works" className="hover:text-neutral-800">
            How it works
          </a>
          <a href="#priests" className="hover:text-neutral-800">
            For Priests
          </a>
        </nav>
        <p className="text-xs text-neutral-400">
          &copy; {new Date().getFullYear()} Samskara Kula. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
