/**
 * Güney — bölge sayfası metni.
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
    "Bir evden halı alındığında odada kalan tekstil yalnızca perde değildir. Yatak ve baza da tekstil yüzeyi, üstelik evin en uzun süre temas edilen parçası; ama halının aksine sarılıp araca yüklenemiyor, tesise götürülemiyor. Güney'de aldığımız randevuların bir bölümü tam bu yüzden ikili kuruluyor: yatak odasının halısı bizimle geliyor, yatak ve baza yerinde kalıyor ve temizliği evin içinde yapılıyor. Bunu ayrı bir gün olarak değil, halı alımıyla aynı ziyarete yazıyoruz; ekip zaten adreste oluyor ve oda halı kaldırıldığı için zaten açılmış oluyor.",
    "Yatak ve baza temizliğini yerinde, yüksek emişli vakumlu ünitemizle yapıyoruz. Yüzeye verilen su kontrollü tutuluyor ve aynı ünite verdiği suyu kirle birlikte geri çekiyor. İşin can alıcı tarafı yatağın ıslak bırakılmaması: şiltenin içine inen nem kendiliğinden çıkmıyor, yüzeyden bakınca da görünmüyor. Bu yüzden işin günün hangi saatinde yapılacağını randevu alırken konuşuyoruz; yatağın o gece kullanılacak olması, saati sabaha ya da öğlene almamızın sebebi. Bazanın üst yüzeyi ve kenar kumaşları da aynı ziyarette ele alınıyor."
  ],
  yerelBaglam: "Güney küçük bir ilçe ve merkeze Buldan yönünden bağlanıyor; bu yüzden ilçeye çıktığımız gün Buldan hattı üzerindeki programla birlikte kuruluyor. Dokusu müstakil ev ağırlıklı olduğu için bir haneden çoğu zaman tek parça değil, yatak odası ile salon halısı birlikte çıkıyor. Randevuyu alırken halı adedinin yanında yatak-baza işi olup olmadığını ayrıca soruyoruz, çünkü o iş araca yük eklemiyor ama adreste geçirilecek süreyi değiştiriyor ve gün programının o adrese ayırdığı payı büyütüyor. Halı tesise gidiyor, yatakla baza evde kalıyor; ikisi de aynı ziyaret içinde bitiyor.",
  note: "",
  sss: [
    { q: "Güney'de yatak ve baza evden alınmadan mı temizleniyor?", a: "Evet, ikisi de bulunduğu odada temizleniyor. Yatak ve baza taşınabilir bir tekstil değil; sökülüp araca yüklenmesi hem şilteye zarar verir hem de evi bir geceden fazla yataksız bırakır. Ekip adrese vakumlu üniteyle geliyor, iş yatağın durduğu odada yapılıyor ve odadan çıkarken yatak toplanmış halde bırakılıyor. Halı alımıyla aynı ziyarete yazıldığı için ikinci bir gün planlamak da gerekmiyor." },
    { q: "Güney'de temizlikten sonra yatak aynı gece kullanılabiliyor mu?", a: "Randevuyu bunu gözeterek veriyoruz. Yüzeye verilen su sınırlı tutuluyor ve yüksek emişli vakum nemin büyük bölümünü geri çekiyor; iş bittiğinde yatak ıslak değil, nemli kalıyor. Kalan nem için odanın havalandırılması yeterli oluyor. Yatak-baza işini bu yüzden günün erken saatine yazıyoruz — akşama kadar geçen süre yatağın o gece kullanılabilmesi için ayrılmış bir süre. Kesin saati evin kendi programına göre belirliyoruz." },
    { q: "Güney'de yatak odası halısıyla yatak-baza işi aynı randevuya konabiliyor mu?", a: "Konuyor, hatta tercih ettiğimiz düzen bu. Yatak odası halısı kaldırıldığında oda zaten boşalmış oluyor: yatağın çevresi açık, baza kenarlarına erişim kolay. Halıyı sarıp araca aldıktan sonra aynı odada yatak ve baza işine geçiyoruz. Randevuya bunu ayrıca yazmamızın sebebi süre; yalnız halı alınan bir adres ile yatak-baza işi de olan bir adres aynı sürede bitmiyor, gün programı buna göre kuruluyor." }
  ],
}
