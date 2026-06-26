import Button from '../common/Button.jsx'

export default function EstimateForm() {
  return (
    <form className="grid gap-5 rounded-md border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Pickup City
          <input className="rounded-md border border-slate-300 px-3 py-2 font-normal" name="pickup_city" placeholder="Kathmandu" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Delivery City
          <input className="rounded-md border border-slate-300 px-3 py-2 font-normal" name="delivery_city" placeholder="Bhairahawa" />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Goods Type
          <input className="rounded-md border border-slate-300 px-3 py-2 font-normal" name="goods_type" placeholder="General goods" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700">
          Weight
          <input className="rounded-md border border-slate-300 px-3 py-2 font-normal" name="weight" placeholder="Weight in kg" />
        </label>
      </div>
      <Button type="button" className="w-full sm:w-auto">Calculate Later</Button>
    </form>
  )
}
