# Working state

Updated: 2026-10-19.

## Goal and owner decisions

Rebuild the portfolio for recruiter, search, and browser-agent access. Keep previous factual content as review material; replace frontend design and rendering architecture as needed. Work on codex/portfolio-redesign; open PRs to main. The owner now explicitly authorizes merging this redesign after independent council review; deployment and DNS still require owner review. Existing uncommitted work predates the redesign and must be preserved.

- Name: Siddharth Sanjay. Graduate; primary positioning: AI Engineer. Adjacent interests: AI Product Engineer, Software Engineer, Product Manager.
- Do not publish job-search or availability language.
- Domain: siddharthsanjay.com. Contact: siddsan7@gmail.com. Vercel domain setup remains pending.
- Featured order: HarmonicColorGraph, ToneScope, truckerpathpm. Beatpad follows only after its separate redesign/polish.
- Allow intended search crawlers; block documented model-training crawlers. Verify provider rules during implementation.

## SEO and design constraints

Owner supplied a 14-section SEO brief on 2026-10-19. Source attachment: C:/Users/sidds/.codex/attachments/37f33b3d-6243-470d-a65e-53db66f81b5b/Pasted text.txt.

Core requirements: factual identity and evidence; recruiter-readable homepage; substantial project URLs; HTML resume plus selectable-text PDF; initial HTML containing essential content and usable links without JavaScript; true 404s; canonical HTTPS domain and redirects; unique metadata/social previews; sitemap/robots; accurate Person JSON-LD; deliberate search/training policy; WCAG 2.2 AA target; good Core Web Vitals targets with lab/field distinction; working contact/resume; launch evidence and owner review. No fabricated metrics, hidden agent instructions, mandatory llms.txt, empty pages, or ranking guarantees.

## Design exploration decisions

Owner approved the latest contemporary editorial/resonance mockup and requested Design.md plus a copyable builder /goal prompt. Keep prior concept pages/images accessible; do not replace or close them. Design.md is now the builder handoff. The approved study is preserved at docs/design/approved-homepage.png and the complete owner SEO brief at SEO.md.

References: https://bishonabil.github.io/Portfolio/ for large bordered, stacked project panels with title strips, narrative and large previews; https://marcuss.pro/ for warm paper, fine rules, numbered wayfinding and spacious editorial atmosphere. Both were visually inspected. Owner requests a longer page with About and Skills below projects, subtle top section navigation, a Free Faces font, and suitable motion/component library choices.

Owner's negative reference rejects generic gradient/purple-blue themes, gradient headlines, heading emoji, default Inter, colored-border cards, glass cards, poor contrast, three icon feature boxes, headline badges, excessive Lucide icons, untouched shadcn styling, blanket scroll fades, cursor beams, fading hover buttons, inconsistent spacing, heavy em-dashes/buzzwords, serif italic accents, Space Grotesk/Instrument Serif pairing, and grain-over-gradient backgrounds. Supersedes proposed blanket InView fades and three-column skills blocks. Use flat lilac fills with neutral rules, normal links, interaction-specific motion, and evidence-linked skill rows. Karrik is selected in Design.md; foundry confirms regular/italic only and OFL1.1, so do not synthesize bold. Static generated studies approximate fonts and do not validate animation behavior or accessibility. Measured copper/paper contrast is 5.09:1 but copper/lilac is only 4.23:1; use ink for ordinary text on lilac.

## Current implementation

The complete redesign uses build-time static React/Vite rendering and a hydrated navigation island. Five public routes, six noindex legacy archives, genuine missing-path 404s, metadata/social/canonical/Person schema/sitemap/robots, owner-selected concept illustrations, and a verified HTML/PDF résumé are implemented. See architecture.md and docs/verification/report.md.

Owner confirmed all three featured projects are entirely his and explicitly waived dates. Contribution sections now reflect this. The supplied résumé was publicly downloadable despite the Drive metadata connector returning 404. Its rendered page verified degree, May 2026 graduation, and three roles/dates. The clean concise HTML/PDF edition omits older unrelated projects and quantitative claims. Never interpret the PDF's duplicated source text layer as duplicate achievements.

Preserved unrelated pre-existing edits: index.html, scripts/check-resume-links.js, src/App.jsx, earlier components/layout/home/project/detail and src/pages files, src/data/profile.js, three earlier untracked summary components, public/favicon.svg. Their tracked diff was captured in TEMP/portfolio-redesign-baseline/tracked.patch; inventory in untracked.txt. Redesign source is separate. Design.md, SEO.md and approved image are related handoff inputs and belong with the implementation.

## Review and checks

Independent council reviewers covered design/UX, SEO/routing, and recruiter/content/accessibility code. Findings fixed: small concept captions/labels, duplicate anchor offset, archive social metadata, local PDF links, indirect Software evidence, and experiment-planning wording. All three signed off after re-review. Browser checks also exposed enlarged-text overflow; wrapping was corrected. A capture raced a build once and printed an error page; invalid artifacts were regenerated and HTTP/content guards added. No invalid capture is release evidence.

Final checks and measurements are recorded in docs/verification/report.md. No merge/deploy/DNS authority extends beyond the latest specific owner request. Git-triggered Vercel deployment is explicitly disabled to preserve the separate deployment review boundary.

## Next action

Implementation, evidence and independent council review are complete. PR status is tracked in GitHub and the chat attachment; this redesign is authorized to merge after the recorded council approval and final checks. The remaining next action is owner release review, not more design exploration. Preserve unrelated work unstaged. Do not deploy or change DNS. After owner-authorized release, verify actual host HTTPS, redirects, status/headers, access controls, social assets and crawler behavior, then owner Search Console/Bing account setup. Human/screen-reader checks and field Core Web Vitals remain separate launch/follow-up work.

Clean exported source passed npm ci/lint/build/contracts independently of pre-existing files. Normalize CRLF in text-file contract checks; the robots policy must still be checked exactly. Legacy diffs remained byte-identical after the redesign commit.

## Owner artwork revision
The owner prefers his supplied HCG diagram and explicitly selected exact crops from the approved PNG for all other illustrations. Production artwork now uses lossless crops with native width/height and concept captions; the previous vector approximations are removed. Sources/crop rectangles are recorded in public/assets/artwork/README.md. Preserve page layout, factual content, no-deployment boundary, and unrelated work. Verified lint/build, 176 static contracts, all five exact decoded source crops, 25 responsive cases, and 12 axe scans (zero violations). Updated desktop/mobile evidence is in docs/verification. Lossless WebP preserves pixels and reduces transfer size. Current mobile lab LCP is 2.8 s (above the 2.5 s target), performance 96; desktop performance 100/LCP 0.6 s; CLS 0. The owner subsequently authorized this artwork revision and its LCP fix to be committed, reviewed in a PR, and merged. Deployment remains disabled.

## LCP optimization plan
Owner requests mobile lab LCP below 2500 ms without artwork changes, then commit/PR/review/merge. Preserve all unrelated legacy edits; deployment remains disabled. Baseline and exact artwork SHA-256 values are recorded in docs/verification. Hypothesis: defer the nonessential React/Motion navigation download until eager resources finish; retain CSS and native HTML anchors from the initial response. Acceptance: three consecutive default mobile Lighthouse runs below 2500 ms, unchanged artwork hashes and layout, existing keyboard/reduced-motion/no-JS/static contracts, lint/build, independent PR review and authorized merge. Do not alter throttling or weaken the target.


## LCP verification result

Mobile LCP gate passed all three unchanged default-mobile runs: 1958/1955/1805 ms versus the 2781 ms baseline. Full-category audit: mobile 99 performance/LCP 2.0 s; desktop 100/LCP 0.4 s. All five artwork byte hashes are unchanged. Initial JS is 2.12KB raw; the optional navigation chunk starts after eager resources/font/hero decode and a painted frame. A load-only prototype was inconsistent and rejected. Static contracts enforce initial JS <5KB, no eager modulepreload, immediate CSS, and artwork integrity. Lint/build, preview indexing, 185 static assertions, 25 responsive cases, keyboard/history/no-JS/reduced motion and 12 axe scans pass. Next: commit, PR, fresh review and authorized merge; do not deploy or change DNS.
