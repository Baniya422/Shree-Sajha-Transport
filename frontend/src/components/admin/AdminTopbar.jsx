export default function AdminTopbar() {
  return (
    <div className="rounded-[1.75rem] border border-white/70 bg-white/85 p-5 shadow-[0_18px_50px_-34px_rgba(15,23,42,0.45)] backdrop-blur">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Admin Workspace</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950">Operations Dashboard</h1>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">A premium control surface for transport operations, customer requests, and route visibility.</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">Live</span>
          <span className="rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">Sanctum-ready</span>
        </div>
      </div>
    </div>
  )
}
