# Validación del Sitemap en Google Search Console

Este documento proporciona instrucciones para validar el sitemap dinámico generado por esta aplicación en Google Search Console.

## Pruebas en entorno local

Antes de validar el sitemap en Google Search Console, puedes probar su funcionamiento en entorno local:

1. **Iniciar el servidor de desarrollo**

   ```bash
   npm run dev
   ```

2. **Acceder a las URLs de prueba**

   - Sitemap: `http://localhost:3000/sitemap.xml`
   - Robots: `http://localhost:3000/robots.txt`

3. **Verificar el formato y contenido**
   - El sitemap debe ser un archivo XML válido
   - Debe contener todas las rutas esperadas (estáticas y dinámicas)
   - Las URLs deben comenzar con `http://localhost:3000`

## Pasos para validar el sitemap en producción

Una vez desplegada la aplicación:

1. **Actualizar las URLs para producción**

   - Modifica los archivos `robots.js` y `sitemap.js` para usar tu dominio real
   - Reemplaza `http://localhost:3000` con `https://tu-dominio.com`

2. **Desplegar la aplicación a producción**

   - Asegúrate de que tu aplicación está desplegada en un dominio público
   - Verifica que el sitemap sea accesible en `https://tu-dominio.com/sitemap.xml`

3. **Acceder a Google Search Console**

   - Visita [Google Search Console](https://search.google.com/search-console)
   - Inicia sesión con tu cuenta de Google

4. **Añadir y verificar tu propiedad (si aún no lo has hecho)**

   - Haz clic en "Añadir propiedad"
   - Introduce la URL de tu sitio web (por ejemplo, `https://mi-app-web.com`)
   - Sigue las instrucciones para verificar la propiedad del sitio

5. **Enviar el sitemap**

   - En el menú lateral izquierdo, haz clic en "Sitemaps"
   - En el campo "Añadir un nuevo sitemap", introduce `sitemap.xml`
   - Haz clic en "Enviar"

6. **Monitorizar el estado de indexación**
   - Google procesará tu sitemap (puede tomar desde horas hasta días)
   - Podrás ver estadísticas sobre:
     - Número de URLs enviadas
     - Número de URLs indexadas
     - Errores de indexación (si los hay)

## Solución de problemas comunes

- **Errores de formato**: Asegúrate de que tu sitemap siga el formato XML estándar
- **URLs no indexadas**: Verifica que las URLs no estén bloqueadas en robots.txt
- **Sitemap no actualizado**: El sitemap debe actualizarse regularmente con contenido nuevo

## Automatización

Para sitios grandes o con contenido que cambia frecuentemente, considera:

1. Configurar notificaciones automáticas a Google cuando el sitemap cambia
2. Implementar una API webhook que notifique a Google Search Console
3. Establecer una tarea programada para actualizar el sitemap periódicamente

## Recursos adicionales

- [Documentación oficial de Google sobre sitemaps](https://developers.google.com/search/docs/advanced/sitemaps/overview)
- [Herramientas para webmasters de Google](https://www.google.com/webmasters/)
- [Validador de sitemaps de Google](https://www.google.com/webmasters/tools/sitemap-validator)
