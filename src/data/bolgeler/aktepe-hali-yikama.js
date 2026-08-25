/**
 * Aktepe (Pamukkale) — bölge sayfası metni.
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
    "Bir adresten tek bir halı alıyoruz ama o halı aracın yarısını dolduruyor. Buradaki dairelerde uzun tüylü halı salonun tamamını kaplıyor; tek parça, geniş ebat ve sarıldığında kalın bir rulo hâline geliyor. Kısa havlı bir halı sarıldığında ince kalır, üst üste birkaç tanesi aynı yere sığar; uzun tüyde ise hav kendi hacmini de beraberinde getiriyor ve rulonun çapı buna bağlı olarak iki katına yakın büyüyor. Bu yüzden araç planını burada parça sayısı değil, halının hacmi belirliyor. Randevuda kaç halı olduğunu değil, halının kabaca kaç metreye kaç metre olduğunu soruyoruz; günün geri kalanı bu ölçüye göre planlanıyor.",
    "Uzun tüylü halı araca sarılarak yükleniyor, katlanarak değil; katın denk geldiği yerde hav kalıcı olarak yatıyor ve o iz sonradan kendiliğinden açılmıyor. Rulonun üstüne başka bir parça da bindirilmiyor. Yükleme sırasında halının tüy yönü de içeride kalacak şekilde özenle sarılıyor. Aynı hacim meselesi yıkamadan sonra da sürüyor: sudan çıkan geniş bir halı olduğu gibi taşınamıyor. Rulo sıkma makinesinde suyun yüzde doksan beşi alınıyor ve halı kurutma odasına bu yükten kurtulmuş hâlde giriyor. Tek parça olduğu için kuruması da bölünemiyor; halı bir bütün hâlinde kuruyor, teslim günü de en son kuruyan bu tek parçaya göre veriliyor."
  ],
  yerelBaglam: "Aktepe apartman dokusunda bir yer ve dairelerin salonu çoğunlukla tek halıyla kapatılmış durumda. Oda halısı ve koridor yolluğu az; bir adresten genellikle bir, en fazla iki parça çıkıyor. Sayı az olduğu için iş listede kısa görünüyor, taşımada ise öyle olmuyor: geniş bir rulo asansöre ancak dik giriyor, merdiven boşluğunda ise dönüş noktalarında yer istiyor. Bu yüzden randevuda kat ve asansör bilgisini alıyoruz. Aynı gün başka adresler de varsa halının aracın neresine yerleşeceği önceden planlanıyor; sonradan araya sıkıştırmak uzun tüyde iz bırakıyor ve bu iz kolay geçmiyor. Teslimde aynı yol tersinden yürünüyor, halı yine sarılı geliyor.",
  note: "",
  sss: [
    { q: "Tek bir halı için de araç geliyor mu?", a: "Geliyor. Alma ve teslim parça sayısına değil adrese bağlı. Uzun tüylü tek bir salon halısı zaten çoğu adresten çıkan üç dört parçanın yerini kaplıyor, dolayısıyla araç tarafında tek halı diye bir eksiklik oluşmuyor. Randevuda sorduğumuz şey adet değil ebat; ölçüyü kabaca bilirsek aynı araca o gün kaç adres daha alabileceğimizi ve saat aralığını baştan hesaplayabiliyoruz." },
    { q: "Aynı gün başka adres varsa halı araçta bekliyor mu?", a: "Bekliyor, ama sıkıştırılmadan bekliyor. Uzun tüylü halı sarılı hâlde ve üstüne yük binmeden duruyor; sonradan alınan parçalar onun üstüne değil yanına yerleşiyor. Aynı güne kaç adres alacağımızı da bu yüzden halının ebadına bakarak belirliyoruz. Araçta geçen sürenin kendisi halıya bir şey yapmıyor, üstüne yük bindirilmesi yapıyor; sarılı hâlde ve serbest duran bir halı için bekleme sorun olmuyor." }
  ],
}
