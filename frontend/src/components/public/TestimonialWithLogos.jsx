export default function TestimonialWithLogos() {
  const logos = ['Amazon', 'Outsitio', 'Airbnb', 'Shopify']

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <img src="https://images.unsplash.com/photo-1553531088-e4c4d0f5a0e7?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=0" alt="cargo ship" className="w-full rounded shadow-lg" />
        </div>

        <div>
          <p className="text-lg font-semibold leading-relaxed">"Designspace has consistently delivered above and beyond my expectations! Brilliant design work, incredible responsive service and attention to detail."</p>
          <p className="mt-6 font-medium">Allen Devereux</p>

          <div className="mt-12">
            <p className="text-sm text-slate-600 mb-6">Trusted by leading companies</p>
            <div className="flex gap-8 items-center flex-wrap">
              {logos.map((logo, idx) => (
                <div key={idx} className="text-slate-400 font-semibold text-sm">{logo}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
