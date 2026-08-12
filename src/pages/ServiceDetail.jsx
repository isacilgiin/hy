import { useEffect } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import CTASection from '../components/CTASection'
import services from '../data/services'
import siteConfig from '../data/siteConfig'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find(s => s.slug === slug)
  const currentIndex = services.findIndex(s => s.slug === slug)

  useEffect(() => {
    if (service) {
      document.title = `${service.title} | ${siteConfig.companyName} — Denizli`
    }
  }, [service])

  if (!service) {
    return <Navigate to="/hizmetler" replace />
  }

  // Önceki ve sonraki hizmetler
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null
  const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : null

  return (
    <div className="page-enter">
      {/* Header */}
      <section className="gradient-hero pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary/20 blur-[100px]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/40 text-sm mb-6 animate-fade-in-up">
            <Link to="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <Link to="/hizmetler" className="hover:text-primary transition-colors">Hizmetler</Link>
            <span>/</span>
            <span className="text-primary">{service.title}</span>
          </div>
          <div className="flex items-center gap-5 animate-fade-in-up delay-100">
            <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center text-3xl">
              {service.icon}
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                {service.title}
              </h1>
              <p className="text-white/60 mt-2">{service.shortDescription}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <p className="text-gray-600 text-lg leading-relaxed mb-10">
                {service.description}
              </p>

              {/* Features */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-dark text-lg">⚙️</div>
                  Özellikler & Ekipman
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-surface group hover:bg-primary/5 transition-colors">
                      <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications */}
              <div>
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center text-dark text-lg">📋</div>
                  Uygulama Alanları
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.applications.map((app, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-surface hover:bg-primary/5 transition-colors">
                      <span className="w-2 h-2 rounded-full bg-primary shrink-0"></span>
                      <span className="text-gray-600 text-sm">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Quick Contact */}
              <div className="rounded-2xl gradient-dark p-6 mb-6 sticky top-28">
                <h3 className="text-white font-bold text-lg mb-4">Hemen Teklif Alın</h3>
                <p className="text-white/60 text-sm mb-6">
                  {service.title} hizmetimiz hakkında detaylı bilgi ve fiyat teklifi için bize ulaşın.
                </p>
                <a href={`tel:${siteConfig.phoneRaw}`} className="btn-primary w-full justify-center mb-3">
                  📞 {siteConfig.phone}
                </a>
                <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer"
                  className="btn-outline w-full justify-center border-white/20 text-white hover:bg-green-500 hover:border-green-500">
                  💬 WhatsApp
                </a>

                {/* Other Services */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h4 className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-4">Diğer Hizmetler</h4>
                  <div className="space-y-2">
                    {services.filter(s => s.slug !== slug).slice(0, 5).map(s => (
                      <Link
                        key={s.slug}
                        to={`/hizmetler/${s.slug}`}
                        className="flex items-center gap-3 text-white/50 hover:text-primary text-sm transition-colors py-1"
                      >
                        <span>{s.icon}</span>
                        <span>{s.title}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Prev / Next Navigation */}
          <div className="mt-16 pt-8 border-t border-gray-100 grid grid-cols-2 gap-6">
            {prevService ? (
              <Link to={`/hizmetler/${prevService.slug}`} className="group flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors">
                <svg className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
                <div>
                  <div className="text-xs text-gray-400">Önceki Hizmet</div>
                  <div className="font-semibold text-dark group-hover:text-primary transition-colors">{prevService.title}</div>
                </div>
              </Link>
            ) : <div />}
            {nextService && (
              <Link to={`/hizmetler/${nextService.slug}`} className="group flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors text-right justify-end">
                <div>
                  <div className="text-xs text-gray-400">Sonraki Hizmet</div>
                  <div className="font-semibold text-dark group-hover:text-primary transition-colors">{nextService.title}</div>
                </div>
                <svg className="w-6 h-6 text-gray-400 group-hover:text-primary transition-colors transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            )}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
