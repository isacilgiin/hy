import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackConversion, baglantiTikTuru } from '../utils/analytics'
import siteConfig from '../data/siteConfig'

/**
 * Tek sayfa uygulaması (SPA) olduğu için iki şey elle yapılmak zorunda:
 *
 * 1) SAYFA GÖRÜNTÜLEME: gtag yalnızca ilk yüklemede otomatik page_view gönderir.
 *    Kullanıcı menüden başka sayfaya geçtiğinde tarayıcı yeni bir sayfa
 *    yüklemediği için Analytics bunu göremez. Rota değişiminde elle gönderiyoruz.
 *
 * 2) DÖNÜŞÜM: telefon / WhatsApp / e-posta / harita bağlantılarının tıklanması.
 *    Her bağlantıya ayrı onClick eklemek yerine tek bir olay dinleyici
 *    (event delegation) kullanılıyor — sonradan eklenen bağlantılar da
 *    otomatik ölçülür, bir yeri unutma riski olmaz.
 *
 * Analytics kimlikleri tanımlı değilse bu bileşen hiçbir şey yapmaz.
 */
export default function ConversionTracking() {
  const { pathname } = useLocation()

  // Rota değişiminde sayfa görüntüleme
  useEffect(() => {
    if (typeof window.gtag !== 'function') return
    const { ga4, googleAds } = siteConfig.analytics
    const sayfa = {
      page_path: pathname,
      page_location: window.location.href,
      page_title: document.title,
    }
    if (ga4) window.gtag('config', ga4, sayfa)
    if (googleAds) window.gtag('config', googleAds, sayfa)
  }, [pathname])

  // Dönüşüm bağlantıları
  useEffect(() => {
    const onClick = (e) => {
      const link = e.target.closest?.('a[href]')
      if (!link) return
      const tur = baglantiTikTuru(link)
      if (tur) trackConversion(tur, { link_url: link.getAttribute('href') })
    }
    document.addEventListener('click', onClick, { capture: true })
    return () => document.removeEventListener('click', onClick, { capture: true })
  }, [])

  return null
}
