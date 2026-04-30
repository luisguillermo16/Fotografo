import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Portafolio Familias en Cartagena | Galería de Fotografías",
  description: "Galería de sesiones fotográficas familiares en Cartagena de Indias. Familias en la Ciudad Amurallada, playas caribeñas y Getsemaní.",
  alternates: { canonical: "https://www.jesusreyesfoto.com/portafolio/familias" },
};

const photos = [
  { src: "https://images.unsplash.com/photo-1511895426328-dc8714191011?w=600&q=80", alt: "Fotografía familiar profesional en Cartagena Colombia", h: 320 },
  { src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80", alt: "Familia en playa de Cartagena sesión fotográfica", h: 280 },
  { src: "https://images.unsplash.com/photo-1609220136736-443140cffec6?w=600&q=80", alt: "Sesión familiar en Ciudad Amurallada Cartagena", h: 360 },
  { src: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=600&q=80", alt: "Retrato familiar en Getsemaní Cartagena", h: 240 },
  { src: "https://images.unsplash.com/photo-1536640712-4d4c36ff0e4e?w=600&q=80", alt: "Fotografía infantil y familiar Cartagena Colombia", h: 380 },
];

export default function PortafolioFamilias() {
  return (
    <>
      <ScrollReveal />
      <div className="page-hero">
        <div className="section-label">Portafolio</div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(44px, 6vw, 80px)", fontWeight: 300, lineHeight: 0.95, color: "var(--dark)" }}>
          Galería de Familias
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
          ¿Quieres una sesión familiar en Cartagena?
        </p>
        <Link href="/contacto" className="btn-primary">Reservar sesión familiar</Link>
      </section>
    </>
  );
}
