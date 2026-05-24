import Reveal from '../components/Reveal.jsx'
import ProjectGrid from '../components/projects/ProjectGrid.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  return (
    <section className="section-shell" aria-labelledby="projects-heading">
      <Reveal>
        <SectionHeading
          eyebrow="Projects"
          title="A routed project gallery built for scanning and deeper review."
        >
          Each card opens a dedicated detail page with role, technologies, impact-oriented notes, and clearly marked
          placeholders for missing links and screenshots.
        </SectionHeading>
      </Reveal>
      <div className="mt-10">
        <ProjectGrid projects={projects} />
      </div>
    </section>
  )
}
