import heroSlides from '../data/heroSlides'

/**
 * Hero yer tutucusu — Suspense yedeği.
 *
 * ┌──────────────────────────────────────────────────────────────────────────┐
 * │ NEDEN VAR — ölçülmüş bir kusuru kapatıyor                                │
 * │                                                                          │
 * │ Ana sayfanın hero'su build sırasında STATİK olarak ön boyanıyor           │
 * │ (vite.config.js > heroOnizleme): görsel, React açılmadan ekranda.        │
 * │ Sonra React açılıyor, createRoot #root'u TEMİZLİYOR ve HeroSection        │
 * │ tembel yüklendiği için Suspense yedeği görünüyor.                        │
 * │                                                                          │
 * │ Yedek düz koyu bir kutu olduğunda kullanıcı şunu görüyordu:              │
 * │   görsel  →  KOYU BOŞLUK  →  görsel                                      │
 * │ Sayfa yenilendiğinde göze çarpan bir sıçrama.                            │
 * │                                                                          │
 * │ Bu bileşen ön boyamanın BİREBİR AYNISINI çiziyor, dolayısıyla React      │
 * │ devraldığında ekranda hiçbir şey değişmiyor.                             │
 * └──────────────────────────────────────────────────────────────────────────┘
 *
 * DİKKAT: Aşağıdaki üç örtü ve zemin rengi ÜÇ YERDE aynı olmak zorunda:
 *   1. vite.config.js > heroOnizleme  (statik ön boyama)
 *   2. burası                          (Suspense yedeği)
 *   3. HeroSection.jsx                 (gerçek hero)
 * Biri değişirse diğer ikisi de değişmeli; yoksa devir anında ekran
 * kararıyor ya da açılıyor.
 */
export default function HeroOnizleme() {
  const slayt = heroSlides[0]
  if (!slayt) return <div className="min-h-[100svh] bg-dark" aria-hidden="true" />

  const kucuk = slayt.image.replace('.webp', '-800.webp')

  return (
    <div className="relative min-h-[100svh] overflow-hidden bg-dark" aria-hidden="true">
      <img
        src={slayt.image}
        srcSet={`${kucuk} 800w, ${slayt.image} 1600w`}
        sizes="100vw"
        alt=""
        width="1600"
        height="900"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* Okunabilirlik örtüleri — HeroSection.jsx ile birebir aynı sıra ve değer */}
      <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/78 to-dark/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-transparent to-dark/45" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(75% 65% at 88% 15%, rgba(16,56,140,0.42) 0%, rgba(16,56,140,0.14) 45%, transparent 72%)',
        }}
      />
    </div>
  )
}
