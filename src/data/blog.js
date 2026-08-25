/**
 * Blog yazıları — HAFİF İNDEKS.
 *
 * Burada yalnızca liste görünümünün ihtiyacı olan alanlar var. Yazıların TAM
 * METNİ src/data/blogContent.js içinde; ikisi ayrı çünkü blog listesi sayfası
 * 11 yazının tamamını indirmek zorunda kalmasın.
 *
 * ┌──────────────────────────────────────────────────────────────────────────┐
 * │ SLUG'LAR CANLI SİTEDEKİ İNDEKSLİ URL'LERLE EŞLEŞİR                       │
 * │ Dokuz slug denizlihaliyikama.net.tr sitemap'inde İNDEKSLİ. Değiştirirseniz│
 * │ o yazılar 404'e düşer. İki yeni yazı (hali-yikamaci-secerken-nelere-      │
 * │ bakmali, stor-perde-yikama-rehberi) anahtar kelime haritasının boş        │
 * │ bıraktığı iki sorgu için eklendi — siteConfig.js > seo.hedefSorgular.     │
 * └──────────────────────────────────────────────────────────────────────────┘
 *
 * `image`: her yazının KENDİ görseli (/images/blog/<slug>.webp). Önceden
 * hizmet görselleri yeniden kullanılıyordu ve on bir yazının yedisi aynı üç
 * kareyi paylaşıyordu — blog listesi tek tip görünüyordu.
 *
 * `ilgiliHizmetler`: yazının hangi hizmet sayfalarında "İlgili Rehberler"
 * olarak görüneceği. ServiceDetail.jsx bu alanı okuyor — ALANI ATLAMAYIN,
 * atlanınca o sayfa çöküyordu (`undefined.includes`). Şema doğrulaması
 * dosyanın sonunda.
 *
 * Sıralama slug'a göre alfabetik; yeni yazıyı doğru yere ekleyin.
 * İNDEKS ile İÇERİK ayrışmasın: blogContent.js'te karşılığı olmayan bir slug
 * eklenirse sayfa 200 döner ama hidrasyonda /blog/'a yönlenir (BlogPost.jsx).
 */

const blog = [
  {
    slug: "cay-lekesi-nasil-cikar",
    title: "Halıda Çay Lekesi Nasıl Çıkar? İlk Dakikalar Belirleyici",
    ozet: "Halıda çay lekesinin arkasında tanen var: soğuk suyla bastırarak emdirmek çıkarır, ovmak ve sıcak su kalıcı yapar. Hangi leke çıkar, hangisi çıkmaz.",
    okumaSuresi: 6,
    tarih: "2026-08-25",
    kategori: 'Rehber',
    image: "/images/blog/cay-lekesi-nasil-cikar.webp",
    ilgiliHizmetler: ["hali-yikama"],
  },
  {
    slug: "denizli-hali-yikama-fiyatlari-2026",
    title: "Halı Yıkama Fiyatları Denizli: Fiyatı Neye Göre Belirlenir",
    ozet: "Denizli halı yıkama fiyatlarını belirleyen kalemler: ölçü, adet, halının cinsi, tüy uzunluğu, leke durumu ve ucuz teklifin nerede pahalıya patladığı.",
    okumaSuresi: 6,
    tarih: "2026-08-25",
    kategori: 'Rehber',
    image: "/images/blog/denizli-hali-yikama-fiyatlari-2026.webp",
    ilgiliHizmetler: ["hali-yikama", "koltuk-yikama", "stor-perde-yikama"],
  },
  {
    slug: "elde-yikama-vs-makine",
    title: "Halı Elde mi Makinede mi Yıkanmalı? Fark Nerede Başlıyor",
    ozet: "Halı elde yıkama ile makinede halı yıkama rakip değil, farklı işler. Hangisi nerede üstün, ikisi nerede birlikte çalışır, evde sınır nerede biter.",
    okumaSuresi: 6,
    tarih: "2026-08-25",
    kategori: 'Rehber',
    image: "/images/blog/elde-yikama-vs-makine.webp",
    ilgiliHizmetler: ["hali-yikama", "el-dokuma-hali-yikama", "ipek-nepal-hali-yikama"],
  },
  {
    slug: "evde-hali-bakimi-icin-ipuclari",
    title: "Evde Halı Bakımı: Yıkamalar Arasında Nasıl Temiz Tutulur",
    ozet: "Evde halı bakımı süpürme sıklığı ve yönüyle başlıyor. Döner fırça hangi halıda kullanılmaz, altlık ne işe yarar, mobilya izi ve güneş nasıl yönetilir.",
    okumaSuresi: 6,
    tarih: "2026-08-25",
    kategori: 'Rehber',
    image: "/images/blog/evde-hali-bakimi-icin-ipuclari.webp",
    ilgiliHizmetler: ["hali-yikama", "shaggy-hali-yikama"],
  },
  {
    slug: "evde-profesyonel-hali-temizligi",
    title: "Evde Halı Yıkama: Hangi Halı Yıkanır, Hangisi Yıkanmaz?",
    ozet: "Evde halı yıkanır mı? Ebat, taban ve etiket sınırı, ıslak halının ağırlığı, balkonda kurutmanın toz ve rutubet tarafı ile küf kokusunun geri dönüşü.",
    okumaSuresi: 6,
    tarih: "2026-08-25",
    kategori: 'Rehber',
    image: "/images/blog/evde-profesyonel-hali-temizligi.webp",
    ilgiliHizmetler: ["hali-yikama", "yorgan-battaniye-yikama"],
  },
  {
    slug: "hali-yikama-sureci-kac-gun",
    title: "Halı Yıkama Kaç Gün Sürer? Teslim Süresini Kuruma Belirler",
    ozet: "Halı yıkama kaç gün sürer? Teslim ortalama 3-4 iş günü; süreyi kuruma belirliyor. Halı cinsi, tüy uzunluğu ve mevsim bu süreyi nasıl değiştiriyor?",
    okumaSuresi: 6,
    tarih: "2026-08-25",
    kategori: 'Rehber',
    image: "/images/blog/hali-yikama-sureci-kac-gun.webp",
    ilgiliHizmetler: ["hali-yikama", "el-dokuma-hali-yikama", "shaggy-hali-yikama"],
  },
  {
    slug: "hali-yikamaci-secerken-nelere-bakmali",
    title: "Denizli'de Halı Yıkamacı Seçerken Nelere Bakmalı? Beş Soru",
    ozet: "Denizli'de halı yıkamacı seçerken telefonda sorulacak altı soru ve gelen cevabın neyi ele verdiği: kurutma yeri, program, tespit, etiket, fiyat, gün.",
    okumaSuresi: 6,
    tarih: "2026-08-25",
    kategori: 'Rehber',
    image: "/images/blog/hali-yikamaci-secerken-nelere-bakmali.webp",
    ilgiliHizmetler: ["hali-yikama", "ipek-nepal-hali-yikama"],
  },
  {
    slug: "koltuk-yikama-sikligi",
    title: "Koltuk Ne Sıklıkla Yıkanmalı? Sıklığı Belirleyen Koşullar",
    ozet: "Koltuk yıkama sıklığını takvim değil kullanım belirler. Hanenin yükünü, kokunun nereye yerleştiğini ve kendi koltuğunuzu nasıl yoklayacağınızı yazdık.",
    okumaSuresi: 6,
    tarih: "2026-08-25",
    kategori: 'Rehber',
    image: "/images/blog/koltuk-yikama-sikligi.webp",
    ilgiliHizmetler: ["koltuk-yikama"],
  },
  {
    slug: "pamukkale-koltuk-yikama-rehberi",
    title: "Pamukkale ve Merkezefendi Koltuk Yıkama: Yerinde Nasıl Olur?",
    ozet: "Pamukkale ve Merkezefendi'de yerinde koltuk yıkama nasıl yürür: randevu öncesi hazırlık, oda düzeni, su ve elektrik, kuruma süresi ve aynı gün randevu.",
    okumaSuresi: 6,
    tarih: "2026-08-25",
    kategori: 'Rehber',
    image: "/images/blog/pamukkale-koltuk-yikama-rehberi.webp",
    ilgiliHizmetler: ["koltuk-yikama", "yatak-baza-temizligi"],
  },
  {
    slug: "stor-perde-yikama-rehberi",
    title: "Stor ve Zebra Perde Yıkama Denizli: Evde Neden Yıkanmaz?",
    ozet: "Stor ve zebra perde neden evde yıkanmaz: pencerenizdeki sistemi ayırt etme, mekanizmanın su görmesi, evde denenen yöntemler ve aramadan önceki hazırlık.",
    okumaSuresi: 6,
    tarih: "2026-08-25",
    kategori: 'Rehber',
    image: "/images/blog/stor-perde-yikama-rehberi.webp",
    ilgiliHizmetler: ["stor-perde-yikama"],
  },
  {
    slug: "yatak-hijyeni-ve-alerji",
    title: "Yatak Hijyeni ve Toz Akarı: Evde Neye Dikkat Etmek Gerekir",
    ozet: "Yatağı sabah açık bırakmak, çarşaf sıcaklığı ve sıklığı, alez seçimi, döndürme takvimi ve yatağın ne zaman değişmesi gerektiği tek tek anlatılıyor.",
    okumaSuresi: 6,
    tarih: "2026-08-25",
    kategori: 'Rehber',
    image: "/images/blog/yatak-hijyeni-ve-alerji.webp",
    ilgiliHizmetler: ["yatak-baza-temizligi", "yorgan-battaniye-yikama"],
  },
]

/**
 * ŞEMA DOĞRULAMASI — sessiz bozulmayı gürültülü hataya çeviriyor.
 *
 * `ilgiliHizmetler` alanı unutulduğunda ServiceDetail.jsx
 * `undefined.includes(...)` diye çöküyordu ve hata SAYFA AÇILINCA görünüyordu,
 * build sırasında değil. Burada import anında yakalanıyor.
 */
for (const y of blog) {
  if (!Array.isArray(y.ilgiliHizmetler)) {
    throw new Error(
      `blog.js — "${y.slug}" kaydında ilgiliHizmetler dizisi yok. ` +
        `ServiceDetail.jsx bu alanı okuyor; eksik olduğunda hizmet sayfası çöker.`
    )
  }
}

export default blog
