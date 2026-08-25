/**
 * Kınıklı (Pamukkale) — bölge sayfası metni.
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
    "Mobilyalı bir daireye girildiğinde koltuk da yatak da evle birlikte devralınıyor. Yeni oturanın devraldığı eşyanın bir geçmişi var ama o geçmiş bilinmiyor: kaç kişi kullandı, ne kadar oturuldu, en son ne zaman temizlendi, hiçbiri belli değil. Buradan gelen çağrıların çoğu bu yüzden halı için açılmıyor. En çok istenen iş, evle beraber devralınan koltuğun ve yatağın bir kez baştan temizlenmesi oluyor; halı ikinci sırada kalıyor, bazen hiç konuşulmuyor. Bu işin tamamı evin içinde yapılıyor, yani koltuk da yatak da evden çıkmıyor. Devralınan eşyada başlangıç noktası bilinmediği için, kumaşın hangi hâlden geldiğini görmek işin ilk adımı oluyor.",
    "Yerinde yapılan işte sıra şöyle işliyor: kumaş önce ıslatılıyor, sonra yumuşak fırçayla çalışılıyor ve en sonda durulanıyor. Durulama adımı geride kalıntı bırakmamak için var. Devralınan bir eşyada bu adım ayrıca anlam taşıyor, çünkü koltuğun daha önce neyle silindiğini kimse bilmiyor; kumaşın içinde duran şeyin ne olduğu belli değil. Yatakta da aynı soru geçerli. Koltukla arasındaki fark şu: koltukta kullanımın izi kumaşın üzerinde görünür durur, yatakta ise görünen bir iz olmadan aynı soru soruluyor ve cevabı kimse bilmiyor. İşlem ıslak olduğu için koltuk da yatak da bir süre kullanılmadan bekliyor ve bunu randevuyu verirken baştan söylüyoruz."
  ],
  yerelBaglam: "Kınıklı'daki doku kiralık ve mobilyalı daire ağırlıklı; eşya evle birlikte el değiştiriyor ve çoğu dairede koltuk ile yatak evin kendi eşyası sayılıyor. Bunun sonucu da temizlik isteğinin taşınma gününe yakın çıkması oluyor. Ev yeni tutulmuş, eşya yerinde duruyor ve oturmaya başlamadan önce bir kez elden geçirilmesi isteniyor. Bizim tarafımızda değişen şey randevunun kiminle konuşulduğu oluyor: eşya ev sahibinin, adres ise kiracının. Bu yüzden randevuda o gün evde kimin bulunacağını ayrıca soruyoruz, çünkü iş evin içinde yapılıyor. Eşyanın kime ait olduğu yapılan işi değiştirmiyor, sadece o işe kimin karar verdiğini değiştiriyor. Bu netleştiğinde randevu tek telefonda kapanıyor.",
  note: "",
  sss: [
    { q: "Devralınan koltuk ve yatak için ne yapılıyor?", a: "İkisi de evden çıkarılmadan, bulunduğu yerde temizleniyor. Kumaş ıslatılıyor, yumuşak fırçayla çalışılıyor, sonra durulanıyor ve verilen su geri çekiliyor. Devralınan eşyada üzerinde durduğumuz adım durulama oluyor, çünkü daha önce ne uygulandığı bilinmiyor. Başlamadan önce kumaştaki yırtık, söküklük ya da solmayı birlikte görüyoruz; bunlar temizlikle değişmiyor. Halı ise ayrı bir iş; o evden alınıp tesiste yıkanıyor." },
    { q: "Eşya ev sahibinin, randevuyu kim alabilir?", a: "Randevuyu evde oturan alıyor, çünkü iş evin içinde ve o gün kapının açık olması gerekiyor. Eşya ev sahibine aitse haberi olması işi kolaylaştırıyor; kumaşta önceden duran bir hasar varsa iş başlamadan görülmüş oluyor. Kira ilişkisi bizim tarafımızda bir şey değiştirmiyor; adres ve o gün evde bulunacak kişi netse randevu kuruluyor. Randevuyu iki taraftan biri tek başına da alabiliyor." }
  ],
}
