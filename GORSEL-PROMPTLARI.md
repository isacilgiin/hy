# Görsel Üretim Rehberi — Canva AI / Magic Media

Bu dosya, siteye eklenecek görseller için hazır promptları ve teknik gereksinimleri içerir.
Görselleri üretip `public/images/...` altına **tam olarak belirtilen isimle** attığınızda
kod değişikliği gerekmez.

---

## ⚠️ Önce şunu konuşalım: proje galerisi

`/projeler/` sayfası şu an **"Başarıyla tamamladığımız projelerden bazıları"** diyor.
Oraya yapay zekâ ile üretilmiş görseller koymak, **yapmadığınız işleri yapmış gibi
göstermek** olur. Bu:

- müşteriye karşı yanlış beyandır (bir müşteri "şu köprüyü siz mi kestiniz?" diye sorabilir),
- Google'ın "deneyim" (E-E-A-T) sinyaline ters düşer — yapay zekâ ile üretilmiş stok
  görsel, gerçek saha fotoğrafının yerini tutmaz,
- rakiplerinizin gerçek fotoğrafları varsa sizi geri plana atar.

**Üç seçenek var, sırayla önerdiğim gibi:**

**1. En iyisi — telefonla çekin.** İşe gittiğinizde 3-4 kare çekin: makine çalışırken,
kesim hattı, iş bitiminde temiz teslim edilmiş hâli. Profesyonel olmasına gerek yok;
gerçek olması yeter. Bunlar internette başka hiçbir yerde bulunmayan **benzersiz görsel**
demek — SEO'da en değerlisi bu. İzin için müşteriye "fotoğraf çekebilir miyim" demek
yeterli, adres/isim paylaşmıyorsunuz.

**2. Galeriyi şimdilik kapalı tutun.** Şu an zaten öyle: `src/data/projects.js` boş
olduğu için Projeler sayfası "yakında" diyor, ana sayfadaki bölüm gizli. Sahte içerik
koymaktan iyidir.

**3. Yapay zekâ görseli kullanacaksanız** sayfa başlığını ve metinlerini değiştirelim:
"Tamamlanan Projeler" yerine **"Uygulama Alanları"**, her görselin altına da
**"temsili görsel"** notu koyarız. Böyle isterseniz söyleyin, 10 dakikalık iş.

Aşağıdaki promptlar **hizmet anlatım görselleri** içindir — bunlarda sorun yok,
sektörde standart kullanım.

---

## Teknik gereksinimler

| Nereye | Boyut / oran | Dosya adı | Hedef ağırlık |
|---|---|---|---|
| Hero slider | 1600×900 (16:9) | `public/images/hero/hero-N.webp` | < 200 KB |
| Hizmet sayfası | 1200×675 (16:9) | `public/images/hizmetler/<slug>.webp` | < 120 KB |
| Proje galerisi | 1600×1200 (4:3) | `public/images/projeler/proje-NN.webp` | < 150 KB |
| Hakkımızda | 1200×900 (4:3) | `public/images/hakkimizda.webp` | < 120 KB |

**Canva'dan indirdikten sonra:** JPG olarak indirin, bana atın — WebP'ye çevirip
sıkıştırayım (elle uğraşmanıza gerek yok). Ya da [squoosh.app](https://squoosh.app)
üzerinden WebP / kalite 78 ile kendiniz geçirebilirsiniz.

---

## 🎨 ORTAK STİL BLOĞU

**Her promptun SONUNA bunu ekleyin.** Görsellerin birbirine benzemesini ve sitenin
paletiyle uyumlu olmasını sağlayan kısım budur:

```
Photorealistic documentary construction photography, shot on a full-frame camera with a
35mm lens, shallow depth of field, natural directional light with warm amber highlights
and deep charcoal shadows. Muted industrial color palette: grey concrete, dark steel,
worn machinery, with warm golden accents. Gritty, authentic, working-site atmosphere —
not a clean studio render. No text, no signage, no lettering, no logos, no watermarks,
no brand names on equipment. Horizontal 16:9 composition with clear empty space on the
left third for overlaid text.
```

> **Not:** Son cümledeki "empty space on the left third" **sadece hero görselleri**
> içindir (yazı solda duruyor). Hizmet ve proje görsellerinde o cümleyi çıkarın,
> onun yerine `Balanced centered composition.` yazın.

---

## 🔴 Yapay zekânın sürekli yaptığı 3 hata

1. **Yazı uydurur.** Makinelerin üstüne anlamsız harfler, tabelalara sahte kelimeler
   yazar. Türkçe karakterleri hiç beceremez. Bu yüzden promptta "no text, no lettering"
   var — yine de çıkarsa o kareyi atın, yeniden üretin.
2. **Marka logosu uydurur.** Ekipmanların üstüne Hilti/Husqvarna benzeri sahte logolar
   koyabilir. Çıkarsa kullanmayın — başka firmanın markası gibi görünür.
3. **El ve parmak bozar.** İşçinin eline yakın çekimlerde parmak sayısını şaşırır.
   Yakın plan el görsellerinde her kareyi kontrol edin.

**Logo ekleme:** Yapay zekâya logo çizdirmeyin. Görseli ürettikten sonra Canva'da
`kaynak-gorseller/20karotlogo.webp` dosyasını üstüne katman olarak koyun — sağ alt
köşe, %70 opaklık, küçük boyut yeterli. Logo beyaz olduğu için koyu alanlara denk
getirin.

---

## 1) Eksik hizmet görselleri (öncelikli)

Şu an 10 hizmetin 7'sinin kendi fotoğrafı var; 3 tanesi başka fotoğrafın kırpılmışı.
Bu 3'ü gerçek görselle değiştirmek en hızlı kazanç:

### `hizmetler/hidrolik-beton-kesme.jpg`
```
A heavy-duty hydraulic wall saw mounted on a track rail, cutting deep into a thick
reinforced concrete bridge pier. Thick hydraulic hoses run from the saw down to a
hydraulic power pack on the ground. Water spray at the cutting point, exposed rebar
visible in the cut line. An operator in a hard hat and high-visibility vest stands
back, controlling the machine remotely. Outdoor industrial setting, overcast daylight.
```
+ ortak stil bloğu (`Balanced centered composition.` ile)

### `hizmetler/kimyasal-dubel.jpg`
```
Close-up of a two-component chemical anchor injection process into a drilled hole in a
concrete column. A gloved hand holds a dispensing gun with a long static mixer nozzle
inserted into the hole. Several already-filled holes are visible nearby with threaded
rods set into them. Clean, precise, technical detail shot. Construction site background
softly out of focus.
```
+ ortak stil bloğu

### `hizmetler/beton-delme.jpg`
```
A rig-mounted diamond core drill boring a large-diameter hole horizontally through a
reinforced concrete wall inside an unfinished building. The drill barrel is deep in the
wall, water running down the surface. Several completed circular core holes of different
diameters are visible along the same wall. A worker in a hard hat steadies the rig.
Interior construction setting, light coming from a window opening on the right.
```
+ ortak stil bloğu

---

## 2) Hakkımızda görseli

### `hakkimizda.jpg` (1200×900, 4:3)
```
A small professional construction crew of three or four workers in hard hats and
high-visibility vests standing beside their equipment on a job site: a core drilling
rig, a wall saw on its rail, hoses and cases laid out neatly. They are looking at a
plan on a clipboard together, mid-discussion. Late afternoon light. The scene reads as
an experienced, organised team rather than a posed corporate photo.
```
+ ortak stil bloğu (`Balanced centered composition.` ile)

---

## 3) Ek hero slaytları (isterseniz)

Şu an 6 slayt var ve hepsinin görseli mevcut. Yenilemek isterseniz:

### Gece / acil servis slaytı — `hero/hero-7.jpg`
```
A night-time concrete cutting operation lit by portable work lights. A wall saw cuts
through a concrete slab, sparks and water spray catching the light. Two workers in
reflective vests, one operating and one watching the cut line. Dark blue night sky in
the background, warm artificial light pooling on the wet concrete surface.
```
+ ortak stil bloğu (hero versiyonu, sol üçte bir boş)

> Bu görseli ekleyeceksek `src/data/heroSlides.js` içine 7. slaytı da yazarım —
> "7/24 Acil Servis" mesajı için birebir uygun ve gerçek bir farkımız (Google
> profilinde 24 saat açık görünüyorsunuz).

---

## 4) Proje galerisi (yukarıdaki uyarıyı okuduktan sonra)

Gerçek fotoğraf çekemiyorsanız ve 3. seçeneği (temsili görsel) tercih ederseniz,
şu 6 konu siteyi iyi temsil eder. Her biri 4:3, `Balanced centered composition.` ile:

1. **Tesisat geçiş delimi** — `A neat row of three large circular core holes drilled through a concrete slab, plumbing pipes already passing through two of them, the third still empty and clean-edged. Underside view from a basement ceiling.`
2. **Kapı açıklığı kesimi** — `A rectangular opening freshly cut into an interior concrete wall, the cut block still in place with clean straight saw lines around it, dust sheets on the floor, cutting rail still mounted on the wall.`
3. **Döşeme kesimi** — `A long straight saw cut across an industrial concrete floor slab, water and slurry along the cut line, floor saw parked at the end of the cut, warehouse interior.`
4. **Asansör boşluğu** — `A tall vertical rectangular opening cut through several floors of a concrete structure for a lift shaft, safety barriers around the edges, daylight coming through from above.`
5. **Filiz ekimi** — `A grid of steel reinforcement dowels chemically anchored into an existing concrete foundation, protruding upward in neat rows, ready for a new concrete pour.`
6. **Kontrollü kısmi yıkım** — `Controlled partial demolition of the top floor of a concrete building, a long-reach excavator with a breaker attachment working carefully, water mist suppressing dust, scaffolding and safety netting on the facade.`

---

## Dosya adlandırma — bunu atlamayın

İndirdiğiniz dosyaları **birebir bu isimlerle** gönderin, yoksa hangisinin nereye
gideceğini karıştırırız:

```
hidrolik-beton-kesme.jpg
kimyasal-dubel.jpg
beton-delme.jpg
hakkimizda.jpg
hero-7.jpg
proje-01.jpg  proje-02.jpg  ...  proje-06.jpg
```

FileZilla ile `public/images/hamgorseller/` altına atmanız yeterli — ben oradan alıp
boyutlandırır, WebP'ye çevirir, doğru klasörlere yerleştirir ve `kaynak-gorseller/`
altına arşivlerim.
