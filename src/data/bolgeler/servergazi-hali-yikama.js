/**
 * Servergazi (Merkezefendi) — bölge sayfası metni.
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
    "Servergazi'den gelen aramalarda çoğu zaman ilk sorulan şey şu oluyor: yıkandıktan sonra halının üzerinde ne kalıyor? Evde alerjisi olan biri, küçük bir çocuk ya da yerde oynayan bir bebek varsa soru fazlasıyla haklı: halı, evin içinde en çok temas edilen yüzey ve yıkamadan sonra üzerinde ne bırakıldığı gerçekten önemli. Kullandığımız şampuanlar bitkisel içerikli, antialerjik ve antibakteriyel; halının üzerinde kimyasal kalıntı bırakmıyor. Bunu bir sağlık vaadi olarak değil, kullandığımız malzemenin ne olduğunun açık cevabı olarak söylüyoruz. Hangi ürünle çalıştığımızı soran herkese aynı şeyi anlatıyoruz. Yıkamadan sonra halının üzerinde kalan şey, bizim için de işin asıl ölçüsü oluyor.",
    "İşin ikinci yarısı durulamada. Şampuanın kendisi kadar, o şampuanın halıdan geri alınması da belirleyici; yıkamadan sonra halı bol suyla, kirli su berraklaşana kadar durulanıyor. Halının içinde kalan deterjan gözle görülmüyor ama etkisi belli oluyor: hav sertleşiyor, halı çabuk yeniden kirleniyor, çünkü kalan madde tozu üzerine çekiyor. Ayağın çıplak bastığı bir salonda bu fark birkaç hafta içinde hissediliyor. Durulamayı kısa kesmemenin sebebi bu. Kurutma da kapalı odada yapılıyor, yani halı kururken üzerine dışarıdan yeni bir toz binmiyor. Evde yıkanan bir halıda durulama en zor adım; suyu boşaltacak bir düzen olmadığı için şampuan çoğu zaman havın dibinde kalıyor."
  ],
  yerelBaglam: "Servergazi yerleşik bir apartman dokusu ve buradaki dairelerin çoğunda odaların tamamı halı kaplı. Bunun anlamı şu: evin en geniş yüzeyi halı ve evin içinde dolaşan toz da en çok orada birikiyor. Süpürge havın üstündeki tozu alıyor, dibe çökeni almıyor; zamanla halının içinde kimsenin görmediği bir katman oluşuyor. Kışın pencerelerin uzun süre kapalı kaldığı dairelerde bu birikim daha hızlı ilerliyor. Bu yüzden burada yıkama sıklığı, halının görünüşünden çok evde kimin yaşadığına göre konuşuluyor; çocuklu ve alerjili evlerde aralık daha kısa tutuluyor. Aynı binada iki daire aynı yaşta halıya sahip olsa bile ikisinin havında biriken şey aynı olmuyor.",
  note: "",
  sss: [
    { q: "Yıkamada hangi şampuan kullanılıyor?", a: "Bitkisel içerikli, antialerjik ve antibakteriyel şampuanlarla çalışıyoruz. Aynı şampuan da her halıya aynı oranda uygulanmıyor; halının cinsi ve kirlilik durumu miktarı değiştiriyor. Hangi ürünün kullanıldığını sormak isteyen olursa alma sırasında ekibe sorabilirsiniz, saklanan bir şey değil. Bunun ötesinde bir sağlık iddiasında bulunmuyoruz; anlattığımız şey yalnızca hangi ürünle çalıştığımız ve o ürünün halının üzerinde ne bıraktığı." },
    { q: "Halıda deterjan kalıntısı kalır mı?", a: "Amaç kalmaması ve süreç buna göre kurulmuş. Yıkamadan sonra halı bol suyla durulanıyor, ardından sıkma aşamasında suyun yüzde doksan beşi alınıyor; kalan madde de bu suyla birlikte çekilmiş oluyor. Kurutma kapalı odada tamamlanıyor. Halı geri geldiğinde havın yumuşak ve sabit olması, durulamanın yeterli yapıldığının en pratik göstergesi oluyor. Sertlik hissi kalırsa bunu bize söylemeniz yeterli." }
  ],
}
