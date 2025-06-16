export default function BlogPost({ params }) {
  const { id } = params;
  return (
    <main>
      <h1>Entrada de Blog #{id}</h1>
      <p style={{ color: "#666" }}>Fecha: {new Date().toLocaleDateString()}</p>
      <p>
        Esta es una demostración de ruta dinámica con Next.js App Router. El
        parámetro <code>id</code> es <strong>{id}</strong>.
      </p>
      <h2>Contenido de ejemplo</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus.
      </p>
      <blockquote
        style={{
          borderLeft: "4px solid #ccc",
          margin: "1rem 0",
          paddingLeft: "1rem",
        }}
      >
        “Next.js facilita la creación de aplicaciones React con rutas
        automáticas.”
      </blockquote>
    </main>
  );
}
