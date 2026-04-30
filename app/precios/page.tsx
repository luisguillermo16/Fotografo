import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import PriceCards from "@/components/PriceCards";

export const metadata: Metadata = {
  title: "Precios — Paquetes de Fotografía en Cartagena",
  description:
    "Precios y paquetes de fotografía profesional en Cartagena de Indias. Paquetes desde $120 USD para sesiones de 1 hora. Bodas, familias, retratos y más.",
  alternates: { canonical: "https://www.jesusreyesfoto.com/precios" },
};

const faqs = [
  { q: "¿Los precios incluyen desplazamiento?", a: "Los paquetes incluyen sesiones dentro de la zona urbana de Cartagena (Ciudad Amurallada, Getsemaní, Bocagrande, Manga). Para locaciones fuera de la ciudad (Islas del Rosario, haciendas coloniales) hay un cargo adicional de transporte." },
  { q: "¿Cómo funciona el pago?", a: "Se requiere un anticipo del 50% para confirmar la fecha. El saldo restante se paga el día de la sesión o antes. Aceptamos transferencia bancaria, tarjeta de crédito y efectivo (USD o COP)." },
  { q: "¿Qué pasa si tengo que cancelar?", a: "El anticipo es reembolsable si cancelas con más de 7 días de anticipación. Para cancelaciones de menos de 7 días, el anticipo no es reembolsable pero puede aplicarse a una fecha futura." },
  { q: "¿Puedo ver las fotos antes de la entrega final?", a: "Entrego una selección previa de 5–10 fotos en 48 horas para que tengas una primera vista. La galería completa editada llega en 7 días hábiles." },
  { q: "¿Tienen paquetes especiales para bodas?", a: "Sí. Las bodas tienen una estructura de precios diferente que depende de la duración, número de eventos (ceremonia, recepción, mañana del novio/a) y locaciones. Contáctame para un presupuesto personalizado." },
  { q: "¿Qué formato recibo las fotos?", a: "Recibes todas las fotos en formato JPG de alta resolución (mínimo 20 megapíxeles), listas para imprimir en cualquier tamaño. También incluyo versiones optimizadas para redes sociales." },
];

export default function PreciosPage() {
  return (
    <>
      <ScrollReveal />
      <div className="page-hero">
        <div className="section-label">Inversión</div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 7vw, 88px)", fontWeight: 300, lineHeight: 0.95, color: "var(--dark)" }}>
          Paquetes y Precios
        </h1>
        <p style={{ fontSize: "14px", color: "var(--mid)", marginTop: "20px", lineHeight: 1.8, maxWidth: "480px" }}>
          Elige el paquete que mejor se adapte a tu sesión. Todos incluyen consulta de estilo y edición profesional. Precios en USD.
        </p>
      </div>

      <section className="section" style={{ background: "var(--cream)" }}>
        <PriceCards />
      </section>

      {/* What's included */}
      <section className="section reveal" style={{ background: "var(--warm-white)" }}>
        <div className="section-label">Siempre incluido</div>
        <h2 className="section-title" style={{ marginBottom: "40px" }}>
          En todos los <em>paquetes</em>
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "24px" }}>
          {[
            { icon: "●", title: "Consulta previa", desc: "Conversamos sobre tu visión, locación y estilo antes de la sesión." },
            { icon: "●", title: "Guía de estilo", desc: "Recomendaciones de ropa, colores y looks que funcionan mejor en Cartagena." },
            { icon: "●", title: "Edición profesional", desc: "Todas las fotos editadas con color consistente y retoque natural." },
            { icon: "●", title: "Galería privada", desc: "Acceso a galería en línea para descargar fotos en alta resolución." },
            { icon: "●", title: "Derechos de uso", desc: "Uso personal ilimitado: redes sociales, impresiones, álbumes." },
            { icon: "●", title: "Soporte WhatsApp", desc: "Contacto directo antes, durante y después de la sesión." },
          ].map((item) => (
            <div key={item.title} style={{ padding: "28px 24px", background: "var(--cream)", borderTop: "2px solid var(--light-line)" }}>
              <span style={{ color: "var(--terracotta)", fontSize: "8px", display: "block", marginBottom: "12px", letterSpacing: "0.2em" }}>
                {item.icon} INCLUIDO
              </span>
              <h3 style={{ fontFamily: "var(--font-display)", fontSize: "20px", fontWeight: 300, color: "var(--dark)", marginBottom: "8px" }}>
                {item.title}
              </h3>
              <p style={{ fontSize: "13px", color: "var(--mid)", lineHeight: 1.7 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section reveal" style={{ background: "var(--cream)" }}>
        <div className="section-label">Preguntas</div>
        <h2 className="section-title" style={{ marginBottom: "40px" }}>
          Preguntas <em>frecuentes</em>
        </h2>
        <div style={{ maxWidth: "720px" }}>
          {faqs.map((item, i) => (
            <details key={i} style={{ borderBottom: "1px solid var(--light-line)", marginBottom: "4px" }}>
              <summary style={{ fontFamily: "var(--font-display)", fontSize: "18px", fontWeight: 300, color: "var(--dark)", cursor: "pointer", padding: "16px 0", listStyle: "none", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {item.q}
                <span style={{ color: "var(--terracotta)", fontSize: "20px", flexShrink: 0 }}>+</span>
              </summary>
              <p style={{ fontSize: "14px", color: "var(--mid)", lineHeight: 1.8, paddingBottom: "16px" }}>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="testimonial-section reveal">
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 300, color: "white", marginBottom: "24px" }}>
          ¿Tienes preguntas sobre los <em style={{ color: "var(--terracotta-light)", fontStyle: "normal" }}>precios</em>?
        </h2>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/contacto" className="btn-primary" style={{ borderColor: "white", color: "white" }}>Contactar</Link>
          <a href="https://wa.me/573001234567" className="btn-primary" style={{ borderColor: "var(--terracotta-light)", color: "var(--terracotta-light)" }} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </section>
    </>
  );
}
