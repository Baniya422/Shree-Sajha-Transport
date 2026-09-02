import AdminLayout from '../../components/admin/AdminLayout.jsx'
import EmptyState from '../../components/common/EmptyState.jsx'
import StatusBadge from '../../components/common/StatusBadge.jsx'

export default function BookingDetails() {
  return (
    <AdminLayout>
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-[0_22px_70px_-40px_rgba(15,23,42,0.4)] backdrop-blur">
          <h2 className="text-xl font-semibold text-slate-950">Booking #BK-1201</h2>
          <p className="mt-2 text-sm text-slate-600">Detailed booking view for customer, route, and cargo information.</p>
          <div className="mt-5 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><p className="text-slate-500">Customer</p><p className="mt-1 font-medium">Ram Bahadur</p></div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><p className="text-slate-500">Route</p><p className="mt-1 font-medium">Kathmandu to Butwal</p></div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><p className="text-slate-500">Cargo</p><p className="mt-1 font-medium">General goods</p></div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4"><p className="text-slate-500">Status</p><StatusBadge tone="warning">Pending</StatusBadge></div>
          </div>
        </div>
        <EmptyState title="Lifecycle controls ready" description="This area can later host assignment, status updates, and notes." />
      </div>
    </AdminLayout>
  )
}
