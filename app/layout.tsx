import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { RevealObserver } from "@/components/RevealObserver";
import { site } from "@/content/site";
import "./globals.css";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  variable: "--font-display",
  display: "swap",
});

const fullName = `${site.firstName} ${site.lastName}`;

export const metadata: Metadata = {
  title: { default: fullName, template: `%s · ${fullName}` },
  description: site.description,
  openGraph: { title: fullName, description: site.description, type: "website" },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

// Runs before first paint and enables scroll reveals. If the app's JavaScript hasn't
// started within 2.5s (slow network, blocked script), reveals are switched off so
// nothing stays hidden.
const revealScript = `(function(){var r=document.documentElement;r.setAttribute('data-js','');setTimeout(function(){if(!window.__revealReady)r.removeAttribute('data-js')},2500)})();`;

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: fullName,
  description: site.description,
  affiliation: { "@type": "CollegeOrUniversity", name: "University of Virginia" },
  sameAs: site.links.map((l) => l.href),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={display.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: revealScript }} />
      </head>
      <body>
        <RevealObserver />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
