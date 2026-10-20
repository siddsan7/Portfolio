import { caseStudies } from './caseStudies.js'

export const person = {
  name: 'Siddharth Sanjay',
  role: 'AI engineer',
  domain: 'https://siddharthsanjay.com',
  email: 'siddsan7@gmail.com',
  github: 'https://github.com/siddsan7',
  linkedin: 'https://www.linkedin.com/in/siddharth-sanjay/',
  portrait: '/assets/profile/siddharth-linkedin.webp',
  resumeSource:
    'https://drive.google.com/file/d/1b-1fFbyEB5KZibWbzwQiYJZNb8ajk_le/view?usp=drive_link',
  premise: 'RAG pipelines and grounded AI applications.',
  summary:
    'I build with Python, FastAPI, and React. At SkipCourse, I worked on RAG assessment workflows and asynchronous Google Cloud services.',
  about: [
    'I’m Siddharth, a computer science graduate from Arizona State University focused on AI engineering. I enjoy turning an open-ended problem into a working system, then figuring out how to test its behavior and make its decisions easier to inspect.',
    'I love learning, whether that means understanding a new technical idea or picking up a seemingly random skill. Outside my projects, that curiosity takes me through guitar, piano, beatboxing, trivia, debating, cubing, and juggling.',
    'Music is a recurring topic in my work because it gives me interesting problems to explore. The same love of learning connects my hobbies and engineering: I like understanding how something works, trying it for myself, and improving through practice.',
  ],
}

export const projects = [
  {
    slug: 'harmonic-color-graph',
    caseStudy: caseStudies['harmonic-color-graph'],
    name: 'Harmonic Color Graph',
    category: 'AI engineering / Recommendations',
    kind: 'harmony',
    image: '/assets/artwork/harmonic-color-graph.webp',
    imageAlt:
      'Concept illustration of chord relationships, with connected C, Am, Fmaj7, G, Dm, and Em nodes and a copper-colored path.',
    imageWidth: 623,
    imageHeight: 377,
    screenshot: {
      src: '/assets/screenshots/harmonic-color-graph.webp',
      width: 1600,
      height: 1200,
      alt: 'Harmonic Color Graph showing a connected harmonic atlas, route controls, and a chord inspector in C major.',
      caption: 'The harmonic atlas in the running application, with route exploration and chord inspection.',
    },
    premise: 'Ground AI recommendations in inspectable evidence.',
    summary:
      'A recommendation system that combines corpus-backed ranking, typed domain tools, and a grounded LLM assistant to explain chord choices.',
    methods: 'Typed tools · Grounding · Evaluation · Python · FastAPI · Next.js · LangGraph · Claude · MCP · Recommendation ranking',
    repo: 'https://github.com/siddsan7/HarmonicColorGraph',
    status: 'Research and development workbench',
    contribution:
      'Individual project. I built the harmonic workbench, recommendation pipeline, typed tools, grounded assistant, and evaluation workflow.',
    problem:
      'Musicians exploring a chord progression need more than a plausible next chord. They need to inspect the harmonic relationships and understand why a recommendation fits.',
    sections: [
      [
        'Architecture',
        'A Next.js interface connects to a Python/FastAPI backend for harmonic analysis, graph exploration, recommendations, and playback. Typed domain tools serve the interface, a LangGraph/Claude assistant, and MCP. Reusing the same deterministic services across these entry points keeps the underlying analysis consistent. Tool results carry fact IDs that connect explanations to their evidence.',
      ],
      [
        'Engineering decisions',
        'I separated recommendation ranking from language generation. Offline-trained feature weights, bounded user intent, plausibility filters, and diversity selection produce the candidates; the assistant explains the results. Grounding validation runs before explanation text is streamed. One repair attempt and a deterministic fallback bound the recovery path. Rate limits, cost reservations, and audit records make model use more controlled and traceable.',
      ],
      [
        'Validation and evidence',
        'The repository’s October 2, 2026 evaluation reports 100% schema validity, routing, and tool correctness across 40 benchmark cases. Intent match passed 9 of the 12 intent-scored cases (75%), meeting the project’s minimum threshold. A predeclared ten-query route-balanced sample had a median completion time of 7.25 seconds. The ten recommendation queries had a 10.73-second median, above the 8-second target. Twelve of the 40 responses used labeled fallbacks. These historical results establish a measured baseline; larger intent evaluations and fresh latency measurements are needed to assess the current system.',
      ],
      [
        'Current scope',
        'The workbench demonstrates an implemented recommendation pipeline, evidence-linked assistant, and explicit evaluation workflow. The recorded intent-match and recommendation-latency results remain improvement areas. Current production readiness and usefulness to musicians require separate assessment beyond structured correctness checks.',
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
    caseStudy: caseStudies.tonescope,
    name: 'ToneScope',
    category: 'Systems engineering / Assistant tools',
    kind: 'audio',
    screenshot: {
      src: '/assets/screenshots/tonescope.webp',
      width: 3200,
      height: 2200,
      alt: 'ToneScope showing a loaded guitar passage, dry and processed waveforms, a frequency spectrum, and signal-chain controls.',
      caption: 'The native audio workbench with a guitar recording loaded. Local development build.',
      credit: {
        label: 'Pedroza, Hegel, et al., Guitar-TECHS',
        href: 'https://zenodo.org/records/14963133',
        license: 'https://creativecommons.org/licenses/by/4.0/',
      },
    },
    image: '/assets/artwork/tonescope-crisp.svg',
    imageAlt:
      'Concept illustration of dry and processed waveforms, a selected passage, and an EQ, compressor, and drive chain.',
    imageWidth: 960,
    imageHeight: 576,
    premise: 'Make assistant actions measurable and reversible.',
    summary:
      'A native audio workbench that connects signal measurements to an assistant workflow with revision-bound proposals, preview, explicit acceptance, and undo.',
    methods: 'C++20 · Faust · React · JUCE · DSP · Native/UI integration · State validation · Numerical testing · Mutation testing',
    repo: 'https://github.com/siddsan7/ToneScope',
    status: 'Development integration; not a qualified public release',
    contribution:
      'Individual project. I built the native audio workbench, DSP integration, embedded interface, reversible assistant workflow, and numerical verification tools.',
    problem:
      'Guitarists need to compare a processed passage with its original, understand what changed, and keep control over whether a suggested adjustment becomes part of their sound.',
    sections: [
      [
        'Architecture',
        'A C++20/JUCE host runs generated Faust DSP and embeds a React interface. The native system owns streaming WAV rendering, persistent dry capture and recovery, compressor/EQ/drive processing, aligned comparison, residual inspection, and undo. The assistant service uses native measurements and candidate renders as evidence for proposed changes.',
      ],
      [
        'Engineering decisions',
        'I kept edit authority in the native host. Assistant proposals are bound to a revision and hash, so stale-state checks can reject a suggestion after the underlying audio state changes. Preview, explicit acceptance, and undo make changes inspectable and reversible. The default assistant handles offline level adjustment deterministically and abstains on unsupported tonal requests, giving the workflow a defined capability boundary.',
      ],
      [
        'Validation and evidence',
        'The repository documents independent numerical evaluators, adversarial/native tests, and mutation checks. Numerical checks compare processing behavior against independent calculations; adversarial and mutation checks probe whether invalid behavior is detected. These provide evidence for implementation verification. They do not establish human listening quality, hardware latency, or accessibility conformance.',
      ],
      [
        'Current scope',
        'ToneScope is a development integration with a deterministic assistant and a provider adapter. Live-provider quality has not been evaluated. Licensing/signing, clean-machine testing, and hardware/human qualification remain open before a qualified public release.',
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
    caseStudy: caseStudies['truckerpath-dispatcher-os'],
    name: 'TruckerPath Dispatcher OS',
    category: 'AI product engineering / Decision support',
    kind: 'logistics',
    screenshot: {
      src: '/assets/screenshots/dispatcher-insights.webp',
      width: 3200,
      height: 2000,
      alt: 'Dispatcher OS showing ranked dispatch tasks with operational reasons, a fleet map, and proactive alerts.',
      caption: 'Dispatch recommendations and fleet context. Prototype with seeded scenario data; displayed metrics and confidence scores are demo values.',
    },
    image: '/assets/artwork/dispatcher-crisp.svg',
    imageAlt:
      'Concept illustration of a route, truck, and location pins above a demo workflow for route fit, driver constraints, and load ranking.',
    imageWidth: 960,
    imageHeight: 576,
    premise: 'Turn operational signals into explainable decisions.',
    summary:
      'A logistics prototype combining explainable load ranking with a Gemini PM Copilot that turns feedback into structured product hypotheses and experiment plans.',
    methods: 'Next.js · Load scoring · PM Copilot · Tailwind CSS · Leaflet · Gemini API integration · API routes · Deterministic fallbacks · Weighted ranking',
    repo: 'https://github.com/siddsan7/truckerpathpm',
    status: 'Independent prototype with seeded data and mocked integrations',
    contribution:
      'Individual project. I built the dispatch and route-planning workflows, deterministic load ranking, marketplace prototype, and PM Copilot integration.',
    problem:
      'Dispatchers and drivers face competing signals: route fit, deadhead, hours of service, parking, reliability, and return-load options. A useful workflow needs to expose these trade-offs before an assignment.',
    sections: [
      [
        'Architecture',
        'A Next.js/Tailwind/Leaflet prototype connects reports, map planning, and driver assignment through a shared route planner. The growth workflow connects onboarding preferences, discovery, saved loads, and simulated booking. An API route integrates an optional Gemini PM Copilot for feedback synthesis and experiment planning.',
      ],
      [
        'Engineering decisions',
        'I used deterministic weighted scoring for LoadPilot so ranking factors remain inspectable: profit, rate per mile, deadhead, hours of service, parking, broker reliability, return-load, and risk. The PM Copilot handles feedback synthesis into insights, hypotheses, experiments, metrics, and PRD drafts. A deterministic fallback keeps the demonstration usable without provider credentials. Reusing one route planner connects the dispatch workflows through a common planning path.',
      ],
      [
        'Validation and evidence',
        'The scoring implementation exposes the factors behind load ranking, while the copilot API route shows the model integration and fallback path. The product brief records the workflow and proposed experiments. These sources support the implementation and design decisions described here; they do not establish that a proposed experiment improved a business metric.',
      ],
      [
        'Current scope',
        'This independent prototype uses seeded KPI and funnel data, simulated booking, and mocked partner integrations. LoadPilot is a rule-based ranking system. The copilot supports product exploration; experiment outcomes and production impact have not been established. The project is not affiliated with or endorsed by Trucker Path.',
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
    'AI engineering',
    'Python · LangGraph · Claude · Gemini · MCP · Typed tools · Grounded generation',
  ],
  [
    'Retrieval & data',
    'RAG · Embeddings · Vector similarity search · Clustering · PostgreSQL · Redis',
  ],
  [
    'Cloud & pipelines',
    'Google Cloud · Vertex AI · Cloud Functions Gen2 · Firestore · Pub/Sub · Asynchronous workflows',
  ],
  [
    'Evaluation & reliability',
    'Schema validation · Intent evaluation · Latency measurement · Deterministic fallbacks · Rate limits · Cost controls · Audit records',
  ],
  [
    'Full-stack engineering',
    'TypeScript · React · Next.js · FastAPI · API routes · Tailwind CSS · Native/UI integration',
  ],
  [
    'Recommendations & decisions',
    'Feature-weighted ranking · Plausibility filtering · Diversity selection · Explainable scoring · Constraint handling',
  ],
  [
    'Audio systems',
    'C++20 · JUCE · Faust · DSP · WAV rendering · Signal inspection · Aligned comparison',
  ],
  [
    'Verification & state control',
    'Independent numerical evaluation · Adversarial testing · Mutation testing · Revision-bound proposals · Stale-state checks · Undo',
  ],
  [
    'Product',
    'Workflow design · Scoring · Experiment planning · Feedback synthesis · Hypothesis development · PRD drafting',
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
