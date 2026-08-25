# Denizli Tomay Halı Yıkama — Statik Web Sitesi

**Domain:** denizlihaliyikama.net.tr
**Firma:** Denizli Tomay Halı Yıkama (kısa: Tomay Halı Yıkama) — Merkezefendi / Denizli
**Sektör:** Halı, koltuk, stor perde, yorgan/battaniye, yatak/baza yıkama ve temizliği
**Teknoloji:** React 19 + Vite 8 + Tailwind CSS v4 + React Router 7
**Deploy:** Statik build (`npm run build`) → `yayin/<domain>-v<surum>/` klasörü FTP ile hostinge

> **Yayına almadan önce mutlaka [`DEPLOY-ONCESI.md`](./DEPLOY-ONCESI.md) dosyasını okuyun.**
> Gerçek veri bekleyen tüm alanlar (koordinat, Google İşletme Profili, GA4, dönüşüm
> etiketleri, görseller) ve **taşınma riskleri** orada listelenmiştir.

---

## Kurulum

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # yayin/<domain>-v<surum>/ klasörü + rapor/<...>.json künyesi
npm run preview    # build çıktısını lokalde test et
npm run lint       # oxlint
```

Yardımcı araçlar (hepsi `arac/` altında, build'e girmez):

```bash
npm run duman      # her rotanın React bileşenini gerçekten render eder (prebuild'de otomatik çalışır)
npm run seo        # en son yayın klasörünü denetler: sitemap, canonical, robots, llms.txt, OG, JSON-LD
npm run varyant    # görsel srcset varyantlarını denetler / üretir (sharp gerekir)
node arac/model-testi/denetle.mjs   # bölge metinleri arası benzerlik ölçümü
```

`npm run build` her çağrıda sürümü bir artırır (v1, v2, v3…) ve eski sürümler diskte
kalır. Sürümü sabitlemek için `src/data/siteConfig.js` → `yayinSurumu` alanına sayı
yazın. Gerekçesi ve künye dosyaları: `DEPLOY-ONCESI.md`.

---

## İki tek kaynak — biri değerler, biri olgular

**`src/data/siteConfig.js` — makine değerleri.** Firma adı, telefon, e-posta, adres,
domain, çalışma saatleri, analytics kimlikleri, kuruluş yılı, SEO başlık kalıbı.
Buradaki bir değişiklik şunların hepsine otomatik yansır:

- Tüm sayfalardaki metin ve linkler
- `index.html` meta etiketleri, Open Graph, Twitter Card
- JSON-LD yapılandırılmış veri (Schema.org LocalBusiness)
- `sitemap.xml`, `robots.txt`, `llms.txt`, `llms-full.txt`, `.htaccess` (hepsi build sırasında üretilir)

**`docs/olgu-sayfasi.md` — doğrulanmış olgular.** Site metnini yazan herkesin (insan
ya da model) kullanabileceği tek olgu kaynağı: makine parkı, yıkama süreci, ticari
koşullar, ilçe ayrım eksenleri, yasak ifadeler. **Orada yazmayan bir bilgi sitede de
yazmaz.** Sayı, sertifika, ödül, "X yıldır lider" gibi ifadelerin karşılığı yoksa
uydurmadır.

Kaynağı olmayan alan `siteConfig.js` içinde `null`/boş bırakılır — uydurma değer
yazılmaz. `npm run dev` çalıştırdığınızda eksik alanların listesi tarayıcı konsoluna
uyarı olarak düşer.

`index.html` içindeki `%SITE_*%` belirteçlerini elle doldurmayın —
`vite.config.js` içindeki `seoFromConfig` eklentisi build sırasında doldurur.

---

## Proje Yapısı

```
hy/
├── public/
│   ├── favicon.svg                 # rulo halı kesiti motifi
│   ├── manifest.json               # PWA manifest
│   ├── fonts/                      # Outfit (kendi sunucumuzdan)
│   └── images/
│       ├── BENIOKU.md              # ⭐ hangi klasör hangi dosya adını + varyantı bekliyor
│       ├── logo/                   # logo, logo-beyaz, og-image
│       ├── hero/                   # hero slider görselleri (-800 varyantlı)
│       ├── hizmetler/              # hizmet görselleri (<slug>.webp + -600/-900)
│       ├── blog/                   # yazı görselleri (<slug>.webp + -600/-900)
│       ├── bolgeler/               # ilçe/mahalle görselleri (BOŞ — bkz. DEPLOY-ONCESI)
│       ├── oncesi-sonrasi/         # öncesi/sonrası sürgüsü (BOŞ)
│       └── og/                     # sayfa başına 1200×630 paylaşım görseli (BOŞ)
├── src/
│   ├── index.css                   # ⭐ Tailwind v4 + @theme (RENGİN TEK KAYNAĞI) + bileşen sınıfları
│   ├── App.jsx                     # Router + layout
│   ├── components/
│   │   ├── Icon.jsx                # ⭐ merkezi SVG ikon sistemi (49 ikon) — emoji YOK
│   │   ├── Seo.jsx                 # ⭐ sayfa bazlı canonical/başlık/OG
│   │   ├── Logo.jsx                # logo (dosya yoksa gömülü SVG işarete düşer)
│   │   ├── SmartImage.jsx          # ⭐ görsel yoksa tasarım yer tutucusu gösterir
│   │   ├── BeforeAfter.jsx         # öncesi/sonrası sürgüsü
│   │   ├── ProcessSteps.jsx        # numaralı süreç adımları
│   │   ├── MapEmbed.jsx            # harita (placeId yoksa adres aramasına düşer)
│   │   ├── ConversionTracking.jsx  # telefon/WhatsApp/form tıklama ölçümü
│   │   ├── PageHeader.jsx          # iç sayfaların ortak başlık bloğu
│   │   ├── Header.jsx              # sticky header, dropdown, mobil menü
│   │   ├── Footer.jsx              # 4 sütunlu footer
│   │   ├── HeroSection.jsx         # hero
│   │   ├── ServiceCard.jsx         # görselli hizmet kartı
│   │   ├── StatsSection.jsx        # animasyonlu sayaçlar
│   │   ├── CTASection.jsx          # telefon + WhatsApp CTA
│   │   └── ScrollToTop.jsx         # sayfa geçişinde yukarı kaydır
│   ├── pages/                      # Home, Services, ServiceDetail, ServiceAreas,
│   │                               # ServiceAreaDetail, Blog, BlogPost, Faq, Projects,
│   │                               # About, Contact, Legal, NotFound
│   ├── data/
│   │   ├── siteConfig.js           # ⭐ TÜM firma bilgileri
│   │   ├── services.js             # 8 hizmet (slug'lar indeksli URL'lerle hizalı)
│   │   ├── serviceContent.js       # hizmet sayfalarının tam metni
│   │   ├── bolgelerIndex.js        # 61 bölgenin kimlik alanları (istemci tarafı)
│   │   ├── bolgeler/<slug>.js      # ⭐ her ilçe/mahallenin KENDİ metni — burası düzenlenir
│   │   ├── serviceAreas.js         # bölge indeksi + metinlerin BİRLEŞİMİ (elle düzenlenmez)
│   │   ├── blog.js / blogContent.js # 11 yazı: hafif indeks + tam metin
│   │   ├── routeMeta.js            # build zamanı rota meta bilgisi (bileşenden import ETMEYİN)
│   │   ├── faq.js, legal.js, surec.js, about.js, projects.js, heroSlides.js
│   └── utils/links.js              # harita / WhatsApp / sosyal medya link üreticileri
├── arac/                           # duman testi, SEO denetimi, görsel varyant, model testi
├── docs/
│   ├── olgu-sayfasi.md             # ⭐ doğrulanmış olgu kaynağı
│   ├── GORSEL-PROMPTLARI.md        # görsel üretim istemleri
│   └── yazi-tipi.md                # font kararı
├── index.html                      # %SITE_*% belirteçli şablon
├── vite.config.js                  # Tailwind + chunk ayrımı + SEO/301/llms.txt üretici eklenti
└── DEPLOY-ONCESI.md                # ⭐ yayın öncesi + TAŞINMA kontrol listesi
```

---

## ⚠️ URL Yapısı — Slug'ları Değiştirmeyin

`denizlihaliyikama.net.tr` şu anda **yayında olan ve Google'da indeksli PHP tabanlı bir
site.** Bu proje onun yerini alıyor. Canlı sitenin sitemap'inde **80 indeksli URL** var
(2026-08-25 ölçümü) ve hepsinin karşılığı üretiliyor; **404'e düşen yok.**

Bu yüzden şu dosyalardaki `slug` alanları **indeksli URL'lerdir**, değiştirmek sıralama
kaybına yol açar:

- `src/data/services.js` → `/hizmetler/{slug}/`
- `src/data/bolgelerIndex.js` → `/hizmet-bolgeleri/{slug}/`
- `src/data/blog.js` → `/blog/{slug}/` (dokuz slug canlı sitede indeksli)

Yönlendirmeler `vite.config.js` içindeki `redirects` dizisinden yayın klasöründeki
`.htaccess` dosyasına otomatik yazılır. Yolu değişmeyen adresler o dizide **yok** —
onları sondaki eğik çizgiyi zorunlu kılan kural hallediyor. Detay ve doğrulama
adımları: [`DEPLOY-ONCESI.md`](./DEPLOY-ONCESI.md) § 0.

Build, 301 kurallarını gerçek rota listesiyle **çapraz kontrol eder**: bir kural gerçek
bir sayfanın adresine uyarsa build kırılır. (Bir kez yaşandı: "yeni sitede blog yok"
diye yazılmış bir kural, blog eklenince `/blog/` dizinini sessizce öldürüyordu.)

### Sayfa bazlı SEO

Site tek sayfa uygulaması; sunucu her adres için aynı HTML'i döndürseydi tüm alt
sayfalar Google'a "asıl adresim ana sayfa" derdi ve WhatsApp/Facebook önizlemeleri
ana sayfayı gösterirdi (sosyal medya botları JavaScript çalıştırmaz).

İki katman birden çözüyor:

- **Build zamanı:** `src/data/routeMeta.js` üzerinden **her rota için ayrı bir
  `index.html`** üretilir; meta, canonical ve JSON-LD gömülü gelir.
- **İstemci tarafı:** `src/components/Seo.jsx` sayfa geçişlerinde aynı etiketleri
  günceller.

**Yeni sayfa eklerken üçünü birden yapın:** `App.jsx` rotası, `<Seo>` bileşeni ve
`vite.config.js` içindeki liste (`staticRoutes` / `services` / `serviceAreas` / `blog`).
Sonuncusu atlanırsa o adres artık yanlış meta ile değil, **doğrudan 404** ile cevap
verir — `.htaccess` bilinçli olarak yumuşak 404 üretmiyor.

---

## Tasarım Sistemi

### Palet: Derin Lacivert + Altın

Renkler logodan **ölçülerek** alındı (`public/images/logo/logo.webp` baskın pikselleri).

> **Rengin tek kaynağı `src/index.css` içindeki `@theme` bloğudur.**
> `siteConfig.js` → `colors` yalnızca belgelemedir, koda beslenmez.

| Token | Hex | Kullanım |
|---|---|---|
| `dark` | `#0A1832` | derin lacivert — koyu zeminler |
| `dark-light` | `#12244A` | açık lacivert zemin |
| `accent` | `#10388C` | **lacivert** — YALNIZCA açık zeminde vurgu |
| `accent-light` | `#1A4BB0` | açık lacivert |
| `primary` | `#E2AC4A` | **altın** — YALNIZCA koyu zeminde vurgu, dolgu butonlar |
| `primary-light` | `#EFCC88` | açık altın |
| `surface` | `#F6F3EC` | sıcak krem — açık zeminler |

### ⚠️ Kontrast kuralı — buna uyun

Ayrım rengin **adına** değil **luminansına** dayanıyor: altın açık zeminde okunmaz,
lacivert koyu zeminde okunmaz. Ölçülmüş oranlar (WCAG 2.1, AA metin sınırı 4.5):

| Zemin | Metin/ikon rengi | Kontrast |
|---|---|---|
| Koyu (derin lacivert) | `text-primary` (altın) | 8.60 ✅ |
| Açık (krem/beyaz) | `text-accent` (lacivert) | 9.64 / 10.68 ✅ |
| Altın dolgu üstü | `text-dark` | 8.60 ✅ |
| Lacivert dolgu üstü | beyaz | 10.68 ✅ |
| Açık (krem) | ~~`text-primary`~~ (altın) | 1.87 ❌ **kullanmayın** |
| Koyu | ~~`text-accent`~~ (lacivert) | 1.65 ❌ **kullanmayın** |

Tam ölçüm listesi `src/index.css` başındaki tablodadır. Aynı kural gradient metinler
için de geçerli: altın gradient → koyu zemin, lacivert gradient → açık zemin.

### İkonlar — emoji kullanılmaz

Tüm ikonlar `src/components/Icon.jsx` içinde tanımlıdır (49 ikon) ve `currentColor`
ile bulundukları yerin rengini alır:

```jsx
<Icon name="carpetRoll" className="w-6 h-6 text-accent" />
```

Emoji kullanılmamasının nedeni: platformdan platforma farklı render edilir, marka
rengini almaz, boyutu kontrol edilemez, ekran okuyucularda gürültü yapar.

### ⚠️ CSS yazarken: özel kurallar mutlaka `@layer` içinde olmalı

`src/index.css` içine **katmansız (unlayered)** CSS yazmayın. CSS cascade kurallarına
göre katmansız bir bildirim, `@layer utilities` içindeki **tüm** Tailwind utility'lerini
ezer. Bu iskelette daha önce şu satır yüzünden sitedeki bütün `p-*`, `m-*`, `px-*`,
`pt-*` sınıfları çalışmıyordu:

```css
/* ❌ ASLA — tüm Tailwind boşluk utility'lerini öldürür */
* { margin: 0; padding: 0; box-sizing: border-box; }
```

(Tailwind preflight bunu zaten `@layer base` içinde yapıyor, tekrarlamaya gerek yok.)

Yeni kural eklerken: temel stiller → `@layer base`, bileşen sınıfları → `@layer components`,
yardımcı sınıflar → `@layer utilities`.

---

## Görsel Ekleme — varyantı unutmayın

`public/images/...` altına **beklenen isimle** dosyayı atmanız yeterli, kod değişikliği
gerekmez. Dosya yoksa `SmartImage` tasarlanmış bir yer tutucu gösterir; kırık görsel
ikonu çıkmaz.

**Ama ana dosya tek başına yetmez.** Kod `srcset`'i dosya adından türetiyor
(`hero-1.webp` → `hero-1-800.webp`, `<slug>.webp` → `<slug>-600.webp` / `-900.webp`).
Varyant üretilmezse tarayıcı adayı önceden seçer, dosya gelmez ve **görsel tamamen
kaybolur** — "en yakın boya düşmez". Bir kez yaşandı: `blog/*-900.webp` üretilmediği
için blog yazı sayfalarında görseller ölmüştü.

```bash
npm i -D sharp                            # yalnızca üretim için; build'de GEREKMEZ
npm run varyant                           # eksikleri listeler, sharp varsa üretir
node arac/gorsel-varyant.mjs --denetle    # yalnız denetle (eksik varsa çıkış kodu 1)
```

Hangi klasörün hangi dosya adını ve varyantı beklediği: **`public/images/BENIOKU.md`**.
Eksik görsel listesi: [`DEPLOY-ONCESI.md`](./DEPLOY-ONCESI.md) § 2.

---

## Doğrulama — neyi nasıl kontrol edersiniz

Bu bölüm **iddia değil yöntem** listesidir. Rakamlar en son yayın klasöründen
(`yayin/<domain>-v<surum>/`) ve `rapor/<domain>-v<surum>.json` künyesinden okunur.

| Ne | Nasıl |
|---|---|
| Rota çöküyor mu | `npm run duman` — her rotayı gerçekten render eder (`prebuild`'de otomatik) |
| SEO çıktısı tutarlı mı | `npm run seo` — sitemap/canonical/robots/llms.txt/OG/JSON-LD |
| Görsel varyantları tam mı | `node arac/gorsel-varyant.mjs --denetle` |
| Bölge metinleri birbirinin kopyası mı | `node arac/model-testi/denetle.mjs` — eşiği kendi verinizden hesaplar |
| Lint | `npm run lint` (oxlint) |
| Hangi kod hangi sürüme girdi | `rapor/<domain>-v<surum>.json` — git commit'iyle kayıtlı |

Son build çıktısından okunan durum:

- **90 sayfa** üretiliyor: ana sayfa + 8 hizmet + 19 ilçe + 42 mahalle + 11 blog yazısı
  + hizmet/bölge/blog hub'ları + hakkımızda, iletişim, projeler, SSS, gizlilik, şartlar.
- `sitemap.xml` **90 URL** listeliyor — üretilen sayfa sayısıyla birebir.
- Her rotanın kendi fiziksel `index.html`'i var; bu yüzden `.htaccess` SPA
  yönlendirmesi kullanmıyor ve bilinmeyen adresler **gerçek 404** dönüyor.
- JSON-LD uydurma `aggregateRating` içermiyor: Google puanı bilinmediği için
  `rating` null, ayrıca `showInSchema: false` (kendi puanını işaretlemek
  "self-serving review" sayılıyor).

**Yayına çıkmadan önce kapatılması gereken eksikler `DEPLOY-ONCESI.md`'dedir** —
koordinat, Google İşletme Profili, GA4, Search Console doğrulaması, dönüşüm etiketleri
ve bölge/öncesi-sonrası görselleri hâlâ boş.
