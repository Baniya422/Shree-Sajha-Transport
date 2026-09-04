import PageHeader from '../../components/common/PageHeader.jsx'
import Reveal from '../../components/common/Reveal.jsx'
import BranchCard from '../../components/cards/BranchCard.jsx'
import { branches } from '../../data/branches.js'
import { companyInfo } from '../../data/companyInfo.js'
import Button from '../../components/common/Button.jsx'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <main>
      <section className="mx-auto max-w-7xl py-8 sm:py-10 lg:py-12">
        <PageHeader
          eyebrow="About"
          title="A transport company frontend with a serious operational feel"
          description="The design leans premium and restrained, with enough structure to support future backend integration, route management, and customer workflows."
        />
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 py-8 sm:py-10 lg:grid-cols-[0.95fr_1.05fr] lg:py-12">
        <Reveal className="rounded-[2rem] border border-white/70 bg-white/85 p-8 shadow-[0_22px_70px_-40px_rgba(15,23,42,0.4)] backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">What we do</p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-950">{companyInfo.name} connects branches, cargo, and customer communication.</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">The company story is intentionally calm and confident: dependable pickup planning, route visibility, and a clean booking experience without visual clutter.</p>
          <div className="mt-6 grid gap-3 text-sm text-slate-600">
            <p>• Coordinated cargo movement between Kathmandu, Butwal, and Bhairahawa.</p>
            <p>• Premium customer-facing interface for booking, estimate requests, and tracking.</p>
            <p>• Lightweight admin surfaces designed to scale into a real operations panel.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button as={Link} to="/services">Explore Services</Button>
            <Button as={Link} to="/contact" variant="outline">Contact Us</Button>
          </div>
        </Reveal>

        <div className="grid gap-5">
          {branches.map((branch) => (
            <BranchCard key={branch.name} branch={branch} />
          ))}
        </div>
      </section>
    </main>
  )
}
