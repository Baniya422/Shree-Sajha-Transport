import { Link } from 'react-router-dom'
import Button from '../../components/common/Button.jsx'
import PageHeader from '../../components/common/PageHeader.jsx'
import Reveal from '../../components/common/Reveal.jsx'
import StatCard from '../../components/cards/StatCard.jsx'
import ServiceCard from '../../components/cards/ServiceCard.jsx'
import RouteCard from '../../components/cards/RouteCard.jsx'
import { services } from '../../data/services.js'
import { routes } from '../../data/routes.js'
import { companyInfo } from '../../data/companyInfo.js'

export default function Services() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="rounded-[2.25rem] border border-white/70 bg-[linear-gradient(135deg,#0f172a_0%,#111827_45%,#1e293b_100%)] p-8 text-white shadow-[0_30px_90px_-48px_rgba(15,23,42,0.92)] sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">Services</p>
            <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Professional logistics services built for dependable transport operations.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Shree Sajha Transport is presented as a serious cargo brand with clear booking, route coverage, and shipment support for customers across Nepal.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button as={Link} to="/booking">Request Pickup</Button>
              <Button as={Link} to="/estimate" variant="outline">Estimate Cargo Cost</Button>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Company</p>
                <p className="mt-2 text-lg font-semibold text-white">{companyInfo.name}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Contact</p>
                <p className="mt-2 text-lg font-semibold text-white">{companyInfo.phone}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Coverage</p>
                <p className="mt-2 text-lg font-semibold text-white">Nepal routes</p>
              </div>
            </div>
          </Reveal>

          <Reveal className="rounded-[2.25rem] border border-white/70 bg-white/85 p-6 shadow-[0_24px_80px_-46px_rgba(15,23,42,0.45)] backdrop-blur sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">Operational promise</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">A calm, customer-first service surface.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              This page focuses on clarity: what the company offers, how the route network works, and how customers can move from inquiry to shipment without friction.
            </p>
            <div className="mt-6 grid gap-4">
              <StatCard label="Services" value="3 core offerings" helper="Goods transport, branch coordination, and shipment tracking." />
              <StatCard label="Routes" value="3 major corridors" helper="Kathmandu, Butwal, and Bhairahawa coverage." />
              <StatCard label="Support" value="Responsive" helper="Booking and estimate actions are prominent for fast conversion." />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Reveal className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">Service catalogue</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Core services presented with a stronger visual hierarchy</h2>
          </div>
          <Button as={Link} to="/contact" variant="outline">Talk to our team</Button>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.05}>
              <ServiceCard service={{ ...service, index: index + 1 }} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Reveal className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">Route support</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Supporting routes that match the service model</h2>
          </div>
          <Button as={Link} to="/routes" variant="outline">View all routes</Button>
        </Reveal>
        <div className="grid gap-5">
          {routes.map((route, index) => (
            <Reveal key={route.title} delay={index * 0.05}>
              <RouteCard route={route} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Reveal className="rounded-[2.25rem] border border-white/70 bg-white/85 p-8 shadow-[0_24px_80px_-46px_rgba(15,23,42,0.45)] backdrop-blur sm:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">Ready to move cargo</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Request a booking or start with an estimate.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                The services page is structured to lead customers toward the next action, whether they already know the shipment details or need help calculating cost.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button as={Link} to="/booking">Request Pickup</Button>
              <Button as={Link} to="/estimate" variant="outline">Estimate Cargo Cost</Button>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  )
}
