export default function SectionHeading({ eyebrow, title, children, className = '', as = 'h1' }) {
  const Heading = as

  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <Heading className="mt-3 text-4xl font-semibold leading-tight text-ink-50 sm:text-5xl">{title}</Heading>
      {children ? <p className="mt-4 text-base leading-8 text-ink-300">{children}</p> : null}
    </div>
  )
}
