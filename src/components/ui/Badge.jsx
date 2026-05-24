export default function Badge({ children, tone = 'default', className = '' }) {
  const tones = {
    default: 'border-white/10 bg-white/[0.05] text-ink-300',
    accent: 'border-signal-cyan/30 bg-signal-cyan/10 text-signal-cyan',
    green: 'border-signal-green/25 bg-signal-green/10 text-signal-green',
  }

  return (
    <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-semibold ${tones[tone]} ${className}`}>
      {children}
    </span>
  )
}
