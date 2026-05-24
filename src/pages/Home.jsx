import ContactCTA from '../components/home/ContactCTA.jsx'
import FeaturedProjects from '../components/home/FeaturedProjects.jsx'
import Hero from '../components/home/Hero.jsx'
import SkillsPreview from '../components/home/SkillsPreview.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/ui/Button.jsx'
import SectionHeading from '../components/ui/SectionHeading.jsx'
import { profile } from '../data/profile.js'

export default function Home() {
  return (
    <>
      <Hero />
      <section className="section-shell" aria-labelledby="about-preview-heading">
        <Reveal className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading as="h2" eyebrow="About preview" title="CS student, builder, and technical communicator." />
          <div className="space-y-5 text-base leading-8 text-ink-300">
            <p>{profile.story}</p>
            <p>
              The full about page expands on Siddharth's background, areas of interest, and the professional story
              connecting product engineering, data visualization, systems, and human-centered software.
            </p>
            <Button to="/about" variant="secondary">
              Read about Siddharth
            </Button>
          </div>
        </Reveal>
      </section>
      <FeaturedProjects />
      <SkillsPreview />
      <ContactCTA />
    </>
  )
}
