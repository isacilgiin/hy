/**
 * Blog yazılarının TAM METNİ.
 *
 * Yalnızca /blog/<slug>/ sayfası açıldığında iniyor (BlogPost.jsx ayrı bir
 * lazy parça). Blog listesi ve diğer sayfalar bu dosyayı çekmez.
 *
 * DÜZELTME (2026-08-13): "BU DOSYA ÜRETİLİR" yazıyordu; öyle bir üretici ya da
 * kaynak JSON yok, hiç de olmamış. Bu dosya ASIL KAYNAKTIR, elle düzenlenir.
 * Gerekçesi blog.js'in başında.
 */

const blogContent = {
  "beton-kesme-nasil-yapilir": {
    "seoTitle": "Beton Kesme Nasıl Yapılır? Duvara Kapı Boşluğu Açma",
    "giris": [
      "Bir duvara kapı ya da pencere boşluğu açtırmak dışarıdan tek bir işlem gibi görünür. Ekip gelir, keser, gider. Oysa sahada işin en kısa aşaması diskin duvara dokunduğu andır. Ondan önce duvarın ne olduğunun, içinden hangi tesisatın geçtiğinin ve serbest kalacak parçanın nereye ineceğinin çözülmüş olması gerekir. Bu sırayı atlayan işler kesim bittikten sonra sorun çıkarır.",
      "Beton kesme, betonarme bir elemanı parçalamadan, elmas segmentli bir diskle önceden çizilen hat boyunca ikiye ayırma işidir. Kırıcı betonu darbeyle dağıtır, kenarı düzensiz bırakır, titreşimi çevredeki betona taşır. Disk ise malzemeyi aşındırarak ilerler, geriye düz ve tanımlı bir kenar kalır. Kapı ile pencere boşlukları tam bu farkın işe yaradığı yerdir: açıklık açıldıktan sonra geriye kalan duvarın sağlam bir kenarı olmak zorunda.",
      "Aşağıda açıklık açma işinin sahadaki sırasını anlatıyorum. Ray sistemli testere nasıl çalışır, hat nasıl işaretlenir, su ve çamur ne olur, kesilen parça nasıl iner. Denizli merkezde ve ilçelerde en sık karşılaştığımız durum ise kesime hazır sanılan bir duvarın taşıyıcı çıkması. O yüzden en uzun bölümü buna ayırdım; geri kalanı teknik iş, o kısım doğrudan binanın güvenliğiyle ilgili."
    ],
    "bolumler": [
      {
        "baslik": "Ray Sistemli Duvar Testeresi ve Elmas Disk Nasıl Çalışır",
        "paragraflar": [
          "Elmas disk, çelik bir gövdenin çevresine dizilmiş segmentlerden oluşur. Segmentlerin içinde metal bir bağlayıcının tuttuğu sentetik elmas taneleri vardır. Disk betonu keskin bir ağızla kesmez, aşındırarak ilerler: elmas taneleri hem çimento harcını hem agregayı hem de karşısına çıkan donatıyı öğütür, bağlayıcı aşındıkça alttaki taneler açığa çıkar. Bu yüzden disk zamanla körelmez, tükenir. Betonun sertliğine ve donatı yoğunluğuna göre farklı segment yapıları kullanılır.",
          "Duvar kesme işinde sonucu belirleyen makinenin gücü değil, üzerinde yürüdüğü ray. Testere, duvara dübellenen bir kızak üzerine oturur ve hat boyunca motorla ilerler. Serbest elle yapılan kesimlerde disk donatıya girdiği anda hattan kaçar, yüzeyde dalgalanma bırakır; rayda böyle bir sapma olmaz, kesim baştan sona aynı çizgide kalır. Tek yüzden inilebilen derinlik disk çapının yarısından biraz azdır, çünkü diskin göbeği ve flanşı duvarın içine girmez. Kalın kesitlerde aynı hat karşı yüzden ikinci kez kesilir; iki yüzden çalışarak 600 mm kalınlığa kadar iniyoruz.",
          "Disk tek hamlede tam derinliğe dalmaz. Her geçişte birkaç santim daha inerek hat boyunca gider gelir. Böylece motorun yükü dengede kalır, donatıya girildiğinde disk hattan sapmaz. Kesim boyunca hatta su verilir: su segmenti soğutur, artığı dışarı taşır, tozu daha havaya kalkmadan bastırır."
        ]
      },
      {
        "baslik": "En Kritik Soru: Kesilecek Duvar Taşıyıcı mı?",
        "paragraflar": [
          "Bir binada her duvar aynı işi yapmaz. Kolon, perde, kiriş ve döşeme yapının kendi ağırlığını, üstündeki katları ve deprem sırasında gelen yatay kuvvetleri taşır. Dolgu duvar ise sadece mekânı böler ve kendi ağırlığını taşır. Taşıyıcı bir perdeye açılan boşluk, o perdenin yatay yük taşıyan kesitini küçültür ve kesilen donatı bir daha eski işini görmez. Kaybolan taşıma gücü yok olmaz, komşu elemanların üzerine biner. En kötü tarafı da şu: bu değişikliğin sonucu kesim günü görünmez, deprem günü görünür.",
          "Peki nasıl anlaşılır? Tek gerçek cevap yapının statik projesidir. Sahadaki ipuçları fikir verir ama hiçbiri tek başına karar vermeye yetmez: duvarın üst ve alt katlarda aynı hizada devam edip etmediği, merdiven ve asansör kovasının çevresi, bodrum katta toprağa dayanan duvarlar, duvarın üstünde bir kiriş olup olmadığı. Şüpheli noktada matkap ya da küçük çaplı karotla pilot delik açılır; çıkan artığın tuğla ve gazbeton tozu mu yoksa agrega ile çimento mu olduğu, donatıya rastlanıp rastlanmadığı görülür. Ancak betonarme çıkması işi bitirmez, çünkü betonarme bir duvarın taşıyıcı perde mi yoksa yalnızca kendi yükünü taşıyan bir eleman mı olduğu yine projeden okunur. Kalınlığa bakarak, komşunun dairesinde aynı duvar kesilmiş diye ya da ustanın gözüne öyle geldiği için karar verilmez.",
          "Duvar taşıyıcı çıktıysa işin teknik kısmı durur, karar mühendise geçer. Açıklığın mümkün olup olmadığını, mümkünse yerini, boyutunu ve gerekiyorsa güçlendirmesini yapının statik projesine bakan yetkili bir inşaat mühendisi belirler. Çelik çerçeve ile kuşatma gibi çözümler bu değerlendirmenin sonucunda çıkar, sahada doğaçlama kurulmaz. Ayrıca taşıyıcı sistemi etkileyen tadilatlar ruhsata tabidir ve apartmanda kat malikleri tarafı da vardır; bunlar teknik konu değil ama işin ayrılmaz parçası. Biz onaylı proje gelmeden bu duvarlarda hat bile çizmiyoruz."
        ],
        "liste": [
          "Kolon, perde ve kirişe statik proje ve yetkili mühendis onayı olmadan hiçbir kesim yapılmaz.",
          "Onay yokken köşesini biraz tıraşlayalım, sadece ince bir kanal açalım türü ara çözüm de yoktur; küçük müdahale diye bir şey yok.",
          "Taşıyıcı elemandaki donatı, yerine ne konacağı projede tanımlanmadan kesilmez.",
          "Perdedeki mevcut bir açıklık, ilk boşluk projeliydi diye kendiliğinden genişletilemez; genişletme yeni bir hesap ister.",
          "Onay çıkmadıysa işi almıyoruz; kesime başlamamak, sonradan geri alınamayacak bir hatadan iyidir."
        ]
      },
      {
        "baslik": "Kesimden Önce: Duvarın İçinden Ne Geçiyor",
        "paragraflar": [
          "Bitmiş bir yapıda tesisatın önemli bölümü duvarın içindedir. Elektrik hattı, temiz su borusu, ısıtma tesisatı, bazı yerlerde doğalgaz. Bunların güzergâhı tesisat projesinde olmalıdır, ama sahada çoğu dairede ya proje yoktur ya da uygulama projeden farklı yapılmıştır. Bu yüzden hat çizilmeden önce duvarın iki yüzü de okunur: priz, anahtar, buat, radyatör ve kombi bağlantısı hepsi ipucudur. Prizden yukarı ya da aşağı inen düşey bir güzergâh, tavandan gelen yatay bir hat çoğu binada standarttır.",
          "İşaretlemeyi tarama takip eder. Şüphe kalan noktalarda kesim hattı üzerinde pilot delik açılır. Kesime başlamadan ilgili sigorta kapatılır, su vanası kapattırılır. Bunun sebebi sadece hattı korumak değil: sulu kesimde yüzey ıslaktır ve kesim çamuru iletkendir, duvar içindeki canlı bir kabloya diskin dokunması ciddi bir tehlikedir. Doğalgaz hattı ihtimali varsa gaz kesilmeden kesime başlamıyoruz, kapatma işlemi de yetkili firmasına aittir.",
          "Kesim hattı bir tesisat güzergâhıyla çakışıyorsa çözüm hattı deplase etmektir ve bu kesim ekibinin değil tesisatçının işidir. Döşeme kesimlerinde aynı konu yerden ısıtma boruları için geçerli. Keşifte bunları yerinde soruyoruz, çünkü işin sırası burada bozulursa gerisi de aksıyor."
        ]
      },
      {
        "baslik": "Kesim Hattının İşaretlenmesi ve Rayın Kurulması",
        "paragraflar": [
          "Hat duvarın iki yüzüne birden çizilir ve iki çizginin birebir çakıştığı kontrol edilir. Bir yüzü ölçüp diğerinde göz kararı devam etmek, iki taraftan kesilen kalın duvarlarda kesitin ortada kaymasına yol açar. Kapı boşluğunda ölçü net açıklıktan ibaret değildir, kasa ve doğrama payı da hesaba katılır. Bu payı doğramacıyla konuşup kesimden önce netleştirmek, sonradan boşluğu birkaç santim büyütmeye çalışmaktan kolaydır.",
          "Köşeler ayrı bir konu. Disk dairesel olduğu için hattın sonuna geldiğinde yüzeydeki çizgiyi bitirir, ama derinlikte köşe tam kesilmemiş kalır. İki çözüm var: ya köşede bir miktar aşırı kesime izin verilir, ya da köşeye karotla delik açılarak kesim tamamlanır. Görünen bir yüzeyde iz istenmiyorsa ikincisi tercih edilir. Bunun kararı kesim başladıktan sonra değil, hat çizilirken verilir.",
          "Ray kurulumu göründüğünden hassas bir iştir. Kızak yüzeye dübellenir, terazisi alınır, testere üzerine oturtulur. Kızak gevşek kalırsa disk ilk donatıda hattan kaçar ve o hatayı sonradan düzeltmek mümkün olmaz. Dübel delikleri kesim bittiğinde duvarda kalır; fayanslı ya da boyalı bir yüzeyde tamiratı doğrudan etkilediği için yerini önceden konuşuyoruz."
        ]
      },
      {
        "baslik": "Su Soğutması ve Kesim Çamurunun Toplanması",
        "paragraflar": [
          "Su kesimin yardımcı unsuru değil, parçasıdır. Segment kesim sırasında hızla ısınır; aşırı ısınan bir segmentte bağlayıcı bozulur, disk gövdesi salgı yapmaya başlar ve kesim hattı bozulur. Su bu ısıyı alır, hatta biriken artığı dışarı taşır ve en önemlisi tozu daha havaya kalkmadan bastırır. Kuru kesimde açığa çıkan ince toz kristal yapıda silis içerir ve kapalı bir mekânda solunması sağlık açısından risklidir. Biz sulu çalışıyoruz, sebebi de bu.",
          "Bu suyun bir bedeli var: kesim çamuru. Su ile beton unu karışınca akıcı ve yapışkan bir artık çıkar, kuruduğunda sertleşir. Parke ile laminatın altına girerse zemin şişer, mermer ve derz lekelenir, gidere verilirse tesisat tıkanır. Bu yüzden alan örtülür, hattın altına toplama seti çekilir, biriken su ıslak vakumla beklemeden alınır. Kat aralarındaki kesimlerde suyun aşağı geçebileceği her boşluk önceden kapatılır. Çamur ve beton parçaları iş bitiminde sahadan çıkarılır."
        ]
      },
      {
        "baslik": "Lento, Parçanın Ağırlığı ve İndirilmesi",
        "paragraflar": [
          "Açıklığın üstünde kalan duvarın ağırlığı bir yere aktarılmak zorunda; mevcut kapı boşluklarında bu işi lento yapar. Yeni açılan bir boşlukta üstte taşıyıcı bir kiriş yoksa lento yapılması gerekir. Genişletilen boşluklarda mevcut lentonun yeni açıklığa yetmemesi sık görülür, çünkü lento iki yandaki oturma payıyla hesaplanır. Dolgu duvarda bile lentonun boyutu keyfî seçilmez; çözüm taşıyıcı sisteme bağlanacaksa iş yine mühendis onayına döner.",
          "Serbest kalacak parçanın ağırlığı çoğu zaman hafife alınıyor. Betonarmenin birim hacim ağırlığı yaklaşık 2,4 ton/m3 kabul edilir. Hesap basit: en çarpı yükseklik çarpı kalınlık çarpı 2,4. Bir metre genişliğinde, 2,1 metre yüksekliğinde ve 20 santim kalınlığında bir kapı boşluğu parçası 0,42 m3 eder, yani yaklaşık bir ton. Bu iki kişinin tutup kenara koyacağı bir yük değil. Bu yüzden büyük açıklıklarda parça tek bırakılmaz, taşınabilir boyutta panellere bölünerek kesilir.",
          "İndirme sırası da kesim planının parçasıdır. Panel son geçişe girmeden önce askıya alınır ya da tabandan takozlanır, parçayı asılı tutan kenar en sona bırakılır. Sahada en sık görülen hata, son geçiş bittikten sonra parçanın kendi kendine yerinde duracağını varsaymak. Yalnızca sürtünmeyle duran bir panel en küçük titreşimde devrilir. Aynı hesap desteğin kendisi için de geçerli: kapasitesi parçanın ağırlığını karşılamayan bir destek yalnızca güven duygusu verir."
        ]
      },
      {
        "baslik": "Kırıcıyla Açmak Yerine Kesim: Fark Nerede",
        "paragraflar": [
          "Kırıcı darbeyle çalışır ve her darbe betonun içine bir basınç dalgası gönderir. Bu dalga kırılan yerde durmaz, çevreye yayılır. Açıklığın kenarında kalması gereken betonda gözle görülmeyen çatlaklar, donatı çevresinde aderans kaybı bırakır. Kesimde ise kuvvet darbe değil aşındırmadır, komşu betona iletilen titreşim çok daha düşüktür. Bitmiş bir yapıda bu fark kendini gösterir: alt katın tavan sıvası, duvardaki fayanslar ve cam, kırıcıyla açılan boşluklarda çok daha fazla zorlanır.",
          "Toz ve gürültü tarafı da aynı yöne çıkıyor. Kırıcı kuru toz üretir ve o toz dairenin her yerine dağılır; sulu kesimde toz kaynağında tutulur, geriye çevresi kapatılmış bir alandaki çamur kalır. Kırıcının gürültüsü darbe kaynaklıdır ve saatlerce sürer, oturulan bir binada komşu tarafındaki karşılığı bu yüzden farklı olur.",
          "Kesim sonrası yüzey işi burada tamamlıyor. Kırılarak açılan bir boşluğun kenarı tırtıklıdır, donatı uçları dışarı çıkar, kasa oturtmadan önce kenar düzeltme ve sıva gerekir. Kesim yüzeyi ise diskin bıraktığı düz bir yüzeydir, çoğu işte doğrudan kasa veya doğrama oturtulabilir. Yine de ray dübel deliklerinde ve köşe tamamlamalarında iz kalır, ince bir rötuş gerekir. Kırıcının da kendi yeri var: hafif bölme duvarlarda ve parçanın yerinde ufalanması gereken durumlarda kullanılıyor. Çoğu işte ikisi birlikte çalışıyor, hat testereyle kesilip iç kısım kırıcıyla alınıyor."
        ]
      }
    ],
    "sss": [
      {
        "q": "Kesim sırasında evde kalabilir miyiz, iş ne kadar sürer?",
        "a": "Tek bir kapı boşluğu çoğu dairede aynı gün içinde biter, ama süreyi belirleyen kesimin kendisi değil hazırlıktır: koruma örtüsü, ray kurulumu, su toplama düzeni ve iş sonundaki temizlik. Kesim saatlerinde evde olmamanızı öneriyoruz, çünkü ilgili elektrik hattı ve su kapalı olur, ortamda nem ve gürültü vardır. Oturulan binalarda komşuları bir gün önceden haberdar etmek işi kolaylaştırıyor. Kesin süreyi keşifte duvarın kalınlığını ve erişim durumunu gördükten sonra söylüyoruz."
      },
      {
        "q": "Duvar taşıyıcı çıktı, şimdi ne yapmam gerekiyor?",
        "a": "İlk adım yapının statik projesine ulaşmak ve projeyi yetkili bir inşaat mühendisine değerlendirtmek; mümkünse projenin müellifine gitmek en sağlıklısı. Mühendis açıklığın mümkün olup olmadığına, mümkünse yerine, boyutuna ve gerekiyorsa güçlendirme detayına karar verir. Taşıyıcı sistemi etkileyen tadilatlar ruhsata tabidir, apartmanda ayrıca kat malikleri tarafı vardır, bu iki adım da kesimden önce tamamlanmalıdır. Onaylı detay elimize geçtiğinde kesim hattını ona göre çiziyoruz; onay yoksa o duvara dokunmuyoruz."
      },
      {
        "q": "Oturduğumuz dairede parke ve seramik var, kesim çamuru zarar verir mi?",
        "a": "Önlem alınırsa vermez, alınmazsa verir. Kritik olan parke ve laminat: suyun altına girmesi durumunda zemin şişer ve geri dönmez, o yüzden kesim hattının çevresi kapatılır ve biriken su beklemeden ıslak vakumla alınır. Seramikte risk daha çok derzin lekelenmesidir, çamur kurumadan alındığında sorun çıkmaz. Duvarın karşı yüzü de örtülür, çünkü kalın duvarlarda kesim iki yüzden yapılır ve o mekân da çalışma alanına dahil olur."
      },
      {
        "q": "Duvar beklediğimizden kalın ya da donatısı yoğun çıkarsa ne değişir?",
        "a": "Kalınlık kesimin hangi sistemle yapılacağını belirler; tek yüzden inilebilen derinlik disk çapının yarısından biraz azdır, kesit bunu aşıyorsa aynı hat karşı yüzden kesilir ya da daha büyük kapasiteli bir sistem gerekir. Donatı yoğunluğu ise süreyi ve segment tüketimini etkiler, ilerleme yavaşlar. Bu iki değişken de fiyatın ve sürenin içinde olduğu için keşifte yerinde ölçüyoruz, tahminle iş almıyoruz. Denizli merkez ve ilçelerde keşif ücretsiz, 0545 678 91 94 numarasından 7/24 ulaşabilirsiniz."
      }
    ],
    "ilgiliHizmetler": [
      "beton-kesme",
      "beton-kirma",
      "karot"
    ]
  },
  "beton-neyle-kesilir": {
    "seoTitle": "Beton Neyle Kesilir? Kalınlığa Göre Makine Seçimi",
    "giris": [
      "Betonu neyle keseceğiniz, betonun ne kadar kalın olduğuna ve nerede durduğuna bağlı. Aynı malzeme için hem elde tutulan küçük bir makine hem de iki kişinin taşıyamadığı bir sistem var; ikisi de doğru, ama farklı işlerde. İnternette bu soru genelde tek bir makine adıyla cevaplanıyor. Sahada öyle olmuyor: 8 santimlik bir şap ile 60 santimlik bir perde arasında yöntem tamamen değişiyor.",
      "Ortak nokta şu: beton kırılarak değil, aşındırılarak kesilir. Elmas segmentli bir disk ya da tel, çimento harcını, agregayı ve karşısına çıkan donatıyı öğüterek ilerler. Kırıcı ise darbeyle dağıtır. Bu yüzden kesimde kenar düz çıkar, titreşim çevre betona taşınmaz ve geriye tamir gerektiren bir yıkım kalmaz. Kesme yöntemleri arasındaki fark da tam olarak bu aşındırmayı ne kadar derine götürebildikleridir.",
      "Aşağıda en küçüğünden en büyüğüne beş yöntemi, hangi kalınlıkta nerede durduklarıyla birlikte anlattım. Sonda iki soruya ayrı yer verdim: perde betonun neden diğerlerinden farklı olduğu ve \"betonu kolay kırmanın yolu\" diye aranan şeyin sahada karşılığının ne olduğu."
    ],
    "bolumler": [
      {
        "baslik": "Spiral (Avuç Taşlama) ile Beton Kesilir mi?",
        "paragraflar": [
          "Kısmen. Spirale takılan elmas disk betonu gerçekten keser, ama ne kadar derine indiğini diskin çapı belirler. Yaygın 115 ve 125 mm'lik disklerde diskin yarısından azı dışarıda kalır; makinenin göbeği ve muhafazası yüzeye dayandığı için pratikte 3 santim civarında bir derinliğe inersiniz. 230 mm'lik büyük spiralde bu 6-7 santime çıkar. Yani spiral, şap üzerinde derz açmak, seramik altı bir kanal çizmek ya da ince bir bölme duvarı iki taraftan kesip ortasını kırmak için iş görür.",
          "Sınırı derinlik değil, güvenlik tarafında daha sert. Spiral kuru çalışır; betonda kuru kesim silis tozu çıkarır ve o tozun solunması ciddi bir meslek hastalığı sebebidir. Toz emişli sistem ya da uygun maske olmadan kapalı hacimde beton kesilmez. İkincisi geri tepme: disk kesim hattında sıkışırsa makine operatörün elinde ters yönde fırlar. Donatıya denk gelen bir spiral diski bunu her an yapabilir, çünkü demir diski aniden yavaşlatır.",
          "Özetle spiral, kalın ya da donatılı betonda doğru alet değil. Bir duvarı spiralle kesmeye çalışmak genelde iki taraftan çizip ortasını kırıcıyla dağıtmakla biter — ki o zaman elinizde kesim değil, düzensiz kenarlı bir kırım vardır ve arkasından tamir gelir."
        ]
      },
      {
        "baslik": "Daire Testere ve Elmas Halka Testere",
        "paragraflar": [
          "Beton kesme için üretilmiş elde taşınan makineler, spiralden farklı olarak sulu çalışır ve çok daha büyük disk taşır. 300-400 mm'lik disklerle tek yüzden 12-15 santim civarı derinliğe inilir. Su hem segmenti soğutur hem tozu daha havaya kalkmadan bastırır, bu yüzden kapalı hacimde çalışmaya spiralden kıyaslanmayacak kadar uygundur.",
          "Bu sınıfın içinde bir de halka testere var. Normal bir dairesel testerede diskin göbeği merkezdedir ve kesim derinliğini yarıçap sınırlar. Halka testerede disk ortasından tahrik edilmez, dıştan çevrilir; göbek olmadığı için aynı çapta belirgin şekilde daha derine iner. Kapı boşluğunun köşelerini tamamlamak, kalın kesitin son santimlerini bitirmek gibi işlerde bu fark işe yarar.",
          "Buradaki asıl kısıt derinlik değil, düzgünlük. Elde tutulan bir makinede disk donatıya girdiği anda hattan kaçmaya çalışır; uzun bir kesimde bu, yüzeyde dalgalanma olarak görünür. Kısa kesimlerde sorun değil, ama bir açıklığın kenarı olacak hatta gözle belli olur."
        ]
      },
      {
        "baslik": "Ray Sistemli Duvar Testeresi: Kalın Betonun Asıl Aleti",
        "paragraflar": [
          "Duvar testeresinde sonucu belirleyen şey makinenin gücü değil, üzerinde yürüdüğü ray. Testere, duvara dübellenen bir kızağa oturur ve hat boyunca motorla ilerler. Elle tutulmadığı için disk donatıya girdiğinde sapmaz; kesim baştan sona aynı çizgide kalır. Açıklık açma işlerinde tercih edilmesinin sebebi budur — geriye kalan duvarın sağlam ve düz bir kenarı olmak zorunda.",
          "Tek yüzden inilebilen derinlik disk çapının yarısından biraz azdır, çünkü diskin göbeği ve flanşı duvarın içine girmez. Kalın kesitlerde aynı hat karşı yüzden ikinci kez kesilir. İki yüzden çalışarak 600 mm kalınlığa kadar iniyoruz. Bunun için iki yüzün de erişilebilir olması ve hatların birbirini milimetrik tutturması gerekir; hat kayarsa kesit tam ayrılmaz.",
          "Disk tek hamlede tam derinliğe dalmaz. Her geçişte birkaç santim daha inerek hat boyunca gider gelir. Motorun yükü böyle dengede kalır. Kesim boyunca hatta su verilir; çıkan çamurun nereye akacağı işin başında çözülmesi gereken bir konudur, sonradan çözülmeye kalkılırsa daire içindeyseniz iş büyür."
        ]
      },
      {
        "baslik": "Hidrolik Sistemler: Elektriğin ve Kalınlığın Yetmediği Yer",
        "paragraflar": [
          "Hidrolik kesme sisteminde makinenin ucundaki testereyi elektrik motoru değil, ayrı duran bir güç ünitesinin bastığı yağ döndürür. İki pratik faydası var. Birincisi güç: aynı boyuttaki elektrikli makineye göre daha büyük disk çevirebilir, kalın ve yoğun donatılı kesitte zorlanmaz. İkincisi kurulum esnekliği: güç ünitesi dışarıda kalır, kesim yapılan yere yalnızca hortum girer.",
          "Bu ikincisi sahada sanılandan daha belirleyici. Şantiye elektriği yoksa, mevcut tesisat böyle bir yükü kaldırmıyorsa ya da ortamda su ve elektriğin bir arada bulunması istenmiyorsa hidrolik sistem tek makul seçenek olur. Su basmış bodrum katları, çalışan tesisler ve trafiğe açık yol kenarları bu tarife giriyor.",
          "Karşılığı kurulum süresi. Güç ünitesi konumlandırılır, hortumlar çekilir, sistem basınçlanır. Küçük bir iş için bu hazırlık işin kendisinden uzun sürebilir; o yüzden her işe hidrolikle gidilmez. Keşifte karar verilmesi gereken şeylerden biri de budur."
        ]
      },
      {
        "baslik": "Tel Testere: Kalınlık Sınırının Kalktığı Yöntem",
        "paragraflar": [
          "Elmas boncuklu bir çelik tel, kesilecek kesitin etrafından dolandırılıp bir makara sistemiyle döndürülür ve halka gitgide daralarak betonu keser. Diskli yöntemlerde derinliği disk çapı sınırlar; telde böyle bir sınır yoktur. Kesit ne kadar kalın olursa olsun, telin etrafından dolanabildiği her şey kesilebilir.",
          "Karşılığında kurulum ağırlaşır: telin geçeceği yolu açmak için genelde kesitin köşelerinden karot delikleri alınır, tel oradan geçirilir. Yani tel testere işi çoğu zaman bir karot işiyle başlar. Büyük temel blokları, köprü ve viyadük elemanları, kalın istinat duvarları bu yöntemin alanıdır.",
          "Bir binadaki normal tadilat işi için tel testere gerekmez. Gereken yerde de zaten alternatifi yoktur; o yüzden \"hangisi daha iyi\" diye bir karşılaştırma değil, kesitin kalınlığına bakıp verilen bir karardır."
        ]
      },
      {
        "baslik": "Perde Beton Neyle Kesilir? Önce Makine Değil, Onay",
        "paragraflar": [
          "Bu sorunun teknik cevabı kolay: perde beton, kalınlığına göre ray sistemli duvar testeresiyle ya da hidrolik sistemle kesilir, çok kalınsa tel testereye gidilir. Ama bu cevap tek başına yanıltıcı, çünkü perdede belirleyici olan makine değil izindir.",
          "Perde, kolon ve kiriş yapının taşıyıcı sistemidir. Perde binanın deprem sırasında gelen yatay kuvvetleri karşılayan elemanıdır; işlevi zaten kesitiyle ve içindeki donatıyla doğru orantılıdır. Oraya açılan bir boşluk kesiti küçültür, kesilen donatı bir daha eski işini görmez ve kaybolan taşıma gücü komşu elemanların üzerine biner. En kötü tarafı da şu: bu değişikliğin sonucu kesim günü görünmez, deprem günü görünür.",
          "Bu yüzden taşıyıcı elemana müdahaleyi statik proje ve mühendis onayı olmadan yapmıyoruz. Onaylı proje varsa uygulamayı projede yazan yere, ölçüye ve çapa birebir yaparız; projede olmayan bir boşluğu kendi kararımızla açmayız. Onay yoksa işi almaz, sebebini anlatır, izlenmesi gereken sırayı söyleriz. Bu maddede pazarlık yapmıyoruz — kesim tekniği tartışılır, bu tartışılmaz.",
          "Taşıyıcı olmayan bölme duvarlarda durum tamamen farklıdır; orada hem kesim hem delme çok daha rahat yapılır. Yine de duvarın gerçekten bölme olduğundan emin olmadan başlamayız. Gözle bakarak karar verilmez; projesine bakılır, kalınlığı ve konumu değerlendirilir."
        ]
      },
      {
        "baslik": "\"Beton Nasıl Kolay Kırılır?\" Sorusunun Sahadaki Cevabı",
        "paragraflar": [
          "Dürüst cevap: kolay bir yolu yok, ama doğru yolu var. Bu soruyu arayanların çoğu aslında \"en az uğraşla, çevreye zarar vermeden nasıl olur\" diye soruyor. Onun cevabı da genelde kırmak değil kesmek oluyor.",
          "İnternette dolaşan kestirmelere girmeyelim: tuz ruhu ya da benzeri asitler betonu \"çözmez\". Çimento harcının yüzeyini aşındırır, donatıyı paslandırır, kanalizasyona ve zemine zarar verir; taşıyıcı bir kesitte hiçbir işe yaramaz, üstelik tehlikelidir. Beton, mekanik olarak ayrılır.",
          "Küçük hacimlerde elektrikli kırıcı yeterlidir. Daha büyük ve donatılı kesitlerde hidrolik kırıcı ya da beton kırma pensesi kullanılır; pense kesiti darbe yerine basınçla ezerek ayırdığı için gürültü ve titreşim belirgin şekilde azalır — oturulan binalarda bu fark önemlidir. Bir bölümün tamamen alınması gerekiyorsa kontrollü yıkım devreye girer: parçalar önce kesilerek tanımlı hale getirilir, sonra planlanmış sırayla indirilir.",
          "Karar verirken ölçümüz en hızlı biten yöntem değil, çevre yapıya en az yük bindiren yöntemdir. Zorlanan bir makine hem betona hem işe zarar verir; kırıcıyla dağıtılan bir kesitin arkasından gelen sıva, tesisat ve tamir masrafı çoğu zaman baştan doğru yöntemi seçmenin farkından büyük çıkar."
        ]
      },
      {
        "baslik": "Denizli'de Hangi Yöntemin Gerektiğine Nasıl Karar Veriyoruz",
        "paragraflar": [
          "Telefonda yöntem söylemiyoruz, çünkü kesilecek yeri görmeden verilecek cevap tahmin olur. Duvarın kalınlığı, taşıyıcı olup olmadığı, içinden geçen tesisat, iki yüzüne de erişilip erişilemediği, makinenin nereye sabitleneceği, su ve elektriğin nereden alınacağı ancak yerinde anlaşılır. Keşif ücretsizdir.",
          "Gördükten sonra yöntemi ve fiyatı net söyleriz. Bazen keşifte o işin hiç gerekmediği ya da çok daha küçük bir müdahaleyle çözüldüğü ortaya çıkar; onu da söyleriz. Denizli merkez ve 20 ilçenin tamamına gidiyoruz, uzak ilçelere işi tek seferde bitirecek ekipmanla çıkıyoruz."
        ]
      }
    ],
    "sss": [
      {
        "q": "Spiral ile beton kesilir mi?",
        "a": "Sığ kesimlerde evet. 115-125 mm diskle yaklaşık 3 santim, 230 mm diskle 6-7 santim derinliğe inersiniz. Şapta derz açmak ya da ince bir bölme duvarı iki taraftan çizmek için iş görür. Kalın veya donatılı betonda doğru alet değildir; ayrıca kuru çalıştığı için silis tozu çıkarır, toz emişi ya da uygun maske olmadan kapalı hacimde kullanılmamalıdır."
      },
      {
        "q": "Daire testere ile beton kesilir mi?",
        "a": "Beton için üretilmiş, sulu çalışan elmas diskli testerelerle evet. 300-400 mm disklerle tek yüzden 12-15 santim civarı derinliğe inilir. Ahşap veya metal için yapılmış bir daire testereye beton diski takmak doğru değildir: su beslemesi ve devir uyumu olmadığı için hem disk hem makine zarar görür."
      },
      {
        "q": "Perde beton neyle kesilir?",
        "a": "Kalınlığa göre ray sistemli duvar testeresi, hidrolik kesme sistemi ya da tel testereyle. Ama perdede asıl mesele makine değil: perde taşıyıcı sistemin parçasıdır ve müdahale, statik proje ile mühendis onayı olmadan yapılmaz. Onay yoksa işe başlamıyoruz."
      },
      {
        "q": "En kalın kaç santimlik betonu kesebiliyorsunuz?",
        "a": "Ray sistemli duvar testeresiyle, iki yüzden çalışarak 600 mm kalınlığa kadar iniyoruz. Bunun için kesitin iki yüzüne de erişilebilmesi gerekir. Daha kalın kesitlerde ya da tek yüzden çalışılması gereken durumlarda tel testere yöntemi gündeme gelir."
      }
    ],
    "ilgiliHizmetler": [
      "beton-kesme",
      "hidrolik-beton-kesme",
      "beton-kirma",
      "karot"
    ]
  },
  "denizli-karot-fiyatlari": {
    "seoTitle": "Denizli Karot Fiyatları Neye Göre Belirlenir? | 20 Karot",
    "giris": [
      "Telefon çaldığında ilk cümle çoğu zaman aynı oluyor: karotun metresi ne kadar. Soru mantıklı duruyor ama tek başına cevabı yok. Aynı çapta, aynı kalınlıkta iki delik birbirinin iki katı sürebilir; biri yarım saatte biter, diğeri öğleni bulur. Aradaki farkı deliğin kendisi değil, deliğin etrafındaki şartlar yaratıyor.",
      "Karot fiyatları ya da beton delme fiyatı diye sorulan şeyin arkasında bir liste değil, bir hesap var. O hesabın içinde çap var, betonun kalınlığı var, kaç delik açılacağı var, içeride ne kadar demir olduğu var, o noktaya nasıl çıkılacağı var. Sahada su ve elektrik bulunup bulunmadığı bile rakamı oynatıyor. Bunların hiçbiri gizli kalem değil; keşifte bakılan şeyler zaten tam olarak bunlar.",
      "On bir yıldır bu işi yapıyorum ve şunu rahatlıkla söyleyebilirim: fiyatın nasıl oluştuğunu bilmeyen müşteri karşılaştırma yapamaz, sadece kulağa ucuz gelene gider. Sonra da işin ortasında konuşulmamış kalemler çıkar. Aşağıda hangi şeyin fiyatı neden yukarı ya da aşağı çektiğini yazdım. Okuduktan sonra kendi işiniz için gelen rakamın neden o rakam olduğunu anlarsınız, doğru soruları da sorarsınız."
    ],
    "bolumler": [
      {
        "baslik": "\"Metresi kaç para?\" sorusunun tek başına neden bir karşılığı yok",
        "paragraflar": [
          "Karotta asıl zaman deliği delerken geçmiyor. Hazırlığın bir kısmı sahaya bir kez girildiği için bir kez yapılıyor: yola çıkmak, ekipmanı indirip yukarı taşımak, su hattını çekmek, elektriği almak, iş bitince toparlanmak. Bir kısmı ise her delikte baştan tekrarlanıyor: ekseni işaretlemek, sehpayı dübelli taban plakasıyla ya da vakum plakasıyla sabitlemek, donatının nereden geçtiğine bakmak, delik bitince göbeği çıkarmak. Uç betona girdikten sonrası, çoğu işte toplam sürenin küçük bir dilimi.",
          "Bu yüzden metre tek başına ölçü değil. 200 mm çapında, 20 cm kalınlığında on delik iki metre eder. Aynı çapta, 50 cm kalınlığında dört delik de iki metre eder. Kâğıt üzerinde metraj eşit ama sahada aynı iş değil: birincisinde on kez sabitleme, on kez işaretleme, on göbek var; ikincisinde dört. Delinen toplam derinlik aynı olduğu hâlde harcanan zaman ayrışıyor, çünkü hazırlığın büyük bölümünü metre değil delik adedi belirliyor.",
          "İkinci ayrım da deliklerin nerede olduğu. On delik tek duvarda yan yanaysa sehpa bir metre kayar, su ve elektrik kurulu durur; onuncu delik birinciden düşük maliyete gelir ama sıfıra inmez, sabitleme ve göbek her seferinde yeniden yapılır. Aynı on delik binanın beş ayrı katına dağılmışsa her nokta neredeyse yeni bir iş gibi başlar: ekipman taşınır, hat yeniden çekilir, moloz ayrı ayrı toplanır. Karot metre fiyatı diye sabit bir rakam duyduğunuzda, o rakamın kaç delik ve nasıl bir dağılım varsayılarak söylendiğini sorun."
        ]
      },
      {
        "baslik": "Çap ve kalınlık: işin fiziksel büyüklüğü",
        "paragraflar": [
          "Çap büyüdükçe kesilen halka genişler, yani makine daha fazla malzeme öğütür. 50 mm bir tesisat deliğiyle 300 mm bir baca deliği aynı iş değil. Büyük çapta uç daha pahalı, sehpanın sabitlemesi daha sağlam olmak zorunda, su ihtiyacı artıyor, ilerleme yavaşlıyor. Çap belli bir noktadan sonra göbeğin ağırlığı da hesaba giriyor: delik tamamlandığında içeriden çıkan silindir tek elle taşınacak bir parça olmaktan çıkıyor, karşı tarafa düşmemesi için ayrıca önlem alınması gerekiyor.",
          "İkinci belirleyici betonun kalınlığı, yani deliğin derinliği. 15 cm bir döşemeyi geçmekle 50 cm bir kesiti geçmek arasında sadece süre farkı yok. Ucun boyu yetmediğinde uzatma parçası devreye giriyor; çok kalın kesitlerde iki yüzden karşılıklı çalışmak gerekiyor. Bu da iki tarafta da yer açmak, iki kez sabitlemek ve iki eksenin ortada buluşmasını tutturmak demek. Ölçü verirken duvarı deleceğiz demek yetmiyor, o duvarın kaç santim olduğu doğrudan rakamı değiştiriyor.",
          "Delinen yüzeyin cinsi de süreye yansıyor. Yeni dökülmüş, düzgün yüzeyli bir perdede sabitleme ilk denemede tutar. Eski, sıvası dökülen, yüzeyi bozuk bir duvarda taban plakasının oturması için önce zemin hazırlanır. Küçük bir ayrıntı gibi duruyor ama her delikte tekrarlandığında toplam süreyi belirgin biçimde uzatıyor."
        ]
      },
      {
        "baslik": "İçeride ne var: donatı yoğunluğu ve elemanın kimliği",
        "paragraflar": [
          "Elmas uç demire girdiğinde iş durmaz, donatı da kesilerek geçilir. Ama ilerleme belirgin şekilde yavaşlar ve segmentler daha hızlı tükenir. Seyrek donatılı bir döşemede rahat giden bir delik, demirin sıklaştığı bir bölgede iki katına çıkabilir. Keşifte donatı taraması bu yüzden yapılıyor: hem ne kadar demirle karşılaşacağımızı görmek için, hem de kesilmemesi gereken bir şeye denk gelip gelmediğimizi anlamak için.",
          "Burada teknik olmayan bir sınır da var. Kolon, perde, kiriş gibi taşıyıcı elemanlarda deliğin nereden geçeceğine biz karar vermeyiz. O noktayı statik proje belirler ve yetkili mühendisin onayı olmadan taşıyıcı elemana dokunmuyoruz. Onay gerekiyorsa bu hem takvimi hem teklifi etkiler. Bölme duvarda beş dakikada karar verilen bir delik, perdede projeye bakılmasını gerektirebilir.",
          "Bir de görünmeyen kalemler var: projesi bulunamayan eski döşemeler, içinden tesisat ya da elektrik hattı geçen duvarlar. Tarama yapılmadan delinen bir delikte kesilen bir boru, karot işinin kendisinden pahalıya patlar. Keşifte harcanan yarım saat çoğu zaman en ucuz kalemdir."
        ]
      },
      {
        "baslik": "Delik nerede: çalışma yüksekliği ve erişim",
        "paragraflar": [
          "Aynı delik zemin katta kısa sürede biter, altıncı katın dış cephesinde yarım günü götürebilir. Çalışma yüksekliği arttıkça makinenin, sehpanın, su bidonunun ve kablonun yukarı çıkması gerekir. Asansör varsa ve ekipman asansöre sığıyorsa mesele büyük ölçüde çözülmüştür. Asansör yoksa ya da yük asansöre girmiyorsa her şey merdivenden elle taşınır; bu tek başına saatler ekler.",
          "Tavanda çalışmak da yerde çalışmakla aynı değil. Yukarı doğru delerken su geri akar, toplanması ayrı bir düzen ister, ekip sürekli baş üstünde çalıştığı için daha sık mola verir. Dış cephede iskele ya da sepetli platform gerekiyorsa o da hesabın içine girer. İskele sizde zaten kuruluysa maliyet ciddi biçimde düşer; kurulumu bize kalıyorsa kurma, sökme ve güvenlik önlemleri de rakama yansır.",
          "Dar alan ayrı bir kalem. Sehpanın açılamadığı bir kazan dairesinde, tesisatın arasına sıkışmış bir noktada ya da tavan yüksekliğinin makineye yetmediği bir bodrumda aynı delik, boş bir odadakinin çok üstünde sürer. Delinecek noktanın önünün boş olması küçük bir ayrıntı gibi görünür, süre üzerindeki etkisi küçük değildir."
        ]
      },
      {
        "baslik": "Sahanın hali: su, elektrik, moloz ve mesafe",
        "paragraflar": [
          "Karotta su hem ucu soğutur hem tozu bastırır. Sahada su bağlantısı varsa hortum takılır, iş başlar. Yoksa su bidonla taşınır, basınçlı sistem kurulur; bu hem hazırlığı hem toparlanmayı uzatır. Elektrik için de aynısı geçerli: sağlam bir priz varsa sorun yok, yoksa jeneratör ya da uzun kablo çekimi devreye girer. Suyu ve elektriği iş başlamadan hazır etmek, müşterinin fiyatı kendi eliyle düşürebileceği en kolay kalem.",
          "İş bittiğinde ortada göbek, çamurlu su ve toz kalır. Küçük işlerde toparlamayı biz yapıyoruz ve bu zaten hesabın içinde. Ama aynı sahada kesim ya da kırım da varsa çıkan molozun hacmi büyür; binadan çıkarılması, indirilmesi, araca yüklenmesi ayrı bir emek demektir. Molozun sahada kalıp kalmayacağını ve dökümün kime ait olduğunu teklif aşamasında netleştirin. Konuşulmadığında en çok tartışma çıkan yer burasıdır.",
          "Mesafe de rakama giriyor. Merkezefendi ve Pamukkale içinde ekip kısa sürede sahada olur, Honaz ve Sarayköy gibi yakın ilçelerde de gidiş dönüş günü bozmaz. Çivril, Acıpayam, Çameli tarafında ise yol süresi tek başına yarım günü alabilir ve o gün başka iş programlanamaz. Çalışma saati de benzer şekilde belirleyici: hastane, okul, iş merkezi ya da üretim yapan bir tesiste iş çoğu zaman gece veya hafta sonuna kalıyor. Gece çalışması aydınlatma, güvenlik ve ekip düzeni açısından ek yük getiriyor."
        ]
      },
      {
        "baslik": "Teklif alırken sorulması gereken 6 soru",
        "paragraflar": [
          "İki firmadan gelen rakamı karşılaştırabilmeniz için ikisine de aynı şeyi sormuş olmanız gerekir. Aksi halde elinizde iki rakam olur ama bu rakamlar aynı işi tarif etmiyordur. Aşağıdaki altı soru, ucuz görünen teklifin gerçekten ucuz olup olmadığını ortaya çıkarır.",
          "Soruların cevabı net gelmiyorsa gelen rakam da net değildir. Özellikle birincisi belirleyici: telefonda metresini söyleyip kapatan bir teklif, sahaya gelindiğinde büyümeye açık bir tekliftir. Karşınızdaki kişi keşfe gelmeden bu soruların hepsine kesin cevap veremiyorsa bu normaldir; anormal olan, hiç bakmadan kesin rakam söylemesidir."
        ],
        "liste": [
          "Bu rakam her şey dahil mi? Moloz, temizlik, iskele, ulaşım gibi kalemler içeride mi, ayrı mı faturalanıyor?",
          "Fiyat delik başına mı, metre üzerinden mi hesaplandı? Delik adedi artarsa ya da azalırsa rakam nasıl değişiyor?",
          "Donatıya denk gelinirse fiyat değişiyor mu, yoksa bu ihtimal teklifin içinde mi?",
          "Suyu ve elektriği kim sağlıyor? Sahada yoksa ne yapılıyor ve bunun bir karşılığı var mı?",
          "İş kaç saat sürer, hangi gün ve hangi saatte başlanacak? Gece veya hafta sonu çalışması gerekiyorsa bu rakama yansımış mı?",
          "Taşıyıcı bir elemana müdahale varsa statik proje ve mühendis onayı süreci nasıl işleyecek, bu süre kimin üzerinde?"
        ]
      },
      {
        "baslik": "Fiyatı gerçekten düşüren şeyler",
        "paragraflar": [
          "Maliyetin büyük kısmı hazırlıkta oluştuğuna göre, düşürmenin yolu da hazırlıktan geçiyor. Burada müşterinin elinde olan birkaç şey var ve bunlar kulağa geldiğinden çok daha fazla iş görüyor.",
          "Bizde keşif ücretsiz. Denizli merkez ve yakın ilçelerde yerinde geliyoruz; uzak ilçelerde ilk değerlendirmeyi göndereceğiniz fotoğraf ve ölçülerle yapıp bir aralık söylüyoruz, kesin rakam yerinde keşiften sonra çıkıyor. Keşiften sonra verdiğimiz rakam tektir ve yukarıda saydığım bütün kalemleri içerir.",
          "İş bittiğinde şu da çıktı diye kalem eklemiyoruz. Tek istisna, keşifte görülmesi mümkün olmayan bir durumla karşılaşmak: duvarın içinden projede olmayan bir hattın geçmesi ya da beklenenden farklı bir kesit çıkması gibi. O durumda da makineyi durdurur, önce sizi ararız. Siz onaylamadan devam etmiyoruz. 0545 678 91 94 numarası 7/24 açık, ölçüyü ve fotoğrafı gönderdiğinizde aynı gün dönüş yapıyoruz."
        ],
        "liste": [
          "İşleri tek seferde toplayın. Klima deliği bugün, tesisat deliği üç hafta sonra dendiğinde iki ayrı kurulum ve iki ayrı yol ödüyorsunuz.",
          "Erişimi hazırlayın. Delinecek noktanın önü boş olsun, eşya çekilsin, iskele gerekiyorsa önceden konuşulsun.",
          "Su ve elektriği hazır edin. En yakın musluğun ve prizin nerede olduğunu keşifte söyleyin.",
          "Ölçüyü net verin. Çap kaç mm, beton kaç cm, kaç adet, hangi katta. Bu dört bilgi telefonda bile gerçekçi bir aralık çıkarmaya yeter.",
          "Fotoğraf gönderin. Duvarın, tavanın ve erişim yolunun fotoğrafı, tarif edilen on cümleden daha çok şey anlatır.",
          "Aynı binadaki başka işlerle birleştirin. Ekip zaten sahadaysa ikinci ve üçüncü iş çok daha düşük maliyetle çıkar."
        ]
      }
    ],
    "sss": [
      {
        "q": "Karotta metre başına sabit bir fiyat var mı?",
        "a": "Sabit bir metre fiyatı, ancak işin diğer bütün bilgileri sabitlenirse anlamlı olur. Aynı iki metre, on adet sığ delik olarak da çıkabilir dört adet kalın delik olarak da; birincisinde on kez sabitleme yapılır, ikincisinde dört. Buna bir de deliklerin tek noktada mı toplandığı yoksa ayrı katlara mı dağıldığı eklenir, çünkü hazırlık her yeni noktada baştan tekrarlanır. Bu yüzden rakamı metre üzerinden değil işin bütünü üzerinden çıkarıyoruz: çap, kalınlık, adet, donatı durumu, erişim ve saha koşulları birlikte değerlendiriliyor."
      },
      {
        "q": "Telefonda ya da fotoğrafla fiyat alabilir miyim?",
        "a": "Alabilirsiniz, ama söylenen şey bir aralık olur, kesin rakam olmaz. Çapı, beton kalınlığını, delik adedini ve hangi katta olduğunu söylerseniz gerçekçi bir aralık verebiliriz; delinecek yerin ve erişim yolunun fotoğrafını da gönderirseniz aralık daha da daralır. Uzak ilçelerde çoğu iş zaten böyle başlıyor, sonra yerinde keşifle net rakama bağlanıyor. Denizli merkez ve yakın ilçelerde keşfe gelmek daha pratik olduğu için doğrudan yerinde bakmayı tercih ediyoruz."
      },
      {
        "q": "Tek bir delik için de geliyor musunuz? Küçük iş neden nispeten pahalı görünüyor?",
        "a": "Geliyoruz, tek delik için de sahaya çıkıyoruz. Küçük işin nispeten pahalı görünmesinin sebebi şu: yola çıkmak, ekipmanı taşımak, sehpayı kurmak ve iş bitince toparlamak, delik bir tane de olsa on tane de olsa yapılması gereken şeyler. O sabit emek tek deliğe bindiğinde birim maliyet doğal olarak yüksek çıkar. Bu yüzden yapılacak başka delikler varsa hepsini aynı ziyarette toplamak, en somut tasarruf yöntemidir."
      },
      {
        "q": "Kolona veya perdeye delik açılacaksa fiyat ve süreç nasıl etkilenir?",
        "a": "Taşıyıcı elemanlarda önce yapısal karar verilir, sonra makine çalışır. Kolon, perde ve kirişte deliğin nereden geçeceğini statik proje belirler; yetkili mühendisin onayı olmadan o elemana müdahale etmiyoruz. Bu, sürece bir hazırlık ve bekleme aşaması ekler, ayrıca donatının sık olduğu bölgelerde kesim süresi de uzar. Yani hem takvim hem işçilik açısından bölme duvardaki bir delikten farklı bir iştir ve teklifte ayrı değerlendirilir."
      }
    ],
    "ilgiliHizmetler": [
      "karot",
      "beton-delme"
    ]
  },
  "filiz-ekimi-nedir": {
    "seoTitle": "Filiz Ekimi Nedir, Nasıl Yapılır? Uygulama Rehberi",
    "giris": [
      "Betonarmede demir, beton dökülmeden önce yerine bağlanır. Yapı bittikten sonra o elemana yeni bir şey eklemek gerektiğinde, mesela mevcut binaya kat çıkılacaksa ya da yeni bir perde duvar eklenecekse, ortada bağlanacak demir kalmamıştır. Filiz ekimi bu boşluğu kapatan işlem: sertleşmiş betona delik açılır, deliğe kimyasal reçine enjekte edilir, donatı çubuğu döndürülerek içeri sürülür. Kür tamamlandığında o çubuk, döküm sırasında bırakılmış gibi betona kenetlenir ve dışarıda kalan boyuyla yeni donatıya bindirme yapar.",
      "İşin mantığını anlamak sahadaki hataların çoğunu baştan siler. Yük önce çelikten reçineye, reçineden delik cidarına, oradan da betona geçer. Bu zincirin herhangi bir halkası zayıfsa filiz koparak değil, delikten sıyrılarak gelir. Zincirin en sık kırıldığı yer ise malzeme değil, deliğin içinde unutulan kesme tozudur.",
      "Aşağıda işi ekiplerimizin sahada uyguladığı sırayla anlattım: delik, temizlik, enjeksiyon, yerleştirme, kür. Baştan bir şeyi söyleyeyim, kolon, perde, kiriş gibi taşıyıcı bir elemana filiz ekmek statik proje ve yetkili mühendis onayı isteyen bir müdahaledir. Yazının geri kalanı, onayı alınmış bir detayın sahada nasıl doğru uygulanacağını anlatıyor. Filizin çapını, aralığını ve gömme boyunu sahada gözle kararlaştıran bir uygulama zaten baştan yanlıştır."
    ],
    "bolumler": [
      {
        "baslik": "Filiz Ekimi Ne İşe Yarar, Hangi İşlerde Gerekir",
        "paragraflar": [
          "Beton basınca çalışır, çekmeyi demir taşır. İki farklı yaşta dökülmüş betonu birbirine sadece dayadığınızda o birleşimde çekme aktarılmaz, ilk zorlanmada iki parça ayrılır. Filiz ekimi, eski betonun içinde kenetlenen ve dışarıda yeni donatıyla bindirme yapan bir çubuk koyarak sürekliliği kurar. Amaç, farklı zamanlarda dökülmüş iki elemanı tek parça gibi çalıştırmak.",
          "Bu işlem her zaman bir güçlendirme ya da ekleme detayının parçası olarak çıkar. Deprem güçlendirmesi kapsamında perde eklerken, kolon mantolarken ya da mevcut bir elemana donatı ekleme gerektiğinde filizin çapı, aralığı ve gömme boyu statik projeden okunur, sahada gözle belirlenmez. Bağlantı kimyasal ankraj esasına dayandığı için reçine seçimi de o detaya bağlıdır. Onaylı bir detay yoksa taşıyıcı elemanda delik açmıyoruz; yanlış yere açılmış bir delik de kesilmiş bir donatı da geri alınmıyor.",
          "Güçlendirme ve ekleme işlerinin neredeyse tamamında bir yerde filiz çıkar. En sık karşılaştıklarımız şunlar:"
        ],
        "liste": [
          "Mevcut binaya kat çıkılması, yeni kolon ya da kiriş eklenmesi",
          "Balkon, teras veya konsol döşeme ilavesi",
          "Betonarme perde ekleyerek yapılan deprem güçlendirmesi",
          "Kolon mantolamada gömlek donatısının döşemeye ve kolona bağlanması",
          "Sonradan açılan merdiven ya da asansör boşluğunun çevresinin toplanması",
          "Temel genişletme, istinat duvarı yükseltme, yeni betonun mevcut betona bağlanması"
        ]
      },
      {
        "baslik": "Delik Çapı ve Derinliği Neye Göre Belirlenir",
        "paragraflar": [
          "Delik çapı, ekilecek donatının çapına ve kullanılan reçinenin kendi tablosuna göre seçilir; genelde donatı çapından birkaç milimetre büyüktür. Bu boşluk keyfi değil, reçinenin çubuğu çepeçevre sarabilmesi için gerekli. Fazla dar delikte reçine cidara kadar yayılamaz, fazla geniş delikte reçine kalınlığı artar ve bağlantı beklendiği gibi davranmaz. Yani Ø12 ile Ø20 filiz için aynı uç takılmaz.",
          "Derinlik ise gömme boyudur ve projeden gelir. Donatı çapı büyüdükçe gereken gömme boyu da uzar, çünkü çubuğun betona yük aktardığı yüzey bu boyla belirlenir. Deliği açarken derinliği tek tek ölçüyle doğruluyoruz; matkabın üzerine konan bant ya da derinlik mesnedi işi kolaylaştırır ama son söz metrenindir. Elemanın karşı yüzüne çıkmamak da ayrı bir kontrol.",
          "Delmeden önce mevcut donatının yerini tarama cihazıyla çıkarıp yüzeye çiziyoruz. Filiz noktası bir demire denk geliyorsa projenin izin verdiği kadar kaydırıyoruz. Kaydırma mümkün değilse detayı çizen mühendise soruyoruz. Taşıyıcı bir elemanın mevcut donatısını keserek delik açmak sahada verilecek bir karar değil, kesilen demir geri gelmiyor."
        ]
      },
      {
        "baslik": "Delik Temizliği: İşin Tuttuğu ya da Tutmadığı Yer",
        "paragraflar": [
          "Buraya kadar her şeyi doğru yapıp bu adımı geçiştirdiyseniz filiz tutmaz. Delme sırasında oluşan ince toz delik cidarına yapışır ve kendiliğinden çıkmaz. Reçine enjekte edildiğinde betona değil o toz tabakasına yapışır, ara yüzey kayabilen bir katman hâline gelir. Sonuç, dışarıdan hiç belli olmayan ama çekme dayanımı düşmüş bir filizdir.",
          "Temizliğin sırası bellidir: önce üfle, sonra fırçala, sonra tekrar üfle. Üfleme yağsız basınçlı havayla ve hortumun ucu deliğin dibine kadar sokularak yapılır, ağızdan yapılan üfleme dipteki tozu yerinden oynatmaz. Fırça delik çapına uygun olmalı; ince kalan bir tel fırça cidara değmeden döner ve hiçbir işe yaramaz. Fırçalama ile üflemeyi birer kez yapıp geçmiyoruz, cidar temiz kalana kadar tekrarlıyoruz.",
          "Delik sulu açıldıysa iş kolaylaşmaz, aksine ağırlaşır. Su kesme tozunu çamura çevirir, çamur cidarda kuruyup ince bir tabaka bırakır ve fırçalanmadan çıkmaz. Böyle deliklerde önce yıkama, sonra fırçalama, sonra da ürünün istediği kuruluğa gelene kadar bekleme var. Islak delikte kullanılabilen reçineler ayrıdır, eldeki ürün buna uygun değilse delik kurumadan enjeksiyon yapılmaz. Temizliği biten deliği enjeksiyona kadar tıpayla kapatıyoruz, açık bırakılan delik saatler içinde yeniden tozlanıyor."
        ]
      },
      {
        "baslik": "Reçine Enjeksiyonu ve Donatının Yerleştirilmesi",
        "paragraflar": [
          "Kartuş tabancaya takılıp karıştırıcı ucu geçirildikten sonra ilk gelen kısım atılır, o bölüm henüz düzgün karışmamıştır ve delikte kullanılmaz. Ardından reçine deliğin en dibinden doldurulmaya başlanır, delik doldukça ucu yavaşça geri çekilir. Amaç dipte hava boşluğu bırakmamak. Gereken miktar delik hacmine göre değişir ama sahadaki asıl ölçüt, donatı sürüldüğünde ağızdan hafif bir taşma görmektir.",
          "Donatının gireceği derinliği çubuğun üzerine önceden işaretliyoruz; hem gömme boyu şaşmıyor hem de dışarıda kalacak bindirme boyu tutuyor. Çubuk düz itilmez, döndürülerek sürülür. Bu dönme hareketi reçineyi nervürlerin arasına yediriyor, içeride kalan hava kabarcıklarını yukarı çıkarıyor. Sürme tek seferde ve reçinenin yerleştirme payı dolmadan bitmeli; jelleşmeye başlamış reçinenin içinde çubuğu oynatmak bağlantıyı bozar.",
          "Bu yüzden aynı anda çok sayıda deliği doldurup sonra donatı takmaya kalkmıyoruz, delikleri sırayla ilerletiyoruz. Tavana doğru, yani yukarı yönlü uygulamada çubuk kendi ağırlığıyla aşağı kayabilir; kür alana kadar kama ya da destekle sabitleniyor. Ağızdan taşan fazla reçineyi kürlenmeden alırsak yüzey de düzgün kalıyor."
        ]
      },
      {
        "baslik": "Kürlenme Süresi: En Çok Atlanan Kısım",
        "paragraflar": [
          "Kimyasal filizde iki ayrı süre var ve bunlar sık karıştırılıyor. Birincisi yerleştirme payı, yani reçine karıştıktan sonra donatının delik içinde hareket ettirilebileceği süre. İkincisi tam kür süresi, yani filizin öngörülen yükü taşıyabilir hâle gelmesi için beklenmesi gereken süre. Birincisi kısa, ikincisi uzun ve ikisi de ortam sıcaklığına bağlı.",
          "Belirleyici olan hava sıcaklığından çok betonun sıcaklığı. Soğukta kür süresi belirgin şekilde uzar. Sıcak günlerde ise reçine delikte daha çabuk jelleştiği için yerleştirme payı kısalır, o zaman da acele etmek gerekir. Kışın gölgede kalan bir perdenin yüzey sıcaklığı ile öğle güneşi gören bir kolonunki aynı olmaz. Süreyi tahminle değil, ürünün kendi tablosundan okuyoruz.",
          "Süre dolmadan o filize yük verilmez. Üzerine kalıp bağlanmaz, iskele mesnetlenmez, beton dökülmez, çubuğa asılıp deneme yapılmaz. Çevrede kırım ya da karot gibi darbeli bir iş varsa titreşim de kürlenmeyi bozar, o bölgeyi programa göre ayırıyoruz. Sahada en çok atlanan yer burasıdır; delikler açılmış, filizler ekilmiş, ekip beklemek istemez. Erken zorlanan filiz kendini toparlamaz, o delik sökülüp yeniden yapılmadan güvenilir olmaz."
        ]
      },
      {
        "baslik": "Mekanik Dübel ile Kimyasal Dübel Arasındaki Fark",
        "paragraflar": [
          "Mekanik dübel betonu içeriden iterek tutar. Sıkma anında gövde genleşir, delik cidarına kilitlenir ve yük sürtünmeyle aktarılır. Avantajı hız: sıkıldığı anda yük alır, kür beklemez, gerektiğinde sökülebilir. Sağlam beton ve rahat kenar mesafesi varsa iyi çalışır.",
          "Sorun, o genleşme basıncının betonda gerilme yaratması. Kenara yakın bir noktada ya da zaten çatlaklı bir betonda bu itme, kilitlenme tamamlanmadan betonu çatlatabilir. Aynı şey birbirine çok yakın dübellerde de olur, her biri kendi çevresindeki betonu zorlar ve gerilme bölgeleri çakışır. Kimyasal dübelde genleşme yükü yoktur, yük reçinenin cidara tutunmasıyla gömme boyu boyunca dağılır.",
          "Kenar mesafesi kısıtlıysa, dübeller birbirine yakınsa, beton çatlaklıysa ya da gereken derinlik hazır bir mekanik dübelin boyuna uymuyorsa kimyasala geçiyoruz. Filiz ekiminde pratikte zaten hep kimyasal ankraj kullanılır: ekilen şey nervürlü donatı çubuğudur, ortada genleşecek bir gövde yoktur ve gömme boyu mekanik dübellerin çalıştığı derinliklerin ötesindedir. Karşılığında kür beklemek ve delik temizliğine titizlenmek gerekiyor."
        ]
      },
      {
        "baslik": "Çekme Testi Ne Zaman İstenir, Neyi Gösterir",
        "paragraflar": [
          "Çekme testi, ekilen filizin öngörülen yükü gerçekten taşıdığını yerinde gösteren tek yöntem. Hidrolik bir düzenek donatıyı belirlenen test yüküne kadar çeker, filiz kaymadan yükü tutuyorsa uygundur. Test genelde göçme yüküne kadar değil, projede yazan değere kadar yapılır; amaç filizi koparmak değil sınırı doğrulamaktır. Düzeneğin oturacağı alanın boş kalması gerektiği için testi baştan programa yazmakta fayda var.",
          "Test genelde şu durumlarda isteniyor: kontrol teşkilatı ya da statik projeyi hazırlayan mühendis talep ettiğinde, mevcut betonun dayanımı konusunda şüphe olduğunda, çok sayıda filiz ekilen işlerde partiyi temsilen ve uygulamanın zor koşullarda yapıldığı yerlerde. Kaç filizin test edileceğine ve hangi yükte tutulacağına biz karar vermiyoruz, bu değerler projeden gelir. Her filize test yapılmaz, gerek de yoktur.",
          "Testin asıl değeri sadece reçineyi ölçmemesi. Kayma yükünü ölçtüğü için deliğin temizliğini, gömme boyunun yeterliliğini ve enjeksiyonun tam yapılıp yapılmadığını dolaylı olarak sınar. Temizliği geçiştirilmiş bir uygulama en çok burada ortaya çıkar. Taşıyıcı sistemi ilgilendiren her işte olduğu gibi sonucun yazılı kayda geçmesi gerekiyor. Denizli merkez ve ilçelerdeki güçlendirme işlerinde keşfe ücretsiz geliyoruz, onaylı detayınızı görüp delik adedi ve uygulama programı üzerinden net konuşuyoruz."
        ]
      }
    ],
    "sss": [
      {
        "q": "Filiz ektikten ne kadar sonra beton dökebiliriz?",
        "a": "Kür süresi dolmadan dökülmez. Bu süre kullanılan reçineye ve betonun sıcaklığına göre değişir, ürünün kendi tablosundan okunur. Soğuk havada belirgin şekilde uzar. Kür süresi ile yerleştirme payı farklı şeylerdir; ikincisi donatıyı delikte sürmek için elinizde kalan kısa süredir. Kürünü almamış filize kalıp bağlamak ya da yük vermek o filizin kapasitesini kalıcı olarak düşürür, döküm programını kür süresine göre kurmak gerekiyor."
      },
      {
        "q": "Filiz ekimi ile kimyasal dübel aynı şey mi?",
        "a": "Uygulama mantığı benzer, amacı farklı. İkisinde de delik açılır, temizlenir, reçine enjekte edilir. Filiz ekiminde betona nervürlü donatı çubuğu ekilir ve amaç yeni dökülecek betonun demiriyle süreklilik kurmaktır, çubuğun dışarıda kalan boyu bindirme yapar. Kimyasal dübelde ise genelde dişli bir saplama ekilir, üzerine somunla plaka, korkuluk ya da makine bağlanır. Gömme boyları ve hesap yaklaşımları da bu yüzden birbirinden ayrılır."
      },
      {
        "q": "Delik temizliği yapılmazsa ne olur, gözle anlaşılır mı?",
        "a": "Gözle anlaşılmaz, işin can sıkıcı tarafı da bu. Delik dolu görünür, donatı yerindedir, dışarıdan bakan biri hiçbir eksik göremez. Ama reçine beton cidarına değil cidarda kalan toz tabakasına tutunduğu için filizin çekme dayanımı beklenenin altında kalır. Bu fark ancak yük geldiğinde ya da çekme testinde ortaya çıkar. Temizlik adımlarını atlanabilir bir ayrıntı değil, işin kendisi olarak görmemizin sebebi bu."
      },
      {
        "q": "Filiz noktası mevcut kolonun demirine denk geldi, ne yapmalıyız?",
        "a": "Önce demirin yerini tarama cihazıyla kesin olarak çıkarmak gerekiyor, tahminle delinmez. Nokta bir donatıya denk geliyorsa projenin izin verdiği ölçüde ve kenar mesafesini bozmadan kaydırılır. Kaydırma mümkün değilse karar sahada verilmez, detayı hazırlayan mühendise sorulur ve gerekirse detay revize edilir. Taşıyıcı bir elemanın mevcut donatısını keserek yer açmak statik proje ve mühendis onayı olmadan yapılacak bir iş değildir. Kesilen donatı geri gelmediği için bunu delik açılmadan netleştiriyoruz."
      }
    ],
    "ilgiliHizmetler": [
      "filiz-ekimi",
      "kimyasal-dubel",
      "ankraj",
      "beton-delme"
    ]
  },
  "karot-alinan-yere-ne-yapilir": {
    "seoTitle": "Karot Alınan Yere Ne Yapılır? Delik Kapatma ve Tamir",
    "giris": [
      "Karot işinin konuşulan kısmı deliğin açılmasıdır. Geriye kalan silindirik boşluğun ne olacağı ise çoğu zaman hiç gündeme gelmez — ekip gider, delik olduğu gibi kalır. Oysa o deliğin kapatılıp kapatılmayacağı, kapatılacaksa neyle kapatılacağı işin parçasıdır ve yanlış yapıldığında sonucu deliğin kendisinden büyük olur.",
      "Delik iki farklı sebeple açılmış olabilir ve ikisinin devamı aynı değil. Tesisat, havalandırma ya da asansör için açılan bir delik kalıcıdır; içinden bir şey geçecektir, kapatılması değil doğru sızdırmazlıkla tamamlanması gerekir. Beton numunesi almak için açılan delikte ise geriye bir işlev kalmaz, boşluğun kapatılması istenir.",
      "Aşağıda ikisini ayrı ayrı anlattım: numune deliğinin nasıl kapatıldığı, hangi harcın neden kullanıldığı, donatı kesilmişse ne olduğu, su ve yangın yalıtımının nerede devreye girdiği. Bir de sahada sık gördüğümüz yanlışlara ayrı bir bölüm ayırdım, çünkü bu deliklerin çoğu iyi niyetle ama yanlış malzemeyle kapatılıyor."
    ],
    "bolumler": [
      {
        "baslik": "Karot Deliği Kapatılmak Zorunda mı?",
        "paragraflar": [
          "Duruma göre değişir. Tesisat geçişi için açılan delik zaten kapatılmaz; içinden boru ya da kablo geçer, çevresi uygun malzemeyle sızdırmaz hale getirilir. Numune için açılan delikte ise geriye boş bir silindir kalır ve orası doldurulur.",
          "Doldurmanın sebebi görüntü değil. Açık kalan bir boşluk suyu ve nemi betonun içine, oradan da donatıya taşır. Donatı paslandıkça hacmi büyür, büyüyen demir çevresindeki betonu iter ve zamanla yüzey çatlayıp dökülür. Delik ne kadar küçük olursa olsun süreç aynı işler; sadece daha yavaş.",
          "Kararı kim verir sorusunun cevabı da net: numune alma işi yapının mühendisinin talimatıyla yürüdüğü için, deliğin nasıl kapatılacağını da o belirler. Biz uygulama tarafındayız. Onaylanmış bir tamir detayı varsa ona uyarız; yoksa mühendise sorulmasını isteriz. Taşıyıcı bir elemandaki boşluğun dolgusu tercih meselesi değildir."
        ]
      },
      {
        "baslik": "Hangi Harçla Kapatılır?",
        "paragraflar": [
          "Numune deliği normal çimento harcıyla kapatılmaz. Sıradan harç kürlenirken hacmi küçülür; delik boyunca çeperle dolgu arasında ince bir boşluk kalır ve dolgu yükü aktarmaz, sadece deliği görsel olarak kapatır. Bu iş için rötresi telafi edilmiş, yani kürlenirken büzülmeyen özel tamir harçları üretiliyor. Ürün ambalajında \"rötresiz\" ya da \"büzülme telafili\" ibaresi aranır.",
          "Uygulamanın sonucu belirleyen kısmı harç değil hazırlık. Delik içi kesim çamurundan tamamen temizlenir, basınçlı hava ya da su ile yıkanır. Çeperde kalan ince çamur tabakası, yeni harcın betona yapışmasını engelleyen bir ayırıcı gibi davranır; harç ne kadar iyi olursa olsun tutunamaz. Temizlikten sonra yüzey doygun ama yüzeyde su birikintisi kalmayacak şekilde nemlendirilir, harç boşluk kalmayacak biçimde basılır.",
          "Su geçirmesi istenmeyen yerlerde — bodrum perdesi, temel, teras, ıslak hacim döşemesi — tamir harcının üstüne ayrıca su yalıtımı gelir. Mevcut yalıtım tabakası delinmişse o tabakanın kendi detayıyla onarılması gerekir; deliği doldurmak yalıtımı geri getirmez. Bu ayrım atlandığında sorun aylar sonra alt kattaki tavanda leke olarak ortaya çıkar."
        ]
      },
      {
        "baslik": "Delikte Donatı Kesilmişse Ne Olur?",
        "paragraflar": [
          "Numune alırken kural, kesitin içinde donatı bulunmayacak şekilde yer seçmektir. Donatı taraması bu yüzden yapılır. Yine de her zaman mümkün olmayabilir ve bazen numunenin içinden demir çıkar.",
          "Bu durumda mesele artık delik kapatmak değildir. Kesilen donatının o bölgedeki işlevini kaybettiği kabul edilir ve ne yapılacağına yapının mühendisi karar verir. Uygulanacak çözüm elemanın türüne, kesilen donatının konumuna ve yapının durumuna göre değişir; standart bir cevabı yoktur. Bizim yapmadığımız şey, kendi kararımızla \"nasılsa doldurulur\" deyip üstünü kapatmaktır.",
          "Aynı sebeple, numune alınacak yeri biz seçmiyoruz. Hangi elemandan, kaç adet ve nereden alınacağını yapının mühendisi belirler. Bu bir sorumluluktan kaçma değil, işin gerçekten öyle yürümesi: o kararı vermek için yapının projesini ve taşıyıcı sistemini bilmek gerekir."
        ]
      },
      {
        "baslik": "Kat Geçişlerinde: Yangın ve Ses Yalıtımı",
        "paragraflar": [
          "Döşemeden geçen tesisat delikleri kapatılmaz ama boş da bırakılmaz. İki kat arasındaki bir boşluk yangında dumanın ve alevin üst kata taşınmasının en kolay yoludur. Bu yüzden boru veya kablo geçirildikten sonra delik çevresi yangına dayanıklı dolgu malzemeleriyle sızdırmaz hale getirilir.",
          "Aynı boşluk ses için de bir köprü. Konutlarda alt kattan gelen sesin kaynağı sık sık tesisat şaftlarındaki kapatılmamış geçişlerdir. Doğru dolgu her iki sorunu birden çözer.",
          "Bu iş genelde bizim işimizin devamında başka bir ekibe geçer, ama deliği açarken çevresinde dolgu için yer bırakıp bırakmadığımız o ekibin işini doğrudan etkiler. Keşifte deliğin ne için açıldığını sormamızın bir sebebi de bu."
        ]
      },
      {
        "baslik": "Sahada Sık Gördüğümüz Yanlışlar",
        "paragraflar": [
          "En yaygını deliğin alçı ya da sıva ile kapatılması. Yüzeyde düzgün görünür, birkaç ay içinde etrafından çatlar. Alçı nem alır, hacmi oynar ve betona yapışmaz; taşıyıcı bir elemanda hiçbir karşılığı yoktur.",
          "İkincisi poliüretan köpük. Boşluğu doldurur, kolaydır ve tamamen yanlıştır: köpük yük taşımaz, zamanla ultraviyole ve nemle bozulur, üstelik yangında yanar. Tesisat çevresinde ses için kullanıldığında bile yangın dolgusu yerine geçmez.",
          "Üçüncüsü çıkan karot silindirinin geri yerine sokulması. Mantıklı gibi durur ama silindir çeperle arasında birkaç milimetrelik boşluk bırakır, harçsız oturur ve hiçbir şeyi bağlamaz. Numune zaten laboratuvara gider; geri getirilse bile kesilmiş ve kırılmış haldedir.",
          "Dördüncüsü deliğin unutulması. Özellikle görünmeyen yerlerde — asma tavan üstünde, şaft içinde, bodrum perdesinde — açılan delikler kapatılmadan iş kapanıyor. Numune alma işi bittiğinde deliklerin ne olacağı baştan konuşulmadıysa genelde kimse üstlenmiyor."
        ]
      },
      {
        "baslik": "Karot Alınan Binada Oturulur mu, Tehlikeli mi?",
        "paragraflar": [
          "Doğru yerden ve doğru sayıda alınmış bir numune binanın taşıyıcı sistemini zayıflatacak boyutta değildir. Alınan silindir, elemanın kesitinin yanında çok küçük kalır; yer seçimi zaten donatıya ve kritik bölgelere denk gelmeyecek şekilde yapılır. Bu yüzden numune alınmış bir binada oturulmasında bir sakınca doğmaz.",
          "Buradaki asıl hassasiyet sayı ve yer. Aynı elemandan üst üste numune almak, kritik bölgelerden almak ya da yer seçimini rastgele yapmak farklı bir konudur — bunun için karar mühendise ait olmalı, sahada \"buradan alalım\" denerek ilerlenmemelidir.",
          "İşlem sırasında ise gürültü ve su vardır. Su soğutmalı çalışıldığı için toz havaya kalkmaz, ama kesim suyunun ve çamurun nereye akacağı önceden planlanmazsa daire içinde iş büyür. Zemin ve mobilya başlamadan örtülür, su kontrol altına alınır, iş bitiminde saha toplanır. Numunenin çıkması dakikalar sürer; zamanın çoğu hazırlık ve toplanmaya gider."
        ]
      },
      {
        "baslik": "Deliği Kim Kapatır? Teklife Dahil mi?",
        "paragraflar": [
          "Bu sorunun sahada sık sık cevapsız kaldığını görüyoruz. Numune alma işi verilirken konuşulan şey numunenin alınmasıdır; deliklerin kapatılması ayrı bir iş kalemi olarak hiç gündeme gelmez. İş bitince delikler ortada kalır ve kimin yapacağı belli değildir.",
          "Biz teklif verirken deliklerin ne olacağını baştan soruyoruz. Kapatma bizden isteniyorsa fiyata dahil edilir ve hangi malzemeyle yapılacağı yazılır; mühendisin onaylanmış bir tamir detayı varsa ona göre. İstenmiyorsa da bunu teklifte açıkça belirtiriz ki sonradan \"bu ayrıydı\" gibi bir durum çıkmasın. Verdiğimiz rakam işin tamamını kapsar; iş sırasında kalem eklenmez.",
          "Kapatmayı başka bir ekip yapacaksa deliği ona göre bırakırız: çeper temizlenir, çevresi tamir malzemesinin tutunabileceği halde teslim edilir. Kesim çamuru kurumuş bir delik, sonradan gelen ekip için ekstra iştir ve genelde atlanır — atlandığında da harç tutunmaz.",
          "Kısacası, numune alma işi konuşulurken şu soruyu sormakta fayda var: delikler kapatılacak mı, kim kapatacak, hangi malzemeyle? Üçünün de cevabı işe başlamadan belli olmalı."
        ]
      }
    ],
    "sss": [
      {
        "q": "Karot alınan yere ne yapılır?",
        "a": "Numune için açılmış delik, rötresi telafi edilmiş (büzülmeyen) tamir harcıyla doldurulur. Öncesinde delik içi kesim çamurundan tamamen temizlenir, yoksa harç betona tutunmaz. Su geçirmesi istenmeyen yerlerde üstüne ayrıca su yalıtımı gelir. Nasıl kapatılacağına yapının mühendisi karar verir."
      },
      {
        "q": "Karot deliği normal çimento harcıyla kapatılabilir mi?",
        "a": "Kapatılmamalı. Sıradan harç kürlenirken büzülür ve çeperle dolgu arasında ince bir boşluk kalır; delik görsel olarak kapanır ama dolgu yük aktarmaz. Aynı sebeple alçı, sıva ve poliüretan köpük de bu iş için uygun değildir."
      },
      {
        "q": "Karot alınan binada oturulur mu, tehlikeli mi?",
        "a": "Doğru yerden ve doğru sayıda alınmış numune taşıyıcı sistemi zayıflatacak boyutta değildir; alınan silindir elemanın kesitinin yanında çok küçük kalır. Yer seçimi donatıya ve kritik bölgelere denk gelmeyecek şekilde yapılır. Bu yüzden numune alınmış binada oturulmasında sakınca doğmaz."
      },
      {
        "q": "Delikten donatı çıkarsa ne olur?",
        "a": "Numune alırken kural, kesitin içinde donatı bulunmayacak şekilde yer seçmektir; donatı taraması bunun için yapılır. Yine de demir kesilmişse mesele delik kapatmanın ötesine geçer ve ne yapılacağına yapının mühendisi karar verir. Standart bir çözüm yoktur, elemana ve konuma göre değişir."
      }
    ],
    "ilgiliHizmetler": [
      "karot",
      "kimyasal-dubel",
      "beton-delme"
    ]
  },
  "karot-firmasi-secerken": {
    // Başlığa "Denizli" eklendi, "Kontrol Listesi" çıkarıldı (2026-08-15).
    // Search Console: "denizli karot firmaları" 3 ayda 157 gösterim / 2 tık —
    // sitenin en çok görünüp en az tıklanan sorgusu. Sorgu ÇOĞUL: "hangi
    // firmalar, hangisini seçeyim". Bu yazı tam o soruyu cevaplıyordu ama
    // başlığında şehir yoktu, açıklamasında vardı. Ana sayfayla yamyamlık
    // riski var (o da "Denizli Karot Firması" ile başlıyor) ama niyet ayrı:
    // ana sayfa "firma arıyorum", bu sayfa "nasıl seçerim" sorgusunu alıyor.
    // Ana sayfanın "denizli karot" sorgusundaki %27 TO'suna dokunulmadı.
    "seoTitle": "Denizli Karot Firması Seçerken Nelere Dikkat Edilir?",
    "giris": [
      "Karot firması seçerken çoğu kişi aynı yolu izler. Üç numara bulunur, üçüne de aynı soru sorulur, en düşük rakamı söyleyen iş alır. Sıkıntı şu ki o üç rakam çoğu zaman aynı işin karşılığı değildir. Biri kesilen parçayı indirmeyi ve molozu götürmeyi de hesaba katarak konuşmuştur, diğeri sadece makinenin duvarda geçireceği süreyi saymıştır. Aynı cümleyi duyup birbirinden çok farklı iki iş satın alırsınız.",
      "Firmalar arasındaki fark, uç betona daldığı anda görünmez. Fark ondan önce ve ondan sonra ortaya çıkar. İşe nasıl bakıldığında, hangi yöntemin neden seçildiğinde, çıkan molozun kimin sırtında kaldığında, duvarda bırakılan kenarın ne halde olduğunda. Delme ve kesme kısmı zaten makinenin işidir; geri kalanı firmanın işidir. Güvenilir karotçu arayan biri için asıl ayrım da tam burada başlar.",
      "Aşağıdakiler, iş vermeden önce sorulması gereken sorular ve dikkat edilmesi gereken işaretler. Tanıdıktan karotçu tavsiyesi almak iyi bir başlangıçtır, ama tavsiye edilen firmaya da aynı soruların sorulması gerekir. Denizli karot firması ararken de başka bir ilde ararken de bu liste değişmiyor, çünkü sahada çıkan sorunlar değişmiyor. İçlerinde bir madde diğerlerinden ayrı duruyor: taşıyıcı elemana onaysız müdahale teklifi. O maddede pazarlık yok, oradan geri dönülmez."
    ],
    "bolumler": [
      {
        "baslik": "Keşfe Gelmeden Telefonda Rakam Veren Firma",
        "paragraflar": [
          "Telefonda \"duvarda bir kapı boşluğu açtıracağım\" dendiğinde hemen fiyat söyleyen firma, aslında neyi keseceğini bilmiyordur. O duvar 15 santim tuğla da olabilir, 30 santim betonarme perde de. İkisi arasında yöntem değişir, makine değişir, süre değişir. Aynı ölçüdeki iki boşluk için harcanan zaman rahatlıkla ikiye katlanabilir. Telefonda söylenen rakam bu yüzden sahada tutmaz, iş başladıktan sonra \"burası beklediğimizden zormuş\" cümlesi gelir.",
          "Keşfe gelen kişi neye bakar? Elemanın kalınlığına ve cinsine, içinde donatı olup olmadığına, boşluğun ölçüsüne ve adedine, çalışma yüksekliğine, makinenin sabitleneceği yüzeyin durumuna, suyun ve elektriğin nereden alınacağına, kesilen parçanın hangi yoldan dışarı çıkacağına. Üçüncü kattaki bir kesimde parçanın merdivenden inip inemeyeceği, kesimin kendisi kadar belirleyicidir. Bunlar yerinde görülmeden ortaya sağlıklı bir fiyat çıkmaz.",
          "Keşfe gelmek çoğu firmada ücretsizdir ve yarım saati geçmez. Gelmeyi gereksiz bulup \"sen ölçüyü söyle yeter\" diyen bir karotçu, işi görmeden fiyat vermeyi tercih ediyordur. O fiyat genelde iki şekilde biter. Ya sahada yukarı çekilir ya da firma zararına girmemek için işin bir kısmını kısar. Kısılan kısım da çoğu zaman güvenlik önlemi, temizlik veya moloz nakliyesi olur."
        ]
      },
      {
        "baslik": "\"Metrekaresi Şu Kadar\" Diyen Teklifte Neyin Dahil Olduğunu Sorun",
        "paragraflar": [
          "Birim fiyat cümlesi tek başına bir bilgi taşımaz. Kesimde metretül veya metrekare üzerinden, karotta delik başına ya da derinlik santimi üzerinden konuşulması normaldir. Asıl soru şudur: bu birimin içinde ne var? İki firma neredeyse aynı birim fiyatı söyleyip birbirinden tamamen farklı iki teklif vermiş olabilir, çünkü biri işin yarısını kapsam dışında tutuyordur.",
          "Şunlar tek tek sorulmalı. Su ve elektrik nereden sağlanacak, sayaçtan çekilecekse kimin sayacından? Yüksekte çalışılacaksa platform veya iskele kime ait? Zeminin ve eşyaların örtülmesi teklifin içinde mi? Kesilen parça yerinden alınıp indirilecek mi, yoksa iş \"kestik, gerisi sizin\" noktasında mı bitiyor? Mesai bitiminden sonra ya da hafta sonu çalışmak gerekirse fiyat aynı mı kalıyor? Bunların hiçbiri zor soru değil, ama sorulmadığında hepsi işin sonunda ek kalem olarak geri döner.",
          "Moloz ve temizlik başlı başına bir kalemdir, çünkü ağırlığını kimse doğru tahmin etmez. Betonarmenin metreküpü kabaca iki buçuk ton gelir; 20 santim kalınlığında bir metrekarelik parça yarım tonu bulur. O parça elle taşınmaz, merdivenden indirilmez, poşete konmaz. Kesim su soğutmalı yapıldıysa ortada bir de çamur olur ve kuruduktan sonra temizlemesi kat kat zorlaşır. Molozun kime ait olduğu, nereye götürüleceği ve nakliyenin fiyata dahil olup olmadığı konuşulmadıysa o yığın sahada kalır."
        ]
      },
      {
        "baslik": "Taşıyıcı Elemana Onaysız Müdahale Teklifi: Buradan Dönülmez",
        "paragraflar": [
          "Kolon, perde ve kiriş binanın yükünü taşıyan elemanlardır. Bunlara delik açmak, bir köşesini kesmek, içinden tesisat geçirmek serbest bir iş değildir. Statik proje üzerinden değerlendirilmesi ve yetkili bir inşaat mühendisinin onayı gerekir. Onay da \"olur\" demekten ibaret değildir; deliğin elemanın neresinden geçeceği, hangi çapta olacağı, kaç adet açılacağı ve gerekiyorsa nasıl güçlendirileceği yazılıdır.",
          "Sahada \"ben bunu yaparım, bir şey olmaz, yıllardır yapıyorum\" cümlesini duyduğunuz anda konuşma bitmeli. Bu cümleyi kuran kişi işin makine tarafını gerçekten biliyor olabilir. Bilmediği şey o kolonun hangi yükü taşıdığıdır, çünkü onu ancak proje söyler. Kesilen donatı geri gelmez. Bir delik doldurulabilir, ama dolgu kesilen demirin yaptığı işi yapmaz ve o nokta yapının zayıf noktası olarak orada kalır.",
          "Emin olmadığınız durumda basit bir kural işe yarar: elemanın taşıyıcı olup olmadığını bilmiyorsanız taşıyıcı kabul edin ve projeye bakılmasını isteyin. Bölme duvar sanılıp kesilen perdeler görülmüş şeydir. Onay süreci işi birkaç gün uzatır, o kadar. Onaysız açılan bir delik ise hem yapıda kalır hem de sorumluluğu yapı sahibinin üstünde bırakır. Bu maddeyi tek başına bir eleme kriteri olarak kullanabilirsiniz."
        ]
      },
      {
        "baslik": "İş Güvenliği ve Sigortalı Çalışan",
        "paragraflar": [
          "Bu işte üç şey çoğu zaman aynı anda bir arada bulunur: yükseklik, su ve elektrik. Kazalar da genelde bu üçünün kesiştiği yerde olur. Yükseklikte çalışılacaksa uygun bir platform kurulması gerekir; el merdiveni üstünde duvar testeresiyle çalışmak diye bir şey yoktur ve böyle bir manzara gördüğünüzde işi durdurmanız gerekir. Emniyet kemerinin takılı olması, kemerin bağlandığı noktanın sağlam olması, platformun korkuluğunun bulunması kadar temel şeylerden bahsediliyor.",
          "Su soğutmalı çalışmada zemin ıslaktır ve makineler elektrikle döner. Kaçak akım rölesi, sağlam bir uzatma kablosu ve ek yerlerinin sudan uzak tutulması tartışma konusu değildir. Kabloyu su birikintisinin içinden geçiren, prizin üstüne naylon atıp geçen bir ekip o gün kaza yaşamasa bile nasıl çalıştığını göstermiş olur. İçeride başka esnaf ya da ev halkı varsa çalışma alanının ayrılması da aynı başlığın altındadır.",
          "Kesilen parçanın nasıl indirileceği baştan planlanmış olmalı. Duvardan alınan blok, karottan çıkan göbek veya döşemede kesilen kapak kontrolsüz düştüğünde altındaki her şeyi ve herkesi ilgilendirir. Karşı tarafın boşaltılması, parçanın askıya alınması, düşeceği yerin hazırlanması işin parçasıdır ve fiyatın içinde olmalıdır. Bir de sigorta var. Sahaya gelecek kişilerin sigortalı olup olmadığını sormak ayıp değil, gerekli. Sigortasız bir işçi evinizde veya işyerinizde kaza geçirdiğinde ortaya çıkan tablo, kesim bedelinin çok ötesindedir."
        ]
      },
      {
        "baslik": "Her İş Her Makineyle Olmaz, Yüzey de Bunu Gösterir",
        "paragraflar": [
          "Ekipmanın işe uygunluğu, işi verenin de kabaca bilmesi gereken bir konu. Elmas diskli duvar testeresi, disk çapının kabaca yarısı kadar derinlik keser. Yani 400 milimetrelik bir diskle 30 santimlik bir duvar tek taraftan kesilmez, iki yüzden karşılıklı çalışmak gerekir. İki kesim ortada tam buluşmazsa köşelerde kalan bağlantılar zorla koparılır ve düzgün kenar diye bir şey kalmaz. Daha kalın kesitlerde ya daha büyük disk ya da elmas tel devreye girer.",
          "Karotta da çap ve derinlik makineyi belirler. Elde tutulan bir makineyle 200 milimetre çapında delik açmaya kalkışmak, ucun salınmasına ve deliğin ekseninden kaçmasına yol açar; o iş sehpaya bağlı bir sistemin işidir. Firmanın hangi yöntemi neden seçtiğini sorun. \"Kırıcıyla kırar geçeriz\" cevabı bazı işlerde gerçekten doğrudur, bazı işlerde ise elinde uygun makine olmadığı anlamına gelir. İkisini ayırmanın yolu, cevabın gerekçesini dinlemekten geçer.",
          "Yöntem seçiminin faturası teslim sonrası yüzeyde görünür. Elmas diskle kesilmiş bir boşluğun kenarı düzgün ve keskin çıkar, kasa doğrudan oturur. Kırıcıyla açılan boşluğun kenarı dağınıktır; sıva, tamir harcı, bazen ilave işçilik ister. Teklif alırken \"iş bittiğinde yüzey ne halde olacak\" sorusunu sormak, sonradan kimin ne yapacağını baştan belirler. Aynı soru zemin, komşu duvar ve tesisat için de geçerlidir."
        ]
      },
      {
        "baslik": "Teklifte Yazılı Olması Gereken 7 Şey",
        "paragraflar": [
          "Sözlü anlaşma, iş bitene kadar herkesin kafasındaki farklı işi korur. Yazılı teklif bunu bitirir. Kaşeli kağıt, resmi sözleşme formatı şart değil; tek bir mesaj olarak yazılması bile tartışmanın büyük kısmını ortadan kaldırır. Aşağıdaki yedi başlık yazılı değilse elinizdeki teklif eksiktir.",
          "Bu yedi başlığın yanına ödeme koşulunu da eklemek gerekir: ne kadarı başlangıçta, ne kadarı teslimde. Bir de şu soru var. Keşiften sonra verilen fiyat işin sonunda değişebilir mi, değişecekse hangi durumda? Bu sorunun cevabını yazılı almak, sahada en sık tartışılan konuyu baştan kapatır."
        ],
        "liste": [
          "İşin tanımı: hangi katta, hangi elemanda, hangi ölçüde, kaç adet. \"Duvar kesimi\" değil, \"3. katta 20 cm betonarme duvarda 90x210 cm kapı boşluğu, 1 adet\" gibi.",
          "Seçilecek yöntem: karot, elmas diskli duvar testeresi, elmas tel, hidrolik ünite ya da kırıcı. Yöntem değişirse fiyatın da değişeceği not düşülsün.",
          "Fiyata dahil olanlar ve olmayanlar: su ve elektrik temini, çalışma platformu veya iskele, örtü ve koruma, kesilen parçanın yerinden alınıp indirilmesi.",
          "Moloz, karot göbeği ve kesim artığının kime ait olduğu, sahadan kimin taşıyacağı ve nereye götürüleceği.",
          "Süre ve çalışma saatleri: iş kaç günde bitecek, hangi saatler arasında çalışılacak, mesai dışına ya da hafta sonuna taşarsa fiyat değişiyor mu.",
          "Sahaya gelecek kişilerin sigortalı olduğu ve iş sırasında üçüncü kişilere veya komşu mala verilecek zararın kime ait olduğu.",
          "Taşıyıcı eleman söz konusuysa, yetkili mühendis onayı gelmeden hiçbir kesimin veya delmenin başlamayacağı."
        ]
      },
      {
        "baslik": "Fiyat Tek Kriter Olduğunda Neden Pahalıya Patlar",
        "paragraflar": [
          "En düşük teklifi seçmek, işin doğru yöntemle yapılacağını varsaymaktır. Varsayım tutmazsa fark kesim faturasında değil tamir faturasında çıkar. Kırıcıyla açılan bir geçiş, testereyle kesilen aynı geçişten ucuza mal olur. Ardından kenar düzeltmesi gelir, sıva gelir, kasanın oturması için ilave işçilik gelir. Titreşim yan duvarın sıvasını veya fayansını çatlattıysa o da listeye eklenir. Toplandığında ucuz görünen teklif, pahalı olanın üstüne çıkar.",
          "Delikte durum daha nettir. Ekseninden kaçmış bir delik düzeltilemez, doldurulup yeniden açılır. Dolgu malzemesi çevresindeki betonla aynı davranmaz ve o nokta yapıda bir zayıflık olarak kalır. Yani ödenen bedel iki delik artı bir tamirdir, üstüne de kalıcı bir kusurdur. Aynı mantık yanlış yerden kesilmiş bir döşeme boşluğu için de geçerli.",
          "Bir de zamanın maliyeti var. Kesim ve delme işi genelde başka imalatların önünde durur; elektrikçi, tesisatçı, kalıpçı o boşluğun açılmasını bekler. İş bir gün yerine üç güne yayıldığında sahadaki herkesin programı kayar. Bu gecikmenin bedeli hiçbir teklifte yazmaz ama işi yaptıranın cebinden çıkar. Fiyat elbette kriterdir, tek kriter olduğunda pahalıya patlar."
        ]
      }
    ],
    "sss": [
      {
        "q": "Telefonda fiyat veren karot firmasıyla çalışmak yanlış mı?",
        "a": "Telefonda söylenen rakam bir fikir verir, bağlayıcı bir teklif değildir. Elemanın kalınlığı, malzemesi, içindeki donatı, çalışma yüksekliği ve kesilen parçanın nasıl çıkarılacağı görülmeden fiyat oturmaz. Firma telefonda bir aralık söyleyip \"yerinde görüp netleştirelim\" diyorsa bu normal bir yaklaşımdır. Keşfe hiç gelmeden kesin rakam veren bir firma ise ya işi olduğundan basit görmüştür ya da aradaki farkı sahada kapatmayı planlamıştır."
      },
      {
        "q": "Kolona veya perdeye delik açtırmak için ne gerekiyor?",
        "a": "Taşıyıcı elemana yapılacak her müdahale statik proje üzerinden değerlendirilmeli ve yetkili bir inşaat mühendisinin onayıyla yapılmalıdır. Onayda deliğin yeri, çapı, adedi ve gerekiyorsa alınacak güçlendirme önlemleri belirtilir. Bu onay olmadan işe başlamayı teklif eden bir firmayla çalışmayın, çünkü kesilen donatı geri gelmez ve sorumluluk yapı sahibinde kalır. Elemanın taşıyıcı olup olmadığından emin değilseniz taşıyıcı kabul edip projeye baktırmak en güvenli yoldur."
      },
      {
        "q": "Moloz ve temizlik normalde kime ait olur?",
        "a": "Bunun tek bir doğrusu yok, firmadan firmaya değişir; önemli olan hangisinin geçerli olduğunun baştan yazılı olmasıdır. Bazı firmalar molozu ve kesim artığını kendi aracıyla götürür ve bunu fiyata dahil eder, bazıları sadece keser ve yığını sahada bırakır. Su soğutmalı kesimde ortaya çıkan çamurun temizliği de ayrı bir iştir, kuruduktan sonra kazımak gerekir. Teklifi alırken \"iş bittiğinde ortada ne kalacak\" sorusunu sorun ve cevabı yazılı isteyin."
      },
      {
        "q": "İki teklif arasında ciddi fark varsa ne yapmalıyım?",
        "a": "Önce iki teklifin gerçekten aynı işi tarif edip etmediğine bakın, çünkü fark çoğu zaman yöntemin veya kapsamın farklı olmasından gelir. Biri elmas testereyle kesip parçayı indirmeyi ve molozu götürmeyi sayıyor, diğeri kırıcıyla açıp yığını yerinde bırakıyor olabilir. Kapsamı eşitleyip aynı soruyu tekrar sorduğunuzda aradaki fark genelde küçülür. Fark yine de büyük kalıyorsa düşük teklifin neyi atladığını açıkça sorun; iş güvenliği önlemleri, sigorta ve temizlik en sık atlanan kalemlerdir."
      }
    ],
    "ilgiliHizmetler": [
      "karot",
      "beton-kesme",
      "beton-delme"
    ]
  },
  "karot-mu-kirici-mi": {
    "seoTitle": "Karot mu Kırıcı mı? Beton Delmede Doğru Yöntem Seçimi",
    "giris": [
      "Telefonda en sık konuştuğumuz konulardan biri bu. Adam arıyor, duvarda ya da döşemede bir boşluk lazım, \"karotla mı yapalım kırıcıyla mı\" diye soruyor. Doğru cevap işin ne olduğuna bağlı ve çoğu zaman deliğin kendisine değil, delik açıldıktan sonra ne olacağına bakarak veriliyor. Boruyu geçirip üstünü kapatacaksanız başka, o betonu tamamen ortadan kaldıracaksanız bambaşka.",
      "Şunu baştan söyleyeyim: kırıcı kötü bir alet değil. Biz beton kırma ve kontrollü bina yıkımı da yapıyoruz, yani \"burada kırıcı daha doğru\" demek bize bir şey kaybettirmiyor. Yanlış olan aleti kötülemek değil, her işe aynı aleti sokmak. Karotla yapılması gereken işi kırıcıyla yapmak da, kırıcıyla üç saatte biteceği işi karotla iki güne yaymak da aynı hatanın iki yüzü.",
      "Karar aslında birkaç sorunun cevabında saklı. Deliğin ölçüsü tutmak zorunda mı, çevredeki beton darbe kaldırır mı, binada oturan ya da çalışan var mı, donatının nerede geçtiğini biliyor muyuz, iş bitince sıva ve tamir masrafı çıkacak mı. Aşağıda bunları tek tek açıyorum. 2015'ten beri Denizli merkez ve ilçelerde yaptığımız işlerde bu sorular hemen her keşifte aynı sırayla önümüze geliyor."
    ],
    "bolumler": [
      {
        "baslik": "Önce şunu sorun: delik gerçekten ölçülü olmak zorunda mı?",
        "paragraflar": [
          "Karot dediğimiz şey elmas uçlu silindirik bir uç. Beton içinde dönerek kendi çapında bir silindir çıkarıyor. İhtiyaca göre 50 mm'den 1000 mm'ye kadar çap seçeneği var. Çıkan delik nominal çapında olur, kenarı düzdür, içi pürüzsüzdür. Yani Ø102 dediyseniz Ø102 alırsınız, iki santim oynamaz.",
          "Kırıcıda böyle bir şey yok. Kırıcı betonu darbeyle parçalar, parçalanma da betonun kendi zayıf noktalarından ilerler. On santimlik bir delik isteyip on sekiz santimlik düzensiz bir yırtık elde etmek gayet normaldir. Boru geçecekse, manşon oturacaksa, flanş sızdırmazlık isteyecekse o kenar işinize yaramaz. Sonradan harçla toparlamak zorunda kalırsınız, o da hem zaman hem para.",
          "Dikdörtgen açıklıklarda mantık aynı. Kapı ya da pencere boşluğu ölçülü olacaksa dört köşesine karotla delik atılır, aralar elmas diskli duvar testeresiyle kesilir, parça bütün halinde alınır. Kenar keskin çıkar, sıva doğrudan üstüne gider. Aynı boşluğu kırıcıyla açtığınızda kenar tırtıklı olur, ölçü büyür, kasa düzgün oturmaz."
        ]
      },
      {
        "baslik": "Çevredeki beton darbe kaldırır mı, donatı ne olacak?",
        "paragraflar": [
          "Kırıcının çalışma prensibi darbe. O darbe sadece kırdığınız yere gitmiyor, çevre betona ve elemanın tamamına yayılıyor. Eski, düşük dayanımlı ya da zaten çatlak almış betonda bu iyice belli oluyor: kırdığınız yerin çevresinde sıva dökülüyor, alt kattaki tavanda çatlak çıkıyor, bazen komşu dairede duvardaki tabloya kadar hissediliyor. Karotta darbe yok. Elmas uç aşındırarak keser, çevreye titreşim binmez.",
          "Donatı konusunda dürüst olalım, çünkü sahada en çok yanlış bilinen şey bu. Karot donatıyı korumaz. Elmas uç demire geldiğinde onu da keser, kesip geçer. Aradaki fark koruma değil, kontrol. Karotta deliğin yerini önceden belirlersiniz, donatı tarama cihazıyla demirin nereden geçtiğini görürsünüz, gerekirse deliği birkaç santim kaydırırsınız. Kırıcıda demire nerede rastlayacağınızı bilmezsiniz; demiri eğersiniz, koparırsınız, üstelik nereyi kestiğinizi de göremezsiniz.",
          "Bu yüzden kolon, perde ve kiriş gibi taşıyıcı elemanlara yapılacak her müdahale, ister küçük bir delik olsun ister koca bir açıklık, statik proje ve yetkili mühendis onayı ister. Onay yoksa yöntem tartışmasının bir anlamı kalmıyor. Onay varsa da genelde deliğin yeri, çapı ve donatıya olan mesafesi projede yazılı olur; o ölçüyü tutturabilen tek yöntem karottur."
        ]
      },
      {
        "baslik": "Toz, gürültü ve titreşim kısıtı var mı?",
        "paragraflar": [
          "Karot su soğutmalı çalışır. Su hem ucu soğutur hem kesme tozunu bastırır. Ortaya toz bulutu yerine çamurlu su çıkar, onu da vakumla veya hortumla toplarsınız. Mobilyalı bir dairede, mesai içindeki bir ofiste, hastane gibi gürültünün ve tozun sorun olduğu yerlerde bu fark her şeyi belirler. Kırıcı ise kuru çalışır; toz kaçınılmazdır, ses ve titreşim de cabası.",
          "Ses tarafında durum daha da net. Karotun sesi motor sesidir, süreklidir ve nispeten alçaktır. Kırıcının sesi darbe sesidir, binanın betonundan yayılır, üç kat yukarıda duyulur. Apartman yönetiminin çalışma saati koyduğu, işletmenin müşteri saatlerinde çekiç sesi istemediği işlerde bu tek başına yöntemi seçtiriyor.",
          "Suyun da yönetilmesi gerekiyor, bunu atlamayalım. Elektrik panosunun altında, asma tavanda ya da parke döşeli bir mekânda çalışıyorsanız suyu toplamadan delik atamazsınız. Biz genelde deliğin altına toplama düzeni kurup vakumla çekiyoruz, çevreyi de örtüyoruz. Suyun hiç kullanılamayacağı yerler de oluyor; orada işin tarifi baştan değişiyor."
        ]
      },
      {
        "baslik": "Süre, maliyet ve işten sonra geriye kalan tamir",
        "paragraflar": [
          "Saatlik bakarsanız kırıcı ucuz görünür. Ama bir işin bedeli sadece deliği açmak değil; sonrasında ne kaldığına da bakmak lazım. Karotla açılan delikte kenar zaten düzgündür, boru geçtikten sonra üstü kapanır, çevrede sıva tamiri neredeyse çıkmaz. Kırıcıyla açılan delikte kenar kırıktır; harç, sıva, bazen kalıp ve boya arkasından gelir. O işçilik ilk gün görünmez, ikinci hafta faturaya girer.",
          "Moloz tarafı da öyle. Yirmi santimlik bir döşemede Ø150 karot tek bir silindir çıkarır, elinizde taşınabilir tek parça olur. Aynı deliği kırıcıyla açtığınızda avuç avuç moloz çıkar; toplama, taşıma ve döküm ayrı bir kalemdir. Üç beş delikte fark etmez, ama delik sayısı arttıkça bu kalem büyür.",
          "Süreye gelince, tek bir Ø100 ya da Ø150 delik yirmi yirmi beş santimlik bir döşemede birkaç dakikada iner. Asıl zaman hazırlıkta geçer: makineyi dübelle sabitlemek, su ve elektriği çekmek, çevreyi kapatmak. Beş on delik varsa karot açık ara hızlıdır, tek delik varsa fark kapanır. Buna karşılık üç dört metrekarelik bir beton döşemeyi tamamen sökeceksek kırıcı çok daha hızlıdır ve orada karot ısrarı sadece günü uzatır. Fiyatı belirleyen şeyler de bunlardır: çap, kesit kalınlığı, delik adedi, donatı yoğunluğu, kata çıkış ve erişim zorluğu, su ve elektrik durumu, bir de çalışma saati."
        ]
      },
      {
        "baslik": "Şu 5 durumda kesinlikle karot",
        "paragraflar": [
          "Keşifte tereddüt bırakmayan durumlar var. Aşağıdakilerden biri masadaysa fazla tartışmıyoruz, karot diyoruz.",
          "Bir de şunu ekleyeyim: elmas tel ya da duvar testeresiyle yapılacak kesimlerin köşe delikleri de karotla açılır. Yani bazı işlerde karot tek başına yöntem değil, diğer yöntemin ön hazırlığıdır."
        ],
        "liste": [
          "Delikten ölçülü bir şey geçecekse. Tesisat borusu, manşon, yangın hattı, havalandırma kanalı, flanşlı bağlantı; çap tutmak zorundaysa kırıcının burada şansı yok.",
          "Delik taşıyıcı bir elemanda ya da ona çok yakınsa. Statik projede yeri ve çapı belirlenmiş bir deliği ancak karotla o ölçüde açabilirsiniz.",
          "Bina kullanımdaysa. Oturulan daire, açık bir işyeri, toz ve gürültünün kısıtlı olduğu her yer; su soğutmalı karot burada tek makul yol.",
          "Beton darbe kaldıracak durumda değilse. Henüz yaşını almamış yeni beton da, eskimiş ve çatlaklı beton da bu gruba girer.",
          "Beton numunesi alınacaksa. Dayanım tespiti için silindir numune ancak karotla çıkarılır, kırıcıyla koparılmış bir parçanın deney değeri olmaz."
        ]
      },
      {
        "baslik": "Şu durumlarda kırıcı daha mantıklı",
        "paragraflar": [
          "Tersi de bir o kadar net. Karotu her işe sokmak ustalık değil inattır. Aşağıdaki işlerde kırıcı hem daha hızlı hem daha ucuz, üstelik sonuç aynı yere çıkıyor.",
          "Zaten çoğu işte ikisi birlikte kullanılıyor. Ölçülü kısmı karot ve elmas diskle alıyorsunuz, gerisini kırıcıyla topluyorsunuz. Keşifte konuştuğumuz şey genelde \"hangisi\" değil, \"hangisi nerede bitecek\" oluyor."
        ],
        "liste": [
          "Büyük hacimli söküm. Eski saha betonu, kalın şap, işlevini yitirmiş bir beton dolgu; burada geometri diye bir dert yok, hacim var.",
          "Geometrinin hiç önemi olmadığı yıkım işleri. Kontrollü yıkımda taşıyıcı olmayan iç bölmelerin ve kaba betonun sökümü çoğu zaman kırıcı işidir.",
          "Karotun ekonomik olmadığı işler. 60x80 bir boşluk için yan yana onlarca delik atmak yerine kenarlarını kesip ortasını kırıcıyla almak hem hızlı hem ucuz.",
          "Suyun kullanılamadığı yerler. Alt katta su hassasiyeti varsa ya da yanınızda korunması gereken ekipman varsa kuru çalışmak zorunda kalabilirsiniz.",
          "Düşük dayanımlı, gevşek ya da grobeton türü dolgular. Elmas uç böyle bir malzemede zaten kayda değer bir avantaj üretmez."
        ]
      },
      {
        "baslik": "Elmas tel ve elmas zincir ne zaman devreye girer",
        "paragraflar": [
          "Karotla kırıcı arasında kalan bir alan var: kalın kesitler ve tek yüzden erişilen yerler. Elmas diskli duvar testeresinin kesme derinliği disk çapıyla sınırlıdır; iki yüzden çalışsanız bile bir yerden sonra kesit yetmez. Kalın perde, kalın temel kesiti, kolon dibi gibi altmış yetmiş santimin üstüne çıkan işlerde elmas tel devreye girer. Tel, kesitin köşelerine karotla açılan deliklerden geçirilir, hidrolik ünite teli döndürür, kesit istediğiniz hat boyunca ayrılır. Kalınlık tel için pratikte sınır değildir.",
          "Elmas zincir başka bir soruna çözüm. Zincirin işi tek yüzden erişilen ve köşesinin tam çıkması gereken kesimler. Büyük çaplı bir diskle dikdörtgen boşluk kestiğinizde köşelerde disk kesimi tamamlayamaz, arka yüzde gizli bir aşım bırakır; onaylı bir açıklıkta bu istenmez. Zincir köşeyi tam noktasında bitirir, fazladan kesim yapmaz.",
          "İkisi de su soğutmalı ve darbesiz çalışır. Yani kırıcının veremeyeceği hassasiyeti, karotun ve diskin yetişemediği kesitte sağlıyorlar. Ekipmanı ve hazırlığı daha ağır olduğu için normal kalınlıkta bir döşemede tek delik ya da küçük bir açıklık için buraya gelmeye gerek yok."
        ]
      }
    ],
    "sss": [
      {
        "q": "Kolonda veya perdede delik açtırabilir miyim?",
        "a": "Yöntemden önce izin konuşulur. Kolon, perde ve kiriş taşıyıcı elemandır; bunlara açılacak her delik ve açıklık statik proje ve yetkili mühendis onayı ister. Onay çıktıysa projede genelde deliğin yeri, çapı ve donatıya olan mesafesi de yazar. O ölçüyü tutturabilen tek yöntem karottur; taşıyıcı bir elemanda kırıcıyla delik açmak doğru değildir."
      },
      {
        "q": "Karot donatıyı kesiyor mu, sorun olur mu?",
        "a": "Evet, elmas uç demire geldiğinde onu da keser. Karotun avantajı demiri korumak değil, nereden geçtiğinizi bilmektir. Delik yerini önceden donatı tarama cihazıyla kontrol edip gerekirse birkaç santim kaydırabilir, kritik donatıyı es geçebilirsiniz. Kırıcıda böyle bir kontrol yok; demire rastgele gelirsiniz, eğersiniz, koparırsınız ve nereyi kestiğinizi göremezsiniz."
      },
      {
        "q": "Oturulan bir dairede karot alınırken toz olur mu?",
        "a": "Karot su soğutmalı çalıştığı için ortaya toz yerine çamurlu su çıkar. O suyu deliğin altında toplayıp vakumla çekiyoruz, çevreyi de örtüyoruz; iş bitince ortada süpürülecek beton tozu kalmıyor. Gürültü tarafında da karotun sesi darbe sesi değil motor sesidir, kırıcıya göre çok daha az rahatsız eder. Yine de suyun alt kata sızmaması için hazırlık şart, onu keşifte konuşuyoruz."
      },
      {
        "q": "Karot mu pahalı, kırıcı mı?",
        "a": "Sadece delme aşamasına bakarsanız kırıcı ucuz görünür, ama iş bittikten sonra kalan tamiri de hesaba katmak gerekir. Kırıcıyla açılan deliğin kenarı bozuk olur; harç, sıva, bazen boya ve moloz taşıma masrafı arkasından gelir. Karotta kenar düzgün çıktığı için o kalemlerin çoğu hiç oluşmaz. Fiyatı belirleyen esas şeyler çap, kesit kalınlığı, delik adedi, donatı yoğunluğu, erişim zorluğu ve çalışma saatidir; keşif ücretsiz olduğu için yerinde bakıp net konuşuyoruz."
      }
    ],
    "ilgiliHizmetler": [
      "karot",
      "beton-delme",
      "beton-kirma",
      "beton-kesme"
    ]
  },
  "karot-nedir": {
    "seoTitle": "Karot Nedir? Karot Makinesi ve Karotçu Rehberi",
    "giris": [
      "Karot, sahada iki ayrı şeyin adı. Biri yöntem, yani elmas uçlu silindirik bir uçla betonda dairesel ve düzgün bir delik açmak; diğeri o işlemden çıkan parça, yani elemanın içinden bütün hâlde alınan beton silindiri. Telefonda karot lazım diyen kişi çoğunlukla birincisini kastediyor, duvardan ya da döşemeden bir geçiş deliği istiyor. Bazen de ikincisini kastediyor ve binanın betonunun gerçekte ne dayanım verdiğini öğrenmek istiyor. İki iş aynı makineyle yapılır ama hazırlığı, seçilen çap ve sonrasında yapılacaklar farklıdır.",
      "Kelime Fransızcadan geliyor, havuç anlamındaki carotte'tan. Sondajda yerin altından çıkarılan uzun ve ince silindire benzetme yoluyla verilmiş bir ad; oradan beton işlerine geçmiş. Karotçu dendiğinde ise bu işi yapan kişi anlaşılıyor: makineyi kuran, sabitleyen, deliği ekseninde tutan, gerektiğinde numuneyi sağlam çıkaran usta. Karotçu laboratuvar değildir. Numuneyi alır, dayanım değerini veren taraf deneyi yapan laboratuvardır.",
      "Yöntemin ayırt edici yanı, betonu kırmadan içinden geçmesi. Kırıcı ya da darbeli matkap malzemeyi ezerek ve çatlatarak ilerler, çatlağın nereye kadar gideceğine bir ölçüde malzeme karar verir. Karot ucu ise dönerek aşındırır, arkasında pürüzsüz bir kenar bırakır ve çevresindeki betonu olduğu yerde tutar. Bu fark taşıyıcı bir elemanın yakınında ya da kaplaması bitmiş bir dairede doğrudan işe yarıyor. Yine de her delik karotla açılmaz; bazı işlerde bu makineyi kurmak boşuna emek olur."
    ],
    "bolumler": [
      {
        "baslik": "İki Anlamı Ayırmak: Karot Delme ve Karot Numunesi",
        "paragraflar": [
          "Karot delmede amaç deliktir. İçinden bir pis su borusu, doğal gaz hattı, kablo demeti, havalandırma kanalı ya da bir ankraj saplaması geçecektir. Çıkan silindir, sahadaki adıyla göbek, işin atığıdır ve molozla birlikte götürülür. Bu işte başarı ölçütü üç şeydir: delik istenen çapta mı, doğrultusu kaçmış mı, çıkış kenarı düzgün mü.",
          "Karot numunesi almada durum tersine döner. Değerli olan çıkan silindirdir, delik yalnızca geriye kalan boşluktur ve işin sonunda tamir harcıyla kapatılır. Burada ölçüt numunenin sağlam gelmesi, içinden donatı geçmemesi ve alındığı betonu temsil etmesidir. Numunenin hangi elemandan ve hangi noktadan alınacağını yapının mühendisi belirler, karotçu o noktadan usulüne uygun çıkarır.",
          "Sahada bu iki iş sık sık birbirine karıştığı için işe başlamadan üç soru soruyoruz. Delikten ne geçecek, yoksa bir rapor mu isteniyor? Delinecek eleman taşıyıcı mı, bölme duvar mı? Delik açıldıktan sonra kapatılacak mı, açık mı kalacak? Bu üç cevap hem çapı hem kurulumu baştan belirliyor."
        ]
      },
      {
        "baslik": "Elmas Uç Betonu Keserek İlerler, Kırarak Değil",
        "paragraflar": [
          "Karot ucu, silindirik bir boru gövdenin ucuna dizilmiş segmentlerden oluşur. Segmentlerin içinde metal bir bağ malzemesine gömülmüş sentetik elmas taneleri vardır. Uç dönerken bu taneler betonu ve içindeki agregayı aşındırarak öğütür. Bağ aşındıkça körelmiş tanenin altından yenisi açığa çıkar; uç çalışırken bir yandan kendini biler. Kesici, malzemenin yalnızca halka biçimindeki dar bir şeridini tüketir; ortada kalan silindire hiç dokunmaz ve o parça bütün hâlde dışarı çıkar.",
          "Kırıcıyla ya da darbeli matkapla aradaki fark burada belirginleşir. Darbeli aletlerde ucun her vuruşu malzemeye şok yükü bindirir, kırılma çatlağın ilerlemesiyle olur ve çatlak her zaman istenen sınırda durmaz. Karotta böyle bir vuruş yoktur. Titreşim düşüktür, delik çevresinde yaygın bir mikro çatlak ağı gelişmez, karşı yüzdeki sıva ya da fayans patlamaz. Ses seviyesi de düşüktür; içinde oturulan bir binada bu ayrıntı çoğu zaman işin yapılabilir olup olmamasını belirliyor.",
          "Makine serbest elde tutulmaz. Motor, bir sehpanın kolonu boyunca inen kızağa bağlıdır ve sehpa yüzeye sabitlenir. Sabitleme yöntemi çapa ve yüzeye göre değişir: dübelli taban plakası, vakum tabanı ya da tavana dayanan gergi direği. Küçük çaplar ve tuğla, gaz beton gibi yumuşak malzemeler için elde tutulan makineler de var ama betonarmede onlarla iş yürümez. Sehpa yüzeye tam oturmamışsa uç dönerken küçük bir titreşim yapar; bu titreşim girişte fark edilmez ama karşı yüze çıkıldığında delik işaretin dışına düşmüş olur."
        ]
      },
      {
        "baslik": "Hangi İşte Karot Gerekir, Hangisinde Gereksiz",
        "paragraflar": [
          "Karot, deliğin çapının belli olması, kenarının düzgün kalması ve çevresine zarar verilmemesi gereken işlerin yöntemidir. Bu üç şart aynı anda aranıyorsa pratikte başka bir yol kalmıyor.",
          "Bunun dışında kalan işlerde makineyi kurmanın anlamı yok. Sekiz on milimetrelik bir dübel deliği için karot kurulmaz, o iş darbeli matkabındır. Tamamen yıkılacak bir bölme duvarda kaba bir açıklık isteniyorsa kırıcı daha hızlı ve ucuz kalır; kenarın düzgünlüğünün kimseye faydası olmayacaktır. Alçıpan ve ahşap gibi hafif malzemelerde de panç yeterlidir.",
          "Karotun asıl maliyeti delme süresi değil, kurulum süresidir. Sehpayı sabitlemek, su düzenini kurmak, örtüleri sermek zaman ister. Tek bir küçük delik için bu hazırlık ağır gelebilir, ama aynı sahada beş on delik varsa hesap tersine döner ve delik başına düşen süre hızla azalır. Bu yüzden keşifte delik adedini, çapları ve katları birlikte çıkarıyoruz. Karotun tercih edildiği işler kabaca şunlar:"
        ],
        "liste": [
          "Tesisat geçişleri: pis su, temiz su, doğal gaz, klima bakır borusu, havalandırma kanalı",
          "Betonarme döşeme, perde ve kirişte açılacak delikler (statik proje ve mühendis onayıyla)",
          "Boyası ve kaplaması bitmiş mekânlarda çevreye dokunmadan açılacak delikler",
          "Beton dayanımı için numune alınması",
          "Kesim hattının köşelerinde, diskin bitiremediği yerlere başlangıç deliği",
          "Tel kesimde telin geçirileceği karşılıklı giriş delikleri"
        ]
      },
      {
        "baslik": "Çap ve Derinlik Neye Göre Belirlenir",
        "paragraflar": [
          "Çapı, delikten geçecek borunun ya da kanalın dış ölçüsü belirler; buna yalıtım kalınlığı ve montaj için birkaç milimetre pay eklenir. Buradaki yaygın hata cömert davranmaktır. Fazladan açılan her milimetre elemandan boşuna kesit alır, sonradan yapılacak dolgu ve yangın durdurucu kapama işini de zorlaştırır. Karot uçları yaklaşık 20 mm ile 600 mm arasında üretiliyor, ama işlerin büyük kısmı bundan çok daha dar bir aralıkta dönüyor.",
          "Derinliği sınırlayan şey ise ucun boyudur. Standart uçlar çoğunlukla 40-50 cm civarında iş görür; normal kalınlıktaki bir döşemeyi ya da perdeyi tek seferde geçerler. Daha kalın kesitlerde araya uzatma parçası girer ve delik kademe kademe derinleştirilir. Uzun kurulumda esneme payı büyüdüğü için sehpa daha sıkı bağlanır, ilerleme düşürülür ve su akışı hiç kesilmez.",
          "Kalınlık bir metreyi geçtiğinde uzatma her zaman çare olmaz; böyle durumlarda elemana iki yüzünden ayrı ayrı girilir. Bunun tek şartı var: iki deliğin ekseni ortada buluşmalı. Birkaç derecelik açı hatası öbür yüzde epeyce sapma demektir ve hatlar kaçarsa geçiş tam açılmaz. Çapın büyümesi de sadece daha büyük bir delik demek değildir; gereken tork ve sehpaya binen yük birlikte artar, küçük çapta iş gören vakum tabanı büyük çapta yetmez. Sahada en sık karşımıza çıkan çaplar şu aralıklarda toplanıyor:"
        ],
        "liste": [
          "Elektrik ve zayıf akım geçişleri: genelde 40-60 mm",
          "Klima bakır borusu ve drenaj hattı: genelde 60-80 mm",
          "Havalandırma ve aspiratör çıkışı: 100-160 mm",
          "Pis su iniş hattı: boru çapına göre 100-200 mm",
          "Beton dayanım numunesi: çoğunlukla 100 mm civarı",
          "Şaft, baca ve toplu tesisat geçişleri: 200 mm ve üstü"
        ]
      },
      {
        "baslik": "Su Neden Kesilmez",
        "paragraflar": [
          "Su karotta üç iş birden yapar. Segmentlerin sıcaklığını düşürür, aşınan malzemeyi delik dışına taşır ve tozu daha oluşurken bastırır. Soğutma yetmediğinde bağ malzemesi yumuşar, elmas taneleri bağın içine gömülür ve segment yüzeyi ayna gibi parlayarak kesmeyi bırakır. O noktadan sonra ne kadar bastırılsa da uç ilerlemez, yalnızca ısınır. Suyun yeterli gidip gitmediği delikten dönen çamurdan anlaşılır: akış incelmişse ya da delik ağzından buhar geliyorsa su azdır.",
          "İkincisi belki daha az bilinir. Kesilen malzeme, uçla delik cidarı arasındaki dar halka boşluğundan dışarı atılmak zorundadır. Su bunu yapamazsa talaş orada birikir, ucu yanlardan sıkıştırır ve motoru zorlar. Üçüncüsü doğrudan sağlıkla ilgili: kuru delmede çıkan ince toz solunabilir boyuttadır, ıslak çalışmada bu sorun daha oluşmadan ortadan kalkar.",
          "İç mekânda ıslaklık istenmediğinde çözüm kuru sisteme geçmek değil, suyu kaynağında toplamaktır. Delik ağzına oturan halka ve ona bağlı emici ünite çamuru daha yayılmadan alır, zemin hiç ıslanmaz. Kuru uçların gerçekten iş gördüğü yer tuğla, bims ve gaz beton cinsinden yumuşak malzemelerdir. Betonarme bir perdede kuru gitmeye çalışmak ucu bitirir ve işi uzatır."
        ]
      },
      {
        "baslik": "Donatıya Denk Gelince Ne Olur",
        "paragraflar": [
          "İşlem durmaz. Elmas uç betonu nasıl aşındırıyorsa demiri de keser, sadece ilerleme belirgin biçimde yavaşlar. Motorun sesi değişir, dönen çamurun içinde metal talaşı görünür. Bu anda yapılan en yaygın hata baskıyı artırmaktır; doğrusu beslemeyi dengede tutup suyu bol vermektir. Kabaca bir fikir vermek gerekirse, 20 cm kalınlığında donatısız bir döşemede 100 mm'lik delik birkaç dakikada iniyor; aynı çap sık donatılı bir perdede yarım saate yaklaşabiliyor. Demir kesmek ucu da yıpratır; çelik betona göre sünektir ve segment yüzeyini parlatır.",
          "Asıl mesele teknik olan değil, yapısal olanıdır: kesilen o demir hangi elemana ait? Bölme duvarın içinden geçen bir hasır teli kimseyi ilgilendirmez. Kolon, perde, kiriş ya da döşemede kesilen donatı ise doğrudan kesit kaybıdır ve elemanın taşıma gücünü ilgilendirir. Bu yüzden taşıyıcı elemanlarda deliğin nereden geçeceğini statik proje söyler; onaylı proje ve yetkili mühendis onayı olmadan bu elemanlara dokunulmaz.",
          "Onay geldikten sonra da hazırlık bitmiş sayılmaz. Delik yeri projedeki konuma göre işaretlenir, donatı taramasıyla teyit edilir ve imkân varsa birkaç santim kaydırılarak demirin arasından geçilmeye çalışılır. Çoğu zaman aynı geçiş bölme duvardan ya da döşemenin başka bir noktasından da çözülebiliyor; öyle bir alternatif varsa keşifte onu söylüyoruz."
        ]
      },
      {
        "baslik": "Karot Numunesi ve Beton Dayanım Testi",
        "paragraflar": [
          "Mevcut bir yapının betonunun gerçekte ne dayanım verdiğini öğrenmenin en doğrudan yolu, yapının kendisinden bir parça almaktır. Güçlendirme projelerinde, riskli yapı değerlendirmelerinde, dönüşüm sürecinde ya da dökülen betonla ilgili şüphe doğduğu durumlarda bu numune isteniyor. Yüzeyden yapılan çekiç ölçümleri fikir verir ama tek başına yeterli sayılmaz; değerlendirmenin dayandığı sayı silindirin laboratuvarda kırılmasıyla bulunur.",
          "Numunenin nereden alınacağı karotçunun kararı değildir. Hangi kat, hangi eleman, elemanın hangi bölgesi sorusunu yapının mühendisi cevaplar; rastgele seçilen bir nokta hem raporu tartışmalı kılar hem elemana boşuna zarar verir. Alma işinde üç şeye dikkat edilir. Numune yüzeye dik alınır. İçinden donatı geçmemelidir, o yüzden delmeden önce tarama yapılır; demir içeren bir silindir betonu temsil etmez. Çapı seçerken beton içindeki en iri agrega tanesi gözetilir; yeterince kalın olmayan bir silindirde denk gelen tek bir iri tane bile sonucu kaydırabilir.",
          "Boy ve çap oranı da serbest değildir, bu oran raporlanan dayanım değerini doğrudan etkiler. Kısa kalan bir numune sonradan telafi edilemez, o eleman ikinci kez delinir. Silindir kırılmadan, alındığı yer ve yön üzerine yazılarak teslim edilir. Arta kalan boşluk uygun bir tamir harcıyla kapatılır; bu adım atlanırsa bilgi almak uğruna açılmış bir zayıf nokta yapıda öylece kalır. Numune sayısı da mühendisin programına bağlıdır, tek bir silindirden bütün bina hakkında hüküm çıkmaz."
        ]
      }
    ],
    "sss": [
      {
        "q": "Karot ile darbeli matkap arasındaki fark nedir?",
        "a": "Darbeli matkap ucu döndürürken bir yandan da vurur, malzemeyi ezerek ve çatlatarak ilerler. Karot ucu vurmaz, yalnızca döner ve elmas segmentlerle aşındırarak keser. Ortaya çıkan delikte fark bellidir: karot deliğinin kenarı düzgündür, çevresinde çatlama olmaz, karşı yüzdeki kaplama patlamaz. Buna karşılık küçük ve basit deliklerde darbeli matkap daha pratiktir; karot, çapın ve kenarın önemli olduğu işler için vardır."
      },
      {
        "q": "Karot makinesi su vermeden çalışır mı?",
        "a": "Kuru çalışan uçlar var; delinen malzeme tuğla ya da gaz beton cinsindense toz emişli üniteyle iş görüyorlar. Donatılı betonda ise su vermeden çalışmak doğru değildir; segment kısa sürede aşırı ısınır, yüzeyi parlar ve kesmeyi bırakır. Su aynı zamanda kesilen malzemeyi delikten dışarı taşır, bu olmadığında uç halka boşluğunda sıkışır. İç mekânda ıslaklık istenmiyorsa toplama halkası ve emici üniteyle ıslak çalışılır, su zeminle hiç buluşmaz."
      },
      {
        "q": "Karot deliği açarken donatı kesilirse sorun olur mu?",
        "a": "Bölme duvarda ya da taşıyıcı olmayan bir elemanda kesilen donatı pratikte sorun çıkarmaz. Kolon, perde, kiriş ve döşemede ise kesilen her demir kesit kaybı demektir ve elemanın taşıma gücünü ilgilendirir. Bu yüzden taşıyıcı elemanlarda delik yeri statik projeden okunur, yetkili mühendisin onayı alınır ve delmeden önce donatı taraması yapılır. Tarama sonrası deliği birkaç santim kaydırıp demirin arasından geçmek çoğu zaman mümkün oluyor."
      },
      {
        "q": "Alınan karot numunesini kim değerlendirir?",
        "a": "Numuneyi almak ile dayanım değerini vermek iki ayrı iştir. Karotçu numuneyi doğru noktadan, yüzeye dik, donatısız ve kırılmadan çıkarmakla sorumludur. Silindirin ölçülmesi, hazırlanması ve kırılarak dayanımının belirlenmesi laboratuvarın işidir. Numunenin hangi elemandan alınacağını ve çıkan sonucun yapı için ne anlama geldiğini ise yapının mühendisi değerlendirir."
      }
    ],
    "ilgiliHizmetler": [
      "karot",
      "beton-delme"
    ]
  },
  "karot-numunesi-nasil-alinir": {
    "seoTitle": "Karot Numunesi Nasıl Alınır? Kim Alır, Kim Raporlar",
    "giris": [
      "\"Karot testi\" tek bir işmiş gibi konuşuluyor ama sahada üç ayrı taraf var ve üçünün işi birbirinden net biçimde ayrı. Numunenin hangi elemandan, nereden ve kaç adet alınacağına yapının mühendisi karar verir. Numuneyi betondan çıkarma işini bizim gibi karot ekipleri yapar. Silindirin ölçülmesi, hazırlanması, kırılarak dayanımının belirlenmesi ve raporlanması ise yetkili laboratuvarın işidir.",
      "Bu ayrımı baştan söylüyorum, çünkü bize gelen soruların çoğu aslında bizim cevaplayamayacağımız sorular: \"sonucum kaç çıkar\", \"binam riskli mi\", \"rapor ne zaman gelir\". Biz alma işini yaparız; deneyi ve raporlamayı laboratuvar yürütür, sonucun yapı için ne anlama geldiğini ise mühendis yorumlar. Bu sınırı bulandıran bir firma size iyilik yapmıyor.",
      "Aşağıda numune almanın hangi durumlarda gündeme geldiğini, yerin nasıl seçildiğini, işlemin sahada nasıl yürüdüğünü ve sonrasında ne olduğunu anlattım. Sık sorulan birkaç şeyin — \"her daireden alınır mı\", \"tek başıma aldırabilir miyim\" — cevabı da göründüğünden farklı."
    ],
    "bolumler": [
      {
        "baslik": "Karot Hangi Durumlarda Alınır?",
        "paragraflar": [
          "En bilinen sebep mevcut bir yapının beton dayanımının belirlenmesi. Proje aşamasında hesaplanan beton sınıfının sahada gerçekten tutup tutmadığı, ancak yapıdan alınan numunenin kırılmasıyla anlaşılır. Güçlendirme projesi hazırlanacaksa mevcut dayanımın bilinmesi zorunludur; hesap onun üzerine kurulur.",
          "İkinci sebep yeni yapılarda uyuşmazlık ya da şüphe. Dökümden alınan taze beton numuneleri beklenen sonucu vermediyse, ya da dökümde bir aksaklık olduğu düşünülüyorsa, sertleşmiş yapıdan numune alınarak durum kontrol edilir.",
          "Üçüncüsü yapı stoğunun değerlendirilmesi kapsamındaki incelemeler. Bu süreçlerin nasıl yürüdüğü, kimin başvurabileceği ve sonucun ne doğuracağı mevzuatla belirlenmiştir; kararı da yetkili kurum ve kuruluşlar verir. Biz bu sürecin tarafı değiliz, yalnızca numune alma işini yaparız. Sürecin kendisiyle ilgili soruları ilgili kuruma ya da yapının mühendisine yöneltmek gerekir."
        ]
      },
      {
        "baslik": "Numune Nereden Alınır? Yeri Kim Seçer?",
        "paragraflar": [
          "Yeri biz seçmiyoruz. Hangi elemandan, kaç adet ve nereden alınacağını yapının mühendisi belirler. Bu karar için yapının projesini, taşıyıcı sistemini ve incelemenin amacını bilmek gerekir; sahada gözle bakarak verilecek bir karar değildir.",
          "Belirlenen yerde bizim işimiz teknik kısıtları sağlamak. Numune yüzeye dik alınır, içinde donatı bulunmaması istenir, alındığı yer ve yön etiketlenir. Donatının nerede olduğu delik açılmadan önce donatı tarama cihazıyla belirlenir; bu adım atlandığında hem numune geçersiz olur hem de elemanın donatısı kesilir.",
          "Kritik bölgelerden — kolon-kiriş birleşimleri, mesnet bölgeleri gibi — numune alınmaz. Numune elemanın taşıma gücünü etkilemeyecek bir konumdan seçilir. Silindirin çapı ve boyu da deneyin kendi kurallarına tabidir; laboratuvarın kabul edeceği ölçüler bellidir ve o ölçüde numune çıkarmak alma işinin sorumluluğudur."
        ]
      },
      {
        "baslik": "\"Karot Her Daireden Alınır mı?\" — Yanlış Kurulmuş Bir Soru",
        "paragraflar": [
          "Numune daireden alınmaz, yapı elemanından alınır. Kolondan, perdeden, döşemeden. Bir dairenin içinde bulunan bir kolondan numune alınması, o numunenin \"o daireye ait\" olduğu anlamına gelmez; o eleman binanın tamamının taşıyıcı sisteminin parçasıdır.",
          "Bu yüzden \"her daireden alınacak mı\" sorusunun cevabı hayır, ama sebebi kapsamın dar tutulması değil. Numune sayısı ve dağılımı, incelenen yapının büyüklüğüne ve mühendisin kurduğu değerlendirme planına göre belirlenir. Bazı numunelerin farklı katlardan alınması istenebilir, çünkü döküm farklı zamanlarda yapılmış olabilir.",
          "Pratikte şu olur: mühendis numune alınacak elemanları listeler, o elemanların hangi bağımsız bölümlerin içinde kaldığı ortaya çıkar ve o dairelere erişim gerekir. Yani hangi daireye girileceği bir tercih değil, seçilen elemanların nerede durduğunun sonucudur."
        ]
      },
      {
        "baslik": "İşlem Sahada Nasıl Yürüyor?",
        "paragraflar": [
          "Numune alma işi, teknik olarak bildiğimiz karot delme işinin kendisidir. Elmas uçlu silindirik uç, su soğutmalı olarak betona dik biçimde ilerler ve içinden silindir bir parça çıkarır. Makine yüzeye dübelle ya da vakumla sabitlenir; sabitleme gevşek olursa uç eksenden kaçar ve numune eğri çıkar, o numune de kabul edilmez.",
          "Su soğutmalı çalışıldığı için toz havaya kalkmaz. Buna karşılık kesim suyu ve çamur ortaya çıkar; daire içinde çalışılıyorsa zemin ve mobilya başlamadan örtülür, suyun nereye akacağı önceden çözülür. Delme işleminin kendisi genelde birkaç dakika sürer; zamanın çoğu donatı taraması, sabitleme, örtme ve toplanmaya gider.",
          "Çıkan silindir etiketlenir ve laboratuvara teslim edilir. Etiketin üzerinde numunenin hangi elemandan, hangi yönde alındığı yazar; bu bilgi olmadan laboratuvar sonucu doğru şekilde raporlayamaz. Bizim iş, doğru ölçüde ve zarar görmemiş bir numuneyi doğru etiketle teslim etmekle biter — bir de geriye kalan deliğin ne olacağıyla."
        ]
      },
      {
        "baslik": "Sonuç Ne Zaman Çıkar, Kaç Olmalı?",
        "paragraflar": [
          "Numune laboratuvara gittikten sonraki süre laboratuvarın kendi iş programına ve deney planına bağlıdır; bu konuda söz veremeyiz, çünkü o aşama bizim elimizde değil. Süreyi laboratuvardan ya da işi yürüten mühendisten öğrenmek gerekir.",
          "\"Sonuç kaç çıkmalı\" sorusunun tek bir sayısı yok. Beton sınıfları — C25, C30 gibi — belirli bir karakteristik dayanımı ifade eder, ama yapıdan alınan numunenin sonucu ile proje beton sınıfı doğrudan aynı ölçekte karşılaştırılmaz; değerlendirmenin kendi kuralları vardır ve tek bir numuneye bakılarak yapılmaz. Numune sayısı, dağılımı ve istatistiksel değerlendirme birlikte anlam kazanır.",
          "Sonucun yapı için ne anlama geldiğini yorumlamak da mühendisin işi. Aynı sayı, farklı taşıyıcı sistemlerde farklı sonuç doğurur. Bu yüzden laboratuvar raporunu alıp internetten yorum aramak yerine, raporu değerlendirmesi için yapının mühendisine götürmek doğru olan."
        ]
      },
      {
        "baslik": "Bizim Yapmadığımız Şeyler",
        "paragraflar": [
          "Rapor düzenlemiyoruz. Beton dayanım deneyi ve raporlaması yetkili laboratuvarların işidir; biz numune alma hizmeti veriyoruz. Karot raporu veren bir karot firması arıyorsanız, aradığınız şey aslında bir laboratuvardır.",
          "Sonuç yorumlamıyoruz. Çıkan değerin yapı için ne ifade ettiği, güçlendirme gerekip gerekmediği, hangi kararın alınacağı mühendislik değerlendirmesidir. Sahada \"bu beton iyi görünüyor\" gibi bir cümle kurmuyoruz; numuneye bakarak dayanım tahmin edilemez.",
          "Yapının durumuyla ilgili resmî tespit süreçlerinin tarafı değiliz. O süreçler mevzuatla düzenlenmiş, yetkili kuruluşlar tarafından yürütülüyor. Bize düşen, o sürecin ihtiyaç duyduğu numuneyi tekniğine uygun şekilde almak.",
          "Bunları saymamızın sebebi işten kaçmak değil. Sınırı belirsiz bırakan bir firma, size cevaplayamayacağı sorulara cevap veriyor demektir; o cevaplara dayanarak alacağınız kararın bedeli de size kalır."
        ]
      },
      {
        "baslik": "Denizli'de Numune Alma İşi",
        "paragraflar": [
          "Denizli merkez ve 20 ilçenin tamamında numune alma işi yapıyoruz. Mühendis ya da laboratuvar tarafından belirlenmiş bir numune planı varsa doğrudan ona göre çalışırız; plan yoksa önce onun oluşturulması gerektiğini söyleriz.",
          "Keşif ücretsizdir. Yerinde bakar, elemanlara erişimi, sabitleme imkânını, su ve elektriğin nereden alınacağını değerlendirir, işin ne tutacağını başlamadan net söyleriz. Oturulan binalarda çalışıyorsak giriş çıkış düzeni, örtme ve temizlik de planın parçasıdır — iş, son numune çıktığında değil saha toplandığında biter."
        ]
      },
      {
        "baslik": "Numune Alınacak Gün İçin Hazırlık",
        "paragraflar": [
          "Numune alınacak elemanların yüzeyine erişilebilir olması gerekiyor. Kolonun önünde dolap varsa çekilmesi, duvarda kaplama varsa o bölgede kaldırılması gerekir; makine yüzeye dübelle ya da vakumla sabitleniyor ve araya giren her tabaka sabitlemeyi bozar. Bunu önceden söylüyoruz ki ekip geldiğinde saat mobilya taşımakla geçmesin.",
          "Su ve elektrik gerekiyor. Karot makinesi su soğutmalı çalışır; suyun nereden alınacağı ve çamurun nereye gideceği önceden çözülmezse daire içinde iş büyür. Elektriğin mevcut tesisattan alınamadığı durumlarda jeneratörle ya da hidrolik sistemle gidiyoruz, ama bunun keşifte belli olması gerekir.",
          "Bağımsız bölüm içinde çalışılacaksa o gün birinin evde bulunması gerekiyor. İşlem sırasında gürültü olur, kesim suyu çıkar; zemin ve mobilya biz başlamadan önce örtülür. Numunenin çıkması dakikalar sürer ama hazırlık, örtme ve toplanma birlikte düşünüldüğünde bir elemanda geçen süre çok daha uzundur.",
          "Kaç elemandan numune alınacağı belliyse gün planını ona göre kuruyoruz. Birden fazla katta çalışılacaksa sırayı, hangi daireye ne zaman girileceğini önceden paylaşırız — oturulan binalarda bu, işin en çok şikâyet üreten kısmı ve önceden konuşulduğunda tamamen ortadan kalkıyor."
        ]
      }
    ],
    "sss": [
      {
        "q": "Karot testi nasıl yapılıyor?",
        "a": "Üç aşamalı bir iş. Yapının mühendisi numunenin hangi elemandan, nereden ve kaç adet alınacağını belirler. Karot ekibi elmas uçlu makineyle, su soğutmalı ve yüzeye dik biçimde silindir numuneyi çıkarır, etiketleyip teslim eder. Yetkili laboratuvar numuneyi hazırlar, kırar ve raporlar. Biz alma işini yapıyoruz; deney ve rapor laboratuvarın işi."
      },
      {
        "q": "Numunenin alınacağı yeri kim seçer?",
        "a": "Yapının mühendisi. Bu karar için projeyi ve taşıyıcı sistemi bilmek gerekir. Bizim tarafımızdaki kısıtlar teknik: numune yüzeye dik alınır, içinde donatı bulunmamalıdır, kritik bölgelerden alınmaz ve alındığı yer ile yön etiketlenir. Donatının konumu delme öncesi tarama cihazıyla belirlenir."
      },
      {
        "q": "Karot her daireden alınır mı?",
        "a": "Numune daireden değil, yapı elemanından alınır — kolondan, perdeden, döşemeden. Bir dairedeki kolondan alınan numune o daireye değil binanın taşıyıcı sistemine aittir. Hangi dairelere girileceği, mühendisin seçtiği elemanların nerede kaldığının sonucudur."
      },
      {
        "q": "Karot sonucu kaç günde çıkar?",
        "a": "Numune laboratuvara teslim edildikten sonraki süre laboratuvarın iş programına bağlıdır ve bu konuda söz veremeyiz, çünkü o aşama bizim elimizde değil. Süreyi laboratuvardan veya işi yürüten mühendisten öğrenmek gerekir. Sahadaki numune alma işlemi ise genelde aynı gün tamamlanır."
      },
      {
        "q": "Karot raporunu siz veriyor musunuz?",
        "a": "Hayır. Beton dayanım deneyi ve raporlaması yetkili laboratuvarların işi. Biz numune alma hizmeti veriyoruz. Çıkan sonucun yapı için ne anlama geldiğini yorumlamak da yapının mühendisine ait; numuneye bakarak dayanım tahmin edilemez."
      }
    ],
    "ilgiliHizmetler": [
      "karot",
      "beton-delme"
    ]
  }
}

export default blogContent
