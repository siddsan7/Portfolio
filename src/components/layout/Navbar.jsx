import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from '../ui/Button.jsx'
import { profile } from '../../data/profile.js'

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/skills', label: 'Skills' },
  { to: '/contact', label: 'Contact' },
]

function navClass({ isActive }) {
  return `focus-ring block rounded-lg px-3 py-2 text-sm font-semibold transition ${
    isActive ? 'bg-signal-cyan/12 text-signal-cyan' : 'text-ink-300 hover:bg-white/8 hover:text-ink-50'
  }`
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-graphite-950/86 backdrop-blur-xl">
      <nav
        className="mx-auto flex min-h-20 w-full max-w-7xl items-center justify-between gap-5 px-5 sm:px-8 lg:px-12"
        aria-label="Primary navigation"
      >
        <Link className="focus-ring rounded-lg text-sm font-semibold text-ink-50" to="/">
          {profile.shortName}
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink className={navClass} to={link.to} end={link.end}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button href={profile.resume} variant="secondary" target="_blank" rel="noreferrer">
            Resume
          </Button>
        </div>

        <button
          className="focus-ring inline-flex min-h-11 min-w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-ink-50 md:hidden"
          type="button"
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X aria-hidden="true" size={20} /> : <Menu aria-hidden="true" size={20} />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/10 bg-graphite-950 px-5 py-4 md:hidden">
          <ul className="grid gap-2">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink className={navClass} to={link.to} end={link.end} onClick={() => setOpen(false)}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button
            className="mt-4 w-full"
            href={profile.resume}
            variant="secondary"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            Resume and contact
          </Button>
        </div>
      ) : null}
    </header>
  )
}
