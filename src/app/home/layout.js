export const metadata = {
  title: "Inicio - Desarrollo de Aplicaciones Web Avanzadas",
  description:
    "Bienvenido a nuestra aplicación web de ejemplo con Next.js App Router, donde mostramos las mejores prácticas de desarrollo web avanzado",
  openGraph: {
    title: "Inicio | Mi App Web - Desarrollo Avanzado",
    description:
      "Bienvenido a nuestra aplicación web con las mejores prácticas de desarrollo",
    images: [
      {
        url: "https://mi-app-web.com/home-og.jpg",
        width: 1200,
        height: 630,
        alt: "Página principal de Mi App Web",
      },
    ],
  },
};

export default function HomeLayout({ children }) {
  return <>{children}</>;
}
