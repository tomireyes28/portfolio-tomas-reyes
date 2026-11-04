# Etapa 3 — Composición responsive y solapas

Fecha: 4 de noviembre de 2026.

## Cambios

- El libro requiere al menos 1100 px de ancho, 680 px de alto y una proporción mínima de 4:3. El resto de las ventanas usa la lectura continua, incluyendo tablet vertical y escritorios con poca altura.
- La misma condición se usa para las flechas del teclado y la cancelación de giros al cambiar de composición. Se retiró el bloqueo global del scroll que afectaba ventanas medianas.
- Las cinco solapas ahora tienen 48 px de alto, etiquetas en serif, numeración secundaria y un único acento bordó. Los capítulos son Perfil, Proyectos, Tecnologías, Trayectoria y Contacto.
- Portada y el selector ES/EN se ubican en una barra superior. El idioma no se repite dentro de la portada cerrada. El nombre funciona como encabezado principal visible.
- Se reservó espacio para el índice y se ajustó el centrado de la portada al cerrar el libro.
- Proyectos tiene un indicador de selección 1/2 o 2/2 y acceso explícito a la siguiente/anterior selección. Las tarjetas se distribuyen en dos filas que adaptan sus imágenes al alto disponible; los enlaces permanecen visibles.
- Las hojas mantienen encabezado y pie fuera del área de lectura desplazable. La foto del perfil reduce su ancho en hojas de menor altura. Los textos largos de perfil y trayectoria siguen pudiendo desplazarse sin quedar detrás del pie.
- Los logos usan columnas con ancho mínimo cero e íconos de tamaño adaptable. En tablet vertical se muestran las categorías de la versión continua, evitando la doble página estrecha.
- El menú continuo muestra los cinco destinos sin scroll horizontal. Los filtros de proyectos se distribuyen en varias filas y las tarjetas usan dos columnas cuando hay al menos 700 px de ancho.
- Las anclas usan el alto medido de la cabecera con `ResizeObserver` y un margen adicional de 16 px. El seguimiento del capítulo activo se actualiza al hacer scroll y al cambiar el tamaño de la ventana.
- Se corrigió el desborde de la fila de idiomas y el ajuste de etiquetas en 320 px. El contador de proyectos no se divide en varias líneas.
- Si una ficha se abre en escritorio y se cierra después de pasar a móvil, el foco vuelve al botón visible del mismo proyecto. Si no existe en la selección actual, se usa el capítulo visible como alternativa.

## Verificación de tamaños

| Vista | Composición comprobada |
| --- | --- |
| 1100 × 680 | Libro |
| 1280 × 720 | Libro |
| 1366 × 768 | Libro |
| 1280 × 600 | Lectura continua |
| 1024 × 768 | Lectura continua |
| 768 × 1024 | Lectura continua |
| 390 × 844 | Lectura continua |
| 320 × 640 | Lectura continua |

No se detectó desborde horizontal en los ocho tamaños. Las etiquetas de los cinco destinos caben en los menús comprobados. En los tres tamaños con libro, las solapas quedan dentro del viewport y las páginas de la selección de proyectos no requieren scroll interno.

En 1280 × 720, las dos áreas de proyectos midieron 498 px tanto de contenido como de alto visible. Los ocho enlaces de Demo/Código quedaron dentro de las hojas. En 1100 × 680, las cuatro cuadrículas de logos midieron 342 px de ancho sin desborde.

Se comprobó la navegación entre las dos selecciones, cambio ES/EN, cierre y apertura de portada, centrado de portada, anclas de tablet y móvil, filtros visibles y teclado en la composición continua de una ventana baja. Una medición de ancla en tablet dejó la sección a 132 px del borde superior con una cabecera de 116 px.

## Comprobaciones técnicas

- `npm run build`: aprobado, incluido TypeScript y generación estática.
- `npm run test:navigation`: las ocho pruebas de la etapa 2 siguen aprobadas.
- ESLint: cero errores y 47 advertencias de optimización/limpieza existentes.
- `git diff --check`: aprobado.
- Prueba adicional sobre el build de producción: abrir ficha desde escritorio, cambiar a 390 × 844, cerrar con Escape y devolver el foco al botón móvil del mismo proyecto. Consola sin errores ni advertencias en ese recorrido.

## Alcance

Se conserva el contenido profesional existente. La reescritura de textos, títulos breves, encuadre de capturas y ampliación de casos corresponde a la etapa 4. El nuevo volumen, encuadernación e iluminación del libro corresponde a la etapa 5.

La verificación responsive se hizo con tamaños de viewport del navegador, no con dispositivos físicos. No se enviaron formularios, no se validaron demos externas ni se realizó una auditoría WCAG completa.
