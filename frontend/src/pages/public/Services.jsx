import HeroServices from '../../components/public/HeroServices.jsx'
import WhyChooseUs from '../../components/public/WhyChooseUs.jsx'
import ServicesGrid from '../../components/public/ServicesGrid.jsx'
import StatsSection from '../../components/public/StatsSection.jsx'
import TestimonialWithLogos from '../../components/public/TestimonialWithLogos.jsx'
import BlogGrid from '../../components/public/BlogGrid.jsx'
import FAQAccordion from '../../components/public/FAQAccordion.jsx'
import CTASection from '../../components/public/CTASection.jsx'

export default function Services() {
  return (
    <main>
      <HeroServices />
      
      <section className="bg-white">
        <WhyChooseUs />
      </section>

      <section className="bg-white">
        <ServicesGrid />
      </section>

      <StatsSection />

      <section className="bg-white">
        <TestimonialWithLogos />
      </section>

      <section className="bg-slate-50">
        <BlogGrid />
      </section>

      <section className="bg-white">
        <FAQAccordion />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <CTASection />
      </section>
    </main>
  )
}
