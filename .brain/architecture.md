# Architecture map

- Entry: `redesign.html` → Vite client bundle for `src/redesign/client.jsx`; legacy `index.html`/main/App are not build inputs.
- Build: `scripts/build-static.js` first bundles the header island/CSS, then SSR-compiles `src/redesign/entry.jsx` to ignored `.build/`, calls React renderToStaticMarkup, emits five public pages, six noindex archive pages, 404, sitemap and shared metadata.
- Content: `src/redesign/content.js` owns identity, projects, contribution copy, evidence, skills, public routes and legacy aliases. `resume.js` owns source-verified education/experience. Case-study text and résumé project summaries share project data.
- View: `Site.jsx` composes pages; `Artwork.jsx` supplies original static conceptual SVG; `styles.css` centralizes Karrik/tokens/layout/print/reduced motion.
- Browser: only `Navigation.jsx` hydrates. Anchors remain native. IntersectionObserver tracks a header-offset boundary and document bottom; ResizeObserver tracks header height. No content fetch, SPA router, scroll loop, external service or runtime server is required.
- Serving: directory indexes and 404.html. `serve-static.js` mirrors strict local status/redirect behavior, gzip and cache behavior. `vercel.json` removes blanket fallback, normalizes slash/host/old routes, and disables Git-triggered deployment until owner release review.
- Assets: local Karrik/OFL, favicon, social PNG, two-page selectable résumé PDF. `qa-browser.mjs --assets` regenerates PDF/PNG. PDF links normalize to canonical HTTPS, independently checked by `check-pdf.py`.
- Checks: lint; build; `check-static.js` HTTP/HTML/link/indexing contracts; `check-preview.js` preview noindex then production restore; optional external Playwright/axe/Lighthouse via qa-browser.mjs; PDF facts/annotations via pypdf. Never build while browser capture is active.
- Evidence: docs/verification final captures and compact JSON; raw Lighthouse logs ignored in `.build/`.
- Legacy: old src/components/pages/profile/skills/experience retained untouched to preserve pre-existing edits; `src/data/projects.js` only feeds labeled archived pages. No old placeholder content is promoted into current evidence.
