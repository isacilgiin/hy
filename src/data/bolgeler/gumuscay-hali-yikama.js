/**
 * Gümüşçay (Merkezefendi) — bölge sayfası metni.
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
    "Kış tekstili burada evden tek seferde çıkmıyor. İlk aramada iki yorgan ile bir battaniye oluyor; birkaç hafta sonra aynı adresten yeni bir telefon geliyor, bu kez bodrumdaki sandıktan çıkan başka battaniyeler var. Sonbahar boyunca aynı haneye ikinci, bazen üçüncü kez gidildiği oluyor. Bunu aksama saymıyoruz, düzenimizi buna göre kuruyoruz: her parti kendi kaydını alıyor, ama adres aynı olduğu için önceki partide neyin geldiği elimizde duruyor. İkinci gelişte aynı soruları baştan sormak gerekmiyor; konuşulan tek şey yeni parçaların ne olduğu, kaç adet oldukları ve hangi gün hazır olacakları. Bodrumdan çıkan parçaları ayrıca soruyoruz, çünkü uzun süre kapalı yerde bekleyen bir battaniye rutubet kokusu almış olabiliyor ve bunu baştan bilmek işi kolaylaştırıyor.",
    "Yorgan ve battaniye halı hattına girmiyor; hacimli tekstil için ayrı bir endüstriyel makine var ve yükleme o makinenin kapasitesine göre yapılıyor. Az sayıda parça geldiğinde bekletip biriktirmiyoruz, geldiği partiyle işleniyor. Asıl belirleyici olan kurutma tarafı: dolgulu bir parçanın yüzeyi kuru görünürken içi hâlâ nemli kalabiliyor, bu yüzden kapalı kurutma odasında içi de kuruyana kadar bekliyor. Süre parçanın kalınlığına göre değişiyor; aynı gün gelen iki yorgan aynı gün çıkmayabiliyor, ince battaniye erken, kalın yorgan geç hazır oluyor. Teslimi de bu yüzden hane bazında değil, parti bazında konuşuyoruz; ilk partinin hazır olması ikincisinin de hazır olduğu anlamına gelmiyor."
  ],
  yerelBaglam: "Şehrin çeperinde, müstakil evlerle yeni apartmanların aynı sokakta durduğu bir doku burası. Müstakil evlerde bodrum ve depo var; kışlık tekstil tek bir yerde toplanmıyor, evin farklı köşelerine dağılmış hâlde bekliyor ve mevsim döndükçe biri hatırlanıyor, öteki unutuluyor. Yeni dairelerde ise saklama alanı sınırlı, yorgan mevsim dönmeden ortaya çıkmıyor. İki durumda da sonuç aynı oluyor: parçalar aynı anda hazır değil. Araç Gümüşçay tarafına çıkarken bunu hesaba katıyor. Adres tarifi de ayrıca konuşuluyor, çünkü müstakil evlerin girişi sokaktan her zaman görünmüyor ve yeni bloklarda numara sırası düzenli ilerlemiyor. Aynı sokakta bir kapı bahçe içinden, bir sonraki doğrudan kaldırımdan giriyor.",
  note: "",
  sss: [
    { q: "Aynı haneye ikinci kez gelmek için yeni randevu gerekiyor mu?", a: "Gerekiyor, ama her şeyi baştan anlatmak gerekmiyor. Yeni parti için gün ve saat konuşuyoruz; adres, kat ve giriş bilgisi önceki kayıttan geliyor. Yeni parçaların ne olduğunu ve kaç adet olduğunu telefonda alıyoruz, gerisi aynı düzende ilerliyor. İkinci parti önceki partiyle birleştirilmiyor, kendi sırasına giriyor. Bu yüzden ilk partinin teslimini beklemeden yeni bir alma günü verilebiliyor." },
    { q: "Az sayıda parça için de araç geliyor mu?", a: "Geliyor. Tek yorgan ya da iki battaniye için de alma yapılıyor; asgari bir adet şartımız yok. Aracın o gün bu tarafa çıkacağı saat aralığını size söylüyoruz ve alma o aralığa yazılıyor. Az parçalı almalar genelde aynı gün diğer adreslerle birlikte planlanıyor, bu da gün seçiminde biraz esneklik istiyor. Acele bir durum varsa bunu baştan söyleyin, sıralamayı ona göre kuruyoruz." }
  ],
}
