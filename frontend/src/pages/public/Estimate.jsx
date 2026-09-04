import { Link } from 'react-router-dom'
import Button from '../../components/common/Button.jsx'
import PageHeader from '../../components/common/PageHeader.jsx'
import EstimateForm from '../../components/forms/EstimateForm.jsx'
import Reveal from '../../components/common/Reveal.jsx'

export default function Estimate() {
  return (
    <section className="mx-auto max-w-6xl py-8 sm:py-10 lg:py-12">
      <PageHeader
        eyebrow="Estimate"
        title="Fast cargo estimate request for planning shipments"
        description="A premium estimate interface with the right tone: simple, professional, and ready for the actual pricing engine later."
      >
        <Button as={Link} to="/booking">Go to booking</Button>
        <Button as={Link} to="/routes" variant="outline">View routes</Button>
      </PageHeader>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <Reveal>
          <EstimateForm />
        </Reveal>
        <Reveal className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_22px_70px_-40px_rgba(15,23,42,0.4)] backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">Estimate notes</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">Plan the trip before dispatch.</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">This screen is designed to collect the minimum useful data without overloading customers. It can later calculate price bands, route surcharges, and service class recommendations.</p>
        </Reveal>
      </div>
    </section>
  )
}
