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

1. **`npm run build` passes** and `dist/` has the pages at its root.
2. **Every file from `public/` goes through `withBase()`** (`src/data/site.ts`),
   so a base path can be added back without hunting down bare `"/logo.png"`s.
3. **The legal URLs are a contract with shipped apps.** `/privacy/`, `/terms/`
   and `/refunds/` are linked from Android builds that cannot be updated and
   from the Play listing, and the old `/about/...` forms are kept alive by
   `redirects` in `astro.config.mjs`. Never rename or drop them.
4. **Changed content, structure or deployment?** Update README.md in the same
   commit, and delete anything it now says that is untrue.
