# Siddharth Sanjay Portfolio

A dark-first personal portfolio for Siddharth Sanjay, a Computer Science student at Arizona State University graduating in May 2026.

The site is built with React, Vite, React Router, Tailwind CSS, Framer Motion, and Lucide React. It is intentionally static for v1 and stores all portfolio content in local data files.

## Routes

- `/` - Home page with hero, about preview, featured projects, skills preview, and contact CTA.
- `/about` - Full background and areas of interest.
- `/projects` - Project grid.
- `/projects/:slug` - Shareable project detail pages.
- `/experience` - ASU University College and Fulton Ambassador experience.
- `/skills` - Grouped technical skills.
- `/contact` - Resume, GitHub, LinkedIn, and email placeholders.

## Local Setup

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

## Scripts

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

## Customize Content

Update the local data files:

- `src/data/profile.js` for contact details, GitHub, LinkedIn, resume placeholder, and profile copy.
- `src/data/projects.js` for project descriptions, screenshots, demo URLs, repository URLs, and case-study notes.
- `src/data/experience.js` for dates, titles, organizations, and bullet details.
- `src/data/skills.js` for confirmed tools, languages, and technical focus areas.

Replace the placeholder project visual at `public/assets/projects/project-placeholder.svg` with real project screenshots or add new image files and update the project data paths.

## Vercel Deployment

Vercel should auto-detect this as a Vite project. A `vercel.json` rewrite is included so React Router deep links such as `/projects/mytune` load correctly on refresh.

Recommended settings:

- Build command: `npm run build`
- Output directory: `dist`
- Install command: `npm install`

## Pre-Launch Checklist

See `TODO.md` for the exact items Siddharth should personalize before final deployment.
