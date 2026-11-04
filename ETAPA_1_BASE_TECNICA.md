# Etapa 1 — Base técnica

Fecha: 4 de noviembre de 2026.

Actualización de dependencias de seguridad. No se modificaron componentes, estilos ni contenido del portfolio.

| Dependencia directa | Antes | Después |
| --- | --- | --- |
| next | ^16.0.7 (instalado 16.0.7) | 16.4.5 |
| eslint-config-next | 16.0.3 | 16.4.5 |
| react | 19.2.0 | 19.2.9 |
| react-dom | 19.2.0 | 19.2.9 |

Se fijaron las versiones directas actualizadas y se regeneró `package-lock.json`. Se aplicó `npm audit fix` sin `--force` para actualizar dependencias indirectas compatibles, incluidas sharp, PostCSS, nanoid, source-map-js y herramientas de desarrollo afectadas.

## Verificación

- Entorno: Node.js 22.17.0 y npm 10.9.2.
- `npm run build`: correcto, incluido TypeScript y generación estática.
- `npm audit --omit=dev`: **0 vulnerabilidades**.
- `git diff --check`: correcto.
- Prueba sobre `npm run start`: carga inicial, navegación a proyectos, apertura/cierre de una ficha, cierre/reapertura del libro y navegación a contacto. Sin errores ni advertencias capturados en consola durante ese recorrido. No se envió el formulario ni se probaron demos externas.
- `npm run lint`: detectó **3 errores y 52 advertencias** en código existente. Los errores están en `BookCover.tsx` (estado síncrono en efecto y lectura de ref durante render) y `HeroSection.tsx` (comentario JSX). Se mantienen como trabajo de interacción/limpieza de las siguientes etapas; esta etapa no declara el lint aprobado.

## Pendiente de dependencias de desarrollo

La auditoría completa informa **16 avisos moderados** en la cadena de ESLint, derivados del aviso de `minimatch` [GHSA-g3hv-75wg-m249](https://github.com/advisories/GHSA-g3hv-75wg-m249). No son 16 fallos independientes en la aplicación: npm también marca los paquetes que dependen de ese paquete.

Las versiones instaladas de minimatch son 3.1.5 y 10.2.6; el aviso identifica la corrección en 11.0.1. La corrección automática con `--force` propone ESLint 4.0.0, incompatible con la configuración actual. No se degradó ESLint ni se impuso minimatch 11 sobre consumidores de otras versiones principales. Queda pendiente adoptar una cadena de herramientas compatible cuando sus dependencias lo permitan, o realizar una migración específica con sus verificaciones.

La auditoría de producción limpia no equivale a declarar ausencia de cualquier riesgo de seguridad. Es el resultado de npm para el árbol de dependencias de producción en esta fecha.

Referencias: [guía oficial de actualización de Next.js](https://nextjs.org/docs/app/guides/upgrading/version-16) y [aviso y recomendaciones de React Server Components](https://react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components).
