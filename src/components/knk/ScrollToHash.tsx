"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Next.js doesn't scroll to the URL hash on route change — only real same-document
 * `<a href="#...">` clicks get that native browser behavior. This covers the cross-page case
 * (e.g. a "/#our-vision" link clicked from /treatments) by scrolling to the matching element
 * once the destination page has mounted.
 */
const ScrollToHash = () => {
  const pathname = usePathname();

  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    if (!hash) return;
    const id = hash.slice(1);
    const timeout = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
    return () => window.clearTimeout(timeout);
  }, [pathname]);

  return null;
};

export default ScrollToHash;
