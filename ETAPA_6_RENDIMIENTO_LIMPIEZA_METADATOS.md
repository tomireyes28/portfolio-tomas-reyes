# Etapa 6 — Rendimiento, limpieza y metadatos

## Carga y rendimiento

- Las ocho capturas activas pasan de 3.891.708 a 430.776 bytes en sus versiones WebP: reducción del 89 %. Se preservan los originales para regenerarlas con `npm run images:optimize`.
- `next/image` sirve tamaños responsive para tarjetas, fichas, foto y logo; las tarjetas conservan carga diferida. La foto inicial tiene prioridad. Se incluyen dimensiones intrínsecas para las capturas completas.
- `PortfolioViewport` monta una sola composición. El libro se importa por separado cuando cabe en pantalla; la lectura continua queda prerenderizada para buscadores. Se ofrece contenido continuo también sin JavaScript.
- Se cancela cualquier giro al abandonar la composición de libro. La ficha global conserva su foco y estado al cambiar de vista.
- EmailJS se importa al enviar, en lugar de incluirse como import estático de ambas vistas.
- Se mantienen las cuatro familias tipográficas porque tienen usos distintos: lectura, firmas, metadatos y controles. `font-sans` queda vinculado a Inter. Se observaron cinco precargas de fuentes, incluyendo los dos pesos de Courier Prime.

La reducción de peso indicada compara archivos de imagen. No es una medición de tráfico total, Lighthouse ni Core Web Vitals en dispositivos reales.

## Limpieza y mantenimiento

- Se retiran 16 archivos sin referencias del recorrido actual: secciones, Navbar/Footer antiguos, modal y tarjetas anteriores, el motor de giro anterior y auxiliares de esa versión.
- Se elimina SweetAlert2 y su entrada en el lockfile, así como estilos de esquinas, cantos y efectos perpetuos que quedaron sin uso. Se retira la autorización de imágenes remotas de banderas, ya innecesaria.
- Se eliminan dos copias idénticas de los iconos en `public`; las rutas e iconos se conservan mediante los archivos de `app`.
- Formulario y lógica compartidos para escritorio/móvil. El proveedor mantiene borrador y estado al cambiar de composición y bloquea envíos simultáneos.
- Correo visible con copia que informa éxito o error. El idioma elegido se conserva localmente y actualiza `html.lang`; no se persiste el borrador del formulario en almacenamiento local.
- Los 21 nombres de tecnologías quedan siempre visibles. Los dibujos alternativos de marcas se reemplazan por etiquetas de texto; las fichas usan badges legibles sin tooltips.
- Se retiran APIs de filtros no consumidas y se documentan estructura, comandos, dominio y regeneración de activos en el README.

## Metadatos

- Dominio confirmado por el autor: `https://portfolio-tomas-reyes.vercel.app/`.
- Canonical, URL de Open Graph, autores, robots y sitemap usan el origen centralizado en `lib/site.ts`. `.env.example` documenta la variable opcional para futuras migraciones.
- Tarjeta social de 1200×630 con nombre, especialidad e ilustración del libro, generada como ruta estática mediante `ImageResponse`. Se incluye texto alternativo y Twitter usa formato de imagen grande.
- El HTML inicial conserva presentación y proyectos completos. La página canónica y sus metadatos están en español; ES/EN es una preferencia de lectura, sin anunciar rutas de idiomas inexistentes.
- El sitemap incluye la página real; no inventa rutas para capítulos ni casos que siguen siendo estados de la interfaz.

## Verificación

- Build de producción y TypeScript correctos; `/`, tarjeta social, robots y sitemap se generan como rutas estáticas.
- ESLint: **0 errores y 0 advertencias**, frente a 44 advertencias al cerrar la etapa 5.
- 16 pruebas aprobadas: 8 de navegación, 4 de movimiento y 4 nuevas de canonical/Open Graph, robots/sitemap, dimensiones PNG y contenido prerenderizado.
- Matriz 320×640, 390×844, 768×1024, 1280×600, 1100×680, 1280×720 y 1366×768: una sola vista montada, sin desbordes horizontales ni imágenes rotas observadas.
- Capturas verificadas a través de URLs `/_next/image` con variantes de 384 px en tarjetas; la ficha muestra la captura completa.
- Idioma inglés conservado tras recargar. Borrador de prueba conservado al cambiar de escritorio a móvil y luego limpiado.
- Copia de correo confirmada en la interfaz. Campos obligatorios bloquean el envío vacío y enfocan el nombre. No se enviaron mensajes reales ni se comprobó entrega de correo.
- Tecnologías completas a 1100×680; ambas páginas tienen 458 px de contenido para 458 px disponibles.
- Ficha abierta en escritorio y cerrada después de pasar a móvil: foco restaurado a «Ver caso». Giro interrumpido por cambio de composición: sin estado ocupado ni hoja residual.
- Consola revisada sin errores ni advertencias de la aplicación.
- `npm audit --omit=dev`: **0 vulnerabilidades**. La auditoría completa conserva las 16 alertas moderadas de la cadena de herramientas de desarrollo de ESLint, sin altas ni críticas. No se fuerza una sustitución incompatible de esa cadena.
- `git diff --check`: correcto.

## Alcance del cierre

Se completan las seis etapas acordadas en el repositorio. Las mediciones de campo en dispositivos físicos, resultados comerciales y participación individual de cada caso requieren evidencia adicional del autor. Las URLs propias para idiomas, capítulos o casos serían una ampliación posterior; no son rutas nuevas de esta etapa.
