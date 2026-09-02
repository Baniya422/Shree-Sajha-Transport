import Button from '../common/Button.jsx'

export default function BookingForm() {
  return (
    <form className="grid gap-5 rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-[0_22px_70px_-40px_rgba(15,23,42,0.4)] backdrop-blur">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Full Name
          <input className="rounded-full border border-slate-300 bg-white px-4 py-3 font-normal outline-none transition focus:border-slate-500" name="full_name" placeholder="Customer name" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Phone
          <input className="rounded-full border border-slate-300 bg-white px-4 py-3 font-normal outline-none transition focus:border-slate-500" name="phone" placeholder="98XXXXXXXX" />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Pickup City
          <input className="rounded-full border border-slate-300 bg-white px-4 py-3 font-normal outline-none transition focus:border-slate-500" name="pickup_city" placeholder="Kathmandu" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Delivery City
          <input className="rounded-full border border-slate-300 bg-white px-4 py-3 font-normal outline-none transition focus:border-slate-500" name="delivery_city" placeholder="Butwal" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-medium text-slate-700">
        Goods Details
        <textarea className="min-h-28 rounded-[1.5rem] border border-slate-300 bg-white px-4 py-3 font-normal outline-none transition focus:border-slate-500" name="message" placeholder="Goods type, weight, timing, and notes" />
      </label>
      <Button type="button" className="w-full sm:w-auto">Submit Booking Later</Button>
    </form>
  )
}
