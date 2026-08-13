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
node arac/model-testi/teshis.mjs <kimlik>      # 400 alıyorsanız: hangi alan reddediliyor
```

Google için `--saglayici=google` ekleyin; anahtar `GOOGLE_API_KEY` olur.

## Kota — ölçülen gerçek rakamlar (2026-08-13)

Google AI Studio panelinden okundu. **Kota model başına işliyor** ve aradaki
fark on kata kadar çıkıyor; model seçimi bir kalite kararı olduğu kadar bir
kota kararı:

| Model | RPM | RPD (günlük) | Üretim için |
|---|---|---|---|
| Gemini 3.6 / 3.5 / 3 / 2.5 Flash | 5 | **20** | kullanılamaz |
| Gemini 2.5 Flash Lite | 10 | 20 | kullanılamaz |
| **Gemini 3.5 / 3.1 Flash Lite** | 15 | **500** | 1.200 sayfa ≈ 3 gün |
| **Gemma 4 26B / 31B** | 30 | **14.400** | tek günde biter (TPM 16K sınırlar) |
| Gemini 3.1 Pro, 2.5 Pro | 0 | 0 | ücretsiz katmanda yok |

Dolaşımdaki "günlük 1.500 ücretsiz istek" bilgisi metin üretimi için **yanlış**.
Panelde 1.5K yazan tek satır *search grounding*; üretim modelleri yukarıdaki
gibi. Flash'lar günde 20 istekle sınırlı — dört görevlik test bile (9 istek)
iki koşuda kotayı bitiriyor.

Gemma'nın TPM'i (dakikada 16K token) diğerlerinin 1/15'i. Günlük sayı bol ama
dakikalık akış dar: 1.500 kelimelik yazı ~3-4K token, yani dakikada ~4 yazı.

NIM'in ücretsiz kotası ~7-8 istekte doluyor; ölçüldü, üretim için yetmiyor.

Koşular arası bekleme `--aralik=<saniye>` ile ayarlanır (Google'da varsayılan
5 sn). 429 gelirse sağlayıcının gövdede söylediği süre kadar beklenir; günlük
kota bittiyse (`quotaValue: 0`) beklemeden geçilir — pencere o gün açılmayacak.

## Hangi model neyi kabul ediyor (2026-08-13, `teshis.mjs` ile ölçüldü)

| Model | `reasoning_effort` | Sonuç |
|---|---|---|
| `gemini-3.1-flash-lite` | `none` ✓ `low` ✓ | tam gövde kabul, düşünme kapatılabiliyor |
| `gemini-3.1-flash-lite-preview` | `none` ✓ `low` ✓ | aynı |
| `gemini-3.5-flash-lite` | `none` ✗ `low` ✓ | düşünme kapatılamıyor, kısılabiliyor |
| `gemini-flash-lite-latest` | `none` ✗ `low` ✓ | **3.5'in takma adı** — kotası da oraya yazılıyor |
| `gemma-4-26b-a4b-it` / `gemma-4-31b-it` | hiçbiri | **model düşünmüyor** — aşağıya bakın |
| `gemini-2.5-flash-lite` | — | 404, yeni kullanıcılara kapalı |
| `gemini-3.1-flash-lite-image` | — | görsel modeli, metin için değil |

`--liste` çıktısında görünen her model kullanılabilir değil: bazıları kapatılmış,
bazıları `generateContent` desteklemiyor. Kimliği listeden alın ama önce
`teshis.mjs` ile yoklayın.

Takma adlar ayrı model değil: `gemini-flash-lite-latest` sorguları panelde
`Gemini 3.5 Flash Lite` hanesine yazıldı. "Başka model deneyeyim" diye takma
ada geçmek kotayı ikiye katlamaz, aynı kovadan harcar.

**"Thinking budget is not supported for this model" bir arıza değil.** Gemma
düşünmeyen bir model; düşünme bütçesi olmayan model metni yarıda da kesemez.
Yani bizim `reasoning_effort` uğraşımızın sebebi onda baştan yok. Araç bunu
tanıyor: düşünme alanlarını bir kez deneyip atlıyor ve o modelin çıktılarına
sahte "kırpılma riski" uyarısı basmıyor (`KOSUL.json` içinde
`dusunmeDesteklenmiyor: true` olarak görünür).

## `400 INVALID_ARGUMENT` alıyorsanız

Sağlayıcı isteği reddetti ama hangi alanı beğenmediğini söylemiyor. İki
mekanizma var:

**Gövde merdiveni (kendiliğinden).** `ortak.mjs` içinde her sağlayıcı için
sıralı gövde listesi var; 400 gelince çalıştırıcı sıradakine geçer. Sıralama
"200 dönen ilk gövde" değil **"düşünmeyi bastırmayı koruyan ilk gövde"**
ölçütüne göre — çünkü düşünme bütçeyi yerse çıktı kırpılır ve sayı geçersiz
olur. Denetimsiz bir gövdeye düşülürse konsolda uyarı çıkar.

**`teshis.mjs` (elle).** Alanları teker teker gönderip hangisinin reddedildiğini
ölçer. Önce taban gövdeyi dener: o da düşerse sorun eklenen alanlarda değil,
model kimliğinde/anahtarda demektir ve orada durur. Tek tek hepsi geçip tam
gövde düşerse alanları tam gövdeden çıkararak hangi **ikilinin** çakıştığını
arar. İstekler küçük, kota harcamaz.

Her çıktının yanına `<cikti>.KOSUL.json` yazılır: o metin hangi gövdeyle,
hangi `max_tokens` ile üretilmiş. Konsoldaki uyarı `denetle.mjs` çalıştığında
kaybolmuş oluyor; karşılaştırdığınız sayıların hangi ayardan geldiği burada.

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
| `400 INVALID_ARGUMENT` | Uç bir alanı kabul etmiyor | Gövde merdiveni + `teshis.mjs` |

Model düşünüp cevap yazmazsa araç bunu ayrıca söyler ve düşünce metnini
`<model>.DUSUNCE.txt` olarak kaydeder — bütçenin nereye gittiği görülsün diye.

**503 senin hatan değil.** Ücretsiz uçlar paylaşımlı; yoğun saatte dolabiliyor.
Tekrar deneme geçmiyorsa bir süre sonra dene.

## Kopya içerik iki ölçütle ölçülür — biri yetmiyor

**Birebir kopya (5 kelimelik pencere).** Aynı cümlelerin tekrarını yakalar.
Kelime sırası değişince "farklı" sayar.

**Aynı şeyi söyleme (içerik kelimeleri).** Sıradan bağımsız. Parafrazı yakalar.

Neden ikisi birden: `gemini-3.1-flash-lite` dört ilçe metnini birinci ölçütte
%7 benzerlikle yazdı — kulağa mükemmel geliyor. Metinler okununca dördünün de
aynı şeyi söylediği görüldü: hizmet listesi, ücretsiz keşif, çalışma saatleri.
Aynı sayfa, eş anlamlıyla dört kez. İkinci ölçüt bunu %50'de yakalıyor.

Google'ın sorduğu soru "bu cümleler başka yerde geçiyor mu" değil, **"bu
sayfanın ayrı var olma sebebi ne"**. İkinci ölçüt o soruya daha yakın.

**Referans hesaplanır, yazılmaz.** Araç `src/data/serviceAreas.js` içindeki
elle yazılmış 20 ilçe metnini ölçüp eşiği oradan okur (birebir %0/0, içerik
%14/28). Önceki sürümde "%32" diye bir sabit vardı ve verinin hiçbir
okunuşundan çıkmıyordu; o sabitle model insandan iyi görünüyordu.

## Ölçüm neyi çözmez

İlçe sayfası sorunu bir **veri** sorunu, model sorunu değil. Olgu sayfasında
ilçeye özgü hiçbir bilgi yoksa hiçbir model o sayfayı benzersizleştiremez —
en iyi ihtimalle aynı şeyi farklı kelimelerle söyler. Çözüm daha iyi model
değil, her ilçe için gerçek veri: yapılmış iş, mesafe, bina tipi, yerel koşul.

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
