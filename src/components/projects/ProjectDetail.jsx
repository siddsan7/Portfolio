import { ArrowLeft, ExternalLink, Github, LockKeyhole } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import Reveal from '../Reveal.jsx'
import Badge from '../ui/Badge.jsx'
import Button from '../ui/Button.jsx'
import { projects } from '../../data/projects.js'

function PlaceholderLink({ label }) {
  return (
    <span className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-dashed border-signal-cyan/35 px-4 text-sm font-semibold text-ink-300">
      <LockKeyhole aria-hidden="true" size={16} />
      {label} placeholder
    </span>
  )
}

function DetailLink({ href, label, icon: Icon }) {
  if (!href) {
    return <PlaceholderLink label={label} />
  }

  return (
    <Button href={href} variant="secondary" target="_blank" rel="noreferrer">
      {label}
      <Icon aria-hidden="true" size={16} />
    </Button>
  )
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return (
      <section className="section-shell">
        <Reveal className="surface-card p-8">
          <p className="eyebrow">Project not found</p>
          <h1 className="mt-3 text-4xl font-semibold text-ink-50">This project route does not exist.</h1>
          <Button className="mt-6" to="/projects" variant="secondary">
            <ArrowLeft aria-hidden="true" size={16} />
            Back to projects
          </Button>
        </Reveal>
      </section>
    )
  }

  return (
    <section className="section-shell" aria-labelledby="project-detail-heading">
      <Reveal>
        <Link className="focus-ring inline-flex items-center gap-2 rounded-lg text-sm font-semibold text-ink-300 transition hover:text-ink-50" to="/projects">
          <ArrowLeft aria-hidden="true" size={16} />
          Back to projects
        </Link>
      </Reveal>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <Reveal>
          <div className="flex flex-wrap gap-2">
            <Badge tone="accent">{project.category}</Badge>
            <Badge tone="green">{project.status}</Badge>
          </div>
          <h1 id="project-detail-heading" className="mt-5 text-4xl font-semibold leading-tight text-ink-50 sm:text-6xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-3xl text-xl leading-8 text-ink-200">{project.summary}</p>
          <p className="mt-5 leading-8 text-ink-300">{project.role}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <DetailLink href={project.links.demo} label="Live demo" icon={ExternalLink} />
            <DetailLink href={project.links.repo} label="GitHub" icon={Github} />
            <DetailLink href={project.links.caseStudy} label="Case study" icon={ExternalLink} />
          </div>
        </Reveal>

        <Reveal delay={0.08} className="surface-card overflow-hidden">
          <img src={project.image} alt={project.imageAlt} width="960" height="540" className="aspect-[16/10] w-full object-cover" />
        </Reveal>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
        <Reveal className="surface-card p-6">
          <h2 className="text-2xl font-semibold text-ink-50">Technologies</h2>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.04} className="surface-card p-6">
          <h2 className="text-2xl font-semibold text-ink-50">Project notes</h2>
          <dl className="mt-6 grid gap-5 text-sm leading-7 text-ink-300">
            <div>
              <dt className="font-semibold text-ink-50">Problem</dt>
              <dd className="mt-1">{project.caseStudy.problem}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink-50">Approach</dt>
              <dd className="mt-1">{project.caseStudy.approach}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink-50">Technical decisions</dt>
              <dd className="mt-1">{project.caseStudy.technical}</dd>
            </div>
            <div>
              <dt className="font-semibold text-ink-50">What to improve next</dt>
              <dd className="mt-1">{project.caseStudy.next}</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
