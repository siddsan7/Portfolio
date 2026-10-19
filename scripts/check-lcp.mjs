// Optional Playwright/Lighthouse tooling uses the same external paths as qa-browser.mjs.
import { createRequire } from 'node:module'
import { resolve } from 'node:path'
import { readFile, writeFile } from 'node:fs/promises'
import assert from 'node:assert/strict'
import { createStaticServer } from './serve-static.js'

const require = createRequire(
  resolve(process.env.PORTFOLIO_QA_PACKAGES || 'package.json'),
)
const { chromium } = require('playwright')
const { default: lighthouse } = await import(
  process.env.PORTFOLIO_LIGHTHOUSE_MODULE
)
const baseline = JSON.parse(
  await readFile('docs/verification/lcp-baseline.json', 'utf8'),
)
const server = createStaticServer()
await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve))
const base = `http://127.0.0.1:${server.address().port}`
const browser = await chromium.launch({
  channel: process.env.PORTFOLIO_BROWSER || 'msedge',
  headless: true,
  args: ['--remote-debugging-port=9224'],
})
const results = []
try {
  for (let run = 1; run <= 3; run++) {
    const { lhr } = await lighthouse(base, {
      port: 9224,
      output: 'json',
      onlyCategories: ['performance'],
      logLevel: 'error',
    })
    assert.deepEqual(
      lhr.configSettings.throttling,
      baseline.throttling,
      'unchanged mobile throttling',
    )
    assert.equal(lhr.configSettings.throttlingMethod, baseline.throttlingMethod)
    assert.deepEqual(
      lhr.configSettings.screenEmulation,
      baseline.screenEmulation,
      'unchanged mobile viewport',
    )
    const result = {
      run,
      lcpMs: lhr.audits['largest-contentful-paint'].numericValue,
      fcpMs: lhr.audits['first-contentful-paint'].numericValue,
      cls: lhr.audits['cumulative-layout-shift'].numericValue,
      tbtMs: lhr.audits['total-blocking-time'].numericValue,
      performance: Math.round(lhr.categories.performance.score * 100),
    }
    results.push(result)
    console.log(JSON.stringify(result))
    await writeFile(`.build/lcp-run-${run}.json`, JSON.stringify(lhr))
  }
  await writeFile(
    'docs/verification/lcp-results.json',
    JSON.stringify({ baseline, targetMs: 2500, runs: results }, null, 2) + '\n',
  )
  assert(
    results.every((run) => run.lcpMs < 2500),
    'every mobile run must have LCP under 2500ms',
  )
  console.log('Mobile LCP gate passed: all three runs below 2500ms.')
} finally {
  await browser.close()
  server.closeAllConnections()
  server.close()
}
