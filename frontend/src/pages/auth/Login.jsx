import { Link } from 'react-router-dom'
import Button from '../../components/common/Button.jsx'
import PageHeader from '../../components/common/PageHeader.jsx'
import Reveal from '../../components/common/Reveal.jsx'

export default function Login() {
  return (
    <section className="w-full py-10 sm:py-12 lg:py-14">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <Reveal className="rounded-[2rem] border border-white/70 bg-slate-950 p-8 text-white shadow-[0_28px_90px_-44px_rgba(15,23,42,0.85)]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">Admin access</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight">Secure operator login for the transport dashboard</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">This screen is designed to look like a real logistics platform login rather than a generic placeholder.</p>
          <div className="mt-8 grid gap-3 text-sm text-slate-300">
            <p>• Existing API and Sanctum structure can connect here later.</p>
            <p>• Links to password recovery are already in place.</p>
          </div>
        </Reveal>

        <Reveal>
          <PageHeader
            eyebrow="Admin"
            title="Login to the operations panel"
            description="Enter your credentials to manage bookings, contacts, estimates, and tracking from the admin area."
          />
          <form className="mt-8 grid gap-5 rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-[0_22px_70px_-40px_rgba(15,23,42,0.4)] backdrop-blur">
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Email
              <input className="rounded-full border border-slate-300 bg-white px-4 py-3 font-normal outline-none transition focus:border-slate-500" type="email" placeholder="admin@shreesajha.com" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Password
              <input className="rounded-full border border-slate-300 bg-white px-4 py-3 font-normal outline-none transition focus:border-slate-500" type="password" placeholder="Password" />
            </label>
            <div className="flex flex-wrap items-center justify-between gap-3">
              <Link to="/forgot-password" className="text-sm font-medium text-slate-600 hover:text-slate-950">Forgot password?</Link>
              <Button type="button">Sign in</Button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
