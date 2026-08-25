/**
 * Buldan — bölge sayfası metni.
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
    "Buldan'da bir evden çıkan halıların hepsi aynı programa girmez. Aynı salondan bir makine halısı, bir el dokuma yün halı ve bir düz dokuma yolluk birlikte çıkabiliyor; bunlar aynı fırça sertliğini ve aynı suyu kaldırmıyor. Bu yüzden ayırmayı tesise bırakmıyor, halıları alırken adreste ayırıyoruz. Hangi parçanın el dokuma olduğunu ev sahibinden de teyit ediyoruz. Ayrılan parçalar araçta ayrı duruyor, tesiste ayrı programa yazılıyor ve makine halılarıyla aynı partiye girmiyor.",
    "El dokuma yün ve kilimde ilk iş yıkamak değil denemek. Doğal boyalı ipliklerde renk akması ihtimali olduğu için, yıkamada kullanacağımız şampuanla halının görünmeyen bir köşesinde küçük bir deneme yapıyoruz; renk veriyorsa hem su hem program değişiyor. Fırçayı halının cinsine göre ayarlıyoruz: 16 fırçalı makinede fırça sertliği sabit bir ayar değil, yün ve düz dokuma için yumuşatılıyor ve yıkama daha düşük ısıda yürüyor. Düşük ısı keyfî değil: sıcak su yün elyafta geri alınamayan bir büzülme ve keçeleşme yapıyor, halının eni boyu ilk ölçüsünde durmuyor."
  ],
  yerelBaglam: "Buldan dokumacılık geleneğiyle anılan bir ilçe ve bunun evlerin içinde de karşılığı var: el emeği dokuma tekstil burada duvara asılan bir şey değil, üstünde yaşanan bir yüzey. Buldan'dan gelen halı stoğunun ağırlığını da el dokuma yün halı, kilim ve düz dokuma yolluklar oluşturuyor. Bu parçalar makine halısından daha uzun sürüyor, çünkü hem denemesi hem kuruması ayrı yürüyor; teslim gününü verirken bunu hesaba katıyoruz. Halının yaşı, yöresi ya da değeri hakkında tahmin yürütmüyoruz; baktığımız tek şey dokusunun ne kaldırdığı. Onarım ve boyama yapmıyoruz, işimiz yıkama.",
  note: "",
  sss: [
    { q: "El dokuma yün halıda yıkama öncesi renk akması denemesi nasıl yapılıyor?", a: "Halının kenarında ya da altta kalan görünmeyen bir bölümünde, yıkamada kullanacağımız şampuanla ıslatılmış beyaz bir bezle küçük bir alan siliniyor. Bez renk aldıysa o halı normal programa girmiyor: suyun ısısı düşürülüyor, temas süresi kısaltılıyor, durulama ayrı yürütülüyor. Deneme her renk için ayrı yapılıyor, çünkü aynı halıda bir renk akarken diğeri hiç vermeyebiliyor. Denemeyi halı hatta girmeden önce, aynı gün yapıyoruz." },
    { q: "Fırça sertliği gerçekten halının cinsine göre mi ayarlanıyor?", a: "Ayarlanıyor; makinedeki 16 fırçanın sertliği sabit değil, halının cinsine göre kuruluyor. Makine halısında havın dibindeki kiri çıkarmak için daha sert bir temas gerekiyor. El dokuma yünde ve düz dokumada aynı sertlik havı yoluyor, ilmeği gevşetiyor ve kenar saçağını dağıtıyor; o yüzden yumuşatılıyor. Ayarı halıyı gördükten sonra veriyoruz, telefonda anlatılan tarife bakarak değil; aynı evden gelen iki halıya iki ayrı ayar çıkabiliyor." },
    { q: "Kilim ve düz dokuma neden makine halısından ayrı ele alınıyor?", a: "Kilimde hav yok, iplik doğrudan yüzeyde duruyor. Makine halısında havın üstlendiği koruma kilimde olmadığı için fırça ipliğe birebir değiyor ve sert temas dokuyu açıyor. İkinci sebep su: kilim suyu havlı halıdan farklı tutuyor, durulaması ve kuruma süresi başka çıkıyor. Bu iki nedenle kilimler makine halısı partisine karıştırılmıyor; ayrı programa ve ayrı sıraya yazılıyor, alım sırasında da ayrı işaretleniyor. İşaret hattın sonuna kadar parçanın üstünde kalıyor." }
  ],
}
