import { resumeUrl } from './resume.js'

const sections = ['experience', 'work', 'about', 'skills', 'contact']

// Static markup only. `bootstrap.js` tracks the active section and moves the
// single indicator; every link works without it.
export default function Navigation({ home = false }) {
  return (
    <div className="header-inner">
      <a className="wordmark" href={home ? '#top' : '/#top'}>
        Siddharth Sanjay
      </a>
      <nav aria-label="Main navigation">
        {sections.map((id) => (
          <a key={id} href={`${home ? '' : '/'}#${id}`}>
            {id[0].toUpperCase() + id.slice(1)}
          </a>
        ))}
        <span className="nav-indicator" aria-hidden="true" />
      </nav>
      <a className="resume-nav arrow-link" href={resumeUrl}>
        Résumé <span aria-hidden="true">↗</span>
      </a>
    </div>
  )
}
