"use client";

import { useEffect, useState } from "react";

/**
 * useScrollSpy
 * -----------------------------------------------------------------------
 * Returns the id of the section currently in view, out of the given list
 * of section ids. Intended to drive active-link styling in the Navbar —
 * e.g. `const active = useScrollSpy(["hero", "about", "services"])`.
 *
 * Not wired into Navbar.tsx in this phase since that file is off-limits
 * to edit — import and use this hook there when you're ready.
 */
export function useScrollSpy(sectionIds: string[], offset = 120): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    function handleScroll() {
      let current: string | null = null;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= offset && rect.bottom > offset) {
          current = id;
          break;
        }
      }

      setActiveId(current);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeId;
}
