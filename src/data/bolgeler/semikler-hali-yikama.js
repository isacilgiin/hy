/**
 * Şemikler (Merkezefendi) — bölge sayfası metni.
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
    "Kışın yerinde koltuk yıkamada zor olan kısım koltuğun ıslanması değil, sonrasında pencerenin açık kalamaması. Yüksek basınçlı ünitenin vakumlama adımı kirli suyun neredeyse tamamını kumaştan geri çekiyor; geriye kalan az miktardaki nemin gitmesi içinse odanın birkaç saat hava alması gerekiyor. Yazın bu kendiliğinden oluyor, pencere açık kalıyor ve kimse fark etmiyor. Ocak ayında aynı salonda pencereyi öğleden sonra açık bırakmak mümkün değil, ev soğuyor. Bu yüzden buradaki randevularda konuştuğumuz şey günün hangi saati olduğu; işi mümkün olduğunca sabaha alıyoruz. Yıkanan koltuk yaş bırakılmıyor ama kumaşın dibindeki nem havayla gidiyor; kapalı odada aynı nem koku olarak geri dönüyor.",
    "Sabah yapılan bir yıkamada oda gün ışığının en sıcak saatlerinde havalanabiliyor; pencere kısa aralıklarla açılıp kapanıyor, ısıtma çalışırken bile hava değişmiş oluyor. Akşama doğru başlanan bir işte ise nem, kapalı bir odada gece boyunca kumaşın içinde kalıyor. Telefonda sorduğumuz iki şey bunun için: kaç parça yıkanacak ve salonun kaç penceresi var. Üç kişilik bir takımla köşe takımının işlem süresi aynı değil, tek pencereli bir salonla iki cepheli bir salonun havalanma süresi de aynı değil. Randevu saatini bu iki cevap belirliyor. İki cevap değişince randevu saati de değişiyor; bu yüzden gün konuşulmadan önce bu iki nokta netleşiyor."
  ],
  yerelBaglam: "Şemikler'deki daireler apartman dokusunun tipik örneği: salon tek cepheli, pencereler aynı duvarda ve karşılıklı hava akımı kurulamıyor. Bir odanın havası ancak kapısı da açık bırakılırsa gerçekten dönüyor, bu da kışın evin tamamının soğuması demek. Oturma grubu genellikle salonda tek parça hâlinde duruyor ve ev halkı gün içinde başka bir odaya çekilemiyor, yani koltuğun kurumasını beklerken oturulacak ikinci bir alan çoğu evde yok. Yerinde yapılan bir işte bunu da hesaba katmak zorundayız; oda havalanırken evin geri kalanında oturulabilecek başka bir yerin olması gerekiyor. Randevu saatini konuşurken evde kaç kişinin gün boyu kalacağını da bu yüzden soruyoruz.",
  note: "",
  sss: [
    { q: "Kış aylarında yerinde koltuk yıkama nasıl planlanıyor?", a: "Randevuyu günün erken saatine veriyoruz. Böylece işlem öğleye kalmadan bitiyor ve oda, dışarının en ılık olduğu saatlerde havalandırılabiliyor. Ev boşalacaksa da o saatler daha uygun oluyor. Aynı gün başka bir iş de istenirse, havalandırma gereken işi başa alıp diğerini sonraya bırakıyoruz. Böylece pencerenin uzun süre açık kalması gerekmiyor. Kışın planı belirleyen şey böylece saat oluyor." },
    { q: "Yıkamadan sonra oda ne kadar havalandırılmalı?", a: "Birkaç saat yeterli oluyor; süre kumaşın kalınlığına ve odanın hava alma imkânına göre değişiyor. Pencereyi sonuna kadar açıp saatlerce bırakmak gerekmiyor, kısa aralıklarla birkaç kez açmak da işi görüyor. Önemli olan havanın durmaması. Kapı açık bırakılıp evin diğer penceresi aralanırsa, tek cepheli bir salonda bile akım kurulmuş oluyor. Kapalı bırakılan oda en yavaş kuruyan oda." }
  ],
}
