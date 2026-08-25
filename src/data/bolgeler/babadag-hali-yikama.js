/**
 * Babadağ — bölge sayfası metni.
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
    "Babadağ'da bir halıyı yıkamak, o halıyı bulunduğu odadan alıp araca kadar indirmekten daha kolaydır. İlçe dik bir yamaca kurulu; sokakların çoğu dar, birçoğu merdivenli ve pek çok adrese araç kapı önüne yanaşamıyor. Bu yüzden randevuda ilk sorduğumuz şey halının cinsi değil, aracın nereye kadar çıkabildiği ve halının hangi merdivenden ineceği oluyor. İki cevabı almadan o güne kaç adres yazabileceğimizi de bilemiyoruz: burada bir adres, düz bir sokaktaki adresin birkaç katı zaman alabiliyor.",
    "Ağır parçaları evin içinde sarıyoruz. Katlanan halı köşelerinden kırılıyor ve dar bir merdivende sürüklenmeye başlıyor; sarılmış halı iki kişinin omzunda düz iniyor. Sarma sırasında halının yüzü içeride kalıyor, merdiven duvarına ve korkuluğa değecek olan taraf dış yüzey oluyor. Aracın yanaşamadığı adreslerde kalan yolu yürüyerek yapmak işin bir parçası; halının sokağa indirilmiş halde hazır bekletilmesini istemiyoruz. Teslimde aynı yol tersten yürünüyor: halı kapı önüne bırakılmıyor, ambalajı açılmadan çıktığı odaya kadar getiriliyor."
  ],
  yerelBaglam: "Babadağ'ın dokusu küçük odalı, kot farkı olan evlerden oluşuyor. Aynı evin bir kapısı sokak seviyesinde açılırken öbür katı bir merdiven aşağıda kalabiliyor; halıyı hangi kapıdan çıkaracağımız bu yüzden evden eve, bazen aynı evde parçadan parçaya değişiyor. Buradan gelen halılar da bu ölçüye göre: küçük ve orta ebat halılar, aralarında kilimler. İlçenin dokumacılık geçmişi nedeniyle evlerde el emeği tekstil bulunuyor; bu parçaları taşırken ayrı davranıyoruz, katlamadan sarıyor ve araçta diğerlerinin altına koymuyoruz. Aynı sokakta iki adres varsa aracı ikisinin arasında bir noktaya bırakıp her iki evi tek yürüyüşte topluyoruz; burada aracı ileri geri gezdirmek zaman kazandırmıyor, kaybettiriyor.",
  note: "",
  sss: [
    { q: "Aracın yanaşamadığı dar ya da yokuşlu bir sokakta halı nasıl alınıyor?", a: "Aracı sokağın girebildiği en yakın noktaya bırakıyor, kalan yolu yürüyerek yapıyoruz. Halı odada sarılıyor ve taşıma boyunca açılmıyor; zorunlu bir mesafe varsa altına örtü seriyoruz. Bu taşımayı biz yapıyoruz, halının sizin tarafınızdan aşağı indirilmiş olmasını beklemiyoruz. Randevu alırken sokağın adını değil aracın nereye kadar çıkabildiğini soruyoruz; bunu çoğu zaman orada oturan bizden iyi biliyor. Yürünecek bir yol varsa alma saatini de ona göre veriyoruz." },
    { q: "Üst kattaki halıyı merdivenden indirmek için ne gerekiyor?", a: "Halının ebadı ve ağırlığı belirliyor. Tek kişinin omzunda inen bir parçayı tek kişi indiriyor; sahanlığı dönemeyecek kadar uzun ya da ağır bir halı varsa adrese iki kişi geliyoruz. Bunu kapıda öğrenmek istemediğimiz için randevuda soruyoruz: kaç parça, hangi kattan ve merdiven dönüyor mu. Ağır parçalar korkuluğa yaslanarak değil iki uçtan tutularak indiriliyor; basamağa sürtülerek indirilen halının arkası açılıyor, kenarı yıpranıyor." },
    { q: "Teslimde halı kapıda mı bırakılıyor, odaya kadar mı getiriliyor?", a: "Odaya kadar getiriliyor. Halı aldığımız odaya bırakılıyor ve ambalajı orada açılıyor. Aracın yanaşamadığı adreslerde teslim, almanın tersi olarak yürüyor: aynı merdiven, aynı yol. Evde kimsenin bulunmadığı saatte teslim yapmıyoruz, çünkü kapı önünde bırakılan halı hem ıslanabiliyor hem de bir kez daha taşınmak zorunda kalıyor. Teslim saatini bu yüzden gün içinde teyit ediyoruz; adres yokuşun üst tarafındaysa saati erkene çekmeyi tercih ediyoruz." }
  ],
}
