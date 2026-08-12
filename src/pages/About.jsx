import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import StatsSection from '../components/StatsSection'
import CTASection from '../components/CTASection'
import siteConfig from '../data/siteConfig'

export default function About() {
  useEffect(() => {
    document.title = `Hakkımızda | ${siteConfig.companyName} — Denizli`
  }, [])

  const timeline = [
    { year: '2010', title: 'Kuruluş', desc: 'Güçlü Karot, Denizli\'de beton delme ve kesme sektörüne adım attı.' },
    { year: '2014', title: 'Hilti Ortaklığı', desc: 'Hilti marka profesyonel ekipmanlarla çalışmaya başladık.' },
    { year: '2018', title: 'Ekip Genişlemesi', desc: 'Deneyimli kadromuzu büyüterek daha fazla projeye ulaştık.' },
    { year: '2022', title: 'Modern Makine Parkuru', desc: 'Son teknoloji hidrolik ve karot makinelerimizle hizmet kalitemizi artırdık.' },
    { year: '2025', title: 'Bölge Lideri', desc: 'Denizli ve çevre illerde en çok tercih edilen karot firması olduk.' },
  ]

  return (
    <div className="page-enter">
      {/* Header */}
      <section className="gradient-hero pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary/20 blur-[100px]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 animate-fade-in-up">
            Hakkımızda
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto animate-fade-in-up delay-200">
            {siteConfig.stats.yearsExperience}+ yıllık tecrübe ile Denizli&apos;nin güvenilir karot firması.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-white/40 text-sm animate-fade-in-up delay-300">
            <Link to="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-primary">Hakkımızda</span>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 mb-4">
                <span className="text-primary text-sm font-semibold">🏢 Hikayemiz</span>
              </div>
              <h2 className="section-title text-dark mb-6">
                Denizli&apos;de <span className="text-gradient">Güçlü</span> Bir Marka
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-dark">{siteConfig.companyName}</strong>, {siteConfig.stats.yearsExperience} yılı aşkın sektör deneyimiyle Denizli ve çevresinde beton delme, kesme ve kırma hizmetlerinin lider markasıdır.
                </p>
                <p>
                  Dünya lideri <strong className="text-dark">Hilti</strong> marka profesyonel ekipmanlarımız, uzman kadromuz ve müşteri odaklı yaklaşımımızla her projede en yüksek kalite standardını sunuyoruz.
                </p>
                <p>
                  Konut projelerinden sanayi tesislerine, altyapı çalışmalarından kentsel dönüşüm projelerine kadar geniş bir yelpazede hizmet veriyoruz. Her işte güvenlik, kalite ve zamanında teslimat ilkelerimizden taviz vermiyoruz.
                </p>
              </div>
            </div>

            {/* Visual */}
            <div className="relative hidden lg:block">
              <div className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-dark to-dark-light p-10 aspect-[4/3] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl mb-4">🏗️</div>
                  <div className="text-white text-xl font-bold">{siteConfig.companyName}</div>
                  <div className="text-primary text-sm mt-1">Est. 2010</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsSection />

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="section-title text-dark">Yolculuğumuz</h2>
            <p className="section-subtitle">Kuruluşumuzdan bugüne önemli kilometre taşlarımız.</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 sm:left-1/2 sm:-translate-x-0.5"></div>

            <div className="space-y-10">
              {timeline.map((item, idx) => (
                <div key={idx} className={`relative flex items-start gap-6 ${idx % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}>
                  {/* Dot */}
                  <div className="absolute left-6 sm:left-1/2 w-4 h-4 -ml-2 sm:-ml-2 rounded-full bg-primary border-4 border-white shadow-md z-10"></div>

                  {/* Content */}
                  <div className={`ml-14 sm:ml-0 sm:w-[calc(50%-2rem)] ${idx % 2 === 0 ? 'sm:pr-8 sm:text-right' : 'sm:pl-8'}`}>
                    <div className="bg-surface rounded-2xl p-6 card-hover">
                      <div className="text-primary font-bold text-lg mb-1">{item.year}</div>
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

      {/* Values */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="section-title text-dark">Değerlerimiz</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🎯', title: 'Kalite', desc: 'Her projede en yüksek işçilik kalitesini garanti ediyoruz.' },
              { icon: '🤝', title: 'Güvenilirlik', desc: 'Söz verdiğimiz zamanda, söz verdiğimiz kalitede teslim.' },
              { icon: '⚡', title: 'Hız', desc: 'Modern ekipmanlarımızla hızlı ve etkili çözümler.' },
              { icon: '🛡️', title: 'Güvenlik', desc: 'İş güvenliği standartlarından asla taviz vermiyoruz.' },
              { icon: '💰', title: 'Uygun Fiyat', desc: 'Kaliteden ödün vermeden rekabetçi fiyatlar.' },
              { icon: '🌟', title: 'Müşteri Memnuniyeti', desc: '%100 müşteri memnuniyeti hedefimiz.' },
            ].map((value, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-7 card-hover border border-gray-100 text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{value.icon}</div>
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
