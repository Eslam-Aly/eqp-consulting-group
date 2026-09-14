import type { Metadata } from "next";
import { SitePage } from "../page";

const siteTitle = "EQP Consulting | ISO Consulting & Business Excellence";
const siteDescription =
  "ISO consulting, corporate training and continuous improvement in Panama and internationally. ISO 9001, ISO/IEC 27001, ISO 14001 and more.";
const socialImageUrl =
  "https://eqp-consulting-group.vercel.app/og-eqp-live-colors.png";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/en",
    languages: {
      es: "/",
      en: "/en",
      ar: "/ar",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["es_ES", "ar_AR"],
    url: "/en",
    siteName: "EQP Consulting",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: socialImageUrl,
        width: 1200,
        height: 630,
        alt: "EQP Consulting — Systems that drive results",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [socialImageUrl],
  },
};

export default function EnglishHome() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: "document.documentElement.lang='en'",
        }}
      />
      <SitePage locale="en" />
    </>
  );
}
