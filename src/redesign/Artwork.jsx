// The hero study is drawn as vector paths so it stays sharp at every size and
// pixel density. Each wave is a sine curve converted to cubic Béziers at
// quarter-period steps; the build renders it to static markup.
const WIDTH = 620
const HEIGHT = 382
const MID = 191

const waves = [
  { amp: 150, period: 300, phase: 0.6, tone: 'soft' },
  { amp: 118, period: 372, phase: 2.5, tone: 'soft' },
  { amp: 96, period: 258, phase: 4.1, tone: 'soft' },
  { amp: 132, period: 430, phase: 5.2, tone: 'soft' },
  { amp: 62, period: 214, phase: 1.4, tone: 'faint' },
  { amp: 84, period: 352, phase: 3.45, tone: 'trace' },
]

const round = (value) => Math.round(value * 10) / 10
const height = (wave, x) =>
  MID - wave.amp * Math.sin((2 * Math.PI * x) / wave.period + wave.phase)
const slope = (wave, x) =>
  ((-wave.amp * 2 * Math.PI) / wave.period) *
  Math.cos((2 * Math.PI * x) / wave.period + wave.phase)

function wavePath(wave) {
  const step = wave.period / 4
  let d = `M0 ${round(height(wave, 0))}`
  for (let x = 0; x < WIDTH; x += step) {
    const end = Math.min(x + step, WIDTH)
    const third = (end - x) / 3
    d += `C${round(x + third)} ${round(height(wave, x) + slope(wave, x) * third)} ${round(end - third)} ${round(height(wave, end) - slope(wave, end) * third)} ${round(end)} ${round(height(wave, end))}`
  }
  return d
}

// Sparse nodes sit exactly on a curve: [wave index, x position, style].
const nodes = [
  [0, 66, 'node'],
  [1, 268, 'node small'],
  [3, 498, 'node'],
  [5, 172, 'node trace small'],
  [5, 486, 'node trace'],
]

export function Resonance() {
  return (
    <svg
      className="resonance"
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      width={WIDTH}
      height={HEIGHT}
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path className="axis" d={`M0 ${MID}H${WIDTH}`} />
      {waves.map((wave, index) => (
        <path
          key={wave.phase}
          className={`wave ${wave.tone}`}
          style={{ '--i': index }}
          pathLength="1"
          d={wavePath(wave)}
        />
      ))}
      {nodes.map(([index, x, className], order) => (
        <circle
          key={x}
          className={className}
          style={{ '--i': order }}
          cx={x}
          cy={round(height(waves[index], x))}
          r={className.includes('small') ? 3.5 : 5}
        />
      ))}
    </svg>
  )
}

export function ProjectVisual({ project }) {
  return (
    <figure className={`project-visual ${project.kind}`}>
      {/* One image per theme; the hidden one is lazy, so it is never fetched. */}
      {['light', 'dark'].map((theme) => (
        <img
          key={theme}
          className={`theme-${theme}`}
          src={
            theme === 'dark'
              ? project.image.replace('-crisp.svg', '-dark.svg')
              : project.image
          }
          alt={project.imageAlt}
          width={project.imageWidth}
          height={project.imageHeight}
          loading="lazy"
          decoding="async"
        />
      ))}
      <figcaption>
        Concept illustration
        {project.kind === 'logistics' ? ' · Demo workflow' : ''}
      </figcaption>
    </figure>
  )
}
