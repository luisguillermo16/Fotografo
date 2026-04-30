import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Sobre mí — TU NOMBRE, Fotógrafo en Cartagena",
  description:
    "Conoce a TU NOMBRE, fotógrafo profesional con más de 8 años de experiencia en Cartagena de Indias. Descubre su historia, estilo y filosofía de trabajo.",
  alternates: { canonical: "https://www.jesusreyesfoto.com/sobre-mi" },
};

export default function SobreMiPage() {
  return (
    <>
      <ScrollReveal />

      {/* Page Hero */}
      <div className="page-hero">
        <div className="section-label">Mi historia</div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(48px, 7vw, 88px)",
            fontWeight: 300,
            lineHeight: 0.95,
            color: "var(--dark)",
          }}
        >
          Sobre <em>mí</em>
        </h1>
      </div>

      {/* Main about */}
      <section
        className="section"
        style={{ background: "var(--cream)" }}
        aria-label="Historia de TU NOMBRE"
      >
        <div className="about-grid">
          <div className="about-images" aria-hidden="true">
            <div style={{ position: "absolute", width: "62%", height: 380, top: 0, left: 0, boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}>
              <Image
                src="https://images.unsplash.com/photo-1520390138845-fd2d229dd553?w=600&q=80"
                alt="TU NOMBRE fotógrafo trabajando en Cartagena"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width:900px) 100vw, 30vw"
                priority
              />
            </div>
            <div style={{ position: "absolute", width: "52%", height: 300, bottom: 0, right: 0, border: "6px solid var(--warm-white)", boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}>
              <Image
                src="https://images.unsplash.com/photo-1554048612-b6a482bc67e5?w=500&q=80"
                alt="Sesión fotográfica en Ciudad Amurallada Cartagena"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width:900px) 100vw, 25vw"
                loading="lazy"
              />
            </div>
          </div>
          <div className="about-text">
            <div className="section-label">Fotógrafo en Cartagena</div>
            <h2 className="section-title">
              8 años capturando
              <br />
              la <em>magia Caribe</em>
            </h2>
            <br />
            <p>
              Nací y crecí entre los colores vibrantes y la arquitectura
              colonial de Cartagena de Indias. Desde joven me enamoré de la
              fotografía como la manera más honesta de contar historias: una
              imagen captura no solo lo que ves, sino lo que sientes.
            </p>
            <p>
              Con más de 8 años de experiencia profesional, he trabajado con
              cientos de familias, parejas, viajeros y empresas que llegaron a
              Cartagena buscando algo especial. Mi trabajo es asegurarme de que
              lo encuentren — y que se vayan con imágenes que lo demuestren.
            </p>
            <p>
              Trabajo en la Ciudad Amurallada, Getsemaní, Bocagrande, Manga, y
              las playas de las Islas del Rosario. También realizo sesiones en
              haciendas coloniales y espacios privados bajo petición.
            </p>
            <Link href="/contacto" className="btn-primary">
              Hablemos de tu sesión
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section
        className="section reveal"
        aria-label="Filosofía y proceso de trabajo"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2px",
          }}
        >
          {[
            {
              num: "01",
              title: "Consulta inicial",
              desc: "Hablamos de tu visión, el lugar, el look que quieres lograr. No hay sesiones genéricas.",
            },
            {
              num: "02",
              title: "La sesión",
              desc: "Te guío en cada pose. Mi meta es que te sientas cómodo/a y el resultado sea auténtico.",
            },
            {
              num: "03",
              title: "Edición y entrega",
              desc: "Selección cuidadosa y edición consistente. Recibes tus fotos en 7 días hábiles.",
            },
          ].map((step) => (
            <div
              key={step.num}
              style={{
                background: "var(--cream)",
                padding: "44px 36px",
                borderRight: "1px solid var(--light-line)",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "60px",
                  fontWeight: 300,
                  color: "var(--light-line)",
                  lineHeight: 1,
                  display: "block",
                  marginBottom: "20px",
                }}
              >
                {step.num}
              </span>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "22px",
                  fontWeight: 300,
                  color: "var(--dark)",
                  marginBottom: "12px",
                }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize: "14px", color: "var(--mid)", lineHeight: 1.8 }}>
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="testimonial-section reveal"
        aria-label="Reservar sesión"
      >
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 4vw, 52px)",
            fontWeight: 300,
            color: "white",
            marginBottom: "24px",
          }}
        >
          ¿Listo para tu{" "}
          <em>sesión?</em>
        </h2>
        <Link href="/contacto" className="btn-primary" style={{ borderColor: "white", color: "white" }}>
          Reservar ahora
        </Link>
      </section>
    </>
  );
}
