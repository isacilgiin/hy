/**
 * Beyağaç — bölge sayfası metni.
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
    "Kışın sobayla ısınan bir evden çıkan halının sorunu çoğu zaman gözle görülen kir değildir. İs ve duman zerreleri havın arasına, tüyün dibine kadar iner; halıya yukarıdan bakıldığında yüzey temiz görünse bile oda ısındığında koku geri gelir. Beyağaç'tan aldığımız halıların bir bölümü tam olarak bu tabloyla geliyor: leke sayısı az, koku belirgin, kir yüzeyde değil dokunun içinde. Bu yüzden alım sırasında halının hangi odadan çıktığını ve kokunun ne kadar süredir durduğunu soruyoruz. Bir iki haftada biriken is ile bir kış boyunca oturmuş duman kokusu aynı programla çözülmüyor.",
    "Bu halılarda ilk adım yıkama değil, kuru toz alma oluyor. Halıyı toz çırpma makinesinden geçiriyoruz; havın dibine yerleşmiş kurum ve kül partikülünün bir bölümü suya hiç girmeden burada ayrılıyor. Adım atlanırsa kurum ıslandığı anda dağılıyor ve dokunun içine daha da yayılıyor, yani halı yıkandıkça kirleniyor. Ardından ön yıkamada halıyı karış karış geziyor, kurum izlerini normal kirden ayırıyoruz: soba çevresine sıçrayan is ve kıvılcım izi yağlı bir kalıntı olduğu için otomatik yıkamaya bırakılmıyor, öncesinde ayrı leke çıkarıcıyla ele alınıyor."
  ],
  yerelBaglam: "Beyağaç ormanlık bir arazide kurulu, ölçek olarak küçük ve merkeze uzak bir ilçe. Bu ikisi birleşince alım günü kendiliğinden toplu kuruluyor: ilçeye çıktığımız gün ilçe merkezindeki ve bağlı yerleşimlerdeki adresleri aynı programa yazıyoruz, tek gidişte toparlıyoruz. Yoğunluk kış sonuna ve bahar temizliğine denk geliyor; sobanın söndüğü hafta ile halıların toplandığı hafta çoğu evde aynı haftaya düşüyor. Kokunun ne kadar süredir durduğunu sormamızın sebebi de burada: uzun süre kalmış kokuda halı hatta ayrı bir sırayla giriyor ve ön işlem tekrarlandığı için o parça programda daha uzun yer tutuyor.",
  note: "",
  sss: [
    { q: "Beyağaç'ta sobalı evden gelen halıdaki duman kokusu yıkamayla gidiyor mu?", a: "Gidiyor, ama tek adımda değil. Koku havın dibindeki is ve kurum partikülünden çıktığı için önce kuru toz almayla bu partikül azaltılıyor, sonra halı kendi cinsine uygun ayarla yıkanıyor. Yüzeyi silmek ya da halıyı balkonda havalandırmak kokuyu kalıcı olarak almaz; kaynak dokunun içinde durduğu sürece koku ısınan odada geri gelir. Uzun süre kalmış kokularda ön işlemi bir kez daha tekrarlıyoruz." },
    { q: "Beyağaç'tan gelen halılarda kurum lekesi neden normal kirden ayrı ele alınıyor?", a: "Kurum, tozun aksine yağlı bir kalıntı; suyla buluştuğunda çözülmek yerine yayılıyor ve iplik aralarına daha derine oturuyor. Bu yüzden kurum izlerini yıkama hattına girmeden önce ön yıkamada tek tek işaretliyor, üzerine ayrı leke çıkarıcı uyguluyoruz. Toprak ve toz kiri ise otomatik yıkamada zaten çözülüyor, ayrı bir işlem gerektirmiyor. İkisini aynı programa bırakmak, kurum izinin halıda soluk bir gölge olarak kalmasına yol açıyor." },
    { q: "Beyağaç'ta teslimde yapılan parfümleme kokuyu örtmek anlamına mı geliyor?", a: "Hayır. Parfümleme, halı kurutmadan çıktıktan sonra kontrol ve paketleme adımında yapılan son işlem; is kokusunun üzerine sıkılan bir kapatıcı değil. Koku yıkamadan önce ve yıkama sırasında alınıyor. Kontrolde koku hâlâ duruyorsa halıyı paketlemiyoruz, ikinci işleme alıyoruz ve gerekiyorsa teslimin bir gün kaydığını size önceden söylüyoruz. Parfümle örtülmüş bir koku birkaç gün içinde zaten geri döner." }
  ],
}
