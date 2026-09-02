import { Link } from 'react-router-dom'
import Button from '../../components/common/Button.jsx'
import SectionHeader from '../../components/common/SectionHeader.jsx'
import Reveal from '../../components/common/Reveal.jsx'

export default function ForgotPassword() {
  return (
    <section className="mx-auto max-w-md px-4 py-14 sm:px-6 lg:px-8">
      <Reveal className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_22px_70px_-40px_rgba(15,23,42,0.4)] backdrop-blur">
        <SectionHeader eyebrow="Admin" title="Reset your password" description="Send a reset link to the registered email address." />
        <form className="mt-8 grid gap-4">
          <label className="grid gap-2 text-sm font-medium text-slate-700">
            Email
            <input className="rounded-full border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-slate-500" type="email" placeholder="admin@shreesajha.com" />
          </label>
          <div className="flex flex-wrap gap-3">
            <Button type="button">Send reset link</Button>
            <Button as={Link} to="/login" variant="outline">Back to login</Button>
          </div>
        </form>
      </Reveal>
    </section>
  )
}
