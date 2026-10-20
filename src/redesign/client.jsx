import { hydrateRoot } from 'react-dom/client'
import Navigation from './Navigation.jsx'
import { enhanceCalculators } from './calculator.js'

hydrateRoot(
  document.getElementById('navigation'),
  <Navigation home={location.pathname === '/'} />,
)

enhanceCalculators()
