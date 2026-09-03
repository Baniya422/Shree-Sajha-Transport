import { Link } from 'react-router-dom'
import Button from '../../components/common/Button.jsx'
import PageHeader from '../../components/common/PageHeader.jsx'
import RouteCard from '../../components/cards/RouteCard.jsx'
import Reveal from '../../components/common/Reveal.jsx'
import StatCard from '../../components/cards/StatCard.jsx'
import { routes } from '../../data/routes.js'
import { branches } from '../../data/branches.js'

export default function RoutesPage() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <Reveal className="rounded-[2.25rem] border border-white/70 bg-[linear-gradient(135deg,#0f172a_0%,#111827_45%,#1e293b_100%)] p-8 text-white shadow-[0_30px_90px_-48px_rgba(15,23,42,0.92)] sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">Routes</p>
            <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Planned freight corridors with clear delivery expectations.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              The route page gives customers a simple view of the company’s transport network so they can match their shipment to the right corridor before booking.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button as={Link} to="/booking">Request Pickup</Button>
              <Button as={Link} to="/estimate" variant="outline">Estimate Cargo Cost</Button>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Core routes</p>
                <p className="mt-2 text-2xl font-semibold">3</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Branches</p>
                <p className="mt-2 text-2xl font-semibold">{branches.length}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Transit window</p>
                <p className="mt-2 text-2xl font-semibold">1-2 days</p>
              </div>
            </div>
          </Reveal>

          <Reveal className="rounded-[2.25rem] border border-white/70 bg-white/85 p-6 shadow-[0_24px_80px_-46px_rgba(15,23,42,0.45)] backdrop-blur sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">Coverage summary</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Route planning backed by branch coverage.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Customers can quickly understand where freight moves, how long it may take, and which branch is best suited for the shipment.
            </p>
            <div className="mt-6 grid gap-4">
              <StatCard label="Kathmandu" value="Main hub" helper="Pickup point for central city freight." />
              <StatCard label="Butwal" value="Regional link" helper="Coverage across western corridor areas." />
              <StatCard label="Bhairahawa" value="Border access" helper="Useful for local and connecting cargo runs." />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Reveal className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">Route list</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Primary corridors for transport planning</h2>
          </div>
          <Button as={Link} to="/contact" variant="outline">Ask about a route</Button>
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
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">Need a custom route?</p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Start with a booking or estimate request.</h2>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                If the shipment needs special handling, use the booking or estimate flow so the team can review the corridor and handling requirements before dispatch.
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
