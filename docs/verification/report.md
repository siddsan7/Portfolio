# Hiring refresh verification report

2026-10-20. Local production build on Windows, Node 24.14, Microsoft Edge, Playwright, axe-core and Lighthouse. Audit packages remain outside application dependencies. The active application is `src/redesign`; legacy source changes were preserved and excluded from this work.

## Scope and factual boundaries

The refresh surfaces supplied professional experience, expands supported technical skills, standardizes case studies, and adds evidence tables, architecture flows, decision stories and guided examples. It includes the previously requested LinkedIn portrait, real product screenshots and sharp homepage concepts. See `../hiring-refresh.md` for the acceptance matrix and remaining owner evidence gaps.

Metrics retain their actual denominators and dates. ToneScope's authored deterministic development experiments do not establish live-model quality. Dispatcher uses seeded data, deterministic ranking and simulated booking; its separate Gemini copilot has limited parsing/field checks. HCG's historical recommendation latency remains above its target. No company impact, adoption, senior ownership or new model-quality result was invented.

## Current checks

- Lint and production build pass. Five complete public HTML routes, six noindex archives and a genuine 404 are emitted. Essential content is readable without JavaScript; only navigation and the optional calculator are enhanced.
- Static checker: 217 assertions across five public routes. Includes status/refresh, links/assets, factual HTML, canonical/social/schema consistency, archives, sitemap/robots, PDF policy, aliases, query-preserving redirects, case-study structure, Experience order and immutable evidence links.
- Preview checker: all five routes are noindex in preview mode, then production output is restored.
- Browser matrix: 25 route/width combinations at 320/390/768/1024/1440px. No page overflow. All five routes also pass 200% text enlargement at 320 CSS pixels; evidence tables scroll inside labeled, focusable regions.
- Keyboard: 25 reachable homepage controls with visible focus, skip link and native anchor/history behavior. Passive navigation now includes Experience. Reduced-motion behavior and no-JavaScript navigation remain checked.
- Hiring-specific interactions: Experience heading fits the first 390×844 mobile screen; key technical labels are at least 14px; Skills has no project links. Native walkthrough details open; actual ToneScope capture links work. Dispatcher calculation covers source example, changed input, invalid/missing/range/precision errors, identified fields, reset and Enter submission. Without JavaScript the source formula remains readable and the calculator stays hidden.
- Accessibility: 12 axe scans (five public pages and 404 at 390/1440), zero violations under the configured WCAG tags. Sampled rendered text contrast is recorded in browser-results.json. Automated checks do not establish WCAG conformance; human screen-reader testing remains outstanding.
- PDF: two pages, 46 expected source text items and seven canonical/contact annotations. Selectable text and no local URLs. HTML/PDF share current source data.

## Independent reviews and iteration

A fresh senior AI engineering hiring-manager simulation would interview the candidate for early-career applied-AI roles. It found no blocking hiring-copy issue. Higher seniority requires professional production/leadership evidence that has not been supplied; a portfolio cannot substitute for that experience.

A separate frontend reviewer inspected current source and fresh desktop/mobile/case captures. No material blocker remained. Their separate browser launch failed in the sandbox, so independent interaction verification is not claimed. Main-agent browser checks provide the interaction evidence.

A separate evidence reviewer verified all 17 distinct cited file paths at their immutable commits and checked HCG/ToneScope/Dispatcher numbers and boundaries. Findings corrected: narrower copilot-validation wording; a separate citation for actual ToneScope capture provenance; Dispatcher walkthrough now demonstrates the cost trade-off it actually exposes; visible calculator ranges, precision and field errors; mobile table-scroll guidance. See `../hiring-refresh.md` for dispositions. Earlier council sign-offs do not cover this change.

## Performance and artifacts

Mobile lab LCP passed at 1657, 2259 and 1656 ms, with CLS 0 and performance scores 100/98/100. The unchanged gate requires three cold default-mobile runs below 2500 ms and asserts throttle/viewport settings. Initial JavaScript remains 2.12KB raw. See `lcp-results.json`. Lab results are not field p75 Core Web Vitals or production-host measurements. Clean committed-tree verification is recorded in the acceptance record.

`desktop.png`, `mobile.png`, `case-study.png` and `resume.png` are actual generated-page captures. `browser-results.json`, `pdf-results.json` and `lcp-results.json` contain current compact results. Raw browser/lab logs are ignored. Product screenshot and walkthrough capture provenance is in `../visuals/`; original artwork hashes remain enforced.

## Release boundary and limitations

This is a local/PR change. The owner will review and merge; no merge, deployment or DNS action is authorized here. Git-triggered deployment remains disabled. Existing production-host checks from the earlier release do not verify these changed pages.

After an authorized release, verify actual HTTPS/host redirects, statuses/headers, crawler access, assets/PDF and social previews. Search Console/Bing, field performance, email delivery and human screen-reader review remain owner or release follow-up tasks. Indexing and hiring outcomes are not guaranteed. The Skills and experience claims are supported by supplied résumé text; employer outcomes and current ASU status still require owner confirmation.
