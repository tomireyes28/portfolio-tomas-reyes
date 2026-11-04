# Etapa 5 — Cuerpo, iluminación y movimiento del libro

## Volumen y materiales

- Tapa con canto inferior continuo y sombra de contacto, diferenciada de la sombra amplia sobre la mesa.
- Bloques de papel visibles en los bordes exteriores e inferiores. Al avanzar por los seis capítulos, el espesor izquierdo pasa de 3 a 10 px y el derecho de 10 a 3 px, sin cambiar el ancho del contenido.
- El centro ornamental de cuero y metal se reemplaza por un pliegue de 22 px, una costura fina, cabezadas textiles y una cinta discreta.
- Luz cálida desde arriba a la izquierda: papel más uniforme, sombras concentradas en el pliegue y relieve de tapa más contenido. Las páginas permanecen frontales para leer.
- Se retiran pulsos y barridos perpetuos de la portada. Los pliegues de esquina crecen de 18 a 36 px al pasar el cursor o enfocar con teclado.

## Movimiento e interacción

- Un único componente de hoja de dos caras sirve para avanzar y retroceder.
- El eje permanece en la encuadernación: se eliminan la elevación global de 92 px, el sesgo y las rotaciones adicionales. La contracción horizontal máxima baja del 16 % al 2,2 %.
- Luz móvil sobre la hoja y sombra sobre la página receptora dependen del mismo progreso del giro. Las caras se ocultan por el dorso y sus efectos quedan recortados a la superficie del papel.
- Giro automático de 720 ms con aceleración y frenado suaves. Al soltar un arrastre, el asentamiento dura entre 180 y 460 ms según la distancia restante.
- Cada borde solo inicia su dirección. Se ignoran gestos predominantemente verticales; no se ofrece arrastre en los límites ni con movimiento reducido.
- Un gesto corto vuelve al origen; un avance suficiente o un impulso deliberado completa el giro. Un impulso rápido en sentido contrario cancela. La cancelación del puntero también devuelve la hoja.
- Se mantienen el reductor de navegación, el bloqueo de solicitudes durante un giro, `inert`, la gestión de foco y la cancelación al cambiar de composición.
- Identificadores SVG únicos para las esquinas, incluso mientras conviven copias estáticas y animadas.

La flexión es una aproximación visual con DOM/CSS. No se incorpora una malla 3D ni se afirma simular una curvatura física continua; se priorizan lectura, estabilidad y mantenimiento sin agregar dependencias.

## Verificación

- `npm run build`: correcto, incluido TypeScript.
- `npm run test:navigation`: 8 pruebas aprobadas.
- `npm run test:motion`: 4 pruebas nuevas aprobadas sobre dirección, límites, proporcionalidad, cancelación, impulso y duración de asentamiento.
- ESLint: 0 errores y 44 advertencias, sin aumento respecto de la etapa 4.
- Arrastre real hacia adelante y atrás, gesto corto cancelado, esquinas, flechas del teclado, portada y cierre durante un giro verificados en navegador.
- Cambio a tablet durante un giro: se cancela y no quedan hojas animadas ni estado ocupado.
- Movimiento reducido verificado forzando temporalmente el resultado de la preferencia en los tres componentes del libro: navegación sin hoja 3D y apertura/cierre sin transformación animada. Se restauraron los hooks antes del build final; no se modificó la preferencia del sistema operativo. Las reglas CSS conservan `prefers-reduced-motion`.
- Composición revisada en 1100×680, 1280×720, 1366×768, 1280×600, 768×1024, 390×844 y 320×640, sin desborde horizontal. Los nuevos cantos quedan dentro del margen de escritorio.
- Extremos del libro comprobados: 3/10 px al comienzo y 10/3 px al final.
- Build final de producción revisado en inglés a 1280×720: ambas páginas de proyectos entran completas, ficha abre/cierra con Escape y restaura el foco; sin errores en consola ni IDs duplicados en la vista asentada.
- `git diff --check`: correcto. No se agregan dependencias ni se envían formularios.

## Próxima etapa

Etapa 6: rendimiento, limpieza final y metadatos según la auditoría.
