"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Adds `.in` to every [data-reveal] element the first time it scrolls into view.
// Content is visible by default; the hidden starting state only applies once
// the inline script in <head> has marked the page with data-js.

const HEADER_MS = 1150; // let the header's entrance finish before rows start

export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    (window as Window & { __revealReady?: boolean }).__revealReady = true;
    // The fallback in <head> already turned reveals off: leave everything as it is.
    if (!document.documentElement.hasAttribute("data-js")) return;

    const mounted = performance.now();
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.in)"));
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          const wait = Math.max(0, HEADER_MS - (performance.now() - mounted));
          el.style.setProperty("--wait", `${Math.round(wait)}ms`);
          el.classList.add("in");
          io.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
