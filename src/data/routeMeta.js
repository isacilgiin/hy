/**
 * Her rotanın SEO meta bilgisi — YALNIZCA BUILD SIRASINDA kullanılır.
 *
 * ┌──────────────────────────────────────────────────────────────────────────┐
 * │ BU DOSYAYI REACT BİLEŞENLERİNDEN İMPORT ETMEYİN.                        │
 * │ İçinde serviceContent.js (97 KB) ve serviceAreas.js (78 KB) import       │
 * │ ediliyor; bir bileşen bunu import ederse o metinler tekrar ana pakete    │
 * │ girer ve kod bölmenin anlamı kalmaz.                                     │
 * │ Sayfalar meta bilgisini kendi <Seo> çağrılarından verir.                 │
 * └──────────────────────────────────────────────────────────────────────────┘
 *
 * NEDEN GEREKLİ: Site tek sayfa uygulaması (SPA). Sunucu her adres için aynı
 * index.html'i döndürdüğü için, JavaScript çalıştırmayan istemciler TÜM
 * sayfalarda ana sayfanın başlığını/açıklamasını görüyordu. WhatsApp, Facebook
 * ve Twitter link önizlemeleri JavaScript ÇALIŞTIRMAZ — yani bir hizmet
 * sayfasının linki paylaşıldığında önizlemede ana sayfa görünüyordu.
 *
 * vite.config.js bu dosyayı kullanarak her rota için ayrı bir index.html
 * üretir; meta etiketleri, canonical ve JSON-LD doğru şekilde gömülü gelir.
 */

import siteConfig from './siteConfig.js'
import services from './services.js'
import serviceContent from './serviceContent.js'
import serviceAreas from './serviceAreas.js'
import { faq } from './faq.js'
import { gizlilik, sartlar } from './legal.js'

const { url, companyName, phone, phoneRaw, address, seo } = siteConfig
const ogImage = `${url}/images/logo/og-image.jpg`

/** Seo.jsx ile AYNI kısaltma kuralı — iki taraf birebir aynı çıktıyı vermeli. */
export const ACIKLAMA_SINIRI = 155

export function kisalt(metin, sinir = ACIKLAMA_SINIRI) {
  if (!metin || metin.length <= sinir) return metin
  const kesik = metin.slice(0, sinir)
  const sonBosluk = kesik.lastIndexOf(' ')
  return `${kesik.slice(0, sonBosluk > 0 ? sonBosluk : sinir).replace(/[.,;:\s]+$/, '')}…`
}

const saglayici = {
  '@type': 'LocalBusiness',
  '@id': `${url}/#localbusiness`,
  name: companyName,
  telephone: phoneRaw,
}

const tumBolgeler = serviceAreas.map((a) => ({
  '@type': 'City',
  name: `${a.name}, ${address.city}`,
}))

function faqSemasi(sorular) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: sorular.map((s) => ({
      '@type': 'Question',
      name: s.q,
      acceptedAnswer: { '@type': 'Answer', text: s.a },
    })),
  }
}

/** Sabit sayfalar */
const sabitler = [
  {
    path: '/',
    title: seo.defaultTitle,
    description: seo.defaultDescription,
  },
  {
    path: '/hizmetler/',
    title: `Karot Hizmetleri | Denizli Beton Delme ve Kesme — ${companyName}`,
    description:
      "Denizli'de karot, beton delme, beton kesme, beton kırma, filiz ekimi, ankraj ve kimyasal dübel hizmetleri. Ücretsiz keşif ve net fiyat teklifi.",
  },
  {
    path: '/hizmet-bolgeleri/',
    title: `Hizmet Bölgeleri | Denizli ve Tüm İlçeler — ${companyName}`,
    description: `Denizli il genelinde ${serviceAreas.length} ilçede karot, beton delme, kesme ve kırma hizmeti. Merkezefendi, Pamukkale, Honaz, Sarayköy, Çivril, Acıpayam ve tüm ilçeler.`,
  },
  {
    path: '/projeler/',
    title: `Projelerimiz | Denizli Karot ve Beton Kesme İşleri — ${companyName}`,
    description:
      'Denizli ve çevre ilçelerde tamamladığımız karot, beton delme, kesme ve kırma projelerinden örnekler.',
  },
  {
    path: '/hakkimizda/',
    title: `Hakkımızda | ${companyName} — Denizli Karot`,
    description: `${companyName}, Denizli ve çevre ilçelerde beton delme, kesme ve kırma hizmetleri veren karot firmasıdır. Önce ücretsiz keşif, sonra net fiyat.`,
  },
  {
    path: '/iletisim/',
    title: `İletişim | ${companyName} — Denizli Karot`,
    description: `Denizli karot hizmetleri için bize ulaşın. Telefon ${phone}, WhatsApp ve e-posta. Adres: ${address.full}. Ücretsiz keşif.`,
  },
  {
    path: '/sikca-sorulan-sorular/',
    title: `Sıkça Sorulan Sorular | Karot, Beton Delme ve Kesme — ${companyName}`,
    description: `Karot, beton delme, kesme ve kırma hakkında en çok sorulan ${faq.length} soru ve cevabı. Fiyat, süre, toz ve titreşim, taşıyıcı elemana müdahale, moloz kaldırma.`,
    jsonLd: faqSemasi(faq),
  },
  ...[gizlilik, sartlar].map((s) => ({
    path: `/${s.slug}/`,
    title: `${s.baslik} | ${companyName}`,
    description: s.ozet,
  })),
]

/** Hizmet detay sayfaları */
const hizmetRotalari = services.map((s) => {
  const icerik = serviceContent[s.slug] ?? {}
  const hizmetSemasi = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: s.title,
    description: icerik.girisMetni?.[0] ?? s.description,
    serviceType: s.title,
    url: `${url}/hizmetler/${s.slug}/`,
    provider: saglayici,
    areaServed: tumBolgeler,
  }

  return {
    path: `/hizmetler/${s.slug}/`,
    title: s.seoTitle ?? `Denizli ${s.title} — ${companyName}`,
    description: `Denizli ve çevre ilçelerde ${s.title.toLowerCase()} hizmeti. ${s.shortDescription} Ücretsiz keşif için ${phone}.`,
    // Sosyal önizlemede WebP bazı istemcilerde (özellikle WhatsApp) sorun
    // çıkarıyor; her hizmet için 1200x630 markalı JPG üretildi.
    image: `${url}/images/og/${s.slug}.jpg`,
    jsonLd: icerik.sss?.length ? [hizmetSemasi, faqSemasi(icerik.sss)] : hizmetSemasi,
  }
})

/** Hizmet bölgesi sayfaları */
const bolgeRotalari = serviceAreas.map((a) => {
  // ServiceAreaDetail.jsx ile aynı kural: "Denizli (Merkez)" ana sayfayla aynı
  // anahtar kelimeyi hedeflemesin diye "Denizli Merkez" olur.
  const seoAd = a.slug === 'denizli-karot' ? 'Denizli Merkez' : a.name.replace(/\s*\(.*?\)/, '')

  const hizmetSemasi = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${a.name} Karot — Beton Delme, Kesme ve Kırma`,
    serviceType: 'Karot, beton delme, beton kesme, beton kırma',
    provider: saglayici,
    areaServed: { '@type': 'City', name: `${a.name}, ${address.city}` },
    url: `${url}/hizmet-bolgeleri/${a.slug}/`,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${a.name} Karot Hizmetleri`,
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: `${a.name} ${s.title}` },
      })),
    },
  }

  return {
    path: `/hizmet-bolgeleri/${a.slug}/`,
    title: `${seoAd} Karot | Beton Delme, Kesme, Kırma — ${companyName}`,
    description: `${seoAd} karot hizmeti: beton delme, beton kesme, beton kırma, filiz ekimi ve ankraj. Ücretsiz keşif ve net fiyat teklifi için ${phone}.`,
    jsonLd: [hizmetSemasi, faqSemasi(a.sss)],
  }
})

const rotalar = [...sabitler, ...hizmetRotalari, ...bolgeRotalari].map((r) => ({
  ...r,
  description: kisalt(r.description),
  image: r.image ?? ogImage,
  canonical: `${url}${r.path}`,
}))

export default rotalar
