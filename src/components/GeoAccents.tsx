// Playful geometric accent shapes scattered around an illustration — a
// Justinmind-style decoration (their site uses a pastel circle, a solid
// triangle, and a dotted-grid square near feature illustrations). Original
// shapes in our own palette, not a copy of their specific artwork.
export function GeoCircle({ className = '', color = '#FBBF24' }: { className?: string; color?: string }) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full opacity-70 ${className}`}
      style={{ backgroundColor: color }}
    />
  );
}

export function GeoTriangle({ className = '', color = '#F97316' }: { className?: string; color?: string }) {
  return (
    <svg className={`pointer-events-none absolute ${className}`} width="44" height="40" viewBox="0 0 44 40" fill="none">
      <path d="M22 2 L42 38 L2 38 Z" fill={color} opacity="0.85" />
    </svg>
  );
}

export function GeoDots({ className = '' }: { className?: string }) {
  return (
    <svg className={`pointer-events-none absolute ${className}`} width="60" height="60" viewBox="0 0 60 60" fill="none">
      {Array.from({ length: 4 }).map((_, row) =>
        Array.from({ length: 4 }).map((_, col) => (
          <circle key={`${row}-${col}`} cx={8 + col * 15} cy={8 + row * 15} r="2.5" fill="#0E4F9E" opacity="0.25" />
        )),
      )}
    </svg>
  );
}
