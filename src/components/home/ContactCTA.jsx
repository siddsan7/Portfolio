import { Mail } from 'lucide-react'
import Reveal from '../Reveal.jsx'
import Button from '../ui/Button.jsx'

export default function ContactCTA() {
  return (
    <section className="section-shell" aria-labelledby="contact-cta-heading">
      <Reveal className="surface-card overflow-hidden p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 id="contact-cta-heading" className="mt-3 text-3xl font-semibold text-ink-50 sm:text-4xl">
              Open to internships, AI/product teams, startup work, and research-oriented opportunities.
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-ink-300">
              The contact page keeps resume, GitHub, LinkedIn, and email placeholders visible until real links are added.
            </p>
          </div>
          <Button to="/contact">
            Contact Siddharth
            <Mail aria-hidden="true" size={18} />
          </Button>
        </div>
      </Reveal>
    </section>
  )
}
