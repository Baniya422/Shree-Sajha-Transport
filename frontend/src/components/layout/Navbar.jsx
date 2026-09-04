import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from '../common/Button.jsx'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Routes', path: '/routes' },
  { label: 'Booking', path: '/booking' },
  { label: 'Tracking', path: '/tracking' },
  { label: 'Contact', path: '/contact' },
]

function navClass({ isActive }) {
  return `rounded-full px-3.5 py-2 text-sm font-medium transition ${isActive ? 'bg-slate-950 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-950'}`
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 border-b border-white/70 bg-white/82 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-[96rem] items-center justify-between px-4 py-4 sm:px-6 lg:px-10" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white shadow-[0_16px_30px_-18px_rgba(15,23,42,0.95)]">
            ST
          </span>
          <span>
            <span className="block text-sm font-semibold leading-4 text-slate-950">Shree Sajha</span>
            <span className="block text-xs font-medium uppercase tracking-[0.22em] text-slate-500">Transport</span>
          </span>
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink key={link.path} to={link.path} className={navClass}>
              {link.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Button as={Link} to="/estimate" variant="outline">Estimate</Button>
          <Button as={Link} to="/booking" variant="secondary">Book Cargo</Button>
        </div>

        <button
          type="button"
          className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
        >
          Menu
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-200/80 bg-white/96 px-4 py-4 lg:hidden backdrop-blur-xl">
          <div className="mx-auto grid max-w-[96rem] gap-2 px-4 sm:px-6 lg:px-10">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={navClass} onClick={() => setIsOpen(false)}>
                {link.label}
              </NavLink>
            ))}
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <Button as={Link} to="/estimate" variant="outline" onClick={() => setIsOpen(false)}>Estimate</Button>
              <Button as={Link} to="/booking" variant="secondary" onClick={() => setIsOpen(false)}>Book Cargo</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
