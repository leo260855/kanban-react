function Frameworks() {
  return (
    <div className="frameworks-container">
      <h1 className="fw-title">Frameworks</h1>

      <p className="fw-intro">
        Un framework es un conjunto de herramientas, reglas y estructuras
        que facilitan el desarrollo de aplicaciones. Su objetivo principal
        es ayudar al desarrollador a trabajar de forma más rápida, ordenada
        y eficiente.
      </p>

      {/* DEFINICIÓN */}
      <section className="fw-section">
        <h2>¿Qué es un framework?</h2>
        <p>
          Un framework proporciona una base sobre la cual se construye una
          aplicación. Define cómo debe organizarse el código, qué estructura
          seguir y qué herramientas utilizar para desarrollar un proyecto.
        </p>
      </section>

      {/* UTILIDAD */}
      <section className="fw-section">
        <h2>¿Para qué sirve un framework?</h2>
        <ul className="fw-list">
          <li>Acelera el desarrollo de aplicaciones</li>
          <li>Evita repetir código innecesario</li>
          <li>Mantiene una estructura clara y ordenada</li>
          <li>Facilita el trabajo en equipo</li>
          <li>Mejora el mantenimiento del proyecto</li>
        </ul>
      </section>

      {/* REACT */}
      <section className="fw-react-card">
        <h2>React</h2>
        <p>
          React es una librería (framework) de JavaScript utilizada para crear
          interfaces de usuario interactivas. Se basa en componentes reutilizables
          y permite actualizar la información de la página sin recargarla.
        </p>

        <p>
          En este proyecto, React se utiliza para construir el dashboard Kanban,
          permitiendo agregar, mover y eliminar tareas de forma dinámica,
          manteniendo una experiencia fluida para el usuario.
        </p>

        <div className="fw-react-tags">
          <span>Componentes</span>
          <span>Estado</span>
          <span>Hooks</span>
          <span>Interactividad</span>
        </div>
      </section>

      {/* OTROS FRAMEWORKS */}
      <section className="fw-section">
        <h2>Otros frameworks populares</h2>
        <ul className="fw-list">
          <li><strong>Angular:</strong> framework completo y estructurado</li>
          <li><strong>Vue:</strong> sencillo, flexible y fácil de aprender</li>
          <li><strong>Svelte:</strong> rápido, ligero y moderno</li>
        </ul>
      </section>

      {/* CONEXIÓN CON EL PROYECTO */}
      <section className="fw-section fw-highlight">
        <h2>Relación con el proyecto Kanban</h2>
        <p>
          El uso de React como framework permite que el tablero Kanban sea
          interactivo, dinámico y fácil de mantener. Gracias a su estructura
          por componentes, cada parte del proyecto se puede desarrollar,
          modificar y escalar de manera ordenada.
        </p>
      </section>
    </div>
  );
}

export default Frameworks;