import { Link } from 'react-router-dom'
import Button from '../../components/common/Button.jsx'
import SectionHeader from '../../components/common/SectionHeader.jsx'
import Reveal from '../../components/common/Reveal.jsx'

export default function ResetPassword() {
  return (
    <section className="w-full py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-md">
        <Reveal className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_22px_70px_-40px_rgba(15,23,42,0.4)] backdrop-blur">
          <SectionHeader eyebrow="Admin" title="Set a new password" description="Use a secure new password to regain access." />
          <form className="mt-8 grid gap-4">
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              New password
              <input className="rounded-full border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-slate-500" type="password" placeholder="New password" />
            </label>
            <label className="grid gap-2 text-sm font-medium text-slate-700">
              Confirm password
              <input className="rounded-full border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-slate-500" type="password" placeholder="Confirm password" />
            </label>
            <div className="flex flex-wrap gap-3">
              <Button type="button">Update password</Button>
              <Button as={Link} to="/login" variant="outline">Back to login</Button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
