import Reveal from './Reveal.jsx'

export default function PageHeader({ eyebrow, title, description, children, className = '' }) {
  return (
    <Reveal className={`rounded-[2rem] border border-white/70 bg-white/82 p-6 shadow-[0_24px_70px_-42px_rgba(15,23,42,0.5)] backdrop-blur sm:p-8 ${className}`}>
      <div className="max-w-3xl">
        {eyebrow && (
          <p className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-amber-800">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">{description}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </Reveal>
  )
}