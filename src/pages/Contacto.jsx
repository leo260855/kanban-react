import "./Contacto.css";
function Contacto() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    const mailtoLink = `
      mailto:leonardo.ca26@icloud.com
      ?subject=Mensaje desde Proyecto Kanban
      &body=Nombre: ${name}%0D%0A
      Correo: ${email}%0D%0A%0D%0A
      Mensaje:%0D%0A${message}
    `;

    window.location.href = mailtoLink;
  };

  return (
    <main className="page-container">
      <h1 className="page-title">Contacto</h1>
      <p className="page-subtitle">
        ¿Tienes dudas o comentarios sobre el Proyecto Kanban?
        Envíanos un mensaje y se abrirá tu correo para enviarlo directamente.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Tu correo"
          required
        />

        <textarea
          name="message"
          placeholder="Escribe tu mensaje aquí..."
          required
        />

        <button type="submit">
          Enviar mensaje ✉️
        </button>
      </form>
    </main>
  );
}

export default Contacto;