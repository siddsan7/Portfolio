import { ArrowUpRight, Github, LockKeyhole } from 'lucide-react'
import { motion, useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Badge from '../ui/Badge.jsx'
import Button from '../ui/Button.jsx'

function PlaceholderPill({ children }) {
  return (
    <span className="inline-flex min-h-9 items-center justify-center gap-2 rounded-lg border border-dashed border-signal-cyan/35 px-3 text-xs font-semibold text-ink-300">
      <LockKeyhole aria-hidden="true" size={14} />
      {children}
    </span>
  )
}

export default function ProjectCard({ project, compact = false }) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.article
      className="group surface-card flex h-full flex-col overflow-hidden"
      whileHover={reduceMotion ? undefined : { y: -5 }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
    >
      <Link className="focus-ring block rounded-t-2xl" to={`/projects/${project.slug}`} aria-label={`View ${project.title} project details`}>
        <div className="relative overflow-hidden border-b border-white/10">
          <img
            src={project.image}
            alt={project.imageAlt}
            width="960"
            height="540"
            loading={compact ? 'lazy' : 'eager'}
            className="aspect-[16/10] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite-950/35 via-transparent to-transparent" />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <div className="mb-4 flex flex-wrap gap-2">
          <Badge tone="accent">{project.category}</Badge>
          <Badge tone="green">{project.status}</Badge>
        </div>
        <h2 className="text-2xl font-semibold text-ink-50">
          <Link className="focus-ring rounded-md transition hover:text-signal-cyan" to={`/projects/${project.slug}`}>
            {project.title}
          </Link>
        </h2>
        <p className="mt-3 leading-7 text-ink-300">{project.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} technology stack`}>
          {project.stack.slice(0, compact ? 4 : 6).map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>

        <div className="mt-auto flex flex-wrap gap-3 pt-6">
          <Button to={`/projects/${project.slug}`} variant="secondary" className="min-h-10 px-3">
            Details
            <ArrowUpRight aria-hidden="true" size={16} />
          </Button>
          {project.links.repo ? (
            <Button href={project.links.repo} variant="ghost" className="min-h-10 px-3" target="_blank" rel="noreferrer">
              GitHub
              <Github aria-hidden="true" size={16} />
            </Button>
          ) : (
            <PlaceholderPill>GitHub placeholder</PlaceholderPill>
          )}
        </div>
      </div>
    </motion.article>
  )
}
