// A wavy bottom-edge transition out of a colored section, into whatever
// background sits below it — the Justinmind-style "curved section divider"
// pattern, borrowed structurally per direct user request (color palette
// stays saffron/amber, not their purple).
export function WaveDivider({ fill = '#fff', className = '' }: { fill?: string; className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-x-0 bottom-0 w-full ${className}`}
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      fill="none"
    >
      <path
        d="M0 40 C 240 90, 480 0, 720 35 S 1200 90, 1440 30 L1440 90 L0 90 Z"
        fill={fill}
      />
    </svg>
  );
}
