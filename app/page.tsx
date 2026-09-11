/* eslint-disable @next/next/no-html-link-for-pages -- Language links intentionally force a full document navigation on the static deployment. */
import {
  FaEnvelope,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import ContactForm from "./ContactForm";

const servicesByLocale = {
  es: [
    {
      number: "01",
      title: "Consultoría ISO",
      text: "Diseñamos e implementamos sistemas de gestión alineados con ISO 9001, ISO 13485 e ISO 45001, desde el diagnóstico hasta la certificación.",
      tags: ["Diagnóstico", "Implementación", "Auditoría"],
    },
    {
      number: "02",
      title: "Capacitación empresarial",
      text: "Convertimos los requisitos de las normas en conocimiento práctico para que cada equipo pueda sostener y mejorar su sistema.",
      tags: ["Cursos in-company", "E-learning", "Talleres"],
    },
    {
      number: "03",
      title: "Gestión y productividad",
      text: "Optimizamos procesos, indicadores y controles para reducir costos, elevar el desempeño y mejorar la experiencia del cliente.",
      tags: ["Procesos", "KPIs", "Mejora continua"],
    },
  ],
  en: [
    {
      number: "01",
      title: "ISO consulting",
      text: "We design and implement management systems aligned with ISO 9001, ISO 13485 and ISO 45001, from initial assessment through certification.",
      tags: ["Assessment", "Implementation", "Audit"],
    },
    {
      number: "02",
      title: "Corporate training",
      text: "We turn standards requirements into practical knowledge so every team can sustain and continuously improve its management system.",
      tags: ["In-company courses", "E-learning", "Workshops"],
    },
    {
      number: "03",
      title: "Management and productivity",
      text: "We optimize processes, indicators and controls to reduce costs, improve performance and elevate the customer experience.",
      tags: ["Processes", "KPIs", "Continuous improvement"],
    },
  ],
  ar: [
    {
      number: "01",
      title: "استشارات الأيزو",
      text: "نصمّم ونطبّق أنظمة إدارة متوافقة مع ISO 9001 وISO 13485 وISO 45001، بدءًا من التقييم الأولي وحتى الحصول على الشهادة.",
      tags: ["التقييم", "التطبيق", "التدقيق"],
    },
    {
      number: "02",
      title: "التدريب المؤسسي",
      text: "نحوّل متطلبات المواصفات إلى معرفة عملية تمكّن كل فريق من استدامة نظام الإدارة وتطويره باستمرار.",
      tags: ["دورات داخلية", "تعلّم إلكتروني", "ورش عمل"],
    },
    {
      number: "03",
      title: "الإدارة والإنتاجية",
      text: "نطوّر العمليات والمؤشرات والضوابط لخفض التكاليف ورفع الأداء وتحسين تجربة العملاء.",
      tags: ["العمليات", "مؤشرات الأداء", "التحسين المستمر"],
    },
  ],
} as const;

const standards = [
  "ISO 9001",
  "ISO 9004",
  "ISO 10001",
  "ISO 10002",
  "ISO 10003",
  "ISO 10004",
  "ISO 10005",
  "ISO 10006",
  "ISO 10007",
  "ISO 10012",
  "ISO 18295-1",
  "ISO 18295-2",
  "ISO 14001",
  "ISO 14004",
  "ISO 14006",
  "ISO 14031",
  "ISO 14040",
  "ISO 14044",
  "ISO/TS 14072",
  "ISO 14046",
  "ISO 14064-1",
  "ISO 14064-2",
  "ISO 14064-3",
  "ISO 14067",
  "ISO 14068",
  "ISO 45001",
  "ISO 45003",
  "ISO 39001",
  "ISO 31000",
  "ISO 31010",
  "ISO 37301",
  "ISO 37001",
  "ISO 37002",
  "ISO 37003",
  "ISO 37008",
  "ISO/IEC 27001",
  "ISO/IEC 27002",
  "ISO/IEC 27005",
  "ISO/IEC 27017",
  "ISO/IEC 27018",
  "ISO/IEC 27032",
  "ISO/IEC 27701",
  "ISO/IEC 38500",
  "ISO/IEC 42001",
  "ISO/IEC 20000-1",
  "ISO 22301",
  "ISO 22313",
  "ISO 22316",
  "ISO 22320",
  "ISO 22361",
  "ISO 22000",
  "ISO/TS 22002",
  "ISO 22005",
  "HACCP",
  "FSSC 22000",
  "ISO 13485",
  "ISO 14971",
  "ISO 15189",
  "ISO 22870",
  "ISO/IEC 17020",
  "ISO/IEC 17021",
  "ISO/IEC 17024",
  "ISO/IEC 17025",
  "ISO/IEC 17065",
  "ISO 17029",
  "ISO 17067",
  "ISO 50001",
  "ISO 50002",
  "ISO 50006",
  "ISO 55001",
  "ISO 55002",
  "ISO 55010",
  "ISO 30401",
  "ISO 30405",
  "ISO 30408",
  "ISO 30414",
  "ISO 30415",
  "ISO 21502",
  "ISO 21503",
  "ISO 21504",
  "ISO 56001",
  "ISO 56002",
  "ISO 28000",
  "ISO 28001",
  "ISO 28004",
  "ISO 26000",
  "ISO 20400",
  "ISO 37101",
  "ISO 21001",
  "ISO 22483",
  "ISO 19011",
  "ISO 22716",
  "IATF 16949",
  "AS9100",
  "AS9110",
  "AS9120",
];

const leadershipTeam = [
  {
    image: "/team/leadership/emigdio-quintero.webp",
    width: 900,
    height: 978,
    name: "Emigdio Quintero",
    role: "Managing Director",
    roleAr: "المدير العام",
  },
  {
    image: "/team/leadership/isaac-de-leon.webp",
    width: 900,
    height: 1125,
    name: "Isaac De León",
    role: "Director of Business Excellence & Supply Chain Solutions",
    roleAr: "مدير التميز المؤسسي وحلول سلاسل الإمداد",
  },
  {
    image: "/team/leadership/angelica-ospino.webp",
    width: 900,
    height: 1125,
    name: "Angelica Ospino",
    role: "Director of Operational Excellence",
    roleAr: "مديرة التميز التشغيلي",
  },
  {
    image: "/team/leadership/eduardo-candanedo.webp",
    width: 900,
    height: 1125,
    name: "Eduardo Candanedo",
    role: "Director of Logistics & International Trade",
    roleAr: "مدير الخدمات اللوجستية والتجارة الدولية",
  },
  {
    image: "/team/leadership/eslam-aly.webp",
    width: 900,
    height: 879,
    name: "Eslam Aly",
    role: "Director of Digital Transformation & AI Solutions",
    roleAr: "مدير التحول الرقمي وحلول الذكاء الاصطناعي",
  },
];

const internationalContactsByLocale = {
  es: [
    {
      location: "Berlín, Alemania",
      phone: "+49 176 2424 3790",
      href: "tel:+4917624243790",
    },
    {
      location: "Estados Unidos",
      phone: "+1 (800) 295-7053",
      href: "tel:+18002957053",
    },
    {
      location: "Madrid, España",
      phone: "+34 613 849 845",
      href: "tel:+34613849845",
    },
    {
      location: "Kiev, Ucrania",
      phone: "+380 96 213 1304",
      href: "tel:+380962131304",
    },
  ],
  en: [
    {
      location: "Berlin, Germany",
      phone: "+49 176 2424 3790",
      href: "tel:+4917624243790",
    },
    {
      location: "United States",
      phone: "+1 (800) 295-7053",
      href: "tel:+18002957053",
    },
    {
      location: "Madrid, Spain",
      phone: "+34 613 849 845",
      href: "tel:+34613849845",
    },
    {
      location: "Kyiv, Ukraine",
      phone: "+380 96 213 1304",
      href: "tel:+380962131304",
    },
  ],
  ar: [
    {
      location: "برلين، ألمانيا",
      phone: "+49 176 2424 3790",
      href: "tel:+4917624243790",
    },
    {
      location: "الولايات المتحدة",
      phone: "+1 (800) 295-7053",
      href: "tel:+18002957053",
    },
    {
      location: "مدريد، إسبانيا",
      phone: "+34 613 849 845",
      href: "tel:+34613849845",
    },
    {
      location: "كييف، أوكرانيا",
      phone: "+380 96 213 1304",
      href: "tel:+380962131304",
    },
  ],
} as const;

const clients = [
  {
    name: "Manzanillo International Terminal",
    image: "/clients/mit.jpg",
    format: "wide",
  },
  { name: "Vopak", image: "/clients/vopak.svg", format: "wide" },
  { name: "SGS", image: "/clients/sgs.svg" },
  {
    name: "Bureau Veritas",
    image: "/clients/bureau-veritas.png",
    format: "portrait",
  },
  {
    name: "Programa de las Naciones Unidas para el Desarrollo",
    image: "/clients/pnud.png",
    format: "portrait",
  },
  {
    name: "Órgano Judicial de Panamá",
    image: "/clients/organo-judicial.jpg",
  },
  {
    name: "Centro de Atención Ciudadana 311",
    image: "/clients/311.png",
    format: "compact",
  },
  {
    name: "AHK Panamá",
    image: "/clients/ahk-panama.jpg",
    format: "wide",
  },
  { name: "Canon", image: "/clients/canon.png", format: "wide" },
  { name: "BIOMIN", image: "/clients/biomin.jpg" },
  {
    name: "Panama Fruit Company",
    image: "/clients/pfc.png",
  },
  { name: "Pascual", image: "/clients/pascual.jpg" },
  {
    name: "Thera Hospital",
    image: "/clients/thera-hospital.png",
    format: "wide",
  },
  { name: "Viamed", image: "/clients/viamed.jpg", format: "wide" },
  { name: "Microfeed", image: "/clients/microfeed.png", format: "wide" },
  { name: "Sopisco Panamá", image: "/clients/sopisco.png" },
  {
    name: "Industrias Metálicas Carmona",
    image: "/clients/metalicas-carmona.png",
    format: "wide",
  },
  { name: "JC Supply", image: "/clients/jc-supply.jpeg" },
  {
    name: "Fòs Feminista",
    image: "/clients/fos-feminista.svg",
    format: "wide",
  },
  {
    name: "Innova Health Supplies",
    image: "/clients/innova-health-supplies.png",
    format: "wide",
  },
];

export type Locale = "es" | "en" | "ar";

const copyByLocale = {
  es: {
    brandHome: "EQP Consulting, inicio",
    navigationLabel: "Navegación principal",
    languageLabel: "Seleccionar idioma",
    nav: ["Nosotros", "Servicios", "Método", "Equipo", "Clientes", "Contacto"],
    navCta: "Diagnóstico gratis",
    eyebrow: "Consultoría & capacitación ISO",
    heroLine1: "Sistemas que",
    heroLine2: "impulsan",
    heroAccent: "resultados.",
    heroLede:
      "Ayudamos a organizaciones en todo el mundo a convertir la calidad, la seguridad y la eficiencia en una ventaja competitiva.",
    proof: [
      "Experiencia especializada",
      "Consultoría presencial y online",
      "Alcance global",
    ],
    requestAssessment: "Solicitar diagnóstico",
    exploreServices: "Explorar servicios",
    standardsLabel: "Áreas de especialidad",
    aboutKicker: "QUIÉNES SOMOS",
    aboutTitle: "La mejora no ocurre por accidente.",
    aboutAccent: "Se diseña.",
    aboutLead:
      "Somos especialistas en consultoría y capacitación para la gestión empresarial. Unimos conocimiento normativo, experiencia operativa y una forma muy humana de acompañar el cambio.",
    aboutBody:
      "Nuestro objetivo no es entregar documentos: es construir sistemas simples, adoptados por las personas y conectados con los resultados de la organización.",
    approachLink: "Conoce nuestro enfoque",
    stats: [
      "Visión integral del negocio",
      "Modalidades: presencial, online e in-company",
      "Socio durante todo el proceso",
    ],
    servicesKicker: "QUÉ HACEMOS",
    servicesTitle: "Experiencia que se convierte",
    servicesAccent: "en acción.",
    serviceAria: "Consultar sobre",
    methodKicker: "CÓMO TRABAJAMOS",
    methodTitle: "De la brecha",
    methodAccent: "al desempeño.",
    methodBody:
      "Un camino claro, adaptado a la realidad de tu organización y medido con resultados concretos.",
    startNow: "Empezar ahora",
    steps: [
      ["Diagnosticar", "Entendemos tu contexto, objetivos, procesos y brechas."],
      ["Diseñar", "Creamos una hoja de ruta simple, priorizada y viable."],
      ["Implementar", "Trabajamos junto al equipo, transfiriendo capacidades."],
      ["Mejorar", "Medimos, auditamos y afinamos para sostener el avance."],
    ],
    teamKicker: "NUESTRO EQUIPO",
    teamTitle: "Liderazgo que convierte",
    teamAccent: "visión en resultados.",
    teamBody:
      "Nuestro equipo directivo reúne experiencia en excelencia empresarial, operaciones, logística, transformación digital y soluciones de inteligencia artificial.",
    leadershipLabel: "Equipo directivo",
    leadershipBody: "Una visión compartida desde cinco áreas de especialidad.",
    clientsKicker: "NUESTROS CLIENTES",
    clientsTitle: "Confianza construida",
    clientsAccent: "con resultados.",
    clientsBody:
      "Acompañamos a organizaciones públicas, privadas y multilaterales en la construcción de sistemas más sólidos, eficientes y sostenibles.",
    clientsCount: "organizaciones que han confiado en nuestra experiencia",
    contactKicker: "HABLEMOS",
    contactLine1: "Tu próximo nivel",
    contactLine2: "empieza con una",
    contactAccent: "conversación.",
    contactBody:
      "Cuéntanos qué quieres mejorar. La primera evaluación es gratuita y sin compromiso.",
    spokenLanguagesLabel: "Hablamos",
    spokenLanguages: "Español · Inglés · Árabe",
    panamaOffice: "Panamá · Oficina principal",
    email: "Email",
    headquarters: "Sede",
    panamaCity: "Ciudad de Panamá, Panamá",
    internationalSupport: "Atención internacional",
    footerDescription:
      "Consultoría y capacitación para organizaciones que quieren mejorar de verdad.",
    contactDetailsLabel: "Datos de contacto",
    panama: "Panamá",
    mainOffice: "Oficina principal",
    phones: "Teléfonos",
    international: "Internacional",
    globalSupport: "Atención global",
    whatsappLabel: "Escríbenos por WhatsApp",
    whatsappShort: "WhatsApp",
    whatsappMessage:
      "Hola, me gustaría recibir información sobre los servicios de EQP Consulting.",
    legal: "© 2026 EQP Consulting. Todos los derechos reservados.",
  },
  en: {
    brandHome: "EQP Consulting, home",
    navigationLabel: "Main navigation",
    languageLabel: "Select language",
    nav: ["About", "Services", "Method", "Team", "Clients", "Contact"],
    navCta: "Free assessment",
    eyebrow: "ISO consulting & training",
    heroLine1: "Systems that",
    heroLine2: "drive",
    heroAccent: "results.",
    heroLede:
      "We help organizations worldwide turn quality, safety and efficiency into a competitive advantage.",
    proof: [
      "Specialized expertise",
      "On-site and online consulting",
      "Global reach",
    ],
    requestAssessment: "Request an assessment",
    exploreServices: "Explore services",
    standardsLabel: "Areas of expertise",
    aboutKicker: "WHO WE ARE",
    aboutTitle: "Improvement does not happen by accident.",
    aboutAccent: "It is designed.",
    aboutLead:
      "We specialize in management consulting and corporate training. We combine standards expertise, operational experience and a people-centered approach to guide change.",
    aboutBody:
      "Our goal is not to deliver documents: it is to build simple systems that people adopt and that connect directly to organizational results.",
    approachLink: "Discover our approach",
    stats: [
      "A complete view of the business",
      "Delivery modes: on-site, online and in-company",
      "One partner throughout the entire process",
    ],
    servicesKicker: "WHAT WE DO",
    servicesTitle: "Expertise transformed",
    servicesAccent: "into action.",
    serviceAria: "Ask about",
    methodKicker: "HOW WE WORK",
    methodTitle: "From the gap",
    methodAccent: "to performance.",
    methodBody:
      "A clear path, tailored to your organization and measured through concrete results.",
    startNow: "Get started",
    steps: [
      ["Assess", "We understand your context, objectives, processes and gaps."],
      ["Design", "We create a simple, prioritized and achievable roadmap."],
      ["Implement", "We work alongside your team and transfer capabilities."],
      ["Improve", "We measure, audit and refine to sustain progress."],
    ],
    teamKicker: "OUR TEAM",
    teamTitle: "Leadership that turns",
    teamAccent: "vision into results.",
    teamBody:
      "Our leadership team brings together expertise in business excellence, operations, logistics, digital transformation and artificial intelligence solutions.",
    leadershipLabel: "Leadership team",
    leadershipBody: "One shared vision across five areas of expertise.",
    clientsKicker: "OUR CLIENTS",
    clientsTitle: "Trust built",
    clientsAccent: "through results.",
    clientsBody:
      "We support public, private and multilateral organizations in building stronger, more efficient and sustainable systems.",
    clientsCount: "organizations that have trusted our expertise",
    contactKicker: "LET'S TALK",
    contactLine1: "Your next level",
    contactLine2: "starts with a",
    contactAccent: "conversation.",
    contactBody:
      "Tell us what you want to improve. Your initial assessment is free and carries no obligation.",
    spokenLanguagesLabel: "We speak",
    spokenLanguages: "English · Arabic · Spanish",
    panamaOffice: "Panama · Main office",
    email: "Email",
    headquarters: "Headquarters",
    panamaCity: "Panama City, Panama",
    internationalSupport: "International support",
    footerDescription:
      "Consulting and training for organizations committed to meaningful improvement.",
    contactDetailsLabel: "Contact details",
    panama: "Panama",
    mainOffice: "Main office",
    phones: "Phone numbers",
    international: "International",
    globalSupport: "Global support",
    whatsappLabel: "Chat with us on WhatsApp",
    whatsappShort: "WhatsApp",
    whatsappMessage:
      "Hello, I would like more information about EQP Consulting services.",
    legal: "© 2026 EQP Consulting. All rights reserved.",
  },
  ar: {
    brandHome: "EQP للاستشارات، الصفحة الرئيسية",
    navigationLabel: "التنقل الرئيسي",
    languageLabel: "اختيار اللغة",
    nav: ["من نحن", "خدماتنا", "منهجيتنا", "فريقنا", "عملاؤنا", "تواصل معنا"],
    navCta: "تقييم مجاني",
    eyebrow: "استشارات وتدريب الأيزو",
    heroLine1: "أنظمة تقود",
    heroLine2: "مؤسستك نحو",
    heroAccent: "النتائج.",
    heroLede:
      "نساعد المؤسسات حول العالم على تحويل الجودة والسلامة والكفاءة إلى ميزة تنافسية.",
    proof: ["خبرة متخصصة", "استشارات حضورية وعن بُعد", "نطاق عالمي"],
    requestAssessment: "اطلب تقييمًا",
    exploreServices: "استكشف خدماتنا",
    standardsLabel: "مجالات الخبرة",
    aboutKicker: "من نحن",
    aboutTitle: "التحسين لا يحدث بالمصادفة.",
    aboutAccent: "بل يُصمَّم.",
    aboutLead:
      "نحن متخصصون في الاستشارات الإدارية والتدريب المؤسسي، ونجمع بين الخبرة في المواصفات والتجربة التشغيلية ونهج إنساني لإدارة التغيير.",
    aboutBody:
      "هدفنا ليس تسليم مستندات، بل بناء أنظمة بسيطة يتبنّاها فريق العمل وترتبط مباشرة بنتائج المؤسسة.",
    approachLink: "تعرّف على منهجيتنا",
    stats: [
      "رؤية متكاملة للأعمال",
      "خدمات حضورية وعن بُعد وداخل المؤسسة",
      "شريك واحد طوال مراحل المشروع",
    ],
    servicesKicker: "ماذا نقدم",
    servicesTitle: "خبرات تتحول",
    servicesAccent: "إلى إنجاز.",
    serviceAria: "استفسر عن",
    methodKicker: "كيف نعمل",
    methodTitle: "من تحديد الفجوة",
    methodAccent: "إلى تحقيق الأداء.",
    methodBody:
      "مسار واضح يناسب واقع مؤسستك ويُقاس من خلال نتائج ملموسة.",
    startNow: "ابدأ الآن",
    steps: [
      ["التقييم", "نفهم واقع مؤسستك وأهدافها وعملياتها والفجوات القائمة."],
      ["التصميم", "نضع خارطة طريق واضحة ومرتبة حسب الأولويات وقابلة للتنفيذ."],
      ["التطبيق", "نعمل إلى جانب فريقك وننقل إليه المعرفة والقدرات اللازمة."],
      ["التحسين", "نقيس النتائج وندقق ونطوّر لضمان استدامة التقدم."],
    ],
    teamKicker: "فريقنا",
    teamTitle: "قيادة تحوّل",
    teamAccent: "الرؤية إلى نتائج.",
    teamBody:
      "يجمع فريقنا القيادي خبرات في التميز المؤسسي والعمليات والخدمات اللوجستية والتحول الرقمي وحلول الذكاء الاصطناعي.",
    leadershipLabel: "الفريق القيادي",
    leadershipBody: "رؤية مشتركة تجمع خمس مجالات من الخبرة المتخصصة.",
    clientsKicker: "عملاؤنا",
    clientsTitle: "ثقة بُنيت",
    clientsAccent: "على النتائج.",
    clientsBody:
      "ندعم المؤسسات العامة والخاصة ومتعددة الأطراف في بناء أنظمة أكثر قوة وكفاءة واستدامة.",
    clientsCount: "مؤسسة وثقت بخبراتنا",
    contactKicker: "لنتحدث",
    contactLine1: "مستواك القادم",
    contactLine2: "يبدأ من",
    contactAccent: "محادثة.",
    contactBody:
      "أخبرنا بما تريد تطويره. التقييم الأولي مجاني ومن دون أي التزام.",
    spokenLanguagesLabel: "نتحدث",
    spokenLanguages: "العربية · الإنجليزية · الإسبانية",
    panamaOffice: "بنما · المكتب الرئيسي",
    email: "البريد الإلكتروني",
    headquarters: "المقر",
    panamaCity: "مدينة بنما، بنما",
    internationalSupport: "الدعم الدولي",
    footerDescription:
      "استشارات وتدريب للمؤسسات التي تسعى إلى تحسين حقيقي ومستدام.",
    contactDetailsLabel: "بيانات التواصل",
    panama: "بنما",
    mainOffice: "المكتب الرئيسي",
    phones: "أرقام الهاتف",
    international: "دولي",
    globalSupport: "دعم عالمي",
    whatsappLabel: "تواصل معنا عبر واتساب",
    whatsappShort: "واتساب",
    whatsappMessage:
      "مرحبًا، أود الحصول على مزيد من المعلومات حول خدمات EQP Consulting.",
    legal: "© 2026 EQP Consulting. جميع الحقوق محفوظة.",
  },
} as const;

const sectionIds = [
  "nosotros",
  "servicios",
  "metodo",
  "equipo",
  "clientes",
  "contacto",
] as const;

export function SitePage({ locale }: { locale: Locale }) {
  const copy = copyByLocale[locale];
  const services = servicesByLocale[locale];
  const internationalContacts = internationalContactsByLocale[locale];
  const isRtl = locale === "ar";
  const whatsappUrl = `https://wa.me/50767199642?text=${encodeURIComponent(copy.whatsappMessage)}`;

  return (
    <main
      lang={locale}
      dir={isRtl ? "rtl" : "ltr"}
      className={isRtl ? "site-main site-main--rtl" : "site-main"}
    >
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label={copy.brandHome}>
          <img
            src="/eqp-logo-blue.webp"
            alt="EQP Consulting Group"
            width={480}
            height={212}
            fetchPriority="high"
            decoding="async"
          />
        </a>
        <nav aria-label={copy.navigationLabel}>
          {copy.nav.map((label, index) => (
            <a href={`#${sectionIds[index]}`} key={sectionIds[index]}>
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <div className="language-switcher" aria-label={copy.languageLabel}>
            <a
              href="/"
              hrefLang="es"
              lang="es"
              aria-current={locale === "es" ? "page" : undefined}
            >
              ES
            </a>
            <span aria-hidden="true">/</span>
            <a
              href="/en"
              hrefLang="en"
              lang="en"
              aria-current={locale === "en" ? "page" : undefined}
            >
              EN
            </a>
            <span aria-hidden="true">/</span>
            <a
              href="/ar"
              hrefLang="ar"
              lang="ar"
              aria-current={locale === "ar" ? "page" : undefined}
            >
              AR
            </a>
          </div>
          <a className="nav-cta" href="#contacto">
            {copy.navCta}
          </a>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy reveal">
          <p className="eyebrow">
            <span /> {copy.eyebrow}
          </p>
          <h1>
            {copy.heroLine1}
            <br />
            {copy.heroLine2} <em>{copy.heroAccent}</em>
          </h1>
          <p className="hero-lede">{copy.heroLede}</p>
          <div className="hero-proof">
            <span>{copy.proof[0]}</span>
            <b>{copy.proof[1]}</b>
            <b>{copy.proof[2]}</b>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#contacto">
              {copy.requestAssessment}
            </a>
            <a className="button button-secondary" href="#servicios">
              {copy.exploreServices}
            </a>
          </div>
        </div>
      </section>

      <div className="standards-strip" aria-label={copy.standardsLabel}>
        <div className="standards-track">
          {[0, 1].map((copy) => (
            <div
              className="standards-group"
              key={copy}
              aria-hidden={copy === 1 ? "true" : undefined}
            >
              {standards.map((standard) => (
                <span key={`${copy}-${standard}`}>
                  {standard}
                  <i aria-hidden="true">✦</i>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section className="section intro" id="nosotros">
        <div className="section-kicker">
          <span>01</span> {copy.aboutKicker}
        </div>
        <div className="intro-grid">
          <h2>
            {copy.aboutTitle} <em>{copy.aboutAccent}</em>
          </h2>
          <div>
            <p className="large-copy">{copy.aboutLead}</p>
            <p>{copy.aboutBody}</p>
            <a className="inline-arrow" href="#metodo">
              {copy.approachLink} <span>→</span>
            </a>
          </div>
        </div>
        <div className="stats">
          <div>
            <strong>360°</strong>
            <span>{copy.stats[0]}</span>
          </div>
          <div>
            <strong>3</strong>
            <span>{copy.stats[1]}</span>
          </div>
          <div>
            <strong>1</strong>
            <span>{copy.stats[2]}</span>
          </div>
        </div>
      </section>

      <section className="section services" id="servicios">
        <div className="section-heading">
          <div className="section-kicker light">
            <span>02</span> {copy.servicesKicker}
          </div>
          <h2>
            {copy.servicesTitle}
            <br />
            <em>{copy.servicesAccent}</em>
          </h2>
        </div>
        <div className="service-list">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-number">{service.number}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <div className="tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
              <a
                href="#contacto"
                aria-label={`${copy.serviceAria} ${service.title}`}
              >
                ↗
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section method" id="metodo">
        <div className="method-copy">
          <div className="section-kicker">
            <span>03</span> {copy.methodKicker}
          </div>
          <h2>
            {copy.methodTitle}
            <br />
            <em>{copy.methodAccent}</em>
          </h2>
          <p>{copy.methodBody}</p>
          <a className="button button-dark" href="#contacto">
            {copy.startNow} <span>→</span>
          </a>
        </div>
        <ol className="timeline">
          {copy.steps.map(([title, text], index) => (
            <li key={title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section team" id="equipo">
        <div className="team-heading">
          <div className="section-kicker">
            <span>04</span> {copy.teamKicker}
          </div>
          <div>
            <h2>
              {copy.teamTitle}
              <br />
              <em>{copy.teamAccent}</em>
            </h2>
            <p>{copy.teamBody}</p>
          </div>
        </div>

        <div className="leadership-grid-heading">
          <span>{copy.leadershipLabel}</span>
          <p>{copy.leadershipBody}</p>
        </div>

        <div className="leadership-grid">
          {leadershipTeam.map((member, index) => {
            const memberRole = locale === "ar" ? member.roleAr : member.role;

            return (
              <article className="leadership-card" key={member.name}>
                <div className="leadership-card-photo">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <img
                    src={member.image}
                    alt={`${member.name}, ${memberRole}`}
                    width={member.width}
                    height={member.height}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="leadership-card-copy">
                  <h3>{member.name}</h3>
                  <p>{memberRole}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="section clients" id="clientes">
        <div className="clients-heading">
          <div className="section-kicker">
            <span>05</span> {copy.clientsKicker}
          </div>
          <div>
            <h2>
              {copy.clientsTitle}
              <br />
              <em>{copy.clientsAccent}</em>
            </h2>
            <p>{copy.clientsBody}</p>
          </div>
        </div>

        <div className="clients-meta">
          <strong>{clients.length}</strong>
          <span>{copy.clientsCount}</span>
        </div>

        <div className="clients-grid">
          {clients.map((client) => (
            <figure
              className={`client-card client-card--${client.format ?? "standard"}`}
              key={client.name}
              title={client.name}
            >
              <img src={client.image} alt={client.name} loading="lazy" />
              <figcaption>{client.name}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="contact" id="contacto">
        <div className="contact-copy">
          <div className="section-kicker light">
            <span>06</span> {copy.contactKicker}
          </div>
          <h2>
            {copy.contactLine1}
            <br />
            {copy.contactLine2}
            <br />
            <em>{copy.contactAccent}</em>
          </h2>
          <p>{copy.contactBody}</p>
          <div
            className="spoken-languages"
            aria-label={`${copy.spokenLanguagesLabel}: ${copy.spokenLanguages}`}
          >
            <span>{copy.spokenLanguagesLabel}</span>
            <strong>{copy.spokenLanguages}</strong>
          </div>
          <div className="contact-details">
            <div className="contact-detail-group">
              <span>{copy.panamaOffice}</span>
              <a href="tel:+5078318353">+507 831-8353</a>
              <a href="tel:+50767199642">+507 6719-9642</a>
            </div>
            <a href="mailto:info@eqpconsulting.com">
              <span>{copy.email}</span>info@eqpconsulting.com
            </a>
            <p>
              <span>{copy.headquarters}</span>{copy.panamaCity}
            </p>
          </div>
          <div className="international-directory">
            <p className="international-directory-title">
              {copy.internationalSupport}
            </p>
            <div className="international-directory-grid">
              {internationalContacts.map((contact) => (
                <a href={contact.href} key={contact.location}>
                  <span>{contact.location}</span>
                  {contact.phone}
                </a>
              ))}
            </div>
          </div>
        </div>
        <ContactForm locale={locale} />
      </section>

      <footer>
        <div className="footer-brand-block">
          <a className="brand dark" href="#inicio">
            <img
              src="/eqp-logo-blue.webp"
              alt="EQP Consulting Group"
              width={480}
              height={212}
              loading="lazy"
              decoding="async"
            />
          </a>
          <p>{copy.footerDescription}</p>
        </div>

        <div className="footer-contact-columns" aria-label={copy.contactDetailsLabel}>
          <section className="footer-contact-column" aria-labelledby="footer-panama">
            <h3 id="footer-panama"><span>01</span> {copy.panama}</h3>
            <p className="footer-contact-subtitle">{copy.mainOffice}</p>
            <div className="footer-contact-list">
              <div className="footer-contact-cluster">
                <span className="footer-contact-icon" aria-hidden="true">
                  <FaPhoneAlt />
                </span>
                <span>
                  <small>{copy.phones}</small>
                  <span className="footer-inline-links">
                    <a href="tel:+5078318353">+507 831-8353</a>
                    <a href="tel:+50767199642">+507 6719-9642</a>
                  </span>
                </span>
              </div>
              <a href="mailto:info@eqpconsulting.com">
                <span className="footer-contact-icon" aria-hidden="true">
                  <FaEnvelope />
                </span>
                <span>
                  <small>{copy.email}</small>
                  info@eqpconsulting.com
                </span>
              </a>
              <div className="footer-contact-cluster">
                <span className="footer-contact-icon" aria-hidden="true">
                  <FaMapMarkerAlt />
                </span>
                <span>
                  <small>{copy.headquarters}</small>
                  {copy.panamaCity}
                </span>
              </div>
              <a
                href="https://www.linkedin.com/company/eqp-consulting-group"
                target="_blank"
                rel="noreferrer"
              >
                <span className="footer-contact-icon" aria-hidden="true">
                  <FaLinkedin />
                </span>
                <span>
                  <small>LinkedIn</small>
                  EQP Consulting Group
                </span>
              </a>
            </div>
          </section>

          <section className="footer-contact-column" aria-labelledby="footer-global">
            <h3 id="footer-global"><span>02</span> {copy.international}</h3>
            <p className="footer-contact-subtitle">{copy.globalSupport}</p>
            <div className="footer-contact-list footer-contact-list--international">
              {internationalContacts.map((contact) => (
                <a href={contact.href} key={contact.location}>
                  <span className="footer-contact-icon" aria-hidden="true">
                    <FaPhoneAlt />
                  </span>
                  <span>
                    <small>{contact.location}</small>
                    {contact.phone}
                  </span>
                </a>
              ))}
            </div>
          </section>
        </div>

        <small className="footer-legal">
          {copy.legal}
        </small>
      </footer>

      <a
        className="whatsapp-button"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={copy.whatsappLabel}
        title={copy.whatsappLabel}
      >
        <FaWhatsapp aria-hidden="true" />
        <span>{copy.whatsappShort}</span>
      </a>
    </main>
  );
}

export default function Home() {
  return <SitePage locale="es" />;
}
