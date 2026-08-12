import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import CTASection from '../components/CTASection'
import services from '../data/services'

export default function Services() {
  useEffect(() => {
    document.title = 'Hizmetlerimiz | Güçlü Karot — Denizli Beton Delme, Kesme, Kırma'
  }, [])

  return (
    <div className="page-enter">
      {/* Page Header */}
      <section className="gradient-hero pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary/20 blur-[100px]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 animate-fade-in-up">
            Hizmetlerimiz
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto animate-fade-in-up delay-200">
            Hilti marka profesyonel ekipmanlarımızla sunduğumuz kapsamlı beton delme, kesme ve kırma hizmetleri.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-white/40 text-sm animate-fade-in-up delay-300">
            <Link to="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-primary">Hizmetler</span>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <ServiceCard key={service.id} service={service} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
