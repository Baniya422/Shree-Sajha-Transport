export default function BranchCard({ branch }) {
  return (
    <article className="rounded-[1.5rem] border border-white/70 bg-white/85 p-6 shadow-[0_18px_50px_-34px_rgba(15,23,42,0.45)] backdrop-blur">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Branch</p>
      <h2 className="mt-2 text-xl font-semibold text-slate-950">{branch.name}</h2>
      <p className="mt-2 text-sm text-slate-600">{branch.address}</p>
      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Coverage</p>
      <p className="mt-2 text-sm leading-6 text-slate-600">{branch.coverage.join(', ')}</p>
    </article>
  )
}
