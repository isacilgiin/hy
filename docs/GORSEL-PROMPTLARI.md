# Görsel Üretim Promptları — Denizli Tomay Halı Yıkama

> **Bu dosyayı olduğu gibi görsel üreten araca yapıştırabilirsin.**
> Dosya adları ve ölçüler koddan çıkarıldı, uydurma değil: kod `srcset`'i
> dosya adından türetiyor, ad tutmazsa görsel hiç görünmez.

Toplam **30 görsel**: 2 hero + 5 hizmet + 11 blog + 12 öncesi/sonrası.

---

## 0. HER GÖRSEL İÇİN GEÇERLİ KURALLAR

Aşağıdaki blok **her prompta eklenmeli**:

```
STYLE: Photorealistic editorial photography, natural light, clean and calm,
shallow depth of field where appropriate. Colour direction: cool blues and
deep teal in the environment, warm cream and soft gold highlights — matching a
navy-and-gold brand identity. Modern, well-lit, spotless facility. 
Turkish/Anatolian carpet patterns (medallion, floral, kilim motifs) — NOT
generic western area rugs.

ABSOLUTELY NO TEXT: no words, no letters, no numbers, no logos, no brand names,
no labels, no signage, no watermarks anywhere in the image — not on machines,
not on uniforms, not on packaging, not on walls.

NO recognisable faces. People may appear from behind, in profile, or as hands
only. Plain unbranded workwear.
```

### "Yazı yok" kuralı neden bu kadar katı

Devralınan görsellerde makinelerin üzerinde **uydurma marka adları** vardı:
`KARPETECH X2000`, `SOFTETECH`, `PROCMENE`, `ELITE CARPET CARE`. Bir görselde
okunabilir ama var olmayan bir marka adı, bakan herkese "bu yapay zekâ üretimi"
diyor. İçerik stratejisi "dürüstçe anlatan firma" olan bir sitede bu ters teper.

Ayrıca bir görselde **gerçek bir HILTI logosu** çıkmıştı — başka bir markanın
logosunu kendi tanıtım görselinde kullanmak ayrı bir sorun.

### Tutarlılık

Hero ve hizmet görselleri **aynı tesiste çekilmiş gibi** durmalı: aynı zemin,
aynı duvar, aynı ışık sıcaklığı. Her biri farklı bir stüdyodan gelirse site
stok fotoğraf koleksiyonu gibi görünür.

---

## 1. FORMAT VE YERLEŞTİRME

| Grup | Klasör | Ölçü | Oran |
|---|---|---|---|
| Hero | `public/images/hero/` | **1600×900** | 16:9 |
| Hizmet | `public/images/hizmetler/` | **1200×750** | 16:10 |
| Blog | `public/images/blog/` | **1200×675** | 16:9 |
| Öncesi/Sonrası | `public/images/oncesi-sonrasi/` | **1200×900** | 4:3 |

**Format: WebP.** PNG/JPG üretiliyorsa sorun değil, `.webp`'ye çevrilir — ama
**dosya adı tabloda yazan ad olmalı.**

Küçük türevleri (`-600`, `-800`, `-900`) **üretmeyin** — onları
`npm run varyant` otomatik çıkarıyor.

---

## 2. HERO — 2 adet · `public/images/hero/` · **1600×900**

Hero görselleri geniş kadrajlı ve sol tarafı **sakin** olmalı: metin ve butonlar
solda duruyor, oraya detay gelirse yazı okunmaz.

| Dosya | Prompt |
|---|---|
| `hero-4.webp` | Wide shot of a hand-woven Turkish wool rug being washed at low temperature in a bright facility, soft-bristle brushes moving gently over the pile, foam and water, the rug's red and blue medallion pattern clearly visible, calm and careful mood, left third of the frame kept simple and uncluttered |
| `hero-5.webp` | Wide shot of a large industrial quilt and blanket washing drum in a clean bright laundry facility, a thick quilt tumbling inside the open drum, soft steam in the air, stainless steel surfaces, left third of the frame kept simple and uncluttered |

---

## 3. HİZMET — 5 adet · `public/images/hizmetler/` · **1200×750**

| Dosya | Prompt |
|---|---|
| `el-dokuma-hali-yikama.webp` | Hand-woven Anatolian wool rug being cleaned with a soft brush and low foam, close three-quarter view, natural fringe visible at the edge, rich red and indigo dyes, careful hands in plain gloves |
| `ipek-nepal-hali-yikama.webp` | A fine silk rug with a subtle sheen, being cleaned delicately by hand with a soft sponge, very little water, light catching the silk pile and revealing its lustre, close intimate framing |
| `shaggy-hali-yikama.webp` | A thick cream long-pile shaggy rug, fingers parting the deep pile to reveal the base, water and foam at the roots of the strands, macro-leaning close-up showing pile depth |
| `yatak-baza-temizligi.webp` | A professional upholstery extraction nozzle moving across a mattress surface in a bright bedroom, visible clean stripe behind the nozzle, hands only, no faces |
| `yorgan-battaniye-yikama.webp` | A thick quilt being loaded into a large industrial washing drum, the quilt's bulk filling the opening, stainless steel machine, clean bright laundry facility |

### 4. BLOG GÖRSELLERİ — 11 adet · `public/images/blog/` · **1200×675 (16:9)**

Blog görselleri hizmet görsellerinden **daha sakin ve daha yakın plan** olmalı —
liste sayfasında yan yana dizildiklerinde birbirinden ayırt edilebilsinler.
İnsan yüzü göstermeyin; detay ve doku öne çıksın.

| Dosya | Prompt |
|---|---|
| `cay-lekesi-nasil-cikar.webp` | Close-up of a spilled glass of Turkish tea on a patterned wool rug, tea still spreading into the pile, tulip-shaped tea glass tipped over beside it, soft daylight from a window, shallow depth of field |
| `denizli-hali-yikama-fiyatlari-2026.webp` | Overhead flat-lay of three rolled carpets of different sizes side by side on a clean concrete floor, a measuring tape unrolled across them, neutral daylight, no people |
| `elde-yikama-vs-makine.webp` | Split composition: left half a pair of gloved hands gently brushing a wool rug by hand with a soft brush, right half the same rug entering an industrial brush machine, single continuous background, no divider line |
| `evde-hali-bakimi-icin-ipuclari.webp` | A vacuum cleaner head resting on a light shaggy rug in a bright living room, visible pile texture where the vacuum has passed, warm afternoon light, no people |
| `evde-profesyonel-hali-temizligi.webp` | A wet carpet draped over an apartment balcony railing dripping water, overcast sky, slightly melancholic mood — showing why home drying does not work |
| `hali-yikama-sureci-kac-gun.webp` | Rows of clean carpets hanging vertically in a bright closed drying room, warm air haze, orderly repetition, no people |
| `hali-yikamaci-secerken-nelere-bakmali.webp` | Close-up of a hand attaching a small blank paper tag with string to the corner of a rolled carpet, workshop background out of focus — tag must be COMPLETELY BLANK, no writing |
| `koltuk-yikama-sikligi.webp` | Close-up of a fabric sofa armrest showing a visible darker worn patch next to a clean area, natural window light, no people |
| `pamukkale-koltuk-yikama-rehberi.webp` | A living room prepared for on-site cleaning: sofa pulled away from the wall, floor covered with protective sheeting, cleaning hose running across the floor, no people |
| `stor-perde-yikama-rehberi.webp` | Close-up of a zebra roller blind mechanism and fabric bands against a bright window, dust visible on the slats in raking light |
| `yatak-hijyeni-ve-alerji.webp` | A stripped mattress in a bright airy bedroom with the window open and morning light falling across it, bedding folded aside, no people |

---

### 5. ÖNCESİ / SONRASI — 12 adet (6 çift) · `public/images/oncesi-sonrasi/` · **1200×900 (4:3)**

> **BU BÖLÜMÜN TEK KURALI VAR VE EN ÖNEMLİSİ BU:**
> Her çiftin iki karesi **BİREBİR AYNI AÇI, AYNI KADRAJ, AYNI IŞIK** olmalı.
> Değişen tek şey halının/eşyanın temizliği olacak. Kamera bir milim oynarsa
> sürgü hileli görünür ve ters teper.
>
> Antigravity'de en sağlıklı yöntem: önce "sonrası" karesini üret, sonra
> **aynı prompta "same exact camera angle, same framing, same lighting"**
> ekleyip yalnızca kirlilik tarifini değiştirerek "öncesi"ni üret.

| Çift | Dosyalar | Ortak sahne | Öncesi farkı |
|---|---|---|---|
| Salon halısı | `salon-halisi-oncesi.webp` / `salon-halisi-sonrasi.webp` | A patterned Turkish living-room carpet laid flat on a light floor, shot straight from above | Öncesi: a distinctly darker grey traffic path worn across the middle of the carpet, dull colours |
| Yün halı | `yun-hali-oncesi.webp` / `yun-hali-sonrasi.webp` | A hand-woven wool rug with visible fringe, laid flat, shot from above, fringe fully in frame | Öncesi: fringe yellowed and tangled, colours dull and greyish |
| Shaggy | `shaggy-oncesi.webp` / `shaggy-sonrasi.webp` | A cream long-pile shaggy rug, close three-quarter view showing pile depth | Öncesi: pile flattened and matted, grey dust visible deep between the strands |
| Koltuk | `koltuk-oncesi.webp` / `koltuk-sonrasi.webp` | A fabric armchair photographed from the same three-quarter angle in a living room | Öncesi: armrests and seat cushion visibly darkened and soiled |
| Stor perde | `stor-perde-oncesi.webp` / `stor-perde-sonrasi.webp` | A kitchen roller blind against a window, shot straight on | Öncesi: greasy yellowed film and dust marks across the fabric |
| Yorgan | `yorgan-oncesi.webp` / `yorgan-sonrasi.webp` | A folded quilt on a plain surface, same fold, same angle | Öncesi: dull, slightly greyed fabric with storage creases |

---

## Görselleri koyduktan sonra

```
npm run varyant     # -600 / -800 / -900 türevlerini üretir
npm run duman       # hiçbir sayfa çökmüyor mu
npm run build
```

`npm run varyant` sharp ister (bir kez: `npm i -D sharp`). Türev üretilmezse
`srcset` 404'e gider ve **mobilde görsel hiç görünmez** — bu daha önce yaşandı.
