import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Portafolio Viajeros en Cartagena | Galería Fotográfica",
  description: "Galería de sesiones fotográficas para viajeros y turistas en Cartagena de Indias. Capturando aventuras en la Ciudad Amurallada y playas.",
  alternates: { canonical: "https://www.jesusreyesfoto.com/portafolio/viajeros" },
};

const photos = [
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", alt: "Viajero en Getsemaní Cartagena sesión de fotos", h: 340 },
  { src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80", alt: "Fotografía de turistas en las murallas de Cartagena", h: 360 },
  { src: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=600&q=80", alt: "Sesión de fotos para viajeros en Ciudad Amurallada Cartagena", h: 280 },
  { src: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&q=80", alt: "Turismo fotográfico en Cartagena Colombia", h: 400 },
  { src: "https://images.unsplash.com/photo-1512413316925-fd4b93f31521?w=600&q=80", alt: "Viajeros disfrutando de Cartagena de Indias", h: 320 },
  { src: "https://images.unsplash.com/photo-1504150558240-0b4fd8946624?w=600&q=80", alt: "Atardecer fotográfico para viajeros en Cartagena", h: 300 },
];

export default function PortafolioViajeros() {
  return (
    <>
      <ScrollReveal />
      <div className="page-hero">
        <div className="section-label">Portafolio</div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(44px, 6vw, 80px)", fontWeight: 300, lineHeight: 0.95, color: "var(--dark)" }}>
          Galería de Viajeros
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
          ¿Estás de visita en Cartagena y quieres fotos increíbles?
        </p>
        <Link href="/contacto" className="btn-primary">Reservar sesión para viajeros</Link>
      </section>
    </>
  );
}
