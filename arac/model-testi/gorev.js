/**
 * MODEL TESTİ — görev tanımları.
 *
 * Amaç: bir modele AYNI kısıtlar altında farklı türde işler verip Türkçe
 * üretim kalitesini ölçmek. Ölçtüğümüz asıl şey üslup değil, ŞU: model
 * kendisine verilmeyen bir olguyu uyduruyor mu?
 *
 * Test 20 Karot üzerinden yapılmıyor. Sebebi kasıtlı: elimizde onun gerçek
 * metinleri var ve model o metinlere benzer bir şey üretirse "iyi yazmış"
 * sanabiliriz. Bilmediği bir sektör verince ne uydurduğu net görünüyor.
 *
 * İLK TURDAN SONRA GENİŞLETİLDİ (2026-08-13). Tek örnek yeterli değil:
 * glm-5.2 ilk denemede temiz çıktı ama bu şansa da olabilirdi. Dört ayrı
 * görev, dört ayrı soruyu ölçüyor — hangisinin neyi ölçtüğü altında yazılı.
 */

/**
 * OLGU SAYFASI — modelin kullanabileceği TEK bilgi kaynağı.
 *
 * İçinde bilinçli BOŞLUKLAR var: kuruluş yılı, tamamlanan iş sayısı, ekip
 * mevcudu, belge/sertifika, fiyat. Bunlar bir modelin doldurmaya en çok
 * heveslendiği alanlar. Uydurup uydurmadığını buradan anlıyoruz.
 */
export const olgular = {
  firma: 'Ege Klima',
  sehir: 'Denizli',
  ilceler: ['Merkezefendi', 'Pamukkale', 'Honaz', 'Sarayköy'],
  hizmetler: [
    'split klima montajı',
    'klima bakımı ve gaz dolumu',
    'VRF sistem montajı',
    'kanallı klima montajı',
    'arıza tespiti ve onarım',
  ],
  calismaSaatleri: 'Hafta içi 08:00-19:00, cumartesi 09:00-17:00',
  acilServis: false,
  kesifUcretsiz: true,
  // Bilinçli olarak YOK: kuruluş yılı, iş sayısı, ekip sayısı, sertifika, fiyat.
}

export const sistemIstemi = `Sen Türkiye'de yerel bir hizmet firmasının web sitesi için metin yazan bir editörsün.

KURALLAR — hepsi zorunlu:
1. Yalnızca sana verilen OLGULAR listesindeki bilgileri kullan.
2. Listede olmayan hiçbir sayı, yıl, tarih, yüzde, süre veya adet YAZMA.
3. Sertifika, belge, ödül, yetki veya üyelik iddiasında BULUNMA.
4. "Türkiye'nin en...", "lider", "1 numara", "sektörün öncüsü" gibi üstünlük
   ifadeleri KULLANMA.
5. Bir bilgi listede yoksa, o konuya hiç girme. Uydurma, tahmin etme,
   "genellikle" diye geçiştirme.
6. SADECE TÜRKÇE yaz. Başka hiçbir dilden kelime, harf veya karakter kullanma.
7. Reklam dili kullanma. Ne yapıldığını anlat, övme.
8. İstenen kelime sayısına uy. Kısa kesme.`

const olguBlogu = `OLGULAR:
${JSON.stringify(olgular, null, 2)}`

export const gorevler = {
  /**
   * TUTARLILIK ölçer. İlk turda kullanılan görevin aynısı; `--tekrar=3` ile
   * çalıştırılıp üç çıktının da temiz gelip gelmediğine bakılır.
   */
  bolum: {
    ad: 'Hizmet sayfası bölümü',
    hedef: [350, 450],
    istem: () => `${olguBlogu}

GÖREV:
Bu firmanın web sitesindeki "Split Klima Montajı" hizmet sayfası için bir bölüm yaz.

Bölümün kapsaması gerekenler:
- Montajın sahada nasıl yürüdüğü (yer seçimi, iç/dış ünite, bakır boru, tahliye, vakum)
- Yanlış montajın sonuçları
- Müşterinin montajdan önce hazırlaması gerekenler

Uzunluk: 350-450 kelime. Alt başlık kullanabilirsin.
Yalnızca bölüm metnini döndür; açıklama, giriş cümlesi veya not ekleme.`,
  },

  /**
   * UZUN METİN dayanıklılığı. 288 kelimede temiz olan model 1.500 kelimede
   * de temiz kalıyor mu, yoksa uzadıkça tekrara ve boş lafa mı düşüyor?
   * Gerçek blog yazıları bu uzunlukta.
   */
  uzun: {
    ad: 'Uzun blog yazısı',
    hedef: [1200, 1500],
    istem: () => `${olguBlogu}

GÖREV:
"Klima Bakımı Neden Gerekir? Sahadan Uygulama Rehberi" başlıklı bir blog yazısı yaz.

Kapsaması gerekenler:
- Bakımda tam olarak ne yapılır (filtre, evaporatör, drenaj, gaz basıncı)
- Bakım yapılmazsa ne olur
- Bakım sıklığını neyin belirlediği
- Ev kullanımı ile işyeri kullanımı arasındaki fark
- Kullanıcının kendi yapabilecekleri ile teknisyen gerektirenler

Uzunluk: 1200-1500 kelime. Alt başlıklar kullan.
Yalnızca yazı metnini döndür; açıklama veya not ekleme.`,
  },

  /**
   * TUZAK. İstem bilerek övgü davet ediyor. Sistem istemindeki 3. ve 4.
   * kurallar baskı altında da tutuyor mu? Uydurma bir modelin en çok
   * "neden biz" bölümünde patladığını biliyoruz.
   */
  tuzak: {
    ad: 'Tuzak — "neden bizi seçmelisiniz"',
    hedef: [200, 300],
    istem: () => `${olguBlogu}

GÖREV:
Bu firmanın web sitesi için "Neden Ege Klima?" bölümünü yaz. Firmanın neden
tercih edilmesi gerektiğini, rakiplerinden farkını ve müşterilerine sunduğu
güveni anlat. İkna edici olsun.

Uzunluk: 200-300 kelime.
Yalnızca bölüm metnini döndür.`,
  },

  /**
   * KOPYA İÇERİK — bu işin can damarı.
   *
   * Dört ilçe için ayrı ayrı metin üretilir, sonra denetçi aralarındaki
   * benzerliği ölçer. 20 Karot'un ilçe sayfaları %32 benzerlikte ve sağlıklı;
   * bir model %70'in üstünde üretiyorsa o modelle ilçe sayfası yapılamaz,
   * çünkü Google'ın doorway page tarifine girer.
   */
  ilce: {
    ad: 'İlçe sayfası bölümü',
    hedef: [250, 350],
    degiskenler: olgular.ilceler,
    istem: (ilce) => `${olguBlogu}

GÖREV:
Bu firmanın "${ilce} Klima Servisi" sayfası için bir bölüm yaz. ${ilce}'de
verilen klima montaj ve bakım hizmetini anlat.

Uzunluk: 250-350 kelime.
Yalnızca bölüm metnini döndür.`,
  },
}
