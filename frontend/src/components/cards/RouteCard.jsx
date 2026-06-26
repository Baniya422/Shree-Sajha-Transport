export default function RouteCard({ route }) {
  return (
    <article className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold text-slate-950">{route.title}</h2>
          <p className="mt-2 text-sm text-slate-600">{route.description}</p>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">{route.eta}</span>
      </div>
    </article>
  )
}
