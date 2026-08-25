/**
 * İstiklal (Pamukkale) — bölge sayfası metni.
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
    "Buradan gelen çağrıların çoğu evin tamamı için değil, tek bir oda için açılıyor. Bir odanın halısının üzerine bir şey dökülüyor, halı o hâliyle kalamaz duruma geliyor ve yalnızca o parça alınıyor; salon, koridor ve diğer odalar yerinde kalmaya devam ediyor. Bunu baştan söyleyelim: tek parça için de alma yapılıyor, düzen parça sayısına bakmıyor. Araç tek halı için de aynı şekilde geliyor, halı aynı kayda giriyor ve aynı hatta işleniyor. Tek parça geldi diye halı sıranın sonuna yazılmıyor, alındığı günün sırasına yazılıyor. Alma günü de bu yüzden kısa sürüyor; tek parça yükleniyor ve o adres kapanıyor.",
    "Tek halının teslim süresi de parça sayısından çıkmıyor. Süreyi belirleyen kuruma: halı kapalı odada dibine kadar kuruyana kadar hattan çıkmıyor ve bu süre tek parçada da beş parçada da aynı şekilde işliyor. Yıkanan halı yerine serildiğinde ise başka bir şey ortaya çıkıyor. Yanındaki halılar yıkanmadığı için aradaki fark görünür oluyor; bunu bir eksiklik olarak değil, sonradan sorulmasın diye baştan söylüyoruz. Evin geri kalanını daha sonra yıkatmak isteyen olursa aynı adres kayıtta duruyor ve ikinci partiyi ilkine bakarak planlayabiliyoruz. İkinci partide o halının hangi odadan çıktığını ayrıca not ediyoruz, çünkü aynı evin odaları aynı miktarda kullanılmıyor."
  ],
  yerelBaglam: "İstiklal'de halı toplu hâlde değil, oda oda ve birbirinden aylarca uzak tarihlerde yıkanıyor. Bunun sonucu, evde hiçbir zaman bütün zeminin birden boşalmaması. Bir hane bütün halılarını aynı anda verdiğinde alma günü de teslim günü de o evin boş kalacağı süreye göre kuruluyor; burada böyle bir zorunluluk çıkmıyor. Alma günü daha esnek konuşulabiliyor, çünkü alınacak parça çoğu zaman zaten kaldırılmış ve bir kenarda katlanmış durumda bekliyor. Bu düzende bizim tarafımızda değişen şey, aynı adresin kaydının kapanmaması ve bir sonraki parçanın aynı dosyaya eklenmesi oluyor. Yani tek parça alma burada bir istisna değil, işin olağan hâli oluyor.",
  note: "",
  sss: [
    { q: "Tek halı için de alma yapılıyor mu?", a: "Yapılıyor, düzen tek parçada da aynı işliyor. Araç adrese geliyor, halı alınıyor, kayda giriyor ve o günün sırasına yazılıyor. Tek parça olması halıyı sıranın önüne almadığı gibi arkaya da atmıyor. Randevu verirken sorduğumuz tek şey halının ne zaman hazır olacağı. Teslim de aynı şekilde tek parça için yapılıyor. Alma günü de bu yüzden kısa oluyor." },
    { q: "Evin geri kalanını sonradan yıkatabilir miyiz?", a: "Yıkatabilirsiniz; çoğu adreste zaten böyle oluyor. İlk parça geldiğinde halının cinsi ve ebadı kayda geçtiği için ikinci partide aynı bilgileri baştan konuşmuyoruz. Aradan ne kadar zaman geçtiğinin de bir önemi yok; kayıt kapanmadan duruyor. Kalan halıları birlikte vermek isterseniz parça sayısına göre bir gün ayırıyoruz. Toplu verilen partide alma süresi uzuyor, teslim süresi ise değişmiyor." }
  ],
}
