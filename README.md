# TSU Agroforestry & Extension Lab Website

A modern, fast, static replacement website for the **TSU Agroforestry & Extension Lab** at Tennessee State University, built with React, TypeScript, Vite, and Tailwind CSS.

## Quick Start

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

The production static files are generated in `dist/` and can be deployed for free to **GitHub Pages**, **Netlify**, or **Cloudflare Pages** with zero server configuration.

## Updating Lab Content

All lab content is stored in cleanly typed data files inside `src/data/` so you don't have to touch layout code for routine updates:

- `src/data/site.ts` — Lab name, mission/welcome text, pillars, and contact details
- `src/data/people.ts` — Team members (PI, graduate researchers, students, alumni)
- `src/data/research.ts` — Ongoing and completed research projects
- `src/data/publications.ts` — Journal articles, book chapters, and extension guides
- `src/data/extension.ts` — Featured funding opportunities, workshops, photo galleries, and guides
- `src/data/teaching.ts` — Undergraduate and graduate courses
- `src/data/resources.ts` — Partner organizations and forestry links

All images are stored locally in `public/images/`.
