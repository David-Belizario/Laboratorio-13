export async function generateMetadata({ params }) {
  const { id } = params;

  // En un caso real, aquí podrías obtener datos del blog desde una API o base de datos
  // para generar metadatos dinámicos basados en el contenido real

  return {
    title: `Blog #${id} - Desarrollo Web Avanzado`,
    description: `Artículo de blog #${id} sobre técnicas avanzadas de desarrollo web con Next.js y React`,
    openGraph: {
      title: `Blog #${id} | Mi App Web - Desarrollo Avanzado`,
      description: `Artículo de blog #${id} sobre técnicas avanzadas de desarrollo web con Next.js y React`,
      images: [
        {
          url: `https://mi-app-web.com/blog-${id}-og.jpg`,
          width: 1200,
          height: 630,
          alt: `Imagen de artículo de blog #${id}`,
        },
      ],
      type: "article",
      publishedTime: new Date().toISOString(),
      authors: ["Mi App Web Team"],
    },
  };
}

export default function BlogLayout({ children }) {
  return <>{children}</>;
}
