# Olgu Sayfası — Denizli Tomay Halı Yıkama

> **BU DOSYANIN AMACI:** Site içeriğini yazan herkesin (insan ya da model)
> kullanabileceği **tek doğrulanmış olgu kaynağı**. Burada YAZMAYAN bir bilgi
> sitede de yazmaz. Sayı, sertifika, ödül, "X yıldır lider", "binlerce müşteri"
> gibi ifadeler bu dosyada karşılığı yoksa **uydurmadır**.
>
> Kaynak: `denizlihaliyikama.net.tr` canlı sitesi (ölçüm 2026-08-25) — sayfa
> metinleri, JSON-LD blokları ve sayaç `data-target` değerleri. İşletme sahibinden
> gelen ek bilgiler ayrıca işaretli.
>
> Depoda ölçülmüş bir başarısızlık var (`arac/model-testi/BENIOKU.md`, commit
> `600984e`): olgu sayfasında bölgeye özgü bilgi olmadığında üç ayrı model de
> aynı sayfayı farklı kelimelerle dört kez yazdı (%59-70 içerik benzerliği).
> Bu dosyanın §4'ü tam olarak o boşluğu doldurmak için var.

---

## 1. Firma kimliği

| Alan | Değer | Kaynak |
|---|---|---|
| Tam ad | Denizli Tomay Halı Yıkama | JSON-LD `name` |
| Kısa ad | Tomay Halı Yıkama | site metni |
| Telefon | 0537 372 67 04 | site geneli |
| Telefon (ham) | +905373726704 | `tel:` linki |
| WhatsApp | https://wa.me/905373726704 | site geneli |
| E-posta | bilgi@denizlihaliyikama.net.tr | işletme sahibi, 2026-08-25 |
| Instagram | https://www.instagram.com/tomay.hali.yikama | JSON-LD `sameAs` |
| Adres | Eskihisar Mah. Pamukkale Sk. No:21/A | JSON-LD `streetAddress` |
| İlçe / il | Merkezefendi / Denizli | JSON-LD |
| Posta kodu | 20020 | JSON-LD `postalCode` |
| Tesis çalışma saatleri | Pazartesi–Cumartesi 07:00–18:00 (Pazar kapalı) | JSON-LD `openingHoursSpecification` |
| Alma-teslim servisi | **Her gün** | işletme sahibi, 2026-08-25 |
| Alan adı | denizlihaliyikama.net.tr | canlı |
| Google Ads | AW-18007504148 | canlı sitenin gtag'i |

### BİLİNMEYEN — doldurulana kadar sitede KULLANILMAZ
- Google İşletme Profili: place ID, embed adresi, kısa bağlantı
- Google puanı ve yorum sayısı → `rating` **null** kalır, puan yayınlanmaz
- Kendi GA4 mülkü → `analytics.ga4` **null** kalır
- Facebook / YouTube hesapları
- Vergi/ticaret unvanı

---

## 2. İstatistikler (canlı sitedeki sayaç hedefleri)

| Değer | Anlamı | Kaynak |
|---|---|---|
| 15.000+ | Yıkanan halı | `data-target="15000"` |
| 5.000+ | Mutlu müşteri | `data-target="5000"` |
| 10+ | Yıllık tecrübe | `data-target="10"` |
| %100 | Hijyen garantisi | `data-target="100"` |

→ 10+ yıl tecrübe, ölçüm yılı 2026 ⇒ **kuruluş yılı 2016** kabul edilir.
   ("10+" ifadesi canlı sitede zaten yayında; tutarlılık için aynı çizgi korunur.)

---

## 3. Tesis, ekipman ve süreç — DOĞRULANMIŞ

### 3.1 Makine parkı (Hakkımızda sayfasından, birebir)
- **16 fırçalı tam otomatik yıkama makinesi** — her halı cinsine uyarlanabilir fırça sertliği
- **Toz çırpma makinesi** — yıkama öncesi kaba toz ve partikül temizliği
- **Rulo sıkma makinesi** — **%95 oranında su alımı**, hızlı kuruma
- **Kapalı kurutma odaları** — toz ve dış etkenlerden izole
- **Yüksek basınçlı koltuk yıkama ünitesi** — yerinde vakumlu temizlik
- **Endüstriyel yorgan/battaniye makinesi** — büyük hacimli tekstil
- **Ultrasonik perde yıkama makinesi** (stor perde sayfasından)

### 3.2 Halı yıkama süreci (6 adım, canlı siteden birebir)
1. **Toz alma** — toz çırpma makinesinden geçirilir
2. **Ön yıkama & leke kontrolü** — lekeler tespit edilir, leke çıkarıcı uygulanır
3. **Otomatik yıkama** — halının cinsine uygun fırça sertliği ve şampuan
4. **Durulama & sıkma** — bol su, rulo sıkmada %95 su atılır
5. **Kapalı odada kurutma** — toz gelmemesi için
6. **Kontrol & paketleme** — parfümlenir, paketlenir

### 3.3 Koltuk yıkama süreci (5 adım, yerinde)
1. Hazırlık & toz alma → 2. Islatma & leke çıkarma (özel solüsyonlu su)
→ 3. Fırçalama (kumaşa zarar vermeyen yumuşak fırça) → 4. Vakumlama (yüksek emiş,
kirli su ve deterjan kalıntısı çekilir) → 5. Durulama (temiz su, kalıntı bırakılmaz)

### 3.4 Perde
Ultrasonik makinede yıkanır. **Ücretsiz sökme/takma** dâhil. Katlanmadan, düz
yıkanır ve kurutulur (kırışmazlık). Sineklik, yağ ve is lekeleri özel solüsyonla.

### 3.5 Ticari koşullar
- **Teslim süresi: ortalama 3-4 iş günü** (JSON-LD SSS)
- **Alım ve teslim ücretsiz** — hizmet verilen tüm bölgelerde
- **Ödeme: kapıda nakit veya kredi kartı**
- Şampuanlar **bitkisel, antialerjik, antibakteriyel**; kimyasal kalıntı bırakmaz
- Teslimat **ambalajlı**

---

## 4. İLÇE AYRIMI — içeriği benzersizleştiren eksen

> Halı yıkamada yıkama işlemi her ilçe için aynıdır. Sayfaları birbirinden ayıran
> şey yöntem değil, **o ilçeden gelen halının ne olduğu** ve **erişimin nasıl
> kurulduğu**. Aşağıdaki dört eksen bu ayrımı taşır. Bir ilçe sayfası bu
> eksenlerden en az ikisine somut olarak değmelidir.

### Eksen A — Halı stoğu: o bölgeden ne geliyor
- **Dokumacılık geçmişi olan ilçeler** (Buldan, Babadağ, Kızılcabölük/Tavas):
  el dokuma yün halı, kilim, Buldan bezi kültürü. Bu halılar makine halısından
  farklı program ister — düşük ısı, yumuşak fırça, renk akması testi.
- **Turizm/konaklama dokusu** (Pamukkale, Karahayıt): otel, pansiyon ve apart
  halıları; büyük hacim, sezon dışı toplu yıkama.
- **Kırsal ve yayla ilçeleri** (Çameli, Çal, Bekilli, Beyağaç, Güney, Baklan,
  Bozkurt, Çardak, Kale, Serinhisar, Acıpayam, Çivril): müstakil ev dokusu,
  yün halı ve kilim ağırlıklı, evde yıkama alışkanlığı yaygın.
- **Sanayi/OSB dokusu** (Honaz, Sarayköy): işyeri ve tesis halıları.
- **Apartman dokusu** (Merkezefendi, Pamukkale merkez): makine halısı, shaggy,
  standart ebatlar; balkonda kurutma imkânsızlığı.

### Eksen B — Erişim ve lojistik
- Merkezefendi tesisin bulunduğu ilçe; Pamukkale bitişik.
- Merkeze uzak ilçelerde (Çameli, Kale, Beyağaç, Acıpayam, Çivril, Çardak, Baklan)
  alma-teslim tek gidişte planlanır; komşu adreslerin aynı güne toplanması
  gerçek bir operasyon kararıdır.
- Asansörsüz bina, dar sokak, araç yanaşamayan yol: halının merdivenden nasıl
  indirileceği yıkamadan önce çözülmesi gereken bir iş.

### Eksen C — İklim ve mevsim
- Yüksek rakımlı ilçelerde (Çameli, Çal, Bekilli, Beyağaç, Serinhisar) kış uzun
  ve nemli; evde kurutma pratikte mümkün değil. Kapalı kurutma odası burada
  konfor değil zorunluluk.
- Denizli merkez yazın sıcak ve tozlu; bahar temizliği yoğunluğu.

### Eksen D — Hizmet karması
- Yerinde koltuk/yatak yıkama her ilçeye veriliyor (**işletme sahibi teyidi**).
- Perde sökme-takma ekip gerektirdiği için randevu ile planlanır.

### YASAK — bu eksenlerde bile yazılmayacaklar
- "X ilçesinde 500 müşterimiz var" gibi **ilçe bazlı sayı**
- "X ilçesinin 1 numaralı halı yıkamacısı" gibi **üstünlük iddiası**
- İlçede şube/tesis olduğu ima edilemez — **tek tesis Eskihisar/Merkezefendi'de**
- Fiyat rakamı (site hiçbir yerde fiyat vermiyor, teklif usulü)
- Uydurma mahalle/köy adı — resmî listeden doğrulanmadan yazılmaz

---

## 5. Hizmet listesi — yalnızca KANITLI olanlar

| Slug | Ad | Kanıt |
|---|---|---|
| `hali-yikama` | Halı Yıkama | ana hizmet sayfası |
| `el-dokuma-hali-yikama` | El Dokuma & Yün Halı Yıkama | "Yün & El Dokuma — Milas, Isparta, Hereke" |
| `ipek-nepal-hali-yikama` | İpek & Nepal Halı Yıkama | "İpek & Nepal — hassas ve değerli halılar" |
| `shaggy-hali-yikama` | Shaggy & Uzun Tüylü Halı Yıkama | "Shaggy & Bambu — özel fırça ayarı" |
| `koltuk-yikama` | Koltuk Yıkama | hizmet sayfası (yerinde) |
| `yatak-baza-temizligi` | Yatak & Baza Temizliği | koltuk sayfası "Yatak - Baza" |
| `stor-perde-yikama` | Stor & Perde Yıkama | hizmet sayfası |
| `yorgan-battaniye-yikama` | Yorgan & Battaniye Yıkama | "Endüstriyel yorgan/battaniye makinesi" |

**Kanıtı olmadığı için LİSTEDE YOK:** cami halısı yıkama, ofis/işyeri halı yıkama,
halı saklama/depolama, oto döşeme. İşletme sahibi teyit ederse eklenir.

---

## 6. Denizli'nin 19 ilçesi

Merkezefendi, Pamukkale, Acıpayam, Babadağ, Baklan, Bekilli, Beyağaç, Bozkurt,
Buldan, Çal, Çameli, Çardak, Çivril, Güney, Honaz, Kale, Sarayköy, Serinhisar, Tavas.

**19'dur, 20 değil.** (20karot iskeletinde 20. kayıt sentetik `Denizli (Merkez)`
sayfasıdır; halı yıkamada ana sayfa zaten "Denizli halı yıkama" sorgusunu
hedeflediği için o kayıt AÇILMAZ.)

---

## 7. Canlı sitenin indeksli URL şeması — korunacak

- `/ilceler/<ilce>-hali-yikama` (19)
- `/mahalleler/<mahalle>-hali-yikama` (42)
- `/hizmetler/<slug>` (3)
- `/blog/<slug>` (9)
- `/`, `/about`, `/contact`, `/services`, `/blog`, `/hizmet-bolgeleri`, `/denizli-hali-yikama`

**Sondaki eğik çizgi YOK** ve tolere edilmiyor (`/hizmetler/hali-yikama/` → 500).
Toplam 80 URL. Yönlendirme haritası bu listeden üretilecek.

---

## 8. Anahtar kelime stratejisi (işletme sahibi, 2026-08-25)

**Durum:** Site "denizli halı yıkama" sorgusunda **5-6. sayfada**. Amaç yukarı çekmek.

### Başlık kalıbı — DEĞİŞTİ
```
ESKİ:  Denizli Halı Yıkama - Firma Adı
YENİ:  Halı Yıkama Denizli | Koltuk ve Stor Perde Yıkama - Tomay
```
Sorgunun kendisi "halı yıkama denizli". Başlığın başındaki kelimeler daha ağır
tartıyor; marka sona gidiyor çünkü kimse markayı aramıyor.

### Sorgu → sayfa haritası (bir sorgu, TEK sayfa)

| Sayfa | Sahiplendiği sorgular |
|---|---|
| Ana sayfa | halı yıkama denizli · denizli halı yıkama · halı yıkama fabrikası denizli |
| `/hizmetler/hali-yikama` | antibakteriyel halı yıkama denizli · ücretsiz servisli halı yıkama denizli |
| `/hizmetler/koltuk-yikama` | denizli koltuk yıkama · yerinde koltuk yıkama denizli · evde koltuk yıkama denizli |
| `/hizmetler/stor-perde-yikama` | stor perde yıkama denizli · perde yıkama denizli · zebra perde yıkama denizli |
| Blog: fiyat yazısı | halı yıkama fiyatları denizli · denizli koltuk yıkama fiyatları · stor perde yıkama fiyatları denizli |
| Blog: firma seçimi yazısı | en iyi halı yıkama denizli · en ucuz halı yıkama denizli · en yakın halı yıkama |
| İlçe sayfaları | halı yıkama merkezefendi · halı yıkama pamukkale · halı yıkama `<ilçe>` |
| Mahalle sayfaları | bağbaşı halı yıkama · yenişehir stor perde yıkama · `<mahalle>` koltuk yıkama |

### "en iyi" / "en ucuz" / "leke garantili" sorguları — KURAL

Bu sorgular **hedeflenir ama İDDİA EDİLMEZ.**

- ❌ "Denizli'nin en iyi halı yıkamacısıyız" → doğrulanamaz üstünlük iddiası,
  hem olgu sayfasına aykırı hem kimseyi ikna etmiyor.
- ✅ "Denizli'de halı yıkamacı seçerken neye bakmalı" → aynı sorguyu karşılar,
  iddia içermez, LLM'ler tarafından alıntılanabilir, gerçekten sıralanır.
- ❌ "Leke garantisi veriyoruz" → garanti taahhüdüdür, işletme teyit etmeden yazılmaz.
- ✅ "Hangi leke çıkar, hangisi çıkmaz" → dürüst, ayırt edici ve aranan bir konu.

Fiyat sorguları için aynısı: rakam verilmez, **fiyatı neyin belirlediği** anlatılır
(metrekare, halı cinsi, leke durumu, tüy uzunluğu, adet).

---

## 9. Mahalle sayfaları — KALIYOR (işletme sahibi kararı, 2026-08-25)

Denetimde 42 mahalle sayfasının ilçelerde birleştirilmesi önerilmişti (gerekçe:
ortalama 141 kelime, Kınıklı↔Sümer arası %38,4 birebir benzerlik). İşletme sahibi
sayfaların **kalmasına** karar verdi: *"mahalleler de var, içerikleri resimleri
içerikler farklı farklı yazılar farklı farklı."*

Karar alındı; o hâlde uygulama kuralı şu:

1. **42 mahalle URL'i korunur** — zaten indeksliler, kaybedilmez.
2. Her mahalle sayfası **kendi ilçesinden ve diğer mahallelerden farklı** yazılır.
   Şablon doldurma yasak — bugünkü hata tam olarak bu.
3. Mahalle sayfası **kendi ilçe sayfasının konusunu tekrarlamaz**; ilçe sayfası
   bölgeyi, mahalle sayfası o mahallenin somut yerleşim dokusunu anlatır.
4. Her mahalle sayfası **kendi görselini** alır.
5. Hiçbir mahalle sayfası hedef benzerlik eşiğini (%32) geçemez —
   `arac/model-testi/denetle.mjs` ile ölçülür, geçemeyen yayına çıkmaz.

**Mahalle sayfaları için kullanılabilir ayrım eksenleri** (ilçe eksenlerinden farklı):
- Yerleşim dokusu: toplu konut / apartman / müstakil / site — halı ebadı ve
  merdiven-asansör durumunu değiştirir
- Mahallenin bilinen özelliği: üniversite çevresi (Kınıklı), sanayi (Sümer),
  termal-turizm (Karahayıt), tarihî doku (Eskihisar), yeni yapılaşma
- Hangi hizmetin o mahallede daha çok istendiği (öğrenci evi → koltuk/yatak;
  yeni site → stor perde; müstakil → yün halı)
- Alma-teslim erişimi: dar sokak, otopark, asansörsüz kat

**42 mahalle:** 1200-evler, adalet, akkonak, akkoy, aktepe, altintop, anafartalar,
atalar, bagbasi, barbaros, bereketler, cumhuriyet, degirmenonu, deliktas,
dokuzkavaklar, eskihisar, feslegen, gerzele, gumuscay, guzelkoy, hacieyuplu,
hacikaplanlar, ilbade, incilipinar, istiklal, karahasanli, karahayit, karsiyaka,
kayihan, kinikli, mehmetcik, muratdede, pelitlibag, semikler, servergazi, sevindik,
sirakapilar, siteler, sumer, topraklik, yenisehir, zeytinkoy

> Her mahallenin hangi ilçeye bağlı olduğu **resmî kaynaktan doğrulanmadan**
> yazılmaz. Yanlış ilçe eşlemesi tek sayfayı değil sitemap'i, llms.txt'i ve
> JSON-LD `areaServed`'i birden kirletir.
