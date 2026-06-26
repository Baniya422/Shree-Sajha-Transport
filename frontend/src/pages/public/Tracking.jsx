import Button from '../../components/common/Button.jsx'
import SectionHeader from '../../components/common/SectionHeader.jsx'

export default function Tracking() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Tracking"
        title="Shipment tracking placeholder"
        description="Tracking API structure is prepared in Laravel. The customer tracking UI can be built here later."
      />
      <form className="mt-8 flex flex-col gap-3 rounded-md border border-slate-200 bg-white p-6 shadow-sm sm:flex-row">
        <input className="min-h-11 flex-1 rounded-md border border-slate-300 px-3 py-2" placeholder="Enter tracking ID" />
        <Button type="button">Track Later</Button>
      </form>
    </section>
  )
}
