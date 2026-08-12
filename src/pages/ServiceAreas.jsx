import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection'
import PageHeader from '../components/PageHeader'
import Icon from '../components/Icon'
import Seo from '../components/Seo'
import siteConfig from '../data/siteConfig'
import serviceAreas from '../data/serviceAreas'

const zoneTitles = {
  merkez: 'Denizli Merkez',
  yakin: 'Merkeze Yakın İlçeler',
  uzak: 'Diğer İlçeler',
}

export default function ServiceAreas() {
  const grouped = ['merkez', 'yakin', 'uzak'].map((zone) => ({
    zone,
    title: zoneTitles[zone],
    areas: serviceAreas.filter((a) => a.zone === zone),
  }))

  return (
    <div className="page-enter">
      <Seo
        title={`Hizmet Bölgeleri | Denizli ve Tüm İlçeler — ${siteConfig.companyName}`}
        description={`Denizli il genelinde ${serviceAreas.length} ilçede karot, beton delme, kesme ve kırma hizmeti. Merkezefendi, Pamukkale, Honaz, Sarayköy, Çivril, Acıpayam ve tüm ilçeler.`}
        path="/hizmet-bolgeleri/"
      />

      <PageHeader
        title="Hizmet Bölgeleri"
        description={`Denizli il genelinde ${serviceAreas.length} ilçeye karot, beton delme, kesme ve kırma hizmeti veriyoruz.`}
        breadcrumb={[{ label: 'Hizmet Bölgeleri' }]}
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="section-title text-dark">
              <span className="text-gradient-accent">Denizli</span> ve Tüm İlçeleri
            </h2>
            <p className="section-subtitle">
              Bulunduğunuz ilçeye tıklayın — o bölgede verdiğimiz hizmetlerin detayına ulaşın.
            </p>
          </div>

          <div className="space-y-12">
            {grouped.map((group) => (
              <div key={group.zone}>
                <h3 className="flex items-center gap-3 text-xl font-bold text-dark mb-5">
                  <span className="w-8 h-0.5 bg-accent rounded-full" aria-hidden="true" />
                  {group.title}
                </h3>

                <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                  {group.areas.map((area) => (
                    <li key={area.slug}>
                      <Link
                        to={`/hizmet-bolgeleri/${area.slug}`}
                        className="h-full flex flex-col items-center justify-center group bg-surface hover:bg-accent rounded-2xl p-6 text-center card-hover border border-gray-100 hover:border-accent transition-all duration-300"
                      >
                        <span className="w-12 h-12 mb-3 rounded-xl bg-accent/10 group-hover:bg-white/20 flex items-center justify-center text-accent group-hover:text-white transition-colors">
                          <Icon name="mapPin" className="w-6 h-6" strokeWidth={1.75} />
                        </span>
                        <span className="font-semibold text-dark group-hover:text-white transition-colors text-lg leading-tight">
                          {area.name}
                        </span>
                        <span className="text-gray-400 group-hover:text-white/75 text-xs mt-1 transition-colors">
                          Karot Hizmetleri
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Ek bilgi */}
          <div className="mt-16 bg-surface rounded-3xl p-8 sm:p-12">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-bold text-dark mb-4">
                  Denizli Dışında mısınız?
                </h3>
                <p className="text-gray-500 leading-relaxed mb-6">
                  Çevre illerdeki işleri de değerlendiriyoruz. Bizi arayın, projenin
                  kapsamına ve mesafeye göre net bir teklif verelim.
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
