import siteConfig from '../data/siteConfig'

/**
 * Google Analytics 4 olayları + Google Ads dönüşüm takibi.
 *
 * NEDEN ÖNEMLİ: Google Ads'e para veriyorsanız ama dönüşüm ölçmüyorsanız,
 * Google hangi tıklamanın işe yaradığını bilmez; teklif optimizasyonu
 * (Maksimum dönüşüm, Hedef EBM) çalışmaz ve bütçe boşa gider.
 * Bu sitede "dönüşüm" = telefonu tıklamak, WhatsApp'a geçmek, formu göndermek.
 *
 * Kurulum: siteConfig.analytics içine
 *   ga4: 'G-XXXXXXXXXX'
 *   googleAds: 'AW-XXXXXXXXX'
 *   conversions: { telefon: 'AbCdEfGhIj', whatsapp: '...', form: '...' }
 * Dönüşüm etiketlerini Google Ads > Hedefler > Dönüşümler > (dönüşüm adı) >
 * "Etiketi ayarla" ekranındaki `send_to` değerinin BÖLÜ işaretinden SONRAKİ
 * kısmından alırsınız.
 *
 * Hiçbiri tanımlı değilse bu dosya sessizce hiçbir şey yapmaz — hata vermez.
 */

const OLAY_ADLARI = {
  telefon: 'telefon_tikla',
  whatsapp: 'whatsapp_tikla',
  form: 'form_gonder',
  eposta: 'eposta_tikla',
  harita: 'harita_tikla',
}

export function trackConversion(tur, ekstra = {}) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return

  const { googleAds, conversions } = siteConfig.analytics

  // 1) GA4 olayı — ga4 tanımlıysa her zaman gönderilir
  window.gtag('event', OLAY_ADLARI[tur] ?? tur, ekstra)

  // 2) Google Ads dönüşümü — yalnızca hesap kimliği VE etiket tanımlıysa
  const etiket = conversions?.[tur]
  if (googleAds && etiket) {
    window.gtag('event', 'conversion', { send_to: `${googleAds}/${etiket}` })
  }
}

/**
 * Sitedeki TÜM telefon / WhatsApp / e-posta / harita bağlantılarını tek yerden
 * yakalar. Her bağlantıya ayrı ayrı onClick eklemek yerine olay delegasyonu
 * kullanılıyor; böylece sonradan eklenen bağlantılar da otomatik ölçülür ve
 * bir yeri unutma riski kalmaz.
 */
export function baglantiTikTuru(el) {
  const href = el.getAttribute('href') || ''
  if (href.startsWith('tel:')) return 'telefon'
  if (href.includes('wa.me') || href.includes('api.whatsapp.com')) return 'whatsapp'
  if (href.startsWith('mailto:')) return 'eposta'
  if (href.includes('google.com/maps') || href.includes('maps.app.goo.gl')) return 'harita'
  return null
}
