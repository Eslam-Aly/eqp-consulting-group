import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EQP Consulting | Consultoría y Capacitación ISO",
  description:
    "Consultoría ISO, capacitación empresarial y mejora de procesos en Panamá y Latinoamérica.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "EQP Consulting | Sistemas que impulsan resultados",
    description: "Consultoría ISO, capacitación y mejora continua.",
    images: [
      { url: "/og.png", width: 1200, height: 630, alt: "EQP Consulting" },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
