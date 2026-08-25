/**
 * Çal — bölge sayfası metni.
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
    "Salon halısı araca yükleniyor, koltuk takımı yerinde kalıyor. Çal'da işin bir kısmı tesise hiç gelmiyor, çünkü koltuk evden çıkarılmadan, durduğu odada yıkanıyor. Yüksek basınçlı koltuk yıkama ünitesini eve getiriyoruz ve beş adımı orada uyguluyoruz: önce hazırlık ve toz alma, sonra özel solüsyonlu suyla ıslatma ve leke çıkarma, ardından kumaşa zarar vermeyen yumuşak fırçayla fırçalama, sonra yüksek emişli vakumlama, en sonda da temiz suyla durulama. Koltuğun sökülüp taşınması gerekmediği için takımın yerleşimi de bozulmuyor. Kumaşın cinsine ve lekenin ne olduğuna göre solüsyon ve fırça sertliği yerinde ayarlanıyor.",
    "Halı ile koltuk aynı randevuya konuyor: ekip eve geldiğinde halılar toplanıp araca alınırken koltuk çalışması aynı odada başlıyor. İşe başlamadan önce iki şeyi konuşuyoruz — suyun nereden alınıp nereye boşaltılacağı ve ünitenin hangi prizden besleneceği. Oturma odasında çalışılacağı için çevredeki eşya ve zemin de önceden çekiliyor ya da örtülüyor. Halı tesise gidip yıkanıp geri gelirken koltuk işi aynı gün içinde tamamlanmış oluyor; yani koltuk için beklenecek bir teslim yok. Halının teslim günü ayrıca söyleniyor, koltuk ise ekip evden çıktığında bitmiş oluyor."
  ],
  yerelBaglam: "Çal yüksek bir yayla ilçesi ve bağcılığıyla anılıyor; hane dokusu ağırlıklı olarak müstakil ev. Bu evlerde oturma odası çoğu zaman geniş tutuluyor, misafir de burada ağırlanıyor. Sonuç olarak oturma odası evin en yoğun kullanılan yüzeyi: halı ile koltuk aynı hızda kirleniyor ve birlikte gündeme geliyor. İlçeden gelen talebin çoğunda ikisi birden konuşuluyor, tek başına koltuk ya da tek başına halı daha az. Randevuyu da bu yüzden tek işe değil, odanın tamamına göre planlıyoruz. Eve gelmeden kaç halı ve kaç parçalı koltuk takımı olduğunu sormamızın sebebi de bu.",
  note: "",
  sss: [
    { q: "Koltuğu almadan evde mi yıkıyorsunuz, nasıl bir işlem yapılıyor?", a: "Evet, koltuk evden çıkmıyor. Yüksek basınçlı koltuk yıkama ünitesi eve geliyor ve işlem beş adımda ilerliyor: hazırlık ve toz alma, özel solüsyonlu suyla ıslatma ve leke çıkarma, yumuşak fırçayla fırçalama, yüksek emişli vakumlama, temiz suyla durulama. Fırça kumaşa zarar vermeyecek sertlikte seçiliyor. Takım söküp taşınmadığı için çizilme, ezilme ya da parça karışması gibi bir durum da doğmuyor. Minderler yerinden çıkarılıp ayrı ayrı ele alınıyor." },
    { q: "Yüksek emişli vakum tam olarak ne yapıyor?", a: "Kirli suyu ve deterjan kalıntısını kumaşın içinden çekiyor. Koltuk yıkamada asıl mesele köpürtmek değil, içeri giren suyu geri almak; alınmazsa kumaşın içinde kalan kalıntı kısa sürede tekrar kir tutar ve koltuk yeniden lekeli görünür. Vakumlamadan sonra bir de temiz suyla durulama yapılıyor, böylece kalıntı bırakılmıyor. Aynı emiş, koltuğun sırılsıklam kalmamasını da sağlıyor; kuruma bu yüzden odada beklenmedik kadar uzamıyor ve oturma odası günlerce kullanılmaz halde kalmıyor." },
    { q: "Yıkanan koltuğa ne kadar süre sonra oturulabiliyor?", a: "Vakum suyun büyük bölümünü çektiği için koltuk ıslak değil, nemli kalıyor. Kalan nemin gitme süresi kumaşın kalınlığına, dolgusuna ve odanın havalandırılmasına göre değişiyor; bu yüzden herkese aynı saati söylemiyoruz. İşi bitirirken koltuğa elle bakıp o takım için ne kadar beklenmesi gerektiğini yerinde söylüyoruz. Pencereleri açık tutmak ve üzerine örtü sermemek süreyi kısaltan iki basit şey; kapalı bir odada bekletilen koltuk daha geç kuruyor." }
  ],
}
