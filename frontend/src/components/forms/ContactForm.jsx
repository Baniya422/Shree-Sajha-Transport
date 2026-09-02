import Button from '../common/Button.jsx'

export default function ContactForm() {
  return (
    <form className="grid gap-5 rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-[0_22px_70px_-40px_rgba(15,23,42,0.4)] backdrop-blur">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Name
          <input className="rounded-full border border-slate-300 bg-white px-4 py-3 font-normal outline-none transition focus:border-slate-500" name="name" placeholder="Your name" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Phone
          <input className="rounded-full border border-slate-300 bg-white px-4 py-3 font-normal outline-none transition focus:border-slate-500" name="phone" placeholder="98XXXXXXXX" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-slate-700">
        Message
        <textarea className="min-h-28 rounded-[1.5rem] border border-slate-300 bg-white px-4 py-3 font-normal outline-none transition focus:border-slate-500" name="message" placeholder="How can we help?" />
      </label>
      <Button type="button" className="w-full sm:w-auto">Send Message Later</Button>
    </form>
  )
}
