/**
 * Karşıyaka (Pamukkale) — bölge sayfası metni.
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
    "Zebra perde kornişten indiği anda kendi ağırlığıyla açılıyor. Pencerede toplanmış hâlde duran kumaş serbest kalınca uzuyor; pencerede yarım metre görünen bir kanat elinizde üç metrelik bir yüzeye dönüşüyor. Söküm biten kanadın hemen kontrol altına alınması bu yüzden gerekiyor, yoksa kumaş odanın zeminine yayılıyor ve ayak altında kalıyor. Sökümü de bu yüzden iki kişi yapıyor: biri korniş tarafında duruyor, diğeri kumaşın ucunu tutuyor. Sökme ile takma zaten işin içinde olduğu için burada asıl konuştuğumuz konu perdenin yıkanması değil, pencereden araca kadar olan o kısa yolu nasıl gideceği oluyor. Perdeyi zorlaştıran şey kiri değil, söküldükten sonraki uzunluğu.",
    "Zebra kumaşında bir de şerit hizası meselesi var. Perde boyunca açık ve kapalı şeritler üst üste denk geliyor; kumaş kendi boyunda ve düzgün toplanmazsa bu şeritler birbirinden kayıyor ve bozulan hiza perde asıldığında pencerede doğrudan görünüyor. Bu yüzden söküm biten kanat kendi boyunda toplanıyor, araca kadar o hâlde taşınıyor ve yolda elden ele geçirilmiyor. Araçta da perdeye ayrı bir bölme ayrılıyor. Kanat sayısı fazlaysa her kanat kendi içinde toplanıyor, kanatlar birbirine karışmadan ayrı ayrı duruyor. Takma günü aynı mantıkla planlanıyor: perdenin toplanmış hâlde beklediği süre ne kadar kısaysa, pencereye asıldığında görünen yüzey o kadar düzgün oluyor."
  ],
  yerelBaglam: "Karşıyaka'da apartmanlarla yeni bloklar iç içe ve iki yapıda da zebra ile stor sistemler yaygın. Bu sistemlerin ortak yanı kumaşın sürekli gergin çalışması. Perde yıllarca aynı gerginlikte duruyor, alt çıtası kumaşı aşağı doğru sürekli çekiyor ve kumaş kendi düzlüğünü bu şekilde kazanıyor. Söküldüğü anda o gerginlik bir kerede kalkıyor; kumaş kendi hâline bırakılırsa nerede tutulduysa oradan bozuluyor. Bizim tarafımızdaki iş de tam olarak burada, o gerginlik kalktığı anda başlıyor. Randevuda kaç kanat söküleceğini soruyoruz, çünkü o gün araçta perdeye ne kadar bölme ayrılacağını bu sayı belirliyor. Sayıyı bilmeden yola çıkıldığında araç halıyla doluyor ve perdeye kalan yer yetmiyor.",
  note: "",
  sss: [
    { q: "Sökülen perde araca nasıl yerleştiriliyor?", a: "Kendi boyunda toplanmış hâlde ve perdeye ayrılan bölmeye yerleştiriliyor; halı istifiyle aynı yere girmiyor. Sebebi zebra kumaşının şerit hizası: kumaş sıkışır ya da hizası kayarsa bu, perde pencereye asıldığında doğrudan görünen bir şey oluyor. Perde araca her zaman en son giriyor, adrese varıldığında da ilk o iniyor; böylece araçta beklediği süre en kısa hâlde kalıyor." },
    { q: "Perde ve halı aynı gün birlikte alınabiliyor mu?", a: "Alınabiliyor, aynı adresten ikisi birlikte çıkabiliyor. Ayrıldıkları tek yer araç içindeki yerleşim oluyor: halı katlanıp istifleniyor, perde ise kendi bölmesinde toplanmış hâlde duruyor. Randevu verirken perdenin kaç kanat olduğunu ayrıca soruyoruz, çünkü o gün araçta ne kadar yer kalacağını halının parça sayısı değil perde belirliyor. İki iş tek ziyarette bitiyor, perde için ayrı bir gün ayrılması gerekmiyor." }
  ],
}
