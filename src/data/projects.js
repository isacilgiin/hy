/**
 * Öncesi & Sonrası galerisi.
 *
 * ┌──────────────────────────────────────────────────────────────────────────┐
 * │ FOTOĞRAF ÇEKERKEN ŞART: İKİ KARE AYNI AÇIDAN VE AYNI IŞIKTA              │
 * │ Öncesi/sonrası sürgüsünün ikna ediciliği tamamen buna bağlı. Açı ya da   │
 * │ ışık değişirse sürgü "başka halı çekilmiş" izlenimi verir ve ters teper. │
 * │ Sabit bir noktadan, tercihen tesiste aynı zeminde çekin.                 │
 * └──────────────────────────────────────────────────────────────────────────┘
 *
 * Görseller gelene kadar sayfa kırılmaz: BeforeAfter → SmartImage yer tutucu
 * gösterir, sürgü yine çalışır.
 *
 * Dosya adlandırma (public/images/oncesi-sonrasi/ altına):
 *   <slug>-oncesi.webp  +  <slug>-oncesi-800.webp
 *   <slug>-sonrasi.webp +  <slug>-sonrasi-800.webp
 * -800 varyantı ÜRETİLMEZSE srcset 404'e gider.
 *
 * İÇERİK KURALI: `aciklama` alanında ne yapıldığı anlatılır, sonuç TAAHHÜT
 * EDİLMEZ. "Her leke bu şekilde çıkar" yazmayın — çıkmayan leke de var ve
 * dürüst anlatım sahada daha çok işe yarıyor.
 */

const projects = [
  {
    id: 1,
    slug: 'salon-halisi-genel-kir',
    oncesi: '/images/oncesi-sonrasi/salon-halisi-oncesi.webp',
    sonrasi: '/images/oncesi-sonrasi/salon-halisi-sonrasi.webp',
    title: 'Salon Halısında Yürüme Yolu İzi',
    category: 'Halı Yıkama',
    icon: 'carpetRoll',
    aciklama:
      'Kapı ile oturma grubu arasındaki bant, halının geri kalanından belirgin şekilde koyulaşmıştı. Bu genelde leke değil, tüy dibine oturmuş kuru toz oluyor. Toz çırpma makinesinden geçirdikten sonra standart programda yıkandı; farkın büyük kısmı yıkamadan değil, yıkamadan önceki toz alma adımından geliyor.',
  },
  {
    id: 2,
    slug: 'yun-hali-sacak',
    oncesi: '/images/oncesi-sonrasi/yun-hali-oncesi.webp',
    sonrasi: '/images/oncesi-sonrasi/yun-hali-sonrasi.webp',
    title: 'El Dokuma Yün Halı ve Saçak',
    category: 'El Dokuma & Yün',
    icon: 'wool',
    aciklama:
      'Yıkamadan önce görünmeyen bir noktadan renk akma testi yapıldı, sonuç olumluydu. Düşük ısı ve yumuşak fırça ayarıyla yıkandı. Saçak makineye bırakılmaz; ayrı ve elde temizlendi. Kuruma kontrollü yürütüldü, çünkü doğal elyaf ıslakken çeker.',
  },
  {
    id: 3,
    slug: 'shaggy-tuy-dibi',
    oncesi: '/images/oncesi-sonrasi/shaggy-oncesi.webp',
    sonrasi: '/images/oncesi-sonrasi/shaggy-sonrasi.webp',
    title: 'Shaggy Halıda Yatmış Tüy',
    category: 'Shaggy & Uzun Tüylü',
    icon: 'shaggy',
    aciklama:
      'Uzun tüyde kir yüzeyde değil dipte birikiyor ve elektrikli süpürge oraya ulaşamıyor. Fırça sertliği tüy uzunluğuna göre ayarlandı — fazla sert olsaydı tüy yatar ve keçeleşirdi. Kuruma makine halısından uzun sürdü; kuruma sonrası tüy kabartma yapıldı.',
  },
  {
    id: 4,
    slug: 'koltuk-kolcak-kir',
    oncesi: '/images/oncesi-sonrasi/koltuk-oncesi.webp',
    sonrasi: '/images/oncesi-sonrasi/koltuk-sonrasi.webp',
    title: 'Koltukta Kolçak ve Oturma Bölgesi',
    category: 'Koltuk Yıkama',
    icon: 'sofa',
    aciklama:
      'Yerinde yapıldı, koltuk evden çıkmadı. Kumaş tipine uygun solüsyon seçildi, yumuşak fırçayla kir yumuşatıldı ve yüksek emişli vakumla kirli su geri çekildi. Ardından temiz suyla durulandı: kumaşta deterjan kalıntısı kalırsa koltuk kısa sürede ve daha hızlı yeniden kirleniyor.',
  },
  {
    id: 5,
    slug: 'stor-perde-yag-is',
    oncesi: '/images/oncesi-sonrasi/stor-perde-oncesi.webp',
    sonrasi: '/images/oncesi-sonrasi/stor-perde-sonrasi.webp',
    title: 'Mutfak Storunda Yağ ve İs',
    category: 'Stor & Perde',
    icon: 'curtain',
    aciklama:
      'Mutfak perdelerinde kir toz değil, buharla yükselip kumaşa yapışan yağ oluyor. Perde söküldü, ultrasonik makinede katlanmadan ve düz hâlde yıkandı, yine düz kurutuldu — katlanarak yıkanan storda kalıcı kırık oluşuyor. Sökme ve tekrar takma ücretsiz.',
  },
  {
    id: 6,
    slug: 'yorgan-ic-dolgu',
    oncesi: '/images/oncesi-sonrasi/yorgan-oncesi.webp',
    sonrasi: '/images/oncesi-sonrasi/yorgan-sonrasi.webp',
    title: 'Dolapta Kalmış Yorgan',
    category: 'Yorgan & Battaniye',
    icon: 'blanket',
    aciklama:
      'Bir mevsim dolapta kalmış yorganda sorun görünen kir değil, kapalı kalmanın bıraktığı koku. Ev tipi makinede dönemediği için endüstriyel makinede yıkandı ve iç dolgusuna kadar durulandı. Teslim edilmeden önce tam kuruma kontrol edildi; nemli katlanan yorgan içeriden küfleniyor.',
  },
]

export default projects
