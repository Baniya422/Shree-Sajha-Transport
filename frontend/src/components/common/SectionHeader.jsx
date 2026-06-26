export default function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-red-600">
          {eyebrow}
        </p>
      )}
      <h1 className="text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 text-base leading-7 text-slate-600">
          {description}
        </p>
      )}
    </div>
  )
}
