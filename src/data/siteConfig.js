/**
 * Site Yapılandırması — Denizli Tomay Halı Yıkama
 *
 * Tüm firma bilgileri bu dosyadan yönetilir.
 * Domain, telefon, adres değişikliklerinde SADECE bu dosyayı güncelle.
 *
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │ Buradaki her değer canlı siteden (denizlihaliyikama.net.tr) ya da    │
 * │ işletme sahibinden DOĞRULANARAK alınmıştır. Kaynağı olmayan alan     │
 * │ null bırakılır — uydurma değer yazılmaz.                             │
 * │ Tam olgu listesi: docs/olgu-sayfasi.md                               │
 * │ TODO işaretli alanlar YAYINA ALMADAN ÖNCE doldurulmalı.              │
 * └──────────────────────────────────────────────────────────────────────┘
 */

const siteConfig = {
  // ===== Firma Bilgileri =====
  companyName: 'Denizli Tomay Halı Yıkama',
  companyShortName: 'Tomay Halı Yıkama',
  // KISA TUTUN. Bu metin logo kilidinde marka adının ALTINA basılıyor
  // (Logo.jsx yedek görünümü). Uzun bir cümle yazıldığında header'daki menüyü
  // ve footer düzenini itiyor — bir kez yaşandı, cümle şuydu:
  // "Halınız Fabrikada Yıkanır, Kapınıza Teslim Edilir". O cümle hero'nun işi.
  companySlogan: 'Fabrikasyon Halı Yıkama',
  companyDescription:
    'Denizli\'de halı, koltuk, perde ve yorgan yıkama. Halınızı adresinizden alıyor, 16 fırçalı tam otomatik makinelerde bitkisel ve antibakteriyel şampuanla yıkıyor, kapalı kurutma odalarında kurutup ambalajlı teslim ediyoruz. Alım ve teslim ücretsiz.',

  // ===== Sektör =====
  // Motor tarafındaki metinler (llms.txt, JSON-LD, noscript H1) buradan beslenir.
  // ESKİDEN vite.config.js içine gömülüydü; sektör değişince orada kalıyordu.
  sector: {
    // llms.txt başlığı ve noscript H1'i bu ikisinden kurulur.
    baslikHizmetleri: 'Halı, Koltuk & Perde Yıkama',
    tanim: 'Halı yıkama, koltuk yıkama, perde ve yorgan temizliği',
    hizmetKatalogAdi: 'Halı ve Tekstil Yıkama Hizmetleri',
    // Aynı işin farklı adları — LLM'ler farklı terimle sorulduğunda karşılığı bulsun.
    adlandirmalar: [
      'Halı yıkama = halı temizleme = halı yıkatma; fabrikasyon yıkama, halının tesise getirilip makinede yıkanmasıdır.',
      'Koltuk yıkama = koltuk temizleme = yerinde koltuk yıkama; koltuk taşınmaz, ekip adrese gelir.',
      'Stor perde = zebra perde; ikisi de mekanizmalı perdedir ve ultrasonik yıkanır.',
      'El dokuma halı = yün halı = kilim; makine halısından farklı program ister.',
      'Shaggy = uzun tüylü halı; bambu ve peluş halılar da aynı gruba girer.',
      'Akar = toz akarı; halı ve yatakta yaşayan, alerji tetikleyen mikroskobik canlı.',
    ],
    // Sınırların yazılı olması gerekiyor — LLM'ler bunu alıntılar.
    kapsamSiniri: [
      '**Halı tamiri, onarımı ve saçak yenileme yapmıyoruz.** Yıkama sırasında fark ettiğimiz yırtık, sökük veya güve hasarını teslimde size bildiriyoruz; onarımı halı tamircisinin işidir.',
      '**Halı boyama ve renk yenileme yapmıyoruz.** Solmuş bir halı yıkandığında temizlenir, rengi geri gelmez. Yıkamadan renk beklentisi varsa bunu baştan söylüyoruz.',
      '**Duvardan duvara döşeli halıfleksi tesise getiremeyiz.** Sökülemeyen zemin kaplaması yerinde makineyle temizlenir; bu ayrı bir iştir ve halı yıkama fiyatıyla karıştırılmamalıdır.',
    ],
  },

  // ===== İletişim =====
  phone: '0537 372 67 04',
  phoneRaw: '+905373726704',
  // İşletme sahibinden alındı (2026-08-25). Canlı eski sitede e-posta hiç yoktu;
  // adresin tek kaynağı bu bilgi, olgu sayfasında da aynı kaynakla kayıtlı.
  // BOŞ BIRAKILMAMALI: bu değeri okuyan yerlerin çoğunda boş-değer koruması YOK.
  // Boşken JSON-LD'ye `"email": ""` yazılıyor, llms.txt'in İletişim bloğuna
  // `[](mailto:)` düşüyor, Footer/İletişim/Yasal sayfalarda ise metinsiz ve
  // hedefsiz bir `mailto:` bağlantısı çiziliyordu. Yeni bir adres girilmeden
  // burası boşaltılmamalı.
  email: 'bilgi@denizlihaliyikama.net.tr',

  // ===== Adres =====
  address: {
    street: 'Eskihisar Mah. Pamukkale Sk. No:21/A',
    district: 'Merkezefendi',
    city: 'Denizli',
    country: 'Türkiye',
    postalCode: '20020',
    full: 'Eskihisar Mah. Pamukkale Sk. No:21/A, 20020 Merkezefendi / Denizli',
  },

  // ===== Konum =====
  /**
   * KONUM.
   *
   * lat/lng 2026-08-26'da işletme sahibince harita üzerinden işaretlendi ve
   * DOĞRULANDI: ters geokodlama (OpenStreetMap Nominatim) bu koordinat için
   * "Eskihisar Mahallesi, Merkezefendi, Denizli, 20020" döndürüyor — yukarıdaki
   * `address` ile posta koduna kadar birebir. Koordinatı elle değiştirirseniz
   * aynı doğrulamayı TEKRAR yapın; yanlış koordinat müşteriyi başka bir
   * adrese yollar.
   *
   * Beslediği yerler: vite.config.js:283 (LocalBusiness > geo > GeoCoordinates),
   * :318-320 (geo.position + ICBM meta), utils/links.js > mapEmbedUrl() ve
   * mapsUrl(). Koordinat dolu olduğu için harita artık adres araması değil,
   * tam iğne gösteriyor.
   *
   * ---------------------------------------------------------------------
   * shortLink BİLEREK BOŞ — buraya harita iğnesi bağlantısı KOYMAYIN.
   *
   * Bu alan vite.config.js:313'te `sameAs`e giriyor. sameAs'in anlamı
   * "bu varlığın BAŞKA BİR YERDEKİ AYNISI" demektir; doğrulanmış bir Google
   * İşletme Profili oraya yazılır. Haritaya bırakılmış bir iğne bir varlık
   * değil, sadece bir koordinattır (paylaşılan gömme adresinin etiketi de
   * işletme adı değil, `37°49'10.7"N 29°06'55.0"E` idi) — oraya yazmak
   * Google'a yanlış sinyal olur.
   *
   * İşletmenin Google İşletme Profili KAPALI (2026-08-26). Yeniden
   * açıldığında: shortLink + placeId doldurulur, o zaman sameAs gerçek bir
   * bağ kurar. embedSrc'ye de gerek kalmaz; profil açılınca placeId ile
   * gömme zaten işletme adını gösterir.
   * ---------------------------------------------------------------------
   */
  geo: {
    lat: 37.8194033,
    lng: 29.1146557,
    region: 'TR-20', // Denizli plaka kodu
    plusCode: '',
    placeId: '', // TODO: İşletme Profili açılınca
    shortLink: '', // TODO: İşletme Profili açılınca (yukarıdaki uyarıyı okuyun)
    embedSrc: '', // gerekmiyor: lat/lng dolu, mapEmbedUrl() iğneyi kendisi kuruyor
  },

  // ===== Domain & URL =====
  // İKİSİ BİRLİKTE değişir; build `url === 'https://' + domain` kontrolü yapar.
  domain: 'denizlihaliyikama.net.tr',
  url: 'https://denizlihaliyikama.net.tr',

  /**
   * YAYIN SÜRÜMÜ — build çıktısının klasör adını belirler.
   * null → OTOMATİK (v1, v2, v3...). Sayı → o sürümün üzerine yazar.
   */
  yayinSurumu: null,

  // ===== Çalışma Saatleri =====
  // Tesis Pazartesi–Cumartesi 07:00–18:00 (canlı sitenin JSON-LD'si).
  // Alma-teslim servisi HER GÜN çalışıyor (işletme sahibi, 2026-08-25) —
  // ikisi ayrı alan çünkü ayrı şeyler: tesise gelen müşteri Pazar kapalı bulur,
  // ama halısının alınmasını Pazar günü de isteyebilir.
  workingHours: {
    days: 'Pazartesi – Cumartesi',
    hours: '07:00 – 18:00',
    alwaysOpen: false,
    // Schema.org openingHoursSpecification için gün kodları
    schemaDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    schemaOpens: '07:00',
    schemaCloses: '18:00',
    pickup: 'Alım ve teslim servisi her gün',
  },

  // ===== Teslim ve Ticari Koşullar =====
  // Sayfa metinlerinde bu değerler ELLE yazılmaz, buradan gelir.
  service: {
    teslimSuresi: '3-4 iş günü',
    ucretsizServis: true,
    odeme: 'Kapıda nakit veya kredi kartı',
    ambalajli: true,
    sampuan: 'Bitkisel, antialerjik ve antibakteriyel',
  },

  // ===== Sosyal Medya =====
  // Boş bırakılan hesaplar sitede hiç gösterilmez — uydurma link oluşmaz.
  social: {
    instagram: 'https://www.instagram.com/tomay.hali.yikama',

    /**
     * DİKKAT — bu bir kişisel profil adresi (isim + rakam biçimi), işletme
     * Sayfası değil. Yanlışlıkla konulmadı: işletme Facebook'ta bu profilden
     * yürüyor, 2026-08-26'da işletme sahibince doğrulandı. "Düzeltmeye"
     * kalkmayın; ayrı bir işletme Sayfası açılırsa o zaman burası değişir.
     *
     * Bu değer İKİ yere birden gidiyor:
     *   1) src/utils/links.js > sosyal bağlantılar — sitedeki Facebook düğmesi
     *   2) vite.config.js > sameAs — LocalBusiness şeması
     * sameAs "bu işletmenin başka yerdeki AYNISI" demektir; kişisel profil
     * tam karşılığı olmadığı için Google bunu yok sayabilir. Zararı yok,
     * ziyaretçi için faydası var — bilinerek böyle bırakıldı.
     */
    facebook: 'https://www.facebook.com/mevlut.furkan.395',
    youtube: '', // TODO
    whatsapp: 'https://wa.me/905373726704',
  },

  // ===== Marka Renkleri =====
  // DİKKAT: Bu blok yalnızca BELGELEME amaçlıdır, koda beslenmez.
  // Gerçek tek kaynak: src/index.css > @theme bloğu. Renk değiştirirken ORAYI
  // düzenleyin. (Devralınan iskelette bu blok ölü veriydi ve @theme'den ayrışmıştı.)
  // Ölçülmüş kontrast oranları için: src/index.css başındaki tablo.
  colors: {
    primary: '#E2AC4A', // altın — YALNIZCA koyu zeminde
    accent: '#10388C', // lacivert — YALNIZCA açık zeminde
    dark: '#0A1832', // derin lacivert
    surface: '#F6F3EC', // sıcak krem
  },

  // Tema rengi (mobil tarayıcı adres çubuğu)
  themeColor: '#0A1832',

  // ===== Analytics =====
  // Boş bırakıldığında ilgili script hiç yüklenmez.
  analytics: {
    /* GA4 mülkü 2026-08-25'te açıldı (akış adı "site",
       https://denizlihaliyikama.net.tr). Devralınan canlı sitede GA4 yoktu,
       yalnızca Ads etiketi vardı. */
    ga4: 'G-FF3630L3MG',

    // Google Ads — 2026-08-26'da BİLİNÇLİ OLARAK BOŞALTILDI. Geri koymadan önce
    // aşağıyı okuyun.
    //
    // Kimlik kaybolmasın diye burada duruyor: 'AW-18007504148' (devralınan canlı
    // sitenin gtag'inden okunmuştu). Reklam verilmeye başlanınca tırnak arasına
    // geri yazmak yeterli.
    //
    // NEDEN KALDIRILDI: işletme reklam vermiyor ve aşağıdaki `conversions` alanlarının
    // üçü de boş — yani etiket tek bir dönüşüm bile göndermiyordu (utils/analytics.js
    // > donusumBildir hem `googleAds` hem etiket ister). Karşılığında ödenen bedel
    // ölçüldü (yerel build, 7 koşu almaşık, Lighthouse mobil ayarları, MEDYAN):
    //
    //   TBT                 170 ms (164-260)  ->   68 ms (58-96)   -%60
    //   toplam bayt         1025 KB           ->  831 KB           -194 KB
    //   gtag                310 KB / 2 istek  ->  163 KB / 1 istek
    //   üçüncü taraf çerez  .doubleclick.net test_cookie  ->  YOK
    //   LCP                 4540 ms           -> 4528 ms  (aralıklar örtüşüyor: fark yok)
    //
    // Sitedeki TEK üçüncü taraf çerezi buydu. Best Practices 73'ün sebebi olan
    // third-party-cookies denetimi (26 ağırlığın 5'i) bu yüzden düşüyordu; ayrıca
    // ad.doubleclick.net / googleads.g.doubleclick.net / google.com.tr istekleri de
    // bu etiketle birlikte gitti. LCP'ye etkisi YOK: gtag `async`, JS zincirini
    // bekletmiyor — 20karot (tek etiket) ile birebir kıyasta iki site de aynı LCP.
    //
    // GERİ KOYARKEN: conversions.telefon/whatsapp/form da doldurulmalı. Yoksa etiket
    // yine 150 KB inip hiçbir dönüşüm ölçmez — bugüne kadar olan tam olarak buydu.
    googleAds: '',

    // Google Tag Manager — BİLİNÇLİ OLARAK BOŞ. Geri koymayın.
    // GTM snippet'i window.gtag'i TANIMLAMAZ; yalnızca dataLayer açar. gtag
    // ancak GTM inip etiketi tetikleyince ortaya çıkar ve o ana kadarki
    // tıklamalar sessizce kaybolur. Boş bırakıldığında vite.config.js gtag.js'i
    // doğrudan basar ve gtag satır içi SENKRON tanımlanır.
    gtm: '',
    googleSiteVerification: '', // TODO: Search Console doğrulama kodu

    // Google Ads dönüşüm etiketleri.
    // Ads > Hedefler > Dönüşümler > "Etiketi ayarla" ekranındaki send_to
    // değerinin BÖLÜ işaretinden SONRAKİ kısmı buraya yazılır.
    conversions: {
      telefon: '', // TODO
      whatsapp: '', // TODO
      form: '', // TODO
    },
  },

  // ===== Google İşletme Puanı =====
  // TODO: Google İşletme Profili puanı bilinmiyor — null kalmalı.
  // Kaynağı olmayan puan yayınlanamaz.
  //
  // `showInSchema` bilinçli olarak FALSE: Google, bir işletmenin kendi sitesinde
  // KENDİ Google puanını aggregateRating olarak işaretlemesini "self-serving
  // review" sayar ve yok sayar. Puan sitede metin/rozet olarak gösterilebilir,
  // JSON-LD'ye yazılmaz.
  rating: {
    value: null,
    count: null,
    source: 'Google',
    url: '',
    showInSchema: false,
  },

  // ===== Kuruluş & İstatistikler =====
  // Canlı sitedeki sayaç hedeflerinden (data-target) alındı:
  // 15000 yıkanan halı, 5000 mutlu müşteri, 10 yıl tecrübe, %100 hijyen.
  // "10+ yıl" ifadesi 2026'da yayında ⇒ kuruluş 2016.
  foundedYear: 2016,

  stats: {
    // yearsExperience aşağıda foundedYear'dan hesaplanıyor.
    washedCarpets: 15000,
    happyClients: 5000,
    hygieneGuarantee: 100,
  },

  // ===== SEO =====
  //
  // BAŞLIK KALIBI — bilinçli olarak "<Hizmet> <Şehir>" ile başlıyor, "<Şehir>
  // <Hizmet>" ile değil. Sebebi ölçülebilir: hedef sorgunun kendisi
  // "halı yıkama denizli" ve Google başlığın BAŞINDAKİ kelimelere daha çok
  // ağırlık veriyor. Marka adı sona gidiyor çünkü kimse markayı aramıyor —
  // site şu an "denizli halı yıkama" sorgusunda 5-6. sayfada.
  //
  // Kalıp:  <Ana hizmet> Denizli | <Yan hizmetler> - <Marka>
  // Bu kalıp routeMeta.js'teki TÜM rota başlıklarında da kullanılır.
  seo: {
    // 56 karakter — Google ~60'ta kesiyor.
    defaultTitle: 'Halı Yıkama Denizli | Koltuk ve Stor Perde Yıkama - Tomay',
    // Google ~155 karakterde kesiyor. "ücretsiz servis" ve "fabrika" varyantları burada.
    defaultDescription:
      'Halı yıkama Denizli: fabrikamızda 16 fırçalı makinelerde yıkıyoruz. Koltuk ve stor perde yıkama, ücretsiz alım-teslim, 3-4 iş günü. Teklif: 0537 372 67 04.',
    keywords:
      'halı yıkama denizli, denizli halı yıkama, halı yıkama fabrikası denizli, halı yıkama fiyatları denizli, denizli koltuk yıkama, yerinde koltuk yıkama denizli, evde koltuk yıkama denizli, stor perde yıkama denizli, zebra perde yıkama denizli, perde yıkama denizli, antibakteriyel halı yıkama denizli, ücretsiz servisli halı yıkama denizli, halı yıkama merkezefendi, halı yıkama pamukkale, tomay halı yıkama',

    /**
     * HEDEF SORGU HARİTASI — hangi sayfa hangi sorguyu sahipleniyor.
     *
     * Tek kural: bir sorguyu YALNIZCA bir sayfa hedefler. İki sayfa aynı sorguya
     * girerse Google hangisini göstereceğine kendi karar verir ve ikisi de zayıflar
     * (canlı sitede bugün tam olarak bu var: ana sayfa ile /denizli-hali-yikama
     * aynı sorguyu hedefliyor).
     *
     * "en iyi" / "en ucuz" sorguları hakkında: bu sorgular hedeflenir ama
     * İDDİA EDİLMEZ. "Denizli'nin en iyi halı yıkamacısıyız" yazmak hem
     * doğrulanamaz bir üstünlük iddiası hem de kimseyi ikna etmiyor. Bunun
     * yerine sorunun KENDİSİ cevaplanır: "Denizli'de halı yıkamacı seçerken
     * neye bakmalı" — sorguyu karşılar, iddia içermez, alıntılanabilir.
     */
    hedefSorgular: {
      anaSayfa: ['halı yıkama denizli', 'denizli halı yıkama', 'halı yıkama fabrikası denizli'],
      'hizmetler/hali-yikama': ['antibakteriyel halı yıkama denizli', 'ücretsiz servisli halı yıkama denizli'],
      'hizmetler/koltuk-yikama': ['denizli koltuk yıkama', 'yerinde koltuk yıkama denizli', 'evde koltuk yıkama denizli'],
      'hizmetler/stor-perde-yikama': ['stor perde yıkama denizli', 'perde yıkama denizli', 'zebra perde yıkama denizli'],
      'blog/hali-yikama-fiyatlari': ['halı yıkama fiyatları denizli', 'denizli koltuk yıkama fiyatları'],
      'blog/hali-yikamaci-secimi': ['en iyi halı yıkama denizli', 'en ucuz halı yıkama denizli'],
      bolgeSayfalari: ['halı yıkama <ilçe>', 'halı yıkama <mahalle>', '<mahalle> koltuk yıkama'],
    },
  },
}

// "X yıl tecrübe" değerini elle tutmak yerine kuruluş yılından hesaplıyoruz.
siteConfig.stats.yearsExperience = new Date().getFullYear() - siteConfig.foundedYear

/**
 * Geliştirme sırasında eksik kalan TODO alanlarını konsola yazar.
 * Production build'de hiç çalışmaz (tree-shake edilir).
 */
if (import.meta.env?.DEV) {
  const eksik = []
  if (!siteConfig.email) eksik.push('email')
  if (siteConfig.geo.lat === null || siteConfig.geo.lng === null) eksik.push('geo.lat / geo.lng (harita koordinatı)')
  if (!siteConfig.geo.placeId) eksik.push('geo.placeId (Google İşletme Profili)')
  if (!siteConfig.geo.embedSrc) eksik.push('geo.embedSrc (harita gömme adresi)')
  if (!siteConfig.social.facebook) eksik.push('social.facebook')
  if (!siteConfig.analytics.ga4) eksik.push('analytics.ga4')
  if (!siteConfig.analytics.googleSiteVerification) eksik.push('analytics.googleSiteVerification')
  if (siteConfig.rating.value === null) eksik.push('rating.value / rating.count (Google puanı)')

  if (eksik.length) {
    console.warn(
      `[${siteConfig.companyShortName}] siteConfig.js — yayına almadan önce doldurulmalı (${eksik.length} alan):\n` +
        eksik.map((e) => `  • ${e}`).join('\n') +
        '\n  Tam liste: DEPLOY-ONCESI.md'
    )
  }
}

export default siteConfig
