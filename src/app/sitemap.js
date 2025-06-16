import { getAllRoutesWithExternalData } from "@/lib/api";

// Esta función generará automáticamente el sitemap
export default async function sitemap() {
  const baseUrl = "http://localhost:3000"; // URL local para desarrollo

  // Obtener todas las rutas desde nuestra API (incluye datos externos)
  const routes = await getAllRoutesWithExternalData();

  // Mapear las rutas al formato esperado por Next.js para sitemaps
  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
