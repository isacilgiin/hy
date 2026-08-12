/**
 * Hizmet Bölgeleri — Denizli ilçeleri.
 *
 * ┌──────────────────────────────────────────────────────────────────────────┐
 * │ DİKKAT — SLUG'LARI DEĞİŞTİRMEYİN                                         │
 * │ Bu slug'lar eski WordPress sitesinde ZATEN İNDEKSLİ olan URL'lerdir:     │
 * │   https://20karot.com.tr/hizmet-bolgeleri/tavas-karot/                   │
 * │ Slug değişirse o sayfalar 404'e düşer ve mevcut sıralamalar kaybolur.    │
 * └──────────────────────────────────────────────────────────────────────────┘
 *
 * TODO: `intro` metinleri sektörel ve doğrulanabilir tutulmuştur (uydurma yerel
 * iddia yok). İlçeye özel gerçek bir referans işiniz varsa `note` alanına yazın —
 * o ilçenin sayfasında ayrı bir kutuda gösterilir ve içeriği benzersizleştirir.
 */

/**
 * Bölge tipine göre değişen içerik.
 *
 * NEDEN BÖLGEYE GÖRE: 20 ilçe sayfasında birebir AYNI paragrafın tekrarlanması
 * Google'ın "doorway / thin content" sinyalidir ve sayfaların değerini düşürür.
 * Bu yüzden ortak anlatım 3 varyanta ayrıldı ve sayfada gövde metni gibi değil,
 * kenarda bir bilgi kutusu (chrome) olarak gösteriliyor.
 *
 * ⚠️ ASIL ÇÖZÜM: her ilçenin `note` alanına o ilçede yaptığınız GERÇEK bir işi
 * yazmak. Bu alan doldurulmadığı sürece sayfalar, yerini aldıkları eski
 * WordPress sayfalarından daha ince kalır.
 */
export const zoneContent = {
  merkez: {
    label: 'Denizli merkez',
    howWeWork:
      'Merkezdeki işlere genellikle aynı gün içinde ulaşıyoruz. Keşif ücretsiz; işin yöntemi ve fiyatı başlamadan önce netleşiyor.',
    sss: [
      {
        q: 'Aynı gün gelebiliyor musunuz?',
        a: 'Merkez ilçelerde programımız uygunsa aynı gün, değilse ertesi gün ulaşıyoruz. Acil işler için telefonla durumu değerlendiriyoruz.',
      },
      {
        q: 'Oturulan binada çalışıyor musunuz?',
        a: 'Evet. Karot ve elmas diskli kesim, kırıcıya göre çok daha az toz ve titreşim ürettiği için oturulan binalarda tercih edilen yöntem. Çalışma alanını örtüyor, iş bitiminde temiz teslim ediyoruz.',
      },
    ],
  },
  yakin: {
    label: 'Merkeze yakın ilçe',
    howWeWork:
      'Merkeze yakın olduğu için günübirlik ulaşıyoruz. Keşif ücretsiz; yol ve süre dâhil net fiyat veriyoruz, sonradan ek kalem çıkmıyor.',
    sss: [
      {
        q: 'Yol ücreti ayrıca alınıyor mu?',
        a: 'Hayır. Verdiğimiz teklif yol ve süre dâhil nettir; iş bitiminde ek kalem çıkmaz.',
      },
      {
        q: 'Küçük bir iş için de geliyor musunuz?',
        a: 'Geliyoruz. Tek bir tesisat deliği gibi küçük işlerde, aynı bölgedeki başka işlerle aynı güne denk getirerek maliyeti düşürmeye çalışıyoruz.',
      },
    ],
  },
  uzak: {
    label: 'Merkeze uzak ilçe',
    howWeWork:
      'Merkeze uzak olduğu için işi tek gidişte bitirecek şekilde planlıyoruz: gerekli tüm uçlar ve yedek ekipman yanımızda geliyor. Ön değerlendirmeyi telefonla fotoğraf üzerinden hızlandırıyoruz.',
    sss: [
      {
        q: 'Uzak ilçeye gerçekten geliyor musunuz?',
        a: 'Evet, Denizli il sınırları içindeki tüm ilçelere gidiyoruz. Uzak mesafede işi tek gidişte tamamlayacak şekilde planlıyoruz.',
      },
      {
        q: 'Keşif için önce gelmeniz gerekiyor mu?',
        a: 'Uzak ilçelerde ön değerlendirmeyi WhatsApp’tan göndereceğiniz fotoğraf ve ölçülerle yapıp fiyat aralığı verebiliyoruz. Kesin teklif için gerekirse yerinde keşfe geliyoruz.',
      },
    ],
  },
}

const serviceAreas = [
  {
    name: 'Merkezefendi',
    slug: 'merkezefendi-karot',
    zone: 'merkez',
    intro:
      'Merkezefendi, işletmemizin bulunduğu ilçe. Konut, iş yeri ve sanayi yapılarındaki beton delme, kesme ve kırma işlerine aynı gün içinde ulaşabiliyoruz. Merkezefendi genelinde tadilat, tesisat geçişi ve kapı-pencere açıklığı işleri en sık aldığımız talepler.',
    note: '',
  },
  {
    name: 'Pamukkale',
    slug: 'pamukkale-karot',
    zone: 'merkez',
    intro:
      'Pamukkale, Denizli’nin iki merkez ilçesinden biri. Konut projeleri, konaklama tesisleri ve iş yeri tadilatlarında beton delme ve kesme hizmeti veriyoruz. Pamukkale’deki işlere merkez ekibimizle kısa sürede intikal ediyoruz.',
    note: '',
  },
  {
    name: 'Denizli (Merkez)',
    slug: 'denizli-karot',
    zone: 'merkez',
    intro:
      'Denizli merkezde beton delme, kesme, kırma, filiz ekimi ve ankraj işlerinin tamamını yapıyoruz. Karot işlerinde Denizli genelinde en çok tercih edilen çalışma şeklimiz: önce ücretsiz keşif, sonra net fiyat, sonra iş. Şehir merkezindeki oturulan binalarda toz ve titreşim kontrolüne özellikle dikkat ediyoruz.',
    note: '',
  },
  {
    name: 'Honaz',
    slug: 'honaz-karot',
    zone: 'yakin',
    intro:
      'Honaz, Denizli merkeze yakın konumu sayesinde günübirlik ulaştığımız ilçelerden. Sanayi yapıları, depo ve üretim tesislerinde makine montajı için ankraj, döşeme kesimi ve büyük çaplı delme işleri yapıyoruz.',
    note: '',
  },
  {
    name: 'Sarayköy',
    slug: 'saraykoy-karot',
    zone: 'yakin',
    intro:
      'Sarayköy’de konut ve tarımsal yapıların yanı sıra tesis yapılarında beton delme ve kesme hizmeti veriyoruz. Boru ve tesisat geçişleri için karot delme, Sarayköy’de en sık talep edilen işimiz.',
    note: '',
  },
  {
    name: 'Babadağ',
    slug: 'babadag-karot',
    zone: 'yakin',
    intro:
      'Babadağ’da tadilat ve yenileme projelerinde kontrollü beton kırma ve kesme yapıyoruz. Eğimli arazideki yapılarda çalışma güvenliğine ve ekipman erişimine ayrıca dikkat ediyoruz.',
    note: '',
  },
  {
    name: 'Serinhisar',
    slug: 'serinhisar-karot',
    zone: 'yakin',
    intro:
      'Serinhisar’da konut, iş yeri ve depo yapılarında beton delme, kesme ve filiz ekimi hizmeti veriyoruz. Güçlendirme projelerinde kimyasal ankrajlı filiz uygulamalarını proje detayına uygun şekilde yapıyoruz.',
    note: '',
  },
  {
    name: 'Tavas',
    slug: 'tavas-karot',
    zone: 'yakin',
    intro:
      'Tavas ve bağlı yerleşimlerde beton delme, kesme ve kırma işleri yapıyoruz. İlçeye ekip ve ekipmanla birlikte gidildiği için tek seferde birden fazla işi planlamak hem süreyi hem maliyeti düşürüyor.',
    note: '',
  },
  {
    name: 'Buldan',
    slug: 'buldan-karot',
    zone: 'yakin',
    intro:
      'Buldan’da konut, iş yeri ve üretim tesislerinde karot delme ve beton kesme hizmeti veriyoruz. Eski yapıların yenilenmesi ve güçlendirilmesi işlerinde filiz ekimi ve ankraj uygulamaları yapıyoruz.',
    note: '',
  },
  {
    name: 'Çivril',
    slug: 'civril-karot',
    zone: 'uzak',
    intro:
      'Çivril, Denizli’nin merkeze uzak ilçelerinden. Buradaki işleri günübirlik program hâlinde planlıyoruz: keşif telefonla ön değerlendirme, ardından ekip ve ekipmanla tek seferde iş teslimi. Çivril’de tarımsal yapılar, depolar ve konut tadilatları ağırlıklı.',
    note: '',
  },
  {
    name: 'Çal',
    slug: 'cal-karot',
    zone: 'uzak',
    intro:
      'Çal ve çevresinde beton delme, kesme ve kırma hizmeti veriyoruz. Merkeze uzak olduğu için Çal’daki işleri önceden planlayıp tek gidişte tamamlayacak şekilde organize ediyoruz.',
    note: '',
  },
  {
    name: 'Acıpayam',
    slug: 'acipayam-karot',
    zone: 'uzak',
    intro:
      'Acıpayam’da konut, iş yeri ve tarımsal yapılarda karot delme, beton kesme ve kırma işleri yapıyoruz. İlçeye ekipmanla gidildiği için Acıpayam ve çevre köylerdeki işleri aynı program içinde birleştirebiliyoruz.',
    note: '',
  },
  {
    name: 'Kale',
    slug: 'kale-karot',
    zone: 'uzak',
    intro:
      'Kale ilçesinde beton delme, kesme ve kontrollü kırım hizmeti veriyoruz. Uzak mesafeli işlerde fiyat teklifini yol ve süre dâhil net olarak veriyoruz — sonradan ek kalem çıkmıyor.',
    note: '',
  },
  {
    name: 'Çameli',
    slug: 'cameli-karot',
    zone: 'uzak',
    intro:
      'Çameli’ne beton delme, kesme ve kırma işleri için ekip ve ekipmanla gidiyoruz. Uzak mesafe nedeniyle işi tek gidişte bitirecek şekilde planlıyor, gerekli tüm uçları ve yedek ekipmanı yanımızda götürüyoruz.',
    note: '',
  },
  {
    name: 'Çardak',
    slug: 'cardak-karot',
    zone: 'uzak',
    intro:
      'Çardak’ta konut, iş yeri ve tesis yapılarında karot delme ve beton kesme hizmeti veriyoruz. Tesisat ve havalandırma geçişleri için hassas delme işlerini pürüzsüz yüzeyle teslim ediyoruz.',
    note: '',
  },
  {
    name: 'Bozkurt',
    slug: 'bozkurt-karot',
    zone: 'uzak',
    intro:
      'Bozkurt ilçesinde beton delme, kesme ve kırma işleri yapıyoruz. Depo ve üretim yapılarında makine montaj ankrajları ile döşeme kesimi sık aldığımız talepler arasında.',
    note: '',
  },
  {
    name: 'Beyağaç',
    slug: 'beyagac-karot',
    zone: 'uzak',
    intro:
      'Beyağaç’a beton delme ve kesme işleri için ekipmanla gidiyoruz. İlçedeki işleri önceden planlayıp tek seferde tamamlıyor, keşif değerlendirmesini telefonla fotoğraf üzerinden hızlandırıyoruz.',
    note: '',
  },
  {
    name: 'Bekilli',
    slug: 'bekilli-karot',
    zone: 'uzak',
    intro:
      'Bekilli’de konut ve iş yeri tadilatlarında kontrollü beton kırma, karot delme ve kesme hizmeti veriyoruz. Taşıyıcı sisteme müdahale gerektiren işlerde mutlaka proje ve mühendis onayı arıyoruz.',
    note: '',
  },
  {
    name: 'Baklan',
    slug: 'baklan-karot',
    zone: 'uzak',
    intro:
      'Baklan’da beton delme, kesme ve filiz ekimi hizmeti veriyoruz. Tarımsal tesis ve depo yapılarında ankraj ve montaj delikleri için karot uygulaması yapıyoruz.',
    note: '',
  },
  {
    name: 'Güney',
    slug: 'guney-karot',
    zone: 'uzak',
    intro:
      'Güney ilçesinde karot delme, beton kesme ve kırma işleri yapıyoruz. Uzak mesafeli işlerde ekip ve ekipman tek seferde gittiği için işin süresi ve maliyeti önceden netleşiyor.',
    note: '',
  },
]

export default serviceAreas
