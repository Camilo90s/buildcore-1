// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // ⚠️ Cambia esto por tu dominio real: se usa para canonical, Open Graph y sitemap.
  site: 'https://www.buildcore-construction.com',
  trailingSlash: 'ignore',

  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
  },

  build: {
    // Inyecta el CSS en el <head>: cero peticiones que bloqueen el render.
    inlineStylesheets: 'always',
  },

  compressHTML: true,

  // Fuentes autoalojadas con preload y fallbacks con métricas ajustadas (menos CLS).
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Barlow',
      cssVariable: '--font-barlow',
      fallbacks: ['sans-serif'],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/barlow-latin-700-normal.woff2'],
            weight: 700,
            style: 'normal',
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Inter',
      cssVariable: '--font-inter',
      fallbacks: ['sans-serif'],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/inter-latin-wght-normal.woff2'],
            weight: '100 900',
            style: 'normal',
          },
        ],
      },
    },
  ],
});
