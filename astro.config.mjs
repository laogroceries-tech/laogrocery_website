// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// The customer web app owns the root of www.laogroceries.in and proxies
// /about/* to this site's Render service. Building into dist/about/ (with the
// publish directory still `dist`) makes the service serve the same paths the
// proxy forwards, so no prefix has to be stripped on the way through.
export default defineConfig({
  site: 'https://www.laogroceries.in',
  base: '/about',
  trailingSlash: 'always',
  outDir: './dist/about',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
