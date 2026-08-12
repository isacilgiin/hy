/**
 * Ana sayfa hero slider içerikleri.
 *
 * image : public/images/hero/<dosya>.jpg  (önerilen: 1920x1080, WebP/JPG, <300KB)
 *         Görsel yoksa otomatik olarak tasarım zemini gösterilir — kırık görsel çıkmaz.
 * icon  : src/components/Icon.jsx içindeki ikon adı
 *
 * Slayt eklemek/çıkarmak için sadece bu diziyi düzenle.
 */

const heroSlides = [
  {
    id: 'delme-kesme',
    image: '/images/hero/hero-1.jpg',
    imageAlt: 'Betonarme duvarda karot makinesiyle delme işlemi',
    icon: 'drill',
    badge: 'Denizli & Çevre İlçeler',
    title: 'Profesyonel',
    titleAccent: 'Beton Delme & Kesme',
    titleAfter: 'Hizmetleri',
    description:
      'Karot ve elmas diskli kesme ekipmanlarımızla <strong>sıfır hata</strong>, minimum titreşim ve maksimum hız. Taşıyıcı sisteme zarar vermeden, pürüzsüz kesim yüzeyiyle teslim.',
  },
  {
    id: 'hidrolik',
    image: '/images/hero/hero-2.jpg',
    imageAlt: 'Hidrolik kesme sistemiyle büyük çaplı beton kesim çalışması',
    icon: 'hydraulic',
    badge: 'Büyük Çaplı Projeler',
    title: 'Hidrolik Güçle',
    titleAccent: 'Yüksek Kapasiteli',
    titleAfter: 'Kesim',
    description:
      'Köprü, baraj ve sanayi yapılarında <strong>1 metreyi aşan derinliklerde</strong> kesim. Elektrik altyapısının yetersiz olduğu sahalarda da kesintisiz çalışıyoruz.',
  },
  {
    id: 'kesif',
    image: '/images/hero/hero-3.jpg',
    imageAlt: 'Şantiyede proje keşfi yapan uzman ekip',
    icon: 'clipboard',
    badge: 'Ücretsiz Keşif',
    title: 'Önce Yerinde',
    titleAccent: 'Keşif ve Teklif',
    titleAfter: 'Sonra İş',
    description:
      'Ekibimiz projenizi yerinde değerlendirir, uygulanabilir yöntemi ve <strong>net fiyatı</strong> önceden söyler. Sürpriz maliyet çıkmaz.',
  },
]

export default heroSlides
