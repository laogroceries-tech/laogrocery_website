// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// This site is the company section of www.laogroceries.in, under /about/.
// The shop (app_customer_fe) is the root of the domain: its Render service
// owns www.laogroceries.in and passes /about/* through to this service, and
// serves the policy addresses shipped apps link to (/privacy/, /terms/,
// /refunds/) from /about/privacy/ etc. the same way (its render.yaml).
// Every file here is therefore under /about/: links to public/ go through
// withBase().
export default defineConfig({
  site: 'https://www.laogroceries.in',
  base: '/about',
  // Files land in dist/about/ too, so this service serves the same paths the
  // shop forwards to it (Render publishes dist). The service's own root is
  // empty on purpose: www.laogroceries.in/ is the shop.
  outDir: './dist/about',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});
