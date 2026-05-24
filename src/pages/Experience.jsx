import { BriefcaseBusiness, CalendarDays, MapPin } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import { experience } from '../data/experience.js'

export default function Experience() {
  return (
    <section className="section-shell" aria-labelledby="experience-heading">
      <Reveal>
        <SectionHeading eyebrow="Experience" title="Leadership, production web work, and technical communication." />
      </Reveal>

      <div className="mt-10 grid gap-5">
        {experience.map((item, index) => (
          <Reveal key={`${item.role}-${item.organization}`} delay={index * 0.05}>
            <article className="surface-card p-6">
              <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <p className="flex items-center gap-2 text-sm font-semibold text-signal-cyan">
                    <BriefcaseBusiness aria-hidden="true" size={17} />
                    {item.type}
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold text-ink-50">{item.role}</h2>
                  <p className="mt-2 text-lg text-ink-200">{item.organization}</p>
                  <div className="mt-4 flex flex-wrap gap-3 text-sm text-ink-300">
                    <span className="inline-flex items-center gap-2">
                      <CalendarDays aria-hidden="true" size={16} className="text-signal-green" />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <MapPin aria-hidden="true" size={16} className="text-signal-green" />
                      {item.location}
                    </span>
                  </div>
                </div>
                <ul className="space-y-3 text-sm leading-7 text-ink-300">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2 h-2 w-2 flex-none rounded-full bg-signal-cyan" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
