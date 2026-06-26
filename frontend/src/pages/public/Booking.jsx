import SectionHeader from '../../components/common/SectionHeader.jsx'
import BookingForm from '../../components/forms/BookingForm.jsx'

export default function Booking() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Booking"
        title="Booking form placeholder"
        description="The form shell is ready. Full submission behavior can be added after the final UI is designed."
      />
      <div className="mt-8">
        <BookingForm />
      </div>
    </section>
  )
}
