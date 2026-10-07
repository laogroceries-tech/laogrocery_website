// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// This site is the root of www.laogroceries.in. The shop (app_customer_fe)
// lives on its own host, app.laogroceries.in, so no base path is needed.
export default defineConfig({
  site: 'https://www.laogroceries.in',
  trailingSlash: 'always',
  integrations: [sitemap()],
  // The site used to live under /about/. The privacy, terms and refund URLs
  // are baked into shipped Android builds and the Play listing, so the old
  // paths must keep working. Astro writes a small HTML page (meta refresh plus
  // canonical) at each one.
  redirects: {
    '/about': '/',
    '/about/privacy': '/privacy/',
    '/about/terms': '/terms/',
    '/about/refunds': '/refunds/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
