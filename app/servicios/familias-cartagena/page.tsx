import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Fotografía Familiar en Cartagena | Sesiones en el Caribe",
  description:
    "Sesiones fotográficas familiares en Cartagena de Indias. Capturamos los momentos únicos de tu familia en la Ciudad Amurallada y las playas del Caribe colombiano.",
  keywords: [
    "fotografía familiar Cartagena",
    "sesión familiar Cartagena Colombia",
    "fotógrafo de familias Cartagena",
    "family photographer Cartagena",
  ],
  alternates: {
    canonical: "https://www.jesusreyesfoto.com/servicios/familias-cartagena",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fotografía Familiar en Cartagena",
  description: "Sesiones fotográficas familiares profesionales en Cartagena de Indias, Colombia.",
  provider: {
    "@type": "LocalBusiness",
    name: "Jesús Reyes Fotografía",
    url: "https://www.jesusreyesfoto.com",
    telephone: "+573001234567",
  },
  areaServed: { "@type": "City", name: "Cartagena de Indias" },
};

export default function FamiliasPage() {
  return (
    <ServicePageTemplate
      eyebrow="Familias · Cartagena"
      h1="Momentos familiares eternizados"
      heroImg="/images/familia-cartagena.jfif"
      heroAlt="Sesión fotográfica familiar en Cartagena Colombia"
      intro="Las familias crecen y cambian. Estas fotos serán el tesoro que tus hijos mirarán décadas después."
      body={[
        "Las sesiones familiares en Cartagena son especiales porque combinan la emoción de estar juntos con el marco incomparable que ofrece la ciudad: paredes coloridas, calles empedradas, playas de arena blanca y la luz dorada del atardecer caribeño.",
        "Trabajo con familias de todos los tamaños, desde parejas con un bebé hasta reuniones multigeneracionales. Mi estilo se basa en momentos reales: risas genuinas, juegos con los niños, abrazos espontáneos.",
        "Recomiendo agendar la sesión durante la hora dorada (antes del amanecer o durante el atardecer) para aprovechar la mejor luz natural de Cartagena.",
      ]}
      gallery={[
        { src: "/images/familia-cartagena.jfif", alt: "Fotografía familiar profesional en Cartagena Colombia", h: 320 },
        { src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80", alt: "Familia en playa de Cartagena sesión fotográfica", h: 280 },
        { src: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&q=80", alt: "Familia colombiana en sesión de fotos Cartagena", h: 360 },
        { src: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&q=80", alt: "Retrato familiar en Ciudad Amurallada Cartagena", h: 240 },
        { src: "https://images.unsplash.com/photo-1602734846297-9299fc2d4703?w=600&q=80", alt: "Sesión familiar en atardecer playa Cartagena", h: 300 },
        { src: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?w=600&q=80", alt: "Fotografía infantil y familiar Cartagena Colombia", h: 380 },
      ]}
      jsonLd={jsonLd}
      faq={[
        { q: "¿Cómo manejo las sesiones con niños pequeños?", a: "Tengo mucha experiencia con bebés y niños. Soy paciente, llevo juguetes de apoyo y siempre planifico la sesión para coincidir con el mejor momento de humor del pequeño." },
        { q: "¿Cuántas personas pueden participar?", a: "No hay límite. He fotografiado familias de 3 a 30 personas. Para grupos grandes recomiendo el paquete Maximum para tener tiempo suficiente." },
        { q: "¿Qué pasa si el niño no coopera durante la sesión?", a: "¡Pasa siempre! Las mejores fotos suelen salir de los momentos inesperados. Nunca fuerzo poses ni presiono. La clave es relajarse y disfrutar el proceso." },
      ]}
    />
  );
}
