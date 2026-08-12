/**
 * Proje galerisi.
 *
 * image : public/images/projeler/<dosya>.jpg (önerilen 1600x1200)
 *         Görsel yoksa tasarım yer tutucusu gösterilir — kırık görsel çıkmaz.
 * icon  : src/components/Icon.jsx ikon adı (yer tutucuda görünür)
 *
 * TODO: başlıkları ve kategorileri gerçek işlerinizle güncelleyin,
 *       fotoğrafları public/images/projeler/ altına atın.
 */

const projects = [
  { id: 1, image: '/images/projeler/proje-01.jpg', title: 'Beton Delme — Tesisat Geçişi', category: 'Beton Delme', icon: 'drill' },
  { id: 2, image: '/images/projeler/proje-02.jpg', title: 'Duvar Kesimi — Kapı Açıklığı', category: 'Beton Kesme', icon: 'saw' },
  { id: 3, image: '/images/projeler/proje-03.jpg', title: 'Temel Kırım — Tadilat', category: 'Beton Kırma', icon: 'hammer' },
  { id: 4, image: '/images/projeler/proje-04.jpg', title: 'Asfalt Derz Kesimi', category: 'Asfalt Kesim', icon: 'road' },
  { id: 5, image: '/images/projeler/proje-05.jpg', title: 'Hidrolik Kesim — Köprü', category: 'Hidrolik Kesme', icon: 'hydraulic' },
  { id: 6, image: '/images/projeler/proje-06.jpg', title: 'Filiz Ekimi — Güçlendirme', category: 'Filiz Ekimi', icon: 'rebar' },
  { id: 7, image: '/images/projeler/proje-07.jpg', title: 'Asansör Boşluğu Açma', category: 'Beton Kesme', icon: 'saw' },
  { id: 8, image: '/images/projeler/proje-08.jpg', title: 'Kimyasal Ankraj Uygulaması', category: 'Kimyasal Ankraj', icon: 'anchor' },
  { id: 9, image: '/images/projeler/proje-09.jpg', title: 'Havalandırma Kanalı Delimi', category: 'Beton Delme', icon: 'drill' },
  { id: 10, image: '/images/projeler/proje-10.jpg', title: 'Kontrollü Kat İndirme', category: 'Bina Yıkımı', icon: 'demolition' },
  { id: 11, image: '/images/projeler/proje-11.jpg', title: 'Döşeme Kesimi — Sanayi Tesisi', category: 'Beton Kesme', icon: 'saw' },
  { id: 12, image: '/images/projeler/proje-12.jpg', title: 'Altyapı Hendek Kesimi', category: 'Asfalt Kesim', icon: 'road' },
]

export default projects
