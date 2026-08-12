import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import ServiceCard from '../components/ServiceCard'
import StatsSection from '../components/StatsSection'
import ProjectGallery from '../components/ProjectGallery'
import CTASection from '../components/CTASection'
import Icon from '../components/Icon'
import SmartImage from '../components/SmartImage'
import services from '../data/services'
import projects from '../data/projects'
import Seo from '../components/Seo'
import siteConfig from '../data/siteConfig'

const reasons = [
  { title: 'Profesyonel Ekipman', desc: 'Karot, elmas diskli kesme ve hidrolik sistemlerle çalışıyoruz' },
  { title: 'Uzman Kadro', desc: `${siteConfig.stats.teamMembers}+ kişilik deneyimli saha ekibi` },
  { title: 'Hızlı Teslimat', desc: 'Projenizi zamanında ve eksiksiz teslim ediyoruz' },
  { title: 'Net Fiyat', desc: 'Keşif sonrası net teklif — sürpriz maliyet çıkmaz' },
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
              Her türlü beton delme, kesme ve kırma ihtiyacınıza profesyonel ekipman ve uzman
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
                Denizli&apos;de <span className="text-gradient-accent">Güvenilir</span> Karot
                Hizmeti
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                {siteConfig.stats.yearsExperience} yılı aşkın saha deneyimimiz, profesyonel makine
                parkurumuz ve uzman kadromuzla Denizli ve çevresinde beton delme, kesme ve kırma
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
                  alt="Şantiyede beton kesme çalışması"
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
                    <div className="text-white font-semibold text-sm">Ücretsiz Keşif</div>
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
      {/* Proje fotoğrafı yoksa (projects.js boş) bu bölüm hiç gösterilmez. */}
      {projects.length > 0 && (
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 mb-4">
              <Icon name="camera" className="w-4 h-4 text-accent" strokeWidth={2} />
              <span className="text-accent text-sm font-semibold">Sahada Nasıl Görünüyor?</span>
            </div>
            <h2 className="section-title text-dark">Uygulama Alanları</h2>
            <p className="section-subtitle">
              Hangi işte hangi yöntemi kullandığımızı görselleriyle anlattık.
            </p>
          </div>

          <ProjectGallery limit={6} />

          <div className="text-center mt-12">
            <Link to="/projeler/" className="btn-primary">
              Tüm Uygulama Alanları
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
