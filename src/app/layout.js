import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../app/globals.css";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Mi App Web | Desarrollo Avanzado de Aplicaciones",
    template: "%s | Mi App Web",
  },
  description:
    "Aplicación web avanzada desarrollada con Next.js, mostrando buenas prácticas y técnicas modernas de desarrollo",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://mi-app-web.com/",
    siteName: "Mi App Web",
    images: [
      {
        url: "https://mi-app-web.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mi App Web - Desarrollo Avanzado",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi App Web | Desarrollo Avanzado",
    description: "Aplicación web avanzada desarrollada con Next.js",
    images: ["https://mi-app-web.com/twitter-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta
          name="google-site-verification"
          content="E77NISMyo2crLFHvjrybp4mdxb5faLAUBD4lLwzLPPw"
        />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
