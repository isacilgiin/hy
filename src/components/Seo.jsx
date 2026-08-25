import { useEffect } from 'react'
import siteConfig from '../data/siteConfig'

/**
 * Sayfa bazlı SEO etiketleri.
 *
 * NEDEN GEREKLİ: index.html tek bir statik dosya. İçindeki
 * `<link rel="canonical" href="https://denizlihaliyikama.net.tr/">` etiketi TÜM sayfalarda
 * aynı kalıyordu — yani her alt sayfa Google'a "asıl adresim ana
 * sayfa" diyordu. Bu, alt sayfaların indekslenmesini doğrudan engelleyen bir hata.
 * Bu bileşen her sayfada canonical + başlık + açıklama + OG etiketlerini günceller.
 *
 * TRAILING SLASH: `path` sondaki eğik çizgiyle verilir (örn. '/hizmetler/hali-yikama/').
 * Eski WordPress sitesinde indekslenmiş URL'ler bu formatta; canonical'ın onlarla
 * birebir eşleşmesi taşınma sırasında sıralama kaybını önler.
 */

/**
 * Google, arama sonucunda açıklamayı ~155-160 karakterde keser. Daha uzun
 * açıklama yazmak zararsız ama sonuçta "..." ile kesilir ve cümle yarım kalır.
 * Kelime sınırında kesip anlamlı bitmesini sağlıyoruz.
 */
const ACIKLAMA_SINIRI = 155

function kisalt(metin, sinir = ACIKLAMA_SINIRI) {
  if (!metin || metin.length <= sinir) return metin
  const kesik = metin.slice(0, sinir)
  const sonBosluk = kesik.lastIndexOf(' ')
  return `${kesik.slice(0, sonBosluk > 0 ? sonBosluk : sinir).replace(/[.,;:\s]+$/, '')}…`
}

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

/**
 * Build sırasında gömülen sayfaya özel JSON-LD'leri kaldırır.
 *
 * vite.config.js her rota için statik HTML'e Service/FAQPage/BreadcrumbList
 * şemalarını basıyor — JavaScript çalışmadığında da şema bulunsun diye. React
 * yüklenince aşağıdaki upsertJsonLd aynı şemaları TEKRAR eklediği için sayfada
 * iki kopya oluşuyordu. Bunlar `data-seo-build` ile işaretli; React devraldığı
 * anda siliniyorlar. index.html'deki LocalBusiness şeması işaretsiz olduğu için
 * yerinde kalır.
 */
function buildSemalariniTemizle() {
  document.head.querySelectorAll('script[data-seo-build]').forEach((el) => el.remove())
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

export default function Seo({ title, description, path = '/', image, jsonLd, kanonikYok = false }) {
  useEffect(() => {
    const url = `${siteConfig.url}${path}`
    const desc = kisalt(description || siteConfig.seo.defaultDescription)
    const ogImage = image || `${siteConfig.url}/images/logo/og-image.jpg`

    buildSemalariniTemizle()

    /**
     * document.title bir DOMString: undefined verilirse "undefined" DİZESİNE
     * çevirir, hata vermez. Blog yazılarında tam olarak bu oldu — bileşen
     * var olmayan bir alanı (icerik.seoTitle) geçiriyordu ve sekme başlığı
     * hidrasyondan sonra düz "undefined" kalıyordu. Build HTML'i doğru
     * olduğu için de kimse fark etmedi; bozulma yalnızca React devraldıktan
     * SONRA, yani Googlebot'un render edip indekslediği anda ortaya çıkıyor.
     *
     * Başlık yoksa build'in yazdığı doğru başlığa DOKUNMAMAK, yanlış bir
     * başlık yazmaktan iyidir.
     */
    if (title) document.title = title
    upsertMeta('name', 'description', desc)
    /**
     * kanonikYok — 404 için.
     *
     * Build 404.html'den canonical'ı BİLEREK siliyor (gerekçesi
     * vite.config.js'te: 404 sayfasının kanonik bir karşılığı yoktur).
     * Ama upsertLink etiket yoksa YARATIYOR, yani React yüklenince her
     * olmayan adrese canonical=/404/ geri geliyordu — build'in kararını
     * hidrasyon geri alıyor. noindex yerinde kaldığı için felaket değil,
     * yine de iki taraf aynı şeyi söylemeli.
     */
    if (kanonikYok) {
      // SADECE yazmamak yetmiyor: SPA gezinmesinde onceki sayfanin canonical
      // etiketi DOM da kaliyor ve 404 ekraninda baska bir sayfayi isaret ediyor.
      document.head.querySelector('link[rel="canonical"]')?.remove()
    } else {
      upsertLink('canonical', url)
    }

    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', desc)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', ogImage)

    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', desc)
    upsertMeta('name', 'twitter:image', ogImage)

    upsertJsonLd('page', jsonLd)

    return () => upsertJsonLd('page', null)
  }, [title, description, path, image, jsonLd, kanonikYok])

  return null
}
