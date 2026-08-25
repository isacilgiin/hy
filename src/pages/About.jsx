import StatsSection from '../components/StatsSection'
import CTASection from '../components/CTASection'
import PageHeader from '../components/PageHeader'
import Seo from '../components/Seo'
import Icon from '../components/Icon'
import SmartImage from '../components/SmartImage'
import siteConfig from '../data/siteConfig'
import { timeline, yaklasim, hikaye, foundedYear } from '../data/about'

export default function About() {
  return (
    <div className="page-enter">
      <Seo
        title={`Hakkımızda | ${siteConfig.companyShortName} — Halı Yıkama Denizli`}
        description={`${siteConfig.companyShortName}, Denizli'de halı, koltuk, perde ve yorgan yıkama hizmeti veriyor. Eskihisar'daki tesisimizde 16 fırçalı makinelerle çalışıyoruz.`}
        path="/hakkimizda/"
      />

      <PageHeader
        title="Hakkımızda"
        description={`${siteConfig.stats.yearsExperience}+ yıllık tecrübeyle Denizli'de halı, koltuk ve perde yıkama.`}
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
                {hikaye.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </div>

            {/* Görsel */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                <SmartImage
                  src="/images/hakkimizda.webp"
                  srcSet="/images/hakkimizda-600.webp 600w, /images/hakkimizda.webp 1200w"
                  sizes="(min-width: 1024px) 560px, 92vw"
                  alt={`${siteConfig.companyName} tesisi ve makine parkı`}
                  icon="users"
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
                        <p className="text-gray-600 text-sm">{item.desc}</p>
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
            <h2 className="section-title text-dark">Çalışma Prensiplerimiz</h2>
            <p className="section-subtitle">
              Her işte uyduğumuz kurallar. Bunlar pazarlama cümlesi değil, tesiste ve
              gerçekten uyguladığımız sıra.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {yaklasim.map((madde) => (
              <div
                key={madde.baslik}
                className="bg-white rounded-2xl p-7 card-hover border border-gray-100 group"
              >
                <div className="w-14 h-14 mb-4 rounded-2xl bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                  <Icon name={madde.icon} className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-dark text-lg mb-2">{madde.baslik}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{madde.metin}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
