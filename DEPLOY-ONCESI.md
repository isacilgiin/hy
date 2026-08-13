# Yayına Almadan Önce — Kontrol Listesi

> **Sürümleme (2026-08-13'ten itibaren).** `npm run build` artık `dist/` değil
> `yayin/<domain>-v<surum>/` üretiyor. Sürümü `src/data/siteConfig.js` içindeki
> `yayinSurumu` belirliyor; sunucuya yeni bir yayın attıkça elle artırın.
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

`20karot.com.tr` şu anda **yayında olan ve Google'da indeksli bir WordPress sitesi.**
Yeni siteyi yüklemek eskisini siler. Yanlış yapılırsa mevcut sıralamalar kaybolur.

**Yapılan hazırlık:** eski sitemap'teki **64 indeksli URL'nin tamamı** karşılanıyor:

| Durum | Adet | Açıklama |
|---|---|---|
| Aynı adreste çalışıyor | 30 | `/hizmetler/beton-kesme/`, `/hizmet-bolgeleri/tavas-karot/` … slug'lar birebir korundu |
| 301 ile yönlendiriliyor | 34 | `/hizmetlerimiz/` → `/hizmetler/`, `/category/*` → `/hizmetler/` … |
| **404'e düşen** | **0** | — |

Yönlendirmeler yayın klasöründeki `.htaccess` dosyasında **otomatik üretiliyor**.

### `.htaccess` nedir, neden önemli?

Apache sunucularında, bir klasörün içine konan ve **o klasördeki kuralları
belirleyen** ayar dosyasıdır. Adı nokta ile başladığı için "gizli dosya"
sayılır — FileZilla varsayılan ayarlarla **göstermez ve yüklemez.**

Bizim `.htaccess` dosyamız üç iş yapıyor:

1. **Eski adresleri yenisine yönlendiriyor.** `20karot.com.tr/hizmetlerimiz/`
   adresine gelen ziyaretçiyi (ve Google'ı) `/hizmetler/` adresine kalıcı
   olarak taşıyor. Bu dosya olmazsa eski WordPress adreslerinin 31 tanesi
   **404 verir** ve o sayfaların Google'daki sıralaması kaybolur.
2. **Alt sayfaların açılmasını sağlıyor.** Site tek sayfa uygulaması; sunucuya
   `/hizmetler/karot/` diye bir istek geldiğinde ne yapacağını bu dosya söylüyor.
3. **Türkçe karakter ve önbellek ayarları.** Bu olmadan `llms.txt` gibi metin
   dosyalarında "Kırma" yerine "KÄ±rma" görünüyor (daha önce yaşadığınız sorun).

### ⚠️ `.htaccess` dosyasını yüklemeyi ATLAMA

yayın klasöründeki `.htaccess` **gizli dosyadır**, FileZilla varsayılan olarak göstermez:

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
| `foundedYear` + `stats.*` | ✅ Girildi | Kuruluş 2014, 850 proje, 610 müşteri, 6 kişi. **"Yıl tecrübe" `foundedYear`'dan otomatik hesaplanıyor** — sadece yılı değiştirin, gerisi kendiliğinden güncellenir. |
| `social.instagram/facebook` | — | Hesap yok. Boş kaldığı sürece footer'da o ikon hiç gösterilmez. |
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
- ⚠️ **`note` alanları ZORUNLU sayılmalı, opsiyonel değil.**

  20 ilçe sayfası aynı iskeleti paylaşıyor: aynı hizmet listesi, aynı "nasıl
  çalışıyoruz" kutusu, aynı kenar çubuğu. Her sayfayı ayıran şey şu an sadece
  `intro` paragrafı. Google bu şekli "doorway / thin content" olarak
  sınıflandırabilir — ve bu sayfalar, yerini aldıkları eski WordPress
  sayfalarından daha ince kalır.

  Çözüm: her ilçenin `note` alanına o ilçede yaptığınız **gerçek bir işi** yazın.
  Örnek: `note: 'Tavas\'ta bir un fabrikasının döşemesinde 40 cm derinlikte hidrolik kesim yaptık.'`
  Bu metin sayfada ayrı bir kutuda görünür. 2-3 cümle yeter, 20 ilçe için
  yaklaşık yarım saatlik iş — ama bu sayfaların sıralamada kalmasını sağlayan şey bu.

  Ölçüm: şu an farklı bölge tiplerindeki sayfalar %20, aynı bölge tipindekiler
  %44 oranında ortak cümle içeriyor. `note` doldurulunca bu oran belirgin düşer.

### `src/data/projects.js`
- Proje fotoğrafınız yok dediniz. Fotoğraf hazır olana kadar **diziyi `[]` yapın** —
  Projeler sayfası "yakında" mesajı gösterir, ana sayfadaki proje bölümü tamamen gizlenir.
  Boş yer tutucu kareler görünmez.

---

## 1.5 Google Analytics ve Google Ads kimlikleri — nereden alınır?

### A) GA4 Ölçüm Kimliği — ✅ BULUNDU, ZATEN GİRİLDİ

`G-26EVFNCNE4`

Aramanıza gerek kalmadı: yayındaki WordPress sitenizin kaynak kodundan çıkarıldı.
Hem Tag Manager konteyneriniz (`GTM-PFPDVBL4`) hem de Google Tag'iniz
(`GT-WRGZ972H`) bu GA4 mülküne yönlendiriyor. `siteConfig.analytics.ga4`
alanına girildi, yeni site aynı mülke veri gönderecek — geçmiş verinizle
kesintisiz devam eder.

**Alternatif: Tag Manager kullanmak.** `analytics.gtm` alanına `GTM-PFPDVBL4`
yazarsanız gtag yerine mevcut GTM konteyneriniz yüklenir; etiketleri koda
dokunmadan GTM arayüzünden yönetirsiniz (GA4 zaten o konteynerde tanımlı).
İkisini birden doldurmayın — GTM doluysa gtag yüklenmez, çift ölçüm olmaz.

### B) Google Ads Dönüşüm Kimliği (`AW-XXXXXXXXX`) ve etiketler

> **Arayüz değiştiyse:** Google Ads menüsü sık değişiyor. Menüde aramak yerine
> şu adresi doğrudan tarayıcıya yazın — hangi sürümde olursanız olun dönüşüm
> listesine gider:
>
> **https://ads.google.com/aw/conversions**
>
> (Sizin gördüğünüz menüde bu sayfanın adı **Hedefler → Özet**.)

**Önce mevcut sorunu düzelt:**

1. **https://ads.google.com/aw/conversions** adresini aç
2. Listede `20karot.com.tr (web) conversion_event_page_view` satırını bul
3. Üstüne tıkla → **Ayarları düzenle** → **Hedef ve işlem optimizasyonu**
4. **"İkincil işlem"** seç → Kaydet

   *Neden: bu satır şu an "Birincil". Yani Google'a "biri sayfamı açtıysa bu bir
   başarıdır" diyorsun. Akıllı teklif bütçeyi arayacak müşteriye değil, açıp
   çıkacak kişiye harcıyor.*

**Sonra gerçek dönüşümleri oluştur — 3 kez tekrarla:**

1. Aynı sayfada (**https://ads.google.com/aw/conversions**) mavi **+** veya
   **"Yeni dönüşüm işlemi"** düğmesi → **Web sitesi**
2. Alan adı olarak `20karot.com.tr` yaz → **Tara**
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
   gtag('event', 'conversion', {'send_to': 'AW-123456789/AbC-D_efG12'});
   ```

   - `AW-123456789` → **Dönüşüm kimliği** (üçünde de aynıdır)
   - `AbC-D_efG12` → **dönüşüm etiketi** (her dönüşümde farklıdır)

**Sitede nereye yazılacak** — `src/data/siteConfig.js`:

```js
analytics: {
  ga4: 'G-XXXXXXXXXX',           // A adımından
  googleAds: 'AW-123456789',     // bölü işaretinden ÖNCEKİ kısım
  conversions: {
    telefon:  'AbC-D_efG12',     // bölü işaretinden SONRAKİ kısım
    whatsapp: '...',
    form:     '...',
  },
},
```

Kaydet → `npm run build` → yükle. Site tarafında başka bir şey yapmanıza gerek
yok; telefon, WhatsApp, e-posta, harita tıklamaları ve form gönderimi otomatik
raporlanıyor.

> **Kontrol:** Ads → Dönüşümler listesinde durum önce *"Doğrulanmadı"* görünür.
> Siteye girip telefon butonuna tıklayın; birkaç saat içinde *"Etkin"*e döner.

---

## 2. Görseller — FileZilla ile nereye?

Görselleri **projeye** ekleyeceksin (hostinge değil), sonra `npm run build` alınca
yayın klasörüne kopyalanırlar. Yani hedef klasör:

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
npm run build     # yayin/<domain>-v<surum>/ oluşur
```

Yayın klasörünün **içindekilerin tamamını** (gizli `.htaccess` ve **alt klasörler** dahil)
hostingin `public_html` klasörüne yükleyin.

> Yayın klasöründe artık `hizmetler/`, `hizmet-bolgeleri/` gibi klasörler ve her
> birinin içinde `index.html` var. FileZilla'da klasörleri de aktardığınızdan
> emin olun; eksik yüklenirse o sayfaların sosyal medya önizlemesi bozulur
> (site yine çalışır, SPA yönlendirmesi devreye girer).

> Nginx kullanıyorsanız `.htaccess` işe yaramaz; `try_files $uri $uri/ /index.html;`
> ve yayın klasöründeki `.htaccess` içindeki 301'lerin nginx karşılıkları gerekir — söyleyin, yazayım.

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

- `<yayın>/index.html` **ve her rota için ayrı `<yayın>/<rota>/index.html`** (39 dosya)
  → meta etiketleri, Open Graph, canonical, JSON-LD hepsi o sayfaya ait
  Bu sayede WhatsApp/Facebook link önizlemeleri doğru sayfayı gösterir
  (sosyal medya botları JavaScript çalıştırmaz).
- `<yayın>/sitemap.xml` → 36 URL (6 sabit + 10 hizmet + 20 hizmet bölgesi)
- `<yayın>/robots.txt`
- yayın klasöründeki `.htaccess` → 301 yönlendirmeleri + SPA yönlendirmesi + önbellek

Domain, telefon veya firma adı değiştirmek için **sadece `src/data/siteConfig.js`**.
Yönlendirme eklemek/çıkarmak için `vite.config.js` içindeki `redirects` dizisi.

Elle güncellenmesi gereken tek SEO dosyası: `public/llms.txt`
(ve kopyası `public/.well-known/llms.txt`).
