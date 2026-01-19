import "./Metodologias.css";

function Metodologias() {
  return (
    <div className="met-container">
      <h1 className="met-title">Metodologías de Trabajo</h1>

      <p className="met-intro">
        Las metodologías de trabajo son formas organizadas de planear,
        desarrollar y completar un proyecto. Su objetivo principal es
        mejorar la productividad, mantener el orden y facilitar el trabajo
        en equipo, tanto en proyectos escolares como profesionales.
      </p>

      {/* TRADICIONAL */}
      <section className="met-card">
        <h2>Metodología Tradicional</h2>
        <p>
          La metodología tradicional sigue un proceso lineal y estructurado.
          Primero se realiza una planeación completa del proyecto, después se
          desarrolla siguiendo ese plan y finalmente se entrega el resultado.
        </p>
        <p>
          Este tipo de metodología funciona cuando los requisitos son claros
          desde el inicio, pero no es muy flexible ante cambios durante el
          desarrollo.
        </p>
        <ul>
          <li>Planeación fija desde el inicio</li>
          <li>Pocos cambios durante el proceso</li>
          <li>Entrega final única</li>
        </ul>
      </section>

      {/* AGIL */}
      <section className="met-card">
        <h2>Metodologías Ágiles</h2>
        <p>
          Las metodologías ágiles se basan en dividir el proyecto en partes
          pequeñas que se desarrollan y mejoran de manera continua.
          Permiten adaptarse a los cambios y responder rápidamente a nuevas
          necesidades.
        </p>
        <p>
          Este enfoque promueve la comunicación constante, el trabajo
          colaborativo y la entrega frecuente de resultados funcionales.
        </p>
        <ul>
          <li>Flexibilidad ante cambios</li>
          <li>Trabajo colaborativo</li>
          <li>Entregas continuas</li>
          <li>Mejora constante</li>
        </ul>
      </section>

      {/* SCRUM */}
      <section className="met-card">
        <h2>Scrum</h2>
        <p>
          Scrum es una metodología ágil que organiza el trabajo en ciclos
          cortos llamados <strong>sprints</strong>. Cada sprint tiene un
          objetivo específico y una duración definida.
        </p>
        <p>
          Scrum cuenta con roles claros que ayudan a organizar el trabajo
          y la toma de decisiones dentro del equipo.
        </p>
        <ul>
          <li><strong>Product Owner:</strong> define prioridades</li>
          <li><strong>Scrum Master:</strong> guía el proceso</li>
          <li><strong>Equipo de desarrollo:</strong> realiza el trabajo</li>
        </ul>
      </section>

      {/* KANBAN */}
      <section className="met-card highlight">
        <h2>Kanban</h2>
        <p>
          Kanban es una metodología ágil visual que organiza las tareas en
          columnas como <strong>Por hacer</strong>,{" "}
          <strong>En proceso</strong> y <strong>Terminado</strong>.
        </p>
        <p>
          Su principal ventaja es que permite visualizar el flujo de trabajo
          y conocer el estado de cada tarea en tiempo real.
        </p>
        <p>
          Esta es la metodología utilizada en este proyecto, ya que facilita
          el control del dashboard y mejora la organización de las tareas.
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
              <li>Mejora continua</li>
            </ul>
          </div>
          <div>
            <h3>Tradicional</h3>
            <ul>
              <li>Rígida</li>
              <li>Pocos cambios</li>
              <li>Entrega final</li>
              <li>Planeación fija</li>
            </ul>
          </div>
        </div>
      </section>

      {/* LINEA DEL TIEMPO */}
      <section className="met-card">
        <h2>Línea del tiempo de las metodologías</h2>
        <ul className="timeline">
          <li>
            <strong>1970–1990:</strong> Predominio de metodologías tradicionales.
          </li>
          <li>
            <strong>2001:</strong> Creación del Manifiesto Ágil.
          </li>
          <li>
            <strong>Actualidad:</strong> Uso de Scrum, Kanban y metodologías ágiles.
          </li>
        </ul>
      </section>

      {/* CONCLUSION */}
      <section className="met-card conclusion">
        <h2>Conclusión</h2>
        <p>
          Las metodologías de trabajo son fundamentales para el desarrollo de
          proyectos exitosos. En este dashboard se demuestra cómo Kanban,
          junto con React, permite organizar tareas de forma eficiente,
          visual y profesional.
        </p>
      </section>
    </div>
  );
}

export default Metodologias;