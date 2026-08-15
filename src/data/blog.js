/**
 * Blog yazılarının HAFİF dizini — liste sayfası ve iç link kartları bunu kullanır.
 *
 * Yazıların gövdesi (giriş, bölümler, SSS) blogContent.js'te. Ayrım bilinçli:
 * blog listesi sayfası, okunmayan 6 yazının tam metnini indirmesin.
 * (services.js / serviceContent.js ayrımının aynısı.)
 *
 * DÜZELTME (2026-08-13): Burada "BU DOSYA ÜRETİLİR, kaynak JSON'ları
 * güncelleyin" yazıyordu. Öyle bir kaynak yok ve hiç olmamış — git geçmişinde
 * ne bir üretici script ne silinmiş bir JSON var. Bu dosya ASIL KAYNAKTIR,
 * elle düzenlenir. Yorum olduğu gibi kalsaydı sonraki düzenleyen olmayan
 * dosyaları arardı.
 *
 * Sıralama slug'a göre alfabetik; yeni yazıyı doğru yere ekleyin.
 */

const blog = [
  {
    "slug": "beton-kesme-nasil-yapilir",
    "title": "Beton Kesme Nasıl Yapılır? Duvara Kapı Boşluğu Açma İşi Baştan Sona",
    "description": "Betonarme duvara kapı boşluğu açma işi baştan sona nasıl yürür? Ray sistemli duvar testeresi, taşıyıcı duvar kontrolü ve Denizli'de beton kesme süreci.",
    "ozet": "Betonarme bir duvara kapı ya da pencere boşluğu açma işinin sahadaki sırası: duvarın taşıyıcı olup olmadığının tespiti, tesisat kontrolü, ray sistemli kesim ve serbest kalan parçanın indirilmesi.",
    "okumaSuresi": 8,
    "ilgiliHizmetler": [
      "beton-kesme",
      "beton-kirma",
      "karot"
    ],
    "tarih": "2026-08-12",
    "kategori": "Rehber",
    "image": "/images/hizmetler/beton-kesme.webp"
  },
  {
    "slug": "beton-neyle-kesilir",
    "title": "Beton Neyle Kesilir? Kalınlığa Göre Doğru Makine Seçimi",
    "description": "Beton ne ile kesilir? Spiral, elmas disk, ray sistemli duvar testeresi, hidrolik sistem ve tel testere hangi kalınlıkta işe yarar, perde beton neyle kesilir?",
    "ozet": "Betonu kesen makine kalınlığa ve yere göre değişir. Spiralin nerede bittiğini, duvar testeresinin nereye kadar indiğini, hidroliğin ve tel testerenin ne zaman gerektiğini sahadan anlattık.",
    "okumaSuresi": 8,
    "ilgiliHizmetler": [
      "beton-kesme",
      "hidrolik-beton-kesme",
      "beton-kirma",
      "karot"
    ],
    "tarih": "2026-08-13",
    "kategori": "Rehber",
    "image": "/images/hizmetler/hidrolik-beton-kesme.webp"
  },
  {
    "slug": "denizli-karot-fiyatlari",
    "title": "Denizli'de Karot Fiyatları Neye Göre Belirlenir?",
    "description": "Denizli karot fiyatlarını belirleyen kalemler: çap, kalınlık, delik adedi, donatı, erişim, su, elektrik, moloz ve mesafe. Teklif alırken sorulacak sorular.",
    "ozet": "Karot işinde fiyatı çap, kalınlık, delik adedi, donatı, erişim ve saha koşulları birlikte belirliyor. Rakamın nasıl oluştuğunu ve teklif alırken neyi sormanız gerektiğini anlattık.",
    "okumaSuresi": 8,
    "ilgiliHizmetler": [
      "karot",
      "beton-delme"
    ],
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
    "ilgiliHizmetler": [
      "filiz-ekimi",
      "kimyasal-dubel",
      "ankraj",
      "beton-delme"
    ],
    "tarih": "2026-08-12",
    "kategori": "Rehber",
    "image": "/images/hizmetler/filiz-ekimi.webp"
  },
  {
    "slug": "karot-alinan-yere-ne-yapilir",
    "title": "Karot Alınan Yere Ne Yapılır? Delik Kapatma ve Tamir",
    "description": "Karot alınan yere ne yapılır? Numune deliğinin kapatılması, tamir harcı seçimi, su yalıtımı ve donatı kesilmişse ne yapılacağı sahadan anlatıldı.",
    "ozet": "Numune alındıktan sonra geriye silindirik bir boşluk kalır. O boşluğun nasıl kapatılacağı, hangi harcın kullanılacağı ve deliğin bina için ne anlama geldiği çoğu zaman hiç konuşulmuyor.",
    "okumaSuresi": 6,
    "ilgiliHizmetler": [
      "karot",
      "kimyasal-dubel",
      "beton-delme"
    ],
    "tarih": "2026-08-13",
    "kategori": "Rehber",
    "image": "/images/hizmetler/kimyasal-dubel.webp"
  },
  {
    "slug": "karot-firmasi-secerken",
    "title": "Denizli'de Karot Firması Seçerken Nelere Dikkat Etmeli?",
    "description": "Denizli karot firması ararken keşif, teklif kapsamı, iş güvenliği ve taşıyıcı eleman onayı gibi konularda nelere dikkat edeceğinizi anlatan kontrol listesi.",
    "ozet": "Karot ve beton kesme işi verirken hangi soruları sormak gerekir, hangi cevap tehlike işaretidir? Keşiften teklife, iş güvenliğinden moloza kadar kısa bir kontrol listesi.",
    "okumaSuresi": 9,
    "ilgiliHizmetler": [
      "karot",
      "beton-kesme",
      "beton-delme"
    ],
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
    "ilgiliHizmetler": [
      "karot",
      "beton-delme",
      "beton-kirma",
      "beton-kesme"
    ],
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
    "ilgiliHizmetler": [
      "karot",
      "beton-delme"
    ],
    "tarih": "2026-08-12",
    "kategori": "Rehber",
    "image": "/images/hizmetler/karot.webp"
  },
  {
    "slug": "karot-numunesi-nasil-alinir",
    "title": "Binadan Karot Numunesi Nasıl Alınır? Kim Alır, Kim Rapor Verir",
    "description": "Karot testi nasıl yapılıyor? Numune nereden ve kaç adet alınır, kim karar verir, kim uygular, raporu kim düzenler? Görev dağılımı ve süreç sahadan anlatıldı.",
    "ozet": "Karot numunesi almak tek bir işmiş gibi konuşuluyor ama üç ayrı taraf var: karar veren mühendis, numuneyi alan ekip, deneyi yapan laboratuvar. Hangisinin ne yaptığını ve sınırların nerede olduğunu anlattık.",
    "okumaSuresi": 7,
    "ilgiliHizmetler": [
      "karot",
      "beton-delme"
    ],
    "tarih": "2026-08-13",
    "kategori": "Rehber",
    "image": "/images/hizmetler/beton-delme.webp"
  }
]

export default blog
