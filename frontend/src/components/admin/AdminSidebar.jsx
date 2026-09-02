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
    <aside className="rounded-[1.75rem] border border-white/70 bg-slate-950 p-4 text-slate-200 shadow-[0_24px_60px_-34px_rgba(15,23,42,0.7)]">
      <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Admin Workspace</p>
        <p className="mt-2 text-lg font-semibold text-white">Operations Hub</p>
        <p className="mt-2 text-sm leading-6 text-slate-400">Manage bookings, contacts, estimates, and tracking from one place.</p>
      </div>
      <nav className="mt-4 grid gap-1">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) => `rounded-2xl px-3.5 py-2.5 text-sm font-medium transition ${isActive ? 'bg-white text-slate-950 shadow-sm' : 'text-slate-300 hover:bg-white/10 hover:text-white'}`}
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
