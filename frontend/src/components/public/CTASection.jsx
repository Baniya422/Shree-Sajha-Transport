export default function CTASection() {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-8">
      <div className="grid gap-8 lg:grid-cols-2 items-center">
        <div>
          <h3 className="text-2xl font-bold">Make sure you choose the right expedition services for your delivery</h3>
          <p className="mt-4 text-slate-600 leading-relaxed">We assist you at every step — documentation, customs clearance, and transport coordination to guarantee a smooth handover.</p>
        </div>

        <div className="flex justify-start lg:justify-end">
          <a href="/contact" className="inline-flex items-center rounded bg-blue-600 px-8 py-3 text-white font-medium shadow-md hover:bg-blue-700 transition">Contact us</a>
        </div>
      </div>
    </div>
  )
}
