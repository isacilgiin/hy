# Kalan İşler

> ## 26 Ağustos — DURUM: canlıda **Performance 91**, Best Practices **100**
>
> | | 25 Ağu | 26 Ağu |
> |---|---|---|
> | Performance | 75 | **91** |
> | Best Practices | 73 | **100** |
> | LCP (Lantern tahmini) | 6,0 sn | **3,4 sn** |
> | TBT | 190 ms | **57 ms** |
> | Accessibility / SEO | 100 / 100 | 100 / 100 |
>
> Sebebi Ads etiketinin kaldırılması (bkz. 1a). Dikkat: `observedLargest-
> ContentfulPaint` 1168 → 1207 ms, yani **gerçek LCP değişmedi** — Lantern'in
> *tahmini* düştü, çünkü simüle edecek 150 KB daha az şey var. Ölçtüğüm
> "Ads LCP'yi etkilemiyor" sonucuyla birebir tutarlı.
>
> **Kalan 9 puanın tamamı LCP** (3,4 sn, puan 0,65). O da FCP 1,4 sn ile
> arasındaki React açılma süresi — çözümü 3b(a)'daki hero ön boyama işi.

---

Çalışma ağacı temiz, her şey commit'li. Son commit `0e4349d`.

---

## 0. ~~canlıda eski sürüm var~~ — ÇÖZÜLDÜ (26 Ağustos)

> Canlıdan doğrulandı: sitemap'te 70 `image:image`, şemada koordinat
> `37.8194033`, `AW-18007504148` yok, `salon-halisi-oncesi.webp` 270 KB
> (sıkıştırılmış hâli). Aşağıdaki eski metin tarih olarak duruyor.

`0e4349d` (meta/h1 tek kaynak) ve ondan önceki birkaç commit **canlıya yüklenmedi**.
Canlıdaki site son deploy'dan kalma. Yeniden `npm run build` alıp yüklemek gerekiyor.

Acil değil: canlıdaki hâli **yanlış değil**, sadece ham HTML ile React'in ürettiği
başlık/açıklama/h1 üç sayfada farklı ifade kullanıyor. Aşağıdaki görsel işleriyle
birlikte tek seferde çıkmak daha mantıklı.

---

## 1. PageSpeed 75 — bugün ölçüldü, sebebi bulundu

Mobil skorlar: **Performance 75** · Accessibility 100 · **Best Practices 73** · SEO 100
Metrikler: FCP 1,4s · **LCP 6,0s (puan 0,13)** · TBT 190ms · CLS 0 · SI 1,4s

Tek metrik skoru öldürüyor: LCP. Ağırlığı 25, puanı 0,13 → tek başına ~22 puan.

### 1a. Google etiketleri — ÇÖZÜLDÜ (26 Ağustos)

| | |
|---|---|
| gtag GA4 `G-FF3630L3MG` | 167 KB transfer, 70 KB'ı kullanılmıyor, 155 ms CPU |
| gtag Ads `AW-18007504148` | 150 KB transfer, 60 KB'ı kullanılmıyor, 185 ms CPU |
| **toplam** | **317 KB** = 716 KB'lık sayfanın **%44'ü** |

Ölçtüm (Lighthouse ayarları: Slow 4G + 4x CPU):

```
şu anki hâli            LCP 2900 ms
animasyonlar kapalı     LCP 2820 ms   (-80 ms)
googletagmanager engel  LCP 2496 ms   (-404 ms)
ikisi birden            LCP 2496 ms
```

> **26 Ağustos düzeltmesi — yukarıdaki -404 ms GÜVENİLMEZ.** Hepsi TEK koşuydu.
> Ertesi gün 20karot ile birebir kıyas yapıldı (5 koşu, almaşık, aynı düzenek):
>
> ```
> 20karot   LCP 2824 ms (2792-2828)   FCP 876 ms   gtag 182 KB   toplam 638 KB
> tomay     LCP 2824 ms (2812-2864)   FCP 872 ms   gtag 310 KB   toplam 713 KB
> ```
>
> 20karot'ta `googleAds` boş, yani **tek etiket** iniyor — 128 KB daha az. LCP
> **birebir aynı**. İki sitede de LCP öğesi aynı: `P.animate-fade-in-up delay-200`.
> Sonuç: **Google etiketi LCP'nin darboğazı değil** — `async` olduğu için JS
> zincirini bekletmiyor. Etiket Best Practices'i düşürüyor (o gerçek), performansı değil.
>
> Asıl boşluk FCP 872 ms ile LCP 2824 ms arasındaki **~1950 ms**: React'in açılma
> süresi (index.js + vendor.js indir → ayrıştır → çalıştır → render). Ön boyama
> HTML'i 872 ms'de basılıyor ama içinde **metin yok**, sadece görsel var; LCP öğesi
> olan paragrafı React basıyor. İki sitede de aynı mimari, aynı sonuç.

> **Ayrıca:** `siteConfig.analytics.conversions` üçü de boş (`telefon`, `whatsapp`,
> `form`). `src/utils/analytics.js:40` hem `googleAds` hem `etiket` ister —
> yani Ads etiketi şu an 150 KB iniyor ve **tek bir dönüşüm bile göndermiyor**.

#### KARAR: Ads etiketi kaldırıldı

İşletme reklam vermiyor (26 Ağustos'ta teyit edildi) ve dönüşüm etiketleri zaten
boştu — yani etiket 150 KB inip hiçbir şey ölçmüyordu. `siteConfig.js` içinde
`googleAds: ''` yapıldı; kimlik oradaki yorumda saklı, reklama başlanınca geri
yazılır (dönüşüm etiketleriyle BİRLİKTE, yoksa yine hiçbir şey ölçmez).

Ölçüm (yerel build, 7 koşu almaşık, Lighthouse mobil ayarları, MEDYAN):

| | Ads VAR | Ads YOK |
|---|---|---|
| LCP | 4540 ms (4520-4564) | 4528 ms (4480-4564) — aralıklar örtüşüyor, **fark yok** |
| **TBT** | 170 ms (164-260) | **68 ms (58-96)** — aralıklar örtüşmüyor, **gerçek** |
| toplam bayt | 1025 KB | 831 KB |
| gtag | 310 KB / 2 istek | 163 KB / 1 istek |
| üçüncü taraf çerez | `.doubleclick.net test_cookie` | **yok** |

v82 build'i üzerinde doğrulandı: geriye yalnızca `_ga` ve `_ga_FF3630L3MG` kaldı
(ikisi de birinci taraf); üçüncü taraf sunucu olarak yalnızca googletagmanager ve
google-analytics. doubleclick.net, googleads.g.doubleclick.net ve google.com.tr
istekleri tamamen gitti.

Beklenen etki: **Best Practices 73 → en az 92** (third-party-cookies denetimi 26
ağırlığın 5'i; konsol hataları da doubleclick kaynaklıydı, 100 de olabilir).
**Performance 75 → ~78** — yalnızca TBT'den, LCP değişmiyor.
Canlıda doğrulanacak: yüklendikten sonra PageSpeed tekrar çekilmeli.

Best Practices 73'ün de **tamamı** bu etiketten: 32 üçüncü taraf çerezi (ağırlık 5)
+ inspector-issues (1) + errors-in-console (1) = 26 ağırlığın 7'si.

**Seçenekler** — hiçbiri uygulanmadı, senin kararın:
- a) `requestIdleCallback` / `load` sonrasına ertele
- b) ilk kullanıcı etkileşiminde yükle (scroll/click/touch)
- c) sadece Ads etiketini ertele, GA4 hemen kalsın
- d) dokunma

**Dikkat:** site `page_view`'i `src/components/Seo.jsx` içinden elle gönderiyor
(`send_page_view:false` ile; gerekçesi `src/utils/analytics.js > sayfaGoruntuleme()`
başında yazılı). Erteleme bu akışı bozar mı, `dataLayer` kuyruğu etiket inmeden
önceki olayları yakalar mı — **test edilmedi**. Ads erteleme dönüşüm takibini
etkileyebilir, o yüzden sormadan uygulamadım.

### 1b. Hero srcset boşluğu — Lighthouse'un GÖRMEDİĞİ gerçek kayıp

`vite.config.js:163` hero srcset'i sadece iki basamak üretiyor: `800w` ve `1600w`.
Arada boşluk var. On ekran × DPR taradım:

| ekran | DPR | inen hero |
|---|---|---|
| 412 | 1.75 | hero-1-**800**.webp · 60 KB |
| 360 | **3** | hero-1.webp · **158 KB** |
| 390 | **3** | hero-1.webp · **158 KB** |

Lighthouse'un test cihazı DPR **1.75** (moto g power) olduğu için 60 KB'lık olanı
alıyor ve **bunu raporlamıyor**. Ama gerçek telefonların çoğu DPR 2.5–3: iPhone'da
360×3 = 1080px gerekiyor, tarayıcı 1600w'a atlıyor.

Gerçek ziyaretçi hero-1 + hero-2 için **271 KB** indiriyor, Lighthouse'un gördüğü
99 KB değil. Bir **`1200w` basamağı** bunu ~90 KB'a çeker.
Yapılacak: `arac/gorsel-varyant.mjs`'e 1200 basamağı, sonra `vite.config.js:163`
ve `src/components/HeroSection.jsx:211` (üçü de aynı srcset'i kullanmak zorunda).

### 1c. Görsel teslimi — 117 KiB israf (Lighthouse'un kendi tespiti)

```
el-dokuma-hali-yikama-900.webp  900x562 dosya, 364x228 gösterim   51 KB israf
hali-yikama-900.webp            669x502 dosya, 489x273 gösterim   51 KB israf + 17,7 KB sıkıştırma
logo-beyaz.webp                 273x112 dosya, 137x56 gösterim    16 KB + 12,5 KB sıkıştırma
```

`logo-beyaz.webp` 17,6 KB — 273x112'lik bir logo için ağır, yeniden sıkıştırılmalı.

Ayrıca ağ dökümünde: 220 ms'de `hali-yikama-900.webp` (73 KB) ve
`el-dokuma-hali-yikama-900.webp` (62 KB) iniyor — ikisi de `loading="lazy"` olduğu
hâlde ve katlamanın **altında**. 135 KB. Chrome'un lazy eşiği devreye giriyor
olabilir, **araştırılmadı**.

`hero-2-800.webp` (40 KB) da 220 ms'de iniyor — `HeroSection`'daki `yuklenecek`
kümesi başlangıçta `{0,1}` olduğu için. İlk ekranda görünmüyor.

### 1d. ~~Bakılmadı~~ — HEPSİ CEVAPLANDI (bkz. §5)

- `assets/index-*.css` 9,6 KB render blokluyor — kritik CSS satır içi alınabilir mi
- `vendor-*.js` 70 KB transfer / 228 KB ham, 33 KB kullanılmıyor, 182 ms CPU
- LCP öğesi neden hero **görseli** değil de hero **paragrafı**? (Görsel 6 kat büyük
  ve HTML'de statik duruyor, 107 ms'de iniyor. Chrome onu aday saymıyor, sebebi bulunamadı.)
- googletagmanager preconnect'i "kullanılmadı" diyor, oysa gtag oradan 77 ms'de iniyor

Bunları araştıran iş akışı yazıldı ama **yarıda durduruldu**. Script duruyor,
kaldığı yerden devam ettirilebilir:
`~/.claude/projects/-workspace-hy/3b3eecb7-0444-4a1a-9b1e-0052a301fe2d/workflows/scripts/pagespeed-lcp-audit-wf_83282447-69f.js`

---

## 2. ~~Eksik görseller~~ — TAMAMLANDI (26 Ağustos, 30/30)

> Blog 11/11, öncesi-sonrası 12/12 çift. `npm run varyant` artık eksik
> bulmuyor. **Kalan tek görsel işi:** 8 hizmet OG görseli hiç üretilmedi,
> hepsi `og-image.jpg`'ye düşüyor — kırık değil, paylaşımda hepsi aynı
> görünüyor. Aşağıdaki eski metin tarih olarak duruyor.

**5 blog görseli** + **12 öncesi/sonrası görseli** referans veriliyor ama dosya yok.
Konsolda 404 olarak görünüyorlar (`/projeler/` ve `/blog/` sayfalarında).

**Ana sayfa skorunu düşürmüyorlar** — PageSpeed sadece `/` adresini ölçtü, o raporda
tek bir 404 yok. Ama `/projeler/` veya `/blog/`'a PageSpeed çekilirse Best
Practices'ten ~4 puan yer. Performanstan sıfır.

Promptlar hazır: `docs/GORSEL-PROMPTLARI.md`
Dosyalar `public/images/blog/` ve `public/images/oncesi-sonrasi/` altına atılınca:
```
npm run varyant   # 600/900/1200 varyantlarını üretir
npm run build
```

**8 hizmet OG görseli** de hiç üretilmedi — şu an `og-image.jpg`'ye düşüyorlar.
Kırık değil, sadece hepsi aynı görseli paylaşıyor.

---

## 3. Teklif ettiklerim, seçmedin

> Bunların hiçbiri **çürütülmedi**. Üçü hiç ölçülmedi bile — sadece senin
> kararını bekliyorlar. Yalnızca dördüncüsü (hero animasyonu) ölçüldü ve "düşük
> öncelik"e indi; o ölçüm de tek koşuydu, şu an yeniden ölçülüyor.

- **blog `guncelleme` alanı** — şu an `dateModified` yayın tarihine bağlı. Bir yazının
  metnini güncellersen Google "güncellendi" sinyalini almaz. `src/data/blog.js`'e
  opsiyonel alan + `routeMeta`/sitemap bağlantısı. Tek satırlık iş değil ama küçük.
- **`@type: DryCleaningOrLaundry`** — şu an `LocalBusiness`. schema.org'da halı/tekstil
  yıkamanın birebir karşılığı olan alt tip bu; alt tip her zaman daha güçlü sinyal.
  Tek satır. "Halı yıkama" mı "kuru temizleme" mi demek istediğine bağlı.
- **Bölge sayfalarındaki SSS şeması korumasız** — şu an 61/61 bölgede soru var, kırık
  bir şey yok. Ama SSS'siz bir bölge eklenirse boş `mainEntity` ile geçersiz bir
  `FAQPage` yayına çıkar. `faqSemasi(a.sss)` çağrısına koruma.
- **Hero giriş animasyonunu kaldırmak** — bugün ölçtüm, LCP'ye etkisi sadece
  **−80 ms**. Yani düşük öncelik, kozmetik bir tercih.

---

---

## 3b. `gemini-surumu` dalından kurtarılanlar (dal 26 Ağustos'ta SİLİNDİ)

Uzakta `gemini-surumu` diye bir dal duruyordu: 25 Ağustos 15:12'de ayrılmış,
main o zamandan beri 30 commit atmış. **Merge edilemezdi** — içeriği siliyordu:
`blogContent.js` -808 satır, `serviceAreas.js` -655, `serviceContent.js` -499,
`services.js` -272, `faq.js` -138 (toplam -3944). Renkleri de eski 20karot
paletindeydi (`#0B132B`, mavi `#2563EB`) ve fontu `Kanit` — rebrand öncesi.

Dal silindi. İçindeki üç işe yarar fikir aşağıda; **hiçbiri uygulanmadı**.

### (a) Hero metnini ön boyamaya gömmek — ASIL OLAN BU

Commit `96fca68`. Bu sabahki ölçümün işaret ettiği ~1950 ms'lik boşluğun
(FCP 872 ms → LCP 2824 ms) doğrudan hedefi: `vite.config.js > heroOnizleme`
bloğuna `<h1>` ve açıklama paragrafı da gömülüyor, böylece LCP öğesi olan metin
React'i beklemeden FCP anında boyanıyor.

Yaptığı, özetle:
- `.hero-on` → `display:flex; align-items:center`
- katmanlara `z-index` (img 1, ::after 2, içerik 3)
- `.hero-on-inner` (max-width 1280, padding), `.hero-on-h1`, `.hero-on-p` sınıfları
- `<h1>` içine `slide.title` + `titleAccent`, `<p>` içine
  `slide.description.replace(/<[^>]*>/g, '')`

UYARLARKEN ÜÇ ŞEY:
1. Renk/font GÜNCEL tasarıma göre olmalı (Outfit, `#0A1832`, altın `#E2AC4A`,
   lacivert `#10388C`) — o daldaki eski palete göre değil.
2. Ön boyama ile React'in bastığı hero **birebir** aynı olmak zorunda, yoksa
   React devralınca göz kırpma olur. `npm run seo` bunu zaten denetliyor
   ("HERO ÖN BOYAMA = REACT HERO"); denetimi de yeni alanları kapsayacak
   şekilde genişletmek gerekir.
3. O commit ön boyama `<img>`'inden **`srcset`'i düşürmüş** (sadece `sizes`
   bırakmış). Bu bir GERİLEME — öyle alınmamalı, srcset kalmalı.

### (b) Slayt 0'da giriş animasyonunu kaldırmak — (a) ile BİRLİKTE anlamlı

Aynı daldaki `HeroSection.jsx` değişikliği `animate-fade-in-up`'ı yalnızca ilk
slayttan kaldırıyor, diğer slaytlarda bırakıyor:

```jsx
className={`... ${slideIndex === 0 ? '' : 'animate-fade-in-up delay-200'}`}
```

Mantıklı: metin ön boyamada zaten görünüyorsa, React devralınca yeniden
fade-in yapması hem gereksiz hem göz kırpma üretir. Tek başına etkisi küçük
(ölçtüğüm −80 ms, o da tek koşu), ama (a) ile birlikte gerekli.

DİKKAT: o commit `HeroSection.jsx`'teki `{' '}` açıklamasını da silmiş —
H1 parçaları arasında boşluk olmazsa `textContent` kelimeleri birleştiriyor
ve Google H1'i bitişik okuyor. O yorum KALMALI, silinmemeli.

### (c) sharp ile yeniden sıkıştırma

> **YAPILDI (26 Ağustos).** `arac/gorsel-sikistir.mjs` + `npm run sikistir`
> yazıldı; q80 tavanı ölçülerek belirlendi, iki koruma eşiği var (en az %8
> kazanç, en az 36 dB PSNR). Öncesi/sonrası klasöründe 11 dosya yazıldı,
> 13'ü eşiklere takıldı. Ana sayfanın kaydırma yükü 1296 → 1121 KB.
> **Skoru etkilemez** — o görseller lazy ve 91'lik raporun ağ dökümünde yok.
> `logo-beyaz.webp` bilinerek atlandı: alfa kanallı, kazancı 3,4 KB (ölçüldü).

Dalda `scratch/compress_images.cjs` vardı: `public/images` altını gezip
`.webp` için `{ quality: 80, effort: 6 }`, `.jpg` için `{ quality: 82,
mozjpeg: true }` ile yeniden kodluyor, 1600px üstünü küçültüyor ve yalnızca
**küçüldüyse** yazıyor.

Bugün hâlâ geçerli bir ihtiyaç: yeni öncesi/sonrası görselleri ağır —
`salon-halisi-sonrasi.webp` 354 KB, `salon-halisi-oncesi.webp` 317 KB,
`yun-hali-sonrasi.webp` 253 KB (hepsi 1200x900). Ayrıca `logo-beyaz.webp`
17,6 KB (bkz. 1c).

Yapılırsa `arac/` altına düzgün bir betik olarak, `npm run` girdisiyle ve
ölçülmüş öncesi/sonrası tablosuyla yapılmalı — `scratch/` altında tek
kullanımlık kalmamalı.

## 4. Yayın sonrası, unutma

- Search Console'a yeni sitemap gönder
- GA4'te anahtar olayları işaretle (`telefon_tikla`, `whatsapp_tikla` vb. —
  GA4 zaten veri alıyor, dün `telefon_tikla` 1 kez geldi)
- SSL otomatik yenileme kontrolü — **26 Eylül 2026**'da doluyor

---

## 5. ÖLÇÜLMÜŞ UYGULAMA PLANI (26 Ağustos, 9 ajanlı iş akışı)

Dokuz ajan, 571 araç çağrısı, 1,86 saat. Dört mercek ölçtü, dört bağımsız
şüpheci çürütmeye çalıştı (3 iddia sağ çıktı, 1 düştü), biri sentezledi.
Ham çıktı geçici dosyadaydı; aşağısı kalıcı özeti.

### ① Hero METNİNİ ön boyamaya göm — kalan 9 puanın tek kaynağı

```
LCP  2780 ms (2756-2788)  ->  844 ms (840-848)   -1936 ms, 5+5 koşu, ayrık
CLS  0                    ->  0                   iki kolda da sıfır
```

Mekanizma enstrümante edildi: DCL 1709 -> React devraldı 1790 -> `<p>` DOM'a
girdi 1790 -> LCP 2796. **LCP öğesi ilk HTML'de hiç yok**; PageSpeed'in
`elementRenderDelay = 1141 ms`'i tam olarak bu.

Dosya: `vite.config.js:194-205` (`heroOnizleme`) — bugün yalnız `<img>` basıyor.
Bloğa rozet + `<h1>` + açıklama paragrafı + CTA girecek.

**ÜÇ TUZAK — biri atlanırsa kazancın tamamı gider:**

1. **ELLE HTML YAZMA.** Elle yazılan sürümde rozet/CTA eksik kalınca kutu
   9 px kaydı, CLS 0 -> 0,0098. SSR makinesi zaten kurulu:
   `arac/duman-testi.mjs:23-51` (Vite middleware + `ssrLoadModule` +
   `renderToString`, `MemoryRouter` içinde). `HeroSection.jsx:306` `<Link>`
   kullanıyor -> Router bağlamı ŞART.
2. **Animasyon sınıfları ön boyama kopyasından ÇIKACAK.** Blink, üzerinde
   etkin CSS animasyonu olan öğenin boya-zamanlama kaydını animasyon bitene
   kadar BASTIRIYOR. Ölçüldü: 2732 ms (std 81, n=7) vs 1812 ms (std 33, n=7)
   = **-920 ms**. Sınıflar kopyalanırsa metin HTML'de olsa bile kayıt üretmez.
3. **React tarafında slayt 0'ın animasyonu DÖRT yerde bastırılacak:**
   `HeroSection.jsx:281, 287, 296, 301`. İkisinde değil — yarım yapmak kazanç
   değil öğe kaydırması üretiyor (LCP `SPAN`'a ya da başlık logosuna kayıyor).

Ayrıca: ön boyama `<img>`'inin `srcset`'i KALACAK; `vite.config.js:1230`
`noscriptGovdesi` H1'i gereksizleşiyor (ham HTML'de iki `<h1>` olur);
`arac/seo-denetimi.mjs:158` denetimi yeni alanları kapsayacak şekilde
genişletilmeli (dikkat: `rgba()` eşlemesi yanlış alarm verebilir).

### ② CSS'i satır içi al — ①'DEN SONRA

`vite.config.js:1210` `writeBundle`. Kritik CSS **ÇIKARMA** — dosyanın tamamı
9.541 bayt brotli. ①'den sonra **-480 ms** (844 -> 364). ①'den önce yalnız -64 ms.

**Bedeli:** CLS 0,000 -> **0,0186** (metin 364 ms'de yedek fontla boyanıyor,
Outfit 1187 ms'de gelince akıyor). Eşik altında ama bugün 0'dayız.
**KAPI: uygula, 5 koşuda CLS ölç, 0,05'i aşarsa geri al.**

### ③④⑤ Bayt işleri — LCP'ye etkisi 0, ölçüldü

- **③ hero `1200w` basamağı:** 390x3'te -268 ms, -96 KB. ①'den sonra LCP
  kazancının buharlaşması bekleniyor (birleşik kol ölçülmedi). ÖNCE tek kaynak:
  `heroSlides.js`'e `heroSrcset()` named export, sonra `vite.config.js:163` ve
  `HeroSection.jsx:211` oradan beslensin — üç kopyadan biri geride kalırsa
  tarayıcı hero'yu İKİ KEZ indiriyor (ölçüldü) ve bu ne Lighthouse'da ne
  LCP'de görünüyor.
- **④ `ServiceCard.jsx:38-41` srcSet'e `700w` + `1100w`:** LCP 0 ms, ama
  DPR3'te **-113,8 KB**. `sizes` DEĞİŞMESİN, suçlu o değil. ①'den sonra
  ③'ten daha iyi etki/risk oranı: tek satır, senkron tehlikesi yok.
- **⑤ `logo-beyaz.webp` + `logo.webp`:** q82 / **alphaQuality:70** / effort:6
  -> 17,20 -> **9,80 KB (-%43)**, 41,8 dB. Kazanç `quality`'den değil
  **`alphaQuality`**'den geliyor; `npm run sikistir` alfa dosyalarını bilerek
  atlıyor, bu yüzden elle yapılacak. Gözle bir kez onaylandı (26 Ağustos).

### ⑥ OPSİYONEL — `gtag.js`'i `load` + idle'a ertele

v81 build'inde **-404 ms** (2892 [n=21] -> 2488 [n=7], ayrık).

**Görünürdeki çelişki çözüldü:** §1a'daki 20karot A/B'si "128 KB fark = 0 ms"
diyor, bu bulgu "-404 ms" diyor — ikisi de doğru. AW'nin LCP katkısı **0**
(konteyner ~2870 ms'de, LCP'den SONRA iniyor); GA4'ün tek başına maliyeti
**+424 ms** (`gtag.js` 170 ms'de, React paketiyle AYNI ANDA). 20karot farkı
AW'ydi, bu bulgunun farkı GA4.

**Neden opsiyonel:** Lantern kredi vermiyor, hafif ceza yazıyor (simLCP
6346 -> 6503, PERF 76 -> 75) — PageSpeed puanı OYNAMAZ. BP zaten 100,
TBT zaten 57 ms. Ve ①'den sonra kazancın çoğu yeniyor: bayt duyarlılığı
10,1 -> **0,34 ms/KB**.

**ZORUNLU ŞART:** `window.dataLayer` + `function gtag()` + `gtag('js')` +
`gtag('config')` satırları SENKRON KALACAK. Stub da ertelenirse
`src/utils/analytics.js:83` çağrıyı **sessizce düşürüyor** — 4 koşunun 3'ünde
ilk `page_view` kayboldu, `dataLayer` kuyruğunda izi bile yok. Yarış koşulu,
elle QA'de yakalanmaz.

### YAPILMAYACAKLAR — ölçülüp elendi

| ne | neden |
|---|---|
| `.hero-on img` -> `height:calc(100% - 1px)` | ①'in kazancını GERİ ALIR. Kök neden bilgisi değerli (§1d'yi yanıtlıyor) ama eylem değil |
| `.hero-foto` -> `calc(100svh - 1px)` | LCP'ye katkı 0 **ve** hero altında görünür kıl çizgi |
| `latin-ext` preload'unu kaldırmak | **ÇÜRÜTÜLDÜ.** -508 ms metrik yeniden atfıydı; benzeri benzere kontrol -30 ms, aralıklar örtüşüyor. Bedeli gerçek: `ğ` 47 rotada ~530 ms yedek fontla |
| gtag'ı ilk etkileşimde yüklemek | Etkileşimsiz ziyaretlerde HİÇ `page_view` gitmiyor (ilk yükleme 0, menü 0, SPA 0) |
| gtag'ı `load`+3000 ms'ye atmak | PUAN ŞİŞİRME: etiket Lighthouse penceresi kapandıktan sonra iniyor. Gerçek tarayıcıda TBT değişmiyor, son uzun görev 2609 ms daha kötü |
| `manualChunks`'ı bölmek | Ayrılacak parça yok: veri-router API'si sıfır kez geçiyor, zaten ağaç budamayla düşmüş. "33 KB kullanılmıyor" çalışmayan dallar, ayrı modül değil |
| preconnect'e `crossorigin` | Lighthouse'un tavsiyesi YANLIŞ: gtag `<script src>` no-CORS, crossorigin'li preconnect ayrı soket açar ve script kullanamaz |
| `<link rel="manifest">` kaldırmak | Manifest HİÇ istenmiyor (canlıda 15 sn'de 27 istek, manifest 0). 221 ms'lik zincir Lighthouse'un kendi artefaktı |
| `yuklenecek` kümesini `{0}` yapmak / kartları IntersectionObserver'a taşımak | 0 ms (5 koşu, 2 cihaz, 4 kol). Karşılığında slayt geçişinde ~1238 ms fotoğrafsız kare |

### ÖLÇÜM GÜRÜLTÜSÜYDÜ — karara dayanak yapmayın

| iddia | gerçek |
|---|---|
| "animasyon -80 ms" (tek koşu) | **-920 ms** (n=7+7, ayrık). -80 gürültüydü, gerçek değer 11 kat büyük — ve ①'den sonra 0 |
| 1 px düzeltmesi, kısıtsız ağda | -20 ms, yayılımın içinde |
| yalnız Ads config'ini ertele | +12 ms = kazanç yok |
| `ertele-load`'un TBT kazancı | -9 ms = yok |

### Beklenen sonuç

**Performance 91 -> 97-100** (kalan 9 puanın tamamı LCP). Sert taban: LCP
tanım gereği FCP'den önce olamaz, FCP bugün 1,4 sn.

> **Bu bir TAHMİN.** Rakam olarak vermeden önce yamalı build üzerinde tek bir
> yerel Lighthouse koşusu yapın — harness kurulu ve canlıyı birebir yeniden
> üretebiliyor (yerel PERF 76 / LCP 6314 ms ↔ canlı 75 / 6,0 sn).

---

## Doğrulama komutları

```
npm run duman     # 90 rota SSR duman testi
npm run seo       # SEO denetimi (hero ön boyama, build meta = React meta)
npm run lint
npm run varyant   # görsel varyantları + boyut denetimi
```
