# Etapa 2 — Navegación y accesibilidad

Fecha: 4 de noviembre de 2026.

## Cambios

- Solapas, esquinas, flechas y arrastre usan el mismo estado de navegación. La sección cambia al finalizar el giro, incluido el salto a capítulos no contiguos.
- Mientras hay una transición se ignoran solicitudes adicionales. Cada giro tiene un identificador: cerrar el libro lo invalida y una finalización atrasada no puede cambiar la sección. Las animaciones se detienen al cancelar o desmontar; pasar a móvil cancela un giro activo.
- Las esquinas son botones nativos con nombres traducidos y área de interacción de 44 px. La portada tiene un botón de apertura y recibe foco al cerrar el libro. Las zonas de arrastre se limitaron al borde de 20 px para reducir interferencias con el contenido.
- Las flechas respetan inputs, textarea, select, contenido editable, modificadores y teclas repetidas. El libro no intercepta las flechas en móvil ni con una ficha abierta.
- Las hojas ocultas, el menú cerrado y las copias animadas no reciben foco. Se anuncia la sección al cambiar y las solapas exponen el estado actual con `aria-current`.
- La imagen de cada tarjeta de escritorio tiene una acción nativa «Ver proyecto», con Enter y Espacio. Demo y Código son enlaces independientes. Los encabezados de proyectos se conservan.
- La ficha usa `dialog.showModal()`, nombre accesible, foco inicial en Cerrar, ciclo de Tab/Shift+Tab, Escape, bloqueo del fondo y retorno al disparador al cerrar. La misma ficha funciona desde móvil.
- Los formularios de escritorio y móvil tienen etiquetas asociadas, identificadores distintos, autocompletado, estado ocupado y anuncios de envío, éxito y error mediante un componente compartido.
- Se añadió un indicador de foco visible y se actualiza `html.lang` al cambiar de idioma. Los nombres de esquinas, navegación y acciones principales de proyectos siguen el idioma.
- Se respeta movimiento reducido en el giro, portada, ficha, transformaciones de Framer Motion, efectos CSS, esquina y desplazamiento móvil.
- Se corrigieron los dos errores de hooks de la portada señalados en la etapa 1 y un literal JSX de una sección anterior que impedía aprobar lint. Next.js generó `AGENTS.md` con la referencia a su documentación instalada.

## Verificación

- `npm run test:navigation`: ocho pruebas aprobadas sobre el reducer real. Cubren saltos de capítulo, solicitudes rápidas, cierre y reapertura con finalizaciones atrasadas, arrastre cancelado/completado, cancelación de una solicitud antes del render y límites del libro.
- Build de producción y TypeScript correctos.
- ESLint: cero errores; quedan 47 advertencias de imágenes sin optimización e imports/variables existentes, previstas para las siguientes etapas.
- `git diff --check`: correcto.
- Navegador de escritorio: salto de Sobre mí a Contacto con giro; edición de un campo sin interceptar flechas; esquina con Enter; flechas en el libro; cierre durante un giro; reapertura con Enter; arrastre físico hacia Proyectos.
- Ficha: apertura con Enter y Espacio, foco inicial en Cerrar, vuelta entre primer y último control con Tab/Shift+Tab, cierre con Escape y foco devuelto a la tarjeta.
- Idioma inglés: `html.lang=en`, acciones y esquinas traducidas, capítulo activo identificado.
- Vista móvil de 390 × 844: apertura y cierre de la misma ficha por teclado, retorno a su disparador, etiquetas del formulario y flechas de edición sin activar el libro oculto.
- No se capturaron errores ni advertencias en consola durante el recorrido de navegador.

## Alcance pendiente

Los recortes del menú, la composición en tablet, tamaños de texto y tarjetas son trabajo de la etapa 3. El nuevo volumen e iluminación del libro y el refinamiento visual de la física corresponden a la etapa 5.

No se enviaron mensajes de prueba ni se validó entrega de EmailJS. No se realizó una auditoría WCAG completa ni una prueba con lector de pantalla o dispositivo físico. El soporte de movimiento reducido se implementó en los componentes y estilos; no se cambió la preferencia del sistema del usuario para forzarla durante la prueba visual.
