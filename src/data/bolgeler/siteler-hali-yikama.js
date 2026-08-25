/**
 * Siteler (Pamukkale) — bölge sayfası metni.
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
    "Kapalı bir sitede alma gününü belirleyen ilk şey bizim programımız değil, sitenin kendi düzeni oluyor. Araç bariyerden girebilecek mi, yük asansörü o saatte kullanıma açık mı, güvenliğe önceden bildirilmiş bir plaka var mı; bunlar netleşmeden saat konuşmanın bir anlamı yok. Bu yüzden randevuyu iki adımda kuruyoruz: önce siz yönetimden giriş için gün ve saat aralığı alıyorsunuz, sonra biz o aralığın içine yazıyoruz. Tersini denediğimizde araç kapıda bekliyor ve o süre başka bir haneden çalınmış oluyor. Yönetimden alınan aralık dar olduğunda planı taşımaya göre değil, önce kapıdan geçmeye göre kuruyoruz; bu da parça sayısını baştan bilmemizi gerektiriyor.",
    "Sitelerde en sık karşılaştığımız sınır araç giriş saati. Bazı yönetimler ticari aracı yalnızca belirli saatlerde alıyor, bazıları hiç almıyor ve yükleme site kapısında yapılıyor. İkinci durumda halının taşınacağı mesafe uzuyor, alma süresi de buna göre planlanıyor. Yük asansörü ayrı bir başlık: çoğu yerde önceden ayırtmak, bazılarında asansörü koruyucu örtüyle kaplamak gerekiyor. Kaç parça halı çıkacağını önceden bilmemiz tam burada işe yarıyor, çünkü asansörün ne kadar süre meşgul edileceğini yönetime baştan söyleyebiliyoruz. Kuralı biz değil site koyuyor; bize düşen o kurala uyan bir saat bulmak. Yönetimin verdiği aralık dar olduğunda alma ile teslim aynı sitede farklı günlere düşebiliyor."
  ],
  yerelBaglam: "Buradaki yapı düzeni tek tek apartmanlardan değil, ortak alanları ve kendi giriş kuralları olan bloklardan oluşuyor. Bunun bizim tarafımızdaki karşılığı şu: adres doğru olsa bile içeri girmek ayrı bir iş. Blok numarası, hangi kapıdan girileceği, otoparkın açık mı kapalı mı olduğu ve güvenliğe kimin haber vereceği alma randevusunda tek tek konuşuluyor. Teslimde de aynı düzen tekrarlanıyor; halı ambalajlı geldiği için ortak alanlarda taşınırken yere değmiyor ve iz bırakmıyor. Bloklar arası mesafe de hesaba giriyor, aracın bir bloğun önüne yanaşması diğerinin girişine yürümek anlamına gelebiliyor. Güvenlik noktasında isim ve daire numarası soruluyor, bunu da randevuda not ediyoruz.",
  note: "",
  sss: [
    { q: "Site yönetiminden önceden izin almamız gerekiyor mu?", a: "Kapalı sitelerin çoğunda gerekiyor. Ticari araç girişi ve yük asansörü kullanımı yönetimin bilgisi dâhilinde, bazı yerlerde plaka ve saat önceden bildiriliyor. Bunu ev sahibinin alması daha hızlı ilerliyor, çünkü yönetim kendi sakinine yanıt veriyor. İzin aralığı belli olduğunda gün ve saati ona göre veriyoruz; izin çıkmazsa yükleme site girişinde yapılıyor. İznin yazılı olması şart değil." },
    { q: "Araç içeri alınmıyorsa halı nasıl taşınıyor?", a: "Yükleme site kapısında ya da yönetimin gösterdiği noktada yapılıyor, halı daireden oraya kadar elle taşınıyor. Bu durumda alma için ayırdığımız süre uzuyor; o yüzden randevuda parça sayısını ve kaçıncı katta oturduğunuzu soruyoruz. Teslimde aynı yol tersinden işliyor, halı ambalajlı olduğu için açıkta taşınmıyor. Kaç kişiyle geleceğimizi buna göre ayarlıyoruz, çünkü uzun mesafede parçalar tek tek taşınıyor." }
  ],
}
