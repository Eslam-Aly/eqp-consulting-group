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
  "ISO 13485",
  "ISO 45001",
  "GESTIÓN DE OPERACIONES",
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
          {standards.map((standard) => (
            <span key={standard}>
              {standard}
              <i>✦</i>
            </span>
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

      <section className="contact" id="contacto">
        <div className="contact-copy">
          <div className="section-kicker light">
            <span>04</span> HABLEMOS
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
        <div className="contact-form" aria-disabled="true">
          <p className="contact-form-notice">
            Formulario temporalmente deshabilitado
          </p>
          <div className="field-row">
            <label>
              Nombre
              <input name="nombre" disabled placeholder="Tu nombre" />
            </label>
            <label>
              Empresa
              <input name="empresa" disabled placeholder="Nombre de empresa" />
            </label>
          </div>
          <label>
            Email
            <input
              type="email"
              name="email"
              disabled
              placeholder="tu@empresa.com"
            />
          </label>
          <label>
            ¿En qué podemos ayudarte?
            <select name="servicio" defaultValue="" disabled>
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
              disabled
              placeholder="Cuéntanos brevemente sobre tu objetivo..."
            />
          </label>
          <button className="button button-primary" type="button" disabled>
            Formulario no disponible
          </button>
          <small>
            Mientras tanto, escríbenos a{" "}
            <a href="mailto:info@eqpconsulting.com">
              info@eqpconsulting.com
            </a>
            .
          </small>
        </div>
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
