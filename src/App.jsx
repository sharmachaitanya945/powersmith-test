import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Residential from './pages/Residential'
import Commercial from './pages/Commercial'
import Plans from './pages/Plans'
import Batteries from './pages/Batteries'
import ItcBenefits from './pages/ItcBenefits'
import FaqPage from './pages/FaqPage'
import Contact from './pages/Contact'
import CityLanding from './pages/CityLanding'
import { localBusinessSchema } from './content/site'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => window.scrollTo(0, 0), [pathname])
  return null
}

// Inject sitewide LocalBusiness structured data once (audit: LocalBusiness schema).
function LocalBusinessJsonLd() {
  useEffect(() => {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-seo', 'localbusiness')
    script.text = JSON.stringify(localBusinessSchema)
    document.head.appendChild(script)
    return () => script.remove()
  }, [])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <LocalBusinessJsonLd />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/residential" element={<Residential />} />
          <Route path="/commercial" element={<Commercial />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/batteries" element={<Batteries />} />
          <Route path="/itc-benefits" element={<ItcBenefits />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/solar/:city" element={<CityLanding />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
