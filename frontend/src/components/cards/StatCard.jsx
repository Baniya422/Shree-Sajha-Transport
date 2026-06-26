export default function StatCard({ label, value, helper }) {
  return (
    <article className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-slate-500">{label}</p>
      <p className="mt-2 text-2xl font-bold text-slate-950">{value}</p>
      {helper && <p className="mt-2 text-sm text-slate-600">{helper}</p>}
    </article>
  )
}
