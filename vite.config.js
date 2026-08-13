import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import siteConfig from './src/data/siteConfig.js'
import services from './src/data/services.js'
import serviceAreas from './src/data/serviceAreas.js'
import { oneCikanFaq as faq } from './src/data/faq.js'
import rotaMetalari from './src/data/routeMeta.js'
import heroSlides from './src/data/heroSlides.js'
import blog from './src/data/blog.js'
import fs from 'node:fs'
import path from 'node:path'
import { execSync } from 'node:child_process'

/** Künye için: çıktı klasöründeki bütün index.html'leri toplar. */
function tumHtmlDosyalari(kok) {
  const bulunan = []
  const gez = (dizin) => {
    for (const girdi of fs.readdirSync(dizin, { withFileTypes: true })) {
      const tam = path.join(dizin, girdi.name)
      if (girdi.isDirectory()) gez(tam)
      else if (girdi.name.endsWith('.html')) bulunan.push(tam)
    }
  }
  gez(kok)
  return bulunan
}

/**
 * index.html + robots.txt + sitemap.xml içeriğini src/data/siteConfig.js'ten üretir.
 *
 * Neden: domain / telefon / firma adı 5 ayrı dosyada elle tutulursa er ya da geç
 * birbirinden ayrı düşer (bu projede zaten öyle olmuştu). Artık tek kaynak var:
 * siteConfig.js'i güncelle, hepsi otomatik güncellensin.
 */
function seoFromConfig() {
  const { url, domain, companyName, companyDescription, seo, phone, phoneRaw, email, address, workingHours, themeColor, rating, social, analytics } =
    siteConfig

  const ogImage = `${url}/images/logo/og-image.jpg`

  /**
   * Ana sayfanın LCP'si hero slider'ın ilk görselidir. Bu görsel React +
   * Swiper çalıştıktan sonra DOM'a girdiği için tarayıcı onu ancak JS
   * paketleri indikten sonra keşfediyordu (Lighthouse: "Request is
   * discoverable in initial document" = false, lcpLoadDelay 2,5 sn).
   * Aşağıdaki ön yükleme isteği HTML ayrıştırılırken başlatır.
   *
   * srcset/sizes, HeroSection.jsx'teki <img> ile AYNI olmak zorundadır;
   * farklı olursa tarayıcı iki ayrı görsel indirir.
   */
  const ilkSlayt = heroSlides[0]
  const heroSrcset = ilkSlayt
    ? `${ilkSlayt.image.replace('.webp', '-800.webp')} 800w, ${ilkSlayt.image} 1600w`
    : ''
  const heroPreload = ilkSlayt
    ? `<link rel="preload" as="image" href="${ilkSlayt.image}" imagesrcset="${heroSrcset}" imagesizes="100vw" fetchpriority="high" />`
    : ''

  /**
   * HERO ÖN BOYAMASI — ana sayfanın LCP'sini JavaScript'ten kopartır.
   *
   * Sorun: sayfa istemcide çiziliyor. Ön yükleme sayesinde hero görseli ağdan
   * 52 ms'de iniyor ama ekrana basılması için önce vendor (220 KB) + Swiper
   * (109 KB) ayrıştırılıp çalıştırılmak zorundaydı. Ölçüm (2026-08-13):
   * LCP 3,63 sn'nin yalnızca 94 ms'i ağ, gerisi render bekleyişi.
   *
   * Çözüm: aynı görseli #root içine statik olarak koymak. Tarayıcı HTML'i
   * ayrıştırırken boyar; React açıldığında createRoot #root'un içini temizleyip
   * gerçek hero'yu yerine koyar. Görsel adresi birebir aynı olduğu için ikinci
   * indirme olmaz ve değişim gözle görülmez.
   *
   * DİKKAT — src/srcset/sizes üçlüsü HEM yukarıdaki ön yükleme HEM de
   * HeroSection.jsx'teki <img> ile AYNI olmak zorunda. Sapma olursa tarayıcı
   * görseli iki kez indirir.
   *
   * Perde katmanları HeroSection.jsx'teki üç örtüyle aynı sırada ve aynı
   * değerlerde; sapma olursa React devraldığı anda ekranda kararma/açılma
   * şeklinde göz kırpma olur. `bg-dark` = #14100F, `accent` = #6E1B2E.
   *
   * writeBundle diğer rotalarda <!--ho-->…<!--/ho--> arasını siliyor: o
   * sayfalarda bu görsel hiç kullanılmıyor.
   */
  const heroOnizleme = ilkSlayt
    ? `<!--ho--><style>` +
      `.hero-on{position:relative;min-height:100vh;min-height:100svh;background:#14100F;overflow:hidden}` +
      `.hero-on img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}` +
      `.hero-on::after{content:"";position:absolute;inset:0;background:` +
      `radial-gradient(75% 65% at 88% 15%,rgba(110,27,46,.42) 0%,rgba(110,27,46,.14) 45%,transparent 72%),` +
      `linear-gradient(to top,rgba(20,16,15,.85),transparent 50%,rgba(20,16,15,.45)),` +
      `linear-gradient(to right,rgba(20,16,15,.95),rgba(20,16,15,.78) 50%,rgba(20,16,15,.3))}` +
      `</style><div class="hero-on"><img src="${ilkSlayt.image}" srcset="${heroSrcset}" sizes="100vw" ` +
      `alt="${ilkSlayt.imageAlt.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;')}" ` +
      `width="1600" height="900" fetchpriority="high" decoding="async" /></div><!--/ho-->`
    : ''

  // --- JSON-LD (Schema.org LocalBusiness) ---
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${url}/#localbusiness`,
    name: companyName,
    description: companyDescription,
    url,
    telephone: phoneRaw,
    email,
    image: ogImage,
    priceRange: '₺₺',
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.street,
      addressLocality: address.district,
      addressRegion: address.city,
      postalCode: address.postalCode,
      addressCountry: 'TR',
    },
    openingHoursSpecification: workingHours.alwaysOpen
      ? {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        }
      : {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: workingHours.hours.split(' - ')[0],
          closes: workingHours.hours.split(' - ')[1],
        },
    areaServed: serviceAreas.map((a) => ({ '@type': 'City', name: `${a.name}, ${address.city}` })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Karot Hizmetleri',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title, url: `${url}/hizmetler/${s.slug}/` },
      })),
    },
  }

  // Koordinat girilmediyse geo YAZILMAZ — uydurma konum yayınlanmaz.
  if (siteConfig.geo.lat != null && siteConfig.geo.lng != null) {
    jsonLd.geo = {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.lat,
      longitude: siteConfig.geo.lng,
    }
  }

  // Gerçek puan girilmediyse aggregateRating YAZILMAZ — uydurma yorum verisi
  // Google'ın yapılandırılmış veri politikasına aykırıdır.
  if (rating.showInSchema && rating.value != null && rating.count != null) {
    jsonLd.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: String(rating.value),
      reviewCount: String(rating.count),
    }
  }

  /**
   * sameAs — bu işletmeyi BAŞKA yerlerdeki AYNI varlıkla eşleştirir.
   *
   * Google İşletme Profili bağlantısı burada olmazsa site ile profil arasında
   * makine tarafından okunabilir HİÇBİR bağ kalmıyordu: yerel aramada asıl
   * güven sinyali (puan, yorum, fotoğraf, konum) profilde duruyor ama Google
   * onu siteyle ilişkilendirmek için ad/adres/telefon eşleşmesine mahkûm
   * kalıyordu. shortLink profilin kendi paylaşım adresi — kanonik kaynak.
   *
   * Sosyal hesaplar boş olduğu için (Instagram/Facebook yok) filtreleniyor;
   * boş string'li bir sameAs dizisi şemayı geçersiz yapardı.
   */
  const sameAs = [siteConfig.geo.shortLink, social.instagram, social.facebook, social.youtube].filter(Boolean)
  if (sameAs.length) jsonLd.sameAs = sameAs

  // --- Yalnızca değeri olan meta etiketleri üretilir ---
  const optionalMeta = []
  if (siteConfig.geo.lat != null && siteConfig.geo.lng != null) {
    optionalMeta.push(`<meta name="geo.position" content="${siteConfig.geo.lat};${siteConfig.geo.lng}" />`)
    optionalMeta.push(`<meta name="ICBM" content="${siteConfig.geo.lat}, ${siteConfig.geo.lng}" />`)
  }
  if (analytics.googleSiteVerification) {
    optionalMeta.push(`<meta name="google-site-verification" content="${analytics.googleSiteVerification}" />`)
  }

  // İki seçenek:
  //   1) Google Tag Manager konteyneri (analytics.gtm doluysa) — etiketler
  //      koda dokunmadan GTM arayüzünden yönetilir.
  //   2) Doğrudan gtag.js — GA4 ve Google Ads aynı script üzerinden çalışır.
  // GTM tanımlıysa o kullanılır; ikisi birden yüklenmez (çift ölçüm olurdu).
  const gtagKimlikleri = analytics.gtm ? [] : [analytics.ga4, analytics.googleAds].filter(Boolean)
  const gtmKullaniliyor = Boolean(analytics.gtm)

  const analyticsScript = gtmKullaniliyor
    ? `<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
    var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
    j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','${analytics.gtm}');</script>`
    : gtagKimlikleri.length
    ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${gtagKimlikleri[0]}"></script>
  <script>
    window.dataLayer=window.dataLayer||[];
    function gtag(){dataLayer.push(arguments)}
    gtag('js',new Date());
${gtagKimlikleri.map((id) => `    gtag('config','${id}');`).join('\n')}
  </script>`
    : '<!-- Google Analytics / Ads: siteConfig.analytics doldurulunca otomatik eklenir -->'

  const tokens = {
    SITE_URL: url,
    SITE_DOMAIN: domain,
    SITE_NAME: companyName,
    SITE_TITLE: seo.defaultTitle,
    SITE_DESCRIPTION: seo.defaultDescription,
    SITE_KEYWORDS: seo.keywords,
    SITE_THEME_COLOR: themeColor,
    SITE_GEO_REGION: siteConfig.geo.region,
    SITE_CITY: address.city,
    SITE_PHONE: phone,
    SITE_PHONE_RAW: phoneRaw,
    SITE_ADDRESS: address.full,
    SITE_OG_IMAGE: ogImage,
    SITE_OPTIONAL_META: optionalMeta.join('\n  '),
    SITE_ANALYTICS: analyticsScript,
    SITE_ANALYTICS_PRECONNECT:
      gtagKimlikleri.length || gtmKullaniliyor
        ? '<link rel="preconnect" href="https://www.googletagmanager.com" />\n  <link rel="dns-prefetch" href="https://www.googletagmanager.com" />'
        : '',
    SITE_JSONLD: JSON.stringify(jsonLd, null, 2),
    // Sondaki eğik çizgi ŞART: canonical bu formatta. Çizgisiz yazılırsa
    // .htaccess her tıklamada 301 veriyor (bkz. staticRoutes notu).
    SITE_SERVICE_LINKS: services
      .map((s) => `<li><a href="/hizmetler/${s.slug}/">${s.title}</a></li>`)
      .join('\n        '),
    // LCP ön yükleme — YALNIZCA ana sayfada anlamlı, writeBundle diğer
    // rotalarda boşaltıyor. Değerler heroSlides[0]'dan üretiliyor ki
    // HeroSection'daki <img> ile birebir aynı olsun; en ufak sapmada tarayıcı
    // görseli İKİ KEZ indirir ve ön yükleme fayda yerine zarar verir.
    SITE_HERO_PRELOAD: heroPreload,
    // Hero ön boyaması — gerekçesi üretildiği yerde yazılı. Bu da yalnızca
    // ana sayfaya ait; writeBundle diğer rotalarda siliyor.
    SITE_HERO_ONIZLEME: heroOnizleme,
  }

  // Sondaki eğik çizgi (trailing slash) BİLİNÇLİ: eski WordPress sitesinde
  // indekslenmiş URL'ler bu formatta. Canonical + sitemap onlarla birebir eşleşsin.
  const staticRoutes = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/hizmetler/', priority: '0.9', changefreq: 'monthly' },
    { path: '/hizmet-bolgeleri/', priority: '0.9', changefreq: 'monthly' },
    { path: '/projeler/', priority: '0.7', changefreq: 'monthly' },
    { path: '/hakkimizda/', priority: '0.6', changefreq: 'yearly' },
    { path: '/iletisim/', priority: '0.8', changefreq: 'yearly' },
    { path: '/blog/', priority: '0.8', changefreq: 'monthly' },
    { path: '/sikca-sorulan-sorular/', priority: '0.7', changefreq: 'monthly' },
    { path: '/gizlilik-politikasi/', priority: '0.3', changefreq: 'yearly' },
    { path: '/sartlar-ve-kosullar/', priority: '0.3', changefreq: 'yearly' },
  ]

  /**
   * Eski WordPress URL'lerinden yeni yapıya 301 yönlendirmeleri.
   *
   * Karşılığı BİREBİR AYNI olan URL'ler (ör. /hizmetler/beton-kesme/) burada YOK —
   * onlar zaten aynı adreste çalışıyor, yönlendirmeye gerek yok. Burada yalnızca
   * adresi DEĞİŞEN veya karşılığı olmayan sayfalar var.
   */
  const redirects = [
    ['Hizmetler sayfası adı değişti', '^hizmetlerimiz/?$', '/hizmetler/'],
    // Blog yazısı: konusu karot ve beton delme
    [
      'Tek blog yazısı',
      '^denizlide-profesyonel-karot-ve-beton-delme-hizmetleri-20-karot-guvencesiyle/?$',
      '/hizmetler/karot/',
    ],
    // NOT: Eski WordPress'in /blog/ arşivi için burada bir 301 VARDI. Kaldırıldı:
    // yeni sitede /blog/ GERÇEK bir sayfa. Kural dursaydı, fiziksel
    // dist/blog/index.html hiç sunulmadan /blog/ -> / 301'i yerdi (RewriteRule'un
    // RewriteCond guard'ı yok, dosya var mı diye bakmaz) ve blog dizini ölürdü.
    // 6 yazının siteden TEK girişi o dizin — kapalı devre kalırlardı.
    // Eski /blog/ adresi zaten yeni /blog/ adresine denk düşüyor; taşımaya gerek yok.
    // Eski sitede /en/... adresleri vardı ama içerikleri TÜRKÇEYDİ ve
    // canonical'ları Türkçe sayfayı gösteriyordu — gerçek bir İngilizce sürüm
    // yoktu. Aynı yoldaki Türkçe sayfaya taşınıyorlar.
    ['/en/ kopyaları', '^en/(.*)$', '/$1'],
    // Eski WordPress'te ilçe sayfaları KÖKTEYDİ: /denizli-karot/, /tavas-karot/ ...
    // Yeni sitede aynı slug'larla /hizmet-bolgeleri/ altına taşındılar, yani
    // eşleme birebir. Search Console 14 tanesini "taranmış ama dizine
    // eklenmemiş" olarak tutuyordu ve taşınmadan sonra hepsi 404'e düştü —
    // aralarında ana hedef kelimemizin sayfası /denizli-karot/ da vardı.
    //
    // İKİ AYRI KURAL, birleştirmeyin: '-uygulama' ekini tek kuralda opsiyonel
    // grup yapmak ÇALIŞMAZ. [a-z0-9-]+ açgözlüdür ve '-uygulama' da yalnızca
    // kabul ettiği karakterlerden oluşur; girdinin tamamını yutar, opsiyonel
    // grup hiç devreye girmez ve /hizmet-bolgeleri/saraykoy-karot-uygulama/
    // gibi var olmayan bir adrese 301 verirsiniz. Özel olan önce gelir.
    ['Eski kök ilçe sayfası (uygulama ekli)', '^([a-z0-9-]+-karot)-uygulama/?$', '/hizmet-bolgeleri/$1/'],
    ['Eski kök ilçe sayfaları', '^([a-z0-9-]+-karot)/?$', '/hizmet-bolgeleri/$1/'],
    // İlçe sayfalarıyla AYNI hikâye, hizmetler için: eski WordPress'te hizmet
    // sayfaları da köke düşüyordu (/kimyasal-dubel/ gibi). Taşınmadan sonra
    // hepsi 404'e düştü. 2026-08-13'te Google'ın dizininde /kimyasal-dubel
    // hâlâ dururken canlıda 404 verdiği görüldü.
    //
    // Burada ilçelerdeki gibi desen kullanılamaz: hizmet slug'larının ortak bir
    // eki yok. Serbest bir '^([a-z0-9-]+)/?$' kuralı ise /hakkimizda/, /blog/,
    // /iletisim/ dahil kökteki HER sayfayı vururdu. O yüzden liste açık — ama
    // elle değil, services.js'ten üretiliyor: hizmet eklenince kural da büyür.
    [
      'Eski kök hizmet sayfaları',
      `^(${services.map((s) => s.slug).join('|')})/?$`,
      '/hizmetler/$1/',
    ],
    // WordPress taksonomi arşivleri
    ['service-category -> hizmet detayı', '^service-category/([a-z0-9-]+)/?$', '/hizmetler/$1/'],
    ['portfolio-category -> hizmet detayı', '^portfolio-category/([a-z0-9-]+)/?$', '/hizmetler/$1/'],
    ['category arşivleri', '^category/.*$', '/hizmetler/'],
    ['tag arşivleri', '^tag/.*$', '/hizmetler/'],
    ['portfolio kayıtları', '^portfolio/.*$', '/projeler/'],
    // WordPress kalıntıları
    ['RSS beslemeleri', '^(.*/)?feed/?$', '/'],
    ['WordPress yönetim', '^wp-(admin|login\\.php).*$', '/'],
    // NOT: /sikca-sorulan-sorular/, /gizlilik-politikasi/ ve /sartlar-ve-kosullar/
    // artık yeni sitede GERÇEK sayfa olarak var; yönlendirmeleri kaldırıldı.
  ]

  /**
   * Sitenin GERÇEK sayfa adresleri. Sitemap ve statik HTML üretimi aynı dört
   * kaynaktan (staticRoutes + services + serviceAreas + blog) besleniyor;
   * buradaki liste onların birleşimi ve aşağıdaki çakışma kontrolüne girdi.
   */
  const tumRotalar = [
    ...staticRoutes.map((r) => r.path),
    ...services.map((s) => `/hizmetler/${s.slug}/`),
    ...serviceAreas.map((a) => `/hizmet-bolgeleri/${a.slug}/`),
    ...blog.map((y) => `/blog/${y.slug}/`),
  ]

  /**
   * 301 kuralları ile gerçek sayfaları ÇAPRAZ kontrol eder.
   *
   * Neden gerekli: .htaccess'teki RewriteRule'lar dosya var mı diye bakmaz.
   * Bir kural gerçek bir sayfanın adresine uyarsa, o sayfa hiç sunulmadan
   * 301 yer ve fiilen ölür. Tam olarak bu, blog eklendiğinde başımıza geldi:
   * "yeni sitede blog yok" diye yazılmış `^blog/?$` kuralı, blog gelince
   * /blog/ dizinini öldürüyordu — ve build hiçbir uyarı vermiyordu.
   *
   * Elle kontrol bir sonraki veri değişikliğinde tutmaz; o yüzden build kırılır.
   */
  const cakismalar = []
  for (const [aciklama, desen, hedef] of redirects) {
    const re = new RegExp(desen)
    for (const rota of tumRotalar) {
      // İKİ biçim de sınanır. Apache per-directory bağlamında baştaki eğik
      // çizgiyi kırpar (/blog/ -> blog/), ama istek sondaki çizgi olmadan da
      // gelebilir. Yalnızca "blog/" sınansaydı `^blog$` gibi bir kural
      // kontrolden kaçar, sonra da "blog" isteğini vururdu.
      const adaylar = [rota.replace(/^\//, ''), rota.replace(/^\//, '').replace(/\/$/, '')]
      if (adaylar.some((a) => re.test(a))) {
        cakismalar.push(`  ✗ "${aciklama}" (${desen} -> ${hedef})  GERÇEK SAYFAYI VURUYOR: ${rota}`)
      }
    }
  }
  if (cakismalar.length) {
    throw new Error(
      `\n\n301 YÖNLENDİRME ÇAKIŞMASI — bu kurallar gerçek sayfaları erişilemez yapar:\n` +
        `${cakismalar.join('\n')}\n\n` +
        `Çözüm: vite.config.js > redirects dizisinden ilgili kuralı kaldırın.\n` +
        `Eski adres yeni sitede gerçek sayfaysa yönlendirmeye zaten gerek yoktur.\n`
    )
  }

  /**
   * llms.txt — LLM'ler ve AI arama motorları için düz metin firma özeti.
   * Elle tutulan bir kopya olarak duruyordu ve bayatlamıştı (8 hizmet yazıyordu,
   * eski slug'ları gösteriyordu, çalışma saati yanlıştı). Artık veriden üretiliyor.
   */
  const buildLlmsTxt = () => `# ${companyName} — ${address.city} Beton Delme, Kesme & Kırma Hizmetleri

> Bu dosya, yapay zeka dil modelleri (LLM) ve AI arama motorları için hazırlanmıştır.
> Kaynak: ${url}

## Firma Bilgileri

- Firma Adı: ${companyName}
- Sektör: Beton delme, kesme, kırma (karot) hizmetleri
- Konum: ${address.city}, Türkiye
- Adres: ${address.full}
- Telefon: ${phone}
- WhatsApp: ${siteConfig.social.whatsapp}
- E-posta: ${email}
- Web: [${url.replace(/^https?:\/\//, '')}](${url}/)
- Çalışma Saatleri: ${workingHours.days} ${workingHours.hours}
- Google İşletme Puanı: ${rating.value != null ? `${String(rating.value).replace('.', ',')} / 5 (${rating.count} yorum)` : 'belirtilmemiş'}

## Kısaca

${companyDescription}

## Hizmetlerimiz

${services
  .map(
    (s) => `- [${s.title}](${url}/hizmetler/${s.slug}/): ${s.shortDescription} ${s.applications.slice(0, 3).join(', ')}.`
  )
  .join('\n')}

## Hizmet Bölgeleri

${address.city} il genelinde ${serviceAreas.length} ilçe:

${serviceAreas.map((a) => `- [${a.name} karot, beton delme ve kesme](${url}/hizmet-bolgeleri/${a.slug}/)`).join('\n')}

Listede olmayan bölgeler ve çevre iller için telefonla değerlendirme yapılır.

## Rehber Yazıları

Sahadan yazılmış ayrıntılı rehberler. Fiyatın neye göre değiştiği, hangi işte
hangi yöntemin kullanıldığı ve firma seçerken nelere bakılacağı bu yazılarda:

${blog.map((y) => `- [${y.title}](${url}/blog/${y.slug}/): ${y.ozet}`).join('\n')}

## Sık Sorulan Sorular

${faq.map((f) => `**${f.q}**\n${f.a}`).join('\n\n')}

## Diğer Sayfalar

- [Blog](${url}/blog/): ${blog.length} rehber yazısı
- [Hizmetlerimiz](${url}/hizmetler/): Tüm hizmetlerin listesi
- [Hizmet Bölgeleri](${url}/hizmet-bolgeleri/): ${address.city} genelinde çalıştığımız ilçeler
- [Hakkımızda](${url}/hakkimizda/): Firma, ekip ve çalışma yöntemi
- [Projeler](${url}/projeler/): Uygulama örnekleri
- [Sıkça Sorulan Sorular](${url}/sikca-sorulan-sorular/): Fiyat, süre, toz ve taşıyıcı elemanlarla ilgili sorular
- [İletişim](${url}/iletisim/): Telefon, WhatsApp, adres ve harita

## İletişim

- Telefon: [${phone}](tel:${siteConfig.phoneRaw})
- WhatsApp: [${phone}](${siteConfig.social.whatsapp})
- E-posta: [${email}](mailto:${email})
- Adres: ${address.full}
- Çalışma saatleri: ${workingHours.days} ${workingHours.hours}
`

  /**
   * lastmod tarihi — İLGİLİ VERİ DOSYASININ git tarihinden.
   *
   * Tuzak: lastmod'a build tarihi yazmak. O zaman her derlemede 39 URL'nin
   * tarihi değişir, içerik değişmese bile. Google lastmod'u yalnızca tutarlı
   * şekilde doğruysa dikkate alıyor; sürekli oynayan bir alanı görmezden
   * geliyor. Bu yüzden tarih, sayfanın içeriğini üreten dosyanın son commit
   * tarihinden okunuyor — içerik değişmediyse tarih de değişmiyor.
   */
  const gitTarihi = (dosya) => {
    try {
      const cikti = execSync(`git log -1 --format=%cs -- ${dosya}`, {
        encoding: 'utf8',
        stdio: ['ignore', 'pipe', 'ignore'],
      }).trim()
      return /^\d{4}-\d{2}-\d{2}$/.test(cikti) ? cikti : null
    } catch {
      return null // git yoksa (ör. indirilmiş kaynak) lastmod hiç yazılmaz
    }
  }

  const buildSitemap = () => {
    // Her grup, içeriğini üreten dosyadan tarih alır.
    const tarihSabit = gitTarihi('src/data/routeMeta.js')
    const tarihHizmet = gitTarihi('src/data/serviceContent.js')
    const tarihBolge = gitTarihi('src/data/serviceAreas.js')
    const tarihBlog = gitTarihi('src/data/blogContent.js')

    const urls = [
        ...staticRoutes.map((r) => ({ ...r, lastmod: tarihSabit })),
        ...services.map((s) => ({
          path: `/hizmetler/${s.slug}/`,
          priority: '0.8',
          changefreq: 'monthly',
          lastmod: tarihHizmet,
        })),
        ...serviceAreas.map((a) => ({
          path: `/hizmet-bolgeleri/${a.slug}/`,
          priority: '0.8',
          changefreq: 'monthly',
          lastmod: tarihBolge,
        })),
        // Blog yazısının lastmod'u kendi YAYIN tarihinden gelir; git tarihi
        // değil. Yazı yayımlandığı gün gerçekten değişti, sonraki commit'lerde
        // değişmedi — Google'a doğru sinyal bu.
        ...blog.map((y) => ({
          path: `/blog/${y.slug}/`,
          priority: '0.7',
          changefreq: 'yearly',
          lastmod: y.tarih,
        })),
      ]

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${url}${u.path}</loc>${u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ''}
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`
  }

  /**
   * robots.txt
   *
   * DİKKAT — `Disallow: /assets/` SATIRINI GERİ EKLEMEYİN.
   * Site tek sayfa uygulaması: sayfa gövdesini /assets/ altındaki JavaScript
   * üretiyor. O klasör kapatıldığında Googlebot betikleri indiremediği için
   * sayfayı RENDER EDEMEZ; geriye yalnızca <noscript> bloğu kalır ve 39 sayfa
   * birbirinin aynısı görünür. Google'ın kendi dokümanı da CSS/JS'in taranmaya
   * açık olmasını şart koşar. Klasördeki dosyalar zaten içerik hash'li olduğu
   * için ayrıca indekslenme riski yok (hiçbir yerden link almıyorlar).
   */
  const buildRobots = () => `User-agent: *
Allow: /

Sitemap: ${url}/sitemap.xml
`

  /** Dev ve preview sunucularinda sitemap/robots/llms.txt servis eden ara katman. */
  function devSeoMiddleware(llms) {
    const rotalar = {
      '/sitemap.xml': () => ['application/xml; charset=utf-8', buildSitemap()],
      '/robots.txt': () => ['text/plain; charset=utf-8', buildRobots()],
      '/llms.txt': () => ['text/plain; charset=utf-8', llms()],
      '/.well-known/llms.txt': () => ['text/plain; charset=utf-8', llms()],
    }
    return (req, res, next) => {
      const yol = (req.url || '').split('?')[0]
      const f = rotalar[yol]
      if (!f) return next()
      const [tip, govde] = f()
      res.setHeader('Content-Type', tip)
      res.end(govde)
    }
  }

  return {
    name: 'seo-from-siteconfig',

    transformIndexHtml(html) {
      return html.replace(/%(SITE_[A-Z_]+)%/g, (match, key) =>
        key in tokens ? tokens[key] : match
      )
    },

    /**
     * sitemap.xml / robots.txt / llms.txt yalnızca `generateBundle` içinde
     * üretiliyordu; yani SADECE build çıktısında vardılar. `npm run dev` ve
     * `npm run preview` sırasında dosya bulunamadığı için SPA yönlendirmesi
     * devreye girip React'in 404 sayfasını döndürüyordu.
     * Bu ara katman aynı içeriği geliştirme sunucusunda da servis eder.
     */
    configureServer(server) {
      server.middlewares.use(devSeoMiddleware(buildLlmsTxt))
    },
    configurePreviewServer(server) {
      server.middlewares.use(devSeoMiddleware(buildLlmsTxt))
    },


    generateBundle() {
      const sitemap = buildSitemap()
      const robots = buildRobots()
      const llms = buildLlmsTxt()


      const htaccess = `# ${companyName} — Apache yapılandırması
# BU DOSYA OTOMATİK ÜRETİLİR (vite.config.js > seoFromConfig).
# Elle düzenlemeyin; değişiklik gerekiyorsa vite.config.js içindeki
# \`redirects\` dizisini güncelleyip yeniden build alın.
#
# dist/ içeriğini hostinge yüklerken BU DOSYAYI DA yükleyin (gizli dosyadır;
# FileZilla > Sunucu > Gizli dosyaları göstermeye zorla).

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # ---------------------------------------------------------------
  # 0) Tek kanonik konak: https + www'suz
  #
  #    Dört varyant da (http/https × www/www'suz) aynı siteyi 200 ile
  #    veriyordu. <link rel="canonical"> doğru adresi gösterdiği için Google
  #    büyük ölçüde korunuyordu, ama canonical bir ÖNERİ, 301 bir TALİMAT.
  #    301 ayrıca eski www bağlantılarının değerini tek adreste toplar.
  #
  #    Search Console "Alan adı" mülkü olduğu için dört varyant da aynı
  #    mülke rapor ediyor; bu yüzden sorun panelde hiç görünmüyordu.
  #
  #    İKİ AYRI KURAL, bilerek:
  #      - www kuralı %{HTTPS}'e hiç bakmaz, kendi kendine döngüye GİREMEZ.
  #      - https kuralı hem %{HTTPS} hem X-Forwarded-Proto kontrol eder;
  #        ileride önüne Cloudflare gibi TLS'i sonlandıran bir vekil
  #        konursa sonsuz yönlendirme oluşmaz.
  #    Konak adı hiçbir yerde sabit yazılmadı (%1 ve %{HTTP_HOST}), alan
  #    adı değişse bile kural çalışmaya devam eder.
  #
  #    Bu blok 1. bölümden ÖNCE: https + www'suz gelen eski adresler bu
  #    kurallara hiç takılmadan doğrudan 301'lerine düşer, zincir uzamaz.
  # ---------------------------------------------------------------
  # www -> www'suz (tek adımda https'e de geçer)
  RewriteCond %{HTTP_HOST} ^www\\.(.+)$ [NC]
  RewriteRule ^ https://%1%{REQUEST_URI} [R=301,L]

  # http -> https
  RewriteCond %{HTTPS} !=on
  RewriteCond %{HTTP:X-Forwarded-Proto} !=https
  RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]

  # ---------------------------------------------------------------
  # 1) Eski WordPress adreslerinden yeni adreslere kalıcı (301) taşıma
  #    Adresi DEĞİŞMEYEN sayfalar burada yok — onlar zaten çalışıyor.
  # ---------------------------------------------------------------
${redirects.map(([aciklama, from, to]) => `  # ${aciklama}\n  RewriteRule ${from} ${to} [R=301,L]`).join('\n')}

  # ---------------------------------------------------------------
  # 2) Sondaki eğik çizgiyi zorunlu kıl (indeksteki URL formatı bu)
  #    Gerçek dosya/klasör ve uzantılı isteklere dokunulmaz.
  # ---------------------------------------------------------------
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_URI} !\\.[a-zA-Z0-9]{2,5}$
  RewriteRule ^(.*[^/])$ /$1/ [R=301,L]

  # ---------------------------------------------------------------
  # 3) Bilinmeyen adresler: GERÇEK 404 (yumuşak 404 DEĞİL)
  #
  #    Burada eskiden "RewriteRule . /index.html [L]" vardı — klasik SPA
  #    yönlendirmesi. Bu sitede GEREKSİZ ve ZARARLIYDI: ${tumRotalar.length} rotanın
  #    hepsinin fiziksel index.html'i var, o yüzden gerçek sayfalar bu bloğa
  #    hiç düşmüyor. Buraya yalnızca OLMAYAN adresler düşüyordu ve onlara
  #    ana sayfanın HTML'i 200 ile dönüyordu.
  #
  #    WordPress göçünde bu ciddi bir sorun: 301 listemizde karşılığı olmayan
  #    her eski adres "200 + ana sayfa içeriği" verir, Google da onları ana
  #    sayfanın kopyası olarak indekste tutar. Gerçek 404 ile temiz düşerler.
  #
  #    UYARI: Yeni bir React rotası eklerken vite.config.js'teki listelere de
  #    (staticRoutes / services / serviceAreas / blog) eklemezseniz o adres
  #    artık sessizce yanlış meta ile değil, doğrudan 404 ile cevap verir.
  # ---------------------------------------------------------------
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . - [R=404,L]
</IfModule>

# ---------------------------------------------------------------
# Önbellek
# ---------------------------------------------------------------
<IfModule mod_expires.c>
  ExpiresActive On
  # İçerik hash'i olan varlıklar uzun süre önbelleklenebilir
  ExpiresByType text/css "access plus 1 year"
  # .js için İKİ MIME tipi de yazılmalı: eski Apache'ler application/javascript,
  # güncel olanlar text/javascript sunar. Yalnızca biri yazılırsa diğerini
  # sunan sunucuda JavaScript ne önbelleklenir ne de sıkıştırılır.
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType text/javascript "access plus 1 year"
  ExpiresByType image/jpeg "access plus 6 months"
  ExpiresByType image/png "access plus 6 months"
  ExpiresByType image/webp "access plus 6 months"
  ExpiresByType image/svg+xml "access plus 6 months"
  ExpiresByType font/woff2 "access plus 1 year"
  # index.html önbelleklenmemeli — yoksa site güncellenince eski sürüm görünür
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>

# ---------------------------------------------------------------
# Karakter kodlamasi
# Metin dosyalari UTF-8'dir. Sunucu charset bildirmezse tarayici
# windows-1252 varsayip Turkce karakterleri bozuk gosterir
# ("Kırma" -> "KÄ±rma"). Bu blok o sorunu onler.
# ---------------------------------------------------------------
AddDefaultCharset UTF-8
<IfModule mod_mime.c>
  AddCharset UTF-8 .txt .xml .json .css .js .html .webmanifest
  AddType application/xml .xml
  AddType text/plain .txt
</IfModule>

<IfModule mod_headers.c>
  <FilesMatch "\\.(html)$">
    Header set Cache-Control "no-cache, must-revalidate"
  </FilesMatch>
  Header set X-Content-Type-Options "nosniff"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/plain text/xml application/javascript text/javascript application/json image/svg+xml
</IfModule>

# Olmayan adreslerde ana sayfa DEĞİL, kendi 404 sayfamız gösterilir.
# 404.html noindex taşır; writeBundle üretir.
ErrorDocument 404 /404.html
`

      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap })
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robots })
      this.emitFile({ type: 'asset', fileName: 'llms.txt', source: llms })
      this.emitFile({ type: 'asset', fileName: '.well-known/llms.txt', source: llms })
      this.emitFile({ type: 'asset', fileName: '.htaccess', source: htaccess })
    },

    /**
     * ROTA BAŞINA STATİK HTML
     *
     * Site tek sayfa uygulaması olduğu için sunucu her adreste aynı index.html'i
     * döndürüyordu. JavaScript çalıştırmayan istemciler bütün sayfalarda ANA
     * SAYFANIN başlığını/açıklamasını/görselini görüyordu. WhatsApp, Facebook ve
     * Twitter link önizlemeleri JavaScript çalıştırmaz — bir hizmet sayfasının
     * linkini paylaştığınızda önizlemede ana sayfa çıkıyordu.
     *
     * Burada dist/index.html kopyalanıp her rota için meta etiketleri, canonical
     * ve JSON-LD değiştirilerek dist/<rota>/index.html olarak yazılıyor.
     * Uygulama yine istemcide çalışıyor; değişen yalnızca ilk HTML.
     */
    writeBundle(secenekler) {
      const cikti = secenekler.dir ?? 'dist'
      const anaHtml = fs.readFileSync(path.join(cikti, 'index.html'), 'utf8')

      const kacis = (s) =>
        String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')

      /**
       * ROTAYA ÖZEL <noscript> GÖVDESİ
       *
       * Önceden bu blok 39 sayfada BİREBİR AYNIydı (md5 ile doğrulandı):
       * hepsinde ana sayfanın başlığı ve açıklaması vardı. Sayfa gövdesini
       * React ürettiği için, JavaScript çalıştıramayan her istemci — robots.txt
       * /assets/'i kapattığı sürece Googlebot dâhil, ayrıca çoğu AI tarayıcısı —
       * 39 sayfayı birbirinin kopyası olarak görüyordu. Artık her sayfa kendi
       * H1'ini ve kendi giriş metnini ham HTML'de taşıyor.
       *
       * İçerik, sayfanın render edilmiş hâliyle aynıdır (cloaking değil):
       * aynı başlık, aynı giriş paragrafları.
       */
      const noscriptGovdesi = (rota) => {
        const paragraflar = (rota.govde ?? [])
          .filter(Boolean)
          .map((p) => `      <p>${kacis(p)}</p>`)
          .join('\n')

        return `<div class="noscript-seo">
      <h1>${kacis(rota.h1 ?? rota.title)}</h1>
      <p>${kacis(rota.description)}</p>
${paragraflar}
      <h2>Hizmetlerimiz</h2>
      <ul>
        ${services.map((s) => `<li><a href="/hizmetler/${s.slug}/">${kacis(s.title)}</a></li>`).join('\n        ')}
      </ul>
      <h2>Hizmet Bölgeleri</h2>
      <p><a href="/hizmet-bolgeleri/">${address.city} genelinde ${serviceAreas.length} ilçede hizmet veriyoruz.</a></p>
      <h2>İletişim</h2>
      <p>Telefon: <a href="tel:${phoneRaw}">${kacis(phone)}</a></p>
      <p>Adres: ${kacis(address.full)}</p>
    </div>`
      }

      let yazilan = 0
      for (const rota of rotaMetalari) {
        if (rota.path === '/') continue // ana sayfa zaten dogru

        let html = anaHtml
          // Hero ön yüklemesi ve ön boyaması yalnızca ana sayfaya ait. Diğer
          // rotalarda o görsel hiç kullanılmadığı için kalırsa boşuna ~37 KB
          // indirilir, üstelik yanlış bir hero bir an ekranda görünür.
          .replace(/\s*<link rel="preload" as="image"[^>]*>/, '')
          .replace(/<!--ho-->[\s\S]*?<!--\/ho-->/, '')
          .replace(/<title>[\s\S]*?<\/title>/, `<title>${kacis(rota.title)}</title>`)
          .replace(
            /<meta name="description" content="[^"]*" \/>/,
            `<meta name="description" content="${kacis(rota.description)}" />`
          )
          .replace(
            /<link rel="canonical" href="[^"]*" \/>/,
            `<link rel="canonical" href="${rota.canonical}" />`
          )
          .replace(
            /<meta property="og:title" content="[^"]*" \/>/,
            `<meta property="og:title" content="${kacis(rota.title)}" />`
          )
          .replace(
            /<meta property="og:description" content="[^"]*" \/>/,
            `<meta property="og:description" content="${kacis(rota.description)}" />`
          )
          .replace(
            /<meta property="og:url" content="[^"]*" \/>/,
            `<meta property="og:url" content="${rota.canonical}" />`
          )
          .replace(
            /<meta property="og:image" content="[^"]*" \/>/g,
            `<meta property="og:image" content="${rota.image}" />`
          )
          .replace(
            /<meta name="twitter:title" content="[^"]*" \/>/,
            `<meta name="twitter:title" content="${kacis(rota.title)}" />`
          )
          .replace(
            /<meta name="twitter:description" content="[^"]*" \/>/,
            `<meta name="twitter:description" content="${kacis(rota.description)}" />`
          )
          .replace(
            /<meta name="twitter:image" content="[^"]*" \/>/,
            `<meta name="twitter:image" content="${rota.image}" />`
          )

        // <noscript> gövdesi rotanın kendi metniyle değiştirilir
        html = html.replace(/<div class="noscript-seo">[\s\S]*?<\/div>/, noscriptGovdesi(rota))

        // BreadcrumbList — işaretsiz, çünkü React onu yeniden üretmiyor;
        // silinirse render sonrası hiç kalmaz.
        if (rota.kirintiJsonLd) {
          html = html.replace(
            '</script>',
            `</script>\n  <script type="application/ld+json">\n${JSON.stringify(
              rota.kirintiJsonLd,
              null,
              2
            )}\n  </script>`
          )
        }

        // Sayfaya özel JSON-LD, LocalBusiness şemasının hemen ardına eklenir
        if (rota.jsonLd) {
          // data-seo-build: React yüklendiğinde Seo.jsx bu etiketleri siler ve
          // kendi ürettiklerini koyar. İşaret olmadan sayfada aynı Service /
          // FAQPage şeması İKİ KEZ bulunuyordu (biri statik HTML'den, biri
          // çalışma anından).
          const ek = `</script>\n  <script type="application/ld+json" data-seo-build>\n${JSON.stringify(rota.jsonLd, null, 2)}\n  </script>`
          html = html.replace('</script>', ek)
        }

        const klasor = path.join(cikti, rota.path)
        fs.mkdirSync(klasor, { recursive: true })
        fs.writeFileSync(path.join(klasor, 'index.html'), html)
        yazilan++
      }
      /**
       * 404.html — Apache'nin ErrorDocument'i bunu 404 STATÜSÜYLE sunar.
       *
       * Eskiden ErrorDocument da /index.html'i gösteriyordu: kullanıcı olmayan
       * bir adreste ana sayfanın başlığını/metnini görüyordu. Ayrıca o HTML'in
       * canonical'ı ana sayfayı işaret ettiği için Google bu adresleri ana
       * sayfanın kopyası sayabiliyordu.
       *
       * noindex ŞART: 404 gövdesi yanlışlıkla 200 ile sunulursa (sunucu
       * yapılandırması değişirse) tek koruma bu etiket olur.
       */
      const html404 = anaHtml
        .replace(/\s*<link rel="preload" as="image"[^>]*>/, '')
        .replace(/<!--ho-->[\s\S]*?<!--\/ho-->/, '')
        .replace(/<title>[\s\S]*?<\/title>/, '<title>Sayfa Bulunamadı — 20 Karot</title>')
        .replace(
          /<meta name="description" content="[^"]*" \/>/,
          '<meta name="description" content="Aradığınız sayfa bulunamadı." />'
        )
        // canonical KALDIRILIR — 404 sayfasının kanonik bir karşılığı yoktur.
        // (Kalsaydı ana sayfayı işaret ederdi ve Google bu adresi ana sayfanın
        // kopyası sayardı — düzeltmeye çalıştığımız sorunun ta kendisi.)
        .replace(/\s*<link rel="canonical" href="[^"]*" \/>/, '')
        // Var olan robots etiketi DEĞİŞTİRİLİR, yenisi EKLENMEZ: iki robots
        // etiketi bırakmak Google'a çelişkili sinyal verir.
        .replace(/<meta name="robots" content="[^"]*" \/>/, '<meta name="robots" content="noindex, follow" />')
        // Sosyal önizleme etiketleri de düzeltilir; yoksa ana sayfanınkiler
        // kalır ve og:url olmayan bir adresi ANA SAYFA diye paylaştırır.
        .replace(
          /<meta property="og:title" content="[^"]*" \/>/,
          '<meta property="og:title" content="Sayfa Bulunamadı — 20 Karot" />'
        )
        .replace(
          /<meta property="og:description" content="[^"]*" \/>/,
          '<meta property="og:description" content="Aradığınız sayfa bulunamadı." />'
        )
        .replace(/\s*<meta property="og:url" content="[^"]*" \/>/, '')
        .replace(
          /<meta name="twitter:title" content="[^"]*" \/>/,
          '<meta name="twitter:title" content="Sayfa Bulunamadı — 20 Karot" />'
        )
        .replace(
          /<meta name="twitter:description" content="[^"]*" \/>/,
          '<meta name="twitter:description" content="Aradığınız sayfa bulunamadı." />'
        )
        .replace(/<div class="noscript-seo">[\s\S]*?<\/div>/, `<div class="noscript-seo">
      <h1>Sayfa bulunamadı</h1>
      <p>Aradığınız sayfa taşınmış veya kaldırılmış olabilir.</p>
      <h2>Hizmetlerimiz</h2>
      <ul>
        ${services.map((s) => `<li><a href="/hizmetler/${s.slug}/">${kacis(s.title)}</a></li>`).join('\n        ')}
      </ul>
      <p><a href="/">Ana sayfaya dön</a> · Telefon: <a href="tel:${phoneRaw}">${kacis(phone)}</a></p>
    </div>`)
      fs.writeFileSync(path.join(cikti, '404.html'), html404)

      // eslint-disable-next-line no-console
      console.log(`  ${yazilan} rota icin ayri index.html yazildi (sosyal onizleme + JS'siz istemciler)`)
      // eslint-disable-next-line no-console
      console.log('  404.html yazildi (noindex, gercek 404 statusu icin)')

      /**
       * KÜNYE — sitenin makine okunur özeti.
       *
       * ÇIKTI KLASÖRÜNÜN İÇİNE YAZILMAZ. Orası FTP'ye giden her şey; künye
       * oraya konsaydı https://<domain>/kunye.json adresinden herkes okurdu:
       * bütün rota haritası, hangi sayfaların ince kaldığı, içerik planı.
       * Bu yüzden `rapor/` klasörüne, yayının dışına yazılıyor.
       *
       * Ne işe yarıyor: (1) iki sürümün künyesi karşılaştırılınca "bu build
       * neyi değiştirdi" tek bakışta görünür, (2) eksik/ince sayfalar elle
       * grep çekmeden listelenir, (3) birden fazla siteye aynı motor
       * güncellemesi verildiğinde hangi sitede ne değiştiği izlenebilir.
       */
      const kunyeRotalari = []
      const uyarilar = []
      const yiv = (s) => (s ? [...s].length : 0)

      for (const dosya of tumHtmlDosyalari(cikti)) {
        const icerik = fs.readFileSync(dosya, 'utf8')
        const rota = '/' + path.relative(cikti, dosya).replace(/index\.html$/, '').replace(/\\/g, '/')
        const bul = (re) => (icerik.match(re) ?? [])[1] ?? ''
        const baslik = bul(/<title>([^<]*)<\/title>/)
        const aciklama = bul(/<meta name="description" content="([^"]*)"/)

        // Kelime sayısı noscript gövdesinden: ekranda görünen metnin birebir
        // karşılığı orası (cloaking kuralı gereği aynı olmak zorunda).
        const noscript = [...icerik.matchAll(/<noscript>([\s\S]*?)<\/noscript>/g)].pop()
        const kelime = noscript
          ? noscript[1].replace(/<[^>]+>/g, ' ').trim().split(/\s+/).filter(Boolean).length
          : 0

        kunyeRotalari.push({
          yol: rota,
          baslik,
          baslikUzunluk: yiv(baslik),
          aciklamaUzunluk: yiv(aciklama),
          kelime,
          // Tür başına adet; ham liste okunmuyordu (tek sayfada 80 girdi,
          // çoğu tekrar eden City/Offer/Service).
          sema: [...icerik.matchAll(/"@type":\s*"([A-Za-z]+)"/g)].reduce((sayac, m) => {
            sayac[m[1]] = (sayac[m[1]] ?? 0) + 1
            return sayac
          }, {}),
        })

        // 404 sayfası kasıtlı olarak kısa ve sitemap'te değil; incelik ve
        // başlık kuralları ona uygulanmaz, yoksa her build'de yanlış alarm verir.
        const dorttYuzDort = rota === '/404.html'
        if (!dorttYuzDort && yiv(baslik) > 60) {
          uyarilar.push(`${rota} — başlık ${yiv(baslik)} karakter (60 sınırı aşıldı)`)
        }
        if (!dorttYuzDort && !aciklama) uyarilar.push(`${rota} — meta açıklama yok`)
        if (!dorttYuzDort && kelime > 0 && kelime < 120) {
          uyarilar.push(`${rota} — noscript gövdesi ${kelime} kelime (ince)`)
        }
      }

      let gitSha = ''
      let gitSayac = 0
      try {
        gitSha = execSync('git rev-parse --short HEAD', { encoding: 'utf8' }).trim()
        gitSayac = Number(execSync('git rev-list --count HEAD', { encoding: 'utf8' }).trim())
      } catch {
        // git yoksa künye yine yazılır, yalnızca izlenebilirlik alanı boş kalır
      }

      const kunye = {
        site: siteConfig.domain,
        url,
        yayinSurumu: siteConfig.yayinSurumu,
        // Klasör adı sürümü taşıyor ama hangi KODUN o sürüme girdiğini bu iki
        // alan söylüyor; sürüm elle artırıldığı için tek başına yeterli değil.
        gitSha,
        gitCommitSayisi: gitSayac,
        rotaSayisi: kunyeRotalari.length,
        sitemapUrl: rotaMetalari.length,
        yonlendirmeSayisi: redirects.length,
        rotalar: kunyeRotalari.sort((a, b) => a.yol.localeCompare(b.yol)),
        uyarilar,
      }

      const raporKlasoru = 'rapor'
      fs.mkdirSync(raporKlasoru, { recursive: true })
      const raporYolu = path.join(
        raporKlasoru,
        `${siteConfig.domain}-v${siteConfig.yayinSurumu}.json`
      )
      fs.writeFileSync(raporYolu, JSON.stringify(kunye, null, 2))

      // eslint-disable-next-line no-console
      console.log(`  kunye yazildi: ${raporYolu} (${uyarilar.length} uyari)`)
      // eslint-disable-next-line no-console
      console.log(`\n  YUKLENECEK KLASOR: ${cikti}/  —  icindekilerin TAMAMI (.htaccess dahil)\n`)
    },
  }
}

/**
 * Build çıktısı `dist/` DEĞİL, `yayin/<domain>-v<surum>/`.
 * Gerekçesi siteConfig.js > yayinSurumu içinde yazılı: birden fazla siteyle
 * çalışırken hepsinin çıktısının `dist/` adında olması, FTP'de yanlış sitenin
 * dosyalarını yanlış alan adına yükleme riskini doğuruyor.
 *
 * writeBundle çıktı klasörünü Vite'tan alıyor (`secenekler.dir`), o yüzden
 * burada değiştirmek yeterli — 47 sayfa, sitemap, robots ve .htaccess
 * üretimi otomatik takip ediyor.
 */
export const yayinKlasoru = `yayin/${siteConfig.domain}-v${siteConfig.yayinSurumu}`

export default defineConfig({
  plugins: [react(), tailwindcss(), seoFromConfig()],
  build: {
    outDir: yayinKlasoru,
    rollupOptions: {
      output: {
        // Vite 8 (rolldown) manualChunks yalnızca fonksiyon formunu destekler.
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('swiper')) return 'swiper'
          // yet-another-react-lightbox'ı BURAYA EKLEMEYİN.
          // ProjectGallery.jsx onu `await import()` ile tembel yüklüyor; ama
          // adlandırılmış bir parçaya atandığında statik parça grafiğine
          // giriyor ve Vite her sayfanın HTML'ine hem <link rel="modulepreload">
          // hem de RENDER BLOKLAYAN bir <link rel="stylesheet"> basıyordu.
          // Kural kaldırılınca kendi asenkron parçasını oluşturuyor ve CSS'i
          // yalnızca lightbox gerçekten açıldığında çalışma anında ekleniyor.
          if (/[\\/](react|react-dom|react-router|react-router-dom|scheduler)[\\/]/.test(id)) return 'vendor'
        },
      },
    },
  },
})
