import { Download, Github, Linkedin, Mail } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import { profile } from '../data/profile.js'

const contactItems = [
  { label: 'Email', value: profile.email, icon: Mail },
  { label: 'GitHub', value: profile.github, icon: Github },
  { label: 'LinkedIn', value: profile.linkedin, icon: Linkedin },
  { label: 'Resume PDF', value: profile.resume, icon: Download },
]

export default function Contact() {
  return (
    <section className="section-shell" aria-labelledby="contact-heading">
      <Reveal>
        <SectionHeading eyebrow="Contact" title="Recruiters and collaborators can start here.">
          The resume link is live. Replace the remaining GitHub, LinkedIn, and preferred contact email placeholders before
          publishing the site.
        </SectionHeading>
      </Reveal>

      <div className="mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="surface-card p-6">
          <h2 className="text-2xl font-semibold text-ink-50">Opportunity focus</h2>
          <p className="mt-4 leading-8 text-ink-300">
            Interested in internships, AI/product roles, startup teams, software engineering work, and research-oriented
            opportunities where technical thinking and communication both matter.
          </p>
        </Reveal>

        <div className="grid gap-3">
          {contactItems.map(({ label, value, icon: Icon }, index) => {
            const isLink = value.startsWith('http')

            return (
              <Reveal key={label} delay={index * 0.04}>
                <div className="rounded-xl border border-dashed border-signal-cyan/35 bg-graphite-900/75 p-4">
                  <p className="flex items-center gap-2 text-sm font-semibold text-ink-50">
                    <Icon aria-hidden="true" size={17} className="text-signal-cyan" />
                    {label}
                  </p>
                  {isLink ? (
                    <a
                      className="focus-ring mt-2 inline-block rounded-lg text-sm text-signal-cyan hover:text-ink-50"
                      href={value}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="mt-2 text-sm text-ink-300">{value}</p>
                  )}
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
