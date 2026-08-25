# Yazı Tipi — Outfit (değişken)

## Neden Outfit

Logonun wordmark'ı geometrik ve uçları hafif yuvarlatılmış bir sans. Outfit aynı
ailede: geometrik, açık formlu, modern. Marka işaretiyle gövde metni aynı dili
konuşuyor.

Önceki yazı tipi **Kanit** idi ve devralınan iskeletten geliyordu — başka bir
sektör için seçilmişti, bu markayla bir ilgisi yoktu.

## Neden değişken font

Outfit **tek dosyada** 400–700 arası bütün ağırlıkları taşıyor.

| | Kanit (önceki) | Outfit (şimdi) |
|---|---|---|
| Dosya | 4 (400/500/600/700) | 2 (latin + latin-ext) |
| Toplam | 84 KB | **45 KB** |
| Preload edilen | yalnızca 2 dosya | **ikisi de** |
| Kapsanan ağırlık | preload'da 2 | **dördü de** |

Önceki kurulumda 500 ve 600 ağırlıkları preload edilmiyordu; metin görünürken
iniyorlardı ve o anda tarayıcı 400'ü kalınlaştırarak sahte bir ağırlık
üretiyordu (faux bold). Değişken fontta bu sorun yok.

## Neden iki alt küme ve neden ikisi de preload

Türkçe iki Unicode aralığına yayılıyor:

- **latin**: `ı` (U+0131), `ç`, `ö`, `ü`
- **latin-ext**: `ş` `Ş` (U+015F/015E), `ğ` `Ğ` (U+011F/011E), `İ` (U+0130)

Yani sıradan bir Türkçe cümle ikisini de istiyor. `unicode-range` sayesinde
tarayıcı yalnızca gerekeni indirir — ama burada ikisi de gerekli ve ikisi de
ilk ekranda. Bu yüzden **ikisi de preload ediliyor**; birini bırakmak o alt
kümedeki harfleri metin görünürken indirmek demek olurdu.

## Nerede tanımlı

- `@font-face` ve `preload`: `index.html` `<head>` içinde **satır içi**.
  `src/index.css`'e taşınmamalı — o dosya CSS paketine giriyor ve font keşfi
  bir tur gecikirdi.
- Tailwind tokenı: `src/index.css` `@theme` içinde `--font-govde`.
  (Eski ad `--font-kanit` idi; yazı tipi adını token adına gömmek, tipi
  değiştirince yanlış isim bırakıyor.)

## Değiştirmek gerekirse

1. Yeni fontun `latin` ve `latin-ext` woff2 alt kümelerini `public/fonts/` içine koy
2. `index.html`'deki iki `preload` ve iki `@font-face` bloğunu güncelle
   (`unicode-range` değerlerini AYNEN koru — Türkçe kapsaması onlara bağlı)
3. `src/index.css`'te `--font-govde` değerini değiştir
4. Eski woff2 dosyalarını **sil** — yoksa yayına ölü varlık gider
5. `public/fonts/OFL.txt` lisansını yeni fontunkiyle değiştir

## Lisans

Outfit, SIL Open Font License 1.1 ile dağıtılıyor. Lisans metni
`public/fonts/OFL.txt` içinde.
