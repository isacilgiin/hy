/**
 * Hizmet detay sayfası içerikleri.
 *
 * NEDEN AYRI DOSYA: services.js'i Header ve Footer da import ediyor, yani o
 * dosya ANA PAKETE giriyor. Aşağıdaki uzun metinler (~90 KB) yalnızca hizmet
 * detay sayfasında kullanılıyor; services.js içinde kalsalardı ana sayfayı
 * açan herkes 10 hizmetin tüm yazılarını indirmek zorunda kalırdı.
 * Burada durduklarında yalnızca /hizmetler/<slug>/ açıldığında iniyorlar.
 *
 * Yeni bir hizmet eklerken: services.js'e kaydı, buraya da içeriği ekleyin.
 * İçerik yoksa sayfa yine çalışır, sadece uzun bölümler görünmez.
 */

const serviceContent = {
  'karot': {
    girisMetni: [
      'Karotta kesici uç, silindirik bir gövdenin ucuna dizilmiş elmas segmentlerden oluşur. Segmentler betonu koparmaz, aşındırarak öğütür. Uç malzemeye daldıkça yalnızca halka biçimindeki dar bir şeridi tüketir; ortada kalan silindir parçalanmadan durur ve işin sonunda göbek olarak bütün hâlde çıkar. Uç darbeyle değil dönerek çalıştığı için elemana şok yükü binmez; aynı nedenle çevredeki betonda yaygın bir mikro çatlak ağı gelişmez. Deliğin kenarı da tezgâhta işlenmiş gibi düzgün kalır. Yöntemin asıl gücü buradadır: delik açılırken çevresindeki yapı olduğu yerde durur ve arkasında düzeltilecek bir hasar bırakmaz.',
      'Makineyi serbest elde tutmuyoruz; sehpaya bağlıdır ve sehpanın kolonu boyunca ilerleyen kızak üzerinde iner. Çapa ve yüzeye göre sehpa dübelli taban plakası, vakum plakası ya da gergi direğiyle sabitlenir. Bağlantı gevşek kalırsa uç her turda hafifçe salınır, segmentler tek taraftan yüklenir, delik ekseninden kaçar. İlerleme basıncı da elle ayarlanan bir şeydir: az bastırılırsa segment yüzeyi parlar ve kesmeyi bırakır, çok bastırılırsa uç yuvasında sıkışır. Ustanın eli bu iki noktada belli olur, çapın büyüklüğünde değil.',
      'Elmas uç donatıya girdiğinde işlem durmaz, demir de kesilerek geçilir; yalnızca ilerleme yavaşlar ve daha dengeli bir besleme ister. Donatının sık olduğu bölgelerde bu yavaşlama belirgin biçimde artar. Burada asıl soru teknik değil yapısaldır: kesilen demir hangi elemana ait? Kolon, perde, kiriş gibi taşıyıcılarda deliğin nereden geçeceğini statik proje söyler; mühendis onayı gelmeden o elemana dokunmuyoruz. Eleman kalınlığı ucun boyunu aşıyorsa delik uzatma parçasıyla derinleştirilir; çok kalın kesitlerde iki yüzden karşılıklı çalışmak daha doğru sonuç verir.',
      'Aynı ekipman, betonun kendisi hakkında bilgi almak için de kullanılır. Yapıdan silindirik bir numune çıkarılır ve dayanım değerlendirmesi bu numune üzerinden yapılır. Numunenin hangi elemandan, hangi noktadan alınacağını yapının mühendisi belirler; biz alma işini yaparız, deneyi ve raporlamayı laboratuvar yürütür. Numune yüzeye dik alınmalı, içinde donatı bulunmamalı, alındığı yer ve yön etiketlenmelidir. Geriye kalan boşluk tamir harcıyla doldurulur. Bu son adım atlanırsa numune alınan nokta, bilgi almak uğruna açılmış bir zayıf bölge olarak kalır.',
    ],
    surec: [
      {
        baslik: 'Keşif ve Delik Planı',
        aciklama: 'Sahaya gelip elemanın kalınlığını, istenen çapı, delik adedini ve çalışma yüksekliğini yerinde görüyoruz. Taşıyıcı bir elemandan söz ediliyorsa statik projeyi istiyoruz. Keşif için ücret almıyoruz. Ölçüler netleştikten sonra tek bir rakam söylüyoruz ve işin sonunda o rakam değişmiyor.',
      },
      {
        baslik: 'Makine Sabitleme',
        aciklama: 'Delik ekseni işaretlenir, gerekiyorsa donatı taraması yapılır. Sehpa; çapa, yüzeyin durumuna ve çalışma yönüne göre dübelli plaka, vakum tabanı veya gergi direğiyle sabitlenir. Bağlantı kontrol edilmeden uç betona daldırılmaz, çünkü deliğin doğrultusunu ilk santimetreler belirler.',
      },
      {
        baslik: 'Su ve Toz Düzeni',
        aciklama: 'Zemin ve çevredeki eşya örtülür, gerekiyorsa çalışma alanı ayrılır. Islak çalışmada suyu toplayan halka ve emici ünite kurulur, artık çamur yayılmadan alınır. Suyun istenmediği iç mekânlarda toz emişli kuru sistem gündeme gelir, ancak kuru delme tuğla ve gaz beton gibi malzemelerde anlamlıdır; hangisinin uygun olduğuna keşifte birlikte karar veriyoruz.',
      },
      {
        baslik: 'Delme ve Göbeğin Alınması',
        aciklama: 'Uç düşük ilerlemeyle daldırılır, halka yuvasına oturduktan sonra dengeli beslemeyle sürdürülür; donatıya girildiğinde hız düşürülür. Karşı yüze yaklaşırken o taraf emniyete alınır ki göbek kontrolsüz düşmesin. Delik tamamlanınca göbek çekilerek çıkarılır, derin deliklerde bölüm bölüm alınır.',
      },
      {
        baslik: 'Kontrol ve Temiz Teslim',
        aciklama: 'Delik çapı, doğrultusu ve çıkış kenarı gözden geçirilir; numune alındıysa boşluk tamir harcıyla kapatılır. Göbekler, kesim artığı ve su çamuru sahadan toplanıp götürülür. Moloz nakliyesi bize aittir, ayrıca ücretlendirilmez. Örtüler kaldırılır, çalışma alanını süpürülmüş hâlde teslim ediyoruz.',
      },
    ],
    detaylar: [
      {
        baslik: 'Sabitleme ve Delik Ekseni',
        metin: 'Karotta sonucu belirleyen ilk şey ucun cinsi değil, makinenin durduğu yerdir. Sabitleme rejimi çapla birlikte değişir: küçük çaplarda vakum tabanı iş görür, çap büyüdükçe dübelli plaka ve ek destek gerekir. Vakum ise pürüzlü, boyası kabarmış, nemli veya gözenekli yüzeyde güvenilmez; böyle yüzeylerde ısrar etmek yerine dübele geçilir. Sehpa gevşek kalırsa delik girişte doğru görünse bile çıkışta kaçmış olur. Bu kaçıklık ince bir duvarda kimsenin dikkatini çekmez; kalın kesitte iki yüzden karşılıklı çalışıldığında ise iki deliğin ortada buluşmaması demektir. Bu yüzden sehpa kurulduktan sonra doğrultu ayrıca kontrol edilir, ilk daldırma düşük ilerlemeyle yapılır ve halka yuvasına tam oturmadan basınç artırılmaz. Kaçan bir deliği düzeltmek diye bir seçenek yoktur; ancak doldurulup yeniden açılır.',
      },
      {
        baslik: 'Su Soğutmalı ve Kuru Sistem',
        metin: 'Su, karotta yalnızca tozu bastırmaz; segmentlerin sıcaklığını düşürür ve aşınan malzemeyi delikten dışarı taşır. Bu iki işi yapmadığında uç ısınır, elmas taneleri bağ malzemesinin içine gömülür ve segment yüzeyi parlayarak kesmeyi bırakır. Sahada en sık karşılaşılan aksaklık budur; çoğu zaman ortalık ıslanmasın diye suyu kısmaktan kaynaklanır. Bir de ters tarafı vardır: talaş dışarı atılamadığında halka boşluğunda birikir ve ucu sıkıştırır. Su verilemeyen yerlerde kuru sistemle çalışılır, ancak kuru delme tuğla, bims ve gaz beton gibi malzemelerde anlamlıdır. Donatılı betonda kuru zorlamak hem ucu yakar hem işi uzatır. İç mekânda su istenmiyorsa doğru çözüm kuru sistemi dayatmak değil; toplama halkası ve emici üniteyle ıslak çalışıp ortamı kuru tutmaktır.',
      },
      {
        baslik: 'Karot Numunesi Alırken',
        metin: 'Numune almak delik açmaktan farklı bir iştir; burada değerli olan delik değil, çıkan silindirdir. Numunenin alınacağı bölgeyi yapının mühendisi belirler, biz o noktadan yüzeye dik olacak biçimde numuneyi çıkarırız. Üç şeye dikkat edilir. Numunenin içinde donatı bulunmamalıdır, bu yüzden önce tarama yapılır; içinden demir geçen bir numune betonu temsil etmez. Numune çapı, beton içindeki en iri agrega tanesi gözetilerek seçilir; dar bir numunede tek bir iri tane sonucu bozabilir. Boy/çap oranı da deneye uygun kalmalıdır, çünkü bu oran raporlanan dayanımı doğrudan etkiler ve kısa kalan numune sonradan telafi edilemez. Numune kırılmadan, alındığı yer ve yön yazılarak teslim edilir. Dayanım değerini deneyi yapan laboratuvar verir; biz numunenin sağlam ve temsili gelmesinden sorumluyuz.',
      },
    ],
    sss: [
      {
        q: 'Eleman kalınlığı karot ucunun boyundan fazlaysa ne yapıyorsunuz?',
        a: 'Uç boyu yetmediğinde delik uzatma parçasıyla derinleştirilir. Uzadıkça salınım ve sürtünme arttığı için sabitlemenin daha sağlam olması, beslemenin daha yavaş verilmesi ve suyun kesintisiz gitmesi gerekir. Çok kalın kesitlerde iki yüzden karşılıklı çalışmak daha sağlıklı sonuç verir; bu durumda iki deliğin ortada buluşabilmesi için eksenlerin baştan ortak işaretlenmesi şarttır. Kalınlığı ve ulaşılabilen yüzeyleri keşifte ölçüp hangisinin uygun olduğunu söylüyoruz.',
      },
      {
        q: 'Çıkan karot göbeğini ne yapıyorsunuz?',
        a: 'Göbekler bizde kalır; kesim artığı ve çamurla birlikte sahadan çıkarılır, bunun için ayrı bir nakliye bedeli konmaz. Derin deliklerde göbek bütün gelmez, kırılarak bölüm bölüm alınır. Numune için alınanlar bunun dışındadır; onlar etiketlenip ilgilisine teslim edilir. Göbeği kesit görmek ya da ölçü almak için isterseniz önceden söylemeniz yeterli; mümkün olduğunca bütün hâlde ayırıp bırakıyoruz.',
      },
      {
        q: 'Taşıyıcı kolondan delik geçirmemiz gerekiyor, yapıyor musunuz?',
        a: 'Taşıyıcı elemanda delik açmak için elimizde onaylı statik proje ve mühendis onayı olması gerekiyor; bu konuda istisna yapmıyoruz. Onay geldiğinde delik yerini projedeki konuma göre işaretliyor, donatı taramasıyla teyit ediyor, imkân varsa birkaç santim kaydırarak demiri korumaya çalışıyoruz. Onay yoksa durumu keşifte açıkça söylüyoruz. Çoğu zaman aynı geçiş bölme duvardan veya döşemenin başka bir noktasından çözülebiliyor; öyleyse onu öneriyoruz.',
      },
      {
        q: 'Denizli\'nin uzak ilçelerine karot için geliyor musunuz?',
        a: 'Denizli il genelinde 20 ilçeye gidiyoruz. Uzak ilçelerde programı, tek gidişte işin tamamı bitecek biçimde kuruyoruz; bunun için delik adedi, çaplar, eleman kalınlığı ve çalışılacak kat bilgisi önceden lazım. Bu bilgiler doğru ucu ve doğru sabitleme takımını yanımıza almamızı sağlıyor. Ölçüleri ve birkaç fotoğrafı gönderirseniz yola çıkmadan önce bir aralık söyleyebiliyoruz, kesin rakam yerinde netleşiyor.',
      },
    ],
  },
  'beton-delme': {
    girisMetni: [
      'Beton delmede asıl iş deliği açmak değil, deliğin nereye ve kaç çapında açılacağına karar vermektir. Delik başlı başına bir amaç değil, bir geçiştir; içinden bir boru, havalandırma kanalı, kablo demeti ya da ankraj saplaması geçer. Çap, geçecek elemanın dış ölçüsüne yalıtım ve montaj payı eklenerek bulunur. Yer ise elemanın taşıyıcı olup olmadığına, duvarın içinden ne geçtiğine ve karşı yüzde ne olduğuna bakılarak seçilir. Bu iki karar doğruysa delme kısmı rutin ilerler; yanlışsa ortaya çıkan sorunu kapatmak, deliği açmaktan pahalıya gelir.',
      'Deliğin yönü kurulumu baştan değiştirir. Yatay delmede makine duvara sabitlenir ve asıl dikkat karşı yüzdedir; oradaki sıva, fayans, dolap arkası ya da komşu hacim görülmeden uç daldırılmaz. Döşemede aşağı doğru delerken alt kat işin bir parçası hâline gelir, çünkü hem soğutma suyu hem kopan göbek oraya iner. Yukarı doğru tavan delmede ise su makinenin üzerine geri akar ve ucun ağırlığı sürekli aşağı çeker; toplama halkası ile emici ünite olmadan bu iş yapılmaz.',
      'Delik yerini seçerken döşemede kiriş ve nervür hatlarına dikkat edilir. Asma tavan kapalıysa taşıyıcı düzenin nereden geçtiği projeden okunur, şüphe kalırsa tarama yapılır. Duvarlarda ilk ayrım basittir ama sık atlanır: bölme duvar mı, taşıyıcı perde mi? Bölme duvarda delik yeri kullanım kolaylığına göre kaydırılabilir; taşıyıcı elemanda kaydırılamaz, konumu proje söyler ve onaysız delinmez. Bu ayrımı keşifte birlikte netleştiriyoruz, çünkü sonradan yer değiştirmenin bedeli iki delik oluyor.',
      'Delik açıldıktan sonra geçişin kapatılması işin ayrılmaz parçasıdır. Su ve pis su hatlarında delik, borunun eğimini bozmayacak kotta açılır. Klima montajında duvar deliği dışarıya doğru hafifçe eğimli verilir ki drenaj suyu içeri dönmesin. Kablo geçişlerinde ve yangın bölmelerinde kalan boşluk uygun dolgu malzemesiyle kapatılır. Gereğinden büyük açılmış bir delik hem elemandan gereksiz kesit götürür hem de bu kapatma işini zorlaştırır; çapta cömert davranmak burada iyilik değil.',
    ],
    surec: [
      {
        baslik: 'Keşif ve Ölçü',
        aciklama: 'Hangi boru, kanal ya da saplamanın geçeceğini, hangi kotta ve hangi eğimle geçeceğini yerinde konuşuyoruz; gerekirse tesisatçınızla aynı anda. Keşfe ücret yansıtmıyoruz. Fiyatı çap, adet ve yön belli olduktan sonra tek kalemde söylüyoruz; sonradan ek kalem çıkmıyor.',
      },
      {
        baslik: 'Delik Yerinin İşaretlenmesi',
        aciklama: 'İşaretlenen nokta delinmeden önce sorgulanır: eleman taşıyıcı mı, duvarın içinde elektrik veya su hattı var mı, döşemede kiriş nereden geçiyor. Şüpheli durumda tarama yapılır ya da o hat işlem boyunca kapattırılır. Gerekiyorsa delik birkaç santim kaydırılır.',
      },
      {
        baslik: 'Yöne Göre Kurulum',
        aciklama: 'Yatay, dikey veya tavan; makinenin sabitlenmesi ve su düzeni yöne göre kurulur. Alt kata inen deliklerde o hacim boşaltılıp altı örtülür, tavan deliklerinde su toplama halkası takılır ve dübelli bağlantı esas alınır. Çevredeki eşya ile zemin her hâlükârda kapatılır.',
      },
      {
        baslik: 'Delme ve Karşı Yüz',
        aciklama: 'Uç dengeli beslemeyle ilerletilir, donatıya rastlandığında ilerleme yavaşlatılır. Çıkış yüzeyine yaklaşırken hız iyice düşürülür; böylece sıva veya kaplama kenardan kopmaz, göbek kontrolsüz düşmez. Aynı hizada birden fazla delik varsa hepsi tek eksende işaretlenip sırayla açılır, hizalama sonraya bırakılmaz.',
      },
      {
        baslik: 'Geçişin Teslimi',
        aciklama: 'Delik çapı ve kotu, geçecek elemana göre son kez kontrol edilir; delik ağzı kaba kalıntıdan temizlenir. Göbek, çamur ve moloz sahadan çıkarılır, alan süpürülerek teslim edilir. Boru veya kanal geçtikten sonraki dolgu işini de talep hâlinde üstleniyoruz.',
      },
    ],
    detaylar: [
      {
        baslik: 'Delik Yeri Nasıl Seçilir',
        metin: 'İlk soru elemanın ne olduğudur. Bölme duvarda delik yeri esnektir; taşıyıcı kolon, perde ve kirişte esnek değildir ve bu elemanlara statik proje ile mühendis onayı olmadan delik açmıyoruz. İkinci soru elemanın içinde ne olduğudur: donatı, elektrik, su ve doğalgaz hatları. Sıva altı hatlar çoğunlukla priz ve anahtar kutularından düşey ilerler, ama bu bir kural değil yaygın bir alışkanlıktır; şüphe varsa tarama yapılır ya da hat kapattırılır. Döşemede kiriş ve nervür üstüne delik açılmaz; bunlar asma tavanın altında gözden kaçtığı için önceden sorulur. Kenar mesafesi ve yan yana açılacak deliklerin arasındaki açıklık ise proje detayına göre belirlenir. Sık aralıklı bir delik dizisi, eleman açısından tek büyük boşluk gibi davranır ve tek tek değerlendirilemez.',
      },
      {
        baslik: 'Yatay, Dikey ve Tavan Delme',
        metin: 'Üç yönün farkı, suyun ve göbeğin nereye gittiğidir. Yatay delmede su duvar yüzeyinden aşağı akar, göbek karşı yüze düşer; bu yüzden diğer taraf boş tutulur ve çıkışta ilerleme yavaşlatılır. Aşağı doğru döşeme delmede su delik içinde birikir, göbek alt kata iner; alt hacim boşaltılmadan ve delik ağzı emniyete alınmadan iş bitirilmez. Yukarı doğru tavan delmede ucun ve makinenin ağırlığı sürekli aşağı çeker, su da geri gelir. Burada su toplama halkası ile emici ünite zorunludur; sabitlemede dübelli bağlantı esastır, gergi direği yalnızca destek olarak kullanılır. Kurulum bu farklar gözetilmeden yapıldığında iş ya ilerlemez ya da toparlaması delme işinden uzun sürer. Hazırlığın yönü, işin yönüyle birlikte değişir.',
      },
      {
        baslik: 'Çap, Kot ve Eğim',
        metin: 'Çap, geçecek borunun dış çapına göre seçilir; iç çapına göre değil. İkisini karıştırmak sahada en sık yapılan ölçü hatasıdır. Dış ölçünün üzerine yalıtım kalınlığı, varsa manşon et kalınlığı ve montaj payı eklenir, sonra bir üst çapa geçilir. Fazlası da sorundur: gereğinden büyük delik hem elemandan gereksiz kesit alır hem de sonradan kapatılması zor bir boşluk bırakır. Kot ve eğim pis su hatlarında belirleyicidir; delik borunun eğimini bozmayacak yükseklikte açılmazsa tesisatçı hattı zorlamak zorunda kalır ve akış bozulur. Klimada delik dışarıya doğru hafif eğimli verilir. Baca ve doğalgaz geçişlerinde ise delik yeri ve çapı bizim tercihimiz değildir; mekanik projede veya yetkili firmanın verdiği ölçüde ne yazıyorsa ona göre açılır. Ankraj ve montaj deliklerinde de çap ile derinlik proje detayından gelir; bize düşen, deliği o ölçüde ve içi temiz biçimde teslim etmektir.',
      },
    ],
    sss: [
      {
        q: 'Pis su borusu geçireceğiz, deliği kaç çapında açmak gerekiyor?',
        a: 'Borunun dış ölçüsü üzerinden hesaplıyoruz. Bu ölçüye montaj payı, varsa manşon ve yalıtım kalınlığı ekleniyor, ardından bir üst çapa geçiliyor. Boruyu sıkıştırarak geçirmek doğru değildir; çevresinde sonradan dolgu ve yalıtım yapılabilecek kadar boşluk kalmalı. Aynı duvardan birden fazla hat geçecekse delikleri baştan birlikte planlıyoruz. Boru tipini, ölçüsünü ve geçeceği elemanın kalınlığını söylerseniz uygun çapı keşifte netleştiriyoruz.',
      },
      {
        q: 'Döşemeden alt kata delik geçireceğiz, alt daireye girmek şart mı?',
        a: 'Şart. Aşağı doğru açılan delikte hem soğutma suyu hem de kopan göbek alt kata iner; delik ağzının altındaki alan boşaltılıp örtülmeden çalışmıyoruz. Alt daireye girilemiyorsa işi girilebilecek bir güne planlıyoruz, zorlamıyoruz. Tavana yukarı doğru delmede de aynı mantık üstteki hacim için geçerlidir. Bu yüzden komşuyla saat konusunu keşif sırasında konuşup baştan bağlıyoruz.',
      },
      {
        q: 'Delik açıldıktan sonra sıva ve boya tamiri gerekir mi?',
        a: 'Kenar kesilmiş gibi çıktığı için kırma işlerindeki gibi bir tamir gerekmez. Yine de yüzeydeki sıva eskiyse ve altına zayıf tutunmuşsa çıkış kenarında ufak dökülme olabilir; bunu azaltmak için son bölümde ilerlemeyi yavaşlatıyor, karşı yüzü destekliyoruz. Boru veya kanal geçtikten sonra çevresinde kalan boşluğun dolgusu ise ayrı bir iştir; istenirse onu da yapıyoruz.',
      },
      {
        q: 'İlçeden arıyoruz, birkaç delik için de geliyor musunuz?',
        a: 'Geliyoruz; hizmet alanımız Denizli\'nin 20 ilçesinin tamamını kapsıyor. Tek bir delik için de çıkıyoruz. Uzak ilçelerde tek gidiş, geçecek boru ya da kanalın ölçüsü baştan bilindiğinde işe yarıyor; çapı yerinde tartışmaya kalırsak yanımızdaki uç tutmayabiliyor. Bu yüzden telefonda tesisat tipini, geçilecek elemanı ve deliğin yönünü soruyoruz. Keşif ücretsiz, uzak ilçe de olsa fiyat yerinde netleşiyor.',
      },
    ],
  },
  'beton-kesme': {
    girisMetni: [
      'Beton kesme, betonarme bir elemanı parçalamadan, elmas segmentli bir diskle önceden çizilmiş hat boyunca ikiye ayırma işidir. Kırıcı betonu darbeyle dağıtır ve kenarı düzensiz bırakır; disk ise malzemeyi aşındırarak keser, geriye düz bir yüzey kalır. Yöntem bu yüzden, açıklık açıldıktan sonra geriye kalan duvarın veya döşemenin sağlam ve tanımlı bir kenara sahip olması gereken her işte tercih edilir. Kapı ve pencere boşlukları, asansör ve merdiven boşlukları bunun tipik örnekleridir.',
      'İşin düzgün çıkmasını sağlayan asıl unsur makine değil, ray sistemidir. Testere, yüzeye dübellenen bir kızak üzerinde yürür; disk her pasoda birkaç santim daha dalarak hat boyunca ilerler. Serbest elle yapılan kesimlerde disk donatıya girdiği anda hattan kaçar ve yüzeyde dalgalanma bırakır. Rayda böyle bir sapma olmaz, kesim baştan sona aynı çizgide kalır. Kesim boyunca su verilir; su hem segmenti soğutur hem de tozu kaynağında bastırır.',
      'Döşeme ve temel kesimlerinde iş biraz değişir. Yatay düzlemde çalışırken kesilen parçanın ne zaman serbest kalacağını hattın kapanma sırası belirler; parça planlanmadan düşerse hem alt kat hem de ekip risk altına girer. Temelde beton genellikle daha kalın, donatı daha yoğundur; ilerleme yavaşlar ve segment tüketimi artar. Zemine oturan kesimlerde diskin altına dolan malzeme, suyu ve artığı tahliye etmeyi zorlaştırır. Her iki durumda da kesim, tek büyük parça yerine taşınabilir boyutta panellere bölünerek planlanır.',
      'Kesimin nereden geçeceği ise ayrı bir konu. Kolon, perde ve kiriş gibi taşıyıcı elemanlarda kesim yeri statik projeye bağlıdır; mühendis onayı olmadan bu elemanlara müdahale etmiyoruz. Dolgu duvarda böyle bir kısıt yoktur, ama duvarın gerçekten dolgu olduğunun doğrulanması gerekir. Keşifte bunu birlikte değerlendiriyoruz; tereddüt kalırsa kesime başlamadan önce projenin bir mühendis tarafından incelenmesini istiyoruz. Emin olunmayan bir noktada kesime başlamak, sonradan telafisi zor bir karardır.',
    ],
    surec: [
      {
        baslik: 'Keşif ve Teklif',
        aciklama: 'Sahaya gelip kesilecek elemanın kalınlığını, konumunu ve iki yüzden erişim durumunu yerinde ölçüyoruz. Keşif ücretsiz; Denizli il genelinde, ilçelerin tamamına gidiyoruz. Ölçüler netleştikten sonra metraj, derinlik ve saha koşulları dahil tek bir rakam veriyoruz; başladıktan sonra listeye yeni kalem eklenmiyor.',
      },
      {
        baslik: 'Hat Çizimi',
        aciklama: 'Kesim hattı her iki yüze de işaretlenir ve iki yüzdeki hattın birebir çakıştığı kontrol edilir. Aynı aşamada duvarın içinden geçen tesisat sorgulanır; elektrik, su veya gaz hattı ihtimali varsa ilgili hat kapattırılmadan diske dokunulmaz. Köşelerin nasıl tamamlanacağı da burada kararlaştırılır.',
      },
      {
        baslik: 'Ray Kurulumu ve Örtme',
        aciklama: 'Kızak yüzeye dübellenip terazisi alınır, testere ray üzerine oturtulur; kızak gevşek kalırsa disk hattan kaçar. Su hattı bağlanır, kesim artığının yayılmaması için alan örtülür ve suyun toplanacağı nokta belirlenir. Kat aralarında çalışırken alt kata sızıntı olmaması için toplama kanalı çekilir. Yatay kesimlerde parçanın ineceği alan boşaltılır.',
      },
      {
        baslik: 'Kademeli Kesim',
        aciklama: 'Disk tek seferde tam derinliğe inmez; hat boyunca birkaç geçişte kademeli olarak dalar. Kalınlık tek yüzden ulaşılabilen derinliği aşıyorsa karşı yüzden aynı hat üzerinde ikinci kesim yapılır. Son geçişe girmeden önce serbest kalacak panel askıya alınır veya takozlanır.',
      },
      {
        baslik: 'Parça İndirme ve Teslim',
        aciklama: 'Serbest kalan panel kontrollü şekilde yatırılır, gerekirse yerinde bölünerek taşınır. Köşe tamamlamaları, kesim yüzeyi ve ray dübel delikleri gözden geçirilir; eksik kalan köşe payı varsa burada tamamlanır. Kesim çamuru ile beton parçaları sahadan alınır, çalışma alanı temizlenip teslim edilir; nakliye bize aittir.',
      },
    ],
    detaylar: [
      {
        baslik: 'Kesim Derinliği ve İki Yüzden Erişim',
        metin: 'Duvar testeresinin tek yüzden inebildiği derinlik disk çapına bağlıdır; pratikte disk çapının yarısından biraz azı kadar iner, çünkü diskin göbeği ve flanş yuvası yüzeyin dışında kalır. Kalın kesitlerde bu yüzden iki yüzden çalışılır ve asıl kısıt makine değil erişimdir. Bir yüzü toprağa dayalı istinat duvarında, komşu parsele bitişik perdede veya arkası kapalı şaftta ikinci yüz yoktur; orada ya daha büyük çaplı bir sistem gerekir ya da yöntem baştan değişir. İki yüzden kesimde en sık yapılan hata ölçü aktarımıdır: hatlar birkaç milimetre kaçtığında iki kesim tam ortada buluşmaz ve yüzeyde kademe kalır. Bu yüzden hat, yüzeylerden birine göre değil ortak bir referanstan aktarılır.',
      },
      {
        baslik: 'Köşe Birleşimlerinde Aşırı Kesim',
        metin: 'Dairesel bir disk iç köşeyi tam olarak bitiremez. Kesim, kesit boyunca bir yay çizerek ilerler: disk en derin noktasında köşe işaretine dayandığında, aynı kesim çalışılan yüzde işaretin epeyce ötesine geçmiş olur. Derine inildikçe bu fazlalık azalır ve en dip noktada sıfırlanır; buna aşırı kesim denir. Diski görünen yüzdeki işarette durdurursanız bu kez karşı yüzde köşe kesilmeden kalır. Her iki sapma da kesit kalınlaştıkça ve disk çapı büyüdükçe artar, bu yüzden derinliğe yeten en küçük disk seçilir. Doğru çözüm, köşeye önce karot deliği açıp kesimi o deliğe bağlamaktır; fazlalık delik içinde kaybolur ve karşı yüzdeki eksik pay da kalmaz. Dolgu duvarda yüzeyde kalan bu fazla iz sorun olmaz; taşıyıcı bir elemanda ya da döşeme köşesinde ise hattın ötesine geçen kesik, orada kalması gereken donatıyı da keser. Köşenin nasıl bitirileceği bu yüzden ray kurulmadan, hat çizilirken kararlaştırılır.',
      },
      {
        baslik: 'Kesilen Parçanın Ağırlığı',
        metin: 'Betonarme kabaca 2400 kg/m³ ağırlığındadır. Yirmi santim kalınlığındaki bir metrekare duvar parçası bu hesapla yarım tona yaklaşır; bir kapı boyu panel tek başına elle taşınabilecek bir yük değildir. Kesim planı bu yüzden panelin nereden bölüneceği ve nasıl indirileceği belirlenmeden yapılmaz. Düşey kesimlerde parça son geçişten önce askıya alınır ya da tabandan takozlanır; döşeme kesimlerinde alt kat boşaltılır ve parça altından desteklenir. Sahada en sık görülen hata, son geçiş bittikten sonra parçanın kendi kendine yerinde duracağını varsaymaktır. Yalnızca sürtünmeyle duran bir panel, en küçük titreşimde devrilir. Aynı hesap desteğin kendisi için de geçerlidir: taşıma kapasitesi parçanın ağırlığını karşılamayan bir destek sadece güven duygusu verir.',
      },
    ],
    sss: [
      {
        q: 'Duvarın sadece bir yüzüne ulaşabiliyorum, kesim yapılabilir mi?',
        a: 'Duvarın kalınlığına bağlı. Tek yüzden inilebilecek derinlik disk çapının yarısından biraz azıdır; kesit bunun altındaysa tek taraftan kesilir. Daha kalınsa ya daha büyük çaplı bir sistem gerekir ya da kesim yerine başka bir yöntem konuşulur. Keşifte kalınlığı ölçüp hangisinin uygulanabilir olduğunu net söylüyoruz, tahmine dayanarak iş almıyoruz.',
      },
      {
        q: 'Kesilen parça nasıl indiriliyor, duvar birden düşer mi?',
        a: 'Düşmez, çünkü parça serbest kalmadan önce sabitlenir. Büyük açıklıklarda panel tek parça bırakılmaz, taşınabilir boyutta bölünerek kesilir. Son geçişe girmeden askı ya da takoz kurulur, ardından parça kontrollü şekilde yatırılıp dışarı alınır. Döşeme kesimlerinde alt kat kapatılır ve parça aşağı düşürülmeden, desteklenerek indirilir. Kesim sırası da buna göre planlanır: parçayı asılı tutan kenar en sona bırakılır.',
      },
      {
        q: 'Kapı açıklığını genişletmek istiyorum; duvarın taşıyıcı olup olmadığını nasıl anlarım?',
        a: 'Kalınlık ve konum fikir verir ama tek başına yeterli değildir; en sağlıklısı yapının statik projesine bakmaktır. Proje elinizde yoksa keşifte duvarın kat planındaki yerini, üstündeki kirişi ve kalınlığını birlikte değerlendiriyoruz. Taşıyıcı çıkarsa mühendis onayı olmadan kesime başlamıyoruz, onay süreci için proje müellifine yönlendiriyoruz. Ayrıca açıklığı genişletmek mevcut lentonun da yenilenmesini gerektirebilir; bu, kesimden önce çözülmesi gereken bir konudur.',
      },
      {
        q: 'Kesimden sonra yüzey nasıl kalır, sıva gerekir mi?',
        a: 'Kesim yüzeyi diskin bıraktığı düz bir yüzeydir; kırılarak açılmış bir boşluk gibi tırtıklı değildir, çoğu işte doğrudan kasa veya doğrama oturtulabilir. Buna karşılık rayın dübellendiği noktalarda küçük delikler, köşe tamamlamalarında ise iz kalır. Bunların tamiri gerekir; genelde ince bir dolgu ve sıva rötuşu yeterli olur. Ray deliklerinin nereye denk geleceğini kesimden önce konuşuyoruz.',
      },
    ],
  },
  'beton-kirma': {
    girisMetni: [
      'Beton kırma, bir betonarme elemanı yerinde parçalayarak kaldırma işidir. Beton basınç altında güçlüdür ama darbeye karşı gevrektir; kırıcı ucu tam olarak bu zayıflığı kullanır, malzemeyi tek noktadan çatlatıp çatlağı yayar. Eleman zaten bütünüyle kalkacaksa kesim yapmak gereksiz bir maliyettir; kırım hem daha hızlı hem daha ekonomiktir. Adı kırma olsa da kontrolsüz bir yıkım değildir: nereden başlanacağı, hangi sırayla ilerleneceği ve nerede durulacağı önceden belirlenir.',
      'Ekipman seçimini kesit kalınlığı ve saha koşulları belirler. Elektrikli kırıcılar iç mekânda, dar hacimlerde ve döşeme üstü çalışmalarda kullanılır; taşınması kolaydır, sahadaki mevcut elektrik çoğu zaman yeter. Kalın temel kütleleri, sanayi zeminleri ve ağır beton kaideler elektrikli kırıcıyla ekonomik olmaz, orada hidrolik güç üniteli sistemler devreye girer. Hidrolik ekipman belirgin şekilde yüksek darbe enerjisi verir; buna karşılık ağırdır, titreşimi fazladır ve her zemine kurulamaz.',
      'Kırımın en çok işe yarayan hâli, kesimle birlikte kullanıldığı hâldir. Kaldırılacak bölümün sınırı önce elmas diskle kesilirse, kırıcının ürettiği çatlaklar bu hattın ötesine yürüyemez ve geriye kalan beton zarar görmez. Sınır kesilmeden yapılan kırımlarda çatlak, kalması gereken duvarın içine doğru ilerler; donatı boyunca gizli bir hat izleyip yüzeyde hiç iz bırakmayabilir. Bu hasar çoğu zaman iş biterken değil, sıva atılıp yüzey kapandıktan sonra kendini gösterir.',
      'Kırım işinin yarısı sahayı yönetmektir. Toz, titreşim ve moloz aynı anda kontrol altında tutulmazsa iş kendi kendini yavaşlatır; biriken moloz hem ekibin hareket alanını daraltır hem de döşemeye fazladan yük bindirir. Molozu biriktirmeden tahliye ediyor, çıkan malzemenin toplanmasını ve nakliyesini kendi işimizin parçası sayıyoruz; sonradan ayrı bir nakliye kalemi çıkarmıyoruz. Denizli\'nin bütün ilçeleri çalışma alanımıza dahil; uzak noktalara giderken gereken tüm ekipmanı yanımızda götürüp işi bir seferde kapatmayı hedefliyoruz.',
    ],
    surec: [
      {
        baslik: 'Yapının Okunması',
        aciklama: 'Sahada önce hangi elemanın taşıyıcı, hangisinin dolgu olduğu belirlenir. Kaldırılacak bölümün üstünde yük olup olmadığı, kırımın hangi kattan başlayacağı ve molozun tahliye güzergâhı bu aşamada netleşir. Sıra baştan kurulmazsa iş ortasında durup geri dönmek gerekir; bu da hem süreyi hem hasar riskini büyütür.',
      },
      {
        baslik: 'Sınır Hattının Kesilmesi',
        aciklama: 'Kalması gereken beton ile kalkacak bölümün sınırı elmas diskle kesilir. Bu ince hat, kırıcının ürettiği çatlağın nerede duracağını tanımlar. Diskin giremediği yerlerde sınır boyunca sık aralıklarla karot delikleri açılıp zayıf bir kırılma çizgisi oluşturulur; kırım bu çizgiye kadar gelir ve orada biter.',
      },
      {
        baslik: 'Alan Hazırlığı',
        aciklama: 'Çalışma hacmi örtülür, açık geçişlere toz perdesi çekilir. Kırım bölgesine gelen su, gaz ve elektrik besleme hatları kapattırılır. Alt katta kırımın tam altına denk gelen alan boşaltılır, gerekiyorsa geçici destek kurulur. Ekibin çıkış yolu her aşamada açık bırakılır.',
      },
      {
        baslik: 'Dıştan İçe Kırım',
        aciklama: 'Kırım serbest kenardan başlar ve içeri doğru ilerler; kat çalışmalarında üstten aşağı inilir. Sınır hattına yaklaşıldığında ağır ekipman bırakılıp daha hafif kırıcıya geçilir, böylece kalan betonun kenarı bozulmaz. Toz çalışma sırasında sisleme ile bastırılır; uç tek noktada uzun süre zorlanmaz, çatlak yayıldıkça yer değiştirilir.',
      },
      {
        baslik: 'Moloz Tahliyesi ve Teslim',
        aciklama: 'Moloz sahada biriktirilmeden, kırım ilerledikçe tahliye edilir; ağırlığın döşeme üstünde toplanmasına izin verilmez. Açığa çıkan donatılar kesilip düzeltilir, kalması gereken filizler işaretlenir. İş bitiminde alan temizlenir, molozun nakliyesi tarafımızca yapılır ve saha bir sonraki imalata hazır hâlde teslim edilir.',
      },
    ],
    detaylar: [
      {
        baslik: 'Kırım mı, Kesim mi Gerekir?',
        metin: 'Karar, elemanın geleceğine bakılarak verilir. Geriye kalacak bir duvarda veya döşemede tanımlı bir kenar isteniyorsa, komşu daireyle ortak bir yapıda çalışılıyorsa ya da bina kullanımdaysa kesim doğrudur. Buna karşılık eleman bütünüyle kalkacaksa, geometri düzensizse ve ray kuracak düzgün bir yüzey yoksa kırım hem daha hızlı hem daha ucuzdur; temel kütleleri, makine kaideleri ve havuz tabanları bu gruba girer. Hesap da farklı işler: kesim metraj ve derinlik üzerinden, kırım hacim ve erişim zorluğu üzerinden çıkar. En sık yapılan yanlış, kalması gereken bir duvara açıklık açmak için doğrudan kırıcıya sarılmaktır; kenar dağılır, tamir maliyeti kesim farkını fazlasıyla geçer.',
      },
      {
        baslik: 'Kırımın Durduğu Yer: Taşıyıcı Sistem',
        metin: 'Bir kolonda, perdede veya kirişte kırım, statik projede karşılığı ve mühendis onayı olmadan başlamaz. Bu konuda esneme payımız yok. Taşıyıcı olmayan işlerde de dikkat isteyen iki nokta var. Birincisi, uzun süre yerinde kalmış bir dolgu duvarın üstündeki kiriş zamanla sehim yapmış ve duvara yük binmiş olabilir; duvar hazırlıksız kaldırıldığında bu yük tümüyle üstteki kirişe geri biner ve kirişin sehimi artar; üst kattaki sıva ve kaplama çatlakları çoğunlukla buradan çıkar. Şüphe varsa kırım öncesi geçici destek kurulur. İkincisi, zemine oturmayan bir döşeme üzerinde ağır kırıcı çalıştırmaktır. Darbe yükü statik yükle aynı şey değildir; döşemenin açıklığı ve üstünde biriken moloz birlikte değerlendirilmeden ağır ekipman kurulmaz. Bu iki nokta atlandığında ortaya çıkan hasar kırıcının gücünden değil, sıralamadan kaynaklanır.',
      },
      {
        baslik: 'Toz, Titreşim ve Komşu Yapı',
        metin: 'Kırıcıda kesimdeki gibi sürekli su soğutması yoktur; su burada soğutmak için değil, tozu bastırmak için sisleme olarak verilir. Fazla su işi kolaylaştırmaz, molozu çamura çevirir ve alt katlara sızar. Kapalı hacimlerde toz perdesi ve emişle çalışmak daha etkili olur; ancak hacmi tamamen kapatmak da çözüm değildir, hava akışı olmayan yerde toz asılı kalır ve görüş kaybı iş güvenliği sorununa döner. Beton tozu, solunduğunda kalıcı zarar veren kristal silis içerir; maske ekip için tercih değil zorunluluktur. Titreşim tarafında asıl risk kırılan elemanda değil komşusundadır: bitişik duvarın sıvasında saç çatlakları, asma tavanda gevşeme, fayans derzlerinde açılma görülebilir.',
      },
    ],
    sss: [
      {
        q: 'Kırım işinde fiyat metrekare üzerinden mi hesaplanıyor?',
        a: 'Hayır, kırımda ölçü metrekare değil kaldırılacak beton hacmidir. Buna kesitin kalınlığı, donatı yoğunluğu ve molozun sahadan çıkarılma zorluğu eklenir; asansörsüz bir üst kattaki iş ile zemin kattaki aynı hacim bir tutulmaz. Keşif ücretsizdir. Ölçüler alındıktan sonra moloz nakliyesi dahil toplam fiyatı çıkarıyoruz, teklifi başlamadan önce yazılı olarak iletiyoruz ve o rakam iş bitiminde değişmiyor.',
      },
      {
        q: 'Alt kattaki daire kırımdan etkilenir mi?',
        a: 'Kırım titreşimi taşıyıcı sistem üzerinden yayılır, bu yüzden alt katta sıva çatlağı veya asma tavanda gevşeme ihtimali her zaman vardır. Riski azaltmak için ağır ekipmanı sınırlı kullanıyor, kırımı küçük bölümler hâlinde ilerletiyoruz. Kırımın tam altına denk gelen alanın boşaltılmasını istiyoruz. İşe başlamadan önce bitişik ve alt yüzeylerdeki mevcut çatlakları fotoğraflıyoruz; böylece sonradan neyin bizden kaynaklandığı tartışma konusu olmuyor.',
      },
      {
        q: 'Elektrikli kırıcı ile hidrolik kırıcı arasında ne fark var?',
        a: 'Fark, darbe enerjisinde ve ekipmanın nereye kurulabildiğinde. Elektrikli kırıcı elde taşınır, sahadaki mevcut hattan beslenir ve iç mekânla orta kalınlıktaki kesitler için yeterlidir. Hidrolik sistemler ayrı bir güç ünitesinden beslenir, çok daha yüksek enerji verir, kalın temel kütlelerinde işi belirgin şekilde kısaltır; ağırdır, titreşimi yüksektir ve her döşemeye kurulamaz. Hangisinin kullanılacağına keşifte, kesit kalınlığına ve zeminin durumuna bakarak karar veriyoruz.',
      },
      {
        q: 'Kırım sonrasında açıkta kalan demirler ne oluyor?',
        a: 'Kırılan betonun içindeki donatı açığa çıkar. Kalkacak bölümün donatısı kesilerek molozla birlikte alınır. Geriye kalan elemandan çıkan filizler ise duruma göre değerlendirilir: bu noktaya yeni bir imalat bağlanacaksa bırakılır ve korunur, bağlanmayacaksa yüzey hizasında kesilip üzeri kapatılır; açıkta bırakılan uç zamanla paslanır. Korunacak filizin çevresinde ağır darbeden kaçınılır, çünkü darbe donatının beton içindeki aderansını bozar.',
      },
    ],
  },
  'asfalt-derz-kesim': {
    girisMetni: [
      'Asfalt derz kesim; yol, saha ve kaldırım kaplamasını kırmadan, tekerlekli bir zemin kesme makinesiyle tek hat boyunca ayırma işidir. Kırıcı kullanıldığında darbe kaplamanın altına iner; hattın iki yanındaki asfalt gevşer, taneler ufalanır ve kenar düzgün çıkmaz. Testere ise yalnızca disk kalınlığı kadar bir bölgede malzemeyi keser. Bu yüzden altyapı hendeği açılacaksa da mevcut bir yama yenilenecekse de ilk iş kesim hattını çıkarmaktır. Denizli il genelinde 20 ilçede bu işleri yapıyoruz.',
      'Aynı başlık altında birbirine benzeyen ama geometrisi bambaşka işler var. Altyapı hendek kesiminde iki paralel hat çıkarılır ve kazı bu hattın içinde kalır. Derz açmada amaç, betonun nerede çatlayacağını önceden belirlemektir; orada derinlik genişlikten çok daha önemlidir. Yama kenarı düzeltmede bozulmuş kaplama sağlam malzemeye kadar geri kesilir. Kaldırım ve bordür kesiminde ise hat açıkta kaldığı için kesim yüzeyi doğrudan işin görüntüsünü belirler.',
      'Kesim derinliğini disk çapı belirler. Disk mile bağlandığından yarıçapın tamamı işe girmez; flanş payı düşülür ve kalan kısım kesilebilecek en fazla derinlik olur. Uygulamada 300 mm\'ye kadar derinlik alınabiliyor. Kaplama bundan kalınsa hat üzerinde kademeli paso yapılır, her geçişte disk biraz daha indirilir. Derz genişliği ise disk kalınlığı kadardır. Dolgu yapılacak bir derz isteniyorsa hazne ikinci bir pasoyla genişletilir, çünkü mastik tek disk izinin içine düzgün oturmaz. Asfaltın altından beton plak çıkması hem derinliği hem disk seçimini değiştirir.',
      'Yol üstündeki işin asıl zorluğu makine değil, trafiktir. Kesim bittikten sonra hendek açık kalır; bu yüzden kesim, kazı ve dolgu sırası baştan planlanmalıdır. Şerit kapatma, koni ve levha düzeni, yaya geçişi ve gerekiyorsa gece çalışma keşifte konuşulur. Bir işletmenin kendi sahasında ise mesele araç değil üretim akışıdır; kesim saatini vardiya arasına almak çoğu zaman en pratik çözümdür. Keşif ücretsizdir. Teklif metraj, kaplama cinsi ve derinlik üzerinden net verilir, iş bitiminde ek kalem çıkmaz.',
    ],
    surec: [
      {
        baslik: 'Hat Keşfi ve Metraj',
        aciklama: 'Sahaya gelip kesilecek hattın uzunluğunu, kaplamanın cinsini ve kalınlığını ölçüyoruz. Asfaltın altında beton plak varsa bu ayrı bir kalemdir. Aynı ziyarette çalışma saatini, su temini ve trafik düzenini konuşuyoruz. Keşif ücretsiz; teklif de bu ölçüler üzerinden net veriliyor.',
      },
      {
        baslik: 'Kesim Hattı İşaretleme',
        aciklama: 'Hat ip ve boyayla zemine çıkarılır. Hendek kesiminde iki hat, kazı genişliğinden birer miktar dışarı alınır; makine ilerlerken hattın kaçmaması için başlangıç ve bitiş noktaları ayrıca işaretlenir. Varsa altyapı hat bilgisi bu aşamada güzergâhla karşılaştırılır, çakışan noktalar önceden belirlenir.',
      },
      {
        baslik: 'Trafik Düzeninin Kurulması',
        aciklama: 'Kesim başlamadan şerit kapatma, koni, levha ve yaya geçiş düzeni kuruluyor. Makine suyla çalıştığı için hortum güzergâhı da araç ve yaya trafiğinden ayrılıyor. Kaldırım işlerinde yayaya alternatif bir geçiş bırakılıyor. İşletme içi sahalarda aynı ayrımı forklift ve kamyon güzergâhı için yapıyoruz.',
      },
      {
        baslik: 'Testereyle Kesim',
        aciklama: 'Disk suyla soğutularak hat boyunca indiriliyor. Kalın kaplamada derinlik tek seferde değil kademeli pasolarla veriliyor; böylece disk zorlanmıyor ve hat düz kalıyor. Hattın iki ucunda derinlik ayrıca kontrol ediliyor, çünkü disk yuvarlak olduğundan uçlar tabanda kısa kalır. Kesim suyu kenarda toplanıyor.',
      },
      {
        baslik: 'Söküm ve Saha Teslimi',
        aciklama: 'Kesilen kaplama parçaları sökülüyor; kesim çamuru ve kırıntı süpürülerek alınıyor, nakliyesi bize ait. Kesim hattı boyunca gevşemiş bir bölge kaldıysa yama öncesi temizlenmek üzere gösteriliyor. Hendek aynı gün kapanmayacaksa kenarın işaretli ve emniyete alınmış bırakılması için sahadaki yükleniciyle birlikte hareket ediyoruz.',
      },
    ],
    detaylar: [
      {
        baslik: 'Derz Derinliği ve Kesim Zamanı',
        metin: 'Beton saha ve yollarda derz, betonun nerede çatlayacağını önceden belirlemek için açılır. Burada belirleyici olan derinliktir; genel kabul, plak kalınlığının yaklaşık dörtte biri kadar inmektir. Sığ kalan bir derz çatlağı tutmaz, çatlak derzin birkaç santim yanından kendi yolunu bulup çıkar. Zamanlama da aynı ölçüde önemlidir. Çok erken kesilirse disk henüz tam bağ yapmamış agregayı yerinden söker, derz kenarı taraklanır. Çok geç kalınırsa beton kendi çatlağını çoktan atmış olur ve açılan derzin bir anlamı kalmaz. Doğru an, betonun disk altında dağılmayacak sertliğe geldiği ama yüzeyde henüz çatlak görünmediği aralıktır. Bu aralık havaya ve karışıma göre kaydığı için dökümü yapan ekiple konuşarak planlıyoruz.',
      },
      {
        baslik: 'Hendek Kenarı ve Yamanın Ömrü',
        metin: 'Altyapı işlerinde en sık görülen hata, hendeği kesmeden doğrudan kırıcıyla açmaktır. Kırıcı darbesi kaplamayı hendek genişliğinin ötesinde de gevşetir. Gözle görünmeyen bu bölge yama serildikten sonra oturur, kenar boyunca ince bir ayrılma çizgisi oluşur ve ilk kışta su o çizgiden altına iner. Yamanın erken bozulmasının sebebi çoğu zaman malzeme değil, işte bu kenardır. Bu yüzden kesim hattını kazı genişliğinden biraz dışarı alıyor, kenarı dik bırakıyoruz. Bozuk bir yama yenilenecekse de kesim, gevşemiş malzemenin bittiği yerden değil sağlam kaplamadan yapılır; bu bazen ilk bakışta düşünülenden geniş bir alan demektir. Kenarı doğru çıkmış bir hendek, üstüne serilen malzemeye hakkını verir.',
      },
      {
        baslik: 'Disk Seçimi ve Suyun İşlevi',
        metin: 'Asfalt aşındırıcı bir malzemedir; segmentin bağlayıcısı yumuşak seçilirse elmaslar körelmeden yuvasından sökülür ve disk hızla biter. Sertleşmiş betonda tersi geçerlidir, orada sert bağlayıcı diski parlatır; disk kesmez, hattın üstünde sürtünür ve makine ilerlemez. Bu yüzden asfaltla beton aynı diskle kesilmez. Parlamış bir disk aşındırıcı bir blok üzerinde açılabilir, ama doğru diskle başlamak her zaman daha ucuza gelir. Su ise iki iş görür: tozu bastırır ve diski soğutur. Kuru kesimde ortaya çıkan silis tozu sağlık açısından ciddi bir konudur, açık alanda bile ondan kaçınıyoruz. Su kesildiğinde disk gövdesi ısınıp çarpılır, hat kaçmaya başlar. Saha betonunda hasır çeliğe rastlanırsa ilerleme yavaşlatılır; zorlamak hem diski hem donatının çevresindeki betonu bozar.',
      },
    ],
    sss: [
      {
        q: 'Kesimden sonra kazıyı da siz yapıyor musunuz?',
        a: 'Kesim ve kaplamanın sökümü bizde. Kazı, boru döşeme ve dolgu genellikle altyapı yüklenicisinin işi oluyor; istenirse kırma ve söküm tarafını da üstleniyoruz. Kapsamı keşifte netleştirip teklifte tek tek yazıyoruz, böylece iki ekip arasında sahipsiz kalan bir kalem olmuyor. Kesim çamurunun ve sökülen kaplama parçalarının kaldırılması her hâlükârda bizim üzerimizde.',
      },
      {
        q: 'Kesim sırasında altyapı hattına zarar verme riski var mı?',
        a: 'Testere verilen derinlikten aşağı inmez, o yüzden derinliği kaplama kalınlığına göre ayarlıyoruz. Asıl risk, projesinden daha sığ geçmiş kablo ve borulardır. Hat bilgisi bulunan yerlerde güzergâhı kesimden önce kontrol ediyor, şüpheli noktalarda derinliği kademeli veriyoruz. Doğal gaz hattına yakın çalışmalarda dağıtım şirketinin usulüne uyuyoruz. Bilinmeyen bir hat varsa kesime devam etmeden idareye haber veriyoruz.',
      },
      {
        q: 'Yolu trafiğe kapatmak gerekiyor mu?',
        a: 'Çoğu işte tam kapatma gerekmiyor; çalışılan şerit koni ve levhayla ayrılıyor, trafik diğer şeritten akıyor. Yoğun güzergâhlarda gece çalışmak belirgin şekilde daha az sorun çıkarıyor. Kapatma veya şerit daraltma izni işin sahibine ait oluyor; biz çalışma saatini o izne göre planlıyor ve sahayı açık bırakmadan ayrılıyoruz. Uzun hatlarda yolu tek seferde değil bölüm bölüm kesmek, trafiği sürekli akıtmak açısından daha rahat oluyor.',
      },
      {
        q: 'Beton zemin, kaldırım ve bordür de kesiyor musunuz?',
        a: 'Evet. Aynı makine beton saha, kaldırım plakası ve bordür kesiminde de kullanılıyor; değişen şey disk seçimi ve ilerleme hızı. Bordürde çoğu zaman tam kesim yerine dilimleyip söküm yapmak daha temiz sonuç veriyor. Betonarme bir döşemede tam kesit kesim isteniyorsa iş artık zemin kesimi olmaktan çıkar; eleman taşıyıcıysa, onaylı statik projesi ve mühendis görüşü elimize geçmeden o kesime başlamıyoruz.',
      },
    ],
  },
  'hidrolik-beton-kesme': {
    girisMetni: [
      'Hidrolik beton kesme, kesme başlığının gücünü elektrik motorundan değil, ayrı duran bir hidrolik güç ünitesinden aldığı sistemlerin ortak adıdır. Ünite hortumla başlığı besler. Böylece kesim noktasında duran ekipman küçük ve hafif kalırken arkasındaki güç çok daha yüksek olur. Bu iki özellik, kesitin kalınlaştığı ve sahanın elektriğinin yetmediği işlerde belirleyici hale gelir. Elektrikli bir duvar testeresinin gücünün yetmediği kalın perdeler, temeller ve kütle beton bu yüzden hidrolik düzenle kesilir.',
      'Aynı ünitenin ucuna üç ayrı kesme düzeni bağlanır. Elmas tel, boncuklu bir telin kapalı halka hâlinde dönmesiyle çalışır ve pratikte bir derinlik sınırı tanımaz; kütle beton, kazık başı, kalın perde ve istinat duvarı bu yolla kesilir. Elmas zincir dalma kesim yapabildiği için kare ve dikdörtgen açıklıklarda köşeyi tam çıkarır, kesit dışına taşan bir hat bırakmaz. Ray sistemli disk ise düz ve uzun hatlarda kullanılır.',
      'Bir metreyi aşan kesitlerde yöntem seçimi doğrudan geometriye bağlıdır. Diskle iki yüzden karşılıklı kesim yapılabilir, ancak bunun için elemanın her iki tarafına da erişilmesi ve iki hattın karşı yüzde çakışması gerekir; hatlar kaçarsa kesit tam ayrılmaz, arada ince bir bağ kalır. Tek yüzden ulaşılan kalın bir kütlede ise tel kesimden başka pratik bir yol kalmaz. Teli geçirmek için de karotla giriş delikleri açılır; yani işin ilk adımı çoğu zaman kesim değil, delme olur.',
      'Bu ölçekteki işlerde asıl mesele kesmek değil, kesilen parçanın yapıdan ayrıldığı andır. Taşınan yük bir yere gider ve kalan kesit onu karşılamak zorundadır. Bu yüzden taşıyıcı bir elemanda kesim, statik projesi çıkarılmadan ve yetkili bir mühendis onay vermeden yapılmaz; bu, pazarlık konusu değildir. Bunun dışında iş akışı sade: önce ücretsiz keşif yapılır, sonra fiyat verilir, sonra işe girilir. Teklif kesim geometrisi, blok ağırlıkları, kaldırma planı ve ünitenin konumu hesaplanarak net çıkar; iş yürürken kalem eklenmez. Denizli il genelinde 20 ilçeye gidiyoruz; ekip, ünite ve kesme düzeni sahaya birlikte iniyor.',
    ],
    surec: [
      {
        baslik: 'Kesim Planı ve Onay',
        aciklama: 'Kesitin kalınlığı, donatı durumu ve elemanın taşıyıcı olup olmadığı yerinde değerlendiriliyor. Taşıyıcı sistemde kesim varsa, onaylı detay ve mühendis imzası elimize geçmeden makineyi sahaya kurmuyoruz. Kesim sırası, gerekiyorsa payanda ve geçici destek düzeni de bu aşamada karara bağlanıyor.',
      },
      {
        baslik: 'Ünite ve Hortum Yerleşimi',
        aciklama: 'Hidrolik güç ünitesi kesim noktasına değil, hortum boyunun izin verdiği en uygun yere kuruluyor. Hortumlar, üzerinden araç geçmeyecek ve takılmaya yol açmayacak bir güzergâhtan çekiliyor. Kapalı hacimde çalışılacaksa egzoz tahliyesi burada çözülüyor; su besleme ile çamur toplama hattı da aynı anda kuruluyor.',
      },
      {
        baslik: 'Giriş Deliklerinin Açılması',
        aciklama: 'Tel kesimde telin halka olabilmesi için kesim köşelerine karotla giriş delikleri açılıyor. Bu deliklerin eksenleri karşılıklı olarak çakışmalı; kaçık bir delik telin çalışma düzlemini bozar, tel delik ağzına sürtünerek çalışır ve kesim boyunca zorlanır. Zincirle dalma kesimde bu adım gerekmiyor.',
      },
      {
        baslik: 'Bloğun Askıya Alınması',
        aciklama: 'Kesilecek parçanın ağırlığı hacminden hesaplanıyor ve mevcut kaldırma ekipmanının kapasitesiyle karşılaştırılıyor. Kapasite yetmiyorsa blok daha küçük parçalara bölünüyor; bölme hatları kesim planına işleniyor. Askı noktaları ve halat düzeni son kesimden önce hazır oluyor, parça hiçbir aşamada serbest bırakılmıyor.',
      },
      {
        baslik: 'İndirme ve Saha Teslimi',
        aciklama: 'Son kesim tamamlanınca blok askıdan kontrollü biçimde indiriliyor, taşınabilir boyuta getiriliyor ve sahadan çıkarılıyor. Kesme suyu ile çamur toplanıyor; kanala, dereye veya su yatağına akması engelleniyor. Ünite, hortumlar ve kesilmiş parçalar kaldırıldıktan sonra saha temiz hâlde teslim ediliyor.',
      },
    ],
    detaylar: [
      {
        baslik: 'Elmas Tel Kesimde Geçiş Delikleri',
        metin: 'Tel kesim adı üstünde kapalı bir halkayla çalışır; telin elemanın etrafından dolaşabilmesi gerekir. Serbest bir köşede bu kendiliğinden mümkündür, ama gövde içinde kalan bir kesitte telin geçeceği iki delik önceden karotla açılır. Deliğin çapı telin ve boncukların serbestçe geçmesine yetecek ölçüde olmalı; daha önemlisi, eksenleri karşı yüzde birbirini bulmalıdır. Uzun bir kesitte birkaç derecelik açı hatası, deliğin öbür yüzde epeyce kayması demektir. Tel o zaman köşeye sürtünerek çalışır, ısınır ve boncuklar erken dökülür. Bu yüzden delme açısını kılavuz düzenekle sabitleyip ilerledikçe kontrol ediyoruz. Tel dönerken hat üzerinde ve telin kopma yönünde kimse durmaz; o alan baştan boşaltılır ve kesim bitene kadar kapalı tutulur.',
      },
      {
        baslik: 'Yük Yolu, Blok Ağırlığı ve Öngerilme',
        metin: 'Kesilen her parça yapıdan bir yük alır ve kalan kesite bir yük bırakır. Bu yüzden kesim sırası rastgele belirlenmez; hangi parçanın hangi aşamada ayrılacağı, gerekirse payandalamayla birlikte planlanır. Yük altındaki bir elemanda kesim ilerledikçe kesit oturur ve kesim aralığı daralır, tel ya da disk sıkışmaya başlar. Böyle bir durumda aralık takozla açık tutulur, ekipman zorlanmaz. Parça ağırlığı hacminden hesaplanır; betonu yaklaşık 2,4 ton/m³ kabul ederiz ve çıkan rakam kaldırma ekipmanının kapasitesini aşıyorsa blok bölünür. Öngerilmeli ve ard germeli elemanlar tamamen ayrı bir başlıktır: içindeki halat gergindir, kesildiği anda bu enerji boşalır. Böyle bir elemanda kesim yeri, proje müellifinin gösterdiği nokta dışında olamaz.',
      },
      {
        baslik: 'Elektriksiz ve Erişimi Zor Sahalar',
        metin: 'Dizel motorlu güç ünitesi kendi yakıtıyla çalıştığı için şantiye elektriğine bağlı değildir. Kablo çekilemeyen noktalarda, kırsaldaki sulama yapılarında ve henüz enerji verilmemiş tesislerde iş bu sayede yürür. Asıl sınır ünite değil, hortum boyudur; başlığın gidebileceği mesafe hortumla sınırlı olduğundan ünitenin nereye konacağı keşifte belirlenir. Ünite dışarıda kalıp yalnızca hortum içeri girebildiği için, elektrikli bir testerenin sığmayacağı dar bodrum ve şaft boşluklarında da çalışılabiliyor. Basınç altındaki hortum hattına çalışma sırasında dokunulmaz, kaçak görülürse sistem durdurulup basınç alınır. Kapalı hacimlerde dizel ünitenin egzozu ciddiye alınması gereken bir konudur; ya dışarı alınır ya da elektrikli üniteye geçilir.',
      },
    ],
    sss: [
      {
        q: 'Tel mi disk mi kullanılacağına neye göre karar veriyorsunuz?',
        a: 'Kesit kalınlığı ve erişim belirliyor. İki yüzüne birden ulaşılabilen elemanlarda ray sistemli disk karşılıklı kesimle iş görüyor. Tek yüzden ulaşılan ya da bir metreyi belirgin şekilde aşan kütlelerde tel kesim tek pratik yol kalıyor. Köşesi tam çıkması gereken kare açıklıklarda ise zincir kullanıyoruz. Keşifte kesiti ve çevresindeki boşluğu görünce bu seçim netleşiyor.',
      },
      {
        q: 'Kesilen blokları kim kaldırıyor?',
        a: 'Ağırlık hesabını biz yapıyoruz ve kaldırma planını keşifte konuşuyoruz. Blok sahada tartılmaz, hacminden hesaplanır; parça boyutunu da mevcut kaldırma kapasitesine göre belirliyoruz. Sahada uygun kapasitede vinç veya ekskavatör varsa onunla çalışıyoruz, yoksa kaldırma ekipmanı teklifte ayrı kalem olarak görünüyor. Askı noktaları ve indirme rotası kesim başlamadan belirleniyor. Kesilen parçaların sahadan çıkarılması ve nakliyesi işin içinde.',
      },
      {
        q: 'Sahada elektrik yok, jeneratör getirmemiz gerekir mi?',
        a: 'Gerekmiyor, güç ünitesini kendi motoruyla birlikte biz getiriyoruz. Sizden istediğimiz, ünitenin kurulabileceği uygun bir yer ve mümkünse yakında bir su kaynağı. Ünite kesim noktasından ancak hortum boyu kadar uzağa konabildiği için erişimi kısıtlı sahalarda bu mesafeyi keşifte ölçüyoruz. Kapalı alanlarda egzoz tahliyesini, dar geçitlerde de ünitenin taşınma yolunu baştan planlıyoruz.',
      },
      {
        q: 'Hidrolik kesim elektrikli kesimden pahalı mı?',
        a: 'Metre başına maliyeti daha yüksektir; hazırlık uzundur, ünite ve tel/zincir düzeni ayrıca kurulur. Ama bu, işi elektrikli testereyle yapabildiğiniz durumlarda geçerli bir karşılaştırma. Bir metreyi aşan kesitte ya da sahada elektrik yokken elektrikli testere işi bitiremez; alternatif kırıcıyla parçalamaktır ve o da hem daha uzun sürer hem kalan yapıya darbe bindirir. Keşifte hangi yöntemin gerçekten gerektiğini söylüyoruz — hidrolik gerekmiyorsa gereksiz yere önermiyoruz.',
      },
    ],
  },
  'filiz-ekimi': {
    girisMetni: [
      'Filiz ekimi, sertleşmiş bir betonarme elemanın içine sonradan donatı yerleştirip yeni dökülecek betonun demiriyle sürekliliği kurma işidir. Yapı yapılırken bırakılmayan bir donatıyı sonradan eklemenin düzgün yolu budur. Alternatifi, yeni elemanı eskisine sadece dayamaktır; o birleşimde çekme aktarılmaz. Betonun basıncı taşıması tek başına yeterli değildir, birleşimi ayakta tutan şey çekmeyi geçiren demirdir. Ekilen filiz eski betonun içinde kenetlenir, dışarıda kalan boyu yeni donatıyla bindirme yapar. Kısacası filiz ekimi, iki farklı yaşta dökülmüş betonu tek parça gibi çalıştırmayı hedefleyen bir donatı detayıdır.',
      'Filizin çapı, aralığı ve gömme boyu sahada gözle kararlaştırılmaz; statik projeden okunur. Gömme boyu donatı çapıyla birlikte büyür, aynı reçineyle Ø12 ile Ø20 filizin deliği aynı derinlikte açılmaz. Delik çapı da donatı çapından birkaç milimetre büyük seçilir; bu boşluk reçinenin donatıyı çepeçevre sarması içindir ve boşluğun fazlası da azı da aderansı bozar. Taşıyıcı bir kolona, perdeye veya kirişe filiz ekmeden önce mühendis onaylı bir detay istiyoruz. Onaylı detay yoksa o elemanda delik açmıyoruz, işin o kısmını bekletiyoruz.',
      'Filizin tek başına doğru ekilmesi de yetmez. Yükün geçtiği asıl yer, eski beton ile yeni beton arasındaki yüzeydir. O yüzey parlak ve tozluysa filiz tutsa bile birleşim kayar. Bu nedenle yeni beton dökülecek alanı pürüzlendiriyor, çıkan tozu ve gevşek parçaları alıyoruz. Pürüzlendirmenin derecesi de detaya bağlı: bazı işlerde yüzeyi kabaca tırtıklamak yeterken, bazılarında agrega tanesi görünene kadar açmak gerekir. Ekilen donatının beton örtüsü de düşünülmeli; kenara fazla yaklaşan filizin üzerinde yeterli beton kalmaz ve o bölge zamanla korozyona açık hâle gelir.',
      'Denizli il genelinde 20 ilçeye filiz ekimi için gidiyoruz. Güçlendirme şantiyelerinde iş sırası genelde sıkışıktır; filiz ekimi kalıbı ve donatı işini beklettiği için programa göre planlıyoruz. Aynı sahada karot veya kesim işi de varsa ikisini tek programda topluyoruz, ekip ikinci kez gelmiyor. Delme, temizlik ve enjeksiyonu aynı ekip yaptığından ara teslim kaybı olmuyor. İş bitiminde delme çamurunu, yüzey pürüzlendirmeden çıkan beton artığını ve kesilen fazla filiz uçlarını topluyoruz; molozun nakliyesi de bize ait.',
    ],
    surec: [
      {
        baslik: 'Proje Okuma ve Keşif',
        aciklama: 'Sahaya gelip filiz detayını projeden okuyoruz: çap, aralık, gömme boyu ve hangi elemana ekileceği. Varsa güçlendirme raporunu ve kalıp planını da görmek istiyoruz. Betonun durumu, erişim ve delme yönü burada belli oluyor. Keşif ücretsiz. Ardından delik adedi ve derinliği üzerinden tek bir net fiyat veriyoruz; iş sonunda ek kalem çıkmıyor.',
      },
      {
        baslik: 'Donatı Taraması ve Markalama',
        aciklama: 'Delik yerlerini yüzeye markalıyor, mevcut donatının konumunu tarama cihazıyla çıkarıyoruz. Bulduğumuz demir hatlarını yüzeye çiziyoruz. Filiz yeri mevcut bir demire denk geliyorsa, projenin izin verdiği ölçüde kaydırıyoruz. Kaydırma mümkün değilse detayı çizen mühendise soruyoruz. Mevcut donatıyı kesip yer açmak, markalama aşamasında çözülecek bir konu değil, detayın işi.',
      },
      {
        baslik: 'Delme ve Delik Temizliği',
        aciklama: 'Delikleri projedeki derinlikte açıyor, derinliği tek tek ölçüyle doğruluyoruz. Sonra temizlik geliyor: yağsız basınçlı hava ile üfleme, delik çapına uygun tel fırçayla fırçalama, tekrar üfleme. Sulu delinen deliklerde önce yıkama yapıp gereken kurumayı bekliyoruz. Temizliği biten deliği enjeksiyona kadar kapalı tutuyoruz. İçinde toz kalan bir delik, doğru reçineyle bile beklenen yükü taşımaz.',
      },
      {
        baslik: 'Enjeksiyon ve Donatının Sürülmesi',
        aciklama: 'Donatının gireceği derinliği çubuğun üzerine önceden işaretliyoruz; dışarıda kalacak bindirme boyu böyle şaşmıyor. Reçine, boşluk bırakmadan deliğin dibinden dolduruluyor ve uç kademeli geri çekiliyor. Donatı işaretine kadar çevrilerek sürülüyor; ağızdan reçine taşmadıysa delik tam dolmamıştır. Aynı anda çok sayıda deliği doldurup beklemiyoruz. Yukarı yönlü uygulamada çubuk, kürünü alana kadar destekleniyor.',
      },
      {
        baslik: 'Kürlenme ve Kontrol',
        aciklama: 'Kürlenme süresi betonun sıcaklığına bağlı: soğukta uzuyor, sıcakta karıştırdıktan sonraki yerleştirme payı kısalıyor. Süre dolmadan filize yük verilmiyor, üzerine kalıp bağlanmıyor, çevresinde darbe ve titreşim yaratacak iş yapılmıyor. İstenirse hidrolik çekme düzeneğiyle seçilen filizlerde test yapıp sonucu yazılı veriyoruz. Sonrasında delme artığını toplayıp yüzeyi temiz bırakıyoruz.',
      },
    ],
    detaylar: [
      {
        baslik: 'Delik Temizliği: İşin Gerçekten Tuttuğu Yer',
        metin: 'Kimyasal filizde yük, çeliği saran reçineden delik cidarına geçer. Cidarda kalan ince kesme tozu bu geçişi bozar; reçine betona değil, toza yapışır. Temizliğin sırası bellidir: üfle, fırçala, tekrar üfle. Fırça delik çapına uygun olmalı, küçük kalan fırça cidara değmeden döner ve hiçbir şey yapmaz. Basınçlı hava da yağsız olmalı; kompresörden gelen yağ zerresi aderansı düşürür. Delik dibinde kalan gevşek toz ayrıca enjeksiyon sırasında reçinenin önünde birikir ve donatının dibe tam oturmasını engeller. Sulu delme yapıldıysa delik önce yıkanır, sonra ürünün istediği kuruluğa gelmesi beklenir. Sahada en sık gördüğümüz hata, deliğe bir iki kez üfleyip geçmek. İkinci sık hata, elmas uçla açılmış çok düz cidarlı bir deliğe standart uygulama yapmak; o yüzeyin aderansı matkap deliğine göre düşüktür ve ayrı tedbir ister.',
      },
      {
        baslik: 'Gömme Boyu, Aralık ve Yeni Betona Bindirme',
        metin: 'Filizin iki boyu vardır: betonun içinde kalan gömme boyu ve dışarıda kalan bindirme boyu. Gömme boyu, o donatının eski betonda kenetlenmesi için gereken uzunluktur ve projeden gelir; çap büyüdükçe uzar. Dışarıda kalan kısım ise yeni dökülecek elemanın donatısıyla bindirme yapacak kadar olmalıdır. Kısa kalan filizler sahada en çok geri dönülen konudur, çünkü kalıp aşamasına gelindiğinde düzeltmesi zordur. Kalıp planı ile filiz planını dökümden önce üst üste koymak, bu sürprizlerin çoğunu daha delik açılmadan bitirir. Filizler arası aralık da rastgele değildir: birbirine çok yaklaşan filizlerde gerilmenin yayıldığı beton bölgeleri çakışır ve grubun toplam kapasitesi, tek tek toplamın altında kalır. Kenara yakın ekilen filizde ise üzerinde kalan beton örtüsü hem kapasite hem korozyon açısından yeterli olmalıdır.',
      },
      {
        baslik: 'Kürlenme Süresi ve Çekme Testi',
        metin: 'Filizde kürlenmenin karşılığı nettir: kür tamamlanmadan o filizin üzerine kalıp bağlanmaz, yeni beton dökülmez. Süreyi belirleyen hava değil betonun sıcaklığıdır; soğukta uzar, sıcak günlerde reçine delikte daha çabuk jelleşir. Kürünü almamış bir filizi zorlamak geri dönüşü olmayan hatadır, o delik sökülüp yeniden açılmadan düzelmez. Çekme testi ise filizin öngörülen yükü taşıdığını yerinde gösteren tek yöntemdir. Hidrolik düzenek donatıyı belirlenen yüke kadar çeker; filiz kaymadan yükü tutuyorsa uygundur. Test kaymayı ölçtüğü için aslında yalnızca reçineyi değil, deliğin temizliğini ve gömme boyunu da dolaylı olarak sorgular. Test yükü ve kaç filizin test edileceği projeden ya da kontrol teşkilatından gelir; biz kendimiz bir oran belirlemiyoruz, sonucu yazılı veriyoruz.',
      },
    ],
    sss: [
      {
        q: 'Filiz ektikten ne kadar sonra beton dökebiliriz?',
        a: 'Kürlenme süresi dolmadan olmaz. Bu süre reçinenin cinsine ve betonun sıcaklığına göre değişir; ürünün kendi tablosundan okunur, tahminle belirlenmez. Soğuk havada beklenmesi gereken süre belirgin şekilde uzar. Kür süresi ile reçinenin yerleştirme payı da farklı şeylerdir, ikisini karıştırmamak gerekir. Erken kalıp bağlamak ya da filize asılmak, henüz mukavemetini almamış reçineyi zorlar ve o filizin kapasitesini kalıcı olarak düşürür. Süreyi sahada biz söylüyoruz, döküm programını ona göre kurun.',
      },
      {
        q: 'Delikleri sulu açtınız, ıslak delikte reçine tutar mı?',
        a: 'Tutar ama koşulu var. Islak, hatta su dolu delikte kullanılabilen reçineler ayrıdır; eldeki ürün buna uygun değilse delik kurutulmadan enjeksiyon yapılmaz. Islak delikte kürlenme süresi de uzar. Ayrıca su ile delmek deliği kendiliğinden temizlemez: çamurlaşan kesme tozu cidara yapışır, fırçalanmadığında kuruyup ince bir tabaka bırakır. Yani sulu delinen delikte temizlik daha önemlidir, daha kolay değil. Uygun reçine ve doğru temizlikle ıslak delikte de güvenli bağlantı kurulur.',
      },
      {
        q: 'Her filize çekme testi yapılıyor mu?',
        a: 'Hayır, her filize yapılmaz; gerekli de değildir. Test, seçilen belirli sayıda filiz üzerinde yapılır ve o partinin uygulamasını temsil eder. Kaç adet test edileceği ve hangi yükte tutulacağı projede ya da kontrol teşkilatının talimatında yazar. Test yapılacaksa çekme düzeneğinin oturacağı alanın boş bırakılması gerekiyor. Talep ederseniz testi yapıp sonucu yazılı veriyoruz. Projede test istenmiyorsa da açılan delik derinliklerini ve temizlik adımlarını kayıt altına alıyoruz.',
      },
      {
        q: 'Kolon mantolamada filizler kolonun kendisine mi ekiliyor?',
        a: 'Mantolama detayına göre değişir. Bazı detaylarda gömlek donatısı, mevcut kolona ekilen filizlerle bağlanır. Bazılarında ise asıl aktarım alt ve üst döşemeye ekilen filizlerle sağlanır, kolonun gövdesi mümkün olduğunca delinmez. Hangisinin geçerli olduğunu detayı çizen mühendis belirler; detay elinizde yoksa filiz düzenini biz belirlemiyoruz, önce projeyi görmek istememizin sebebi bu. Mevcut kolonun taşıyıcı donatısını kesmeyi gerektiren bir düzeni, projede öyle yazmıyorsa uygulamıyoruz.',
      },
    ],
  },
  'ankraj': {
    girisMetni: [
      'Ankrajda asıl mesele saplamanın kendisi değil, o saplamanın betona hangi yolla yük aktardığıdır. Çelik bir ayağın altındaki taban plakası, üzerindeki yükü ankrajlarda toplar; ankrajlar da bu yükü çevresindeki betona dağıtır. Göçme çoğu zaman çelikten değil, betondan gelir: saplama sapasağlam durur, etrafındaki beton parçası koparak ayrılır. Bu yüzden ankraj seçerken önce betonun durumuna, kenara olan mesafeye ve gömme derinliğine bakıyoruz. Beton ne kadar sağlamsa ve ankraj kenardan ne kadar uzaksa aynı saplama o kadar yük taşır; çap bu üçünün sonucunda çıkar.',
      'İki temel yöntem var. Mekanik ankraj, deliğe sürülen gövdenin sıkma sırasında genleşip beton cidara kilitlenmesiyle çalışır; sıkıldığı anda yük alır, kür beklemez ve bağlantı sonradan sökülebilir, gövde betonda kalır. Kimyasal ankrajda ise saplama, deliğe enjekte edilen reçineyle betona kenetlenir. Genleşme basıncı üretmediği için kenara yakın ve birbirine yakın noktalarda daha rahat çalışılır. Karşılığında kür süresi vardır ve temizlenmemiş bir delik kapasiteyi doğrudan düşürür. Aynı işte ikisinin bir arada kullanıldığı da olur; her nokta kendi koşuluna göre değerlendirilir.',
      'Ankrajın yeri her zaman serbest değildir. Taban plakasındaki delik düzeni bir noktada çıkar, betondaki donatı ve eleman kenarı başka yerde biter; ikisi çakışmadığında ya plaka ya ankraj planı değişir. Mevcut donatıyı keserek yer açmak, taşıyıcı bir elemanda sahada verilecek bir karar değil; statik proje ve mühendis onayı gerektiren bir müdahaledir. Bu kontrolü delik açılmadan yapmak şart, çünkü kesilen bir donatıyı geri almanın yolu yok. Onay yoksa noktayı kaydırıyor, olmuyorsa detayın revizyonunu istiyoruz.',
      'Yükün cinsi de seçimi değiştirir. Sabit bir konsol yükü ile titreşen bir makine kaidesi aynı ankrajı kaldırmaz. Titreşim altında genleşmeli ankrajın ön germesi zamanla düşebildiği için kaide işlerinde tip seçimi ve sıkma momenti kontrolü ayrıca konuşulur. Dış cephede, çatıda ve nemli ortamda malzemenin galvaniz ya da paslanmaz olması gerekir; içeride sorun çıkarmayan kaplamasız bir saplama açıkta korozyonla dişinden zayıflar. Somunun, pulun ve plakanın da ankrajla aynı korozyon sınıfında olması gerekir.',
    ],
    surec: [
      {
        baslik: 'Yük ve Zemin Değerlendirmesi',
        aciklama: 'Önce ne bağlanacağını ve o bağlantıya hangi yükün geleceğini konuşuyoruz: çelik ayak mı, makine kaidesi mi, korkuluk mu. Kaide işlerinde makinenin titreşim yapıp yapmadığını da soruyoruz. Sonra betona bakıyoruz; eleman kalınlığı, kenara mesafe, görünen çatlak var mı. Bu üçü, ankrajın mekanik mi kimyasal mı olacağını ve gömme derinliğini belirliyor.',
      },
      {
        baslik: 'Ankraj Planı ve Tarama',
        aciklama: 'Delik yerlerini taban plakasına veya montaj şablonuna göre işaretliyoruz; markalamayı delmeye başlamadan iki kez ölçüyoruz, çünkü yanlış işaretlenen bir nokta delik açıldıktan sonra düzelmiyor. Ardından tarama cihazıyla mevcut demirlerin konumunu çıkarıyoruz. Delik bir donatıya denk geliyorsa noktayı, kenar mesafesini bozmayacak kadar kaydırıyoruz.',
      },
      {
        baslik: 'Delme ve Delik Hazırlığı',
        aciklama: 'Delik çapını ve derinliğini ankrajın kendi tablosuna göre açıyor, derinliği ölçüyle doğruluyoruz. Elemanın karşı yüzüne çıkmamak için derinlik sınırına dikkat ediyoruz. Mekanik ankrajda dipte biriken toz gövdenin tam oturmasını engellediğinden delik biraz fazla derin açılır ve dibi boşaltılır. Kimyasalda cidar temizliği üfleme, fırçalama ve tekrar üflemeyle yapılır.',
      },
      {
        baslik: 'Montaj ve Sıkma',
        aciklama: 'Kimyasal ankrajda reçine dipten doldurulur, saplama döndürülerek sürülür ve kür boyunca hareket ettirilmez. Mekanik ankrajda gövde yerine oturtulur, plaka takılır ve sıkma momenti tork anahtarıyla verilir. Tork değeri ankrajın kendi dokümanından okunur, komşu işten hatırlanmaz. Gözle sıkmak burada işe yaramıyor: az sıkma yükü aktarmaz, fazla sıkma segmanı kaydırır.',
      },
      {
        baslik: 'Kontrol ve Teslim',
        aciklama: 'Kür gerektiren ankrajlarda süre dolmadan plaka yüklenmiyor. Plaka altında boşluk varsa tesviye harcıyla dolduruyoruz; boşlukta duran plaka ankrajı eğilmeye zorlar. Sıkma momentlerini son bir kez gözden geçiriyoruz, isteyen işverene hangi ankrajın hangi torkla sıkıldığını yazılı veriyoruz. Delme tozunu, artık malzemeyi ve ambalajı sahadan alıyoruz; plaka çevresi temiz kalıyor.',
      },
    ],
    detaylar: [
      {
        baslik: 'Mekanik mi Kimyasal mı: Nerede Hangisi',
        metin: 'Mekanik ankraj betonu içeriden iterek tutar. Bu itme, kenara yakın bir bölgede betonu zorlar; kenar mesafesi kısıtlıysa ilk elenen seçenek genelde odur. Buna karşılık şantiye şartlarında hızlıdır ve sıkıldığı anda yük alır; bağlantı sökülebilir, ancak gövde betonda kaldığı için deliğin yeri değişmez. Kimyasal ankrajda genleşme basıncı yoktur; yük, reçinenin hem saplamaya hem delik cidarına tutunmasıyla aktarılır. Kenar mesafesi az ya da ankrajlar birbirine yakınsa tercih kimyasaldan yana olur. Çatlak her iki sistemde de kapasiteyi düşürdüğünden, çatlaklı betonda tipi ne olursa olsun bu koşula uygun ürün aranır. Kimyasalda ayrıca kür süresi beklenir; cidarda kalan toz yükün betona geçişini bozar. İnce bir döşemede gömme derinliği elemanın kalınlığını zorlayabilir; orada ürün değiştirmek yetmez, yükü yayan ayrı bir detay gerekir. Delikli tuğla ve boşluklu briket gibi duvarlarda ise reçinenin boşluğa kaçmaması için elek kovan kullanılır.',
      },
      {
        baslik: 'Gömme Derinliği, Kenar Mesafesi ve Koni Kırılması',
        metin: 'Ankrajın kapasitesini çoğu zaman çelik değil, çevresindeki beton belirler. Yük arttığında ankrajın etrafındaki beton koni biçiminde kopar; bu göçme türüne beton koni kırılması denir. Hesapta bu mod için kritik kenar mesafesi gömme derinliğinin 1,5 katı, ankrajlar arası kritik eksenel mesafe ise 3 katı olarak alınır. Bu değerlerin altına inildiğinde koni tam gelişemez ve kapasite azaltılarak hesaplanır; kenara sıkışmış bir ankraj, aynı ürün olsa bile elemanın ortasındaki kadar yük taşımaz. Kenar mesafesi ile gömme derinliği birlikte düşünülür, birini artırıp diğerini yok saymak hesabı kurtarmaz. Kimyasal ankrajda ayrıca aderans göçmesi ayrı bir mod olarak kontrol edilir ve onun kritik mesafeleri bu katsayılarla ifade edilmez. Kenar yetmiyorsa çözüm, noktayı içeri almak veya yükü daha geniş bir plakayla birden fazla ankraja bölmektir.',
      },
      {
        baslik: 'Taban Plakası, Tork ve Bağlantının Ömrü',
        metin: 'Ankraj tek başına çalışmaz, yükü ona getiren taban plakasıyla birlikte çalışır. Plakanın altı düzgün oturmuyorsa yük ankrajlara eşit dağılmaz; en yüksek noktadaki ankraj, payına düşenden fazlasını alır. Bu yüzden plaka altındaki boşluğu tesviye harcıyla dolduruyoruz. Kama ve saç parçalarıyla yükseltilip öylece bırakılmış plakalar, sonradan gevşeyen bağlantıların sık sebeplerinden biri. Somun sıkılırken plakanın bir köşesinin kalkıp kalkmadığına bakmak da en basit ama en çok atlanan kontroldür; kalkıyorsa altındaki dolgu eksiktir. Sıkma momenti gözle verilecek bir şey değildir: mekanik ankrajda tork hem ön germeyi kurar hem genleşmeyi tamamlar. Az sıkılan ankraj yükü aktarmadan önce oynar, fazla sıkılan ise hem segmanı hem çevresindeki betonu zorlar. Titreşimli makinelerde bu moment zamanla düşebildiğinden kaide bağlantılarının aralıklarla kontrol edilmesini öneriyoruz.',
      },
    ],
    sss: [
      {
        q: 'Mekanik ankraj mı kimyasal ankraj mı seçmeliyiz?',
        a: 'Bağlantının yerine ve yüküne bakarak karar veriyoruz. Beton sağlam, kenar mesafesi rahat ve iş hemen yüklenecekse mekanik ankraj hızlı çözümdür. Kenar mesafesi kısıtlıysa, ankrajlar birbirine yakınsa veya gereken gömme derinliği hazır ankrajın boyuna uymuyorsa kimyasala geçiyoruz. Betonda çatlak varsa tip fark etmeksizin çatlamış betonda kullanıma uygun ürün aranır. Bağlantının sökülebilmesi isteniyorsa mekanik, nem ve su varsa buna uygun reçineli kimyasal. Seçim delik derinliğini de belirlediği için kararı keşifte birlikte veriyoruz, tahminle ürün getirmiyoruz.',
      },
      {
        q: 'Ankraj noktası döşeme kenarına çok yakın, sorun olur mu?',
        a: 'Olabilir. Kenara yakın ankrajda beton yükü her yöne eşit dağıtamaz, kenar tarafındaki parça daha kolay kopar ve kapasite düşer. Korkuluk ile bariyer işlerinde bu sık çıkar, çünkü yük yataydır ve tam kenarı zorlar. Kenar mesafesi ölçülürken plakanın kenarı değil, ankrajın ekseni esas alınır. Çözüm noktayı içeri almak, yükü daha geniş bir plakayla birkaç ankraja bölmek ya da kimyasala geçmektir. Ölçüp yerinde söylüyoruz.',
      },
      {
        q: 'Taban plakasının altında boşluk kaldı, dolgu şart mı?',
        a: 'Şart. Boşlukta duran plaka, yükü saplamaların serbest kalan boyuna eğilme olarak bindirir; saplama çekmenin yanında eğilmeye de çalışır ve bu, hesapta olmayan bir zorlanmadır. Ayrıca sıkma sırasında plaka oturmaya devam ettiği için tork kararsız kalır. Doğrusu, plakayı tesviye harcıyla boşluksuz oturtmak, harç priz aldıktan sonra yüklemektir. Kama ve saçla yükseltip bırakmak geçici bir çözümdür; kalıcı bir kaidede kullanılmaz.',
      },
      {
        q: 'Ankraj işini adet üzerinden mi fiyatlandırıyorsunuz?',
        a: 'Adet ana kalem ama tek başına yetmiyor. Saplama çapı, gömme derinliği, betonun sertliği, çalışma yüksekliği ve işin mekanik mi kimyasal mı olduğu fiyatı değiştiriyor. Fiyat vermeden önce ankraj adedini ve tipini yazılı olarak teyit ediyoruz. Keşif ücretsiz; yerinde bakıp hepsini kapsayan tek bir fiyat söylüyoruz ve sonradan yeni kalem eklemiyoruz. Denizli il genelinde 20 ilçeye gidiyoruz, yol da bu fiyatın içinde.',
      },
    ],
  },
  'kimyasal-dubel': {
    girisMetni: [
      'Deliğe basılan reçine sertleştiğinde saplamayla beton arasında sürekli bir yapışma yüzeyi oluşur; kimyasal dübelde yükü tutan şey sıkışma değil, bu yüzeydir. Bu yüzden kimyasal dübel bir malzemeden çok bir uygulama disiplinidir: aynı reçine, aynı saplama ve aynı beton, iki farklı elde iki farklı taşıma kapasitesi verir. Kenar mesafesinin dar olduğu, genleşme basıncının betonu çatlatma riski taşıdığı, donatının sıkışık geçtiği ya da gömme derinliğinin standart bir dübelin sunamayacağı kadar arttığı işlerde başka bir seçenek zaten kalmaz. Yöntemi seçtiren şey alışkanlık değil, bağlantı noktasının kendi koşullarıdır: neyin, nereye, hangi yükle bağlanacağı.',
      'Bir kimyasal bağlantı üç yoldan göçebilir. Çelik saplama kopar, reçine delik cidarından sıyrılır ya da saplamayla birlikte koni biçiminde bir beton parçası yerinden çıkar. İyi kurgulanmış bir bağlantıda hedef, en zayıf halkanın çelik olmasıdır; çünkü çelik göçmeden önce uzar, haber verir. Sıyrılma ve koni göçmesi ise habersiz gelir. Gömme derinliği, kenara olan mesafe ve saplamalar arası açıklık tam olarak bu iki modu uzak tutmak için hesaplanır. Bu üç değeri sahada göz kararı değiştirmek bağlantıyı güçlendirmez; sadece hangi modun devreye gireceğini değiştirir.',
      'Saplama ya da filiz taşıyıcı bir kolona, perdeye veya kirişe gidiyorsa delik yeri, çapı ve derinliği projeden gelir. Taşıyıcı elemanda delik açabilmek için elimizde onaylanmış bir statik proje ve sorumlu mühendisin imzası olması gerekir; bunlar yoksa işe başlamıyoruz. Onay geldiğinde delme hattını donatı tarama cihazıyla işaretliyor, mevcut etriye ve boyuna donatıyı kesmeden geçecek bir güzergâh çıkarıyoruz. Donatıyı kesip geçen bir delik, kâğıt üzerinde doğru olan ankrajı sahada tartışmalı hale getirir. Gerekirse delik birkaç santim kaydırılır ve bu kaydırma proje sorumlusuna bildirilir.',
      'Çalışma şeklimiz her işte aynı: önce ücretsiz keşif, sonra tek kalemde net fiyat, sonra iş. Kaç delik, hangi çap, hangi derinlik ve kaç kartuş reçine gerektiği keşifte belli olduğu için iş bittiğinde faturaya yeni bir satır eklenmez. Denizli il genelindeki ilçelerin tamamına gidiyoruz. Aynı sahada birden fazla bağlantı varsa hepsini tek gelişte bitirecek şekilde planlıyoruz. Uygulama bitince delme artığı, boş kartuşlar ve karıştırıcı uçlar bizde kalır; çalıştığımız noktayı süpürüp öyle çıkıyoruz.',
    ],
    surec: [
      {
        baslik: 'Yerinde Değerlendirme',
        aciklama: 'Bağlantının nereye, hangi yükle oturacağına bakıyoruz: beton yaşı ve durumu, yüzeydeki çatlaklar, kenar mesafesi, komşu saplamaların açıklığı ve varsa proje detayı. Taşıyıcı bir elemana gidiyorsa statik onay olmadan ilerlemiyoruz. Çıkan tabloya göre reçine tipi, saplama çapı ve gömme derinliği belirleniyor; fiyat da bu aşamada netleşiyor.',
      },
      {
        baslik: 'Delik Açma',
        aciklama: 'Delik yerleri işaretlenip donatı taraması yapılıyor, gerekiyorsa hat kaydırılıyor. Delik çapı ve derinliği kullanılacak reçinenin kendi tablosuna göre seçiliyor; saplama çapına göre göz kararı büyütülmüyor. Derinlik delme sırasında ölçülerek kontrol ediliyor, delik dibinde biriken tozun derinliği yanıltmaması için ölçüm temizlikten sonra tekrarlanıyor.',
      },
      {
        baslik: 'Delik Temizliği',
        aciklama: 'Reçinenin tutunacağı yüzey delik cidarıdır; üzerinde ince bir toz filmi kalırsa bağ o filmin üstünde kurulur ve yük geldiğinde sıyrılır. Basınçlı hava ile üfleme, delik çapına uygun tel fırça ile fırçalama ve tekrar üfleme sırası, reçinenin dokümanında yazan tekrar sayısınca uygulanıyor. Islak delikte bu sıra değişiyor.',
      },
      {
        baslik: 'Enjeksiyon ve Yerleştirme',
        aciklama: 'Kartuş takıldıktan sonra statik karıştırıcıdan ilk çıkan, henüz karışmamış malzeme atılıyor. Delik dibinden başlanıp tabanca geri çekilerek dolduruluyor; derin deliklerde uzatma hortumu, tavan uygulamalarında tıkaç kullanılıyor. Saplama, hava kabarcıklarını dışarı atmak için çevirerek daldırılıyor ve ağızdan taşan reçine deliğin dolduğunu gösteriyor.',
      },
      {
        baslik: 'Kürlenme ve Yük Kontrolü',
        aciklama: 'Uygulama anındaki beton sıcaklığı kaydediliyor ve kürlenme süresi ona göre belirleniyor. Süre dolmadan somun sıkılmıyor, saplamaya yük bindirilmiyor. Saplamaya kaynak yapılması, ısı reçineye işlediği için kür bitse de tercih edilmiyor; kaynaklı parça montajdan önce hazırlanıyor. Süre dolduktan sonra montaj torku dokümandaki değere göre veriliyor. İşveren isterse örnekleme yöntemiyle çekme testi yapıp sonucu yazılı veriyoruz.',
      },
    ],
    detaylar: [
      {
        baslik: 'Delik Cidarı ve Delme Yöntemi',
        metin: 'Kimyasal dübelde yük, saplamadan reçineye, reçineden delik cidarına aktarılır. Cidar ne kadar pürüzlü ve temizse bağ o kadar iyidir. Kırıcılı matkapla açılan delik doğal olarak pürüzlü kalır. Karotla açılan delikte ise cidar cam gibi düzgün çıkar; bu durumda reçinenin belgesinde karot deliği için ayrı bir değer verilmiş olması ve hesabın o değere göre yapılması gerekir. Islak veya su dolu delikler de aynı mantıkla ayrı bir başlıktır: her reçine bu koşulda onaylı değildir, onaylı olanlarda da temizlik sırası ve yük değerleri farklıdır. Sahada en sık karşımıza çıkan hata da burada: delik doğru çapta, reçine doğru ürün, ama delme yöntemi hesaba hiç girmemiş oluyor.',
      },
      {
        baslik: 'Enjeksiyonda Sık Yapılan Hatalar',
        metin: 'En yaygın hata, kartuşun ilk çıkışını atmadan doğrudan deliğe basmaktır. Statik karıştırıcının ilk kısmından çıkan malzeme iki bileşeni tam karıştırmamıştır ve orası hiç sertleşmez. Sonuç, deliğin dibinde ölü bir bölge kalmasıdır: saplama projedeki derinliğe girmiş görünür, ama gerçek gömme derinliği kısalmıştır. İkinci yaygın hata, tabancayı delik ağzına dayayıp içeriye doğru doldurmaktır; bu şekilde dipteki hava dışarı çıkamaz, üstü dolu görünen deliğin altında boşluk kalır. Doğrusu, ucu dibe kadar sokup geri çekerek doldurmaktır. Üçüncüsü, saplamayı düz itmektir; çevirerek daldırılmayan saplamanın etrafında hava kanalı kalır. Yukarı doğru uygulamalarda tıkaç kullanılmazsa reçine kendi ağırlığıyla geri akar. Bu hataların ortak sonucu aynı: bağlantı dışarıdan sağlam görünür, kapasite eksik çıkar.',
      },
      {
        baslik: 'Sıcaklık, Kürlenme ve ETA Belgesi',
        metin: 'İki süre birbirine karıştırılır. Jel süresi, reçinenin işlenebilir kaldığı süredir; saplamanın o süre içinde yerine oturması gerekir. Kürlenme süresi ise yükün verilebilir hale geldiği andır ve jel süresinin çok üzerindedir. İkisini belirleyen şey ortam havası değil, betonun sıcaklığıdır. Soğukta her iki süre de uzar; kartuşu ceketin altında ısıtmak reçinenin akışkanlığını düzeltir ama betonu ısıtmaz, dolayısıyla kürlenme süresini kısaltmaz. ETA ise reçinenin kendisine ait bir Avrupa teknik değerlendirme belgesidir; firmaya değil ürüne verilir. İçinde hangi beton koşulunda, hangi delik durumunda, hangi sıcaklık aralığında ve hangi gömme derinliğinde hangi yükün geçerli olduğu tablo halinde yazar. Kullanılacak reçineyi bu tabloya bakarak seçiyoruz.',
      },
    ],
    sss: [
      {
        q: 'Uygulamadan sonra ne zaman yük verebilirim?',
        a: 'Kürlenme süresi dolmadan yük verilmez; bu süre reçinenin türüne ve daha da önemlisi betonun sıcaklığına bağlıdır. Sıcak havada kısalır, soğukta uzar. Kürlenme tamamlanmadan somun sıkmak, bağlantıyı test etmek ya da saplamaya yaslanmak, henüz sertleşmemiş reçinenin bağını daha kurulmadan bozar. Uygulama sonrası size hangi saatten itibaren yük verebileceğinizi net olarak söylüyoruz. Bu bilgi ürünün kendi dokümanından gelir, tahminle söylenmez.',
      },
      {
        q: 'Kış aylarında, soğuk havada kimyasal dübel uygulanır mı?',
        a: 'Uygulanır, ama iki koşulla. Kullanılan reçinenin dokümanında yazan en düşük uygulama sıcaklığının altına inilmemiş olması gerekir ve burada belirleyici olan hava değil, delik açılan betonun sıcaklığıdır. Beton, hava ısınsa bile geceden kalan soğuğu uzun süre tutar. İkincisi, kürlenme süresi soğukta belirgin şekilde uzar; bu süreyi kısaltmaya çalışmadan beklemek gerekir. Sıcaklık sınırın altındaysa işi ertelemeyi öneririz; aceleye gelen bir ankraj zaten iki kez yapılır.',
      },
      {
        q: 'Delik ıslaksa veya içinde su varsa uygulama yapılabilir mi?',
        a: 'Ürüne bağlı. Bazı reçineler nemli, ıslak ve hatta su dolu delikte kullanım için değerlendirilmiştir; bazıları yalnızca kuru delik için geçerlidir. Onaylı olanlarda bile bu koşulda taşıma kapasitesi kuru deliğe göre düşer ve temizlik sırası değişir; su dolu delikte hava üflemesi tek başına yetmez. Bodrum perdesi, istinat duvarı veya dış cephe gibi ıslaklık ihtimali olan yerlerde reçine seçimini baştan buna göre yapıyoruz.',
      },
      {
        q: 'Uygulamanın tuttuğunu nasıl anlıyoruz, test yapıyor musunuz?',
        a: 'İsteğe bağlı olarak çekme testi yapıyoruz. Hidrolik bir çekme aparatı saplamaya takılır ve önceden belirlenen bir test yüküne kadar çekilir; saplama kaymadan bu yükü taşıyorsa uygulama kabul edilir. Bütün saplamalar değil, üzerinde anlaşılan oranda örnekleme yapılır. Test yükü keyfi değil, projeden gelen yük üzerinden belirlenir. Sonucu, hangi noktada ne ölçüldüğü belli olacak şekilde yazılı veriyoruz.',
      },
    ],
  },
  'kontrollu-bina-yikimi': {
    girisMetni: [
      'Kontrollü yıkım, bir yapıyı devirmek değil, yapıldığı sıranın tersine sökmektir. Bir binada yük yukarıdan aşağıya akar; yıkım da bu akışı bozmadan, en üstteki yükten başlayarak ilerler. Bitişik nizam yapılarda, dar sokaklarda ve komşusu oturuluyor olan binalarda makineyle iteleyerek yıkma zaten bir seçenek değildir. Bu tür yerlerde yapının hangi elemanının ne zaman alınacağı önceden kâğıt üzerinde belli olur, sahada karar verilmez. Yıkımın kendisi çoğu zaman işin en kısa kısmıdır; asıl iş öncesindeki hazırlıktır.',
      'Sıra hemen her zaman aynı mantıkla kurulur: önce taşıyıcı olmayan her şey. Doğramalar, camlar, iç bölme duvarlar, asma tavan, tesisat ve ahşap alınır; bina taşıyıcı iskeletine indirgenir. Bundan sonrası kat kat aşağı iner: en üst kat döşemesi, kirişler, kolonlar, sonra bir alt kat. Kalan yapının her aşamada kendi başına ayakta durabiliyor olması gerekir. Kısmi yıkımda ve kat indirmede bu hesap daha da kritiktir, çünkü orada bina yıkılmayacak, azaltılmış haliyle kullanılmaya devam edecektir.',
      'Yıkımdan önce tamamlanması gereken bir evrak ve altyapı zinciri var. Belediyeden yıkım ruhsatı alınır; bunun için malik veya maliklerin talebi, binanın boşaltıldığının tespiti ve elektrik, su, doğalgaz aboneliklerinin kapatıldığına dair belgeler istenir. Aboneliklerin kapatılması yetmez; hatların yapıdan fiziken ayrılmış olması gerekir. Yıkıntı atığının nereye döküleceği de baştan belli olmalıdır; moloz, belediyenin gösterdiği döküm sahasına taşınır. Bu zincirin evrak ve teknik kısmında yanınızda oluyoruz, başvuruyu malik adına hazırlamak da mümkün.',
      'Komşu yapıyla ilgili kısım işin en hassas tarafı. Yıkıma başlamadan önce bitişikteki binanın mevcut durumu, varsa çatlaklar, cephedeki izler ve ortak duvarın hali fotoğraflanır, kayda geçer. Sonradan çıkacak bir tartışmada elinizde bu kayıt olur. Fiyatı belirleyen kalemler ise bellidir: kat adedi, yapı tipi, çıkacak yıkıntının hacmi, döküm sahasına mesafe ve makinenin sokağa erişebilmesi. Keşif ücretsiz; bu kalemler yerinde görüldükten sonra verilen rakam yıkımı, yüklemeyi ve nakliyeyi kapsar ve sonrasında değişmez. İl sınırları içindeki her ilçeye gidiyoruz. Saha, kotu düzeltilmiş ve boşluğu emniyete alınmış şekilde bırakılır.',
    ],
    surec: [
      {
        baslik: 'Yapı İncelemesi',
        aciklama: 'Binanın taşıyıcı sistemi belirleniyor: betonarme karkas mı, yığma mı, çelik mi. Kat adedi, döşeme tipi, bodrum durumu, bitişikteki yapıyla ortak duvar olup olmadığı ve makinenin sokakta çalışabileceği alan ölçülüyor. Eski yapılarda asbest içerikli malzeme şüphesi varsa, yetkili söküm yapılmadan yıkıma başlanmıyor.',
      },
      {
        baslik: 'İzin ve Altyapı Kesimi',
        aciklama: 'Yıkım ruhsatı, malik muvafakatleri ve boşaltma tespiti tamamlanıyor. Elektrik, su ve doğalgaz abonelikleri kapatılıp hatlar yapıdan ayrılıyor; kapatma belgeleri dosyaya giriyor. Yıkıntı atığının taşınacağı döküm sahası ve güzergâh belirleniyor. Bu adımlar bitmeden sahaya makine çıkarılmıyor, çünkü kesilmemiş bir doğalgaz hattı yıkımın en tehlikeli kalemidir.',
      },
      {
        baslik: 'Emniyet ve İç Söküm',
        aciklama: 'Yapının çevresi kapatılıyor, yaya ve araç güzergâhı yönlendiriliyor, cepheye düşme koruması ve toz örtüsü çekiliyor. İçeride doğrama, cam, kapı, iç bölme duvar ve tesisat sökülüp ayrıştırılıyor. Bu ayıklama hem yıkım sırasında uçuşacak malzemeyi azaltıyor hem de geri kazanılabilir olanı yıkıntıya karışmadan ayırıyor.',
      },
      {
        baslik: 'Kademeli Yıkım',
        aciklama: 'Yıkım en üstten başlıyor ve kat kat aşağı iniyor. Bitişik cephede kırıcı yerine kesme ve makaslama yöntemleri tercih ediliyor, böylece komşu duvara giden titreşim düşük tutuluyor. Kırım noktası sürekli sulanıyor, rüzgâr yönüne göre çalışma tarafı değiştiriliyor. Kat döşemelerinde moloz biriktirilmiyor; çıkan yıkıntı aşağıya sürekli indiriliyor.',
      },
      {
        baslik: 'Tahliye ve Saha Teslimi',
        aciklama: 'Yıkıntı ayrıştırılıyor: demir ayrılıyor, beton molozu ayrı yükleniyor. Yükleme sırasında da sulama devam ediyor, çünkü tozun en çok kalktığı an burasıdır. Moloz belediyenin gösterdiği sahaya taşınıyor. Sonrasında zemin kotu düzeltiliyor, bodrum boşluğu varsa emniyete alınıyor ve arsa üzerinde yıkıntı bırakmadan çıkılıyor.',
      },
    ],
    detaylar: [
      {
        baslik: 'Yıkım Sırası ve Kalan Yapının Dengesi',
        metin: 'Yıkım sırasını belirleyen tek soru şu: bu elemanı aldığımda üstünde ne kalıyor. Betonarme karkasta yük döşemeden kirişe, kirişten kolona, kolondan temele iner; sıra bu zincirin tersinden kurulur. Yığma yapıda ise durum farklıdır, orada duvarın kendisi taşıyıcıdır ve bir duvarı erken almak komşu duvarı kendi düzlemi dışında yalnız bırakır. Sık yapılan hatalardan biri, sökülen molozu kat döşemesinde biriktirmektir. Döşemeler yığılmış yıkıntı yükü için boyutlanmamıştır; altındaki katta kimse olmasa bile bu yük yapının dengesini bozar. İkinci hata, alt katları erken zayıflatıp üst katları hâlâ ayakta bırakmaktır; o noktadan sonra yıkımın ne zaman ve hangi yöne gideceği kontrol edilemez.',
      },
      {
        baslik: 'Bitişikteki Yapıyla Çalışmak',
        metin: 'Bitişik nizamda iki bina çoğu zaman ortak ya da birbirine yaslanmış bir duvarı paylaşır. Yıkılan bina gidince o duvarın bir yüzü ilk kez dışarı açılır; içinde baca boşlukları, eski tesisat izleri ve hiç yalıtım görmemiş bir yüzey çıkar. Bu yüzeyin geçici olarak örtülmesi ve yağmura karşı korunması yıkımın parçasıdır, sonraki işe bırakılmaz. Titreşim tarafında ise yöntem seçimi belirleyici: bitişik cepheye yakın bölgede kırıcı yerine elmas diskli kesim ve beton kırma makası kullanılır, çünkü bunlar darbe yükü yerine sıkıştırma ve kesme etkisi üretir. Yıkım öncesi komşu yapının mevcut çatlaklarının fotoğraflanması da bu yüzden önemli; sonradan hangi hasarın kime ait olduğu ancak böyle ayrışır.',
      },
      {
        baslik: 'Toz Bastırma ve Yıkıntı Yönetimi',
        metin: 'Toz üç ayrı noktada kalkar: kırım anında, moloz yığınının üstünde ve kamyona yükleme sırasında. Sadece kırım noktasını sulamak yetmez; en yoğun toz çoğu zaman yükleme sırasında çıkar. Bu yüzden sulama yıkım boyunca değil, saha boşalana kadar sürer. Rüzgâr yönü de hesaba girer: komşu binanın açık penceresine ya da yola doğru esiyorsa çalışma tarafı değiştirilir, gerekirse o saat beklenir. Yüksek katlardan malzeme serbest atılmaz; moloz kanalı ya da makineyle indirme kullanılır. Yıkıntının kendisi tek bir yığın değildir: demir ayrıştırılır, ahşap ve cam ayrı toplanır, beton molozu ayrı yüklenir. Ayrıştırılmış yıkıntının taşınması hem daha ucuzdur hem de döküm sahasında sorun çıkarmaz.',
      },
    ],
    sss: [
      {
        q: 'Yıkım ruhsatını kim alıyor?',
        a: 'Ruhsat malik ya da maliklerin adına, taşınmazın bağlı olduğu belediyeden alınır; başvuru sahibi mülk sahibidir. Biz bu süreçte teknik tarafı üstleniyoruz: istenen bilgileri hazırlıyor, eksik evrakı söylüyor ve başvuruyu takip ediyoruz. Aboneliklerin kapatılması ve hatların ayrılması da bu aşamanın parçası. Ruhsat çıkmadan yıkıma başlanmaz; hem yasal sorumluluk doğar hem de komşu ilişkileri açısından savunulacak bir tarafınız kalmaz.',
      },
      {
        q: 'Bitişikteki binaya zarar gelirse ne oluyor, öncesinde bir tespit yapılıyor mu?',
        a: 'Yıkımdan önce bitişik ve komşu yapıların dış durumu fotoğraflanıp kayda alınır: mevcut çatlaklar, sıva dökülmeleri, cephe izleri. Bu kayıt olmadığında, yıkımdan sonra görülen her çatlak tartışma konusu olur; oysa çoğu zaten önceden vardır. Çalışma sırasında bitişik cepheye yakın bölgede titreşim üreten yöntemlerden kaçınıyor, ortak duvarın açığa çıkan yüzeyini örtüyoruz. Yani hem önlem alınıyor hem de öncesi belgeleniyor.',
      },
      {
        q: 'Binanın tamamını yıkmadan sadece üst katları aldırabilir miyiz?',
        a: 'Alınabilir, buna kat indirme diyoruz. Ama tam yıkımdan daha dikkat isteyen bir iştir, çünkü geriye kullanılmaya devam edecek bir yapı kalıyor. Kalan katların taşıyıcı sistemi, indirilen katın yükü kalktıktan sonraki durumu ve en üstte açıkta kalacak kolon başlarının nasıl kapatılacağı önceden çözülmüş olmalı. Bu yüzden kat indirme, hesabı yenilenmiş bir projeye ve yetkili bir inşaat mühendisinin onayına bağlı; bu olmadan işe girmiyoruz. Onay varsa uygulama tarafını biz yürütüyoruz.',
      },
      {
        q: 'Yıkım sırasında sokak kapatılıyor mu, komşuların evden çıkması gerekiyor mu?',
        a: 'Komşu binaların boşaltılması genelde gerekmez; boşaltılması gereken, yıkılacak binanın kendisidir. Sokak tarafında ise yapının cephesi boyunca bir düşme alanı vardır ve o şerit yaya ile araç trafiğine kapatılır. Dar sokaklarda bu, günün belirli saatlerinde kısa süreli tam kapama anlamına gelebilir; gerekirse belediyeden geçici trafik düzenlemesi isteriz. Komşulara çalışma günlerini ve saatlerini önceden bildirmek, sonradan çıkacak şikâyetlerin çoğunu ortadan kaldırıyor.',
      },
    ],
  },
}

export default serviceContent
