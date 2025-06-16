import { getAllRoutesWithExternalData } from "@/lib/api";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Obtener todas las rutas (incluye datos de API externa)
    const routes = await getAllRoutesWithExternalData();
    const baseUrl = "http://localhost:3000"; // Para desarrollo local

    // Crear el XML del sitemap
    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

    // Añadir cada URL al sitemap
    routes.forEach((route) => {
      xml += `
  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${route.lastModified.toISOString()}</lastmod>
    <changefreq>${route.changeFrequency}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
    });

    // Cerrar el sitemap
    xml += `
</urlset>`;

    // Devolver el XML como respuesta
    return new NextResponse(xml, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  } catch (error) {
    console.error("Error generando el sitemap XML:", error);
    return new NextResponse("Error generando el sitemap", { status: 500 });
  }
}
