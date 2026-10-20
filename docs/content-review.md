# AI engineering copy review

## Goals and acceptance criteria

Lead with AI engineering while keeping music as a recurring application domain. Use only owner-supplied personal details and skills supported by the existing repository research. Preserve existing project skills, add relevant technical skills, rename Selected projects to Featured projects, and remove project links from the Skills section. Each case study must explain a decision and point to implementation or evaluation evidence. Do not present historical repository results as current independent measurements.

The original text pass is now included with the owner's photo, product screenshots and hiring refresh. See `hiring-refresh.md` for current acceptance and review results. No deployment or merge is included.

## Shared case-study format

1. Overview: project name, engineering premise, summary, technical skills, status, and repository.
2. The problem: user need and relevant constraints.
3. My contribution: ownership and implemented scope.
4. Evidence at a glance: results, distinct denominators, conditions and limits, with pinned citations.
5. Architecture: components, ordered data flow, and failure boundaries.
6. A consequential decision: constraint, alternative, choice and consequence.
7. Guided walkthrough: authentic observed output or a clearly scoped source example.
8. Current scope: implemented capability and unresolved qualification.
9. Source evidence: immutable links to implementation and supporting documentation.

Use this format for future case studies too. Screenshots should demonstrate the workflow or decision discussed in the text. Add a caption with the visible behavior and whether the capture uses demo data.

## Flagged findings for owner review

These findings come from `.brain/project-research.md`, reviewed on October 19, 2026. This text pass did not rerun the featured applications or their evaluations. They remain accurately scoped in the case studies until addressed. Remove a finding only after new evidence resolves it; keep necessary prototype and measurement context.

| Project | Finding | Evidence needed to resolve it |
| --- | --- | --- |
| Harmonic Color Graph | Historical intent match is 9/12 intent-scored cases (75%), within a 40-case benchmark; the recommend-only median is 10,734 ms against an 8,000 ms target. Twelve of 40 responses used labeled fallbacks. | Reproduce the recorded evaluation, improve the relevant behavior, and publish comparable results with the evaluation date and sample scope. |
| Harmonic Color Graph | Structured correctness does not establish current production readiness or musical usefulness. | Current operational checks and a defined usefulness evaluation with musicians. |
| ToneScope | Default assistant supports deterministic level adjustment; live-provider quality is unevaluated. | Evaluate the provider against defined audio tasks and unsupported requests before expanding the AI capability claim. |
| ToneScope | Licensing/signing, clean-machine, hardware, and human qualification remain open. Numerical tests do not establish listening quality, hardware latency, or accessibility. | Document the applicable release checks and actual hardware, listening, and accessibility results. |
| Dispatcher OS | Seeded KPIs, simulated booking, and mocked integrations demonstrate a prototype rather than measured business impact. | Real integration and outcome evidence before claiming adoption or impact. Keep the independent-project disclosure. |
| Dispatcher OS | Rule-based ranking and proposed experiments do not establish trained-model performance or experiment success. | A separately evaluated learned model or completed experiment, if those claims become relevant. Rule-based ranking is a valid design choice. |

The revised copy puts these boundaries in a neutral Current scope section and explains the positive engineering decisions through concrete mechanisms. It does not hide failed targets or imply that prototype data are real outcomes.

## Visual follow-up

Completed in the subsequent visual pass: the About portrait uses the owner's LinkedIn photo, and all three case-study illustrations use actual product screenshots. See `docs/visuals/README.md` for provenance, captions, and validation. The list below records the original capture brief.

- About: use an owner-selected portrait.
- Harmonic Color Graph: capture recommendation ranking and an explanation linked to tool evidence.
- ToneScope: capture passage selection, measurements, and preview/accept/undo.
- Dispatcher OS: capture ranking factors and the copilot experiment workflow; label demo data.
- Replace case-study concept illustrations with actual application captures. Do not use generated images as product evidence. The prior research found no screenshot/video assets in the reviewed repository trees.

## Checks

Run lint, production build, static route/link contracts, and preview indexing checks. Check the longer copy at mobile, tablet, and desktop widths, including narrow reflow and visible keyboard focus. Review the final diff and retain unrelated pre-existing edits.

Completed October 19, 2026: lint and build passed; 184 static assertions across five routes passed; preview indexing checks passed and restored production output. Browser checks passed 25 route/width combinations (320, 390, 768, 1024, 1440 px), keyboard focus/navigation, no-JavaScript access, and 200% text at 320 px. Twelve axe scans reported zero violations. Longer words and action links initially overflowed at enlarged text size; wrapping was corrected and the browser suite passed. Desktop and mobile captures were visually inspected.

The regenerated résumé passed 42 text checks and seven canonical/contact-link checks and remains two pages. Social preview text matches the homepage. The mobile performance gate passed all three cold lab runs: LCP 1,806.15 / 1,805.22 / 1,804.84 ms against the existing 2,500 ms threshold; CLS 0; performance score 100. These are local lab results, not field Core Web Vitals. See `docs/verification/browser-results.json`, `pdf-results.json`, and `lcp-results.json` for compact evidence. No current desktop Lighthouse run or human screen-reader audit was performed.

Independent copy review found no blocking unsupported claims or format inconsistencies against the existing project research. The final diff passed whitespace checks. No project evaluations, production deployment, or merge were performed.
