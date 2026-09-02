export default function ServicesSection() {
  const services = [
    'Air freight',
    'Sea freight',
    'Road transportation',
    'Rail freights',
    'Warehousing logistics and storage',
    'Other specialised services'
  ]

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold">Transportation and special services</h2>
        <p className="mt-4 text-slate-600 leading-relaxed">Whether your freight needs air, sea or road service, our team will manage the logistics end-to-end to ensure timely delivery and compliance.</p>
      </div>

      <div>
        <img src="https://images.unsplash.com/photo-1508873699372-7ae66f5a4a3c?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=0" alt="cargo ship" className="w-full rounded shadow-lg" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
        {services.map((service, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <span className="text-blue-600 font-bold mt-1">•</span>
            <span className="text-slate-700 font-medium">{service}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
