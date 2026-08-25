/**
 * Dokuzkavaklar (Pamukkale) — bölge sayfası metni.
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
    "Halı geri geldiğinde kapı bir süre açık kalıyor. Ev sahibi halının hâline bakıyor, sonra çoğu zaman içeri dönüp kucak dolusu bir yükle çıkıyor: geçen kış kullanılmış bir yorgan, dolabın üst rafında katlı duran bir battaniye. Dokuzkavaklar'da bu o kadar sık yaşanıyor ki artık teslime giderken araçta yer bırakıyoruz. Karar görmeden verilmiyor; temizlenmiş halı ortaya çıkınca ikinci parti de kendiliğinden hazırlanıyor. Yani teslim ziyareti aynı anda alma ziyaretine dönüşüyor ve bunun için yeni bir gün ayarlamak gerekmiyor. Bunu bir aksaklık saymıyoruz, işin buradaki normal akışı olarak görüyoruz ve günü ona göre kuruyoruz.",
    "Kapıda alınan bu ikinci parti halıyla aynı yoldan gitmiyor. Yorgan ve battaniye endüstriyel makinede, kendi hattında yıkanıyor; halının sırasına girmiyor, halının süresine de bağlı değil. Bu yüzden ikinci parti için ayrı bir kayıt açıyoruz. Aynı hane, aynı telefon, ama iki ayrı iş: biri kapanmış, diğeri yeni başlamış oluyor. Teslimi de kendi hazır olma gününe göre planlanıyor. Kapıda tek yapmanız gereken kaç parça verdiğinizi bizimle birlikte saymak; geri kalanı kayıttan takip ediliyor. Sayımı orada birlikte yapmamızın sebebi, parça adedinin kayda olduğu gibi geçmesi. Sonradan hatırlamaya çalışmak yerine, yığın araca girerken sayılmış oluyor."
  ],
  yerelBaglam: "Dokuzkavaklar'ın yoğun apartman dokusunda hane tekstili genelde tek seferde çıkmıyor. Salon halısı gözle görülür şekilde kirlendiğinde iş başlıyor, ama yorganın ya da battaniyenin durumu aynı netlikte görünmüyor; dolapta katlı durdukları sürece akla gelmiyorlar. Temizlenmiş bir halı eve girdiğinde ise karşılaştırma kendiliğinden yapılıyor ve sıradaki parçalar belirleniyor. Buradaki işin partiler hâlinde ilerlemesinin sebebi bu: karar, kıyaslama yapılabildiği anda veriliyor. Biz de buna göre davranıyoruz: teslim randevusunu sıkıştırmıyoruz, kapıda birkaç dakikalık pay bırakıyoruz ki karar verecek zaman kalsın. Aceleye gelen bir teslimde ikinci parti hiç gündeme gelmiyor, evdeki tekstil olduğu yerde kalıyor.",
  note: "",
  sss: [
    { q: "Teslim günü aynı ziyarette yeni parça verilebilir mi?", a: "Verilebiliyor. Araç zaten kapıda olduğu için ayrıca bir geliş planlamaya gerek kalmıyor. Tek koşul yerin yetmesi: o gün araçta başka teslimler de varsa çok hacimli bir yığını aynı anda alamayabiliyoruz. Teslim günü büyük bir parti çıkacağını tahmin ediyorsanız bir gün önceden söyleyin, aracı ona göre çıkarıyoruz. Parçaların kuru ve katlanmış olması da alımı hızlandırıyor." },
    { q: "Halı ve yorgan aynı kayıtta mı ilerliyor?", a: "Hayır, ayrı kayıtlarda. Halı teslim edildiğinde o kayıt kapanıyor; kapıda alınan yorgan ve battaniye için yenisi açılıyor ve parça adedi orada yazılıyor. İkisi farklı makinelerde, farklı hızlarda ilerlediği için hazır olma günleri de ayrı çıkıyor. İki kayıt da aynı adrese bağlı olduğundan teslim bilgisini yeniden vermeniz gerekmiyor, tek numara üzerinden ikisine de bakılabiliyor." }
  ],
}
