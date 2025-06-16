# Implementación de API Externa para el Sitemap

Este documento explica cómo se ha implementado la integración con una API externa (JSONPlaceholder) para generar parte del contenido del sitemap.

## Cómo funciona

1. **Obtención de datos externos**
   - Utilizamos JSONPlaceholder como API de prueba: `https://jsonplaceholder.typicode.com/posts`
   - La función `getExternalPosts()` en `src/lib/api.js` hace una solicitud a esta API
   - Transformamos los datos recibidos al formato requerido para el sitemap

2. **Combinación con datos locales**
   - La función `getAllRoutesWithExternalData()` combina:
     - Rutas estáticas de la aplicación (/, /about, /contact)
     - Rutas dinámicas basadas en posts locales (/blog/101, /blog/102, etc.)
     - Rutas dinámicas basadas en posts de la API externa (/blog/external-post/1, etc.)

3. **Generación del sitemap**
   - El archivo `src/app/sitemap.js` utiliza estos datos combinados para generar el sitemap
   - También se proporciona una versión alternativa en formato XML en `src/app/api/sitemap/route.js`

## Cómo probar

1. **Versión automática de Next.js**
   - Accede a: `http://localhost:3000/sitemap.xml`
   - Este sitemap es generado automáticamente por Next.js

2. **Versión alternativa en XML**
   - Accede a: `http://localhost:3000/api/sitemap`
   - Este sitemap es generado manualmente en formato XML

3. **Verificación de robots.txt**
   - Accede a: `http://localhost:3000/robots.txt`
   - Comprueba que incluye referencia al sitemap

## Posibles problemas y soluciones

1. **Error al obtener datos externos**
   - Si JSONPlaceholder no está disponible, la aplicación seguirá funcionando
   - Se implementa manejo de errores para devolver un array vacío en caso de fallo
   - El sitemap incluirá solo los datos locales en este caso

2. **Limitación de solicitudes**
   - JSONPlaceholder tiene límites de solicitudes
   - Para un sitio real, implementar caché sería recomendable

3. **Formato de fechas**
   - JSONPlaceholder no proporciona fechas reales para los posts
   - Utilizamos la fecha actual como lastModified para estos posts

## Escalabilidad

Para una implementación en producción, considera:

1. Implementar caché para reducir solicitudes a la API externa
2. Utilizar ISR (Incremental Static Regeneration) para regenerar el sitemap periódicamente
3. Configurar variables de entorno para las URLs según el entorno (desarrollo/producción)
