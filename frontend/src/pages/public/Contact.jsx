import SectionHeader from '../../components/common/SectionHeader.jsx'
import ContactForm from '../../components/forms/ContactForm.jsx'

export default function Contact() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
      <SectionHeader
        eyebrow="Contact"
        title="Contact placeholder"
        description="A clean contact form shell is ready for Tailwind UI refinement."
      />
      <div className="mt-8">
        <ContactForm />
      </div>
    </section>
  )
}
