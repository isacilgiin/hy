/**
 * Güzelköy (Pamukkale) — bölge sayfası metni.
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
    "Evin bütün halıları aynı gün alındığında geriye çıplak zemin kalıyor. Oda sayısı fazla olan evlerde bu durum teslim gününe kadar sürüyor ve ev bu süre boyunca yarı yarıya kullanılamaz hâle geliyor. Bu yüzden alma işini tek seferde bitirmek her hane için doğru çözüm olmuyor. Randevuda evdeki bütün halıları oda oda sayıyor ve hangisinin ne sıklıkta kullanıldığını soruyoruz; en az kullanılan odadan başlayıp alımı bölmek mümkün. Böylece halıların bir bölümü yıkamadayken evin yaşanan kısmı serili kalmaya devam ediyor. Bölme kararı halının cinsiyle değil, evin nasıl kullanıldığıyla ilgili; bu yüzden kararı hane veriyor, biz yalnızca sırayı kayda geçiriyoruz.",
    "Alımı bölmek plan tarafında birkaç şeyi değiştiriyor. Önce hangi parçaların birinci partiye gireceğini yazıyoruz; misafir odası, az kullanılan yatak odası ve koridor parçaları genelde ilk sırada oluyor, salon sona bırakılıyor. İki parti arasındaki süre halının cinsine göre değil, birinci partinin teslim gününe göre belirleniyor. Parçalar hane bazında işaretlendiği için iki ayrı partiden gelen halılar birbirine karışmıyor. Bölmenin bir bedeli de var: ziyaret sayısı artıyor, bu yüzden partileri ikiden fazlaya çıkarmamaya çalışıyoruz. Tek seferde alınmasını isteyen haneler için de plan aynen bu şekilde kuruluyor. Her partinin kendi listesi çıkıyor ve teslim o listeye göre, aynı sırayla yapılıyor."
  ],
  yerelBaglam: "Güzelköy'deki yapı düzeni az katlı ve oda sayısı daireye göre fazla; halı hanenin tamamına yayılmış durumda, tek bir salon parçasından ibaret değil. Bir evden çıkan halı sayısı çoğu zaman beşi geçiyor ve ebatlar birbirinden farklı oluyor. Bu, alma tarafında araç planını da değiştiriyor: tek bir adres aracın önemli bir bölümünü doldurabildiği için aynı güne çok sayıda adres yazılmıyor. Teslimde de durum aynı, halılar ambalajlı ve sırayla geri getiriliyor. Hanenin halılarının tamamının bir defada mı yoksa iki partide mi alınacağı, randevuda konuştuğumuz ilk konu oluyor. Oda sayısı fazla olduğu için liste kapıda değil, odalar gezilerek çıkarılıyor.",
  note: "",
  sss: [
    { q: "Evdeki bütün halıların aynı gün alınması gerekiyor mu?", a: "Gerekmiyor. Tek seferde alınması araç tarafında daha pratik, ama oda sayısı fazla bir evde bu, teslim gününe kadar zeminin boş kalması demek. İsterseniz alımı iki partiye bölüyoruz; ilk partide az kullanılan odaların halıları çıkıyor, yaşanan bölüm serili kalıyor. Karar randevu sırasında veriliyor, sonradan değiştirmek araç planını bozuyor. Bölme kararını verirken evin kaç odasının fiilen kullanıldığına bakıyoruz." },
    { q: "Alım bölünürse hangi odadan başlanacağına nasıl karar veriliyor?", a: "Odaları kullanım sıklığına göre sıralıyoruz. Günün büyük kısmının geçtiği oda en sona kalıyor; misafir odası, az kullanılan yatak odası ve koridor parçaları ilk partiye yazılıyor. Halının kirli olup olmaması bu sıralamayı değiştirmiyor; belirleyici olan evin o süre boyunca nasıl kullanılacağı. Sıra kayda geçiyor, alma günü değişirse yeniden konuşuluyor. Salon çoğu zaman en sona kalan parça oluyor." }
  ],
}
