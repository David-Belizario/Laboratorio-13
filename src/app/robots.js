// Este archivo genera dinámicamente el robots.txt
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/*"], // Denegar acceso a rutas privadas pero permitir /api/sitemap
    },
    sitemap: "http://localhost:3000/sitemap.xml", // Sitemap generado por Next.js
    // También puedes acceder al sitemap alternativo en formato XML:
    // http://localhost:3000/api/sitemap
  };
}
