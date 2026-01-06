import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

function StarsBackground() {
  return (
    <>
      {/* Nebulosa suave en el fondo */}
      <div className="nebula"></div>

      {/* Capa de estrellas */}
      <div className="stars">
        {Array.from({ length: 400 }).map((_, i) => {
          const size = Math.random() * 2 + 1; // 1px a 3px
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const duration = 40 + Math.random() * 50; // 40s a 90s
          const twinkle = Math.random() < 0.25;

          const colors = ["#ffffff", "#dbeafe", "#ffecec", "#fff7c2"];
          const color = colors[Math.floor(Math.random() * colors.length)];

          return (
            <div
              key={i}
              className={`star ${twinkle ? "twinkle" : ""}`}
              style={{
                left: `${left}%`,
                top: `${top}%`,
                width: `${size}px`,
                height: `${size}px`,
                background: color,
                opacity: Math.random() * 0.5 + 0.6,
                animation: `moveStar ${duration}s linear infinite`,
              }}
            ></div>
          );
        })}
      </div>
    </>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StarsBackground />
    <App />
  </StrictMode>
);