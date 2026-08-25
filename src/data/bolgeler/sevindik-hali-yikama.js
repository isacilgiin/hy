/**
 * Sevindik (Merkezefendi) — bölge sayfası metni.
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
    "Perde indirildiği anda oda dışarıya açılıyor. Alçak katlı blokların sokakla neredeyse aynı hizada durduğu bu adreslerde pencere, kaldırımdan geçen birinin göz seviyesine yakın; kumaş inince salon doğrudan sokağın içine giriyor. Bu yüzden burada bir evin bütün perdelerini aynı gün toplamıyoruz. Söküm planını hangi odanın sokağa baktığına göre kuruyoruz: önce sokağa bakmayan odalar, sonra sıra sokak cephesine geliyor. Kumaşın indiği anda kaç kişinin o pencereden içeriyi gördüğü, sökme sırasını da doğrudan belirliyor. Ev sahibiyle konuştuğumuz ilk şey de bu oluyor. Burada işin zor tarafı sökümün sırası oluyor; perdenin arkasında bıraktığı boşluk, yıkamanın kendisinden daha çok konuşuluyor.",
    "Uygulaması basit ama planlaması dikkat istiyor. Sokağa bakan pencerede tül ile stor birlikte kullanılıyorsa iki katmanı aynı anda indirmiyoruz; biri yerinde kalırken diğeri yıkanıyor, sonra yer değiştiriyorlar. İki katmanın birlikte yıkanması zaten gerekmiyor, çünkü tül ile stor aynı hızda kirlenmiyor. Tek katman varsa o oda, komşu odanın perdesi takılana kadar bekliyor. Bunun anlamı, bir evin perdesinin tek bir listede değil iki üç ayrı grupta ilerlemesi. Grupları biz belirlemiyoruz; hangi odanın kaç gün çıplak kalabileceğini ev sahibi söylüyor ve söküm sırası ona göre yazılıyor. Böylece salon hiçbir aşamada tamamen açıkta kalmıyor. Hazır olan grup takılırken kalan grup sökülüyor."
  ],
  yerelBaglam: "Sevindik'teki yapı düzeni yüksek bloklardan değil, alçak katlı ve sokağa yakın binalardan oluşuyor. Zemin ve birinci kat dairelerinde pencere eşiği kaldırımla neredeyse aynı yükseklikte; bahçe duvarı ya da yükselti olmadığı için perde, evin tek görsel sınırı hâline geliyor. Aynı sokakta üst katta oturan bir aile için perdenin bir hafta yokluğu sorun değilken, alt kattaki daire için doğrudan mahremiyet meselesi. Bu ayrım aynı binada bile değişiyor, o yüzden adresi alırken kaçıncı katta olduğunuzu ve pencerenin sokağa mı yoksa arka cepheye mi baktığını soruyoruz. Aynı sokaktaki iki komşu adres için iki ayrı söküm planı çıkması burada olağan.",
  note: "",
  sss: [
    { q: "Bütün perdeler aynı gün mü sökülüyor?", a: "Hayır, burada çoğu adreste oda oda ilerliyoruz. Aynı anda inen perde sayısını evin sokağa bakan pencereleri belirliyor; bir grup takıldıktan sonra ikinci grup sökülüyor. Bütün perdenin tek seferde alınmasını isteyen haneler de oluyor, bu da mümkün. Karar sizin, biz yalnızca iki yöntemin ne anlama geldiğini baştan anlatıyoruz. Perde katlanmadan yıkandığı için geri geldiğinde takılmayı beklemiyor." },
    { q: "Perde yokken pencere için ne yapılabilir?", a: "En pratik çözüm katmanı bölmek: tül ile stor bir arada kullanılıyorsa biri pencerede kalıyor. Tek katman varsa o odayı en son gruba bırakıp önce arka cepheyi hallediyoruz. Kısa süreli bir önlem gerekiyorsa geçici bir örtü çoğu evde iş görüyor. Hangi odanın ne kadar süre boş kalacağını randevuda birlikte konuşuyoruz. Bu konuşmayı söküm başlamadan önce tamamlıyoruz." }
  ],
}
