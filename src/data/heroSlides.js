/**
 * Ana sayfa hero slider içerikleri.
 *
 * Her slayt bir hizmete bağlıdır: arka plan fotoğrafı o hizmetin sahadaki hâlini
 * gösterir, ikinci buton doğrudan o hizmetin detay sayfasına gider. Böylece hero
 * hem tanıtım yapıyor hem de hizmet sayfalarına iç link veriyor.
 *
 * image     : public/images/hero/*.webp (1600x900). Görsel yoksa otomatik tasarım
 *             zemini gösterilir — kırık görsel çıkmaz.
 * icon      : src/components/Icon.jsx ikon adı
 * serviceTo : ikinci butonun gideceği hizmet sayfası (boş bırakılırsa buton
 *             "Hizmetlerimiz" olarak /hizmetler'e gider)
 *
 * Slayt eklemek/çıkarmak için sadece bu diziyi düzenle.
 */

const heroSlides = [
  {
    id: 'karot',
    image: '/images/hero/hero-1.webp',
    imageAlt: 'Betonarme duvarda elmas uçlu karot makinesiyle delme işlemi',
    icon: 'drill',
    badge: 'Denizli & Tüm İlçeler',
    // DİKKAT: İlk slaytın başlığı sayfanın <h1>'idir — sitedeki en ağırlıklı
    // tek başlık. Önceden "Profesyonel / Beton Delme & Kesme / Hizmetleri"
    // yazıyordu; içinde ne "Denizli" ne de "Karot" geçiyordu, yani hedef
    // sorguların hiçbirini karşılamıyordu. Bu üç satır tek bir cümle olarak
    // okunur, sırayı bozarsanız cümle bozulur.
    title: "Denizli'de Karot,",
    titleAccent: 'Beton Delme & Kesme',
    titleAfter: 'Hizmetleri',
    description:
      'Karot ve elmas diskli ekipmanlarımızla <strong>kırıcıya göre çok daha az toz, gürültü ve titreşim</strong>. Taşıyıcı sisteme yük bindirmeden, pürüzsüz kesim yüzeyiyle teslim.',
    serviceTo: '/hizmetler/karot/',
    serviceLabel: 'Karot Hizmeti',
  },
  {
    id: 'beton-kesme',
    image: '/images/hero/hero-2.webp',
    imageAlt: 'Elmas diskli duvar testeresiyle betonarme perde duvar kesimi',
    icon: 'saw',
    badge: 'Kapı, Pencere, Asansör Boşluğu',
    title: 'Duvara ve Döşemeye',
    titleAccent: 'Hassas Kesim',
    titleAfter: '',
    description:
      'Ray sistemli duvar testeresiyle <strong>düz ve temiz kesim hattı</strong>. Kapı-pencere açıklığı, asansör ve merdiven boşluğu, döşeme ve temel kesimi.',
    serviceTo: '/hizmetler/beton-kesme/',
    serviceLabel: 'Beton Kesme',
  },
  {
    id: 'beton-kirma',
    image: '/images/hero/hero-3.webp',
    imageAlt: 'Şantiyede kırıcıyla kontrollü beton kırma çalışması',
    icon: 'hammer',
    badge: 'Tadilat & Renovasyon',
    title: 'Kontrollü',
    titleAccent: 'Beton Kırma',
    titleAfter: 've Söküm',
    description:
      'Taşıyıcı sisteme zarar vermeden, toz kontrolü altında kırım. <strong>Moloz toplama ve nakliye dâhil</strong> — sahayı temiz teslim ediyoruz.',
    serviceTo: '/hizmetler/beton-kirma/',
    serviceLabel: 'Beton Kırma',
  },
  {
    id: 'asfalt-derz',
    image: '/images/hero/hero-4.webp',
    imageAlt: 'Zemin kesme makinesiyle asfalt üzerinde derz kesimi',
    icon: 'road',
    badge: 'Yol & Altyapı',
    title: 'Asfalt ve Zeminde',
    titleAccent: 'Düzgün Derz Kesimi',
    titleAfter: '',
    description:
      'Altyapı hendek kesimleri, derz açma ve yenileme çalışmaları. Elmas diskli yol kesme makineleriyle <strong>trafiğe en az etkiyle</strong>, temiz kesim hattı.',
    serviceTo: '/hizmetler/asfalt-derz-kesim/',
    serviceLabel: 'Asfalt Derz Kesim',
  },
  {
    id: 'filiz-ankraj',
    image: '/images/hero/hero-5.webp',
    imageAlt: 'Betonarme perdeye ekilmiş donatı filizlerinin kontrolü',
    icon: 'rebar',
    badge: 'Güçlendirme & Ek Yapı',
    title: 'Filiz Ekimi ve',
    titleAccent: 'Kimyasal Ankraj',
    titleAfter: '',
    description:
      'Mevcut betonarmeye yeni bağlantı noktaları. Delik temizliği ve <strong>kürleme süresine uyulmadan yük verilmez</strong>; talep halinde çekme testi yapılır.',
    serviceTo: '/hizmetler/filiz-ekimi/',
    serviceLabel: 'Filiz Ekimi',
  },
  {
    id: 'yikim',
    image: '/images/hero/hero-6.webp',
    imageAlt: 'Toz bastırma sistemi eşliğinde kontrollü bina yıkımı',
    icon: 'demolition',
    badge: 'Kentsel Dönüşüm',
    title: 'Planlı ve',
    titleAccent: 'Kontrollü Yıkım',
    titleAfter: '',
    description:
      'Çevre güvenliği, toz bastırma ve moloz yönetimiyle planlı yıkım. <strong>Kısmi yıkım ve kat indirme</strong> işlerinde komşu yapıya zarar vermeden çalışıyoruz.',
    serviceTo: '/hizmetler/kontrollu-bina-yikimi/',
    serviceLabel: 'Kontrollü Yıkım',
  },
  {
    id: 'acil',
    image: '/images/hero/hero-7.webp',
    imageAlt: 'Gece çalışma ışıkları altında beton kesme operasyonu',
    icon: 'siren',
    badge: '7/24 Açığız',
    title: 'Gece de',
    titleAccent: 'Acil Servis',
    titleAfter: 'Veriyoruz',
    description:
      'İşletmenizin kapalı olduğu saatlerde, trafiğin durduğu gece vakitlerinde çalışabiliyoruz. <strong>Google profilimizde 24 saat açık görünüyoruz</strong> — acil durumda arayın, durumu birlikte değerlendirelim.',
    serviceTo: '/iletisim/',
    serviceLabel: 'Bize Ulaşın',
  },
]

export default heroSlides
