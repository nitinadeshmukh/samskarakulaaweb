import { createClient } from '@supabase/supabase-js';

// This is the ONLY thing the marketing site talks to Supabase for — a
// write-only, anonymous behavior-event pipe (samskarakulaaapi migration
// 0017). Everything else about this site is still a static, backend-free
// build; this is a deliberately narrow, scoped exception, not a reversal of
// that design — see this repo's CLAUDE.md "Analytics" section.
//
// createClient() throws synchronously if either arg is missing/empty — and
// since this module is imported from App.tsx, that exception used to crash
// the entire site (a blank page for every visitor) if the build environment
// ever lacked these vars, exactly what happened on the first real CI deploy
// (this analytics wiring had only ever been built locally before, where a
// dev .env supplied them). Guarded here so a misconfigured env degrades to
// "analytics silently doesn't fire" instead of "the whole site is down" —
// matching trackEvent's own "should never break the page" comment below,
// which this guard is what actually makes true.
//
// Also gated on `typeof window !== 'undefined'`: analytics only ever fires
// from inside a browser (trackEvent is only ever called from a useEffect),
// so a client has no reason to exist during SSR prerendering
// (scripts/prerender.js) — and constructing one there isn't just wasted
// work, it crashes the build on Node 20 (GitHub Actions' runner as of this
// writing): @supabase/supabase-js's realtime-js subclient requires a native
// `WebSocket` global, which doesn't exist until Node 22.
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;
const supabase =
  typeof window !== 'undefined' && supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

const SESSION_KEY = 'sk_session_id';

// First-party, anonymous, random — not a fingerprint, not shared
// cross-site. Lets us group events into a visit without identifying who
// the visitor is.
function getSessionId(): string {
  let id = localStorage.getItem(SESSION_KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

// Fire-and-forget — a failed analytics write should never break the page.
// Only ever captures UI-navigation/interest signals (page, section, button
// clicked) — never anything a visitor typed into a form.
//
// The query builder returned by .insert() is a lazy thenable: it only sends
// the request once awaited or .then()'d. `void builder` alone never triggers
// the fetch — the .then()/.catch() below is what actually fires it.
export function trackEvent(eventName: string, properties: Record<string, unknown> = {}) {
  if (!supabase) return;
  supabase
    .from('analytics_events')
    .insert({
      source: 'website',
      session_id: getSessionId(),
      event_name: eventName,
      event_properties: properties,
    })
    .then(
      () => {},
      () => {},
    );
}
