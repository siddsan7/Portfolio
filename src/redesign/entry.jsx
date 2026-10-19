import { renderToStaticMarkup } from 'react-dom/server'
import { Site } from './Site.jsx'
export const render = (path) => renderToStaticMarkup(<Site path={path} />)
