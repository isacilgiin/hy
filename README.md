# 20 Karot — Statik Web Sitesi

**Domain:** 20karot.com.tr
**Firma:** 20 Karot — Denizli
**Sektör:** Beton delme, kesme, kırma (karot) hizmetleri
**Teknoloji:** React 19 + Vite 8 + Tailwind CSS v4 + Swiper
**Deploy:** Statik build (`npm run build`) → `yayin/<domain>-v<surum>/` klasörü FTP ile hostinge

> **Yayına almadan önce mutlaka [`DEPLOY-ONCESI.md`](./DEPLOY-ONCESI.md) dosyasını okuyun.**
> Gerçek veri bekleyen tüm alanlar (istatistikler, koordinat, sosyal medya, görseller)
> orada listelenmiştir.

---

## Kurulum

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # yayin/<domain>-v<surum>/ klasörü + rapor/<...>.json künyesi
npm run preview    # build çıktısını lokalde test et
npm run lint       # oxlint
```

---

## Tek Kaynak: `src/data/siteConfig.js`

Firma adı, telefon, adres, domain, renkler, istatistikler — **hepsi tek dosyada.**
Buradaki bir değişiklik şunların hepsine otomatik yansır:

- Tüm sayfalardaki metin ve linkler
- `index.html` meta etiketleri, Open Graph, Twitter Card
- JSON-LD yapılandırılmış veri (Schema.org LocalBusiness)
- `sitemap.xml` ve `robots.txt` (build sırasında üretilir)

`index.html` içindeki `%SITE_*%` belirteçlerini elle doldurmayın —
`vite.config.js` içindeki `seoFromConfig` eklentisi build sırasında doldurur.

---

## Proje Yapısı

```
20karot-static-web/
├── public/
│   ├── favicon.svg                 # karot ucu motifi (çalışır durumda)
│   ├── manifest.json               # PWA manifest
│   ├── llms.txt                    # LLM / AI arama motorları için firma bilgisi
│   ├── .well-known/llms.txt        # alternatif erişim yolu
│   └── images/
│       ├── logo/                   # logo, apple-touch-icon, og-image
│       ├── hero/                   # hero slider görselleri
│       ├── hizmetler/              # hizmet görselleri (slug adıyla)
│       └── projeler/               # proje fotoğrafları
├── src/
│   ├── index.css                   # Tailwind v4 + tema + animasyonlar + bileşen sınıfları
│   ├── App.jsx                     # Router + layout
│   ├── components/
│   │   ├── Icon.jsx                # ⭐ merkezi SVG ikon sistemi (45 ikon) — emoji YOK
│   │   ├── Logo.jsx                # logo (dosya yoksa gömülü SVG işarete düşer)
│   │   ├── SmartImage.jsx          # ⭐ görsel yoksa tasarım yer tutucusu gösterir
│   │   ├── PageHeader.jsx          # iç sayfaların ortak başlık bloğu
│   │   ├── Header.jsx              # sticky header, dropdown, mobil menü
│   │   ├── Footer.jsx              # 4 sütunlu footer
│   │   ├── HeroSection.jsx         # Swiper slider'lı hero
│   │   ├── ServiceCard.jsx         # görselli hizmet kartı
│   │   ├── StatsSection.jsx        # animasyonlu sayaçlar
│   │   ├── CTASection.jsx          # telefon + WhatsApp CTA
│   │   ├── ProjectGallery.jsx      # lightbox'lı galeri
│   │   └── ScrollToTop.jsx         # sayfa geçişinde yukarı kaydır
│   ├── pages/                      # Home, Services, ServiceDetail, Projects, About,
│   │                               # Contact, ServiceAreas, ServiceAreaDetail, NotFound
│   ├── data/
│   │   ├── siteConfig.js           # ⭐ TÜM firma bilgileri
│   │   ├── services.js             # 10 hizmet (slug'lar indeksli URL'lerle hizalı)
│   │   ├── serviceAreas.js         # ⭐ 20 ilçe — her biri ayrı sayfa
│   │   ├── projects.js             # proje galerisi
│   │   ├── heroSlides.js           # hero slider içerikleri
│   │   └── about.js                # timeline + değerler
│   └── utils/links.js              # harita / WhatsApp / sosyal medya link üreticileri
├── index.html                      # %SITE_*% belirteçli şablon
├── vite.config.js                  # Tailwind + chunk ayrımı + SEO üretici eklenti
└── DEPLOY-ONCESI.md                # ⭐ yayın öncesi + TAŞINMA kontrol listesi
```

---

## ⚠️ URL Yapısı — Slug'ları Değiştirmeyin

`20karot.com.tr` yayında olan ve Google'da **indeksli** bir WordPress sitesiydi.
Bu proje onun yerini alıyor. Eski sitemap'teki **64 URL'nin tamamı** karşılanıyor:
30'u aynı adreste çalışıyor, 34'ü 301 ile yönlendiriliyor, **404'e düşen yok.**

Bu yüzden şu iki dosyadaki `slug` alanları **indeksli URL'lerdir**, değiştirmek
sıralama kaybına yol açar:

- `src/data/services.js` → `/hizmetler/{slug}/`
- `src/data/serviceAreas.js` → `/hizmet-bolgeleri/{slug}/`

Yönlendirmeler `vite.config.js` içindeki `redirects` dizisinden yayın klasöründeki `.htaccess`
dosyasına otomatik yazılır. Detay: [`DEPLOY-ONCESI.md`](./DEPLOY-ONCESI.md).

### Sayfa bazlı SEO

index.html tek statik dosya olduğu için canonical etiketi tüm sayfalarda ana sayfayı
gösteriyordu — yani alt sayfalar Google'a "asıl adresim ana sayfa" diyordu.
`src/components/Seo.jsx` bunu her sayfada düzeltir. **Yeni sayfa eklerken `<Seo>`
bileşenini eklemeyi unutmayın**, yoksa o sayfa yanlış canonical ile yayınlanır.

---

## Tasarım Sistemi

### Palet: Kömür + Bordo + Altın

| Token | Hex | Kullanım |
|---|---|---|
| `dark` | `#14100F` | kömür — koyu zeminler |
| `dark-light` | `#1F1917` | koyu grafit |
| `accent` | `#6E1B2E` | **bordo** — açık zeminde vurgu rengi |
| `accent-light` | `#8E2B40` | açık bordo |
| `primary` | `#C8A24A` | **altın** — koyu zeminde vurgu, dolgu butonlar |
| `primary-light` | `#E3C77E` | açık altın |
| `surface` | `#F2EDE7` | krem — açık zeminler |

### ⚠️ Kontrast kuralı — buna uyun

Altın, açık zeminde **okunmaz** (kontrast 2.07:1, WCAG AA sınırı 4.5:1).

| Zemin | Metin/ikon rengi | Kontrast |
|---|---|---|
| Koyu (kömür) | `text-primary` (altın) | 7.9 : 1 ✅ |
| Açık (beyaz/krem) | `text-accent` (bordo) | 9.7 : 1 ✅ |
| Açık (beyaz/krem) | ~~`text-primary`~~ (altın) | 2.1 : 1 ❌ **kullanmayın** |
| Altın dolgu üstü | `text-dark` (kömür) | 7.9 : 1 ✅ |
| Bordo dolgu üstü | beyaz | 11.3 : 1 ✅ |

Aynı kural gradient metinler için de geçerli:
`.text-gradient` (altın) → koyu zemin · `.text-gradient-accent` (bordo) → açık zemin.

### İkonlar — emoji kullanılmaz

Tüm ikonlar `src/components/Icon.jsx` içinde tanımlıdır ve `currentColor` ile
bulundukları yerin rengini alır:

```jsx
<Icon name="drill" className="w-6 h-6 text-accent" />
```

Emoji kullanılmamasının nedeni: platformdan platforma farklı render edilir,
marka rengini almaz, boyutu kontrol edilemez, ekran okuyucularda gürültü yapar.

### ⚠️ CSS yazarken: özel kurallar mutlaka `@layer` içinde olmalı

`src/index.css` içine **katmansız (unlayered)** CSS yazmayın. CSS cascade kurallarına
göre katmansız bir bildirim, `@layer utilities` içindeki **tüm** Tailwind utility'lerini
ezer. Bu projede daha önce şu satır yüzünden sitedeki bütün `p-*`, `m-*`, `px-*`, `pt-*`
sınıfları çalışmıyordu:

```css
/* ❌ ASLA — tüm Tailwind boşluk utility'lerini öldürür */
* { margin: 0; padding: 0; box-sizing: border-box; }
```

(Tailwind preflight bunu zaten `@layer base` içinde yapıyor, tekrarlamaya gerek yok.)

Yeni kural eklerken: temel stiller → `@layer base`, bileşen sınıfları → `@layer components`,
yardımcı sınıflar → `@layer utilities`.

---

## Görsel Ekleme

`public/images/...` altına **beklenen isimle** dosyayı atmanız yeterli — kod değişikliği
gerekmez. Dosya yoksa `SmartImage` bileşeni tasarlanmış bir yer tutucu gösterir,
kırık görsel ikonu asla çıkmaz. Tam dosya listesi: [`DEPLOY-ONCESI.md`](./DEPLOY-ONCESI.md).

---

## Doğrulama Durumu

### ⚠️ Önce şunu bilin: ana sayfadaki 4 rakam yer tutucudur

`10+ Yıl Tecrübe`, `750+ Tamamlanan Proje`, `500+ Mutlu Müşteri`, `8+ Uzman Kadro`
uydurma sayılardır ve şu an hero'da, istatistik şeridinde, footer metninde ve
Hakkımızda yazısında **gerçekmiş gibi görünüyor**. `src/data/siteConfig.js` →
`stats` bölümünü gerçek rakamlarınızla değiştirmeden yayına çıkmayın.
Aynı şey `src/data/about.js` → `foundedYear` (2015) için de geçerli.

### Teknik doğrulama — Chromium 1440×900 ve 390×844

- ✅ Eski sitemap'teki 64 indeksli URL: 30 aynı adreste + 34 yönlendirme, **0 kırık**
- ✅ Her sayfa kendi canonical'ını veriyor (12 rota tek tek doğrulandı)
- ✅ 12 rota × 2 ekran boyutu — konsol hatası yok
- ✅ Yatay taşma yok (her sayfa, her boyut)
- ✅ Sabit header hiçbir sayfada içeriğin üstüne binmiyor
- ✅ Tailwind boşluk utility'leri çalışıyor (`p-6` → 24px doğrulandı)
- ✅ JSON-LD geçerli JSON, uydurma `aggregateRating`/`geo` içermiyor
- ✅ `src/` içinde emoji sayısı: 0
- ✅ oxlint temiz
