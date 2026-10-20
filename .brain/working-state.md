# Working state

Updated: 2026-10-20.

## Active objective and boundary

Implement the hiring review, independently review with hiring/frontend/evidence agents, resolve findings, and push a structured PR. The owner will review and merge. Do not merge, deploy or change DNS. Branch: `codex/portfolio-hiring-refresh`, based on current origin/main `81889fee884446481897af30da98cdab06238093`.

## Owner preferences

AI engineering is the primary focus; music is a recurring problem domain. No availability/job-search language. Featured order: HCG, ToneScope, Dispatcher. All three are individual projects; owner waived project dates. Keep Skills link-free and retain supported existing technologies. About includes learning/hobbies and the owner's LinkedIn portrait. Use authentic product screenshots on case studies and sharp concepts on homepage panels. Do not invent impact or seniority.

## Implementation and evidence

Active site is `src/redesign`, statically rendered with an optional hydrated navigation island. Experience from the supplied résumé appears before projects. `caseStudies.js` owns pinned evidence, architecture flows, decision stories and guided walkthroughs. `calculator.js` progressively enhances one explicitly illustrative Dispatcher formula; core content, native links/details and source example work without JavaScript. Details in architecture.md and docs/hiring-refresh.md.

HCG remains a historical October 2 report: 40 structural cases, intent9/12, mixed10 median7.25s, recommendation10 median10.73s against8s,12/40 fallbacks. Another chat owns HCG remediation. No source edits or paid evals were made here. Handoff: docs/handoffs/hcg-reliability-and-latency.md.

ToneScope commit1c32a38 reports authored deterministic development tasks15/24→24/24 and compression16/16 versus unchanged1/16. Model records were blocked; no live-model claim. Actual isolated native capture observes Output0→+2→0dB and exact full-control restoration. Authentic screenshot source/conditions are in docs/visuals/tonescope-walkthrough-capture.md. No paid model/hardware playback claim.

Dispatcher commit0a4eb4e implements eight-factor deterministic ranking, seven authored scoring tests and seeded$1455 source example. Booking is simulated. Optional Gemini PM Copilot is separate; fallback checks cover JSON/required fields, not full semantic validation. Calculator demonstrates one cost assumption rather than the full ranking.

## Review and checks

Fresh hiring reviewer would interview for early-career applied AI; no blocking copy finding. Frontend reviewer inspected source/fresh captures and found no material blocker; separate browser launch failed in sandbox, so its interaction verification is not independent. Evidence reviewer checked all17 distinct source paths and metrics at immutable commits. Findings addressed: actual calculation scope, narrow provider-validation wording, visible input ranges/precision, field errors/reset, mobile table-scroll hint, current verification narrative, and separate capture provenance citation.

Main checks: lint/build;217 static assertions; preview noindex/production restore;25 route-width layouts; all5 routes at200% text/320px; native details/fullsize captures; calculator source/change/error/range/precision/reset/Enter; keyboard/history/reduced-motion/no-JS;12 axe scans with zero violations; two-page PDF46 text items/seven links. Final LCP and clean-tree results belong in docs/verification/report.md and docs/hiring-refresh.md after completion.

A browser regression caught reset timing: reset event default action occurs after listeners/microtasks. Deferred update must run after native reset; test waits for the validation state as well as the output (output resets natively first). No weakened checks.

## Preservation and release

Eighteen unrelated legacy files are preserved byte-for-byte against ignored output/hiring-refresh-baseline/legacy-hashes.json. Do not stage legacy index.html, App/components/pages/profile changes, scripts/check-resume-links.js, public/favicon.svg or earlier untracked summary components. Related prior authorized photo/copy/visual work belongs in this PR.

Existing production was released separately at main81889fee on siddharthsanjay.com (apex/www TLS and redirects verified previously). Those live checks do not verify this change. Git-triggered deployment remains disabled. After owner review/merge and separate release authority, check live statuses/metadata/headers/assets, redirects and field behavior.

Owner evidence gaps: SkipCourse ownership/approved measured outcomes/deployment scope; ASU current status and concrete mentoring example; production responsibility/leadership for higher seniority; Search Console and field performance; human screen-reader checks. Do not fabricate them.

## Next action

Complete final performance/clean-tree checks, cite capture provenance at an immutable Portfolio commit, push and attach the PR, inspect its final diff/status, then mark the goal complete. Preserve raw useful native snapshots before archiving the managed capture worktree.
