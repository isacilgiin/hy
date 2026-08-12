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
    slug: 'karot',
    seoTitle: 'Karot Nedir, Nasıl Yapılır? | Denizli Karot — 20 Karot',
    /**
     * h1: Yalnızca bu hizmette var — ANAHTAR KELİME YAMYAMLIĞINI önlemek için.
     *
     * Bu sayfanın H1'i de "Denizli Karot"tu; ana sayfanın H1'i de artık
     * "Denizli'de Karot, Beton Delme & Kesme Hizmetleri". İki sayfa aynı head
     * sorguyu hedeflediğinde Google hangisini göstereceğine kendi karar verir
     * ve ikisi de zayıflar. Karar: "denizli karot" sorgusunu ANA SAYFA
     * sahiplenir (en çok link ve otorite orada). Bu sayfa, seoTitle'ında zaten
     * söz verdiği bilgi amaçlı sorguya ("karot nedir", "karot nasıl yapılır")
     * geçer. Diğer hizmetlerde çakışma olmadığı için h1 alanı yok; onlar
     * "Denizli {hizmet}" kalıbını kullanmaya devam eder.
     */
    h1: 'Karot Nedir, Nasıl Yapılır?',
    title: 'Karot',
    shortTitle: 'Karot',
    icon: 'drill',
    image: '/images/hizmetler/karot.webp',
    shortDescription:
      'Elmas uçlu karot makineleriyle betonarmede dairesel, pürüzsüz ve titreşimsiz delik açma yöntemi.',
    description:
      'Karot, betonarme bir yapıya kırıcı kullanmadan, elmas uçlu silindirik bir uçla dairesel delik açma yöntemidir. Kırıcıyla açılan bir delik çevresindeki betonu çatlatır ve donatıyı zorlar; karotta ise uç betonu keserek ilerlediği için çevre yapıya yük binmez. Bu yüzden oturulan binalarda, taşıyıcı elemanların yakınında ve hassas işlerde tercih edilen yöntemdir. 20 Karot olarak Denizli ve çevre ilçelerde her çapta karot uygulaması yapıyoruz.',
    features: [
      'Elmas uçlu, su soğutmalı karot makineleri',
      '50mm - 1000mm arası çap seçenekleri',
      'Kırıcıya göre çok daha az toz, gürültü ve titreşim',
      'Delik kenarı pürüzsüz — ek sıva/tamir gerekmez',
      'Yatay, dikey ve tavan (yukarı doğru) delme',
      'Donatıyı zorlamadan, kesip geçerek ilerleme',
    ],
    applications: [
      'Oturulan binalarda tadilat delikleri',
      'Taşıyıcı eleman yakınındaki hassas delimler',
      'Beton numunesi (karot numunesi) alma',
      'Su ve pis su tesisat geçişleri',
      'Klima ve havalandırma geçişleri',
      'Ankraj ve montaj delikleri',
    ],
  },
  {
    id: 2,
    slug: 'beton-delme',
    seoTitle: 'Denizli Beton Delme | Her Çapta Karot Delme — 20 Karot',
    title: 'Beton Delme',
    shortTitle: 'Beton Delme',
    icon: 'wallHole',
    image: '/images/hizmetler/beton-delme.webp',
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
    id: 3,
    slug: 'beton-kesme',
    seoTitle: 'Denizli Beton Kesme | Duvar ve Döşeme Kesimi — 20 Karot',
    title: 'Beton Kesme',
    shortTitle: 'Beton Kesme',
    icon: 'saw',
    image: '/images/hizmetler/beton-kesme.webp',
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
    id: 4,
    slug: 'beton-kirma',
    seoTitle: 'Denizli Beton Kırma | Kontrollü Kırım ve Söküm — 20 Karot',
    title: 'Beton Kırma',
    shortTitle: 'Beton Kırma',
    icon: 'hammer',
    image: '/images/hizmetler/beton-kirma.webp',
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
    id: 5,
    slug: 'asfalt-derz-kesim',
    seoTitle: 'Denizli Asfalt Derz Kesim | Yol ve Zemin Kesimi — 20 Karot',
    title: 'Asfalt Derz Kesim',
    shortTitle: 'Asfalt Kesim',
    icon: 'road',
    image: '/images/hizmetler/asfalt-derz-kesim.webp',
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
    id: 6,
    slug: 'hidrolik-beton-kesme',
    seoTitle: 'Denizli Hidrolik Beton Kesme | Ağır İş Kesimi — 20 Karot',
    title: 'Hidrolik Beton Kesme',
    shortTitle: 'Hidrolik Kesme',
    icon: 'hydraulic',
    image: '/images/hizmetler/hidrolik-beton-kesme.webp',
    shortDescription:
      'Büyük çaplı projelerde hidrolik güçle yüksek kapasiteli beton kesme.',
    // NOT: Bu hizmette önceden "baraj", "deniz yapıları", "enerji santralleri",
    // "köprü/viyadük" ve "su altı kesim" yazıyordu. Hiçbiri firmanın yaptığı
    // işlerle örtüşmüyordu — su altı kesim ayrıca dalgıç ekip gerektirir.
    // Kanıtlanamayan kapasite iddiaları hem ziyaretçiyi yanıltır hem de
    // gelen talebi firmanın karşılayamayacağı işlere kaydırır.
    description:
      'Hidrolik kesme sistemlerinde güç, kesme başlığından ayrı duran bir üniteden gelir. Bu sayede kesim noktasındaki ekipman küçük kalırken arkasındaki güç yükselir; bir metreyi aşan kesitlerde ve şantiye elektriğinin yetmediği sahalarda elektrikli testerelerin yetersiz kaldığı yerde iş görür.',
    features: [
      'Hidrolik güç üniteli sistemler',
      'Yüksek kesim kapasitesi',
      '1 metreyi aşan derinliklerde kesim',
      'Elmas tel, zincir ve disk seçenekleri',
      'Şantiye elektriği gerekmez (dizel ünite)',
      'Dar ve erişimi zor noktalarda çalışabilme',
    ],
    applications: [
      'Kalın perde ve istinat duvarı kesimi',
      'Temel ve kütle beton kesimi',
      'Bir metreyi aşan kesitler',
      'Kazık başı kesimi',
      'Sanayi tesisinde makine kaidesi sökümü',
      'Elektrik çekilemeyen şantiyeler',
    ],
  },
  {
    id: 7,
    slug: 'filiz-ekimi',
    seoTitle: 'Denizli Filiz Ekimi | Kimyasal Ankrajla Donatı — 20 Karot',
    title: 'Filiz Ekimi',
    shortTitle: 'Filiz Ekimi',
    icon: 'rebar',
    image: '/images/hizmetler/filiz-ekimi.webp',
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
    id: 8,
    slug: 'ankraj',
    seoTitle: 'Denizli Ankraj | Çelik ve Makine Bağlantısı — 20 Karot',
    title: 'Ankraj',
    shortTitle: 'Ankraj',
    icon: 'anchor',
    image: '/images/hizmetler/ankraj.webp',
    shortDescription:
      'Mevcut betonarmeye yük aktaran güvenli bağlantı noktaları oluşturma.',
    description:
      'Ankraj, mevcut bir betonarme elemana yeni bir yük taşıyıcı bağlantı kazandırma işlemidir. Çelik konstrüksiyon ayakları, makine kaideleri, korkuluk ve bariyerler gibi yük taşıyan her bağlantı, doğru çapta ve doğru derinlikte açılmış bir deliğe düzgün ankrajlanmadığında zamanla gevşer. Delik çapı, gömme derinliği ve kenar mesafesi proje detayına göre belirlenir; delik temizliği yapılmadan ankraj uygulanmaz.',
    features: [
      'Projeye uygun çap ve gömme derinliği',
      'Kenar mesafesi ve donatı konumu kontrolü',
      'Delik temizliği (basınçlı hava + fırça)',
      'Mekanik ve kimyasal ankraj seçenekleri',
      'Yüksek çekme ve kesme dayanımı',
      'Talep halinde çekme testi',
    ],
    applications: [
      'Çelik konstrüksiyon kolon ayakları',
      'Makine ve ekipman kaideleri',
      'Korkuluk, bariyer ve merdiven bağlantıları',
      'Cephe kaplama taşıyıcıları',
      'Güneş paneli montaj altyapısı',
      'Asma tavan ve tesisat askı sistemleri',
    ],
  },
  {
    id: 9,
    slug: 'kimyasal-dubel',
    seoTitle: 'Denizli Kimyasal Dübel | Enjeksiyon Ankraj — 20 Karot',
    title: 'Kimyasal Dübel',
    shortTitle: 'Kimyasal Dübel',
    icon: 'chemical',
    image: '/images/hizmetler/kimyasal-dubel.webp',
    shortDescription:
      'Enjeksiyon reçineli dübel uygulaması — mekanik dübelin yetmediği yerlerde.',
    description:
      'Kimyasal dübel, deliğe enjekte edilen iki bileşenli reçinenin donatı veya saplamayı betona kimyasal olarak kenetlemesiyle çalışır. Mekanik dübel betonu içeriden iterek tuttuğu için kenara yakın ve çatlaklı betonda risklidir; kimyasal dübelde bu genleşme yükü olmadığından kenar mesafesi kısıtlı işlerde ve çatlaklı betonda güvenle kullanılır. Uygulama sıcaklığına bağlı kürleme sürelerine uyulmadan yük verilmez.',
    features: [
      'ETA onaylı enjeksiyon reçineleri',
      'M8 - M30 arası saplama ve donatı çapları',
      'Çatlaklı ve çatlaksız betonda uygulama',
      'Kenar mesafesi kısıtlı işlerde güvenli çözüm',
      'Ortam sıcaklığına göre kürleme süresi takibi',
      'Uygulama sonrası raporlama',
    ],
    applications: [
      'Filiz ekimi (donatı ekleme)',
      'Ağır makine kaide saplamaları',
      'Kenar mesafesi az olan ankrajlar',
      'Çatlaklı betonda bağlantı noktaları',
      'Perde ve kolon güçlendirme bağlantıları',
      // "Su altı uygulamaları" yazıyordu — dalgıç ekip gerektiren, firmanın
      // yapmadığı bir iş. Islak/nemli delikte uygulama ise gerçek ve reçine
      // seçimiyle ilgili bir konu; iddia o ölçeğe çekildi.
      'Islak ve nemli delikte uygulama',
    ],
  },
  {
    id: 10,
    slug: 'kontrollu-bina-yikimi',
    seoTitle: 'Denizli Kontrollü Bina Yıkımı | Kentsel Dönüşüm — 20 Karot',
    title: 'Kontrollü Bina Yıkımı',
    shortTitle: 'Bina Yıkımı',
    icon: 'demolition',
    image: '/images/hizmetler/kontrollu-bina-yikimi.webp',
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
