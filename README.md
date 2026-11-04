# Portfolio de Tomás Reyes

Portfolio bilingüe (ES/EN) con un libro interactivo en pantallas amplias y lectura continua en móvil, tablet vertical y ventanas de poca altura.

Producción: https://portfolio-tomas-reyes.vercel.app/

## Desarrollo

```sh
npm ci
npm run dev
```

Requiere Node.js 20.9 o posterior, compatible con Next.js 16. La instalación incluye Sharp a través de Next.js.

## Comprobaciones

```sh
npm run lint
npm run test:navigation
npm run test:motion
npm run build
npm run test:metadata
npm audit --omit=dev
```

Las pruebas de metadatos inspeccionan los archivos generados por el build. Para revisar ese build en el navegador: `npm run start`.

## Imágenes

Los ocho proyectos activos usan WebP de hasta 1600 px y `next/image` para servir variantes responsive y diferir las capturas fuera de pantalla. Los originales se conservan en `public/projects`.

```sh
npm run images:optimize
```

Ese comando regenera `public/projects/optimized` y las dimensiones de `src/projectImages.ts`. Utiliza Sharp instalado por Next.js, sin una dependencia adicional. El encuadre visual se controla en las tarjetas; la ficha conserva la captura completa.

## Metadatos y dominio

El origen de producción está centralizado en `lib/site.ts`. `NEXT_PUBLIC_SITE_URL` permite reemplazarlo si cambia el dominio; el valor debe ser una URL absoluta. No debe apuntar a localhost ni a un despliegue temporal en producción. El canonical, Open Graph, robots y sitemap usan ese mismo origen.

La tarjeta social de 1200×630 se genera en `app/opengraph-image.tsx`. El idioma de lectura se guarda localmente; la página canónica y los metadatos públicos permanecen en español. No se anuncian rutas de idiomas que no existen.

## Estructura

- `components/PortfolioViewport.tsx`: monta una sola composición según la consulta compartida de `lib/bookViewport.ts`; el libro se carga por separado.
- `components/book` y `context/bookNavigation.ts`: libro y navegación atómica.
- `components/mobile`: lectura continua, prerenderizada en el servidor.
- `components/ui/ContactForm.tsx` y `context/ContactContext.tsx`: formulario compartido; mantiene el borrador al cambiar de composición y carga EmailJS únicamente al enviar.
- `src/projects.ts` y `data/translations.ts`: contenido y traducciones.
- `ETAPA_*.md`: cambios y validación de las seis etapas de la auditoría.

La preferencia de movimiento reducido elimina los giros. El cambio de composición cancela cualquier giro en curso y mantiene accesible la ficha abierta.
