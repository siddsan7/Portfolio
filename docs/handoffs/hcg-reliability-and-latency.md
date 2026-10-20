# HCG: diagnose and improve intent reliability and recommendation latency

Prepared October 19, 2026. This is a self-contained handoff from the portfolio review. It records source evidence and a proposed implementation workflow. It does not claim that new HCG fixes or live evaluations have been completed.

## User objective

Diagnose and improve Harmonic Color Graph's intent-match failures, slow recommendation completion, and reliance on explanation fallbacks. Produce reproducible before/after evidence that can support an accurate portfolio case study. Preserve deterministic harmonic analysis, evidence grounding, cost controls, and the working product.

The user asked whether the quoted evaluation results were good and how to improve them, then requested this handoff for the next agent. Start with local diagnosis and implementation within the destination project's current authorization. This document does not grant a new paid-evaluation budget or permission to merge, deploy, change production limits, or activate a corpus.

## First: select the correct checkout and current workstream

Known source checkout inspected during this review:

```text
C:/Users/sidds/OneDrive/Documents/GitHub/HarmonicColorGraph
```

The application is in `harmonic-color-graph/` beneath the Git root. All application paths below are relative to that directory unless stated otherwise. Public repository: https://github.com/siddsan7/HarmonicColorGraph.

Read Git-root `AGENTS.md`, `AGENTS.override.md` if present, and relevant project memory before editing. The inspected override is a managed resume packet, record r151. It names a different owner worktree:

```text
C:/Users/sidds/Documents/Codex/2026-09-26/to-create-my-own-unique-way/work/hcg-a04-prediction
branch: codex/m7-release-reconciliation
```

This is a historical pointer, not proof of the current owner or branch. The packet explicitly says to run this from the checkout before acting:

```powershell
python C:/Users/sidds/Documents/Codex/agent-workbench/tools/resume.py verify --repo .
```

Reconcile drift, current Git/PR/deployment state, and active ownership. Work in the current owner worktree when required. Do not duplicate an active workstream or overwrite unrelated changes. Do not treat the packet's unrelated corpus/key-analysis next action as this task. Preserve the separate frontend redesign.

## Verified historical baseline

Primary source: `docs/eval/ai-production-2026-10-02.md`.

This report concerns the October 1–2, 2026 production HTTP/SSE run, active corpus `cv-2026-10-b`, API revision `351a7db`. These are historical identities. Establish the current identities separately.

| Measure | Historical result | Interpretation |
| --- | --- | --- |
| Benchmark completion | 40 distinct cases; final SSE frames matched durable audits | Delivery/audit evidence for that run. |
| Schema validity, routing, tool correctness | 100% on the fixed benchmark | Useful structural results; not proof of universal correctness or musical quality. |
| Intent match | **9/12 intent-scored cases = 75%** | Meets the project's 75% minimum exactly. It is not 30/40 and is not a human satisfaction score. |
| Predeclared route-balanced latency sample | 10 queries, p50 7,250.5 ms | Passes the chosen under-8-second completion gate. |
| Recommendation-only latency diagnostic | 10 recommendation queries, p50 10,734 ms | Fails the same 8-second target. Keep this route visible rather than hiding it in the mixed median. |
| Individual observed completion times | 812–19,125 ms | Do not present a maximum as p95. Larger repeated samples are needed for a useful tail estimate. |
| Labeled fallbacks | 12/40 responses = 30% | Recovery behavior is observable. Do not infer that all first model explanations succeeded. |
| Claim assessments | 72 | A separate denominator from cases or intent cases. |

At the earlier 37-case checkpoint, 18 one-Sonnet-call requests had a 6,515 ms median; 19 two-Sonnet-call requests had a 10,469 ms median. This is correlation, not a proven causal diagnosis. Verify what those call counts include; do not conflate them with total model calls including intent parsing.

The report says every configured final quality threshold passed. That can coexist with the failed recommendation latency diagnostic and weak evidence from a small intent sample. There is no universal industry pass score for this domain.

The final private per-case production ledger was not located during this portfolio review. **The identities and causes of the three final intent failures are not established here.** Earlier partial reports are useful clues, not substitutes for the final run.

## What the intent metric actually measures

Inspect `backend/tests/eval/ai.py`, especially `_measure()` and `summarize()` (approximately lines 129–223 in the inspected version).

- Only cases with nonempty expected intent axes enter the intent denominator.
- `intent_parse_match`: each expected axis differs from the parsed target by at most 0.35.
- `color_axis_match`: each expected axis is present in measured candidate axes, and measured delta × requested target is at least 0.025.
- `intent_match` requires both checks to pass.
- Per-case output includes parsed axes, measured deltas, called tools, validator codes, fallback, and error codes.
- The fact-coverage proxy uses the deterministic validator. Its own report warns that it does not prove semantic entailment.

Read `_candidate_axes()` too before interpreting candidate aggregation. Do not assume this is top-1 satisfaction, recall, musical preference, or a listener judgment.

Human musician review exists elsewhere in project history (`docs/eval/human-musician-review-2026-10-01.md`). Read its actual scope before reusing it. It does not automatically validate this intent rubric or establish current assistant intent reliability.

## Relevant code and records

| Path | Purpose |
| --- | --- |
| `backend/app/ai/workflow.py` | Intent parsing, routing, tool orchestration, explanation prompt, validation/repair/fallback, response streaming. |
| `backend/app/ai/validators.py` | Evidence/claim checks to preserve. |
| `backend/app/ai/state.py`, `schemas.py` | Parsed intent and public response contracts. |
| `backend/app/ai/tools.py` | Typed domain tools and service boundaries. |
| `backend/app/ai/usage.py` | Token/call bounds, usage and conservative cost accounting. |
| `backend/app/ai/logs.py` | Inspect supported safe diagnostic logging. |
| `backend/app/recommend/scorer.py` | Intent scoring, feature weights, ranking. |
| `backend/app/recommend/features.py`, `candidates.py` | Candidate features, context, candidate availability. |
| `backend/tests/eval/ai.py`, `ai_benchmark.jsonl` | Assistant benchmark, metric definitions, thresholds and cases. |
| `backend/tests/eval/recommender.py` | Separate recommender evaluation; do not merge unlike denominators. |
| `docs/eval/intent-context-2026-10-01.md` | Earlier defects, fixes, partial evaluations and scope. |
| `docs/eval/ai-production-baseline-2026-10-01.json` | Earlier incomplete production run. |
| `docs/eval/ai-production-pr65-2026-10-01.json`, `ai-production-pr67-2026-10-01.json` | Intermediate evidence; check completion/mode before comparison. |
| Git-root `.github/workflows/ai-eval.yml` | Scheduled/manual evaluation; **live-model execution despite seeded services**. |
| Git-root `.github/workflows/ci.yml` | Required current lint/unit/Postgres/frontend/integration gates. |

Existing instrumentation in `workflow.py` includes `ai_llm_latency_ms`, `ai_node_latency_ms`, `ai_repair_attempt_count`, and `ai_fallback_count`. Inspect actual timing boundaries, labels and exports before adding duplicate metrics. Existing project records include Grafana/OTLP and LangSmith work; verify current access, configuration and approved logging scope without printing credentials.

## Changes already present: do not rediscover them as new fixes

The inspected code and prior development notes already include:

- Preservation of weak slider magnitudes, bounded combined intent axes, contextual arrival/motion features, and a dreamy/smoothness correction.
- “Intent ranked” wording because a requested direction can be unattainable.
- Removal of repeated perceptual prose and duplicate analysis/candidate color data from explanation prompts, with evidence preserved in tool results.
- Native JSON-schema explanation output, compact one-to-three-claim instructions, explicit claim/citation constraints, and categorized parse errors.
- At most two main explanation calls, bounded intent parsing, and skipping futile repair when the prompt is oversized.
- Grounding validation before explanation text is streamed; a repair path and deterministic fallback.
- Rate limits, conservative reservations, durable audits, and usage accounting on failure paths.

The optional export-intent miss described in the report has a deterministic correction in the inspected `workflow.py` around lines 426–432. Historical records still list fresh production server-side playback verification as pending. This is related context, not the first optimization target.

## Diagnostic and implementation sequence

### 1. Establish an honest current baseline

Record source commit/dirty state, model IDs/configuration, corpus revision, scorer weights, environment, evaluation mode, cache/warm state, sample selection, and artifact locations. Separate production HTTP/SSE, live models with seeded services, and offline deterministic execution.

Locate the authorized final historical per-case report/audits if available. If missing, record that limitation and establish a new versioned baseline when execution and any spending are authorized. Never manufacture the three failed case IDs from earlier partial runs.

### 2. Diagnose intent failures before changing ranking

For each failure, collect the case ID, expected/parsed axes, measured deltas, candidate eligibility, rank/order, relevant history/key, called tools and fallback/validator codes. Use safe records; do not dump secrets or private prompt/audit data into public artifacts.

Classify the failure:

1. Parser misunderstood direction, magnitude, negation, or multiple objectives.
2. Suitable candidates existed but were filtered out or ranked poorly.
3. Candidate generation produced no feasible option.
4. Feature/context calculation disagreed with intended semantics.
5. The rubric was ambiguous or did not measure the desired musical outcome.

Reproduce each confirmed defect with a minimal development regression that fails before the fix. Correct the responsible stage. Keep deterministic services deterministic. Do not tune weights or prompts against a held-out test set, silently loosen tolerances, or remove difficult cases to improve the displayed percentage. If a grading defect is real, version the rubric and rerun both baseline and candidate under the same corrected rubric.

Expand coverage across paraphrases, keys, progression histories, weak/strong preferences, multi-axis requests, negation, missing context, ambiguity, and impossible constraints. Preserve an untouched test split. Add blinded musician comparisons when needed to validate subjective usefulness. Report hard-constraint satisfaction separately from soft directional preferences.

### 3. Profile recommendation latency by stage

Measure end-to-end HTTP/SSE completion and time to first useful result, plus intent parsing, tools/database, ranking, first explanation, validation, repair and finalization. Record input/output tokens, call counts, fallback reason, cache state and relevant cold starts. Avoid high-cardinality prompt/request content in metric labels.

Use route-specific paired runs under comparable conditions. Test warm/cold conditions separately and inspect tails. Confirm whether expensive repair, oversized evidence, model inference, retrieval, or another stage dominates. Do not assume the historical one/two-call correlation proves a bottleneck.

### 4. Implement one supported improvement at a time

Potential experiments, conditional on diagnosis:

- Improve first-pass explanation schema/citation compliance so fewer requests need repair.
- Select only necessary evidence while retaining facts needed for correct, cited explanations.
- Evaluate a faster model on the same quality set if explanation inference dominates; preserve quality and cost bounds.
- Return validated deterministic candidates before optional explanation completion if the product contract supports progressive results. Preserve a truthful final status and do not stream unvalidated claims.
- Cache deterministic work only with correct corpus/key/history/intent/version inputs and valid invalidation.
- Parallelize independent operations only after proving independence; respect request admission, budget reservations and deterministic ordering.

For each experiment, compare quality, recommendation latency, fallbacks and cost. Reject a speedup that quietly degrades musical correctness, grounding, constraint handling or recovery behavior.

## Local checks and evaluation execution

Use the existing Python environment and npm lockfile. Inspect `backend/pyproject.toml`, `package.json` and current CI. Do not reinstall or upgrade dependencies incidentally.

From the app's `backend/` directory, these are starting points; broaden checks according to the actual diff and current project gates:

```powershell
python -m pytest tests/unit/test_ai_eval.py tests/unit/test_ai_eval_runner.py tests/unit/test_ai_workflow.py tests/unit/test_ai_validators.py tests/unit/test_ai_query_v2.py tests/unit/test_recommend_hybrid.py
python -m ruff check .
python -m ruff format --check .
```

Inspect runner help first. A bounded **offline** diagnostic command, confirmed against the inspected argument parser, is:

```powershell
python -m tests.eval.ai --offline --fixture --max-cost-usd 1 --output-dir .agent-logs/hcg-diagnosis-offline
```

Choose a fresh output directory rather than overwriting evidence. The runner requires a positive numeric cap even in offline mode; the `1` above is not an authorization to spend. `--offline` selects the deterministic workflow; no `--ragas` should be added. Offline fixture results may fail quality gates and cannot establish live model quality or production latency. Preserve and explain failures.

**Execution trap:** `--fixture` replaces domain services with seeded fixtures; it does **not** disable live model calls. Without `--offline`, this runner defaults to live execution. `--ragas` runs a separately billed judge, and the inspected report labels its judge cost as unmetered. Do not trigger the GitHub AI workflow as a free diagnostic.

Historical records list $6.091257 of a $10 cumulative AI evaluation allowance used and a $2 daily production cap restored after that run. These are not verified current balances or a new budget. Reconcile actual remaining authorization, current prices, reservations and unknown-cost attempts before any paid run. Do not raise production limits for convenience. Keep secrets out of terminal output and artifacts.

For frontend/SSE changes, inspect and run relevant UI tests and actual browser flows, including loading, partial results, fallback, cancellation/error and playback where affected. The app exposes `npm run lint`, `npm run typecheck`, `npm test`, `npm run build` and `npm run test:e2e`; run from the app root with the existing setup. Real Postgres tests and other CI gates remain required where applicable. Skipped infrastructure tests are not passing tests.

## Acceptance and stop conditions

- Each addressed defect has a reproducible diagnosis and useful before/after regression evidence.
- The original benchmark/corpus/rubric remains intact or has an explicitly justified versioned correction.
- No regression in grounding, schema/tool/theory checks, hard constraints, durable audits, request bounds or accounting.
- Intent reliability is evaluated on a broader frozen sample with denominators, failure classes and uncertainty reported. Do not call a percentage “production ready” solely because it exceeds the old minimum.
- First recover the existing recommendation completion target: p50 below 8 seconds on the comparable recommendation sample. Keep mixed-route results separate. Set further p95/time-to-useful-result goals before measuring them and label new goals as product targets, not industry standards.
- Report per-route p50/p95, sample size, repeats, fallback/repair rate, request failures, token/call use and cost per successful request. A tiny sample does not support a confident tail claim.
- Complete required checks after the final code edit, inspect the diff, and record passed, failed, skipped and unverified separately.
- If production access, private per-case evidence, a paid budget or human review is unavailable, finish useful local diagnosis/fixes and identify the exact remaining verification. Do not fabricate completion or weaken gates.
- Merge/deploy only after the current project's required review and release gates. Recheck deployment identities afterward; local results do not establish production behavior.

## Deliverables and portfolio update

Return a concise root-cause report, bounded code changes, regressions, versioned before/after evaluation artifacts, residual failures and the next concrete action. Refresh the destination project's resume/memory at a working slice or blocker.

Portfolio location:

```text
C:/Users/sidds/OneDrive/Documents/GitHub/Portfolio
src/redesign/content.js
src/redesign/caseStudies.js
project slug: harmonic-color-graph
```

The active portfolio case study now accurately reports 40 structural cases, intent 9/12, route-balanced p50 7.25 s, recommendation p50 10.73 s and 12/40 labeled fallbacks. Preserve those historical facts until a new dated, linked report supports updated claims. Add comparable new results and explain remaining scope; do not erase failed history or present fixture/mock results as production evidence. The legacy `src/data/projects.js` is not the active case-study source.

## External guidance

- Evaluation design and task-specific success criteria: https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents
- Latency experiments, reducing unnecessary requests and improving time to useful output: https://developers.openai.com/api/docs/guides/latency-optimization

Use the repository evidence to choose the actual fix. Neither general guidance nor this handoff establishes the current root cause.
