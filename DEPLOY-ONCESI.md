# Yayına Almadan Önce — Kontrol Listesi

Bu dosya, sitede **gerçek veri bekleyen** her yeri tek yerde toplar.
Yer tutucu (placeholder) içerikler bilinçli olarak işaretlenmiştir; hiçbiri
"uydurma ama gerçek gibi duran" veri olarak bırakılmamıştır.

`npm run dev` çalıştırdığında tarayıcı konsolunda eksik alanların listesini
ayrıca uyarı olarak görürsün.

---

## 1. Zorunlu — bunlar olmadan yayına çıkma

### `src/data/siteConfig.js`

| Alan | Durum | Not |
|---|---|---|
| `companyName`, `phone`, `email`, `address` | ✅ Girildi | 20 Karot / 0545 678 91 94 / 20karot20@gmail.com |
| `domain`, `url` | ✅ Girildi | 20karot.com.tr |
| `geo.lat`, `geo.lng` | ❌ **Boş** | Google Maps'te işletme pinine sağ tıkla → ilk satırdaki koordinatı kopyala. Boş kaldığı sürece harita ve yol tarifi **adres metni** üzerinden çalışır (şu an doğru çalışıyor), JSON-LD'ye koordinat yazılmaz. |
| `stats.*` | ⚠️ **Yer tutucu** | `yearsExperience: 10`, `completedProjects: 750`, `happyClients: 500`, `teamMembers: 8` — **gerçek rakamlarla değiştir.** Bir alanı `null` yaparsan o kutu sitede hiç görünmez. |
| `rating.value`, `rating.count` | ❌ Boş | Google İşletme Profilinizde **5.0 / 32 yorum** görünüyor. Doldurursan JSON-LD'ye `aggregateRating` eklenir. ⚠️ Google, işletmenin kendi sitesinde Google'dan alınan puanı işaretlemesini genelde yok sayar; kendi sitenizde topladığınız yorumlar için kullanmak daha doğru. |
| `social.instagram`, `social.facebook` | ❌ Boş | Boş kaldığı sürece footer'da o ikon **hiç gösterilmez** (kırık link oluşmaz). |
| `analytics.ga4` | ❌ Boş | `G-XXXXXXXXXX` girilince Google Analytics script'i otomatik eklenir. Boşken hiç eklenmez. |
| `analytics.googleSiteVerification` | ❌ Boş | Search Console doğrulama kodu. |
| `serviceAreas` | ⚠️ Kontrol et | Gerçekte hizmet vermediğiniz ilçeleri **silin**. |
| `workingHours.emergency` | ⚠️ Kontrol et | 7/24 acil servis vermiyorsanız `''` yapın — hero'daki "7/24 Acil Servis" kutusu kalkar. |

### `src/data/about.js`

- `foundedYear` — **gerçek kuruluş yılı** (şu an `2015` yer tutucu). Değiştirince timeline'daki tüm yıllar otomatik kayar.
- `timeline` metinleri — kendi hikayenizle güncelleyin. Timeline'ı hiç istemiyorsanız diziyi `[]` yapın; bölüm tamamen gizlenir.

### `src/data/services.js`

- Hizmet metinleri **marka/model içermiyor** (referans sitedeki "Hilti DD 150-U" gibi ifadeler
  o firmanın envanteriydi, sizin makinelerinizi bilmeden yazmak uydurma iddia olurdu).
  Kendi makinelerinizin marka/modelini eklemek isterseniz `features` listelerine yazın.

### `src/data/projects.js`

- Proje başlıkları ve kategorileri örnek metindir — gerçek işlerinizle güncelleyin.

---

## 2. Görseller

Dosyaları **tam olarak bu isimlerle** ilgili klasöre atın. Kod bu yolları arar;
dosya yoksa otomatik olarak tasarım yer tutucusu gösterilir (kırık görsel ikonu çıkmaz).

```
public/images/logo/
  logo.svg                      açık zeminde kullanılacak logo
  logo-beyaz.svg                koyu zeminde (header/footer) kullanılacak logo
  apple-touch-icon.png          180x180
  og-image.jpg                  1200x630  ← sosyal medya paylaşım görseli (WhatsApp/Facebook önizlemesi)

public/images/hero/
  hero-1.jpg  hero-2.jpg  hero-3.jpg      1920x1080, her biri < 300 KB

public/images/hizmetler/
  beton-delme.jpg            beton-kesme.jpg
  beton-kirma.jpg            asfalt-derz-kesim.jpg
  hidrolik-beton-kesme.jpg   filiz-ekimi.jpg
  kimyasal-dubel-ankraj.jpg  kontrollu-bina-yikimi.jpg     1200x800

public/images/projeler/
  proje-01.jpg ... proje-12.jpg           1600x1200
```

- **Favicon** şu an çalışıyor (`public/favicon.svg` — karot ucu motifi). Kendi logonuzla
  değiştirmek isterseniz bu dosyayı değiştirin.
- Görselleri atmadan önce **WebP/JPG olarak sıkıştırın** (squoosh.app). 1 MB'lık fotoğraf
  mobil kullanıcıyı kaçırır.

---

## 3. İletişim formu

`src/pages/Contact.jsx` — form şu anda **backend'e gitmiyor**, mesajı WhatsApp'a aktarıyor.
Kalıcı çözüm isterseniz seçenekler:

- **Formspree / Web3Forms** — kod değişikliği minimum, ücretsiz katmanı var
- Hostinginizde bir **PHP endpoint** — statik hostingde de çalışır
- Netlify Forms — sadece Netlify'a deploy ederseniz

---

## 4. Build & Deploy

```bash
npm install
npm run build     # dist/ klasörü oluşur
```

`dist/` klasörünün **içindekileri** hostingin `public_html` klasörüne FTP ile yükleyin.

### ⚠️ SPA yönlendirmesi (ATLAMA — atlanırsa alt sayfalar 404 verir)

Site React Router kullanıyor. `20karot.com.tr/hizmetler` adresine **doğrudan** girildiğinde
sunucu o dosyayı arar, bulamaz, 404 döner. Apache hosting (cPanel/Hostinger) için
`public_html/.htaccess` dosyası oluşturun:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Statik dosya önbelleği
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/jpeg "access plus 6 months"
  ExpiresByType image/webp "access plus 6 months"
  ExpiresByType image/svg+xml "access plus 6 months"
</IfModule>
```

Nginx kullanıyorsanız: `try_files $uri $uri/ /index.html;`

### Yükleme sonrası

- [ ] SSL sertifikası aktif (hosting panelinden ücretsiz Let's Encrypt)
- [ ] `https://20karot.com.tr/sitemap.xml` açılıyor mu?
- [ ] `https://20karot.com.tr/robots.txt` açılıyor mu?
- [ ] Alt sayfaya doğrudan gir: `https://20karot.com.tr/hizmetler` → 404 vermemeli
- [ ] Google Search Console'a site ekle + sitemap gönder
- [ ] Google İşletme Profiline web sitesi adresini ekle
- [ ] WhatsApp'ta linki paylaşıp önizleme görselini kontrol et (og-image.jpg)

---

## 5. Otomatik üretilen dosyalar — elle düzenlemeyin

Bunlar `src/data/siteConfig.js` + `src/data/services.js` üzerinden **build sırasında**
üretilir. Domain veya telefon değiştirmek için sadece `siteConfig.js`'i düzenleyin:

- `dist/index.html` içindeki tüm meta etiketleri, Open Graph, JSON-LD
- `dist/sitemap.xml`
- `dist/robots.txt`

Elle güncellenmesi gereken tek SEO dosyası: `public/llms.txt`
(ve kopyası `public/.well-known/llms.txt`) — içinde düz metin anlatım var.
