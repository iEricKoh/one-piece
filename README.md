# one-piece

Personal portfolio / CV site for Zimo Xu, built with [Astro](https://astro.build/) and [Tailwind CSS](https://tailwindcss.com/). Live at [ierickoh.com](https://www.ierickoh.com).

## Tech stack

- **Astro 6** static site
- **Tailwind CSS 4** (via `@tailwindcss/vite`)
- **TypeScript**
- **Inter** font, self-hosted via Astro's font API (Fontsource provider)
- Content authored as Astro **content collections**
- `@astrojs/sitemap` for sitemap generation, `@vercel/analytics` for analytics
- Deployed on **Vercel**

## Getting started

This project uses **pnpm**.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:4321](http://localhost:4321) to view the site.

## Scripts

| Command             | Description                          |
| ------------------- | ------------------------------------ |
| `pnpm dev`          | Start the dev server                 |
| `pnpm build`        | Build the production site to `dist/` |
| `pnpm preview`      | Preview the production build locally |
| `pnpm check`        | Type-check with `astro check`        |
| `pnpm lint`         | Lint with ESLint                     |
| `pnpm format`       | Format all files with Prettier       |
| `pnpm format:check` | Verify formatting (run in CI)        |
| `pnpm og`           | Regenerate the Open Graph image      |

## Project structure

```
src/
  components/   UI components (.astro)
  data/         Content collections (experiences, side-projects)
  i18n/         Translations and locale utilities
  interfaces/   Shared TypeScript types
  layouts/      Page layout + <head> metadata
  pages/        Routes
  scripts/      Client-side enhancements (reveal, typewriter)
  styles/       Global CSS
```

Editing content (work experience, side projects) is done through the entries in `src/data/`. Site-wide copy lives in `src/i18n/locales/`.

## Deployment

Pushes to `main` deploy automatically via Vercel. The Vercel project framework is set to Astro.
