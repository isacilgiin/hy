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
import serviceAreas, { zoneContent, ilceler } from './serviceAreas.js'
import { faq } from './faq.js'
import { gizlilik, sartlar } from './legal.js'
import blog from './blog.js'
import blogContent from './blogContent.js'
import { hikaye } from './about.js'

const { url, companyName, companyShortName, phone, phoneRaw, address, seo } = siteConfig
const ogImage = `${url}/images/logo/og-image.jpg`

/** Seo.jsx ile AYNI kısaltma kuralı — iki taraf birebir aynı çıktıyı vermeli. */
/**
 * Markdown bağlantı sözdizimini düz metne indirger: "[çıpa](/yol/)" -> "çıpa".
 *
 * blogContent.js'te iç bağlantılar markdown biçiminde yazılıyor ve BlogPost.jsx
 * onları <Link>'e çeviriyor. Ama aynı metin İKİ yere daha gidiyor: JS'siz
 * istemcinin gördüğü noscript gövdesi ve Google'a gönderilen FAQPage şeması.
 * O iki yerde sözdizimi ham görünür — hem okunmaz hem de render edilen
 * sayfadan farklı olur. Çıpa metni korunur, yalnızca sözdizimi atılır.
 */
export const duzMetin = (t) => String(t ?? '').replace(/\[([^\]]+)\]\(\/[^)\s]+\)/g, '$1')

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

// areaServed tek idari alan — gerekçe vite.config.js'te yazılı, ikisi AYNI
// değeri üretmek zorunda: Seo.jsx build'de gömülen JSON-LD bloğunu silip
// kendi kopyasını koyuyor, saparlarsa render öncesi/sonrası şema değişir.
const tumBolgeler = { '@type': 'AdministrativeArea', name: address.city }

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

/**
 * BreadcrumbList şeması.
 *
 * Sitede 38 sayfada GÖRSEL breadcrumb vardı ama şeması hiç yoktu. Breadcrumb,
 * Google'da hâlâ canlı olan zengin sonuçlardan biri: arama sonucunda ham URL
 * yerine "denizlihaliyikama.net.tr › Hizmetler › Koltuk Yıkama" yolunu gösterir.
 */
function kirintiSemasi(parcalar) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ ad: 'Ana Sayfa', yol: '/' }, ...parcalar].map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: p.ad,
      item: `${url}${p.yol}`,
    })),
  }
}

/** Sabit sayfalar */
const sabitler = [
  {
    path: '/',
    title: seo.defaultTitle,
    description: seo.defaultDescription,
    h1: `${address.city}'de ${siteConfig.sector.baslikHizmetleri}`,
    govde: [seo.defaultDescription],
  },
  {
    path: '/hizmetler/',
    /**
     * Başlık HİZMETLE başlar, şehirle değil.
     *
     * Hedef sorgu "halı yıkama denizli" biçiminde geliyor, "denizli halı yıkama"
     * kadar sık ve Google başlığın ilk kelimelerine daha çok ağırlık veriyor.
     * Site bu sorguda 5-6. sayfadaydı; başlık kalıbı bu yüzden değişti.
     *
     * "Halı Yıkama Denizli" ile BAŞLAMIYOR, bilerek: o sorguyu ANA SAYFA
     * sahipleniyor (`seo.defaultTitle`) ve iki sayfayı aynı sorguya sürmek
     * ikisini birden zayıflatır — services.js'teki yamyamlık notunun aynısı.
     * Bu sayfa kardeş sorguları alıyor: "koltuk yıkama denizli",
     * "perde yıkama denizli", "yorgan yıkama denizli".
     */
    title: `Koltuk, Perde ve Yorgan Yıkama Denizli | ${companyShortName}`,
    description:
      "Denizli'de halı, el dokuma halı, shaggy, koltuk, yatak, stor perde ve yorgan yıkama. Adresinizden ücretsiz alıyor, ambalajlı teslim ediyoruz.",
    h1: `${address.city}'de Verdiğimiz Yıkama Hizmetleri`,
    // Bu paragraflar Services.jsx'teki liste bölümünün DÜZ METİN karşılığı.
    // İkisi aynı içeriği anlatmak zorunda: noscript gövdesi render edilen
    // sayfadan farklı şey söylerse cloaking olur. Biri değişirse diğeri de.
    govde: [
      'Yıkadığımız tekstil iki gruba ayrılıyor: tesise getirilenler ve yerinde temizlenenler. Halı, yorgan ve perde araçla alınıp fabrikada yıkanıyor; koltuk ve yatak taşınmadığı için ekip adrese geliyor. Hangi grupta olduğu işin kendisinden değil, eşyanın taşınabilirliğinden belli oluyor.',
      'Halılarda program halının cinsine göre değişiyor. Makine halısı standart fırça sertliğiyle yıkanırken el dokuma ve yün halı düşük ısı ile yumuşak fırça istiyor; ipek ve Nepal halılarda ıslanma süresi sınırlı tutuluyor, shaggy ve uzun tüylülerde ise fırça ayarı tüy uzunluğuna göre kuruluyor. Aynı makinede yıkanıyorlar, aynı ayarla değil.',
      'Yerinde yapılan işlerde yöntem tamamen farklı: koltuk ve yatak yüksek basınçlı vakumlu üniteyle temizleniyor. Burada belirleyici olan ıslatma değil geri emiş — kumaşın içinde kalan deterjan, temizlenen eşyayı daha hızlı kirletiyor.',
      'Stor ve zebra perdeler mekanizmalı olduğu için ultrasonik makinede, katlanmadan yıkanıyor; sökme ve tekrar takma bize ait. Yorgan ve battaniyeler ise ev tipi makinede dönemedikleri için endüstriyel makinede yıkanıyor.',
      'Hangisinin gerektiğinden emin değilseniz aramanız yeterli: halının cinsini ve ölçüsünü söylediğinizde uygun programı ve süreyi baştan iletiyoruz.',
    ],
    kirintilar: [{ ad: 'Hizmetler', yol: '/hizmetler/' }],
  },
  {
    path: '/hizmet-bolgeleri/',
    title: `Hizmet Bölgeleri | Denizli Tüm İlçeler — ${companyShortName}`,
    description: `Denizli il genelinde ${ilceler.length} ilçede halı, koltuk ve perde yıkama. Merkezefendi, Pamukkale, Honaz, Sarayköy, Çivril, Acıpayam ve tüm ilçeler.`,
    h1: `${address.city} Genelinde Hizmet Verdiğimiz İlçeler`,
    // ServiceAreas.jsx'teki "Bölgeye Göre Nasıl Çalışıyoruz?" bölümünün düz
    // metin karşılığı. Bölge metinleri zoneContent'ten OKUNUYOR, kopyalanmıyor:
    // aynı cümleler hem burada, hem hub sayfasında, hem de ilçe detay
    // sayfalarındaki "Nasıl çalışıyoruz?" kutusunda kullanılıyor. Tek kaynak.
    govde: [
      `Denizli'nin ${ilceler.length} ilçesinin tamamına gidiyoruz. Değişen şey hizmetin kendisi değil, planlaması: mesafe arttıkça alma ve teslimi tek gidişte toplayacak şekilde kuruyoruz.`,
      ...Object.keys(zoneContent).map(
        (z) =>
          `${zoneContent[z].grupAdi} — ${ilceler.filter((a) => a.zone === z).length} ilçe: ${zoneContent[z].howWeWork}`
      ),
      'Her ilçenin kendi sayfasında o bölgeden gelen halının ne olduğu, alma-teslimin nasıl planlandığı ve o ilçeye özel sık sorulan sorular yer alıyor.',
    ],
    kirintilar: [{ ad: 'Hizmet Bölgeleri', yol: '/hizmet-bolgeleri/' }],
  },
  {
    path: '/projeler/',
    title: `Öncesi & Sonrası | Halı Yıkama Denizli — ${companyShortName}`,
    description:
      'Yıkamadan önce ve sonra: halı, koltuk ve perde işlerinin sahada nasıl göründüğü. Hangi lekede ne yapıldığını görselleriyle anlattık.',
    h1: 'Öncesi & Sonrası',
    kirintilar: [{ ad: 'Öncesi & Sonrası', yol: '/projeler/' }],
  },
  {
    path: '/hakkimizda/',
    title: `Hakkımızda | ${companyShortName} — Halı Yıkama Denizli`,
    description: `${companyShortName}, Denizli'de halı, koltuk, perde ve yorgan yıkama hizmeti veriyor. Eskihisar'daki tesisimizde 16 fırçalı makinelerle çalışıyoruz.`,
    h1: `${companyName} Hakkında`,
    // Doğrudan about.js'ten geliyor, kopyalanmıyor: About.jsx da aynı diziyi
    // basıyor, yani noscript gövdesi ekranda görünenin BİREBİR aynısı.
    // Elle yazılmış bir özet olsaydı sayfa değişince sessizce sapardı ve
    // cloaking'e dönerdi. Tek kaynak = sapma imkânsız.
    govde: hikaye,
    kirintilar: [{ ad: 'Hakkımızda', yol: '/hakkimizda/' }],
  },
  {
    path: '/iletisim/',
    title: `İletişim | ${companyShortName} — Halı Yıkama Denizli`,
    description: `Halı, koltuk ve perde yıkama için bize ulaşın. Telefon ${phone} ve WhatsApp. Adres: ${address.full}. Alım ve teslim ücretsiz.`,
    h1: 'İletişim',
    kirintilar: [{ ad: 'İletişim', yol: '/iletisim/' }],
  },
  {
    path: '/sikca-sorulan-sorular/',
    // 60 karakteri aşmamalı; build künyesi uzun başlıkları yakalıyor.
    title: `Halı Yıkama SSS | ${companyShortName}`,
    description: `Halı, koltuk ve perde yıkama hakkında en çok sorulan ${faq.length} soru ve cevabı. Teslim süresi, leke, servis, ödeme ve halı cinsine göre program.`,
    jsonLd: faqSemasi(faq),
    h1: 'Sıkça Sorulan Sorular',
    kirintilar: [{ ad: 'Sıkça Sorulan Sorular', yol: '/sikca-sorulan-sorular/' }],
    govde: faq.slice(0, 6).map((s) => `${s.q} ${s.a}`),
  },
  ...[gizlilik, sartlar].map((s) => ({
    path: `/${s.slug}/`,
    title: `${s.baslik} | ${companyShortName}`,
    description: s.ozet,
    h1: s.baslik,
    kirintilar: [{ ad: s.baslik, yol: `/${s.slug}/` }],
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
    description: `Denizli ve çevre ilçelerde ${s.title.toLowerCase()} hizmeti. ${s.shortDescription} Ücretsiz alım ve teslim. ${phone}.`,
    // Sosyal önizlemede WebP bazı istemcilerde (özellikle WhatsApp) sorun
    // çıkarıyor; her hizmet için 1200x630 markalı JPG üretildi.
    image: `${url}/images/og/${s.slug}.jpg`,
    jsonLd: icerik.sss?.length ? [hizmetSemasi, faqSemasi(icerik.sss)] : hizmetSemasi,
    // services.js'te h1 tanımlıysa onu kullan (bkz. hali-yikama — yamyamlık notu);
    // ekrandaki H1 ile ham HTML'deki H1 aynı olmalı.
    h1: s.h1 ?? `${address.city} ${s.title}`,
    kirintilar: [
      { ad: 'Hizmetler', yol: '/hizmetler/' },
      { ad: s.title, yol: `/hizmetler/${s.slug}/` },
    ],
    // <noscript> gövdesi için GERÇEK sayfa metni — sayfanın kendi giriş
    // paragrafları. Böylece JavaScript çalıştırmayan tarayıcılar ve robotlar
    // her sayfada aynı ana sayfa metnini değil, o sayfanın metnini görür.
    govde: (icerik.girisMetni ?? [s.shortDescription]).slice(0, 3),
  }
})

/** Hizmet bölgesi sayfaları */
const bolgeRotalari = serviceAreas.map((a) => {
  // Devralınan iskelette burada sentetik bir "Denizli (Merkez)" kaydı vardı ve
  // adı ana sayfayla aynı sorguyu hedeflemesin diye özel olarak değiştiriliyordu.
  // O kayıt AÇILMADI (gerekçe serviceAreas.js başında), bu yüzden özel durum da
  // kalktı: her kayıt gerçek bir ilçe.
  const mahalleMi = a.tur === 'mahalle'
  const seoAd = a.name.replace(/\s*\(.*?\)/, '')

  /**
   * AÇIKLAMADA ilçe adının önüne il adı konur — başlıkta değil.
   *
   * Sebep coğrafi belirsizlik: Güney, Kale, Çal, Çardak gibi adlar Türkiye'de
   * birden fazla ilde geçiyor. "Kale halı yıkama" ile başlayan bir açıklama
   * hangi Kale olduğunu söylemiyor; arama da çoğu zaman "denizli kale halı
   * yıkama" biçiminde geliyor. Başlıkta yapılmadı çünkü orada bütçe 60 karakter
   * ve ilçe adının en başta durması gerekiyor; açıklamanın 155 karakterlik
   * bütçesi en uzun ilçede bile buna yetiyor.
   */
  const acikAd = seoAd.startsWith(address.city) ? seoAd : `${address.city} ${seoAd}`

  const hizmetSemasi = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: mahalleMi
      ? `${a.name} Mahallesi Halı Yıkama`
      : `${a.name} Halı Yıkama — Koltuk ve Perde Yıkama`,
    serviceType: siteConfig.sector.tanim,
    provider: saglayici,
    // Mahalle bir City değil; schema.org'da doğru tip AdministrativeArea.
    // İlçe de teknik olarak City sayılabiliyor ama mahalleye City demek
    // yapısal veriyi yanlışlıyor.
    areaServed: mahalleMi
      ? { '@type': 'AdministrativeArea', name: `${a.name}, ${a.ilce}, ${address.city}` }
      : { '@type': 'City', name: `${a.name}, ${address.city}` },
    url: `${url}/hizmet-bolgeleri/${a.slug}/`,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${a.name} ${siteConfig.sector.hizmetKatalogAdi}`,
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: `${a.name} ${s.title}` },
      })),
    },
  }

  return {
    path: `/hizmet-bolgeleri/${a.slug}/`,
    // Başlık kalıbı: hedef kelime EN BAŞTA, sonra ayırt edici vaat, sonra marka.
    //
    // Bölgesel aramalarda ("halı yıkama merkezefendi", "bağbaşı halı yıkama")
    // rekabet il genelindeki ana sorgudan çok daha düşük; ilçe/mahalle adının
    // başlığın ilk kelimesi olması bu yüzden en değerli tercih.
    //
    // "Ücretsiz Servis" eklendi çünkü sektörde gerçek ayrışma noktası bu ve
    // olgu sayfasında doğrulanmış (alım-teslim ücretsiz). En uzun ilçe adıyla
    // bile 60 karakterin altında kalıyor — hiçbiri kesilmiyor.
    //
    // ServiceAreaDetail.jsx'teki <Seo title> ile AYNI kalmalı: biri build'deki
    // statik HTML'i, diğeri SPA gezinmesini besliyor. Biri değişip diğeri
    // kalırsa tarayıcı ile kullanıcı farklı başlık görür.
    title: `${seoAd} Halı Yıkama — Ücretsiz Servis | Tomay`,
    // AÇIKLAMA mahallede ilçeyi, ilçede ili anıyor. Sebep aynı: coğrafi
    // belirsizlik. "Cumhuriyet halı yıkama" hangi Cumhuriyet olduğunu
    // söylemiyor — Denizli'nin birçok ilçe merkezinde aynı adda mahalle var.
    description: mahalleMi
      ? `${a.name} Mahallesi (${a.ilce}) halı yıkama: adresinizden ücretsiz alıyor, ${siteConfig.service.teslimSuresi} içinde ambalajlı teslim ediyoruz. Koltuk ve perde de yıkıyoruz.`
      : `${acikAd} halı yıkama: adresinizden ücretsiz alıyor, ${siteConfig.service.teslimSuresi} içinde ambalajlı teslim ediyoruz. Koltuk ve perde de yıkıyoruz. ${phone}.`,
    jsonLd: [hizmetSemasi, faqSemasi(a.sss)],
    h1: `${a.name} Halı Yıkama`,
    // Mahallede kırıntı ÜÇ basamaklı: hub > ilçe > mahalle. Google arama
    // sonucunda ham URL yerine bu yolu gösteriyor ve mahallenin hangi ilçeye
    // bağlı olduğu böylece SERP'te de görünüyor.
    kirintilar: mahalleMi
      ? [
          { ad: 'Hizmet Bölgeleri', yol: '/hizmet-bolgeleri/' },
          { ad: a.ilce, yol: `/hizmet-bolgeleri/${a.parentSlug}/` },
          { ad: a.name, yol: `/hizmet-bolgeleri/${a.slug}/` },
        ]
      : [
          { ad: 'Hizmet Bölgeleri', yol: '/hizmet-bolgeleri/' },
          { ad: a.name, yol: `/hizmet-bolgeleri/${a.slug}/` },
        ],
    govde: [...(a.intro ?? []), a.yerelBaglam].filter(Boolean).slice(0, 3),
  }
})

/** Blog listesi + yazı sayfaları */
const blogRotalari = [
  {
    path: '/blog/',
    title: `Halı Yıkama Rehberleri | Blog — ${companyShortName}`,
    description:
      'Halı, koltuk ve perde yıkama hakkında sahadan yazılmış rehberler. Fiyatı ne belirler, leke nasıl çıkar, halı yıkamacı seçerken nelere bakılır.',
    h1: 'Blog',
    kirintilar: [{ ad: 'Blog', yol: '/blog/' }],
    govde: blog.map((y) => `${y.title}: ${y.ozet}`),
  },
  ...blog.map((y) => {
    const icerik = blogContent[y.slug] ?? {}

    const makale = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: y.title,
      description: y.description,
      image: `${url}${y.image}`,
      datePublished: y.tarih,
      dateModified: y.tarih,
      author: { '@type': 'Organization', name: companyName, url: `${url}/` },
      publisher: { '@type': 'Organization', name: companyName, url: `${url}/` },
      mainEntityOfPage: { '@type': 'WebPage', '@id': `${url}/blog/${y.slug}/` },
    }

    return {
      path: `/blog/${y.slug}/`,
      title: icerik.seoTitle ?? y.title,
      description: y.description,
      image: `${url}${y.image}`,
      h1: y.title,
      kirintilar: [
        { ad: 'Blog', yol: '/blog/' },
        { ad: y.title, yol: `/blog/${y.slug}/` },
      ],
      // Yazının kendi giriş paragrafları ham HTML'e girsin
      // Markdown bağlantı sözdizimi ham metne SIZMAMALI: bu gövde JS'siz
      // istemcinin gördüğü metin ve orada "[çıpa](/yol/)" diye bir şey durursa
      // hem okunmaz hem de render edilen sayfadan farklı görünür (cloaking).
      // Çıpa metni korunuyor, yalnızca sözdizimi atılıyor.
      govde: (icerik.giris ?? []).slice(0, 3).map(duzMetin),
      // FAQPage şemasına giren metin Google'a gönderilen METİNDİR; içinde
      // markdown sözdizimi durursa zengin sonuçta ham "[çıpa](/yol/)" görünür.
      jsonLd: icerik.sss?.length
        ? [makale, faqSemasi(icerik.sss.map((x) => ({ q: duzMetin(x.q), a: duzMetin(x.a) })))]
        : makale,
    }
  }),
]

const rotalar = [...sabitler, ...hizmetRotalari, ...bolgeRotalari, ...blogRotalari].map((r) => ({
  ...r,
  description: kisalt(r.description),
  image: r.image ?? ogImage,
  canonical: `${url}${r.path}`,
  govde: r.govde ?? [r.description],

  /**
   * BreadcrumbList AYRI TUTULUR — jsonLd ile birleştirilmemelidir.
   *
   * jsonLd'deki şemaları (Service, FAQPage) React yüklenince Seo.jsx yeniden
   * üretir; bu yüzden build çıktısındakiler `data-seo-build` ile işaretlenip
   * siliniyor. BreadcrumbList'i Seo.jsx üretmiyor — aynı etikete konursa
   * render sonrası şema tamamen kaybolur ve Google (JS çalıştırdığı için)
   * breadcrumb'ı hiç görmez. Bu yüzden işaretsiz, ayrı bir script'e yazılır.
   */
  kirintiJsonLd: r.kirintilar?.length ? kirintiSemasi(r.kirintilar) : null,
}))

export default rotalar
