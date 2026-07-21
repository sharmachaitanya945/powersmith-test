import Seo from '../components/Seo'
import { seo, faqSchema, faqs } from '../content/site'
import Hero from '../sections/Hero'
import Stats from '../sections/Stats'
import WhoWhatHow from '../sections/WhoWhatHow'
import Partners from '../sections/Partners'
import Highlights from '../sections/Highlights'
import Services from '../sections/Services'
import Gallery from '../sections/Gallery'
import Savings from '../sections/Savings'
import Testimonials from '../sections/Testimonials'
import ServiceArea from '../sections/ServiceArea'
import Faq from '../sections/Faq'
import LeadForm from '../sections/LeadForm'

// Order set with Anthony (Jul 21): lead with the numbers, then who we are, our
// partners, then the savings story beside the explainer video. The solar journey
// and the solar-vs-grid table moved to /residential — "only everything that's
// residential" belongs there.
export default function Home() {
  return (
    <>
      <Seo title={seo.home.title} description={seo.home.description} path="/" jsonLd={faqSchema(faqs)} />
      <Hero />
      <Stats />
      <WhoWhatHow />
      <Partners />
      <Highlights />
      <Services />
      <Gallery />
      <Savings />
      <Testimonials />
      <ServiceArea />
      <Faq />
      <LeadForm />
    </>
  )
}
