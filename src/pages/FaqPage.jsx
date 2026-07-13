import PageHero from '../components/PageHero'
import Seo from '../components/Seo'
import { seo, faqSchema, faqs } from '../content/site'
import Faq from '../sections/Faq'
import LeadForm from '../sections/LeadForm'

export default function FaqPage() {
  return (
    <>
      <Seo
        title={seo.faq.title}
        description={seo.faq.description}
        path="/faq"
        jsonLd={faqSchema(faqs)}
      />
      <PageHero
        title="Frequently asked"
        highlight="questions"
        subtitle="Everything you need to know before going solar."
      />
      <Faq />
      <LeadForm />
    </>
  )
}
