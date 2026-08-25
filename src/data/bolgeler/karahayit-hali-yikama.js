/**
 * Karahayıt (Pamukkale) — bölge sayfası metni.
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
    "Buradan gelen aramalarda ilk konuşulan iş çoğu zaman halı olmuyor, önce yatak ve baza soruluyor. Sebebi yapının kendisi: oda sayısı bir daireninkinden fazla olan bir evde yatak da tek olmuyor. Böyle bir adreste iş bir yatak temizliği değil, sıra hâlinde birden çok yatak demek. Bu yüzden randevuyu doğrudan saat üzerinden değil, kaç yatak ve kaç baza olduğu üzerinden konuşuyoruz. Sayı belli olduğunda o adrese ne kadar süre ayıracağımız da belli oluyor; işin bir günde bitip bitmeyeceğini bize söyleyen şey bu sayı oluyor. Uzaklık, hatta halının cinsi bile bu hesaba girmiyor; belirleyici olan yüzey sayısı oluyor.",
    "Sıra şöyle kuruluyor. Ünitenin suyunu ve elektriğini tek noktadan aldığı için ilk odaya girmeden önce nereye kurulacağını konuşuyoruz. Ünite eve bir kez giriyor ve odalar arasında taşınarak ilerliyor, yani her yatak için baştan bir kurulum yapılmıyor. Bir yatağın iki yüzü de ayrıca ayrı ayrı çalışılıyor ve baza yüzeyi ayrı bir yüzey sayılıyor; dört yataklı bir evde bu, dört değil on iki yüzey anlamına geliyor. Yüksek basınçlı ünite verdiği suyu emişle geri çektiği için yatak ıslak bırakılmıyor, ama yine de nemli kalıyor. Bu yüzden sırayı, işi biten odanın kapısı kapanacak ve o oda dinlenecek şekilde kuruyoruz."
  ],
  yerelBaglam: "Karahayıt'ta doku alçak katlı ve oda sayısı yüksek; aynı çatı altında birden çok yatak odası bulunan yapılar yaygın. Bu, işi bir daireden gelen tek yatak işinden ayıran şey. Orada gün yarım kapanırken burada gün baştan yatak sayısına ayrılıyor. Odaların hepsinin aynı anda hazır olması gerekmiyor, hatta bunu istemiyoruz. Biz birinci odadayken ikinci oda hazırlanabiliyor, birinci oda ise biz oradan çıktıktan sonra kendi başına bırakılıyor. Bu akış olmadığında bütün ev aynı anda boşaltılıyor ve gereksiz yere uzun süre öyle kalıyor. Randevuda konuştuğumuz şey de zaten yatak sayısı ile bu sıranın hangi odadan başlayıp nerede biteceği oluyor.",
  note: "",
  sss: [
    { q: "Bir günde kaç yatak yapılabiliyor?", a: "Bunu yatak sayısı değil, yüzey sayısı belirliyor. Her yatağın iki yüzü ve altındaki baza ayrı ayrı çalışılıyor. Bu yüzden telefonda kaç oda ve her odada kaç yatak olduğunu soruyoruz. Sayı bir günde bitmeyecek kadar yüksekse işi bölüyoruz ve ikinci güne kalan odaları baştan söylüyoruz. Yatak ölçüsü büyüdükçe her yüzey uzadığı için telefonda ölçüyü de soruyoruz." },
    { q: "Çok yataklı bir adreste sıra nasıl kuruluyor?", a: "Odalara giriş sırasını baştan yazıyoruz ve ünite o sıraya göre taşınıyor. İlk odadan başlıyoruz, o oda bitince kapısı kapanıyor ve sıradaki odaya geçiyoruz. Böylece işi biten oda kendi başına dinlenirken biz durmuyoruz. Sıra baştan yazıldığı için o gün hangi odada olacağımız da belli oluyor. Bir oda o gün boşaltılamıyorsa sırayı değiştiriyoruz; o oda işi durdurmuyor, sona geçiyor." }
  ],
}
