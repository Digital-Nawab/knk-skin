"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BOOK_CONSULTATION_HASH, LOGO_ON_DARK, LOGO_ON_LIGHT, NAV_LINKS, type NavLink } from "./brand";
import { EASE, Magnetic } from "./Reveal";

/** Resolves a nav link to a router target, accounting for anchors that may need a cross-page "/#hash" jump. */
const linkTarget = (link: NavLink, isHome: boolean) =>
  link.kind === "route" ? link.to : isHome ? link.hash : `/${link.hash}`;

const Navigation = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(!isHome);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const [hidden, setHidden] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 40 });

  useMotionValueEvent(scrollY, "change", (current) => {
    const previous = scrollY.getPrevious() ?? current;
    setHidden(current > previous && current > 160);
  });

  useEffect(() => {
    if (!isHome) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  useEffect(() => {
    if (!isHome) return;
    const sections = NAV_LINKS.filter((l): l is NavLink & { kind: "anchor" } => l.kind === "anchor")
      .map((l) => document.querySelector(l.hash))
      .filter(Boolean) as Element[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (link: NavLink) =>
    link.kind === "route" ? pathname === link.to : isHome && active === link.hash;

  // The consultation form is now embedded on every page, so this is always a same-page anchor.
  const bookHref = BOOK_CONSULTATION_HASH;

  return (
    <>
      {/*
        The blur/background layer is kept separate from the transform-animating outer element
        on purpose: compositing `backdrop-filter: blur()` on the same element that's also being
        translated via a per-frame `y` transform causes visible smearing/ghosting while scrolling
        (the browser has to resample the blur and reposition the layer in the same paint pass).
        Splitting them lets the browser treat the blurred bar as a single composited bitmap that
        the outer element just translates, instead of re-blurring on every frame it moves.
      */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: hidden && !open ? "-100%" : 0, opacity: 1 }}
        transition={mounted ? { duration: 0.5, ease: EASE } : { duration: 1, delay: 1.6, ease: EASE }}
        onAnimationComplete={() => setMounted(true)}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`relative transition-[background-color,border-color,padding] duration-700 ease-lux ${
            scrolled
              ? "border-b border-border bg-background/90 py-3 backdrop-blur-md"
              : "border-b border-transparent py-6"
          }`}
        >
          <motion.div
            className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gold-gradient"
            style={{ scaleX: progress }}
          />
          <nav
            aria-label="Primary"
            className="mx-auto flex max-w-[1600px] items-center justify-between px-6 md:px-10"
          >
            <Link href="/" aria-label="KNK SKKIN home" className="shrink-0">
              <img
                src={scrolled ? LOGO_ON_LIGHT : LOGO_ON_DARK}
                alt="KNK SKKIN"
                className={`w-auto transition-all duration-700 ease-lux ${
                  scrolled ? "h-8 md:h-9" : "h-10 md:h-12"
                }`}
              />
            </Link>

            <ul className="hidden items-center gap-8 lg:flex">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={linkTarget(link, isHome)}
                    className={`label-xs link-line transition-colors duration-500 ${
                      scrolled
                        ? isActive(link)
                          ? "text-primary"
                          : "text-foreground/70 hover:text-primary"
                        : isActive(link)
                          ? "text-gold-light"
                          : "text-background/75 hover:text-background"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <Magnetic className="hidden sm:block">
                <Link
                  href={bookHref}
                  className={`group inline-flex items-center gap-3 border px-6 py-3 label-xs transition-colors duration-500 ease-lux ${
                    scrolled
                      ? "border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground"
                      : "border-background/40 text-background hover:bg-background hover:text-foreground"
                  }`}
                >
                  Book a consultation
                  <span className="transition-transform duration-500 ease-lux group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </Magnetic>

              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] lg:hidden"
              >
                <span
                  className={`h-px w-6 transition-colors duration-500 ${scrolled ? "bg-foreground" : "bg-background"}`}
                />
                <span
                  className={`h-px w-6 transition-colors duration-500 ${scrolled ? "bg-foreground" : "bg-background"}`}
                />
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.7, ease: EASE }}
            className="fixed inset-0 z-[60] flex flex-col bg-secondary text-secondary-foreground lg:hidden"
          >
            <div className="flex items-center justify-between px-6 py-6">
              <img src={LOGO_ON_DARK} alt="KNK SKKIN" className="h-10 w-auto" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="label-xs text-secondary-foreground/70"
              >
                Close
              </button>
            </div>

            <ul className="flex flex-1 flex-col justify-center gap-2 px-6">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.06, ease: EASE }}
                >
                  <Link
                    href={linkTarget(link, isHome)}
                    onClick={() => setOpen(false)}
                    className="display block py-3 text-4xl uppercase text-secondary-foreground/90"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="px-6 pb-12">
              <Link
                href={bookHref}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border border-gold/40 px-6 py-5 label-xs text-gold-light"
              >
                Book a consultation <span>→</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
