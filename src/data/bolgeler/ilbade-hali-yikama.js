/**
 * İlbade (Merkezefendi) — bölge sayfası metni.
 *
 * BU DOSYA TEK BAŞINA İNER. src/pages/ServiceAreaDetail.jsx içindeki
 * import.meta.glob yalnızca açılan bölgenin dosyasını çekiyor; 61 bölgenin
 * metni tek pakette dursaydı her bölge sayfası 65 kB gzip indirirdi.
 *
 * İsim/slug/tür gibi hafif alanlar burada DEĞİL, src/data/bolgelerIndex.js'te.
 * Benzerlik ölçümü: node arac/model-testi/denetle.mjs
 */

export default {
  intro: [
    "Baza temizliğinde işin yarısı temizlemek değil, hazırlamak. Kapak kaldırıldığında altından yorgan, yastık, bavul ve mevsimlik ne varsa çıkıyor; bunlar dışarı alınmadan sandığın içine ulaşılamıyor, çünkü kapak açık kaldığı sürece çalışılacak yüzeyin yarısı zaten kapalı duruyor. Bu yüzden randevu konuşurken gün ve saatin yanına bir madde daha ekliyoruz: sandığın o güne kadar boşaltılmış olması. Ekip geldiğinde boşaltmayla uğraşılırsa hem ziyaret uzuyor hem de çıkan eşya odanın içinde, birazdan çalışılacak yüzeyin üstüne yığılıyor. Yatak odasının kapısına kadar taşınmış bir yığın da aynı sorunu doğuruyor, çünkü ünitenin çalışacağı alan tam olarak orası. Boşaltılmış bir bazada iş, gelinen saatte başlıyor ve tek ziyarette kapanıyor.",
    "Yatak ve baza evden çıkmıyor, iş İlbade'deki dairelerde yerinde yapılıyor. Yüksek basınçlı ünite odaya alınıyor ve çalışabilmesi için bir priz ile temiz suya erişim gerekiyor; kapıdan girerken sorduğumuz ilk şey bu oluyor. Bazanın dış kumaşı, kenar bandı ve kapağın iç yüzü ayrı ayrı geçiliyor. Sandığın tabanı ise eşya çıktıktan sonra ayrıca çalışılıyor, çünkü orası kapak kapalı durduğu için yıllardır el değmemiş bir yüzey oluyor ve köşelerde biriken toz elle alınmıyor. Aynı ziyarette yatağın kendisi de ele alınabiliyor; bunu randevu alırken söylemeniz yeterli, ünite zaten odada kurulu oluyor. İki işi ayrı günlere bölmek yerine tek kurulumda bitirmek daha az uğraş çıkarıyor."
  ],
  yerelBaglam: "Merkeze yakın, yerleşik hanelerin oturduğu apartman dairelerinden oluşan bir doku burası. Daireler orta ölçekte ve ayrı bir depo alanı yok; evin fazlalığı yatak odasına, oradan da bazanın içine iniyor. Bir sandıkta kışlık yorganın yanında valiz, kumaş parçası ve yıllardır açılmamış kutu bulunuyor. Baza temizliğini diğer işlerden ayıran şey de bu: yüzeyle sınırlı bir iş değil, önünde bir boşaltma aşaması olan bir iş. Kat ve asansör durumu burada belirleyici olmuyor, çünkü parça evden çıkmıyor; taşıma diye bir kalem yok. Belirleyici olan, bazanın çevresinde ünitenin hortumunu rahatça dolaştıracak kadar boşluk kalması. Yatak odası kapısının genişliğini de soruyoruz, çünkü ünite hortumuyla birlikte odaya girmek zorunda.",
  note: "",
  sss: [
    { q: "Baza sandığını randevudan önce boşaltmalı mıyız?", a: "Evet, bunu baştan konuşuyoruz. Sandık dolu olduğunda kapağın altındaki yüzeye ulaşmak mümkün olmuyor ve eşyayı biz çıkarırsak odanın içinde ona yer bulmak gerekiyor. Çıkan eşyayı başka bir odaya alabiliyorsanız en rahatı o oluyor. Boşaltma sizin için zorsa randevuyu ona göre planlıyoruz; yeter ki gelip kapağı kaldırdığımızda dolu bir sandıkla karşılaşmayalım, ziyaret o zaman yarım kalıyor." },
    { q: "Sandıktaki tekstil aynı gün yıkamaya alınabiliyor mu?", a: "Alınabiliyor. Sandıktan çıkan yorgan ve battaniyeleri aynı ziyarette araca yükleyip kayda geçiriyoruz; baza yerinde temizlenirken tekstil tesise gidiyor. Bunu önceden söylerseniz araçta yer ayırıyoruz, çünkü hacimli parçalar yerinde çalışan ekiple aynı araca her zaman sığmıyor. Sandık zaten boşaltılmış olacağı için bu iki işi birleştirmek çoğu hanede tek bir hazırlıkla iki sonuç veriyor. Tekstil hazır olduğunda ayrıca haber veriyoruz." }
  ],
}
