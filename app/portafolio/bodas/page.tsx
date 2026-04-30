import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Portafolio Bodas en Cartagena | Galería de Fotografías",
  description:
    "Galería completa de fotografía de bodas en Cartagena de Indias. Novios en la Ciudad Amurallada, Islas del Rosario y haciendas coloniales del Caribe colombiano.",
  alternates: { canonical: "https://www.jesusreyesfoto.com/portafolio/bodas" },
};

const photos = [
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80", alt: "Pareja de novios fotografiados en la Ciudad Amurallada de Cartagena", h: 420 },
  { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80", alt: "Ceremonia de boda en Cartagena de Indias Colombia", h: 300 },
  { src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80", alt: "Fotografía de boda en Cartagena Colombia", h: 340 },
  { src: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&q=80", alt: "Detalles de boda en Cartagena elegante", h: 260 },
  { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80", alt: "Recepción de boda fotografiada en Cartagena", h: 380 },
  { src: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=600&q=80", alt: "Retrato artístico de novios en Ciudad Amurallada", h: 300 },
  { src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80", alt: "Boda íntima en hacienda colonial Cartagena", h: 360 },
  { src: "https://images.unsplash.com/photo-1591604021695-0c69b7c05981?w=600&q=80", alt: "Fotografía nupcial en Cartagena de Indias Colombia", h: 280 },
  { src: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80", alt: "Primera danza fotografiada en boda Cartagena", h: 320 },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Portafolio Bodas — Jesús Reyes Fotografía Cartagena",
  description: "Galería de fotografías de bodas en Cartagena de Indias, Colombia.",
  url: "https://www.jesusreyesfoto.com/portafolio/bodas",
  creator: { "@type": "Person", name: "Jesús Reyes", jobTitle: "Fotógrafo" },
};

export default function PortafolioBodas() {
  return (
    <>
      <ScrollReveal />
      <Script id="gallery-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="page-hero">
        <div className="section-label">Portafolio</div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(44px, 6vw, 80px)", fontWeight: 300, lineHeight: 0.95, color: "var(--dark)" }}>
          Galería de Bodas
        </h1>
      </div>
      <section style={{ background: "var(--warm-white)", padding: "40px 0 80px" }}>
        <div className="portfolio-grid">
          {photos.map((p) => (
            <div key={p.src} className="portfolio-item">
              <Image src={p.src} alt={p.alt} width={600} height={p.h} quality={100} style={{ height: p.h, objectFit: "cover" }} loading="lazy" />
            </div>
          ))}
        </div>
      </section>
      <section style={{ background: "var(--cream)", padding: "60px 52px", textAlign: "center" }}>
        <p style={{ fontFamily: "var(--font-display)", fontSize: "22px", fontWeight: 300, color: "var(--mid)", marginBottom: "28px" }}>
          ¿Quieres vivir una boda así en Cartagena?
        </p>
        <Link href="/contacto" className="btn-primary">Reservar sesión de bodas</Link>
      </section>
    </>
  );
}
