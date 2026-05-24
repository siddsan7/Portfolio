export const projects = [
  {
    slug: 'mytune',
    title: 'MyTune',
    summary: 'Personalized music education web app focused initially on guitar.',
    status: 'Prototype / product exploration',
    category: 'AI product',
    role: 'Product-minded full-stack builder',
    featured: true,
    image: '/assets/projects/project-placeholder.svg',
    imageAlt: 'Placeholder screenshot for the MyTune project.',
    stack: ['React', 'Tailwind CSS', 'Supabase', 'BetterAuth', 'Stripe planned'],
    highlights: [
      'Generates adaptive learning roadmaps from onboarding answers, music taste, goals, and progress signals.',
      'Frames music education as a personalization problem instead of a static lesson catalog.',
      'Connects onboarding, user state, roadmap generation, and future monetization architecture.',
    ],
    caseStudy: {
      problem: 'Beginner guitar learners often need clearer next steps that connect taste, goals, and practice habits.',
      approach:
        'Designed an onboarding-first product flow that turns user preferences into a structured learning roadmap.',
      technical:
        'Built around React and Tailwind with Supabase/Auth architecture in mind, keeping payments as a planned extension instead of a v1 dependency.',
      next:
        'Replace placeholder screenshots, add real demo/repo links, and document the roadmap-generation logic once finalized.',
    },
    links: {
      demo: '',
      repo: '',
      caseStudy: '',
    },
  },
  {
    slug: 'skipcourse',
    title: 'SkipCourse',
    summary: 'Capstone platform for accreditation and educational standards matching.',
    status: 'Capstone project',
    category: 'Education technology',
    role: 'Backend and product flow contributor',
    featured: true,
    image: '/assets/projects/project-placeholder.svg',
    imageAlt: 'Placeholder screenshot for the SkipCourse project.',
    stack: ['Backend flow', 'JSON standards blocks', 'Validation logic', 'Product refinement'],
    highlights: [
      'Validates whether student experiences match educational standards or course requirements.',
      'Uses structured standard blocks to make matching and validation easier to reason about.',
      'Balances educational impact with product clarity for students and reviewers.',
    ],
    caseStudy: {
      problem:
        'Students and evaluators need a clearer way to compare experiential learning against course or accreditation standards.',
      approach:
        'Modeled standards as structured data and planned validation flows around explicit requirement matching.',
      technical:
        'Focused on backend-oriented matching logic, JSON standard blocks, and reviewable validation output.',
      next:
        'Add confirmed architecture details, repository link, and screenshots from the capstone prototype.',
    },
    links: {
      demo: '',
      repo: '',
      caseStudy: '',
    },
  },
  {
    slug: 'autonomous-safety-escort',
    title: 'Autonomous Safety Escort',
    summary: 'Safety-focused campus transportation and escort concept with automation at its core.',
    status: 'EPICS project',
    category: 'Human-centered systems',
    role: 'Applied engineering and user-centered systems contributor',
    featured: true,
    image: '/assets/projects/project-placeholder.svg',
    imageAlt: 'Placeholder screenshot for the Autonomous Safety Escort project.',
    stack: ['Robotics concepts', 'Autonomy', 'Safety design', 'Campus mobility'],
    highlights: [
      'Explores an assisted or autonomous escort concept for safer campus movement.',
      'Connects engineering choices to real user needs, trust, and campus context.',
      'Shows range beyond web apps into safety, robotics, and applied systems thinking.',
    ],
    caseStudy: {
      problem:
        'Campus safety tools need to be reliable, approachable, and responsive to the way students actually move.',
      approach:
        'Explored a safety escort concept that combines autonomy, human-centered constraints, and campus impact.',
      technical:
        'Framed implementation around robotics/autonomy requirements and the operational demands of a safety-focused system.',
      next:
        'Add project visuals, exact technical contributions, and any confirmed prototype details.',
    },
    links: {
      demo: '',
      repo: '',
      caseStudy: '',
    },
  },
  {
    slug: 'beatpad-music-education-web-app',
    title: 'Beatpad / Music Education Web App',
    summary: 'Browser-based beat machine for learning music production fundamentals.',
    status: 'Piloted in Arizona schools',
    category: 'Creative education',
    role: 'Interactive frontend and audio programming builder',
    featured: false,
    image: '/assets/projects/project-placeholder.svg',
    imageAlt: 'Placeholder screenshot for the Beatpad music education project.',
    stack: ['React', 'Tailwind CSS', 'Howler.js', 'Audio UX'],
    highlights: [
      'Creates an interactive beat-making surface for middle and high school music learners.',
      'Uses browser audio programming to make production concepts more tactile and approachable.',
      'Designed for real education contexts, with classroom use in Arizona schools.',
    ],
    caseStudy: {
      problem:
        'Music production tools can be intimidating for younger learners who need fast feedback and clear interaction.',
      approach:
        'Built a simplified beat machine that foregrounds interaction, rhythm, and creative exploration.',
      technical:
        'Used React, Tailwind, and Howler.js to coordinate UI state, audio playback, and responsive controls.',
      next:
        'Add a live demo, classroom screenshots if available, and confirmed repository URL.',
    },
    links: {
      demo: '',
      repo: '',
      caseStudy: '',
    },
  },
  {
    slug: 'd3-information-visualization-projects',
    title: 'D3 / Information Visualization Projects',
    summary: 'Interactive data visualizations using D3 v7 and web-based storytelling patterns.',
    status: 'Coursework / visualization portfolio',
    category: 'Data visualization',
    role: 'Frontend visualization engineer',
    featured: false,
    image: '/assets/projects/project-placeholder.svg',
    imageAlt: 'Placeholder screenshot for D3 information visualization projects.',
    stack: ['D3 v7', 'SVG', 'JavaScript', 'Interaction design', 'Data storytelling'],
    highlights: [
      'Includes choropleth maps, Sankey diagrams, treemaps, scatterplot/boxplot interactions, and world energy views.',
      'Focuses on visual encoding, interaction design, and turning data into readable stories.',
      'Shows frontend engineering comfort beyond component libraries.',
    ],
    caseStudy: {
      problem:
        'Complex datasets need interaction and visual structure before patterns become legible.',
      approach:
        'Used D3 layouts and custom interactions to make comparisons, flows, and distributions easier to inspect.',
      technical:
        'Implemented SVG-driven visual encodings, interaction states, and responsive chart containers.',
      next:
        'Add thumbnails and links for individual visualization examples.',
    },
    links: {
      demo: '',
      repo: '',
      caseStudy: '',
    },
  },
  {
    slug: 'systems-kernel-projects',
    title: 'Systems / Kernel Projects',
    summary: 'Operating systems and Linux kernel development projects in C/Linux environments.',
    status: 'Systems programming coursework',
    category: 'Systems programming',
    role: 'Low-level debugging and OS internals learner',
    featured: false,
    image: '/assets/projects/project-placeholder.svg',
    imageAlt: 'Placeholder screenshot for systems and kernel projects.',
    stack: ['C', 'Linux', 'Kernel modules', 'Memory allocation', 'Debugging'],
    highlights: [
      'Worked with Linux kernel modules, memory allocation, low-level debugging, and OS concepts.',
      'Strengthened reasoning about abstractions below the application layer.',
      'Complements product and frontend work with systems-level technical depth.',
    ],
    caseStudy: {
      problem:
        'Reliable software depends on understanding the lower-level systems that shape performance and behavior.',
      approach:
        'Explored OS internals through C programming, kernel module work, and debugging exercises.',
      technical:
        'Focused on memory, Linux development workflows, and careful diagnosis of low-level behavior.',
      next:
        'Add confirmed project names, repository links if public, and screenshots or diagrams.',
    },
    links: {
      demo: '',
      repo: '',
      caseStudy: '',
    },
  },
]
