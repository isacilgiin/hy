import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import ServiceCard from '../components/ServiceCard'
import StatsSection from '../components/StatsSection'
import ProjectGallery from '../components/ProjectGallery'
import CTASection from '../components/CTASection'
import services from '../data/services'
import siteConfig from '../data/siteConfig'

export default function Home() {
  useEffect(() => {
    document.title = siteConfig.seo.defaultTitle
  }, [])

  return (
    <div className="page-enter">
      {/* Hero */}
      <HeroSection />

      {/* Hizmetler Bölümü */}
      <section className="section-padding bg-white" id="hizmetler">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-4">
              <span className="text-primary text-sm font-semibold">🔧 Profesyonel Çözümler</span>
            </div>
            <h2 className="section-title text-dark">
              Hizmetlerimiz
            </h2>
            <p className="section-subtitle">
              Hilti marka ekipmanlarımızla her türlü beton delme, kesme ve kırma ihtiyacınıza profesyonel çözümler sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <ServiceCard key={service.id} service={service} index={idx} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/hizmetler" className="btn-primary">
              Tüm Hizmetlerimiz
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Neden Biz */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-4">
                <span className="text-primary text-sm font-semibold">🏆 Neden Güçlü Karot?</span>
              </div>
              <h2 className="section-title text-dark mb-6">
                Denizli&apos;de <span className="text-gradient">Güvenilir</span> Karot Hizmeti
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed mb-8">
                {siteConfig.stats.yearsExperience} yılı aşkın sektör deneyimimiz, Hilti marka profesyonel ekipman parkurumuz ve uzman kadromuzla Denizli ve çevresinde beton delme, kesme ve kırma hizmetlerinde lider konumdayız.
              </p>

              <div className="space-y-4">
                {[
                  { title: 'Hilti Ekipmanlar', desc: 'Dünya lideri Hilti marka makinelerle çalışıyoruz' },
                  { title: 'Uzman Kadro', desc: `${siteConfig.stats.teamMembers}+ kişilik deneyimli ve sertifikalı ekip` },
                  { title: 'Hızlı Teslimat', desc: 'Projenizi zamanında ve eksiksiz teslim ediyoruz' },
                  { title: 'Uygun Fiyat', desc: 'Rekabetçi fiyatlandırma ile bütçenize uygun çözümler' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Visual */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-dark to-dark-light p-10 aspect-square flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-6 animate-float">🏗️</div>
                  <div className="text-white text-2xl font-bold mb-2">Hilti Teknolojisi</div>
                  <div className="text-white/50">Profesyonel Ekipman Parkuru</div>
                </div>
                {/* Decorative Elements */}
                <div className="absolute top-6 right-6 w-20 h-20 rounded-full bg-primary/10 blur-xl"></div>
                <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-primary/5 blur-2xl"></div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-4 glass-dark rounded-xl px-5 py-3 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-dark font-bold">
                    ✓
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">ISO 9001</div>
                    <div className="text-white/50 text-xs">Kalite Güvencesi</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* İstatistikler */}
      <StatsSection />

      {/* Projeler Bölümü */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-4">
              <span className="text-primary text-sm font-semibold">📸 Son Projelerimiz</span>
            </div>
            <h2 className="section-title text-dark">
              Tamamlanan Projeler
            </h2>
            <p className="section-subtitle">
              Başarıyla tamamladığımız projelerden bazıları. Kaliteli işçiliğimizi inceleyin.
            </p>
          </div>

          <ProjectGallery limit={6} />

          <div className="text-center mt-12">
            <Link to="/projeler" className="btn-primary">
              Tüm Projeler
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  )
}
