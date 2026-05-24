import Reveal from '../Reveal.jsx'
import ProjectCard from './ProjectCard.jsx'

export default function ProjectGrid({ projects }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project, index) => (
        <Reveal key={project.slug} delay={(index % 3) * 0.04}>
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </div>
  )
}
