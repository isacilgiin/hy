/**
 * Hacıkaplanlar (Pamukkale) — bölge sayfası metni.
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
    "Koltuk için gelen ekip Hacıkaplanlar'da çoğu zaman yatak odasına da giriyor. Telefonda konuşulan iş oturma grubu oluyor, kapıda ise yatak ve baza da ekleniyor. Bunda teknik bir zorluk yok: ikisi de aynı ünitenin işi, tek cihaz aynı ziyarette ikisini de karşılıyor ve arada ekipman değiştirmek gerekmiyor. Zorluk sürede. Bir oturma grubu üçlü, ikili ve tekliyle birlikte kaç parça sayılıyorsa süre ona göre çıkıyor; yatak tarafında da tek kişilik ile çift kişilik arasında ciddi fark var ve baza ayrı bir parça olarak sayılıyor. Bu sayıyı kapıda öğrenmekle telefonda öğrenmek arasında koca bir fark var.",
    "Bu yüzden randevu alırken asıl sorduğumuz şey toplamda kaç parça olduğu. Cevap açıksa günü tek ziyarete sığdırıp sığdıramayacağımızı orada söyleyebiliyoruz. Sığmıyorsa işi ikiye bölüyoruz ve bunu kapıda değil önceden konuşuyoruz; ekip geldikten sonra yarısını bırakıp gitmek kimsenin işine gelmiyor. Bölünen işlerde ikinci gün için yeniden anlaşmaya gerek kalmıyor, o gün de aynı görüşmede belirleniyor. Halı gibi eve girip çıkan bir parça olmadığı için burada beklenecek bir teslim yok; ekip evden çıktığında iş kapanmış oluyor ve iki kalem tek kayıt üzerinden takip ediliyor. Bölünen işte kayıt kapanmıyor, ikinci gün aynı kayda ekleniyor."
  ],
  yerelBaglam: "Hacıkaplanlar'da yoğun apartman dokusu ve kalabalık daireler var; oturma grubu da yataklar da sürekli kullanımda. Böyle bir evde tek bir temizliği ayrı ayrı iki güne yaymak pratik olmuyor, o yüzden talep genelde birleşik geliyor: koltuk yıkatılacaksa yatak da aynı gün isteniyor. Bu bizim açımızdan da verimli, çünkü aynı ünite iki iş için bir kez kuruluyor. Sınır cihazda değil takvimde: bir günde kaç parçaya yetişebileceğimiz belli ve bu sayı zorlandığında arkadaki adresler etkileniyor. Randevuyu gerçekçi kurabilmek için parça sayısını baştan netleştiriyoruz. Tahmini bir rakam yerine oturma grubunu ve yatakları tek tek saymanızı istememizin sebebi bu.",
  note: "",
  sss: [
    { q: "Koltuk ve yatak aynı gün yapılabilir mi?", a: "Yapılabiliyor, ikisi de aynı ünitenin işi ve aynı ziyarette sıraya konabiliyor. Belirleyici olan parça sayısı: bir oturma grubu ile bir yatak çoğu evde tek güne rahat sığıyor. İki yatak odası ile geniş bir takım aynı anda istendiğinde ise gün yetmeyebiliyor. Aramada parçaları tek tek sayarsak hangisinin geçerli olduğunu o an söyleyebiliyoruz, sonradan gün değiştirmek gerekmiyor." },
    { q: "Kaç parçadan sonra iş ikinci güne bölünüyor?", a: "Sabit bir sayı vermek doğru olmaz, çünkü parçaların ebadı ve kumaşın durumu süreyi değiştiriyor. Kabaca şöyle: tek takım ve tek yatak tek ziyarete sığıyor, buna ikinci bir takım ya da ikinci bir yatak odası eklendiğinde bölünme ihtimali başlıyor. Kararı randevuda birlikte veriyoruz ki gün içinde sürpriz çıkmasın ve ekip boşuna yol yapmasın." }
  ],
}
