import type { Metadata } from "next";
import { SitePage } from "../page";

const siteTitle = "EQP Consulting | استشارات الأيزو والتميز المؤسسي";
const siteDescription =
  "استشارات الأيزو والتدريب المؤسسي والتحسين المستمر للمؤسسات حول العالم. أنظمة إدارية تقود إلى نتائج ملموسة.";
const socialImageUrl =
  "https://eqp-consulting-group.vercel.app/og-eqp-live-colors.png";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/ar",
    languages: {
      es: "/",
      en: "/en",
      ar: "/ar",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_AR",
    alternateLocale: ["es_ES", "en_US"],
    url: "/ar",
    siteName: "EQP Consulting",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: socialImageUrl,
        width: 1200,
        height: 630,
        alt: "EQP Consulting — أنظمة تقود مؤسستك نحو النتائج",
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

export default function ArabicHome() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html:
            "document.documentElement.lang='ar';document.documentElement.dir='rtl'",
        }}
      />
      <SitePage locale="ar" />
    </>
  );
}
