import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection'
import siteConfig from '../data/siteConfig'

export default function ServiceAreas() {
  useEffect(() => {
    document.title = `Hizmet Bölgeleri | ${siteConfig.companyName} — Denizli`
  }, [])

  return (
    <div className="page-enter">
      {/* Header */}
      <section className="gradient-hero pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary/20 blur-[100px]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 animate-fade-in-up">
            Hizmet Bölgeleri
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto animate-fade-in-up delay-200">
            Denizli il genelinde tüm ilçelere profesyonel karot hizmeti sunuyoruz.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-white/40 text-sm animate-fade-in-up delay-300">
            <Link to="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-primary">Hizmet Bölgeleri</span>
          </div>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="section-title text-dark">
              <span className="text-gradient">Denizli</span> ve Çevre İlçeler
            </h2>
            <p className="section-subtitle">
              Aşağıdaki tüm bölgelere karot delme, kesme ve kırma hizmeti veriyoruz.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {siteConfig.serviceAreas.map((area, idx) => (
              <div
                key={area.slug}
                className="group bg-surface hover:bg-primary rounded-2xl p-6 text-center card-hover cursor-default border border-gray-100 hover:border-primary transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-primary/10 group-hover:bg-white/20 flex items-center justify-center text-xl transition-colors">
                  📍
                </div>
                <h3 className="font-semibold text-dark group-hover:text-white transition-colors text-lg">
                  {area.name}
                </h3>
                <p className="text-gray-400 group-hover:text-white/70 text-xs mt-1 transition-colors">
                  Karot Hizmetleri
                </p>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-surface rounded-3xl p-8 sm:p-12">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-bold text-dark mb-4">
                  Bulunduğunuz Bölge Listede Yok mu?
                </h3>
                <p className="text-gray-500 leading-relaxed mb-6">
                  Denizli il sınırları içinde ve çevre illerde de hizmet verebiliyoruz. Listemizde olmayan bölgeler için lütfen bizi arayın, projenizin detaylarını değerlendirelim.
                </p>
                <a href={`tel:${siteConfig.phoneRaw}`} className="btn-primary">
                  📞 Bizi Arayın — {siteConfig.phone}
                </a>
              </div>
              <div className="text-center hidden lg:block">
                <div className="inline-block p-8 rounded-full bg-primary/10">
                  <div className="text-6xl">🗺️</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
