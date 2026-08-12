import { useState } from 'react'
import siteConfig from '../data/siteConfig'

/**
 * 20 Karot logosu.
 *
 * Gerçek logo `public/images/logo/` altındadır ve GENİŞ BİR WORDMARK'tır:
 * içinde zaten "20 KAROT" yazısı ve "BETON DELME - KESME - KIRMA" alt satırı var.
 * Bu yüzden logo görseli yüklendiğinde YANINA AYRICA yazı basılmaz — yoksa
 * firma adı iki kez görünür.
 *
 *   logo-beyaz.webp → koyu zeminde (header, footer)
 *   logo.webp       → açık zeminde (kömür tonlu, aynı çizimin renklendirilmişi)
 *
 * Dosya yüklenemezse aşağıdaki gömülü SVG marka işareti + yazı bloğuna düşer,
 * yani kırık görsel ikonu asla çıkmaz.
 */

/** Yedek marka işareti — karot ucu motifi (eş merkezli halkalar + ışın). */
export function LogoMark({ className = 'w-10 h-10' }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label={`${siteConfig.companyName} logosu`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="11" fill="#14100F" />
      <circle cx="24" cy="24" r="14.5" fill="none" stroke="#C8A24A" strokeWidth="2.5" />
      <circle cx="24" cy="24" r="6" fill="none" stroke="#C8A24A" strokeWidth="2.5" />
      <path
        d="M24 9.5A14.5 14.5 0 0 1 38.5 24"
        fill="none"
        stroke="#8E2B40"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M24 18V9.5M24 30v8.5M18 24H9.5M30 24h8.5"
        stroke="#C8A24A"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.55"
      />
    </svg>
  )
}

/**
 * @param {'light'|'dark'} variant   light = koyu zeminde, dark = açık zeminde
 * @param {string} imgClassName      logo görselinin boyutu (yükseklik ver, genişlik auto)
 */
export default function Logo({
  variant = 'light',
  className = '',
  imgClassName = 'h-9 sm:h-10 w-auto',
  markClassName = 'w-10 h-10',
  showSloganOnFallback = true,
}) {
  const [imgFailed, setImgFailed] = useState(false)
  const src = variant === 'light' ? '/images/logo/logo-beyaz.webp' : '/images/logo/logo.webp'

  // Gerçek logo yüklendi → sadece logo. Yazı zaten görselin içinde.
  if (!imgFailed) {
    return (
      <img
        src={src}
        alt={`${siteConfig.companyName} — ${siteConfig.companySlogan}`}
        className={`${imgClassName} object-contain ${className}`}
        onError={() => setImgFailed(true)}
        width="300"
        height="100"
      />
    )
  }

  // Yedek: gömülü işaret + yazı
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <LogoMark className={`${markClassName} shrink-0`} />
      <span className="flex flex-col leading-tight">
        <span
          className={`font-bold text-lg tracking-wide ${
            variant === 'light' ? 'text-white' : 'text-dark'
          }`}
        >
          {siteConfig.companyShortName}
        </span>
        {showSloganOnFallback && (
          <span
            className={`text-xs font-medium tracking-wider ${
              variant === 'light' ? 'text-primary' : 'text-accent'
            }`}
          >
            {siteConfig.companySlogan}
          </span>
        )}
      </span>
    </span>
  )
}
