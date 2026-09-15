"use client";

import { Instagram, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { LOGO_ON_DARK, CONTACT, NAV_LINKS, BOOK_CONSULTATION_HASH } from "./brand";
import { Reveal } from "./Reveal";

const Footer = () => (
 <footer className="relative overflow-hidden bg-[#6B4324] px-4 py-10 md:px-10 md:py-16">
    <div className="mx-auto max-w-4xl overflow-hidden rounded-[28px] border border-background/10 bg-[#6B4324] text-secondary-foreground grain">
      <div className="flex flex-col items-center px-6 py-14 text-center md:px-16 md:py-20">
        <Reveal className="flex flex-col items-center">
          <img src={LOGO_ON_DARK} alt="KNK SKKIN" className="h-16 w-auto md:h-20" />
          <p className="mt-4 text-[11px] uppercase tracking-[0.3em] text-secondary-foreground/50">
            Salon &amp; Academy
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <ul className="mt-8 flex items-center justify-center gap-4">
            <li>
              {CONTACT.instagramUrl ? (
                <a
                  href={CONTACT.instagramUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Instagram"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-background/25 text-secondary-foreground/70 transition-colors duration-500 ease-lux hover:border-gold hover:text-gold"
                >
                  <Instagram className="h-4 w-4" />
                </a>
              ) : (
                <span
                  aria-disabled="true"
                  title="Instagram handle pending"
                  className="flex h-11 w-11 cursor-not-allowed items-center justify-center rounded-full border border-background/15 text-secondary-foreground/30"
                >
                  <Instagram className="h-4 w-4" />
                </span>
              )}
            </li>
            <li>
              <span
                aria-disabled="true"
                title={`Call — ${CONTACT.phonePlaceholder}`}
                className="flex h-11 w-11 cursor-not-allowed items-center justify-center rounded-full border border-background/15 text-secondary-foreground/30"
              >
                <Phone className="h-4 w-4" />
              </span>
            </li>
            <li>
              <a
                href={CONTACT.mapsUrl}
                target="_blank"
                rel="noreferrer noopener"
                aria-label="Get directions to KNK SKKIN"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-background/25 text-secondary-foreground/70 transition-colors duration-500 ease-lux hover:border-gold hover:text-gold"
              >
                <MapPin className="h-4 w-4" />
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.12} className="mt-8 space-y-1.5">
          <p className="text-sm text-secondary-foreground/70">{CONTACT.phonePlaceholder}</p>
          {/* Temp email from the source doc — shown as a flagged placeholder, not a live mailto: link. */}
          <p className="text-sm text-secondary-foreground/70">{CONTACT.emailPlaceholder}</p>
          <address className="not-italic text-sm text-secondary-foreground/70">
            {CONTACT.address}, {CONTACT.city}
          </address>
        </Reveal>

        <Reveal delay={0.18}>
          <Link
            href={BOOK_CONSULTATION_HASH}
            className="group mt-8 inline-flex items-center gap-4 border border-background/25 px-6 py-4 label-xs transition-colors duration-500 ease-lux hover:bg-background hover:text-foreground"
          >
            Book a consultation
            <span className="transition-transform duration-500 ease-lux group-hover:translate-x-1">→</span>
          </Link>
        </Reveal>
      </div>

      <div className="flex flex-col items-center gap-2 border-t border-background/10 px-6 py-5 text-center sm:flex-row sm:justify-between md:px-16">
        <p className="label-xs text-secondary-foreground/40">
          © {new Date().getFullYear()} KNK SKKIN — KNK Awadh Salon &amp; Academy
        </p>
        <p className="label-xs text-secondary-foreground/40">Skin, understood.</p>
      </div>
    </div>
  </footer>
);

export default Footer;