/**
 * Pamukkale — bölge sayfası metni.
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
    "Bu ilçede halı yıkamanın zamanlaması iki ayrı takvime göre kuruluyor. Birincisi konaklama sezonu: Hierapolis ve travertenlerin çevresi ile Karahayıt'ta pansiyon ve apart dokusu yoğun, buralarda halıların boşaldığı aralık sezonun kapandığı haftalar. İkincisi üniversite dönemi: Pamukkale Üniversitesi'nin Kınıklı yerleşkesi de aynı ilçenin sınırları içinde ve dönem sonunda taşınma haftası bir anda başlıyor. Bu iki pencerede talep tek tek değil topluca geliyor ve ilçenin tamamı birbirine yakın tarihlerde halı çıkarıyor. Aradaki aylarda ise durum tersine dönüyor, alım günü neredeyse istenen tarihe konabiliyor.",
    "İki taraftan gelen halı da birbirine benzemiyor. Pansiyon ve apart dairelerinden gelenler yaya trafiği yüksek olduğu için daha kısa aralıklarla yıkanıyor; kir dibe oturmadan alındığı sürece halı da daha az yıpranıyor. Yerleşke çevresindeki kiralık evlerden gelenler ise küçük ebat halı ve yolluk ağırlıklı, çoğu adresten birkaç parça birlikte çıkıyor. Ortak nokta ikisinin de hızlı geri dönmesi gerekmesi. Halının suyu rulo sıkma makinesinde yüzde doksan beş oranında alınıyor; kurutmanın uzamasını engelleyen asıl adım bu. İlçe bitişik olduğu için alım günü esnek kalabiliyor."
  ],
  yerelBaglam: "İlçe Merkezefendi'ye bitişik, dolayısıyla mesafe burada belirleyici bir mesele değil. Belirleyici olan, adres sayısının kısa bir pencerede toplanması. Sezon kapandığında konaklama tarafı aynı haftalarda topluca halı çıkarıyor; dönem sonunda ise öğrenci evleri birkaç güne sığışıyor. Bu yüzden Pamukkale'de sorduğumuz ilk şey kaç parça olduğu ve halının hangi tarihte boşalacağı oluyor. Parça sayısı araç planını, tarih ise o güne kaç adres alabileceğimizi belirliyor. Bir de teslim adresi meselesi var: taşınma haftasında halının alındığı ev ile geri verileceği ev çoğu zaman aynı olmuyor.",
  note: "",
  sss: [
    { q: "Sezon kapanınca toplu halı yıkatmak için ne zaman haber vermeliyiz?", a: "Tarih belli olur olmaz. Konaklama tarafında halılar aynı haftalarda birden boşaldığı için o günler hızlı doluyor. Kaç parça çıkacağını ve hangi gün boşalacağını önceden bilirsek, o hafta içinden bir gün ayırıp parçaları tek programda alabiliyoruz. Parça çoksa alım birkaç sefere bölünüyor ve teslim de aynı sırayla yapılıyor. Son anda gelen taleplerde gün seçme şansı kalmıyor, sıradaki ilk boşluğa yazılıyor." },
    { q: "Dönem sonunda taşınıyoruz; halı bir adresten alınıp başka adrese teslim edilebilir mi?", a: "Edilebiliyor, yeter ki iki adres de alım sırasında konuşulsun. Halının alındığı ev boşaltılacaksa teslim adresini ve teslimi kimin alacağını o gün kayda geçiriyoruz. Yeni adres henüz kesin değilse halı ambalajlı şekilde bekliyor, siz netleştirdiğinizde teslim ediliyor. Şehir dışına çıkacaksanız bunu baştan söyleyin; teslimi taşınma gününüzden önceye almamız gerekebiliyor. Bekleyen halı için ek bir işlem yapılmıyor, ambalajı açılmadan duruyor." },
    { q: "Yaya trafiği yüksek bir yerde halı ne sıklıkla yıkanmalı?", a: "Aralık takvimden değil halının kendisinden çıkıyor. Giriş ve koridor halıları, aynı binanın oda halılarından belirgin şekilde daha erken kirleniyor; tüyün yönü bozulmaya ve renk mat görünmeye başladığında sıra gelmiş demektir. Pansiyon ve apart dairelerinde bu genelde sezon başı ve sezon sonu olmak üzere ikiye oturuyor. Kirin dibe oturmasını beklemek hem yıkamayı zorlaştırıyor hem halıyı yıpratıyor." }
  ],
}
