export default function StatCard({ label, value, helper }) {
  return (
    <article className="rounded-[1.5rem] border border-white/60 bg-white/85 p-5 shadow-[0_18px_50px_-32px_rgba(15,23,42,0.45)] backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">{label}</p>
      <p className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">{value}</p>
      {helper && <p className="mt-2 text-sm leading-6 text-slate-600">{helper}</p>}
    </article>
  )
}
