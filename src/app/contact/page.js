"use client";
import { useState } from "react";

// Los metadatos deben estar en un archivo separado o en un layout.js para páginas con "use client"
// Creamos un archivo layout.js para la página de contacto

export default function ContactPage() {
  return (
    <main>
      <h1>Contacto</h1>
      <p>¿Tienes dudas o sugerencias? ¡Escríbenos!</p>

      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Tu nombre" required />
        <input type="email" placeholder="Tu correo" required />
        <textarea rows={4} placeholder="Tu mensaje"></textarea>
        <button type="submit">Enviar mensaje</button>
      </form>

      <h2>Visítanos</h2>
      <p>Narnia 45, Ciudad Strathome.</p>
    </main>
  );
}
