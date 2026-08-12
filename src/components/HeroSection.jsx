import { Link } from 'react-router-dom'
import siteConfig from '../data/siteConfig'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary/20 blur-[100px]"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-[80px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px]"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="animate-fade-in-down inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-white/80 text-sm font-medium">Denizli&apos;nin 1 Numaralı Karot Firması</span>
            </div>

            {/* Title */}
            <h1 className="animate-fade-in-up text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Profesyonel
              <span className="text-gradient block mt-2">Beton Delme & Kesme</span>
              <span className="block mt-2">Hizmetleri</span>
            </h1>

            {/* Description */}
            <p className="animate-fade-in-up delay-200 text-white/60 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl">
              Hilti marka profesyonel ekipmanlarımızla <strong className="text-white/90">sıfır hata</strong>, minimum titreşim ve maksimum hız. 
              <strong className="text-primary"> {siteConfig.stats.yearsExperience}+ yıllık</strong> saha tecrübesiyle güvencenizdeyiz.
            </p>

            {/* CTAs */}
            <div className="animate-fade-in-up delay-300 flex flex-wrap gap-4">
              <a href={`tel:${siteConfig.phoneRaw}`} className="btn-primary text-lg px-8 py-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Hemen Arayın
              </a>
              <Link to="/hizmetler" className="btn-outline text-lg px-8 py-4">
                Hizmetlerimiz
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="animate-fade-in-up delay-500 mt-12 flex items-center gap-8 flex-wrap">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary-dark border-2 border-dark flex items-center justify-center text-[10px] font-bold text-dark">
                      {['HK','MA','AY','ÖZ'][i-1]}
                    </div>
                  ))}
                </div>
                <div className="text-white/60 text-sm">
                  <span className="text-white font-semibold">{siteConfig.stats.happyClients.toLocaleString('tr-TR')}+</span> mutlu müşteri
                </div>
              </div>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="text-white/60 text-sm ml-1">5.0/5</span>
              </div>
            </div>
          </div>

          {/* Right - Stats Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {[
              { value: `${siteConfig.stats.yearsExperience}+`, label: 'Yıl Tecrübe', icon: '🏆', delay: 'delay-200' },
              { value: `${siteConfig.stats.completedProjects.toLocaleString('tr-TR')}+`, label: 'Tamamlanan Proje', icon: '📋', delay: 'delay-300' },
              { value: `${siteConfig.stats.happyClients.toLocaleString('tr-TR')}+`, label: 'Mutlu Müşteri', icon: '😊', delay: 'delay-400' },
              { value: '7/24', label: 'Acil Servis', icon: '🚨', delay: 'delay-500' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className={`animate-scale-in ${stat.delay} glass rounded-2xl p-6 text-center card-hover glow-gold-hover group cursor-default`}
              >
                <div className="text-3xl mb-3 group-hover:animate-float">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-white/50 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
