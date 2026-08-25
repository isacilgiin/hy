/**
 * Çardak — bölge sayfası metni.
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
    "Çardak’tan gelen aramalarda ilk sorulan şey halının nasıl yıkandığı değil, ne zaman geri geleceği oluyor. Merkeze uzak bir ilçede bu sorunun cevabı tek bir sayı değil, bir zincir: halının alındığı gün, tesiste yıkanması, kapalı odada tam kuruması ve o yöne çıkacağımız ilk gün. Ortalama teslim süremiz 3-4 iş günü ve Çardak’ta da aynı çerçeve işliyor. Farklı olan tek halka sonuncusu: teslim, halı hazır olduğu anda değil, hazır olduktan sonra ilçeye çıkılan gün yapılıyor. Bunu randevuda açıkça söylüyoruz, çünkü sonradan öğrenilen bir gün gecikme gibi duruyor.",
    "Zincirin hangi halkasının kısalabileceği de belli. Alım gününü öne çekebiliyoruz, halıyı yıkama sırasında öne alabiliyoruz, teslimi o yöne çıkacağımız en yakın güne yazabiliyoruz. Kısaltmadığımız halka kurutma. Halı durulamadan sonra rulo sıkma makinesinden geçiyor ve suyunun yüzde doksan beşi orada atılıyor, ama kalan nem yalnızca kapalı odada gidiyor. Bu adım yarım bırakılırsa halı ambalajın içinde nem tutar ve teslim edilen halı serildiğinde sorun çıkarır. Acele bir teslim istendiğinde neyin değişebildiğini, neyin değişemediğini bu yüzden baştan söylüyoruz."
  ],
  yerelBaglam: "Çardak, Denizli-Afyon karayolu üzerinde ve merkeze uzak bir ilçe; Denizli Çardak Havalimanı da bu ilçe sınırları içinde. Yerleşim az katlı müstakil evler ile ilçe merkezindeki konutlardan oluşuyor, bir haneden çoğu zaman tek halı değil birkaç parça birden çıkıyor. Teslim planını bu iki şey birlikte kuruyor: tesiste geçen süre halının yıkanıp tam kurumasına, teslim günü ise ilçeye çıkacağımız ilk güne bağlı. İkisi de tahmin edilen değil, hesaplanan şeyler. Bu yüzden Çardak’a verdiğimiz gün, telefonda söylenmiş bir yuvarlama değil, zincirin sonucu oluyor.",
  note: "",
  sss: [
    { q: "Çardak’ta halı kaç günde teslim ediliyor?", a: "Ortalama 3-4 iş günü. Merkeze uzak bir ilçede bu süre dört halkadan oluşuyor: halının alındığı gün, tesiste yıkanması, kapalı odada tam kuruması ve o yöne çıkacağımız ilk gün. Son halka mesafeye bağlı olduğu için teslim, halı hazır olur olmaz değil, ilçeye çıkılan gün yapılıyor. Alım sırasında bunun hangi güne denk geldiğini söylüyoruz; hane de halının yerde olmayacağı günleri ona göre planlıyor." },
    { q: "Acele bir teslim gerekiyorsa bu süre kısalabilir mi?", a: "Bir kısmı kısalabiliyor. Alım gününü öne alabiliyor, halıyı yıkama sırasında öne çekebiliyor ve teslimi ilçeye çıkacağımız en yakın güne yazabiliyoruz. Kısaltmadığımız tek adım kurutma; halı tam kurumadan paketlenmiyor. Yarım kurumuş bir halı ambalajın içinde nem tutuyor ve serildiğinde koku yapıyor. Acele bir durum varsa alım sırasında söyleyin; zincirin kısaltılabilir kısmını ona göre kurar, gerçekçi olan en yakın günü veririz." },
    { q: "Teslim günü baştan mı söyleniyor, sonradan mı belli oluyor?", a: "Baştan söylüyoruz. Çardak’a hangi gün çıkacağımız programda zaten belli olduğu için halının hangi gün geri geleceği alım anında netleşiyor. Bir aksama olursa, yol ya da halının kurumasının uzaması gibi, teslim gününü değiştirmeden önce haber veriyoruz. Söylenmiş bir günü sessizce kaydırmıyoruz. Bu ilçede en çok sorulan soru bu olduğu için baştan net konuşmayı tercih ediyoruz; verilen günün değiştiğini siz sormadan biliyor olmalısınız." }
  ],
}
