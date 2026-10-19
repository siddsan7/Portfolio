import assert from 'node:assert/strict'
import { readFile, access } from 'node:fs/promises'
import { createStaticServer } from './serve-static.js'
import { routes, projects, person, redirects } from '../src/redesign/content.js'
import { projects as archivedProjects } from '../src/data/projects.js'

const server = createStaticServer()
await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve))
const base = `http://127.0.0.1:${server.address().port}`
let assertions = 0
const check = (condition, label) => {
  assert.ok(condition, label)
  assertions++
}
try {
  const titles = new Set(),
    descriptions = new Set()
  for (const route of routes) {
    const response = await fetch(base + route)
    check(response.status === 200, `${route}: HTTP 200`)
    const html = await response.text()
    const title = html.match(/<title>([^<]+)<\/title>/)?.[1]
    const description = html.match(/name="description" content="([^"]+)"/)?.[1]
    check(title && !titles.has(title), `${route}: unique title`)
    titles.add(title)
    check(
      description && !descriptions.has(description),
      `${route}: unique description`,
    )
    descriptions.add(description)
    check(
      html.includes(`property="og:title" content="${title}"`) &&
        html.includes(`name="twitter:title" content="${title}"`),
      `${route}: matching social titles`,
    )
    check(
      html.includes(`rel="canonical" href="${person.domain}${route}"`),
      `${route}: canonical`,
    )
    check(html.includes('content="index, follow"'), `${route}: indexable`)
    check((html.match(/<h1[ >]/g) || []).length === 1, `${route}: one H1`)
    check(
      html.includes('Skip to content') && html.includes('id="main"'),
      `${route}: skip target`,
    )
    const schema = JSON.parse(
      html.match(/type="application\/ld\+json">(.*?)<\/script>/s)[1],
    )
    check(
      schema.name === person.name &&
        schema['@id'] === `${person.domain}/#person`,
      `${route}: identity`,
    )
    const stripped = html.replace(/<script.*?<\/script>/gs, '')
    check(
      stripped.includes('Siddharth Sanjay'),
      `${route}: identity without JS`,
    )
    for (const match of html.matchAll(/(?:href|src)="([^"#]+)"/g)) {
      const href = match[1].replaceAll('&amp;', '&')
      if (href.startsWith('/')) {
        const target = await fetch(base + href)
        check(target.status === 200, `${route}: local asset/link ${href}`)
        if (href.includes('#'))
          check(
            (await target.text()).includes(`id="${href.split('#')[1]}"`),
            `${route}: target ${href}`,
          )
      }
    }
    if (route !== '/') {
      const alternate = await fetch(base + route.slice(0, -1), {
        redirect: 'manual',
      })
      check(
        alternate.status === 308 && alternate.headers.get('location') === route,
        `${route}: slash redirect`,
      )
    }
  }
  const home = await (await fetch(base)).text()
  for (const fact of [
    'AI engineer',
    'Arizona State University',
    person.email,
    ...projects.map((p) => p.name),
    'Skills in practice',
  ])
    check(home.includes(fact), `homepage raw HTML: ${fact}`)
  for (const project of projects)
    check(
      home.includes(`href="${project.repo}"`),
      `${project.name}: correct source link`,
    )
  for (const missing of [
    '/missing/',
    '/projects/unknown/',
    '/assets/missing.js',
  ]) {
    const response = await fetch(base + missing)
    check(response.status === 404, `${missing}: real 404`)
    check(
      response.headers.get('x-robots-tag')?.includes('noindex'),
      `${missing}: noindex header`,
    )
    check(
      (await response.text()).includes('Page not found'),
      `${missing}: useful 404`,
    )
  }
  for (const [source, target] of Object.entries(redirects)) {
    const result = await fetch(base + source, { redirect: 'manual' })
    check(
      result.status === 308 && result.headers.get('location') === target,
      `${source}: legacy redirect`,
    )
  }
  const pdf = await fetch(base + '/Siddharth-Sanjay-Resume.pdf')
  check(
    pdf.status === 200 && pdf.headers.get('content-type') === 'application/pdf',
    'PDF available',
  )
  check(
    pdf.headers.get('x-robots-tag') === 'noindex, follow',
    'PDF deliberately excluded from separate indexing',
  )
  const bytes = Buffer.from(await pdf.arrayBuffer())
  check(bytes.subarray(0, 5).toString() === '%PDF-', 'valid PDF signature')
  const sitemap = await readFile('dist/sitemap.xml', 'utf8')
  for (const project of archivedProjects) {
    const route = `/projects/${project.slug}/`
    const response = await fetch(base + route)
    const html = await response.text()
    check(response.status === 200, `${route}: archive preserved`)
    check(
      html.includes('Previous portfolio / Archive') &&
        html.includes('content="noindex, follow"'),
      `${route}: archive notice and noindex`,
    )
    check(
      html.includes(`rel="canonical" href="${person.domain}${route}"`),
      `${route}: archive canonical`,
    )
    check(
      html.includes('property="og:title"') && !html.includes('Page not found'),
      `${route}: social metadata describes archive`,
    )
    check(!sitemap.includes(route), `${route}: excluded from sitemap`)
  }
  for (const [source, target] of [
    ['/index.html', '/'],
    ['/projects/tonescope/index.html', '/projects/tonescope/'],
  ]) {
    const response = await fetch(base + source + '?ref=review', {
      redirect: 'manual',
    })
    check(
      response.status === 308 &&
        response.headers.get('location') === target + '?ref=review',
      `${source}: preserve query on redirect`,
    )
  }
  const { request } = await import('node:http')
  const hostRedirect = await new Promise((resolve, reject) => {
    const req = request(
      base + '/resume/?ref=review',
      { headers: { Host: 'www.siddharthsanjay.com' } },
      (response) => {
        response.resume()
        resolve({
          status: response.statusCode,
          location: response.headers.location,
        })
      },
    )
    req.on('error', reject)
    req.end()
  })
  check(
    hostRedirect.status === 308 &&
      hostRedirect.location === `${person.domain}/resume/?ref=review`,
    'www canonical host with query',
  )
  check(
    (sitemap.match(/<loc>/g) || []).length === routes.length,
    'sitemap route count',
  )
  for (const route of routes)
    check(
      sitemap.includes(`${person.domain}${route}</loc>`),
      `sitemap ${route}`,
    )
  const robots = (await readFile('dist/robots.txt', 'utf8')).replaceAll('\r\n', '\n')
  check(
    robots.includes('User-agent: GPTBot\nDisallow: /') &&
      robots.includes('User-agent: OAI-SearchBot\nAllow: /'),
    'separate training/search policy',
  )
  const config = JSON.parse(await readFile('vercel.json', 'utf8'))
  check(!config.rewrites, 'no blanket SPA fallback')
  await access('dist/social/portfolio.png')
  check(true, 'social image exists')
  console.log(
    `Static contracts passed: ${assertions} assertions across ${routes.length} routes.`,
  )
} finally {
  server.close()
}
