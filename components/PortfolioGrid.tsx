"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface PortfolioItem {
  src: string;
  alt: string;
  height: number;
  title: string;
  cat: string;
  catLabel: string;
  href: string;
}

const ALL_ITEMS: PortfolioItem[] = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",
    alt: "Sesión de fotos para viajeros en Cartagena Colombia",
    height: 340,
    title: "Ashes",
    cat: "travelers",
    catLabel: "Viajeros",
    href: "/portafolio/viajeros",
  },
  {
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80",
    alt: "Retrato fotográfico profesional en Cartagena",
    height: 220,
    title: "Catalina",
    cat: "portrait",
    catLabel: "Retrato",
    href: "/portafolio/retratos",
  },
  {
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
    alt: "Fotografía de boda en Cartagena de Indias",
    height: 400,
    title: "Marce & Miguel",
    cat: "wedding",
    catLabel: "Boda",
    href: "/portafolio/bodas",
  },
  {
    src: "/images/familia-cartagena.jfif",
    alt: "Sesión familiar en Cartagena Colombia",
    height: 260,
    title: "Familias en el Caribe",
    cat: "family",
    catLabel: "Familia",
    href: "/portafolio/familias",
  },
  {
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80",
    alt: "Fotógrafo de viajeros en la Ciudad Amurallada de Cartagena",
    height: 360,
    title: "Justin",
    cat: "travelers",
    catLabel: "Viajeros",
    href: "/portafolio/viajeros",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    alt: "Retrato fotográfico masculino en Cartagena",
    height: 240,
    title: "Miguel",
    cat: "portrait",
    catLabel: "Retrato",
    href: "/portafolio/retratos",
  },
  {
    src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80",
    alt: "Fotografía de ceremonia de boda en Cartagena Colombia",
    height: 300,
    title: "Isabella & Jake",
    cat: "wedding",
    catLabel: "Boda",
    href: "/portafolio/bodas",
  },
  {
    src: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&q=80",
    alt: "Fotografía de quinceañera en Cartagena",
    height: 420,
    title: "Keila",
    cat: "quinceanera",
    catLabel: "Quinceañera",
    href: "/portafolio/quinceaneras",
  },
  {
    src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=600&q=80",
    alt: "Sesión familiar en playa de Cartagena Colombia",
    height: 260,
    title: "Jen's Family",
    cat: "family",
    catLabel: "Familia",
    href: "/portafolio/familias",
  },
  {
    src: "https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=600&q=80",
    alt: "Fotógrafo para viajeros en Cartagena Colombia",
    height: 280,
    title: "Vanja",
    cat: "travelers",
    catLabel: "Viajeros",
    href: "/portafolio/viajeros",
  },
  {
    src: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&q=80",
    alt: "Retrato fotográfico femenino en Cartagena",
    height: 360,
    title: "Natalia",
    cat: "portrait",
    catLabel: "Retrato",
    href: "/portafolio/retratos",
  },
  {
    src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80",
    alt: "Boda profesional fotografiada en Cartagena de Indias",
    height: 300,
    title: "Francy & Cristian",
    cat: "wedding",
    catLabel: "Boda",
    href: "/portafolio/bodas",
  },
];

const FILTERS = [
  { key: "all", label: "Todos" },
  { key: "travelers", label: "Viajeros" },
  { key: "wedding", label: "Bodas" },
  { key: "family", label: "Familias" },
  { key: "portrait", label: "Retratos" },
  { key: "quinceanera", label: "Quinceañeras" },
];

interface Props {
  initialFilter?: string;
  items?: PortfolioItem[];
}

export default function PortfolioGrid({ initialFilter = "all", items }: Props) {
  const [active, setActive] = useState(initialFilter);
  const data = items ?? ALL_ITEMS;
  const filtered =
    active === "all" ? data : data.filter((i) => i.cat === active);

  return (
    <>
      <nav className="cat-filter" aria-label="Filtrar portafolio por categoría">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            className={`cat-btn ${active === f.key ? "active" : ""}`}
            onClick={() => setActive(f.key)}
            aria-pressed={active === f.key}
          >
            {f.label}
          </button>
        ))}
      </nav>

      <div className="portfolio-grid" style={{ marginTop: "40px" }}>
        {filtered.map((item, idx) => (
          <Link
            key={`${active}-${item.src}-${idx}`}
            href={item.href}
            className="portfolio-item reveal-item"
            style={{ animationDelay: `${idx * 0.05}s` }}
          >
            <Image
              src={item.src}
              alt={item.alt}
              width={600}
              height={item.height}
              quality={100}
              style={{ width: "100%", height: item.height, objectFit: "cover" }}
              loading="lazy"
            />
            <div className="portfolio-item-overlay">
              <div>
                <span className="portfolio-item-cat">{item.catLabel}</span>
                <div className="portfolio-item-title">{item.title}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
