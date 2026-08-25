/**
 * Baklan — bölge sayfası metni.
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
    "Baklan’da halı çoğu zaman yere serilmek için değil, kaldırılmak için yıkanıyor. Sıcaklar başlayınca kalın ve yün halılar toplanıyor, yerine ince olanlar seriliyor; kışın aynı sıra tersine dönüyor. Bu değişimde en çok atlanan şey şu: kirli kaldırılan halı bir sonraki mevsim aynı halde çıkmaz. Üzerindeki toz ve leke aylarca havın dibinde bekler, katlandığı yerden iz alır, açıldığında ilk günkü işten daha büyük bir iş çıkarır. Bu yüzden randevu alırken halının serilecek mi yoksa kaldırılacak mı olduğunu soruyoruz; ikisinde de teslimden sonrası farklı ilerliyor.",
    "Kaldırılacak halıda teslim biçimi son adım değil, asıl adım. Halıyı tam kuruduktan sonra kontrol edip paketliyoruz ve teslimi ambalajlı yapıyoruz. Kaldıracaksanız ambalajı hiç açmadan bekletebilirsiniz. Burada açıkça söylediğimiz bir sınır var: halı saklama ya da depolama hizmeti vermiyoruz. Yıkanan halı tesiste bekletilmiyor, teslim müşteriye yapılıyor ve halı sizde kalıyor. Bunu ilk konuşmada belirtiyoruz ki teslim gününde 'siz tutar mısınız' sorusu çıkmasın; kaldırma işini de, halının duracağı yeri de hane kendi düzenine göre belirliyor."
  ],
  yerelBaglam: "Baklan ovasında tahıl tarımı ağırlıkta; ilçenin nüfusu az, yerleşimi derli toplu ve merkeze uzak. Bu ikisi birlikte planı kolaylaştırıyor: adresler birbirine yakın düştüğü için ilçeye çıktığımız günde birden çok haneyi aynı programa alabiliyoruz. Talep de yıla eşit dağılmıyor, mevsim dönümünde halıların değiştirildiği haftalarda toplanıyor. Kaldırılacak halının temiz kaldırılması bir sonraki sezonun nasıl başlayacağını belirlediği için bu haftalar Baklan’da yılın en yoğun dönemi oluyor. O haftalarda Baklan’a hangi gün çıkacağımızı önceden belirleyip randevuları o güne yığıyoruz. Halısını kaldırmayı planlayan bir hanenin erken haber vermesi, işin kaldırma gününe yetişmesi açısından tek belirleyici şey. Son güne bırakılan bir talep, ilçeye çıkacağımız sıradaki güne kalıyor.",
  note: "",
  sss: [
    { q: "Yazın kaldıracağım halıyı kaldırmadan önce mi yıkatmalıyım?", a: "Sıra bu şekilde kurulduğunda işiniz kolaylaşıyor. Kirli kaldırılan halıda toz ve leke aylarca havın dibinde bekliyor; leke bekledikçe dokuya daha çok işliyor ve halı bir sonraki sezon açıldığında aynı halde çıkmıyor. Temiz kaldırılan halı ise serildiğinde ek bir işlem istemiyor. Kaldırma tarihinizi biliyorsanız randevuyu ona göre veriyoruz; halı o güne kuru ve paketli yetişiyor, siz de kaldırma işini tek seferde bitiriyorsunuz." },
    { q: "Teslim edilen halıyı ambalajında bekletebilir miyim?", a: "Bekletebilirsiniz, ambalaj zaten bunun için var. Halıyı tamamen kuruduktan sonra kontrol edip paketliyoruz; ambalaj halının teslimden sonra tozla temasını geciktiriyor. Kaldıracaksanız açmadan bırakmanız yeterli, serecekseniz ambalajı açıp doğrudan yere yayabilirsiniz. Ne kadar süre ve hangi koşulda bekleyeceği konusunda bir süre sözü vermiyoruz; halının nerede duracağı hanenin kendi düzeniyle ilgili bir karar. Ambalaj bir saklama koşulu değil, teslim biçimi." },
    { q: "Yıkadığınız halıyı sezon boyunca sizde bırakabilir miyim?", a: "Hayır, halı saklama ya da depolama hizmetimiz yok. Yıkanan halı tesiste bekletilmiyor; iş bittiğinde teslim ediliyor ve halı sizde kalıyor. Bunu net söylüyoruz, çünkü mevsim dönümünde en çok sorulan şeylerden biri bu. Verdiğimiz iş yıkama ve teslim; halının nerede kaldırılacağı, üstüne ne konacağı ve ne kadar bekleyeceği hanenin kendi kararı. Teslim gününü de bu yüzden kaldırma gününüze yakın vermeye çalışıyoruz." }
  ],
}
