export default function BranchCard({ branch }) {
  return (
    <article className="rounded-md border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-slate-950">{branch.name}</h2>
      <p className="mt-2 text-sm text-slate-600">{branch.address}</p>
      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Coverage</p>
      <p className="mt-2 text-sm leading-6 text-slate-600">{branch.coverage.join(', ')}</p>
    </article>
  )
}
