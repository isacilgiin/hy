import siteConfig from '../data/siteConfig'

/** Koordinat girildiyse pin'e, girilmediyse adres aramasına gider. */
export function mapsUrl() {
  const { geo, address, companyName } = siteConfig
  const query =
    geo.lat != null && geo.lng != null
      ? `${geo.lat},${geo.lng}`
      : `${companyName} ${address.full}`
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

/**
 * Contact sayfasındaki gömülü harita. API anahtarı gerektirmez.
 * Öncelik sırası: işletme profilinin kendi embed adresi → koordinat → adres araması.
 */
export function mapEmbedUrl() {
  const { geo, address, companyName } = siteConfig
  if (geo.embedSrc) return geo.embedSrc
  const query =
    geo.lat != null && geo.lng != null
      ? `${geo.lat},${geo.lng}`
      : `${companyName} ${address.full}`
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&hl=tr&z=16&output=embed`
}

/** Ön yazılı WhatsApp mesajı. Numara tek yerden (siteConfig) gelir. */
export function whatsappUrl(text) {
  const base = siteConfig.social.whatsapp || `https://wa.me/${siteConfig.phoneRaw.replace(/\D/g, '')}`
  return text ? `${base}?text=${encodeURIComponent(text)}` : base
}

/** Footer/Header'da yalnızca dolu olan sosyal hesaplar gösterilsin diye. */
export function activeSocials() {
  const { social } = siteConfig
  return [
    { key: 'instagram', url: social.instagram, icon: 'instagram', label: 'Instagram', hover: 'hover:bg-primary hover:text-dark' },
    { key: 'facebook', url: social.facebook, icon: 'facebook', label: 'Facebook', hover: 'hover:bg-primary hover:text-dark' },
    { key: 'youtube', url: social.youtube, icon: 'youtube', label: 'YouTube', hover: 'hover:bg-primary hover:text-dark' },
    { key: 'whatsapp', url: social.whatsapp, icon: 'whatsapp', label: 'WhatsApp', hover: 'hover:bg-green-600 hover:text-white' },
  ].filter((s) => Boolean(s.url))
}
