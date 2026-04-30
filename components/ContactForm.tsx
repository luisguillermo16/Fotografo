"use client";

import { useState } from "react";
import Link from "next/link";

const SERVICES = [
  { key: "sesion", label: "Tipo de sesión", options: ["Bodas", "Retratos", "Familias", "Quinceañeras", "Viajeros", "Corporativo"] },
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSent(true);
      } else {
        setError(result.message || "Algo salió mal. Por favor intenta de nuevo.");
      }
    } catch (err) {
      setError("Error de conexión. Por favor verifica tu internet.");
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "48px 24px",
          border: "1px solid var(--light-line)",
          background: "var(--cream)",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "32px",
            fontWeight: 300,
            color: "var(--terracotta)",
            marginBottom: "12px",
          }}
        >
          ¡Mensaje enviado!
        </div>
        <p style={{ fontSize: "14px", color: "var(--mid)", lineHeight: 1.7 }}>
          Gracias por escribirme. Te respondo en menos de 24 horas para coordinar los detalles de tu sesión.
        </p>
      </div>
    );
  }

  return (
    <form
      id="contact-form"
      className="contact-form"
      onSubmit={handleSubmit}
      aria-label="Formulario de contacto"
    >
      <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
        <input
          id="contact-name"
          type="text"
          name="name"
          placeholder="Tu nombre completo"
          required
          autoComplete="name"
          style={{ flex: 1, minWidth: "200px" }}
        />
        <input
          id="contact-email"
          type="email"
          name="email"
          placeholder="Correo electrónico"
          required
          autoComplete="email"
          style={{ flex: 1, minWidth: "200px" }}
        />
      </div>
      <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
        <input
          id="contact-phone"
          type="tel"
          name="phone"
          placeholder="WhatsApp / Teléfono"
          autoComplete="tel"
          style={{ flex: 1, minWidth: "200px" }}
        />
        <input
          id="contact-date"
          type="date"
          name="date"
          aria-label="Fecha tentativa de la sesión"
          style={{ flex: 1, minWidth: "200px", color: "var(--mid)" }}
        />
      </div>
      <select id="contact-service" name="service" defaultValue="">
        <option value="" disabled>
          Tipo de sesión
        </option>
        {SERVICES[0].options.map((o) => (
          <option key={o} value={o.toLowerCase()}>
            {o}
          </option>
        ))}
      </select>
      <textarea
        id="contact-message"
        name="message"
        placeholder="Cuéntame sobre tu sesión — ubicación deseada, número de personas, ideas especiales..."
        rows={4}
        required
      />
      {error && (
        <div style={{ padding: "12px", background: "#fee2e2", color: "#b91c1c", fontSize: "13px", textAlign: "center" }}>
          {error}
        </div>
      )}
      <button
        type="submit"
        className="btn-primary-solid"
        style={{ width: "100%", border: "none", padding: "18px", opacity: loading ? 0.7 : 1 }}
        disabled={loading}
      >
        {loading ? "Enviando..." : "Enviar mensaje"}
      </button>
      <p
        style={{
          fontSize: "11px",
          color: "var(--mid)",
          textAlign: "center",
          letterSpacing: "0.05em",
        }}
      >
        También puedes escribirme por{" "}
        <a
          href="https://wa.me/573001234567"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "var(--terracotta)", textDecoration: "none" }}
        >
          WhatsApp
        </a>
        . Respondo en menos de 24 horas.
      </p>
    </form>
  );
}
