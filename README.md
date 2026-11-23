# BuildCore Construction — Landing page (Astro + Tailwind CSS)

Réplica de la landing "BuildCore Construction", responsive y optimizada para SEO y rendimiento.

**Lighthouse (build de producción, con animaciones):** Performance 98 móvil / 100 escritorio · Accessibility 100 · Best Practices 100 · SEO 100 · CLS 0.

## Requisitos

- Node.js **22.23.4 o superior** (lo exige Astro 7)
- **pnpm 10** (fijado en `package.json` → `"packageManager": "pnpm@10.34.9"`)

Si no tienes pnpm, actívalo con Corepack (viene con Node):

```bash
corepack enable
corepack prepare pnpm@10.34.9 --activate
```

## Comandos

```bash
pnpm install
pnpm dev          # servidor local en http://localhost:4321
pnpm build        # genera el sitio estático en ./dist
pnpm preview      # sirve ./dist para probar el build
pnpm check        # revisión de tipos (astro check)
```

> `pnpm-workspace.yaml` solo autoriza los scripts de instalación de `esbuild` y `sharp`
> (pnpm 10 los bloquea por defecto). No borres ese archivo.

## Deploy en Vercel

Importa el repo y no cambies nada: Vercel detecta Astro y, por el `pnpm-lock.yaml`
(lockfileVersion 9.0), usa pnpm 10 automáticamente. No hace falta subir `dist/`.

## Estructura

```
src/
├─ assets/
│  ├─ fonts/              Barlow 700 + Inter variable (woff2, autoalojadas)
│  └─ hero-building.jpg   Imagen del hero (provisional, ver abajo)
├─ components/
│  ├─ Header.astro        Logo, menú, botón "Get a quote" y menú móvil
│  ├─ Hero.astro          Sección principal (H1, línea amarilla, botones)
│  ├─ ServicesBar.astro   Franja de 4 servicios con iconos
│  ├─ ServiceIcon.astro   Iconos SVG de los servicios
│  ├─ About.astro         Sobre nosotros + estadísticas
│  ├─ Projects.astro      Proyectos destacados
│  ├─ Company.astro       Por qué elegirnos
│  ├─ Marquee.astro       Marquesina amarilla de especialidades
│  ├─ Contact.astro       Banda CTA + formulario de contacto
│  ├─ Footer.astro
│  ├─ Logo.astro / ArrowRight.astro
├─ data/site.ts           ← Todos los textos, datos de contacto y SEO en un solo sitio
├─ layouts/Layout.astro   <head> con meta tags, Open Graph, Twitter y JSON-LD
├─ pages/index.astro
└─ styles/global.css      Tailwind v4, tokens de diseño (@theme) y animaciones
public/                   favicon, iconos, og-image.jpg, robots.txt, manifest
```

## Antes de publicar (checklist)

1. **Dominio:** cambia `site` en `astro.config.mjs` y la línea `Sitemap:` en `public/robots.txt`.
2. **Datos reales:** teléfono, email, dirección, horario y redes en `src/data/site.ts` (alimentan también el JSON-LD).
3. **Imagen del hero:** `src/assets/hero-building.jpg` está recortada de la captura de referencia (resolución baja).
   Sustitúyela por una foto de al menos **1800 × 1440 px** con el mismo encuadre (edificio a la izquierda-centro, grúa a la derecha).
   Astro genera automáticamente las versiones AVIF/WebP en varios tamaños.
   Prompt sugerido si la generas con IA:
   > Photorealistic architectural photograph of a modern two-story concrete and glass luxury house at blue hour, warm interior lights glowing through floor-to-ceiling windows, wide illuminated stone entrance steps with landscape lighting and shrubs, a yellow tower crane and a building under construction in the background on the right, dramatic sunset sky with soft clouds, eye-level three-quarter view, sharp details, 5:4 aspect ratio
4. **Proyectos:** las tarjetas usan recortes de la misma imagen como marcador. Añade fotos reales en `src/assets/` e impórtalas en `Projects.astro`.
5. **Formulario:** cambia el `action` del `<form>` en `Contact.astro` (Formspree, Web3Forms, Netlify Forms o tu backend).
6. **Open Graph:** `public/og-image.jpg` (1200 × 630) es provisional; reemplázala por una imagen de marca.

## Qué incluye para SEO y rendimiento

- HTML estático, **0 KB de JavaScript de framework**; solo scripts mínimos en línea (menú móvil, menú activo, aparición al hacer scroll y contadores).
- CSS de Tailwind **en línea** en el `<head>` (sin peticiones que bloqueen el render).
- Fuentes autoalojadas con la Fonts API de Astro: `preload` + fallbacks con métricas ajustadas (CLS = 0).
- Imagen LCP con `<Picture>`: AVIF/WebP, `srcset`, `fetchpriority="high"`; el resto con `loading="lazy"`.
- `title`, `description`, `canonical`, `robots`, Open Graph, Twitter Cards, `theme-color`, favicon SVG/PNG y manifest.
- Datos estructurados **schema.org** (`GeneralContractor` con servicios, dirección y horario + `WebSite`).
- `sitemap-index.xml` (@astrojs/sitemap) y `robots.txt`.
- HTML semántico: un solo `h1`, jerarquía `h2`/`h3`, `nav` con `aria-label`, `address`, enlace "Skip to content", foco visible y contraste AA.

## Tipografías

- **Barlow 700**: titular, logo, botones y títulos de sección (la más parecida a la referencia).
- **Inter (variable)**: menú, párrafos y formularios.

## Animaciones

Todo con CSS (`transform`/`opacity`, aceleradas por GPU) y ~1 KB de JS, sin librerías:

| Dónde | Qué hace |
| --- | --- |
| Hero | Zoom de entrada de la foto, el titular sube línea a línea, la línea amarilla se dibuja, párrafo y botones aparecen escalonados |
| Hero (scroll) | Parallax de la foto y el texto se desvanece al bajar* |
| Header | Barra amarilla de progreso de lectura*, sombra + desenfoque al hacer scroll, subrayado del menú animado |
| Menú móvil | Despliegue con los enlaces escalonados; la hamburguesa se transforma en X |
| Secciones | Aparición al entrar en pantalla (`data-reveal`, `data-reveal="left|right|zoom"`, retraso con `style="--delay:120ms"`) |
| Servicios | El acento amarillo de cada icono se "dibuja"; en hover el icono sube y el acento se desplaza |
| Estadísticas | Contadores que suben de 0 al valor real |
| Marquesina | Banda amarilla en movimiento continuo (se pausa con el cursor) |
| Botones y tarjetas | Brillo que cruza el botón, flecha que avanza, zoom de imagen y barra amarilla en proyectos |

\* Usan *scroll-driven animations* (Chrome, Edge y Safari 26+); en Firefox simplemente no aparecen.

**Accesibilidad:** si el sistema tiene activado "reducir movimiento", no se anima nada.
Sin JavaScript todo el contenido se ve igual (las animaciones de aparición solo se activan con JS).
Para añadir la animación a un elemento nuevo basta con ponerle `data-reveal`.
