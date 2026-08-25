/**
 * Adalet (Merkezefendi) — bölge sayfası metni.
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
    "Temizlenmiş bir halı ikinci kez kirlenebilir ve bunun olduğu yer tesis değil, apartman girişiyle daire kapısı arasındaki yol. Adalet tarafındaki yerleşik binalarda merdiven boşluğu dar, sahanlıklar küçük ve duvarlar boyalı. Yıkanmış bir parça bu geçitten örtüsüz geçtiğinde korkuluğa, duvara ve kapı pervazına sürtünüyor; günlerce süren işin sonucu son otuz saniyede bozuluyor. Halının kendi ağırlığı da bu geçitte aleyhe çalışıyor, omuzda taşınan bir rulo dönerken bir yere yaslanmak zorunda kalıyor. Yerde bırakılıp soluklanacak temiz bir zemin de yok, bina girişi zaten dışarıdan gelen ayakların değdiği yer. Teslimattaki ambalaj burada süslü bir bitiş değil, tam olarak bu ikinci yolculuk için var.",
    "Sırayı tesiste kuruyoruz. Halı kapalı kurutma odasından çıkıp son kontrolü geçtikten sonra kapatılıyor; yani örtü kuru ve temiz hâlin üzerine geliyor, araca da öyle biniyor. Teslim ziyaretinde bu örtü ne araçta ne de bina girişinde açılıyor. Dar merdivende parçanın hangi taraftan döndürüleceği alma ziyaretinden beri belli olduğu için taşıma sırasında örtünün yırtılmaması da işin bir parçası; yırtılırsa üzerine yenisi geçiriliyor. Araçtan kapıya kadar geçen sürede halının hiçbir yüzeye değmemesi hedefleniyor. Aynı adrese birkaç parça birden gidiyorsa hepsi tek tek kapatılıyor, çünkü rulolar birbirine sürtününce de iz kalıyor. Kapıdan içeri giren halı, tesisten çıktığı hâlde giriyor."
  ],
  yerelBaglam: "Buradaki binaların çoğu asansörlü ama kabinler küçük ve merdiven bunun yedeği değil, sık kullanılan yolu. Alınan halılar standart daire ebatlarında; ağırlık değil hacim sorun oluyor. Taşınan rulo dar bir sahanlıkta dönerken duvara yaslanmak zorunda kalıyor ve zemine bırakılacak düz bir yer bulunmuyor. Bina yaşlandıkça korkuluk demirleri ve pervaz köşeleri pürüzlenmiş oluyor; temiz bir yüzeye takılan da genelde tam olarak bu köşeler. Alma ziyaretinde geçitleri zaten görmüş olduğumuz için teslimde yolu yeniden düşünmüyoruz. Aynı adrese ikinci kez gidildiğinde kazanılan süre çoğunlukla buradan geliyor.",
  note: "",
  sss: [
    { q: "Ambalaj kapıda mı açılıyor, evin içinde mi?", a: "Evin içinde. Halıyı kapalı hâlde odaya kadar getiriyoruz, serileceği yere koyduktan sonra açıyoruz. Kapıda açmak pratik görünüyor ama açılan halı eşikten ve koridordan çıplak geçmek zorunda kalıyor; dar bir girişte bunun anlamı ayakkabılığa ve duvara sürtünmek oluyor. Örtünün son ana kadar kapalı kalması bu yüzden önemli. Açtıktan sonra ambalajı da biz alıp götürüyoruz, evde iş bırakmıyoruz." },
    { q: "Ambalaj hangi aşamada takılıyor?", a: "Kurutma odasından çıkan halı önce kontrolden geçiyor, ambalaj ondan sonra geliyor. Yani ambalaj yıkamanın son adımı değil, teslimin ilk adımı: halı içine kuru giriyor ve araçta öyle bekliyor. Nemli bir parça kapatılmıyor, çünkü kapalı örtünün içinde kalan nem birkaç saatte koku yapıyor. Taşıma sırasında yırtılırsa yenisi geçiriliyor; ambalajın asıl işi rafta değil merdivende bitiyor." }
  ],
}
