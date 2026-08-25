import { useState } from 'react'
import siteConfig from '../data/siteConfig'

/**
 * Denizli Tomay Halı Yıkama logosu.
 *
 * Gerçek logo `public/images/logo/` altına konur:
 *   logo-beyaz.webp → koyu zeminde (header, footer)
 *   logo.webp       → açık zeminde
 *
 * ┌──────────────────────────────────────────────────────────────────────────┐
 * │ DOSYADAKİ SAYDAM PAY — "logo hâlâ küçük" şikâyetinin gerçek sebebi       │
 * │ İkisi de 283×286 tuval, ama GÖRÜNÜR mürekkep yalnızca 273×112: üstte     │
 * │ 81px, altta 93px saydam boşluk var, yani kutunun %61'i boş (alfa kanalı  │
 * │ taranarak ölçüldü, 2026-08). Sonuç: CSS'te h-20 (80px) verilse bile      │
 * │ marka işareti ekranda ancak ~31px görünüyor. Header'ın 128px tavanı      │
 * │ (aşağıya bakın) yüzünden bu boy CSS ile en fazla ~38px'e çıkabilir.      │
 * │ Kalıcı çözüm CSS değil: dosyaları 273×112'ye kırpıp yeniden dışa         │
 * │ aktarmak ve aşağıdaki width/height değerlerini o ölçüye güncellemek.     │
 * │ Bu dosyaları başka hiçbir yer kullanmıyor (og-image.jpg ayrı), yani      │
 * │ kırpmanın JSON-LD/OG tarafına yan etkisi yok.                            │
 * └──────────────────────────────────────────────────────────────────────────┘
 *
 * ┌──────────────────────────────────────────────────────────────────────────┐
 * │ LOGO WORDMARK MI, AMBLEM Mİ? — bu ayrım kodu değiştiriyor                │
 * │ Aşağıdaki dal, gerçek logo yüklendiğinde YANINA AYRICA YAZI BASMAZ. Bu,  │
 * │ logonun içinde firma adının zaten yazılı olduğu (wordmark) varsayımına   │
 * │ dayanır. Konulacak logo yalnızca bir AMBLEM ise marka adı header ve      │
 * │ footer'da HİÇ GÖRÜNMEZ — o durumda koşul kaldırılıp yazı bloğu her       │
 * │ hâlde basılmalı.                                                         │
 * └──────────────────────────────────────────────────────────────────────────┘
 *
 * Dosya yüklenemezse aşağıdaki gömülü SVG marka işareti + yazı bloğuna düşer,
 * yani kırık görsel ikonu asla çıkmaz.
 */

/**
 * Yedek marka işareti — rulo halı kesiti.
 *
 * public/favicon.svg ile AYNI GEOMETRİ. İkisi ayrı ayrı çizilirse zamanla
 * ayrışıyor: devralınan iskelette aynı motif İKİ yerde (favicon ve burası)
 * bağımsız çizilmişti ve biri güncellenip diğeri kalmıştı. Bu işareti değiştirirseniz favicon.svg'yi de değiştirin.
 */
export function LogoMark({ className = 'w-10 h-10' }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label={`${siteConfig.companyName} logosu`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="11" fill="#0A1832" />
      <path
        d="M35 24a11 11 0 1 1-11-11h9"
        fill="none"
        stroke="#E2AC4A"
        strokeWidth="3.6"
        strokeLinecap="round"
      />
      <path
        d="M28.5 24a4.5 4.5 0 1 1-4.5-4.5h6"
        fill="none"
        stroke="#F6F3EC"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </svg>
  )
}
/**
 * @param {'light'|'dark'} variant   light = koyu zeminde, dark = açık zeminde
 * @param {string} imgClassName      logo görselinin boyutu
 *
 * BOYUT KURALI: yalnızca YÜKSEKLİK verilir, genişlik `w-auto` bırakılır.
 * Dosya 283×286, yani neredeyse KARE; sabit bir `w-` sınıfı görseli yatayda ezer.
 * Boyutu çağıran taraf belirler, çünkü header'da tavan var: header `fixed` ve
 * sayfa içerikleri `pt-32` (128px) ile başlıyor — ayrıntılı hesap Header.jsx'te.
 * Varsayılan, imgClassName geçilmeyen yeni bir kullanım için makul bir orta boy;
 * Header ve Footer kendi ölçülerini zaten geçiyor.
 */
export default function Logo({
  variant = 'light',
  className = '',
  imgClassName = 'h-14 sm:h-16 w-auto',
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
        /* Gerçek logo 283×286 — neredeyse KARE. Burada 300×100 yazıyordu
           (devralınan iskeletin geniş wordmark'ından kalma) ve yanlış oran,
           görsel inene kadar tarayıcının ayırdığı yeri bozuyordu: logo
           gelince satır zıplıyordu (CLS). */
        width="273"
        height="112"
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
