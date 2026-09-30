// The site is built into dist/about/, leaving this service's own root empty.
// This page sends anyone who lands there (the onrender.com URL, or the domain
// before it moves to the app) to /about/, so no step of the cutover 404s.
import { writeFileSync } from "node:fs";

writeFileSync(
  new URL("../dist/index.html", import.meta.url),
  `<!doctype html>
<meta charset="utf-8">
<title>LAO Delivery</title>
<link rel="canonical" href="https://www.laogroceries.in/about/">
<meta http-equiv="refresh" content="0; url=/about/">
<a href="/about/">Continue to LAO</a>
`,
);
