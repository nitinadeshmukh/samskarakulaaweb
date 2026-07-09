interface LogoProps {
  size?: number;
  className?: string;
}

export function Logo({ size = 40, className }: LogoProps) {
  return <img src="/logo.png" width={size} height={size} alt="Samskara Kula" className={className} />;
}
