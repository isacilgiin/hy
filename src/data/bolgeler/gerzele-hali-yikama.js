/**
 * Gerzele (Merkezefendi) — bölge sayfası metni.
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
    "Salonda görünen halı burada çoğu zaman tek başına serili değil. Altında bir kilim, kilimin altında da keçe ya da eski bir yolluk bulunuyor; üsttekiler yıllar içinde değişmiş, en alttaki hiç kaldırılmamış oluyor. Ev sahibi telefonda parça sayısını üstte göreni sayarak veriyor, kapıya vardığımızda sayı büyüyor. Bu yüzden alma sırasında halıyı kaldırıp altına bakıyoruz; bu bir denetim değil, sadece kaç parça yükleneceğini bilmek için yapılan bir bakış. Alttaki parçanın da alınıp alınmayacağı orada karara bağlanıyor. Çoğu zaman alınıyor, çünkü iki katman arasında yıllardır sıkışmış duran bir dokuma silkeleyip yerine bırakılacak durumda olmuyor. Alttaki parça zemine yapışmış gibi durduğu için çekilerek değil, kenarından tutulup yavaşça sıyrılarak kaldırılıyor.",
    "Üst üste duran katmanlarda toz yukarıdan aşağı iniyor ve orada kalıyor. Alttaki parça bunu ağırlık altında bastırılmış hâlde taşıdığı için tesiste ilk uğradığı yer toz çırpma makinesi oluyor: dokuma ıslanmadan önce mekanik olarak dövülüyor ve içindeki kuru partikül dışarı atılıyor. Bu adım atlanırsa su, tozun bir bölümünü yüzeye çıkarmak yerine liflerin arasına yediriyor. Keçe ve ince kilimde çırpma kısa tutuluyor, kalın yün halıda uzuyor. Katmanların hepsi aynı gün kayda giriyor ama aynı anda hatta girmiyor; her parça kendi cinsine göre sıraya yazılıyor, çünkü keçe ile kalın bir yün halı aynı programı paylaşmıyor. Kayıtta hepsi aynı adrese bağlı duruyor, böylece hangi parçanın nereden çıktığı karışmıyor."
  ],
  yerelBaglam: "Bahçeli ve müstakil evlerin ağırlıkta olduğu bir yer Gerzele; odalar boş zemin bırakmayacak biçimde döşenmiş. Bir odanın tamamı tekstille kaplı olduğunda kaç parça olduğu gözle sayılamıyor, ev sahibi bile alttakini yıllardır görmemiş oluyor. Bahçe kapısıyla araç arası kısa olduğu için çok parçalı bir yükleme burada apartman katından daha rahat çıkıyor; halı omuzda taşınacak mesafe birkaç adım. Alttaki parçanın ebadı da genelde bilinmiyor; üsttekiyle aynı sanılıyor ama kilim çoğu zaman daha büyük ya da daha küçük çıkıyor. Ölçüyü kapıda alıyoruz ve kayıt o ölçüyle açılıyor, çünkü yanlış ölçü teslim sırasında hangi parçanın nereye ait olduğunu karıştırıyor.",
  note: "",
  sss: [
    { q: "Halının altındaki kilim de alınabiliyor mu?", a: "Alınabiliyor. Üst halı kaldırıldığında altındaki dokuma zaten ortaya çıkıyor, aynı ziyarette araca yükleniyor ve kendi kaydıyla sıraya giriyor. Karar sizin; biz sadece durumunu gösteriyoruz. Alttaki parça uzun süre bastırılmış kaldığı için genelde katlanmış hâlde ve sert duruyor, açılınca içindeki toz görünür oluyor. Bunu kapıda birlikte görmek karar vermeyi kolaylaştırıyor, telefonda tarif etmek ise pek işe yaramıyor." },
    { q: "Alma sırasında kaç parça olduğu nasıl netleşiyor?", a: "Kapıda sayarak. Telefonda verilen sayıyı bir başlangıç olarak alıyoruz, kesin kayıt evde çıkıyor. Her katman kaldırılıp ayrı ayrı sayılıyor, ölçüsü ve cinsi yazılıyor, sonra araca yükleniyor. Sayının kapıda değişmesi bizim için sorun değil, düzenimiz zaten buna göre kurulu. Sorun, sayının teslim aşamasında değişmesi olur; o yüzden liste yükleme bitmeden yüksek sesle okunup birlikte onaylanıyor. Kapıda geçen bu bir dakika sonradan çıkacak karışıklığı baştan kesiyor." }
  ],
}
