/**
 * Hacıeyüplü (Merkezefendi) — bölge sayfası metni.
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
    "Yeni taşınılmış bir daireden gelen halıda ilk baktığımız şey ev kiri olmuyor. Taşınma ve tadilat arkasında ince bir yapı tozu bırakıyor; alçı, şap ve boya kalıntısı havın arasına oturuyor ve süpürgeyle yüzeyden alınmış gibi görünse de dokunun dibinde duruyor. Hacıeyüplü'den gelen taleplerde alma randevusunu bu yüzden çoğu zaman taşınmanın ertesi haftasına veriyoruz. Sebebi basit: eşya yerleşmeden, ustalar çıkmadan ve son süpürge çekilmeden alınan halı kısa sürede yeniden aynı hâle geliyor, iş iki kez yapılmış oluyor. Bir hafta beklemek burada gecikme değil, işi tek seferde bitirmek anlamına geliyor. Acelesi olan haneler için daha erken de alıyoruz; kararı biz vermiyoruz, sadece ne olacağını baştan söylüyoruz.",
    "Yapı tozu taşıyan bir halı hatta girmeden önce ayrıca gözden geçiriliyor. Ön yıkama ve leke kontrolü adımında boya sıçraması, silikon ya da yapıştırıcı izi gibi tadilattan kalan sert kalıntılar tek tek işaretleniyor; bunlar genel yıkamayla çıkmıyor, ayrı çalışılıyor ve hepsinin tamamen gideceği sözü verilmiyor. Durulama tarafında da fark var: mineral tozu bol suyla dokudan atılıyor, ardından rulo sıkmada suyun neredeyse tamamı çekiliyor. İçeride kalan su, çözünmüş tozu da beraberinde tuttuğu için sıkma burada yalnızca kurumayı hızlandıran bir adım değil; temizliğin kendisinin bir parçası. Kurutmadan önce halının kenarları ve arka yüzü bir kez daha kontrol ediliyor, çünkü ince toz en çok arka dokuda tutunuyor."
  ],
  yerelBaglam: "Yapılaşmanın hâlâ sürdüğü, taşınmaların yoğun olduğu bir bölge burası. Aynı blokta yeni yerleşmiş bir daire ile içinde hâlâ usta çalışan bir daire yan yana olabiliyor, asansör de gün boyu eşya ve malzeme taşımak için kullanılıyor. Alma saatini verirken asansörün o aralıkta boş olup olmadığını soruyoruz; dolu bir asansör, halının basamaktan indirilmesi demek ve bu tek başına süreyi ikiye katlıyor. Bina numaraları da her zaman yerinde durmuyor, yeni bloklarda tabela henüz asılmamış oluyor. Adres tarifinde bu yüzden çevredeki sabit bir noktayı esas alıyoruz ve şoför yola çıkmadan konumu bir kez daha teyit ediyor. İnşaat trafiği yüzünden sokakta araç bırakacak yer bulmak da her saat mümkün olmuyor.",
  note: "",
  sss: [
    { q: "Taşınma bittikten ne kadar sonra halı alınmalı?", a: "Eşya yerine oturduktan ve evde son bir genel temizlik yapıldıktan sonra. Pratikte bu, taşınmanın ertesi haftasına denk geliyor. Erken alınan halı temiz gelir ama eve döndüğünde hâlâ havada asılı duran ince toz üzerine iniyor ve kısa sürede aynı görüntü çıkıyor. Tadilat da bittiyse aynı hafta içinde alabiliyoruz. Kararı birlikte veriyoruz; evin hangi aşamada olduğunu telefonda anlatmanız yeterli." },
    { q: "Yeni alınmış bir halı da yıkanıyor mu?", a: "Yıkanıyor ve buradan gelen taleplerin bir kısmı tam olarak bu. Mağazadan ya da depodan çıkan halı saklama ve nakliye tozu taşıyabiliyor, ayrıca dokuma sırasında kalan kısa tüy ilk haftalarda dökülüyor. Yeni halıda program daha kısa tutuluyor, fırça sertliği düşük ayarlanıyor. Halının etiketi ya da menşei belliyse bunu bize söyleyin; kayda geçiriyoruz ve ilk yıkamayı ona göre planlıyoruz." }
  ],
}
