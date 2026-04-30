import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contacto — Reservar Sesión de Fotos en Cartagena",
  description:
    "Contacta a Jesús Reyes para reservar tu sesión fotográfica en Cartagena de Indias. Respondo en menos de 24 horas. Bodas, retratos, familias, quinceañeras y viajeros.",
  alternates: { canonical: "https://www.jesusreyesfoto.com/contacto" },
};

export default function ContactoPage() {
  return (
    <>
      <ScrollReveal />

      <div className="page-hero">
        <div className="section-label">Hablemos</div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(48px, 7vw, 88px)",
            fontWeight: 300,
            lineHeight: 0.95,
            color: "var(--dark)",
          }}
        >
          Reserva tu sesión
        </h1>
        <p style={{ fontSize: "14px", color: "var(--mid)", marginTop: "20px", lineHeight: 1.8, maxWidth: "480px" }}>
          Cuéntame sobre tu sesión y te respondo en menos de 24 horas para coordinar todos los detalles.
        </p>
      </div>

      <section className="section" style={{ background: "var(--warm-white)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "80px", alignItems: "start" }}>

          {/* Contact info */}
          <div>
            <div className="section-label">Información de contacto</div>
            <h2 className="section-title" style={{ marginBottom: "32px" }}>
              Estoy aquí <em>para ti</em>
            </h2>

            {[
              { label: "Email", value: "hola@jesusreyesfoto.com", href: "mailto:hola@jesusreyesfoto.com" },
              { label: "Teléfono / WhatsApp", value: "+57 300 123 4567", href: "https://wa.me/573001234567" },
              { label: "Instagram", value: "@jesusreyesfoto", href: "https://www.instagram.com/jesusreyesfoto" },
              { label: "Ubicación", value: "Ciudad Amurallada, Cartagena de Indias, Colombia", href: undefined },
            ].map((item) => (
              <div key={item.label} style={{ padding: "20px 0", borderBottom: "1px solid var(--light-line)" }}>
                <span style={{ fontSize: "9px", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--terracotta)", display: "block", marginBottom: "6px" }}>
                  {item.label}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="contact-info-link"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 300, color: "var(--dark)" }}>
                    {item.value}
                  </span>
                )}
              </div>
            ))}

            <div style={{ marginTop: "36px" }}>
              <p style={{ fontSize: "13px", color: "var(--mid)", lineHeight: 1.8, marginBottom: "16px" }}>
                <strong style={{ color: "var(--dark)", fontWeight: 400 }}>Horario de atención:</strong>
                <br />
                Lunes a viernes: 8:00 am – 6:00 pm
                <br />
                Sábados y domingos: 7:00 am – 8:00 pm
              </p>
              <a
                href="https://wa.me/573001234567?text=Hola%20Jesús,%20me%20interesa%20una%20sesión%20en%20Cartagena"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-solid"
                style={{ display: "inline-block" }}
              >
                Escribir por WhatsApp
              </a>
            </div>
          </div>

          {/* Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Services quick links */}
      <section className="section reveal" style={{ background: "var(--cream)" }}>
        <div className="section-label">Servicios</div>
        <h2 className="section-title" style={{ marginBottom: "32px" }}>
          ¿Qué tipo de <em>sesión</em> buscas?
        </h2>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          {[
            { label: "Bodas", href: "/servicios/fotografo-bodas-cartagena" },
            { label: "Retratos", href: "/servicios/retratos-cartagena" },
            { label: "Familias", href: "/servicios/familias-cartagena" },
            { label: "Quinceañeras", href: "/servicios/quinceañeras-cartagena" },
            { label: "Viajeros", href: "/servicios/viajeros-cartagena" },
            { label: "Corporativo", href: "/servicios/eventos-corporativos-cartagena" },
          ].map((s) => (
            <Link key={s.href} href={s.href} className="btn-primary" style={{ fontSize: "10px", padding: "10px 20px" }}>
              {s.label}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
