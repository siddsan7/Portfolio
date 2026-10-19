import { person, projects, skills } from './content.js'
import { resume } from './resume.js'
import Navigation from './Navigation.jsx'
import { ProjectVisual, Resonance } from './Artwork.jsx'
import { projects as archivedProjects } from '../data/projects.js'

export function ArrowLink({ href, children, ...props }) {
  return (
    <a className="arrow-link" href={href} {...props}>
      {children} <span aria-hidden="true">↗</span>
    </a>
  )
}

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
          <p className="methods">{project.methods}</p>
        </div>
        <ProjectVisual project={project} />
        <div className="panel-actions">
          <ArrowLink
            href={`/projects/${project.slug}/`}
            aria-label={`${project.name} case study`}
          >
            Case study
          </ArrowLink>
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
          <p className="hero-premise">{person.premise}</p>
          <p className="hero-summary">{person.summary}</p>
          <div className="hero-actions">
            <a className="primary" href="#work">
              View work <span aria-hidden="true">↓</span>
            </a>
            <ArrowLink href="/resume/">Résumé</ArrowLink>
          </div>
        </div>
        <div className="hero-art">
          <Resonance />
          <p>Music, signals, software.</p>
        </div>
      </section>
      <section id="work" className="work section">
        <SectionHeading
          number="01"
          label="Selected projects"
          title="Selected projects"
        >
          Three explorations in AI, audio, and product engineering.
        </SectionHeading>
        <div className="project-list">
          {projects.map((p, i) => (
            <ProjectPanel key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>
      <section id="about" className="about section">
        <SectionHeading number="02" label="About" title="About me" />
        <div className="about-body">
          <div className="biography">
            {person.about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="about-art">
            <Resonance print />
          </div>
        </div>
      </section>
      <section id="skills" className="skills section">
        <SectionHeading
          number="03"
          label="Toolkit"
          title="Skills in practice"
        />
        <ul className="skill-list">
          {skills.map(([area, tools, label, href]) => (
            <li key={area}>
              <h3>{area}</h3>
              <p>{tools}</p>
              <ArrowLink href={href}>{label}</ArrowLink>
            </li>
          ))}
        </ul>
      </section>
      <section id="contact" className="contact section">
        <SectionHeading number="04" label="Contact" title="Let’s talk." />
        <div className="contact-body">
          <a className="email" href={`mailto:${person.email}`}>
            {person.email}
          </a>
          <div className="contact-links">
            <ArrowLink href={person.github}>GitHub</ArrowLink>
            <ArrowLink href={person.linkedin}>LinkedIn</ArrowLink>
            <ArrowLink href="/resume/">Résumé</ArrowLink>
          </div>
        </div>
      </section>
    </>
  )
}

function CaseStudy({ project }) {
  return (
    <article className="case-study">
      <a className="back-link" href="/#work">
        ← Back to selected work
      </a>
      <header className="case-header">
        <p className="eyebrow">{project.category} / Case study</p>
        <h1>{project.name}</h1>
        <p className="case-premise">{project.premise}</p>
        <p className="case-summary">{project.summary}</p>
        <p className="status">{project.status}</p>
        <ArrowLink href={project.repo}>Explore the repository</ArrowLink>
      </header>
      <ProjectVisual project={project} />
      <div className="reading-column">
        <section>
          <h2>My contribution</h2>
          <p>{project.contribution}</p>
        </section>
        <section>
          <h2>The problem</h2>
          <p>{project.problem}</p>
        </section>
        {project.sections.map(([heading, text]) => (
          <section
            key={heading}
            id={heading.toLowerCase().replaceAll(/[^a-z0-9]+/g, '-')}
          >
            <h2>{heading}</h2>
            <p>{text}</p>
          </section>
        ))}
        <section className="sources">
          <h2>Source evidence</h2>
          <p>
            Read the public implementation and supporting documentation below.
          </p>
          <ul>
            {project.sources.map(([label, path]) => (
              <li key={path}>
                <ArrowLink href={`${project.repo}/blob/main/${path}`}>
                  {label}
                </ArrowLink>
              </li>
            ))}
          </ul>
        </section>
        <aside className="next-project">
          <p className="eyebrow">Continue exploring</p>
          <ArrowLink
            href={`/projects/${projects[(projects.indexOf(project) + 1) % projects.length].slug}/`}
          >
            {projects[(projects.indexOf(project) + 1) % projects.length].name}
          </ArrowLink>
        </aside>
      </div>
    </article>
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
          <a className="primary" href="/Siddharth-Sanjay-Resume.pdf" download>
            Download résumé PDF <span aria-hidden="true">↓</span>
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
        <h2>Selected projects</h2>
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
          {skills.map(([area, tools, label, href]) => (
            <li key={area}>
              {area}: {tools}. <a href={href}>{label}</a>.
            </li>
          ))}
        </ul>
      </section>
      <p className="resume-note">
        This concise edition uses the supplied résumé for education and
        experience, and public repository evidence for the featured projects.{' '}
        <a href={person.resumeSource}>Original résumé source</a>.
      </p>
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
        <a href="/#work">Explore selected projects</a> or{' '}
        <a href={`mailto:${person.email}`}>contact Siddharth</a>.
      </p>
    </section>
  )
}

function ArchivedProject({ project }) {
  return (
    <article className="reading-column archived-project">
      <a className="back-link" href="/#work">
        ← Back to selected work
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
        <a href="/#work">See current selected projects</a>.
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
          <CaseStudy project={project} />
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
