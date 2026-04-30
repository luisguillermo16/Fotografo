import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Fotografía de Quinceañeras en Cartagena | Sesiones Especiales",
  description:
    "Fotografía profesional de quinceañeras en Cartagena de Indias. Sesiones elegantes en la Ciudad Amurallada, haciendas coloniales y playas del Caribe colombiano.",
  keywords: [
    "fotografía de quinceañeras Cartagena",
    "fotógrafo quinceañeras Cartagena Colombia",
    "sesión quinceañera Ciudad Amurallada",
    "quince años fotografía Cartagena",
  ],
  alternates: {
    canonical: "https://www.jesusreyesfoto.com/servicios/quinceañeras-cartagena",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fotografía de Quinceañeras en Cartagena",
  description: "Sesiones fotográficas profesionales de quinceañeras en Cartagena de Indias.",
  provider: {
    "@type": "LocalBusiness",
    name: "Jesús Reyes Fotografía",
    url: "https://www.jesusreyesfoto.com",
    telephone: "+573001234567",
  },
  areaServed: { "@type": "City", name: "Cartagena de Indias" },
};

export default function QuinceanerasPage() {
  return (
    <ServicePageTemplate
      eyebrow="Quinceañeras · Cartagena"
      h1="Tu quinceañera, una obra de arte"
      heroImg="https://images.unsplash.com/photo-1529636798458-92182e662485?w=1600&q=80"
      heroAlt="Fotografía de quinceañera elegante en Cartagena de Indias"
      intro="Los quince años se celebran una sola vez. Mereces fotos que capturen la elegancia, la alegría y la magia de este momento único."
      body={[
        "Cartagena de Indias es el escenario perfecto para una sesión de quinceañera: la arquitectura colonial, los colores vivos de las flores y las calles empedradas crean un fondo que no tiene igual en Colombia.",
        "Me especializo en sesiones íntimas y elegantes que resaltan la personalidad de la joven protagonista. Trabajamos en locaciones seleccionadas previamente — desde el interior de la Ciudad Amurallada hasta haciendas coloniales y terrazas con vista al mar.",
        "El resultado: imágenes de alta calidad que mezclan elegancia clásica con una estética editorial moderna, perfectas tanto para el álbum familiar como para las redes sociales.",
      ]}
      gallery={[
        { src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&q=80", alt: "Sesión fotográfica quinceañera Cartagena Colombia", h: 420 },
        { src: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=600&q=80", alt: "Fotografía de quinceañera en Ciudad Amurallada Cartagena", h: 300 },
        { src: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&q=80", alt: "Quinceañera elegante en hacienda colonial Cartagena", h: 360 },
        { src: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=600&q=80", alt: "Retrato de quinceañera en Cartagena Colombia", h: 280 },
      ]}
      jsonLd={jsonLd}
      faq={[
        { q: "¿Incluyen maquillaje o peinado en los paquetes?", a: "Los paquetes de fotografía no incluyen maquillaje ni peinado, pero trabajo en colaboración con estilistas profesionales en Cartagena. Con gusto te recomiendo profesionales de confianza." },
        { q: "¿Podemos usar varias locaciones?", a: "Los paquetes Standard y Maximum permiten 2 y múltiples locaciones respectivamente. Podemos combinar la Ciudad Amurallada, Getsemaní y una playa en la misma sesión." },
        { q: "¿Cuánto dura la sesión normalmente?", a: "Una sesión de quinceañera típicamente dura entre 2 y 3 horas para tener tiempo de cambiar de outfit y locación si se desea." },
      ]}
    />
  );
}
