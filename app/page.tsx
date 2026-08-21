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

const teamMembers = [
  {
    image: "/team/team-member-01.png",
    title: "La mano derecha",
    nickname: "Asistente nivel Canal",
    text: "Convierte las ideas del Big Boss en planes que sí caben en el calendario.",
  },
  {
    image: "/team/team-member-02.png",
    title: "La mano izquierda",
    nickname: "Jefa de que todo pase",
    text: "Sabe dónde está cada proyecto, cada cliente y probablemente también las llaves.",
  },
  {
    image: "/team/team-member-03.png",
    title: "El que abre las compuertas",
    nickname: "Asistente del asistente",
    text: "Resuelve lo que nadie sabía que estaba bloqueando el Canal.",
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

      <section className="section team" id="equipo">
        <div className="team-heading">
          <div className="section-kicker">
            <span>04</span> NUESTRO EQUIPO
          </div>
          <div>
            <h2>
              El Big Boss
              <br />
              y su <em>crew.</em>
            </h2>
            <p>
              Una organización perfectamente horizontal… excepto cuando llega
              el Big Boss. Por suerte, esta tripulación sabe mantener el Canal
              fluyendo.
            </p>
          </div>
        </div>

        <div className="team-showcase">
          <article className="team-lead">
            <div className="team-photo team-lead-photo">
              <img
                src="/team/president-ceo.png"
                alt="Presidente y CEO de EQP Consulting"
                loading="lazy"
              />
              <span className="team-badge">EL BIG BOSS</span>
            </div>
            <div className="team-lead-copy">
              <p>Presidente &amp; CEO</p>
              <h3>El capitán del Canal</h3>
              <span>
                Abre las compuertas, marca el rumbo y, según fuentes internas,
                siempre tiene la última palabra.
              </span>
            </div>
          </article>

          <div className="team-crew">
            <div className="team-crew-heading">
              <span>ASISTENTES DEL BIG BOSS</span>
              <p>Los que mantienen el Canal fluyendo mientras él supervisa.</p>
            </div>
            {teamMembers.map((member, index) => (
              <article className="team-member" key={member.title}>
                <div className="team-photo team-member-photo">
                  <img
                    src={member.image}
                    alt={`Miembro ${index + 1} del equipo de EQP Consulting`}
                    loading="lazy"
                  />
                </div>
                <div className="team-member-copy">
                  <span>{member.nickname}</span>
                  <h3>{member.title}</h3>
                  <p>{member.text}</p>
                </div>
              </article>
            ))}
          </div>
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
