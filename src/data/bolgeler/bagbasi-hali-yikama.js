/**
 * Bağbaşı (Pamukkale) — bölge sayfası metni.
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
    "Bir apartmanda halı yıkatmak nadiren tek daireyle sınırlı kalıyor; bir komşu halısını çıkarınca aynı hafta içinde alt kat da, üst kat da aynı işi düşünmeye başlıyor. Bunu bildiğimiz için Bağbaşı'nda sırayı kapı numarasına değil binanın kendisine yazıyoruz. Sebebi basit: bir blokta merdiven boşluğu ve asansör tektir, iki hane aynı anda halı indiremez. İkisini aynı saate yazarsak biri diğerini beklemek zorunda kalıyor ve ikisi birden gecikiyor. Bu yüzden aynı bloktan gelen talepleri tek dilime topluyoruz; halılar sırayla iniyor, araç binanın önünde bir kez duruyor. Herkesin ayrı gün istemesi ise aynı kapıya defalarca uğramak anlamına geliyor.",
    "Araca yüklendikten sonra binadan gelen halılar birlikte yola çıksa da tesiste birlikte ilerlemiyor. Her parça önce toz çırpma makinesinden geçiyor, sonra cinsine ve ebadına göre kendi sırasına giriyor. Bir hanenin küçük oda halısıyla diğerinin büyük salon halısı aynı günde hazır olmuyor, dolayısıyla toplu alınan halılar toplu dönmeyebiliyor. Teslimde ise aynı darboğaz yeniden karşımıza çıkıyor, çünkü halının yukarı çıkması inmesinden uzun sürüyor. Hazır olan parçalar için haber veriyoruz; aynı bloktan iki hane aynı güne denk gelirse teslimi de tek gelişte yapıyoruz. Böylece asansör gün içinde bir kez meşgul oluyor."
  ],
  yerelBaglam: "Bağbaşı'ndaki doku çok daireli bloklardan oluşuyor: geniş girişler, ortak merdiven boşluğu ve çoğu binada tek asansör. Halı yıkatma isteği de bu dokuya uygun şekilde komşudan komşuya geçiyor, bir binada birkaç hane aynı haftaya denk geliyor. Böyle olunca planlamayı daire ölçeğinde değil bina ölçeğinde yapmak gerekiyor. Randevu alırken bloktan başka çıkacak halı olup olmadığını soruyoruz; varsa hepsini aynı dilime yazıp tek gelişte topluyoruz. Talebin bir haftaya toplanması bizim açımızdan sorun değil, aksine planlamayı kolaylaştırıyor. Asıl zorlayan şey, aynı bloktan üç ayrı güne üç ayrı randevu çıkması ve aracın aynı girişe defalarca dönmesi oluyor.",
  note: "",
  sss: [
    { q: "Aynı apartmandan birkaç hane aynı gün halı çıkarabilir mi?", a: "Çıkarabilir, hatta tercihimiz bu yönde. Yalnız aynı saate değil, arka arkaya dilimlere yazıyoruz; merdiven ve asansör aynı anda iki haneye hizmet edemiyor. Alt kattan başlayıp yukarı doğru çıkıyoruz, böylece inen halı yukarıdan gelenle karşılaşmıyor. Blokta kaç hane olduğunu önceden bilirsek o güne ayrılan süreyi buna göre uzatıyoruz. Asansör o gün arızalıysa bunu da baştan söyleyin." },
    { q: "Komşularımızla ortak randevu nasıl alınıyor?", a: "Tek kişinin araması yeterli. O görüşmede bina adresini, kaç hane olduğunu ve her birinden kabaca kaç parça çıkacağını konuşuyoruz. Kayıt yine hane hane tutuluyor, ödeme de ayrı ayrı alınıyor; ortaklaşan tek şey gün ve aracın gelişi. Bir hane vazgeçerse diğerlerinin randevusu etkilenmiyor. Teslim de aynı mantıkla ilerliyor, hazır olan halılar aynı binaya birlikte götürülüyor." }
  ],
}
