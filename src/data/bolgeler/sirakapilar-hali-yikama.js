/**
 * Sırakapılar (Merkezefendi) — bölge sayfası metni.
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
    "Çarşıya komşu sokaklarda bir aracın durabildiği süre dakikayla ölçülüyor. Apartman girişi doğrudan caddeye açılıyor, otopark yok ve durduğunuz yer aynı anda başka bir aracın geçmesi gereken yer. Bu yüzden buradaki randevuyu saat aralığıyla konuşmuyoruz: aracın sokağa gireceği dakikayı söylüyoruz ve yaklaşırken telefon ediyoruz. Halının kaç dakikada indirileceği, sokakta kalınabilecek süreden daha kısa olmak zorunda. Bunu tek başına biz çözemiyoruz; parçaların önceden toplanmış olması, kapının açık olması ve kimsenin merdivende arama yapmıyor olması işin yarısı. Kalan yarısı yükleme sırasında bizde. Sokakta geçen her fazladan dakika arkada bekleyen sürücünün de dakikası; burada zamanı halının kendisi değil, sokak belirliyor.",
    "Pratikte şöyle işliyor: araç yanaşmadan önce parçalar giriş katına indirilmiş oluyor, biz gelince tek seferde yükleniyor ve araç sokağı hemen boşaltıyor. Üst kata iki kez çıkıp inmek burada birkaç dakikadan fazlasına mal oluyor, çünkü araç o sürede caddeyi kapatmış hâlde bekliyor. Yukarıda kalan tek bir yolluk için ikinci tur atmak yerine, alma öncesi telefonda parçaların hepsini sayıyoruz. Teslim de tam olarak aynı düzenle yapılıyor; ambalajlı paketler bir defada indiriliyor, kapı önünde teslim ediliyor ve daireye çıkarma işi araç sokaktan çıktıktan sonraya bırakılabiliyor. Yani sokakta kalınan süreyi kısaltan şey, yükleme sırasının en baştan telefonda konuşulmuş olması oluyor."
  ],
  yerelBaglam: "Sırakapılar tarafında konut, çarşının kendi ritmiyle iç içe. Alt katlar dükkân, üst katlar daire; biz üst kattaki evden çıkan halıyı alıyoruz ama sokağı gün boyu alt kattaki hareket belirliyor. Sabah erkenden mal indiren araçlar, öğle saatlerinde artan yaya trafiği, akşamüstü dolan park yerleri... Aynı adrese sabah dokuzda gitmekle öğleden sonra üçte gitmek birbirinden farklı iki iş. Bir de apartman girişlerinin çoğu doğrudan kaldırıma açılıyor, yani halının araca gideceği mesafe kısa ama o kısa mesafe bir yaya akışının tam ortasından geçiyor. Alma planı sokağın saatine ve girişin kaldırıma açılmasına göre kuruluyor; ikisi de bizim seçmediğimiz şeyler.",
  note: "",
  sss: [
    { q: "Otoparkı olmayan bir adreste alma nasıl yapılıyor?", a: "Araç sokağa girmeden önce arıyoruz, siz kapıyı açıyorsunuz ve parçalar giriş katında hazır bekliyor. Yükleme tek seferde yapılıp araç sokaktan çıkıyor. Halıyı aşağı indirmekte zorlanan haneler için ekip yukarı çıkıyor, ama bu durumda randevuyu trafiğin en seyrek olduğu saate almak gerekiyor. Bunu telefonda baştan konuşuyoruz. Sokakta bekleyen bir araçla yapılan işte hazırlık her şeyden önemli." },
    { q: "Randevu saatini kaçırırsak ne oluyor?", a: "Araç birkaç dakika bekleyebiliyor, daha fazlası sokağı tıkadığı için mümkün olmuyor. Kapıya çıkamayacağınızı önceden bilirseniz haber vermeniz yeterli; alma o günün başka bir saatine ya da ertesi güne alınıyor. Alma ve teslim her gün yapıldığı için bu genelde uzun bir erteleme olmuyor. Ceza ya da ek bir işlem yok. Bu sokaklarda sık karşılaştığımız bir durum." }
  ],
}
