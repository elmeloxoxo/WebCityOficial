import type { Metadata, Viewport } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { AmbientTexture } from "@/components/ambient-texture";
import { site } from "@/lib/site";

import "./globals.css";

const displayFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "WebCity · Diseño web y apps móviles desde Iquitos",
    template: "%s · WebCity",
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: "WebCity", url: site.url }],
  creator: "WebCity",
  publisher: "WebCity",
  keywords: [
    "diseño web Iquitos",
    "desarrollo de páginas web Iquitos",
    "aplicaciones móviles Iquitos",
    "agencia digital Loreto",
    "WebCity",
    "UNAP",
    "FISI",
    "transformación digital Amazonía",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.name,
    title: "WebCity · Diseño web y apps móviles desde Iquitos",
    description: site.shortDescription,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "WebCity — estudio digital de Iquitos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebCity · Diseño web y apps móviles desde Iquitos",
    description: site.shortDescription,
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#0b1e34",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#organization`,
  name: site.name,
  description: site.description,
  url: site.url,
  email: site.email,
  telephone: site.phoneHref,
  priceRange: "S/ 1,200 – S/ 10,000",
  image: `${site.url}/opengraph-image.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle Pevas 245",
    addressLocality: "Iquitos",
    addressRegion: "Loreto",
    addressCountry: "PE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: site.coordinates.lat,
    longitude: site.coordinates.lng,
  },
  areaServed: [
    { "@type": "City", name: "Iquitos" },
    { "@type": "AdministrativeArea", name: "Loreto" },
    { "@type": "Country", name: "Perú" },
  ],
  founder: {
    "@type": "Organization",
    name: "Facultad de Ingeniería de Sistemas e Informática — UNAP",
  },
  sameAs: site.social.map((social) => social.href),
  knowsAbout: [
    "Desarrollo web",
    "Aplicaciones móviles",
    "Next.js",
    "React Native",
    "SEO local",
    "Comercio electrónico",
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Diseño y desarrollo de sitios web" },
    },
    {
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: "Desarrollo de aplicaciones móviles" },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="es-PE"
      data-scroll-behavior="smooth"
      className={`${displayFont.variable} ${bodyFont.variable}`}
    >
      <body>
        <AmbientTexture />
        <div className="site-shell">
          <a className="skip-link" href="#contenido">
            Saltar al contenido principal
          </a>
          <SiteHeader />
          <main id="contenido">{children}</main>
          <SiteFooter />
        </div>
        <script
          type="application/ld+json"
          // Datos controlados por nosotros: no hay entrada de usuario.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </body>
    </html>
  );
}
