import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ConversionTracking from './components/ConversionTracking'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import ServiceAreas from './pages/ServiceAreas'
import ServiceAreaDetail from './pages/ServiceAreaDetail'
import Faq from './pages/Faq'
import Legal from './pages/Legal'
import NotFound from './pages/NotFound'
import { gizlilik, sartlar } from './data/legal'

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <ConversionTracking />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hizmetler" element={<Services />} />
            <Route path="/hizmetler/:slug" element={<ServiceDetail />} />
            <Route path="/projeler" element={<Projects />} />
            <Route path="/hakkimizda" element={<About />} />
            <Route path="/iletisim" element={<Contact />} />
            <Route path="/hizmet-bolgeleri" element={<ServiceAreas />} />
            <Route path="/hizmet-bolgeleri/:slug" element={<ServiceAreaDetail />} />
            <Route path="/sikca-sorulan-sorular" element={<Faq />} />
            <Route path="/gizlilik-politikasi" element={<Legal sayfa={gizlilik} />} />
            <Route path="/sartlar-ve-kosullar" element={<Legal sayfa={sartlar} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
