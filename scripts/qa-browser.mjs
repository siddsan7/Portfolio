// Optional audit tooling is kept outside the application lockfile.
// Set PORTFOLIO_QA_PACKAGES to a package.json beside Playwright; see docs/verification/README.md.
import { createRequire } from 'node:module'
import { resolve } from 'node:path'
import { mkdir, writeFile, readFile } from 'node:fs/promises'
import assert from 'node:assert/strict'
import { createStaticServer } from './serve-static.js'
import { routes, person, projects } from '../src/redesign/content.js'

const require = createRequire(
  resolve(process.env.PORTFOLIO_QA_PACKAGES || 'package.json'),
)
const { chromium } = require('playwright')
const server = createStaticServer()
await new Promise((r) => server.listen(0, '127.0.0.1', r))
const base = `http://127.0.0.1:${server.address().port}`
const browser = await chromium.launch({
  headless: true,
  channel: process.env.PORTFOLIO_BROWSER || 'msedge',
  args: ['--remote-debugging-port=9223'],
})
const evidence = 'docs/verification'
await mkdir(evidence, { recursive: true })
const result = {
  widths: [],
  keyboard: {},
  navigation: [],
  axe: [],
  performance: {},
  errors: [],
}
try {
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    reducedMotion: 'reduce',
  })
  const page = await context.newPage()
  async function visit(url) {
    const response = await page.goto(url)
    assert(
      response?.status() === 200,
      `${url}: expected HTTP 200 before capture`,
    )
    await page.locator('main h1').waitFor()
  }
  async function prepareCapture() {
    await page.evaluate(async () => {
      const start = scrollY
      for (const image of document.images) {
        image.scrollIntoView({ block: 'center' })
        await image.decode()
      }
      scrollTo(0, start)
    })
  }
  page.on('pageerror', (error) => result.errors.push(error.message))
  await visit(base)
  await page.evaluate(() => document.fonts.ready)
  assert(
    await page.evaluate(() => document.fonts.check('18px Karrik')),
    'Karrik loaded',
  )
  await page.waitForFunction(() =>
    performance
      .getEntriesByType('resource')
      .some((entry) => /\/assets\/client-.*\.js$/.test(entry.name)),
  )
  result.enhancement = await page.evaluate(() => {
    const navigation = performance.getEntriesByType('navigation')[0]
    const client = performance
      .getEntriesByType('resource')
      .find((entry) => /\/assets\/client-.*\.js$/.test(entry.name))
    return {
      loadEventStart: navigation.loadEventStart,
      clientRequestStart: client.startTime,
    }
  })
  assert(
    result.enhancement.clientRequestStart >= result.enhancement.loadEventStart,
    'navigation download starts after eager resources finish',
  )
  result.contrast = await page.evaluate(() => {
    const luminance = (color) => {
      const rgb = color
        .match(/[\d.]+/g)
        .slice(0, 3)
        .map(Number)
        .map((v) => {
          const c = v / 255
          return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
        })
      return rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722
    }
    return [
      '.role',
      '.hero-summary',
      '.harmony figcaption',
      '.audio figcaption',
      '.logistics figcaption',
      '.skill-list p',
      'nav a',
    ].map((selector) => {
      const el = document.querySelector(selector),
        color = getComputedStyle(el).color
      let parent = el,
        background
      while (parent) {
        background = getComputedStyle(parent).backgroundColor
        if (!background.endsWith(', 0)') && background !== 'transparent') break
        parent = parent.parentElement
      }
      const a = luminance(color),
        b = luminance(background)
      return {
        selector,
        color,
        background,
        ratio: (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05),
      }
    })
  })
  assert(
    result.contrast.every((c) => c.ratio >= 4.5),
    'rendered text color contrast',
  )

  if (process.argv.includes('--assets')) {
    await visit(`${base}/resume/`)
    await page.evaluate(() => document.fonts.ready)
    // Print links must remain usable when the PDF leaves the preview server.
    await page.evaluate((domain) => {
      for (const link of document.querySelectorAll('a[href^="/"]'))
        link.href = new URL(link.getAttribute('href'), domain).href
    }, person.domain)
    await page.pdf({
      path: 'public/Siddharth-Sanjay-Resume.pdf',
      format: 'A4',
      margin: { top: '16mm', bottom: '16mm', left: '16mm', right: '16mm' },
      tagged: true,
    })
    await mkdir('public/social', { recursive: true })
    const font = (await readFile('public/fonts/Karrik-Regular.woff2')).toString(
      'base64',
    )
    await page.setViewportSize({ width: 1200, height: 630 })
    await page.setContent(
      `<style>@font-face{font-family:Karrik;src:url(data:font/woff2;base64,${font})}*{box-sizing:border-box}body{margin:0;background:#f6f2ec;color:#302438;font-family:Karrik;padding:60px 72px}main{border-top:1px solid #d2ccd1;border-bottom:1px solid #d2ccd1;height:510px;padding-top:68px}h1{font-size:90px;font-weight:400;letter-spacing:-3px;line-height:1.05;margin:0}p{font-size:32px;margin:28px 0}.role{color:#a64c30;font-size:42px}.domain{font-size:22px;color:#675f6d;margin-top:64px}</style><main><h1>Siddharth Sanjay</h1><p class="role">AI engineer</p><p>Music, signals, software.</p><p class="domain">siddharthsanjay.com</p></main>`,
    )
    await page.evaluate(() => document.fonts.ready)
    await page.screenshot({ path: 'public/social/portfolio.png' })
  }

  for (const width of [320, 390, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 })
    for (const route of routes) {
      await visit(base + route)
      await page.evaluate(() => document.fonts.ready)
      const layout = await page.evaluate(() => ({
        width: innerWidth,
        scrollWidth: document.documentElement.scrollWidth,
        font: getComputedStyle(document.body).fontFamily,
        hiddenLinks: [...document.querySelectorAll('a')]
          .filter((el) => {
            const r = el.getBoundingClientRect()
            return r.width && (r.left < -1 || r.right > innerWidth + 1)
          })
          .map((el) => el.textContent),
      }))
      assert(
        layout.scrollWidth <= width,
        `${route} at ${width}: horizontal overflow`,
      )
      assert(!layout.hiddenLinks.length, `${route} at ${width}: clipped links`)
      result.widths.push({ route, ...layout })
      if (route === '/' && [390, 1440].includes(width)) {
        await prepareCapture()
        await page.screenshot({
          path: `${evidence}/${width === 1440 ? 'desktop' : 'mobile'}.png`,
          fullPage: true,
        })
      }
      if (route === '/projects/harmonic-color-graph/' && width === 1440) {
        await prepareCapture()
        await page.screenshot({
          path: `${evidence}/case-study.png`,
          fullPage: true,
        })
      }
    }
  }

  await page.goto(base)
  await page.keyboard.press('Tab')
  assert(
    await page
      .locator('.skip-link')
      .evaluate((el) => el === document.activeElement),
    'skip link first',
  )
  await page.keyboard.press('Enter')
  assert(
    await page.locator('#main').evaluate((el) => el === document.activeElement),
    'skip link focuses main',
  )
  await page.goto(base)
  const keyboard = []
  for (let i = 0; i < 32; i++) {
    await page.keyboard.press('Tab')
    keyboard.push(
      await page.evaluate(() => {
        const el = document.activeElement,
          r = el.getBoundingClientRect(),
          css = getComputedStyle(el)
        return {
          text: el.textContent.trim(),
          href: el.getAttribute('href'),
          outline: css.outlineStyle,
          outlineWidth: css.outlineWidth,
          top: r.top,
          bottom: r.bottom,
        }
      }),
    )
  }
  result.keyboard = keyboard
  assert(
    keyboard.filter((k) => k.href).every((k) => k.outline !== 'none'),
    'visible focus on every tabbed link',
  )
  // Scroll observation must work without clicks or history changes.
  result.passiveNavigation = []
  for (const id of ['work', 'about', 'skills', 'contact']) {
    await page.evaluate((id) => {
      const target = document.getElementById(id)
      const header = document
        .querySelector('.site-header')
        .getBoundingClientRect().height
      scrollTo(0, scrollY + target.getBoundingClientRect().top - header - 20)
    }, id)
    await page.waitForTimeout(120)
    const state = await page.evaluate(() => ({
      active: document
        .querySelector('nav a[aria-current]')
        ?.textContent.toLowerCase(),
      bottom:
        innerHeight + scrollY >= document.documentElement.scrollHeight - 3,
      hash: location.hash,
    }))
    assert(
      state.active === (state.bottom ? 'contact' : id),
      `passive navigation ${id}`,
    )
    assert(state.hash === '', 'passive scrolling must not write history')
    result.passiveNavigation.push({ id, ...state })
  }
  for (const id of ['work', 'about', 'skills', 'contact']) {
    await page.locator(`nav a[href="#${id}"]`).click()
    await page.waitForTimeout(120)
    const active = await page
      .locator('nav a[aria-current="location"]')
      .textContent()
    const offset = await page
      .locator(`#${id}`)
      .evaluate((el) => el.getBoundingClientRect().top)
    result.navigation.push({ id, active, offset })
    const bottom = await page.evaluate(
      () => innerHeight + scrollY >= document.documentElement.scrollHeight - 3,
    )
    assert(
      active.toLowerCase() === (bottom ? 'contact' : id),
      `${id}: active nav (${active}, bottom=${bottom})`,
    )
    assert(new URL(page.url()).hash === `#${id}`, `${id}: native hash`)
  }
  await page.goBack()
  await page.waitForTimeout(120)
  assert(
    new URL(page.url()).hash === '#skills',
    'back preserves anchor history',
  )
  await page.goForward()
  await page.waitForTimeout(120)
  assert(
    new URL(page.url()).hash === '#contact',
    'forward preserves anchor history',
  )
  await page.goto(base)
  assert(
    (await page.locator('nav a[aria-current]').count()) === 0,
    'hero has no active section',
  )
  assert(
    await page.evaluate(
      () => matchMedia('(prefers-reduced-motion: reduce)').matches,
    ),
    'reduced motion enabled',
  )
  assert(
    (await page
      .locator('.arrow-link span')
      .first()
      .evaluate((el) => getComputedStyle(el).transitionDuration)) === '0s',
    'reduced CSS motion',
  )
  await page.emulateMedia({ reducedMotion: 'no-preference' })
  await page.locator('nav a[href="#work"]').click()
  await page.waitForTimeout(450)
  assert(
    (await page.locator('.nav-indicator').count()) === 1,
    'standard motion indicator',
  )

  // 400% page-zoom reflow is equivalent to a 320 CSS-pixel layout at 1280 physical pixels.
  await page.setViewportSize({ width: 320, height: 900 })
  await page.goto(base)
  await page.evaluate(() => {
    const sizes = [...document.querySelectorAll('h1,h2,h3,p,a,figcaption')].map(
      (el) => [el, parseFloat(getComputedStyle(el).fontSize)],
    )
    for (const [el, size] of sizes) el.style.fontSize = `${size * 2}px`
  })
  const enlarged = await page.evaluate(() => ({
    width: innerWidth,
    scrollWidth: document.documentElement.scrollWidth,
    overflow: [...document.querySelectorAll('main *,header *')]
      .filter((el) => el.getBoundingClientRect().right > innerWidth + 1)
      .map((el) => ({
        tag: el.tagName,
        class: el.className,
        text: el.textContent.slice(0, 60),
      })),
  }))
  assert(
    enlarged.scrollWidth <= enlarged.width,
    `200% text size at narrow width: ${JSON.stringify(enlarged.overflow)}`,
  )
  result.textZoom =
    '200% text size at 320 CSS px: no horizontal overflow; 400% reflow uses 320px matrix'

  const noJS = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  })
  const raw = await noJS.newPage()
  for (const route of routes) {
    await raw.goto(base + route)
    assert(await raw.locator('main h1').isVisible(), `${route}: no-JS heading`)
  }
  await raw.goto(base)
  await raw.locator('a[href="#work"]').first().click()
  assert(new URL(raw.url()).hash === '#work', 'no-JS work navigation')
  await raw
    .getByRole('link', { name: 'Harmonic Color Graph case study', exact: true })
    .click()
  assert(
    raw.url().endsWith('/projects/harmonic-color-graph/'),
    'no-JS project navigation',
  )
  result.noJavaScript =
    'All 5 routes, work anchor, and project navigation passed'
  await noJS.close()

  if (process.env.PORTFOLIO_AXE_PATH) {
    for (const width of [390, 1440]) {
      await page.setViewportSize({ width, height: 900 })
      for (const route of [...routes, '/missing/']) {
        await page.goto(base + route)
        await page.addScriptTag({ path: process.env.PORTFOLIO_AXE_PATH })
        const scan = await page.evaluate(async () => {
          const r = await window.axe.run(document, {
            runOnly: {
              type: 'tag',
              values: ['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'],
            },
          })
          return {
            violations: r.violations.map((v) => ({
              id: v.id,
              impact: v.impact,
              description: v.description,
              nodes: v.nodes.map((n) => n.target),
            })),
            passes: r.passes.length,
            incomplete: r.incomplete.map((v) => ({
              id: v.id,
              nodes: v.nodes.map((n) => ({
                target: n.target,
                summary: n.failureSummary,
              })),
            })),
          }
        })
        result.axe.push({ route, width, ...scan })
      }
    }
  }
  if (process.env.PORTFOLIO_LIGHTHOUSE_MODULE) {
    const { default: lighthouse } = await import(
      process.env.PORTFOLIO_LIGHTHOUSE_MODULE
    )
    for (const formFactor of ['desktop', 'mobile']) {
      const options = {
        port: 9223,
        output: 'json',
        onlyCategories: [
          'performance',
          'accessibility',
          'best-practices',
          'seo',
        ],
        logLevel: 'error',
        ...(formFactor === 'desktop'
          ? {
              formFactor: 'desktop',
              screenEmulation: {
                mobile: false,
                width: 1440,
                height: 1000,
                deviceScaleFactor: 1,
                disabled: false,
              },
            }
          : {}),
      }
      const desktopConfig =
        formFactor === 'desktop'
          ? (
              await import(
                new URL(
                  './desktop-config.js',
                  new URL('./config/', process.env.PORTFOLIO_LIGHTHOUSE_MODULE),
                )
              )
            ).default
          : undefined
      const { lhr } = await lighthouse(base, options, desktopConfig)
      result.performance[formFactor] = {
        scores: Object.fromEntries(
          Object.entries(lhr.categories).map(([k, v]) => [
            k,
            Math.round(v.score * 100),
          ]),
        ),
        metrics: Object.fromEntries(
          [
            'first-contentful-paint',
            'largest-contentful-paint',
            'total-blocking-time',
            'cumulative-layout-shift',
            'speed-index',
          ].map((k) => [k, lhr.audits[k].displayValue]),
        ),
        failures: Object.entries(lhr.audits)
          .filter(([, v]) => v.score !== null && v.score < 0.9 && v.details)
          .map(([k]) => k),
      }
      await writeFile(
        `.build/lighthouse-${formFactor}.json`,
        JSON.stringify(lhr, null, 2),
      )
    }
  }
  await page.goto(base + '/resume/')
  await page.screenshot({ path: `${evidence}/resume.png`, fullPage: true })
  result.contact = {
    email: person.email,
    github: person.github,
    linkedin: person.linkedin,
    projectRepositories: projects.map((p) => p.repo),
  }
  assert(result.errors.length === 0, 'no browser errors')
  await writeFile(
    `${evidence}/browser-results.json`,
    JSON.stringify(result, null, 2),
  )
  assert(
    result.axe.every((r) => r.violations.length === 0),
    'axe violations; inspect browser-results.json',
  )
  console.log(
    JSON.stringify(
      {
        layouts: result.widths.length,
        keyboardLinks: keyboard.length,
        axeScans: result.axe.length,
        performance: result.performance,
      },
      null,
      2,
    ),
  )
} finally {
  await browser.close()
  server.closeAllConnections()
  server.close()
}
