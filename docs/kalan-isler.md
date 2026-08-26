# Kalan İşler — 25 Ağustos 2026 akşamı

Çalışma ağacı temiz, her şey commit'li. Son commit `0e4349d`.

---

## 0. ÖNCE BU — canlıda eski sürüm var

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

### 1d. Bakılmadı

- `assets/index-*.css` 9,6 KB render blokluyor — kritik CSS satır içi alınabilir mi
- `vendor-*.js` 70 KB transfer / 228 KB ham, 33 KB kullanılmıyor, 182 ms CPU
- LCP öğesi neden hero **görseli** değil de hero **paragrafı**? (Görsel 6 kat büyük
  ve HTML'de statik duruyor, 107 ms'de iniyor. Chrome onu aday saymıyor, sebebi bulunamadı.)
- googletagmanager preconnect'i "kullanılmadı" diyor, oysa gtag oradan 77 ms'de iniyor

Bunları araştıran iş akışı yazıldı ama **yarıda durduruldu**. Script duruyor,
kaldığı yerden devam ettirilebilir:
`~/.claude/projects/-workspace-hy/3b3eecb7-0444-4a1a-9b1e-0052a301fe2d/workflows/scripts/pagespeed-lcp-audit-wf_83282447-69f.js`

---

## 2. Eksik görseller — 17 dosya (senin kotan)

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

## Doğrulama komutları

```
npm run duman     # 90 rota SSR duman testi
npm run seo       # SEO denetimi (hero ön boyama, build meta = React meta)
npm run lint
npm run varyant   # görsel varyantları + boyut denetimi
```
