import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "La Hora Dorada en Cartagena: Guía para Fotos Perfectas",
  description:
    "Descubre por qué la hora dorada es el momento favorito de los fotógrafos en Cartagena. Consejos para aprovechar la luz del atardecer caribeño en tus fotos.",
  keywords: [
    "hora dorada Cartagena",
    "atardecer Cartagena fotos",
    "golden hour Cartagena Colombia",
    "mejor luz para fotos Cartagena",
  ],
  alternates: {
    canonical: "https://www.jesusreyesfoto.com/blog/hora-dorada-cartagena",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "La hora dorada en Cartagena: cuándo y dónde",
  description: "Guía técnica y creativa para aprovechar el mejor momento de luz en el Caribe.",
  image: "https://images.unsplash.com/photo-1504150558240-0b4fd8946624?w=1200&q=80",
  datePublished: "2025-01-10",
  dateModified: "2025-01-10",
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

export default function BlogPostHoraDorada() {
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
          src="https://images.unsplash.com/photo-1504150558240-0b4fd8946624?w=1600&q=80"
          alt="Atardecer en las murallas de Cartagena de Indias"
          fill
          style={{ objectFit: "cover" }}
          priority
          sizes="100vw"
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(26,22,20,0.8) 0%, rgba(26,22,20,0.2) 60%, transparent 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, padding: "0 52px 56px" }}>
          <div style={{ fontSize: "10px", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--terracotta-light)", marginBottom: "10px" }}>
            Blog · Técnica
          </div>
          <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 5vw, 60px)", fontWeight: 300, color: "white", lineHeight: 1.1, maxWidth: "700px" }}>
            La hora dorada en Cartagena: cuándo y dónde
          </h1>
          <time dateTime="2025-01-10" style={{ display: "block", marginTop: "12px", fontSize: "11px", color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em" }}>
            10 enero 2025 — Por Jesús Reyes
          </time>
        </div>
      </div>

      <article style={{ background: "var(--warm-white)", padding: "80px 52px" }}>
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p style={{ fontSize: "18px", color: "var(--mid)", lineHeight: 1.8, marginBottom: "32px" }}>
            Si me preguntas cuál es el secreto de una foto espectacular en Cartagena, la respuesta no es la cámara, sino el reloj. La luz de las 5:30 PM es puro oro líquido.
          </p>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 300, color: "var(--dark)", marginBottom: "16px" }}>¿Qué es la Hora Dorada?</h2>
          <p style={{ fontSize: "15px", color: "var(--mid)", lineHeight: 1.85, marginBottom: "24px" }}>
            Es el breve periodo justo antes del atardecer cuando el sol está muy bajo en el horizonte. La luz recorre más atmósfera, lo que la hace más suave, cálida y favorecedora para la piel.
          </p>

          <h2 style={{ fontFamily: "var(--font-display)", fontSize: "28px", fontWeight: 300, color: "var(--dark)", marginBottom: "16px" }}>Los mejores spots en Cartagena</h2>
          <ul style={{ fontSize: "15px", color: "var(--mid)", lineHeight: 1.85, marginBottom: "24px", paddingLeft: "20px" }}>
            <li><strong>Baluarte de Santo Domingo:</strong> Para ver el sol caer directamente en el mar Caribe.</li>
            <li><strong>Calle de la Factoría:</strong> Donde la luz se cuela entre los balcones coloniales.</li>
            <li><strong>Playa de Castillogrande:</strong> Para retratos con siluetas y reflejos en el agua.</li>
          </ul>

          <div style={{ background: "var(--dark)", color: "white", padding: "40px", marginBottom: "40px", textAlign: "center" }}>
            <h3 style={{ fontFamily: "var(--font-display)", fontSize: "24px", fontWeight: 300, marginBottom: "16px" }}>¿Quieres tu sesión en la hora dorada?</h3>
            <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.7)", marginBottom: "24px" }}>
              Estas franjas horarias se agotan rápido. Recomiendo reservar con al menos 2 semanas de anticipación.
            </p>
            <Link href="/contacto" className="btn-primary" style={{ borderColor: "white", color: "white" }}>
              Consultar disponibilidad
            </Link>
          </div>
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
