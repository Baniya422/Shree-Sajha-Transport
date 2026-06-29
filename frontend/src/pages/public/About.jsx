import HeroAbout from '../../components/public/HeroAbout.jsx'
import ServicesSection from '../../components/public/ServicesSection.jsx'
import Testimonial from '../../components/public/Testimonial.jsx'
import CTASection from '../../components/public/CTASection.jsx'

export default function About() {
  return (
    <main>
      <HeroAbout />

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <ServicesSection />
      </section>

      <Testimonial />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <CTASection />
      </section>
    </main>
  )
}
