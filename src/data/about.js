import siteConfig from './siteConfig.js'

/**
 * Hakkımızda sayfası içerikleri.
 */

// Kuruluş yılı tek yerde: src/data/siteConfig.js. Buradan yeniden dışa
// aktarılıyor ki Hakkımızda sayfası aynı değeri kullansın.
export const foundedYear = siteConfig.foundedYear

/**
 * YOLCULUK (TIMELINE) — BİLİNÇLİ OLARAK BOŞ. Doldurmadan önce oku.
 *
 * Burada beş kilometre taşı vardı: "Makine Parkuru", "Ekip Genişlemesi",
 * "Hidrolik Sistemler", "Bölgesel Hizmet Ağı". Hiçbiri gerçek değildi —
 * yılları `foundedYear + 3/6/8/10` diye hesaplanıyordu, yani şablondan
 * gelen bir yer tutucuydu ve kuruluş yılı değişince bütün "tarihler"
 * kayıyordu. 2026-08-13'te kaldırıldı; o güne kadar canlıda duruyordu.
 *
 * Dizi boş olduğu için About.jsx bölümü tamamen gizliyor (timeline.length > 0).
 *
 * Yeniden doldurmak için ŞART: her maddenin yılı ve olayı firmadan
 * doğrulanmış olmalı. Doğrulanmış tek tarih şu an kuruluş yılı (2015).
 * Tarih uydurmak yerine bölümü kapalı bırakmak doğru olan — sayfanın
 * ağırlığını zaten `hikaye` ve `yaklasim` taşıyor.
 */
export const timeline = []

/**
 * Çalışma prensipleri — Hakkımızda sayfasındaki kart bölümü.
 * Önceki "Değerlerimiz" listesi genel geçer ifadelerden oluşuyordu
 * ("Kalite", "Güvenilirlik"); yerine firmanın gerçekten nasıl çalıştığını
 * anlatan somut maddeler geldi.
 */
export const yaklasim = [
  {
    icon: 'clipboard',
    baslik: 'Önce keşif, sonra fiyat',
    metin: 'Sahayı görmeden fiyat vermiyoruz. Keşif ücretsizdir; yerinde bakar, uygulanacak yöntemi belirler, işin ne tutacağını başlamadan önce net olarak söyleriz. Verdiğimiz rakam işin tamamını kapsar, iş sırasında "bu ayrıydı" diye kalem eklenmez. Müşteri kapsamı kendisi genişletmek isterse o kısmı da yine başlamadan konuşur, anlaştıktan sonra devam ederiz. Fiyatı baştan netleştirmek hem bizim hem karşı tarafın işini kolaylaştırıyor; kimse iş bitiminde sürprizle karşılaşmıyor.',
  },
  {
    icon: 'building',
    baslik: 'Taşıyıcı elemana müdahale',
    metin: 'Kolon, perde ve kirişe müdahale, statik proje ve mühendis onayı olmadan yapılmaz. Bu bizim tercihimiz değil, işin kuralı. Onaylı proje varsa uygulamayı projede yazan yere, çapa ve ölçüye birebir yaparız; projede olmayan bir deliği kendi kararımızla açmayız, açtırmayız da. Onay yoksa işi almaz, sebebini açıkça anlatır, izlenmesi gereken sırayı söyleriz. Bu maddede pazarlık yapmıyoruz.',
  },
  {
    icon: 'cog',
    baslik: 'Yönteme göre makine',
    metin: 'Her işe aynı makineyle gidilmez. Delik açılacaksa su soğutmalı elmas uçlu karot makinesi, düz ve derin kesim gerekiyorsa ray sistemli duvar testeresi, kalın kesitlerde ya da elektriğin sorun olduğu sahalarda hidrolik güç üniteli kesme sistemi kullanırız. Hangisinin uygun olduğuna keşifte karar veririz. Ölçümüz en hızlı biten yöntem değil, çevre yapıya en az yük bindiren yöntemdir. Zorlanan bir makine hem betona hem işe zarar verir.',
  },
  {
    icon: 'shield',
    baslik: 'İş güvenliği',
    metin: 'Çalışma alanı kapatılmadan makineye dokunulmaz. Makine sabitlenir, su ve elektrik kontrol altına alınır, kesilen parçanın nereye düşeceği önceden planlanır; döşeme ve duvar kesimlerinde parça askıya alınmadan kesim tamamlanmaz. Kablo ve hortum düzeni işin başında kurulur, çünkü suyla elektrik aynı sahada. Ekip kendi koruyucu donanımını kullanır. Oturulan binada giriş çıkış ve komşu geçiş güzergâhı da planın içindedir.',
  },
  {
    icon: 'sparkle',
    baslik: 'Sahayı temiz teslim',
    metin: 'İş, son kesim bittiğinde değil saha toplandığında biter. Çıkan molozu toplar, yükler ve nakliyesini yaparız; bu fiyata dahildir, ayrıca hesaplanmaz. Kesim suyu ve çamur ortalıkta bırakılmaz, zemin süpürülür. Daire içinde çalışıldıysa mobilya ve zemin daha başlamadan örtülür. Müşterinin arkamızdan temizlikçi tutması ya da moloz için ayrı araç araması gerekmez. Sahayı bulduğumuz halden kötü bırakmayız.',
  },
]

export const hikaye = [
  'Karot, betonarmeye kırıcıyla saldırmak yerine elmas uçlu silindirik bir uçla dairesel delik açma işidir. Uç betonu keserek ilerlediği için çevre yapı çatlamaz, donatı zorlanmaz, delik kenarı pürüzsüz çıkar; arkasından sıva tamiri gerekmez. Aynı mantık kesimde de geçerli. Elmas disk betonu kırmadan keserek ayırır, bu yüzden gürültü ve titreşim kırıcıya göre belirgin şekilde azdır; sulu çalıştığımız için toz da havaya kalkmaz. Denizli\'de yaptığımız işlerin çoğu bunun etrafında dönüyor: tesisat ve havalandırma geçişleri, asansör boşluğu, duvar ve döşeme kesimi, filiz ekimi, kimyasal dübel, ankraj, asfalt derz kesim, kontrollü yıkım. Çap ihtiyaca göre 50 mm ile 1000 mm arasında değişir. Zor olan kısmı, hangi yöntemin nerede doğru olduğunu bilmektir.',
  'Bir iş genelde telefonla başlar, ama telefonda fiyat vermeyiz. Sahaya gelir, delinecek ya da kesilecek yeri kendi gözümüzle görürüz. Duvarın kalınlığı, içinden donatı geçip geçmediği, yakınındaki tesisat, makinenin nereye sabitleneceği, su ve elektriğin nereden alınacağı ancak yerinde anlaşılır. Keşif ücretsizdir. Gördükten sonra yöntemi ve fiyatı net söyleriz, iş bitiminde faturaya sonradan kalem eklenmez; konuşulan rakam neyse odur. Keşfi baştan savma yapmamamızın sebebi de bu, çünkü eksik bakılan bir iş sonunda ya bizi ya müşteriyi zora sokuyor. Bazen keşifte o işin hiç gerekmediği ortaya çıkar. Onu da söyleriz.',
  'En çok soru kolon, perde ve kirişte çıkıyor. Taşıyıcı bir elemana müdahale, statik proje ve mühendis onayı olmadan yapılmaz. Bunu tartışmaya açmayız. Israr edilse de olmaz, çünkü orada açılan bir boşluk o an hiçbir belirti vermeden yükü taşıyan sistemi zayıflatır; hesabı gerçek bir yükle karşılaşınca ödenir. Bu bir formalite değil, binanın ayakta kalması meselesi. Onay yoksa müşteriyi oyalamaz, kiminle görüşmesi gerektiğini anlatırız. Taşıyıcı olmayan bölme duvarlarda durum farklıdır; orada hem kesim hem delme çok daha rahat yapılır. Yine de duvarın gerçekten bölme olduğundan emin olmadan başlamayız.',
  // "yılından beri" kalıbı bilinçli: `${foundedYear}'ten` yazılsaydı yıl
  // değiştiğinde ünlü uyumu bozulurdu (2010'ten). Bu kalıp her yılda doğru.
  `${foundedYear} yılından beri Denizli'deyiz. Merkezimiz Merkezefendi'de; il genelinde 20 ilçeye gidiyoruz. Çivril'e de gideriz, Çameli'ye de. Telefon 7/24 açık, çünkü bu işin bir kısmı mesai saatine uymuyor: su basmış bir bodrum ya da ertesi güne sarkamayacak bir üretim duruşu gece de karşınıza çıkabilir. Şantiyenin kendi programı varsa ona göre planlarız; akşam veya hafta sonu çalışmak gerekiyorsa oturur konuşuruz. Uzak ilçelere işi tek seferde bitirecek ekipmanla gideriz, yarısını yapıp ikinci kez yola çıkmak kimsenin işine yaramıyor. Mesafe fiyatı etkileyebilir ama işin yapılış şeklini değiştirmez.`,
  'İşlerimizin çoğu insanların oturduğu binalarda, çalışan tesislerde ya da trafiğe açık yollarda geçiyor. Orada sadece deliği doğru açmak yetmiyor; tozun nereye gideceğini, suyun nereden akacağını, gürültünün kimi rahatsız edeceğini de hesaba katmak gerekiyor. Komşuyla önceden konuşulur, ortak alan örtülür, çalışma saati mümkün olduğunca gündüze alınır. Fabrikada ise üretimin durduğu aralık neyse iş ona göre kurgulanır. Bitirip çıkarken sahanın toplanmış olması bizim için işin parçası, sonradan yapılan bir jest değil. Bir işe başlamadan önce nasıl yapılacağını baştan anlatmamızın sebebi de bu.',
]
