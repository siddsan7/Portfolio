import { Link } from 'react-router-dom'

const variants = {
  primary: 'bg-signal-cyan text-graphite-950 hover:bg-signal-blue',
  secondary: 'border border-white/15 bg-white/5 text-ink-50 hover:border-signal-cyan/70 hover:bg-white/10',
  ghost: 'text-ink-200 hover:bg-white/10 hover:text-ink-50',
}

export default function Button({
  children,
  className = '',
  variant = 'primary',
  to,
  href,
  type = 'button',
  ...props
}) {
  const classes = `focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold transition ${variants[variant]} ${className}`

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  )
}
