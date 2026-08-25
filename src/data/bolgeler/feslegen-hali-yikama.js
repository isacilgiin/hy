/**
 * Fesleğen (Pamukkale) — bölge sayfası metni.
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
    "Uzun tüylü bir salon halısı katlandığında da küçülmüyor; hacmi olduğu gibi duruyor ve tek parça hâlinde taşınmak zorunda. Fesleğen'in yeni bloklarında asıl mesele bu hacmi nereye kadar götüreceğimiz oluyor. Girişler kapalı otoparktan sağlandığı için araç doğrudan bina kapısına yanaşamıyor: otoparkın tavanında bir yükseklik sınırı var ve alma aracı o sınırın altından geçmiyor. Bu yüzden araç rampanın başında kalıyor, halı da o noktaya kadar getiriliyor. Söylemesi kolay ama planlanması gereken bir mesafe. Üstelik her blokta aynı değil; kimi adreste birkaç adım, kimi adreste binanın çevresini dolaşmak gerekiyor. Randevuya ayırdığımız süreyi de bu mesafe belirliyor.",
    "İkinci mesele hangi kapıda buluşacağımız. Bu bloklarda yaya girişi ile araç girişi ayrı noktalarda, çoğu zaman da binanın farklı cephelerinde. Daireye çıkan asansör otoparka iniyorsa halı aşağıdan, inmiyorsa yaya kapısından çıkıyor; hangisi olacağı adrese göre değişiyor ve bunu telefonda konuşuyoruz. Teslimde aynı güzergâh tersinden kuruluyor. Uzun tüylü parçalarda mesafeyi tek seferde alıyoruz, ara verip yere bırakmıyoruz; halının zeminde sürüklenmemesi hem tüy hem zemin açısından önemli. Tek seferde taşımak içinse yolun baştan belli olması, ara noktada durup yön aranmaması gerekiyor. Bu yüzden güzergâhı halıyı kaldırmadan önce netleştiriyoruz."
  ],
  yerelBaglam: "Fesleğen'deki yapılaşma yeni: bloklar arası yeşil alan, araçların indiği kapalı otopark, ayrı bir yaya kapısı. Böyle bir düzende bina kapısına araçla yanaşmak çoğu adreste mümkün olmuyor. Bunu bir engel saymıyoruz, sadece baştan bilinmesi gereken bir şey; bilinmediğinde randevu saati kayıyor. Aramada sorduğumuz da bu oluyor: aracın nereye kadar girebildiği ve rampanın başı ile daire kapısı arasında ne kadar yol olduğu. Bloklar arası mesafeler de kısa değil, o yüzden kaçıncı blok olduğunu adresle birlikte, kapı numarasından ayrı olarak kayda geçiriyoruz. Bu bilgiler elimizdeyse hem alma hem teslim söylenen saatte gerçekleşiyor.",
  note: "",
  sss: [
    { q: "Araç kapalı otoparka giremiyorsa halı nasıl alınıyor?", a: "Araç rampanın başında ya da yaya kapısının önünde duruyor, halı daireden alınıp o noktaya getiriliyor. Bu mesafeyi biz kapatıyoruz, halıyı aşağı indirmeniz gerekmiyor. Yol uzunsa randevuya ek süre yazıyoruz, böylece arkadaki adresler etkilenmiyor. Bina içinde asansör kullanılabiliyorsa iş belirgin şekilde kısalıyor. Rampanın başında basamak varsa onu da önceden bilmek istiyoruz; hacimli parçada basamak işi yavaşlatıyor." },
    { q: "Site girişinde araç nereye kadar yanaşabiliyor?", a: "Bu adrese göre değişiyor, o yüzden telefonda soruyoruz. Bazı bloklarda rampanın hemen başına kadar yanaşılabiliyor, bazılarında araç dış kapıda kalıyor ve aradaki mesafe taşınarak kapatılıyor. İkisi de yapılabilir işler, tek fark ayrılan süre. Siz binanın önündeki durumu tarif ederseniz aracı doğru noktaya yönlendirip randevuyu ona göre yazıyoruz. Duracağı nokta belliyse alma da teslim de gecikmiyor." }
  ],
}
