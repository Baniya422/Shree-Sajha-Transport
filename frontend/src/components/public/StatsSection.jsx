export default function StatsSection() {
  const stats = [
    { value: '$5b+', label: 'Yearly value', helper: 'Freight transported globally' },
    { value: '932', label: 'Worldwide', helper: 'Offices and warehouses' },
    { value: '81%', label: 'Sustainable', helper: 'Of shipments eco-friendly' },
    { value: '85+', label: 'Trusted clients', helper: 'Fortune 500 partners' }
  ]

  return (
    <section className="bg-blue-600 text-white">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest opacity-90 mb-4">Industry Excellence</p>
          <h2 className="text-4xl font-bold leading-tight">Powering innovation across industries, globally.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <p className="text-5xl font-bold mb-2">{stat.value}</p>
              <p className="font-semibold text-base mb-1">{stat.label}</p>
              <p className="text-sm opacity-80">{stat.helper}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
