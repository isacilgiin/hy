import { useEffect, useRef, useState } from 'react'
import Icon from './Icon'

/**
 * Süreç Adımları — "halı bize geldiğinde ne oluyor?" sorusunun görsel cevabı.
 *
 * Neden var: bu sektörde en sık sorulan şey fiyat değil, GÜVEN. "Halımı verdim,
 * ne oluyor, ne zaman dönüyor?" Adımları tek tek göstermek, aynı soruyu
 * telefonda cevaplamaktan daha ikna edici ve arama motorunda da içerik sayılıyor.
 *
 * Adım metinleri src/data/surec.js'ten gelir ve UYDURMA DEĞİLDİR — hepsinin
 * karşılığı docs/olgu-sayfasi.md §3'te kayıtlı. Süsleme için adım eklemeyin:
 * burada yazan şey müşteriye verilmiş bir taahhüttür.
 *
 * Erişilebilirlik: <ol> kullanılıyor çünkü bu gerçekten SIRALI bir liste;
 * ekran okuyucu "7 öğeden 3'ü" diye okuyor. Bağlantı çizgisi aria-hidden.
 */
export default function ProcessSteps({
  adimlar,
  baslik = 'Halınıza Ne Oluyor?',
  altBaslik,
  koyu = true,
}) {
  if (!adimlar?.length) return null

  const zemin = koyu ? 'bg-dark text-white' : 'bg-surface text-dark'
  const kartZemin = koyu
    ? 'bg-dark-light/70 border-white/10 hover:border-primary/40'
    : 'bg-white border-dark/10 hover:border-accent/40'
  // Luminans rolü: koyu zeminde primary (8.70:1), açık zeminde accent (5.67:1).
  // İkisi yer değiştirirse okunmaz — gerekçe src/index.css @theme başında.
  const vurgu = koyu ? 'text-primary' : 'text-accent'
  const rozetZemin = koyu ? 'bg-primary text-dark' : 'bg-accent text-white'

  return (
    <section className={`py-20 md:py-28 ${zemin}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{baslik}</h2>
          {altBaslik && (
            <p className={koyu ? 'text-white/70 leading-relaxed' : 'text-dark/70 leading-relaxed'}>
              {altBaslik}
            </p>
          )}
        </div>

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {adimlar.map((adim, i) => (
            <Adim
              key={adim.id}
              adim={adim}
              sira={i + 1}
              gecikme={i}
              kartZemin={kartZemin}
              vurgu={vurgu}
              rozetZemin={rozetZemin}
              koyu={koyu}
            />
          ))}
        </ol>
      </div>
    </section>
  )
}

function Adim({ adim, sira, gecikme, kartZemin, vurgu, rozetZemin, koyu }) {
  const ref = useRef(null)
  const [gorunur, setGorunur] = useState(false)

  // Görünür alana girince bir kez açılır. StatsSection ile aynı kalıp:
  // IntersectionObserver yoksa (çok eski tarayıcı, test ortamı) doğrudan açık
  // başlar — animasyon bir süs, içeriğin görünmesinin şartı değil.
  useEffect(() => {
    const node = ref.current
    if (!node || gorunur) return
    if (typeof IntersectionObserver === 'undefined') {
      setGorunur(true)
      return
    }
    const gozlemci = new IntersectionObserver(
      ([giris]) => {
        if (giris.isIntersecting) {
          setGorunur(true)
          gozlemci.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    gozlemci.observe(node)
    return () => gozlemci.disconnect()
  }, [gorunur])

  const azHareket =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  return (
    <li
      ref={ref}
      className={`relative rounded-2xl border p-6 transition-all duration-500 ${kartZemin} ${
        gorunur || azHareket ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
      style={azHareket ? undefined : { transitionDelay: `${Math.min(gecikme, 6) * 70}ms` }}
    >
      <div className="flex items-center gap-3 mb-4">
        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold ${rozetZemin}`}
          aria-hidden="true"
        >
          {sira}
        </span>
        <Icon name={adim.icon} className={`h-6 w-6 ${vurgu}`} />
      </div>

      <h3 className="text-lg font-semibold mb-1.5">{adim.baslik}</h3>
      <p className={`text-sm font-medium mb-3 ${vurgu}`}>{adim.ozet}</p>
      <p className={`text-sm leading-relaxed ${koyu ? 'text-white/65' : 'text-dark/70'}`}>
        {adim.aciklama}
      </p>
    </li>
  )
}
