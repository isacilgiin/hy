/**
 * 1200 Evler (Merkezefendi) — bölge sayfası metni.
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
    "Aynı projeden çıkma bloklarda daire planları birbirinin kopyası olduğu için salon halıları da neredeyse tek ebatta geliyor. 1200 Evler'de alma randevusunu belirleyen şey bu yüzden halının ne olduğu değil, halının binadan hangi yoldan çıkacağı. Asansör kabinleri insan taşımak için ölçülmüş, eşya için değil. Rulo hâline getirilmiş büyük bir salon halısı kabine yatay sığmıyor, dik kaldırıldığında tavana çarpıyor. Böyle bir durumda halı katlanarak zorlanmıyor; merdivenden indiriliyor ve alma süresini uzatan da kısaltan da bu tek karar oluyor. Kaç sahanlık dönüleceği baştan belli, merdiven kolu her katta aynı.",
    "Araca yüklenen halı rulo hâlinde kalıyor, çünkü katlanan bir halı kat izini üzerinde günlerce taşıyor. Tesiste sıra toz alma adımından sonra rulo sıkma makinesine geliyor; bu makine halının suyunun yaklaşık yüzde doksan beşini alıyor ve kurutmaya giren halı çok daha az nemle giriyor. Standart daire ebadındaki makine halısında bu adım kuruma süresini tahmin edilebilir kılıyor. Buradan gelen parçalar ebat ve hav kalınlığı bakımından birbirine benzediği için odada kalma süreleri de birbirine yakın çıkıyor. Aynı hafta yıkanan beş altı halının teslim günlerini üst üste bindirebilmemizin sebebi bu."
  ],
  yerelBaglam: "Toplu konut düzeninde bina yaşı, kat sayısı ve daire planı bir bütün olarak aynı; bu tekdüzelik işin bir tarafını kolaylaştırıyor, diğer tarafını zorlaştırıyor. Kolaylaşan taraf ölçü: bir dairede işe yarayan taşıma yöntemi komşu blokta da işe yarıyor, yerinde ölçü almadan araç planı çıkarılabiliyor. Zorlaşan taraf kabin. Proje çizilirken asansör ölçüsü daire sayısına göre belirlenmiş ve uzun kenarı iki metreyi geçen bir parça o kabine girmiyor. Bazı bloklarda iki kabinden yalnızca biri bodruma iniyor; halı o kabinle çıkarılabiliyorsa yükleme yarı sürede bitiyor. Girişte eşik ya da rampa varsa ilk ziyarette not ediyoruz.",
  note: "",
  sss: [
    { q: "Büyük salon halısı asansöre girmiyorsa nasıl indiriliyor?", a: "Halı bulunduğu odada rulo yapılıyor ve merdivenden indiriliyor. Sahanlık dönüşlerinde rulonun ucunu korkuluğa sürtmemek için kısa aralar veriliyor, bu yüzden üst katlardan inen bir parçanın araca varması birkaç dakika uzuyor. Kabini zorlayıp halıyı ortasından katlamak daha hızlı görünüyor ama katlanan yerde oluşan iz yıkamayla tamamen çıkmıyor, o yüzden yapmıyoruz. Rulo çapı asansör kapısından geçiyorsa elbette kabin kullanılıyor." },
    { q: "Aynı blokta aynı gün birden çok daireden halı alınabiliyor mu?", a: "Alınabiliyor, hatta tercih ettiğimiz düzen bu: araç bir kez duruyor ve taşıma tek seferde bitiyor. Sınır araçta değil sırada; daire başına düşen parça sayısı arttıkça belli bir noktadan sonra ikinci gidiş gerekiyor. Komşularınızla aynı güne bakıyorsanız randevuyu birlikte alın, hangi dairede kaç parça olduğunu baştan bilmemiz yeterli. Teslim de aynı mantıkla planlanıyor, parçalar hazır olduğunda tek ziyarette geri geliyor." }
  ],
}
