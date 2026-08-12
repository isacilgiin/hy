/**
 * Sık Sorulan Sorular.
 *
 * Tek kaynak: hem /sikca-sorulan-sorular/ sayfası, hem llms.txt, hem de
 * FAQPage yapılandırılmış verisi (Google'da soru-cevap kutusu) buradan beslenir.
 *
 * `oneCikan: true` işaretli sorular llms.txt'ye ve ana FAQ şemasına girer.
 */

export const faqCategories = [
  { id: 'genel', title: 'Genel & Fiyatlandırma' },
  { id: 'teknik', title: 'Teknik Sorular' },
  { id: 'guvenlik', title: 'Güvenlik & Yapısal Konular' },
  { id: 'sure', title: 'Süreç & Teslimat' },
]

export const faq = [
  // ===== GENEL =====
  {
    kategori: 'genel',
    oneCikan: true,
    q: 'Keşif ücretli mi?',
    a: 'Hayır, keşif ücretsizdir. Denizli merkez ve yakın ilçelerde yerinde geliyoruz. Uzak ilçelerde ilk değerlendirmeyi WhatsApp’tan göndereceğiniz fotoğraf ve ölçülerle yapıp bir fiyat aralığı söyleyebiliyoruz; kesin teklif gerekirse yerinde keşifle veriliyor.',
  },
  {
    kategori: 'genel',
    oneCikan: true,
    q: 'Fiyat neye göre belirleniyor?',
    a: 'Karot işlerinde delik çapı, beton kalınlığı ve delik adedi; kesim işlerinde kesim metrajı ve derinliği belirleyicidir. Bunlara donatı yoğunluğu, çalışma yüksekliği ve sahaya erişim eklenir. Keşiften sonra bu kalemlerin hepsi dahil tek bir net rakam veriyoruz — iş bitiminde ek kalem çıkmıyor.',
  },
  {
    kategori: 'genel',
    oneCikan: false,
    q: 'Küçük bir iş için de geliyor musunuz?',
    a: 'Geliyoruz. Tek bir klima veya tesisat deliği gibi küçük işler de yapıyoruz. Uzak ilçelerde maliyeti düşürmek için, aynı bölgedeki başka işlerle aynı güne denk getirmeye çalışıyoruz.',
  },
  {
    kategori: 'genel',
    oneCikan: true,
    q: 'Hangi bölgelere hizmet veriyorsunuz?',
    a: 'Denizli il genelindeki tüm ilçelere gidiyoruz: Merkezefendi, Pamukkale, Honaz, Sarayköy, Babadağ, Serinhisar, Tavas, Buldan, Çivril, Çal, Acıpayam, Kale, Çameli, Çardak, Bozkurt, Beyağaç, Bekilli, Baklan ve Güney. Çevre illerdeki işleri de kapsamına göre değerlendiriyoruz.',
  },

  // ===== TEKNİK =====
  {
    kategori: 'teknik',
    oneCikan: true,
    q: 'Karot ile kırıcı arasındaki fark nedir?',
    a: 'Kırıcı betonu darbeyle parçalar; delik kenarı düzensiz çıkar, çevredeki betonda çatlak oluşabilir ve donatı zorlanır. Karotta ise elmas uçlu silindirik bir uç betonu keserek ilerler. Bu yüzden delik kenarı pürüzsüz olur, ek sıva veya tamir gerekmez ve çevre yapıya darbe yükü binmez.',
  },
  {
    kategori: 'teknik',
    oneCikan: true,
    q: 'Ne kadar toz ve gürültü oluşuyor?',
    a: 'Karot ve elmas diskli kesimde su soğutması kullanıldığı için toz büyük ölçüde bastırılır; oluşan çamurumsu artık toplanır. Gürültü de kırıcıya göre belirgin şekilde düşüktür. Bu nedenle oturulan binalarda, iş yerlerinde ve hastane/okul gibi hassas ortamlarda tercih edilen yöntem karottur.',
  },
  {
    kategori: 'teknik',
    oneCikan: false,
    q: 'En büyük kaç santimlik delik açabiliyorsunuz?',
    a: '50 mm’den 1000 mm’ye kadar her çapta karot delme yapıyoruz. Çapın büyümesi makine ve uç seçimini, bazen de ek sabitleme gerektirir. İhtiyacınız olan çapı söylerseniz uygulanabilir olup olmadığını hemen değerlendirebiliriz.',
  },
  {
    kategori: 'teknik',
    oneCikan: false,
    q: 'Delme sırasında donatıya (demire) denk gelirse ne oluyor?',
    a: 'Elmas uç donatıyı da keserek ilerler, işlem durmaz. Ancak taşıyıcı bir elemanda donatı kesmek yapısal sonuç doğurur; bu yüzden taşıyıcı kolon, perde ve kirişlerde delik yeri statik projeye göre belirlenir. Gerekirse donatı tarama cihazıyla demir konumu tespit edilip delik kaydırılır.',
  },
  {
    kategori: 'teknik',
    oneCikan: false,
    q: 'Su kullanılıyor mu, zemine zarar verir mi?',
    a: 'Karot ve duvar testeresinde soğutma için su kullanılır. Çalışma alanı önceden örtülür, oluşan su ve artık toplanarak alınır. İç mekânda su istenmeyen durumlarda kuru sistemle ve toz emiş üniteleriyle çalışılabilir; keşifte hangisinin uygun olduğuna birlikte karar veriyoruz.',
  },
  {
    kategori: 'teknik',
    oneCikan: false,
    q: 'Filiz ekimi ile kimyasal dübel aynı şey mi?',
    a: 'Aynı yöntemin iki farklı kullanımı. İkisinde de deliğe enjekte edilen reçine, çeliği betona kimyasal olarak kenetler. “Filiz ekimi” dendiğinde mevcut betonarmeye yeni donatı ekleyip yeni bir yapı elemanı bağlamak kastedilir. “Kimyasal dübel” ise genellikle saplama veya ankraj çubuğu ile bir ekipman, konstrüksiyon ya da korkuluk bağlamaktır.',
  },

  // ===== GÜVENLİK =====
  {
    kategori: 'guvenlik',
    oneCikan: true,
    q: 'Taşıyıcı kolona veya perdeye müdahale edilebilir mi?',
    a: 'Taşıyıcı elemanlara müdahale ancak statik proje ve yetkili mühendis onayıyla yapılır. Onay olmadan taşıyıcı kolon, perde veya kiriş üzerinde kesim/delim işine başlamıyoruz. Keşifte hangi elemanın taşıyıcı olduğunu birlikte değerlendirip, gerekiyorsa proje müellifine yönlendiriyoruz.',
  },
  {
    kategori: 'guvenlik',
    oneCikan: false,
    q: 'Oturulan binada çalışma yapılabilir mi?',
    a: 'Yapılabilir; karot ve elmas diskli kesim zaten bu tür durumlar için uygun yöntemlerdir. Çalışma alanı örtülür, su ve artık kontrol altında tutulur, iş bitiminde alan temiz teslim edilir. Apartmanlarda komşuların rahatsız olmaması için çalışma saatini önceden planlıyoruz.',
  },
  {
    kategori: 'guvenlik',
    oneCikan: false,
    q: 'Duvarın içinde tesisat varsa ne oluyor?',
    a: 'Kesim ve delim öncesi duvar içindeki elektrik, su ve doğalgaz hatlarının konumu değerlendirilir; şüpheli durumda tarama yapılır veya ilgili hat geçici olarak kapattırılır. Bu kontrol yapılmadan başlanan işler hem tehlikeli hem de maliyetlidir; biz bu adımı atlamıyoruz.',
  },

  // ===== SÜREÇ =====
  {
    kategori: 'sure',
    oneCikan: true,
    q: 'Ne kadar sürede başlıyorsunuz?',
    a: 'Denizli merkezde programımız uygunsa aynı gün, değilse ertesi gün ulaşıyoruz. Yakın ilçelerde günübirlik gidiyoruz. Uzak ilçelerde işi tek gidişte bitirecek şekilde planladığımız için tarih önceden netleşiyor. 7/24 açığız; acil durumlarda telefonla değerlendirme yapıyoruz.',
  },
  {
    kategori: 'sure',
    oneCikan: false,
    q: 'Moloz kaldırılıyor mu?',
    a: 'Evet. Beton kırma ve yıkım işlerinde moloz toplama ve nakliye hizmete dahildir. Karot işlerinde çıkan karot göbekleri ve kesim artığı da tarafımızdan alınır — sahayı süpürülmüş hâlde teslim ediyoruz.',
  },
  {
    kategori: 'sure',
    oneCikan: false,
    q: 'Elektrik ve su siz mi sağlıyorsunuz?',
    a: 'Genellikle sahadaki mevcut elektrik ve su tesisatı yeterli oluyor; ihtiyaç duyulan bağlantıyı keşifte konuşuyoruz. Elektriğin olmadığı veya yetersiz olduğu sahalarda hidrolik güç üniteli sistemlerle çalışabiliyoruz, bu durumda ek bir altyapı gerekmiyor.',
  },
  {
    kategori: 'sure',
    oneCikan: false,
    q: 'Fatura kesiyor musunuz?',
    a: 'Evet, yapılan tüm işler için fatura düzenliyoruz. Kurumsal işlerde teklif, sözleşme ve hakediş sürecine uygun şekilde ilerliyoruz.',
  },
]

/** llms.txt ve ana FAQ şeması için öne çıkan sorular. */
export const oneCikanFaq = faq.filter((f) => f.oneCikan)

export default faq
