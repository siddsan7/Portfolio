# Featured project research

Reviewed 2026-10-19 through the connected GitHub tool. This is source review, not independent runtime verification. All three repositories are public. Statements below describe repository evidence; the owner subsequently confirmed sole authorship of all three projects and waived dates on 2026-10-19. Public demo/release readiness remains scoped by the evidence below. No screenshot/video files were found by common raster/video extensions in the reviewed trees.

## Harmonic Color Graph — lead AI engineering case study

Repository: https://github.com/siddsan7/HarmonicColorGraph
Reviewed tree: 1db9cbf6a2cc57c34e76ec2f9ff862a5b7e3aa38.

- Harmonic intelligence workbench: chord/Roman-numeral analysis, corpus-backed next-chord recommendations, graph exploration, generation, similarity, playback, and a grounded assistant.
- Next.js frontend and FastAPI backend. Typed harmonic tools are shared across deterministic services and the LangGraph/Claude assistant; tools carry fact IDs/evidence. MCP exposes the tools too.
- Explanations undergo grounding validation, one repair attempt, then deterministic fallback. Streaming partial text follows validation. Rate limits, conservative cost reservations, and audit records bound model use.
- Recommendation source implements offline-trained feature weights, bounded user intent, plausibility filtering, and diversity selection. Do not reduce this project to a chatbot wrapper.
- Dated production evaluation documents 40 cases, 100% schema validity/routing/tool correctness, and 75% intent match on only 12 intent-scored cases (9/12). A predeclared ten-query route-balanced median was 7,250.5 ms. The ten recommendation queries had a 10,734 ms median and failed the 8-second target; 12/40 responses used labeled fallbacks. These are scoped, historical reported results, not general guarantees or current independent measurements. Do not describe the intent metric as 30/40 or as a human musical-satisfaction measure.
- README mixes old future-phase text/open gates with newer implemented features. Reconcile against dated evidence before publishing status or performance claims.

Sources:
- https://github.com/siddsan7/HarmonicColorGraph/blob/main/harmonic-color-graph/README.md
- https://github.com/siddsan7/HarmonicColorGraph/blob/main/harmonic-color-graph/backend/app/recommend/scorer.py
- https://github.com/siddsan7/HarmonicColorGraph/blob/main/harmonic-color-graph/docs/eval/ai-production-2026-10-02.md

Proposed story: making musical recommendations inspectable through domain tools, grounded explanations, and explicit evaluation. Visual candidates: progression graph, recommendation breakdown, cited assistant response.

## ToneScope — native systems and controlled assistant workflow

Repository: https://github.com/siddsan7/ToneScope
Reviewed tree: 3a511fdddf02d0ea094448fd49cb36f5757d953c.

- Windows guitar-effects workbench for selecting, processing, measuring, and comparing audio passages. C++20/JUCE host, generated Faust DSP, embedded React/shadcn UI.
- Streaming WAV rendering, persistent dry capture/recovery, compressor/EQ/drive, aligned comparison, residual inspection, and undo are documented as implemented.
- Optional assistant reads native measurements, renders and compares candidates, and returns revision/hash-bound proposals. Native host owns preview, explicit acceptance, stale-state checks, and undo.
- Default assistant is deterministic offline level adjustment and abstains on unsupported tonal requests. Provider adapter exists but live-provider quality has not been evaluated. Do not describe this as a validated AI tone expert.
- Independent numerical evaluators, adversarial/native tests, and mutation checks are documented. Do not infer human listening quality, hardware latency, accessibility conformance, or public release qualification.
- Development integration, not a qualified public release. Licensing/signing, clean-machine and hardware/human qualification remain open.

Sources:
- https://github.com/siddsan7/ToneScope/blob/main/README.md
- https://github.com/siddsan7/ToneScope/blob/main/services/audio-assistant/README.md
- https://github.com/siddsan7/ToneScope/blob/main/docs/assistant/model-card.md
- https://github.com/siddsan7/ToneScope/blob/main/delivery/brain.md

Proposed story: connecting native audio processing to measurable, reversible assistant actions. Visual candidates: waveform selection, effect chain, before/after measurements, preview/apply/undo.

## truckerpathpm — product engineering and logistics case study

Repository: https://github.com/siddsan7/truckerpathpm
Reviewed tree: 0a4eb4ebd0e2666529958b12229d2c8d05c43e20.

- TruckerPath Dispatcher OS prototype with route planning, dispatch operations, marketplace growth, and a mocked partner lifecycle.
- Next.js/Tailwind/Leaflet. Optional Gemini PM Copilot synthesizes feedback into insights, hypotheses, experiments, metrics, and PRD drafts; deterministic fallback preserves the demo without credentials.
- LoadPilot ranking is deterministic weighted scoring, confirmed in code: profit, rate/mile, deadhead, hours-of-service, parking, broker reliability, return-load and risk signals. Do not call it a trained ML model.
- Reports-to-map-to-driver-assignment workflow reuses one route planner. Growth links onboarding preferences, discovery, saved loads, simulated booking, and proposed experiments.
- Growth uses seeded data; KPI/funnel displays are not measured business impact. Partner integrations are mocked. No implication of employment, client work, endorsement, actual payment integrations, or production adoption follows from repository names.
- README reports earlier build/test/browser validation. These checks were not rerun in this research pass.

Sources:
- https://github.com/siddsan7/truckerpathpm/blob/main/README.md
- https://github.com/siddsan7/truckerpathpm/blob/main/PRODUCT_BRIEF.md
- https://github.com/siddsan7/truckerpathpm/blob/main/lib/growth/scoring.ts
- https://github.com/siddsan7/truckerpathpm/blob/main/app/api/growth-insights/route.ts

Proposed story: turning fragmented logistics signals into explainable decisions and testable product hypotheses. Visual candidates: driver preference changes, ranked-load explanations, dispatch workflow, experiment brief.
