export const person = {
  name: 'Siddharth Sanjay',
  role: 'AI engineer',
  domain: 'https://siddharthsanjay.com',
  email: 'siddsan7@gmail.com',
  github: 'https://github.com/siddsan7',
  linkedin: 'https://www.linkedin.com/in/siddharth-sanjay/',
  resumeSource:
    'https://drive.google.com/file/d/1b-1fFbyEB5KZibWbzwQiYJZNb8ajk_le/view?usp=drive_link',
  premise: 'Tools for understanding complex systems.',
  summary:
    'I build AI and software tools for exploring music, understanding signals, and making informed decisions.',
  about: [
    'I’m Siddharth, a computer science graduate from Arizona State University. My work connects AI, software engineering, and product thinking.',
    'Music is a recurring thread in my projects. I’m interested in tools that help people explore a complex system, understand its behavior, and make a deliberate choice.',
  ],
}

export const projects = [
  {
    slug: 'harmonic-color-graph',
    name: 'Harmonic Color Graph',
    category: 'AI / Music',
    kind: 'harmony',
    image: '/assets/artwork/harmonic-color-graph.webp',
    imageAlt:
      'Concept illustration of chord relationships, with connected C, Am, Fmaj7, G, Dm, and Em nodes and a copper-colored path.',
    imageWidth: 623,
    imageHeight: 377,
    premise: 'Explore what comes after a chord.',
    summary:
      'Corpus-backed recommendations and grounded explanations, built on inspectable harmonic tools.',
    methods: 'Typed tools · Grounding · Evaluation',
    repo: 'https://github.com/siddsan7/HarmonicColorGraph',
    status: 'Research and development workbench',
    contribution:
      'Individual project. I built the harmonic workbench, recommendation pipeline, typed tools, grounded assistant, and evaluation workflow.',
    problem:
      'Musicians exploring a chord progression need more than a plausible next chord. They need to inspect the harmonic relationships and understand why a recommendation fits.',
    sections: [
      [
        'System design',
        'A Next.js interface connects to a FastAPI backend for chord and Roman-numeral analysis, graph exploration, generation, similarity, and playback. Deterministic harmonic services expose typed tools to the interface, a LangGraph/Claude assistant, and MCP. Tool results carry fact IDs so explanations can point back to their evidence.',
      ],
      [
        'Recommendations before conversation',
        'The recommendation pipeline uses offline-trained feature weights, bounded user intent, plausibility filters, and diversity selection. This keeps ranking separate from the assistant’s prose: musical candidates come from the recommendation system, rather than being invented inside a chat response.',
      ],
      [
        'Grounding and failure behavior',
        'Assistant explanations pass grounding validation before partial text is streamed. A failed explanation gets one repair attempt, then a deterministic fallback. Rate limits, conservative cost reservations, and audit records place explicit bounds around model use.',
      ],
      [
        'Reported evaluation',
        'The repository’s evaluation dated October 2, 2026 reports 40 cases, with 100% schema validity, routing, and tool correctness, and 75% intent match. A predeclared, ten-query route-balanced sample had a median latency of 7,250.5 ms. Recommend-only latency had a 10,734 ms median and failed its 8-second target. These are historical repository results, not independent measurements or a guarantee of current performance.',
      ],
      [
        'What remains to establish',
        'The source demonstrates the implementation and its evaluation approach. Current production readiness and musical usefulness need separate assessment; passing structured checks alone does not establish recommendation quality for every musician.',
      ],
    ],
    sources: [
      ['Architecture and usage', 'harmonic-color-graph/README.md'],
      [
        'Recommendation scorer',
        'harmonic-color-graph/backend/app/recommend/scorer.py',
      ],
      [
        'October 2, 2026 evaluation',
        'harmonic-color-graph/docs/eval/ai-production-2026-10-02.md',
      ],
    ],
  },
  {
    slug: 'tonescope',
    name: 'ToneScope',
    category: 'Audio / Systems',
    kind: 'audio',
    image: '/assets/artwork/tonescope.webp',
    imageAlt:
      'Concept illustration of dry and processed waveforms, a selected passage, and an EQ, compressor, and drive chain.',
    imageWidth: 406,
    imageHeight: 218,
    premise: 'Inspect a sound before changing it.',
    summary:
      'A Windows guitar-effects workbench for selecting passages, comparing processing, and previewing reversible changes.',
    methods: 'C++ · Faust · React',
    repo: 'https://github.com/siddsan7/ToneScope',
    status: 'Development integration; not a qualified public release',
    contribution:
      'Individual project. I built the native audio workbench, DSP integration, embedded interface, reversible assistant workflow, and numerical verification tools.',
    problem:
      'Guitarists need to compare a processed passage with its original, understand what changed, and keep control over whether a suggested adjustment becomes part of their sound.',
    sections: [
      [
        'Native audio, embedded interface',
        'The workbench combines a C++20/JUCE host, generated Faust DSP, and an embedded React interface. Documented features include streaming WAV rendering, persistent dry capture and recovery, compressor/EQ/drive processing, aligned comparison, residual inspection, and undo.',
      ],
      [
        'A proposal is not an applied change',
        'The optional assistant reads native measurements and renders and compares candidates. It returns proposals bound to a revision and hash. The native host owns preview, explicit acceptance, stale-state checks, and undo, keeping the final edit under user control.',
      ],
      [
        'A deliberately bounded assistant',
        'The default assistant performs deterministic offline level adjustment and abstains on unsupported tonal requests. A provider adapter exists, but live-provider quality has not been evaluated. This is not evidence of a validated AI tone expert.',
      ],
      [
        'Verification and limits',
        'The repository documents independent numerical evaluators, adversarial/native tests, and mutation checks. Those checks address implementation behavior, not human listening quality, hardware latency, accessibility conformance, or public release qualification. Licensing/signing, clean-machine testing, and hardware/human qualification remain open.',
      ],
    ],
    sources: [
      ['Workbench architecture', 'README.md'],
      ['Assistant service', 'services/audio-assistant/README.md'],
      ['Model card and limitations', 'docs/assistant/model-card.md'],
      ['Delivery qualification', 'delivery/brain.md'],
    ],
  },
  {
    slug: 'truckerpath-dispatcher-os',
    name: 'TruckerPath Dispatcher OS',
    category: 'Product engineering',
    kind: 'logistics',
    image: '/assets/artwork/dispatcher.webp',
    imageAlt:
      'Concept illustration of a route, truck, and location pins above a demo workflow for route fit, driver constraints, and load ranking.',
    imageWidth: 406,
    imageHeight: 218,
    premise: 'Make the trade-offs visible.',
    summary:
      'A demo-first logistics product connecting dispatch workflows, explainable load ranking, and experiment planning.',
    methods: 'Next.js · Load scoring · PM Copilot',
    repo: 'https://github.com/siddsan7/truckerpathpm',
    status: 'Independent prototype with seeded data and mocked integrations',
    contribution:
      'Individual project. I built the dispatch and route-planning workflows, deterministic load ranking, marketplace prototype, and PM Copilot integration.',
    problem:
      'Dispatchers and drivers face competing signals: route fit, deadhead, hours of service, parking, reliability, and return-load options. A useful workflow needs to expose these trade-offs before an assignment.',
    sections: [
      [
        'One route planner across workflows',
        'A Next.js/Tailwind/Leaflet prototype connects reports, map planning, and driver assignment through one route planner. Its growth workflow connects onboarding preferences, discovery, saved loads, simulated booking, and proposed experiments.',
      ],
      [
        'Explainable ranking',
        'LoadPilot uses deterministic weighted scoring across profit, rate per mile, deadhead, hours of service, parking, broker reliability, return-load, and risk signals. It is a rule-based ranking system, not a trained machine-learning model.',
      ],
      [
        'From feedback to a product hypothesis',
        'An optional Gemini PM Copilot synthesizes feedback into insights, hypotheses, experiments, metrics, and PRD drafts. A deterministic fallback preserves the demonstration without provider credentials. The output supports product exploration; it does not validate an experiment’s outcome.',
      ],
      [
        'Evidence and boundaries',
        'The repository contains the workflow, product brief, ranking implementation, and copilot route. KPI and funnel displays use seeded data. Partner integrations and booking are mocked. There is no claim of production adoption, measured business impact, employment, client work, or endorsement by Trucker Path.',
      ],
    ],
    sources: [
      ['Prototype overview', 'README.md'],
      ['Product brief', 'PRODUCT_BRIEF.md'],
      ['Deterministic scoring', 'lib/growth/scoring.ts'],
      ['Copilot route', 'app/api/growth-insights/route.ts'],
    ],
  },
]

export const skills = [
  [
    'AI systems',
    'Python · LangGraph · Tool grounding',
    'Harmonic Color Graph',
    '/projects/harmonic-color-graph/',
  ],
  [
    'Software',
    'TypeScript · React · Next.js · FastAPI',
    'System design',
    '/projects/harmonic-color-graph/#system-design',
  ],
  [
    'Audio systems',
    'C++ · Faust · Signal inspection',
    'ToneScope',
    '/projects/tonescope/',
  ],
  [
    'Product',
    'Workflow design · Scoring · Experiment planning',
    'TruckerPath case study',
    '/projects/truckerpath-dispatcher-os/',
  ],
]

export const routes = [
  '/',
  ...projects.map((p) => `/projects/${p.slug}/`),
  '/resume/',
]
export const redirects = {
  '/about': '/#about',
  '/skills': '/#skills',
  '/contact': '/#contact',
  '/experience': '/resume/',
  '/projects': '/#work',
}
