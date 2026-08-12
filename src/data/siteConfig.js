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
  // Google İşletme Profili'nden alındı (Plus Code: Q3W9+FH Denizli Merkezefendi).
  geo: {
    lat: 37.7962244,
    lng: 29.0664114,
    region: 'TR-20', // Denizli plaka kodu
    plusCode: 'Q3W9+FH Denizli Merkezefendi, Denizli',
    // Google Haritalar yer kimliği — gömülü harita bu sayede tam işletme pinini gösterir
    // (adres araması yerine). Kaynak: işletme profilinin paylaşım/embed bağlantısı.
    placeId: '0xa4b23c44d1b911df:0xb76d06306e5b0b53',
    shortLink: 'https://maps.app.goo.gl/sYGUjbXtyVdp2H1b8',
    // Google İşletme Profili'nin kendi gömme (embed) adresi. Adres araması yerine
    // doğrudan işletme pinini ve kartını gösterir. İletişim sayfasındaki harita bunu kullanır.
    embedSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.736081509767!2d29.06641141231915!3d37.796224371863175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa4b23c44d1b911df%3A0xb76d06306e5b0b53!2s20%20Karot%20%7C%20Denizli%20Karot%20Uygulama%20%7C%20Muhemmet%20Senek%C3%A7i!5e0!3m2!1str!2str!4v1786527655394!5m2!1str!2str',
  },

  // ===== Domain & URL =====
  domain: '20karot.com.tr',
  url: 'https://20karot.com.tr',

  // ===== Çalışma Saatleri =====
  // Google İşletme Profili "24 saat açık" diyor — schema ve site metni buna göre.
  workingHours: {
    days: 'Her gün',
    hours: '24 saat açık',
    alwaysOpen: true,
    emergency: '7/24 acil servis',
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
    // Mevcut GA4 mülkünüz. Yayındaki WordPress sitesinin kaynak kodundan
    // bulundu (GTM konteyneri ve Google Tag'in ikisi de buraya yönlendiriyor).
    ga4: 'G-26EVFNCNE4',
    googleAds: '', // TODO: 'AW-XXXXXXXXX' — Google Ads dönüşüm kimliği

    // Google Tag Manager (opsiyonel) — BİLİNÇLİ OLARAK BOŞ. Geri koymayın.
    //
    // Eski konteyner 'GTM-PFPDVBL4' idi (WordPress'ten miras). İçinde GA4
    // dışında hiçbir etiket yoktu, ama iki soruna yol açıyordu:
    //
    // 1) GTM snippet'i `window.gtag`i TANIMLAMAZ; yalnızca dataLayer açar.
    //    gtag ancak GTM inip GA4 etiketini tetikleyip gtag.js'i yükleyince
    //    ortaya çıkıyordu (ölçümde ~880 ms). O ana kadar utils/analytics.js
    //    ilk satırdaki `typeof window.gtag !== 'function'` kontrolünden
    //    dönüyor, erken tıklamalar sessizce kayboluyordu.
    // 2) 121 KB fazladan yük — konteyner inip sonra GA4'ü ayrıca indiriyordu.
    //
    // Boş bırakıldığında vite.config.js gtag.js'i doğrudan basar ve `gtag`
    // satır içinde SENKRON tanımlanır; yarış ortadan kalkar.
    //
    // Search Console doğrulaması DNS TXT ("Alan adı sağlayıcı") ile yapılıyor,
    // yani konteynerin kaldırılması sahipliği etkilemez.
    gtm: '',
    googleSiteVerification: '', // TODO: Search Console doğrulama kodu

    // Google Ads dönüşüm etiketleri.
    // Ads > Hedefler > Dönüşümler > (dönüşüm) > "Etiketi ayarla" ekranındaki
    // send_to değerinin BÖLÜ işaretinden SONRAKİ kısmı buraya yazılır.
    // Örn: send_to: 'AW-123456789/AbC-D_efG12' -> etiket: 'AbC-D_efG12'
    //
    // Önerilen dönüşüm eylemleri (Ads panelinde bu adlarla oluşturun):
    //   telefon  -> "Telefon Tıklama"   (Birincil dönüşüm yapın)
    //   whatsapp -> "WhatsApp Tıklama"  (Birincil)
    //   form     -> "Form Gönderimi"    (Birincil)
    conversions: {
      telefon: '', // TODO
      whatsapp: '', // TODO
      form: '', // TODO
    },
  },

  // ===== Google İşletme Puanı =====
  // Google İşletme Profili: 5,0 / 32 yorum (İnşaat Şirketi kategorisi).
  //
  // `showInSchema` bilinçli olarak FALSE:
  // Google, bir işletmenin kendi sitesinde KENDİ Google puanını aggregateRating
  // olarak işaretlemesini "self-serving review" sayar ve yok sayar; bazı durumlarda
  // yapılandırılmış veri cezası riski taşır. Puan sitede metin/rozet olarak
  // gösterilebilir (buna izin var), JSON-LD'ye yazılmaz.
  // Kendi sitenizde yorum toplamaya başlarsanız true yapabilirsiniz.
  rating: {
    value: 5.0,
    count: 32,
    source: 'Google',
    url: 'https://maps.app.goo.gl/sYGUjbXtyVdp2H1b8',
    showInSchema: false,
  },

  // ===== Hizmet Bölgeleri =====
  // src/data/serviceAreas.js dosyasına taşındı (her ilçenin kendi sayfası var).

  // ===== Kuruluş & İstatistikler =====
  // foundedYear tek kaynak: "yıl tecrübe" bundan HESAPLANIYOR, ikisi
  // birbirinden ayrı düşemez. Yılı değiştirmek yeterli.
  //
  // 2015 seçildi çünkü yayındaki WordPress sitenizin meta açıklaması
  // "10 yıllık deneyim" diyor ve o metin 2025'te yazılmış. Google'ın
  // indeksinde bu ifade var; tutarlı kalmak için aynı çizgide ilerliyoruz.
  foundedYear: 2015,

  stats: {
    // yearsExperience aşağıda foundedYear'dan hesaplanıp ekleniyor.
    completedProjects: 850,
    happyClients: 610,
    teamMembers: 6,
  },

  // ===== SEO =====
  seo: {
    // 58 karakter. "Denizli Karot" + "Denizli Karot Firması" varyantlarını birlikte
    // yakalar; "7/24" gerçek bir ayrışma (Google İşletme Profili: 24 saat açık).
    defaultTitle: 'Denizli Karot Firması — 7/24 Beton Delme, Kesme | 20 Karot',
    // Google ~155 karakterde kesiyor. "karotçu" varyantı ve 7/24 vurgusu burada.
    defaultDescription:
      'Denizli karotçu: beton delme, kesme, kırma, filiz ekimi ve ankraj. 7/24 açığız, tüm ilçelere gidiyoruz. Ücretsiz keşif ve net fiyat: 0545 678 91 94.',
    keywords:
      '20 karot, denizli karot, denizli karot firması, karot denizli, denizli karotçu, beton delme denizli, beton kesme denizli, denizli beton kırma, 7/24 karot denizli, merkezefendi karot, pamukkale karot, asfalt derz kesim denizli, filiz ekimi denizli, kimyasal ankraj denizli',
  },
}

// "X yıl tecrübe" değerini elle tutmak yerine kuruluş yılından hesaplıyoruz;
// böylece her yıl başında güncellemeyi unutma diye bir şey kalmıyor.
siteConfig.stats.yearsExperience = new Date().getFullYear() - siteConfig.foundedYear

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
        '\n  Tam liste: DEPLOY-ONCESI.md'
    )
  }
}

export default siteConfig
