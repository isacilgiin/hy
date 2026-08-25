/**
 * Ana sayfa hero slider içerikleri — Denizli Tomay Halı Yıkama.
 *
 * Her slayt bir hizmete bağlıdır: arka plan fotoğrafı o hizmetin sahadaki hâlini
 * gösterir, ikinci buton doğrudan o hizmetin detay sayfasına gider. Böylece hero
 * hem tanıtım yapıyor hem de hizmet sayfalarına iç link veriyor.
 *
 * image     : public/images/hero/*.webp (1600x900). Görsel yoksa otomatik tasarım
 *             zemini gösterilir — kırık görsel çıkmaz.
 *             DİKKAT: kod srcset'i dosya adından türetiyor (hero-N -> hero-N-800),
 *             yani her görselin -800 varyantı da üretilmeli, yoksa 404'e gider.
 * icon      : src/components/Icon.jsx ikon adı
 * serviceTo : ikinci butonun gideceği hizmet sayfası
 *
 * ┌──────────────────────────────────────────────────────────────────────────┐
 * │ İLK SLAYTIN BAŞLIĞI SAYFANIN <h1>'İDİR — sitedeki en ağırlıklı başlık.   │
 * │ vite.config.js > tokens > SITE_H1 bu diziden OKUNUYOR, ayrıca yazılmıyor.│
 * │ Sebep: noscript H1'i ile ekranda görünen H1 ayrışırsa cloaking olur.     │
 * │ Üç satır (title / titleAccent / titleAfter) TEK CÜMLE olarak okunur;     │
 * │ sırayı bozarsanız cümle bozulur.                                         │
 * │                                                                          │
 * │ Hedef sorgu "halı yıkama denizli" — başlık o kelimelerle BAŞLIYOR.       │
 * │ Gerekçe ve tam sorgu haritası: siteConfig.js > seo.hedefSorgular         │
 * └──────────────────────────────────────────────────────────────────────────┘
 */

const heroSlides = [
  {
    id: 'hali-yikama',
    image: '/images/hero/hero-1.webp',
    imageAlt: 'Fabrikada 16 fırçalı tam otomatik makinede halı yıkama',
    icon: 'carpetRoll',
    badge: 'Denizli & Tüm İlçeler',
    title: 'Halı Yıkama Denizli:',
    titleAccent: 'Alıyoruz, Yıkıyoruz,',
    titleAfter: 'Kapınıza Teslim Ediyoruz',
    description:
      'Halınızı adresinizden alıyoruz. 16 fırçalı tam otomatik makinelerde, <strong>halının cinsine göre ayarlanan fırça sertliğiyle</strong> yıkıyor, kapalı kurutma odalarında kurutup ambalajlı teslim ediyoruz. Alım ve teslim ücretsiz.',
    serviceTo: '/hizmetler/hali-yikama/',
    serviceLabel: 'Halı Yıkama',
  },
  {
    id: 'koltuk-yikama',
    image: '/images/hero/hero-2.webp',
    imageAlt: 'Evde yüksek basınçlı vakumlu makineyle koltuk yıkama',
    icon: 'sofa',
    badge: 'Yerinde Hizmet',
    title: 'Koltuğunuz',
    titleAccent: 'Evden Çıkmadan',
    titleAfter: 'Temizlenir',
    description:
      'Koltuk taşınmaz — ekip adresinize gelir. Yüksek basınçlı vakumlu ünitede kirli su geri çekilir; <strong>kumaşta deterjan kalıntısı bırakmıyoruz</strong>, çünkü kalıntı koltuğu daha hızlı kirletir.',
    serviceTo: '/hizmetler/koltuk-yikama/',
    serviceLabel: 'Koltuk Yıkama',
  },
  {
    id: 'stor-perde-yikama',
    image: '/images/hero/hero-3.webp',
    imageAlt: 'Ultrasonik makinede stor perde yıkama',
    icon: 'curtain',
    badge: 'Sökme & Takma Dâhil',
    title: 'Stor ve Zebra Perde',
    titleAccent: 'Kırışmadan',
    titleAfter: 'Yıkanır',
    description:
      'Mekanizmalı perde evde yıkanınca kumaş kırılır ya da mekanizma bozulur. Ultrasonik makinede, <strong>katlanmadan ve düz hâlde</strong> yıkıyoruz. Sökme ve tekrar takma bize ait, ayrıca ücret almıyoruz.',
    serviceTo: '/hizmetler/stor-perde-yikama/',
    serviceLabel: 'Perde Yıkama',
  },
  {
    id: 'el-dokuma-hali-yikama',
    image: '/images/hero/hero-4.webp',
    imageAlt: 'El dokuma yün halının düşük ısıda yıkanması',
    icon: 'wool',
    badge: 'Ayrı Program',
    title: 'Yün ve El Dokuma Halı',
    titleAccent: 'Makine Halısıyla',
    titleAfter: 'Aynı Programa Girmez',
    description:
      'El dokuma halıdaki boya makine halısındaki gibi sabit değildir. Yıkamadan önce <strong>renk akma testi</strong> yapıyor, düşük ısı ve yumuşak fırçayla çalışıyoruz. Saçak ayrı ele alınır.',
    serviceTo: '/hizmetler/el-dokuma-hali-yikama/',
    serviceLabel: 'El Dokuma & Yün',
  },
  {
    id: 'yorgan-battaniye-yikama',
    image: '/images/hero/hero-5.webp',
    imageAlt: 'Endüstriyel makinede yorgan ve battaniye yıkama',
    icon: 'blanket',
    badge: 'Endüstriyel Makine',
    title: 'Yorgan ve Battaniye',
    titleAccent: 'Ev Makinesinde',
    titleAfter: 'Dönmez, Yıkanmaz',
    description:
      'Sıkışan yorgan makinede dönemez; su ve deterjan içeri işlemez. Endüstriyel makinede iç dolgusuna kadar durulanır. <strong>Tam kuruma teslim şartımızdır</strong> — nemli katlanan yorgan içeriden küflenir.',
    serviceTo: '/hizmetler/yorgan-battaniye-yikama/',
    serviceLabel: 'Yorgan & Battaniye',
  },
]

export default heroSlides
