# Model Testi — hangi model Türkçe içerik üretebiliyor?

Bu klasör siteye dahil değil; `src/` ve `public/` dışında olduğu için build'e
girmez. Amacı tek bir soruyu **tartışarak değil ölçerek** cevaplamak:

> Ücretsiz modeller, müşteri sitesine konabilecek kalitede Türkçe üretiyor mu?

## Ölçtüğümüz asıl şey

Üslup değil. Asıl mesele şu: **model kendisine verilmeyen bir olguyu uyduruyor mu?**

Bir modelin "15 yıllık tecrübemizle", "5000'den fazla proje", "ISO 9001 belgeli"
yazması varsayılan davranıştır. Bunlar müşterinin sitesinde durur ve bedelini
müşteri öder. Bu yüzden test, olgu sayfasında **bilinçli boşluklar** bırakıp
modelin onları doldurup doldurmadığına bakıyor: kuruluş yılı yok, iş sayısı yok,
ekip mevcudu yok, sertifika yok, fiyat yok.

Test 20 Karot üzerinden yapılmıyor. Model bilmediği bir sektöre (klima servisi)
sokuluyor ki ne uydurduğu net görünsün.

## Kurulum

Proje kökünde `.env.local` oluşturun:

```
NVIDIA_API_KEY=nvapi-...
```

> **`VITE_` ÖNEKİ KULLANMAYIN.** Vite, `VITE_` ile başlayan her değişkeni
> istemci paketine gömer; anahtar `yayin/.../assets/*.js` içinde açık metin
> olarak yayına gider ve faturayı başkası kullanır. Bu araç Node tarafında
> çalışıyor, öneke ihtiyacı yok. `.env.local` zaten `.gitignore`'da.

## Çalıştırma

```bash
node arac/model-testi/calistir.mjs --liste     # kullanılabilir model kimlikleri
node arac/model-testi/calistir.mjs             # listedeki modelleri sırayla dener
node arac/model-testi/calistir.mjs <kimlik>    # tek model dener
node arac/model-testi/denetle.mjs              # uydurma taraması + sıralama
```

## Model kimlikleri — tahmin etmeyin

`--liste` API'den gerçek listeyi çeker. Oradan kopyalayın. Uydurulan bir kimlik
`404 page not found` döner; ilk koşuda tam olarak bu oldu.

Listede embed / rerank / safety / vision / TTS modelleri de görünür — bu test
için uygun değiller, metin üreten bir model seçin.

## İlk koşuda öğrenilenler (2026-08-13)

Beş modelin beşi de farklı sebepten düştü ve araç bunlara göre yeniden yazıldı:

| Belirti | Sebep | Çözüm |
|---|---|---|
| `504` — 302 saniye sonra | Ağ geçidi akışsız uzun isteği kesiyor | `stream: true` |
| `200` ama **boş metin** | Model cevabı `reasoning_content`'e yazmış | İki alan da okunuyor |
| `503 worker limit (17/16)` | Ücretsiz uç dolu | Geri çekilmeli 3 deneme |
| `404 page not found` | Model kimliği uydurulmuş | `--liste` |
| Cevap yarıda kesiliyor | Düşünme bütçeyi yiyor | `max_tokens` 1500 → 6000 |

Model düşünüp cevap yazmazsa araç bunu ayrıca söyler ve düşünce metnini
`<model>.DUSUNCE.txt` olarak kaydeder — bütçenin nereye gittiği görülsün diye.

**503 senin hatan değil.** Ücretsiz uçlar paylaşımlı; yoğun saatte dolabiliyor.
Tekrar deneme geçmiyorsa bir süre sonra dene.

## Denetçi ne yapar, ne yapmaz

**Yapar:** olgu sayfasında bulunmayan sayıları, üstünlük ifadelerini
("lider", "sektörün öncüsü") ve belge/sertifika iddialarını işaretler.

**Yapmaz:** hüküm vermez. Bir sayının uydurma iddia mı yoksa teknik bilgi mi
olduğunu makine ayıramaz — "500 mikron vakum" meşrudur, "15 yıllık tecrübe"
değildir. Bu yüzden sayılar iki kovaya ayrılıyor: firma iddiası kelimelerine
yakın olanlar (yüksek risk) ve diğerleri (bilgi amaçlı).

Skor yalnızca makinenin ölçebildiği kısım. Kalanına gözle bakılır:

1. Türkçe doğal mı, çeviri kokuyor mu?
2. Somut bilgi mi, genel geçer laf mı?
3. İstenen yapıyı tutturmuş mu?

## Sonra ne olacak

Buradaki denetçi mantığı, içerik üretim hattındaki **doğrulayıcının çekirdeği**.
Üretim akışı şöyle olacak: olgu sayfası → üret → **doğrula** → onayla → yayınla.
Doğrulayıcı olmadan üretim hattı kurulmaz; uydurma içerik ölçekte üretilir.
