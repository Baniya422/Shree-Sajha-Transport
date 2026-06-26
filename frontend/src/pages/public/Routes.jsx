import SectionHeader from '../../components/common/SectionHeader.jsx'
import RouteCard from '../../components/cards/RouteCard.jsx'
import { routes } from '../../data/routes.js'

export default function RoutesPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Routes"
        title="Supported transport routes"
        description="Starter route content is in data files so UI work can evolve without touching Laravel."
      />
      <div className="mt-8 grid gap-5">
        {routes.map((route) => (
          <RouteCard key={route.title} route={route} />
        ))}
      </div>
    </section>
  )
}
