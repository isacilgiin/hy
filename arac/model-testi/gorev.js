/**
 * MODEL TESTİ — görev tanımı.
 *
 * Amaç: birden fazla modele AYNI görevi verip Türkçe üretim kalitesini
 * karşılaştırmak. Ölçtüğümüz asıl şey üslup değil, ŞU: model kendisine
 * verilmeyen bir olguyu uyduruyor mu?
 *
 * Test 20 Karot üzerinden yapılmıyor. Sebebi kasıtlı: elimizde onun gerçek
 * metinleri var ve model o metinlere benzer bir şey üretirse "iyi yazmış"
 * sanabiliriz. Bilmediği bir sektör verince ne uydurduğu net görünüyor.
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
6. Türkçe yaz. Çeviri gibi durmasın; kısa ve net cümleler kur.
7. Reklam dili kullanma. Ne yapıldığını anlat, övme.`

export const kullaniciIstemi = `OLGULAR:
${JSON.stringify(olgular, null, 2)}

GÖREV:
Bu firmanın web sitesindeki "Split Klima Montajı" hizmet sayfası için bir bölüm yaz.

Bölümün kapsaması gerekenler:
- Montajın sahada nasıl yürüdüğü (yer seçimi, iç/dış ünite, bakır boru, tahliye, vakum)
- Yanlış montajın sonuçları
- Müşterinin montajdan önce hazırlaması gerekenler

Uzunluk: 350-450 kelime. Alt başlık kullanabilirsin.
Yalnızca bölüm metnini döndür; açıklama, giriş cümlesi veya not ekleme.`
