import AdminLayout from '../../components/admin/AdminLayout.jsx'
import AdminStatCard from '../../components/admin/AdminStatCard.jsx'

export default function Dashboard() {
  return (
    <AdminLayout>
      <div className="grid gap-5 md:grid-cols-3">
        <AdminStatCard label="Bookings" value="0" />
        <AdminStatCard label="Contacts" value="0" />
        <AdminStatCard label="Estimates" value="0" />
      </div>
    </AdminLayout>
  )
}
