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
      <div className="header-actions">
        <a className="resume-nav arrow-link" href={resumeUrl}>
          Résumé{' '}
          <span className="arrow" aria-hidden="true">
            <span>↗</span>
          </span>
        </a>
        {/* Hidden until the script that makes it work has loaded. */}
        <button
          className="theme-toggle"
          type="button"
          aria-label="Dark theme"
          aria-pressed="false"
          hidden
        >
          <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
            <mask id="theme-moon">
              <rect width="24" height="24" fill="#fff" />
              <circle className="moon-cut" cx="27" cy="3" r="7" fill="#000" />
            </mask>
            <circle className="sun-core" cx="12" cy="12" r="5" mask="url(#theme-moon)" />
            <g className="sun-rays">
              <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
            </g>
          </svg>
        </button>
      </div>
    </div>
  )
}
