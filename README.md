# Siddharth Sanjay Portfolio

A responsive portfolio for Siddharth Sanjay, AI engineer and Arizona State University computer science graduate. The approved editorial design is specified in Design.md, with retrieval and accessibility requirements in SEO.md.

## Run and verify

Use the existing lockfile and a Node version compatible with Vite 7.

```text
npm ci
npm run lint
npm run build
npm run test:static
npm run preview
```

Preview serves the complete static output at http://127.0.0.1:4173. Set PORT to change the port. `npm run dev` builds and starts the same strict server; rebuild after editing. It deliberately has no SPA fallback. See docs/verification/README.md for browser, preview-indexing and PDF checks.

## Architecture and content

React renders HTML at build time with Vite. Only header navigation hydrates in the browser, using the installed Framer Motion. Core content, links, section anchors and résumé work without JavaScript. No runtime backend, analytics, external font request or client router is required.

- `src/redesign/content.js`: identity, featured project evidence, contributions, skills and links.
- `src/redesign/resume.js`: education and experience transcribed from the supplied résumé.
- `src/redesign/Site.jsx`, `Artwork.jsx`: semantic pages and original conceptual SVG figures.
- `src/redesign/Navigation.jsx`: native section anchors with observed active state.
- `src/redesign/styles.css`: Karrik, shared tokens, responsive styles and reduced motion.
- `scripts/build-static.js`: complete HTML, metadata, structured data, sitemap, preview noindex.
- `scripts/serve-static.js`: local strict serving, 308 redirects, 404s, compression and headers.
- `public/fonts/`: unchanged Karrik Regular WOFF2 and its OFL license/source credit.
- `public/Siddharth-Sanjay-Resume.pdf`: selectable PDF generated from the HTML résumé.

The earlier `src/App.jsx`, components/pages and data remain as source history. They include pre-existing uncommitted edits and are not redesign entry points. Only `src/data/projects.js` is read to preserve six earlier project URLs as labeled, noindex archives. Do not publish its old claims as current facts.

## Routes

- `/`: identity, selected work, About, evidence-linked Skills and Contact.
- `/projects/harmonic-color-graph/`, `/projects/tonescope/`, `/projects/truckerpath-dispatcher-os/`: current case studies.
- `/resume/`: HTML résumé and PDF download.
- Six earlier `/projects/:slug/` URLs: preserved archives, excluded from sitemap/search indexing.
- Earlier About/Skills/Contact/Projects routes redirect to relevant homepage sections. Experience redirects to the résumé.
- Missing URLs return HTTP 404. No catch-all root rewrite remains.

Canonicals use https://siddharthsanjay.com with trailing slashes. The résumé PDF uses `X-Robots-Tag: noindex, follow`; the HTML résumé is indexable. Robots allows search crawlers and blocks GPTBot and ClaudeBot training crawlers separately. Policy sources and limitations are in docs/verification/report.md.

## Review and release

The owner authorized merging after independent council review. Deployment and DNS still require owner review. `vercel.json` sets `git.deploymentEnabled: false` to prevent automatic Git-triggered deployment. Do not remove that guard as part of a routine content edit.

Before an approved release, verify the live host, HTTPS/alternate-host redirects, Vercel headers, crawler access, absolute social images and PDF. Keep previews protected at the hosting layer; preview HTML is also noindex. The owner must complete domain/account verification, Search Console and Bing Webmaster Tools, then submit the sitemap. Field Core Web Vitals and human/screen-reader review remain separate from lab checks.
