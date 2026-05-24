import { Link } from 'react-router-dom'
import { profile } from '../../data/profile.js'

const footerLinks = [
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/skills', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10" aria-label="Site footer">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-5 py-8 text-sm text-ink-300 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <p>
          {profile.name} - ASU Computer Science - {profile.graduation}
        </p>
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap gap-4">
            {footerLinks.map((link) => (
              <li key={link.to}>
                <Link className="focus-ring rounded-md transition hover:text-ink-50" to={link.to}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  )
}
