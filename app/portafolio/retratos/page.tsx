import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Portafolio Retratos en Cartagena | Galería Fotográfica",
  description: "Galería de retratos fotográficos realizados en Cartagena de Indias. Sesiones artísticas y profesionales en la Ciudad Amurallada y Getsemaní.",
  alternates: { canonical: "https://www.jesusreyesfoto.com/portafolio/retratos" },
};

const photos = [
  { src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80", alt: "Retrato artístico femenino en Cartagena Colombia", h: 380 },
  { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80", alt: "Retrato masculino profesional en Cartagena", h: 260 },
  { src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&q=80", alt: "Fotografía de retrato femenino Ciudad Amurallada Cartagena", h: 400 },
  { src: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80", alt: "Retrato creativo en Getsemaní Cartagena Colombia", h: 300 },
  { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80", alt: "Sesión de retratos en Cartagena de Indias", h: 340 },
  { src: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80", alt: "Retrato profesional en la Ciudad Amurallada de Cartagena", h: 280 },
];

export default function PortafolioRetratos() {
  return (
    <>
      <ScrollReveal />
      <div className="page-hero">
        <div className="section-label">Portafolio</div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(44px, 6vw, 80px)", fontWeight: 300, lineHeight: 0.95, color: "var(--dark)" }}>
          Galería de Retratos
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
          ¿Quieres tu propia sesión de retratos en Cartagena?
        </p>
        <Link href="/contacto" className="btn-primary">Reservar sesión de retratos</Link>
      </section>
    </>
  );
}
