import AdminLayout from '../../components/admin/AdminLayout.jsx'
import EmptyState from '../../components/common/EmptyState.jsx'
import StatusBadge from '../../components/common/StatusBadge.jsx'

export default function Bookings() {
  return (
    <AdminLayout>
      <div className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-[0_22px_70px_-40px_rgba(15,23,42,0.4)] backdrop-blur">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-950">Recent bookings</h2>
            <p className="mt-1 text-sm text-slate-600">A clean placeholder table for future booking management.</p>
          </div>
          <StatusBadge tone="success">Operational</StatusBadge>
        </div>
        <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200">
          <div className="grid grid-cols-4 gap-4 border-b border-slate-200 bg-slate-50 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            <span>ID</span>
            <span>Customer</span>
            <span>Route</span>
            <span>Status</span>
          </div>
          <div className="grid grid-cols-4 gap-4 px-4 py-4 text-sm text-slate-700">
            <span>#BK-1201</span>
            <span>Ram Bahadur</span>
            <span>Kathmandu to Butwal</span>
            <StatusBadge tone="warning">Pending</StatusBadge>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
