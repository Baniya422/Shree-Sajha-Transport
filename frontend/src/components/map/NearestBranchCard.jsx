export default function NearestBranchCard({ branch }) {
  return (
    <div className="rounded-md border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-red-600">Nearest Branch</p>
      <h2 className="mt-2 text-lg font-semibold text-slate-950">{branch?.name || 'Branch will be suggested later'}</h2>
      <p className="mt-2 text-sm text-slate-600">{branch?.address || 'Coverage logic is prepared in the Laravel service.'}</p>
    </div>
  )
}
