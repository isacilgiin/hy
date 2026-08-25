/**
 * İncilipınar (Pamukkale) — bölge sayfası metni.
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
    "Evinde kedi ya da köpek olan bir daireden çıkan halının meselesi yüzeyde duran toz değil. Hayvan tüyü havın arasına giriyor, elyafın kendisine dolanıyor ve süpürgenin çektiği kısım yalnızca en üstte kalanı oluyor. Geri kalanı halının içinde tutunmuş hâlde duruyor; halı katlanıp araca alındığında da orada durmaya devam ediyor. Bu yüzden alma randevusunu verirken, halının cinsini konuşmadan önce evde hayvan olup olmadığını soruyoruz. Soruyu meraktan sormuyoruz, cevap evetse halı kayda öyle giriyor ve tesiste ayrı bir sıraya yazılıyor. Kayda geçen o tek satır, halının hangi programa gireceğini, hangi halıların yanında ve hangi aşamada işleneceğini baştan belirliyor.",
    "Ayrı sıraya almanın iki sebebi var. Birincisi tüyün çıkarılması zaman istiyor: hava dolanmış tüy ıslandıktan sonra daha da sıkı tutunuyor, o yüzden bu halılar yıkama hattına girmeden önce daha uzun süre elde kalıyor. İkincisi tüyün başka halılara geçmemesi, bu da halıyı sıranın neresine yazacağımızı belirleyen bir sebep. Fırça sertliği de halının cinsine göre değiştiriliyor; uzun tüylü bir halıda tüyü yatıran ayar, kısa havlı bir halıda tüyü söküp çıkarmaya yetmiyor. Koku için ayrıca bir işlem uygulanmıyor. Kokuyu başka bir ürünle örtmek yerine kokunun tutunduğu tüyü almak üzerine çalışıyoruz; halının üzerinde tüy kaldığı sürece koku da kalıyor."
  ],
  yerelBaglam: "Buradaki doku merkezî apartman dokusu; daireler orta ebatta ve salon halısı günün büyük bölümünde kullanımda kalıyor. Evde hayvan varsa halı gerçekten hiç boşalmıyor, çünkü üzerinden geçilen zemin olmanın yanında hayvanın yattığı yer de çoğu zaman aynı halının aynı köşesi oluyor. Bunun pratik sonucu da şu oluyor: halının belirli bir bölgesi, geri kalanından bambaşka bir hâlde geliyor. Alma sırasında halının en çok kullanılan köşesinin neresi olduğunu da soruyoruz. Cevabı bilmek, halı tesiste açıldığında ilk nereye bakacağımızı ve o bölgenin ayrıca çalışılıp çalışılmayacağını önceden söylüyor. İncilipınar'dan gelen halıların çoğunda böyle bir köşe bulunuyor ve işe oradan başlıyoruz.",
  note: "",
  sss: [
    { q: "Evde hayvan olup olmadığını neden soruyorsunuz?", a: "Cevap halının sırasını değiştirdiği için soruyoruz. Tüy taşıyan halı diğerlerinin arasına karışmadan ayrı yazılıyor ve tüyün alınabilmesi için yıkamadan önceki aşamada daha uzun tutuluyor. Bunu alma günü bilmezsek halı sıraya herhangi bir halı gibi giriyor, dolanmış tüy de işlem boyunca elyafın içinde kalıyor. Telefonda söylenen tek cümlelik bir bilgi, tesiste yapılan işin sırasını baştan değiştiriyor." },
    { q: "Tüylü halı diğerlerinden ayrı mı işleniyor?", a: "Evet, hem sırası hem fırça ayarı ayrı belirleniyor. Tüy havın dokusuna dolandığı için önce mekanik olarak alınması gerekiyor; ıslanan tüy elyafa daha sıkı yapışıyor ve o aşamadan sonra çıkarmak zorlaşıyor. Halının cinsi de devreye giriyor, uzun tüylü bir halıyla kısa havlı bir halı aynı fırça sertliğiyle işlenmiyor. Ayrı tutmanın ikinci sebebi tüyün başka halılara geçmesini engellemek." }
  ],
}
