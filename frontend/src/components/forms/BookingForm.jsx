import Button from '../common/Button.jsx'

export default function BookingForm() {
  return (
    <form className="grid gap-5 rounded-md border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Full Name
          <input className="rounded-md border border-slate-300 px-3 py-2 font-normal" name="full_name" placeholder="Customer name" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Phone
          <input className="rounded-md border border-slate-300 px-3 py-2 font-normal" name="phone" placeholder="98XXXXXXXX" />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Pickup City
          <input className="rounded-md border border-slate-300 px-3 py-2 font-normal" name="pickup_city" placeholder="Kathmandu" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Delivery City
          <input className="rounded-md border border-slate-300 px-3 py-2 font-normal" name="delivery_city" placeholder="Butwal" />
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-slate-700">
        Goods Details
        <textarea className="min-h-28 rounded-md border border-slate-300 px-3 py-2 font-normal" name="message" placeholder="Goods type, weight, timing, and notes" />
      </label>
      <Button type="button" className="w-full sm:w-auto">Submit Booking Later</Button>
    </form>
  )
}
