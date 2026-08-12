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
 * Her ilçenin kendi metni ve kendi SSS'i src/data/serviceAreas.js içinde ayrı ayrı
 * yazılmıştır (ilçeler arası cümle tekrarı yok). Buradaki `howWeWork` yalnızca
 * sayfadaki küçük "Nasıl çalışıyoruz?" kutusunu besler ve mesafeye göre değişir.
 */
export const zoneContent = {
  merkez: {
    label: 'Denizli merkez',
    howWeWork:
      'Merkezdeki işlere genellikle aynı gün içinde ulaşıyoruz. Keşif ücretsiz; işin yöntemi ve fiyatı başlamadan önce netleşiyor.',
  },
  yakin: {
    label: 'Merkeze yakın ilçe',
    howWeWork:
      'Merkeze yakın olduğu için günübirlik ulaşıyoruz. Keşif ücretsiz; yol ve süre dâhil net fiyat veriyoruz, sonradan ek kalem çıkmıyor.',
  },
  uzak: {
    label: 'Merkeze uzak ilçe',
    howWeWork:
      'Merkeze uzak olduğu için işi tek gidişte bitirecek şekilde planlıyoruz: gerekli tüm uçlar ve yedek ekipman yanımızda geliyor. Ön değerlendirmeyi telefonla fotoğraf üzerinden hızlandırıyoruz.',
  },
}

const serviceAreas = [
  {
    name: 'Merkezefendi',
    slug: 'merkezefendi-karot',
    zone: 'merkez',
    intro: [
      'Merkezefendi, işletmemizin adresinin de bulunduğu ilçe: Yeni Mahalle 5039. Sokak No:14. Tadilat ve dönüşüm işlerinin bir bölümü delme tarafında değil, kesme tarafında toplanır. Mevcut bir duvarda kapı ya da pencere açıklığı açmak veya büyütmek, iş yeri tadilatında bölme duvarı kaldırmak, döşemede merdiven ya da asansör boşluğu oluşturmak bunların başlıcaları. Delme tarafında ise klima, baca ve su-pis su geçişleri için karotla temiz, ölçülü delik açılıyor.',
      'Açıklıkları elmas diskli duvar testeresiyle açıyoruz. Kırıcı, açıklığın çevresindeki betonu çatlatarak ilerler; elmas disk betonu keserek geçtiği için kesim hattı düz çıkar, kenarda ek sıva veya tamir işi kalmaz, yan bölmelere ağır titreşim yayılmaz. Kesilecek eleman taşıyıcıysa işe statik proje ve mühendis onayı olmadan başlamıyoruz: kaldırılan yükün nereye aktarılacağı, gerekiyorsa hangi güçlendirmenin yapılacağı önce çözülmeli. Onay çıktıktan sonra kesim hattı işaretleniyor ve iş tek programda bitecek şekilde yürütülüyor.',
    ],
    yerelBaglam: 'İlçede çok katlı konut ağırlıklı bir doku var; zemin katlarda dükkânlar, ara sokaklarda küçük atölyeler ve iş yerleri bulunuyor. Bu yüzden işlerin çoğu, çevresinde insanlar yaşarken ve çalışırken yapılıyor. Planlamayı buna göre kuruyoruz: kesilen parçanın hangi ölçüde bölüneceği, çalışma alanının nereden ve nasıl sınırlanacağı, molozun binadan nasıl çıkarılacağı daha iş başlamadan belli oluyor. Apartmanlarda çalışma saatini yönetimle konuşuyor, ortak alanları örtüyoruz. Amaç, binadaki günlük düzeni en az bozacak şekilde işi tek seferde bitirmek.',
    sss: [
      {
        q: 'Merkezefendi\'deki dairemde bir duvarı kaldıracağım; kesim mi kırma mı yapılmalı?',
        a: 'Duvarın konumu ve çevresindeki yapı belirliyor. Bölme duvarı serbest bir alandaysa kontrollü kırma daha hızlı ve ekonomik çözüm olur. Duvar taşıyıcı bir elemana bitişikse, karşı tarafında oturulan bir daire varsa ya da açıklığın kenarının düzgün kalması gerekiyorsa elmas diskli kesim tercih edilir; kesim hattı düz çıktığı için arkasından toplanacak bir tamir işi bırakmaz. Yerinde bakıp hangisinin uygun olduğunu söylüyoruz.',
      },
      {
        q: 'Merkezefendi\'deki binamda kesilecek duvarın taşıyıcı olup olmadığına siz mi karar veriyorsunuz?',
        a: 'Hayır. Yerinde baktığımızda duvarın taşıyıcı olma ihtimali yüksekse bunu söyleriz, ama karar bize ait değil. Taşıyıcı bir perdeye, kolona ya da döşemeye müdahale edilecekse yapının statik projesi üzerinden bir inşaat mühendisinin değerlendirmesi ve onayı gerekir. Onay ve gerekiyorsa güçlendirme detayı olmadan taşıyıcı elemanda kesim yapmıyoruz. Bu, hem yapının güvenliğinin hem de bizim sorumluluğumuzun sınırı.',
      },
      {
        q: 'Merkezefendi\'de kesim sırasında çıkan toz ve su daireye zarar verir mi?',
        a: 'Elmas diskli kesimde ve karotta uç su ile soğutulur; toz havaya kalkmadan suyla bağlanır, ortalık gri bir buluta dönmez. Kapalı mekânda çalışırken kesim hattının altına su toplama düzeni kuruyor, çevredeki eşyayı ve zemini örtüyoruz. Kesim suyunun nereye yönlendirileceği işe başlamadan belirleniyor. Kesilen parçalar ve moloz iş bitiminde toplanıyor, alan süpürülmüş halde teslim ediliyor.',
      },
      {
        q: 'Merkezefendi\'de kesilecek duvarın içinden elektrik veya su tesisatı geçiyorsa ne yapıyorsunuz?',
        a: 'Kesime başlamadan önce hattın güzergâhını konuşuyoruz: tesisat projesi varsa onun üzerinden, yoksa priz, anahtar, kolon ve batarya çıkışlarının konumundan yola çıkarak. Şüpheli bir durum varsa ilgili su ve elektrik hattı kapatılıyor, gereken yerde güzergâh kesimden önce taşınıyor. Karot deliklerinde de aynı kontrolü yapıyoruz; delik yeri, tesisat ve donatı konumuna göre gerektiğinde kaydırılabiliyor.',
      },
    ],
    // TODO: bu ilçede yaptığınız GERÇEK bir işi 2-3 cümleyle yazarsanız
    // sayfada ayrı bir kutuda görünür ve içeriği daha da güçlendirir.
    note: '',
  },
  {
    name: 'Pamukkale',
    slug: 'pamukkale-karot',
    zone: 'merkez',
    intro: [
      'Pamukkale\'yi çoğu kişi travertenleri ve turizmiyle tanıyor; ilçede verdiğimiz hizmetlerin bir başlığı da mevcut betonarmeye yeni bağlantı kazandırma işleridir. Filiz ekimi, kimyasal dübel ve ankraj uygulamaları şu işlerde kullanılıyor: ek kat veya balkon ilavesinde donatı devamlılığını kurmak, kolon güçlendirme bağlantılarını yapmak, çelik konstrüksiyon ayaklarını ve makine kaidelerini mevcut betona sabitlemek gibi. Konaklama tesisi ve iş yeri tadilatlarında ise havalandırma, mutfak ve tesisat geçişleri için karot delme devreye giriyor.',
      'Filiz ekiminde iş, deliği açmakla bitmiyor. Delik çapı ve gömme derinliği proje detayına göre belirleniyor, delik basınçlı hava ve fırçayla temizleniyor, ardından iki bileşenli reçine enjekte edilip donatı yerleştiriliyor. Bu adımlardan biri atlandığında bağlantının çekme dayanımı düşer; tozu alınmamış bir delikte reçine betona tam kenetlenmez. Kürleme tamamlanmadan bağlantıya yük verilmiyor; uygulama sonunda hangi çapta kaç adet filiz ekildiğini yazılı olarak veriyoruz.',
    ],
    yerelBaglam: 'İlçedeki yapı stoğu karışık: yeni konut siteleri, dükkân ve iş yerleri, turizmle birlikte gelen konaklama yapıları bir arada. Konaklama tesislerinde ve dükkânlarda işin kendisi kadar ne zaman yapıldığı da önemli olduğundan, 7/24 çalışıyor olmamızdan yararlanıp gürültü çıkaran adımları işletmenin kapalı olduğu saatlere alıyoruz. Güçlendirme ve filiz ekimi işlerinde ise sıra belirleyici: önce delme ve delik temizliği, sonra enjeksiyon, sonra kürleme beklemesi. Bu bekleme süresini programa baştan yazıyoruz ki sahada başka bir ekip boşuna beklemesin.',
    sss: [
      {
        q: 'Pamukkale\'deki bir konaklama tesisinde, işletme açıkken çalışabiliyor musunuz?',
        a: 'Çalışabiliyoruz. Gürültülü bölümleri misafirlerin en az etkileneceği saatlere almayı tercih ediyoruz; 7/24 çalıştığımız için program buna göre kurulabiliyor. İşletmeyle önceden üç şeyi netleştiriyoruz: ekipmanın hangi servis girişinden ve merdivenden taşınacağı, suyun nereden alınıp nereye tahliye edileceği, hangi bölümün kullanıma kapalı kalacağı. Böylece odalar ve ortak alanlar gereğinden uzun süre devre dışı kalmıyor.',
      },
      {
        q: 'Pamukkale\'de mevcut binaya ek kat veya balkon yapılacaksa neden filiz ekimi gerekiyor?',
        a: 'Yeni betonun eskisinin üzerine dökülmesi tek başına güvenli bir bağlantı sağlamaz; ikisi arasında donatı devamlılığı olması gerekir. Filiz ekimi tam olarak bunu kurar: mevcut betona projede belirtilen çap ve derinlikte delik açılır, delik temizlenir, kimyasal reçineyle donatı ekilir ve yeni imalatın donatısı bu filizlere bağlanır. Çap, derinlik ve aralık proje detayından okunur; sahada göz kararı belirlenmez.',
      },
      {
        q: 'Pamukkale\'de yapılan kimyasal dübel uygulamasından sonra bağlantıya hemen yük verilebilir mi?',
        a: 'Hayır. Reçinenin kürlenmesi gerekiyor ve bu süre ortam sıcaklığına göre değişir, hava soğudukça uzar. Kürleme tamamlanmadan saplamaya makine, korkuluk ya da çelik ayak yüklenirse bağlantı tasarlandığı dayanımı vermez. Bu yüzden montajı yapacak ekiple işi baştan sıraya koyuyoruz; ekim gününü ve montajın ne zaman başlayabileceğini birlikte planlıyoruz. Talep edilirse çekme testi de yaptırılabiliyor.',
      },
      {
        q: 'Pamukkale\'de ankraj ya da karot deliği açarken donatıya denk gelirseniz ne oluyor?',
        a: 'Karotta elmas uç donatıyı keserek geçebilir. Taşıyıcı olmayan bir geçiş deliğinde sınırlı sayıda donatının kesilmesi genelde kabul edilebilir; ancak taşıyıcı elemanda bu karar sahada verilmez, projeye ve mühendise aittir. Ankrajda durum farklı: yük taşıyacak bir bağlantı, mevcut donatıyı kesme pahasına açılmaz. Böyle bir durumda delik konumu kaydırılır ya da kenar mesafesiyle gömme derinliği yeniden değerlendirilir.',
      },
    ],
    // TODO: bu ilçede yaptığınız GERÇEK bir işi 2-3 cümleyle yazarsanız
    // sayfada ayrı bir kutuda görünür ve içeriği daha da güçlendirir.
    note: '',
  },
  {
    name: 'Denizli (Merkez)',
    slug: 'denizli-karot',
    zone: 'merkez',
    intro: [
      'Denizli merkezde çalışmak, çoğu zaman içinde insan olan bir binada çalışmak demek: üst katta oturan bir aile, bitişikte açık bir dükkân, girişte park hâlinde araçlar. Bu yüzden merkezdeki bir karot ya da kesim işini yalnızca betonu delmek olarak değil, binanın gündelik düzenini bozmadan delmek olarak planlıyoruz. Elmas uçlu karot makinesi ve elmas diskli testere, kırıcı gibi darbe üretmediğinden komşu dairelerde hissedilen titreşim düşük kalıyor; delik ve kesim kenarı düzgün çıktığı için arkasından büyük bir tamir işi de gelmiyor.',
      'Şehir merkezinde ikinci mesele suyun ve tozun kontrolü. Karot ucu suyla soğuduğu için ortaya çamurlu su çıkar; boyalı duvarın ve döşenmiş zeminin ortasında bunu toplamak, işin kendisi kadar önem taşıyor. Çalışma alanını örtüyor, suyu delik çevresinde toplayarak ilerliyor, molozu dar merdiven ve asansör düzenine göre paketleyip çıkarıyoruz. Kırım gerektiren işlerde de aynı mantıkla, parça parça ve kontrollü ilerliyoruz; güçlendirme ya da ek imalat söz konusuysa filiz ekimi ve ankrajla eski betona yeni taşıyıcı bağlantı kazandırıyoruz. Denizli merkez içindeki işlere çoğunlukla aynı gün ulaşabildiğimiz için tadilatın sıraya girmiş diğer kalemleri de beklemede kalmıyor.',
    ],
    yerelBaglam: 'Aynı sokaktan gelen iki talep bambaşka olabiliyor: birinde klima ve tesisat geçişi için karot, diğerinde bitişikteki dükkânda vitrin açıklığı için kesim. Merkezin dokusu buna yol açıyor: yıllar içinde eklenmiş apartmanlar, zemin katı dükkâna çevrilmiş konutlar, iş hanları ve küçük atölyeler iç içe geçmiş durumda. Bu yüzden işe başlamadan sorduğumuz şeyler hep aynı; bina oturuluyor mu, dükkân açık kalacak mı, ekipman hangi kapıdan girecek, moloz nereden çıkacak. Alınan cevaplara göre hem çalışma saatini hem de sahaya yerleşme sırasını belirliyoruz.',
    sss: [
      {
        q: 'Denizli merkezde apartman dairesinde karot alınırken alt komşuya su iner mi?',
        a: 'İnmemesi için su kontrollü çalışıyoruz. Karot ucu suyla soğutulur; bu suyu delik çevresinde toplayıp tahliye ederek ilerliyoruz. Döşemeden geçen deliklerde alt taraf işe başlamadan kapatılır, tavana doğru delmelerde ise su toplama aparatı kullanılır. Yine de alt komşunun işten haberdar edilmesini rica ediyoruz; alt daire kapalıysa döşemenin diğer yüzünü görmeden deliği tamamlamıyoruz.',
      },
      {
        q: 'Denizli merkezdeki dükkânımızda çalışırken işletmeyi kapatmamız gerekir mi?',
        a: 'Çoğu işte gerekmiyor. Çalışılacak bölümü perdeleyip ayırıyor, kalan alanın açık kalmasını sağlıyoruz. Kesimin gürültülü olduğu aralık genelde birkaç aşamayla sınırlı kalıyor; bunu müşteri yoğunluğunun düştüğü saate denk getirmeye çalışıyoruz. 7/24 çalıştığımız için mesai dışında, akşam ya da sabah erken saatlerde de gelebiliyoruz. Hangi seçeneğin uygun olduğuna keşifte birlikte karar veriyoruz.',
      },
      {
        q: 'Denizli merkezdeki dairemizde taşıyıcı olup olmadığını bilmediğimiz bir duvarı kaldırabilir misiniz?',
        a: 'Duvarın taşıyıcı olup olmadığı belirlenmeden kesime başlamıyoruz. Taşıyıcı bir elemana müdahale gerekiyorsa statik proje ve inşaat mühendisi onayı şart; kaldırılan yükü karşılayacak güçlendirme detayı da projede tanımlanmış olmalı. Onay çıktıktan sonra kesimi projedeki hat ve sıraya göre yapıyoruz. Bu adım atlandığında iş hem ruhsat hem yapı güvenliği açısından sorun doğurur.',
      },
      {
        q: 'Denizli merkezdeki dar sokaklarda ve asansörsüz binalarda çalışabiliyor musunuz?',
        a: 'Çalışıyoruz. Karot ve kesim ekipmanı parçalı taşınabildiği için makineyi sökerek merdivenden çıkarabiliyoruz; aracın kapıya yanaşamadığı sokaklarda ekipmanı elle taşıyoruz. Böyle binalarda asıl planlanması gereken şey molozun çıkışı oluyor: parçaları taşınabilir boyutta kesip torbalıyor, merdiven ve giriş bölümünü örtüyoruz. İş bittiğinde alanı süpürülmüş hâlde teslim ediyoruz.',
      },
    ],
    // TODO: bu ilçede yaptığınız GERÇEK bir işi 2-3 cümleyle yazarsanız
    // sayfada ayrı bir kutuda görünür ve içeriği daha da güçlendirir.
    note: '',
  },
  {
    name: 'Honaz',
    slug: 'honaz-karot',
    zone: 'yakin',
    intro: [
      'Honaz’da üretimi devam eden bir tesisin içinde çalışmak sık karşılaşılan bir durum. Böyle bir sahada işin teknik tarafı kadar zamanlaması da belirleyici oluyor: hangi bölüm duracak, çalışma hangi saat aralığına sığacak, ekip ve ekipman hangi kapıdan girecek. Bunları keşif sırasında konuşuyor, çalışma saatini tesisin kendi üretim programına göre belirliyoruz. 7/24 açık olduğumuz için vardiya dışı saatler ve hafta sonu bizim açımızdan engel değil.',
      'Sanayi yapılarında en sık karşılaşılan başlıklar şunlar: zeminden ve duvardan geçirilecek boru, kanal ve kablo hatları için karot; mevcut betona yeni bir ekipman ya da betonarme ek bağlamak için filiz ekimi ile kimyasal dübel; bir de bölme düzenlemelerinde açıklık kesimi. İlçe merkeze yakın olduğundan Honaz’a gün içinde gidip dönebiliyoruz; ölçünün alınması, kesimin yapılması ve sahanın temiz teslim edilmesi çoğu işte aynı güne sığıyor.',
    ],
    yerelBaglam: 'Honaz’ın yapı stoğu iki ayrı karakterde. Bir yanda organize sanayi bölgesindeki üretim tesisleri, depolar ve atölyeler var; buralarda betonarme kesitler kalın, donatı sık olur ve iş çoğunlukla ekipman yerleşimine bağlı ilerler. Diğer yanda ilçe merkezi ve köylerdeki konutlar, dükkânlar ve tarımsal yapılar bulunuyor; buradaki işler daha çok tesisat geçişi, açıklık kesimi ve sınırlı ölçekte kırım kapsamında kalıyor. İkisini aynı gün programında birleştirmeye çalışıyoruz: sanayideki iş tesisin uygun penceresine, konut işi günün geri kalanına yerleşiyor. Keşif ücretsiz, fiyat işe başlamadan net.',
    sss: [
      {
        q: 'Honaz organize sanayi bölgesindeki tesisimizde üretim sürerken çalışabiliyor musunuz?',
        a: 'Genellikle evet. Çalışma alanını üretim hattından perdeyle ayırıyor, tozu ve suyu o alanın içinde tutuyoruz. Yöntem betonu darbeyle parçalamak yerine aşındırarak ilerlediği için zemine ve yandaki tezgâhlara aktarılan sarsıntı sınırlı kalıyor. Yine de bazı işler hattın kısa süre durmasını gerektirir; bunu keşifte konuşup çalışmayı tesisin uygun gördüğü vardiya arasına ya da hafta sonuna alıyoruz.',
      },
      {
        q: 'Honaz’daki bir iş aynı gün başlayıp aynı gün bitiyor mu?',
        a: 'Genelde tek günde tamamlanıyor. Aradaki yol kısa olduğu için sabah çıkıp aynı gün dönebiliyoruz; gerekli uçlar, diskler ve yedek ekipman baştan araca yükleniyor, ikinci bir sefer beklemiyorsunuz. İşin kapsamı büyükse ya da tesisin programı çalışmayı bölmeyi gerektiriyorsa, kaç aşamada yapılacağını keşiften sonra söylüyoruz. Sürprizle karşılaşmamanız için bunu teklif aşamasında netleştiriyoruz.',
      },
      {
        q: 'Honaz’daki tesisimize betonarme bir ek yapacağız, mevcut yapıya bağlantı nasıl kuruluyor?',
        a: 'Mevcut betona filiz ekimi ve kimyasal dübel ile bağlanıyor. Donatı çapı, gömme derinliği ve aralık projeden okunur. Delik açıldıktan sonra basınçlı hava ve fırçayla temizlenmeden reçine enjekte edilmez; içeride toz kalırsa aderans düşer. Reçinenin ortam sıcaklığına bağlı kürleme süresi dolmadan da bağlantıya yük verilmez. Bu adımlar atlandığında bağlantı projedeki değerleri karşılamaz.',
      },
      {
        q: 'Honaz’a keşif için yerinde geliyor musunuz, yoksa fotoğraf üzerinden mi ilerliyoruz?',
        a: 'Yerinde keşfe geliyoruz ve keşif ücretsiz. Betonun durumu, kalınlığı, sahaya erişim ve makinenin konumlanacağı yer ancak orada görülünce netleştiği için teklif de o zaman kesinleşiyor. Acele bir durum varsa yöntem hakkındaki ön bilgiyi, çekeceğiniz birkaç fotoğraf ve kaba ölçüler üzerinden telefonda da verebiliyoruz; ancak fiyatı yerinde görmeden kesinleştirmiyoruz.',
      },
    ],
    // TODO: bu ilçede yaptığınız GERÇEK bir işi 2-3 cümleyle yazarsanız
    // sayfada ayrı bir kutuda görünür ve içeriği daha da güçlendirir.
    note: '',
  },
  {
    name: 'Sarayköy',
    slug: 'saraykoy-karot',
    zone: 'yakin',
    intro: [
      'Sarayköy, jeotermal kaynakları ve seracılığıyla bilinen bir ilçe; buradaki beton delme işleri de çoğunlukla tek katlı tesis yapılarında gündeme geliyor. Sera, depo, paketleme ve idari yapılarda su hattı, drenaj, elektrik ya da havalandırma için betonarme döşemeden veya perde duvardan geçiş açılması gerekir. Bu geçişi kırıcıyla açmak beton yüzeyinde çatlak bırakır, donatıya zarar verme ihtimali doğurur. Elmas uçlu karot makinesi ise deliği tam istenen çapta ve düzgün kenarla çıkardığı için manşon ve yalıtım montajı da sorunsuz oturur.',
      'İkinci başlık saha betonu. Tesis girişlerinde, yükleme alanlarında ve yol kaplamasında elmas diskli kesme ile derz açmak, betonun rastgele bir yerden çatlamasını önleyip hareketi belirli bir hatta toplar; asfalt derz kesimini de aynı ekiple yapıyoruz. Mevcut bir zemin betonunda kanal veya rögar boşluğu açılacaksa kesim hattı önceden belirlenip parça bütün hâlinde alınıyor, çevresindeki beton zarar görmüyor. Çalışma şeklimiz sabit: önce ücretsiz keşif, sonra yöntem ve net fiyat, sonra iş.',
    ],
    yerelBaglam: 'Sarayköy\'de yapı stoğu ağırlıklı olarak müstakil konut, küçük iş yeri ve tarımsal üretime bağlı tesis yapılarından oluşuyor. Bu tip yapılarda iş genelde tek katlı, geniş açıklıklı ve zemine oturan betonarme üzerinde yürüdüğü için kesim hattı ile delik yerleri keşifte tek tek işaretlenebiliyor; çap, derinlik, elektrik ve su bağlantısı da o aşamada netleşiyor. İlçe merkeze yakın olduğundan ekip günübirlik gidiyor. Aynı tesiste veya yakın çevrede birden fazla nokta varsa hepsini tek programda topluyor, işletmenin duracağı süreyi kısaltıyoruz.',
    sss: [
      {
        q: 'Sarayköy\'deki sera ve tesis yapılarında boru geçişleri neden karotla açılıyor?',
        a: 'Bu yapılarda hatlar çoğunlukla betonarme döşemeden ya da perde duvardan geçer. Karot, elmas uçlu bir uçla betonu daire şeklinde keserek çıkarır; delik tam istenen çapta ve düzgün kenarlı olur. Kırıcıda beton parçalanır, donatıya zarar verme riski doğar ve boru ile delik arasında düzensiz boşluk kalır. Düzgün delik, manşon ile yalıtım montajını da kolaylaştırır.',
      },
      {
        q: 'Sarayköy\'de saha betonu ve asfalt üzerinde derz kesimi yapıyor musunuz?',
        a: 'Yapıyoruz. Tesis girişleri, yükleme alanları ve yol kaplamasında elmas diskli kesme ile derz açıyoruz. Derz, betonun genleşip büzülürken rastgele bir noktadan çatlamasını engeller, hareketi önceden belirlenmiş hatta toplar. Asfalt derz kesiminde de mantık aynıdır. Kesim hattını keşifte birlikte işaretliyor, derinliği ve aralığı zeminin kalınlığına göre belirliyoruz.',
      },
      {
        q: 'Sarayköy\'deki bir tesiste döşemeden geçiş açarken zemindeki mevcut hatlara denk gelme riski var mı?',
        a: 'Var, bu yüzden delik yeri rastgele seçilmiyor. Keşifte noktayı işaretliyor, varsa yapı ve tesisat projesini istiyor, hattın güzergâhını işletmeden soruyoruz. Şüphe varsa delik yerini kaydırmak, gömülü bir borunun üzerine denk gelmekten her zaman daha ucuza çıkar. Karot çekirdeği bütün hâlinde çıktığı için delik ilerledikçe kesitin ne verdiği de görülebiliyor.',
      },
      {
        q: 'Sarayköy\'de havalandırma gibi geniş bir açıklık gerekirse nasıl yapılıyor?',
        a: 'Tek karotla çıkmayan ölçülerde iki yol var: birbirine teğet karot delikleri açıp aradaki betonu almak ya da elmas diskli kesme ile dikdörtgen açıklık oluşturmak. Köşelere karot deliği açmak, diskin köşe dönüşünü de düzgün bırakır. Açıklık taşıyıcı bir elemana geliyorsa statik proje ve mühendis onayı olmadan başlamıyoruz.',
      },
    ],
    // TODO: bu ilçede yaptığınız GERÇEK bir işi 2-3 cümleyle yazarsanız
    // sayfada ayrı bir kutuda görünür ve içeriği daha da güçlendirir.
    note: '',
  },
  {
    name: 'Babadağ',
    slug: 'babadag-karot',
    zone: 'yakin',
    intro: [
      'Babadağ eğimli bir arazi üzerine kurulu olduğu için buradaki işlerde belirleyici olan çoğu zaman yöntemden çok erişimdir. Sokağın genişliği, aracın kapı önüne yanaşıp yanaşamaması, çalışma noktasının yola göre hangi kotta kaldığı işin süresini doğrudan değiştirir. Bir diğer nokta makinenin duracağı yer: karot makinesi çalışırken sabitlenir, dolayısıyla eğimli ya da dengesiz bir zeminde önce sağlam bir sabitleme noktası belirlenmesi gerekir. Ölçüyü de fiyatı da bu tabloyu gördükten sonra veriyoruz.',
      'Kot farkının belirgin olduğu yapılarda kırım ayrı bir dikkat ister. Bodrum duvarı ya da istinat işlevi gören bir yüzey varsa beton kırıcıyla toptan indirilmez; elmas diskli kesme ile taşınabilir parçalara ayrılıp sırayla alınır, böylece komşu yapıya ve zemine ağır titreşim binmez. Dokumacılık geçmişi olan ilçede konut, dükkân ve atölye ölçeğindeki yapılar için kapı-pencere açıklığı, tesisat geçişi, filiz ekimi ve ankraj işlerini yapıyoruz.',
    ],
    yerelBaglam: 'Babadağ\'da yapı ölçeği küçük olduğu için çalışma alanı çoğu zaman dar; atölye ve konutlarda makinenin ve malzemenin konumlanacağı boşluk sınırlı kalıyor. Eğim yüzünden aynı binanın bir cephesi zemin kata denk gelirken diğer cephesi bodrum kotunda kalabiliyor; bu da kesim hattının ve destek noktalarının kâğıt üzerinde değil yerinde belirlenmesini gerektiriyor. Planı buna göre kuruyoruz: erişim yolu, makinenin sabitleneceği nokta ve kesilen parçaların hangi taraftan indirileceği keşifte birlikte kararlaştırılıyor. İş taşıma yüzünden uzayacaksa bunu baştan söylüyoruz.',
    sss: [
      {
        q: 'Babadağ\'da yokuş bir sokakta ya da bahçe kotu farklı bir yapıda çalışabiliyor musunuz?',
        a: 'Çalışıyoruz. Böyle yerlerde ilk baktığımız şey makinenin nereye sabitleneceği oluyor; karot makinesi kesim boyunca sabit durmak zorunda, eğimli zeminde bu kendiliğinden olmuyor. Gerekirse çalışma düzlemini destekleyip makineyi oradan sabitliyoruz. İkinci baktığımız şey makinenin ve ekipmanın çalışma noktasına nasıl taşınacağı; aracın yanaşamadığı yerlerde bu taşımayı elle yapmak gerekebiliyor. İkisi de keşifte belli oluyor, sonrasında sürpriz çıkmıyor.',
      },
      {
        q: 'Babadağ gibi eğimli bir yerde kesim suyu ve çamur aşağıya akar mı?',
        a: 'Kesimde su, ucu soğutmak ve tozu bastırmak için kullanılır; kontrol edilmezse eğimden aşağı akıp alt kottaki alanı kirletebilir. Bunu önlemek için çalışma alanını çevreliyor, suyu tek noktada toplayıp gerektiğinde emici malzemeyle sınırlıyoruz. Kesim bitince çamurlu artık toplanıyor, yüzey temizleniyor. Alt kotta korunması gereken bir yer varsa önlemi keşifte konuşuyoruz.',
      },
      {
        q: 'Babadağ\'da kot farkı olan bir yapıda ya da istinat duvarında kırım nasıl yapılıyor?',
        a: 'Böyle noktalarda beton toptan indirilmez. Önce kesim hattı belirlenir, yüzey elmas diskli kesme ile bölünür ve parçalar sırayla, kontrollü şekilde alınır. Bu sayede hem komşu yapıya ağır titreşim binmez hem de alt kot tarafına ani yük gelmez. İstinat işlevi ya da taşıyıcı görevi olan bir duvar söz konusuysa mühendis onaylı detay olmadan işe başlamıyoruz.',
      },
      {
        q: 'Babadağ\'da kesilen parçalar ve moloz eğimden aşağı kayar mı?',
        a: 'Kaymaması işin planlama tarafına giriyor. Parçalar keserken boyutlandırılıyor, kesilen her parça yerinde bekletilmeden alınıyor ve toplanma noktası çalışma alanının üst tarafında, düz bir yerde seçiliyor. Alt kotta yol, bahçe ya da başka bir yapı varsa o taraf işten önce kapatılıyor. Moloz bizim sorumluluğumuzda; iş biterken alan artık bırakmadan teslim ediliyor.',
      },
    ],
    // TODO: bu ilçede yaptığınız GERÇEK bir işi 2-3 cümleyle yazarsanız
    // sayfada ayrı bir kutuda görünür ve içeriği daha da güçlendirir.
    note: '',
  },
  {
    name: 'Serinhisar',
    slug: 'serinhisar-karot',
    zone: 'yakin',
    intro: [
      'Serinhisar’da karot ve ankraj işi çoğunlukla mevcut bir yapıya sonradan eklenen imalatlarda gerekiyor. Yeni bir perde ya da kolon örülecekse mevcut betona filiz ekiliyor, çelik bir konstrüksiyon bağlanacaksa kimyasal dübel kullanılıyor, korkuluk ve profil montajı ankraj deliği istiyor. Bu uygulamalarda delik çapı, derinliği ve aralığı projede yazdığı gibi olmazsa bağlantının taşıma gücü düşer; o yüzden ölçüyü projeden alıyor, delik temizliğini de atlamıyoruz.',
      'Beton kesme tarafında ise döşemede asansör veya merdiven boşluğu açılması, kapı-pencere açıklığının genişletilmesi, iş yeri tadilatında bir bölme duvarın kaldırılması gibi işler var. Elmas diskli kesim, kırıcıya göre çok daha temiz sonuç veriyor: hat düz kalıyor, çevredeki betonda çatlak oluşmuyor, sonrasında sıva ve tamir işi çıkmıyor. Kesime başlamadan hattın arkasında donatı, su ya da elektrik tesisatı olup olmadığını kontrol etmek de işin bir parçası. Kesim sırası ve destek noktaları ise, ayrılan parçanın kontrolsüz düşmemesi için önceden belirleniyor.',
    ],
    yerelBaglam: 'Serinhisar’da karot ve kesim işinin çıktığı yapılar genellikle birkaç katlı betonarme konutlar, cadde üstü dükkânlar ve küçük ölçekli depo–atölye binaları oluyor. Bu yapılarda iş çoğunlukla mevcut bir bölümün kullanım amacının değişmesiyle çıkıyor: dükkân bölünüyor, depoya yeni bir giriş açılıyor, evde ıslak hacmin yeri değişiyor. Planlamada ilk baktığımız şey, müdahale edilecek elemanın taşıyıcı olup olmadığı; kolon, perde veya kiriş söz konusuysa statik proje ve mühendis onayı olmadan işe başlamıyoruz. Onay gerekmeyen işlerde keşiften çıkan ölçüye göre günü belirliyor, işi aynı ziyarette tamamlıyoruz.',
    sss: [
      {
        q: 'Serinhisar’da kolon veya perde duvarda delik açtırabilir miyim?',
        a: 'Taşıyıcı elemanda delme veya kesme işini, statik proje ve yetkili mühendis onayı olmadan yapmıyoruz. Onay varsa delik yerini donatı düzenine göre belirliyor, karotla betonu keserek ilerliyoruz; kırıcıda oluşan çatlak riski böylece ortadan kalkıyor. Onay yoksa çoğu zaman aynı ihtiyacı taşıyıcı olmayan bir bölmeden ya da farklı bir güzergâhtan çözmek mümkün oluyor, bunu keşifte konuşuyoruz.',
      },
      {
        q: 'Serinhisar’daki güçlendirme işinde filiz ekimini nasıl yapıyorsunuz?',
        a: 'Filiz ekimi, projede yazan çap, derinlik ve aralığa göre delik açılmasıyla başlıyor. Deliği karotla veya uygun uçla açtıktan sonra içini basınçlı hava ve fırçayla temizliyoruz; toz kalırsa kimyasal beton yüzeyine tutunmaz ve donatının çekme dayanımı düşer. Ardından kimyasalı enjekte edip filizi yerleştiriyor, kürlenme süresi dolmadan üzerine yük bindirilmemesini söylüyoruz.',
      },
      {
        q: 'Serinhisar’da dükkânım açıkken çalışabilir misiniz?',
        a: 'Çoğu işte evet. Delme ve kesme, uç su ile soğutularak yapıldığından ortaya kırıcıdaki gibi savrulan toz değil, toplanabilen bir çamur çıkıyor; çalışma alanını örtüp suyu topladığımızda dükkânın geri kalanı kullanılabilir kalıyor. Gürültünün müşteriyi rahatsız edeceği yerlerde işi mesai dışına, akşam ya da sabah erken saate alıyoruz — telefonumuz 7/24 açık, programı buna göre kuruyoruz.',
      },
      {
        q: 'Serinhisar’daki binamdan beton numunesi (karot) alınabiliyor mu?',
        a: 'Alınabiliyor. Numune, laboratuvarın istediği çapta ve derinlikte, donatıya denk gelmeyecek bir noktadan karotla çıkarılıyor; numunenin kırılmadan bütün hâlde alınması sonucun güvenilirliği açısından önemli. İşlem sonrası açılan deliği uygun tamir harcıyla kapatıyoruz. Numunenin hangi noktalardan ve kaç adet alınacağını raporu hazırlayan mühendis belirliyor, biz uygulamayı ona göre yapıyoruz.',
      },
    ],
    // TODO: bu ilçede yaptığınız GERÇEK bir işi 2-3 cümleyle yazarsanız
    // sayfada ayrı bir kutuda görünür ve içeriği daha da güçlendirir.
    note: '',
  },
  {
    name: 'Tavas',
    slug: 'tavas-karot',
    zone: 'yakin',
    intro: [
      'Tavas, yüzölçümü geniş bir ilçe; buradaki işleri bu yüzden güzergâh üzerinden planlıyoruz. Tarımsal ve hayvancılık amaçlı yapılarda ihtiyaç genelde şu başlıklarda çıkıyor: depo ve müştemilat binalarında su, sulama ve elektrik hattı için karot delikleri, barınak zemininde kanal kesimi, silo ve ekipman sabitlemesi için ankraj delikleri. Karotun avantajı burada belli oluyor; delik tam istenen yerde ve çapta açılıyor, çevresindeki beton zorlanmıyor. Yanlış yöntemle açılan bir delik, işin kendisinden büyük bir tamir çıkarabiliyor.',
      'Konut ve iş yeri tarafında da tadilat işleri yapıyoruz; tesisat ve baca geçişi için döşemede boşluk açılması, avlu betonunda derz kesimi ya da dar bir koridorun genişletilmesi gibi. Yapı ayakta kalacaksa yöntem kesmek oluyor, kırmak değil; kesim, çevredeki betona ve komşu duvara darbe bindirmiyor. Kullanımda kalacak bir duvarda ya da döşemede açıklık, kırılıp sonradan düzeltilmek yerine doğrudan son ölçüsünde kesiliyor.',
    ],
    yerelBaglam: 'Tavas’ta iş planı merkez ilçelerdekinden farklı ilerliyor, çünkü bir iş ilçe merkezinde, diğeri bağlı bir yerleşimde olabiliyor. İş genellikle tek katlı tarımsal depolarda, hayvancılık yapılarında ve müştemilatlarda; ilçe merkezinde ise apartman ve dükkân tadilatlarında çıkıyor. Randevu alırken yapının kullanımda olup olmadığını, çalışılacak yüzeyin döşeme mi duvar mı olduğunu ve istenen delik çapı ile kesim ölçülerini öğrenmeye çalışıyoruz. Uçları ve ekipmanı bu bilgilere göre yükleyip yola çıkıyoruz; yerinde eksik çıkması, ikinci bir gün demek.',
    sss: [
      {
        q: 'Tavas’ın köylerinde ve merkeze uzak mahallelerinde de çalışıyor musunuz?',
        a: 'Çalışıyoruz; ilçe merkezi kadar bağlı yerleşimlere de çıkıyoruz. Tek fark planlamada: adresi ve mümkünse harita konumunu baştan almak istiyoruz. Yolun araç ve ekipmanla girilebilir olup olmadığını, çalışılacak noktaya kadar hortum ve kablo çekilip çekilemeyeceğini soruyoruz; dar ya da bozuk bir giriş varsa ekipmanı ve taşıma şeklini ona göre seçiyoruz.',
      },
      {
        q: 'Tavas’taki tarımsal depoda zemine kanal açtırmak istiyorum, nasıl yapılıyor?',
        a: 'Zeminde kanal açma işi genelde iki aşamalı: önce elmas diskli zemin testeresiyle kanalın iki kenarı istenen derinlikte kesiliyor, sonra aradaki beton kontrollü şekilde alınıyor. Kesim hattı düz kaldığı için kanalın içine boru veya kablo yatırmak kolaylaşıyor, kenarlar dağılmıyor. Döşemenin altında mevcut bir tesisat varsa kesim derinliğini ona göre sınırlıyoruz.',
      },
      {
        q: 'Tavas’ta çalışılacak yerde su veya elektrik yoksa iş yapılabiliyor mu?',
        a: 'Yapılabiliyor, ama bunu baştan bilmemiz gerekiyor. Karotta ve diskli kesimde su, hem ucu soğutur hem tozu bastırır; susuz çalışmak hem uca hem yüzeye zarar verir. Sahada şebeke suyu yoksa harici bir depodan besleme yapılıyor, elektrik yoksa jeneratörle çalışılıyor. Bu konuyu keşifte netleştirmek, iş gününde sürpriz çıkmasını önlüyor.',
      },
      {
        q: 'Tavas’ta eski bir müştemilatı yıktırmak istiyorum, bitişikteki yapıya zarar verir mi?',
        a: 'Bitişikte kalması gereken bir yapı varsa kontrollü yıkım yöntemini kullanıyoruz: bağlantı noktaları önce elmas diskli sistemle kesilerek ayrılıyor, ardından parçalar sırayla indiriliyor. Böylece yıkım sırasında oluşan sarsıntı yan yapıya geçmiyor. Yıkılacak bölüm taşıyıcı bir sistemin parçasıysa mutlaka mühendis değerlendirmesi istiyoruz. Çıkan molozun sahadan uzaklaştırılmasını da işin bir kalemi olarak konuşuyoruz.',
      },
    ],
    // TODO: bu ilçede yaptığınız GERÇEK bir işi 2-3 cümleyle yazarsanız
    // sayfada ayrı bir kutuda görünür ve içeriği daha da güçlendirir.
    note: '',
  },
  {
    name: 'Buldan',
    slug: 'buldan-karot',
    zone: 'yakin',
    intro: [
      'Buldan\'da karotun en çok işe yaradığı yerlerin başında üretim atölyeleri ve iş yerlerindeki tesisat geçişleri geliyor. Tezgâh ya da makine yerleşimi değiştiğinde elektrik hattının, su borusunun veya havalandırma kanalının yeni güzergâhı çoğu zaman betonarme bir elemanın içinden geçmek zorunda kalır. Bu geçişleri elmas uçlu karot makinesiyle açıyoruz; delik kenarı düzgün çıktığı için arkasından sıva ya da tamir işi doğmuyor, ortama yayılan toz da kırıcıya göre çok daha az oluyor.',
      'İkinci grup iş yenileme tarafında toplanıyor. Kapı-pencere açıklığını büyütmek, bir duvarı kaldırmak veya döşemede merdiven boşluğu açmak gerektiğinde elmas diskli kesim kullanıyoruz; kesim hattı düz çıktığı için çevredeki elemanlar darbe almıyor. Yaşı ilerlemiş bir yapıda çalışılıyorsa titreşim üreten yöntemlerden uzak durmak ayrıca önem taşıyor. Buldan\'daki işlere günübirlik gidiyor, keşfi ücretsiz yapıp yöntemi ve fiyatı iş başlamadan netleştiriyoruz.',
    ],
    yerelBaglam: 'Buldan\'ın yapı stoğu iki farklı grubu bir arada barındırıyor: dokumacılıkla anılan atölyeler ve küçük üretim tesisleri ile ilçe merkezindeki konut dokusu. Atölye tarafında gereken işler genelde makine ayaklarının ankrajı, döşemede tahliye hattı geçişi ve kablo-pano delikleri oluyor; konut tarafında ise tadilat kaynaklı kesim ve kontrollü kırım gerekebiliyor. İş yerinin üretime ara veremediği saatler olabildiği için, gürültülü bölümü güne yaymadan tek blokta bitirecek şekilde planlıyoruz. Programı önceden konuşup ekipmanı ona göre yüklüyoruz.',
    sss: [
      {
        q: 'Buldan\'daki dokuma atölyelerinde makine montajı için ankraj yapıyor musunuz?',
        a: 'Yapıyoruz. Tezgâh ve makine ayaklarının sabitlenmesi için döşemeye istenen çap ve derinlikte delik açıp kimyasal dubel veya ankraj uyguluyoruz. Ölçüleri makinenin montaj planından alıyoruz; plan elinizde yoksa ayak aralıklarını yerinde ölçüyoruz. Karotla açılan delikte çevredeki beton çatlamadığı için ankrajın oturduğu yüzey sağlam kalıyor ve montaj sonrasında oynama riski azalıyor.',
      },
      {
        q: 'Buldan\'daki eski binalarda çalışırken titreşim sorun olur mu?',
        a: 'Yöntemi buna göre seçiyoruz. Kırıcı darbeyi duvarın tamamına ve komşu elemanlara yayar; karot ile elmas diskli kesim ise malzemeyi keserek ilerlediği için çevreye aktarılan titreşim belirgin şekilde düşük kalır. Yaşı ilerlemiş yapılarda duvarın cinsini ve kalınlığını yerinde görmeden yöntem belirlemiyoruz. Keşifte bunu netleştirip hangi ekipmanla çalışacağımızı önceden söylüyoruz.',
      },
      {
        q: 'Buldan\'a aynı gün gelebiliyor musunuz, yol ücreti ayrıca ekleniyor mu?',
        a: 'Buldan\'a günübirlik çıkıyoruz; programımız uygunsa aynı gün, doluysa takip eden ilk boş güne yazıyoruz. Fiyatı telefonda konuştuğumuz kapsam üzerinden veriyoruz ve ulaşım bu rakamın içinde kalıyor; iş bitiminde ayrıca bir kalem eklenmiyor. Tek bir tesisat deliği kadar küçük işleri de alıyoruz; bu tür taleplerde randevuyu o yöne çıkacağımız güne göre veriyoruz.',
      },
      {
        q: 'Buldan\'da kolon veya kirişe yakın bir yerde delik açtırmak istiyorum, ne gerekiyor?',
        a: 'Taşıyıcı bir elemana müdahale söz konusuysa statik proje ve mühendis onayı arıyoruz; onay olmadan kolon, kiriş veya perdede kesim yapmıyoruz. Onaylı projede delik yeri ve çapı belirtilmişse birebir ona uyuyoruz. Döşeme ve duvar geçişlerinde ise karot ucu donatıyı zorlamadan kesip geçtiği için delik çevresinde parçalanma olmuyor, kenar temiz kalıyor.',
      },
    ],
    // TODO: bu ilçede yaptığınız GERÇEK bir işi 2-3 cümleyle yazarsanız
    // sayfada ayrı bir kutuda görünür ve içeriği daha da güçlendirir.
    note: '',
  },
  {
    name: 'Çivril',
    slug: 'civril-karot',
    zone: 'uzak',
    intro: [
      'Çivril\'de çalışırken mesafeyi baştan hesaba katıyoruz; işi tek gidişte bitecek şekilde, eksiksiz ekipmanla ve önceden konuşulmuş bir programla kurguluyoruz. Tarımsal tesisler ve depo yapılarında en sık gereken iş boru ve kablo geçişleri oluyor: sulama hattının beton temelden geçirilmesi, deponun perde duvarında tahliye deliği açılması ya da soğutma ünitesi için havalandırma geçişi. Bunların hepsini elmas uçlu karotla, betonu kırmadan açıyoruz.',
      'Kesim ve kırım tarafında ise eski bir betonarme tabanın kaldırılması veya ambar kapısının genişletilmesi gibi işler söz konusu olabiliyor. Böyle yerlerde kesim hattını önce belirliyor, sonra elmas diskle kesip parçayı kontrollü biçimde alıyoruz; kalan yapıya darbe binmiyor. Konut tarafında ise yenileme sırasında kapı-pencere açıklığı ve tesisat geçişi gündeme geliyor; oturulan bir dairede çalışırken alanı örtüp toz kontrolü yapıyoruz. İş bitiminde molozu topluyor, alanı kullanılabilir halde teslim ediyoruz.',
    ],
    yerelBaglam: 'Çivril\'in yapı stoğu büyük ölçüde tarımsal üretimin çevresinde şekillenmiş: ürün depoları, ambarlar, hayvancılık yapıları ve su yapıları, bunların yanında ilçe merkezindeki konut ile iş yeri dokusu. Yerleşim geniş bir alana, Işıklı Gölü çevresindeki ovaya yayıldığı için iş adresi çoğu zaman ilçe merkezinde olmuyor. Randevu alırken adresi, çalışılacak elemanın kalınlığını ve sahada su-elektrik bağlantısı bulunup bulunmadığını önceden soruyoruz; bu ayrıntılar hem yöntemi hem de sahada geçireceğimiz süreyi doğrudan etkiliyor. Aynı çevrede birden fazla nokta varsa hepsini tek programa alıyoruz.',
    sss: [
      {
        q: 'Çivril merkeze uzak, yine de geliyor musunuz?',
        a: 'Geliyoruz; il sınırları içindeki bütün ilçelere çıkıyoruz. Çivril\'de işi tek seferde bitirecek şekilde program yapıyoruz; gerekli çaplardaki uçlar ve yedek ekipman baştan araca yükleniyor. Böylece bir eksik yüzünden ikinci kez yola çıkma ihtiyacı doğmuyor. Teklifi yol ve süre dâhil veriyoruz; mesafe gerekçesiyle iş sonunda ek kalem çıkarmıyoruz.',
      },
      {
        q: 'Çivril\'de sulama hattı için beton temelden boru geçirilecek; bu iş karotla olur mu?',
        a: 'Olur; bu iş için doğru yöntem de budur. Borunun çapına göre seçilen elmas uçla dairesel bir delik açılıyor; boru, çapına tam oturacak bir yatak buluyor. Kırıcıyla açılan boşlukta çevre beton çatlar, sonradan tamir gerekir. Delinecek elemanın kalınlığını ve istenen çapı önceden bilirsek doğru ucu yanımızda getirip işi aynı gidişte bitiriyoruz.',
      },
      {
        q: 'Çivril\'in kırsal mahallelerinde sahada su ve elektrik yoksa çalışma yapılabiliyor mu?',
        a: 'Bunu işe çıkmadan önce konuşuyoruz. Karot makinesi su soğutmalı çalıştığı için sahada su ve elektrik bulunması işi hızlandırır; yoksa nasıl çözeceğimizi telefonda netleştiriyoruz. Çalışma noktasını ve aracın nereye kadar yaklaşabildiğini de aynı görüşmede soruyoruz, çünkü ekipmanın elle taşınacağı mesafe işin süresini değiştiriyor.',
      },
      {
        q: 'Çivril\'e sırf keşif için ayrıca gelmeniz gerekiyor mu?',
        a: 'Mesafe nedeniyle ön değerlendirmeyi WhatsApp üzerinden ilettiğiniz fotoğraf ve ölçülerle yapıp fiyat aralığı verebiliyoruz; böylece aynı yol iki kez gidilmiyor. Delinecek yerin fotoğrafı, elemanın kalınlığı ve istenen çap çoğu iş için yeterli oluyor. Kapsamı büyük işlerde kesin teklif öncesi yerinde keşfe geliyoruz ve keşif için ücret almıyoruz.',
      },
    ],
    // TODO: bu ilçede yaptığınız GERÇEK bir işi 2-3 cümleyle yazarsanız
    // sayfada ayrı bir kutuda görünür ve içeriği daha da güçlendirir.
    note: '',
  },
  {
    name: 'Çal',
    slug: 'cal-karot',
    zone: 'uzak',
    intro: [
      'Çal, Denizli merkeze uzak ilçelerden biri ve bağcılıkla, şarapçılıkla anılıyor. Üretim ve depolama amaçlı yapıların bulunduğu bir yerleşimde karot ihtiyacı çoğunlukla üç başlıkta çıkıyor: makine veya ekipman montajı için ankraj delikleri, zeminden ya da perde duvardan geçirilecek boru-kablo hatları, bir de mevcut betonarmeye yeni bir bölüm eklenirken gereken filiz ekimi. Üçünü de elmas uçlu karot makinesiyle yapıyoruz; kırıcıya göre çok daha az toz ve titreşim çıkıyor, delik kenarı pürüzsüz kalıyor, taşıyıcı sisteme darbe binmiyor.',
      'Konut ve iş yeri tarafında ise tadilat işleri ağır basıyor: kapı ya da pencere açıklığı almak için duvar kesimi, ıslak hacimlerde tesisat geçişi, kullanılmayan bir bölümün kontrollü şekilde kırılması. Kırıcıyla saatlerce uğraşılacak bir açıklığı elmas diskli testereyle kesip çıkarmak hem daha hızlı hem de komşu duvara zarar vermeyen bir yol. Kırım gereken yerde de sınırı önce kesip ayırıyoruz; bu, çevredeki betonu zorlamadan ilerlemeyi sağlıyor. İş bitince molozu topluyor, çalıştığımız yeri süpürüp teslim ediyoruz.',
    ],
    yerelBaglam: 'Bağcılıkla anılan bir ilçede yapı stoğu tek başlığa sığmıyor: Çal\'da iş, ilçe merkezindeki konut ve iş yerlerinden kırsaldaki depo, müştemilat ve tarım-üretim yapılarına kadar geniş bir aralıkta olabiliyor. Betonarme bir yapıda karotla temiz delik açmak kolay; yığma ya da yaşı ilerlemiş yapılarda önce kesitin ne olduğunu anlamak gerekiyor, çünkü duvarın kalınlığı ve içindeki malzeme hem uç seçimini hem süreyi değiştiriyor. Üretimin sürdüğü bir yerde çalışılacaksa saati birlikte seçiyoruz; 7/24 açık olduğumuz için kesim ve delmeyi işin durduğu saate almak mümkün.',
    sss: [
      {
        q: 'Çal\'daki bir depo ya da üretim binasında makine montajı için ankraj yaptırabilir miyiz?',
        a: 'Yapıyoruz. Makine ayaklarının geleceği noktalara karotla temiz delik açıyor, delik içini tozdan arındırdıktan sonra kimyasal dubel veya ankraj çubuğunu ekiyoruz. Çapı, derinliği ve ankraj tipini montaj projesi belirliyor; proje yoksa makinenin sabitleme detayına birlikte bakıyoruz. Betonun içindeki donatıyı kesmemek için delik yerini gerekirse birkaç santim kaydırıyoruz.',
      },
      {
        q: 'Çal\'da sahada elektrik ya da su yoksa çalışabiliyor musunuz?',
        a: 'Karot makinesi hem elektrik hem soğutma suyu ister; kesim için de aynısı geçerli. Bağ içinde ya da yerleşimden uzak bir noktada iş varsa bunu baştan söylemeniz yeterli, hazırlığı ona göre yapıyoruz. Elektriğin ve suyun nereden alınacağı belli olduğunda iş uzamıyor, en önemlisi de yarım kalıp ikinci bir güne sarkmıyor.',
      },
      {
        q: 'Çal\'daki eski bir binada kolon ya da kirişe müdahale gerekirse ne yapıyorsunuz?',
        a: 'Taşıyıcı elemana dokunan hiçbir işi projesiz yapmıyoruz. Kolon, kiriş veya perdede delik ya da kesim gerekiyorsa önce statik proje ve mühendis onayını istiyoruz; nereden, hangi çapta ve ne kadar geçileceği orada belirleniyor. Onay çıktıktan sonra kesimi elmas diskli sistemle, yapıya darbe bindirmeden yapıyoruz. Onay yoksa işi almıyoruz; bu doğrudan binanın güvenliğiyle ilgili.',
      },
      {
        q: 'Çal\'da kullanılmayan bir müştemilatı yıktırmak istiyoruz, bu işi de yapıyor musunuz?',
        a: 'Bu işi de yapıyoruz. Kontrollü yıkımda yapıyı gelişigüzel devirmiyoruz; yanında bina, duvar ya da hat varsa önce kesimle parçalara ayırıp sırayla indiriyoruz. Elektrik, su ve varsa gaz bağlantılarının kesilmiş olması şart. İçeride kısmi bir yıkım söz konusuysa taşıyıcı sistemin nereye kadar korunacağını proje belirliyor. Çevre emniyetini almadan hiçbir yıkıma başlamıyoruz.',
      },
    ],
    // TODO: bu ilçede yaptığınız GERÇEK bir işi 2-3 cümleyle yazarsanız
    // sayfada ayrı bir kutuda görünür ve içeriği daha da güçlendirir.
    note: '',
  },
  {
    name: 'Acıpayam',
    slug: 'acipayam-karot',
    zone: 'uzak',
    intro: [
      'Acıpayam denince akla geniş bir ova ve tarım geliyor; bu yapı stoğunda beton işleri de genelde yatay elemanlar üzerinde yoğunlaşıyor. Depo, ahır ve hangar zeminlerinde döşeme kesimi, temelden veya perde duvardan su-elektrik hattı geçirmek için karot delme, yeni dökülen saha betonunda derz kesimi sık gündeme gelen işler. Zemini elmas diskli sistemle kesince kesik kenarı düzgün çıkıyor, çevredeki döşeme çatlamıyor ve sonradan yama gerektiren bir yüzey kalmıyor.',
      'İlçe merkezinde talep daha çok bina içine kayıyor: klima ve havalandırma geçişleri için delik açmak, döşemede asansör veya merdiven boşluğu kesmek, dar alanda kontrollü kırım yapmak. Kesit kalınlaştığında ya da elektrikli makinenin yetmediği yerde hidrolik kesme sistemine geçiyoruz. Bina içi işlerde ekipmanı taşımak da işin bir parçası; asansörü olmayan bir yapıda kaçıncı katta çalışacağımızı önceden bilmek günü doğru kurmamızı sağlıyor. Acıpayam merkeze uzak olduğu için o günü baştan netleştirmeye önem veriyoruz.',
    ],
    yerelBaglam: 'Acıpayam\'da iş talebi genelde iki başlıkta toplanıyor: ilçe merkezindeki konut ve iş yeri tadilatları ile ovaya yayılmış tarımsal tesisler, depolar ve müştemilatlar. İkinci grupta yapılar birbirinden uzakta olabildiği için gidiş sırasını önceden çiziyoruz; aynı güzergâhtaki adresleri tek programa alıyor, en uzak noktayı günün başına koyuyoruz. Zemin kesimi ve büyük çaplı delme gibi kurulum isteyen işleri de arka arkaya sıralıyoruz; makineyi bir kez kurup birkaç işi bitirmek hem süreyi hem maliyeti aşağı çekiyor.',
    sss: [
      {
        q: 'Acıpayam\'da yeni dökülen saha betonunda derz kesimi yapıyor musunuz?',
        a: 'Evet, yapıyoruz. Geniş dökülen bir saha betonu kendi haline bırakılırsa büzülme yüzünden rastgele çatlar; derz kesimi, o çatlağın nereye geleceğini önceden belirlemek demek. Beton yeterince sertleştikten sonra, erken dönemde elmas diskle hatları kesiyoruz. Aynı yöntem asfaltta da geçerli: bozuk bölümün sınırı düzgün kesilince onarım sonrası yüzey daha uzun ömürlü oluyor.',
      },
      {
        q: 'Acıpayam\'da bir deponun temelinden veya duvarından boru geçirmek için karot uygun mu?',
        a: 'Uygun; bu iş için karot temiz bir yöntem. Elmas uçlu makine betonu darbe vermeden kesiyor, borunun geçeceği delik yuvarlak ve düzgün çıkıyor, çevresinde çatlak oluşmuyor. Geçiş noktasını projedeki donatı düzenine bakarak seçiyor, çapı borunun dışından bir miktar büyük tutuyoruz. Su yalıtımı bulunan bölgelerde geçişin dolgu ve sızdırmazlık detayını da baştan konuşuyoruz.',
      },
      {
        q: 'Acıpayam\'daki bir depo zemininde döşeme kesimi nasıl yapılıyor?',
        a: 'Önce kesim hattını işaretliyor, altta boru, kablo ya da tesisat olup olmadığını soruyoruz. Sonra elmas diskli zemin testeresiyle sulu kesim yaparak istenen derinliğe iniyoruz; su, tozu büyük ölçüde bastırıyor. Kesilen parçayı boyutuna göre bütün hâlde kaldırıyor ya da küçültüp çıkarıyoruz. Bitince kesim çamurunu ve molozu toplayıp alanı kullanılabilir durumda bırakıyoruz.',
      },
      {
        q: 'Acıpayam\'da kalın bir beton duvar veya döşeme kesilecekse hangi yöntemi kullanıyorsunuz?',
        a: 'Kalınlık arttıkça elektrikli makinenin kapasitesi sınırda kalıyor; böyle işlerde hidrolik kesme sistemiyle çalışıyoruz. Hidrolik ünite gücü dışarıdan verdiği için daha kalın kesitte daha derin kesim mümkün oluyor, disk zorlanmadan ilerliyor. Kesilecek parçanın ağırlığını da baştan hesaba katıyoruz; büyük parçaları tek seferde değil, taşınabilir boyutta bölerek indiriyoruz.',
      },
    ],
    // TODO: bu ilçede yaptığınız GERÇEK bir işi 2-3 cümleyle yazarsanız
    // sayfada ayrı bir kutuda görünür ve içeriği daha da güçlendirir.
    note: '',
  },
  {
    name: 'Kale',
    slug: 'kale-karot',
    zone: 'uzak',
    intro: [
      'Kale’de gündeme gelen işlerin bir bölümü, yapının bir parçasını ayırıp yerinden kaldırmayı gerektiriyor: sonradan eklenmiş bir bölüm, işlevini yitirmiş betonarme merdiven, saçak ya da zeminde kalan eski bir makine kaidesi. Bu tür işleri kırıcıyla parçalayarak değil, elmas diskli duvar testeresiyle hat boyunca keserek yürütüyoruz. Kesilen eleman taşınabilir ölçüde bölünüp sırayla indiriliyor; kalan yapıya darbe binmiyor ve kesim çizgisinin dışındaki beton çatlamıyor.',
      'Perde, temel bloğu veya kalın döşeme gibi kesitlerde diskin ulaşabildiği derinlik yetmediğinde hidrolik kesme sistemine geçiyor, gerekirse kesite iki yüzünden giriyoruz. Kesilecek parça yerinden ayrılmadan önce gerekiyorsa geçici destek kuruluyor; parçanın kendi ağırlığıyla düşmesi değil, kontrollü biçimde indirilmesi esas. Destek noktaları ve kesim sırası, elemanın yükünü nereye aktardığına göre belirleniyor. Taşıyıcı sisteme dokunulacak her işte statik proje ve mühendis onayı arıyoruz; onay çıkmadan makineyi kurmuyoruz. Keşif ücretsiz, yöntem de fiyat da iş başlamadan netleşiyor.',
    ],
    yerelBaglam: 'Kale’de yöntem, kaldırılacak elemanın konumuna ve sahadaki koşullara göre şekilleniyor; ikisini de yerinde görüyoruz. Söküm ve kesim işinde belirleyici olan üç şey var: yapının kaç katlı olduğu, komşu bir yapıya bitişik olup olmadığı ve aracın nereye kadar yaklaşabildiği. Bitişik düzende kesim yönü ile parçanın indirileceği taraf buna göre seçiliyor; ayrık yapılarda çalışma alanı rahat olduğundan parçalar daha büyük alınabiliyor. Randevu sırasında kesilecek elemanın kalınlığını, donatı durumunu, kat yüksekliğini ve parçanın hangi açıklıktan çıkarılacağını soruyoruz.',
    sss: [
      {
        q: 'Kale’de betonarme bir merdiveni ya da saçağı söktürmek istiyorum, nasıl yapılıyor?',
        a: 'Önce kesim hattı belirleniyor: elemanın yapıya bağlandığı yerler, donatı yönü ve parçanın hangi sırayla indirileceği. Ardından elmas diskli kesimle eleman taşınabilir büyüklükte parçalara ayrılıp tek tek alınıyor. Kırıcıyla sökümde parçanın ne zaman kopacağı belli olmaz; kesme yönteminde hem sıra hem ağırlık kontrol altında kalır. Taşıyıcı bir elemansa mühendis onayı olmadan başlamıyoruz.',
      },
      {
        q: 'Kale’de söküm işine başlamadan önce bizden ne isteniyor?',
        a: 'Kaldırılacak bölümün elektrik, su ve varsa gaz beslemesinin kesilmiş olması, alanın boşaltılmış olması ve gereken izinlerin tamamlanmış olması gerekiyor. Biz de yerinde hangi elemanın kalacağını, kesim sırasını ve çevre güvenliğini konuşuyoruz. Makinenin bağlanacağı elektrik hattı ile kesim suyunun nereden alınacağı da işe başlamadan konuşuluyor. Bu görüşme yapılmadan sahaya makine kurmuyoruz.',
      },
      {
        q: 'Kale’deki kalın bir perde veya temel betonu kesilebilir mi?',
        a: 'Kesilebilir. Sınırlayıcı olan betonun sertliği değil, kesitin kalınlığı: diskin girebildiği derinliği aşan kesitlerde hidrolik kesme sistemi devreye giriyor ve kesite karşılıklı iki yüzden yaklaşılıyor. İçindeki donatı elmas segmentle birlikte kesildiğinden ayrıca kırıcıya ihtiyaç kalmıyor. Kalınlığı ve varsa proje ölçülerini önceden aldığımızda hangi ekipmanın gerekeceğini Kale’ye çıkmadan biliyoruz.',
      },
      {
        q: 'Kale’de kesilen büyük beton parçalar sahadan nasıl çıkarılıyor?',
        a: 'Parça boyutunu erişim belirliyor: kapıdan, merdivenden ya da mevcut bir açıklıktan geçebilecek ölçüde bölüyoruz. Ağır bloklar olduğu gibi taşınmıyor, taşınabilir ölçüye inene kadar kesilerek küçültülüyor. Üst katta çalışılıyorsa parçanın indirileceği güzergâh kesime başlamadan belirleniyor. İş sonunda parçalar ve kırıntı toplanıyor, alan süpürülmüş halde teslim ediliyor.',
      },
    ],
    // TODO: bu ilçede yaptığınız GERÇEK bir işi 2-3 cümleyle yazarsanız
    // sayfada ayrı bir kutuda görünür ve içeriği daha da güçlendirir.
    note: '',
  },
  {
    name: 'Çameli',
    slug: 'cameli-karot',
    zone: 'uzak',
    intro: [
      'Çameli, Denizli’nin merkeze en uzak ilçelerinden biri ve ormanlık, dağlık bir arazi üzerinde kurulu. Eğimli zemine oturan yapılarda iş çoğu zaman toprakla temas eden elemanlarda çıkıyor: istinat duvarında drenaj deliği, bodrum perdesinde hat girişi, temelde boru geçişi. Bu noktalarda elmas uçlu karot betonu kırmadan kestiği için delik çapı istenen ölçüde çıkıyor, kenar pürüzsüz kalıyor ve duvarın gövdesine çatlak yürümüyor. Kanalizasyon ve elektrik hattının yapıya girişi de aynı yöntemle, betona darbe verilmeden çözülüyor.',
      'İkinci mesele erişim. Aracın yanaşamadığı yapılarda karot makinesi ve sehpası parçalara ayrılıp elle taşınabiliyor, sehpa yerinde birleştirilip zemine sabitleniyor. Eğimli arazide sabitleme yüzeyi çoğu zaman düz bir döşeme değil, istinat duvarının kendisi ya da kademeli bir temel oluyor; makinenin oturacağı yeri önce temizleyip düzgün bir dayanak elde ediyor, dübel noktasını donatıya denk gelmeyecek şekilde seçiyoruz. Sabitleme sağlam olmazsa uç sıkışır, delik şaşar. Kesim suyuyla çıkan çamur ve moloz iş bitiminde toplanıyor.',
    ],
    yerelBaglam: 'Çameli’de yapı stoğu, ilçe merkezindeki konut ve dükkânlarla köy ve mahallelerdeki müstakil evler, tek katlı ek yapılar ve depolardan oluşuyor; betonarme ile yığma yapılar yan yana bulunuyor. Bu yüzden yönteme karar vermeden önce elemanın türünü belirlemek gerekiyor: betonarme temel, perde ve döşemede karot ile elmas diskli kesim uygulanıyor, yığma duvarda ise yöntem duvarın kalınlığına ve harcın durumuna göre seçiliyor. Dağlık arazide ulaşım süresi değişebildiği için programı güne yaymadan tek blokta kuruyoruz; yol tarifi ve tam konum, randevu sırasında aldığımız ilk bilgilerden biri.',
    sss: [
      {
        q: 'Çameli’de araç yapının yanına yaklaşamıyor, yine de çalışabilir misiniz?',
        a: 'Çalışabiliriz. Makine ve sehpa sökülerek elle taşınabilecek parçalara ayrılıyor, gideceği noktada tekrar birleştiriliyor. Asıl kısıt genelde elektrik kablosuyla su hortumunun uzatılabileceği mesafe; bunu keşifte ölçüyoruz. Eğimli ya da dar bir alanda çalışılacaksa makinenin oturacağı yüzeyi ve ekibin duruş yerini önceden belirleyip emniyet tedbirlerini ona göre alıyoruz.',
      },
      {
        q: 'Çameli’de yığma taş veya tuğla duvarda delik açılabilir mi?',
        a: 'Açılabilir. Elmas uçlu karot, betonarmenin yanında yığma duvarda da temiz sonuç verir; kırıcıyla açılan deliğin aksine kenar dağılmaz, delik kendiliğinden büyümez. Yalnız yığma duvarda harcın durumu ve duvarın kalınlığı belirleyici olduğu için delik yerini birlikte kararlaştırmamız gerekiyor. Duvar taşıyıcıysa ve kesit zayıflayacaksa müdahale öncesinde mühendis görüşü alınmasını istiyoruz.',
      },
      {
        q: 'Çameli’de istinat duvarına drenaj deliği açtırmak istiyoruz, yapıyor musunuz?',
        a: 'Yapıyoruz. İstinat duvarının arkasında biriken suyun tahliyesi için duvar boyunca delik açılması gerekir; bu delikleri karotla, duvarın gövdesini zorlamadan alıyoruz. Çap, eğim ve aralık duvarın kalınlığına ve tahliye ihtiyacına göre belirleniyor. Duvar donatılıysa deliğin donatıya denk gelmemesi için noktaları işe başlamadan birlikte işaretliyoruz.',
      },
      {
        q: 'Çameli ormanlık bir bölge; kesim sırasında kıvılcım veya yangın riski oluşur mu?',
        a: 'Elmas uçlu karot ve elmas diskli kesim su soğutmalı çalışır; kesim noktası sürekli ıslak kaldığı için kıvılcım ve toz, kuru kesme ya da taşlama yöntemlerine göre belirgin biçimde sınırlı kalır. Yine de çalışma çevresindeki kuru ot, ahşap ve yanıcı malzemeyi işe başlamadan uzaklaştırıyor, alanı boş tutuyoruz. Jeneratör kullanılacaksa yakıt ve egzoz tarafına ayrıca dikkat ediyoruz.',
      },
    ],
    // TODO: bu ilçede yaptığınız GERÇEK bir işi 2-3 cümleyle yazarsanız
    // sayfada ayrı bir kutuda görünür ve içeriği daha da güçlendirir.
    note: '',
  },
  {
    name: 'Çardak',
    slug: 'cardak-karot',
    zone: 'uzak',
    intro: [
      'Çardak, Denizli Çardak Havalimanı\'nın bulunduğu ilçe ve merkeze uzak konumda. İlçede sunduğumuz hizmetlerin başında zemin ve saha kesimleri geliyor: beton saha, otopark ve yol yüzeylerinde asfalt derz kesim, genişleme derzi açma ve düz hatlı zemin kesimi yapıyoruz. Elmas disk betonu keserek ilerlediği için hat düzgün çıkıyor, sökülecek parça temiz ayrılıyor ve kesim çizgisinin dışındaki beton çatlamıyor. Derz, betonun rastgele yerlerden çatlamasını önlemek için açılır; bu yüzden hattın derinliği ve aralığı gelişigüzel değil, zemine göre belirlenir.',
      'İkinci başlık beton numunesi alma. Laboratuvara gidecek karot numunesinin istenen çapta ve derinlikte, donatıya rastlamadan çıkarılması gerekir; delme noktasını ve makinenin sabitlemesini buna göre ayarlıyoruz. Çardak\'taki konut ve iş yeri tadilatlarında ise su, pis su ve havalandırma hatlarının duvardan veya döşemeden geçirilmesi için karot delme yapıyoruz. Delik kenarı pürüzsüz kaldığından arkasından sıva ve tamir işi çıkmıyor. Kesilecek hattı ve delik noktalarını ücretsiz keşifte yerinde işaretliyoruz; fiyat, iş başlamadan önce sabitleniyor.',
    ],
    yerelBaglam: 'Çardak\'ta yapı stoğu ağırlıklı olarak az katlı konutlardan, müstakil yapılardan, iş yerlerinden ve tesis binalarından oluşuyor; bu tip yapılarda çalışma alanı dar olmadığı için makineyi sahaya kurmak kolaylaşıyor. Buna karşılık su ve elektrik bağlantısının kesim noktasına yakın olup olmadığını önceden soruyoruz, çünkü karot makinesi ve duvar testeresi su soğutmalı çalışır. Kesilecek hattın uzunluğunu, beton kalınlığını ve deliklerin çapını telefonda konuşup ekipmanı ona göre yüklüyoruz. Uzak mesafede eksik bir uç, ikinci bir gidiş demek olur; bunu baştan kapatıyoruz.',
    sss: [
      {
        q: 'Çardak\'ta asfalt derz kesim ve saha kesimi yapıyor musunuz?',
        a: 'Yapıyoruz. Asfalt ve beton sahalarda derz kesimi, genişleme derzi açma ve düz hatlı zemin kesimi işlerini elmas diskli kesme makineleriyle yürütüyoruz. Bizim için önemli olan kesim hattının uzunluğu, zeminin kalınlığı ve kesimin ne kadar derine ineceği. Bu üç bilgiyi telefonda alıp gerekli disk ve ekipmanı hazırlayarak geliyoruz, böylece saha kesimini aynı çıkışta tamamlıyoruz.',
      },
      {
        q: 'Çardak\'taki bir yapıdan beton numunesi (karot numunesi) alabilir misiniz?',
        a: 'Alabiliyoruz. Numuneyi biz çıkarıyoruz; deneyi yapacak laboratuvarın istediği çap ve boy bilgisini bize iletmeniz yeterli. Numunenin bütün çıkması için delme noktası donatıya denk gelmeyecek şekilde belirleniyor, makine yüzeye sabitleniyor ve uç sarsılmadan ilerletiliyor. Numunenin alındığı boşluğun sonradan kapatılması gerekiyorsa bunu keşifte baştan konuşuyoruz.',
      },
      {
        q: 'Çardak\'ta sahada su ve elektrik yoksa iş yapılabilir mi?',
        a: 'Bu noktayı işe çıkmadan önce netleştiriyoruz. Karot ve elmas diskli kesimde su, hem ucu soğutur hem tozu bastırır; elektrik ise makinenin çalışması için gerekir. Sahada bağlantı yoksa alternatif çözümü keşif sırasında konuşup fiyata dâhil ediyoruz. Çardak gibi uzak bir ilçeye çıkmadan önce bunun bilinmesi, işin tek seferde bitmesi açısından önemli.',
      },
      {
        q: 'Çardak\'taki bir iş yerinde mesai dışında veya gece çalışabilir misiniz?',
        a: 'Çalışabiliyoruz. 7/24 açığız ve iş yeri, tesis ya da dükkân gibi gündüz faaliyetin durmasını istemediğiniz yerlerde akşam veya gece programı yapabiliyoruz. Çardak merkeze uzak olduğu için çalışma saatini işi aldığımızda konuşuyor, ekibin ve ekipmanın ona göre yola çıkmasını planlıyoruz. Gece çalışmasında gürültü kontrolü ve aydınlatma da işin parçası.',
      },
    ],
    // TODO: bu ilçede yaptığınız GERÇEK bir işi 2-3 cümleyle yazarsanız
    // sayfada ayrı bir kutuda görünür ve içeriği daha da güçlendirir.
    note: '',
  },
  {
    name: 'Bozkurt',
    slug: 'bozkurt-karot',
    zone: 'uzak',
    intro: [
      'Bozkurt, Denizli merkeze uzak ilçelerden biri; yıkım ve kesim işlerinde ilk netleşmesi gereken konu, kaldırılacak betonun yerinden nasıl indirileceği oluyor. Kalın bir döşeme parçası, temel bloğu ya da perde bölümü kırıcıyla zorlanacak boyuttaysa hidrolik kesme sistemiyle ilerliyoruz: kesim hattı önce çıkarılıyor, ayrılacak parça askıya alınıyor ve blok hâlinde kontrollü biçimde indiriliyor. Bu yöntemde kalan yapıya darbe binmiyor, gürültü ve titreşim kırıcıya göre belirgin şekilde düşük kalıyor.',
      'Kaldırılan bölümün yerine yeni bir perde, kolon mantosu veya döşeme gelecekse eski betonla yeni betonun bağlanması gerekiyor; bunu filiz ekimiyle yapıyoruz. Delikler, yeni elemanın oturacağı yüzeyde sırasına ve aksına göre işaretlenip yüzey hazırlandıktan sonra açılıyor; işaretleme şaşarsa eklenen elemanın donatı düzeni bozulur. Çelik ayak, korkuluk, konsol ve makine kaidelerinin betona tutturulmasında ise kimyasal dübel uyguluyoruz. Bozkurt\'ta hangi yöntemin uygun olduğuna ücretsiz keşifte karar veriyor, fiyatı işe girmeden önce net veriyoruz.',
    ],
    yerelBaglam: 'Bozkurt\'ta konut, iş yeri ve tarımsal amaçlı yapılar bir arada; yenileme işi çoğu zaman yıllar içinde eklenti yapılmış, kat çıkılmış ya da kullanım amacı değişmiş bir yapıda gündeme geliyor. Bu tür işlerde eklenecek elemanın ölçüleri, bağlantı düzeni ve kullanılacak kimyasal proje detayında tarif edilir. Bu yüzden Bozkurt\'a çıkmadan önce projeyi ya da detay çizimini görmek istiyoruz; donatıyı, kimyasalı ve uçları buna bakarak hazırlıyoruz. Proje elde yoksa mevcut betonun durumunu ve eleman ölçülerini fotoğraflarla birlikte önceden görüyor, malzeme listesini yola çıkmadan kesinleştiriyoruz.',
    sss: [
      {
        q: 'Bozkurt\'ta filiz ekimi yaparken uygulamanın sağlam olduğundan nasıl emin oluyorsunuz?',
        a: 'Filizin çapı, ekim aralığı ve ankraj derinliği proje detayında yazar; uygulamayı bu ölçülere göre yapıyoruz. İşin en kritik adımı, açılan deliğin içindeki tozun basınçlı havayla tamamen temizlenmesi: tozlu bir delikte kimyasal betona tam yapışmaz. Donatı yerleştirildikten sonra da kimyasalın kürlenmesi tamamlanmadan o bağlantıya yük verilmiyor.',
      },
      {
        q: 'Bozkurt\'taki bir binada taşıyıcı duvara veya kolona müdahale edebilir misiniz?',
        a: 'Taşıyıcı elemana müdahaleyi ancak statik proje ve mühendis onayıyla yapıyoruz. Onay varsa kesim sırası, gerekli destekleme ve güçlendirme adımları projede tarif edildiği gibi uygulanır. Onay yoksa işi almıyoruz; çünkü kolon veya perdeden alınan bir parça, yapının yük taşıma düzenini değiştirir. Taşıyıcı olmayan bölme duvarlarda ise açıklık açma işini sorunsuz yapabiliyoruz.',
      },
      {
        q: 'Bozkurt\'ta kimyasal dübel mi mekanik dübel mi kullanılacağına nasıl karar veriyorsunuz?',
        a: 'Karar; betonun durumuna, yükün türüne ve bağlantının kenara olan mesafesine göre veriliyor. Kimyasal ankraj, deliği tamamen dolduran bir yapıştırıcıyla çalıştığı için betonu genleşme kuvvetiyle zorlamaz; kenara yakın noktalarda ve çatlak riskinin istenmediği yerlerde tercih edilir. Projede hangi sistemin yazdığına bakıyor, yoksa uygulamayı yükü verecek kişiyle birlikte belirliyoruz.',
      },
      {
        q: 'Bozkurt\'ta iş bittikten sonra moloz ve kesim artıkları kalıyor mu?',
        a: 'Kalmıyor. Çalışma alanını başlamadan önce örtüyoruz; kesim ve delme sırasında çıkan su ile çamuru toplayıp yüzeyi siliyoruz. İş bitiminde moloz toplama ve alanı temiz teslim etme bize ait. Uzak ilçelere tek seferde çıktığımız için toparlama işini de aynı gün içinde bitirecek şekilde programa dâhil ediyoruz; alanı size kullanılabilir hâlde bırakıyoruz.',
      },
    ],
    // TODO: bu ilçede yaptığınız GERÇEK bir işi 2-3 cümleyle yazarsanız
    // sayfada ayrı bir kutuda görünür ve içeriği daha da güçlendirir.
    note: '',
  },
  {
    name: 'Beyağaç',
    slug: 'beyagac-karot',
    zone: 'uzak',
    intro: [
      'Beyağaç, Denizli\'nin merkeze uzak ilçelerinden; ormanlık yapısıyla bilinen, ölçek olarak küçük bir yerleşim. Mevcut bir yapıda değişiklik gerektiren işler genelde şu başlıklarda toplanır: kapı yerinin genişletilmesi, pencere boşluğu açılması, merdiven veya asansör boşluğu kesimi, su ve elektrik hattının duvardan ya da döşemeden geçirilmesi. Bu tip işlerde elmas diskli duvar testeresi ile elmas uçlu karot makinesi kullanıyoruz; kırıcıyla parçalamaya göre çok daha az toz, çok daha az titreşim ve düzgün bir kenar bırakıyor.',
      'Betonun sökülmesi gereken durumlarda da önce kesim hattını belirliyor, parçayı kontrollü biçimde alıyoruz; gelişigüzel kırmıyoruz. Taşıyıcı bir elemana müdahale söz konusuysa statik proje ve mühendis onayı olmadan işe başlamıyoruz. Beyağaç merkeze uzak olduğu için işi tek gidişte bitirecek şekilde planlıyor, gereken uçları ve yedek ekipmanı yanımızda getiriyoruz. İş bitiminde molozu topluyor, alanı süpürülmüş hâlde teslim ediyoruz.',
    ],
    yerelBaglam: 'Bu ölçekteki ilçelerde yapı stoğu genelde müstakil ve az katlı konutlar, küçük iş yerleri, bir de tarım amaçlı müştemilat yapılarından oluşur. Böyle yapılarda çalışmaya çıkmadan önce iki şeye bakıyoruz: makinenin gireceği alanın genişliği ve sahada su ile elektriğin bulunup bulunmadığı — karot ucu su ile soğutularak döner, tozun bastırılması da suya bağlıdır. Ölçüleri ve birkaç fotoğrafı önceden aldığımızda hangi ekipmanın gerekeceğini bilerek yola çıkıyoruz. Duvarın tuğla mı, beton mu olduğu da seçilecek ucu değiştirdiği için bunu baştan soruyoruz.',
    sss: [
      {
        q: 'Beyağaç\'a tek bir iş için de geliyor musunuz?',
        a: 'Geliyoruz. Uzak mesafede tek iş için çıkmak maliyeti etkiliyor, bu yüzden işin ölçüsünü ve adedini telefonda konuşup fiyatı baştan netleştiriyoruz. Aynı çevrede yapılacak başka işler varsa bunları tek programa alıp hem süreyi hem maliyeti aşağı çekiyoruz. Verdiğimiz teklif yol dâhil nettir; iş bitiminde ayrıca bir kalem eklenmez.',
      },
      {
        q: 'Beyağaç\'ta kapı veya pencere açıklığı için kırıcı mı, kesme mi daha doğru?',
        a: 'Açıklık işlerinde kesmeyi tercih ediyoruz. Elmas diskli testere önceden çizilen hat üzerinde ilerlediği için açıklığın kenarı düzgün çıkıyor, çevredeki sıva ve kaplama zarar görmüyor. Kırıcı darbeyle çalıştığından hem fazladan hasar hem yüksek titreşim bırakır. Duvar taşıyıcıysa durum değişir: açıklığın yeri ve boyutu proje üzerinde değerlendirilir, mühendis onayı çıkmadan kesim yapılmaz; güçlendirme öngörülmüşse önce o imalat biter.',
      },
      {
        q: 'Beyağaç\'ta sahada elektrik veya su yoksa çalışma yapılabiliyor mu?',
        a: 'Karot makinesi ucu soğutmak ve tozu bastırmak için suya, dönmek için elektriğe ihtiyaç duyar. Sahada bunlardan biri yoksa bunu bize önceden söylemeniz gerekiyor; işi ona göre planlıyor, temin yöntemini birlikte konuşuyoruz. Kesim suyunun nereye akacağını da baştan belirliyoruz. İç mekânda çalışırken suyun yayılmaması için alanı önceden örtüyoruz.',
      },
      {
        q: 'Beyağaç\'taki bir iş ne kadar sürede tamamlanıyor?',
        a: 'Süre; delik çapına, beton kalınlığına, delik adedine ve betonun içindeki donatı yoğunluğuna göre değişir. Bu yüzden ölçüyü görmeden kesin bir süre söylemiyoruz. Uzak ilçe olduğu için programı, işi tek seferde bitirecek şekilde kuruyoruz: ölçü ve fotoğraflar önceden elimizde olursa gerekli uçlarla geliyoruz, saha da hazırsa ikinci bir gelişe gerek kalmıyor.',
      },
    ],
    // TODO: bu ilçede yaptığınız GERÇEK bir işi 2-3 cümleyle yazarsanız
    // sayfada ayrı bir kutuda görünür ve içeriği daha da güçlendirir.
    note: '',
  },
  {
    name: 'Bekilli',
    slug: 'bekilli-karot',
    zone: 'uzak',
    intro: [
      'Bekilli, bağcılığıyla anılan ve Denizli merkeze uzak kalan ilçelerden biri. Karot tarafında sık istenen başlıklardan biri, mevcut betona yeni bir eleman bağlamak: ilave perde veya döşemenin mevcut yapıya bağlanması için filiz ekimi, makine ve çelik konstrüksiyon montajı için ankraj, korkuluk ile raf ve konsol gibi elemanlar için kimyasal dübel. Bu uygulamaların hepsi doğru çapta, doğru derinlikte ve temiz açılmış bir deliğe dayanır; delik tozu alınmadan kimyasal enjekte edilirse bağlantı beklenen yükü taşımaz.',
      'Kesme ve delme tarafında ise tesisat ve havalandırma geçişleri için karot, saha ve avlu betonlarında derz kesimi, tadilatta kontrollü kırım işleri yapıyoruz. Kolon, kiriş ve perde gibi taşıyıcı elemanlarda delik yeri keyfî seçilmez; deliğin yeri ve çapı proje üzerinden belirlenir, mühendis onayı olmadan makineyi çalıştırmıyoruz. Kesilen parçanın nasıl indirileceğini de kesime başlamadan konuşuyoruz: büyük parça düşürülerek değil, bölünerek ve kontrollü şekilde alınıyor.',
    ],
    yerelBaglam: 'Depo, işlik ve müştemilat tipi yapılarda genellikle makine sabitleme ankrajı, hat geçişi için karot ve zemin betonunda kesim ihtiyacı doğar. Ankrajın kimyasal mı mekanik mi olacağı beton durumuna, yük tipine ve kenar mesafesine göre değişir; bunu ölçü ve proje bilgisiyle belirliyoruz. Yol uzun olduğu için Bekilli\'ye çıkmadan önce telefonda ön değerlendirme yapıyoruz: delik çapı, adedi, beton kalınlığı ve içinde donatı olup olmadığı. Ayrıca çalışılacak noktaya araçla yaklaşılıp yaklaşılamadığını soruyoruz. Bu bilgilerle hangi makine ve uçların gerekeceğine önceden karar veriyor, aynı adreste birden fazla iş varsa sıralamayı baştan planlıyoruz.',
    sss: [
      {
        q: 'Bekilli\'de mevcut betona ilave beton bağlanacaksa filiz ekimi nasıl yapılıyor?',
        a: 'Projede yazan çap ve derinlikte delik açıyoruz, ardından delik içindeki tozu basınçlı hava ve fırça ile alıyoruz — bu adım atlanırsa kimyasal betona tutunmaz. Sonra ankraj kimyasalını dipten başlayarak enjekte edip donatıyı yerleştiriyoruz. Kürlenme süresi dolmadan donatıya yük verilmiyor. Filizin boyu ve aralığı bizim tercihimiz değildir; projede ne belirtilmişse ona uyuyoruz.',
      },
      {
        q: 'Bekilli\'deki bir depoya makine montajı için ankraj yapıyor musunuz?',
        a: 'Yapıyoruz. Makine ayaklarının şablonuna göre delik yerlerini işaretliyor, delikleri açıp içini temizledikten sonra kimyasal dübel ya da mekanik ankrajla montaj civatalarını sabitliyoruz. Zemin betonunun kalınlığı ve altındaki dolgu burada belirleyici oluyor; delik derinliğini buna göre veriyoruz. Şablon ölçülerini önceden paylaşırsanız uç ve ekipman seçimini yola çıkmadan yapıyoruz.',
      },
      {
        q: 'Bekilli için verdiğiniz fiyat neye göre belirleniyor?',
        a: 'Fiyatı işin ölçüsü belirliyor: açılacak deliğin çapı ve derinliği, adedi, betonun kalınlığı, içindeki donatı yoğunluğu ve çalışma alanına erişim. Donatısı yoğun betonda uç daha hızlı yıprandığı için işçilik farklı hesaplanır. Bekilli merkeze uzak olduğundan yol ve süre teklifin içinde veriliyor. Rakamı işe başlamadan konuşup üzerinde anlaşıyoruz; sonradan ilave bir bedel çıkmıyor.',
      },
      {
        q: 'Bekilli\'de kolon veya kirişin delinmesi gerekirse ne yapıyorsunuz?',
        a: 'Taşıyıcı elemana müdahale doğrudan statik hesabı ilgilendirir. Kolon, kiriş veya perdede delik gerekiyorsa önce statik projeye bakılmasını ve mühendis onayını istiyoruz; onay yoksa o işi almıyoruz. Onaylı durumda delik yerini donatıyı kesmeyecek şekilde belirleyip karotla, düşük titreşimle açıyoruz. Güçlendirme detayı varsa uygulaması tamamlandıktan sonra kesime geçiyoruz.',
      },
    ],
    // TODO: bu ilçede yaptığınız GERÇEK bir işi 2-3 cümleyle yazarsanız
    // sayfada ayrı bir kutuda görünür ve içeriği daha da güçlendirir.
    note: '',
  },
  {
    name: 'Baklan',
    slug: 'baklan-karot',
    zone: 'uzak',
    intro: [
      'Baklan, tarım ovası üzerine kurulu küçük bir Denizli ilçesi. Bu tip yerleşimlerde en sık gereken uygulama, su ve sulama hattı geçişleri için betonarme duvarda ve döşemede temiz delik açmak. Karot ucu betonu kırmak yerine keserek ilerlediği için delik kenarı pürüzsüz kalıyor, çevredeki betonda çatlak oluşmuyor ve boru geçtikten sonra ek sıva ya da tamir işi çıkmıyor. Aynı yöntem, beton dayanımının kontrolü için numune alınması gerektiğinde de kullanılıyor.',
      'Bunun yanında tarımsal amaçlı depo ve müştemilat yapılarında saha betonu kesimi, makine ve ekipman sabitlemesi için ankraj delikleri, mevcut betona yeni bir perde veya kolon bağlanacaksa filiz ekimi yapıyoruz. Filiz ekiminde delik derinliği ve ankraj kimyasalının bekleme süresi proje detayına göre uygulanıyor; bu süre beklenmezse bağlantının taşıma kapasitesi düşer. Ankraj ve montaj deliklerinde de eksenin kaymaması önemli, aksi hâlde montaj plakası oturmaz.',
    ],
    yerelBaglam: 'Baklan\'ın yapı stoğunda genelde az katlı konutlar, tarımsal amaçlı depolar ve müştemilat yapıları öne çıkıyor; bu tip işlerde delik çapı ve kesim metrajı çoğu zaman baştan bellidir. Bu yüzden ön değerlendirmeyi telefonla yapıyoruz: duvar ya da döşeme kalınlığı, geçecek borunun çapı, delik adedi ve mümkünse birkaç fotoğraf. Ölçüler önceden netleştiğinde uygun uç çapı ve ekipman baştan hazırlanıyor, işin süresi de belli oluyor. Tarımsal yapılarda çalışma tarihini de birlikte belirliyoruz; sulama ve hasat düzenini aksatmayacak bir güne denk getirmek genelde mümkün oluyor.',
    sss: [
      {
        q: 'Baklan\'da sulama hattı geçişi için hangi çapta delik açılacağına nasıl karar veriyorsunuz?',
        a: 'Çapı, geçecek borunun dış ölçüsüne ve varsa yalıtım kalınlığına göre seçiyoruz. Boru çapına eşit bir delik montaj payı bırakmadığı için genelde bir üst çapa çıkılır; gereğinden büyük açılan delik ise sonradan doldurulması gereken bir boşluk demek. Ölçüyü tahminle değil, sahadaki boruyu ya da bağlantı parçasını görerek netleştirmek en sağlıklısı.',
      },
      {
        q: 'Baklan\'da çalışırken sahada su ve elektrik bulunması şart mı?',
        a: 'Elmas uçlu karot makineleri su soğutmalı çalışır: su hem ucu soğutur hem tozu bastırır. Bu yüzden çalışma noktasına yakın bir su ve elektrik bağlantısı işi belirgin şekilde kolaylaştırıyor. Sahada bunlar yoksa aramada belirtmeniz yeterli; Baklan gibi uzak bir noktaya çıkmadan önce hazırlığı buna göre yapıyor, ekip gittikten sonra iş beklemesin diye düzeni önden kuruyoruz.',
      },
      {
        q: 'Baklan\'a gelmeden fiyat söyleyebiliyor musunuz?',
        a: 'Bir aralık verebiliyoruz. Rakamı belirleyen kalemler bellidir: delinecek yüzeyin cinsi (betonarme, tuğla, taş), kalınlığı, istenen çap, delik ya da kesim adedi ve çalışma noktasına erişim. Betonarme duvarda donatı yoğunluğu da süreyi etkiler. Bu bilgiler netleştiğinde telefonda bir aralık, kesin ölçüler çıktığında net rakam veriyoruz; fiyatın içinde yol ve süre zaten var.',
      },
      {
        q: 'Baklan\'daki eski bir yapıda kolon dibinde delik açtırmak istiyoruz, sakıncası var mı?',
        a: 'Kolon, kiriş ve perde taşıyıcı elemandır; buralarda delik veya kesim ancak statik proje ve mühendis onayıyla yapılır. Onay varsa karot burada avantajlı bir yöntem, çünkü darbe uygulamaz, betonu keserek ilerler ve çevre betonu çatlatmaz. Onay yoksa işi almıyoruz. Çoğu durumda geçişi taşıyıcı olmayan bir noktaya kaydırmak mümkün oluyor; bunu yerinde birlikte değerlendiriyoruz.',
      },
    ],
    // TODO: bu ilçede yaptığınız GERÇEK bir işi 2-3 cümleyle yazarsanız
    // sayfada ayrı bir kutuda görünür ve içeriği daha da güçlendirir.
    note: '',
  },
  {
    name: 'Güney',
    slug: 'guney-karot',
    zone: 'uzak',
    intro: [
      'Güney\'de karot ve kesim, bu ölçekteki ilçelerin çoğunda olduğu gibi ağırlıklı olarak mevcut yapılar üzerinde yürüyor: açıklık açma ve kontrollü kırım. Şelalesiyle bilinen ilçede yeni bir kapı ya da pencere boşluğu, merdiven boşluğu, iki mekânı birleştirmek için duvarda geçiş gibi işlerin hepsi ölçülü kesim ister. Bu noktada elmas diskli duvar testeresi ile karot birlikte kullanılıyor, çünkü köşeler karotla alınıp aralar kesildiğinde açıklığın kenarı düzgün çıkıyor ve sonradan sıvayla toparlama derdi olmuyor.',
      'Kırıcıyla yapılan aynı iş hem çevredeki sıvayı ve kaplamayı döker hem de yapıyı gereksiz titreşime sokar; kesme yönteminde parça kontrollü alındığı için komşu bölümler rahatsız olmaz ve sonrasındaki tamir işi en aza iner. Taşıyıcı bir duvarda açıklık söz konusuysa üstüne lento ya da geçici destek gelmeden kesim yapılmaz; bunun ölçüsü statik projeden çıkar, mühendis onayı olmadan işe başlamıyoruz. Bütün bir bölümün kaldırılması gerekiyorsa işi kontrollü kırım olarak yürütüyor, parçaları önce kesip sonra indiriyoruz.',
    ],
    yerelBaglam: 'Yenileme işlerinde iş çoğu zaman tek kalemle sınırlı kalmıyor. Güney\'de bu tür talepler genelde oturulan binalarda ve küçük iş yerlerinde çıkıyor; bir dairede kapı boşluğu açılması, aynı binada tesisat geçişi, dükkânda vitrin için duvar düzeltmesi gibi kalemler bir arada gelebiliyor. Programı da buna göre kuruyoruz: telefonda yapılacakların listesini alıyor, hangi iş hangi ekipmanla çıkacak diye ayırıyoruz. Duvar testeresi, karot ve hidrolik kesme sisteminden hangileri gerekiyorsa hepsi aynı araçta yola çıkıyor; böylece ikinci bir sefer beklemek gerekmiyor.',
    sss: [
      {
        q: 'Güney\'de üst katta kesim yapılırken su alt kata iner mi?',
        a: 'Elmas diskli kesim ve karot su soğutmalı çalışır, dolayısıyla ortaya bir miktar su ve karot çamuru çıkar. Bunun alt kata ya da yan odaya geçmesini engellemek işin bir parçası: kesim çevresini sıvı geçirmeyecek şekilde sınırlıyor, biriken suyu çalışırken alıyoruz. Döşemeden geçen bir delikte alt kat tarafına da önlem alıyoruz; tek taraflı hazırlık yeterli olmuyor.',
      },
      {
        q: 'Güney Şelalesi çevresindeki iş yerlerinde de çalışıyor musunuz?',
        a: 'İlçe sınırları içindeki her adrese gidiyoruz; yapının konut, dükkân ya da işletme olması yöntemi değiştirmiyor. Değişen tek şey çalışma saati oluyor: müşteri trafiği olan yerlerde işi kapalı saatlere ya da sabahın erken saatine alıyoruz. 7/24 çalıştığımız için bu planlamayı telefonda konuşup önceden netleştirebiliyoruz; ekip Güney\'e giderken saatin de belli olması işi hızlandırıyor.',
      },
      {
        q: 'Güney\'de oturulan bir binada duvar kesimi yapılırken evi boşaltmak gerekir mi?',
        a: 'Genelde gerekmiyor. Kesim noktasal ilerlediği ve parça bütün hâlinde alındığı için ortalık kırıcıdaki gibi dağılmıyor; eşyaları odadan çıkarmak ya da örtmek çoğu zaman yetiyor. Yine de kesim süresince o odada kimsenin bulunmaması güvenlik açısından iyi. Toz ve gürültü kırıcıya göre belirgin şekilde az olsa da kesim yine de sessiz bir iş değil; komşulara önceden haber vermek işi rahatlatıyor.',
      },
      {
        q: 'İş bittikten sonra çıkan moloz Güney\'de bizde mi kalıyor?',
        a: 'Hayır. Kesilen parçaları ve kırım molozunu toplayıp alanı süpürüyor, işi temiz teslim ediyoruz. Büyük hacimli bir yıkımda molozun sahadan kaldırılması ayrı bir nakliye işidir; bunu baştan konuşup teklifin içine koyuyoruz ya da siz ayarlayacaksanız planı ona göre yapıyoruz. Uzak ilçede sonradan sürpriz çıkmaması için bu kalemi işe başlamadan netleştiriyoruz.',
      },
    ],
    // TODO: bu ilçede yaptığınız GERÇEK bir işi 2-3 cümleyle yazarsanız
    // sayfada ayrı bir kutuda görünür ve içeriği daha da güçlendirir.
    note: '',
  },
]

export default serviceAreas
