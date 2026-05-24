import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Footer from './Footer.jsx'
import Navbar from './Navbar.jsx'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [pathname])

  return (
    <div className="min-h-screen overflow-x-hidden bg-graphite-950 text-ink-50">
      <a
        className="focus-ring fixed left-4 top-4 z-50 -translate-y-24 rounded-lg bg-signal-cyan px-4 py-2 text-sm font-semibold text-graphite-950 transition focus-visible:translate-y-0"
        href="#main"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
