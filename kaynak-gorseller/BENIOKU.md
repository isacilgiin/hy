# Kaynak Görseller

Buradaki dosyalar **ham kaynaklardır** ve siteye yüklenmez.

Orijinal olarak `public/images/hamgorseller/` altına atılmışlardı; orada kalsalardı
`npm run build` sırasında yayın klasörüne kopyalanıp hostinge 3,9 MB gereksiz
dosya yüklenecekti. Bu yüzden `public/` dışına taşındılar.

SVG dosyaları aslında birer SVG değil: içine base64 JPEG gömülmüş sarmalayıcılar.
Bu yüzden 400-740 KB boyutundalardı. Gömülü JPEG'ler çıkarılıp WebP'ye çevrildi:

| Kaynak | Site içindeki hâli |
|---|---|
| karotdelme.svg | hero/hero-1.webp · hizmetler/karot.webp · hizmetler/beton-delme.webp (farklı kırpma) |
| betonkesme2.svg | hero/hero-2.webp · hizmetler/beton-kesme.webp · hizmetler/hidrolik-beton-kesme.webp (farklı kırpma) |
| betonkirma.svg | hero/hero-3.webp · hizmetler/beton-kirma.webp |
| derz-asfalt-kesim.svg | hero/hero-4.webp · hizmetler/asfalt-derz-kesim.webp |
| filiz-ekimi.svg | hero/hero-5.webp · hizmetler/filiz-ekimi.webp |
| kimyasal-ankraj.svg | hizmetler/ankraj.webp · hizmetler/kimyasal-dubel.webp (farklı kırpma) |
| kontrollu-yikim.svg | hero/hero-6.webp · hizmetler/kontrollu-bina-yikimi.webp |
| 20karotlogo.webp | logo/logo-beyaz.webp (2x) · logo/logo.webp (kömür tonlu) · logo/og-image.jpg |

Yeni fotoğraf eklerken: 1600x900 (hero) veya 1200x675 (hizmet) WebP, kalite 76-80.
