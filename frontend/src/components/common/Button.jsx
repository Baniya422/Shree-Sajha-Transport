const variants = {
  primary: 'bg-slate-950 text-white shadow-[0_16px_32px_-18px_rgba(15,23,42,0.9)] hover:bg-slate-800 focus-visible:outline-slate-950',
  secondary: 'bg-amber-600 text-white shadow-[0_16px_32px_-18px_rgba(180,83,9,0.9)] hover:bg-amber-700 focus-visible:outline-amber-700',
  outline: 'border border-slate-300 bg-white/90 text-slate-800 hover:border-slate-400 hover:bg-white focus-visible:outline-slate-700',
  ghost: 'text-slate-700 hover:bg-slate-100/80 focus-visible:outline-slate-600',
}

export default function Button({
  as: Component = 'button',
  type = 'button',
  variant = 'primary',
  className = '',
  children,
  ...props
}) {
  const componentProps = Component === 'button' ? { type, ...props } : props

  return (
    <Component
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`}
      {...componentProps}
    >
      {children}
    </Component>
  )
}
