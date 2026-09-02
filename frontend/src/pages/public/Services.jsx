import { Link } from 'react-router-dom'
import Button from '../../components/common/Button.jsx'
import PageHeader from '../../components/common/PageHeader.jsx'
import Reveal from '../../components/common/Reveal.jsx'
import ServiceCard from '../../components/cards/ServiceCard.jsx'
import { services } from '../../data/services.js'

export default function Services() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <PageHeader
          eyebrow="Services"
          title="Focused logistics services with a premium presentation"
          description="The service pages avoid loud visuals and instead communicate capability, trust, and route readiness."
        >
          <Button as={Link} to="/booking">Request Pickup</Button>
          <Button as={Link} to="/estimate" variant="outline">Estimate Cargo Cost</Button>
        </PageHeader>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.05}>
              <ServiceCard service={{ ...service, index: index + 1 }} />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  )
}
