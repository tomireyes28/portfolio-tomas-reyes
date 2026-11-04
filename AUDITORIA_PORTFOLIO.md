# Auditoría del portfolio de Tomás Reyes

Revisión: 30 de octubre de 2026. Alcance: versión local del repositorio, sin modificar la aplicación ni publicar cambios.

Se recorrieron portada, presentación, las dos dobles páginas de proyectos, tecnologías, trayectoria, contacto y ficha de proyecto. Se probaron navegación por solapas, cambio con teclado, giro desde la esquina, apertura/cierre, cambio de idioma, menú móvil y filtro de proyectos. Vistas: 1280 × 720, 1366 × 768, 768 × 1024 y 390 × 844.

No se envió el formulario, no se inició sesión en las demos externas y no se verificaron las métricas o afirmaciones profesionales de los proyectos. No se midieron Core Web Vitals, FPS, Safari, Firefox ni un teléfono físico. Las conclusiones de rendimiento que siguen son oportunidades identificadas en código y archivos, no resultados de Lighthouse.

## Diagnóstico

La idea del libro merece conservarse. La paleta cálida, la foto como recuerdo pegado, la numeración y la composición a dos páginas ya construyen una identidad reconocible. El problema principal es la jerarquía: muchos detalles decorativos tienen protagonismo mientras los textos, los nombres de proyectos y las acciones quedan pequeños.

La sensación de poco cuerpo tiene una explicación concreta. El libro abierto queda frontal, los cantos son franjas laterales fijas y la hoja animada es una superficie rectangular a la que se aplican rotación, escala y sesgo. Hay perspectiva y sombras, pero no una curvatura geométrica del papel. Agregar más sombras oscuras o más brillo, por sí solo, no resolvería esa sensación.

La dirección propuesta es un cuaderno editorial contemporáneo: tapa con espesor visible, hojas marfil, tinta oscura, un acento bordó y detalles de latón limitados. El objeto debe sentirse cuidado y la información debe poder leerse de un vistazo.

## Errores y fricciones comprobados

| Prioridad | Hallazgo | Evidencia y consecuencia | Cambio propuesto |
| --- | --- | --- | --- |
| Alta | Menú lateral recortado | En 1280 × 720 se recortan Portada y parte del idioma. Una medición del menú dio 781 px de alto, con su borde superior en −61,5 px. | Reducir las solapas, sacar idioma y Portada de esa columna y adaptar la composición también a la altura disponible. |
| Alta | Tecnologías superpuestas en tablet | En 768 × 1024, las cuatro columnas quedan más angostas que los logos de 80 px y se pisan entre sí. | Activar la doble página según espacio útil; usar una columna editorial en tablet vertical o reducir columnas e íconos. |
| Alta | Navegación con animación inconsistente | Las esquinas usan `triggerTurn`; las solapas y flechas cambian `activeSection` directamente. El giro desde la esquina funciona, pero los otros caminos saltan de contenido. | Una única operación de navegación con origen, destino y estado de transición. |
| Alta | Las fichas no se abren con teclado desde la tarjeta de escritorio | La tarjeta es un `motion.div` con `onClick`, sin botón equivalente para abrir detalles. Los enlaces Demo y Código sí son alcanzables. | Añadir una acción explícita «Ver proyecto» accesible y una estructura sin controles interactivos anidados. |
| Alta | Ficha visual sin comportamiento completo de diálogo | Al abrirla, el foco quedó en `body`; no hay `dialog`, `role="dialog"`, `aria-modal`, encierro del foco ni restauración al disparador. Escape sí cierra. | Aplicar el patrón de diálogo, foco inicial, contención del teclado y retorno al cerrar. |
| Media | Desbordamiento dentro de las páginas de proyectos | En una medición, la hoja izquierda tenía 633 px de contenido para 554 px visibles; la derecha, 562 para 554. La segunda tarjeta pierde contenido bajo el pie. | Diseñar la cantidad de contenido por página y mantener acciones visibles; reservar el scroll para el detalle. |
| Media | Títulos de proyectos truncados | `line-clamp-1` corta nombres que contienen producto, descripción y siglas. | Nombre corto visible y subtítulo separado; permitir dos líneas cuando haga falta. |
| Media | Menú y filtros móviles muestran barras de scroll muy presentes | La clase `no-scrollbar` se usa pero no está definida en el CSS del proyecto. En 390 px, la navegación mide 473 px y deja Contacto fuera de la vista inicial. | Resolver la barra y dar una señal clara de continuidad; priorizar acceso fácil a Contacto. |
| Media | Anclas móviles con desplazamiento fijo insuficiente | El desplazamiento usa 90 px; en la vista probada, el encabezado ocupaba unos 102 px. El antetítulo de Proyectos queda debajo. | Usar la altura real del encabezado y margen de anclaje coherente. |
| Media | Traducción incompleta | En inglés sigue apareciendo «Código» en las tarjetas y «Página siguiente/anterior» en las esquinas. `html.lang` continúa en `es`. | Centralizar etiquetas y actualizar el idioma del documento. |
| Media | Campos de contacto sin nombre accesible asociado | Los `label` no usan `htmlFor` y los campos no tienen los `id` correspondientes. El árbol accesible expone campos sin nombre. | Asociar etiquetas, añadir autocompletado y anunciar estados de envío. |
| Media | No hay tratamiento de movimiento reducido | No se encontraron `prefers-reduced-motion`, `useReducedMotion` ni una configuración equivalente. | Ofrecer cambio inmediato o transición breve sin giro, brillo ni pulsos. |
| Media | La portada cerrada conserva controles ocultos en el recorrido del teclado | Se ocultan páginas y menú con opacidad y `pointer-events`, pero siguen existiendo enlaces y botones con `tabIndex=0`. | Usar `inert`, desmontaje o gestión explícita de foco según estado. |
| Baja | Estado activo del menú solo visual | No hay `aria-current` en las solapas. | Comunicar la sección actual semánticamente. |
| Baja | No hay un H1 visible en la vista inicial de escritorio | El único H1 del libro está en la portada, que se desmonta porque el libro empieza abierto. | Mantener nombre y especialidad como encabezado principal en la apertura. |

## Libro: volumen, papel y animación

### Espesor y encuadernación

1. Hacer que la tapa sobresalga de las hojas y que su canto inferior y lateral tenga continuidad. Hoy predominan el contorno y la sombra; faltan superficies que expliquen el espesor.
2. Mostrar pequeños escalones de hojas en el borde inferior y exterior, con tonos cercanos. La clase `.book-edge-bottom` existe pero no se monta en el libro actual.
3. Variar suavemente el bloque izquierdo y derecho al avanzar: el espesor debe desplazarse de un lado al otro.
4. Replantear el centro. El lomo ornamental exterior aparece entre las hojas abiertas y se lee como una barra rígida. Un pliegue más fino, con sombra de contacto y una transición curva hacia cada página, se sentiría más natural.
5. Unificar la luz desde arriba y a un costado. El relieve necesita una dirección consistente para brillos, sombra del papel, tapa y sombra sobre la mesa.
6. Mantener el texto casi frontal. Puede haber una inclinación mínima del objeto, pero el efecto debe seguir permitiendo leer cómodamente.

### Movimiento de página

La animación actual dura 650 ms; al soltar un arrastre, la resolución dura 380 ms. Hay elevación de hasta 92 px, contracción horizontal de hasta 16 %, sesgo y rotaciones adicionales. Todo se aplica a la misma superficie: produce una deformación global, no un papel que se dobla localmente.

Propuesta: anticipación pequeña de la esquina, levantamiento progresivo, pliegue que avanza, sombra móvil sobre la hoja inferior y asentamiento corto al apoyar. La sombra debe depender de la separación entre superficies. Conviene reducir la torsión del texto y probar el resultado antes de sumar complejidad.

Para un acabado editorial alcanza como primera intervención una implementación en DOM/CSS con capas y un giro bien coordinado. Si se busca una hoja que se curve de forma continua durante un arrastre libre, entonces hace falta evaluar geometría segmentada o una malla. Esa decisión merece un prototipo: el realismo adicional debe justificar el peso, la interacción y el mantenimiento.

Antes de refinar la física, unificar el motor. `isTurning` en el contexto nunca se actualiza; la animación guarda otro estado local. Por lectura del código, una navegación externa durante un giro puede competir con el callback de finalización. Ese caso requiere una prueba específica de interacción rápida; no se presenta aquí como fallo reproducido.

Las zonas invisibles para arrastrar ocupan 80 px a cada lado y están por encima del contenido. Conviene limitarlas al borde para que no invadan enlaces, selección de texto o tarjetas, especialmente cuando las hojas son angostas.

## Solapas: propuesta concreta

Conservar cinco capítulos: **Perfil, Proyectos, Tecnologías, Trayectoria y Contacto**. Usar español consistente en la versión ES. «Portada» puede resolverse con un control discreto; hoy compite con los destinos importantes y también existe la cinta para cerrar.

Las solapas actuales tienen número, ícono, círculo, banda de color, título manuscrito, sombra y desplazamiento. Son tarjetas grandes junto al libro. Propongo pestañas de aproximadamente 40–48 px de alto, con una etiqueta legible y un pequeño indicador de color; el capítulo activo sobresale apenas. Si se conserva la numeración, hacerla secundaria. Mover ES / EN a una esquina superior en un selector compacto.

No hace falta que cada capítulo tenga un color diferente. Bordó como acento principal y una base de papel darían mayor unidad. Mantener un margen visible de mesa alrededor del objeto ayudaría a percibir su silueta y profundidad.

En Proyectos, añadir «Selección 1 de 2» y «Siguientes proyectos». Actualmente la segunda doble página existe, pero una solapa devuelve a la primera y la continuidad depende de descubrir la esquina o usar el teclado.

## Textos y jerarquía editorial

El contenido transmite conocimiento técnico, pero usa muchas expresiones amplias: «solidez técnica», «arquitecturas eficientes», «problemas complejos», «robustas y escalables», «ventaja clave». Se repiten ideas entre presentación, trayectoria y filosofía de trabajo. Hay espacio para una voz más personal, concreta y fácil de recordar.

Propuesta de apertura, basada únicamente en lo que ya declara el portfolio:

> Soy Tomás, desarrollador Full Stack especializado en aplicaciones web y automatización de procesos.
>
> En Habitium desarrollo flujos con Make, n8n, APIs y modelos de lenguaje. También construyo aplicaciones con Next.js, NestJS y PostgreSQL.
>
> Vengo de la comunicación y dirigí un medio digital. Esa experiencia me ayuda a entender el problema, hacer buenas preguntas y explicar las decisiones técnicas.

Acciones en la misma apertura: **Ver proyectos**, **Descargar CV** y un acceso secundario a Contacto. El objetivo es que la primera doble página explique quién sos, qué hacés y qué conviene mirar después.

Cambios de edición:

- Subir el cuerpo principal hacia 15–16 px cuando el formato lo permita, con interlineado cómodo. Hoy hay mucho contenido relevante entre 11 y 13,5 px.
- Reservar tamaños de 9–10 px para adornos prescindibles, no datos laborales ni acciones.
- Usar manuscrita para firma y alguna nota, serif para títulos y cuerpo, y monoespaciada con moderación para datos breves.
- Evitar abreviaturas como «Full Stack & Auto.» o «Programación & Period.» en datos principales.
- Cambiar «Enfoque & Stack» en la cabecera de la presentación: esa página contiene una biografía, sin una selección de tecnologías.
- Reemplazar «Filosofía de Trabajo & Criterio» por «Cómo trabajo» y vincular cada principio con un ejemplo concreto ya existente.
- La trayectoria tiene más valor como prueba de experiencia que las afirmaciones generales. Dar prioridad a responsabilidades, entregables y resultados verificables.
- Confirmar que disponibilidad inmediata, fechas y tiempos de respuesta siguen vigentes antes de publicar una versión nueva.

## Proyectos: mejorar la presentación

No hace falta reemplazar los proyectos para mejorar el portfolio. La colección actual mezcla aplicaciones, automatización y trabajo para clientes; eso puede servir para mostrar amplitud. Lo que falta es que cada pieza explique su valor antes de abrir la demo.

Hoy la tarjeta de escritorio muestra captura, título recortado y dos enlaces. La ficha amplía un párrafo técnico y una lista de herramientas, pero no aclara de forma estructurada tu participación, el problema, la decisión principal y el resultado. Los ocho proyectos están marcados como destacados, por lo que el sello deja de ayudar a elegir.

Propuesta de tarjeta:

| Elemento | Ejemplo |
| --- | --- |
| Nombre breve | Plastic Who? |
| Qué resuelve | Auditoría de composición textil |
| Evidencia | Más de 4.600 productos, según el dato que ya declara el portfolio; verificar vigencia |
| Participación | Tu rol real y alcance, a completar sin inventarlo |
| Acción principal | Ver caso |
| Acciones secundarias | Demo y código |

Nombres visibles sugeridos: Plastic Who?, MN Agency, Therapio, Lumi, MN Sync, Cine Radar, Aberturas N&L y Simulador de DEA. El subtítulo explica el dominio. El título completo no necesita cargar todas las siglas y funcionalidades.

Las capturas necesitan dirección visual: Plastic Who? y Lumi contienen mucho espacio vacío alrededor de la interfaz y, al reducirse, el producto queda diminuto. Preparar miniaturas específicas, con encuadre consistente y una parte reconocible de la experiencia. Los títulos deben poder leerse completos.

El detalle podría usar una ficha editorial vinculada al mismo libro. El pergamino con rodillos añade otro objeto y una animación que escala verticalmente todo el contenido; se puede simplificar a una ficha que aparece con opacidad y desplazamiento corto.

Hay un enlace concreto para corregir: en MN Sync, «Demo» y «Código» apuntan al mismo repositorio. Renombrar la primera acción a «Ver funcionamiento» si existe una demostración real, o mostrar solo el repositorio. Para aplicaciones que requieren acceso, ofrecer recorrido visual o cuenta de prueba cuando corresponda; no se comprobaron aquí los accesos externos.

## Tecnologías, contacto y móvil

**Tecnologías.** Reducir la escala del mural de logos y mostrar los nombres permanentemente. Los tooltips dependen del hover y los contenedores no reciben foco por teclado. Los SVG alternativos de Prisma, Supabase y Shadcn están dibujados a mano y merecen reemplazarse por activos correctos o por etiquetas de texto. Acompañar tecnologías principales con contexto breve: qué construís con ellas o en qué proyecto se usan.

**Contacto.** Está bien contar con formulario y enlace alternativo al correo. Hacer el email más visible y añadir una acción de copia con estado real de éxito/error. Los estados del formulario necesitan anuncio accesible. El mensaje «llegó a mi casilla» promete más de lo que demuestra la resolución de una solicitud de EmailJS; sería más preciso «Mensaje enviado». No se probó la entrega. El formulario está duplicado en escritorio y móvil: conviene compartir su lógica y sus componentes.

**Móvil.** La lectura vertical es adecuada y el menú permite desplazarse entre secciones; se comprobó que el scroll funciona. No conviene llevar la doble página estrecha a un teléfono. La mejora está en conservar la identidad del papel, acortar la presentación inicial, ordenar los filtros y mantener acciones cómodas. La foto ocupa gran parte de la primera pantalla; reducirla permitiría mostrar antes la especialidad y el acceso a proyectos.

**Tablet y altura reducida.** El corte único de 768 px no representa el espacio necesario para dos hojas y menú. Hay que decidir según ancho útil, orientación y altura. El uso global de `h-screen`, `w-screen` y `overflow-hidden` en el cuerpo merece ajustarse por modalidad; no se comprobó un bloqueo del scroll móvil, pero vuelve más frágiles el zoom, el teclado virtual y el cambio de tamaño.

## Mantenimiento, carga y metadatos

- El build de producción terminó correctamente, incluido TypeScript. La lectura de consola realizada durante el recorrido no devolvió errores ni advertencias de la aplicación.
- Las capturas activas suman unos 3,89 MB en archivos originales. Aberturas N&L pesa 1,69 MB y Cine Radar 1,19 MB. Se usan `img` sin variantes responsive ni carga diferida en las tarjetas. Preparar miniaturas y formatos eficientes; priorizar únicamente la imagen visible al abrir. No se midió el tráfico real transferido.
- Escritorio y móvil se montan simultáneamente y se alternan por CSS. La versión móvil incluye todos los proyectos aunque esté oculta. Revisar carga de imágenes, efectos y listeners de la variante inactiva; no afirmar que ocultar con CSS evita esas tareas.
- Hay componentes de una versión anterior —secciones, Navbar, Footer y otro modal— fuera del recorrido activo. Reducir duplicaciones y comprobar referencias antes de retirar archivos.
- El estado de filtro/subpágina de `Book` se transmite a la vista de hojas, pero la vista de proyectos actual usa cortes fijos y no consume ese filtro. Limpiar la API o implementar el comportamiento previsto.
- El comentario que dice que se prerenderizan todas las hojas no equivale a mantenerlas montadas: el render selecciona contenido actual, anterior y siguiente según la transición. Esto importa para estados de formularios y continuidad de scroll.
- El selector de idioma vuelve al español al recargar y no actualiza URL ni `html.lang`. Persistir preferencia y decidir si las dos versiones necesitan URLs compartibles.
- Las secciones de escritorio no tienen URL propia: no se puede compartir directamente un caso o volver a él con el historial. Considerar hash/rutas para capítulos y proyectos.
- Los metadatos básicos existen. Mejorar la tarjeta social con una composición horizontal que incluya nombre, especialidad y una vista del libro; hoy usa el logo cuadrado. Verificar que el dominio configurado en `NEXT_PUBLIC_SITE_URL` coincide con el publicado.
- Revisar si hacen falta las cuatro familias tipográficas cargadas. Inter está declarada como variable, pero `font-sans` no se vincula a ella en el CSS actual.
- `npm audit --omit=dev` devolvió cinco paquetes señalados: cuatro con severidad alta y uno crítica, Next.js. Es un resultado sobre dependencias; no demuestra que cada vector sea explotable en este portfolio. Revisar versiones y condiciones, actualizar y volver a verificar antes de desplegar. No se aplicó `audit fix` ni se cambiaron dependencias.

Referencias técnicas consultadas: [diálogos modales de WAI-ARIA](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/), [imágenes de Next.js](https://nextjs.org/docs/app/api-reference/components/image), [transform-style](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/transform-style) y [aviso de Next.js incluido en la auditoría](https://github.com/advisories/GHSA-2464-fhr4-w9xw).

## Orden de implementación y criterios de cierre

1. **Corregir estructura e interacción:** menú sin recortes, tablet legible, etiquetas de formulario, diálogo accesible y navegación centralizada. Revisar dependencias antes de publicar.
2. **Definir la edición visual:** papel más claro, menos ornamento simultáneo, tipografía mayor, nueva apertura, solapas compactas y encuadres de proyectos.
3. **Dar cuerpo al libro:** tapa, cantos inferiores, bloques de hojas, pliegue e iluminación unificados. Después, refinar el giro y el arrastre con la misma física.
4. **Completar la presentación profesional:** casos con participación y resultados reales, imágenes optimizadas, enlaces compartibles, traducciones y tarjeta social.

Criterios de aceptación:

- Todos los destinos y el selector de idioma caben en 1280 × 720.
- En 768 px vertical no hay logos superpuestos ni doble página ilegible.
- Solapas, esquinas y teclado llegan al destino correcto y comparten reglas de transición; las acciones rápidas no revierten una navegación posterior.
- Las acciones de cada proyecto son visibles y sus títulos comprensibles sin abrir el detalle.
- Todo el recorrido se completa por teclado, con foco visible; un diálogo no deja navegar accidentalmente por el fondo.
- El movimiento reducido elimina giros y efectos repetidos.
- En móvil, anclas y encabezado no tapan el título de destino; se verifica también con teclado virtual y en dispositivo físico.
- No se agregan métricas, clientes, roles ni resultados sin respaldo del autor.
- Build correcto, consola sin errores y revisión visual final en escritorio, tablet y móvil.

## Archivos principales para la intervención

| Área | Archivos |
| --- | --- |
| Estado y navegación | `context/BookContext.tsx`, `components/book/BookInteractiveSpread.tsx` |
| Cuerpo, tapa y solapas | `components/book/Book.tsx`, `BookCover.tsx`, `BookSpine.tsx`, `BookTabs.tsx`, `app/globals.css` |
| Composición y contenido | `components/book/BookPage.tsx`, `components/pages/*`, `data/translations.ts` |
| Proyectos y ficha | `components/ui/Polaroid.tsx`, `ScrollDetail.tsx`, `src/projects.ts` |
| Móvil e idioma | `components/mobile/MobilePortfolio.tsx`, `context/LanguageContext.tsx` |
| Metadatos y dependencias | `app/layout.tsx`, `package.json`, `package-lock.json` |
