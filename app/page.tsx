import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import PortfolioGrid from "@/components/PortfolioGrid";
import PriceCards from "@/components/PriceCards";
import heroImg from "@/src/assets/images/hero.png";

export const metadata: Metadata = {
  title: "Fotógrafo en Cartagena | TU NOMBRE Fotografía",
  description:
    "Fotógrafo profesional en Cartagena de Indias. Sesiones de bodas, familias, retratos, quinceañeras y viajeros en la Ciudad Amurallada y el Caribe colombiano.",
  alternates: { canonical: "https://www.jesusreyesfoto.com" },
};

const services = [
  {
    title: "Bodas",
    label: "Fotografía de Bodas",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    alt: "Fotógrafo de bodas en Cartagena de Indias",
    href: "/servicios/fotografo-bodas-cartagena",
  },
  {
    title: "Retratos",
    label: "Sesiones de Retrato",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
    alt: "Sesión de retratos profesionales en Cartagena",
    href: "/servicios/retratos-cartagena",
  },
  {
    title: "Familias",
    label: "Sesiones Familiares",
    img: "/images/Fotografia familiar en cartagena.jpg",
    alt: "Fotografía familiar en Cartagena Colombia",
    href: "/servicios/familias-cartagena",
  },
  {
    title: "Quinceañeras",
    label: "Quinceañeras",
    img: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&q=80",
    alt: "Fotografía de quinceañeras en Cartagena",
    href: "/servicios/quinceañeras-cartagena",
  },
  {
    title: "Viajeros",
    label: "Sesiones para Viajeros",
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    alt: "Fotógrafo para turistas y viajeros en Cartagena",
    href: "/servicios/viajeros-cartagena",
  },
  {
    title: "Corporativo",
    label: "Eventos Corporativos",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    alt: "Fotografía corporativa y de eventos en Cartagena",
    href: "/servicios/eventos-corporativos-cartagena",
  },
];

export default function HomePage() {
  return (
    <>
      <ScrollReveal />

      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="hero" aria-label="Presentación">
        <Image
          src={heroImg}
          alt="TU NOMBRE Fotografía — Fotógrafo en Cartagena"
          fill
          priority
          quality={100}
          style={{
            objectFit: "cover",
            objectPosition: "center",
            opacity: 1,
          }}
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-eyebrow">Fotógrafo en Cartagena</div>
          <h1 className="hero-h1">
            TU NOMBRE
          </h1>
          <p className="hero-sub">Ciudad Amurallada · Playas · Eventos</p>
          <Link href="/contacto" className="btn-primary">
            Reservar sesión
          </Link>
        </div>

      </section>

      {/* ─── ABOUT TEASER ────────────────────────────────── */}
      <section
        className="section reveal"
        id="sobre-mi"
        style={{ background: "var(--cream)" }}
        aria-label="Sobre mí"
      >
        <div className="about-grid">
          <div className="about-images" aria-hidden="true">
            <div style={{ position: "absolute", width: "62%", height: 380, top: 0, left: 0, boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}>
              <Image
                src="https://images.unsplash.com/photo-1520390138845-fd2d229dd553?w=600&q=80"
                alt="TU NOMBRE cámara profesional en Cartagena"
                fill
                quality={100}
                style={{ objectFit: "cover" }}
                sizes="(max-width:900px) 100vw, 25vw"
                loading="lazy"
              />
            </div>
            <div style={{ position: "absolute", width: "52%", height: 300, bottom: 0, right: 0, border: "6px solid var(--warm-white)", boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}>
              <Image
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=600&q=80"
                alt="TU NOMBRE Fotógrafo en las calles de Cartagena"
                fill
                quality={100}
                style={{ objectFit: "cover" }}
                sizes="(max-width:900px) 100vw, 25vw"
                loading="lazy"
              />
            </div>
          </div>
          <div className="about-text">
            <div className="section-label">Sobre mí</div>
            <h2 className="section-title">
              Capturo el alma
              <br />
              de Cartagena
            </h2>
            <br />
            <p>
              Soy fotógrafo profesional con base en Cartagena de Indias. Me
              especializo en retratos, bodas, familias y sesiones de viajeros
              que quieren llevar los colores y la magia del Caribe colombiano en
              cada imagen.
            </p>
            <p>
              Trabajo en la Ciudad Amurallada, Getsemaní, Bocagrande y las
              playas de las Islas del Rosario. Cada sesión es una experiencia
              pensada para que te sientas cómodo y el resultado supere tus
              expectativas.
            </p>
            <Link href="/sobre-mi" className="btn-primary">
              Conocerme más
            </Link>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ────────────────────────────────────── */}
      <section
        className="section reveal"
        id="servicios"
        aria-label="Servicios de fotografía"
      >
        <div className="section-label">Especialidades</div>
        <h2 className="section-title">
          Mis Servicios
        </h2>
        <div className="services-grid" style={{ marginTop: "48px" }}>
          {services.map((s) => (
            <Link key={s.href} href={s.href} className="service-card" style={{ position: "relative" }}>
              <Image
                src={s.img}
                alt={s.alt}
                fill
                quality={100}
                style={{ objectFit: "cover" }}
                sizes="(max-width:768px) 100vw, 33vw"
                loading="lazy"
              />
              <div className="service-card-content">
                <span className="service-card-label">{s.label}</span>
                <h3 className="service-card-title">{s.title}</h3>
                <div className="service-card-arrow">
                  Ver trabajos →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── PORTFOLIO PREVIEW ───────────────────────────── */}
      <section
        style={{ background: "var(--warm-white)", padding: "100px 0" }}
        aria-label="Portafolio"
        id="portafolio"
      >
        <div className="reveal" style={{ textAlign: "center", marginBottom: "40px" }}>
          <div className="section-label" style={{ justifyContent: "center" }}>Trabajo</div>
          <h2 className="section-title">Mi Portafolio</h2>
        </div>
        <PortfolioGrid />
        <div className="reveal" style={{ textAlign: "center", marginTop: "48px" }}>
          <Link href="/portafolio" className="btn-primary">
            Ver todo el trabajo
          </Link>
        </div>
      </section>

      {/* ─── PRICES TEASER ───────────────────────────────── */}
      <section
        className="section reveal"
        id="precios"
        style={{ background: "var(--cream)" }}
        aria-label="Paquetes y precios"
      >
        <div className="section-label">Inversión</div>
        <h2 className="section-title">
          Paquetes y Precios
        </h2>
        <PriceCards />
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <Link href="/precios" className="btn-primary">
            Ver detalles completos
          </Link>
        </div>
      </section>

      {/* ─── TESTIMONIAL ─────────────────────────────────── */}
      <section className="testimonial-section reveal" aria-label="Testimonios">
        <blockquote className="testimonial-quote">
          &ldquo;Trabajar con Jesús fue una experiencia increíble. Capturó
          exactamente la esencia de Cartagena que queríamos llevar a casa. Las
          fotos son simplemente mágicas.&rdquo;
        </blockquote>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <Image
            className="t-avatar"
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
            alt="Sofia M. — cliente de TU NOMBRE Fotografía"
            width={52}
            height={52}
            style={{ borderRadius: "50%", objectFit: "cover", border: "2px solid var(--terracotta)", width: 52, height: 52 }}
            loading="lazy"
          />
          <span className="t-name">Sofia M.</span>
          <span className="t-desc">Viajera — Nueva York</span>
        </div>
      </section>

      {/* ─── CTA CONTACT ─────────────────────────────────── */}
      <section
        className="section reveal"
        id="contacto"
        style={{ background: "var(--warm-white)", textAlign: "center" }}
        aria-label="Contacto rápido"
      >
        <div className="section-label">
          Contacto
        </div>
        <h2 className="section-title" style={{ marginBottom: "16px" }}>
          Reserva tu <em>sesión</em>
        </h2>
        <p
          style={{
            fontSize: "14px",
            color: "var(--mid)",
            marginBottom: "40px",
            maxWidth: "480px",
            margin: "0 auto 40px",
            lineHeight: 1.8,
          }}
        >
          Escríbeme y coordinamos los detalles de tu sesión en Cartagena.
          Respondo en menos de 24 horas.
        </p>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contacto" className="btn-primary-solid">
            Ir al formulario
          </Link>
          <a
            href="https://wa.me/573001234567"
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
