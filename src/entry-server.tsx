import { renderToString } from 'react-dom/server';

import App from './App';

// Used only by scripts/prerender.js (via vite's ssrLoadModule) — never
// imported by the browser bundle. Effects (analytics, scroll listeners,
// IntersectionObserver) never run during renderToString, so this is safe
// even though App/its sections reference window/localStorage inside
// useEffect.
export function render(path: string): string {
  return renderToString(<App path={path} />);
}
