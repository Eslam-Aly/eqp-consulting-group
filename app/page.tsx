const services = [
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
];

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
    image: "/team/leadership/emigdio-quintero.png",
    name: "Emigdio Quintero",
    role: "Managing Director",
  },
  {
    image: "/team/leadership/isaac-de-leon.png",
    name: "Isaac De León",
    role: "Director of Business Excellence & Supply Chain Solutions",
  },
  {
    image: "/team/leadership/angelica-ospino.png",
    name: "Angelica Ospino",
    role: "Director of Operational Excellence",
  },
  {
    image: "/team/leadership/eduardo-candanedo.png",
    name: "Eduardo Candanedo",
    role: "Director of Logistics & International Trade",
  },
  {
    image: "/team/leadership/eslam-aly.png",
    name: "Eslam Aly",
    role: "Director of Digital Transformation & AI Solutions",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="EQP Consulting, inicio">
          <img src="/eqp-logo.png" alt="EQP Consulting Group" />
        </a>
        <nav aria-label="Navegación principal">
          <a href="#nosotros">Nosotros</a>
          <a href="#servicios">Servicios</a>
          <a href="#metodo">Método</a>
          <a href="#equipo">Equipo</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <a className="nav-cta" href="#contacto">
          Diagnóstico gratis
        </a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy reveal">
          <p className="eyebrow">
            <span /> Consultoría & capacitación ISO
          </p>
          <h1>
            Sistemas que
            <br />
            impulsan <em>resultados.</em>
          </h1>
          <p className="hero-lede">
            Ayudamos a organizaciones en Panamá y Latinoamérica a convertir la
            calidad, la seguridad y la eficiencia en una ventaja competitiva.
          </p>
          <div className="hero-proof">
            <span>Experiencia especializada</span>
            <b>Consultoría presencial y online</b>
            <b>Panamá · Latinoamérica</b>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#contacto">
              Solicitar diagnóstico
            </a>
            <a className="button button-secondary" href="#servicios">
              Explorar servicios
            </a>
          </div>
        </div>
      </section>

      <div className="standards-strip" aria-label="Áreas de especialidad">
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
          <span>01</span> QUIÉNES SOMOS
        </div>
        <div className="intro-grid">
          <h2>
            La mejora no ocurre por accidente. <em>Se diseña.</em>
          </h2>
          <div>
            <p className="large-copy">
              Somos especialistas en consultoría y capacitación para la gestión
              empresarial. Unimos conocimiento normativo, experiencia operativa
              y una forma muy humana de acompañar el cambio.
            </p>
            <p>
              Nuestro objetivo no es entregar documentos: es construir sistemas
              simples, adoptados por las personas y conectados con los
              resultados de la organización.
            </p>
            <a className="inline-arrow" href="#metodo">
              Conoce nuestro enfoque <span>→</span>
            </a>
          </div>
        </div>
        <div className="stats">
          <div>
            <strong>360°</strong>
            <span>Visión integral del negocio</span>
          </div>
          <div>
            <strong>3</strong>
            <span>Modalidades: presencial, online e in-company</span>
          </div>
          <div>
            <strong>1</strong>
            <span>Socio durante todo el proceso</span>
          </div>
        </div>
      </section>

      <section className="section services" id="servicios">
        <div className="section-heading">
          <div className="section-kicker light">
            <span>02</span> QUÉ HACEMOS
          </div>
          <h2>
            Experiencia que se convierte
            <br />
            en <em>acción.</em>
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
                aria-label={`Consultar sobre ${service.title}`}
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
            <span>03</span> CÓMO TRABAJAMOS
          </div>
          <h2>
            De la brecha
            <br />
            al <em>desempeño.</em>
          </h2>
          <p>
            Un camino claro, adaptado a la realidad de tu organización y medido
            con resultados concretos.
          </p>
          <a className="button button-dark" href="#contacto">
            Empezar ahora <span>→</span>
          </a>
        </div>
        <ol className="timeline">
          <li>
            <span>01</span>
            <div>
              <h3>Diagnosticar</h3>
              <p>Entendemos tu contexto, objetivos, procesos y brechas.</p>
            </div>
          </li>
          <li>
            <span>02</span>
            <div>
              <h3>Diseñar</h3>
              <p>Creamos una hoja de ruta simple, priorizada y viable.</p>
            </div>
          </li>
          <li>
            <span>03</span>
            <div>
              <h3>Implementar</h3>
              <p>Trabajamos junto al equipo, transfiriendo capacidades.</p>
            </div>
          </li>
          <li>
            <span>04</span>
            <div>
              <h3>Mejorar</h3>
              <p>Medimos, auditamos y afinamos para sostener el avance.</p>
            </div>
          </li>
        </ol>
      </section>

      <section className="section team" id="equipo">
        <div className="team-heading">
          <div className="section-kicker">
            <span>04</span> NUESTRO EQUIPO
          </div>
          <div>
            <h2>
              Liderazgo que convierte
              <br />
              visión en <em>resultados.</em>
            </h2>
            <p>
              Nuestro equipo directivo reúne experiencia en excelencia
              empresarial, operaciones, logística, transformación digital y
              soluciones de inteligencia artificial.
            </p>
          </div>
        </div>

        <div className="leadership-grid-heading">
          <span>Equipo directivo</span>
          <p>Una visión compartida desde cinco áreas de especialidad.</p>
        </div>

        <div className="leadership-grid">
          {leadershipTeam.map((member, index) => (
            <article className="leadership-card" key={member.name}>
              <div className="leadership-card-photo">
                <span>{String(index + 1).padStart(2, "0")}</span>
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  loading="lazy"
                />
              </div>
              <div className="leadership-card-copy">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact" id="contacto">
        <div className="contact-copy">
          <div className="section-kicker light">
            <span>05</span> HABLEMOS
          </div>
          <h2>
            Tu próximo nivel
            <br />
            empieza con una
            <br />
            <em>conversación.</em>
          </h2>
          <p>
            Cuéntanos qué quieres mejorar. La primera evaluación es gratuita y
            sin compromiso.
          </p>
          <div className="contact-details">
            <a href="tel:+5078318353">
              <span>Teléfono</span>+507 831-8353
            </a>
            <a href="mailto:info@eqpconsulting.com">
              <span>Email</span>info@eqpconsulting.com
            </a>
            <p>
              <span>Ubicación</span>Ciudad de Panamá, Panamá
            </p>
          </div>
        </div>
        <form className="contact-form">
          <div className="field-row">
            <label>
              Nombre
              <input name="nombre" required placeholder="Tu nombre" />
            </label>
            <label>
              Empresa
              <input name="empresa" placeholder="Nombre de empresa" />
            </label>
          </div>
          <label>
            Email
            <input
              type="email"
              name="email"
              required
              placeholder="tu@empresa.com"
            />
          </label>
          <label>
            ¿En qué podemos ayudarte?
            <select name="servicio" defaultValue="">
              <option value="" disabled>
                Selecciona un servicio
              </option>
              <option>Consultoría ISO</option>
              <option>Capacitación</option>
              <option>Gestión y productividad</option>
              <option>Otro</option>
            </select>
          </label>
          <label>
            Mensaje
            <textarea
              name="mensaje"
              rows={4}
              placeholder="Cuéntanos brevemente sobre tu objetivo..."
            />
          </label>
          <button className="button button-primary" type="button">
            Enviar consulta <span>↗</span>
          </button>
          <small>Al enviar aceptas ser contactado por EQP Consulting.</small>
        </form>
      </section>

      <footer>
        <a className="brand dark" href="#inicio">
          <img src="/eqp-logo.png" alt="EQP Consulting Group" />
        </a>
        <p>
          Consultoría y capacitación para organizaciones que quieren mejorar de
          verdad.
        </p>
        <div>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a
            href="https://www.eqpconsulting.com"
            target="_blank"
            rel="noreferrer"
          >
            Sitio original ↗
          </a>
        </div>
        <small>© 2026 EQP Consulting. Todos los derechos reservados.</small>
      </footer>
    </main>
  );
}
