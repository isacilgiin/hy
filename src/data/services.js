/**
 * Hizmet Verileri
 *
 * Her hizmetin slug'ı, başlığı, açıklaması, ikon ANAHTARI ve detay içeriği burada.
 * Navigasyon, sitemap ve tüm sayfalar bu veriden beslenir.
 *
 * icon  : src/components/Icon.jsx içindeki ikon adı (emoji DEĞİL)
 * image : public/images/hizmetler/<slug>.jpg — görsel yoksa otomatik olarak
 *         tasarım placeholder'ı gösterilir, kırık görsel çıkmaz.
 *
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │ NOT: Ekipman açıklamaları bilinçli olarak MARKA/MODEL İÇERMEZ.       │
 * │ Referans sitedeki "Hilti DD 150-U", "Hilti TE 3000-AVR" gibi model   │
 * │ iddiaları o firmanın envanteriydi; sizin makine parkurunuzu bilmeden │
 * │ yazmak uydurma iddia olurdu. Kendi makinelerinizin marka/modelini    │
 * │ eklemek isterseniz `features` listelerine yazın.                     │
 * └──────────────────────────────────────────────────────────────────────┘
 */

const services = [
  {
    id: 1,
    slug: 'beton-delme',
    title: 'Beton Delme',
    shortTitle: 'Beton Delme',
    icon: 'drill',
    image: '/images/hizmetler/beton-delme.jpg',
    shortDescription:
      'Karot makineleriyle 50mm\'den 1000mm\'ye kadar her çapta hassas beton delme işlemi.',
    description:
      'Profesyonel karot makinelerimizle her çapta beton delme işlemi gerçekleştiriyoruz. Tesisat geçişleri, havalandırma kanalları, baca delikleri ve daha fazlası için minimum titreşim ve toz ile çalışıyoruz. Su soğutmalı elmas uçlarımız sayesinde delik kenarları pürüzsüz kalır, ek sıva veya tamir işi gerektirmez.',
    features: [
      '50mm - 1000mm arası çap seçenekleri',
      'Su soğutmalı elmas karot uçları',
      'Minimum titreşim ve toz',
      'Hassas ve düzgün yüzey kalitesi',
      'Yatay, dikey ve açılı delme',
      'Betonarme, taş ve tuğlada uygulama',
    ],
    applications: [
      'Tesisat geçiş delikleri',
      'Havalandırma ve klima kanalları',
      'Baca delikleri',
      'Elektrik ve data kablo geçişleri',
      'Merdiven korkuluk delikleri',
      'Ankraj delikleri',
    ],
  },
  {
    id: 2,
    slug: 'beton-kesme',
    title: 'Beton Kesme',
    shortTitle: 'Beton Kesme',
    icon: 'saw',
    image: '/images/hizmetler/beton-kesme.jpg',
    shortDescription:
      'Duvar, döşeme ve temel kesimi için elmas diskli profesyonel beton kesme hizmeti.',
    description:
      'Elmas diskli duvar testerelerimizle duvar, döşeme, kolon ve temel gibi tüm betonarme yapılarda hassas kesim yapıyoruz. Kapı-pencere açıklığı, asansör boşluğu ve yapısal düzenlemeler için ideal çözüm. Kesim hattı düzgün çıktığı için çevre yapıya zarar vermez.',
    features: [
      'Elmas diskli duvar testeresi',
      'Ray sistemli düz kesim',
      '600mm derinliğe kadar kesim kapasitesi',
      'Düz ve hassas kesim yüzeyi',
      'Su ile toz kontrolü',
      'Taşıyıcı sisteme zarar vermeden kesim',
    ],
    applications: [
      'Kapı ve pencere açıklıkları',
      'Asansör boşluğu açma',
      'Merdiven boşluğu açma',
      'Duvar kaldırma / inceltme',
      'Döşeme kesimi',
      'Temel kesimi',
    ],
  },
  {
    id: 3,
    slug: 'beton-kirma',
    title: 'Beton Kırma',
    shortTitle: 'Beton Kırma',
    icon: 'hammer',
    image: '/images/hizmetler/beton-kirma.jpg',
    shortDescription:
      'Kontrollü beton kırma işlemleri ile minimum gürültü ve titreşimde yıkım hizmeti.',
    description:
      'Elektrikli ve hidrolik kırıcılarımızla kontrollü beton kırma işlemleri gerçekleştiriyoruz. Tadilat, renovasyon ve yıkım projelerinde taşıyıcı sisteme zarar vermeden hassas kırım yapıyoruz. İş bitiminde moloz toplama ve nakliye de bizde.',
    features: [
      'Elektrikli ve hidrolik kırıcılar',
      'Kontrollü ve hassas kırım',
      'Minimum gürültü ve titreşim',
      'Toz kontrol önlemleri',
      'Taşıyıcı sistem koruması',
      'Moloz toplama ve nakliye',
    ],
    applications: [
      'Tadilat ve renovasyon yıkımları',
      'Temel ve döşeme kırımı',
      'Duvar kaldırma',
      'Havuz yıkımı',
      'Beton blok kırma',
      'Kaldırım ve asfalt sökümü',
    ],
  },
  {
    id: 4,
    slug: 'asfalt-derz-kesim',
    title: 'Asfalt Derz Kesim',
    shortTitle: 'Asfalt Kesim',
    icon: 'road',
    image: '/images/hizmetler/asfalt-derz-kesim.jpg',
    shortDescription:
      'Yol ve zemin çalışmalarında düzgün derz kesimi ve asfalt kesme hizmeti.',
    description:
      'Asfalt ve beton yol kesimi, derz açma, tesisat hendek kesimi ve yenileme çalışmalarında hizmet veriyoruz. Elmas diskli yol kesme makinelerimizle düzgün, temiz ve hızlı kesim sağlıyor; trafiği en az etkileyecek şekilde çalışıyoruz.',
    features: [
      'Elmas diskli yol kesme makineleri',
      '300mm derinliğe kadar kesim',
      'Düzgün ve temiz kesim hattı',
      'Derz genişliği ayarlanabilir',
      'Hızlı iş teslimi',
      'Trafik akışına minimum etki',
    ],
    applications: [
      'Yol genişletme çalışmaları',
      'Altyapı hendek kesimleri',
      'Derz açma ve yenileme',
      'Asfalt yama kenarı düzeltme',
      'Kaldırım kesimi',
      'Kanal açma çalışmaları',
    ],
  },
  {
    id: 5,
    slug: 'hidrolik-beton-kesme',
    title: 'Hidrolik Beton Kesme',
    shortTitle: 'Hidrolik Kesme',
    icon: 'hydraulic',
    image: '/images/hizmetler/hidrolik-beton-kesme.jpg',
    shortDescription:
      'Büyük çaplı projelerde hidrolik güçle yüksek kapasiteli beton kesme.',
    description:
      'Ağır iş hidrolik kesme sistemlerimizle köprü, baraj, sanayi yapıları gibi büyük çaplı projelerde güçlü ve hassas beton kesimi gerçekleştiriyoruz. Elektrik altyapısının yetersiz olduğu sahalarda da kesintisiz çalışabiliyoruz.',
    features: [
      'Hidrolik güç üniteli sistemler',
      'Yüksek kesim kapasitesi',
      '1 metreyi aşan derinliklerde kesim',
      'Elmas zincir ve disk seçenekleri',
      'Su altı kesim imkanı',
      'Büyük çaplı projelere uygun',
    ],
    applications: [
      'Köprü ve viyadük kesimleri',
      'Baraj yapıları',
      'Sanayi tesisleri',
      'Enerji santralleri',
      'Deniz yapıları',
      'Büyük betonarme yapılar',
    ],
  },
  {
    id: 6,
    slug: 'filiz-ekimi',
    title: 'Filiz Ekimi',
    shortTitle: 'Filiz Ekimi',
    icon: 'rebar',
    image: '/images/hizmetler/filiz-ekimi.jpg',
    shortDescription:
      'Kimyasal dübel ve demir filiz ekimi ile güçlü yapısal bağlantılar.',
    description:
      'Mevcut betonarme yapılara yeni bağlantı noktaları oluşturmak için demir filiz ekimi ve kimyasal ankraj uygulamaları yapıyoruz. Güçlendirme ve ek yapı projelerinde projeye uygun çap ve derinlikte, kürleme sürelerine uyarak güvenilir bağlantılar sağlıyoruz.',
    features: [
      'Kimyasal ankraj ile filiz ekimi',
      'Farklı çaplarda filiz seçenekleri',
      'Yüksek çekme dayanımı',
      'Deprem yönetmeliğine uygun uygulama',
      'Delik temizliği ve kürleme kontrolü',
      'Talep halinde çekme testi',
    ],
    applications: [
      'Bina güçlendirme projeleri',
      'Ek kat çıkma',
      'Balkon ekleme',
      'Kolon mantolama bağlantıları',
      'Perde duvar bağlantıları',
      'Çelik yapı ankraj noktaları',
    ],
  },
  {
    id: 7,
    slug: 'kimyasal-dubel-ankraj',
    title: 'Kimyasal Dübel & Ankraj',
    shortTitle: 'Kimyasal Ankraj',
    icon: 'anchor',
    image: '/images/hizmetler/kimyasal-dubel-ankraj.jpg',
    shortDescription:
      'Yüksek mukavemetli kimyasal dübel ve ankraj uygulamaları.',
    description:
      'Ağır yük taşıyacak bağlantı noktaları için kimyasal dübel ve ankraj uygulamaları sunuyoruz. ETA onaylı kimyasal ankraj sistemleriyle depreme dayanıklı, güvenli bağlantılar oluşturuyoruz.',
    features: [
      'ETA onaylı kimyasal ankraj sistemleri',
      'M8 - M30 arası çaplarda uygulama',
      'Çatlaklı ve çatlaksız betonda uygulama',
      'Yüksek çekme ve kesme dayanımı',
      'Sıcaklık ve kürleme süresi kontrolü',
      'Uygulama sonrası raporlama',
    ],
    applications: [
      'Çelik konstrüksiyon bağlantıları',
      'Makine ve ekipman montajı',
      'Korkuluk ve bariyerler',
      'Asma tavan sistemleri',
      'Cephe kaplama taşıyıcıları',
      'Güneş paneli montajları',
    ],
  },
  {
    id: 8,
    slug: 'kontrollu-bina-yikimi',
    title: 'Kontrollü Bina Yıkımı',
    shortTitle: 'Bina Yıkımı',
    icon: 'demolition',
    image: '/images/hizmetler/kontrollu-bina-yikimi.jpg',
    shortDescription:
      'Çevreye ve komşu yapılara zarar vermeden kontrollü yıkım hizmetleri.',
    description:
      'Kentsel dönüşüm ve yenileme projelerinde kontrollü bina yıkımı hizmeti veriyoruz. Çevre güvenliği, toz kontrolü ve moloz yönetimiyle planlı yıkım operasyonları gerçekleştiriyoruz.',
    features: [
      'Kontrollü yıkım planlaması',
      'Çevre güvenlik önlemleri',
      'Toz ve gürültü kontrolü',
      'İş güvenliği ekipmanları',
      'Moloz toplama ve nakliye',
      'Belediye izin süreçlerinde destek',
    ],
    applications: [
      'Kentsel dönüşüm yıkımları',
      'Hasarlı bina yıkımı',
      'Sanayi tesisi söküm',
      'Kısmi yıkım (kat indirme)',
      'Eski yapı yenileme',
      'Arazi temizleme',
    ],
  },
]

export default services
