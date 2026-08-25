/**
 * Hizmet Verileri — Denizli Tomay Halı Yıkama
 *
 * Her hizmetin slug'ı, başlığı, açıklaması, ikon ANAHTARI ve detay içeriği burada.
 * Navigasyon, sitemap ve tüm sayfalar bu veriden beslenir.
 *
 * icon  : src/components/Icon.jsx içindeki ikon adı (emoji DEĞİL)
 * image : public/images/hizmetler/<slug>.webp — görsel yoksa otomatik olarak
 *         tasarım placeholder'ı gösterilir, kırık görsel çıkmaz.
 *         Kod srcset'i dosya adından türetiyor: -600 ve -900 varyantları da şart.
 *
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │ BU LİSTEDE YALNIZCA KANITLI HİZMETLER VAR.                           │
 * │ Sekizinin de karşılığı canlı sitede (denizlihaliyikama.net.tr) ya    │
 * │ makine parkı listesinde ya da hizmet sayfasında geçiyor.             │
 * │ Kanıtı olmadığı için EKLENMEDİ: cami halısı yıkama, ofis/işyeri      │
 * │ halıfleks, halı tamiri, halı boyama, oto döşeme, halı depolama.      │
 * │ İşletme sahibi teyit ederse eklenir — teyitsiz eklenmez.             │
 * │ Tam gerekçe: docs/olgu-sayfasi.md §5                                 │
 * └──────────────────────────────────────────────────────────────────────┘
 *
 * BAŞLIK KALIBI: "<Hizmet> Denizli | <ayırt edici> - Tomay"
 * Şehir adı BAŞTA değil, hizmetin HEMEN ARDINDAN. Hedef sorgu "halı yıkama
 * denizli"; başlığın başındaki kelimeler daha ağır tartıyor.
 * Gerekçe ve tam sorgu haritası: siteConfig.js > seo.hedefSorgular
 */

const services = [
  {
    id: 1,
    slug: 'hali-yikama',
    seoTitle: 'Halı Yıkama Denizli | Ücretsiz Alım Teslim - Tomay',
    /**
     * h1: Yalnızca bu hizmette var — ANAHTAR KELİME YAMYAMLIĞINI önlemek için.
     *
     * "halı yıkama denizli" sorgusunu ANA SAYFA sahipleniyor (en çok link ve
     * otorite orada). Bu sayfanın H1'i de "Denizli Halı Yıkama" olsaydı iki
     * sayfa aynı sorguya girer ve Google hangisini göstereceğine kendi karar
     * verirdi — ikisi de zayıflar. Canlı sitede bugün tam olarak bu hata var:
     * ana sayfa ile /denizli-hali-yikama aynı başlığı taşıyor.
     *
     * Bu sayfa süreç ve yöntem sorgularına geçiyor. Diğer hizmetlerde çakışma
     * olmadığı için h1 alanı yok; onlar "<Hizmet> Denizli" kalıbını kullanır.
     */
    h1: 'Halı Yıkama Nasıl Yapılır?',
    title: 'Halı Yıkama',
    shortTitle: 'Halı Yıkama',
    icon: 'carpetRoll',
    image: '/images/hizmetler/hali-yikama.webp',
    shortDescription:
      'Halınızı adresinizden alıp 16 fırçalı tam otomatik makinelerde, cinsine uygun fırça sertliği ve şampuanla yıkıyoruz.',
    description:
      'Halı yıkama, halının tesise getirilip makinede yıkanmasıdır — evde yapılan yüzey temizliğinden farklı bir iştir. Halı önce toz çırpma makinesinden geçirilerek dokusunun dibindeki kuru kir alınır, sonra cinsine uygun fırça sertliği ve bitkisel şampuanla yıkanır, rulo sıkma makinesinde suyunun %95\'i alınır ve kapalı kurutma odalarında nemi giderilir. Balkonda kurutulan bir halı toz ve rutubet alır; kapalı odada kurutulan almaz. Fark buradadır.',
    features: [
      '16 fırçalı tam otomatik yıkama makinesi',
      'Fırça sertliği halının cinsine göre ayarlanır',
      'Bitkisel, antialerjik ve antibakteriyel şampuan',
      'Rulo sıkma ile %95 su alımı — kısa kuruma süresi',
      'Tozdan izole kapalı kurutma odaları',
      'Ambalajlı teslim, ortalama 3-4 iş günü',
    ],
    applications: [
      'Makine halısı ve baskılı halı',
      'Ev ve daire halıları',
      'Mevsimlik bahar temizliği',
      'Taşınma öncesi ve sonrası yıkama',
      'Evcil hayvan tüyü ve koku sorunu',
      'Alerji ve toz akarı kaynaklı şikâyetler',
    ],
  },
  {
    id: 2,
    slug: 'el-dokuma-hali-yikama',
    seoTitle: 'El Dokuma & Yün Halı Yıkama Denizli | Düşük Isı - Tomay',
    title: 'El Dokuma & Yün Halı Yıkama',
    shortTitle: 'El Dokuma & Yün',
    icon: 'wool',
    image: '/images/hizmetler/el-dokuma-hali-yikama.webp',
    shortDescription:
      'Yün ve el dokuma halılar makine halısıyla aynı programda yıkanmaz — düşük ısı, yumuşak fırça ve renk akması kontrolü ister.',
    description:
      'El dokuma ve yün halılarda kullanılan boyalar makine halısındaki sentetik boyalar gibi sabit değildir; sıcak suyla ve sert fırçayla yıkandığında renk komşu alana akabilir. Bu yüzden bu halıları ayrı programda, düşük ısıda ve yumuşak fırçayla yıkıyoruz. Yıkamadan önce görünmeyen bir noktadan renk akma testi yapılır. Doğal elyaf ıslakken çeker; kuruma da bu yüzden kontrollü olmak zorundadır.',
    features: [
      'Yıkama öncesi renk akma testi',
      'Düşük ısı — sıcak su yün elyafı keçeleştirir',
      'Yumuşak fırça ayarı, düşük devir',
      'Saçak temizliği ayrı elde yapılır',
      'Kontrollü kurutma — çekme riskine karşı',
      'Kilim ve el dokuma yolluklar dâhil',
    ],
    applications: [
      'Yün halı ve kilim',
      'Milas, Isparta, Hereke gibi el dokumalar',
      'Miras kalan ve yıllanmış halılar',
      'Saçaklı halı ve yolluklar',
      'Renk akması yaşamış halılar',
      'Uzun süre sarılı kalmış halılar',
    ],
  },
  {
    id: 3,
    slug: 'ipek-nepal-hali-yikama',
    seoTitle: 'İpek & Nepal Halı Yıkama Denizli | Hassas Program - Tomay',
    title: 'İpek & Nepal Halı Yıkama',
    shortTitle: 'İpek & Nepal',
    icon: 'silk',
    image: '/images/hizmetler/ipek-nepal-hali-yikama.webp',
    shortDescription:
      'En hassas gruptur. İpeğin parlaklığı aşırı ıslanmayla ve yanlış şampuanla kalıcı olarak kaybolur.',
    description:
      'İpek ve Nepal halılarda değerli olan şey desen kadar elyafın parlaklığıdır; o parlaklık lifin yüzey yapısından gelir ve zarar gördüğünde geri gelmez. Bu halılar bol suyla, yüksek devirde ve alkali şampuanla yıkanmaz. Islanma süresi sınırlı tutulur, müdahalenin bir bölümü elle yapılır ve kuruma kontrollü nemde yürütülür. Bir halının bu gruba girip girmediğine yıkamadan önce birlikte karar veriyoruz.',
    features: [
      'Sınırlı ıslanma süresi — aşırı su parlaklığı bozar',
      'Nötr pH şampuan, alkali ürün kullanılmaz',
      'Kritik bölgelerde elle müdahale',
      'Kontrollü nemde kurutma',
      'Yıkama öncesi elyaf ve boya değerlendirmesi',
      'Değerlendirme sonucu olumsuzsa yıkamıyoruz, sebebini söylüyoruz',
    ],
    applications: [
      'İpek halı ve ipek karışımlı halılar',
      'Nepal ve bambu ipeği halılar',
      'Duvar halısı ve pano halılar',
      'Küçük ebatlı değerli seccadeler',
      'Parlaklığını kaybetmiş halılar',
    ],
  },
  {
    id: 4,
    slug: 'shaggy-hali-yikama',
    seoTitle: 'Shaggy Halı Yıkama Denizli | Uzun Tüylü Halı - Tomay',
    title: 'Shaggy & Uzun Tüylü Halı Yıkama',
    shortTitle: 'Shaggy & Uzun Tüylü',
    icon: 'shaggy',
    image: '/images/hizmetler/shaggy-hali-yikama.webp',
    shortDescription:
      'Uzun tüyde kir yüzeyde değil dipte birikir. Yanlış fırça ayarı tüyü yatırır ve halı bir daha eski dokusuna dönmez.',
    description:
      'Shaggy halılarda asıl sorun görünen kir değil, tüplerin dibine inen ve elektrikli süpürgenin ulaşamadığı tozdur. O tozu çıkarmak için tüyü dibinden hareket ettirmek gerekir; ama fırça fazla sert olursa tüy yatar ve keçeleşir. Fırça sertliğini tüy uzunluğuna göre ayarlıyoruz. Uzun tüy suyu da fazla tutar, bu yüzden bu halıların kuruma süresi makine halısından daha uzundur — sıkıştırmak yerine gerektiği kadar bekletiyoruz.',
    features: [
      'Tüy uzunluğuna göre fırça sertliği ayarı',
      'Tüy dibindeki tozun çıkarılması',
      'Keçeleşmeye karşı düşük devirli fırçalama',
      'Uzun tüyde daha uzun kurutma süresi',
      'Kuruma sonrası tüy kabartma',
      'Bambu ve peluş halılar da bu grupta',
    ],
    applications: [
      'Shaggy ve uzun tüylü halılar',
      'Bambu ve peluş halılar',
      'Oturma odası ve yatak odası halıları',
      'Tüyü yatmış, matlaşmış halılar',
      'Evcil hayvan tüyü biriken halılar',
    ],
  },
  {
    id: 5,
    slug: 'koltuk-yikama',
    seoTitle: 'Koltuk Yıkama Denizli | Yerinde Vakumlu Temizlik - Tomay',
    title: 'Koltuk Yıkama',
    shortTitle: 'Koltuk Yıkama',
    icon: 'sofa',
    image: '/images/hizmetler/koltuk-yikama.webp',
    shortDescription:
      'Koltuk taşınmaz — ekip adresinize gelir. Yüksek basınçlı vakumlu üniteyle yerinde yıkıyoruz.',
    description:
      'Koltuk yıkamada halıdan farklı olarak eşya yerinden kımıldamaz; işlem evinizde yapılır. Kumaş özel solüsyonlu suyla ıslatılır, yumuşak fırçayla kir yumuşatılır ve yüksek emişli vakumla kirli su geri çekilir. İşin kritik adımı vakumlamadır: kumaşın içinde deterjan kalıntısı kalırsa koltuk kısa sürede yeniden ve daha hızlı kirlenir. Bu yüzden vakumlamanın ardından temiz suyla ayrıca durulama yapıyoruz.',
    features: [
      'Yerinde hizmet — koltuk taşınmaz',
      'Kumaş tipine göre solüsyon seçimi',
      'Yumuşak fırça — kumaşa zarar vermez',
      'Yüksek emişli vakumla kirli suyun çekilmesi',
      'Temiz suyla durulama, kalıntı bırakılmaz',
      'Randevu ile planlanır, her gün çıkılabilir',
    ],
    applications: [
      'Koltuk takımı ve köşe koltuk',
      'Tekli berjer ve puf',
      'Sandalye ve yemek odası takımı',
      'Ofis koltukları',
      'Leke ve koku sorunu olan koltuklar',
      'Evcil hayvan tüyü biriken kumaşlar',
    ],
  },
  {
    id: 6,
    slug: 'yatak-baza-temizligi',
    seoTitle: 'Yatak & Baza Temizliği Denizli | Akar Temizliği - Tomay',
    title: 'Yatak & Baza Temizliği',
    shortTitle: 'Yatak & Baza',
    icon: 'bed',
    image: '/images/hizmetler/yatak-baza-temizligi.webp',
    shortDescription:
      'Yatak yüzeyinde biriken ölü deri, toz akarının besin kaynağıdır. Yerinde vakumlu temizlik yapıyoruz.',
    description:
      'Yatakta gözle görülen leke çoğu zaman asıl sorun değildir. Yüzeyde biriken ölü deri hücreleri toz akarının beslendiği şeydir ve akar da alerji şikâyetlerinin sık rastlanan sebeplerinden biridir. Yatak yerinde, vakumlu üniteyle temizlenir. Buradaki en önemli sınır ıslatma miktarıdır: yatağın iç dolgusuna su geçerse dolgu tam kurumaz ve içeride nem kalır. Bu yüzden yüzeyle sınırlı çalışıyor ve kurumayı teslim etmeden kontrol ediyoruz.',
    features: [
      'Yerinde hizmet — yatak taşınmaz',
      'Yüzeyle sınırlı, kontrollü ıslatma',
      'İç dolguya su geçirilmez',
      'Yüksek emişli vakumla toz ve kalıntı alımı',
      'Bebekli ve alerjili evler için bitkisel solüsyon',
      'Baza ve başlık da aynı ziyarette temizlenir',
    ],
    applications: [
      'Yatak yüzeyi ve kenar fitilleri',
      'Baza ve yatak başlığı',
      'Çocuk ve bebek yatakları',
      'Alerji ve astım şikâyeti olan evler',
      'Uzun süre kullanılmamış yataklar',
      'Leke ve koku sorunu olan yataklar',
    ],
  },
  {
    id: 7,
    slug: 'stor-perde-yikama',
    seoTitle: 'Stor Perde Yıkama Denizli | Ücretsiz Sökme Takma - Tomay',
    title: 'Stor & Perde Yıkama',
    shortTitle: 'Stor & Perde',
    icon: 'curtain',
    image: '/images/hizmetler/stor-perde-yikama.webp',
    shortDescription:
      'Stor ve zebra perde mekanizmalıdır; evde yıkanınca kumaş kırılır ya da mekanizma bozulur. Ultrasonik makinede yıkıyoruz.',
    description:
      'Stor ve zebra perdelerin evde yıkanmasının zor olmasının sebebi kirli olmaları değil, mekanizmalı olmalarıdır. Katlanarak yıkanan bir stor perdede kumaş kalıcı olarak kırılır; makinede döndürülen bir mekanizma da bozulur. Perdeleri ultrasonik yıkama makinesinde, katlamadan ve düz hâlde yıkıyoruz. Sökme ve tekrar takma işini ekibimiz yapıyor, bunun için ayrıca ücret almıyoruz.',
    features: [
      'Ultrasonik yıkama — mekanizmaya zarar vermez',
      'Ücretsiz sökme ve tekrar takma',
      'Katlanmadan, düz yıkama ve kurutma',
      'Kırışmaz — kumaş kırığı oluşmaz',
      'Sineklik, yağ ve is lekelerine özel solüsyon',
      'Sökme-takma ekip işi olduğu için randevuludur',
    ],
    applications: [
      'Stor perde ve zebra perde',
      'Tül ve fon perde',
      'Dikey (vertical) perde',
      'Mutfak perdeleri — yağ ve is lekesi',
      'Yol kenarı ve şantiye yakını daireler',
      'Sigara kokusu almış perdeler',
    ],
  },
  {
    id: 8,
    slug: 'yorgan-battaniye-yikama',
    seoTitle: 'Yorgan & Battaniye Yıkama Denizli | Endüstriyel - Tomay',
    title: 'Yorgan & Battaniye Yıkama',
    shortTitle: 'Yorgan & Battaniye',
    icon: 'blanket',
    image: '/images/hizmetler/yorgan-battaniye-yikama.webp',
    shortDescription:
      'Ev makinesi yorgana dar gelir; dönmeyen yorgan yıkanmaz, sadece ıslanır. Endüstriyel makinede yıkıyoruz.',
    description:
      'Bir yorganın temizlenebilmesi için makine içinde serbestçe dönebilmesi gerekir. Ev tipi makinede sıkışan yorgan dönmez; su ve deterjan içeri işlemez, dışarı da çıkmaz. Endüstriyel makinede yorgan rahat döner, iç dolgusuna kadar durulanır. Asıl kritik adım kurutmadır: dolgu tam kurumadan katlanan bir yorgan içeriden küflenir ve o koku bir daha çıkmaz. Bu yüzden kuruma bizde teslim şartıdır, süre değil.',
    features: [
      'Endüstriyel yorgan/battaniye makinesi',
      'Dolgu tipine göre program (elyaf, yün, pamuk)',
      'İç dolguya kadar durulama',
      'Topaklanmayı önleyen kurutma',
      'Tam kuruma teslim şartıdır',
      'Mevsim geçişinde toplu yıkama',
    ],
    applications: [
      'Yorgan, battaniye ve pike',
      'Yatak örtüsü ve kuş tüyü ürünler',
      'Uyku tulumu ve polar battaniye',
      'Mevsimlik kaldırma öncesi yıkama',
      'Uzun süre dolapta kalmış tekstil',
      'Bebek battaniyesi ve çocuk yorganı',
    ],
  },
]

export default services
