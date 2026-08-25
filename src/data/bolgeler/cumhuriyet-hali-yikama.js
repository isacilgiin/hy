/**
 * Cumhuriyet (Pamukkale) — bölge sayfası metni.
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
    "Evde yıllardır duran el düğümlü bir halı için telefonda teslim tarihi vermiyoruz. Bunu geçiştirmek için değil, o tarihi belirleyecek bilgi henüz elimizde olmadığı için yapıyoruz. Böyle bir parçanın işi ebadıyla değil durumuyla ölçülüyor: dokunun sıklığı, saçakların hâli, daha önce hiç yıkanıp yıkanmadığı ve üzerinde ayrıca çalışılması gereken bir yer bulunup bulunmadığı. Bunların hepsi halı tesise geldikten, düz zemine serilip bakıldıktan sonra ortaya çıkıyor. İnceleme bittiğinde hangi programa gireceği belli oluyor; tarih ancak o noktada tutulabilecek bir söz hâline geliyor. İlk görüşmede verdiğimiz tek söz, halıyı gördükten sonra sizi arayacağımız oluyor.",
    "Program belirlendikten sonra tarih değişmiyor. Değişmesi gereken bir durum çıkarsa halı işleme girmeden önce arıyoruz, sonrasında değil. Cumhuriyet'ten gelen bu parçalar günlük akışın içinde diğer halılarla aynı hızda ilerlemiyor: makinenin fırça sertliği halının cinsine göre ayarlanabildiği için hassas bir dokuma kendi ayarıyla, çoğu zaman da tek başına yıkanıyor. Kurutma kapalı odada, yine kendi hızında tamamlanıyor; bu adımı sıkıştırmak da mümkün değil. Sahibine söylenen gün bu adımların toplamından çıkıyor. Bu yüzden böyle bir parça için verilen gün, aynı ebattaki sıradan bir halı için verilenden uzun olabiliyor; kısaltmak için yapılabilecek bir şey yok, kısaltılırsa halının kendisinden kısılmış oluyor."
  ],
  yerelBaglam: "Merkeze yakın, yerleşik bir apartman dokusu var Cumhuriyet'te; haneler uzun süredir aynı evde oturuyor ve evdeki halıların bir kısmı evin kendisi kadar eski. Değerli olduğu biliniyor ama nasıl bir bakım isteyeceği bilinmiyor, hatta nereden geldiği aile içinde farklı anlatılıyor. Telefonda alınan tarifle bu ayrım yapılamıyor. Halının nereden geldiğini bilmek şart değil; bizim baktığımız şey geçmişi değil bugünkü hâli, ama o hâli görebilmek için parçanın önümüzde olması gerekiyor. Görülmeden söylenen bir gün de gerçek bir gün olmuyor. Bu yüzden en çok açıklamak durumunda kaldığımız konu, tarihi neden sona bıraktığımız oluyor.",
  note: "",
  sss: [
    { q: "Hassas halı için tarih neden sonradan veriliyor?", a: "Çünkü tarihi belirleyen şey halının kendisi ve o henüz görülmemiş oluyor. Aynı ebattaki iki parçadan biri kısa sürede biten bir iş, diğeri günlere yayılan bir iş olabiliyor. Görmeden verilen gün ya tutmuyor ya da halıyı acele ettiriyor; ikisi de istemediğimiz sonuç. Halı geldikten sonra bakıp arıyoruz ve o görüşmede söylediğimiz gün sabit kalıyor." },
    { q: "İnceleme nerede yapılıyor, sonrasında gün değişir mi?", a: "İnceleme tesiste, düz zeminde ve gün ışığında yapılıyor; kapıda araç beklerken ya da halı katlı hâldeyken sağlıklı olmuyor. Bakıldıktan sonra ne yapılacağı ve ne kadar süreceği aynı aramada anlatılıyor. Söylenen gün o noktadan sonra değişmiyor. Beklenmedik bir durum çıkarsa işleme başlamadan önce haber veriyoruz; devam edip etmeme kararını siz veriyorsunuz. O ana kadar halı ambalajında, işleme girmeden bekliyor." }
  ],
}
