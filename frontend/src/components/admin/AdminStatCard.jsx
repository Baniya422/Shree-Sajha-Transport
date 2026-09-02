export default function AdminStatCard({ label, value }) {
  return (
    <div className="rounded-[1.5rem] border border-white/70 bg-white/85 p-5 shadow-[0_18px_50px_-32px_rgba(15,23,42,0.45)] backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</p>
      <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">{value}</p>
    </div>
  )
}
