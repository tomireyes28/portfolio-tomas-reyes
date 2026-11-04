# Etapa 4 — Textos y presentación de proyectos

## Cambios

- Apertura más breve: especialidad, trabajo en Habitium y experiencia en comunicación. Accesos directos a proyectos, contacto y CV. Se elimina información repetida del perfil.
- Principios de trabajo con títulos cortos y ejemplos concretos, sin afirmaciones nuevas sobre ahorros o resultados comerciales.
- Ocho proyectos con nombre corto, subtítulo y descripción breve. Las fichas separan contexto, implementación y decisión técnica. El stack completo queda en la ficha.
- Tarjetas compartidas entre el libro y la vista continua: tipografía de lectura para los títulos, numeración secundaria y acción explícita «Ver caso». Se elimina la insignia «Destacado» que tenían todos los proyectos.
- Encuadres de miniaturas ajustados con CSS; capturas originales completas en las fichas. El diagrama de MN Sync se muestra completo también en la tarjeta.
- Ficha editorial sin rodillos ni deformación de escala vertical: cabecera y acciones permanecen visibles mientras se desplaza el contenido. Se conservan diálogo nativo, Escape, ciclo de Tab y restauración del foco.
- Español e inglés para los nuevos textos, tarjetas y fichas. Se corrige el texto inglés que presentaba la formación en programación como finalizada.
- MN Sync muestra únicamente el repositorio: se retira su enlace duplicado etiquetado como demo.
- Contacto deja de prometer respuesta en el día y distingue envío exitoso de entrega confirmada en la casilla.

## Criterio de contenido

Se utiliza el alcance descrito previamente en el portfolio. No se agregan métricas, clientes, resultados ni atribuciones de autoría individual. Las descripciones técnicas no constituyen una nueva auditoría de los repositorios externos o sus despliegues. La selección y el orden de los ocho proyectos se mantienen.

## Verificación

- `npm run build`: correcto, incluida la comprobación de TypeScript.
- `npm run test:navigation`: 8 pruebas correctas.
- ESLint: 0 errores y 44 advertencias (47 al cerrar la etapa 3).
- Comprobación de datos: ocho IDs únicos, subtítulos/descripciones y tres bloques de ficha completos en ambos idiomas; archivos de imagen presentes y enlaces de demo distintos del repositorio.
- Revisión de UTF-8 y `git diff --check`: correctos.
- Build de producción revisado en 320×640, 390×844, 768×1024, 1100×680, 1280×720 y 1366×768, sin desborde horizontal.
- Ambas selecciones del libro entran sin desborde de sus tarjetas a 1100×680. La presentación conserva desplazamiento interno cuando su contenido supera la altura disponible.
- Apertura/cierre de los ocho casos revisados entre escritorio y móvil, con bloques completos. Revisión en español e inglés; cabecera y enlaces de la ficha visibles en 320×640.
- Tab y Shift+Tab quedan dentro del diálogo; Escape cierra y devuelve el foco a «Ver caso». Filtro de automatizaciones muestra MN Sync sin demo duplicada.
- Consola del navegador sin errores durante la revisión. No se enviaron formularios ni se accedió a cuentas de las demos.

## Próxima etapa

La etapa 5 aborda cuerpo del libro, iluminación, profundidad y refinamiento de los movimientos de las hojas.
