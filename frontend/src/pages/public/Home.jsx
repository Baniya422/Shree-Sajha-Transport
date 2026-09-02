import { Link } from 'react-router-dom'
import Button from '../../components/common/Button.jsx'
import Reveal from '../../components/common/Reveal.jsx'
import StatCard from '../../components/cards/StatCard.jsx'
import ServiceCard from '../../components/cards/ServiceCard.jsx'
import RouteCard from '../../components/cards/RouteCard.jsx'
import BranchCard from '../../components/cards/BranchCard.jsx'
import StatusBadge from '../../components/common/StatusBadge.jsx'
import { services } from '../../data/services.js'
import { routes } from '../../data/routes.js'
import { branches } from '../../data/branches.js'
import { companyInfo } from '../../data/companyInfo.js'

export default function Home() {
  return (
    <main>
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
          <Reveal className="overflow-hidden rounded-[2.25rem] border border-white/70 bg-[linear-gradient(135deg,#0f172a_0%,#111827_45%,#1e293b_100%)] p-8 text-white shadow-[0_30px_90px_-48px_rgba(15,23,42,0.92)] sm:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <StatusBadge tone="neutral">Freight ready</StatusBadge>
              <span className="text-xs font-medium uppercase tracking-[0.22em] text-slate-300">Nepal logistics</span>
            </div>
            <h1 className="mt-5 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Premium cargo transport for Kathmandu, Butwal, and Bhairahawa.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              Shree Sajha Transport is presented as a professional freight company with a restrained, high-trust interface for booking, route coverage, and shipment visibility.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button as={Link} to="/booking">Start Booking</Button>
              <Button as={Link} to="/estimate" variant="outline">Get Estimate</Button>
              <Button as={Link} to="/tracking" variant="ghost" className="text-white hover:bg-white/10">Track Shipment</Button>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Branches</p>
                <p className="mt-2 text-2xl font-semibold">3</p>
                <p className="mt-1 text-sm text-slate-300">Kathmandu, Butwal, Bhairahawa</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Routes</p>
                <p className="mt-2 text-2xl font-semibold">3</p>
                <p className="mt-1 text-sm text-slate-300">Core freight corridors</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Coverage</p>
                <p className="mt-2 text-2xl font-semibold">Nepal</p>
                <p className="mt-1 text-sm text-slate-300">Branch-connected operations</p>
              </div>
            </div>
          </Reveal>

          <Reveal className="rounded-[2.25rem] border border-white/70 bg-white/85 p-6 shadow-[0_24px_80px_-46px_rgba(15,23,42,0.45)] backdrop-blur sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">Operations snapshot</p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">A clean front door for transport customers.</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              This Home page acts as the company landing screen: it directs users to booking, estimate, tracking, and route details while keeping the visual tone serious and professional.
            </p>
            <div className="mt-6 grid gap-4">
              <StatCard label="Company" value={companyInfo.name} helper={companyInfo.shortDescription} />
              <StatCard label="Primary contact" value={companyInfo.phone} helper={companyInfo.address} />
              <StatCard label="Operations" value="Booking + Tracking" helper="Frontend polished now; API integration can follow later." />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <Reveal className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">Services</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Core offerings built for operational clarity</h2>
          </div>
          <Button as={Link} to="/services" variant="outline">View all services</Button>
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
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">Routes</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Primary freight routes and transit windows</h2>
          </div>
          <Button as={Link} to="/routes" variant="outline">Explore routes</Button>
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
        <Reveal className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">Branches</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-950 sm:text-3xl">Branch coverage and service areas</h2>
          </div>
          <Button as={Link} to="/about" variant="outline">About the company</Button>
        </Reveal>
        <div className="grid gap-5 md:grid-cols-3">
          {branches.map((branch, index) => (
            <Reveal key={branch.name} delay={index * 0.05}>
              <BranchCard branch={branch} />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  )
}
