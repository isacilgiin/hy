/**
 * Hizmet bölgeleri — HAFİF İNDEKS (ad, slug, tür, bölge, üst ilçe).
 *
 * ┌──────────────────────────────────────────────────────────────────────────┐
 * │ NEDEN AYRI DOSYA — ölçülmüş sebep                                        │
 * │ src/data/serviceAreas.js 61 bölgenin TAM METNİNİ taşıyor: 208 kB ham,    │
 * │ 63 kB gzip. O dosyayı import eden her sayfa metinlerin TAMAMINI indiriyor│
 * │ — hub sayfası ve 8 hizmet sayfası dâhil, oysa ikisinin de yalnızca isim  │
 * │ ve slug'a ihtiyacı var.                                                   │
 * │                                                                          │
 * │ Bu indeks kayıt başına ~70 bayt; 61 kayıt ≈ 4 kB. Uzun metne gerçekten   │
 * │ ihtiyacı olan tek yer bölge DETAY sayfası ve o da yalnızca KENDİ         │
 * │ kaydına ihtiyaç duyuyor.                                                  │
 * │                                                                          │
 * │ KURAL: Ekranda yalnızca isim/slug/sayı gerekiyorsa BU dosyayı import     │
 * │ edin. serviceAreas.js'i import etmek 63 kB'lık bir karar.                │
 * └──────────────────────────────────────────────────────────────────────────┘
 *
 * BU DOSYA ELLE DÜZENLENMEZ — serviceAreas.js'ten türetilir. Bölge eklerken
 * orayı düzenleyin, sonra bu dosyayı yeniden üretin.
 */

export const zoneContent = {
  // `label`  : TEK bir ilçeyi nitelerken kullanılır (ilçe detay sayfası).
  // `grupAdi`: ilçe GRUBUNU başlıklarken kullanılır (hub sayfası, noscript).
  merkez: {
    grupAdi: 'Denizli Merkez',
    label: 'Denizli merkez',
    howWeWork:
      'Tesisimiz Merkezefendi\'de olduğu için merkez ilçelerde alma ve teslim aynı gün planlanabiliyor. Alım ve teslim ücretsiz; halı tesise geldiği andan itibaren etiketli ilerliyor.',
  },
  yakin: {
    grupAdi: 'Merkeze Yakın İlçeler',
    label: 'Merkeze yakın ilçe',
    howWeWork:
      'Merkeze yakın olduğu için araç günübirlik gidip geliyor. Randevuyu evde birinin bulunduğu saate göre kuruyoruz; alım ve teslim saatlerinin aynı olması gerekmiyor.',
  },
  uzak: {
    grupAdi: 'Merkeze Uzak İlçeler',
    label: 'Merkeze uzak ilçe',
    howWeWork:
      'Merkeze uzak ilçelerde çıkışı toplu planlıyoruz: aynı gün aynı bölgedeki adresleri birleştiriyoruz. Bu yüzden alma günü telefonda birlikte belirleniyor, teslim de aynı düzene göre yazılıyor.',
  },
}

const bolgelerIndex = [
  { name: "Merkezefendi", slug: "merkezefendi-hali-yikama", tur: "ilce", zone: "merkez" },
  { name: "Pamukkale", slug: "pamukkale-hali-yikama", tur: "ilce", zone: "merkez" },
  { name: "Babadağ", slug: "babadag-hali-yikama", tur: "ilce", zone: "yakin" },
  { name: "Buldan", slug: "buldan-hali-yikama", tur: "ilce", zone: "yakin" },
  { name: "Honaz", slug: "honaz-hali-yikama", tur: "ilce", zone: "yakin" },
  { name: "Sarayköy", slug: "saraykoy-hali-yikama", tur: "ilce", zone: "yakin" },
  { name: "Serinhisar", slug: "serinhisar-hali-yikama", tur: "ilce", zone: "yakin" },
  { name: "Tavas", slug: "tavas-hali-yikama", tur: "ilce", zone: "yakin" },
  { name: "Acıpayam", slug: "acipayam-hali-yikama", tur: "ilce", zone: "uzak" },
  { name: "Baklan", slug: "baklan-hali-yikama", tur: "ilce", zone: "uzak" },
  { name: "Bekilli", slug: "bekilli-hali-yikama", tur: "ilce", zone: "uzak" },
  { name: "Beyağaç", slug: "beyagac-hali-yikama", tur: "ilce", zone: "uzak" },
  { name: "Bozkurt", slug: "bozkurt-hali-yikama", tur: "ilce", zone: "uzak" },
  { name: "Çal", slug: "cal-hali-yikama", tur: "ilce", zone: "uzak" },
  { name: "Çameli", slug: "cameli-hali-yikama", tur: "ilce", zone: "uzak" },
  { name: "Çardak", slug: "cardak-hali-yikama", tur: "ilce", zone: "uzak" },
  { name: "Çivril", slug: "civril-hali-yikama", tur: "ilce", zone: "uzak" },
  { name: "Güney", slug: "guney-hali-yikama", tur: "ilce", zone: "uzak" },
  { name: "Kale", slug: "kale-hali-yikama", tur: "ilce", zone: "uzak" },
  { name: "1200 Evler", slug: "1200-evler-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Merkezefendi", parentSlug: "merkezefendi-hali-yikama" },
  { name: "Adalet", slug: "adalet-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Merkezefendi", parentSlug: "merkezefendi-hali-yikama" },
  { name: "Akkonak", slug: "akkonak-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Merkezefendi", parentSlug: "merkezefendi-hali-yikama" },
  { name: "Altıntop", slug: "altintop-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Merkezefendi", parentSlug: "merkezefendi-hali-yikama" },
  { name: "Barbaros", slug: "barbaros-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Merkezefendi", parentSlug: "merkezefendi-hali-yikama" },
  { name: "Bereketler", slug: "bereketler-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Merkezefendi", parentSlug: "merkezefendi-hali-yikama" },
  { name: "Değirmenönü", slug: "degirmenonu-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Merkezefendi", parentSlug: "merkezefendi-hali-yikama" },
  { name: "Eskihisar", slug: "eskihisar-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Merkezefendi", parentSlug: "merkezefendi-hali-yikama" },
  { name: "Gerzele", slug: "gerzele-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Merkezefendi", parentSlug: "merkezefendi-hali-yikama" },
  { name: "Gümüşçay", slug: "gumuscay-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Merkezefendi", parentSlug: "merkezefendi-hali-yikama" },
  { name: "Hacıeyüplü", slug: "hacieyuplu-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Merkezefendi", parentSlug: "merkezefendi-hali-yikama" },
  { name: "İlbade", slug: "ilbade-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Merkezefendi", parentSlug: "merkezefendi-hali-yikama" },
  { name: "Karahasanlı", slug: "karahasanli-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Merkezefendi", parentSlug: "merkezefendi-hali-yikama" },
  { name: "Muratdede", slug: "muratdede-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Merkezefendi", parentSlug: "merkezefendi-hali-yikama" },
  { name: "Servergazi", slug: "servergazi-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Merkezefendi", parentSlug: "merkezefendi-hali-yikama" },
  { name: "Sevindik", slug: "sevindik-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Merkezefendi", parentSlug: "merkezefendi-hali-yikama" },
  { name: "Sırakapılar", slug: "sirakapilar-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Merkezefendi", parentSlug: "merkezefendi-hali-yikama" },
  { name: "Sümer", slug: "sumer-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Merkezefendi", parentSlug: "merkezefendi-hali-yikama" },
  { name: "Şemikler", slug: "semikler-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Merkezefendi", parentSlug: "merkezefendi-hali-yikama" },
  { name: "Yenişehir", slug: "yenisehir-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Merkezefendi", parentSlug: "merkezefendi-hali-yikama" },
  { name: "Akköy", slug: "akkoy-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Pamukkale", parentSlug: "pamukkale-hali-yikama" },
  { name: "Aktepe", slug: "aktepe-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Pamukkale", parentSlug: "pamukkale-hali-yikama" },
  { name: "Anafartalar", slug: "anafartalar-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Pamukkale", parentSlug: "pamukkale-hali-yikama" },
  { name: "Atalar", slug: "atalar-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Pamukkale", parentSlug: "pamukkale-hali-yikama" },
  { name: "Bağbaşı", slug: "bagbasi-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Pamukkale", parentSlug: "pamukkale-hali-yikama" },
  { name: "Cumhuriyet", slug: "cumhuriyet-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Pamukkale", parentSlug: "pamukkale-hali-yikama" },
  { name: "Deliktaş", slug: "deliktas-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Pamukkale", parentSlug: "pamukkale-hali-yikama" },
  { name: "Dokuzkavaklar", slug: "dokuzkavaklar-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Pamukkale", parentSlug: "pamukkale-hali-yikama" },
  { name: "Fesleğen", slug: "feslegen-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Pamukkale", parentSlug: "pamukkale-hali-yikama" },
  { name: "Güzelköy", slug: "guzelkoy-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Pamukkale", parentSlug: "pamukkale-hali-yikama" },
  { name: "Hacıkaplanlar", slug: "hacikaplanlar-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Pamukkale", parentSlug: "pamukkale-hali-yikama" },
  { name: "İncilipınar", slug: "incilipinar-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Pamukkale", parentSlug: "pamukkale-hali-yikama" },
  { name: "İstiklal", slug: "istiklal-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Pamukkale", parentSlug: "pamukkale-hali-yikama" },
  { name: "Karahayıt", slug: "karahayit-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Pamukkale", parentSlug: "pamukkale-hali-yikama" },
  { name: "Karşıyaka", slug: "karsiyaka-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Pamukkale", parentSlug: "pamukkale-hali-yikama" },
  { name: "Kayıhan", slug: "kayihan-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Pamukkale", parentSlug: "pamukkale-hali-yikama" },
  { name: "Kınıklı", slug: "kinikli-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Pamukkale", parentSlug: "pamukkale-hali-yikama" },
  { name: "Mehmetçik", slug: "mehmetcik-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Pamukkale", parentSlug: "pamukkale-hali-yikama" },
  { name: "Pelitlibağ", slug: "pelitlibag-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Pamukkale", parentSlug: "pamukkale-hali-yikama" },
  { name: "Siteler", slug: "siteler-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Pamukkale", parentSlug: "pamukkale-hali-yikama" },
  { name: "Topraklık", slug: "topraklik-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Pamukkale", parentSlug: "pamukkale-hali-yikama" },
  { name: "Zeytinköy", slug: "zeytinkoy-hali-yikama", tur: "mahalle", zone: "merkez", ilce: "Pamukkale", parentSlug: "pamukkale-hali-yikama" },
]

export const ilceler = bolgelerIndex.filter((a) => a.tur === 'ilce')
export const mahalleler = bolgelerIndex.filter((a) => a.tur === 'mahalle')
export const mahalleleriBul = (ilceSlug) => mahalleler.filter((m) => m.parentSlug === ilceSlug)

export default bolgelerIndex
