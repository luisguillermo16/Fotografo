"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const navLinks = [
  { href: "/sobre-mi", label: "Sobre mí" },
  {
    href: "/servicios",
    label: "Servicios",
    sub: [
      { href: "/servicios/fotografo-bodas-cartagena", label: "Bodas" },
      { href: "/servicios/retratos-cartagena", label: "Retratos" },
      { href: "/servicios/familias-cartagena", label: "Familias" },
      { href: "/servicios/quinceañeras-cartagena", label: "Quinceañeras" },
      { href: "/servicios/viajeros-cartagena", label: "Viajeros" },
      {
        href: "/servicios/eventos-corporativos-cartagena",
        label: "Corporativo",
      },
    ],
  },
  { href: "/portafolio", label: "Portafolio" },
  { href: "/blog", label: "Blog" },
  { href: "/precios", label: "Precios" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <header
        className="nav-root"
        style={{
          padding: scrolled ? "14px 52px" : undefined,
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.06)" : undefined,
        }}
      >
        {/* Left links */}
        <nav className="nav-links" aria-label="Navegación principal">
          {navLinks.slice(0, 3).map((link) =>
            link.sub ? (
              <div
                key={link.href}
                style={{ position: "relative" }}
                onMouseEnter={() => setOpenSub(link.href)}
                onMouseLeave={() => setOpenSub(null)}
              >
                <Link href={link.href} className="has-sub">
                  {link.label}
                </Link>
                {openSub === link.href && (
                  <div
                    style={{
                      position: "absolute",
                      top: "100%",
                      left: 0,
                      marginTop: "12px",
                      background: "var(--warm-white)",
                      border: "1px solid var(--light-line)",
                      minWidth: "200px",
                      padding: "8px 0",
                      backdropFilter: "blur(12px)",
                    }}
                  >
                    {link.sub.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        style={{
                          display: "block",
                          padding: "10px 20px",
                          fontFamily: "var(--font-body)",
                          fontSize: "11px",
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: "var(--mid)",
                          textDecoration: "none",
                          transition: "color 0.2s, background 0.2s",
                        }}
                        onMouseEnter={(e) => {
                          (e.target as HTMLElement).style.color = "var(--dark)";
                          (e.target as HTMLElement).style.background = "var(--cream)";
                        }}
                        onMouseLeave={(e) => {
                          (e.target as HTMLElement).style.color = "var(--mid)";
                          (e.target as HTMLElement).style.background = "transparent";
                        }}
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* Logo */}
        <Link href="/" className="nav-logo" aria-label="TU NOMBRE Fotografía — Inicio">
          <span style={{ 
            fontSize: "10px", 
            fontWeight: 500, 
            textTransform: "uppercase", 
            letterSpacing: "0.15em",
            color: "var(--dark)"
          }}>
            aqui va tu logo
          </span>
        </Link>

        {/* Right */}
        <div className="nav-social">
          <nav className="nav-links" aria-label="Más secciones">
            {navLinks.slice(3).map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href="https://www.instagram.com/jesusreyesfoto"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            Instagram
          </a>
          <Link
            href="/contacto"
            className="btn-primary"
            style={{ padding: "10px 22px", fontSize: "10px" }}
          >
            Contactar
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label="Abrir menú"
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
          }}
          className="hamburger"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "22px",
                height: "1px",
                background: "var(--dark)",
              }}
            />
          ))}
        </button>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            background: "var(--warm-white)",
            padding: "80px 32px 40px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Cerrar menú"
            style={{
              position: "absolute",
              top: "22px",
              right: "24px",
              background: "none",
              border: "none",
              fontSize: "24px",
              cursor: "pointer",
              color: "var(--dark)",
            }}
          >
            ×
          </button>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "28px",
                fontWeight: 300,
                color: "var(--dark)",
                textDecoration: "none",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contacto"
            className="btn-primary"
            style={{ width: "fit-content", marginTop: "16px" }}
            onClick={() => setMobileOpen(false)}
          >
            Contactar
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .hamburger { display: flex !important; }
          .nav-social { display: none !important; }
        }
      `}</style>
    </>
  );
}
