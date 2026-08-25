import { useEffect } from 'react'
import { trackConversion, baglantiTikTuru } from '../utils/analytics'

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
  /*
   * SAYFA GÖRÜNTÜLEME BURADAN KALDIRILDI — geri koymayın.
   *
   * Buradaydı ve iki hata üretiyordu; ikisi de sahte dataLayer ile ölçüldü:
   *   - snippet'in kendi page_view'ü ile çakışıp her açılışı İKİ kez sayıyordu
   *   - bu bileşen App.jsx ağacında sayfalardan ÖNCE geldiği için etkisi
   *     Seo'nunkinden önce koşuyor ve document.title hâlâ ÖNCEKİ sayfanınki
   *     oluyordu; GA4'e her iç gezinmede yanlış başlık gidiyordu
   * Şimdi tek kaynak: src/components/Seo.jsx, başlık yazıldıktan sonra.
   * Ayrıntı: src/utils/analytics.js > sayfaGoruntuleme()
   *
   * Bu bileşen artık YALNIZCA dönüşüm tıklamalarını dinliyor.
   */

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
