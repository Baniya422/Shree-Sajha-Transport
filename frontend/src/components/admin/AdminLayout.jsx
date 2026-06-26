import AdminSidebar from './AdminSidebar.jsx'
import AdminTopbar from './AdminTopbar.jsx'

export default function AdminLayout({ children }) {
  return (
    <section className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[240px_1fr] lg:px-8">
      <AdminSidebar />
      <div className="min-w-0">
        <AdminTopbar />
        <div className="mt-6">{children}</div>
      </div>
    </section>
  )
}
