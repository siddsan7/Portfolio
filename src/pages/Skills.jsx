import Reveal from '../components/Reveal.jsx'
import Badge from '../components/ui/Badge.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import { skillGroups } from '../data/skills.js'

export default function Skills() {
  return (
    <section className="section-shell" aria-labelledby="skills-heading">
      <Reveal>
        <SectionHeading eyebrow="Skills" title="Skill groups organized for recruiter scanning.">
          The categories separate implementation tools from product thinking, systems depth, and visualization work.
          Placeholder entries stay visible until Siddharth confirms exact tools.
        </SectionHeading>
      </Reveal>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal key={group.label} delay={(index % 3) * 0.04} className="surface-card p-5">
            <h2 className="text-xl font-semibold text-ink-50">{group.label}</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
