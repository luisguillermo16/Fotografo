"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="footer-root">
        <div className="footer-brand">
          <Link href="/" className="footer-logo" style={{ textDecoration: "none" }}>
            <span style={{ 
              fontSize: "12px", 
              fontWeight: 500, 
              textTransform: "uppercase", 
              letterSpacing: "0.15em",
              color: "var(--dark)"
            }}>
              aqui va tu logo
            </span>
          </Link>
          <span className="footer-tagline">Fotógrafo · Cartagena de Indias</span>
          <a href="mailto:hola@jesusreyesfoto.com" className="footer-contact-link">
            hola@jesusreyesfoto.com
          </a>
          <a href="tel:+573001234567" className="footer-contact-link">
            +57 300 123 4567
          </a>
          <p
            style={{
              fontSize: "12px",
              color: "var(--mid)",
              marginTop: "16px",
              lineHeight: 1.6,
              maxWidth: "240px",
            }}
          >
            Ciudad Amurallada, Cartagena de Indias, Bolívar, Colombia
          </p>
        </div>

        <div className="footer-col">
          <h4>Navegación</h4>
          <Link href="/">Inicio</Link>
          <Link href="/sobre-mi">Sobre mí</Link>
          <Link href="/portafolio">Portafolio</Link>
          <Link href="/precios">Precios</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contacto">Contacto</Link>
        </div>

        <div className="footer-col">
          <h4>Servicios</h4>
          <Link href="/servicios/fotografo-bodas-cartagena">Bodas</Link>
          <Link href="/servicios/retratos-cartagena">Retratos</Link>
          <Link href="/servicios/familias-cartagena">Familias</Link>
          <Link href="/servicios/quinceañeras-cartagena">Quinceañeras</Link>
          <Link href="/servicios/viajeros-cartagena">Viajeros</Link>
          <Link href="/servicios/eventos-corporativos-cartagena">
            Corporativo
          </Link>
        </div>

        <div className="footer-newsletter">
          <h4 style={{ fontSize: "9px", letterSpacing: "0.28em", textTransform: "uppercase", color: "var(--terracotta)", marginBottom: "16px" }}>
            Redes Sociales
          </h4>
          <div className="footer-col" style={{ marginBottom: "28px" }}>
            <a
              href="https://www.instagram.com/jesusreyesfoto"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.behance.net/jesusreyesfoto"
              target="_blank"
              rel="noopener noreferrer"
            >
              Behance
            </a>
            <a
              href="https://www.tiktok.com/@jesusreyesfoto"
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok
            </a>
          </div>
          <label htmlFor="newsletter-email">Mantente en contacto</label>
          <form
            className="newsletter-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              id="newsletter-email"
              type="email"
              placeholder="Tu correo electrónico"
              autoComplete="email"
            />
            <button type="submit">Suscribir</button>
          </form>
        </div>
      </footer>

      <div className="footer-bottom">
        <span>© 2025 TU NOMBRE Fotografía · Cartagena de Indias, Colombia</span>
        <span>Fotógrafo profesional en Cartagena</span>
      </div>
    </>
  );
}
