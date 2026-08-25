import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import ServiceCard from '../components/ServiceCard'
import StatsSection from '../components/StatsSection'
import BeforeAfter from '../components/BeforeAfter'
import CTASection from '../components/CTASection'
import Icon from '../components/Icon'
import SmartImage from '../components/SmartImage'
import services from '../data/services'
import projects from '../data/projects'
import Seo from '../components/Seo'
import siteConfig from '../data/siteConfig'

const reasons = [
  { title: 'Fabrikasyon Yıkama', desc: '16 fırçalı tam otomatik makine, kapalı kurutma odaları' },
  { title: 'Uzman Kadro', desc: `${siteConfig.stats.teamMembers}+ kişilik deneyimli saha ekibi` },
  { title: 'Hızlı Teslimat', desc: 'Projenizi zamanında ve eksiksiz teslim ediyoruz' },
  { title: 'Net Fiyat', desc: 'Alımda konuşulan rakam teslimde de aynı — sürpriz çıkmaz' },
]

export default function Home() {
  return (
    <div className="page-enter">
      <Seo
        title={siteConfig.seo.defaultTitle}
        description={siteConfig.seo.defaultDescription}
        path="/"
      />

      <HeroSection />

      {/* ===== Hizmetler ===== */}
      <section className="section-padding bg-white" id="hizmetler">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 mb-4">
              <Icon name="cog" className="w-4 h-4 text-accent" strokeWidth={2} />
              <span className="text-accent text-sm font-semibold">Profesyonel Çözümler</span>
            </div>
            <h2 className="section-title text-dark">Hizmetlerimiz</h2>
            <p className="section-subtitle">
              Halı, koltuk, yatak, perde ve yorgan. Adresinizden alıyor, ambalajlı teslim
              kadroyla çözüm sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <ServiceCard key={service.id} service={service} index={idx} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/hizmetler/" className="btn-primary">
              Tüm Hizmetlerimiz
              <Icon name="arrowRight" className="w-5 h-5" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== Neden Biz ===== */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Sol */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 mb-4">
                <Icon name="award" className="w-4 h-4 text-accent" strokeWidth={2} />
                <span className="text-accent text-sm font-semibold">
                  Neden {siteConfig.companyName}?
                </span>
              </div>
              <h2 className="section-title text-dark mb-6">
                Denizli&apos;de <span className="text-gradient-accent">Fabrikasyon</span> Halı Yıkama
                Hizmeti
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {siteConfig.stats.yearsExperience} yılı aşkın saha deneyimimiz, profesyonel makine
                parkımız ve ekibimizle Denizli ve tüm ilçelerinde halı, koltuk ve perde yıkama
                hizmetleri veriyoruz.
              </p>

              <div className="space-y-4">
                {reasons.map((item) => (
                  <div key={item.title} className="flex items-start gap-4 group">
                    <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white text-accent transition-colors">
                      <Icon name="check" className="w-5 h-5" strokeWidth={2.5} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-dark mb-1">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sağ — görsel */}
            <div className="relative hidden lg:block">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-square">
                <SmartImage
                  src="/images/hero/hero-2.webp"
                  alt="Tesiste 16 fırçalı makinede halı yıkama"
                  icon="hydraulic"
                  label="Saha Çalışması"
                  className="absolute inset-0 w-full h-full"
                  imgClassName="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <div className="text-white text-2xl font-bold mb-1">Sahada Uzman Ekip</div>
                  <div className="text-white/60">Denizli ve çevre ilçelerde hizmet</div>
                </div>
              </div>

              {/* Yüzen rozet */}
              <div className="absolute -bottom-4 -left-4 glass-dark rounded-xl px-5 py-3 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-dark">
                    <Icon name="check" className="w-5 h-5" strokeWidth={3} />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">Ücretsiz Servis</div>
                    <div className="text-white/50 text-xs">Yerinde değerlendirme</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      {/* ===== Projeler ===== */}
      {/* Öncesi/sonrası çifti yoksa (projects.js boş) bu bölüm hiç gösterilmez. */}
      {projects.length > 0 && (
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 mb-4">
              <Icon name="camera" className="w-4 h-4 text-accent" strokeWidth={2} />
              <span className="text-accent text-sm font-semibold">Aynı Kare, İki Hâl</span>
            </div>
            <h2 className="section-title text-dark">Öncesi &amp; Sonrası</h2>
            <p className="section-subtitle">
              Sürgüyü kaydırın: aynı halı, yıkamadan önce ve sonra.
            </p>
          </div>

          {/* Ana sayfada YALNIZCA 3 karşılaştırma — tamamı /projeler/ sayfasında.
              Her BeforeAfter iki görsel yüklüyor; altısını birden ana sayfaya
              koymak LCP'yi kimsenin görmediği bir bölüm için riske atardı. */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((p) => (
              <BeforeAfter
                key={p.id}
                oncesi={p.oncesi}
                sonrasi={p.sonrasi}
                oncesiAlt={`${p.title} — yıkama öncesi`}
                sonrasiAlt={`${p.title} — yıkama sonrası`}
                baslik={p.title}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projeler/" className="btn-primary">
              Tüm Öncesi &amp; Sonrası
              <Icon name="arrowRight" className="w-5 h-5" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>
      )}

      <CTASection />
    </div>
  )
}
