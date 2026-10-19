# Redesign verification report

2026-10-19. Local production build on Windows with Node 24, headless Microsoft Edge, Playwright, axe-core and Lighthouse. Audit packages are outside application dependencies. Source requirements: Design.md, SEO.md, approved homepage study, project research and owner-supplied résumé. Owner confirmed sole project authorship and waived dates.

## Completed evidence

- Complete static HTML for home, three case studies and résumé, plus six noindex archives and a useful missing-path 404 page. Core content and native navigation work without JavaScript.
- Lint/build pass, including an isolated committed export with npm ci from the unchanged lockfile; static contracts cover route statuses/refresh, links/assets, raw content, distinct metadata, canonical/social/schema consistency, archives, sitemap, robots, PDF, slash/index aliases, and query-preserving www redirects. Preview-build noindex check passes on all five public routes and restores production output.
- 25 route/width combinations at 320/390/768/1024/1440px: no horizontal overflow or clipped links. Also checked enlarged text at 200% on 320px and 400% reflow equivalent at 320 CSS pixels. This is a programmatic reflow check, not an assertion that every browser's zoom UI was manually exercised.
- Keyboard and passive navigation: skip link first, Enter focuses main, 32 tab stops retain visible outlines, no trap. Native anchor/hash/back/forward and hero no-active-state checks pass. Contact becomes active at document bottom; Skills can resolve there on a tall viewport when the page cannot scroll farther.
- Reduced motion: browser emulation, snapped nav indicator and disabled CSS translation; standard shared-layout indicator also checked. Content starts visible with no scroll reveals or autonomous artwork motion.
- No-JavaScript: all five pages have visible headings; work anchor and case-study navigation work.
- axe: 12 scans (five main pages and 404 at 390/1440px), zero violations for WCAG 2 A/AA, 2.1 AA and 2.2 AA tags. Contrast items needing manual review are retained in browser-results.json; rendered palette combinations are checked separately. Manual contrast review confirmed 4.55:1 or better for sampled body/caption text and 13.12:1 for navigation. Remaining axe contrast incompletes concern non-text arrows and decorative SVG labels: paper/ink and ink/tinted surfaces have sufficient contrast; no essential information depends on those graphics. Automated checks do not prove WCAG conformance.
- PDF: 2 pages, selectable text; all 36 expected source text items/experience bullets match; all 11 web/contact annotations use canonical HTTPS or mailto. No local URLs. Website/email anchors are clickable. HTML and PDF share data. HTML résumé is indexable; PDF has noindex HTTP policy.
- Source links and owner contact values are exact. No email was sent. LinkedIn's authenticated experience and email delivery were not tested.
- Three independent council reviews and rechecks passed. See council-review.md for concrete findings and fixes.

## Lab performance

| Lighthouse category/metric | Desktop | Mobile |
| --- | --- | --- |
| Performance | 100 | 99 |
| Accessibility | 100 | 100 |
| Best practices | 100 | 100 |
| SEO | 100 | 100 |
| LCP | 0.4 s | 1.8 s |
| FCP | 0.4 s | 1.5 s |
| Total blocking time | 0 ms | 0 ms |
| CLS | 0 | 0 |

Desktop uses Lighthouse's desktop preset; mobile uses its standard simulated mobile network/CPU profile. Local serving includes gzip and cache headers to approximate static hosting. Earlier uncompressed local output measured mobile LCP 3.0s/performance90; compression improved the comparable final mobile run. An initial desktop measurement accidentally used mobile throttling and is not a valid desktop comparison. No production performance claim follows from these local measurements. Remaining diagnostics include unused navigation JavaScript, critical-resource/render-blocking advice, cache policy and local browser back/forward-cache instrumentation. No field traffic exists here to measure p75 LCP/INP/CLS; zero TBT does not establish field INP.

## Evidence files

- desktop.png, mobile.png: final full-page homepage captures at 1440px and 390px.
- case-study.png, resume.png: actual generated pages.
- browser-results.json: layout/keyboard/navigation/no-JS/axe/contrast/lab summaries.
- pdf-results.json: text count and actual link annotations.
- Full lab logs are ignored in .build; temporary source/download/initial captures are outside the repository.

## Indexing and policy

Canonical domain is https://siddharthsanjay.com. Sitemap includes only the five current indexable HTML pages; no artificial lastmod. Missing pages and archives are noindex, PDF indexing is deliberately excluded, production HTML remains indexable, and preview builds are noindex. Host-level preview access protection remains an owner release task.

Robots allows Google/Bing/search crawlers including OAI-SearchBot; GPTBot and ClaudeBot are denied under the approved training policy. Checked against official provider documentation on 2026-10-19: https://developers.openai.com/api/docs/bots and https://support.claude.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler. These are voluntary crawler controls, not privacy enforcement or inclusion guarantees. No special agent endpoint or llms.txt is required.

Motion API guidance checked at https://motion.dev/docs/react-layout-animations and https://motion.dev/docs/react-accessibility; no third-party component source was copied. Karrik credit/license/source is beside the font. Vercel automatic deployment suppression follows https://vercel.com/docs/project-configuration/git-configuration#git.deploymentenabled.

## Remaining release checks

No deployment, promotion, domain connection or DNS change was performed. Git-triggered Vercel deployment is disabled. The owner authorized merging after council review; release approval remains separate.

Local strict serving is production-equivalent in page structure and status intent, not a verified Vercel deployment. After owner-authorized release, verify HTTPS, www/alternate hosts and query preservation, direct/refresh/404 statuses, Vercel headers, staging protection, crawler/firewall access, absolute social assets/PDF and actual social unfurls. Search Console/Bing verification and sitemap submission require owner accounts. Human recruiter and screen-reader reviews remain pending. Current concept graphics are truthful illustrations; verified product screenshots can be added later without blocking this implementation.

Clean-export verification caught and fixed a CRLF-sensitive robots check. Directive values remain checked exactly after line-ending normalization. The isolated export passes lint/build and all 167 static assertions without pre-existing uncommitted files.
