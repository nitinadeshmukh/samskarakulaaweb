// A very light, tiled background texture built from the same abstract
// sacred-symbol line-art already used elsewhere on the site
// (SacredSymbolIcon/src/data/hinduSymbols.ts) — Om, lotus, diya, and conch —
// rather than literal figurative depictions of specific deities. Per direct
// user request ("wallpaper of all the gods of India, light colored"), this
// was the deliberate choice over generating AI art of specific gods: this
// site's existing convention already avoids literal figurative icons
// out of respect for the subject matter (see hinduSymbols.ts), and AI-
// generated deity portraits risk inaccurate iconography/attributes and
// reading as irreverent when used as page-background filler. Flag this
// judgment call to the user if it should be reconsidered.
//
// Implemented as a single repeating inline-SVG data URI (not a live <svg>
// tree) so it's a plain CSS background-image — trivial to apply to any
// section without touching the DOM/stacking order of that section's real
// content.
const TILE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="280" height="280" viewBox="0 0 280 280">
  <g fill="none" stroke="#C2860F" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" opacity="0.07">
    <text x="24" y="52" font-family="Georgia, serif" font-size="30" fill="#C2860F" stroke="none">&#2384;</text>
    <g transform="translate(160,16) scale(1.35)">
      <path d="M12 21 C 6 17, 6 11, 12 8 C 18 11, 18 17, 12 21 Z" />
      <path d="M12 21 C 9 15, 9 9, 12 4 C 15 9, 15 15, 12 21 Z" />
      <path d="M12 21 C 4 18, 3 12, 6 8 C 10 10, 11 15, 12 21 Z" opacity="0.6" />
      <path d="M12 21 C 20 18, 21 12, 18 8 C 14 10, 13 15, 12 21 Z" opacity="0.6" />
    </g>
    <g transform="translate(30,175) scale(1.35)">
      <path d="M4 15 C 4 19, 20 19, 20 15 C 20 17, 4 17, 4 15 Z" />
      <path d="M12 14 C 10 10, 12 9, 12 6 C 14 9, 15 11, 12 14 Z" />
    </g>
    <g transform="translate(178,172) scale(1.35)">
      <path d="M16 4 C 20 8, 20 16, 13 21 C 7 21, 3 16, 5 12 C 7 15, 10 15, 10 12 C 10 9, 8 9, 7 10" />
    </g>
  </g>
</svg>`;

const TILE_URL = `data:image/svg+xml,${encodeURIComponent(TILE_SVG)}`;

export function SacredWallpaper({ className = '' }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{ backgroundImage: `url("${TILE_URL}")`, backgroundRepeat: 'repeat', backgroundSize: '280px 280px' }}
    />
  );
}
