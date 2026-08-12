/**
 * Uygulama Alanları galerisi.
 *
 * ┌──────────────────────────────────────────────────────────────────────────┐
 * │ ⚠️ BU GÖRSELLER TEMSİLİDİR — firmanın tamamladığı işlerin fotoğrafı      │
 * │ DEĞİLDİR. Yapay zekâ ile üretilmiş, yöntemi anlatan örneklerdir.         │
 * │                                                                          │
 * │ Bu yüzden sayfanın adı "Projelerimiz" değil "Uygulama Alanları" ve her   │
 * │ görselin üzerinde "Temsili görsel" etiketi var. Yapılmamış işi yapılmış  │
 * │ gibi göstermek hem müşteriye karşı yanlış beyan olurdu hem de Google'ın  │
 * │ deneyim (E-E-A-T) değerlendirmesinde aleyhe çalışırdı.                   │
 * │                                                                          │
 * │ SAHADAN GERÇEK FOTOĞRAF ÇEKTİKÇE: görseli buraya ekleyin ve o kaydın     │
 * │ `temsili` alanını false yapın — etiket kalkar. Hepsi gerçek olduğunda   │
 * │ sayfa başlığını "Projelerimiz" olarak geri değiştirebiliriz.             │
 * └──────────────────────────────────────────────────────────────────────────┘
 */

const projects = [
  {
    id: 1,
    image: '/images/projeler/proje-01.webp',
    title: 'Döşemede Tesisat Geçiş Delikleri',
    category: 'Beton Delme',
    icon: 'drill',
    temsili: true,
  },
  {
    id: 2,
    image: '/images/projeler/proje-02.webp',
    title: 'Duvarda Kapı Açıklığı Kesimi',
    category: 'Beton Kesme',
    icon: 'saw',
    temsili: true,
  },
  {
    id: 3,
    image: '/images/projeler/proje-03.webp',
    title: 'Sanayi Yapısında Döşeme Kesimi',
    category: 'Beton Kesme',
    icon: 'saw',
    temsili: true,
  },
  {
    id: 4,
    image: '/images/projeler/proje-04.webp',
    title: 'Asansör Boşluğu Açma',
    category: 'Beton Kesme',
    icon: 'saw',
    temsili: true,
  },
  {
    id: 5,
    image: '/images/projeler/proje-05.webp',
    title: 'Temele Filiz Ekimi',
    category: 'Filiz Ekimi',
    icon: 'rebar',
    temsili: true,
  },
  {
    id: 6,
    image: '/images/projeler/proje-06.webp',
    title: 'Kontrollü Kat İndirme',
    category: 'Bina Yıkımı',
    icon: 'demolition',
    temsili: true,
  },
]

export default projects
