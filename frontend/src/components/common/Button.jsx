const variants = {
  primary: 'bg-red-600 text-white shadow-sm hover:bg-red-700 focus-visible:outline-red-600',
  secondary: 'bg-slate-900 text-white shadow-sm hover:bg-slate-800 focus-visible:outline-slate-900',
  outline: 'border border-slate-300 bg-white text-slate-800 hover:border-slate-400 hover:bg-slate-50 focus-visible:outline-slate-600',
  ghost: 'text-slate-700 hover:bg-slate-100 focus-visible:outline-slate-600',
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
      className={`inline-flex min-h-11 items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variants[variant]} ${className}`}
      {...componentProps}
    >
      {children}
    </Component>
  )
}
