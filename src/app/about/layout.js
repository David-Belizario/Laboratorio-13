export const metadata = {
  title: "Acerca de Nosotros - Equipo de Desarrollo Web",
  description:
    "Conoce a nuestro equipo dedicado a la enseñanza y desarrollo de aplicaciones web avanzadas con Next.js y tecnologías modernas",
  openGraph: {
    title: "Acerca de Nosotros | Mi App Web - Equipo de Desarrollo",
    description:
      "Conoce a nuestro equipo dedicado a la enseñanza y desarrollo de aplicaciones web avanzadas",
    images: [
      {
        url: "https://mi-app-web.com/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Nuestro equipo de desarrollo web",
      },
    ],
  },
};

export default function AboutLayout({ children }) {
  return <>{children}</>;
}
