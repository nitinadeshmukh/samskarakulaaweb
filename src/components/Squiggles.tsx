// Hand-drawn-style decorative line doodles, scattered in a colored section's
// background — a Justinmind-style accent (per direct user request to borrow
// their structural patterns while keeping our own saffron/amber palette).
// Pure SVG line art, not a copy of any specific illustration.
export function Squiggles({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute ${className}`}
      width="420"
      height="260"
      viewBox="0 0 420 260"
      fill="none"
    >
      <path
        d="M4 60 C 90 10, 140 110, 220 60 S 340 10, 416 70"
        stroke="white"
        strokeOpacity="0.35"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M20 190 C 100 150, 150 230, 230 185 S 340 140, 400 200"
        stroke="white"
        strokeOpacity="0.22"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
