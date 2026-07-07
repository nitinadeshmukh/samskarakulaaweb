import { Logo } from '../components/Logo';

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <Logo size={24} />
          <span className="text-sm font-semibold text-neutral-700">Samskara Kula</span>
        </div>
        <p className="text-xs text-neutral-400">
          &copy; {new Date().getFullYear()} Samskara Kula. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
