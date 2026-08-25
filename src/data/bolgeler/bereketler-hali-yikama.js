/**
 * Bereketler (Merkezefendi) — bölge sayfası metni.
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
    "Halı kaldırıldığında yerine serilecek ikinci bir sergi varsa, teslim günü aciliyet olmaktan çıkıyor. Bereketler'in bahçeli evlerinde durum çoğu zaman böyle: yün halının altında ya da sandıkta duran bir kilim, bir yolluk, kaldırılan parçanın yerini hemen alıyor ve oda çıplak kalmıyor. Yedek sergi çıkarılıp serildiğinde ev sahibinin gözünde iş zaten bitmiş oluyor, geri kalanı bizim takvimimize kalıyor. Bu, işi bizim tarafımızda da rahatlatan bir şey. Sırasını bekleyebilen bir halı, programını taşıma telaşının değil kendi cinsinin belirlediği bir halı hâline geliyor. Randevuda ilk sorduğumuz şeylerden biri de bu yüzden evde yedek bir sergi olup olmadığı.",
    "Esneklik günlük planımızda somut bir karşılık buluyor. Yün halı ve kilim, makine halısıyla aynı fırça sertliğinde yıkanmıyor; 16 fırçalı makinenin ayarı halının cinsine göre değişiyor ve ayarın değiştiği her seferde hat kısa bir süre duruyor. Bekleyebilen parçalar bu duruşların yanına yerleştirilebiliyor, böylece ne makine boş kalıyor ne de acelesi olan bir adres geride bırakılıyor. Yani buradan gelen bir halı sırasını rahat alıyor. Teslim gününü de o sıraya bakarak söylüyoruz. Gün yaklaştığında uymazsa değiştirmek zor olmuyor, çünkü baştan sıkı bir tarih verilmiş olmuyor."
  ],
  yerelBaglam: "Çeperde bahçeli müstakil evlerle yeni yapının karıştığı bir doku var. Müstakil taraftaki evlerde tekstil birikiyor: kullanılanın yanında katlı duran ikinci bir sergi, çeyizden kalma bir kilim, kışın serilip yazın kaldırılan yolluklar. Bunlar depoda değil, evin içinde ve elin altında duruyor; kapağı açılan bir sandıktan çıkıp aynı gün yere serilebiliyorlar. Yeni yapı tarafındaki dairelerde ise tersi geçerli, orada yedek parça bulunmuyor ve teslim daha net bir güne bağlanıyor. Aynı mahallede iki farklı randevu mantığı bu yüzden yan yana yürüyor; alma sırasında evde yedek sergi olup olmadığını sormamızın sebebi de bu, çünkü cevap doğrudan teslim tarihini kuruyor.",
  note: "",
  sss: [
    { q: "Halı alındığında oda boş kalıyor mu?", a: "Genellikle kalmıyor, çünkü buradan halı alınırken yerine serilecek parça çoğu zaman evde hazır bekliyor. Halıyı ruloladıktan sonra yedek sergiyi açmak ziyaretin içinde, ayrıca konuştuğumuz bir şey değil. Yedek yoksa bunu alma sırasında öğrenmiş oluyoruz ve o adres için teslimi daha yakın tutmaya çalışıyoruz. Aciliyeti belirleyen halı değil, odanın durumu oluyor. Bunu telefonda da söyleyebilirsiniz, kayda geçiyor." },
    { q: "Teslim günü sonradan değiştirilebiliyor mu?", a: "Değiştirilebiliyor. Günü hazır olan parçaya göre söylüyoruz, size uymuyorsa ileri bir tarihe alıyoruz; bunun için aramanız yeterli, başka bir şey gerekmiyor. Öne çekmek her zaman mümkün olmuyor: kurumanın kısaltılacak bir yanı yok ve önündeki adresler de kendi gününü bekliyor. Teslim tarihini baştan gevşek tutmamızın sebebi bu, sonradan kaydırmak zorunda kalmayalım diye." }
  ],
}
