import "./Metodologias.css";

function Metodologias() {
  return (
    <div className="met-container">
      <h1 className="met-title">Metodologías de Trabajo</h1>
      <p className="met-intro">
        Las metodologías de trabajo son formas organizadas de planear, desarrollar
        y completar un proyecto. Permiten mantener orden, mejorar la productividad
        y facilitar el trabajo en equipo.
      </p>

      {/* TRADICIONAL */}
      <section className="met-card">
        <h2>Metodología Tradicional</h2>
        <p>
          La metodología tradicional sigue un proceso lineal y rígido. Primero se
          planea todo el proyecto, después se desarrolla y al final se entrega.
        </p>
        <ul>
          <li>Planeación fija</li>
          <li>Pocos cambios</li>
          <li>Entrega final única</li>
        </ul>
      </section>

      {/* AGIL */}
      <section className="met-card">
        <h2>Metodologías Ágiles</h2>
        <p>
          Las metodologías ágiles dividen el proyecto en partes pequeñas que se
          mejoran constantemente, permitiendo adaptarse a los cambios.
        </p>
        <ul>
          <li>Flexibilidad</li>
          <li>Trabajo colaborativo</li>
          <li>Entregas continuas</li>
        </ul>
      </section>

      {/* SCRUM */}
      <section className="met-card">
        <h2>Scrum</h2>
        <p>
          Scrum es una metodología ágil que trabaja en ciclos llamados sprints.
          Cada sprint tiene objetivos claros y roles definidos.
        </p>
        <ul>
          <li>Product Owner</li>
          <li>Scrum Master</li>
          <li>Equipo de desarrollo</li>
        </ul>
      </section>

      {/* KANBAN */}
      <section className="met-card highlight">
        <h2>Kanban</h2>
        <p>
          Kanban es una metodología visual que organiza las tareas en columnas
          como <strong>Por hacer</strong>, <strong>En proceso</strong> y{" "}
          <strong>Terminado</strong>.
        </p>
        <p>
          Esta es la metodología utilizada en este proyecto, ya que permite ver
          el avance del dashboard de forma clara y organizada.
        </p>
      </section>

      {/* COMPARACION */}
      <section className="met-card">
        <h2>Ágil vs Tradicional</h2>
        <div className="compare">
          <div>
            <h3>Ágil</h3>
            <ul>
              <li>Flexible</li>
              <li>Cambios constantes</li>
              <li>Entregas rápidas</li>
            </ul>
          </div>
          <div>
            <h3>Tradicional</h3>
            <ul>
              <li>Rígida</li>
              <li>Pocos cambios</li>
              <li>Entrega final</li>
            </ul>
          </div>
        </div>
      </section>

      {/* LINEA DEL TIEMPO */}
      <section className="met-card">
        <h2>Línea del tiempo</h2>
        <ul className="timeline">
          <li><strong>1970–1990:</strong> Metodologías tradicionales.</li>
          <li><strong>2001:</strong> Manifiesto Ágil.</li>
          <li><strong>Actualidad:</strong> Scrum, Kanban y metodologías ágiles.</li>
        </ul>
      </section>

      {/* CONCLUSION */}
      <section className="met-card conclusion">
        <h2>Conclusión</h2>
        <p>
          Las metodologías de trabajo son clave para el desarrollo de proyectos.
          En este dashboard se demuestra cómo Kanban y React permiten organizar
          tareas de forma eficiente, visual y profesional.
        </p>
      </section>
    </div>
  );
}

export default Metodologias;