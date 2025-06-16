export default function HomePage() {
  return (
    <main>
      <h1>Bienvenido a Mi App</h1>
      <p>
        Este es un ejemplo de Next.js App Router usando JavaScript y CSS global.
      </p>

      <h2>Secciones destacadas</h2>
      <ul>
        <li>📄 Páginas estáticas: Inicio, Acerca de y Contacto.</li>
        <li>🔗 Navegación con componente común.</li>
        <li>📝 Ruta dinámica: Blog/[id].</li>
        <li>🚫 Manejo de 404 personalizado.</li>
      </ul>

      <h2>Imagen de ejemplo</h2>
      <img
        src="https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=800&q=60"
        alt="Ejemplo Next.js"
        style={{ width: "100%", borderRadius: 6 }}
      />
    </main>
  );
}
