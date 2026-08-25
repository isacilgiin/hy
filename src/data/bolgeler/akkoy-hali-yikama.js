/**
 * Akköy (Pamukkale) — bölge sayfası metni.
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
    "Evin en eski halısı çoğu zaman en az girilen odada duruyor. Misafir odasına yılda birkaç kez giriliyor, halının üstünden geçilmiyor ve halı bu yüzden temiz görünüyor. Ama üzerinden geçilmemesi kirlenmediği anlamına gelmiyor; yalnızca kirin yayılmadığı, indiği yerde kaldığı anlamına geliyor. Kapalı bir odada havada asılı duran ince toz zamanla aşağı iniyor ve yün havın dibine yerleşiyor. Yıllarca aynı yerde serili kalan bir halı ayrıca kendi ağırlığıyla oturuyor: dokuma sıkışıyor, hav bir yöne yatıyor, halı elle bastırıldığında eskisi kadar geri gelmiyor. Gözle görülen tek bir leke olmadan da bir halının yıkanacak hâle gelmesi tam olarak böyle oluyor.",
    "Böyle bir halı tesise geldiğinde ilk adım suyla değil kuruyla başlıyor. Halı toz çırpma makinesinden geçiriliyor; dokumanın içinde yıllardır sıkışmış kuru toz, suyla hiç temas etmeden alınıyor. Bu adım atlandığında toz ıslanıp çamura dönüyor, dokumanın derinine iniyor ve sonradan çıkarması çok daha zor oluyor. Yün ve el dokuma parçalarda ne kadar su verileceği de halının kendisine bakılarak belirleniyor. Halının ebadı ve dokumasının sıkılığı bu miktarı doğrudan etkiliyor. Akköy'den alırken halıyı katlamadan sarıyoruz; tesise geldiğinde tek tek açılıp iki yüzü birden görülüyor, üzerinde ayrıca çalışılacak yerler o sırada kayda geçiriliyor ve halı ondan sonra sıraya alınıyor."
  ],
  yerelBaglam: "Akköy'deki doku müstakil ve bahçeli evlerden oluşuyor; oda sayısı fazla ve odalar arasındaki kullanım farkı büyük. Günlük yaşam birkaç odada geçiyor, geri kalanı kapalı duruyor. Bize gelen parçalar da bu ikinci gruptan çıkıyor: çoğu yün, çoğu el dokuma, bir kısmı evin en eski eşyası. Alma günü bu adreslerde dar bir pencereye sıkışmıyor, çünkü o oda zaten günlük kullanımda değil; tarih ortak konuşulabiliyor ve sıraya göre planlanabiliyor. Sorduğumuz iki şey var: halının kaç yıldır aynı yerde serili olduğu ve odanın kışın ısıtılıp ısıtılmadığı. İkisi de halının tesiste nasıl ele alınacağını ve ilk adımın ne olacağını değiştiriyor.",
  note: "",
  sss: [
    { q: "Üzerinden geçilmeyen bir halı neden yıkatılıyor?", a: "Kir yalnızca ayakla taşınmıyor. Kapalı bir odada havadaki ince toz zamanla aşağı iniyor ve havın dibine yerleşiyor; üstünden geçilmediği için de yüzeye dağılmıyor, indiği yerde birikiyor. Yün bu tozu ayrıca tutuyor. Halının üstü temiz görünürken tüyleri elinizle ayırdığınızda dipte gri bir tabaka çıkıyor. Yıkama görünen bir leke için değil, tam olarak o tabaka için yapılıyor." },
    { q: "Yıllardır serili duran bir halıda ne değişiyor?", a: "Dokuma zamanla ve kendi ağırlığıyla sıkışıyor. Hav bir yöne yatıyor, halı elle bastırıldığında eskisi kadar geri gelmiyor ve serildiği yerin sınırı üzerine sinmiş oluyor. Yıkama havı kaldırıyor, yatan tüyleri açıyor; ama halının yıllar içinde aldığı biçimin tamamen kaybolacağı sözünü vermiyoruz. Ne kadar geri geleceği yünün bugünkü durumuna ve halının kaç yıldır hiç kıpırdamadan durduğuna bağlı." }
  ],
}
