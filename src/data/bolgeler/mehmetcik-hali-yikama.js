/**
 * Mehmetçik (Pamukkale) — bölge sayfası metni.
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
    "Bir halının yıkanıp yıkanmayacağına burada çoğu zaman ebadı karar veriyor. Salonun tamamını kaplayan büyük parça eve sığmadığı için tesise geliyor; aynı dairedeki yolluk ve küçük kilimler ise yıllardır evde idare ediliyor. Ölçü farkı işlemi değil, kararı değiştiriyor. Süpürgeyle, silkelemeyle, banyoda elden geçirilerek. Bu ayrım o kadar yerleşmiş ki telefonda çoğu adres tek parçadan söz ediyor, araç kapıya vardığında ortaya birkaç parça daha çıkıyor. Oysa büyük parçayla küçüğün yıkanma biçimi arasında bir fark yok; ikisi de aynı hattan geçiyor, sadece makinede kapladıkları yer değişiyor. Küçük parça büyüğün yanına yazıldığında ne alım süresi ne teslim günü değişiyor.",
    "Alma sırasında yaptığımız ilk iş listeyi kapıda çıkarmak. Her parça tek tek sayılıyor, büyük mü küçük mü olduğu kayda geçiyor, sonra hepsi birlikte araca alınıyor. Bu ayrımın sebebi sıralama: büyük ebat parçalar hatta tek başına ilerliyor, küçükler aynı programda arka arkaya diziliyor. Etiketleme de burada önem kazanıyor, çünkü bir haneden çıkan altı yedi parçanın çoğu birbirine benziyor. Teslimde karışıklık olmasın diye parçalar hane bazında işaretleniyor ve aynı ambalaj düzeniyle geri geliyor. Bu yüzden yalnızca salonu vermeden önce evin geri kalanına da bakmanızı söylüyoruz; ikinci bir alma günü beklemek gerekmiyor. Liste kapıda ikimizin de gördüğü bir kayıt oluyor."
  ],
  yerelBaglam: "Mehmetçik'teki daire düzeni birbirine yakın: her hanede eve sığmayan tek bir büyük parça ile birkaç küçük ebat parça bulunuyor. Yani hanenin halı stoğu tek parçadan ibaret değil, ama parçaların çoğu ev içinde yıkanabilecek kadar küçük göründüğü için sıraya hiç girmiyor. Küçük parçanın kendi başına yıkanması aslında zor tarafı; suyunu atamadığınız bir yolluğun kuruması günler alıyor ve dibinde nem kalıyor. Tesiste bu parçaların suyu rulo sıkmada büyük halıyla aynı oranda alınıyor, kurutma da kapalı odada yapılıyor. Küçük olmak işlemi hafifletmiyor, yalnızca hatta daha az yer kaplıyor. Buradaki küçük parçaların çoğu ilk kez yıkanıyor, alma sırasında ayrıca bunu soruyoruz.",
  note: "",
  sss: [
    { q: "Salon halısının yanında yolluk ve küçük kilimleri de listeye yazdırabilir miyiz?", a: "Yazdırabilirsiniz, ayrıca bir düzenleme gerekmiyor. Araç kapıya geldiğinde parçalar tek tek sayılıyor ve hepsi aynı kayda giriyor. Küçük parçanın eklenmesi alım süresini birkaç dakikadan fazla uzatmıyor, teslim günü de büyük parçayla aynı kalıyor. Evde idare edilen bir yolluğu bu sırada vermek en pratiği; ikinci bir randevu beklemenize gerek kalmıyor. Parça çoksa listeyi kapıda birlikte okuyoruz." },
    { q: "Büyük halı ile küçük parçalar aynı gün mü geri geliyor?", a: "Aynı hanenin parçaları birlikte hazırlanıyor ve birlikte teslim ediliyor. Küçükler hatta daha çabuk ilerlese bile ayrı gönderilmiyor, çünkü tek adrese iki sefer yapmak hem sizin hem aracın gününü bölüyor. İstisna, parçalardan birinde ayrıca çalışılması gereken bir yer varsa oluyor; o durumda gecikmeyi baştan söylüyoruz. Teslim günü tek olduğu için evde de tek bir hazırlık yetiyor." }
  ],
}
