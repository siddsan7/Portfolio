export default function ArrowLink({ href, children, ...props }) {
  return (
    <a className="arrow-link" href={href} {...props}>
      {children}{' '}
      <span className="arrow" aria-hidden="true">
        <span>↗</span>
      </span>
    </a>
  )
}
