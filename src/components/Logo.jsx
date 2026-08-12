import { useState } from 'react'
import siteConfig from '../data/siteConfig'

/**
 * 20 Karot logosu.
 *
 * `public/images/logo/logo-beyaz.svg` (koyu zemin) veya `logo.svg` (açık zemin)
 * dosyası varsa onu kullanır. Dosya yoksa/yüklenemezse aşağıdaki gömülü SVG
 * marka işaretine düşer — yani kırık görsel ikonu ASLA çıkmaz.
 *
 * Gerçek logoyu eklemek için: dosyayı public/images/logo/ altına at, başka
 * hiçbir şey değiştirmene gerek yok.
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
 * @param {'light'|'dark'} variant  light = koyu zeminde (beyaz yazı), dark = açık zeminde
 * @param {boolean} showText        yazı bloğunu göster
 * @param {boolean} showSlogan      sloganı göster
 */
export default function Logo({
  variant = 'light',
  showText = true,
  showSlogan = true,
  className = '',
  markClassName = 'w-10 h-10',
  textClassName = '',
}) {
  const [imgFailed, setImgFailed] = useState(false)
  const src = variant === 'light' ? '/images/logo/logo-beyaz.svg' : '/images/logo/logo.svg'

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      {imgFailed ? (
        <LogoMark className={`${markClassName} shrink-0`} />
      ) : (
        <img
          src={src}
          alt={`${siteConfig.companyName} logosu`}
          className={`${markClassName} shrink-0 object-contain`}
          onError={() => setImgFailed(true)}
          width="40"
          height="40"
        />
      )}

      {showText && (
        <span className={`flex flex-col leading-tight ${textClassName}`}>
          <span
            className={`font-bold text-lg tracking-wide ${
              variant === 'light' ? 'text-white' : 'text-dark'
            }`}
          >
            {siteConfig.companyShortName}
          </span>
          {showSlogan && (
            <span
              className={`text-xs font-medium tracking-wider ${
                variant === 'light' ? 'text-primary' : 'text-accent'
              }`}
            >
              {siteConfig.companySlogan}
            </span>
          )}
        </span>
      )}
    </span>
  )
}
