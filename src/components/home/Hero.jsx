import { ArrowRight, Download, GraduationCap, MapPin } from 'lucide-react'
import Reveal from '../Reveal.jsx'
import Button from '../ui/Button.jsx'
import Badge from '../ui/Badge.jsx'
import { profile } from '../../data/profile.js'

const focusAreas = ['AI', 'Full-stack', 'Product engineering', 'Systems', 'D3', 'Human-centered']

export default function Hero() {
  return (
    <section className="section-shell pt-16 lg:pt-24" aria-labelledby="home-heading">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <Reveal>
          <Badge tone="accent">{profile.graduation}</Badge>
          <h1 id="home-heading" className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] text-ink-50 sm:text-6xl lg:text-7xl">
            Siddharth Sanjay
          </h1>
          <p className="mt-5 max-w-2xl text-xl leading-8 text-ink-200 sm:text-2xl">
            Product-focused CS student at Arizona State University building software across AI, education tools,
            visualization, systems, and human-centered engineering.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/projects">
              View projects
              <ArrowRight aria-hidden="true" size={18} />
            </Button>
            <Button href={profile.resume} variant="secondary" target="_blank" rel="noreferrer">
              Resume and links
              <Download aria-hidden="true" size={18} />
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-2" aria-label="Siddharth's focus areas">
            {focusAreas.map((area) => (
              <Badge key={area}>{area}</Badge>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="surface-card relative overflow-hidden p-6">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal-cyan to-transparent" />
            <div className="rounded-2xl border border-dashed border-signal-cyan/35 bg-graphite-950/70 p-6">
              <p className="text-sm font-semibold text-signal-green">Portfolio snapshot</p>
              <p className="mt-4 text-3xl font-semibold leading-tight text-ink-50">
                A builder profile for recruiters who need signal quickly.
              </p>
              <p className="mt-4 leading-7 text-ink-300">{profile.focus}</p>
              <div className="mt-6 grid gap-3 text-sm text-ink-300">
                <p className="flex items-center gap-2">
                  <GraduationCap aria-hidden="true" size={17} className="text-signal-cyan" />
                  {profile.role}
                </p>
                <p className="flex items-center gap-2">
                  <MapPin aria-hidden="true" size={17} className="text-signal-cyan" />
                  {profile.location}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
