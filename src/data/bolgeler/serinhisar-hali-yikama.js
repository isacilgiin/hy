/**
 * Serinhisar — bölge sayfası metni.
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
    "Serinhisar'da kışın halı yıkatmayı erteleyen şey yıkamanın kendisi değil, sonrasıdır: yıkanan halı bir yerde kuruyacak. İlçe yüksek rakımlı bir yayla ve kış aylarında hava uzun süre kapalı, nemli kalıyor. Balkona serilen halı günlerce ağırlığını bırakmıyor, teras altında rüzgâr almadan bekliyor, içeride kurutulduğunda bu kez odayı rutubetlendiriyor. Kalorifer peteğinin üstüne atılan halı ise yalnızca değdiği yüzünden kuruyor, o bölgesi sertleşiyor. Buradan gelen halılarda işin ölçüldüğü adım bu yüzden kurutmadır.",
    "Halıları tozdan izole kapalı kurutma odalarında kurutuyoruz; oda dışarıdaki havaya bağlı olmadığı için kışın da yazınki düzende çalışıyor. Kış aylarında teslim tarihini hava durumuna göre değil kurutma odasının sırasına göre veriyoruz. Yoğun haftalarda gün bir iki gün kayabiliyor, ama kayan gün halının nemli çıkması pahasına kapatılmıyor. Odadan çıkan halı paketlenmeden önce elle yoklanıyor; havın yüzeyi ile halının tabanı ayrı ayrı kontrol ediliyor. Nemli teslim edilen halı bizde yıkanmış sayılmıyor."
  ],
  yerelBaglam: "İlçenin dokusu az katlı müstakil evlerden oluşuyor ve buradan gelen halılar kalın. Kışın pencerelerin uzun süre kapalı kaldığı odalarda sürekli kullanıldıkları için nem tutuyorlar; aynı halı yaz ortasında alındığında elde belirgin şekilde daha hafif duruyor. Nem tutmuş kalın bir halı hem daha uzun kuruyor hem de yüzeyi kurumuş görünürken tabanı hâlâ ıslak kalabiliyor. Kışın bir haneden çoğu zaman tek halı da çıkmıyor; birkaç kalın parça birlikte geliyor ve hepsi aynı anda odaya girmiyor, sıraya giriyor. Sırayı ebada göre değil halının kalınlığına göre kuruyoruz; kalın bir halının kuruma süresi ince bir halınınkiyle aynı değil ve ikisini aynı sıraya koymak ikisine de yaramıyor.",
  note: "",
  sss: [
    { q: "Kışın halı yıkatılır mı, yoksa baharı beklemek mi gerekir?", a: "Yıkatılır. Beklemenin tek gerekçesi evde kurutma zorunluluğuydu. Kışın evde yıkanan halının sorunu yıkama değil serildiği yer: balkonda hava nemli olduğu için su havın dibinden çıkmıyor, teras altında rüzgâr yok, içeride kurutulan halı odanın nemini yükseltiyor. Kapalı kurutma odası bu üç sorunun hiçbirini üretmiyor. Bahara kadar kirli bekletilen halı ise kiri dokusunun içine daha çok yerleştiriyor; beklemenin bedeli halının kendisinden çıkıyor." },
    { q: "Kapalı kurutma odasının açık havada kurutmaktan farkı nedir?", a: "İki fark var. Birincisi süre değil kararlılık: oda dışarıdaki nemden ve sıcaklıktan bağımsız çalıştığı için halının ne kadar sürede kuruyacağı tahmin edilebilir kalıyor, kapalı bir kış gününde de aynı düzen yürüyor. İkincisi toz. Açıkta kuruyan halı, yıkanırken alınan tozun bir kısmını kuruma boyunca havadan geri topluyor; rüzgârlı bir günde bu daha da belirgin oluyor. Kurutma odası tozdan izole olduğu için halı odadan temizlenmiş haliyle çıkıyor." },
    { q: "Nemli teslim edilmiş bir halıda küf ve rutubet kokusu nasıl ortaya çıkıyor?", a: "Halı serildiği anda kuru görünse bile tabanında kalan nem, altındaki zeminle arasında havasız bir katman bırakıyor. O katmanda birkaç gün içinde rutubet kokusu başlıyor; koku havın dibinden geldiği için süpürmekle ya da odayı havalandırmakla geçmiyor ve halının yeniden yıkanması gerekiyor. Kışın oda zaten az havalandığı için koku daha çabuk fark ediliyor. Tabanı kuru vermeyen halıyı bu yüzden odadan almıyoruz, teslim gününü de buna göre veriyoruz." }
  ],
}
