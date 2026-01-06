import { useState } from "react";
import "./Videos.css";

function Videos() {
  const [open, setOpen] = useState(null);

  const toggle = (section) => {
    setOpen(open === section ? null : section);
  };

  return (
    <div className="videos-page">
      <h1 className="videos-title">Videos del Proyecto Kanban</h1>
      <p className="videos-subtitle">
        Explora el contenido audiovisual del proyecto por plataforma.
      </p>

      {/* TIKTOK */}
      <div className={`video-card ${open === "tiktok" ? "active" : ""}`}>
        <button className="video-header" onClick={() => toggle("tiktok")}>
          <span>📱 TikTok</span>
          <span className="count">7 videos</span>
        </button>

        {open === "tiktok" && (
          <div className="video-content">
            <ul>
              <li>¿Qué es Kanban?</li>
              <li>¿Qué es una tarea?</li>
              <li>Metodologías ágiles</li>
              <li>Ágil vs tradicional</li>
              <li>¿Qué es un framework?</li>
              <li>Kanban en la vida diaria</li>
              <li>Funcionamiento del dashboard</li>
            </ul>
          </div>
        )}
      </div>

      {/* REELS */}
      <div className={`video-card ${open === "reels" ? "active" : ""}`}>
        <button className="video-header" onClick={() => toggle("reels")}>
          <span>🎥 Reels</span>
          <span className="count">7 videos</span>
        </button>

        {open === "reels" && (
          <div className="video-content">
            <ul>
              <li>Introducción al proyecto</li>
              <li>Ventajas de Kanban</li>
              <li>Ejemplo visual del tablero</li>
              <li>Scrum vs Kanban</li>
              <li>Uso de React</li>
              <li>Trabajo ágil</li>
              <li>Conclusión</li>
            </ul>
          </div>
        )}
      </div>

      {/* YOUTUBE */}
      <div className={`video-card ${open === "youtube" ? "active" : ""}`}>
        <button className="video-header" onClick={() => toggle("youtube")}>
          <span>📺 YouTube</span>
          <span className="count">3 videos</span>
        </button>

        {open === "youtube" && (
          <div className="video-content">
            <ul>
              <li>Frameworks y React</li>
              <li>Metodologías ágiles vs tradicionales</li>
              <li>Funcionamiento completo del Kanban</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Videos;