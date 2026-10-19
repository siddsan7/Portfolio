import { build } from 'vite'
import { mkdir, readFile, writeFile, unlink } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'
import { person, projects, routes } from '../src/redesign/content.js'
import { projects as archivedProjects } from '../src/data/projects.js'

await build({ build: { rollupOptions: { input: resolve('redesign.html') } } })
await build({
  build: {
    ssr: 'src/redesign/entry.jsx',
    outDir: '.build',
    emptyOutDir: true,
    copyPublicDir: false,
  },
})
const { render } = await import(pathToFileURL(resolve('.build/entry.js')))
const template = await readFile('dist/redesign.html', 'utf8')
const escape = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
for (const path of [
  ...routes,
  ...archivedProjects.map((p) => `/projects/${p.slug}/`),
  '/404.html',
]) {
  const project = projects.find((p) => path === `/projects/${p.slug}/`)
  const archived = archivedProjects.find((p) => path === `/projects/${p.slug}/`)
  const title =
    path === '/'
      ? 'Siddharth Sanjay | AI Engineer'
      : project
        ? `${project.name} — Case Study | Siddharth Sanjay`
        : path === '/resume/'
          ? 'Résumé | Siddharth Sanjay — AI Engineer'
          : archived
            ? `${archived.title} — Archive | Siddharth Sanjay`
            : 'Page not found | Siddharth Sanjay'
  const description =
    path === '/'
      ? `${person.name}, AI engineer and Arizona State University computer science graduate. Explore AI, audio systems, and product engineering projects.`
      : project
        ? project.summary
        : path === '/resume/'
          ? 'Education, software engineering experience, and selected projects from Siddharth Sanjay. Read the HTML résumé or download the PDF.'
          : archived
            ? `An archived portfolio entry for ${archived.title}. Earlier notes are preserved for reference and have not been reverified for the current portfolio.`
            : 'This page could not be found. Return to Siddharth Sanjay’s portfolio.'
  const canonical = `${person.domain}${path}`
  const notFound = path === '/404.html'
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${person.domain}/#person`,
    name: person.name,
    url: `${person.domain}/`,
    jobTitle: 'AI engineer',
    description: person.summary,
    sameAs: [person.github, person.linkedin],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Arizona State University',
    },
  }
  const head = `<title>${escape(title)}</title>
    <meta name="description" content="${escape(description)}" />
    <meta name="robots" content="${notFound || archived ? 'noindex, follow' : 'index, follow'}" />
    ${notFound ? '' : `<link rel="canonical" href="${canonical}" />`}
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${escape(title)}" />
    <meta property="og:description" content="${escape(description)}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${person.domain}/social/portfolio.png" />
    <meta property="og:image:width" content="1200" /><meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Siddharth Sanjay. AI engineer. Music, signals, software." />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escape(title)}" />
    <meta name="twitter:description" content="${escape(description)}" />
    <meta name="twitter:image" content="${person.domain}/social/portfolio.png" />
    ${notFound || archived ? '' : `<script type="application/ld+json">${JSON.stringify(schema).replaceAll('<', '\\u003c')}</script>`}`
  const destination =
    path === '/'
      ? 'dist/index.html'
      : notFound
        ? 'dist/404.html'
        : `dist${path}index.html`
  await mkdir(resolve(destination, '..'), { recursive: true })
  await writeFile(
    destination,
    template
      .replace('<!--page-head-->', head)
      .replace('<!--page-body-->', render(path)),
  )
}
await unlink('dist/redesign.html')
await writeFile(
  'dist/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${routes.map((path) => `<url><loc>${person.domain}${path}</loc></url>`).join('')}</urlset>\n`,
)
if (process.env.VERCEL_ENV && process.env.VERCEL_ENV !== 'production') {
  const { readdir } = await import('node:fs/promises')
  async function noindex(dir) {
    for (const entry of await readdir(dir, { withFileTypes: true })) {
      const path = `${dir}/${entry.name}`
      if (entry.isDirectory()) await noindex(path)
      else if (entry.name.endsWith('.html'))
        await writeFile(
          path,
          (await readFile(path, 'utf8')).replace(
            'content="index, follow"',
            'content="noindex, follow"',
          ),
        )
    }
  }
  await noindex('dist')
}
console.log(
  `Generated ${routes.length} complete HTML routes and a 404 document.`,
)
