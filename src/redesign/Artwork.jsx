const wave = (phase = 0, amplitude = 70, baseline = 170, frequency = 1) =>
  Array.from(
    { length: 121 },
    (_, i) =>
      `${i ? 'L' : 'M'}${20 + i * 4.65},${baseline + Math.sin((i / 13) * frequency + phase) * amplitude}`,
  ).join(' ')

export function Resonance({ print = false }) {
  return (
    <svg
      className={print ? 'music-print' : 'resonance'}
      viewBox="0 0 600 340"
      aria-hidden="true"
    >
      {print &&
        [130, 147, 164, 181, 198].map((y) => (
          <path key={y} d={`M0 ${y}H600`} className="art-rule" />
        ))}
      {[0, 1.7, 3.4, 4.7].map((phase, i) => (
        <path
          key={phase}
          d={wave(phase, print ? 90 : 122, 170, 0.9)}
          fill="none"
          stroke={i === 3 ? 'var(--copper)' : 'var(--wave)'}
          strokeWidth={i === 3 ? 1.6 : 1.3}
        />
      ))}
      {(print
        ? [
            [68, 198],
            [96, 190],
            [202, 166],
            [312, 111],
            [450, 203],
            [518, 130],
          ]
        : [
            [75, 242],
            [243, 72],
            [371, 139],
            [492, 269],
          ]
      ).map(([x, y], i) => (
        <g key={x}>
          {print && <path d={`M${x + 5} ${y}v-75`} stroke="var(--ink)" />}
          <circle
            cx={x}
            cy={y}
            r={print ? 4 : 4.5}
            fill={
              print ? 'var(--ink)' : i === 3 ? 'var(--copper)' : 'var(--wave)'
            }
          />
        </g>
      ))}
    </svg>
  )
}

function Harmony() {
  const nodes = [
    [300, 55, 'C'],
    [458, 150, 'Fmaj7'],
    [400, 292, 'G'],
    [200, 292, 'Em'],
    [142, 150, 'Am'],
  ]
  return (
    <svg viewBox="0 0 600 360" aria-hidden="true">
      <circle
        cx="300"
        cy="185"
        r="132"
        fill="none"
        className="art-rule dashed"
      />
      {[100, 185, 270].map((y) => (
        <path key={y} d={`M60 ${y}H540`} className="art-rule dashed" />
      ))}
      {[142, 300, 458].map((x) => (
        <path key={x} d={`M${x} 25V330`} className="art-rule dashed" />
      ))}
      {nodes.map(([x, y], i) => (
        <g key={x}>
          <path
            d={`M${x} ${y}L${nodes[(i + 2) % 5][0]} ${nodes[(i + 2) % 5][1]}`}
            className="art-rule"
          />
        </g>
      ))}
      <path
        d="M142 150 Q220 115 300 55 Q359 110 400 292"
        fill="none"
        stroke="var(--copper)"
        strokeWidth="2"
      />
      {nodes.map(([x, y, label], i) => (
        <g key={label}>
          <circle
            cx={x}
            cy={y}
            r="33"
            fill={
              i === 0
                ? 'var(--paper)'
                : i === 2
                  ? 'var(--sage)'
                  : 'var(--lilac)'
            }
            stroke="var(--ink)"
            strokeWidth="1"
          />
          <text x={x} y={y + 7} textAnchor="middle" fontSize="21">
            {label}
          </text>
        </g>
      ))}
    </svg>
  )
}

function Audio() {
  const signal = (offset, phase) =>
    Array.from(
      { length: 281 },
      (_, i) =>
        `${i ? 'L' : 'M'}${20 + i * 2},${offset + Math.sin(i * 2.7 + phase) * (7 + 17 * Math.abs(Math.sin(i * 0.082))) * Math.sin(i * 0.43)}`,
    ).join(' ')
  return (
    <svg viewBox="0 0 600 360" aria-hidden="true">
      <rect x="205" y="40" width="175" height="172" fill="var(--lilac)" />
      {[205, 380].map((x) => (
        <path
          key={x}
          d={`M${x} 35V215`}
          stroke="var(--ink)"
          strokeDasharray="5 5"
        />
      ))}
      <path
        d={signal(88, 0)}
        stroke="var(--wave)"
        fill="none"
        strokeWidth="1.6"
      />
      <path
        d={signal(173, 1)}
        stroke="var(--copper)"
        fill="none"
        strokeWidth="1.6"
      />
      {['EQ', 'COMP', 'DRIVE'].map((s, i) => (
        <g key={s} transform={`translate(${40 + i * 185} 255)`}>
          <rect width="145" height="75" fill="none" stroke="var(--ink)" />
          <text x="72" y="25" textAnchor="middle" fontSize="15">
            {s}
          </text>
          <path
            d="M24 58Q44 58 50 44T74 48T121 58"
            stroke="var(--ink)"
            fill="none"
          />
          {i < 2 && (
            <text x="159" y="42" fontSize="22">
              →
            </text>
          )}
        </g>
      ))}
    </svg>
  )
}

function Logistics() {
  return (
    <svg viewBox="0 0 600 360" aria-hidden="true">
      {[0, 1, 2, 3, 4, 5].map((i) => (
        <g key={i} transform={`translate(${i * 110 - 60} 0)`}>
          <path d="M0 0Q150 60 30 140T80 275" className="art-rule" />
          <path d="M0 250Q90 130 150 180T310 85" className="art-rule dashed" />
        </g>
      ))}
      <path
        d="M70 214C108 154 158 184 220 100S317 100 346 153S453 205 531 144"
        fill="none"
        stroke="var(--copper)"
        strokeWidth="3"
      />
      {[
        [70, 214],
        [220, 100],
        [531, 144],
      ].map(([x, y]) => (
        <circle
          key={x}
          cx={x}
          cy={y}
          r="7"
          fill="var(--paper)"
          stroke="var(--copper)"
          strokeWidth="3"
        />
      ))}
      {[
        [220, 74],
        [531, 118],
      ].map(([x, y]) => (
        <g key={x}>
          <path
            d={`M${x} ${y + 17}q-26 -30 -13 -39q13 -10 26 0q13 9 -13 39`}
            fill="var(--ink)"
          />
          <circle cx={x} cy={y - 10} r="5" fill="var(--paper)" />
        </g>
      ))}
      <rect y="270" width="600" height="90" fill="var(--surface)" />
      {['Route fit', 'Driver constraints', 'Load ranking'].map((s, i) => (
        <g key={s}>
          <rect
            x={22 + i * 198}
            y="290"
            width="160"
            height="44"
            fill="none"
            stroke="var(--ink)"
          />
          <text x={102 + i * 198} y="317" textAnchor="middle" fontSize="15">
            {s}
          </text>
          {i < 2 && (
            <text x={185 + i * 198} y="318" fontSize="21">
              →
            </text>
          )}
        </g>
      ))}
    </svg>
  )
}

export function ProjectVisual({ project }) {
  return (
    <figure className={`project-visual ${project.kind}`}>
      {project.kind === 'harmony' ? (
        <Harmony />
      ) : project.kind === 'audio' ? (
        <Audio />
      ) : (
        <Logistics />
      )}
      <figcaption>
        Concept illustration
        {project.kind === 'logistics' ? ' · Demo workflow' : ''}
      </figcaption>
    </figure>
  )
}
