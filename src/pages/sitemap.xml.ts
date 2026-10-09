import type { APIRoute } from "astro";

// The sitemap, at /sitemap.xml: the URL robots.txt names and the one people
// and SEO tools look for first. @astrojs/sitemap was replaced by this because
// it can only write sitemap-index.xml, never sitemap.xml.
//
// Every .astro page in this folder is listed. The old /about/... redirects
// are config in astro.config.mjs, not pages, so they never appear. A page that
// must stay out of search (a 404 page, a dynamic [param] route) has to be
// filtered out here.
const pages = import.meta.glob("./**/*.astro");

export const GET: APIRoute = ({ site }) => {
  const urls = Object.keys(pages)
    .map((file) => file.replace(/^\./, "").replace(/(index)?\.astro$/, ""))
    .map((path) => (path.endsWith("/") ? path : `${path}/`))
    .sort()
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
