import type { Metadata } from "next";
import ClientProviders from "@/components/ClientProviders";
import "./globals.css";

export const metadata: Metadata = {
  title: "KNK SKKIN — Skin, Understood | Advanced Aesthetics & Well-being",
  description:
    "KNK SKKIN is an advanced aesthetics and well-being studio in Lucknow — medifacials, laser, injectables, red light therapy, cold plunge and IV therapy, led by licensed skin doctors.",
  authors: [{ name: "KNK SKKIN" }],
  alternates: {
    canonical: "https://knkskkin.com/",
  },
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "KNK SKKIN — Skin, Understood",
    description: "A more considered approach to skin, aesthetics, recovery and well-being.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HealthAndBeautyBusiness",
  name: "KNK SKKIN",
  description: "Advanced aesthetics, skin science and well-being vertical of KNK Awadh Salon & Academy.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ground Floor, 11 B, Tilak Marg (Opposite Ganna Sansthaan), Dalibagh Colony, Hazratganj",
    addressLocality: "Lucknow",
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
