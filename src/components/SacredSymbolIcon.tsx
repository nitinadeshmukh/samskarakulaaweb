// Minimal line-art icons for a subset of src/data/hinduSymbols.ts — kept in
// the same 2px-stroke, understated style as Squiggles/GeoAccents rather than
// literal/ornate depictions, out of respect for the subject matter.
interface IconProps {
  name: string;
  size?: number;
  color?: string;
  className?: string;
}

export function SacredSymbolIcon({ name, size = 28, color = '#E0201B', className = '' }: IconProps) {
  const common = { width: size, height: size, viewBox: '0 0 24 24', className };

  switch (name) {
    case 'om':
      return (
        <span
          className={className}
          style={{ fontSize: size, lineHeight: 1, color, fontFamily: "'Fraunces', serif", fontWeight: 600 }}
        >
          ॐ
        </span>
      );
    case 'trishula':
      return (
        <svg {...common} fill="none" stroke={color} strokeWidth={1.6} strokeLinecap="round">
          <path d="M12 22 V10" />
          <path d="M12 10 V3 M8 6 C8 3.5 9.8 2 12 2 M16 6 C16 3.5 14.2 2 12 2" />
          <path d="M7 22h10" />
        </svg>
      );
    case 'shankha':
      return (
        <svg {...common} fill="none" stroke={color} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 4 C 20 8, 20 16, 13 21 C 7 21, 3 16, 5 12 C 7 15, 10 15, 10 12 C 10 9, 8 9, 7 10" />
        </svg>
      );
    case 'padma':
      return (
        <svg {...common} fill="none" stroke={color} strokeWidth={1.5} strokeLinejoin="round">
          <path d="M12 21 C 6 17, 6 11, 12 8 C 18 11, 18 17, 12 21 Z" />
          <path d="M12 21 C 9 15, 9 9, 12 4 C 15 9, 15 15, 12 21 Z" />
          <path d="M12 21 C 4 18, 3 12, 6 8 C 10 10, 11 15, 12 21 Z" opacity="0.6" />
          <path d="M12 21 C 20 18, 21 12, 18 8 C 14 10, 13 15, 12 21 Z" opacity="0.6" />
        </svg>
      );
    case 'diya':
      return (
        <svg {...common} fill="none" stroke={color} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 15 C 4 19, 20 19, 20 15 C 20 17, 4 17, 4 15 Z" />
          <path d="M12 14 C 10 10, 12 9, 12 6 C 14 9, 15 11, 12 14 Z" />
        </svg>
      );
    case 'kalash':
      return (
        <svg {...common} fill="none" stroke={color} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 8 C 8 14, 16 14, 16 8" />
          <path d="M9 8 L8 4 h8 l-1 4" />
          <path d="M6 3.5 C 8 5, 16 5, 18 3.5" />
        </svg>
      );
    case 'damaru':
      return (
        <svg {...common} fill="none" stroke={color} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 5 C 6 8, 10 10, 10 12 C 10 14, 6 16, 6 19" />
          <path d="M18 5 C 18 8, 14 10, 14 12 C 14 14, 18 16, 18 19" />
          <path d="M6 5 C 8 6.5, 16 6.5, 18 5 M6 19 C 8 17.5, 16 17.5, 18 19" />
        </svg>
      );
    case 'surya':
      return (
        <svg {...common} fill="none" stroke={color} strokeWidth={1.6} strokeLinecap="round">
          <circle cx="12" cy="12" r="4.5" />
          {Array.from({ length: 8 }).map((_, i) => {
            const angle = (i * Math.PI) / 4;
            const x1 = 12 + Math.cos(angle) * 7.5;
            const y1 = 12 + Math.sin(angle) * 7.5;
            const x2 = 12 + Math.cos(angle) * 10.5;
            const y2 = 12 + Math.sin(angle) * 10.5;
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
          })}
        </svg>
      );
    case 'mala':
      return (
        <svg {...common} fill="none" stroke={color} strokeWidth={1.4}>
          {Array.from({ length: 10 }).map((_, i) => {
            const angle = (i * 2 * Math.PI) / 10;
            const cx = 12 + Math.cos(angle) * 8;
            const cy = 12 + Math.sin(angle) * 8;
            return <circle key={i} cx={cx} cy={cy} r="1.6" fill={color} stroke="none" />;
          })}
        </svg>
      );
    case 'ghanti':
      return (
        <svg {...common} fill="none" stroke={color} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="4" r="1.4" />
          <path d="M12 5.5 V7" />
          <path d="M8 8 C 8 8, 7 16, 5 18 h14 c-2-2-3-10-3-10 C 15 7, 9 7, 8 8 Z" />
          <path d="M12 18 v2.5" />
        </svg>
      );
    default:
      return null;
  }
}
