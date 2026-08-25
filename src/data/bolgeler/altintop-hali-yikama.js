/**
 * Altıntop (Merkezefendi) — bölge sayfası metni.
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
    "Bir dolabın kaç parça aldığı, o parçaların ne zaman yıkanacağını ve daha önemlisi ne zaman geri döneceğini de belirliyor. Altıntop'taki dairelerde depolama alanı dar; yorgan, battaniye ve kışlık ne varsa aynı rafı sırayla kullanıyor, biri çıkmadan diğeri giremiyor. Mevsim dönüşünde yıkanmaya gelen kış tekstili bu yüzden çoğu zaman hazır olduğu gün değil, evde yeri açıldığı gün geri gidiyor. Aradaki birkaç gün müşterinin ihmali sayılmaz, evin fiziksel sınırıdır ve biz de planı buna göre kuruyoruz. Telefonda konuştuğumuz şey de tam olarak bu oluyor: parça hazır olur olmaz mı gelelim, yoksa siz haber verdiğinizde mi.",
    "Hazır olan parça tesiste kapalı hâlde bekleyebiliyor. Endüstriyel yorgan makinesinden çıkıp kuruyan bir yorgan kontrol edildikten sonra kapatılıyor ve teslime kadar açılmıyor. Bekleme sınırsız değil, çünkü bekleyen her parça için raf yeri ayrılıyor; randevuyu alırken kaç gün sonrasını düşündüğünüzü bu yüzden soruyoruz. Net bir tarih söylemeniz gerekmiyor, yazlıklar çıkınca demeniz yetiyor ve o aralığa yakın bir gün belirliyoruz. Gün geldiğinde arayıp teyit ediyoruz, uymazsa yeni bir gün konuşuyoruz. Dolap beklenenden erken boşalırsa teslim öne de alınabiliyor. Düzen özellikle yazlıkla kışlığın aynı anda dolapta duramadığı evlerde işe yarıyor."
  ],
  yerelBaglam: "Buradaki apartman dokusunda dolap kapasitesi daire planıyla birlikte küçülmüş: yatak odasında bir gardırop, koridorda ankastre bir dolap ve çoğu zaman hepsi bu. Yorgan ve battaniye katlandığında bile hacimli kaldığı için raf sırası kendiliğinden bir takvim kuruyor. Nisan sonunda kışlık çıkıyor, ekim başında geri giriyor; bize gelen taleplerin yoğunlaştığı iki dönem de bunlar. Bodrumunda kiler bulunan binalarda tablo biraz değişiyor ama buradaki blokların çoğunda öyle bir alan yok. Bu dönemlerde teslim gününü konuşurken belirleyici olan şey parçanın kaç gündür tesiste olduğu değil, rafın ne zaman boşalacağı.",
  note: "",
  sss: [
    { q: "Yıkanan yorgan teslim edilmeden bekletilebilir mi?", a: "Bekletilebiliyor. Yorgan kuruduktan ve kontrolü bittikten sonra kapatılıp bir kenara alınıyor, teslim gününü siz söylüyorsunuz. Bizim istediğimiz tek şey kabaca bir aralık, çünkü bekleyen parça için yer ayırıyoruz ve ne kadar süre ayıracağımızı bilmemiz gerekiyor. Gün yaklaştığında arayıp teyit ediyoruz; o gün uymazsa kaydırmak sorun olmuyor. Beklerken parçaya hiçbir işlem yapılmıyor, kapalı durduğu yerde duruyor." },
    { q: "Ambalajlı teslim edilen yorgan doğrudan dolaba kaldırılabilir mi?", a: "Kaldırılabiliyor. Ambalaj kuru parçanın üzerine kapatıldığı için içeride nem kalmıyor, dolaba o hâliyle girdiğinde raf tozundan da korunmuş oluyor. Yine de kaldırmadan önce açıp bir göz gezdirmenizi öneriyoruz; teslim anında birlikte bakmak sonradan konuşmaktan kolay. Rafın kendisinin kuru olduğundan emin olmak da faydalı, çünkü kapalı ambalaj nemi içeri almıyor ama rafta biriken nem parçayı dıştan etkiliyor. Kullanacağınız gün açıp bir süre havada bırakmanız yeterli." }
  ],
}
