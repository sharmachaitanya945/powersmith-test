import Seo from '../components/Seo'
import { seo, faqSchema, faqs } from '../content/site'
import Hero from '../sections/Hero'
import Partners from '../sections/Partners'
import WhoWhatHow from '../sections/WhoWhatHow'
import Stats from '../sections/Stats'
import Highlights from '../sections/Highlights'
import Gallery from '../sections/Gallery'
import VideoSection from '../sections/VideoSection'
import Services from '../sections/Services'
import Savings from '../sections/Savings'
import HowItWorks from '../sections/HowItWorks'
import Comparison from '../sections/Comparison'
import Testimonials from '../sections/Testimonials'
import ServiceArea from '../sections/ServiceArea'
import Faq from '../sections/Faq'
import LeadForm from '../sections/LeadForm'

export default function Home() {
  return (
    <>
      <Seo title={seo.home.title} description={seo.home.description} path="/" jsonLd={faqSchema(faqs)} />
      <Hero />
      <Partners />
      <WhoWhatHow />
      <Stats />
      <Highlights />
      <Gallery />
      <VideoSection />
      <Services />
      <Savings />
      <HowItWorks />
      <Comparison />
      <Testimonials />
      <ServiceArea />
      <Faq />
      <LeadForm />
    </>
  )
}
