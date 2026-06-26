import Button from '../../components/common/Button.jsx'
import SectionHeader from '../../components/common/SectionHeader.jsx'

export default function Login() {
  return (
    <section className="mx-auto max-w-md px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Admin"
        title="Login placeholder"
        description="Sanctum authentication will connect here when the admin workflow is implemented."
      />
      <form className="mt-8 grid gap-5 rounded-md border border-slate-200 bg-white p-6 shadow-sm">
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Email
          <input className="rounded-md border border-slate-300 px-3 py-2 font-normal" type="email" placeholder="admin@shreesajha.com" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Password
          <input className="rounded-md border border-slate-300 px-3 py-2 font-normal" type="password" placeholder="Password" />
        </label>
        <Button type="button">Login Later</Button>
      </form>
    </section>
  )
}
