import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import siteConfig from '../data/siteConfig'
import heroSlides from '../data/heroSlides'
import Icon from './Icon'
import SmartImage from './SmartImage'

/**
 * ÇAPRAZ GEÇİŞ ELLE YAZILDI — buraya slider kütüphanesi EKLEMEYİN.
 *
 * Burada Swiper vardı ve yalnızca şunlar için kullanılıyordu: fade geçişi,
 * otomatik oynatma, nokta göstergesi, ok tuşları, erişilebilirlik duyurusu.
 * Hepsi aşağıda, kütüphanesiz.
 *
 * Neden çıkarıldı — ölçüm:
 *   Swiper tembel yüklenirse hero da tembel yüklenmek zorunda kalıyor; o da
 *   ekranı üç kez boyatıp sayfa yenilemede görünür sıçrama yapıyor
 *   (gerekçesi src/pages/Home.jsx başında). Hero eager olunca Swiper ortak
 *   pakete giriyor ve slider'ı OLMAYAN 89 sayfa da bedelini ödüyor:
 *   ilk ekran 94,4 → 126,1 KB gzip (+31,7 KB js, +1,6 KB css).
 *   Elle yazınca ikisi de gitti: eager hero, sıfır kütüphane.
 *
 * Yığın CSS ile kuruluyor (.hero-yigin / .hero-slayt, src/index.css):
 * bütün slaytlar aynı grid gözünde üst üste; yalnızca opaklık değişiyor.
 * Konteynerin yüksekliği en uzun slayttan geliyor — mutlak konumlandırmada
 * olduğu gibi çökmüyor.
 */

/** Slayt süresi ve fade uzunluğu — CSS'teki .hero-slayt geçişiyle eşleşmeli. */
const SLAYT_SURESI = 6500

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
  const [aktif, setAktif] = useState(0)
  const [durdu, setDurdu] = useState(false)

  /**
   * GÖRSEL YÜKLEME KONTROLÜ
   *
   * Fade yığınında bütün slaytlar aynı konumda üst üste duruyor. Tarayıcı
   * hepsini "görünür" saydığı için loading="lazy" işe yaramıyor ve ana sayfa
   * açılışında 5 hero görselinin TAMAMI iniyordu (~1,4 MB). Burada yalnızca
   * gösterilmiş olan slaytların + bir sonrakinin görseli DOM'a konuyor;
   * geri kalanların yerinde koyu zemin duruyor.
   */
  const [yuklenecek, setYuklenecek] = useState(() => new Set([0, 1]))

  /**
   * Ekran okuyucu duyurusu. Boş = sessiz.
   *
   * Ref DEĞİL state: ref'i render sırasında okumak eşzamanlı (concurrent)
   * render'da bayat değer verebiliyor. İki setState aynı olayda toplu
   * işleniyor, ekstra render yok.
   */
  const [duyuru, setDuyuru] = useState('')

  const git = useCallback((sonraki, elle = false) => {
    setDuyuru(
      elle ? `Slayt ${sonraki + 1} / ${heroSlides.length}: ${heroSlides[sonraki].badge}` : ''
    )
    setAktif(sonraki)
    setYuklenecek((oncekiler) => {
      if (oncekiler.has(sonraki) && oncekiler.has((sonraki + 1) % heroSlides.length)) return oncekiler
      const yeni = new Set(oncekiler)
      yeni.add(sonraki)
      yeni.add((sonraki + 1) % heroSlides.length)
      return yeni
    })
  }, [])

  /**
   * Otomatik oynatma.
   *
   * setInterval değil setTimeout: bağımlılıkta `aktif` olduğu için kullanıcı
   * bir noktaya bastığında sayaç sıfırdan başlıyor. Swiper'daki
   * disableOnInteraction:false karşılığı — etkileşimden sonra duruyor değil,
   * baştan sayıyor.
   */
  useEffect(() => {
    if (heroSlides.length < 2 || durdu) return
    /* Kullanıcı "hareketi azalt" dediyse otomatik oynatma çalışmaz. */
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
    const sayac = setTimeout(() => git((aktif + 1) % heroSlides.length), SLAYT_SURESI)
    return () => clearTimeout(sayac)
  }, [aktif, durdu, git])

  const tusaBasildi = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      git((aktif + 1) % heroSlides.length, true)
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      git((aktif - 1 + heroSlides.length) % heroSlides.length, true)
    }
  }

  const stats = heroStats
    .map((s) => ({ ...s, resolved: s.value(siteConfig.stats) }))
    .filter((s) => s.resolved !== null)

  return (
    <section
      className="relative bg-dark overflow-hidden"
      aria-label="Öne çıkanlar"
      aria-roledescription="karusel"
      /* Otomatik geçiş fare hero'nun üzerindeyken duruyor (eski Swiper
         pauseOnMouseEnter karşılığı) ve ODAK hero'nun içindeyken de duruyor.
         İkincisi WCAG 2.2.2 "Pause, Stop, Hide" için: klavyeyle gezen
         kullanıcının altındaki bağlantılar 6,5 saniyede bir değişmesin.
         onFocus/onBlur React'te kabarcıklanır — focusin/focusout gibi. */
      onMouseEnter={() => setDurdu(true)}
      onMouseLeave={() => setDurdu(false)}
      onFocus={() => setDurdu(true)}
      onBlur={() => setDurdu(false)}
    >
      <div className="hero-yigin">
        {heroSlides.map((slide, slideIndex) => (
          <div
            key={slide.id}
            className="hero-slayt"
            data-aktif={slideIndex === aktif ? 'true' : 'false'}
            /* inert: görünmeyen slayttaki bağlantı ve düğmelere sekme ile
               girilemesin; aria-hidden'ı da kendisi getiriyor. React 19'da
               boolean olarak veriliyor. */
            inert={slideIndex !== aktif}
            aria-roledescription="slayt"
            aria-label={`${slideIndex + 1} / ${heroSlides.length}`}
          >
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
                yoksa React devraldığı anda ekran kararır/açılır.

                SIRA DA ÖNEMLİ: burada sonraki kardeş ÜSTE boyanıyor
                (sağa → yukarı → radyal). Ön boyamada hepsi tek ::after
                içinde ve orada İLK katman üste geliyor, o yüzden liste
                ters yazılmış (radyal → yukarı → sağa). İkisi aynı sonucu
                veriyor; birini değiştirirken bunu unutma. */}
            <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/78 to-dark/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-transparent to-dark/45" />
            {/* Lacivert yıkama — paletin lacivert tonu fotoğrafın üzerinde de görünsün */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'radial-gradient(75% 65% at 88% 15%, rgba(16,56,140,0.42) 0%, rgba(16,56,140,0.14) 45%, transparent 72%)',
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
                  <h1 className="animate-fade-in-up text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-[-0.03em] mb-6 text-balance">
                    {slide.title}{' '}
                    <span className="text-gradient block mt-2">{slide.titleAccent}</span>{' '}
                    {slide.titleAfter && <span className="block mt-2">{slide.titleAfter}</span>}
                  </h1>
                ) : (
                  <p className="animate-fade-in-up text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-[-0.03em] mb-6 text-balance">
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
          </div>
        ))}
      </div>

      {/* Nokta göstergesi. Slaytların DIŞINDA: inert olan slayta girmemeli,
          yoksa aktif slayt değişince odak kaybolur. */}
      {heroSlides.length > 1 && (
        <div
          className="hero-noktalar"
          role="group"
          aria-label="Slayt seçimi"
          onKeyDown={tusaBasildi}
        >
          {heroSlides.map((slide, i) => (
            <button
              key={slide.id}
              type="button"
              className="hero-nokta"
              aria-current={i === aktif}
              aria-label={`${i + 1}. slayta git: ${slide.badge}`}
              onClick={() => git(i, true)}
            />
          ))}
        </div>
      )}

      {/* Ekran okuyucu duyurusu. Otomatik geçişte susuyor — 6,5 saniyede bir
          konuşan bir bölge sayfayı kullanılamaz hale getiriyor; Swiper'ın a11y
          modülü de aynı sebeple otomatik oynatmada bölgeyi kapatıyordu. */}
      <span className="sr-only" aria-live="polite" aria-atomic="true">
        {duyuru}
      </span>

      {/* Sağ sütun istatistik kartları — slaytlarla birlikte değişmediği için
          yığının DIŞINDA, sabit katman olarak duruyor. */}
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
