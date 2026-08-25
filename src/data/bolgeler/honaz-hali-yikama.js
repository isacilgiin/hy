/**
 * Honaz — bölge sayfası metni.
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
    "Honaz'da işi belirleyen şey mesafe değil saat. İlçe merkeze yakın, araç günübirlik gidip geliyor; asıl mesele halının alınacağı evde gündüz kimsenin bulunmaması. Denizli Organize Sanayi Bölgesi bu ilçenin sınırları içinde ve hanenin günlük düzeni büyük ölçüde vardiyaya göre kuruluyor. Bu yüzden Honaz'da randevu saati, halının cinsinden ya da adresin uzaklığından daha çok konuşulan bir konu oluyor. Alma ve teslim her gün yapıldığı için randevu vardiya çıkışına, akşam saatlerine ya da pazar gününe alınabiliyor; alım ve teslim de aynı saate düşmek zorunda değil.",
    "Asıl dikkat edilen taraf teslim. Akşam teslim edilen bir halı çoğu zaman aynı gece yerine seriliyor, ertesi sabah üzerinde yürünüyor. Bunun mümkün olması iki şeye bağlı: halının kuru gelmesi ve üzerinde kimyasal kalıntı kalmaması. Durulamada bol su kullanılmasının sebebi bu. Şampuan halının dibinde kalırsa halı kısa sürede yeniden kirleniyor, tabanı yapışkan bir his veriyor ve serildiği zeminde iz bırakabiliyor. Halı ambalajlı geldiği için serilene kadar da toz almıyor; ambalajı serme anında açmanız yetiyor."
  ],
  yerelBaglam: "İlçenin bir yanı sanayi çevresinde büyüyen yerleşim, diğer yanı Honaz Dağı eteğindeki bahçeli köyler. İki taraftan da gelen halı ev halısı; aradaki fark yıkama programında değil, kapıdan içeri neyin girdiğinde. Giriş halısı ve yolluk, dışarıdan gelen ayakkabı trafiğini ilk taşıyan parçalar olduğu için evin geri kalanından belirgin şekilde önce kirleniyor ve çoğu hanede salon halısıyla aynı sıklıkta yıkanmıyor. Bu yüzden Honaz'a çıkmadan önce sorduğumuz şey adreste kaç parça olduğu ve bunların hangilerinin giriş bölgesinden çıktığı oluyor. Köy tarafındaki adreslerde bahçeden gelen toprak, sanayi çevresindeki dairelerde ise yol tozu aynı bölgede toplanıyor.",
  note: "",
  sss: [
    { q: "Akşam ya da hafta sonu alma-teslim randevusu verilebiliyor mu?", a: "Randevuyu telefonda iki soruyla kuruyoruz: evde hangi saatten sonra biri oluyor ve o saat teslim için de uygun mu. Alımla teslimin aynı saate düşmesi şart değil, ikisi birbirinden bağımsız yazılıyor; vardiyası dönen hanelerde zaten çoğu zaman farklı günlere denk geliyor. Gün belirlendikten sonra yola çıkmadan önce bir kez daha arıyoruz, çünkü vardiya değişikliği çoğunlukla son anda belli oluyor." },
    { q: "Akşam teslim edilen halı aynı gece serilebilir mi?", a: "Serilebilir, ama teslimden önce halının nemi kontrol ediliyor; kenarlar ve dip kısımlar orta bölgeden daha geç kuruduğu için kontrol de oradan yapılıyor. Serme tarafında dikkat edilecek tek şey zemin: yeni silinmiş ıslak bir zemine serilen halı alttan nem çekiyor ve o nemi gece boyunca tutuyor. Zemin kuruysa ambalajı açıp doğrudan serebilirsiniz, bekletmenize gerek yok." },
    { q: "Teslim saatinde evde kimse olmazsa ne yapıyorsunuz?", a: "Bunu alım sırasında baştan çözüyoruz. Teslimi kimin alacağını o gün konuşuyoruz; ev sahibi o saatte olamayacaksa komşu, akraba ya da apartman görevlisi olarak kimin teslim alacağını yazıyoruz. Böyle biri yoksa teslim gününü sizin uygun olduğunuz akşama ya da hafta sonuna alıyoruz. Ambalajlı halıyı kapı önünde bırakmıyoruz; teslim eden ile alan yüz yüze görüşüyor. Teslim edilen parça sayısı da yerinde birlikte sayılıyor." }
  ],
}
