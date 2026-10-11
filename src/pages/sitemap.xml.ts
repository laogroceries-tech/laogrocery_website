import type { APIRoute } from "astro";

// This section's sitemap, at /about/sitemap.xml. The domain's sitemap index,
// /sitemap.xml, is written by the shop's build (app_customer_fe,
// tool/site_pages.dart) and lists this one next to the shop's own, so this
// file is not submitted on its own.
//
// Every .astro page in this folder is listed, under the base path. A page
// that must stay out of search (a 404 page, a dynamic [param] route) has to
// be filtered out here.
const pages = import.meta.glob("./**/*.astro");

export const GET: APIRoute = ({ site }) => {
  const urls = Object.keys(pages)
    .map((file) => file.replace(/^\./, "").replace(/(index)?\.astro$/, ""))
    .map((path) => (path.endsWith("/") ? path : `${path}/`))
    .sort()
    .map((path) => `${import.meta.env.BASE_URL.replace(/\/$/, "")}${path}`)
    .map((path) => `  <url><loc>${new URL(path, site)}</loc></url>`);

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`,
    { headers: { "Content-Type": "application/xml; charset=utf-8" } },
  );
};
