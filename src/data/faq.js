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

  // Aşağıdaki iki soru Google'ın "Diğer sorular" kutusundan alındı; ikisi de
  // sık aranıyor ama sitede karşılığı yoktu.
  {
    kategori: 'genel',
    oneCikan: true,
    q: 'Karot firması ne iş yapar?',
    a: 'Karot firması, betonarme yapılarda elmas uçlu makinelerle delik açma ve kesim işlerini yapar. Tesisat, havalandırma ve asansör geçişleri için delik açmak; duvar ve döşemede kapı, pencere ya da boşluk kesmek; filiz ekimi, kimyasal dübel ve ankraj uygulamak bu işin kapsamındadır. Beton numunesi alma işini de karot ekipleri yapar — ancak numunenin deneyi ve raporlanması yetkili laboratuvarın işidir, karot firmasının değil.',
  },
  {
    kategori: 'genel',
    oneCikan: false,
    q: 'Karot ücretli mi, ücreti ne kadar?',
    a: 'İşin kendisi ücretlidir, keşif ücretsizdir. Tek bir fiyat listesi veremiyoruz çünkü rakamı delik çapı, beton kalınlığı, delik adedi, donatı yoğunluğu, çalışma yüksekliği, sahaya erişim ve mesafe birlikte belirliyor. Sahayı görmeden verilen fiyat tahmin olur. Keşiften sonra bütün kalemler dahil tek bir net rakam söylüyoruz ve iş bitiminde ek kalem çıkmıyor.',
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

  {
    kategori: 'teknik',
    oneCikan: true,
    q: 'Beton ne ile kesilir?',
    a: 'Kalınlığa göre değişir. Spirale takılan elmas diskle ancak 3-7 santim derinliğe inilir; sığ işler dışında yetmez. Beton için üretilmiş sulu elmas testerelerle tek yüzden 12-15 santim, ray sistemli duvar testeresiyle iki yüzden çalışarak 600 mm kalınlığa kadar iniyoruz. Elektriğin yetmediği ya da kesitin daha kalın olduğu yerlerde hidrolik sistem, çok kalın kesitlerde tel testere kullanılır.',
  },
  {
    kategori: 'teknik',
    oneCikan: false,
    q: 'Karot makinesi kaç metre deler?',
    a: 'Delme derinliğini makine değil, uca eklenen uzatmalar ve sahadaki erişim belirler. Standart uçlarla 40-50 santim tek seferde geçilir; uzatma eklenerek bir metrenin üzerine çıkılabilir. Sınır genelde derinlik değil, makinenin sabitlenebileceği düzgün bir yüzeyin ve ucun geri çekilebileceği boşluğun bulunup bulunmamasıdır. Çap tarafında ise 50 mm ile 1000 mm arasında çalışıyoruz.',
  },
  {
    kategori: 'teknik',
    oneCikan: true,
    q: 'Karot testi nasıl yapılıyor?',
    a: 'Üç ayrı taraf var. Numunenin hangi elemandan, nereden ve kaç adet alınacağına yapının mühendisi karar verir. Numuneyi biz alırız: elmas uçlu makineyle, su soğutmalı ve yüzeye dik biçimde silindir çıkarılır, etiketlenip teslim edilir. Deneyi yapmak, kırmak ve raporlamak ise yetkili laboratuvarın işidir. Biz rapor düzenlemiyor, sonuç yorumlamıyoruz.',
  },
  {
    kategori: 'teknik',
    oneCikan: false,
    q: 'Karot örneği nereden ve kaç adet alınır?',
    a: 'Yeri ve sayıyı yapının mühendisi belirler; bu karar için projeyi ve taşıyıcı sistemi bilmek gerekir. Teknik kısıtlar şunlar: numune yüzeye dik alınır, içinde donatı bulunmamalıdır, kolon-kiriş birleşimi gibi kritik bölgelerden alınmaz, alındığı yer ve yön etiketlenir. Donatının konumu delme öncesinde tarama cihazıyla belirlenir.',
  },
  {
    kategori: 'teknik',
    oneCikan: false,
    q: 'Karot alınan yere ne yapılır?',
    a: 'Numune için açılan delik, rötresi telafi edilmiş (kürlenirken büzülmeyen) tamir harcıyla doldurulur. Öncesinde delik içi kesim çamurundan tamamen temizlenir, yoksa harç betona tutunmaz. Su geçirmesi istenmeyen yerlerde üstüne ayrıca su yalıtımı gelir. Normal çimento harcı, alçı ve poliüretan köpük bu iş için uygun değildir.',
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

  {
    kategori: 'guvenlik',
    oneCikan: false,
    q: 'Karot alınan binada oturulur mu, tehlikeli mi?',
    a: 'Doğru yerden ve doğru sayıda alınmış numune taşıyıcı sistemi zayıflatacak boyutta değildir; çıkan silindir elemanın kesitinin yanında çok küçük kalır ve yer seçimi zaten donatıya ve kritik bölgelere denk gelmeyecek şekilde yapılır. Bu yüzden numune alınmış binada oturulmasında sakınca doğmaz. Buradaki hassasiyet sayı ve yerdedir; o karar da mühendise aittir.',
  },
  {
    kategori: 'guvenlik',
    oneCikan: false,
    q: 'Karot testi zorunlu mu, kim karar verir?',
    a: 'Bu bizim karar verdiğimiz bir konu değil. Numune alınması gerekip gerekmediğine yapının mühendisi ya da süreci yürüten yetkili kurum karar verir; hangi durumlarda zorunlu olduğu da mevzuatla belirlenmiştir. Biz numune alma hizmeti veriyoruz, sürecin tarafı değiliz. Zorunluluk ve başvuru konularını ilgili kuruma veya yapının mühendisine sormak gerekir.',
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
  {
    kategori: 'sure',
    oneCikan: false,
    q: 'Karot sonucu kaç günde çıkar?',
    a: 'Numunenin alınması genelde aynı gün tamamlanır. Sonrasındaki süre laboratuvarın iş programına ve deney planına bağlıdır; bu konuda söz veremiyoruz çünkü o aşama bizim elimizde değil. Süreyi numuneyi teslim ettiğimiz laboratuvardan ya da işi yürüten mühendisten öğrenmek gerekir.',
  },
  {
    kategori: 'sure',
    oneCikan: false,
    q: 'Karot alındıktan sonra ne oluyor?',
    a: 'Çıkan silindir, hangi elemandan ve hangi yönde alındığı yazılı bir etiketle laboratuvara teslim edilir. Laboratuvar numuneyi hazırlar, kırar ve dayanımı raporlar. Raporun yapı için ne anlama geldiğini ise yapının mühendisi değerlendirir. Bizim tarafımızda kalan iş, geriye kalan deliğin uygun tamir harcıyla kapatılmasıdır — bunun teklife dahil olup olmadığını başlamadan konuşuyoruz.',
  },
]

/** llms.txt ve ana FAQ şeması için öne çıkan sorular. */
export const oneCikanFaq = faq.filter((f) => f.oneCikan)

export default faq
