import { useCallback, useId, useRef, useState } from 'react'
import SmartImage from './SmartImage'

/**
 * Öncesi / Sonrası karşılaştırma sürgüsü.
 *
 * Neden bu iş için doğru bileşen: halı yıkamada sonucu anlatmak zordur, ama
 * göstermek kolaydır. İki ayrı fotoğrafı yan yana koymak da olurdu — sürgü
 * daha ikna edici çünkü İKİSİ DE AYNI KAREde, yani "başka halı çekilmiş"
 * şüphesini kendiliğinden ortadan kaldırıyor. Şart: iki fotoğraf AYNI AÇIDAN
 * ve AYNI ışıkta çekilmiş olmalı; değilse sürgü hileli görünür ve ters teper.
 *
 * Görsel yoksa kırılmaz: SmartImage yer tutucu gösterir, sürgü yine çalışır.
 *
 * Erişilebilirlik — bu bileşenin asıl zor tarafı:
 *   • Tutamak gerçek bir <input type="range">. Fare/dokunma için görünmez ama
 *     klavye ve ekran okuyucu için TAM işlevsel. Kendi div'imize role="slider"
 *     yazıp ok tuşlarını elle yönetmek yerine tarayıcının hazır davranışını
 *     kullanıyoruz: ok tuşları, Home/End, sürükleme, hepsi bedava geliyor.
 *   • Sürgü yalnızca bir SUNUM aracı olduğu için iki görselin ikisi de DOM'da
 *     duruyor; "sonrası" görseli aria-hidden DEĞİL, çünkü ekran okuyucu
 *     kullanan biri için de sonuç bilgisi var.
 */
export default function BeforeAfter({
  oncesi,
  sonrasi,
  oncesiAlt = 'Yıkama öncesi',
  sonrasiAlt = 'Yıkama sonrası',
  baslik,
  aciklama,
  baslangic = 50,
  className = '',
}) {
  const [oran, setOran] = useState(baslangic)
  const kapsayici = useRef(null)
  const id = useId()

  // Fare/dokunma ile sürükleme. Pointer Events tek API'de üçünü de kapsıyor
  // (fare, dokunma, kalem) — ayrı mouse/touch dinleyicisi gerekmiyor.
  const konumdanOran = useCallback((clientX) => {
    const kutu = kapsayici.current?.getBoundingClientRect()
    if (!kutu || !kutu.width) return null
    return Math.min(100, Math.max(0, ((clientX - kutu.left) / kutu.width) * 100))
  }, [])

  const surukle = useCallback(
    (e) => {
      const yeni = konumdanOran(e.clientX)
      if (yeni !== null) setOran(yeni)
    },
    [konumdanOran]
  )

  const basla = useCallback(
    (e) => {
      // Yalnızca birincil düğme; sağ tık sürgüyü kaydırmasın.
      if (e.button && e.button !== 0) return
      e.currentTarget.setPointerCapture?.(e.pointerId)
      surukle(e)
    },
    [surukle]
  )

  const hareket = useCallback(
    (e) => {
      // pointercapture aktifken buttons=1 olur; basılı değilken sürüklemeyiz.
      if (e.buttons !== 1) return
      surukle(e)
    },
    [surukle]
  )

  return (
    <figure className={`w-full ${className}`}>
      <div
        ref={kapsayici}
        onPointerDown={basla}
        onPointerMove={hareket}
        className="relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl border border-dark/10 bg-dark touch-pan-y"
      >
        {/* SONRASI — altta, tam genişlik */}
        <SmartImage
          src={sonrasi}
          alt={sonrasiAlt}
          icon="carpetRoll"
          label="Sonrası"
          className="absolute inset-0 h-full w-full"
          draggable={false}
        />

        {/* ÖNCESİ — üstte, clip-path ile soldan kırpılıyor.
            clip-path seçildi çünkü genişlik değiştirmek görseli SIKIŞTIRIR;
            kırpma iki tarafın da aynı ölçekte kalmasını garanti eder. */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - oran}% 0 0)` }}
        >
          <SmartImage
            src={oncesi}
            alt={oncesiAlt}
            icon="carpetRoll"
            label="Öncesi"
            className="absolute inset-0 h-full w-full"
            draggable={false}
          />
        </div>

        {/* Etiketler */}
        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-dark/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
          Öncesi
        </span>
        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-dark/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
          Sonrası
        </span>

        {/* Ayırıcı çizgi + tutamak görseli */}
        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-primary"
          style={{ left: `${oran}%` }}
          aria-hidden="true"
        >
          <span className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary bg-dark shadow-lg">
            <svg viewBox="0 0 24 24" className="h-5 w-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 6 4 12l5 6M15 6l5 6-5 6" />
            </svg>
          </span>
        </div>

        {/* Klavye + ekran okuyucu için gerçek kontrol. Görünmez ama odaklanınca
            halka çıkıyor; ring-primary koyu zeminde 8.70:1 ile okunuyor. */}
        <label htmlFor={id} className="sr-only">
          Öncesi ve sonrası karşılaştırma sürgüsü
        </label>
        <input
          id={id}
          type="range"
          min="0"
          max="100"
          step="1"
          value={Math.round(oran)}
          onChange={(e) => setOran(Number(e.target.value))}
          aria-valuetext={`Öncesi görseli %${Math.round(oran)} görünür`}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/60"
        />
      </div>

      {(baslik || aciklama) && (
        <figcaption className="mt-4">
          {baslik && <h3 className="text-lg font-semibold text-dark">{baslik}</h3>}
          {aciklama && <p className="mt-1 text-sm leading-relaxed text-dark/70">{aciklama}</p>}
        </figcaption>
      )}
    </figure>
  )
}
