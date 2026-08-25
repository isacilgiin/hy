/**
 * Kayıhan (Pamukkale) — bölge sayfası metni.
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
    "Sandık odasında sarılı duran bir halının kirlenmesi için üzerinden geçilmesi gerekmiyor. Çeyizden kalma yün halılar burada yıllarca rulo hâlinde bekliyor; kimse üzerine basmıyor, halı hiç serilmiyor, ama o süre boyunca kendi içinde kalan nemle ve dışarıdan gelen tozla baş başa duruyor. Bu halılar bize serilecekleri için değil, devredilecekleri için geliyor. Yeni kurulan bir eve verilmeden önce bir kez yıkanması isteniyor, yani iş bir temizlik işi olduğu kadar bir teslim işi. Halının nereye gideceği belli olduğu için de teslim günü baştan konuşuluyor ve tarih çoğu zaman aceleye binmiyor. Halının kendisi bekleyebiliyor, o evin kurulacağı gün beklemiyor.",
    "Sarılı beklemiş bir halı açıldığında ortaya iki şey çıkıyor. Birincisi rulonun kıvrım hattı: halı hep aynı yerden döndüğü için o hat kendini belli ediyor. İkincisi koku; halı sarılırken içinde kalan nem dışarı çıkamıyor ve yıllar içinde kendi kokusunu yapıyor. Bu ikisi de yıkamanın kendisinden çok kurumayla ilgili bir mesele. Halının suyu tesiste rulo sıkma makinesinde yüzde doksan beş oranında alınıyor, kalan nem ise kapalı kurutma odasında gidiyor. Tekrar sarılacak bir halıda bu adım pazarlık konusu değil, çünkü içinde nem kalan halı sarıldığı anda aynı noktaya geri dönüyor. Bu yüzden bu halılarda kurumayı beklemeden teslime çıkmıyoruz."
  ],
  yerelBaglam: "Kayıhan yerleşik bir konut dokusu ve buradaki evlerde kullanılmayan ama saklanan tekstil bulunuyor. Bu halılar evin görünen halıları değil; kimse onlara bakarak kirli ya da temiz demiyor, çünkü ortada duran bir yüzey yok. Bir gün bir eve verileceği için de yıkanması gündeme geliyor. Bize gelen çağrının zamanlaması bu yüzden mevsime değil, o evin kurulacağı tarihe bağlı oluyor. Randevuda sorduğumuz şey de halının ne zaman verileceği; teslim tarihini o gün belirliyor. Sıra da doğrudan buna göre kuruluyor, çünkü bu parçalar için birkaç günlük esneklik genellikle bulunuyor. Kaç parça olduğunu ve halının ebadını da o gün konuşuyoruz.",
  note: "",
  sss: [
    { q: "Yıllardır sarılı duran halı yıkanmadan devredilebilir mi?", a: "Devredilebilir ama açıldığı gün ortaya çıkacak şey belli: kıvrım hattı ve uzun süre kapalı kalmış bir kumaşın kokusu. İkisi de halının eskimesinden değil, sarılı beklemesinden geliyor. Bir kez yıkanıp kurutulduktan sonra ikisi de kalkıyor. Halı yeni bir eve serileceği için bunun serilmeden önce yapılması, serildikten sonra yapılmasından kolay oluyor. Yıkanmış hâlde verilen halı yeni evde doğrudan seriliyor." },
    { q: "Yıkandıktan sonra tekrar sarılı teslim edilebiliyor mu?", a: "Edilebiliyor, bunu baştan söylemeniz yeterli. Teslim zaten ambalajlı yapılıyor, hemen serilmeyecek bir halıyı da sarılı hâlde bırakıyoruz. Burada tek şart halının dibine kadar kurumuş olması; bunu biz kontrol ediyoruz, çünkü nemli sarılan halı kısa sürede eski hâline dönüyor. Uzun süre bekleyecekse halının ara ara açılıp havalandırılması dışında yapılacak bir şey kalmıyor. Ambalaj da bu yüzden açılmadan bırakılabiliyor." }
  ],
}
