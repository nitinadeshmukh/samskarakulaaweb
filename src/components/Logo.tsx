interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 40, className }: LogoProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 1024 1024" className={className}>
      <defs>
        <linearGradient id="kula-gold" gradientUnits="userSpaceOnUse" x1="512" y1="700" x2="512" y2="250">
          <stop offset="0%" stopColor="#F97316" />
          <stop offset="60%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#FDE68A" />
        </linearGradient>
      </defs>
      <g stroke="url(#kula-gold)" strokeWidth={12} fill="none" strokeLinecap="round">
        <path d="M512 330 L 512 430" />
        <path d="M512 430 L 380 530" />
        <path d="M512 430 L 644 530" />
        <path d="M380 530 L 300 650" />
        <path d="M380 530 L 440 650" />
        <path d="M644 530 L 584 650" />
        <path d="M644 530 L 724 650" />
      </g>
      <g fill="url(#kula-gold)">
        <circle cx="512" cy="300" r="56" />
        <circle cx="380" cy="530" r="46" />
        <circle cx="644" cy="530" r="46" />
        <circle cx="300" cy="650" r="34" />
        <circle cx="440" cy="650" r="34" />
        <circle cx="584" cy="650" r="34" />
        <circle cx="724" cy="650" r="34" />
      </g>
    </svg>
  );
}
