import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Fotografía Corporativa en Cartagena | Eventos y Empresas",
  description:
    "Fotografía de eventos corporativos en Cartagena de Indias. Cobertura profesional de conferencias, lanzamientos, convenciones y sesiones de branding empresarial.",
  keywords: [
    "fotografía corporativa Cartagena",
    "fotógrafo eventos empresariales Cartagena",
    "cobertura corporativa Cartagena Colombia",
    "corporate photographer Cartagena",
  ],
  alternates: {
    canonical: "https://www.jesusreyesfoto.com/servicios/eventos-corporativos-cartagena",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fotografía de Eventos Corporativos en Cartagena",
  description: "Cobertura fotográfica profesional de eventos corporativos en Cartagena de Indias, Colombia.",
  provider: {
    "@type": "LocalBusiness",
    name: "Jesús Reyes Fotografía",
    url: "https://www.jesusreyesfoto.com",
    telephone: "+573001234567",
  },
  areaServed: { "@type": "City", name: "Cartagena de Indias" },
};

export default function CorporativoPage() {
  return (
    <ServicePageTemplate
      eyebrow="Corporativo · Cartagena"
      h1="Fotografía de eventos corporativos"
      heroImg="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1600&q=80"
      heroAlt="Fotografía corporativa de evento empresarial en Cartagena Colombia"
      intro="Tu empresa merece imágenes que comuniquen profesionalismo, innovación y el poder único de reunirse en Cartagena."
      body={[
        "Cartagena de Indias es el destino MICE (Meetings, Incentives, Conferences & Exhibitions) más importante del Caribe colombiano. Hoteles de lujo, centros de convenciones y escenarios históricos convierten cada evento corporativo en algo memorable.",
        "Ofrezco cobertura completa para eventos empresariales: conferencias y congresos, lanzamientos de productos, sesiones de branding y headshots corporativos, cenas de gala y reuniones de incentivo.",
        "Entrego las fotos editadas con rapidez profesional, con fechas pactadas según las necesidades de comunicación de tu empresa. También ofrezco formatos optimizados para redes sociales y prensa.",
      ]}
      gallery={[
        { src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80", alt: "Evento corporativo fotografiado en Cartagena Colombia", h: 320 },
        { src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=600&q=80", alt: "Conferencia empresarial Cartagena fotografía", h: 280 },
        { src: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=600&q=80", alt: "Fotografía de networking empresarial en Cartagena", h: 340 },
        { src: "https://images.unsplash.com/photo-1559223607-180220dc8060?w=600&q=80", alt: "Cobertura fotográfica corporativa Cartagena Colombia", h: 260 },
      ]}
      jsonLd={jsonLd}
      faq={[
        { q: "¿Pueden entregar fotos el mismo día del evento?", a: "Sí, para eventos corporativos ofrezco un servicio de entrega express de selección de fotos el mismo día o al día siguiente, ideal para comunicación en tiempo real en redes sociales." },
        { q: "¿Trabajan con agencias de eventos?", a: "Absolutamente. Tenemos experiencia trabajando con agencias de eventos y planificadores MICE en Cartagena. Contáctanos para hablar de tarifas para agencias." },
        { q: "¿Cubren eventos de varios días?", a: "Sí. Para eventos de múltiples días preparamos un presupuesto personalizado según la duración y tipo de cobertura requerida." },
      ]}
    />
  );
}
