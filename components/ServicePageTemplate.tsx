import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import PriceCards from "@/components/PriceCards";
import Script from "next/script";

interface ServicePageProps {
  h1: string;
  eyebrow: string;
  heroImg: string;
  heroAlt: string;
  intro: string;
  body: string[];
  gallery: { src: string; alt: string; h: number }[];
  jsonLd: object;
  faq: { q: string; a: string }[];
}

export default function ServicePageTemplate({
  h1,
  eyebrow,
  heroImg,
  heroAlt,
  intro,
  body,
  gallery,
  jsonLd,
  faq,
}: ServicePageProps) {
  return (
    <>
      <ScrollReveal />
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Page Hero */}
      <div
        style={{
          position: "relative",
          height: "60vh",
          minHeight: "440px",
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
        }}
      >
        <Image
          src={heroImg}
          alt={heroAlt}
          fill
          priority
          quality={100}
          style={{ objectFit: "cover" }}
          sizes="100vw"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(26,22,20,0.75) 0%, rgba(26,22,20,0.2) 60%, transparent 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "0 52px 60px",
            maxWidth: "720px",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "10px",
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "var(--terracotta-light)",
              marginBottom: "12px",
            }}
          >
            {eyebrow}
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 5vw, 68px)",
              fontWeight: 300,
              lineHeight: 1.05,
              color: "white",
            }}
            dangerouslySetInnerHTML={{ __html: h1 }}
          />
        </div>
      </div>

      {/* Intro text */}
      <section
        className="section"
        style={{ background: "var(--cream)" }}
        aria-label="Descripción del servicio"
      >
        <div style={{ maxWidth: "760px" }}>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(18px, 2.5vw, 26px)",
              fontWeight: 300,
              fontStyle: "normal",
              color: "var(--mid)",
              lineHeight: 1.6,
              marginBottom: "32px",
              borderLeft: "3px solid var(--terracotta)",
              paddingLeft: "24px",
            }}
          >
            {intro}
          </p>
          {body.map((para, i) => (
            <p
              key={i}
              style={{
                fontSize: "15px",
                color: "var(--mid)",
                lineHeight: 1.85,
                marginBottom: "18px",
              }}
            >
              {para}
            </p>
          ))}
          <Link href="/contacto" className="btn-primary" style={{ marginTop: "24px", display: "inline-block" }}>
            Reservar este servicio
          </Link>
        </div>
      </section>

      {/* Gallery */}
      <section
        style={{ background: "var(--warm-white)", padding: "0 0 80px" }}
        aria-label="Galería de fotos"
      >
        <div className="portfolio-grid">
          {gallery.map((img) => (
            <div key={img.src} className="portfolio-item">
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={img.h}
                quality={100}
                style={{ width: "100%", height: img.h, objectFit: "cover" }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Prices */}
      <section
        className="section reveal"
        style={{ background: "var(--cream)" }}
        aria-label="Precios y paquetes"
      >
        <div className="section-label">Inversión</div>
        <h2 className="section-title">
          Paquetes y <em>Precios</em>
        </h2>
        <PriceCards />
      </section>

      {/* FAQ */}
      {faq.length > 0 && (
        <section
          className="section reveal"
          aria-label="Preguntas frecuentes"
        >
          <div className="section-label">FAQ</div>
          <h2 className="section-title" style={{ marginBottom: "40px" }}>
            Preguntas <em>frecuentes</em>
          </h2>
          <div style={{ maxWidth: "720px" }}>
            {faq.map((item, i) => (
              <details
                key={i}
                style={{
                  borderBottom: "1px solid var(--light-line)",
                  paddingBottom: "16px",
                  marginBottom: "16px",
                }}
              >
                <summary
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "18px",
                    fontWeight: 300,
                    color: "var(--dark)",
                    cursor: "pointer",
                    padding: "12px 0",
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  {item.q}
                  <span style={{ color: "var(--terracotta)", fontSize: "20px" }}>+</span>
                </summary>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--mid)",
                    lineHeight: 1.8,
                    marginTop: "8px",
                    paddingLeft: "0",
                  }}
                >
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="testimonial-section reveal" aria-label="Reservar sesión">
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 300,
            color: "white",
            marginBottom: "24px",
          }}
        >
          ¿Listo para tu sesión en{" "}
          <em style={{ color: "var(--terracotta-light)", fontStyle: "normal" }}>
            Cartagena?
          </em>
        </h2>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contacto" className="btn-primary" style={{ borderColor: "white", color: "white" }}>
            Reservar ahora
          </Link>
          <a href="https://wa.me/573001234567" className="btn-primary" style={{ borderColor: "var(--terracotta-light)", color: "var(--terracotta-light)" }} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
