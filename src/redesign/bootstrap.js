import './styles.css'

// Native links and content already work. Give the eager image and font a
// painted frame before downloading the optional React/Motion enhancement.
async function enhanceNavigation() {
  await document.fonts.ready
  const hero = document.querySelector('.resonance')
  if (hero) await hero.decode().catch(() => {})
  requestAnimationFrame(() => {
    requestAnimationFrame(() => import('./client.jsx'))
  })
}

if (document.readyState === 'complete') enhanceNavigation()
else window.addEventListener('load', enhanceNavigation, { once: true })
