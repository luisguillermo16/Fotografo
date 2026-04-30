import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Blog | Consejos de Fotografía en Cartagena",
  description:
    "Blog de fotografía en Cartagena de Indias. Consejos, guías de locaciones, tips para preparar tu sesión y las mejores historias del Caribe colombiano.",
  alternates: { canonical: "https://www.jesusreyesfoto.com/blog" },
};

const posts = [
  {
    slug: "mejores-lugares-fotos-cartagena",
    title: "Los 10 mejores lugares para fotos en Cartagena",
    excerpt: "Una guía completa con los escenarios más fotogénicos de la Ciudad Amurallada, Getsemaní y las playas del Caribe colombiano.",
    img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80",
    alt: "Mejor lugar para fotos en Cartagena Colombia",
    cat: "Locaciones",
    date: "2025-03-15",
    dateDisplay: "15 marzo 2025",
  },
  {
    slug: "como-preparar-sesion-fotos-playa",
    title: "Cómo preparar una sesión de fotos en la playa",
    excerpt: "Todo lo que necesitas saber antes de tu sesión de fotos en las playas de Cartagena: qué llevar, qué ponerse y cuándo ir.",
    img: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    alt: "Sesión de fotos en la playa de Cartagena Colombia",
    cat: "Consejos",
    date: "2025-02-20",
    dateDisplay: "20 febrero 2025",
  },
  {
    slug: "hora-dorada-cartagena",
    title: "La hora dorada en Cartagena: cuándo y dónde",
    excerpt: "La luz del atardecer en Cartagena es incomparable. Descubre los mejores puntos y horarios para aprovecharla al máximo en tus fotos.",
    img: "https://images.unsplash.com/photo-1504150558240-0b4fd8946624?w=600&q=80",
    alt: "Hora dorada fotografía en Cartagena Colombia",
    cat: "Técnica",
    date: "2025-01-10",
    dateDisplay: "10 enero 2025",
  },
];

export default function BlogPage() {
  return (
    <>
      <ScrollReveal />
      <div className="page-hero">
        <div className="section-label">Artículos</div>
        <h1 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(48px, 7vw, 88px)", fontWeight: 300, lineHeight: 0.95, color: "var(--dark)" }}>
          El Blog de Jesús Reyes
        </h1>
        <p style={{ fontSize: "14px", color: "var(--mid)", marginTop: "20px", lineHeight: 1.8, maxWidth: "460px" }}>
          Consejos, guías de locaciones y las mejores historias detrás de las sesiones en Cartagena.
        </p>
      </div>

      <section className="section" style={{ background: "var(--warm-white)" }}>
        <div className="blog-grid">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card">
              <div className="blog-card-img-wrap">
                <Image
                  src={post.img}
                  alt={post.alt}
                  width={600}
                  height={240}
                  className="blog-card-img"
                  style={{ height: 240, objectFit: "cover", width: "100%", display: "block" }}
                  loading="lazy"
                />
              </div>
              <span className="blog-card-cat">{post.cat}</span>
              <h2 className="blog-card-title">{post.title}</h2>
              <p className="blog-card-excerpt">{post.excerpt}</p>
              <time dateTime={post.date} style={{ fontSize: "11px", color: "var(--mid)", display: "block", marginTop: "12px", letterSpacing: "0.1em" }}>
                {post.dateDisplay}
              </time>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
