import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';

import App from './App';
import './index.css';

const rootEl = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App path={window.location.pathname} />
  </StrictMode>
);

// Production builds ship prerendered markup inside #root (see
// scripts/prerender.js) so crawlers that don't execute JS still see real
// content — hydrate onto it rather than re-rendering from scratch. In dev
// (`vite`/`vite preview` without the prerender step), #root starts empty, so
// fall back to a plain client render.
if (rootEl.hasChildNodes()) {
  hydrateRoot(rootEl, app);
} else {
  createRoot(rootEl).render(app);
}
