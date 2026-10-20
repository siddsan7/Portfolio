import ArrowLink from './ArrowLink.jsx'

function SourceLink({ project, source }) {
  return (
    <ArrowLink href={`${project.repo}/blob/${project.caseStudy.revision}/${source[1]}`}>
      {source[0]}
    </ArrowLink>
  )
}

function NetCalculator() {
  return (
    <div className="calculation-example">
      <p>
        Source example: $2,000 − $400 − (100 miles × $1.45/mile) = $1,455.
        This formula estimates payout less fuel and a modeled deadhead cost;
        it does not include every operating expense.
      </p>
      <form className="net-calculator" data-net-calculator hidden aria-label="Illustrative load economics" aria-describedby="calculator-limits">
        <p id="calculator-limits" className="calculator-limits">Use $0–$1,000,000 for payout and fuel, and 0–100,000 miles for deadhead. Dollar values accept cents; miles accept tenths.</p>
        <label htmlFor="calc-payout">Payout ($)
          <input id="calc-payout" name="payout" type="number" min="0" max="1000000" step="0.01" defaultValue="2000" aria-describedby="calculator-limits calculator-message" required />
        </label>
        <label htmlFor="calc-fuel">Fuel estimate ($)
          <input id="calc-fuel" name="fuel" type="number" min="0" max="1000000" step="0.01" defaultValue="400" aria-describedby="calculator-limits calculator-message" required />
        </label>
        <label htmlFor="calc-deadhead">Deadhead (miles)
          <input id="calc-deadhead" name="deadhead" type="number" min="0" max="100000" step="0.1" defaultValue="100" aria-describedby="calculator-limits calculator-message" required />
        </label>
        <div className="calculation-result">
          <span>Illustrative net estimate</span>
          <output htmlFor="calc-payout calc-fuel calc-deadhead" aria-live="polite">$1,455.00</output>
          <p id="calculator-message" data-calculator-message role="status">Fixed deadhead assumption: $1.45 per mile. Demo calculation, not realized profit.</p>
        </div>
        <button type="reset">Reset example</button>
      </form>
    </div>
  )
}

export default function CaseStudy({ project, nextProject }) {
  const detail = project.caseStudy
  const architecture = project.sections.find(([heading]) => heading === 'Architecture')[1]
  const scope = project.sections.find(([heading]) => heading === 'Current scope')[1]
  return (
    <article className="case-study">
      <a className="back-link" href="/#work">← Back to featured projects</a>
      <header className="case-header">
        <p className="eyebrow">{project.category} / Case study</p>
        <h1>{project.name}</h1>
        <p className="case-premise">{project.premise}</p>
        <p className="case-summary">{project.summary}</p>
        <dl className="case-facts">
          <div><dt>My role</dt><dd>Individual project · design and implementation</dd></div>
          <div><dt>Engineering focus</dt><dd>{detail.focus}</dd></div>
          <div><dt>Evidence snapshot</dt><dd>{detail.result}</dd></div>
          <div><dt>Status</dt><dd>{project.status}</dd></div>
        </dl>
        <p className="methods">{project.methods}</p>
        <div className="case-actions">
          <ArrowLink href="#walkthrough">Follow the walkthrough</ArrowLink>
          <ArrowLink href="#evidence">Inspect the evidence</ArrowLink>
          {detail.demo && <ArrowLink href={detail.demo.href}>{detail.demo.label}</ArrowLink>}
          <ArrowLink href={project.repo}>GitHub</ArrowLink>
        </div>
      </header>
      <figure className="product-screenshot">
        <a href={project.screenshot.src} aria-label={`View full-size ${project.name} screenshot`}>
          <img src={project.screenshot.src} alt={project.screenshot.alt} width={project.screenshot.width} height={project.screenshot.height} loading="lazy" decoding="async" />
        </a>
        <figcaption>
          <div className="screenshot-caption">
            <p>{project.screenshot.caption}</p>
            {project.screenshot.credit && (
              <p>Guitar signal: <a href={project.screenshot.credit.href}>{project.screenshot.credit.label}</a>{' '}
                (<a href={project.screenshot.credit.license}>CC BY 4.0</a>), visualized with compression.</p>
            )}
          </div>
          <a href={project.screenshot.src}>View full size <span aria-hidden="true">↗</span></a>
        </figcaption>
      </figure>
      <div className="reading-column">
        <section><h2>The problem</h2><p>{project.problem}</p></section>
        <section><h2>My contribution</h2><p>{project.contribution}</p></section>
        <section id="evidence">
          <h2>Evidence at a glance</h2>
          <p>{detail.evidenceIntro}</p>
          <p className="evidence-hint">Scroll the table horizontally to read all conditions and limits.</p>
          <div className="evidence-scroll" tabIndex="0" role="region" aria-label={`${project.name} evidence table`}>
            <table className="evidence-table">
              <caption>Results, conditions, and what they establish</caption>
              <thead><tr><th scope="col">Check</th><th scope="col">Result</th><th scope="col">Conditions and limits</th></tr></thead>
              <tbody>{detail.evidence.map(([check, result, conditions]) => (
                <tr key={check}><th scope="row">{check}</th><td>{result}</td><td>{conditions}</td></tr>
              ))}</tbody>
            </table>
          </div>
          <SourceLink project={project} source={detail.evidenceSource} />
          {detail.extraEvidenceSource && <SourceLink project={project} source={detail.extraEvidenceSource} />}
        </section>
        <section id="architecture">
          <h2>Architecture</h2><p>{architecture}</p>
          {detail.flows.map(flow => (
            <figure className="architecture-flow" key={flow.label}>
              <figcaption>{flow.label}</figcaption>
              <ol>{flow.steps.map(step => <li key={step}>{step}</li>)}</ol>
              <p className="flow-boundary">{flow.boundary}</p>
            </figure>
          ))}
        </section>
        <section id="engineering-decisions">
          <h2>A consequential decision</h2>
          <dl className="decision-story">
            <div><dt>Constraint</dt><dd>{detail.decision.constraint}</dd></div>
            <div><dt>Alternative</dt><dd>{detail.decision.alternative}</dd></div>
            <div><dt>My choice</dt><dd>{detail.decision.choice}</dd></div>
            <div><dt>Consequence</dt><dd>{detail.decision.consequence}</dd></div>
          </dl>
          <SourceLink project={project} source={detail.decision.source} />
        </section>
        <section id="walkthrough">
          <h2>Guided walkthrough</h2><p>{detail.walkthrough.intro}</p>
          <ol className="walkthrough-steps">
            {detail.walkthrough.steps.map(([title, text], index) => (
              <li key={title}>
                <details open={index === 0}>
                  <summary><span className="step-number">0{index + 1}</span>{title}</summary>
                  <p>{text}</p>
                  {detail.walkthrough.images?.[index] && (
                    <figure className="walkthrough-capture">
                      <a href={detail.walkthrough.images[index].src} aria-label={`View full-size ${title} capture`}>
                        <img src={detail.walkthrough.images[index].src} alt={detail.walkthrough.images[index].alt} width="3200" height="2200" loading="lazy" decoding="async" />
                      </a>
                      <figcaption>{detail.walkthrough.images[index].caption}</figcaption>
                    </figure>
                  )}
                </details>
              </li>
            ))}
          </ol>
          {detail.walkthrough.calculator && <NetCalculator />}
          <SourceLink project={project} source={detail.walkthrough.source} />
          {detail.walkthrough.captureSource && <ArrowLink href={detail.walkthrough.captureSource}>Capture conditions and observations</ArrowLink>}
        </section>
        <section><h2>Current scope</h2><p>{scope}</p></section>
        <section className="sources">
          <h2>Source evidence</h2>
          <p>Implementation and documentation pinned to the reviewed source revision.</p>
          <ul>{project.sources.map(source => <li key={source[1]}><SourceLink project={project} source={source} /></li>)}</ul>
        </section>
        <aside className="next-project">
          <p className="eyebrow">Continue exploring</p>
          <ArrowLink href={`/projects/${nextProject.slug}/`}>{nextProject.name}</ArrowLink>
        </aside>
      </div>
    </article>
  )
}
