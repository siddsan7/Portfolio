import { person, projects, skills } from './content.js'
import { resume } from './resume.js'
import Navigation from './Navigation.jsx'
import { ProjectVisual, Resonance } from './Artwork.jsx'
import { projects as archivedProjects } from '../data/projects.js'
import ArrowLink from './ArrowLink.jsx'
import CaseStudy from './CaseStudy.jsx'

function SectionHeading({ number, label, title, children }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">
        {number} <span>/</span> {label}
      </p>
      <h2>{title}</h2>
      {children && <p className="section-intro">{children}</p>}
    </div>
  )
}

function ProjectPanel({ project, index }) {
  return (
    <article className="project-panel">
      <header className="panel-strip">
        <h3>
          <span className="project-number">0{index + 1}</span>
          <span className="strip-slash" aria-hidden="true">
            /
          </span>
          {project.name}
        </h3>
        <p>{project.category}</p>
      </header>
      <div className="panel-body">
        <div className="panel-copy">
          <p className="project-premise">{project.premise}</p>
          <p>{project.summary}</p>
          <p className="project-status">{project.caseStudy.status}</p>
          <p className="project-proof">{project.caseStudy.result}</p>
          <p className="methods">{project.caseStudy.methods}</p>
        </div>
        <ProjectVisual project={project} />
        <div className="panel-actions">
          <ArrowLink
            href={`/projects/${project.slug}/`}
            aria-label={`${project.name} case study`}
          >
            Case study
          </ArrowLink>
          <ArrowLink href={`/projects/${project.slug}/#walkthrough`}>Walkthrough</ArrowLink>
          <ArrowLink
            href={project.repo}
            aria-label={`${project.name} on GitHub`}
          >
            GitHub
          </ArrowLink>
        </div>
      </div>
    </article>
  )
}

function Home() {
  return (
    <>
      <section className="hero" aria-labelledby="identity">
        <div className="hero-copy">
          <h1 id="identity">
            Siddharth
            <br />
            Sanjay
          </h1>
          <p className="role">{person.role}</p>
          <p className="hero-credential">ASU Computer Science graduate</p>
          <p className="hero-premise">{person.premise}</p>
          <p className="hero-summary">{person.summary}</p>
          <div className="hero-actions">
            <a className="primary" href="#work">
              View work <span aria-hidden="true">↓</span>
            </a>
            <ArrowLink href={person.resume}>Résumé</ArrowLink>
          </div>
        </div>
        <div className="hero-art">
          <Resonance />
          <p>Tools, evidence, evaluation.</p>
        </div>
      </section>
      <section id="experience" className="experience section">
        <SectionHeading number="01" label="Experience" title="Engineering with teams">
          RAG and asynchronous cloud workflows at SkipCourse. Web delivery,
          mentoring, and stakeholder collaboration at ASU.
        </SectionHeading>
        <div className="experience-list">
          {resume.experience.slice(0, 2).map(job => (
            <article className="experience-entry" key={job.title}>
              <div className="experience-identity">
                <h3>{job.organization}</h3>
                <p>{job.title}</p>
                <p className="experience-dates">{job.dates}</p>
              </div>
              <ul>{job.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
            </article>
          ))}
          <ArrowLink href="/resume/">Full experience and résumé</ArrowLink>
        </div>
      </section>
      <section id="work" className="work section">
        <SectionHeading
          number="02"
          label="Featured projects"
          title="Featured projects"
        >
          AI engineering through grounded recommendations, controlled assistant
          actions, and explainable decision support.
        </SectionHeading>
        <div className="project-list">
          {projects.map((p, i) => (
            <ProjectPanel key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>
      <section id="about" className="about section">
        <SectionHeading number="03" label="About" title="About me" />
        <div className="about-body">
          <div className="biography">
            {person.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="about-art">
            <img
              className="portrait"
              src={person.portrait}
              width="800"
              height="800"
              alt="Siddharth Sanjay smiling in a suit outdoors."
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>
      <section id="skills" className="skills section">
        <SectionHeading
          number="04"
          label="Toolkit"
          title="Skills in practice"
        />
        <ul className="skill-list">
          {skills.map(([area, tools]) => (
            <li key={area}>
              <h3>{area}</h3>
              <p>{tools}</p>
            </li>
          ))}
        </ul>
      </section>
      <section id="contact" className="contact section">
        <SectionHeading number="05" label="Contact" title="Let’s talk." />
        <div className="contact-body">
          <a className="email" href={`mailto:${person.email}`}>
            {person.email}
          </a>
          <div className="contact-links">
            <ArrowLink href={person.github}>GitHub</ArrowLink>
            <ArrowLink href={person.linkedin}>LinkedIn</ArrowLink>
            <ArrowLink href={person.resume}>Résumé</ArrowLink>
          </div>
        </div>
      </section>
    </>
  )
}

function Resume() {
  return (
    <article className="resume-page reading-column">
      <a className="back-link" href="/">
        ← Back to home
      </a>
      <header className="resume-header">
        <p className="eyebrow">Background / Résumé</p>
        <h1>{person.name}</h1>
        <p className="role">{person.role}</p>
        <p>{person.summary}</p>
        <div className="resume-actions">
          <a className="primary" href={person.resume}>
            View résumé <span aria-hidden="true">↗</span>
          </a>
          <ArrowLink href={`mailto:${person.email}`}>{person.email}</ArrowLink>
        </div>
        <div className="contact-links">
          <ArrowLink href={person.github}>GitHub</ArrowLink>
          <ArrowLink href={person.linkedin}>LinkedIn</ArrowLink>
        </div>
      </header>
      <p className="print-contact">
        <a href={`mailto:${person.email}`}>{person.email}</a> ·{' '}
        <a href={person.domain}>siddharthsanjay.com</a>
      </p>
      <section>
        <h2>Education</h2>
        <p>
          {resume.education}
          <br />
          {resume.graduation}
        </p>
      </section>
      <section>
        <h2>Experience</h2>
        {resume.experience.map((job) => (
          <div className="resume-job" key={job.title}>
            <h3>{job.title}</h3>
            <p className="job-meta">
              {job.organization}
              <br />
              {job.dates}
            </p>
            <ul>
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section>
        <h2>Featured projects</h2>
        {projects.map((p) => (
          <div className="resume-project" key={p.slug}>
            <h3>
              <a href={`/projects/${p.slug}/`}>{p.name}</a>
            </h3>
            <p>{p.summary}</p>
            <p className="job-meta">{p.methods}</p>
          </div>
        ))}
      </section>
      <section>
        <h2>Skills in practice</h2>
        <ul>
          {skills.map(([area, tools]) => (
            <li key={area}>
              {area}: {tools}.
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}

function NotFound() {
  return (
    <section className="not-found reading-column">
      <p className="eyebrow">404 / Page not found</p>
      <h1>This page is off the map.</h1>
      <p>The address may have changed, or this page may no longer exist.</p>
      <a className="primary" href="/">
        Back to home
      </a>
      <p>
        <a href="/#work">Explore featured projects</a> or{' '}
        <a href={`mailto:${person.email}`}>contact Siddharth</a>.
      </p>
    </section>
  )
}

function ArchivedProject({ project }) {
  return (
    <article className="reading-column archived-project">
      <a className="back-link" href="/#work">
        ← Back to featured projects
      </a>
      <p className="eyebrow">Previous portfolio / Archive</p>
      <h1>{project.title}</h1>
      <p className="archive-note">
        This page preserves an earlier portfolio entry. Its details have not
        been reverified for the current portfolio. It is not a current project
        case study.
      </p>
      <p>{project.summary}</p>
      <section>
        <h2>Earlier project notes</h2>
        <p>{project.caseStudy.problem}</p>
        <p>{project.caseStudy.approach}</p>
        <p>{project.caseStudy.technical}</p>
      </section>
      <p>
        <a href="/#work">See current featured projects</a>.
      </p>
    </article>
  )
}

export function Site({ path = '/' }) {
  const project = projects.find((p) => path === `/projects/${p.slug}/`)
  const archived = archivedProjects.find((p) => path === `/projects/${p.slug}/`)
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <div id="navigation">
          <Navigation home={path === '/'} />
        </div>
      </header>
      <main id="main" tabIndex="-1" className="site-main">
        <div id="top" />
        {path === '/' ? (
          <Home />
        ) : project ? (
          <CaseStudy project={project} nextProject={projects[(projects.indexOf(project) + 1) % projects.length]} />
        ) : path === '/resume/' ? (
          <Resume />
        ) : archived ? (
          <ArchivedProject project={archived} />
        ) : (
          <NotFound />
        )}
      </main>
      <footer className="site-footer">
        <p>{person.name}</p>
        <a href={person.domain}>siddharthsanjay.com</a>
      </footer>
    </>
  )
}
