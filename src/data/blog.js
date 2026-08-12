/**
 * Blog yazılarının HAFİF dizini — liste sayfası ve iç link kartları bunu kullanır.
 *
 * Yazıların gövdesi (giriş, bölümler, SSS) blogContent.js'te. Ayrım bilinçli:
 * blog listesi sayfası, okunmayan 6 yazının tam metnini indirmesin.
 * (services.js / serviceContent.js ayrımının aynısı.)
 *
 * BU DOSYA ÜRETİLİR — elle düzenlemek yerine kaynak JSON'ları güncelleyin.
 */

const blog = [
  {
    "slug": "beton-kesme-nasil-yapilir",
    "title": "Beton Kesme Nasıl Yapılır? Duvara Kapı Boşluğu Açma İşi Baştan Sona",
    "description": "Betonarme duvara kapı boşluğu açma işi baştan sona nasıl yürür? Ray sistemli duvar testeresi, taşıyıcı duvar kontrolü ve Denizli'de beton kesme süreci.",
    "ozet": "Betonarme bir duvara kapı ya da pencere boşluğu açma işinin sahadaki sırası: duvarın taşıyıcı olup olmadığının tespiti, tesisat kontrolü, ray sistemli kesim ve serbest kalan parçanın indirilmesi.",
    "okumaSuresi": 8,
    "tarih": "2026-08-12",
    "kategori": "Rehber",
    "image": "/images/hizmetler/beton-kesme.webp"
  },
  {
    "slug": "denizli-karot-fiyatlari",
    "title": "Denizli'de Karot Fiyatları Neye Göre Belirlenir?",
    "description": "Denizli karot fiyatlarını belirleyen kalemler: çap, kalınlık, delik adedi, donatı, erişim, su, elektrik, moloz ve mesafe. Teklif alırken sorulacak sorular.",
    "ozet": "Karot işinde fiyatı çap, kalınlık, delik adedi, donatı, erişim ve saha koşulları birlikte belirliyor. Rakamın nasıl oluştuğunu ve teklif alırken neyi sormanız gerektiğini anlattık.",
    "okumaSuresi": 8,
    "tarih": "2026-08-12",
    "kategori": "Fiyatlandırma",
    "image": "/images/hizmetler/beton-delme.webp"
  },
  {
    "slug": "filiz-ekimi-nedir",
    "title": "Filiz Ekimi Nedir, Nasıl Yapılır? Sahadan Uygulama Rehberi",
    "description": "Filiz ekimi nedir, nasıl yapılır? Delik çapı ve derinliği, delik temizliği, reçine enjeksiyonu, kürlenme süresi ve kimyasal dübel farkı sahadan anlatıldı.",
    "ozet": "Mevcut betonarmeye sonradan donatı bağlamanın doğru yolu filiz ekimi. Delik açmadan kürlenmeye kadar bütün adımları, en kritik nokta olan delik temizliğine ağırlık vererek anlattık.",
    "okumaSuresi": 7,
    "tarih": "2026-08-12",
    "kategori": "Rehber",
    "image": "/images/hizmetler/filiz-ekimi.webp"
  },
  {
    "slug": "karot-firmasi-secerken",
    "title": "Karot Firması Seçerken Nelere Dikkat Etmeli? Sahadan Bir Kontrol Listesi",
    "description": "Denizli karot firması ararken keşif, teklif kapsamı, iş güvenliği ve taşıyıcı eleman onayı gibi konularda nelere dikkat edeceğinizi anlatan kontrol listesi.",
    "ozet": "Karot ve beton kesme işi verirken hangi soruları sormak gerekir, hangi cevap tehlike işaretidir? Keşiften teklife, iş güvenliğinden moloza kadar kısa bir kontrol listesi.",
    "okumaSuresi": 9,
    "tarih": "2026-08-12",
    "kategori": "Rehber",
    "image": "/images/hizmetler/hidrolik-beton-kesme.webp"
  },
  {
    "slug": "karot-mu-kirici-mi",
    "title": "Karot mu Kırıcı mı? Betonda Doğru Yöntemi Nasıl Seçersiniz",
    "description": "Bir işi karotla mı kırıcıyla mı yapmalı? Geometri, darbe, toz, gürültü, donatı ve tamir masrafı üzerinden dürüst bir karşılaştırma ve saha karar rehberi.",
    "ozet": "Karot mu kırıcı mı sorusunun tek bir cevabı yok. Geometri, darbe, toz, donatı, süre ve sonradan çıkan tamir masrafı üzerinden hangi işte hangisinin doğru olduğunu anlattık.",
    "okumaSuresi": 8,
    "tarih": "2026-08-12",
    "kategori": "Karşılaştırma",
    "image": "/images/hizmetler/beton-kirma.webp"
  },
  {
    "slug": "karot-nedir",
    "title": "Karot Nedir? Delme Yöntemi, Karot Makinesi ve Beton Numunesi",
    "description": "Karot nedir, karotçu ne yapar? Elmas uçlu karot makinesi betonu keserek deler. Çap, derinlik, su soğutması ve beton numunesi alma sahadan anlatılıyor.",
    "ozet": "Karot hem bir delme yönteminin hem de betondan alınan silindir numunenin adı. İkisinin farkını, makinenin nasıl çalıştığını, çap ve derinlik sınırlarını sahadan anlatıyoruz.",
    "okumaSuresi": 8,
    "tarih": "2026-08-12",
    "kategori": "Rehber",
    "image": "/images/hizmetler/karot.webp"
  }
]

export default blog
