export default function Testimonial() {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          <button className="flex-shrink-0 text-2xl opacity-50 hover:opacity-100 transition">‹</button>
          
          <div className="flex-1 text-center">
            <p className="text-xl font-semibold leading-relaxed">Logistics and customs are not my core business, and not my favourite thing to take care of. It's a relief to get help from CHS' contact people.</p>
            <p className="mt-8 font-medium text-sm">Harvey Mitchell, Office Manager of Designspace</p>
          </div>

          <button className="flex-shrink-0 text-2xl opacity-50 hover:opacity-100 transition">›</button>
        </div>
      </div>
    </section>
  )
}
