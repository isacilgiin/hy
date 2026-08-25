/**
 * Yıkama süreci adımları — "işin nasıl yürüdüğü" bölümünü besler.
 *
 * Adımlar UYDURMA DEĞİL: canlı sitedeki (denizlihaliyikama.net.tr) hizmet
 * sayfalarından ve makine parkı listesinden birebir alındı.
 * Kaynak ve tam liste: docs/olgu-sayfasi.md §3
 *
 * Yeni adım eklerken: adım gerçekten yapılıyorsa ekleyin. Süreç adımı,
 * müşteriye ne olacağını söyleyen bir taahhüttür — süslemek için adım
 * uydurulmaz.
 */

/** Halı: tesise gelir, 6 adımda yıkanır, ambalajlı döner. */
export const haliSureci = [
  {
    id: 'alim',
    baslik: 'Adresinizden Alım',
    ozet: 'Halı sizden alınır, etiketlenir.',
    aciklama:
      'Halıyı adresinizden alıyoruz; alım ve teslim için ayrıca ücret almıyoruz. Aynı gün birden çok haneden halı toplandığı için her halı alındığı anda etiketlenir — karışma ihtimalini yıkamada değil, kapıda ortadan kaldırıyoruz.',
    icon: 'truck',
  },
  {
    id: 'toz',
    baslik: 'Toz Çırpma',
    ozet: 'Dokunun dibindeki kuru kir alınır.',
    aciklama:
      'Halı ıslanmadan önce toz çırpma makinesinden geçiyor. Bu adım atlanırsa dokunun dibindeki kuru toz suyla birleşir ve çamura döner; o çamur da yıkamayla değil ancak ikinci bir yıkamayla çıkar.',
    icon: 'wind',
  },
  {
    id: 'leke',
    baslik: 'Ön Yıkama & Leke Kontrolü',
    ozet: 'Lekeler tek tek işaretlenir.',
    aciklama:
      'Halı yıkamaya girmeden önce gözden geçirilir; varsa lekeler işaretlenir ve cinsine uygun leke çıkarıcı uygulanır. Bu aşamada yırtık, sökük veya güve hasarı fark edersek not ediyor ve teslimde size söylüyoruz — onarım bizim işimiz değil, ama haber vermek bizim işimiz.',
    icon: 'search',
  },
  {
    id: 'yikama',
    baslik: 'Otomatik Yıkama',
    ozet: 'Fırça sertliği halının cinsine göre ayarlanır.',
    aciklama:
      '16 fırçalı tam otomatik makinede yıkanıyor. Fırça sertliği sabit değil: makine halısıyla yün halı, shaggy ile ipek aynı ayarla yıkanmaz. Şampuan bitkisel, antialerjik ve antibakteriyeldir; kimyasal kalıntı bırakmaz.',
    icon: 'carpetRoll',
  },
  {
    id: 'sikma',
    baslik: 'Durulama & Rulo Sıkma',
    ozet: 'Suyun %95\'i alınır.',
    aciklama:
      'Bol suyla durulandıktan sonra rulo sıkma makinesinde suyunun yaklaşık %95\'i alınıyor. Sıkma ne kadar iyiyse kuruma o kadar kısa sürer; halının nemli kaldığı süre kısaldıkça küf ve koku riski de düşer.',
    icon: 'droplet',
  },
  {
    id: 'kurutma',
    baslik: 'Kapalı Odada Kurutma',
    ozet: 'Tozdan izole ortamda kurutulur.',
    aciklama:
      'Kurutma açık havada değil, kapalı kurutma odalarında yapılıyor. Balkonda kurutulan halı kururken toz ve rutubet alır; yeni yıkanmış bir halının üstüne inen toz, yıkamanın bir bölümünü geri alır.',
    icon: 'shield',
  },
  {
    id: 'teslim',
    baslik: 'Kontrol, Paketleme, Teslim',
    ozet: 'Ambalajlı olarak kapınıza gelir.',
    aciklama:
      'Son kontrolden geçen halı parfümlenip ambalajlanıyor ve adresinize teslim ediliyor. Süreç ortalama 3-4 iş günü sürüyor; ödeme kapıda nakit veya kredi kartıyla yapılabiliyor.',
    icon: 'check',
  },
]

/** Koltuk / yatak: taşınmaz, ekip adrese gelir. */
export const yerindeSureci = [
  {
    id: 'hazirlik',
    baslik: 'Hazırlık & Toz Alma',
    ozet: 'Çalışma alanı korunur, kaba toz alınır.',
    aciklama:
      'Ekip adresinize geliyor, çevre korumaya alınıyor ve koltuk yüzeyindeki kaba tozlar alınıyor. Toz alınmadan ıslatılan bir kumaşta kir yüzeye yayılır.',
    icon: 'sofa',
  },
  {
    id: 'solusyon',
    baslik: 'Islatma & Leke Çıkarma',
    ozet: 'Kumaşa uygun solüsyon seçilir.',
    aciklama:
      'Kumaş tipine uygun solüsyonlu suyla ıslatılıyor, lekeli bölgelere ayrıca müdahale ediliyor. Her kumaş aynı solüsyonu kaldırmaz; bu yüzden seçim yerinde yapılıyor.',
    icon: 'droplet',
  },
  {
    id: 'fircalama',
    baslik: 'Yumuşak Fırçalama',
    ozet: 'Kir yumuşatılır, kumaş zorlanmaz.',
    aciklama:
      'Kumaşa zarar vermeyen yumuşak fırçalı makineyle kir yumuşatılıyor. Amaç kumaşı aşındırmak değil, kiri liften ayırmak.',
    icon: 'wool',
  },
  {
    id: 'vakum',
    baslik: 'Vakumlama',
    ozet: 'Kirli su geri çekilir — kritik adım.',
    aciklama:
      'Yüksek emişli vakumla kirli su ve deterjan geri çekiliyor. İşin kritik adımı burasıdır: kumaşın içinde kalıntı kalırsa koltuk kısa sürede ve daha hızlı yeniden kirlenir.',
    icon: 'wind',
  },
  {
    id: 'durulama',
    baslik: 'Temiz Suyla Durulama',
    ozet: 'Kalıntı bırakılmaz.',
    aciklama:
      'Vakumlamanın ardından temiz suyla durulama yapılıyor ve tekrar çekiliyor. Koltuk aynı gün kullanılabilir hâle gelir; kuruma süresi kumaşa ve havalandırmaya göre değişir.',
    icon: 'check',
  },
]

export default haliSureci
