import { Link } from 'react-router-dom'
import { companyInfo } from '../../data/companyInfo.js'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <p className="text-base font-bold text-white">{companyInfo.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-slate-400">{companyInfo.shortDescription}</p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Quick Links</p>
          <div className="mt-3 grid gap-2 text-sm">
            <Link to="/services" className="hover:text-white">Services</Link>
            <Link to="/routes" className="hover:text-white">Routes</Link>
            <Link to="/booking" className="hover:text-white">Booking</Link>
            <Link to="/tracking" className="hover:text-white">Tracking</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Contact</p>
          <div className="mt-3 grid gap-2 text-sm text-slate-400">
            <span>{companyInfo.phone}</span>
            <span>{companyInfo.email}</span>
            <span>{companyInfo.address}</span>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 px-4 py-4 text-center text-xs text-slate-500">
        Copyright {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
      </div>
    </footer>
  )
}
