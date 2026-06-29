export default function WhyChooseUs() {
  const reasons = [
    {
      icon: '👥',
      title: 'The Team',
      description: 'Specialized logistics experts with over 15 years experience in handling complex shipments globally.'
    },
    {
      icon: '💬',
      title: 'Customer Support',
      description: 'Dedicated support team available 24/7 to assist with tracking, documentation and emergency requests.'
    },
    {
      icon: '⚡',
      title: 'Competitive Rates',
      description: 'Best pricing in the industry with transparent billing and no hidden charges for any service.'
    }
  ]

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-12">Why choose us?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reasons.map((reason, idx) => (
          <div key={idx} className="border border-slate-200 rounded-lg p-6 shadow-sm hover:shadow-md transition">
            <div className="text-4xl mb-4">{reason.icon}</div>
            <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{reason.description}</p>
            <a href="#" className="text-blue-600 text-sm font-medium mt-4 inline-block hover:text-blue-700">Learn More →</a>
          </div>
        ))}
      </div>
    </section>
  )
}
