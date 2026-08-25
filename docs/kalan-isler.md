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

### 1a. Asıl suçlu: iki Google etiketi (KARAR SENİN)

| | |
|---|---|
| gtag GA4 `G-FF3630L3MG` | 167 KB transfer, 70 KB'ı kullanılmıyor, 155 ms CPU |
| gtag Ads `AW-18007504148` | 150 KB transfer, 60 KB'ı kullanılmıyor, 185 ms CPU |
| **toplam** | **317 KB** = 716 KB'lık sayfanın **%44'ü** |

Ölçtüm (Lighthouse ayarları: Slow 4G + 4x CPU):

```
şu anki hâli            LCP 2900 ms
animasyonlar kapalı     LCP 2820 ms   (-80 ms → animasyon suçlu DEĞİL)
googletagmanager engel  LCP 2496 ms   (-404 ms)
ikisi birden            LCP 2496 ms
```

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
