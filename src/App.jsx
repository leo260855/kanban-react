import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Kanban from "./pages/Kanban";
import Metodologias from "./pages/Metodologias";
import Frameworks from "./pages/Frameworks";
import Videos from "./pages/Videos";
import Contacto from "./pages/Contacto";

/* ===============================
   FONDO DE ESTRELLAS
================================ */
function StarsBackground() {
  const stars = Array.from({ length: 120 });

  return (
    <div className="stars">
      {stars.map((_, i) => {
        const size = Math.random() * 2 + 1;
        const duration = Math.random() * 15 + 8;

        return (
          <span
            key={i}
            className="star twinkle"
            style={{
              width: size,
              height: size,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: "white",
              opacity: Math.random(),
              animation: `
                moveStar ${duration}s linear infinite,
                twinkle ${Math.random() * 3 + 2}s infinite alternate
              `,
            }}
          />
        );
      })}
    </div>
  );
}

/* ===============================
   TRANSICIÓN ENTRE RUTAS
================================ */
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <div key={location.pathname} className="page-transition">
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/kanban" element={<Kanban />} />
        <Route path="/metodologias" element={<Metodologias />} />
        <Route path="/frameworks" element={<Frameworks />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      {/* Fondo galaxia */}
      <div className="nebula"></div>
      <StarsBackground />

      {/* Contenido */}
      <Header />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;