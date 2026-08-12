import { useState } from 'react'
import Icon from './Icon'
import siteConfig from '../data/siteConfig'
import { mapEmbedUrl, mapsUrl } from '../utils/links'

/**
 * Tıklayınca yüklenen Google Haritalar gömme bileşeni.
 *
 * NEDEN: Gömülü harita iframe'i sayfa açılır açılmaz yüklendiğinde İletişim
 * sayfası ~3,7 MB indiriyor ve tam yüklenmesi ~7,2 saniye sürüyordu. Sayfanın
 * geri kalanı 300 KB. Yani ziyaretçilerin çoğu, hiç bakmayacakları bir harita
 * için sayfanın 10 katı veri indiriyordu — mobilde bu doğrudan terk demek.
 *
 * Bu bileşen önce hafif bir önizleme gösterir; harita ancak kullanıcı isterse
 * yüklenir. Adres, yol tarifi bağlantısı ve telefon zaten görünür durumda
 * olduğu için harita açılmasa da sayfa işini yapıyor.
 */
export default function MapEmbed({ className = '' }) {
  const [yukle, setYukle] = useState(false)

  if (yukle) {
    return (
      <iframe
        src={mapEmbedUrl()}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`${siteConfig.companyName} konum haritası`}
        className={className}
      />
    )
  }

  return (
    <div className={`relative w-full h-full bg-dark overflow-hidden ${className}`}>
      {/* Harita yerine hafif bir zemin */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(200,162,74,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(200,162,74,.6) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        aria-hidden="true"
      />
      <div className="absolute -bottom-1/4 -right-1/4 w-2/3 h-2/3 rounded-full bg-accent/25 blur-3xl" aria-hidden="true" />

      <div className="relative h-full flex flex-col items-center justify-center text-center gap-4 p-8">
        <span className="w-14 h-14 rounded-2xl bg-primary/15 text-primary flex items-center justify-center">
          <Icon name="mapPin" className="w-7 h-7" strokeWidth={1.75} />
        </span>
        <p className="text-white font-semibold">{siteConfig.address.full}</p>
        <p className="text-white/50 text-sm max-w-xs">
          Harita Google&apos;dan yüklenir. Sayfayı hızlı açmak için sadece
          istediğinizde gelir.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mt-1">
          <button type="button" onClick={() => setYukle(true)} className="btn-primary text-sm px-6 py-2.5">
            <Icon name="map" className="w-4 h-4" strokeWidth={2} />
            Haritayı Göster
          </button>
          <a
            href={mapsUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm px-6 py-2.5"
          >
            <Icon name="arrowRight" className="w-4 h-4" strokeWidth={2} />
            Yol Tarifi Al
          </a>
        </div>
      </div>
    </div>
  )
}
