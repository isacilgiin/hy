import { useState, useEffect, useRef } from 'react'
import siteConfig from '../data/siteConfig'
import Icon from './Icon'

function AnimatedNumber({ target, prefix = '', suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [started, setStarted] = useState(false)

  // Görünür alana girince sayacı başlat, sonra gözlemciyi bırak.
  useEffect(() => {
    const node = ref.current
    if (!node || started) return

    if (typeof IntersectionObserver === 'undefined') {
      setStarted(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return

    // Hareketi azalt tercihinde animasyon yok, doğrudan son değer.
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setCount(target)
      return
    }

    let frameId = null
    let startTime = null

    const animate = (timestamp) => {
      if (startTime === null) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // easeOutCubic
      setCount(Math.floor(eased * target))
      if (progress < 1) frameId = requestAnimationFrame(animate)
    }

    frameId = requestAnimationFrame(animate)
    return () => {
      if (frameId !== null) cancelAnimationFrame(frameId)
    }
  }, [started, target, duration])

  return (
    <span ref={ref} className="rakam">
      {/* prefix/suffix ile sayi ARASINDA satir sonu olmamali: JSX ayri
          satirdaki iki ifadenin arasina bosluk koyar ve "% 100" diye render
          eder. Bitisik yaziliyor. */}
      {prefix}{count.toLocaleString('tr-TR')}{suffix}
    </span>
  )
}

export default function StatsSection() {
  // Değeri girilmemiş (null) istatistik hiç gösterilmez — uydurma rakam çıkmaz.
  /**
   * Anahtarlar siteConfig.stats ile birebir eşleşmeli — eşleşmezse filtre o
   * kaydı sessizce düşürüyor ve bölüm eksik görünüyor (hata vermiyor).
   * Rakamların kaynağı canlı sitenin sayaçları: docs/olgu-sayfasi.md §2.
   */
  const stats = [
    {
      key: 'carpets',
      value: siteConfig.stats.washedCarpets,
      suffix: '+',
      label: 'Yıkanan Halı',
      description: 'Tesisimizden geçen halı sayısı',
      icon: 'carpetRoll',
    },
    {
      key: 'clients',
      value: siteConfig.stats.happyClients,
      suffix: '+',
      label: 'Mutlu Müşteri',
      description: 'Hizmet verdiğimiz hane',
      icon: 'smile',
    },
    {
      key: 'years',
      value: siteConfig.stats.yearsExperience,
      suffix: '+',
      label: 'Yıl Tecrübe',
      description: `${siteConfig.foundedYear} yılından beri Denizli'de`,
      icon: 'badgeCheck',
    },
    {
      key: 'hygiene',
      value: siteConfig.stats.hygieneGuarantee,
      prefix: '%',
      suffix: '',
      label: 'Hijyen',
      description: 'Antibakteriyel yıkama, kapalı kurutma',
      icon: 'shield',
    },
  ].filter((s) => typeof s.value === 'number' && s.value > 0)

  if (stats.length === 0) return null

  return (
    <section className="relative py-20 gradient-dark overflow-hidden">
      {/* Arka plan ışıma */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => (
            <div key={stat.key} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-dark transition-all duration-500 group-hover:scale-110 glow-gold-hover">
                <Icon name={stat.icon} className="w-8 h-8" />
              </div>
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                <AnimatedNumber target={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              </div>
              <div className="text-primary font-semibold mb-1">{stat.label}</div>
              <div className="text-white/60 text-sm hidden sm:block">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
