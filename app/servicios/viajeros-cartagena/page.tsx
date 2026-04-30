import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Fotógrafo para Viajeros en Cartagena | Sesiones Turísticas",
  description:
    "Fotógrafo profesional para turistas y viajeros en Cartagena de Indias. Lleva fotos increíbles de la Ciudad Amurallada, Getsemaní y las playas del Caribe colombiano.",
  keywords: [
    "fotógrafo para viajeros Cartagena",
    "sesión de fotos turistas Cartagena",
    "photographer for tourists Cartagena Colombia",
    "sesión de fotos Ciudad Amurallada",
  ],
  alternates: {
    canonical: "https://www.jesusreyesfoto.com/servicios/viajeros-cartagena",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fotografía para Viajeros en Cartagena",
  description: "Sesiones fotográficas para turistas y viajeros en Cartagena de Indias, Colombia.",
  provider: {
    "@type": "LocalBusiness",
    name: "TU NOMBRE Fotografía",
    url: "https://www.jesusreyesfoto.com",
    telephone: "+573001234567",
  },
  areaServed: { "@type": "City", name: "Cartagena de Indias" },
};

export default function ViajerosPage() {
  return (
    <ServicePageTemplate
      eyebrow="Viajeros · Cartagena"
      h1="Lleva el Caribe contigo"
      heroImg="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&q=80"
      heroAlt="Turista en sesión fotográfica en Cartagena de Indias Colombia"
      intro="Viajaste hasta aquí para vivir algo especial. Mereces fotos que cuenten esa historia de verdad — no selfies de teléfono."
      body={[
        "Cada año, miles de viajeros de todo el mundo llegan a Cartagena de Indias atraídos por sus murallas, sus colores y el ambiente único del Caribe colombiano. Y la pregunta siempre es la misma: ¿cómo llevar fotos de verdad de este lugar?",
        "Ofrezco sesiones flexibles diseñadas especialmente para viajeros: desde una hora rápida antes del almuerzo hasta sesiones completas que recorren los mejores puntos fotográficos de la ciudad.",
        "Conozco cada rincón de Cartagena — las horas en que la luz es perfecta, los callejones menos transitados y los escenarios que no aparecen en las guías turísticas. Eso convierte tu sesión en algo verdaderamente único.",
      ]}
      gallery={[
        { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", alt: "Viajero en sesión fotográfica en Cartagena Colombia", h: 340 },
        { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80", alt: "Sesión fotográfica turística en Ciudad Amurallada Cartagena", h: 360 },
        { src: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=600&q=80", alt: "Fotógrafo viajeros Cartagena Colombia", h: 280 },
        { src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&q=80", alt: "Pareja de viajeros en Cartagena de Indias", h: 300 },
        { src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80", alt: "Turista individual en sesión fotográfica Getsemaní Cartagena", h: 360 },
        { src: "https://images.unsplash.com/photo-1504150558240-0b4fd8946624?w=600&q=80", alt: "Sesión fotográfica en atardecer Cartagena Colombia", h: 280 },
      ]}
      jsonLd={jsonLd}
      faq={[
        { q: "¿Puedo reservar con poca anticipación?", a: "Sí. Para sesiones de viajeros acepto reservas con 24 horas de anticipación si hay disponibilidad. Recomiendo reservar al menos 3–5 días antes para asegurar la fecha y hora preferida." },
        { q: "¿Hablas inglés?", a: "Yes! I'm fluent in English and have worked with travelers from the US, UK, Canada, Australia, and many other countries. Communication is never a barrier." },
        { q: "¿Cuándo es el mejor momento del día para la sesión?", a: "La hora dorada (una hora antes del atardecer, típicamente 5–6pm) ofrece la luz más hermosa. El amanecer también es espectacular y la ciudad está vacía. Evitamos el mediodía por la luz dura." },
        { q: "¿Cómo recibo mis fotos?", a: "A través de una galería privada en línea. Recibes el link en máximo 7 días hábiles. Puedes descargar todas las fotos en alta resolución directamente desde ahí." },
      ]}
    />
  );
}
