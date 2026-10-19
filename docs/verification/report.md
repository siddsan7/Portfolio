# Redesign verification report

2026-10-19. Local production build on Windows with Node 24, headless Microsoft Edge, Playwright, axe-core and Lighthouse. Audit packages are outside application dependencies. Source requirements: Design.md, SEO.md, approved homepage study, project research and owner-supplied résumé. Owner confirmed sole project authorship and waived dates.

## Completed evidence

- Complete static HTML for home, three case studies and résumé, plus six noindex archives and a useful missing-path 404 page. Core content and native navigation work without JavaScript.
- Lint/build pass, the earlier merged baseline also passed an isolated committed export with npm ci from the unchanged lockfile; 185 static assertions cover route statuses/refresh, links/assets, raw content, distinct metadata, canonical/social/schema consistency, archives, sitemap, robots, PDF, slash/index aliases, and query-preserving www redirects. Preview-build noindex check passes on all five public routes and restores production output.
- 25 route/width combinations at 320/390/768/1024/1440px: no horizontal overflow or clipped links. Also checked enlarged text at 200% on 320px and 400% reflow equivalent at 320 CSS pixels. This is a programmatic reflow check, not an assertion that every browser's zoom UI was manually exercised.
- Keyboard and passive navigation: skip link first, Enter focuses main, 32 tab stops retain visible outlines, no trap. Native anchor/hash/back/forward and hero no-active-state checks pass. Contact becomes active at document bottom; Skills can resolve there on a tall viewport when the page cannot scroll farther.
- Reduced motion: browser emulation, snapped nav indicator and disabled CSS translation; standard shared-layout indicator also checked. Content starts visible with no scroll reveals or autonomous artwork motion.
- No-JavaScript: all five pages have visible headings; work anchor and case-study navigation work.
- axe: 12 scans (five main pages and 404 at 390/1440px), zero violations for WCAG 2 A/AA, 2.1 AA and 2.2 AA tags. Contrast items needing manual review are retained in browser-results.json; rendered palette combinations are checked separately. Manual contrast review confirmed 4.55:1 or better for sampled body/caption text and 13.12:1 for navigation. Remaining axe contrast incompletes concern non-text arrows; the original illustrative labels are now within the exact raster artwork. Essential explanations and methods remain accessible HTML. Automated checks do not prove WCAG conformance.
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
| LCP | 0.4 s | 2.0 s |
| FCP | 0.3 s | 0.9 s |
| Total blocking time | 0 ms | 10 ms |
| CLS | 0 | 0 |

The previous artwork-preserving baseline measured mobile LCP 2781 ms/performance96. A three-run gate now measures 1958, 1955 and 1805 ms. Every run is below 2500 ms; the separate full-category mobile audit also passes at 2.0 s. The gate asserts the recorded default mobile throttling, simulation method and viewport are unchanged. Desktop uses Lighthouse's desktop preset. Local serving includes gzip/cache headers to approximate static hosting; these are lab results, not field p75 measurements or live-domain guarantees. TBT does not establish field INP.

The initial script shrinks from about 318KB raw/102KB transferred to a 2.12KB raw/1.05KB gzip bootstrap. CSS remains immediate. Once eager resources, the font and hero decode are ready, two animation frames allow an artwork frame to paint before the optional React/Motion navigation module downloads. Native links and all content are already usable. A load-event-only prototype was inconsistent (two runs near 2.9s); it was replaced, not accepted as passing. No arbitrary timer, user-agent gate, artwork change, hidden content, or altered throttle is used. Remaining diagnostics include total unused navigation code, cache/image-delivery suggestions and critical-resource advice.
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

Clean-export verification caught and fixed a CRLF-sensitive robots check. Directive values remain checked exactly after line-ending normalization. The isolated export passes lint/build and all 176 static assertions without pre-existing uncommitted files.

## Owner-selected artwork and integrity

The current site uses the owner's HCG illustration and exact approved PNG crops for hero, ToneScope, logistics and About. All five lossless WebP outputs were compared as decoded pixels against their source regions, with exact equality. Sources/crop rectangles are in public/assets/artwork/README.md. The LCP optimization preserves the artwork bytes recorded before the work in artwork-integrity.json; static contracts check every SHA-256. Explicit dimensions, descriptive project alternatives and visible HTML concept captions remain in place.

The approved study and supplied HCG source are unchanged. The commit includes this previously approved local artwork revision plus the performance fix. Original council sign-offs concern the preceding redesign baseline; the new performance PR receives a fresh review before the owner-authorized merge. Deployment/DNS remain unapproved.
