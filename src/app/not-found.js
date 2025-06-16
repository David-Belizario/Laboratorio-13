import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ textAlign: "center" }}>
      <h1>404</h1>
      <p>Lo sentimos, no encontramos esa página.qwe</p>
      <a href="/" style={{ color: "#0070f3" }}>
        Volver al inicio
      </a>
    </main>
  );
}
