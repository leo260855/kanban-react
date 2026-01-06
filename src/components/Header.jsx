import { NavLink } from "react-router-dom";

function Header() {
  const headerStyle = {
    background: "rgba(15, 23, 42, 0.9)",
    padding: "16px 22px",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: "1px solid rgba(148, 163, 184, 0.4)",
    position: "sticky",
    top: 0,
    zIndex: 50,
    backdropFilter: "blur(12px)",
  };

  const navStyle = {
    display: "flex",
    gap: "10px",
  };

  const baseLink = {
    position: "relative",
    padding: "6px 14px",
    borderRadius: "999px",
    color: "#e5e7eb",
    fontSize: "14px",
    transition: "all 0.25s ease",
  };

  const activeLink = {
    background: "rgba(168, 85, 247, 0.25)",
    color: "#ffffff",
    boxShadow: "0 0 16px rgba(168, 85, 247, 0.9)",
  };

  const handleEnter = (e) => {
    e.target.style.background = "rgba(168, 85, 247, 0.15)";
    e.target.style.boxShadow = "0 0 12px rgba(168, 85, 247, 0.7)";
    e.target.style.transform = "translateY(-2px)";
  };

  const handleLeave = (e, isActive) => {
    e.target.style.transform = "translateY(0)";
    e.target.style.boxShadow = isActive
      ? "0 0 16px rgba(168, 85, 247, 0.9)"
      : "none";
    e.target.style.background = isActive
      ? "rgba(168, 85, 247, 0.25)"
      : "transparent";
  };

  const NavItem = ({ to, label }) => (
    <NavLink
      to={to}
      end={to === "/"}
      style={({ isActive }) => ({
        ...baseLink,
        ...(isActive ? activeLink : {}),
      })}
      onMouseEnter={handleEnter}
      onMouseLeave={(e) =>
        handleLeave(
          e,
          e.target.style.background === "rgba(168, 85, 247, 0.25)"
        )
      }
    >
      {label}
    </NavLink>
  );

  return (
    <header style={headerStyle}>
      <div>
        <h2 style={{ fontSize: "20px", fontWeight: "600" }}>
          Dashboard Kanban
        </h2>
        <p style={{ fontSize: "12px", color: "#9ca3af" }}>
          Organización de tareas con metodologías ágiles
        </p>
      </div>

      <nav style={navStyle}>
        <NavItem to="/" label="Inicio" />
        <NavItem to="/kanban" label="Kanban" />
        <NavItem to="/metodologias" label="Metodologías" />
        <NavItem to="/frameworks" label="Frameworks" />
        <NavItem to="/videos" label="Videos" />
        <NavItem to="/contacto" label="Contacto" />
      </nav>
    </header>
  );
}

export default Header;