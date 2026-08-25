import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade, Pagination, Keyboard, A11y } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'

import siteConfig from '../data/siteConfig'
import heroSlides from '../data/heroSlides'
import Icon from './Icon'
import SmartImage from './SmartImage'

/** Kullanıcı "hareketi azalt" dediyse otomatik oynatma çalışmaz. */
const prefersReducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

/**
 * Hero'daki dört rakam.
 *
 * DİKKAT: anahtarlar siteConfig.stats ile birebir eşleşmeli. Değer bulunamazsa
 * `value` null döner ve rozet SESSİZCE kaybolur — hata vermez. Devralınan
 * iskelette `completedProjects` ve `teamMembers` okunuyordu; siteConfig
 * değişince ikisi de null döndü ve hero yarı boş kaldı.
 *
 * Rakamların kaynağı canlı sitenin sayaçları (docs/olgu-sayfasi.md §2).
 */
const heroStats = [
  { key: 'carpets', icon: 'carpetRoll', label: 'Yıkanan Halı', value: (s) => (s.washedCarpets ? `${s.washedCarpets.toLocaleString('tr-TR')}+` : null) },
  { key: 'clients', icon: 'smile', label: 'Mutlu Müşteri', value: (s) => (s.happyClients ? `${s.happyClients.toLocaleString('tr-TR')}+` : null) },
  { key: 'years', icon: 'award', label: 'Yıl Tecrübe', value: (s) => (s.yearsExperience ? `${s.yearsExperience}+` : null) },
  { key: 'pickup', icon: 'truck', label: 'Alım & Teslim', value: () => (siteConfig.service.ucretsizServis ? 'Ücretsiz' : null) },
]

export default function HeroSection() {
  /**
   * GÖRSEL YÜKLEME KONTROLÜ
   *
   * Swiper'ın fade efektinde bütün slaytlar aynı konumda üst üste durur.
   * Tarayıcı hepsini "görünür" saydığı için loading="lazy" işe yaramıyor ve
   * ana sayfa açılışında 6 hero görselinin TAMAMI iniyordu (~1,4 MB).
   * Burada yalnızca gösterilmiş olan slaytların + bir sonrakinin görseli
   * DOM'a konuyor; geri kalanların yerinde koyu zemin duruyor.
   */
  const [yuklenecek, setYuklenecek] = useState(() => new Set([0, 1]))

  const slaytDegisti = (swiper) => {
    setYuklenecek((oncekiler) => {
      const sonraki = new Set(oncekiler)
      sonraki.add(swiper.realIndex)
      sonraki.add((swiper.realIndex + 1) % heroSlides.length)
      return sonraki
    })
  }

  const stats = heroStats
    .map((s) => ({ ...s, resolved: s.value(siteConfig.stats) }))
    .filter((s) => s.resolved !== null)

  return (
    <section className="relative bg-dark overflow-hidden" aria-label="Öne çıkanlar">
      <Swiper
        className="hero-swiper"
        modules={[Autoplay, EffectFade, Pagination, Keyboard, A11y]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={900}
        loop={heroSlides.length > 1}
        autoplay={
          prefersReducedMotion || heroSlides.length < 2
            ? false
            : { delay: 6500, disableOnInteraction: false, pauseOnMouseEnter: true }
        }
        pagination={{ clickable: true }}
        onSlideChange={slaytDegisti}
        keyboard={{ enabled: true }}
        a11y={{
          prevSlideMessage: 'Önceki slayt',
          nextSlideMessage: 'Sonraki slayt',
          paginationBulletMessage: '{{index}}. slayta git',
        }}
      >
        {heroSlides.map((slide, slideIndex) => (
          <SwiperSlide key={slide.id}>
            {/* Arka plan görseli — ilk slayt LCP olduğu için eager ve yüksek
                öncelikli; diğerleri ancak sırası gelince DOM'a giriyor. */}
            <div className="absolute inset-0 bg-dark">
              {yuklenecek.has(slideIndex) && (
                <SmartImage
                  src={slide.image}
                  /* Mobilde 1600px hero indirmeye gerek yok. */
                  srcSet={`${slide.image.replace('.webp', '-800.webp')} 800w, ${slide.image} 1600w`}
                  sizes="100vw"
                  alt={slide.imageAlt}
                  icon={null}
                  className="w-full h-full"
                  imgClassName="w-full h-full object-cover"
                  loading={slideIndex === 0 ? 'eager' : 'lazy'}
                  fetchPriority={slideIndex === 0 ? 'high' : undefined}
                  width="1600"
                  height="900"
                />
              )}
            </div>

            {/* Okunabilirlik katmanı — metnin bulunduğu sol tarafta koyu, sağda
                fotoğraf görünsün diye açık. Metin `text-white` üzerinde en az
                7:1 kontrast kalacak şekilde ayarlandı.

                DİKKAT: Aşağıdaki üç örtü, ana sayfanın statik hero ön
                boyamasında birebir kopyalanmıştır (vite.config.js >
                heroOnizleme). Birini değiştirirsen oradakini de değiştir;
                yoksa React devraldığı anda ekran kararır/açılır. */}
            <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/78 to-dark/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-transparent to-dark/45" />
            {/* Bordo yıkama — paletin bordo tonu fotoğrafın üzerinde de görünsün */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(75% 65% at 88% 15%, rgba(11,107,95,0.42) 0%, rgba(11,107,95,0.14) 45%, transparent 72%)',
              }}
            />

            {/* Izgara dokusu */}
            <div
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)',
                backgroundSize: '60px 60px',
              }}
            />

            {/* İçerik */}
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[100svh] flex items-center pt-32 pb-40 sm:pb-48 lg:pb-52">
              <div className="w-full lg:max-w-[54%]">
                {/* Rozet */}
                <div className="animate-fade-in-down inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
                  <Icon name={slide.icon} className="w-4 h-4 text-primary" strokeWidth={2} />
                  <span className="text-white/85 text-sm font-medium">{slide.badge}</span>
                </div>

                {/* Başlık — yalnızca ilk slaytta <h1>, diğerlerinde <p>.
                    Bir sayfada birden fazla h1 olması SEO'da başlık hiyerarşisini bozar. */}
                {/* {' '} ŞART: parçalar arasında boşluk olmazsa görsel olarak
                    (span'lar block) fark edilmez ama textContent kelimeleri
                    birleştirir. Google ve ekran okuyucular H1'i
                    üç satırı bitişik, tek kelime gibi okuyordu. */}
                {slideIndex === 0 ? (
                  <h1 className="animate-fade-in-up text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                    {slide.title}{' '}
                    <span className="text-gradient block mt-2">{slide.titleAccent}</span>{' '}
                    {slide.titleAfter && <span className="block mt-2">{slide.titleAfter}</span>}
                  </h1>
                ) : (
                  <p className="animate-fade-in-up text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                    {slide.title}{' '}
                    <span className="text-gradient block mt-2">{slide.titleAccent}</span>{' '}
                    {slide.titleAfter && <span className="block mt-2">{slide.titleAfter}</span>}
                  </p>
                )}

                {/* Açıklama */}
                <p
                  className="animate-fade-in-up delay-200 text-white/65 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl [&_strong]:text-white [&_strong]:font-semibold"
                  dangerouslySetInnerHTML={{ __html: slide.description }}
                />

                {/* CTA */}
                <div className="animate-fade-in-up delay-300 flex flex-wrap gap-4">
                  <a href={`tel:${siteConfig.phoneRaw}`} className="btn-primary text-lg px-8 py-4">
                    <Icon name="phone" className="w-5 h-5" strokeWidth={2} />
                    Hemen Arayın
                  </a>
                  <Link
                    to={slide.serviceTo || '/hizmetler'}
                    className="btn-outline text-lg px-8 py-4"
                  >
                    {slide.serviceLabel || 'Hizmetlerimiz'}
                    <Icon name="arrowRight" className="w-5 h-5" strokeWidth={2} />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Sağ sütun istatistik kartları — slaytlarla birlikte değişmediği için
          Swiper'ın DIŞINDA, sabit katman olarak duruyor. */}
      {stats.length > 0 && (
        <div className="pointer-events-none absolute inset-0 z-10 hidden lg:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-end pb-40">
            <div className="grid grid-cols-2 gap-4 w-[400px] pointer-events-auto">
              {stats.map((stat, idx) => (
                <div
                  key={stat.key}
                  className={`animate-scale-in delay-${(idx + 2) * 100} glass rounded-2xl p-6 text-center card-hover glow-gold-hover group cursor-default`}
                >
                  <Icon
                    name={stat.icon}
                    className="w-8 h-8 mx-auto mb-3 text-primary group-hover:animate-float"
                  />
                  <div className="text-3xl font-bold text-white mb-1">{stat.resolved}</div>
                  <div className="text-white/50 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Alt dalga — bir sonraki (beyaz) bölüme geçiş */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-20 lg:h-28 block"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="var(--color-surface)"
          />
        </svg>
      </div>
    </section>
  )
}
