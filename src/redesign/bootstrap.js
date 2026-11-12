import './styles.css'
import { enhanceCalculators } from './calculator.js'

// Everything here is optional polish over complete static HTML: no framework,
// no scroll listeners, and no work on the main thread between observer calls.
const root = document.documentElement
const header = document.querySelector('.site-header')
const nav = header.querySelector('nav')
const indicator = nav.querySelector('.nav-indicator')
const links = [...nav.querySelectorAll('a')]
const targets = links
  .map((link) => document.getElementById(link.hash.slice(1)))
  .filter(Boolean)
const calm = matchMedia('(prefers-reduced-motion: reduce)').matches

let active = ''
function place(link) {
  indicator.style.transform = `translate(${link.offsetLeft}px, ${link.offsetTop + link.offsetHeight - 4}px) scaleX(${link.offsetWidth})`
}
function update() {
  const edge = header.getBoundingClientRect().height + 24
  const current = targets
    .filter((el) => el.getBoundingClientRect().top <= edge)
    .at(-1)
  const atBottom =
    innerHeight + scrollY >= root.scrollHeight - 3 && scrollY > 0
  const next = atBottom ? 'contact' : current?.id || ''
  if (next === active) return
  const link = links.find((a) => a.hash === `#${next}`)
  for (const a of links)
    if (a === link) a.setAttribute('aria-current', 'location')
    else a.removeAttribute('aria-current')
  if (link) {
    if (!active) {
      // First appearance fades in at the link instead of sliding from the edge.
      indicator.style.transition = 'none'
      place(link)
      void indicator.offsetWidth
      indicator.style.transition = ''
    } else place(link)
  }
  indicator.classList.toggle('is-on', Boolean(link))
  active = next
}

if (targets.length) {
  let observer
  const observe = () => {
    const height = Math.ceil(header.getBoundingClientRect().height)
    root.style.setProperty('--header-height', `${height}px`)
    observer?.disconnect()
    // A one-pixel line below the header tracks section boundaries reliably,
    // including sections taller than the viewport.
    observer = new IntersectionObserver(update, {
      rootMargin: `-${height + 24}px 0px -${Math.max(0, innerHeight - height - 25)}px 0px`,
    })
    targets.forEach((el) => observer.observe(el))
    const link = links.find((a) => a.hash === `#${active}`)
    if (link) place(link)
    update()
  }
  new IntersectionObserver(update, { threshold: [0, 1] }).observe(
    document.querySelector('.site-footer'),
  )
  new ResizeObserver(observe).observe(header)
  addEventListener('hashchange', update)
  addEventListener('popstate', update)
  addEventListener('resize', observe)
}

// Reveal content once as it scrolls into view. Only elements that start below
// the viewport are ever hidden, so nothing visible flashes and anything the
// reader jumps past is shown immediately.
if (!calm) {
  const reveal = new IntersectionObserver(
    (entries) => {
      let order = 0
      for (const entry of entries) {
        const el = entry.target
        if (
          !entry.isIntersecting &&
          entry.boundingClientRect.top >= entry.rootBounds.bottom
        ) {
          el.classList.add('reveal-pending')
          continue
        }
        if (el.classList.contains('reveal-pending')) {
          if (entry.isIntersecting) {
            el.style.transitionDelay = `${Math.min(order++, 5) * 70}ms`
            el.addEventListener(
              'transitionend',
              () => (el.style.transitionDelay = ''),
              { once: true },
            )
          } else el.style.transition = 'none'
          el.classList.remove('reveal-pending')
        }
        reveal.unobserve(el)
      }
    },
    { rootMargin: '0px 0px -8% 0px' },
  )
  for (const el of document.querySelectorAll(
    '.section-heading, .experience-entry, .experience-list > .arrow-link, .project-panel, .biography, .about-art, .skill-list li, .contact-body, .product-screenshot, .reading-column > section, .next-project',
  )) {
    el.classList.add('reveal')
    reveal.observe(el)
  }
}

enhanceCalculators()
