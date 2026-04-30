import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Cómo Preparar una Sesión de Fotos en la Playa | Cartagena",
  description:
    "Consejos esenciales para tu sesión de fotos en las playas de Cartagena de Indias. Qué ropa llevar, mejores horarios, locaciones recomendadas y tips de posado.",
  keywords: [
    "sesión de fotos playa Cartagena",
    "ropa para fotos en la playa",
    "fotógrafo playa Cartagena Colombia",
    "tips fotografía playa",
  ],
  alternates: {
    canonical: "https://www.jesusreyesfoto.com/blog/como-preparar-sesion-fotos-playa",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cómo preparar una sesión de fotos en la playa en Cartagena",
  description: "Guía completa para tener la mejor experiencia en tu sesión fotográfica playera.",
  image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
  datePublished: "2025-02-20",
  dateModified: "2025-02-20",
  author: {
    "@type": "Person",
    name: "Jesús Reyes",
    url: "https://www.jesusreyesfoto.com/sobre-mi",
  },
  publisher: {
    "@type": "Organization",
    name: "Jesús Reyes Fotografía",
    url: "https://www.jesusreyesfoto.com",
  },
};

export default function BlogPostPlaya() {
  return (
    <>
      <ScrollReveal />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <div style={{ position: "relative", height: "55vh", minHeight: "400px", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        <Image
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80"
          alt="Sesión de fotos en playa de Cartagena de Indias"
          fill
          style={{ objectFit: "cover" }}
          priority
          sizes="100vw"
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,22,20,0.8) 0%, rgba(26,22,20,0.2) 60%, transparent 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, padding: "0 52px 56px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--terracotta-light)", marginBottom: "10px" }}>
            Blog · Consejos
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 300, color: "white", lineHeight: 1.1, maxWidth: "700px" }}>
            Cómo preparar una sesión de fotos en la playa
          </h1>
          <time dateTime="2025-02-20" style={{ display: "block", marginTop: "12px", fontSize: "11px", color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em" }}>
            20 febrero 2025 — Por Jesús Reyes
          </time>
        </div>
      </div>

      <article style={{ background: "var(--warm-white)", padding: "80px 52px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ fontSize: "18px", color: "var(--mid)", lineHeight: 1.8, marginBottom: "32px" }}>
            Hacer fotos en la playa parece sencillo, pero el viento, el sol intenso y la arena presentan retos únicos. Aquí te comparto mis mejores consejos para que tu sesión sea perfecta.
          </p>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 300, color: "var(--dark)", marginBottom: "16px" }}>1. La elección del vestuario</h2>
          <p style={{ fontSize: "15px", color: "var(--mid)", lineHeight: 1.85, marginBottom: "24px" }}>
            El blanco es el rey de la playa, pero los colores tierra, el azul suave y el lino natural también funcionan increíble. Evita los estampados muy grandes que distraigan la atención de tu rostro. Lo más importante: elige ropa que te permita moverte con libertad.
          </p>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 300, color: "var(--dark)", marginBottom: "16px" }}>2. El horario es todo</h2>
          <p style={{ fontSize: "15px", color: "var(--mid)", lineHeight: 1.85, marginBottom: "24px" }}>
            En Cartagena, evitamos el mediodía. El sol está justo encima, crea sombras duras en los ojos y hace que todo el mundo esté sudando. La mejor luz ocurre 60 minutos antes del atardecer.
          </p>

          <div style={{ background: "var(--cream)", padding: "32px", marginBottom: "40px", borderLeft: "4px solid var(--terracotta)" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 400, marginBottom: "12px" }}>💡 Tip de Pro:</h3>
            <p style={{ fontSize: "14px", color: "var(--mid)", lineHeight: 1.7 }}>
              Lleva una toalla pequeña y un poco de talco. El talco es mágico para quitarse la arena de los pies antes de ponerse los zapatos de nuevo.
            </p>
          </div>

          <Link href="/contacto" className="btn-primary" style={{ width: "100%", textAlign: "center" }}>
            Reservar mi sesión en la playa
          </Link>
        </div>
      </article>

      <div style={{ background: "var(--cream)", padding: "32px 52px", borderTop: "1px solid var(--light-line)", textAlign: "center" }}>
        <Link href="/blog" style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--mid)", textDecoration: "none" }}>
          ← Volver al blog
        </Link>
      </div>
    </>
  );
}
