import { useEffect } from 'react'
import CTASection from '../components/CTASection'
import PageHeader from '../components/PageHeader'
import Icon from '../components/Icon'
import siteConfig from '../data/siteConfig'

export default function ServiceAreas() {
  useEffect(() => {
    document.title = `Hizmet Bölgeleri | ${siteConfig.companyName} — Denizli`
  }, [])

  return (
    <div className="page-enter">
      <PageHeader
        title="Hizmet Bölgeleri"
        description="Denizli il genelinde ilçelere profesyonel karot hizmeti sunuyoruz."
        breadcrumb={[{ label: 'Hizmet Bölgeleri' }]}
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="section-title text-dark">
              <span className="text-gradient-accent">Denizli</span> ve Çevre İlçeler
            </h2>
            <p className="section-subtitle">
              Aşağıdaki tüm bölgelere karot delme, kesme ve kırma hizmeti veriyoruz.
            </p>
          </div>

          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {siteConfig.serviceAreas.map((area) => (
              <li
                key={area.slug}
                className="group bg-surface hover:bg-accent rounded-2xl p-6 text-center card-hover border border-gray-100 hover:border-accent transition-all duration-300"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-accent/10 group-hover:bg-white/20 flex items-center justify-center text-accent group-hover:text-white transition-colors">
                  <Icon name="mapPin" className="w-6 h-6" strokeWidth={1.75} />
                </div>
                <h3 className="font-semibold text-dark group-hover:text-white transition-colors text-lg">
                  {area.name}
                </h3>
                <p className="text-gray-400 group-hover:text-white/75 text-xs mt-1 transition-colors">
                  Karot Hizmetleri
                </p>
              </li>
            ))}
          </ul>

          {/* Ek bilgi */}
          <div className="mt-16 bg-surface rounded-3xl p-8 sm:p-12">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-bold text-dark mb-4">
                  Bulunduğunuz Bölge Listede Yok mu?
                </h3>
                <p className="text-gray-500 leading-relaxed mb-6">
                  Denizli il sınırları içinde ve çevre illerde de hizmet verebiliyoruz. Listemizde
                  olmayan bölgeler için lütfen bizi arayın, projenizin detaylarını
                  değerlendirelim.
                </p>
                <a href={`tel:${siteConfig.phoneRaw}`} className="btn-primary">
                  <Icon name="phone" className="w-5 h-5" strokeWidth={2} />
                  Bizi Arayın — {siteConfig.phone}
                </a>
              </div>
              <div className="text-center hidden lg:block">
                <div className="inline-flex items-center justify-center w-40 h-40 rounded-full bg-accent/10 text-accent">
                  <Icon name="map" className="w-20 h-20" strokeWidth={1.25} />
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
