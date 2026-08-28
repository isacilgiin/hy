# Yayına Almadan Önce — Kontrol Listesi

> **Sürümleme.** `npm run build` `dist/` değil `yayin/<domain>-v<surum>/` üretiyor
> ve **her build sürümü bir artırıyor**: v1, v2, v3... Eski sürümler diskte kalır,
> yani sunucudaki yayına dönmen gerekirse elinde durur.
>
> Sürümün şişmesini istemediğin bir düzeltme yapıyorsan `src/data/siteConfig.js`
> içindeki `yayinSurumu` alanına bir **sayı** yaz (örn. `3`); o zaman her build
> v3'ün üzerine yazar. `null` bırakılırsa otomatik artar.
>
> Diskte 5'ten fazla sürüm birikince build sana hatırlatır. Silmekte serbestsin;
> hangi kodun hangi sürüme girdiği `rapor/` içindeki künyelerde git commit'iyle
> kayıtlı.
>
> Sebebi elde birden fazla site olunca ortaya çıkıyor: hepsinin çıktısı `dist/`
> adında olsa FTP'de yanlış sitenin dosyalarını yanlış alan adına yüklemek an
> meselesi. Klasör adı hem hangi site hem hangi sürüm olduğunu söylüyor.
>
> Aynı build ayrıca `rapor/<domain>-v<surum>.json` künyesini yazıyor: rota
> listesi, başlık/açıklama uzunlukları, kelime sayıları, şema türleri ve
> uyarılar. **Künye yayın klasörünün İÇİNE yazılmaz** — orası sunucuya giden
> her şey, künye oraya konsaydı rota haritanız ve eksik sayfalarınız herkese
> açık olurdu.

Bu dosya, sitede **gerçek veri bekleyen** her yeri ve **taşınma (migration) risklerini**
tek yerde toplar. `npm run dev` çalıştırdığında tarayıcı konsolunda eksik alanların
listesini ayrıca uyarı olarak görürsün.

---

## 🔴 0. EN ÖNEMLİSİ — Bu bir taşınma, sıfırdan yayın değil

`denizlihaliyikama.net.tr` şu anda **yayında olan ve Google'da indeksli PHP tabanlı bir
site.** Yeni siteyi yüklemek eskisinin yerine geçer. Yanlış yapılırsa mevcut sıralamalar
kaybolur.

**Yapılan hazırlık:** canlı sitenin sitemap'inde ölçülen **80 indeksli URL'nin tamamı**
karşılanıyor, **404'e düşen yok.**

| Eski adres grubu | Adet | Ne oluyor |
|---|---|---|
| `/ilceler/<ilce>-hali-yikama` | 19 | `/hizmet-bolgeleri/<slug>/` — slug birebir korunuyor, yalnızca üst dizin değişiyor |
| `/mahalleler/<mahalle>-hali-yikama` | 42 | `/hizmet-bolgeleri/<slug>/` — ilçe ve mahalle aynı hub'ın altında |
| `/blog/<slug>` | 9 | Adres aynı; yalnızca sondaki eğik çizgi ekleniyor |
| `/hizmetler/<slug>` | 3 | Adres aynı; yalnızca sondaki eğik çizgi ekleniyor |
| `/about` · `/contact` · `/services` | 3 | `/hakkimizda/` · `/iletisim/` · `/hizmetler/` (URL şeması tek dile indirildi) |
| `/denizli-hali-yikama` | 1 | Ana sayfaya birleşiyor — ikisi aynı sorguyu hedefliyordu, ikisi birden zayıflıyordu |
| `/` · `/blog` · `/hizmet-bolgeleri` | 3 | Aynı sayfa; ana sayfa dışındakiler eğik çizgi alıyor |
| **404'e düşen** | **0** | — |

**Kaç yönlendirme var?** Sayı değil, mekanizma önemli: `vite.config.js` içindeki
`redirects` dizisi yolu **değişen** adresleri taşır (ilçe/mahalle dizini, İngilizce kök
sayfalar, kopya sayfa, `ilce.php`/`mahalle.php` kalıntıları). Yolu **değişmeyen**
adresler o dizide bilerek **yok** — onları sondaki eğik çizgiyi zorunlu kılan ayrı bir
kural hallediyor. İkisine birden kural yazmak çift 301 zinciri üretirdi.

> **Sonuç:** ana sayfa dışındaki 79 indeksli adresin hepsi **tek bir 301 sıçraması**
> ile yerine ulaşıyor. Zincir yok.

> **Sondaki eğik çizgi kararı henüz kesinleşmedi.** Canlı site çizgisiz servis ediyor,
> bu iskelet çizgili üretiyor; şu anki kurgu "çizgiliye 301". Kabul edilebilir ama
> bedavaya gelmiyor. Alternatif iskeleti çizgisiz üretmeye çevirmek ve indeksteki
> biçimi aynen korumak — bunun için sunucuda (LiteSpeed) tek seferlik bir test
> gerekiyor. Gerekçe `vite.config.js` içindeki `redirects` bloğunun başında yazılı.

Yönlendirmeler yayın klasöründeki `.htaccess` dosyasında **otomatik üretiliyor**.

### `.htaccess` nedir, neden önemli?

Apache/LiteSpeed sunucularında, bir klasörün içine konan ve **o klasördeki kuralları
belirleyen** ayar dosyasıdır. Adı nokta ile başladığı için "gizli dosya" sayılır —
FileZilla varsayılan ayarlarla **göstermez ve yüklemez.**

Bizim `.htaccess` dosyamız beş iş yapıyor:

1. **Tek kanonik adres.** `www`'lu ve `http`'li varyantları `https://` + www'suz
   adrese 301 ile toplar. Dördü de aynı siteyi 200 ile verirse Google için dört ayrı
   kopya görünümü doğar; canonical bir *öneri*, 301 bir *talimat*.
2. **Eski adresleri yenisine yönlendiriyor.** Yukarıdaki tablo bu dosyadan çalışıyor.
   Dosya yüklenmezse eski ilçe ve mahalle adreslerinin **61 tanesi 404 verir** ve o
   sayfaların Google'daki sıralaması kaybolur.
3. **Sondaki eğik çizgiyi zorunlu kılıyor** — indeksteki URL formatı bu.
4. **Bilinmeyen adreslere GERÇEK 404 döndürüyor** (yumuşak 404 değil). Bunun neden
   önemli olduğu aşağıda.
5. **Türkçe karakter ve önbellek ayarları.** Bu olmadan `llms.txt` gibi metin
   dosyalarında "Kırma" yerine "KÄ±rma" görünüyor.

### Neden SPA yönlendirmesi YOK — ve bu bilerek

Klasik tek sayfa uygulamalarında `.htaccess`'e "her adresi index.html'e ver" kuralı
yazılır. Bu sitede o kural **kaldırıldı**: 90 rotanın hepsinin fiziksel `index.html`'i
var, yani gerçek sayfalar o kurala hiç düşmüyordu. Ona düşen tek şey **olmayan
adreslerdi** ve onlara ana sayfanın HTML'i 200 ile dönüyordu.

Bir göçte bu ciddi bir sorun: 301 listemizde karşılığı olmayan her eski adres
"200 + ana sayfa içeriği" verir, Google da onları ana sayfanın kopyası olarak
indekste tutar — üstelik tam da eski adresler dizinden temizlenirken.

> **Bunun bedeli şu:** yeni bir React rotası eklerken `vite.config.js` içindeki
> listelere (`staticRoutes` / `services` / `serviceAreas` / `blog`) de eklemezseniz
> o adres sessizce yanlış meta ile değil, **doğrudan 404** ile cevap verir.

### ⚠️ `.htaccess` dosyasını yüklemeyi ATLAMA

> FileZilla → **Sunucu** menüsü → **Gizli dosyaları göstermeye zorla** ✔

### Yükleme sonrası mutlaka test et

```
https://denizlihaliyikama.net.tr/hizmet-bolgeleri/tavas-hali-yikama/   → 200 açılmalı
https://denizlihaliyikama.net.tr/ilceler/tavas-hali-yikama             → 301 → /hizmet-bolgeleri/tavas-hali-yikama/
https://denizlihaliyikama.net.tr/mahalleler/kinikli-hali-yikama        → 301 → /hizmet-bolgeleri/kinikli-hali-yikama/
https://denizlihaliyikama.net.tr/hizmetler/hali-yikama                 → 301 → /hizmetler/hali-yikama/
https://denizlihaliyikama.net.tr/about                                 → 301 → /hakkimizda/
https://denizlihaliyikama.net.tr/denizli-hali-yikama                   → 301 → /
https://www.denizlihaliyikama.net.tr/                                  → 301 → https://denizlihaliyikama.net.tr/
https://denizlihaliyikama.net.tr/olmayan-sayfa/                        → 404 dönmeli
https://denizlihaliyikama.net.tr/sitemap.xml                           → 90 URL listelemeli
```

Komut satırından: `curl -I <adres>` — dönen ilk satırdaki durum koduna bakın.

**Sondaki test en kritiği.** `/olmayan-sayfa/` **200** dönerse hosting `ErrorDocument`
veya `[R=404]` yönergesine izin vermiyor demektir; yumuşak 404 geri gelmiş olur.
Bu durumda haber verin, farklı bir yolla çözülür.

Sonra **Google Search Console → Site Haritaları**'ndan yeni `sitemap.xml`'i gönder ve
eski sitemap girdilerini kaldır. Ardından ana sayfa, `/hizmetler/hali-yikama/` ve
`/blog/` için "URL denetimi → dizine ekleme iste" yap; kalanlar sitemap üzerinden
kendiliğinden taranır.

---

## 1. Gerçek veri bekleyen alanlar

### `src/data/siteConfig.js`

Bu tablo `siteConfig.js`'in kendi geliştirme uyarısıyla aynı listedir — `npm run dev`
çalıştırdığınızda konsolda da görürsünüz.

| Alan | Durum | Not |
|---|---|---|
| Firma adı, telefon, e-posta, adres | ✅ | Denizli Tomay Halı Yıkama / 0537 372 67 04 / bilgi@denizlihaliyikama.net.tr / Eskihisar Mah. Pamukkale Sk. Arı Kiremit Fabrikası No:17 İç Kapı No:2, 20020 Merkezefendi |
| `workingHours` | ✅ | Tesis Pazartesi–Cumartesi 07:00–18:00 (Pazar kapalı). Alma-teslim servisi **her gün** — ayrı alan, çünkü ayrı şey. |
| `foundedYear` + `stats` | ✅ | Kuruluş **2016**; 15.000 yıkanan halı, 5.000 mutlu müşteri, %100 hijyen. Hepsi canlı sitenin sayaç hedeflerinden alındı. **"Yıl tecrübe" `foundedYear`'dan otomatik hesaplanıyor** — sadece yılı değiştirin. |
| `social.instagram` | ✅ | `instagram.com/tomay.hali.yikama` |
| `analytics.googleAds` | ✅ | `AW-18007504148` — canlı sitenin gtag'inden okundu |
| `geo.lat` / `geo.lng` | ❌ Boş | Harita koordinatı. **Doğrulanmadan doldurmayın** — yanlış koordinat müşteriyi başka adrese yollar. |
| `geo.placeId` / `geo.embedSrc` / `plusCode` / `shortLink` | ❌ Boş | Google İşletme Profili bilgileri. Boşken `MapEmbed` adres aramasına düşüyor ve çalışıyor. |
| `rating.value` / `rating.count` | ❌ Boş | Google puanı ve yorum sayısı bilinmiyor. Kaynağı olmayan puan yayınlanamaz — `null` kalır. |
| `analytics.ga4` | ❌ Boş | Canlı sitede GA4 mülkü **yok**, yalnızca Ads etiketi var. Aşağıya bakın. |
| `analytics.googleSiteVerification` | ❌ Boş | Search Console doğrulama kodu |
| `analytics.conversions.telefon/whatsapp/form` | ❌ Boş | Ads dönüşüm etiketleri — § 1.5 B |
| `social.facebook` / `social.youtube` | ❌ Boş | Hesap yoksa boş kalsın; boş olan ikon footer'da hiç gösterilmez, uydurma link oluşmaz. |
| `analytics.gtm` | ⛔ **Bilerek boş** | **Geri koymayın.** GTM snippet'i `window.gtag`i tanımlamaz, yalnızca dataLayer açar; gtag ancak GTM inip etiketi tetikleyince ortaya çıkar ve o ana kadarki tıklamalar sessizce kaybolur. Boş bırakıldığında build gtag.js'i doğrudan basar ve gtag **senkron** tanımlanır. |

**Google puanı neden JSON-LD'ye yazılmıyor?** Google, bir işletmenin kendi sitesinde
kendi Google puanını `aggregateRating` olarak işaretlemesini "self-serving review"
sayar; yok sayar ve yapılandırılmış veri cezası riski taşır. Bu yüzden
`rating.showInSchema` bilinçli olarak `false`. Puanı sitede metin/rozet olarak
göstermek serbest — puan öğrenildiğinde `rating.value`/`count` doldurulabilir,
`showInSchema` yine `false` kalır. Kendi sitenizde yorum toplarsanız `true` yapılabilir.

### `src/data/about.js`
- `foundedYear` ayrı tutulmuyor; `siteConfig.js`'ten yeniden dışa aktarılıyor. Tek yerde.
- `timeline` **bilinçli olarak boş** — eksik değil. Devralınan iskelette buradaki beş
  kilometre taşının yılları `foundedYear + 3/6/8/10` diye hesaplanıyordu, yani
  uydurmaydı. Dizi boşken Hakkımızda'daki bölüm tamamen gizleniyor. Doldurmak için
  şart: **her maddenin yılı ve olayı firmadan doğrulanmış olmalı.**

### `src/data/bolgeler/<slug>.js` — 61 bölge metni
- ⚠️ **Slug'ları değiştirmeyin** — indeksli URL'ler.
- `serviceAreas.js` **elle düzenlenmez**; o dosya indeks ile metinlerin birleşimidir.
  Metin için `src/data/bolgeler/<slug>.js`, kimlik alanları için `bolgelerIndex.js`.
- ⚠️ **Her bölge sayfası kendi metnini hak etmeli.** 61 sayfa aynı iskeleti paylaşıyor;
  aralarındaki tek gerçek fark yazının kendisi. Google bu şekli "doorway / thin
  content" olarak sınıflandırabilir.

  Ne yazılacağı tahmine bırakılmadı: **`docs/olgu-sayfasi.md` § 4** ilçeleri
  birbirinden ayıran dört ekseni (o bölgeden gelen halının cinsi, erişim/lojistik,
  iklim, hizmet karması), **§ 9** ise mahalle sayfaları için ayrı eksenleri ve
  yasakları listeliyor. Bir sayfa bu eksenlerden en az ikisine somut olarak değmeli.

  Ölçüm elle göz kararı değil:

  ```bash
  node arac/model-testi/denetle.mjs
  ```

  Araç eşiği sabitten değil, **sitenin kendi elle yazılmış bölge metinlerinden**
  hesaplıyor. Sabit bir yüzde hedeflemeyin; aracın o günkü referansına bakın.

### `src/data/projects.js` — öncesi & sonrası
- Fotoğraflar gelene kadar sayfa kırılmaz: `BeforeAfter` → `SmartImage` yer tutucu
  gösterir, sürgü yine çalışır.
- **Fotoğraf çekerken şart:** iki kare **aynı açıdan ve aynı ışıkta**. Açı ya da ışık
  değişirse sürgü "başka halı çekilmiş" izlenimi verir ve ters teper.

---

## 1.5 Google Analytics ve Google Ads kimlikleri

### A) GA4 Ölçüm Kimliği — ❌ YOK, açılması gerekiyor

Canlı sitenin kaynak kodunda **GA4 mülkü bulunamadı**; yalnızca Google Ads etiketi
(`AW-18007504148`) var. Yani şu an ziyaretçi davranışı hiçbir yerde ölçülmüyor,
yalnızca reklam dönüşümleri (o da eksik, aşağıya bakın).

Yapılacak: [analytics.google.com](https://analytics.google.com) → yönetici → mülk
oluştur → web veri akışı ekle → `denizlihaliyikama.net.tr`. Ekranda `G-` ile başlayan
**Ölçüm Kimliği** çıkar. Onu `siteConfig.analytics.ga4` alanına yazın; GA script'i
build sırasında otomatik eklenir. Alan boş kaldığı sürece script hiç yüklenmez.

> GA4 mülkü sıfırdan açıldığı için **geçmiş veri gelmez** — ölçüm kurulduğu günden
> başlar. Bu yüzden yeni siteyi yüklemeden önce açmak, karşılaştırma yapabilmek
> açısından işe yarar.

Aynı sayfada Search Console doğrulama kodunu da alıp
`analytics.googleSiteVerification` alanına yazabilirsiniz.

### B) Google Ads dönüşüm etiketleri — ❌ üçü de boş

Dönüşüm **kimliği** (`AW-18007504148`) girildi; eksik olan üç dönüşümün **etiketi**.
Etiket olmadan telefon/WhatsApp/form tıklamaları Ads'e hiç raporlanmaz.

> **Arayüz değiştiyse:** Google Ads menüsü sık değişiyor. Menüde aramak yerine şu
> adresi doğrudan tarayıcıya yazın — hangi sürümde olursanız olun dönüşüm listesine
> gider: **https://ads.google.com/aw/conversions**
> (Bazı sürümlerde bu sayfanın menüdeki adı **Hedefler → Özet**.)

**Önce listeye bakın.** Ads hesaplarında otomatik oluşmuş, adı
`... conversion_event_page_view` benzeri bir satır bulunabiliyor. **Varsa** üstüne
tıklayın → **Ayarları düzenle** → **Hedef ve işlem optimizasyonu** → **"İkincil işlem"**
seçip kaydedin (silmeyin, geçmiş veri bozulmasın).

*Neden: böyle bir satır "Birincil" kalırsa Google'a "biri sayfamı açtıysa bu bir
başarıdır" demiş olursunuz. Akıllı teklif bütçeyi arayacak müşteriye değil, açıp
çıkacak kişiye harcar.*

**Sonra gerçek dönüşümleri oluştur — 3 kez tekrarla:**

1. Aynı sayfada mavi **+** veya **"Yeni dönüşüm işlemi"** → **Web sitesi**
2. Alan adı olarak `denizlihaliyikama.net.tr` yaz → **Tara**
3. Alttaki **"Dönüşüm işlemini manuel olarak ekle"** bağlantısına tıkla
   *(sitede otomatik bulamayabilir, normal)*
4. Doldur:

   | Dönüşüm adı | Kategori | Değer |
   |---|---|---|
   | Telefon Tıklama | Kişi → Telefonla iletişim | Değer kullanma |
   | WhatsApp Tıklama | Kişi → Sohbet başlatma | Değer kullanma |
   | Form Gönderimi | Gönderilen potansiyel müşteri formu | Değer kullanma |

   Üçünde de: **Birincil işlem** · Sayım: **Bir kez**
5. Kaydet → **"Etiketi ayarla"** ekranı açılır → **"Etiketi manuel olarak yükle"** seç
6. Ekranda şuna benzer bir kod görürsün:

   ```js
   gtag('event', 'conversion', {'send_to': 'AW-18007504148/AbC-D_efG12'});
   ```

   - Bölü işaretinden **öncesi** → dönüşüm kimliği (zaten girili)
   - Bölü işaretinden **sonrası** → **dönüşüm etiketi** (her dönüşümde farklı)

**Sitede nereye yazılacak** — `src/data/siteConfig.js`:

```js
analytics: {
  ga4: 'G-XXXXXXXXXX',            // A adımından
  googleAds: 'AW-18007504148',    // girili
  conversions: {
    telefon:  'AbC-D_efG12',      // bölü işaretinden SONRAKİ kısım
    whatsapp: '...',
    form:     '...',
  },
},
```

Kaydet → `npm run build` → yükle. Site tarafında başka bir şey yapmanıza gerek yok;
telefon, WhatsApp, e-posta, harita tıklamaları ve form gönderimi
`src/components/ConversionTracking.jsx` üzerinden otomatik raporlanıyor.

> **Kontrol:** Ads → Dönüşümler listesinde durum önce *"Doğrulanmadı"* görünür.
> Siteye girip telefon butonuna tıklayın; birkaç saat içinde *"Etkin"*e döner.

---

## 2. Görseller — nereye, hangi isimle?

Görselleri **projeye** ekleyeceksin (hostinge değil), sonra `npm run build` alınca
yayın klasörüne kopyalanırlar. Hedef klasör: `public/images/...`

Dosya adları **tam olarak** beklenen isim olmalı — kod bu isimleri arıyor. Dosya yoksa
otomatik tasarım yer tutucusu görünür, kırık görsel ikonu asla çıkmaz.

### ⚠️ Ana dosya tek başına YETMEZ — varyantı da koyun

Kod `srcset`'i dosya adından türetiyor. Varyant üretilmezse tarayıcı adayı `sizes` +
ekran yoğunluğuna göre **önceden seçer**; seçtiği dosya gelmezse `<img>` hataya düşer
ve **görsel tamamen kaybolur**. "En yakın boya düşmez."

| Klasör | Ana dosya | Zorunlu varyantlar |
|---|---|---|
| `hero/` | `hero-N.webp` (en az 1600×900) | `hero-N-800.webp` |
| `hizmetler/` | `<slug>.webp` | `<slug>-600.webp`, `<slug>-900.webp` |
| `blog/` | `<slug>.webp` | `<slug>-600.webp`, `<slug>-900.webp` |
| `bolgeler/` | `<bolge-slug>.webp` | `<bolge-slug>-600.webp` |
| `oncesi-sonrasi/` | `<is>-oncesi.webp` / `<is>-sonrasi.webp` | her ikisinin `-800` varyantı |
| `og/` | `<slug>.jpg` (1200×630) | — |
| `logo/` | `logo.webp`, `logo-beyaz.webp`, `og-image.jpg`, `apple-touch-icon.png` (180×180) | 192/512 PNG |

Üretim ve denetim tek araçta:

```bash
npm i -D sharp                            # yalnızca bir kez; build için GEREKMEZ
npm run varyant                           # eksikleri listeler, sharp varsa üretir
node arac/gorsel-varyant.mjs --denetle    # yalnız denetle (eksik varsa çıkış kodu 1)
```

`sharp` bilerek kalıcı bağımlılık değil: platforma özel ikili paket getiriyor ve
`package-lock.json`'ı Windows ile Linux arasında çakıştırıyor.

### Şu an eksik olanlar (`--denetle` çıktısı, en son ölçüm)

- **`og/` klasörü boş — bu bir görsel eksiğinden fazlası.** `routeMeta.js` her hizmet
  sayfasının OG etiketini `/images/og/<slug>.jpg` olarak **koşulsuz** yazıyor; dosya
  yoksa yedeğe düşmüyor, etiket 404 veren bir adresi gösteriyor. Yani **8 hizmet
  sayfasının WhatsApp/Facebook önizlemesi şu an görselsiz çıkıyor.** 8 adet 1200×630
  markalı JPG gerekiyor (WebP değil: WhatsApp bazı istemcilerde WebP'yi çizmiyor).
  `npm run seo` bunu "OG dosyası diskte yok" olarak raporlar.
- **`bolgeler/` klasörü boş — ama önce KOD gerekiyor.** 61 ilçe/mahalle sayfasının
  hiçbiri şu an bir görsel çizmiyor: `src/` içinde `/images/bolgeler` yolunu kullanan
  hiçbir yer yok, `ServiceAreaDetail.jsx` görsel göstermiyor. Klasöre dosya atmak tek
  başına hiçbir şeyi değiştirmez. `npm run varyant` da bu klasörü "eksik" diye
  raporlamaz — beklentiyi kodun gerçek `srcSet`'lerinden okuyor, kod istemiyorsa
  eksik de saymıyor. `docs/olgu-sayfasi.md` § 9 her mahalle sayfasının **kendi
  görselini** almasını kural olarak koyuyor; bu kuralın karşılanması için önce bölge
  sayfasına görsel alanı eklenmeli, sonra 61 görsel + `-600` varyantı üretilmeli.
- **`oncesi-sonrasi/` boş** — 6 iş × 2 kare (salon halısı, yün halı, shaggy, koltuk,
  stor perde, yorgan) + `-800` varyantları.
- **5 blog görseli eksik:** `hali-yikamaci-secerken-nelere-bakmali`,
  `koltuk-yikama-sikligi`, `pamukkale-koltuk-yikama-rehberi`,
  `stor-perde-yikama-rehberi`, `yatak-hijyeni-ve-alerji`.
- **`logo/apple-touch-icon.png` (180×180), `icon-192.png` ve `icon-512.png` yok** —
  `index.html` ve `manifest.json` bu üçünü arıyor.
- **Çözünürlüğü yetersiz olanlar** (büyütülüyor, keskinlik kaybı):
  `hero-1/2/3.webp` 1376×768 (1600 isteniyor), `hakkimizda.webp` 1024×1024 (1200 isteniyor).

**Sıkıştırmayı atlama:** 1 MB'lık bir hero fotoğrafı mobil ziyaretçiyi kaçırır.
Hedef: hero < 300 KB, hizmet/blog görselleri < 150 KB.

**Favicon** şu an çalışıyor (`public/favicon.svg` — rulo halı kesiti motifi). Renkleri
`src/index.css` `@theme` bloğuyla aynı olmalı.

---

## 3. İletişim formu

`src/pages/Contact.jsx` — form şu anda **backend'e gitmiyor**, mesajı WhatsApp'a
aktarıyor. Kalıcı çözüm: Formspree / Web3Forms (ücretsiz katmanı var) ya da hostingde
bir PHP endpoint.

---

## 4. Build & Deploy

```bash
npm install
npm run build     # yayin/<domain>-v<surum>/ oluşur
npm run seo       # üretilen klasörü denetle: sitemap, canonical, robots, llms.txt, OG, JSON-LD
```

`npm run build` öncesinde **duman testi otomatik çalışır** (`prebuild`): her rotanın
React bileşeni gerçekten render edilir. Çöken rota varsa build başlamaz — çünkü statik
build ve HTTP 200 kontrolü, bileşenin çalışma anında çökmesini yakalamıyor.

Yayın klasörünün **içindekilerin tamamını** (gizli `.htaccess` ve **alt klasörler**
dahil) hostingin `public_html` klasörüne yükleyin.

> Yayın klasöründe `hizmetler/`, `hizmet-bolgeleri/`, `blog/` gibi klasörler ve her
> birinin içinde `index.html` var. FileZilla'da klasörleri de aktardığınızdan emin
> olun; eksik yüklenirse o adres artık 404 verir (SPA yedeği bilerek kaldırıldı).

> Nginx kullanıyorsanız `.htaccess` işe yaramaz; yönlendirmelerin, eğik çizgi
> kuralının ve gerçek 404'ün nginx karşılıkları gerekir — söyleyin, yazayım.

### Yükleme sonrası kontrol listesi

- [ ] `.htaccess` yüklendi mi? (gizli dosya — FileZilla ayarı)
- [ ] SSL sertifikası aktif (hosting panelinden ücretsiz Let's Encrypt)
- [ ] Yukarıdaki **taşınma testleri** (bölüm 0) geçti mi? Özellikle `/olmayan-sayfa/` → 404
- [ ] Search Console'a yeni sitemap gönderildi, eskiler kaldırıldı
- [ ] Google İşletme Profilindeki web sitesi adresi doğru
- [ ] WhatsApp'ta linki paylaşıp önizleme görselini kontrol et (`og-image.jpg`)
- [ ] `siteConfig.js`'teki ❌ işaretli alanlar dolduruldu mu? ← **en kritik**

---

## 5. Otomatik üretilen dosyalar — elle düzenlemeyin

Hepsi `src/data/*.js` üzerinden **build sırasında** üretilir:

- `<yayın>/index.html` **ve her rota için ayrı `<yayın>/<rota>/index.html`** (90 sayfa)
  → meta etiketleri, Open Graph, canonical, JSON-LD hepsi o sayfaya ait.
  Bu sayede WhatsApp/Facebook link önizlemeleri doğru sayfayı gösterir
  (sosyal medya botları JavaScript çalıştırmaz).
- `<yayın>/sitemap.xml` → **90 URL**: ana sayfa + 8 hizmet + 19 ilçe + 42 mahalle +
  11 blog yazısı + hizmet/bölge/blog hub'ları + hakkımızda, iletişim, projeler, SSS,
  gizlilik politikası, şartlar ve koşullar.
- `<yayın>/robots.txt`
- `<yayın>/llms.txt` ve `<yayın>/llms-full.txt` (+ `.well-known/` kopyaları)
- `<yayın>/404.html`
- yayın klasöründeki `.htaccess` → kanonik konak + 301'ler + eğik çizgi kuralı +
  gerçek 404 + önbellek + UTF-8

> **`public/` altında elle tutulan bir SEO dosyası YOK.** `llms.txt` dahil hepsi
> `vite.config.js` içindeki `seoFromConfig` eklentisinde üretiliyor ve içeriğini
> `siteConfig.js` (özellikle `sector` bloğu) ile sayfa verilerinden alıyor.
> Sektör metni değişecekse `siteConfig.sector` düzenlenir — `llms.txt`'e dokunulmaz,
> zaten bir sonraki build'de üzerine yazılır.

Domain, telefon veya firma adı değiştirmek için **sadece `src/data/siteConfig.js`**.
Yönlendirme eklemek/çıkarmak için `vite.config.js` içindeki `redirects` dizisi —
build o kuralları gerçek rota listesiyle çapraz kontrol eder ve bir kural gerçek bir
sayfayı gölgeliyorsa **hata verip durur.**
