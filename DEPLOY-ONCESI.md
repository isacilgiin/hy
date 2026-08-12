# Yayına Almadan Önce — Kontrol Listesi

Bu dosya, sitede **gerçek veri bekleyen** her yeri ve **taşınma (migration) risklerini**
tek yerde toplar. `npm run dev` çalıştırdığında tarayıcı konsolunda eksik alanların
listesini ayrıca uyarı olarak görürsün.

---

## 🔴 0. EN ÖNEMLİSİ — Bu bir taşınma, sıfırdan yayın değil

`20karot.com.tr` şu anda **yayında olan ve Google'da indeksli bir WordPress sitesi.**
Yeni siteyi yüklemek eskisini siler. Yanlış yapılırsa mevcut sıralamalar kaybolur.

**Yapılan hazırlık:** eski sitemap'teki **64 indeksli URL'nin tamamı** karşılanıyor:

| Durum | Adet | Açıklama |
|---|---|---|
| Aynı adreste çalışıyor | 30 | `/hizmetler/beton-kesme/`, `/hizmet-bolgeleri/tavas-karot/` … slug'lar birebir korundu |
| 301 ile yönlendiriliyor | 34 | `/hizmetlerimiz/` → `/hizmetler/`, `/category/*` → `/hizmetler/` … |
| **404'e düşen** | **0** | — |

Yönlendirmeler `dist/.htaccess` dosyasında **otomatik üretiliyor**.

### ⚠️ `.htaccess` dosyasını yüklemeyi ATLAMA

`dist/.htaccess` **gizli dosyadır**, FileZilla varsayılan olarak göstermez:

> FileZilla → **Sunucu** menüsü → **Gizli dosyaları göstermeye zorla** ✔

Bu dosya yüklenmezse:
- Alt sayfalara doğrudan girildiğinde **404** alınır (`20karot.com.tr/hizmetler/` çalışmaz)
- Eski WordPress adresleri **404** verir → indeksteki sıralamalar kaybolur

### Yükleme sonrası mutlaka test et

```
https://20karot.com.tr/hizmetler/tavas-karot/      → açılmalı
https://20karot.com.tr/hizmet-bolgeleri/tavas-karot/ → açılmalı
https://20karot.com.tr/hizmetlerimiz/              → /hizmetler/ adresine 301 atmalı
https://20karot.com.tr/service-category/karot/     → /hizmetler/karot/ adresine 301 atmalı
https://20karot.com.tr/sitemap.xml                 → 36 URL listelemeli
```

Sonra **Google Search Console → Site Haritaları**'ndan yeni `sitemap.xml`'i gönder ve
eski sitemap girdilerini (`post-sitemap1.xml`, `page-sitemap1.xml` vb.) kaldır.

### Henüz karşılığı olmayan 3 sayfa

Eski sitede vardı, yeni sitede **yok** — şimdilik 301 ile ana sayfaya/iletişime gidiyorlar:

- `/sikca-sorulan-sorular/` → SSS sayfası. **SEO açısından en değerli eksik.** İçeriğini
  gönderirsen sayfayı kurup FAQ schema'sı da eklerim (Google'da soru-cevap kutusu çıkarır).
- `/gizlilik-politikasi/`
- `/sartlar-ve-kosullar/`

Bu sayfaları oluşturunca `vite.config.js` içindeki `redirects` dizisinden ilgili
3 satırı **silmeyi unutma**, yoksa yeni sayfalar açılmaz.

---

## 1. Gerçek veri bekleyen alanlar

### `src/data/siteConfig.js`

| Alan | Durum | Not |
|---|---|---|
| Firma adı, telefon, e-posta, adres | ✅ | 20 Karot / 0545 678 91 94 / 20karot20@gmail.com |
| `geo.lat/lng`, `placeId`, `embedSrc` | ✅ | Google İşletme Profili'nden alındı, harita tam pini gösteriyor |
| `workingHours` | ✅ | Google profiline göre "24 saat açık" |
| `rating` | ✅ | 5,0 / 32 yorum — **JSON-LD'ye yazılmıyor** (aşağıya bak) |
| **`stats.*`** | ⚠️ **YER TUTUCU** | `10 / 750 / 500 / 8` — **uydurma sayılar.** Değiştirmeden yayına çıkma. |
| `social.instagram/facebook` | ❌ Boş | Boşken footer'da o ikon hiç gösterilmez (kırık link oluşmaz) |
| `analytics.ga4` | ❌ Boş | `G-XXXXXXXXXX` girilince GA script'i otomatik eklenir |
| `analytics.googleSiteVerification` | ❌ Boş | Search Console doğrulama kodu |

**Google puanı neden JSON-LD'ye yazılmıyor?** Google, bir işletmenin kendi sitesinde
kendi Google puanını `aggregateRating` olarak işaretlemesini "self-serving review" sayar;
yok sayar ve bazı durumlarda yapılandırılmış veri cezası riski taşır. Puanı sitede
metin/rozet olarak göstermek serbest. Kendi sitenizde yorum toplarsanız
`rating.showInSchema` değerini `true` yapabilirsiniz.

### `src/data/about.js`
- `foundedYear` — **gerçek kuruluş yılı** (şu an `2015` yer tutucu). Değiştirince
  timeline'daki tüm yıllar otomatik kayar.
- `timeline` istemiyorsanız diziyi `[]` yapın; Hakkımızda'daki bölüm tamamen gizlenir.

### `src/data/serviceAreas.js`
- ⚠️ **Slug'ları değiştirmeyin** — indeksli URL'ler.
- Her ilçenin `note` alanı boş. Oraya o ilçedeki **gerçek bir referans işinizi**
  yazarsanız sayfada ayrı bir kutuda görünür ve içerik benzersizleşir (SEO'da değerli).

### `src/data/projects.js`
- Proje fotoğrafınız yok dediniz. Fotoğraf hazır olana kadar **diziyi `[]` yapın** —
  Projeler sayfası "yakında" mesajı gösterir, ana sayfadaki proje bölümü tamamen gizlenir.
  Boş yer tutucu kareler görünmez.

---

## 2. Görseller — FileZilla ile nereye?

Görselleri **projeye** ekleyeceksin (hostinge değil), sonra `npm run build` alınca
`dist/` içine kopyalanırlar. Yani hedef klasör:

```
20karot-static-web/public/images/...
```

Dosya adları **tam olarak** şöyle olmalı — kod bu isimleri arıyor. Dosya yoksa
otomatik tasarım yer tutucusu görünür, kırık görsel ikonu asla çıkmaz.

```
public/images/logo/
  logo.svg                 açık zeminde kullanılacak logo
  logo-beyaz.svg           koyu zeminde (header/footer) kullanılacak logo
  apple-touch-icon.png     180x180
  og-image.jpg             1200x630  ← WhatsApp/Facebook paylaşım önizlemesi

public/images/hero/
  hero-1.jpg  hero-2.jpg  hero-3.jpg          1920x1080, her biri < 300 KB

public/images/hizmetler/                       1200x800
  karot.jpg                  beton-delme.jpg
  beton-kesme.jpg            beton-kirma.jpg
  asfalt-derz-kesim.jpg      hidrolik-beton-kesme.jpg
  filiz-ekimi.jpg            ankraj.jpg
  kimyasal-dubel.jpg         kontrollu-bina-yikimi.jpg

public/images/projeler/                        1600x1200 (opsiyonel)
  proje-01.jpg ... proje-12.jpg
```

- Logo SVG değil PNG ise: dosya adını `logo.png` / `logo-beyaz.png` yapıp
  `src/components/Logo.jsx` içindeki iki uzantıyı değiştirin.
- **Sıkıştırmayı atlama:** fotoğrafları [squoosh.app](https://squoosh.app) ile
  geçirin. 1 MB'lık bir hero fotoğrafı mobil ziyaretçiyi kaçırır. Hedef: hero < 300 KB,
  hizmet görselleri < 150 KB.
- Elindeki dosyaları at, ben bakıp gerekiyorsa boyut/format/kırpma önerisi vereyim.

**Favicon** şu an çalışıyor (`public/favicon.svg` — karot ucu motifi). Kendi
logonuzla değiştirmek isterseniz bu dosyayı değiştirin.

---

## 3. İletişim formu

`src/pages/Contact.jsx` — form şu anda **backend'e gitmiyor**, mesajı WhatsApp'a
aktarıyor. Kalıcı çözüm: Formspree / Web3Forms (ücretsiz katmanı var) ya da
hostingde bir PHP endpoint.

---

## 4. Build & Deploy

```bash
npm install
npm run build     # dist/ klasörü oluşur
```

`dist/` klasörünün **içindekilerin tamamını** (gizli `.htaccess` dahil)
hostingin `public_html` klasörüne yükleyin.

> Nginx kullanıyorsanız `.htaccess` işe yaramaz; `try_files $uri $uri/ /index.html;`
> ve `dist/.htaccess` içindeki 301'lerin nginx karşılıkları gerekir — söyleyin, yazayım.

### Yükleme sonrası kontrol listesi

- [ ] `.htaccess` yüklendi mi? (gizli dosya — FileZilla ayarı)
- [ ] SSL sertifikası aktif (hosting panelinden ücretsiz Let's Encrypt)
- [ ] Yukarıdaki **taşınma testleri** (bölüm 0) geçti mi?
- [ ] Search Console'a yeni sitemap gönderildi, eskiler kaldırıldı
- [ ] Google İşletme Profilindeki web sitesi adresi doğru
- [ ] WhatsApp'ta linki paylaşıp önizleme görselini kontrol et (og-image.jpg)
- [ ] `stats` rakamları gerçek değerlerle değiştirildi mi? ← **en kritik**

---

## 5. Otomatik üretilen dosyalar — elle düzenlemeyin

`src/data/*.js` üzerinden **build sırasında** üretilirler:

- `dist/index.html` → tüm meta etiketleri, Open Graph, JSON-LD
- `dist/sitemap.xml` → 36 URL (6 sabit + 10 hizmet + 20 hizmet bölgesi)
- `dist/robots.txt`
- `dist/.htaccess` → 301 yönlendirmeleri + SPA yönlendirmesi + önbellek

Domain, telefon veya firma adı değiştirmek için **sadece `src/data/siteConfig.js`**.
Yönlendirme eklemek/çıkarmak için `vite.config.js` içindeki `redirects` dizisi.

Elle güncellenmesi gereken tek SEO dosyası: `public/llms.txt`
(ve kopyası `public/.well-known/llms.txt`).
