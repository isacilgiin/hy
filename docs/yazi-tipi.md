# Yazı tipi (Kanit) — neden kendi sunucumuzda

`index.html` içindeki font kurallarını değiştirmeden önce burayı okuyun.

## Google Fonts `<link>`'ini geri koymayın

Eskiden `<head>`'de şu vardı:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;500;600;700&display=swap" rel="stylesheet" />
```

Bu kurulum tarayıcıyı **seri bir zincire** sokuyordu:

1. Birinci origin'e bağlan, CSS'i indir
2. CSS'i ayrıştır, içindeki font adreslerini keşfet
3. **İkinci** origin'e bağlan, woff2'leri indir

Ölçülen render engeli **820 ms**, 46 sayfanın hepsinde. `preconnect` 1. ve 3.
adımdaki el sıkışmayı kısaltıyordu ama zinciri kaldırmıyordu — CSS inmeden font
adresleri bilinmiyor.

Şimdi kurallar `<head>` içinde satır içi duruyor. Tarayıcı HTML'i ayrıştırırken
font isteğini başlatabiliyor, ikinci origin yok.

Kurallar neden `src/index.css`'te değil: o dosya CSS paketine giriyor, yani
tarayıcı önce paketi indirip ayrıştırmak zorunda kalırdı — zinciri bir adım
kısaltıp geri koymuş olurduk.

## Dosyalar nasıl üretildi

Google Fonts'un `text=` parametresi sunucu tarafında alt küme üretiyor. İstenen
karakter kümesi verilince ağırlık başına **tek** dosya dönüyor; latin ve
latin-ext ayrımı kalkıyor.

| | Dosya | Toplam |
|---|---|---|
| Eski (latin + latin-ext × 4 ağırlık) | 8 | 153,8 KB |
| Şimdi (alt küme × 4 ağırlık) | 4 | 84,4 KB |

Karakter kümesi (238 karakter): Türkçe + Latin-1 + Orta Avrupa aksanları +
noktalama + para birimleri + oklar + matematik işaretleri.

Üretim adımları:

1. Karakter kümesini URL-encode et
2. `https://fonts.googleapis.com/css2?family=Kanit:wght@400;500;600;700&display=swap&text=<encoded>`
   adresini **tarayıcı User-Agent'ıyla** çek (UA yoksa woff2 yerine ttf döner)
3. Dönen 4 adresi indir, `public/fonts/kanit-{400,500,600,700}.woff2` olarak kaydet

Üretilen dosyalar tam birer font: 250 glif, doğru PostScript adları
(Kanit-Regular/Medium/SemiBold/Bold), `GSUB`/`GPOS` tabloları yerinde
(kerning kaybı yok).

## Yeni içerik eklerken dikkat

Alt kümede olmayan bir karakter **sistem yazı tipine düşer**. Türkçe metin,
rakam, para birimi ve olağan noktalama güvende. Yunanca, Kiril, emoji veya
egzotik matematik sembolü kullanacaksanız kümeyi genişletip dosyaları yeniden
üretin.

Kontrol için: sitedeki tüm metni tarayıp alt küme dışında karakter arayın.
Son taramada bulunan 10 karakterin hepsi **kaynak dosyalardaki yorum
satırlarındaydı** (ASCII kutu çizimleri, `┌─┐│└┘`) — render edilen HTML'de yok.

## Preload neden sadece 2 dosya

Ağırlık kullanımı: 400 gövde metni (varsayılan), 500 → 12 yer, 600 → 41 yer,
700 → 51 yer. Dördü de gerçekten kullanılıyor, hiçbiri atılamaz.

Ama preload edilen **yalnızca 400 ve 700**. Sebep: ana sayfanın LCP görseli de
`fetchpriority="high"` ile preload ediliyor ve o görsel 1 numaralı sıralama
hedefimizin LCP'si. Dört fontu birden preload etmek onunla bant genişliği
yarışına sokar. 500 ve 600 satır içi kurallardan normal keşifle iniyor —
ilk ekranda kritik değiller.

## Lisans

Kanit, SIL Open Font License 1.1 — `public/fonts/OFL.txt`. Kendi sunucumuzda
barındırmak lisansa uygun; lisans metni dosyalarla birlikte durmalı.
