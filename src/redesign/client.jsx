import { hydrateRoot } from 'react-dom/client'
import Navigation from './Navigation.jsx'

hydrateRoot(
  document.getElementById('navigation'),
  <Navigation home={location.pathname === '/'} />,
)
