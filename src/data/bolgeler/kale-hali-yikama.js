/**
 * Kale — bölge sayfası metni.
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
    "Kale'ye çıkmadan önce telefonda üç şey soruyoruz: kaç parça halı var, kabaca hangi ebatta ve hangi cinsten. Bunlar merak sorusu değil; hem günün programı hem aracın nasıl yükleneceği bu üç cevaptan çıkıyor. İlçe merkeze uzak ve köy yerleşimi geniş bir alana dağılmış olduğu için ilçeye çıkılan gün tek gidişe kuruluyor. Araç dolduğunda geride kalan halı için ikinci bir günü beklemek gerekir; adet ve ebat baştan bilindiğinde böyle bir durum çıkmıyor. Cins bilgisi ise araçla değil, halının tesiste hangi ayarla yıkanacağıyla ilgili.",
    "Cinsi sormamızın sebebi şu: yıkama makinemizin fırça sertliği halının cinsine göre ayarlanıyor. Yün halı ile makine halısı aynı ayarla yıkanmıyor, yolluk ise hem ebadı hem dokusu gereği ayrı ele alınıyor. Aynı adresten üçü birden çıktığında bu parçalar tesiste ayrılıyor ve her biri kendi ayarıyla hatta veriliyor. Teklif de yine aynı üç bilgiden çıkıyor; sitede rakam yazmıyoruz, çünkü adet, ebat, cins ve halının leke durumu görülmeden söylenen bir sayı sonradan değişir. Ödeme ise teslimde alınıyor, önden istenmiyor."
  ],
  yerelBaglam: "Kale merkeze uzak, güneybatı yönünde bir ilçe; ilçe merkezi küçük, köy yerleşimi dağınık. Hane başına birden çok halı çıkıyor ve bunlar çoğu zaman karışık geliyor — yün halı, makine halısı ve yolluk aynı adresten birlikte çıkabiliyor. Bu yüzden alım günü iki ayrı hazırlık istiyor: araç tarafında hangi adresten kaç parça alınacağı, tesis tarafında bu parçaların hangi fırça ayarıyla yıkanacağı. İkisini de telefonda aldığımız bilgiyle önceden kuruyoruz. Adreste sayım yapmak, adres başına birkaç dakika gibi görünse de gün boyunca programı geriye çeken şeydir; son adrese vaktinde varmak buna bağlı.",
  note: "",
  sss: [
    { q: "Kale'de halı alınmadan önce telefonda hangi bilgiler soruluyor?", a: "Üç şey: halı adedi, kabaca ebat ve halının cinsi. Ebat için ölçü almanız gerekmiyor; oda boyu, salon halısı ya da yolluk gibi bir tarif yeterli oluyor. Cinsi bilmiyorsanız yün mü makine halısı mı olduğunu söylemeniz çoğu zaman yetiyor, kalanını alırken yerinde görüyoruz. Bu üç bilgi araç kapasitesini ve gün programını belirlediği için, adet sonradan artarsa önceden haber verilmesini rica ediyoruz." },
    { q: "Kale'ye verilen teklif neye göre belirleniyor?", a: "Teklifi belirleyen kalemler belli: halının ebadı, cinsi, tüy uzunluğu ve varsa leke durumu. Sitede rakam yazmamızın sebebi bu dördünün görülmeden bilinememesi; görülmeden söylenen bir sayı sonradan değişiyor ve kimsenin işine yaramıyor. Telefonda verdiğiniz adet, ebat ve cins bilgisiyle bir teklif çıkarıyoruz. Halılar alınırken tablo farklı çıkarsa bunu orada söylüyoruz, teslimde sürpriz bir kalem açılmıyor ve teklif halı tesise girmeden netleşiyor." },
    { q: "Kale'de ödeme ne zaman ve nasıl yapılıyor?", a: "Ödeme teslimde, kapıda alınıyor; nakit ya da kredi kartı fark etmiyor. Halılar alınırken veya yıkama sürerken önden ödeme istemiyoruz. İlçenin merkeze uzak olması bu düzeni değiştirmiyor, Kale'de de aynı şekilde işliyor. Halılar ambalajlı teslim edildiği için, ödemeden önce paketi açıp halıya bakmak isteyen olursa bunu orada yapabiliyor; paketi teslimde açmak için ayrıca haber vermeniz gerekmiyor." }
  ],
}
