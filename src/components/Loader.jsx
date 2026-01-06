import { useEffect, useState } from "react";
import "./loader.css";

function Loader() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loader-container ${fadeOut ? "fade-out" : ""}`}>
      
      {/* Estrellas animadas */}
      <div className="stars"></div>
      <div className="stars2"></div>
      <div className="stars3"></div>

      {/* La L animada (SIN PNG) */}
      <div className="loader-logo">
        L
      </div>

      {/* Texto debajo */}
      <p className="loader-text">
        Proyecto Kanban — Creado por Leonardo
      </p>

    </div>
  );
}

export default Loader;