import { useEffect, useRef } from 'react';

import { trackEvent } from '../lib/analytics';

// Fires a single 'section_viewed' event the first time a section scrolls
// into view — separate from Reveal (which is about animation, and fires
// once per individual card/item, too granular for a section-level signal).
export function useSectionView(sectionName: string) {
  const ref = useRef<HTMLElement>(null);
  const fired = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !fired.current) {
          fired.current = true;
          trackEvent('section_viewed', { section: sectionName });
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [sectionName]);

  return ref;
}
