/**
 * Akkonak (Merkezefendi) — bölge sayfası metni.
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
    "Yerinde koltuk yıkamada saati asıl yiyen şey koltuğun kendisi değil, etrafında açılması gereken boşluk. Akkonak'taki küçük salonlarda oturma grubu duvara dayalı durur; sırtlıkla duvar arasına el sığmaz, takımın arka yüzü ve ayak dipleri yıllardır kimsenin ulaşmadığı yerdir. İşe başlayabilmek için grubun odanın ortasına çekilmesi, kimi zaman sehpanın ve altındaki parçanın geçici olarak kaldırılması gerekiyor. Ekibin adrese vardığında yaptığı ilk iş bu. Randevu süresini tahmin ederken de koltuğun kaç kişilik olduğuna değil, bu çekme işinin ne kadar süreceğine bakıyoruz.",
    "Hazırlık boşa geçen bir süre değil, sonucu doğrudan belirliyor. Takımın her yüzüne dört yandan ulaşılabildiğinde vakumlama düzgün yapılabiliyor: yüksek emiş, kumaşa verilen suyu ve çözülen kiri geri çekiyor. Emiş başlığı yalnızca ön yüze ulaşabiliyorsa kenarlarda ve arkada nem kalıyor, o nem de kurumayı uzatıyor. Duvara dayalı bırakılmış bir takımda farkı ertesi gün elinizi arkaya attığınızda anlarsınız. Odanın ortası biz gelmeden hazırlanabilirse iş hem kısalıyor hem düzgün bitiyor; iş bittikten sonra takımı yerine biz geri itiyoruz, oda çekildiği hâlde bırakılmıyor."
  ],
  yerelBaglam: "Eski merkez dokusunda daireler bugünün planlarına göre küçük; salon aynı anda hem oturma hem yemek odası olarak kullanılıyor ve mobilya duvar boyunca diziliyor. Boş kalan tek yer odanın ortası, orası da sehpanın yeri. Bu düzende üçlü koltuk çoğu zaman tek başına bir duvarı kaplıyor, köşe takımlarında ise iki duvar birden dolu oluyor. Kapı ile pencere arasındaki geçiş hattı da genelde takımın önünden geçiyor. Buradan gelen taleplerde takımın kaç kişilik olduğu kadar salonun ne kadar dolu olduğunu soruyoruz; ikisi birlikte, işin tek bir randevuya sığıp sığmayacağını söylüyor.",
  note: "",
  sss: [
    { q: "Yerinde koltuk yıkama için odada ne kadar yer açılması gerekiyor?", a: "Takımın her parçasının etrafından dolaşılabilmesi yeterli: kabaca arkasında ve yanlarında bir adımlık boşluk. Köşe takımında bu genelde odanın ortasına doğru yarım metre kaymak demek. Duvar ünitesinin, gardırobun ya da vitrinin yerinde kalması sorun değil, odayı tamamen boşaltmak gerekmiyor. Kırılabilir eşyanın sehpa üstünden alınmış olması işi rahatlatıyor. Yer yetmiyorsa parçalar sırayla ortaya alınıp sırayla geri konuyor." },
    { q: "Mobilyayı bizim mi çekmemiz gerekiyor?", a: "Ağır parçaları ekip kendisi çekiyor, bunun için sizden bir şey istemiyoruz. Ricamız yalnızca kişisel eşya için: koltuk altındaki kutular, sehpa üstündekiler, kablo ve priz düzeni. Bunlar randevu saatinden önce toplanmışsa ekip odaya girer girmez çekmeye başlıyor. Toplanmamışsa aradaki fark yarım saati buluyor ve o yarım saat aynı gün başka bir adresi geciktiriyor. Parke ya da laminat zeminde altlık kullanıyoruz, iz kalmıyor." }
  ],
}
