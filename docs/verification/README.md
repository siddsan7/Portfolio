# Verification procedure

Use Node compatible with Vite 7 and the existing npm lockfile.

```text
npm ci
npm run lint
npm run build
npm run test:static
node scripts/check-preview.js
npm run preview
```

The static checker starts a temporary strict HTTP server. It verifies HTML, metadata, routes, links, archives, sitemap, crawler rules, and PDF access. The preview checker makes a noindex preview build, verifies it, then restores production output. Run these sequentially with browser checks; rebuilding while capturing invalidates the output.

For browser checks, use an external tooling directory containing Playwright, axe-core and Lighthouse. No audit packages are application dependencies. Set `PORTFOLIO_QA_PACKAGES` to a package.json beside Playwright's node_modules, `PORTFOLIO_AXE_PATH` to axe-core/axe.min.js, and `PORTFOLIO_LIGHTHOUSE_MODULE` to the file URL of lighthouse/core/index.js. Set `PORTFOLIO_BROWSER` to an installed Playwright browser channel (default: msedge).

```text
node scripts/qa-browser.mjs --assets
node scripts/check-lcp.mjs
python scripts/check-pdf.py
npm run build
npm run test:static
```

`--assets` regenerates the selectable-text PDF and social PNG. The site must already be built. Python requires pypdf. The PDF check compares source facts and every experience bullet, and rejects local or non-HTTPS web annotations. Rebuild afterward so dist contains the new assets.

`check-lcp.mjs` (also `npm run test:lcp`) runs three cold mobile Lighthouse navigations. Every LCP must be below 2500ms. It verifies the mobile throttle and viewport match the recorded baseline; it does not override Lighthouse defaults. It writes compact results to `lcp-results.json` and raw logs to ignored `.build/`. Run it after building and without other browser audits running concurrently. Static contracts enforce the original artwork SHA-256 values and an initial JavaScript size below 5KB.

Browser checks cover 25 route/width combinations, keyboard focus and skip link, anchor history, reduced motion, 200% text enlargement, 320px reflow, no-JavaScript access, 12 axe scans, and Lighthouse desktop/mobile lab measurements. Full Lighthouse logs remain in ignored `.build/`; `browser-results.json` contains the compact results. Screenshots are actual local production-build captures, separate from the approved design study.

These checks do not establish WCAG conformance, real-user Core Web Vitals, screen-reader usability, email delivery, LinkedIn account ownership, or live hosting behavior. Hosting protection, HTTPS/alternate hosts, Vercel response headers, domain asset URLs, social unfurls, Search Console and Bing Webmaster Tools require checks after an owner-authorized deployment. No deployment is authorized by this procedure.
