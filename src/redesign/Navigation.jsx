import { useEffect, useState } from 'react'
import { motion, MotionConfig, useReducedMotion } from 'framer-motion'

const sections = ['experience', 'work', 'about', 'skills', 'contact']

export default function Navigation({ home = false }) {
  const [active, setActive] = useState('')
  const reduced = useReducedMotion()
  useEffect(() => {
    if (!home) return
    const header = document.querySelector('.site-header')
    const targets = sections.map((id) => document.getElementById(id))
    let observer
    function update() {
      const edge = header.getBoundingClientRect().height + 24
      const current = targets
        .filter((el) => el.getBoundingClientRect().top <= edge)
        .at(-1)
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 3
      setActive(atBottom ? 'contact' : current?.id || '')
    }
    function observe() {
      const height = Math.ceil(header.getBoundingClientRect().height)
      document.documentElement.style.setProperty(
        '--header-height',
        `${height}px`,
      )
      observer?.disconnect()
      observer = new IntersectionObserver(update, {
        // A one-pixel line below the header tracks section boundaries reliably,
        // including sections taller than the observer's visible area.
        rootMargin: `-${height + 24}px 0px -${Math.max(0, window.innerHeight - height - 25)}px 0px`,
        threshold: 0,
      })
      targets.forEach((el) => observer.observe(el))
      update()
    }
    const bottomObserver = new IntersectionObserver(update, {
      threshold: [0, 1],
    })
    bottomObserver.observe(document.querySelector('.site-footer'))
    const resize = new ResizeObserver(observe)
    resize.observe(header)
    window.addEventListener('hashchange', update)
    window.addEventListener('popstate', update)
    window.addEventListener('resize', observe)
    observe()
    return () => {
      observer?.disconnect()
      resize.disconnect()
      bottomObserver.disconnect()
      window.removeEventListener('hashchange', update)
      window.removeEventListener('popstate', update)
      window.removeEventListener('resize', observe)
    }
  }, [home])
  return (
    <MotionConfig reducedMotion="user">
      <div className="header-inner">
        <a className="wordmark" href={home ? '#top' : '/#top'}>
          Siddharth Sanjay
        </a>
        <nav aria-label="Main navigation">
          {sections.map((id) => (
            <a
              key={id}
              href={`${home ? '' : '/'}#${id}`}
              aria-current={active === id ? 'location' : undefined}
            >
              {id[0].toUpperCase() + id.slice(1)}
              {active === id && (
                <motion.span
                  className="nav-indicator"
                  layoutId="section-indicator"
                  transition={
                    reduced
                      ? { duration: 0 }
                      : { type: 'spring', bounce: 0, duration: 0.26 }
                  }
                />
              )}
            </a>
          ))}
        </nav>
        <a className="resume-nav arrow-link" href="/resume/">
          Résumé <span aria-hidden="true">↗</span>
        </a>
      </div>
    </MotionConfig>
  )
}
