import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Servicios de Fotografía en Cartagena",
  description:
    "Servicios profesionales de fotografía en Cartagena de Indias: bodas, retratos, familias, quinceañeras, viajeros y eventos corporativos en la Ciudad Amurallada.",
  alternates: { canonical: "https://www.jesusreyesfoto.com/servicios" },
};

const services = [
  {
    title: "Fotografía de Bodas",
    desc: "Capturo cada momento de tu día especial en los escenarios más bellos de Cartagena.",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    alt: "Fotógrafo de bodas en Cartagena de Indias Colombia",
    href: "/servicios/fotografo-bodas-cartagena",
    keyword: "Bodas",
  },
  {
    title: "Retratos Profesionales",
    desc: "Sesiones personalizadas que revelan tu personalidad y carácter auténtico.",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
    alt: "Sesión de retratos profesionales en Cartagena Colombia",
    href: "/servicios/retratos-cartagena",
    keyword: "Retratos",
  },
  {
    title: "Sesiones Familiares",
    desc: "Momentos únicos con tu familia en los colores y texturas del Caribe colombiano.",
    img: "/images/Fotografia familiar en cartagena.jpg",
    alt: "Fotografía familiar en Cartagena de Indias Colombia",
    href: "/servicios/familias-cartagena",
    keyword: "Familias",
  },
  {
    title: "Quinceañeras",
    desc: "Un evento único merece fotos que cuenten su historia con elegancia y emoción.",
    img: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&q=80",
    alt: "Fotografía de quinceañeras en Cartagena Colombia",
    href: "/servicios/quinceañeras-cartagena",
    keyword: "Quinceañeras",
  },
  {
    title: "Fotógrafo para Viajeros",
    desc: "Lleva a casa fotos profesionales de tu aventura en la Ciudad Amurallada.",
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
    alt: "Fotógrafo para turistas y viajeros en Cartagena Colombia",
    href: "/servicios/viajeros-cartagena",
    keyword: "Viajeros",
  },
  {
    title: "Eventos Corporativos",
    desc: "Cobertura profesional de eventos empresariales, conferencias y lanzamientos.",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    alt: "Fotografía corporativa y eventos empresariales en Cartagena",
    href: "/servicios/eventos-corporativos-cartagena",
    keyword: "Corporativo",
  },
];

export default function ServiciosPage() {
  return (
    <>
      <ScrollReveal />
      <div className="page-hero">
        <div className="section-label">Especialidades</div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(48px, 7vw, 88px)",
            fontWeight: 300,
            lineHeight: 0.95,
            color: "var(--dark)",
          }}
        >
          Mis <em>Servicios</em>
        </h1>
        <p
          style={{
            fontSize: "15px",
            color: "var(--mid)",
            marginTop: "24px",
            maxWidth: "500px",
            lineHeight: 1.8,
          }}
        >
          Cada servicio está diseñado para capturar lo que más importa, en los
          escenarios únicos que solo Cartagena puede ofrecer.
        </p>
      </div>

      <section
        className="section"
        style={{ background: "var(--warm-white)" }}
        aria-label="Lista de servicios fotográficos"
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: "32px",
          }}
        >
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="service-card"
              style={{ height: "400px", position: "relative" }}
            >
              <Image
                src={s.img}
                alt={s.alt}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width:768px) 100vw, 50vw"
                loading="lazy"
              />
              <div className="service-card-content">
                <span className="service-card-label">{s.keyword}</span>
                <h2
                  className="service-card-title"
                  style={{ fontSize: "24px" }}
                >
                  {s.title}
                </h2>
                <p
                  style={{
                    fontSize: "13px",
                    color: "rgba(255,255,255,0.7)",
                    marginTop: "8px",
                    lineHeight: 1.6,
                  }}
                >
                  {s.desc}
                </p>
                <div className="service-card-arrow">Ver más →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
