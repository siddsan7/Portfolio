// Public, scoped evidence. Paths resolve against each project's pinned revision.
export const caseStudies = {
  'harmonic-color-graph': {
    title: 'Harmonic Color Graph | Grounded AI recommendations',
    revision: '1db9cbf6a2cc57c34e76ec2f9ff862a5b7e3aa38',
    status: 'Independent AI workbench',
    focus: 'Recommendation ranking, typed tools, grounded explanations',
    result: '40-case structural evaluation; intent matched 9/12 scored cases.',
    methods: 'Python · FastAPI · Next.js · LangGraph · MCP',
    demo: {
      label: 'Explore the live atlas',
      href: 'https://harmonic-color-graph.vercel.app/explore?p=D7-G-C&k=C-major',
    },
    evidenceIntro: 'Historical production HTTP/SSE evaluation, October 2, 2026. These rows have different denominators and measure different behaviors.',
    evidence: [
      ['Schema, routing & tools', '40/40 cases passed', 'Fixed benchmark; structural correctness does not establish musical usefulness.'],
      ['Intent match', '9/12 scored cases · 75%', 'Directional intent proxy, not a listener satisfaction score. The three misses remain improvement work.'],
      ['Recommendation completion', '10.73 s median', 'Ten recommendation queries; above the project’s 8-second target.'],
      ['Mixed-route completion', '7.25 s median', 'Ten predeclared, route-balanced queries; passes that sample’s 8-second target.'],
      ['Labeled fallbacks', '12/40 responses', 'Recovery output was used; this is not a 100% first-pass explanation success rate.'],
    ],
    evidenceSource: ['Dated evaluation and conditions', 'harmonic-color-graph/docs/eval/ai-production-2026-10-02.md'],
    decision: {
      constraint: 'A fluent explanation can still invent a chord choice or misstate why it fits.',
      alternative: 'Let the language model generate and explain recommendations in one unconstrained response.',
      choice: 'Keep ranking in the recommendation pipeline. Give the assistant typed tools and fact IDs, then validate its claims before streaming explanation text.',
      consequence: 'Candidate selection and cited explanations can be inspected separately. Structural checks pass on the recorded benchmark, while intent quality and recommendation latency still need improvement.',
      source: ['Recommendation implementation', 'harmonic-color-graph/backend/app/recommend/scorer.py'],
    },
    flows: [
      {
        label: 'Recommendation and explanation path',
        steps: ['Progression + intent', 'Deterministic harmonic tools', 'Feature-weighted ranking', 'Candidates + fact IDs', 'Model explanation', 'Grounding validation'],
        boundary: 'If validation fails: one repair attempt, then a labeled deterministic fallback. Cost reservations and request limits bound model use.',
      },
    ],
    walkthrough: {
      intro: 'Inspect a real harmonic relationship without needing to ask the assistant or run a paid model request. The atlas demonstrates domain tools; the evaluation table above is the evidence for assistant behavior.',
      steps: [
        ['Start with context', 'The linked atlas opens D7 → G → C in C major. The current sketch and key stay visible beside the graph.'],
        ['Inspect a node', 'Select a harmonic function and read the chord inspector. Compare the musical identity with its connections; visual distance is not a similarity score.'],
        ['Trace a route', 'Choose endpoints and inspect available paths. Use the displayed chord sequence to connect a graph relationship to the original progression.'],
      ],
      source: ['Architecture and atlas usage', 'harmonic-color-graph/README.md'],
    },
  },
  tonescope: {
    title: 'ToneScope | Reversible audio assistant and native DSP',
    revision: '1c32a38875ebf08d81b8e0f2bc5f95233b06cc0d',
    status: 'Independent native development build',
    focus: 'Native state safety, DSP, deterministic assistant evaluation',
    result: 'Bounded level rules improved from 15/24 to 24/24 development tasks.',
    methods: 'C++20 · JUCE · Faust · React · Numerical evaluation',
    evidenceIntro: 'Repository-reported development experiments. These measure deterministic rules and native behavior, not live-model effectiveness, preferred tone, or hardware performance.',
    evidence: [
      ['Level-rule regression', '15/24 → 24/24', 'Same frozen synthetic development tasks and unchanged numerical gates; 18 feasible and 6 boundary tasks.'],
      ['Compression rules', '16/16 vs 1/16 unchanged', 'Separate authored development set: 8 feasible and 8 boundary tasks, using a bounded compressor topology.'],
      ['Independent level grading', '0.25 dB level gate', 'The level experiment independently grades rendered audio. A passing numerical gate does not establish equal perceived loudness.'],
      ['Model evaluation boundary', '216 level-model records blocked', 'The level experiment did not make paid model calls; deterministic success is not an LLM quality claim.'],
    ],
    evidenceSource: ['Level-rule baseline and results', 'delivery/rules-baseline.md'],
    extraEvidenceSource: ['Compression experiment and conditions', 'delivery/compression-benchmark.md'],
    decision: {
      constraint: 'An assistant result may arrive after the user has changed the selection or processing graph.',
      alternative: 'Allow the service to apply its proposed edit directly to the current session.',
      choice: 'Bind proposals to native measurements, revision and hashes. Keep preview, explicit acceptance, rejection of stale evidence, and whole-patch undo in the native host.',
      consequence: 'A proposal leaves the session unchanged until accepted. Native tests cover stale, forged and cross-request proposals, and verify that one undo restores the original graph.',
      source: ['Native proposal and undo checks', 'tests/native/assistant_bridge_tests.cpp'],
    },
    flows: [
      {
        label: 'Measured, reversible edit',
        steps: ['Selection + revision', 'Native measurements', 'Bounded rules/tools', 'Candidate audio + hashes', 'Native freshness check', 'Preview → Apply → Undo'],
        boundary: 'Unsupported or infeasible requests abstain. Stale or mismatched evidence is rejected; the assistant does not own edit authority.',
      },
    ],
    walkthrough: {
      intro: 'Captured from the actual native development build using the offline rules assistant: a 2 dB level request leaves Output at 0 dB until Apply, then one Undo restores it. No paid model, hardware playback, or listening-quality claim is involved.',
      steps: [
        ['Request a measured change', 'For the selected 0–8 second guitar passage, “Make this passage 2 dB louder” produces a rendered candidate with RMS −22.53 dBFS and sample peak −6.67 dBFS. The committed Output control is still 0 dB.'],
        ['Preview without committing', 'Candidate and current-settings preview states were inspected while the committed Output remained 0 dB. RMS matching is off for this raw-gain comparison. The capture is paused and does not establish physical playback.'],
        ['Apply, then undo', 'Explicit Apply sets Output to +2 dB. One Undo restores 0 dB and the complete original control array. The former proposal is invalidated because the session has changed.'],
      ],
      images: [
        { src: '/assets/walkthroughs/tonescope-proposal.webp', alt: 'ToneScope offline assistant proposal for a 2 dB increase, with measured candidate levels and explicit Apply control.', caption: 'Observed proposal: measured candidate, with the committed Output still at 0 dB.' },
        { src: '/assets/walkthroughs/tonescope-preview.webp', alt: 'ToneScope showing suggested and current-settings comparison controls before accepting the measured level proposal.', caption: 'Paused candidate preview. Comparison controls are visible; the native committed Output remains unchanged.' },
        { src: '/assets/walkthroughs/tonescope-undo.webp', alt: 'ToneScope Output restored to 0 dB after applying the 2 dB proposal and undoing it once.', caption: 'After Apply (+2 dB) and one Undo: Output is 0 dB again, with the original native controls restored.' },
      ],
      source: ['Actual embedded assistant flow', 'tests/ui/embedded-native.mjs'],
      captureSource: 'https://github.com/siddsan7/Portfolio/blob/5d259cfe1402d523250df6a57ea63b0932fb72c9/docs/visuals/tonescope-walkthrough-capture.md',
    },
  },
  'truckerpath-dispatcher-os': {
    title: 'Dispatcher OS | Explainable ranking and AI product copilot',
    revision: '0a4eb4ebd0e2666529958b12229d2c8d05c43e20',
    status: 'Independent prototype · seeded data',
    focus: 'Explainable scoring, dispatch workflows, optional Gemini integration',
    result: 'Eight-factor ranking exposes its reasons and risks; booking is simulated.',
    methods: 'Next.js · Tailwind CSS · Leaflet · Gemini · Weighted ranking',
    evidenceIntro: 'Implementation and authored test evidence from a seeded prototype. Displayed fleet metrics, confidence scores, and bookings are not production outcomes.',
    evidence: [
      ['Load ranking', '8 weighted factors', 'Deterministic and untrained; economics, deadhead, HOS, parking, reliability, return-load and risk remain inspectable.'],
      ['Scoring test coverage', '7 authored test cases', 'Source tests cover bounds, relative ordering, economics, reasons and risks. This is a test inventory, not a new test-run result.'],
      ['Tested net estimate', '$1,455 estimate', '$2,000 payout − $400 fuel − 100 deadhead miles × $1.45. A model assumption, not realized driver profit.'],
      ['Copilot fallback', 'Provider optional', 'Missing credentials, provider failures, or failed JSON/required-field checks use deterministic insights. Model quality and business gains were not evaluated.'],
    ],
    evidenceSource: ['Scoring examples and assertions', 'tests/growth-scoring.test.ts'],
    extraEvidenceSource: ['Copilot provider and fallback route', 'app/api/growth-insights/route.ts'],
    decision: {
      constraint: 'A high-paying load may still carry expensive deadhead or operational risk.',
      alternative: 'Sort by gross payout or hide the ranking factors behind a single recommendation.',
      choice: 'Compute explicit score components, estimated net, reasons and risks. Keep load ranking deterministic; use the separate Gemini PM Copilot to draft product hypotheses from feedback.',
      consequence: 'A reviewer can inspect the assumptions behind a ranking and distinguish operational scoring from generated product ideas. HOS penalties are not a qualified booking-safety system.',
      source: ['Ranking factors and estimated-net formula', 'lib/growth/scoring.ts'],
    },
    flows: [
      {
        label: 'Load decision path · deterministic',
        steps: ['Driver preferences + seeded loads', 'Eight-factor scoring', 'Reasons + risk flags', 'Save load', 'Simulated booking'],
        boundary: 'Prototype data and mocked partner integrations. Ranking penalties do not establish production safety or realized profit.',
      },
      {
        label: 'Product feedback path · separate optional AI',
        steps: ['Seeded feedback', 'Gemini or deterministic fallback', 'Hypothesis + experiment + PRD draft'],
        boundary: 'Proposed experiments are ideas to test; they are not completed experiments or measured growth.',
      },
    ],
    walkthrough: {
      intro: 'Inspect one calculation behind the ranking, then distinguish the operational workflow from the product copilot. Values below are an illustrative calculation using the repository’s formula.',
      steps: [
        ['Inspect economics', 'The tested example starts with $2,000 payout, $400 fuel and 100 deadhead miles. The model charges deadhead at $1.45 per mile, producing a $1,455 estimated net.'],
        ['Test a cost trade-off', 'Change deadhead from 100 to 250 miles in the calculation below. With payout and fuel unchanged, estimated net falls by $217.50 to $1,237.50. This isolates one cost assumption; the full eight-factor ranking and its risk flags are documented in the linked source.'],
        ['Keep the copilot separate', 'The PM Copilot turns feedback into a hypothesis, experiment and PRD draft. Its provider path and deterministic fallback are separate from load ranking.'],
      ],
      source: ['Growth workflow and simulation checks', 'tests/growth.spec.ts'],
      calculator: true,
    },
  },
}
