/**
 * Merkezefendi — bölge sayfası metni.
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
    "Yıkadığımız halıların girdiği tek tesis bu ilçenin içinde, Eskihisar tarafında. Merkezefendi'den alınan bir halı için bu şu anlama geliyor: araç halıyı aldıktan sonra arada uzun bir yol yok, halı çoğu zaman alındığı gün yıkama hattına girebiliyor. Ama burada sık karıştırılan bir nokta var, onu baştan söyleyelim: yakınlık yolda geçen süreyi kısaltır, yıkamanın ve kurutmanın süresini kısaltmaz. Bir halının ıslanması, durulanması, suyunun alınması ve kapalı odada kuruması ne kadar sürüyorsa burada da o kadar sürüyor. Ortalama üç dört iş günlük teslim süresi ilçeye göre değişen bir şey değil, işin kendisinden çıkan bir süre.",
    "İkinci fark, halının mutlaka araçla alınmak zorunda olmaması. Yolu tesise düşen bir müşteri halısını kendisi bırakıp yıkandıktan sonra yine kendisi alabiliyor; bu, kapıda araç beklemek yerine kendi programına göre hareket etmek isteyenlerin tercihi oluyor. Araçla alımda ise asansör ve merdiven durumu belirleyici: asansörsüz bir binada üst kattan indirilecek dört beş parça, alım süresini tek başına ikiye katlıyor. Bu yüzden randevuda kaç parça olduğunu ve kaçıncı katta oturduğunuzu soruyoruz. Alma ve teslim her gün yapıldığı için ilçe içindeki randevular çoğu zaman aynı güne verilebiliyor."
  ],
  yerelBaglam: "Merkezefendi, Denizli'nin iki merkez ilçesinden biri ve dokusu ağırlıklı olarak çok katlı apartmanlardan oluşuyor. Bize gelen halı da buna göre şekilleniyor: standart daire ebatlarında makine halısı ve son yıllarda iyice yaygınlaşan shaggy, uzun tüylü halılar. Bu halıların dairede yıkanamamasının sebebi yıkamak değil kurutmak; balkona serilip kuruyacak parçalar değiller, yarı kuru kalan uzun tüy koku yapıyor. Shaggy'de bir de fırça meselesi var: makine halısına uygulanan fırça sertliği uzun tüyü yatırıyor ve zamanla keçeleştiriyor. Bu yüzden makinenin fırça ayarı halının cinsine göre değiştiriliyor.",
  note: "",
  sss: [
    { q: "Tesis bu ilçede diye halım daha çabuk mu teslim ediliyor?", a: "Kısalan tek şey yolda geçen süre. Bunun pratik karşılığı şu: sabah alınan halı gün içinde kayda giriyor ve o günkü sıraya yazılabiliyor, teslim günü de daha esnek konuşuluyor. Uzak bir ilçede alım günü aracın o tarafa çıktığı güne bağlıyken burada böyle bir bekleme yok. Yıkama ve kurutma tarafında ise değişen bir şey olmuyor; o adımların süresi halının cinsine ve ebadına bağlı, ilçeye değil." },
    { q: "Halımı kendim bırakmak istiyorum, bırakma ve geri alma düzeni nasıl işliyor?", a: "Bırakmadan önce arayıp gün ve saat konuşuyoruz. Halı geldiğinde ölçüsü, cinsi ve üzerinde ayrıca çalışılacak yerler kayda geçiyor, sonra sıraya giriyor. Hazır olduğunda haber veriyoruz; teslimi kendiniz alabiliyorsunuz ya da adrese getirilmesini isteyebiliyorsunuz. Kendi getirmek halıyı sıranın önüne almıyor. Halı yine ambalajlı teslim ediliyor, yani bırakırken taşıdığınız gibi açıkta taşımanız gerekmiyor." },
    { q: "Apartman dairesinde shaggy halıyı evde yıkamak neden olmuyor?", a: "Evde yıkanan halının suyu sıkılamıyor; tüyün içinde kalan su ağırlığıyla dibe çöküyor ve halı kendi nemiyle baş başa kalıyor. Uzun tüyde bu nem havın dibinden buharlaşamadığı için kuruma günlere yayılıyor, o arada tüyler birbirine yapışıp yatıyor ve kuruduğunda eski hacmine dönmüyor. Bir de dairede halının serilecek düz bir yüzeyi yok; balkon demirine katlanan halı kat izini üzerinde taşıyor." }
  ],
}
