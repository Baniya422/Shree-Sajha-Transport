import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from '../common/Button.jsx'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Routes', path: '/routes' },
  { label: 'Tracking', path: '/tracking' },
  { label: 'Contact', path: '/contact' },
]

function navClass({ isActive }) {
  return `rounded-md px-3 py-2 text-sm font-semibold transition ${isActive ? 'bg-slate-100 text-slate-950' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950'}`
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-slate-950 text-sm font-bold text-white">
            SST
          </span>
          <span>
            <span className="block text-sm font-bold leading-4 text-slate-950">Shree Sajha</span>
            <span className="block text-xs font-semibold leading-4 text-slate-500">Transport</span>
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
          <Button as={Link} to="/booking">Book Now</Button>
        </div>

        <button
          type="button"
          className="rounded-md border border-slate-300 px-3 py-2 text-sm font-semibold text-slate-700 lg:hidden"
          onClick={() => setIsOpen((open) => !open)}
          aria-expanded={isOpen}
        >
          Menu
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navLinks.map((link) => (
              <NavLink key={link.path} to={link.path} className={navClass} onClick={() => setIsOpen(false)}>
                {link.label}
              </NavLink>
            ))}
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <Button as={Link} to="/estimate" variant="outline" onClick={() => setIsOpen(false)}>Estimate</Button>
              <Button as={Link} to="/booking" onClick={() => setIsOpen(false)}>Book Now</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
