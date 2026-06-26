import { NavLink } from 'react-router-dom'

const links = [
  { label: 'Dashboard', path: '/admin/dashboard' },
  { label: 'Bookings', path: '/admin/bookings' },
  { label: 'Contacts', path: '/admin/contacts' },
  { label: 'Estimates', path: '/admin/estimates' },
  { label: 'Tracking', path: '/admin/tracking' },
  { label: 'Branches', path: '/admin/branches' },
  { label: 'Reports', path: '/admin/reports' },
]

export default function AdminSidebar() {
  return (
    <aside className="rounded-md border border-slate-200 bg-white p-4 shadow-sm">
      <p className="px-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-500">Admin</p>
      <nav className="mt-4 grid gap-1">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => `rounded-md px-3 py-2 text-sm font-semibold ${isActive ? 'bg-slate-950 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
