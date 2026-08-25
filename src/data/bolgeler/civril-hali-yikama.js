/**
 * Çivril — bölge sayfası metni.
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
    "Kapıda halıyı alırken çoğu zaman yanında bir yığın daha çıkıyor: yorganlar, battaniyeler, evin kış tekstilinin tamamı. Çivril'de araca yüklenen şeyin yalnızca halı olmadığını bildiğimiz için randevuyu da buna göre kuruyoruz. Halı, yorgan ve battaniye aynı gidişte birlikte alınıyor; ama tesiste aynı hatta girmiyorlar. Halı kendi yıkama hattına, yorgan ve battaniye endüstriyel yorgan-battaniye makinesine gidiyor. İkisi farklı hacimde ve farklı dolguda olduğu için tek bir programla çözülmüyor; ayrı makine burada tercih değil, işin gereği. Alım sırasında da bu iki grup birbirinden ayrı sayılıp yükleniyor.",
    "Bunun pratik karşılığı şu: telefonda konuşurken yalnız kaç halı olduğunu değil, kaç yorgan ve battaniye çıkacağını da soruyoruz. Çıkacak hacim baştan bilinirse araç ona göre planlanıyor ve aynı adrese ikinci bir sefer gerekmiyor. Hacim beklenenin üzerindeyse bunu adreste değil, randevu sırasında öğrenmek istiyoruz. Yorgan ve battaniye halıdan farklı sürede kuruduğu için teslim tarihini en geç hazır olan kaleme göre veriyoruz; hepsi tamamlanınca tek seferde getiriyoruz. Hangi güne denk geldiğini de alım sırasında söylüyoruz."
  ],
  yerelBaglam: "Çivril, Işıklı Gölü çevresindeki ovada tarımla anılan bir ilçe; yerleşim geniş bir alana yayılmış ve hanelerin çoğu müstakil ev. Böyle evlerde kış tekstili sandıkta ya da dolapta topluca duruyor, mevsim değişince de topluca çıkıyor. Bu yüzden ilçeden gelen talep genelde tek kalem olmuyor. Ayrıca yerleşimin dağınık olması, adresin ilçe merkezinde mi yoksa dışında mı olduğunu randevuda sormamızı gerektiriyor: aracın o gün hangi hatta ilerleyeceği ve ne kadar yük alacağı bu iki bilgiden çıkıyor. Merkez dışındaki bir adres için aracın rotası, merkezdeki bir adrese göre baştan farklı kuruluyor.",
  note: "",
  sss: [
    { q: "Halıyla birlikte yorgan ve battaniyeleri de alıyor musunuz?", a: "Alıyoruz; zaten Çivril'de gidişleri buna göre planlıyoruz. Halı, yorgan ve battaniye aynı araca birlikte yükleniyor, ayrı ayrı randevu vermeniz gerekmiyor. Yalnız kaç parça çıkacağını önden bilmemiz gerekiyor, çünkü yorgan ve battaniye hacim olarak halıdan çok yer kaplıyor. Sayıyı telefonda söylerseniz araç ona göre çıkıyor. Sayıyı tam bilmiyorsanız yaklaşık söylemeniz de yeterli; önemli olan yorganların dolapta unutulmuş olanlarının da hesaba katılması." },
    { q: "Yorgan ve battaniye neden halıyla aynı makinede yıkanmıyor?", a: "İkisi aynı şey değil. Halı düz, sert ve ağır bir yüzey; fırçalı hatta yatay olarak yıkanıyor. Yorgan ve battaniye ise dolgulu: suyu içine çekiyor, sıkışıyor ve dolgunun topaklanmadan durulanması gerekiyor. Bunun için tesiste ayrı bir endüstriyel yorgan-battaniye makinesi var. Halı hattına atılan bir yorgan hem tam durulanmaz hem de dolgusu bir tarafa toplanır; bu yüzden bu kalemleri araca yüklerken bile baştan ayırıyoruz." },
    { q: "Tek gidişte ne kadar yük alabiliyorsunuz, hepsi aynı gün mü teslim ediliyor?", a: "Bir hanenin halısı ile kış tekstili tek gidişte rahatlıkla sığıyor; sınırı zorlayan durum genelde birkaç hanenin aynı güne denk gelmesi oluyor, onu da programı yaparken görüyoruz. Teslim tarafında ise kalemler aynı anda hazır olmayabiliyor: yorgan ve battaniyenin kuruma süresi halıyla aynı değil. Hepsi tamamlandığında tek seferde getiriyoruz; hangi tarihe denk geldiğini alım sırasında söylüyoruz; parça parça teslim edip sizi birkaç kez kapıda bekletmiyoruz." }
  ],
}
