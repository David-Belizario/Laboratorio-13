export default function robots() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/*"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
