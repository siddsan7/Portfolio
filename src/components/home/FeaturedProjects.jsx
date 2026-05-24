import { ArrowRight } from 'lucide-react'
import Reveal from '../Reveal.jsx'
import ProjectCard from '../projects/ProjectCard.jsx'
import Button from '../ui/Button.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { projects } from '../../data/projects.js'

export default function FeaturedProjects() {
  const featuredProjects = projects.filter((project) => project.featured)

  return (
    <section className="section-shell" aria-labelledby="featured-projects-heading">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <Reveal>
          <SectionHeading as="h2" eyebrow="Featured projects" title="Project work with product, technical, and user context." />
        </Reveal>
        <Reveal delay={0.05}>
          <Button to="/projects" variant="secondary">
            See all projects
            <ArrowRight aria-hidden="true" size={18} />
          </Button>
        </Reveal>
      </div>
      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {featuredProjects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 0.05}>
            <ProjectCard project={project} compact />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
