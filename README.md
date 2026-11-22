# TSU Agroforestry & Extension Lab Website

A modern, fast, static website for the **TSU Agroforestry & Extension Lab** at Tennessee State University, built with React, TypeScript, Vite, and Tailwind CSS and hosted on **GitHub Pages** at https://tsu-agroforestry.github.io/.

## Quick Start

```bash
npm install
npm run dev
```

## Build & Deployment

```bash
npm run build
```

Pushes to `main` automatically build and deploy to **GitHub Pages** via [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

## Updating Lab Content

All lab content is stored in cleanly typed data files inside `src/data/` so you can update the site directly on GitHub.com without touching layout code:

- `src/data/site.ts` — Lab name, mission/welcome text, pillars, and contact details
- `src/data/people.ts` — Team members (PI, graduate researchers, students, alumni)
- `src/data/research.ts` — Ongoing and completed research projects
- `src/data/publications.ts` — Journal articles, book chapters, and extension guides
- `src/data/extension.ts` — Featured funding opportunities, workshops, photo galleries, and guides
- `src/data/teaching.ts` — Undergraduate and graduate courses
- `src/data/resources.ts` — Partner organizations and forestry links

All images are stored locally in `public/images/`.
