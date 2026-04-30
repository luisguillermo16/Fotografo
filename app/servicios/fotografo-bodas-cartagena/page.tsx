import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Fotógrafo de Bodas en Cartagena | Jesús Reyes",
  description:
    "Fotógrafo de bodas en Cartagena de Indias. Capturamos cada momento de tu día especial en la Ciudad Amurallada, Islas del Rosario y los escenarios más románticos del Caribe colombiano.",
  keywords: [
    "fotógrafo de bodas Cartagena",
    "fotografía de bodas Cartagena de Indias",
    "boda Ciudad Amurallada fotografía",
    "wedding photographer Cartagena Colombia",
  ],
  alternates: {
    canonical: "https://www.jesusreyesfoto.com/servicios/fotografo-bodas-cartagena",
  },
  openGraph: {
    title: "Fotógrafo de Bodas en Cartagena | Jesús Reyes",
    description:
      "Capturamos cada momento de tu boda en los escenarios más románticos de Cartagena de Indias.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Fotografía de bodas en Cartagena de Indias",
      },
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fotografía de Bodas en Cartagena",
  description:
    "Servicio profesional de fotografía de bodas en Cartagena de Indias, Colombia. Cobertura completa de ceremonia y recepción.",
  provider: {
    "@type": "LocalBusiness",
    name: "Jesús Reyes Fotografía",
    url: "https://www.jesusreyesfoto.com",
    telephone: "+573001234567",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cartagena de Indias",
      addressRegion: "Bolívar",
      addressCountry: "CO",
    },
  },
  areaServed: {
    "@type": "City",
    name: "Cartagena de Indias",
  },
  offers: {
    "@type": "AggregateOffer",
    lowPrice: "120",
    highPrice: "320",
    priceCurrency: "USD",
  },
};

export default function BodaPage() {
  return (
    <ServicePageTemplate
      eyebrow="Fotografía de Bodas · Cartagena"
      h1="Fotógrafo de Bodas en Cartagena"
      heroImg="https://images.unsplash.com/photo-1519741497674-611481863552?w=1600&q=80"
      heroAlt="Pareja de novios fotografiada en Cartagena de Indias"
      intro="Tu boda en Cartagena merece fotografías que estén a la altura de la magia de este lugar. Cada imagen cuenta la historia de tu día más especial."
      body={[
        "Cartagena de Indias es uno de los destinos de bodas más codiciados de América Latina, y con razón: su arquitectura colonial, los colores vibrantes de sus calles y la luz del Caribe crean un escenario que ningún estudio puede replicar.",
        "Trabajo con una mirada documental y discreta durante la ceremonia, capturando emociones auténticas sin interrumpir el flujo del evento. En los momentos de las fotos formales y creativas, guío a los novios con paciencia y buen humor para que las imágenes sean naturales y elegantes.",
        "Cada entrega incluye la galería completa en alta resolución, accesible desde un link privado en la nube. También ofrezco álbumes impresos de alta calidad como complemento opcional.",
      ]}
      gallery={[
        {
          src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
          alt: "Fotografía de ceremonia de boda en Cartagena Ciudad Amurallada",
          h: 400,
        },
        {
          src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80",
          alt: "Novios en sesión fotográfica en Cartagena Colombia",
          h: 300,
        },
        {
          src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80",
          alt: "Boda profesional en Cartagena de Indias Colombia",
          h: 340,
        },
        {
          src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&q=80",
          alt: "Detalles de boda fotografiados en Cartagena",
          h: 260,
        },
        {
          src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
          alt: "Recepción de boda en Cartagena Colombia fotografía",
          h: 360,
        },
        {
          src: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=600&q=80",
          alt: "Fotografía artística de boda en Ciudad Amurallada",
          h: 280,
        },
      ]}
      jsonLd={jsonLd}
      faq={[
        {
          q: "¿Con cuánta anticipación debo reservar?",
          a: "Para bodas recomendamos reservar con al menos 3 meses de anticipación. La Ciudad Amurallada y los hoteles principales en Cartagena tienen fechas muy solicitadas, especialmente en temporada alta (diciembre–enero y julio–agosto).",
        },
        {
          q: "¿Trabajas con coordinadores de bodas?",
          a: "Sí, tengo experiencia trabajando junto a los principales coordinadores y planificadores de bodas en Cartagena. La comunicación previa con todo el equipo garantiza un resultado mejor para todos.",
        },
        {
          q: "¿Qué incluye el paquete de bodas?",
          a: "Todos los paquetes incluyen cobertura completa de la sesión, edición profesional de todas las fotos, galería privada en alta resolución y consulta previa de estilo. Los paquetes Standard y Maximum incluyen varias locaciones.",
        },
        {
          q: "¿Puedo ver trabajos anteriores de bodas?",
          a: "Por supuesto. Puedes ver el portafolio completo de bodas en la sección Portafolio de esta web, o solicitarme acceso a galerías completas por WhatsApp.",
        },
      ]}
    />
  );
}
