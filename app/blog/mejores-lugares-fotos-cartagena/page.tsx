import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Los 10 Mejores Lugares para Fotos en Cartagena",
  description:
    "Guía completa con los mejores lugares para hacer fotos en Cartagena de Indias: Ciudad Amurallada, Getsemaní, Bocagrande, playas y más. Consejos de un fotógrafo local.",
  keywords: [
    "mejores lugares para fotos en Cartagena",
    "locaciones fotográficas Cartagena",
    "donde hacer fotos en Cartagena Colombia",
    "spots fotográficos Ciudad Amurallada",
  ],
  alternates: {
    canonical:
      "https://www.jesusreyesfoto.com/blog/mejores-lugares-fotos-cartagena",
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Los 10 mejores lugares para fotos en Cartagena de Indias",
  description:
    "Una guía completa con los mejores spots fotográficos de Cartagena de Indias, Colombia.",
  image:
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&q=80",
  datePublished: "2025-03-15",
  dateModified: "2025-03-15",
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

const spots = [
  {
    num: "01",
    name: "Las Murallas de Cartagena",
    desc: "Las murallas del siglo XVII son el escenario más icónico de Cartagena. Al atardecer, la luz dorada las baña de un color cálido incomparable. Las escaleras de acceso y las cañoneras crean encuadres únicos.",
    tip: "Mejor hora: 5:00–6:30 pm. Evita los fines de semana por la cantidad de turistas.",
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    alt: "Murallas de Cartagena para sesiones fotográficas",
  },
  {
    num: "02",
    name: "Barrio Getsemaní",
    desc: "El barrio más colorido de Cartagena es un museo de arte urbano al aire libre. Las calles angostas, los murales gigantes y la arquitectura colonial crean fondos únicos para cualquier tipo de sesión.",
    tip: "Perfecto todo el día. Las primeras horas de la mañana son ideales para evitar el tráfico.",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
    alt: "Barrio Getsemaní Cartagena para fotografía",
  },
  {
    num: "03",
    name: "Plaza de Santo Domingo",
    desc: "El corazón de la Ciudad Amurallada ofrece una combinación perfecta de arquitectura colonial, flores de colores y la energía de la vida local. Es especialmente hermosa en las horas azules del amanecer.",
    tip: "Mejor a las 6:00–7:30 am antes de que abran los restaurantes.",
    img: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=800&q=80",
    alt: "Plaza Santo Domingo Cartagena fotografía profesional",
  },
];

export default function BlogPostMejoresLugares() {
  return (
    <>
      <ScrollReveal />
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <div
        style={{
          position: "relative",
          height: "55vh",
          minHeight: "400px",
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
        }}
      >
        <Image
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1600&q=80"
          alt="Vista panorámica de Cartagena de Indias Colombia"
          fill
          style={{ objectFit: "cover" }}
          priority
          sizes="100vw"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(26,22,20,0.8) 0%, rgba(26,22,20,0.2) 60%, transparent 100%)",
          }}
        />
        <div style={{ position: "relative", zIndex: 2, padding: "0 52px 56px" }}>
          <div
            style={{
              fontSize: "10px",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--terracotta-light)",
              marginBottom: "10px",
            }}
          >
            Blog · Locaciones
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(32px, 5vw, 60px)",
              fontWeight: 300,
              color: "white",
              lineHeight: 1.1,
              maxWidth: "700px",
            }}
          >
            Los 10 mejores lugares para fotos en Cartagena
          </h1>
          <time
            dateTime="2025-03-15"
            style={{
              display: "block",
              marginTop: "12px",
              fontSize: "11px",
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.1em",
            }}
          >
            15 marzo 2025 — Por Jesús Reyes
          </time>
        </div>
      </div>

      {/* Article body */}
      <article
        style={{ background: "var(--warm-white)", padding: "80px 52px" }}
        itemScope
        itemType="https://schema.org/Article"
      >
        <div style={{ maxWidth: "760px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "22px",
              fontWeight: 300,
              fontStyle: "normal",
              color: "var(--mid)",
              lineHeight: 1.6,
              marginBottom: "40px",
              borderLeft: "3px solid var(--terracotta)",
              paddingLeft: "24px",
            }}
          >
            Después de 8 años fotografiando en Cartagena, estos son los lugares
            que siempre funcionan — y algunos secretos que solo los locales
            conocemos.
          </p>

          {spots.map((spot) => (
            <div key={spot.num} style={{ marginBottom: "60px" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "16px" }}>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "48px",
                    fontWeight: 300,
                    color: "var(--light-line)",
                    lineHeight: 1,
                    flexShrink: 0,
                  }}
                >
                  {spot.num}
                </span>
                <h2
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "28px",
                    fontWeight: 300,
                    color: "var(--dark)",
                    lineHeight: 1.1,
                  }}
                >
                  {spot.name}
                </h2>
              </div>
              <Image
                src={spot.img}
                alt={spot.alt}
                width={760}
                height={400}
                style={{ width: "100%", height: "auto", objectFit: "cover", marginBottom: "20px", maxHeight: "400px" }}
                loading="lazy"
              />
              <p style={{ fontSize: "15px", color: "var(--mid)", lineHeight: 1.85, marginBottom: "12px" }}>
                {spot.desc}
              </p>
              <div
                style={{
                  background: "var(--cream)",
                  padding: "14px 18px",
                  borderLeft: "2px solid var(--terracotta)",
                  fontSize: "13px",
                  color: "var(--mid)",
                  fontStyle: "normal",
                }}
              >
                💡 <strong style={{ fontStyle: "normal", color: "var(--dark)" }}>Tip del fotógrafo:</strong> {spot.tip}
              </div>
            </div>
          ))}

          <div
            style={{
              background: "var(--cream)",
              padding: "40px",
              marginTop: "20px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "22px",
                fontWeight: 300,
                color: "var(--dark)",
                marginBottom: "20px",
              }}
            >
              ¿Quieres explorar estos lugares en tu propia sesión?
            </p>
            <Link href="/contacto" className="btn-primary">
              Reservar una sesión
            </Link>
          </div>
        </div>
      </article>

      {/* Back to blog */}
      <div
        style={{
          background: "var(--cream)",
          padding: "32px 52px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderTop: "1px solid var(--light-line)",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <Link
          href="/blog"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "11px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--mid)",
            textDecoration: "none",
            transition: "color 0.2s",
          }}
        >
          ← Volver al blog
        </Link>
        <Link href="/servicios/viajeros-cartagena" className="btn-primary">
          Ver sesiones para viajeros
        </Link>
      </div>
    </>
  );
}
