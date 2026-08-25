/**
 * Atalar (Pamukkale) — bölge sayfası metni.
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
    "Bir adreste geçen süreyi halının cinsi değil sayısı belirliyor. Atalar'daki daireler geniş ve oda sayısı fazla; salon halısıyla birlikte iki üç oda halısı, bir de koridor yolluğu aynı anda çıkıyor. Beş parçayı toplamak bir parçayı toplamaktan beş kat uzun sürmüyor, daha da uzun sürüyor: her parça ayrı ayrı kaldırılıyor, sarılıyor, merdivenden indiriliyor ve araca yerleştiriliyor. Her seferinde aynı merdiven bir kez daha inilip yeniden yukarı çıkılıyor. Asansörsüz bir binada bu tek başına alma süresini ikiye katlıyor. Bu yüzden randevuda parça sayısını soruyoruz; sorunun amacı halıyı tanımak değil, o adrese ne kadar zaman ayıracağımızı önceden bilmek.",
    "Tesiste ise parçalar tek bir yığın gibi ele alınmıyor. Salon halısı ile koridor yolluğu aynı evden çıkmış olsa da aynı biçimde kirlenmiyor; yolluk evin en çok üzerinden geçilen parçası olduğu için ön yıkama ve leke kontrolünde ayrıca zaman istiyor. Her parça tek tek açılıyor, iki yüzü de görülüyor ve üzerinde çalışılacak yerler kendi kaydına yazılıyor. Ebat farkı kuruma süresini de değiştiriyor: ince bir yolluk ile kalın bir salon halısı aynı anda kurumuyor. Teslim yine de tek seferde yapılıyor ve günü en son kuruyan parça belirliyor. Kalın halıda kuruma süresi ince yolluğun neredeyse iki katına çıkabiliyor."
  ],
  yerelBaglam: "Atalar'da daire başına düşen halı sayısı belirgin şekilde yüksek. Çoğu evde salon dışında en az iki oda halısı, girişte ya da koridorda bir de yolluk var; hane halı yıkatmaya karar verdiğinde bunların hepsi birden çıkıyor. Alma günü bu yüzden tek bir kapı ziyareti değil, sırayla yapılan bir taşıma işi oluyor. Kaç kişiyle geleceğimizi ve aracın ne kadar boş olması gerektiğini buna göre ayarlıyoruz. Merdiven ve asansör durumu da aynı sebeple randevuda konuşuluyor; parça sayısı arttıkça asansörün olup olmaması ikinci kez önem kazanıyor ve süreyi doğrudan belirliyor. Bunu bilmeden verilen bir saat aralığı gün içinde kayıyor.",
  note: "",
  sss: [
    { q: "Çok parçalı bir adreste alma ne kadar sürüyor?", a: "Tek bir süre vermek doğru olmuyor, çünkü belirleyen iki şey var: parça sayısı ve kat. Asansörlü bir binada beş parça birkaç seferde iniyor, asansörsüz aynı sayı belirgin şekilde uzuyor. O adrese ayrılan zamanı biz de buna göre yazıyoruz. Randevu saatini aralık olarak veriyoruz; önceki adreste parça çoksa aralığın sonuna kayabiliyor ve bunu arayıp haber veriyoruz." },
    { q: "Bütün parçalar aynı gün mü teslim ediliyor?", a: "Evet, aynı adresin parçaları birlikte geri geliyor. Ama hepsi aynı anda kurumuyor: ince bir yolluk kalın bir salon halısından önce hazır oluyor. Teslim gününü en son kuruyan parça belirliyor, erken bitenler o güne kadar ambalajlı bekliyor. Bir kısmını daha önce almak isterseniz bunu baştan söylemeniz yeterli; o zaman teslim ikiye bölünüyor ve ikinci parti sonradan getiriliyor." }
  ],
}
