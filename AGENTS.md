## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Before you commit

**Docs are part of every commit, and this is enforced.** A Claude Code hook
pauses every `git commit` in this repo with this list until it has been worked
through (see the workspace `CLAUDE.md`). Each commit either fixes every
sentence it makes untrue — in this repo and in the other MART repos' `*.md`
files — or confirms there are none.

1. **`npm run build` passes** and everything lands under `dist/about/`.
2. **Every file from `public/` goes through `withBase()`** (`src/data/site.ts`).
   A bare `"/logo.png"` resolves against the app at the domain root and breaks.
3. **The `/about` path is a contract with `app_customer_fe/render.yaml`**,
   which proxies `/about/*` here. Change `base`/`outDir` in both or neither.
4. **Changed content, structure or deployment?** Update README.md in the same
   commit, and delete anything it now says that is untrue.
