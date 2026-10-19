import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { spawnSync } from 'node:child_process'
import { routes } from '../src/redesign/content.js'

function build(env) {
  const result = spawnSync(process.execPath, ['scripts/build-static.js'], {
    env: { ...process.env, VERCEL_ENV: env },
    encoding: 'utf8',
  })
  assert.equal(result.status, 0, result.stderr || result.stdout)
}
try {
  build('preview')
  for (const route of routes) {
    const file = route === '/' ? 'dist/index.html' : `dist${route}index.html`
    assert.ok(
      (await readFile(file, 'utf8')).includes('content="noindex, follow"'),
      `preview noindex: ${route}`,
    )
  }
  console.log('Preview indexing checks passed for all 5 public routes.')
} finally {
  // Always leave a production build for subsequent tests and review.
  build('production')
}
