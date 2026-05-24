import { ArrowRight } from 'lucide-react'
import Reveal from '../Reveal.jsx'
import Badge from '../ui/Badge.jsx'
import Button from '../ui/Button.jsx'
import SectionHeading from '../ui/SectionHeading.jsx'
import { skillGroups } from '../../data/skills.js'

export default function SkillsPreview() {
  return (
    <section className="section-shell" aria-labelledby="skills-preview-heading">
      <Reveal>
        <SectionHeading as="h2" eyebrow="Technical range" title="A practical mix of product UI, data, and systems depth." />
      </Reveal>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {skillGroups.slice(0, 3).map((group, index) => (
          <Reveal key={group.label} delay={index * 0.05} className="surface-card p-5">
            <h3 className="text-xl font-semibold text-ink-50">{group.label}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.slice(0, 5).map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal className="mt-8" delay={0.08}>
        <Button to="/skills" variant="secondary">
          View full skills page
          <ArrowRight aria-hidden="true" size={18} />
        </Button>
      </Reveal>
    </section>
  )
}
