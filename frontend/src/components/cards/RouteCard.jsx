export default function RouteCard({ route }) {
  return (
    <article className="rounded-[1.5rem] border border-white/70 bg-white/85 p-6 shadow-[0_18px_50px_-34px_rgba(15,23,42,0.45)] backdrop-blur">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">Route</p>
          <h2 className="mt-2 text-xl font-semibold text-slate-950">{route.title}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">{route.description}</p>
        </div>
        <span className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800">{route.eta}</span>
      </div>
    </article>
  )
}
