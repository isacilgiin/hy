/**
 * Uygulama Alanları galerisi.
 *
 * Görseller şu an hizmetin sahada nasıl göründüğünü anlatan örneklerdir.
 * Sahadan kendi fotoğraflarınızı çektikçe buradaki `image` yollarını
 * değiştirmeniz yeterli — başka hiçbir yeri elleme.
 *
 * Yeni fotoğraf eklerken: 1600x1200 WebP + `-800.webp` küçük varyantı
 * (public/images/projeler/ altına). Dosya adını buraya yazın.
 */

const projects = [
  {
    id: 1,
    image: '/images/projeler/proje-01.webp',
    title: 'Döşemede Tesisat Geçiş Delikleri',
    category: 'Beton Delme',
    icon: 'drill',
  },
  {
    id: 2,
    image: '/images/projeler/proje-02.webp',
    title: 'Duvarda Kapı Açıklığı Kesimi',
    category: 'Beton Kesme',
    icon: 'saw',
  },
  {
    id: 3,
    image: '/images/projeler/proje-03.webp',
    title: 'Sanayi Yapısında Döşeme Kesimi',
    category: 'Beton Kesme',
    icon: 'saw',
  },
  {
    id: 4,
    image: '/images/projeler/proje-04.webp',
    title: 'Asansör Boşluğu Açma',
    category: 'Beton Kesme',
    icon: 'saw',
  },
  {
    id: 5,
    image: '/images/projeler/proje-05.webp',
    title: 'Temele Filiz Ekimi',
    category: 'Filiz Ekimi',
    icon: 'rebar',
  },
  {
    id: 6,
    image: '/images/projeler/proje-06.webp',
    title: 'Kontrollü Kat İndirme',
    category: 'Bina Yıkımı',
    icon: 'demolition',
  },
]

export default projects
