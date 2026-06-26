import Button from '../common/Button.jsx'

export default function ContactForm() {
  return (
    <form className="grid gap-5 rounded-md border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Name
          <input className="rounded-md border border-slate-300 px-3 py-2 font-normal" name="name" placeholder="Your name" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Phone
          <input className="rounded-md border border-slate-300 px-3 py-2 font-normal" name="phone" placeholder="98XXXXXXXX" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-slate-700">
        Message
        <textarea className="min-h-28 rounded-md border border-slate-300 px-3 py-2 font-normal" name="message" placeholder="How can we help?" />
      </label>
      <Button type="button" className="w-full sm:w-auto">Send Message Later</Button>
    </form>
  )
}
