export default function ArrowLink({ href, children, ...props }) {
  return (
    <a className="arrow-link" href={href} {...props}>
      {children} <span aria-hidden="true">↗</span>
    </a>
  )
}
