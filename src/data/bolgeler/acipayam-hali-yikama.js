/**
 * Acıpayam — bölge sayfası metni.
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
    "Bir günde birden çok haneden halı toplandığında asıl risk yıkamada değil, halıların birbirine karışmasındadır. Acıpayam'da işi bunun üzerine kuruyoruz: araca yüklenen her parça çıktığı hane adına kaydediliyor, tesise vardığında da rastgele bir yığına değil, o haneye ait bölmeye alınıyor. Halı hattın sonuna kadar aynı işaretle gidiyor. Kontrol ve paketleme adımında parçalar yeniden aynı işaret üzerinden sayılıp eşleştiriliyor ve ambalajlanıyor; teslimde hangi paketin kimin kapısına gideceği tahmin işi olmuyor. Bir günde çok sayıda adres dolaşıldığı için bu ayrımı hafızaya bırakmıyoruz; kayıt alım anında, halı henüz evden çıkarken tutuluyor.",
    "İkinci mesele hanenin kaç parça çıkardığı. Acıpayam'da çoğu adreste tek bir salon halısı beklemiyoruz; ev neredeyse bütünüyle boşaltılıyor, odaların halıları ve yolluklar birlikte çıkıyor. Evden çıkan her parça, tek bir halı gibi değil, o hanenin grubunun bir üyesi olarak kaydediliyor. İlçeye çıkış günü belli olduktan sonra aynı güzergâhtaki adresler tek programa alınıyor ve alım ile teslim aynı güzergâhta eşleştiriliyor: bir kapıdan kirli halı alınırken birkaç sokak ötedeki kapıya yıkanmış ve ambalajlanmış halı bırakılıyor. Hangi paketin hangi kapıya ait olduğu güzergâh listesinde adım adım yazılı duruyor."
  ],
  yerelBaglam: "Acıpayam ovaya yayılmış geniş bir ilçe; nüfusun bir bölümü ilçe merkezinde, önemli bir bölümü ise merkez dışındaki köy yerleşimlerinde oturuyor. Müstakil ev dokusu ağırlıkta ve adresler birbirine uzak. Bu yüzden randevuda konuştuğumuz ilk şey adresin tarifi oluyor: aracın kapıya kadar yanaşıp yanaşamayacağı, yanaşamıyorsa hangi noktada buluşulacağı önceden netleşiyor. Halının odadan araca kadar taşınması bize ait; hane sahibinin halıyı sokağa indirmesini beklemiyoruz. Tarif belirsiz kaldığında yola çıkmadan telefonla teyit ediyoruz; merkez dışındaki bir adreste kaybedilen yarım saat, o gün sıradaki bütün adresleri geriye atıyor.",
  note: "",
  sss: [
    { q: "Aynı gün birkaç haneden alınan halılar tesiste birbirine karışmaz mı?", a: "Karışmaması için halılar araca yüklenirken hane bazında ayrılıp işaretleniyor. Tesiste de aynı ayrım korunuyor: her hanenin parçaları kendi grubunda toplanıyor, işaret yıkama boyunca halının üzerinde kalıyor. Son adım olan kontrol ve paketlemede parçalar tek tek sayılıyor, işaretle eşleştiriliyor ve ayrı ayrı ambalajlanıyor. Bir hanenin parça sayısı alımda kaydedildiği için teslimde eksik ya da fazla paket çıkması durumu doğmuyor. Bir parça eksikse bu teslimde değil, tesiste fark ediliyor." },
    { q: "Neden aynı güzergâhtaki adresler aynı güne toplanıyor?", a: "Çünkü güzergâh belli olmadan sıra da belli olmuyor. Aynı yol üzerindeki adresler tek programa alındığında o günün akışı baştan sona yazılı hale geliyor: hangi kapıdan halı alınacağı, hangi kapıya yıkanmış halı bırakılacağı sırayla belli oluyor. Bu, sizin açınızdan şu demek: halınız alındıktan sonra teslim günü yaklaşık olarak baştan belli oluyor, çünkü teslim de aynı güzergâhın bir sonraki programına yazılıyor. Randevu verirken hangi güne denk geldiğini söylüyoruz." },
    { q: "Köydeki eve nasıl ulaşıyorsunuz, adres tarifini önceden mi alıyorsunuz?", a: "Tarifi randevu sırasında alıyoruz ve yola çıkmadan önce bir kez daha teyit ediyoruz. Sorduğumuz şeyler somut: eve giden yolun durumu, aracın kapı önüne yanaşıp yanaşamayacağı, yanaşamıyorsa buluşulacak nokta ve o saatte evde kimin bulunacağı. Merkez dışındaki adreslerde bu ayrıntılar konuşulmadığında araç yanlış yola sapıyor ve o günkü bütün program kayıyor. Bu yüzden tarifi işin bir parçası sayıyor, üstünkörü bir adres notuyla yetinmiyoruz." }
  ],
}
