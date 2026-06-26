import SectionHeader from '../../components/common/SectionHeader.jsx'
import EstimateForm from '../../components/forms/EstimateForm.jsx'

export default function Estimate() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Estimate"
        title="Transport estimate placeholder"
        description="Frontend estimate UI can grow here while Laravel already owns the pricing service structure."
      />
      <div className="mt-8">
        <EstimateForm />
      </div>
    </section>
  )
}
