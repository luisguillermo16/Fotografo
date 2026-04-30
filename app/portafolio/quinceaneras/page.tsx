import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Portafolio Quinceañeras en Cartagena | Galería de Fotografías",
  description: "Galería de sesiones fotográficas de quinceañeras en Cartagena de Indias. Sesiones elegantes en la Ciudad Amurallada y haciendas coloniales.",
  alternates: { canonical: "https://www.jesusreyesfoto.com/portafolio/quinceaneras" },
};

const photos = [
  { src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&q=80", alt: "Fotografía de quinceañera elegante en Cartagena Colombia", h: 440 },
  { src: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=600&q=80", alt: "Sesión fotográfica de quinceañera en Ciudad Amurallada", h: 300 },
  { src: "https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&q=80", alt: "Quinceañera en hacienda colonial Cartagena de Indias", h: 380 },
  { src: "https://images.unsplash.com/photo-1518621736915-f3b1c41bfd00?w=600&q=80", alt: "Retrato de quinceañera en Cartagena Colombia", h: 300 },
];

export default function PortafolioQuinceaneras() {
  return (
    <>
      <ScrollReveal />
      <div className="page-hero">
        <div className="section-label">Portafolio</div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(44px, 6vw, 80px)", fontWeight: 300, lineHeight: 0.95, color: "var(--dark)" }}>
          Galería de Quinceañeras
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
          ¿Listo para la sesión de quinceañera perfecta?
        </p>
        <Link href="/contacto" className="btn-primary">Reservar sesión</Link>
      </section>
    </>
  );
}
