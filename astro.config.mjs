// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Dominio del sitio (se usa para SEO, Open Graph y sitemap).
const SITE_URL = 'https://kachaagency.com';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  integrations: [sitemap()],
  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },
  server: {
    allowedHosts: ['.ngrok-free.app'],
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
