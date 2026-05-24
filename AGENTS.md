# Agent Instructions

This is Siddharth Sanjay's personal portfolio website.

## Project Rules

- Keep the design polished, modern, high-signal, and recruiter-friendly.
- Prefer simple maintainable React components.
- Use local data files for content.
- Do not invent achievements or metrics.
- Use placeholders clearly when exact information is missing.
- Run build checks before finalizing.
- Keep accessibility and responsiveness in mind.

## Stack

- React
- Vite
- React Router
- Tailwind CSS
- Framer Motion for subtle animations
- Lucide React for icons
- No backend, auth, or database for v1

## Commands

```bash
npm install
npm run dev
npm run lint
npm run build
npm run preview
```

## Content Locations

- Profile and contact placeholders: `src/data/profile.js`
- Projects and case studies: `src/data/projects.js`
- Experience: `src/data/experience.js`
- Skills: `src/data/skills.js`
- Routed pages: `src/pages/`
- Layout and navigation: `src/components/layout/`

## QA Expectations

- Check mobile, tablet, and desktop widths.
- Verify keyboard focus is visible.
- Keep placeholder links and missing assets obvious.
- Avoid broken imports and missing asset paths.
- Do not add unnecessary dependencies.
- Keep `vercel.json` rewrites unless routing is changed away from BrowserRouter.
