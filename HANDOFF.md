# Handoff: Siddharth Sanjay Portfolio

## Current State

This repository contains Siddharth Sanjay's personal portfolio website. It is a routed React application built with Vite, React Router, Tailwind CSS, Framer Motion, and Lucide React. There is no backend for v1; all content is stored in local data files.

The site is designed as a dark-first, recruiter-friendly portfolio for a Computer Science student at Arizona State University graduating in May 2026. It showcases projects, experience, skills, and contact placeholders.

## Routes

- `/` - Home page with hero, about preview, featured projects, skills preview, and contact CTA.
- `/about` - Full about page and areas of interest.
- `/projects` - Project grid with modern cards.
- `/projects/:slug` - Shareable project detail pages.
- `/experience` - ASU University College and Fulton Ambassador experience.
- `/skills` - Grouped skills page.
- `/contact` - Resume, GitHub, LinkedIn, and email placeholders.

`vercel.json` includes a rewrite so React Router deep links work on Vercel refreshes.

## Important Files

- `src/App.jsx` - Route definitions.
- `src/main.jsx` - React Router setup.
- `src/components/layout/` - Shared layout, navbar, and footer.
- `src/components/home/` - Home page sections.
- `src/components/projects/` - Project cards, grid, and detail page.
- `src/components/ui/` - Small reusable UI primitives.
- `src/pages/` - Routed pages.
- `src/data/profile.js` - Profile/contact placeholders.
- `src/data/projects.js` - Project content, slugs, links, case-study notes, and image paths.
- `src/data/experience.js` - Experience entries.
- `src/data/skills.js` - Skill groups.
- `public/assets/projects/project-placeholder.svg` - Current placeholder project visual.
- `README.md`, `TODO.md`, `AGENTS.md` - Setup, personalization, and future-agent instructions.

## Content Rules

- Do not invent achievements, companies, metrics, awards, demo URLs, or repository links.
- Keep placeholders visibly marked until the real information is provided.
- Prefer editing local data files instead of hardcoding content in components.
- Keep the design polished, modern, high-signal, and recruiter-readable.

## Known Placeholders

- Contact email in `src/data/profile.js`.
- GitHub profile URL in `src/data/profile.js`.
- LinkedIn profile URL in `src/data/profile.js`.
- Resume link or PDF path in `src/data/profile.js`.
- Experience dates in `src/data/experience.js`.
- Project screenshots in `public/assets/projects/` and `src/data/projects.js`.
- Project GitHub, live demo, and case-study links in `src/data/projects.js`.
- `[LLM tools to confirm]` in `src/data/skills.js`.

## Validation History

During the routed implementation pass, the following checks passed:

```bash
npm install
npm run lint
npm run build
npm run preview -- --host 127.0.0.1 --port 4173
```

Browser checks also verified all required routes, `/projects/mytune`, mobile navigation, project-card click behavior, placeholder visibility, and no console errors. Playwright screenshots were captured under `output/playwright/`, which is ignored by git.

Rerun `npm run lint` and `npm run build` after any changes.

## Recommended Next Steps

1. Replace the contact/profile placeholders.
2. Add real project screenshots and update image paths.
3. Add public GitHub/demo/case-study URLs only where they actually exist.
4. Confirm experience dates and any exact role wording.
5. Review project descriptions for ownership and accuracy.
6. Add favicon and social preview metadata.
7. Run lint/build and preview the site on mobile, tablet, and desktop before deploying.

## Tool Notes From Prior Work

- Browser/browser-use was used for design research and local route checks.
- Playwright CLI was used for responsive screenshots.
- Vercel deployment config was added, but no deployment was performed.
- CodeRabbit CLI was not installed in the prior session, so no CodeRabbit review was run.
