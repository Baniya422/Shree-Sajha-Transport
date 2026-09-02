import AdminLayout from '../../components/admin/AdminLayout.jsx'
import AdminStatCard from '../../components/admin/AdminStatCard.jsx'
import EmptyState from '../../components/common/EmptyState.jsx'

export default function Dashboard() {
  return (
    <AdminLayout>
      <div className="grid gap-5 md:grid-cols-3">
        <AdminStatCard label="Bookings" value="128" />
        <AdminStatCard label="Contacts" value="42" />
        <AdminStatCard label="Estimates" value="87" />
      </div>
      <div className="mt-6">
        <EmptyState title="Dashboard overview ready" description="The admin surface now has premium shell styling and can be connected to real data later." />
      </div>
    </AdminLayout>
  )
}
