export default function HeroServices() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl font-bold leading-tight">We provide logistics solution tailor-made for individual customer!</h1>
          <p className="mt-6 text-slate-600 leading-relaxed">Whether your freight needs air, sea or road service, our team will manage the logistics end-to-end to ensure timely delivery and compliance.</p>
        </div>

        <div>
          <img src="https://images.unsplash.com/photo-1505320291840-d514dc7e8f53?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=0" alt="logistics containers" className="w-full rounded shadow-lg" />
        </div>
      </div>
    </section>
  )
}
