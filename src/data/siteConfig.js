/**
 * Site Yapılandırması — 20 Karot
 *
 * Tüm firma bilgileri bu dosyadan yönetilir.
 * Domain, telefon, adres değişikliklerinde SADECE bu dosyayı güncelle.
 *
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │ TODO işaretli alanlar YAYINA ALMADAN ÖNCE doldurulmalı.              │
 * │ Eksik alanlar için `npm run dev` konsolunda uyarı görürsün.          │
 * │ Tam liste: DEPLOY-ONCESI.md                                          │
 * └──────────────────────────────────────────────────────────────────────┘
 */

const siteConfig = {
  // ===== Firma Bilgileri =====
  companyName: '20 Karot',
  companyShortName: '20 Karot',
  companySlogan: 'Profesyonel Karot Hizmetleri',
  companyDescription:
    'Denizli\'de beton delme, kesme ve kırma işlerinizde profesyonel karot ekipmanlarımızla çalışıyoruz. Minimum titreşim, minimum toz ve hassas kesim yüzeyiyle projenizi zamanında teslim ediyoruz.',

  // ===== İletişim =====
  phone: '0545 678 91 94',
  phoneRaw: '+905456789194',
  email: '20karot20@gmail.com',

  // ===== Adres =====
  address: {
    street: 'Yeni Mah. 5039. Sk. No:14',
    district: 'Merkezefendi',
    city: 'Denizli',
    country: 'Türkiye',
    postalCode: '20100',
    full: 'Yeni Mah. 5039. Sk. No:14, 20100 Merkezefendi / Denizli',
  },

  // ===== Konum =====
  // TODO: lat/lng Google Maps'ten alınmalı (işletme pinine sağ tık > ilk satırdaki koordinat).
  // Doldurulana kadar harita ve "yol tarifi" linkleri ADRES METNİ üzerinden çalışır;
  // JSON-LD'ye de uydurma koordinat yazılmaz. Gerçek koordinat girilince otomatik devreye girer.
  geo: {
    lat: null,
    lng: null,
    region: 'TR-20', // Denizli plaka kodu — doğru
  },

  // ===== Domain & URL =====
  domain: '20karot.com.tr',
  url: 'https://20karot.com.tr',

  // ===== Çalışma Saatleri =====
  // TODO: gerçek çalışma saatlerinizle doğrulayın
  workingHours: {
    days: 'Pazartesi - Cumartesi',
    hours: '08:00 - 18:00',
    schema: ['Mo-Sa 08:00-18:00'],
    emergency: '7/24 acil servis', // TODO: acil servis veriyor musunuz? Vermiyorsanız bu satırı '' yapın.
  },

  // ===== Sosyal Medya =====
  // Boş bırakılan hesaplar sitede hiç gösterilmez — uydurma link oluşmaz.
  social: {
    instagram: '', // TODO: https://instagram.com/...
    facebook: '', // TODO: https://facebook.com/...
    youtube: '', // TODO
    whatsapp: 'https://wa.me/905456789194',
  },

  // ===== Marka Renkleri =====
  // Palet: Kömür + Bordo + Altın (endüstriyel premium)
  // KURAL: altın (primary) yalnızca KOYU zeminde metin/ikon rengi olarak kullanılır.
  //        Açık zeminde metin/ikon rengi BORDO (accent) olmalıdır — altın açık zeminde
  //        okunmuyor (kontrast 2.07:1, WCAG AA sınırı 4.5:1). Bordo açık zeminde 9.7:1.
  colors: {
    primary: '#C8A24A', // metalik altın
    primaryDark: '#A8863A',
    primaryLight: '#E3C77E',
    accent: '#6E1B2E', // derin bordo
    accentDark: '#4E1220',
    accentLight: '#8E2B40',
    dark: '#14100F', // kömür siyah
    darkLight: '#1F1917',
    surface: '#F2EDE7', // krem
  },

  // Tema rengi (mobil tarayıcı adres çubuğu)
  themeColor: '#14100F',

  // ===== Analytics =====
  // Boş bırakıldığında ilgili script hiç yüklenmez.
  analytics: {
    ga4: '', // TODO: 'G-XXXXXXXXXX'
    googleAds: '', // TODO
    googleSiteVerification: '', // TODO: Search Console doğrulama kodu
  },

  // ===== Google İşletme Puanı =====
  // TODO: Google İşletme Profili'nizdeki GERÇEK puan ve yorum sayısı.
  // Doldurulana kadar JSON-LD'ye aggregateRating YAZILMAZ.
  // Uydurma puan yayınlamak Google'ın yapılandırılmış veri politikasına aykırıdır
  // ve manuel işlem (ceza) riski taşır.
  rating: {
    value: null, // örn. 4.9
    count: null, // örn. 37
  },

  // ===== Hizmet Bölgeleri =====
  // TODO: gerçekte hizmet verdiğiniz ilçeleri bırakın, vermediklerinizi silin.
  serviceAreas: [
    { name: 'Merkezefendi', slug: 'merkezefendi' },
    { name: 'Pamukkale', slug: 'pamukkale' },
    { name: 'Honaz', slug: 'honaz' },
    { name: 'Sarayköy', slug: 'saraykoy' },
    { name: 'Buldan', slug: 'buldan' },
    { name: 'Çivril', slug: 'civril' },
    { name: 'Çal', slug: 'cal' },
    { name: 'Acıpayam', slug: 'acipayam' },
    { name: 'Tavas', slug: 'tavas' },
    { name: 'Kale', slug: 'kale' },
  ],

  // ===== İstatistikler =====
  // TODO: GERÇEK RAKAMLARLA DEĞİŞTİRİN. Bunlar yer tutucudur.
  // Bir alanı `null` yaparsanız o kutu sitede hiç gösterilmez (uydurma rakam çıkmaz).
  stats: {
    yearsExperience: 10,
    completedProjects: 750,
    happyClients: 500,
    teamMembers: 8,
  },

  // ===== SEO =====
  seo: {
    defaultTitle: 'Denizli Karot — Beton Delme, Kesme, Kırma | 20 Karot',
    defaultDescription:
      'Denizli\'de beton delme, kesme ve kırma hizmetleri. Profesyonel karot ekipmanlarıyla minimum titreşim, minimum toz ve hassas kesim. Ücretsiz keşif ve fiyat teklifi için 20 Karot\'u arayın.',
    keywords:
      '20 karot, denizli karot, karot denizli, beton delme denizli, beton kesme denizli, beton kırma, karotçu denizli, merkezefendi karot, pamukkale karot, asfalt derz kesim denizli',
  },
}

/**
 * Geliştirme sırasında eksik kalan TODO alanlarını konsola yazar.
 * Production build'de hiç çalışmaz (tree-shake edilir).
 *
 * `import.meta.env?.` — bu dosya vite.config.js tarafından da (Node ortamında)
 * import ediliyor; orada import.meta.env tanımsızdır, optional chaining şart.
 */
if (import.meta.env?.DEV) {
  const eksik = []
  if (siteConfig.geo.lat === null || siteConfig.geo.lng === null) eksik.push('geo.lat / geo.lng (harita koordinatı)')
  if (!siteConfig.social.instagram) eksik.push('social.instagram')
  if (!siteConfig.social.facebook) eksik.push('social.facebook')
  if (!siteConfig.analytics.ga4) eksik.push('analytics.ga4')
  if (!siteConfig.analytics.googleSiteVerification) eksik.push('analytics.googleSiteVerification')
  if (siteConfig.rating.value === null) eksik.push('rating.value / rating.count (Google puanı)')

  if (eksik.length) {
    console.warn(
      `[20 Karot] siteConfig.js — yayına almadan önce doldurulmalı (${eksik.length} alan):\n` +
        eksik.map((e) => `  • ${e}`).join('\n') +
        '\n  Ayrıca stats.* rakamları yer tutucudur. Tam liste: DEPLOY-ONCESI.md'
    )
  }
}

export default siteConfig
