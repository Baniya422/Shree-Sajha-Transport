import SectionHeader from '../../components/common/SectionHeader.jsx'
import ServiceCard from '../../components/cards/ServiceCard.jsx'
import { services } from '../../data/services.js'

export default function Services() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Services"
        title="Service placeholders"
        description="The service page is prepared for your frontend teammate to expand with Tailwind-based UI."
      />
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  )
}
