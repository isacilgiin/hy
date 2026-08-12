import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ConversionTracking from './components/ConversionTracking'
import Home from './pages/Home'

/**
 * ROTA BAZLI KOD BÖLME
 *
 * Ana sayfa doğrudan yükleniyor — ilk açılan sayfa o. Diğerleri tembel:
 * ancak o adrese gidildiğinde iniyorlar.
 *
 * Asıl kazanç içerik dosyalarında: src/data/serviceAreas.js (20 ilçenin
 * metinleri, ~85 KB) ve src/data/serviceContent.js (10 hizmetin uzun yazıları,
 * ~97 KB) ana sayfada HİÇ kullanılmıyor. Tembel yükleme olmadan siteyi açan
 * herkes bu metinlerin tamamını indirmek zorunda kalıyordu.
 */
const Services = lazy(() => import('./pages/Services'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const Projects = lazy(() => import('./pages/Projects'))
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const ServiceAreas = lazy(() => import('./pages/ServiceAreas'))
const ServiceAreaDetail = lazy(() => import('./pages/ServiceAreaDetail'))
const Faq = lazy(() => import('./pages/Faq'))
const Blog = lazy(() => import('./pages/Blog'))
// BlogPost, blogContent.js'i (tüm yazıların tam metni) çektiği için ayrı parça;
// blog listesi sayfası o metinleri indirmesin.
const BlogPost = lazy(() => import('./pages/BlogPost'))
const NotFound = lazy(() => import('./pages/NotFound'))
// Yasal sayfalar: metinleri (src/data/legal.js) de bu parçaya girsin diye
// veri ile bileşen birlikte tembel yükleniyor.
const Gizlilik = lazy(async () => {
  const [{ default: Legal }, { gizlilik }] = await Promise.all([
    import('./pages/Legal'),
    import('./data/legal'),
  ])
  return { default: () => <Legal sayfa={gizlilik} /> }
})
const Sartlar = lazy(async () => {
  const [{ default: Legal }, { sartlar }] = await Promise.all([
    import('./pages/Legal'),
    import('./data/legal'),
  ])
  return { default: () => <Legal sayfa={sartlar} /> }
})

/**
 * Sayfa inerken görünen ara ekran. Yüksekliği sabit tutuluyor ki footer
 * önce yukarı sıçrayıp sonra aşağı inmesin (layout kayması / CLS).
 */
function SayfaYukleniyor() {
  return (
    <div className="min-h-[70svh] flex items-center justify-center bg-dark" aria-busy="true">
      <span className="sr-only">Sayfa yükleniyor</span>
      <span
        className="w-10 h-10 rounded-full border-2 border-primary/25 border-t-primary animate-spin"
        aria-hidden="true"
      />
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <ConversionTracking />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Suspense fallback={<SayfaYukleniyor />}>
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
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/gizlilik-politikasi" element={<Gizlilik />} />
              <Route path="/sartlar-ve-kosullar" element={<Sartlar />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
