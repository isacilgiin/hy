/**
 * Sümer (Merkezefendi) — bölge sayfası metni.
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
    "Aynı kapı numarasında iki ayrı zil olabiliyor: biri sokak seviyesindeki atölyeye, diğeri üst kattaki daireye açılıyor. Bu yüzden Sümer'de alma randevusunu alırken adresi yazmakla yetinmiyoruz, hangi girişten içeri gireceğimizi ayrıca soruyoruz. Binanın önünde durup iki kapıdan hangisinin çalınacağını denemek hem sizin vaktinizi alıyor hem o gün sıradaki adresi geciktiriyor. Konuşulacak şey basit: kapının rengi, yanındaki tabela, girişin doğrudan sokağa mı yoksa yan aralığa mı baktığı. Bir de kat bilgisi geliyor; asansör varsa halının hangi kattan ineceği, yoksa kaç kat merdiven indirileceği. Halının kendisiyle ilgili sorular ancak kapı ve kat netleştikten sonra, en sonda sırasını alıyor.",
    "İşin yıkama tarafında buraya özel bir şey yok. Bir daireden çıkan halı, hangi sokaktan alındığına bakılmaksızın aynı hattan geçiyor; makinenin programı halının cinsine göre seçiliyor, sokağın dokusuna göre değil. Ayırt eden kısım tamamen adrese ulaşmakta ve halıyı araca kadar taşımakta toplanıyor. Sanayi ile konutun aynı sokağı paylaştığı yerlerde kaldırım kenarı gün içinde yükleme yapan araçlarla dolabiliyor, bu da aracımızın binaya kaç metre yanaşabileceğini değiştiriyor. Yanaşamıyorsa halı elde taşınıyor ve o süre randevuya baştan yazılıyor, sonradan çıkan bir sürprize dönüşmüyor. Yalnızca ev halısı alıyoruz; işyeri ve atölye halısı hizmet listemizde yok, alma da bu yüzden konut girişinden yapılıyor."
  ],
  yerelBaglam: "Sümer'de atölye ile daire çoğu zaman aynı parselde duruyor. Alt katta çalışılan, üst katlarda oturulan binalar var; bazılarında iki işlev için iki ayrı giriş açılmış, bazılarında tek giriş ikisine birden hizmet ediyor. Sokak da aynı şekilde paylaşılıyor: sabah saatlerinde mal indiren araçlar, gün ortasında görece boş bir kaldırım. Alma saatini biz de buna göre konuşuyoruz; sokağın hangi saatte açık olduğunu genellikle orada oturan biliyor. Not ettiğimiz bu tarif teslimde tekrar kullanılıyor, çünkü halı geri geldiğinde yine aynı kapıdan girilmesi ve aynı taşıma bir kez daha yapılması gerekiyor. Bu tarif bir kez konuşuluyor ve kayıtta kalıyor.",
  note: "",
  sss: [
    { q: "İki girişi olan bir binada alma nasıl planlanıyor?", a: "Randevuyu alırken hangi girişin daireye çıktığını soruyoruz ve bunu adresin yanına not ediyoruz: kapının rengi, üzerindeki tabela ya da sokağa göre yönü, hangisi tarif etmesi kolaysa o. Ortak tek giriş varsa kat ve daire numarası yeterli oluyor, ayrıca bir tarif gerekmiyor. Aynı not teslimde de kullanılıyor; böylece halı geri gelirken hangi kapıdan girileceği yeniden sorulmuyor." },
    { q: "Sokakta yükleme yapılıyorsa alma saati değişir mi?", a: "Değişebiliyor. Aracın binaya yanaşamadığı bir saatte halı kaldırım kenarına kadar elde taşınıyor; bu hem uzuyor hem halının yerde sürüklenmemesi için ayrı bir dikkat istiyor. Sokağın günün hangi saatinde rahat olduğunu söylerseniz randevuyu o aralığa veriyoruz. Söylenmediğinde de iş yapılıyor, yalnızca adreste geçen süre uzuyor; bunu önceden bilmek, o adrese ayrılacak zamanı baştan doğru yazmamızı sağlıyor." }
  ],
}
