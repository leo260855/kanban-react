import { useMemo, useState } from "react";
import "./Videos.css";

function Videos() {
  const [open, setOpen] = useState(null);

  const toggle = (section) => {
    setOpen((prev) => (prev === section ? null : section));
  };

  const data = useMemo(
    () => ({
      tiktok: {
        title: "TikTok",
        icon: "📱",
        count: 14,
        items: [
          {
            title: "¿Qué es Kanban?",
            url: "https://vt.tiktok.com/ZS5uHXu6G/",
          },
          {
            title: "¿Qué es una tarea?",
            url: "https://vt.tiktok.com/ZS5uHxKFw/",
          },
          {
            title: "Metodologías ágiles",
            url: "https://vt.tiktok.com/ZS5uHue5m/",
          },
          {
            title: "Metodología ágil vs metodología tradicional",
            url: "https://vt.tiktok.com/ZS5uHU6Ur/",
          },
          {
            title: "¿Qué es un framework?",
            url: "https://vt.tiktok.com/ZS5uHPaGD/",
          },
          {
            title: "Kanban en la vida diaria",
            url: "https://vt.tiktok.com/ZS5uHN9TR/",
          },
          {
            title: "Funcionamiento del dashboard Kanban",
            url: "https://vt.tiktok.com/ZS5uH85xu/",
          },
          {
            title: "Columnas del tablero Kanban",
            url: "https://vt.tiktok.com/ZS5uHJLMW/",
          },
          {
            title: "Prioridades de las tareas en Kanban",
            url: "https://vt.tiktok.com/ZS5uu3VCV/",
          },
          {
            title: "Flujo y control de prioridades en Kanban",
            url: "https://vt.tiktok.com/ZS5uHS7Ru/",
          },
          {
            title: "Límite de tareas en proceso (WIP)",
            url: "https://vt.tiktok.com/ZS5uHhMVK/",
          },
          {
            title: "Progreso del proyecto en Kanban",
            url: "https://vt.tiktok.com/ZS5uHMaDY/",
          },
          {
            title: "Guardado de tareas en Kanban",
            url: "https://vt.tiktok.com/ZS5uH4yJ8/",
          },
          {
            title: "Beneficios de usar Kanban en proyectos",
            url: "https://vt.tiktok.com/ZS5uHBQFx/",
          },
        ],
      },

      youtube: {
        title: "YouTube",
        icon: "📺",
        count: 3,
        items: [
          {
            title: "Metodologías ágiles vs metodologías tradicionales",
            url: "https://youtu.be/w4EcQEddUGQ?si=FgI26RxQ66l8MjDC",
          },
          {
            title: "Funcionamiento completo del Proyecto Kanban",
            url: "https://youtu.be/x-GRVl519Mw?si=QZg8SyfXM932qKgW",
          },
          {
            title: "Frameworks y su relación con React",
            url: "https://youtu.be/8sRsrkDRYLc?si=4p9DCpzUsuXhhSbL",
          },
        ],
      },
    }),
    []
  );

  const renderItems = (sectionKey) => {
    const section = data[sectionKey];

    return (
      <div className="video-content">
        <div className="video-grid">
          {section.items.map((item, idx) => (
            <a
              key={`${sectionKey}-${idx}`}
              className="video-item"
              href={item.url}
              target="_blank"
              rel="noreferrer"
            >
              <div className="video-item-left">
                <span className="video-bullet">{idx + 1}</span>
                <div className="video-item-text">
                  <h4>{item.title}</h4>
                  <p>Abrir video</p>
                </div>
              </div>

              <span className="video-action">▶</span>
            </a>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="videos-page">
      <h1 className="videos-title">Videos del Proyecto Kanban</h1>
      <p className="videos-subtitle">
        Contenido audiovisual del proyecto organizado por plataforma.
      </p>

      <div className={`video-card ${open === "tiktok" ? "active" : ""}`}>
        <button className="video-header" onClick={() => toggle("tiktok")}>
          <span>📱 TikTok</span>
          <span className="count">14 videos</span>
        </button>
        {open === "tiktok" && renderItems("tiktok")}
      </div>

      <div className={`video-card ${open === "youtube" ? "active" : ""}`}>
        <button className="video-header" onClick={() => toggle("youtube")}>
          <span>📺 YouTube</span>
          <span className="count">3 videos</span>
        </button>
        {open === "youtube" && renderItems("youtube")}
      </div>
    </div>
  );
}

export default Videos;