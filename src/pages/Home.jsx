import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <main className="home-container">

      {/* HERO */}
      <section className="home-hero">
        <span className="home-badge">Proyecto escolar · React + Kanban</span>

        <h1 className="home-title">
          Página principal del Proyecto Kanban
        </h1>

        <p className="home-description">
          Este dashboard muestra cómo se pueden organizar tareas utilizando un tablero Kanban,
          metodologías ágiles y el uso de un framework moderno como React. Aquí encontrarás explicación del tema,
          videos y un tablero interactivo para practicar.
        </p>

        <Link to="/kanban">
          <button className="btn-primary">Ir al tablero Kanban</button>
        </Link>
      </section>

      {/* CARDS DE EXPLICACIÓN */}
      <section className="home-section">
        <h2 className="home-subtitle">¿Qué incluye esta página?</h2>

        <p className="home-subdescription">
          El sitio está dividido en secciones para que el usuario entienda tanto
          la teoría como la práctica del Kanban y las metodologías de trabajo.
        </p>

        <div className="home-grid">

          <div className="home-card">
            <h3 className="home-card-title">Tablero Kanban</h3>
            <p>
              Un tablero interactivo donde puedes crear tareas, asignar prioridad,
              moverlas entre columnas y ver el progreso del proyecto.
            </p>
          </div>

          <div className="home-card">
            <h3 className="home-card-title">Metodologías y frameworks</h3>
            <p>
              Explicación sencilla de metodologías ágiles, método tradicional,
              Scrum y Kanban, además del uso de React como framework para construir la aplicación.
            </p>
          </div>

          <div className="home-card">
            <h3 className="home-card-title">Videos y material extra</h3>
            <p>
              Sección donde se organizan los videos tipo TikTok, Reels y YouTube
              que explican el proyecto y los conceptos principales de manera visual.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}

export default Home;