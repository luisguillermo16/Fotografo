import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jesusreyesfoto.com"),
  title: {
    default: "Fotógrafo en Cartagena | TU NOMBRE Fotografía",
    template: "%s | TU NOMBRE Fotografía · Cartagena",
  },
  description:
    "Fotógrafo profesional en Cartagena de Indias. Especialista en bodas, familias, retratos, quinceañeras y viajeros en la Ciudad Amurallada y el Caribe colombiano.",
  keywords: [
    "fotógrafo Cartagena",
    "fotógrafo de bodas Cartagena",
    "sesión de fotos Cartagena Colombia",
    "fotógrafo profesional Cartagena",
    "fotografía Ciudad Amurallada",
  ],
  authors: [{ name: "TU NOMBRE", url: "https://www.jesusreyesfoto.com" }],
  creator: "TU NOMBRE",
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://www.jesusreyesfoto.com",
    siteName: "TU NOMBRE Fotografía",
    title: "Fotógrafo en Cartagena | TU NOMBRE Fotografía",
    description:
      "Fotógrafo profesional en Cartagena de Indias. Bodas, familias, retratos y viajeros en la Ciudad Amurallada.",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "TU NOMBRE Fotografía — Fotógrafo en Cartagena de Indias",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fotógrafo en Cartagena | TU NOMBRE Fotografía",
    description:
      "Fotógrafo profesional en Cartagena de Indias. Bodas, familias, retratos y viajeros.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.jesusreyesfoto.com/#business",
  name: "TU NOMBRE Fotografía",
  description:
    "Fotógrafo profesional en Cartagena de Indias especializado en bodas, familias, retratos y sesiones para viajeros.",
  url: "https://www.jesusreyesfoto.com",
  telephone: "+573001234567",
  email: "hola@jesusreyesfoto.com",
  image: "https://www.jesusreyesfoto.com/og-image.jpg",
  priceRange: "$$",
  currenciesAccepted: "USD, COP",
  paymentAccepted: "Cash, Credit Card, Transfer",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ciudad Amurallada",
    addressLocality: "Cartagena de Indias",
    addressRegion: "Bolívar",
    postalCode: "130001",
    addressCountry: "CO",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 10.4236,
    longitude: -75.5478,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "07:00",
      closes: "20:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/jesusreyesfoto",
    "https://www.behance.net/jesusreyesfoto",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de Fotografía",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Fotografía de Bodas en Cartagena",
          url: "https://www.jesusreyesfoto.com/servicios/fotografo-bodas-cartagena",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sesiones de Fotos para Viajeros",
          url: "https://www.jesusreyesfoto.com/servicios/viajeros-cartagena",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
      </head>
      <body>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
