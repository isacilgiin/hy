import StatsSection from '../components/StatsSection'
import CTASection from '../components/CTASection'
import PageHeader from '../components/PageHeader'
import Seo from '../components/Seo'
import Icon from '../components/Icon'
import SmartImage from '../components/SmartImage'
import siteConfig from '../data/siteConfig'
import { timeline, values, foundedYear } from '../data/about'

export default function About() {
  return (
    <div className="page-enter">
      <Seo
        title={`Hakkımızda | ${siteConfig.companyName} — Denizli Karot`}
        description={`${siteConfig.companyName}, Denizli ve çevre ilçelerde beton delme, kesme ve kırma hizmetleri veren karot firmasıdır. Önce ücretsiz keşif, sonra net fiyat.`}
        path="/hakkimizda/"
      />

      <PageHeader
        title="Hakkımızda"
        description={`${siteConfig.stats.yearsExperience}+ yıllık saha tecrübesiyle Denizli'nin karot firması.`}
        breadcrumb={[{ label: 'Hakkımızda' }]}
      />

      {/* ===== Hikaye ===== */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 mb-4">
                <Icon name="building" className="w-4 h-4 text-accent" strokeWidth={2} />
                <span className="text-accent text-sm font-semibold">Hikayemiz</span>
              </div>
              <h2 className="section-title text-dark mb-6">
                Denizli&apos;de <span className="text-gradient-accent">Güvenilir</span> Bir Marka
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-dark">{siteConfig.companyName}</strong>,{' '}
                  {siteConfig.stats.yearsExperience} yılı aşkın saha deneyimiyle Denizli ve
                  çevresinde beton delme, kesme ve kırma hizmetleri veren bir karot firmasıdır.
                </p>
                <p>
                  Profesyonel makine parkurumuz, uzman kadromuz ve müşteri odaklı yaklaşımımızla
                  her projede aynı kalite standardını sunmayı hedefliyoruz. İşe başlamadan önce
                  yerinde keşif yapar, uygulanabilir yöntemi ve net fiyatı önceden paylaşırız.
                </p>
                <p>
                  Konut projelerinden sanayi tesislerine, altyapı çalışmalarından kentsel dönüşüm
                  projelerine kadar geniş bir yelpazede hizmet veriyoruz. Her işte güvenlik, kalite
                  ve zamanında teslimat ilkelerimizden taviz vermiyoruz.
                </p>
              </div>
            </div>

            {/* Görsel */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <SmartImage
                  src="/images/hero/hero-1.webp"
                  alt={`${siteConfig.companyName} saha ekibi`}
                  icon="drill"
                  label={siteConfig.companyName}
                  className="absolute inset-0 w-full h-full"
                  imgClassName="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/25 to-transparent" />
                <div className="absolute bottom-7 left-7">
                  <div className="text-white text-xl font-bold">{siteConfig.companyName}</div>
                  <div className="text-primary text-sm mt-1">Est. {foundedYear}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* ===== Yolculuk ===== */}
      {timeline.length > 0 && (
        <section className="section-padding bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="section-title text-dark">Yolculuğumuz</h2>
              <p className="section-subtitle">Kuruluşumuzdan bugüne önemli kilometre taşlarımız.</p>
            </div>

            <div className="relative">
              {/* Dikey çizgi */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 sm:left-1/2 sm:-translate-x-0.5" />

              <div className="space-y-10">
                {timeline.map((item, idx) => (
                  <div
                    key={item.year}
                    className={`relative flex items-start gap-6 ${
                      idx % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                    }`}
                  >
                    <div className="absolute left-6 sm:left-1/2 w-4 h-4 -ml-2 rounded-full bg-accent border-4 border-white shadow-md z-10" />

                    <div
                      className={`ml-14 sm:ml-0 sm:w-[calc(50%-2rem)] ${
                        idx % 2 === 0 ? 'sm:pr-8 sm:text-right' : 'sm:pl-8'
                      }`}
                    >
                      <div className="bg-surface rounded-2xl p-6 card-hover">
                        <div className="text-accent font-bold text-lg mb-1">{item.year}</div>
                        <h3 className="font-bold text-dark text-xl mb-2">{item.title}</h3>
                        <p className="text-gray-500 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ===== Değerler ===== */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="section-title text-dark">Değerlerimiz</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-7 card-hover border border-gray-100 text-center group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <Icon name={value.icon} className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-dark text-xl mb-2">{value.title}</h3>
                <p className="text-gray-500 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
