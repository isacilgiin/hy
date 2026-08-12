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
import serviceAreas, { zoneContent } from './serviceAreas.js'
import { faq } from './faq.js'
import { gizlilik, sartlar } from './legal.js'
import blog from './blog.js'
import blogContent from './blogContent.js'

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

/**
 * BreadcrumbList şeması.
 *
 * Sitede 38 sayfada GÖRSEL breadcrumb vardı ama şeması hiç yoktu. Breadcrumb,
 * Google'da hâlâ canlı olan zengin sonuçlardan biri: arama sonucunda ham URL
 * yerine "20karot.com.tr › Hizmetler › Beton Kesme" yolunu gösterir.
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
    h1: `${address.city}'de Karot, Beton Delme & Kesme Hizmetleri`,
    govde: [seo.defaultDescription],
  },
  {
    path: '/hizmetler/',
    title: `Karot Hizmetleri | Denizli Beton Delme ve Kesme — ${companyName}`,
    description:
      "Denizli'de karot, beton delme, beton kesme, beton kırma, filiz ekimi, ankraj ve kimyasal dübel hizmetleri. Ücretsiz keşif ve net fiyat teklifi.",
    h1: `${address.city}'de Verdiğimiz Karot Hizmetleri`,
    // Bu paragraflar Services.jsx'teki "Hangi Hizmete İhtiyacınız Var?"
    // bölümünün DÜZ METİN karşılığı. İkisi aynı içeriği anlatmak zorunda:
    // noscript gövdesi render edilen sayfadan farklı şey söylerse cloaking olur.
    // Biri değişirse diğeri de değişmeli.
    govde: [
      'Beton üzerinde yapılacak işler dört ana grupta toplanıyor: delik açmak, kesmek, kırmak ve mevcut betona yeni bir eleman bağlamak. Hangisinin gerektiği çoğu zaman işin kendisinden değil çevresinden belli oluyor — elemanın taşıyıcı olup olmadığı, çevrede kimlerin bulunduğu ve kenarın düzgün kalması gerekip gerekmediği.',
      "Tesisat, klima, baca ve havalandırma geçişleri için betonarmede ölçülü delik gerekiyorsa karot yöntemi kullanılır; elmas uçlu silindirik uç betonu keserek ilerlediği için delik kenarı pürüzsüz çıkar ve kırıcının yarattığı türden çatlak oluşmaz. Çap ihtiyacı büyüdükçe iş beton delme başlığına geçer, 50 mm ile 1000 mm arasında çalışılabiliyor.",
      'Duvarda kapı ya da pencere açıklığı açmak, döşemede merdiven veya asansör boşluğu oluşturmak beton kesme işidir; kesim hattı düz çıktığı için kenarda ek sıva veya tamir işi kalmaz. Ölçü elmas diskin kapasitesini aştığında hidrolik beton kesme devreye girer. Yol ve zemin çalışmalarında ise asfalt derz kesim ayrı bir uygulamadır.',
      'Kaldırılacak beton serbest bir alandaysa ve kenarın düzgün kalması gerekmiyorsa beton kırma hem daha hızlı hem daha ekonomik olur; bütün bir yapı söz konusuysa iş kontrollü bina yıkımı kapsamına girer. Mevcut betona yeni bir eleman bağlanacaksa filiz ekimi donatı devamlılığı kurar, ankraj yükü mevcut betonarmeye aktaran bağlantı noktası oluşturur, kimyasal dübel ise mekanik dübelin tutmadığı durumlarda enjeksiyon reçinesiyle çalışır.',
      'Emin değilseniz aramanız yeterli: yerinde bakıp hangi yöntemin uygun olduğunu söylüyoruz, keşif ücretsiz.',
    ],
    kirintilar: [{ ad: 'Hizmetler', yol: '/hizmetler/' }],
  },
  {
    path: '/hizmet-bolgeleri/',
    title: `Hizmet Bölgeleri | Denizli ve Tüm İlçeler — ${companyName}`,
    description: `Denizli il genelinde ${serviceAreas.length} ilçede karot, beton delme, kesme ve kırma hizmeti. Merkezefendi, Pamukkale, Honaz, Sarayköy, Çivril, Acıpayam ve tüm ilçeler.`,
    h1: `${address.city} Genelinde Hizmet Verdiğimiz İlçeler`,
    // ServiceAreas.jsx'teki "Bölgeye Göre Nasıl Çalışıyoruz?" bölümünün düz
    // metin karşılığı. Bölge metinleri zoneContent'ten OKUNUYOR, kopyalanmıyor:
    // aynı cümleler hem burada, hem hub sayfasında, hem de ilçe detay
    // sayfalarındaki "Nasıl çalışıyoruz?" kutusunda kullanılıyor. Tek kaynak.
    govde: [
      `Denizli'nin ${serviceAreas.length} ilçesinin tamamına gidiyoruz. Değişen şey hizmetin kendisi değil, planlaması: mesafe arttıkça işi tek gidişte bitirecek şekilde hazırlanıyoruz.`,
      ...['merkez', 'yakin', 'uzak'].map(
        (z) =>
          `${zoneContent[z].grupAdi} — ${serviceAreas.filter((a) => a.zone === z).length} ilçe: ${zoneContent[z].howWeWork}`
      ),
      'Her ilçenin kendi sayfasında o bölgedeki yapı dokusu, sık karşılaşılan iş tipleri ve o ilçeye özel sık sorulan sorular yer alıyor.',
    ],
    kirintilar: [{ ad: 'Hizmet Bölgeleri', yol: '/hizmet-bolgeleri/' }],
  },
  {
    path: '/projeler/',
    title: `Uygulama Alanları | Denizli Karot ve Beton Kesme — ${companyName}`,
    description:
      'Karot, beton delme, kesme, kırma ve filiz ekiminin sahada nasıl göründüğü. Hangi işte hangi yöntemin kullanıldığını görselleriyle anlattık.',
    h1: 'Uygulama Alanları',
    kirintilar: [{ ad: 'Uygulama Alanları', yol: '/projeler/' }],
  },
  {
    path: '/hakkimizda/',
    title: `Hakkımızda | ${companyName} — Denizli Karot`,
    description: `${companyName}, Denizli ve çevre ilçelerde beton delme, kesme ve kırma hizmetleri veren karot firmasıdır. Önce ücretsiz keşif, sonra net fiyat.`,
    h1: `${companyName} Hakkında`,
    kirintilar: [{ ad: 'Hakkımızda', yol: '/hakkimizda/' }],
  },
  {
    path: '/iletisim/',
    title: `İletişim | ${companyName} — Denizli Karot`,
    description: `Denizli karot hizmetleri için bize ulaşın. Telefon ${phone}, WhatsApp ve e-posta. Adres: ${address.full}. Ücretsiz keşif.`,
    h1: 'İletişim',
    kirintilar: [{ ad: 'İletişim', yol: '/iletisim/' }],
  },
  {
    path: '/sikca-sorulan-sorular/',
    title: `Sıkça Sorulan Sorular | Karot, Beton Delme ve Kesme — ${companyName}`,
    description: `Karot, beton delme, kesme ve kırma hakkında en çok sorulan ${faq.length} soru ve cevabı. Fiyat, süre, toz ve titreşim, taşıyıcı elemana müdahale, moloz kaldırma.`,
    jsonLd: faqSemasi(faq),
    h1: 'Sıkça Sorulan Sorular',
    kirintilar: [{ ad: 'Sıkça Sorulan Sorular', yol: '/sikca-sorulan-sorular/' }],
    govde: faq.slice(0, 6).map((s) => `${s.q} ${s.a}`),
  },
  ...[gizlilik, sartlar].map((s) => ({
    path: `/${s.slug}/`,
    title: `${s.baslik} | ${companyName}`,
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
    description: `Denizli ve çevre ilçelerde ${s.title.toLowerCase()} hizmeti. ${s.shortDescription} Ücretsiz keşif için ${phone}.`,
    // Sosyal önizlemede WebP bazı istemcilerde (özellikle WhatsApp) sorun
    // çıkarıyor; her hizmet için 1200x630 markalı JPG üretildi.
    image: `${url}/images/og/${s.slug}.jpg`,
    jsonLd: icerik.sss?.length ? [hizmetSemasi, faqSemasi(icerik.sss)] : hizmetSemasi,
    // services.js'te h1 tanımlıysa onu kullan (bkz. karot — yamyamlık notu);
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
    // Başlık kalıbı: hedef kelime EN BAŞTA, sonra aciliyet, sonra kapsam.
    //
    // Önceki kalıp `... | Beton Delme, Kesme — Ücretsiz Keşif | 20 Karot` idi ve
    // 20 ilçenin HEPSİNDE 63-73 karakterdi; Google hepsini kesiyordu, yani
    // "Ücretsiz Keşif" zaten görünmüyordu. İki fazlalık vardı: "Karot" markada
    // bir kez daha geçiyor ve iki ayraç (|) boşa yer yiyordu.
    //
    // "Acil" eklendi çünkü ana sayfa zaten 7/24 hizmet iddia ediyor ve arama
    // tarafında "acil karot" / "acil beton delme" gerçek bir talep kalıbı.
    // Yeni kalıp en uzun ilçede bile 57 karakter — hiçbiri kesilmiyor.
    //
    // ServiceAreaDetail.jsx:88 ile AYNI kalmalı: biri build'deki statik HTML'i,
    // diğeri SPA gezinmesini besliyor. Biri değişip diğeri kalırsa tarayıcı ile
    // kullanıcı farklı başlık görür.
    title: `${seoAd} Karot — Acil Beton Delme, Kesme | ${companyName}`,
    description: `${seoAd} karot hizmeti: beton delme, beton kesme, beton kırma, filiz ekimi ve ankraj. Ücretsiz keşif ve net fiyat teklifi için ${phone}.`,
    jsonLd: [hizmetSemasi, faqSemasi(a.sss)],
    h1: `${a.name} Karot`,
    kirintilar: [
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
    title: `Blog | Karot, Beton Delme ve Kesme Rehberleri — ${companyName}`,
    description:
      'Karot, beton delme, kesme ve filiz ekimi hakkında sahadan yazılmış rehberler. Fiyatı ne belirler, hangi yöntem ne zaman kullanılır, firma seçerken nelere bakılır.',
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
      govde: (icerik.giris ?? []).slice(0, 3),
      jsonLd: icerik.sss?.length ? [makale, faqSemasi(icerik.sss)] : makale,
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
