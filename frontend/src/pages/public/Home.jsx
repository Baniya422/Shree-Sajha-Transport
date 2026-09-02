import { Link } from 'react-router-dom'
import Button from '../../components/common/Button.jsx'
import PageHeader from '../../components/common/PageHeader.jsx'
import Reveal from '../../components/common/Reveal.jsx'
import StatCard from '../../components/cards/StatCard.jsx'
import ServiceCard from '../../components/cards/ServiceCard.jsx'
import RouteCard from '../../components/cards/RouteCard.jsx'
import BranchCard from '../../components/cards/BranchCard.jsx'
import { services } from '../../data/services.js'
import { routes } from '../../data/routes.js'
import { branches } from '../../data/branches.js'
import { companyInfo } from '../../data/companyInfo.js'

export default function Home() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <PageHeader
          eyebrow="Transport and logistics"
          title="Premium cargo transport for Nepal's high-trust delivery routes"
          description="A clean, modern frontend for Shree Sajha Transport with professional booking, routing, tracking, and admin surfaces built for real operations."
        >
          <Button as={Link} to="/booking">Start Booking</Button>
          <Button as={Link} to="/estimate" variant="outline">Get Estimate</Button>
          <Button as={Link} to="/tracking" variant="ghost">Track Shipment</Button>
        </PageHeader>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-4 pb-8 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <Reveal className="rounded-[2rem] border border-white/70 bg-slate-950 p-8 text-white shadow-[0_28px_90px_-44px_rgba(15,23,42,0.85)]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">Operational overview</p>
          <h2 className="mt-4 max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">Built for freight clarity, customer confidence, and branch coordination.</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">Shree Sajha Transport is presented as a serious logistics brand with restrained styling, strong typography, and a clear call-to-action path for bookings and tracking.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Branches</p>
              <p className="mt-2 text-2xl font-semibold">3</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Routes</p>
              <p className="mt-2 text-2xl font-semibold">3</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Coverage</p>
              <p className="mt-2 text-2xl font-semibold">Nepal</p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4">
          <StatCard label="Company" value={companyInfo.name} helper={companyInfo.shortDescription} />
          <StatCard label="Primary contact" value={companyInfo.phone} helper={companyInfo.address} />
          <StatCard label="Operations" value="Booking + Tracking" helper="Premium frontend now; API integration ready later." />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={{ ...service, index: index + 1 }} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-5">
          {routes.map((route) => (
            <RouteCard key={route.title} route={route} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          {branches.map((branch) => (
            <BranchCard key={branch.name} branch={branch} />
          ))}
        </div>
      </section>
    </main>
  )
}
