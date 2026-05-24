import Button from '../components/ui/Button.jsx'

export default function NotFound() {
  return (
    <section className="section-shell" aria-labelledby="not-found-heading">
      <div className="surface-card p-8">
        <p className="eyebrow">404</p>
        <h1 id="not-found-heading" className="mt-3 text-4xl font-semibold text-ink-50">
          This page is not part of the portfolio.
        </h1>
        <p className="mt-4 max-w-2xl leading-7 text-ink-300">
          Use the navigation to return to the routed portfolio pages.
        </p>
        <Button className="mt-6" to="/" variant="secondary">
          Back home
        </Button>
      </div>
    </section>
  )
}
