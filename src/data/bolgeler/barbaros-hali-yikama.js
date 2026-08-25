/**
 * Barbaros (Merkezefendi) — bölge sayfası metni.
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
    "Bu işte evden çıkan bir şey yok; yatak da baza da bulunduğu odada temizleniyor. Belirleyici olan şey bu yüzden parça sayısı ya da cinsi değil, randevunun saati. Yatak odası işlem boyunca kullanım dışı kalıyor ve iş bittikten sonra da bir süre öyle kalması gerekiyor. Barbaros'taki dairelerde yatak odaları dolapla çevrili ve dar olduğu için yatağın çevresinde dönülecek yer açmak başlı başına bir hazırlık. Bir de evin geri kalanı işlemez hâle gelmiyor; salon ve mutfak açık kalıyor, kapatılan tek yer o oda oluyor. O hazırlığın randevudan önce yapılmış olması günün geri kalanını rahatlatıyor ve oda gün boyunca sizin planınıza kalıyor.",
    "Ekip yüksek basınçlı üniteyle geliyor, hortum kapıdan yatağın yanına kadar uzanıyor ve çalışma alanı dört bir yanda açılıyor. Yalnızca üst yüzey değil kenarlar da işlendiği için karyolanın duvara dayalı tarafına ulaşılabilmesi gerekiyor; ekip gerekirse karyolayı duvardan bir miktar ayırıyor ve iş bitince yerine geri itiyor. Kapıdan hortumun geçebileceği bir yol kalması da önemli, o yüzden koridora bırakılan kutular kaldırılıyor. Bir dairede iki yatak varsa ikisi peş peşe yapılıyor, ikinci oda birincisi biterken hazırlanıyor. Randevuyu günün erken saatine vermeyi bu yüzden tercih ediyoruz: oda erken boşalıyor, iş erken bitiyor."
  ],
  yerelBaglam: "Apartman planlarında yatak odası genellikle en küçük oda; bir karyola, bir gardırop ve komodinden sonra geriye kalan yer bir kişinin geçebileceği kadar. Karyolaların çoğu bazalı ve bir kenarı duvara dayalı duruyor. Bu ikisi bir araya geldiğinde temizlenecek yüzeyin bir bölümü ulaşılamaz hâle geliyor. Gardırop kapaklarının açılma yönü de çalışma alanını daraltan ayrı bir etken, çünkü kapak açıkken karyolanın o yanına geçilemiyor. Buradan gelen taleplerde odanın ölçüsünü sormuyoruz, çünkü tarif etmesi zor; bunun yerine yatağın tek mi çift mi olduğunu ve karyolanın çevresinde dönülüp dönülemediğini soruyoruz.",
  note: "",
  sss: [
    { q: "Yatak odasını randevudan önce nasıl hazırlamalıyız?", a: "Nevresim takımı ve yastıklar alınmış, yatağın üzeri tamamen çıplak olsun. Karyola duvara dayalıysa onu ekip kendisi ayırıyor, siz uğraşmayın. Odada erişilebilir bir priz bulunması gerekiyor, çünkü ünite elektrikle çalışıyor. Komodin üstündeki kırılabilir eşyayı almanız da işi rahatlatıyor. Hepsi on dakikalık iş ama randevu saatinde yapılırsa yarım saate çıkıyor ve o süre günün geri kalanına yansıyor." },
    { q: "Aynı gün kaç yatak yapılabiliyor?", a: "Aynı adreste birden fazla yatak varsa hepsi tek ziyarette yapılabiliyor; belirleyen şey sayı kadar odaların ne kadar dolu olduğu. İki yataklı bir dairede iş tek randevuya rahat sığıyor. Sayı arttıkça odaların sırayla boşaltılması gerekiyor ve süreyi uzatan işlemin kendisi değil o bekleme oluyor. Kaç yatak olduğunu telefonda söylerseniz randevuyu ona göre veriyoruz, saat aralığı da buna göre açılıyor." }
  ],
}
