import { Link } from 'react-router-dom'
import Button from '../../components/common/Button.jsx'
import PageHeader from '../../components/common/PageHeader.jsx'
import BookingForm from '../../components/forms/BookingForm.jsx'
import Reveal from '../../components/common/Reveal.jsx'

export default function Booking() {
  return (
    <section className="w-full py-8 sm:py-10 lg:py-12">
      <PageHeader
        eyebrow="Booking"
        title="Book a transport request with a clean customer journey"
        description="A structured booking screen that feels ready for production, with room for API submission and notification handling later."
      >
        <Button as={Link} to="/estimate">Need a price first?</Button>
        <Button as={Link} to="/tracking" variant="outline">Track shipment</Button>
      </PageHeader>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal className="rounded-[2rem] border border-white/70 bg-slate-950 p-8 text-white shadow-[0_28px_90px_-44px_rgba(15,23,42,0.85)]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300">Before you book</p>
          <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-300">
            <li>• Pickup and drop details should be as accurate as possible.</li>
            <li>• Mention cargo type, weight, and any handling constraints.</li>
            <li>• The final UI is ready to wire to a backend booking endpoint.</li>
          </ul>
        </Reveal>
        <Reveal>
          <BookingForm />
        </Reveal>
      </div>
    </section>
  )
}
