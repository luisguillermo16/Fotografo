import type { Metadata } from "next";
import PortfolioGrid from "@/components/PortfolioGrid";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Portafolio | Fotografía en Cartagena de Indias",
  description:
    "Portafolio de Jesús Reyes, fotógrafo en Cartagena. Bodas, retratos, familias, quinceañeras y sesiones para viajeros en la Ciudad Amurallada y el Caribe colombiano.",
  alternates: { canonical: "https://www.jesusreyesfoto.com/portafolio" },
};

const categories = [
  { label: "Bodas", href: "/portafolio/bodas", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80" },
  { label: "Retratos", href: "/portafolio/retratos", img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80" },
  { label: "Familias", href: "/portafolio/familias", img: "https://images.unsplash.com/photo-1511895426328-dc8714191011?w=600&q=80" },
  { label: "Quinceañeras", href: "/portafolio/quinceaneras", img: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&q=80" },
  { label: "Viajeros", href: "/portafolio/viajeros", img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80" },
];

export default function PortafolioPage() {
  return (
    <>
      <ScrollReveal />
      <div className="page-hero">
        <div className="section-label">Trabajo</div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(48px, 7vw, 88px)",
            fontWeight: 300,
            lineHeight: 0.95,
            color: "var(--dark)",
          }}
        >
          Mi Portafolio
        </h1>
        <p style={{ fontSize: "14px", color: "var(--mid)", marginTop: "20px", lineHeight: 1.8, maxWidth: "480px" }}>
          Una selección de sesiones realizadas en Cartagena de Indias. Filtra por categoría o explora las galerías completas.
        </p>
      </div>

      {/* Category links */}
      <section className="section" style={{ background: "var(--cream)", paddingBottom: "40px" }}>
        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          {categories.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              className="cat-tag-link"
            >
              {c.label}
            </Link>
          ))}
        </div>
      </section>


      {/* Filterable Grid */}
      <section style={{ background: "var(--warm-white)", paddingBottom: "80px" }}>
        <PortfolioGrid />
      </section>
    </>
  );
}
