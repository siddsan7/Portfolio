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

The complete redesign uses build-time static React/Vite rendering and a hydrated navigation island. Five public routes, six noindex legacy archives, genuine missing-path 404s, metadata/social/canonical/Person schema/sitemap/robots, original labeled concept SVGs, and a verified HTML/PDF résumé are implemented. See architecture.md and docs/verification/report.md.

Owner confirmed all three featured projects are entirely his and explicitly waived dates. Contribution sections now reflect this. The supplied résumé was publicly downloadable despite the Drive metadata connector returning 404. Its rendered page verified degree, May 2026 graduation, and three roles/dates. The clean concise HTML/PDF edition omits older unrelated projects and quantitative claims. Never interpret the PDF's duplicated source text layer as duplicate achievements.

Preserved unrelated pre-existing edits: index.html, scripts/check-resume-links.js, src/App.jsx, earlier components/layout/home/project/detail and src/pages files, src/data/profile.js, three earlier untracked summary components, public/favicon.svg. Their tracked diff was captured in TEMP/portfolio-redesign-baseline/tracked.patch; inventory in untracked.txt. Redesign source is separate. Design.md, SEO.md and approved image are related handoff inputs and belong with the implementation.

## Review and checks

Independent council reviewers covered design/UX, SEO/routing, and recruiter/content/accessibility code. Findings fixed: small concept captions/labels, duplicate anchor offset, archive social metadata, local PDF links, indirect Software evidence, and experiment-planning wording. All three signed off after re-review. Browser checks also exposed enlarged-text overflow; wrapping was corrected. A capture raced a build once and printed an error page; invalid artifacts were regenerated and HTTP/content guards added. No invalid capture is release evidence.

Final checks and measurements are recorded in docs/verification/report.md. No merge/deploy/DNS authority extends beyond the latest specific owner request. Git-triggered Vercel deployment is explicitly disabled to preserve the separate deployment review boundary.

## Next action

Complete final checks, inspect the staged diff and clean exported commit, open PR to main, attach it, then merge only after council sign-off and checks. Preserve unrelated work unstaged. Do not deploy or change DNS. After owner-authorized release, verify actual host HTTPS, redirects, status/headers, access controls, social assets and crawler behavior, then owner Search Console/Bing account setup. Human/screen-reader checks and field Core Web Vitals remain separate launch/follow-up work.
