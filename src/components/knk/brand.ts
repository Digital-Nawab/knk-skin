/** Lockup with white SKKIN wordmark — use over dark backgrounds. */
export const LOGO_ON_DARK = "/assets/knk-skkin-logo-dark.png";
/** Lockup with black SKKIN wordmark — use over light backgrounds. */
export const LOGO_ON_LIGHT = "/assets/knk-skkin-logo-light.png";

export const CONTACT = {
  address:
    "Ground Floor, 11 B, Tilak Marg (Opposite Ganna Sansthaan), Dalibagh Colony, Hazratganj",
  city: "Lucknow",
  /** Dummy number for design/preview only — not the client's real line. Render as plain text, never as a working tel:/wa.me link, until a real number is confirmed. */
  phonePlaceholder: "+91 98765 43210",
  /** Not yet provided by the client ("Email id (temp)" in the source doc). Render as plain text, never as a mailto: link. */
  emailPlaceholder: "[Email Address]",
  /** Real Instagram handle not yet provided by the client. */
  instagramUrl: "",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=" +
    encodeURIComponent(
      "KNK SKKIN, Ground Floor, 11 B, Tilak Marg, Dalibagh Colony, Hazratganj, Lucknow",
    ),
};

export type NavLink =
  | { label: string; kind: "route"; to: string }
  | { label: string; kind: "anchor"; hash: string }
  | {
      label: string;
      kind: "dropdown";
      items: { label: string; to: string }[];
    };

/** Header nav, in order. "Book a Consultation" is deliberately not in this list — it's rendered as the separate CTA slot. */
export const NAV_LINKS: NavLink[] = [
  { label: "Home", kind: "route", to: "/" },
  { label: "About", kind: "anchor", hash: "#our-vision" },
  { label: "Treatments", kind: "route", to: "/treatments" },
  { label: "Wellness", kind: "route", to: "/wellness" },
  {
    label: "Aesthetics",
    kind: "dropdown",
    items: [
      { label: "Aesthetics", to: "/aesthetic" },
      { label: "Microblading", to: "/microblading" },
      { label: "Laser", to: "/laser-treatment" },
    ],
  },
];

export const BOOK_CONSULTATION_HASH = "#book-consultation";
