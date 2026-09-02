export default function ServicesGrid() {
  const services = [
    {
      icon: '🚢',
      title: 'Marine Cargo Services',
      description: 'Comprehensive sea freight solutions for general cargo, containers, and hazardous materials with FCL and LCL options.'
    },
    {
      icon: '✈️',
      title: 'Air Cargo Services',
      description: 'Express air freight for time-sensitive shipments with door-to-door pickup and delivery coordination.'
    },
    {
      icon: '🚚',
      title: 'Inland Cargo Services',
      description: 'Reliable ground transportation across multiple routes with real-time tracking and flexible scheduling options.'
    },
    {
      icon: '🏗️',
      title: 'Heavy Equipment Services',
      description: 'Specialized handling for oversized and heavy machinery with crane services and professional rigging support.'
    },
    {
      icon: '🚗',
      title: 'Car Shipping Services',
      description: 'Vehicle transportation services with secure loading, weather protection and safe delivery guarantees.'
    },
    {
      icon: '📦',
      title: 'Warehouse Management',
      description: 'Climate-controlled storage, inventory management and distribution services across major logistics hubs.'
    }
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-4">The tools you need to win and keep more clients</h2>
      <p className="text-slate-600 mb-12">Comprehensive logistics solutions tailored to your business needs</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-lg font-semibold mb-3">{service.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
