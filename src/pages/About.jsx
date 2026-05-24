import { Brain, Code2, Database, LineChart, Server, UserRoundCheck } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import { profile } from '../data/profile.js'

const interests = [
  { icon: Brain, label: 'AI and personalization', text: 'Product thinking around adaptive learning, onboarding, and roadmap generation.' },
  { icon: Code2, label: 'Full-stack development', text: 'React interfaces, validation flows, auth-aware architecture, and pragmatic product scaffolding.' },
  { icon: UserRoundCheck, label: 'Product engineering', text: 'Turning user needs into clear flows, focused interfaces, and maintainable implementation plans.' },
  { icon: Server, label: 'Systems', text: 'Linux, C, kernel modules, memory allocation, and lower-level debugging practice.' },
  { icon: LineChart, label: 'Data visualization', text: 'D3 v7, interaction design, visual encoding, and data storytelling.' },
  { icon: Database, label: 'Education technology', text: 'Music education, standards matching, classroom tools, and human-centered learning systems.' },
]

export default function About() {
  return (
    <section className="section-shell" aria-labelledby="about-heading">
      <Reveal>
        <SectionHeading eyebrow="About" title="A CS student building across product, data, and systems." />
      </Reveal>

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <Reveal className="surface-card p-6">
          <p className="text-sm font-semibold text-signal-green">{profile.role}</p>
          <p className="mt-4 text-3xl font-semibold leading-tight text-ink-50">{profile.graduation}</p>
          <p className="mt-4 leading-8 text-ink-300">{profile.story}</p>
        </Reveal>

        <Reveal delay={0.06} className="space-y-5 text-base leading-8 text-ink-300">
          <p>
            Siddharth Sanjay studies Computer Science at Arizona State University and builds projects that connect
            technical depth with practical product judgment. The work ranges from AI-informed learning roadmaps and
            full-stack education tools to D3 visualizations, campus safety concepts, and Linux systems programming.
          </p>
          <p>
            The throughline is clear communication: make the problem understandable, choose the right technical shape,
            and keep the user experience grounded. That matters for recruiters, startup teams, AI/product groups, and
            graduate reviewers who need to understand both what was built and how Siddharth thinks.
          </p>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {interests.map(({ icon: Icon, label, text }, index) => (
          <Reveal key={label} delay={(index % 3) * 0.04} className="surface-card p-5">
            <Icon aria-hidden="true" className="text-signal-cyan" size={22} />
            <h2 className="mt-4 text-xl font-semibold text-ink-50">{label}</h2>
            <p className="mt-2 text-sm leading-6 text-ink-300">{text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
