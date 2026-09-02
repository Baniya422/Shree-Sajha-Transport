import AdminLayout from '../../components/admin/AdminLayout.jsx'
import EmptyState from '../../components/common/EmptyState.jsx'
import StatusBadge from '../../components/common/StatusBadge.jsx'

export default function AdminTracking() {
  return (
    <AdminLayout>
      <div className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-[0_22px_70px_-40px_rgba(15,23,42,0.4)] backdrop-blur">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-950">Tracking operations</h2>
            <p className="mt-1 text-sm text-slate-600">Monitor shipment status updates from a central panel.</p>
          </div>
          <StatusBadge tone="warning">Attention</StatusBadge>
        </div>
        <div className="mt-6">
          <EmptyState title="Tracking tools ready" description="Once tracking data is available, this page can show update history and current shipment state." />
        </div>
      </div>
    </AdminLayout>
  )
}
