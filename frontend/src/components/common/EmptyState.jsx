export default function EmptyState({ title = 'Nothing found', description = 'There is no data to show yet.' }) {
  return (
    <div className="rounded-[1.75rem] border border-dashed border-slate-300/80 bg-white/85 p-8 text-center shadow-[0_20px_60px_-36px_rgba(15,23,42,0.35)] backdrop-blur">
      <h2 className="text-lg font-semibold text-slate-950">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
    </div>
  )
}
