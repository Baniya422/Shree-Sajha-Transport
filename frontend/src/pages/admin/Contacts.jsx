import AdminLayout from '../../components/admin/AdminLayout.jsx'
import EmptyState from '../../components/common/EmptyState.jsx'
import StatusBadge from '../../components/common/StatusBadge.jsx'

export default function Contacts() {
  return (
    <AdminLayout>
      <div className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-[0_22px_70px_-40px_rgba(15,23,42,0.4)] backdrop-blur">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-slate-950">Contact submissions</h2>
            <p className="mt-1 text-sm text-slate-600">Incoming enquiries can be triaged from here.</p>
          </div>
          <StatusBadge tone="success">Live inbox</StatusBadge>
        </div>
        <div className="mt-6 grid gap-4">
          <EmptyState title="No contact threads yet" description="The admin inbox will render actual contact submissions once wired to the backend." />
        </div>
      </div>
    </AdminLayout>
  )
}
