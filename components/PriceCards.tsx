import Link from "next/link";

interface PricePackage {
  tag: string;
  name: string;
  amount: string;
  currency?: string;
  featured?: boolean;
  features: { label: string; value: string }[];
  href: string;
}

const DEFAULT_PACKAGES: PricePackage[] = [
  {
    tag: "Paquete",
    name: "Minimal",
    amount: "120",
    currency: "$",
    features: [
      { label: "Duración", value: "1 hora" },
      { label: "Fotos entregadas", value: "30–50" },
      { label: "Locación", value: "1 lugar" },
      { label: "Consulta de estilo", value: "Incluida" },
    ],
    href: "/contacto",
  },
  {
    tag: "Paquete",
    name: "Standard",
    amount: "220",
    currency: "$",
    featured: true,
    features: [
      { label: "Duración", value: "2 horas" },
      { label: "Fotos entregadas", value: "60–80" },
      { label: "Locación", value: "2 lugares" },
      { label: "Consulta de estilo", value: "Incluida" },
    ],
    href: "/contacto",
  },
  {
    tag: "Paquete",
    name: "Maximum",
    amount: "320",
    currency: "$",
    features: [
      { label: "Duración", value: "3 horas" },
      { label: "Fotos entregadas", value: "Todas" },
      { label: "Locación", value: "Sin límite" },
      { label: "Consulta de estilo", value: "Incluida" },
    ],
    href: "/contacto",
  },
];

interface Props {
  packages?: PricePackage[];
}

export default function PriceCards({ packages = DEFAULT_PACKAGES }: Props) {
  return (
    <div className="prices-grid">
      {packages.map((pkg) => (
        <div key={pkg.name} className={`price-card ${pkg.featured ? "featured" : ""}`}>
          <span className="price-tag">{pkg.tag}</span>
          <span className="price-name">{pkg.name}</span>
          <span className="price-amount">
            <sup>{pkg.currency ?? "$"}</sup>
            {pkg.amount}
          </span>
          <ul className="price-features">
            {pkg.features.map((f) => (
              <li key={f.label}>
                <span>{f.label}</span>
                <strong>{f.value}</strong>
              </li>
            ))}
          </ul>
          <Link href={pkg.href} className="btn-book">
            Reservar
          </Link>
        </div>
      ))}
    </div>
  );
}
