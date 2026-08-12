import { useEffect } from 'react'
import siteConfig from '../data/siteConfig'

/**
 * Sayfa bazlı SEO etiketleri.
 *
 * NEDEN GEREKLİ: index.html tek bir statik dosya. İçindeki
 * `<link rel="canonical" href="https://20karot.com.tr/">` etiketi TÜM sayfalarda
 * aynı kalıyordu — yani /hizmetler/karot/ sayfası Google'a "asıl adresim ana
 * sayfa" diyordu. Bu, alt sayfaların indekslenmesini doğrudan engelleyen bir hata.
 * Bu bileşen her sayfada canonical + başlık + açıklama + OG etiketlerini günceller.
 *
 * TRAILING SLASH: `path` sondaki eğik çizgiyle verilir (örn. '/hizmetler/karot/').
 * Eski WordPress sitesinde indekslenmiş URL'ler bu formatta; canonical'ın onlarla
 * birebir eşleşmesi taşınma sırasında sıralama kaybını önler.
 */

function upsertMeta(attr, key, content) {
  if (!content) return
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/** Sayfaya özel JSON-LD (Service, Place, FAQ ...) ekler/günceller. */
function upsertJsonLd(id, data) {
  const existing = document.head.querySelector(`script[data-seo="${id}"]`)
  if (!data) {
    existing?.remove()
    return
  }
  const el = existing ?? document.createElement('script')
  el.type = 'application/ld+json'
  el.setAttribute('data-seo', id)
  el.textContent = JSON.stringify(data)
  if (!existing) document.head.appendChild(el)
}

export default function Seo({ title, description, path = '/', image, jsonLd }) {
  useEffect(() => {
    const url = `${siteConfig.url}${path}`
    const desc = description || siteConfig.seo.defaultDescription
    const ogImage = image || `${siteConfig.url}/images/logo/og-image.jpg`

    document.title = title
    upsertMeta('name', 'description', desc)
    upsertLink('canonical', url)

    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', desc)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', ogImage)

    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', desc)
    upsertMeta('name', 'twitter:image', ogImage)

    upsertJsonLd('page', jsonLd)

    return () => upsertJsonLd('page', null)
  }, [title, description, path, image, jsonLd])

  return null
}
