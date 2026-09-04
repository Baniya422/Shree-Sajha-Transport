import { useState } from 'react'
import Button from '../../components/common/Button.jsx'
import PageHeader from '../../components/common/PageHeader.jsx'
import Reveal from '../../components/common/Reveal.jsx'
import StatusBadge from '../../components/common/StatusBadge.jsx'

export default function Tracking() {
  const [trackingId, setTrackingId] = useState('')

  return (
    <section className="w-full py-8 sm:py-10 lg:py-12">
      <PageHeader
        eyebrow="Tracking"
        title="Customer shipment tracking with a calm, status-first UI"
        description="The tracking screen is ready for later API integration, but already looks like a real logistics product."
      />

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.8fr]">
        <Reveal className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_22px_70px_-40px_rgba(15,23,42,0.4)] backdrop-blur">
          <form className="flex flex-col gap-3 sm:flex-row">
            <input
              className="min-h-11 flex-1 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-500"
              placeholder="Enter tracking ID"
              value={trackingId}
              onChange={(event) => setTrackingId(event.target.value)}
            />
            <Button type="button">Track shipment</Button>
          </form>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <StatusBadge tone="success">Picked up</StatusBadge>
              <p className="mt-3 text-sm text-slate-600">Shipment received at the branch.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <StatusBadge tone="warning">In transit</StatusBadge>
              <p className="mt-3 text-sm text-slate-600">Moving through the route network.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <StatusBadge tone="neutral">Delivered</StatusBadge>
              <p className="mt-3 text-sm text-slate-600">Final status will appear here.</p>
            </div>
          </div>
        </Reveal>
        <Reveal className="rounded-[2rem] border border-slate-900 bg-slate-950 p-8 text-white shadow-[0_28px_90px_-44px_rgba(15,23,42,0.85)]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">Status panel</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight">Clear shipment visibility with room for live updates.</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">This panel can later be connected to a real tracking API or a React Leaflet map without changing the overall presentation language.</p>
        </Reveal>
      </div>
    </section>
  )
}
