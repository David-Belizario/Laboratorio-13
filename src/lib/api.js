// Función de API para obtener datos que alimentarán el sitemap
// En un entorno de producción, esta función se conectaría a tu base de datos o CMS

export async function getAllPosts() {
  // Simulamos la obtención de datos de un blog desde una fuente externa
  // En un caso real, esto podría ser una consulta a una base de datos o una llamada a API
  return [
    {
      id: "101",
      title: "Introducción a Next.js",
      slug: "101",
      createdAt: new Date("2024-06-01"),
      updatedAt: new Date("2024-06-10"),
    },
    {
      id: "102",
      title: "Metadatos en App Router",
      slug: "102",
      createdAt: new Date("2024-06-05"),
      updatedAt: new Date("2024-06-12"),
    },
    {
      id: "103",
      title: "Optimización SEO en Next.js",
      slug: "103",
      createdAt: new Date("2024-06-08"),
      updatedAt: new Date("2024-06-15"),
    },
    {
      id: "104",
      title: "Implementación de Sitemaps",
      slug: "104",
      createdAt: new Date("2024-06-12"),
      updatedAt: new Date("2024-06-16"),
    },
  ];
}

// Nueva función que utiliza una API real (JSONPlaceholder)
export async function getExternalPosts() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=10"
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const posts = await response.json();

    // Transformar los posts en formato adecuado para el sitemap
    return posts.map((post) => ({
      slug: `external-post/${post.id}`,
      title: post.title,
      updatedAt: new Date(), // JSONPlaceholder no proporciona fechas reales
    }));
  } catch (error) {
    console.error("Error fetching data from JSONPlaceholder:", error);
    return []; // Devolver array vacío en caso de error
  }
}

// Esta función obtendría todas las rutas dinámicas del sitio
export async function getAllRoutes() {
  const posts = await getAllPosts();

  // Rutas estáticas de la aplicación
  const staticRoutes = [
    {
      url: "/",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: "/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "/contact",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Rutas dinámicas basadas en posts del blog
  const dynamicRoutes = posts.map((post) => ({
    url: `/blog/${post.slug}`,
    lastModified: post.updatedAt || post.createdAt,
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}

// Esta función combina datos locales y de API externa
export async function getAllRoutesWithExternalData() {
  // Obtener rutas regulares
  const regularRoutes = await getAllRoutes();

  // Obtener posts de la API externa
  const externalPosts = await getExternalPosts();

  // Transformar posts externos al formato de rutas
  const externalRoutes = externalPosts.map((post) => ({
    url: `/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  // Combinar todas las rutas
  return [...regularRoutes, ...externalRoutes];
}
