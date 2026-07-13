import PageHero from '../components/PageHero'
import Seo from '../components/Seo'
import { seo } from '../content/site'
import Services from '../sections/Services'
import Savings from '../sections/Savings'
import HowItWorks from '../sections/HowItWorks'
import Faq from '../sections/Faq'
import LeadForm from '../sections/LeadForm'

export default function Residential() {
  return (
    <>
      <Seo title={seo.residential.title} description={seo.residential.description} path="/residential" />
      <PageHero
        title="Residential"
        highlight="solar"
        subtitle="Premium panels, batteries and EV charging for your home — with $0-down options and a 30-year warranty."
      />
      <Services />
      <Savings />
      <HowItWorks />
      <Faq />
      <LeadForm />
    </>
  )
}
