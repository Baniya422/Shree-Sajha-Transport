import Button from '../common/Button.jsx'

export default function EstimateForm() {
  return (
    <form className="grid gap-5 rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-[0_22px_70px_-40px_rgba(15,23,42,0.4)] backdrop-blur">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Pickup City
          <input className="rounded-full border border-slate-300 bg-white px-4 py-3 font-normal outline-none transition focus:border-slate-500" name="pickup_city" placeholder="Kathmandu" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Delivery City
          <input className="rounded-full border border-slate-300 bg-white px-4 py-3 font-normal outline-none transition focus:border-slate-500" name="delivery_city" placeholder="Bhairahawa" />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Goods Type
          <input className="rounded-full border border-slate-300 bg-white px-4 py-3 font-normal outline-none transition focus:border-slate-500" name="goods_type" placeholder="General goods" />
        </label>
        <label className="grid gap-2 text-sm font-medium text-slate-700">
          Weight
          <input className="rounded-full border border-slate-300 bg-white px-4 py-3 font-normal outline-none transition focus:border-slate-500" name="weight" placeholder="Weight in kg" />
        </label>
      </div>
      <Button type="button" className="w-full sm:w-auto">Calculate Later</Button>
    </form>
  )
}
