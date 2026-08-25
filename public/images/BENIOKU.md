# Görsel Klasörleri — Denizli Tomay Halı Yıkama

Devralınan iskeletten kalan 116 görsel (4,5 MB) ve 45 kaynak dosya (12 MB) **silindi**.
Git geçmişinde duruyor (`git log --diff-filter=D -- public/images`), gerekirse geri alınır.

Görsel yokken site **kırılmaz**: `SmartImage.jsx` ve `ProjectGallery.jsx` tasarım
yer tutucusu gösterir. Yani sitede yanlış markanın fotoğrafı yerine boş kutu görünür —
doğru olan bu, yanlış markanın fotoğrafı durmaz.

## Kod dosya adından türev üretiyor — varyantı da koyun

| Klasör | Ana dosya | Zorunlu varyantlar | Kaynak |
|---|---|---|---|
| `hero/` | `hero-N.webp` (1600×900) | `hero-N-800.webp` | `HeroSection.jsx:83` |
| `hizmetler/` | `<slug>.webp` | `<slug>-600.webp`, `<slug>-900.webp` | `ServiceCard.jsx:23-26` |
| `bolgeler/` | `<bolge-slug>.webp` | `<bolge-slug>-600.webp` | ilçe/mahalle sayfaları |
| `oncesi-sonrasi/` | `<is>-oncesi.webp` / `<is>-sonrasi.webp` | `-800` varyantı | öncesi/sonrası bileşeni |
| `og/` | `<slug>.jpg` (1200×630) | — | `routeMeta.js:33,217,346` |
| `logo/` | `logo.webp`, `logo-beyaz.webp`, `og-image.jpg`, `apple-touch-icon.png` (180×180) | 192/512 PNG | `Logo.jsx`, `index.html:53` |

**Varyant üretilmezse `srcset` 404'e gider.** Üretim sonrası kontrol:
```
grep -rhoE '"/images/[^"]+\.(webp|jpg|png)' src/data src/components | sort -u | \
  while read p; do p=${p#\"}; [ -f "public$p" ] || echo EKSIK $p; done
```

## OG görselleri atlanmasın
`og/` altındaki 1200×630 JPG'ler **WhatsApp ve sosyal paylaşımda görünen resim**.
Eksikse önizleme boş çıkar. Hizmet başına bir tane + `logo/og-image.jpg`.
