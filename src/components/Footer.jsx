export default function Footer() {
  return (
    <footer style={footerStyle}>
      © 2025 Proyecto Kanban
    </footer>
  );
}

const footerStyle = {
  position: "fixed",
  bottom: 0,
  left: 0,
  width: "100%",
  background: "rgba(15, 23, 42, 0.85)",
  backdropFilter: "blur(6px)",
  padding: "12px 0",
  textAlign: "center",
  fontSize: "14px",
  color: "#f1f5f9",
  zIndex: 9999, // 💥 IMPOSIBLE que quede detrás de otra cosa
  boxShadow: "0 -4px 10px rgba(0,0,0,0.35)",
};