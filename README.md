# 20 Karot — Static Web Site

**Domain:** 20karot.com.tr  
**Firma:** 20 Karot  
**Sektor:** Beton Delme, Kesme, Kirma Hizmetleri  
**Teknoloji:** React + Vite + Tailwind CSS v4  
**Deploy:** Static build (npm run build) -> FTP ile hostinge yukleme

---

## Kurulum

```bash
npm install
npm run dev        # Local gelistirme (http://localhost:5173)
npm run build      # Production build (dist/ klasoru)
```

---

## Proje Yapisi

```
20karot/
├── public/
│   ├── robots.txt              # Arama motoru yonlendirmesi
│   ├── sitemap.xml             # 14 URL'li site haritasi
│   ├── llms.txt                # LLM'ler icin firma bilgisi
│   ├── .well-known/llms.txt    # Alternatif LLM erisim yolu
│   └── manifest.json           # PWA manifest
├── src/
│   ├── index.css               # Tailwind v4 + animasyonlar + tasarim sistemi
│   ├── App.jsx                 # Router + Layout
│   ├── main.jsx                # Entry point
│   ├── components/
│   │   ├── Header.jsx          # Sticky header, dropdown, hamburger menu
│   │   ├── Footer.jsx          # 4 sutunlu footer
│   │   ├── HeroSection.jsx     # Hero section (slider eklenecek)
│   │   ├── ServiceCard.jsx     # Hover efektli hizmet karti
│   │   ├── StatsSection.jsx    # Animasyonlu sayaclar
│   │   ├── CTASection.jsx      # Telefon + WhatsApp CTA
│   │   ├── ProjectGallery.jsx  # Lightbox'li galeri
│   │   └── ScrollToTop.jsx     # Sayfa gecis scroll
│   ├── pages/
│   │   ├── Home.jsx            # Ana sayfa (hero, hizmetler, istatistikler, projeler, CTA)
│   │   ├── Services.jsx        # Hizmetler listesi
│   │   ├── ServiceDetail.jsx   # Dinamik hizmet detay (/hizmetler/:slug)
│   │   ├── Projects.jsx        # Proje galerisi
│   │   ├── About.jsx           # Hakkimizda + timeline + degerler
│   │   ├── Contact.jsx         # Iletisim formu + harita
│   │   └── ServiceAreas.jsx    # Hizmet bolgeleri grid
│   └── data/
│       ├── siteConfig.js       # Merkezi firma bilgileri (BURADAN GUNCELLENIR)
│       └── services.js         # 8 hizmet verisi
├── index.html                  # SEO meta + JSON-LD + noscript fallback
├── vite.config.js              # Tailwind plugin + chunk splitting
├── ANALIZ.md                   # Referans site (guclukarot.com) analiz raporu
└── package.json
```

---

## Referans Site Analizi

guclukarot.com incelendi ve asagidaki teknolojiler tespit edildi:
- React SPA + Vite bundler
- Tailwind CSS v4.1.6
- Swiper (slider) + YARL (lightbox)
- Google Analytics GA4 + Google Ads
- Kapsamli JSON-LD Schema.org
- Kanit + Cal Sans fontlari

Detayli analiz: `ANALIZ.md`

---

## TAMAMLANAN ISLER

1. **Proje altyapisi kuruldu** — React + Vite + Tailwind CSS v4
2. **Paketler yuklendi** — react-router-dom, swiper, yet-another-react-lightbox, tailwindcss
3. **SEO dosyalari olusturuldu:**
   - `robots.txt` — arama motoru yonlendirmesi
   - `sitemap.xml` — 14 sayfa URL'si
   - `llms.txt` + `.well-known/llms.txt` — LLM/AI botlari icin firma bilgisi
   - `manifest.json` — PWA manifest
4. **index.html SEO** — Meta tags, Open Graph, Twitter Card, JSON-LD Schema, Geo Tags, guvenlik headerlari, noscript fallback
5. **Tasarim sistemi** — index.css: animasyonlar, glassmorphism, gradient'ler, butonlar, scrollbar
6. **7 sayfa olusturuldu** — Home, Services, ServiceDetail, Projects, About, Contact, ServiceAreas
7. **8 bilesen olusturuldu** — Header, Footer, HeroSection, ServiceCard, StatsSection, CTASection, ProjectGallery, ScrollToTop
8. **Veri dosyalari** — siteConfig.js (merkezi yapilandirma), services.js (8 hizmet)
9. **Routing** — React Router ile tum sayfa yonlendirmeleri
10. **Referans site analizi** — guclukarot.com detayli teknoloji raporu (ANALIZ.md)

---

## YAPILACAK ISLER (TODO)

### Oncelik 1 — Zorunlu Degisiklikler
- [ ] **Firma bilgilerini guncelle** — siteConfig.js'de "Guclu Karot" -> "20 Karot", domain -> 20karot.com.tr, telefon, adres, koordinatlar vb.
- [ ] **Renk paletini degistir** — Mavi+sari yerine "koyu bordo + altin/krem" paleti (secildi)
- [ ] **Emojileri kaldir** — Tum dosyalardaki emoji kullanimini SVG ikonlarla degistir
- [ ] **Hero slider ekle** — HeroSection'a Swiper slider entegrasyonu (referans sitede vardi)
- [ ] **sitemap.xml domain guncelle** — guclukarot.com -> 20karot.com.tr
- [ ] **robots.txt domain guncelle** — guclukarot.com -> 20karot.com.tr  
- [ ] **llms.txt firma bilgilerini guncelle** — 20 Karot bilgileri
- [ ] **index.html meta tagleri guncelle** — baslik, aciklama, JSON-LD, OG tagleri
- [ ] **manifest.json guncelle** — firma adi ve tema renkleri

### Oncelik 2 — Gorseller
- [ ] **Logo tasarimi** — 20 Karot SVG logosu olustur
- [ ] **Banner gorselleri** — Hero slider icin 3-4 banner gorseli
- [ ] **Proje fotograflari** — Gercek proje gorselleri ekle
- [ ] **Favicon olustur** — Logo ile favicon.ico, android-chrome, apple-touch-icon
- [ ] **OG image** — Sosyal medya paylasim gorseli

### Oncelik 3 — Icerik Guncellemesi
- [ ] **Hizmet aciklamalari** — Firma ozelinde hizmet metinleri guncelle
- [ ] **Hakkimizda icerigi** — Gercek firma hikayesi, timeline tarihleri
- [ ] **Hizmet bolgeleri** — Gercek hizmet verilen ilceler
- [ ] **Istatistikler** — Gercek rakamlar (yil, proje sayisi vb.)
- [ ] **Iletisim formu backend** — Form gonderimi icin backend veya servis entegrasyonu

### Oncelik 4 — Optimizasyon & Deploy
- [ ] **Responsive test** — Mobil, tablet, desktop kontrol
- [ ] **Lighthouse analizi** — Performance, SEO, Accessibility skorlari
- [ ] **WebP gorsel donusumu** — PNG/JPG -> WebP
- [ ] **Production build** — npm run build
- [ ] **FTP ile deploy** — dist/ klasorunu hostinge yukle
- [ ] **SSL sertifikasi** — HTTPS aktif et
- [ ] **Google Analytics** — GA4 ID'yi siteConfig.js'e ekle
- [ ] **Google Search Console** — Site dogrulama

---

## Onemli Dosya: siteConfig.js

Tum firma bilgileri tek dosyadan yonetilir. Degisiklik yapilacak ilk dosya budur:

```
src/data/siteConfig.js
```

Telefon, adres, domain, sosyal medya, istatistikler, SEO metinleri — hepsi burada.

---

## Secilen Renk Paleti (Henuz Uygulanmadi)

- **Koyu Bordo + Altin/Krem** — premium, luks his
- Mavi+sari (guclukarot.com) ile karistirilmayacak, tamamen farkli kimlik
