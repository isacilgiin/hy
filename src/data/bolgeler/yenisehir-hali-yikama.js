/**
 * Yenişehir (Merkezefendi) — bölge sayfası metni.
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
    "Bir perdenin ölçüsünü burada odanın genişliği değil, tavanın yüksekliği belirliyor. Yenişehir'deki yeni bloklarda pencere neredeyse zemine kadar iniyor ve üstte kornişle tavan arasında pay bırakılmıyor; sökülen stor açıldığında elimizde iki metreyi geçen tek parça bir kumaş kalıyor. Klasik tülde perde birkaç kanada bölünmüş olduğu için taşıma kendiliğinden kolaylaşır; büyük ebatlı storda böyle bir kolaylık olmuyor. Tek parça kumaşın katlanmadan taşınması gerekiyor, çünkü bu boyda bir kumaşta oluşan kat yeri sonradan kendiliğinden açılmıyor, izi kalıyor. Bu yüzden söktüğümüz kumaş boru üzerine sarılarak araca alınıyor ve düz hâlde tesise gidiyor. Bu, ölçü büyüdükçe zorunlu hâle gelen bir ayrıntı.",
    "Araçta bu kumaş yatay yer istiyor ve üstüne başka bir parça konmuyor. Rulonun boyu çoğu zaman aracın iç uzunluğuna denk geldiği için büyük ebatlı perde alınacak bir adres, o gün aynı araca kaç iş sığacağını baştan belirliyor. Tesiste de ölçü belirleyici oluyor: bu boydaki bir kanat kapalı kurutma odasına tek parça olarak, bölünmeden asılıyor. Takma günü ise perde odanın içinde açılıyor; kanadın serbestçe yayılacağı boş bir alan gerekiyor ve bunu randevu sırasında söylüyoruz. Yeni dairelerde salon geniş olduğu için bu alan çoğu adreste sorun çıkarmıyor. Sökme ve takma bizim işimiz, bunun için ayrıca ücret alınmıyor."
  ],
  yerelBaglam: "Yenişehir'deki yapı yeni ve site düzeninde: asansör var, kapalı otopark var, bina girişi çoğunlukla geniş. Uzun bir kumaşı sarılı hâlde aşağı indirmeyi mümkün kılan da bu. Pencereler ise klasik tüle göre kurulmamış; dairelerin çoğunda stor ya da zebra sistem takılı ve bir salonda tek bir kumaş neredeyse bütün cepheyi kapatıyor. Oda başına düşen kanat sayısı az, ama her kanadın metrekaresi büyük. Randevu verirken kaç pencere olduğunu ve en büyük kanadın kabaca yüksekliğini soruyoruz; araçta ayrılacak yeri parça sayısı değil bu ölçü belirliyor. Aynı adresten halı da alınacaksa yükleme sırası perdeye göre kuruluyor, halı sonra biniyor.",
  note: "",
  sss: [
    { q: "Salon boyunca uzanan büyük ebatlı bir stor nasıl taşınıyor?", a: "Söküldükten sonra katlanmadan, boru üzerine sarılarak araca alınıyor ve araçta düz duracağı yer önceden ayrılıyor. Katlamamamızın sebebi düzenli görünmek değil; bu ölçüdeki bir kumaşta kat yeri sonradan düzelmiyor ve perde takıldığında o çizgi pencerenin tam ortasında kalıyor. Aynı sebeple kumaş yolda hep aynı yönde ve serbest duruyor. Kumaşın gerginliği taşıma boyunca bozulmadığı için pencerede de aynı şekilde asılıyor." },
    { q: "Tek parça bir perdede sökme ve takma nasıl yapılıyor?", a: "Kumaşı indirdiğimiz anda boruya sarıyoruz, katlanmış hâlde bekletmiyoruz; kısa bir bekleme bile o kat yerini bırakıyor. Takmada perde yine sarılı geliyor ve doğrudan pencerenin önünde açılıyor. Bu ölçüdeki bir kanadı açıp yeniden toplamak kumaşı her seferinde biraz daha zorladığı için tek seferde yerine oturması gerekiyor. Sökme ve takma bizim işimiz ve ikisi için ayrıca ücret alınmıyor." }
  ],
}
