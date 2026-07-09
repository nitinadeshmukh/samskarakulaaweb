import { createClient } from '@supabase/supabase-js';

// This is the ONLY thing the marketing site talks to Supabase for — a
// write-only, anonymous behavior-event pipe (samskarakulaaapi migration
// 0017). Everything else about this site is still a static, backend-free
// build; this is a deliberately narrow, scoped exception, not a reversal of
// that design — see this repo's CLAUDE.md "Analytics" section.
const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_SUPABASE_ANON_KEY as string,
);

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
