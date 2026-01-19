function Frameworks() {
  const container = {
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "40px 20px",
    color: "#f9fafb",
  };

  const title = {
    fontSize: "2.6rem",
    textAlign: "center",
    marginBottom: "20px",
  };

  const intro = {
    fontSize: "1.1rem",
    opacity: 0.85,
    marginBottom: "40px",
    textAlign: "center",
    lineHeight: 1.7,
  };

  const section = {
    marginBottom: "45px",
  };

  const sectionTitle = {
    fontSize: "1.7rem",
    marginBottom: "12px",
  };

  const paragraph = {
    lineHeight: 1.7,
    opacity: 0.9,
    marginBottom: "12px",
  };

  const list = {
    marginTop: "12px",
    paddingLeft: "22px",
  };

  const listItem = {
    marginBottom: "10px",
  };

  const reactCard = {
    margin: "50px 0",
    padding: "30px",
    borderRadius: "16px",
    background: "rgba(0, 0, 0, 0.45)",
    border: "1px solid rgba(155, 70, 255, 0.7)",
    boxShadow: "0 0 30px rgba(155, 70, 255, 0.4)",
  };

  const tags = {
    marginTop: "18px",
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  };

  const tag = {
    background: "rgba(155, 70, 255, 0.25)",
    border: "1px solid rgba(155, 70, 255, 0.6)",
    padding: "6px 14px",
    borderRadius: "999px",
    fontSize: "0.8rem",
  };

  const highlight = {
    background: "rgba(155, 70, 255, 0.15)",
    borderLeft: "4px solid rgba(155, 70, 255, 0.9)",
    padding: "25px",
    borderRadius: "12px",
  };

  return (
    <div style={container}>
      <h1 style={title}>Frameworks</h1>

      <p style={intro}>
        En el desarrollo de software, los frameworks juegan un papel fundamental,
        ya que permiten crear aplicaciones de forma organizada, estructurada y
        eficiente. Su uso es común tanto en proyectos escolares como en aplicaciones
        profesionales.
      </p>

      {/* DEFINICIÓN */}
      <section style={section}>
        <h2 style={sectionTitle}>¿Qué es un framework?</h2>
        <p style={paragraph}>
          Un framework es una estructura de trabajo que proporciona reglas,
          herramientas y componentes predefinidos para desarrollar aplicaciones.
          En lugar de comenzar desde cero, el desarrollador utiliza esta base
          para construir el proyecto de manera más rápida y ordenada.
        </p>
        <p style={paragraph}>
          Los frameworks establecen una forma clara de organizar archivos,
          escribir código y conectar las diferentes partes de una aplicación,
          lo que reduce errores y mejora la calidad del software.
        </p>
      </section>

      {/* IMPORTANCIA */}
      <section style={section}>
        <h2 style={sectionTitle}>¿Por qué son importantes los frameworks?</h2>
        <p style={paragraph}>
          Los frameworks son importantes porque ayudan a seguir buenas prácticas
          de programación y facilitan el trabajo en equipo, ya que todos los
          desarrolladores trabajan bajo una misma estructura.
        </p>
        <ul style={list}>
          <li style={listItem}>Ahorran tiempo durante el desarrollo</li>
          <li style={listItem}>Mejoran la organización del código</li>
          <li style={listItem}>Reducen errores comunes</li>
          <li style={listItem}>Facilitan el mantenimiento del proyecto</li>
          <li style={listItem}>Permiten que el proyecto crezca sin desorden</li>
        </ul>
      </section>

      {/* TIPOS */}
      <section style={section}>
        <h2 style={sectionTitle}>Tipos de frameworks</h2>
        <p style={paragraph}>
          Existen diferentes tipos de frameworks dependiendo de la parte del
          desarrollo en la que se utilicen. Cada uno cumple una función específica
          dentro de una aplicación.
        </p>
        <ul style={list}>
          <li style={listItem}>
            <strong>Frontend:</strong> se enfocan en la interfaz de usuario.
          </li>
          <li style={listItem}>
            <strong>Backend:</strong> manejan la lógica y los datos.
          </li>
          <li style={listItem}>
            <strong>Fullstack:</strong> combinan frontend y backend.
          </li>
        </ul>
      </section>

      {/* REACT */}
      <section style={reactCard}>
        <h2 style={sectionTitle}>React</h2>
        <p style={paragraph}>
          React es una librería o framework de JavaScript utilizada para crear
          interfaces de usuario interactivas. Su principal característica es el
          uso de componentes, lo que permite dividir una aplicación en partes
          pequeñas y reutilizables.
        </p>
        <p style={paragraph}>
          React maneja el estado de la aplicación, lo que permite que la información
          cambie dinámicamente conforme el usuario interactúa, sin necesidad de
          recargar la página.
        </p>
        <p style={paragraph}>
          En este proyecto Kanban, React se utiliza para controlar el tablero,
          las tareas, el progreso y la navegación entre secciones, ofreciendo
          una experiencia moderna y fluida.
        </p>

        <div style={tags}>
          <span style={tag}>Componentes</span>
          <span style={tag}>Estado</span>
          <span style={tag}>Hooks</span>
          <span style={tag}>Interactividad</span>
          <span style={tag}>Reutilización</span>
        </div>
      </section>

      {/* OTROS FRAMEWORKS */}
      <section style={section}>
        <h2 style={sectionTitle}>Otros frameworks populares</h2>
        <ul style={list}>
          <li style={listItem}>
            <strong>Angular:</strong> framework desarrollado por Google, ideal
            para aplicaciones grandes y estructuradas.
          </li>
          <li style={listItem}>
            <strong>Vue:</strong> framework flexible y fácil de aprender,
            utilizado en proyectos pequeños y medianos.
          </li>
          <li style={listItem}>
            <strong>Svelte:</strong> framework moderno que genera aplicaciones
            rápidas y ligeras.
          </li>
        </ul>
      </section>

      {/* CONCLUSIÓN */}
      <section style={highlight}>
        <h2 style={sectionTitle}>Relación con el proyecto Kanban</h2>
        <p style={paragraph}>
          El uso de React como framework permite que el proyecto Kanban sea
          interactivo, organizado y escalable. Cada sección funciona como un
          componente independiente, lo que facilita su desarrollo y mantenimiento.
        </p>
        <p style={paragraph}>
          Gracias a los frameworks, este proyecto simula la forma en que se
          desarrollan aplicaciones reales, aplicando conceptos utilizados en
          entornos profesionales.
        </p>
      </section>
    </div>
  );
}

export default Frameworks;