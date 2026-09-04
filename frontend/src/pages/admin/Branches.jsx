import AdminLayout from '../../components/admin/AdminLayout.jsx'
import BranchCard from '../../components/cards/BranchCard.jsx'
import Button from '../../components/common/Button.jsx'
import Reveal from '../../components/common/Reveal.jsx'
import StatusBadge from '../../components/common/StatusBadge.jsx'
import { branches } from '../../data/branches.js'

export default function Branches() {
  return (
    <AdminLayout>
      <div className="grid gap-6">
        <Reveal className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-[0_22px_70px_-40px_rgba(15,23,42,0.4)] backdrop-blur sm:p-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">Branches</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Coverage hubs across the transport network</h2>
              <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                Use this screen to understand which branch handles which region, and how many local areas each office supports.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <StatusBadge tone="success">3 active</StatusBadge>
              <StatusBadge tone="neutral">Branch-based routing</StatusBadge>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Branches</p>
              <p className="mt-2 text-2xl font-semibold text-slate-950">{branches.length}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Coverage areas</p>
              <p className="mt-2 text-2xl font-semibold text-slate-950">{branches.reduce((total, branch) => total + branch.coverage.length, 0)}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Network type</p>
              <p className="mt-2 text-2xl font-semibold text-slate-950">Regional</p>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-3">
          {branches.map((branch, index) => (
            <Reveal key={branch.name} delay={index * 0.05}>
              <div className="grid gap-4">
                <BranchCard branch={branch} />
                <div className="rounded-[1.5rem] border border-white/70 bg-white/85 p-5 shadow-[0_18px_50px_-34px_rgba(15,23,42,0.45)] backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Coverage count</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-950">{branch.coverage.length} areas</p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{branch.city} office coverage and nearby local service zones.</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="rounded-[2rem] border border-white/70 bg-slate-950 p-6 text-white shadow-[0_28px_90px_-44px_rgba(15,23,42,0.85)] sm:p-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">Branch planning</p>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight">Use the branch network to route freight efficiently.</h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
                Once the backend data is connected, this screen can show live counts, new branch entries, and service-area updates without changing the layout.
              </p>
            </div>
            <Button variant="secondary" type="button">Add branch later</Button>
          </div>
        </Reveal>
      </div>
    </AdminLayout>
  )
}
