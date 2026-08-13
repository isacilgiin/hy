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
node arac/model-testi/calistir.mjs   # modelleri çağırır, ciktilar/ altına yazar
node arac/model-testi/denetle.mjs    # uydurma taraması + sıralama
```

## Model kimlikleri

`calistir.mjs` içindeki `modeller` dizisini kendi listenizle değiştirin.
Kimlikleri **tahmin etmeyin**: build.nvidia.com'da modelin sayfasını açıp kod
örneğindeki `model:` değerini birebir kopyalayın. Yayıncı öneki değişebiliyor.

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
