/**
 * Karahasanlı (Merkezefendi) — bölge sayfası metni.
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
    "Zemin katta duran bir dokumanın kiri yalnızca üstten gelmiyor. Buradaki müstakil evlerde odanın tabanı toprakla neredeyse komşu; kışın rutubet, yazın ince toprak tozu aşağıdan yukarı doğru çalışıyor ve parçanın arka yüzünde birikiyor. Bu yüzden bu adreslerden aldığımız kilim ve yollukları araca koymadan önce ters çeviriyoruz. Üstü yalnızca solmuş görünen bir yolluğun arkası avuç içiyle sıvazlandığında elde iz bırakıyorsa, o parça tesiste önce toz çırpma makinesine giriyor, suyla sonra tanışıyor. Islanmadan önce alınmayan toprak su değince çamura dönüyor ve dokumanın ipleri arasına oturuyor; sonradan sökülmesi ilk gün alınmasından çok daha zor, bazen de eksik oluyor. İşin sırası buradan çıkıyor.",
    "Karahasanlı'dan çıkan iş çoğunlukla tek bir büyük halı da olmuyor. Bir kilim, birkaç yolluk, tek başına duran küçük bir dokuma parçası; hepsi ayrı ebatta ve bir kısmı el dokuması. El dokuması bir kilimle fabrikasyon bir yolluk aynı araca binse de tesiste aynı sıraya girmiyor, bu ayrımı daha kapının önünde yapıyoruz. Alma sırasında parçaları tek tek sayıp ebadını ve cinsini yazmamızın sebebi de bu: küçük bir parçanın gözden kaçması, salon halısının gözden kaçmasından çok daha kolay. Teslimde aynı liste baştan okunuyor ve parçalar tek tek karşılaştırılıyor. Bu yüzden alma listesi ile teslim listesi aynı satırları taşıyor."
  ],
  yerelBaglam: "Doku burada apartmandan çok müstakil ev; iki üç katlı, bahçe içinde ya da sokağa bitişik yapılar. Bunun halıya iki ayrı etkisi oluyor. Birincisi ebat: odalar apartman salonlarına göre daha küçük ve daha bölünmüş olduğu için ev tek büyük parçayla değil, üst üste binmeyen birkaç orta boy parçayla döşenmiş oluyor. İkincisi zemin. Üst katta duran halının altında bir daire varken, zemin katta duran halının altında doğrudan bina tabanı var; ısı farkı ve nem parçanın arkasında toplanıyor. Yıllardır aynı yerde duran bir kilimde bu, dokumanın arka yüzünün ön yüzünden belirgin biçimde daha koyu olması demek. Ters çevirince anlaşılıyor.",
  note: "",
  sss: [
    { q: "Halının arka yüzü de yıkanmış oluyor mu?", a: "Yıkama, yüzeyi silen bir işlem değil. Parça önce toz çırpmadan geçiyor, sonra baştan sona ıslanıyor ve bol suyla durulanıyor; su dokumanın içinden geçtiği için arka yüz ayrıca ele alınan ayrı bir bölüm gibi düşünülmüyor. Sıkma aşamasında da su aynı yoldan geri çekiliyor. Yani arkada biriken toprak, ön yüzdeki kirle birlikte aynı işlemin içinde birlikte çözülüyor." },
    { q: "Küçük ebatlı parçalar tek tek mi kaydediliyor?", a: "Evet, alma anında sayılıyor. Her parça için ebat, cins ve varsa üzerinde ayrıca çalışılacak yerler yazılıyor; bir kilimle bir yolluk aynı hanenin işi olsa da kayıtta ayrı satır oluyor. Bu, tesiste doğru sıraya girmeleri için de gerekli, çünkü hepsi aynı programda ilerlemiyor. Teslimde liste yeniden okunuyor ve bütün parçalar ambalajlı olarak sayıyla veriliyor, liste kapatılıyor." }
  ],
}
