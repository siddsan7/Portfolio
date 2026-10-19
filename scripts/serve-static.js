import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { resolve, extname, sep } from 'node:path'
import { pathToFileURL } from 'node:url'
import { gzipSync } from 'node:zlib'
import { redirects, routes, person } from '../src/redesign/content.js'
import { projects as archivedProjects } from '../src/data/projects.js'

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.svg': 'image/svg+xml',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
  '.pdf': 'application/pdf',
  '.png': 'image/png',
  '.webp': 'image/webp',
}
export function createStaticServer(root = resolve('dist')) {
  return createServer(async (request, response) => {
    const url = new URL(request.url, 'http://localhost')
    let path
    try {
      path = decodeURIComponent(url.pathname)
    } catch {
      response.writeHead(400)
      response.end()
      return
    }
    const host = request.headers.host?.split(':')[0]
    if (host === 'www.siddharthsanjay.com') {
      response.writeHead(308, {
        Location: `${person.domain}${url.pathname}${url.search}`,
      })
      response.end()
      return
    }
    const alias = redirects[path.replace(/\/$/, '')]
    const canonical = [
      ...routes,
      ...archivedProjects.map((p) => `/projects/${p.slug}/`),
    ].find(
      (route) =>
        route !== '/' &&
        (path === route.slice(0, -1) || path === `${route}index.html`),
    )
    if (alias || canonical || path === '/index.html') {
      const destination = new URL(alias || canonical || '/', 'http://localhost')
      destination.search = url.search
      response.writeHead(308, {
        Location: `${destination.pathname}${destination.search}${destination.hash}`,
      })
      response.end()
      return
    }
    let file = resolve(root, `.${path}`)
    if (file !== root && !file.startsWith(root + sep)) {
      response.writeHead(404)
      response.end()
      return
    }
    let status = path === '/404.html' ? 404 : 200
    try {
      if ((await stat(file)).isDirectory()) file = resolve(file, 'index.html')
      await stat(file)
    } catch {
      file = resolve(root, '404.html')
      status = 404
    }
    try {
      let body = await readFile(file)
      const headers = {
        'Content-Type': types[extname(file)] || 'application/octet-stream',
        'X-Content-Type-Options': 'nosniff',
      }
      headers['Cache-Control'] = /^\/assets\/[^/]+-[\w-]{8,}\.(js|css)$/.test(
        path,
      )
        ? 'public, max-age=31536000, immutable'
        : path.startsWith('/fonts/')
          ? 'public, max-age=86400'
          : 'public, max-age=0, must-revalidate'
      if (
        ['.html', '.js', '.css', '.svg', '.xml', '.txt'].includes(extname(file))
      ) {
        headers.Vary = 'Accept-Encoding'
        if (request.headers['accept-encoding']?.includes('gzip')) {
          body = gzipSync(body)
          headers['Content-Encoding'] = 'gzip'
        }
      }
      headers['Content-Length'] = body.length
      if (
        status === 404 ||
        extname(file) === '.pdf' ||
        archivedProjects.some((p) => path === `/projects/${p.slug}/`)
      )
        headers['X-Robots-Tag'] = 'noindex, follow'
      response.writeHead(status, headers)
      response.end(request.method === 'HEAD' ? undefined : body)
    } catch {
      response.writeHead(500)
      response.end('Build the site before starting the preview server.')
    }
  })
}
if (
  process.argv[1] &&
  import.meta.url === pathToFileURL(resolve(process.argv[1])).href
) {
  const port = Number(process.env.PORT || 4173)
  createStaticServer().listen(port, '127.0.0.1', () =>
    console.log(`Static portfolio: http://127.0.0.1:${port}`),
  )
}
