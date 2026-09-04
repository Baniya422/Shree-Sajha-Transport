import PageHeader from '../../components/common/PageHeader.jsx'
import ContactForm from '../../components/forms/ContactForm.jsx'
import Reveal from '../../components/common/Reveal.jsx'
import { companyInfo } from '../../data/companyInfo.js'

export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl py-8 sm:py-10 lg:py-12">
      <PageHeader
        eyebrow="Contact"
        title="Simple contact entry points for customers and partners"
        description="The contact page prioritizes a clear form and the essential company details customers need to act quickly."
      />

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_0.75fr]">
        <Reveal>
          <ContactForm />
        </Reveal>
        <Reveal className="rounded-[2rem] border border-white/70 bg-slate-950 p-8 text-white shadow-[0_28px_90px_-44px_rgba(15,23,42,0.85)]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">Direct contact</p>
          <div className="mt-6 grid gap-4 text-sm text-slate-300">
            <div>
              <p className="text-slate-500">Phone</p>
              <p className="mt-1 text-base text-white">{companyInfo.phone}</p>
            </div>
            <div>
              <p className="text-slate-500">Email</p>
              <p className="mt-1 text-base text-white">{companyInfo.email}</p>
            </div>
            <div>
              <p className="text-slate-500">Address</p>
              <p className="mt-1 text-base text-white">{companyInfo.address}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
