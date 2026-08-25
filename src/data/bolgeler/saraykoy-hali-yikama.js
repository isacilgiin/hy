/**
 * Sarayköy — bölge sayfası metni.
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
    "Sarayköy'den gelen halıyı ele alırken ilk baktığımız şey halının ne kadar toz taşıdığı oluyor. Büyük Menderes ovasında sera ve tarla işi yılın büyük bölümünde sürüyor; eve ayakkabıyla ve iş kıyafetiyle giren şey de kaba çamur değil, un gibi ince toprak tozu. Bu toz havın üzerinde durmuyor, tüylerin arasından süzülüp tabana iniyor ve orada birikiyor. Ortaya çıkan sonuç şu: yüzeyi temiz görünen, ama silkelendiğinde toz veren bir halı. Bu yüzden bu ilçeden gelen halıda yıkamadan önceki adım, yıkamanın kendisi kadar belirleyici oluyor.",
    "O adım toz çırpma makinesi. Halı yıkama hattına girmeden önce bu makineden geçiriliyor ve tabana oturmuş kuru toz mekanik olarak dışarı alınıyor. Atlanırsa olan şu: kuru toprak tozu suyla buluşunca çamura dönüyor, hav diplerinde topaklanıyor ve durulama suyuyla dışarı çıkması zorlaşıyor. Yıkanmış görünen halı kuruduğunda tabanında sertleşmiş bir tabaka kalıyor, rengi de olması gerekenden mat çıkıyor. Toz doğru alındığında şampuanın işi de kolaylaşıyor, çünkü su doğrudan lifi buluyor. Merkeze yakın olduğu için Sarayköy'e günübirlik gidiyoruz."
  ],
  yerelBaglam: "İlçe, Kızıldere jeotermal sahasının da içinde bulunduğu bir ovada kurulu ve jeotermal kaynaklara dayalı seracılıkla, tarımla anılıyor. Bize gelen halılar bahçeli müstakil evlerden ve ilçe merkezindeki konutlardan çıkıyor; ikisinde de aynı şey oluyor, dışarıdaki toprak gün içinde adım adım eve taşınıyor. Sera bakımının ve hasadın yoğunlaştığı dönemlerde ev sabah erken boşaldığı için randevuyu günün ilk saatlerine alabiliyoruz. Halının kaç parça olduğunu ve hangi odalardan çıkacağını önceden konuşuyoruz; giriş ile mutfak tarafındaki parçalar genelde en çok toz taşıyanlar oluyor ve araca ilk onlar yükleniyor. Bahçeli evlerde halının bir bölümü kışın kaldırıldığı için parça sayısı mevsime göre de değişiyor.",
  note: "",
  sss: [
    { q: "Halımızın yüzeyi temiz görünüyor, yine de toz aldırmak gerekiyor mu?", a: "Yüzeye bakarak anlaşılmıyor, basit bir denemeyle anlaşılıyor: halının kenarını kaldırıp arkasına elinizle vurun, havaya toz kalkıyorsa dipte birikim var demektir. Halıyı kaldırdığınızda altındaki zeminde kalan iz de aynı şeyi gösteriyor. Bu toz ıslanmadan alınmak zorunda; o yüzden halı hatta girmeden önce toz çırpma makinesinden geçiriliyor. Görünen kir ile taşınan toz farklı şeyler, ikincisi süpürgenin ulaştığı derinlikte durmuyor." },
    { q: "Tozu alınmadan yıkanan halıda ne oluyor?", a: "Su tozu almıyor, bulunduğu yere sabitliyor; asıl fark burada. Bir kez sabitlenen toprak aynı halı ikinci kez yıkandığında da tek seferde çözülmüyor — ikinci yıkama yüzeyi alıyor, tabandaki birikimi olduğu gibi bırakıyor. Halının tüyü eski yumuşaklığına dönmüyor, ele sert geliyor. Bu yüzden toz alma, işi hızlandırmak adına atlanacak bir aşama değil; atlandığında kaybedilen o yıkama oluyor." },
    { q: "Bahçeli bir evde halının ne sıklıkla toz aldırılması gerekir?", a: "Aralık evdeki trafiğe göre değişiyor. Bahçeye ve tarlaya sık girip çıkılan bir evde giriş bölgesindeki halı ile yolluk, oda halılarından çok daha hızlı toz topluyor; bu iki grubu aynı takvime bağlamak gerekmiyor. Süpürge yüzeydeki tozu alıyor ama tabana inmiş olanı çekemiyor. Sera bakımı ve hasat gibi yoğun dönemler geçtikten sonra halıyı ele almak, kirin üzerine kir binmesini önlüyor." }
  ],
}
