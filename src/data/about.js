import siteConfig from './siteConfig.js'

/**
 * Hakkımızda sayfası içerikleri — Denizli Tomay Halı Yıkama.
 */

// Kuruluş yılı tek yerde: src/data/siteConfig.js. Buradan yeniden dışa
// aktarılıyor ki Hakkımızda sayfası aynı değeri kullansın.
export const foundedYear = siteConfig.foundedYear

/**
 * YOLCULUK (TIMELINE) — BİLİNÇLİ OLARAK BOŞ. Doldurmadan önce oku.
 *
 * Devralınan iskelette burada beş kilometre taşı vardı ve hiçbiri gerçek
 * değildi: yılları `foundedYear + 3/6/8/10` diye HESAPLANIYORDU, yani
 * şablondan gelen yer tutuculardı ve kuruluş yılı değişince bütün "tarihler"
 * kayıyordu.
 *
 * Dizi boş olduğu için About.jsx bölümü tamamen gizliyor (timeline.length > 0).
 *
 * Yeniden doldurmak için ŞART: her maddenin yılı ve olayı firmadan
 * doğrulanmış olmalı. Şu an doğrulanmış tek tarih kuruluş yılı. Tarih uydurmak
 * yerine bölümü kapalı bırakmak doğru olan — sayfanın ağırlığını `hikaye` ve
 * `yaklasim` taşıyor.
 */
export const timeline = []

/**
 * Çalışma prensipleri — Hakkımızda sayfasındaki kart bölümü.
 *
 * Maddeler "Kalite", "Güvenilirlik" gibi genel geçer başlıklar DEĞİL; firmanın
 * fiilen nasıl çalıştığını anlatan somut kararlar. Her biri
 * docs/olgu-sayfasi.md §3'teki ekipman ve sürece dayanıyor.
 */
export const yaklasim = [
  {
    icon: 'truck',
    baslik: 'Halı evden çıkar, siz çıkmazsınız',
    metin: 'Halıyı adresinizden alıyor, yıkandıktan sonra yine adresinize getiriyoruz. Alım ve teslim için ayrıca ücret almıyoruz. Alma-teslim aracı her gün çıkıyor, bu yüzden randevuyu evde birinin bulunduğu saate göre kurabiliyoruz; alım ile teslimin aynı saate düşmesi de gerekmiyor. Uzak ilçelerde aynı bölgedeki adresleri aynı güne toplayarak çıkıyoruz, o yüzden alma günü telefonda birlikte belirleniyor. Halıyı taşımak, halıyı yıkatmanın en yorucu kısmıydı; o kısmı üstleniyoruz.',
  },
  {
    icon: 'carpetRoll',
    baslik: 'Program halının cinsine göre kurulur',
    metin: 'Makinemiz 16 fırçalı ve fırça sertliği ayarlanabiliyor. Makine halısı standart ayarla yıkanırken el dokuma ve yün halı düşük ısı ile yumuşak fırça istiyor, ipek ve Nepal halılarda ıslanma süresi sınırlı tutuluyor, shaggy ve uzun tüylülerde fırça ayarı tüy uzunluğuna göre değişiyor. Halı geldiğinde cinsini belirliyor, gerekiyorsa renk akma testi yapıyoruz. Hepsini aynı programda yıkamak daha hızlı olurdu; doğru olmazdı.',
  },
  {
    icon: 'search',
    baslik: 'Hasarı teslimde değil alımda söyleriz',
    metin: 'Halıyı alırken ve yıkamadan önce gözden geçiriyoruz. Yırtık, sökük, güve hasarı, daha önce yapılmış bir onarım ya da yıkamayla büyüme ihtimali olan bir zayıflık varsa bunu size baştan bildiriyoruz. Sonradan söylenen hasar, kimin yaptığı belli olmayan hasardır; ikimizi de zor duruma sokar. Halı tamiri, saçak yenileme ve halı boyama yapmıyoruz — fark ettiğimizi söyler, gerisini halı tamircisine bırakırız.',
  },
  {
    icon: 'shield',
    baslik: 'Kuruma süre değil şart',
    metin: 'Kurutma kapalı kurutma odalarında yapılıyor. Açıkta kurutulan halı kururken toz ve rutubet alıyor; yeni yıkanmış bir halının üstüne inen toz, yıkamanın bir bölümünü geri alıyor. Daha önemlisi: nemli katlanan bir halıda küf kokusu birkaç gün içinde başlıyor ve bir daha çıkmıyor. Bu yüzden halıyı gününde değil, kuruduğunda teslim ediyoruz. Ortalama süre 3-4 iş günü, ama yün ve uzun tüylü halılarda kuruma daha uzun sürüyor ve biz o farkı bekliyoruz.',
  },
  {
    icon: 'check',
    baslik: 'Etiket kapıda takılır',
    metin: 'Aynı gün birden çok haneden halı toplandığı için her halı alındığı anda etiketleniyor ve hangi adresten geldiği kaydediliyor. Etiket süreç boyunca halının üstünde kalıyor, yalnızca paketlemede çıkarılıyor. Aynı desende iki halının farklı hanelerden gelmesi düşündüğünüzden sık oluyor; karışmanın önüne yıkama sırasında değil, kapıda geçiliyor. Teslimde halı parfümlenip ambalajlanıyor, ödeme kapıda nakit veya kredi kartıyla alınıyor.',
  },
]

export const hikaye = [
  'Halı yıkama, halının tesise getirilip makinede yıkanmasıdır — evde yapılan yüzey temizliğinden farklı bir iştir. Halı önce toz çırpma makinesinden geçirilerek dokusunun dibindeki kuru kir alınır; bu adım atlanırsa toz suyla birleşip çamura döner ve tek yıkamayla çıkmaz. Sonra 16 fırçalı tam otomatik makinede, cinsine uygun fırça sertliği ve bitkisel şampuanla yıkanır. Rulo sıkma makinesinde suyunun yaklaşık yüzde 95\'i alınır, kapalı kurutma odalarında nemi giderilir, son kontrolden sonra parfümlenip ambalajlanır. Denizli\'de yaptığımız işlerin çoğu bunun etrafında dönüyor: halı, yorgan ve perde tesise gelir; koltuk ve yatak gelmez, onlara biz gideriz.',
  'Bir iş genelde telefonla ya da WhatsApp\'tan başlıyor. Halının cinsini ve ölçüsünü söylediğinizde ya da bir fotoğraf gönderdiğinizde fiyatı hemen iletebiliyoruz; siteye fiyat listesi koymamamızın sebebi de bu, çünkü metrekare, halı cinsi, tüy uzunluğu ve lekenin durumu birlikte değerlendirilmeden çıkan bir rakam gerçekçi olmuyor. Alım sırasında konuşulan fiyat teslimde de aynı kalıyor. Halıyı gördükten sonra fiyat değiştirmek gibi bir uygulamamız yok; değişiklik gerektiren tek durum, alımda bilinmeyen bir işin sonradan ortaya çıkması ve o da size sorulmadan yapılmıyor.',
  'En çok soru halının cinsiyle ilgili çıkıyor. El dokuma ve yün halılardaki boya, makine halısındaki sentetik boya gibi sabit değil; sıcak suyla ve sert fırçayla yıkandığında komşu alana akabiliyor. Bu yüzden bu halılarda yıkamadan önce görünmeyen bir noktadan renk akma testi yapıyoruz. Test olumsuz çıkarsa programı değiştiriyor, gerekirse yıkamayı yapmayacağımızı söylüyoruz. İpek halılarda değerli olan şey desen kadar lifin parlaklığı ve o parlaklık zarar gördüğünde geri gelmiyor — orada da aynı şekilde önce değerlendiriyor, sonra karar veriyoruz. Riski görmezden gelip yıkamak, telafisi olmayan bir hasar bırakıyor.',
  // "yılından beri" kalıbı bilinçli: `${foundedYear}'ten` yazılsaydı yıl
  // değiştiğinde ünlü uyumu bozulurdu (2010'ten). Bu kalıp her yılda doğru.
  `${foundedYear} yılından beri Denizli'deyiz. Tesisimiz Merkezefendi'de, Eskihisar Mahallesi'nde; il genelinde 19 ilçeye gidiyoruz. Çivril'e de gideriz, Çameli'ye de. Tesis Pazartesi–Cumartesi 08:00–19:00 arasında açık, alma-teslim aracı ise her gün çıkıyor — çünkü halının alınması için evde birinin bulunması gerekiyor ve bu her hanede mesai saatine denk gelmiyor. Vardiyalı çalışan bir eve akşam, hafta içi kimsenin bulunmadığı bir eve pazar günü gidilebiliyor. Uzak ilçelere çıkışı aynı bölgedeki adresleri birleştirerek planlıyoruz; yarısını alıp ikinci kez yola çıkmak kimsenin işine yaramıyor.`,
  'Yerinde yapılan işlerde yöntem tamamen değişiyor. Koltuk ve yatak taşınmadığı için ekip yüksek basınçlı vakumlu makineyle adrese geliyor. Burada belirleyici olan ıslatma değil geri emiş: kumaşın içinde kalan deterjan, temizlenen koltuğu kısa sürede ve daha hızlı yeniden kirletiyor. Yatakta ise sınır ıslatma miktarı — iç dolguya su geçerse dolgu tam kurumuyor ve içeride nem kalıyor, bu yüzden yüzeyle sınırlı çalışıyoruz. Stor ve zebra perdeler mekanizmalı olduğu için ultrasonik makinede, katlanmadan yıkanıyor; sökme ve tekrar takma bize ait, ayrıca ücretlendirilmiyor. Hangi işin nerede yapılacağı, eşyanın taşınabilirliğinden belli oluyor.',
]
