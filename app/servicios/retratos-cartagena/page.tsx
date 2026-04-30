import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Retratos Profesionales en Cartagena | Sesiones de Fotografía",
  description:
    "Sesiones de retratos profesionales en Cartagena de Indias. Fotografía artística en la Ciudad Amurallada, Getsemaní y las playas del Caribe colombiano.",
  keywords: [
    "retratos fotográficos Cartagena",
    "sesión de fotos Cartagena",
    "fotógrafo de retratos Cartagena Colombia",
    "portrait photographer Cartagena",
  ],
  alternates: {
    canonical: "https://www.jesusreyesfoto.com/servicios/retratos-cartagena",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Retratos Fotográficos en Cartagena",
  description: "Sesiones de retratos artísticos y profesionales en Cartagena de Indias.",
  provider: {
    "@type": "LocalBusiness",
    name: "Jesús Reyes Fotografía",
    url: "https://www.jesusreyesfoto.com",
    telephone: "+573001234567",
  },
  areaServed: { "@type": "City", name: "Cartagena de Indias" },
};

export default function RetratosPage() {
  return (
    <ServicePageTemplate
      eyebrow="Retratos · Cartagena"
      h1="Retratos que cuentan tu historia"
      heroImg="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1600&q=80"
      heroAlt="Sesión de retrato fotográfico profesional en Cartagena Colombia"
      intro="Un retrato no es solo una foto tuya — es la imagen que más te representa. La misión es capturar quién eres realmente."
      body={[
        "Las sesiones de retratos en Cartagena tienen algo que no puedes encontrar en ningún estudio: la luz del Caribe, la textura de las paredes coloniales y el color de las calles de Getsemaní como telón de fondo.",
        "Trabajo con personas, parejas y profesionales que necesitan imágenes auténticas para sus redes sociales, portafolios creativos o simplemente para tener fotos de las que estar orgullosos.",
        "Cada sesión comienza con una breve consulta para entender tu estilo, las locaciones que te gustan y el tipo de imágenes que buscas. Luego te guío durante toda la sesión para que las poses se sientan naturales.",
      ]}
      gallery={[
        { src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80", alt: "Retrato artístico femenino en Cartagena Colombia", h: 360 },
        { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80", alt: "Retrato masculino profesional en Cartagena", h: 280 },
        { src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&q=80", alt: "Sesión de retratos femeninos en Cartagena Colombia", h: 420 },
        { src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80", alt: "Retrato artístico en Ciudad Amurallada Cartagena", h: 300 },
        { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80", alt: "Sesión fotográfica de retrato en Cartagena", h: 340 },
        { src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80", alt: "Retrato profesional en Getsemaní Cartagena", h: 260 },
      ]}
      jsonLd={jsonLd}
      faq={[
        { q: "¿Qué debo usar para la sesión?", a: "Te envío una guía de estilo antes de la sesión. En general: colores que complementen los escenarios de Cartagena (tonos tierra, blancos, pasteles). Evita logos grandes o patrones muy llamativos." },
        { q: "¿Puedo solicitar locaciones específicas?", a: "Sí. La Ciudad Amurallada, el Barrio Getsemaní, Bocagrande, el Club de Pesca y varias haciendas coloniales están disponibles según el paquete elegido." },
        { q: "¿Cuánto tiempo tarda la entrega?", a: "Entrego la galería editada en 7 días hábiles después de la sesión. Para eventos urgentes hay un servicio express con entrega en 48 horas con cargo adicional." },
      ]}
    />
  );
}
