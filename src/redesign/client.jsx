import { hydrateRoot } from 'react-dom/client'
import Navigation from './Navigation.jsx'
import './styles.css'

hydrateRoot(
  document.getElementById('navigation'),
  <Navigation home={location.pathname === '/'} />,
)
