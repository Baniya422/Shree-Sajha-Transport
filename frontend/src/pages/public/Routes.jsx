import PageHeader from '../../components/common/PageHeader.jsx'
import RouteCard from '../../components/cards/RouteCard.jsx'
import Reveal from '../../components/common/Reveal.jsx'
import { routes } from '../../data/routes.js'

export default function RoutesPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <PageHeader
        eyebrow="Routes"
        title="Transport corridors designed for clarity and trust"
        description="Each route card emphasizes the destination, service level, and typical transit time in a clean visual hierarchy."
      />
      <div className="mt-8 grid gap-5">
        {routes.map((route) => (
          <Reveal key={route.title}>
            <RouteCard route={route} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
