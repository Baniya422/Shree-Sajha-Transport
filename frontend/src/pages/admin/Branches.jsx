import AdminLayout from '../../components/admin/AdminLayout.jsx'
import EmptyState from '../../components/common/EmptyState.jsx'
import StatusBadge from '../../components/common/StatusBadge.jsx'

export default function Branches() {
  return (
    <AdminLayout>
      <div className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-[0_22px_70px_-40px_rgba(15,23,42,0.4)] backdrop-blur">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-950">Branch coverage</h2>
            <p className="mt-1 text-sm text-slate-600">Manage branch visibility and service areas.</p>
          </div>
          <StatusBadge tone="success">3 active</StatusBadge>
        </div>
        <div className="mt-6">
          <EmptyState title="Branch controls ready" description="Branch administration can be wired to the backend later without changing the visual shell." />
        </div>
      </div>
    </AdminLayout>
  )
}
