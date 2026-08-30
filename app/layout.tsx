import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://eqpconsulting.com";
const siteTitle = "EQP Consulting | Consultoría ISO y Excelencia Empresarial";
const siteDescription =
  "Consultoría ISO, capacitación empresarial y mejora continua para organizaciones en todo el mundo. Sistemas de gestión que impulsan resultados.";
const socialImageUrl =
  "https://eqp-consulting-group.vercel.app/og-eqp-live-colors.png";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "EQP Consulting",
  title: siteTitle,
  description: siteDescription,
  alternates: { canonical: "/" },
  authors: [{ name: "EQP Consulting", url: siteUrl }],
  creator: "EQP Consulting",
  publisher: "EQP Consulting",
  category: "business",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    siteName: "EQP Consulting",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: socialImageUrl,
        width: 1200,
        height: 630,
        alt: "EQP Consulting — Sistemas que impulsan resultados",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [socialImageUrl],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "EQP Consulting Group",
  alternateName: "EQP Consulting",
  url: siteUrl,
  logo: `${siteUrl}/eqp-logo-blue.png`,
  image: socialImageUrl,
  description: siteDescription,
  email: "info@eqpconsulting.com",
  telephone: "+507 831-8353",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ciudad de Panamá",
    addressCountry: "PA",
  },
  sameAs: ["https://www.linkedin.com/company/eqp-consulting-group"],
  areaServed: "Worldwide",
  knowsAbout: [
    "ISO 9001",
    "ISO 13485",
    "ISO 45001",
    "Sistemas de gestión",
    "Excelencia operacional",
    "Mejora continua",
    "Transformación digital",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+507 831-8353",
      email: "info@eqpconsulting.com",
      contactType: "customer service",
      areaServed: "Worldwide",
      availableLanguage: ["Spanish", "English"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+507 6719-9642",
      contactType: "customer service",
      areaServed: "Panama",
      availableLanguage: ["Spanish", "English"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+1 800 295 7053",
      contactType: "customer service",
      areaServed: "United States",
      availableLanguage: ["English", "Spanish"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+49 176 2424 3790",
      contactType: "customer service",
      areaServed: "Germany",
      availableLanguage: ["English", "Spanish"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+34 613 849 845",
      contactType: "customer service",
      areaServed: "Spain",
      availableLanguage: ["Spanish", "English"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+380 96 213 1304",
      contactType: "customer service",
      areaServed: "Ukraine",
      availableLanguage: ["English", "Spanish"],
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de consultoría y capacitación",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Consultoría ISO",
          description:
            "Diseño e implementación de sistemas de gestión alineados con normas ISO.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Capacitación empresarial",
          description:
            "Formación práctica para implementar y sostener sistemas de gestión.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Gestión y productividad",
          description:
            "Optimización de procesos, indicadores y controles para elevar el desempeño.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
