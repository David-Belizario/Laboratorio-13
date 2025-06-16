export const metadata = {
  title: "Contacto - Estamos para ayudarte",
  description:
    "Ponte en contacto con nuestro equipo de desarrollo web. Respondemos rápidamente a tus consultas y solicitudes sobre nuestros servicios",
  openGraph: {
    title: "Contacto | Mi App Web - Estamos para ayudarte",
    description:
      "Ponte en contacto con nuestro equipo de desarrollo web. Respondemos rápidamente a tus consultas",
    images: [
      {
        url: "https://mi-app-web.com/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Página de contacto de Mi App Web",
      },
    ],
  },
};

export default function ContactLayout({ children }) {
  return <>{children}</>;
}
