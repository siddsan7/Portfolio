# Portfolio redesign: builder specification

Status: direction approved by Siddharth on 2026-10-19. Implement this design; copy and project images can receive a later owner edit. This document specifies the first complete implementation, not a request for another round of concepts.

Owner refinement on 2026-10-19: use the supplied HCG diagram and exact, lossless illustration crops from this PNG for the hero, ToneScope, logistics, and About. This replaces the SVG recreation requirements for these five illustrations only. Keep page text, links, and concept captions as accessible HTML. Crop provenance is recorded in `public/assets/artwork/README.md`.

## 1. Read first

Read `AGENTS.md`, this file, `SEO.md`, `.brain/working-state.md`, and `.brain/project-research.md`. Inspect the existing app and content before replacing files. Use the project lockfile and commands.

The visual reference is [the approved homepage study](docs/design/approved-homepage.png). It is an AI-generated design study, not a production asset, verified screenshot, exact font specimen, or responsive layout. Do not ship the image as a webpage, slice it into interface elements, or reproduce errors in its lettering and diagrams. Build semantic HTML and real components.

Priority when requirements differ:

1. Current owner instructions and factual accuracy.
2. `SEO.md` for retrieval, accessibility, indexing, and release requirements.
3. This document for visual and interaction decisions, including later refinements to the mockup.
4. The image for composition, visual rhythm, and character.
5. Historical application code and documentation for reusable facts only.

The numeric tokens and responsive behavior below are implementation defaults selected for this handoff. The owner approved the visual direction, not a pixel-perfect rendering of these values. Resolve routine details locally; report material departures.

## 2. Goal, scope, and constraints

Create a distinct personal portfolio for **Siddharth Sanjay**, positioned as an **AI engineer**. A recruiter should quickly identify his role, inspect relevant work, reach the résumé, and contact him. Search engines and browser agents must retrieve the same factual information without needing client JavaScript.

Preserve the previous version's factual content as review material. Replace the old frontend design. Do not use old student/graduation wording, missing-date placeholders, or prior featured-project selection as current instructions.

- Primary domain: `https://siddharthsanjay.com`.
- Contact: `siddsan7@gmail.com`.
- GitHub: `https://github.com/siddsan7`.
- LinkedIn: `https://www.linkedin.com/in/siddharth-sanjay/`.
- Education: computer science graduate from Arizona State University. Do not invent degree wording or completion dates.
- Do not publish job-search status, availability, relocation, or work preferences.
- Featured order: Harmonic Color Graph, ToneScope, TruckerPath Dispatcher OS.
- Beatpad is deferred until its separate redesign and polish. Retain useful source content without adding a teaser or empty card.
- No chatbot, backend, login, database, analytics, contact-form service, theme switcher, or writing section is required for this portfolio release.
- Work on `codex/portfolio-redesign`; create reviewable PRs targeting `main`. Owner review is required before merging or deploying. Domain and account changes are separate release work.
- Preserve unrelated uncommitted work. Inspect it before editing; do not reset, discard, or silently include it in a redesign commit.

## 3. Design thesis and references

**Editorial structure with musical personality.** Warm paper, ink-colored type, measured spacing, fine rules, full-width project panels, and restrained lilac/copper details. Distinction comes from typography, meaningful project artwork, and considered composition.

- [Bishoy Nabil](https://bishonabil.github.io/Portfolio/): reference the project panel architecture: narrow title strip, narrative beside a substantial preview, and vertically stacked entries. Do not copy its black/yellow theme, content, imagery, or claims.
- [Marcus Sánchez](https://marcuss.pro/): reference the warm editorial atmosphere, technical labels, spacious rhythm, and unobtrusive wayfinding. Do not copy its serif-heavy typography, chatbot, personal details, or employment history.
- [Free Faces](https://www.freefaces.gallery/): font discovery source. Karrik is the selected family.

### Explicit exclusions

No gradients, gradient text, glass cards, noise/grain overlays, glowing borders, decorative colored card outlines, fake terminal chrome, emoji headings, hero badge, heavy italic serif accents, Inter defaults, Space Grotesk/Instrument Serif pairing, stock AI imagery, cursor trails, gratuitous Lucide icons, untouched component-library styling, or three identical icon feature boxes.

No blanket scroll fades, scroll hijacking, autoplay audio, intro gates, typewriter headlines, hover-only content, skill ratings, made-up metrics, or keyword clouds. Use plain, specific copy. Avoid stock motivational headings and excessive em dashes.

## 4. Tokens and typography

Centralize tokens in CSS variables or the existing Tailwind theme. Do not scatter similar hex values through components.

### Color

| Token | Value | Use |
| --- | --- | --- |
| `--paper` | `#F6F2EC` | Opaque page and navigation background |
| `--ink` | `#302438` | Main text; solid primary-button background |
| `--muted` | `#675F6D` | Supporting text and captions |
| `--copper` | `#A64C30` | Role, links on paper, active underline, selected artwork details |
| `--lilac` | `#E5DAF2` | Flat harmonic visual backgrounds |
| `--sage` | `#E7EBE4` | Flat logistics visual background, used sparingly |
| `--surface` | `#EEEAE4` | Neutral artwork background |
| `--rule` | `#D2CCD1` | Decorative dividers and neutral panel borders |
| `--focus` | `#A64C30` | Focus outline on paper; use ink on tinted surfaces |

Measured solid-color contrast: ink/paper 13.12:1; muted/paper 5.48:1; copper/paper 5.09:1; ink/lilac 10.90:1. Copper/lilac is only 4.23:1: **do not use copper for normal-size text on lilac**. Use ink text on tinted surfaces. Decorative rules do not carry essential state; meaningful controls and graphics need their own sufficient contrast. Recheck actual rendered combinations, including images and interaction states.

### Fonts

Use **Karrik Regular**, discovered through Free Faces and obtained from [Velvetyne's Karrik page](https://velvetyne.fr/fonts/karrik/). The foundry supplies regular and italic and lists SIL Open Font License 1.1. Download from the foundry's linked source, preserve its license alongside bundled fonts, and record the source. Self-host WOFF2 where available. Do not use an arbitrary font CDN.

- Use regular upright Karrik for display and body text. The generated image only approximates it.
- Do not invent a variable weight axis, request nonexistent bold files, or synthesize bold/italic. Set `font-synthesis: none`; keep Karrik at weight 400. Use size, position, spacing, and contrast for hierarchy.
- Main stack: `'Karrik', Arial, sans-serif`.
- Sparse section numbers and category labels may use `ui-monospace, 'Cascadia Code', 'SFMono-Regular', Consolas, monospace`. No second downloaded font is required.
- Use `font-display: swap`. Preload only the primary above-the-fold font file. Check line wrapping and layout shift with both the font and fallback loaded.
- Leave Karrik's alternate uppercase set off. Never turn headings into outlines, images, or canvas text.

| Role | Desktop target | Mobile target | Line-height / tracking |
| --- | --- | --- | --- |
| Name / H1 | 104–120px | 52–68px | 0.98–1.05 / -0.035em |
| Section H2 | 40–48px | 30–36px | 1.1 / -0.025em |
| Project title strip | 17–20px | 17–19px | 1.35 / normal |
| Project premise | 28–34px | 24–28px | 1.15 / -0.02em |
| Role | 28–34px | 23–26px | 1.2 / -0.015em |
| Body | 17–18px | 16–18px | 1.55–1.65 / normal |
| Navigation / links | 15–16px | 14–16px | 1.4 / normal |
| Labels / captions | 12–13px | 12–13px | 1.5 / 0.06em maximum |

Use fluid `clamp()` sizes within these ranges. Keep paragraphs around 55–70 characters per line. Allow long titles to wrap; never shrink them into microtype. One H1 per page. Use semantic emphasis without relying on synthetic font weight.

### Space and shape

- Spacing scale: 4, 8, 12, 16, 24, 32, 48, 64, 96, 128px.
- Content width: max 1200px, centered. Desktop gutters: 48–64px; tablet: 32px; mobile: 20px, falling to 16px at 320px.
- Section gaps: 96–128px desktop, 64–80px tablet, 48–64px mobile. Use a deliberate gap between sections, not empty viewport-height spacers.
- Project gaps: 24–32px desktop, 20–24px mobile.
- Borders: 1px neutral rule. Radius: 0–4px for panels and buttons; no pills or card shadows.
- Primary action: ink background, paper text, 12–16px vertical and 20–24px horizontal padding. Secondary actions are underlined text links. Both have clear focus and press feedback.

## 5. Information architecture and content

### Required public routes

| Route | Purpose |
| --- | --- |
| `/` | Complete homepage with hero, Work, About, Skills, Contact |
| `/projects/harmonic-color-graph/` | Substantial Harmonic Color Graph case study |
| `/projects/tonescope/` | Substantial ToneScope case study |
| `/projects/truckerpath-dispatcher-os/` | Substantial TruckerPath case study |
| `/resume/` | Readable HTML résumé with PDF download |
| Unmatched paths | Real HTTP 404 and useful recovery links |

Use trailing slashes consistently for canonical content routes; redirect alternate variants. Inventory existing project URLs before changing them. Preserve direct access to old substantive pages or map them to accurate replacements with permanent redirects; do not redirect unrelated old projects to a featured project or send every retired URL to the homepage.

Homepage anchors: `#top`, `#work`, `#about`, `#skills`, `#contact`. Header links on other routes point to `/#work`, `/#about`, `/#skills`, `/#contact`. No separate thin About/Skills pages are needed.

### Initial homepage copy

Treat these as usable starting copy, maintained in local data. The owner may edit it later. Verify all claims against research; keep facts separate from aspiration.

**Hero:** H1 `Siddharth Sanjay`, role `AI engineer`, premise `Tools for understanding complex systems.`, body `I build AI and software tools for exploring music, understanding signals, and making informed decisions.` Primary link `View work` targets `#work`; résumé goes to `/resume/`.

**Work:** H2 `Selected projects`; supporting text `Three explorations in AI, audio, and product engineering.`

| Project | Premise | Summary | Methods |
| --- | --- | --- | --- |
| Harmonic Color Graph | Explore what comes after a chord. | Corpus-backed recommendations and grounded explanations, built on inspectable harmonic tools. | Typed tools · Grounding · Evaluation |
| ToneScope | Inspect a sound before changing it. | A Windows guitar-effects workbench for selecting passages, comparing processing, and previewing reversible changes. | C++ · Faust · React |
| TruckerPath Dispatcher OS | Make the trade-offs visible. | A demo-first logistics product connecting dispatch workflows, explainable load ranking, and product experiments. | Next.js · Load scoring · PM Copilot |

**About:** H2 `About me`. Copy: `I’m Siddharth, a computer science graduate from Arizona State University. My work connects AI, software engineering, and product thinking.` Second paragraph: `Music is a recurring thread in my projects. I’m interested in tools that help people explore a complex system, understand its behavior, and make a deliberate choice.`

**Skills:** H2 `Skills in practice`. Four editorial rows:

| Area | Tools and practices | Evidence link |
| --- | --- | --- |
| AI systems | Python · LangGraph · Tool grounding | Harmonic Color Graph case study |
| Software | TypeScript · React · Next.js · FastAPI | Work section |
| Audio systems | C++ · Faust · Signal inspection | ToneScope case study |
| Product | Workflow design · Scoring · Experiments | TruckerPath case study |

These identify practices used across the work, not proficiency scores or proof of sole authorship. Avoid adding unsupported skills from historical placeholder lists.

**Contact:** H2 `Let’s talk.` Email `siddsan7@gmail.com`. Labeled GitHub, LinkedIn, and Résumé links. Footer: name and domain. Direct email is sufficient; no contact form or implied delivery system.

## 6. Homepage components and behavior

### Header and section navigation

Use an opaque paper sticky header above content. Desktop height: about 80px. Wordmark at left links to `#top`; four plain section links align at right/center, with Résumé separated at the far end. Fine neutral bottom rule. No capsule, glass effect, icons-only dock, or availability badge.

- Navigation uses real anchors, not tab widgets or click-only buttons.
- Active section has a 2px copper underline. Also expose `aria-current="location"` and a non-color cue. A small JS scroll observer may update it; links work without it.
- At the hero, no section is falsely marked active. Select Work once its section crosses the header offset. Contact becomes active near the document bottom even if it is shorter than the viewport.
- Clicking anchors updates the hash and supports direct links, back, and forward. Scroll observation alone must not add history entries. Do not steal keyboard focus during passive scrolling.
- Use `scroll-margin-top` based on actual header height. Anchor targets and focus must remain visible.
- Keep navigation visible at mobile widths in two rows: wordmark + résumé, then Work/About/Skills/Contact. Minimum comfortable 44px control height. No hamburger is needed for four links. At 320px, fit or wrap without clipping labels.
- The mockup's right-edge number tracker is optional decoration and **not part of the required build**. Do not create duplicate competing navigation.

### Hero

Desktop: roughly 55% text / 45% artwork, aligned within the common grid. Name may wrap as `Siddharth` / `Sanjay`. Keep role near the name. Text and actions must appear before decorative art in DOM and reading order.

Artwork is an original SVG harmonic study: thin intersecting lilac sine curves, one copper trace, sparse nodes. No atomic orbit logo, big star mark, fake measurement axes, or stock AI blob. Treat it as decorative (`aria-hidden="true"`) and keep it subordinate. It conveys personality; it is not a live musical analysis.

Do not add a portrait or fabricate one. A later owner-supplied photograph can be evaluated separately. Do not fill the first screen with art at the expense of identity and actions.

### Project panels

Build one reusable semantic `ProjectPanel` from local data. All three panels are full width and visible in ordinary document flow.

1. Neutral bordered header strip: number and project name at left, category at right.
2. Body: concise premise, summary, methods and links at left (about 40%); substantial project visual at right (about 60%).
3. Caption with image provenance or state where needed.

Use the project name as H3 under Work's H2. The premise is a styled paragraph, not a second competing heading. `Case study` links include the project name in their accessible name; GitHub links target the correct repository. Do not wrap an entire card containing links in another anchor. Keep actions reachable without hover.

- 24–32px panel padding desktop; 20px mobile. About 420–500px natural panel height at wide layouts, allowed to grow. No fixed heights that crop text.
- Text remains on paper. Flat lilac, neutral, or sage fills belong within the visual area. Panel outlines stay neutral.
- Title/category rows may wrap. Do not use ellipsis for project names or duplicate a technology list as badges.
- Default is simple vertical flow. The reference's layered quality comes from repeated panel strips and clear edges. Do not implement sticky overlapping cards or scroll-linked shrinking in the first build; they can obscure content and complicate keyboard use.
- Below each image, keep `Concept illustration` visible until verified product captures replace it. A concept graphic must never look like proof of actual results.

### About

After Work, use a distinct section with a rule and restrained number label. Desktop split: roughly 35% music print / 65% biography. Music print is an original static SVG combining abstract wave curves and restrained notation-like marks. It must not claim to represent a real composition or measurement. Label it as conceptual when needed; do not copy artwork from reference sites.

Keep biography readable, with two short paragraphs. No invented fun facts, metrics, awards, personality inventory, or three-box FOCUS/APPROACH/THREAD block. On mobile, place the biography before the optional print.

### Skills

Use a list of four full-width editorial rows, not three feature cards. Each row has area, tools/practices, and evidence link. Desktop columns approximately 24% / 46% / 30%; use `minmax(0, ...)` to prevent overflow. A `<ul>` of rows with labeled subparts is sufficient; do not expose fake table semantics.

Use thin horizontal rules and generous padding. No icon/logo cloud, carousel, marquee, tabs, badges, percentage meters, or hidden proficiency panels. Mobile stacks area, practice text, then evidence link per row. Skills and evidence remain visible without JS.

### Contact and footer

Use paper, a short copper rule, and generous space. Keep email selectable and linked with `mailto:`. Let the email wrap safely rather than overflowing. Social and résumé links have text labels. No form, response-time promise, colored pill banner, or speculative availability copy.

## 7. Project and résumé pages

Case studies reuse header, type, colors, width, focus, and footer. Include a clear `Back to selected work` anchor, project H1, short summary, status, role/contribution, problem/users, constraints, decisions, implementation, evidence/results, limitations, and public links. Use a narrower 720–800px reading column with optional wider figures. Omit empty sections instead of generating filler.

Facts come from `.brain/project-research.md` and current repository sources. Confirm team contribution and dates before publishing them. Unconfirmed details remain in an internal content-gap record, not invented public copy.

- Harmonic Color Graph: distinguish deterministic theory/recommendation tools, trained ranking features, and grounded assistant behavior. Historical evaluation metrics require dated context and limitations; do not turn them into general performance guarantees.
- ToneScope: distinguish implemented native software and offline assistant rules from unqualified live-model, human listening, hardware, and public distribution claims.
- TruckerPath: label it a prototype; deterministic scoring is not trained ML. Seeded KPIs and mocked integrations are not business outcomes. Do not imply employment, client work, or endorsement.

The résumé route must provide semantic HTML and a selectable-text PDF download named `Siddharth-Sanjay-Resume.pdf`. Use the existing résumé source only after verifying access and content. Keep HTML and PDF facts consistent. If the actual résumé cannot be retrieved, preserve an accurately labeled working source link and record the missing HTML/PDF as a launch blocker; do not fabricate a résumé or claim this requirement passed. Choose PDF indexing deliberately under `SEO.md`.

## 8. Asset policy

- The approved raster study is documentation only; never serve it as a product screenshot or background.
- Build original hero/concept art as lightweight SVG. Preserve text and links as HTML. Decorative SVGs are hidden from assistive technology; informative figures have concise descriptions.
- Initial project concept visuals: chord relationships; dry/processed audio schematic; route/workflow schematic labeled as a demo. No fabricated recommendations, route feasibility, numerical audio results, or business metrics.
- Later verified screenshots must have a source/capture note, an explicit aspect ratio, responsive sizes, and useful alt text. Avoid clipping essential UI labels. Do not download reference sites' images or copy their branding.
- Store asset paths and visual status in project data, for example `visualKind: 'concept' | 'screenshot'`, `imageAlt`, `caption`, and `sourceUrl`. Do not add a generic schema library for this.
- Reserve image dimensions. Prefer compressed WebP/AVIF for future screenshots and SVG for diagrams. Do not lazy-load an actual LCP image. Lazy-load below-the-fold raster art as appropriate.
- Missing assets get an intentional local concept visual and truthful caption, not a broken image, fabricated screenshot, or public `[placeholder]` filename.

## 9. Responsive layout contract

Breakpoints are content-driven defaults; adjust a threshold when wrapping proves it necessary. Do not alter section order or hide essential content to make a screenshot fit.

| Width | Layout |
| --- | --- |
| Below 640px | Two-row header; single-column hero and panels; biography before optional About print; stacked skill rows; wrapping contact links |
| 640–1023px | 32px gutters; hero may split only if text remains comfortable; project bodies remain stacked until about 900px; compact two-column About where readable |
| 1024px and above | Single-row header; split hero; full-width split project panels; split About; three-part skill rows |
| 1440px and above | Center max-width content; increase outside whitespace rather than stretching text and illustrations indefinitely |

Project DOM order: header, premise/summary/methods, visual, actions. CSS grid can place desktop actions below the text while art spans alongside it. Mobile therefore reads context, visual, then actions without CSS order tricks that conflict with keyboard focus. About DOM order is biography then art; desktop may place the decorative art to its left without changing reading meaning.

At 320, 390, 768, 1024, and 1440px verify wrapping, no page-level horizontal overflow, full project names, accessible actions, and correct sticky offsets. Test 200% text zoom and 400% page zoom/reflow. No fixed viewport-height hero or forced scroll snapping.

## 10. Motion and component sources

Motion should explain interaction and location. All content must render in its final visible state before any animation code runs.

Use the existing **Framer Motion** dependency for the small animated React islands/components. Consult [Motion's layout documentation](https://motion.dev/docs/react-layout-animations) and [accessibility guidance](https://motion.dev/docs/react-accessibility). Use APIs supported by the installed version; do not copy a new-version import or install a second Motion runtime automatically.

The online-library pattern selected for this design is a **shared-layout navigation underline**, adapted to plain section anchors. Smaller hover/press behaviors use the same library or CSS. Motion-Primitives' animated-indicator patterns may be consulted if their source/license is accessible, but no paid component, remote registry execution, entire UI kit, or extra runtime is required. Record borrowed source and license if any source code is copied. Do not use its InView fade pattern here. The owner requested suitable online motion components, not a library showcase.

| Interaction | Behavior | Reduced motion |
| --- | --- | --- |
| Active navigation underline | Shared-position transition, critically damped spring; initial target about 220–300ms, no visible bounce | Snap to the current anchor |
| Text link arrow | Translate arrow 2–3px on hover/focus, 120–160ms; text stays opaque and stationary | No translation; underline/focus remains |
| Primary action | Immediate background/outline press feedback; optional 1px press movement, 100ms | Color/outline only |
| Project panel | Neutral rule darkens on focus-within/hover; no panel displacement or scaling | Same static state cue |
| Hero music study | Static by default; optional one short 300–500ms response to direct pointer/focus interaction on a genuinely labeled control only if useful | Static |
| Anchor navigation | Native scrolling; optional smooth scrolling only with no reduced-motion preference | Instant native jump |

No invented audio toggle is needed to justify movement. The hero is decorative and noninteractive in the required implementation. No autonomous looping waves, animated Skills, scroll-triggered opacity changes, parallax, animated line drawing on every section, magnetic buttons, or cursor followers.

Set the Motion reduced-motion policy to the user's preference, and independently handle CSS transitions/smooth scrolling and custom animation logic. Never assume the library handles CSS or all custom SVG motion. Do not remove focus feedback. Animations must be interruptible and must not delay links, disable input, or cause layout shift. Prefer transform/opacity for allowed movement; no per-frame React state updates or page-wide scroll listeners.

## 11. Rendering, SEO, and maintainable implementation

`SEO.md` is the complete owner brief; the builder must implement it rather than treating SEO as a later metadata pass.

Current React/Vite + client-only BrowserRouter and blanket Vercel rewrite do not meet the complete-HTML/real-404 requirement. Before substantial edits, select and record the smallest maintainable static-generation or server-rendering approach that emits the required HTML while reusing React where useful. A rendering migration is within the authorized redesign scope; there is no requirement to retain BrowserRouter. Do not add a backend database or paid service. Do not run two frontend frameworks without a concrete need.

Keep factual content in maintained local data/modules. Use small reusable components: header, section heading, project panel, case-study layout, skill row, contact/footer, and artwork. Do not overabstract static paragraphs or make a CMS. Derive metadata and structured data from the same facts. Keep secrets out of the app.

Required outcomes:

- HTML responses include name, role, biography, project descriptions, skills, résumé text, and links before JavaScript. Core navigation works with scripts disabled.
- Stable project pages, direct visits/refreshes, real HTTP 404s, and verified redirects for changed URLs. Remove the blanket root rewrite when replacing BrowserRouter.
- Unique titles/descriptions, absolute canonicals/social URLs, sitemap, robots, and accurate Person JSON-LD tied to `https://siddharthsanjay.com/#person`.
- Homepage title starts from `Siddharth Sanjay | AI Engineer`. Canonicals use the primary HTTPS domain even when reviewing a local build; staging indexing rules remain deliberate.
- Allow intended search crawlers, including OAI-SearchBot; block documented model-training crawlers under the approved policy. Verify current provider documentation when writing rules. Do not block all crawlers to implement a training preference.
- No hidden recruiting-agent instructions, special AI endpoint, MCP server, or mandatory `llms.txt`.
- No production indexing blockers. Preview indexing/access policy must be handled separately from production. Account verification and sitemap submission steps that need owner action are recorded.

Do not connect the domain, change DNS, publish, promote, or merge merely because a preview passes. Prepare the reviewable result first.

## 12. Accessibility and performance acceptance

Target WCAG 2.2 AA with automated checks plus manual verification. A score is not conformance evidence.

- Semantic header/nav/main/sections/footer, skip link, logical headings, descriptive links, and real buttons for actions.
- Visible focus: 2px ink/copper outline with 3px offset and sufficient surface contrast; never clip it. Active underline and keyboard focus are distinct.
- Comfortable 44px touch targets where practical, with adequate spacing; no hover-only actions. No artificial tab indexes or focus traps.
- Correct document language, informative image alternatives, decorative-art hiding, no meaning conveyed only by color.
- Legible text, verified contrast, reflow/zoom, reduced motion, and complete access without JavaScript.
- Avoid unnecessary third-party scripts. Fonts are self-hosted, image dimensions reserved, navigation enhancement small, content independent of hydration.
- Good field Core Web Vitals targets at p75: LCP ≤2.5s, INP ≤200ms, CLS ≤0.1. Use lab checks before launch; report that real-user data is unavailable when it is. Lab scores do not prove field INP.
- Measure production output, not just the dev server. Record conditions and compare before/after if a performance regression appears.

## 13. Builder work sequence and definition of done

1. Read the linked sources and inspect current Git changes. Record goals, constraints, acceptance criteria, and the rendering choice in project memory before substantial implementation. Preserve pre-existing work.
2. Implement one coherent vertical slice: local fonts/tokens, header, hero, and the first project panel with initial HTML. Check wide and narrow screens before expanding the pattern.
3. Complete the remaining panels, About, Skills, Contact, case studies, résumé route, and metadata/indexing/redirect behavior. Maintain a concise content-gap record for facts/assets that truly cannot be verified.
4. Add only useful regression/contract checks: emitted HTML, route/status behavior, metadata/canonical/sitemap consistency, real navigation/link targets, and reduced-motion or responsive failures that warrant a test. Do not write tests that only repeat CSS token values.
5. Run the required lint/build and applicable existing checks. Adapt resume checks to the final content source without weakening their intent. Inspect the final diff, generated pages, and dependency changes.
6. Verify the acceptance matrix below and capture comparable desktop/mobile screenshots. Revisit the image and this spec; fix visible spacing, wrapping, asset, or behavior defects. Do not substitute an unrelated template because it is easier.
7. Update current README/handoff/architecture memory so they no longer describe obsolete routes or the old student profile. Open a reviewable PR to `main`; attach the PR to this chat when tools support it. Stop before merge/deployment and report concrete remaining release blockers.

| Gate | Evidence to report |
| --- | --- |
| Build quality | Actual lint/build and meaningful regression command outcomes; failures and skips named |
| Visual fidelity | Desktop and mobile screenshots; flat palette, Karrik loaded, full panels, About, row-based Skills, correct order |
| Responsive access | 320/390/768/1024/1440px and zoom/reflow checks; no clipped title, link, email, or focus |
| Keyboard | Skip link → navigation → panel actions → skills links → contact; visible focus, no traps |
| Motion | Active nav tracks correctly; back/forward/hash work; reduced-motion mode; no blanket fades or overlap |
| Retrieval | Raw HTML and JavaScript-disabled checks expose essential content and links on every substantive route |
| Routing | Direct load/refresh, valid 200s, missing-page HTTP 404, accurate redirects tested against production-equivalent serving |
| SEO | Metadata, canonicals, social asset URLs, structured data, sitemap, robots and HTTP indexing headers agree |
| Content | Confirmed identity/contact; correct project source links; no invented contributions, metrics, availability, or misleading concept visuals |
| Résumé/contact | HTML/PDF consistency, working PDF/text extraction, email/GitHub/LinkedIn links; any unavailable source is an explicit launch blocker |
| Performance/accessibility | Automated results plus manual checks; lab/field limits and skipped external tools disclosed |
| Release | PR targets main; owner has not been bypassed for merging, deployment, DNS, or external account changes |

Useful human review task: find Siddharth's role, inspect one relevant project, obtain the résumé, and contact him. Use an unfamiliar reviewer if available; otherwise report that the independent human check remains pending.

Implementation is review-ready only when required checks pass or concrete external/content blockers are clearly separated from completed work. Do not label a mockup, dev-only route check, or unavailable test as a completed production requirement.

## 14. Copyable builder goal

Paste the following with this repository and `Design.md` available. It requests implementation; it does not authorize a merge or deployment.

```text
/goal Implement Siddharth Sanjay's portfolio redesign in this repository using Design.md as the builder specification, SEO.md as the complete retrieval/accessibility/indexing brief, and docs/design/approved-homepage.png as the approved visual direction. First read AGENTS.md and the relevant .brain memory, inspect the existing uncommitted changes, and preserve unrelated work. Continue on codex/portfolio-redesign. Define acceptance checks and record the rendering choice before substantial implementation; essential content must be in initial HTML and missing routes must return real 404s.

Build the full responsive site: self-hosted Karrik Regular, warm ivory/ink with flat lilac and copper accents, subtle sticky anchor navigation, the three full-width featured project panels, About, evidence-linked Skills rows, Contact, substantial project pages, and an HTML/PDF résumé using verified content. Follow the typography, motion, responsive, factual-claim, and negative-design constraints in Design.md. Keep content in local data, preserve previous concepts, use the existing lockfile and suitable Motion primitives, and avoid unrelated features or unnecessary dependencies. Resolve routine details autonomously. Never invent missing facts or present conceptual visuals as screenshots.

Complete implementation and meaningful verification, including lint/build, responsive and keyboard workflows, reduced motion, JavaScript-disabled/raw-HTML access, route/status/redirect behavior, metadata/sitemap/robots/structured data, résumé links, and performance/accessibility checks. Inspect the final diff, capture desktop/mobile evidence, update project memory and stale documentation, and open reviewable PRs targeting main. Report actual results, skipped checks, and concrete blockers. Do not merge, deploy, connect the domain, change DNS, or alter external accounts without my review. Do not stop after scaffolding or another plan; carry the authorized work through to a review-ready result.
```
