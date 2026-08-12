/**
 * Hakkımızda sayfası içerikleri.
 *
 * ┌──────────────────────────────────────────────────────────────────────┐
 * │ TODO — YOLCULUK (TIMELINE)                                           │
 * │ Aşağıdaki kilometre taşları YER TUTUCUDUR. `foundedYear` değerini     │
 * │ gerçek kuruluş yılınızla değiştirin; tüm yıllar otomatik kayar.       │
 * │ Metinleri de kendi hikayenizle güncelleyin.                          │
 * │ Timeline'ı hiç göstermek istemezseniz `timeline` dizisini boşaltın    │
 * │ ([] yapın) — Hakkımızda sayfasındaki bölüm tamamen gizlenir.          │
 * └──────────────────────────────────────────────────────────────────────┘
 */

// TODO: gerçek kuruluş yılı
export const foundedYear = 2015

export const timeline = [
  {
    year: foundedYear,
    title: 'Kuruluş',
    desc: `${foundedYear} yılında Denizli'de beton delme ve kesme hizmetleri vermeye başladık.`,
  },
  {
    year: foundedYear + 3,
    title: 'Makine Parkuru',
    desc: 'Karot ve elmas diskli kesme ekipmanlarımızı genişleterek hizmet kapsamımızı büyüttük.',
  },
  {
    year: foundedYear + 6,
    title: 'Ekip Genişlemesi',
    desc: 'Deneyimli saha kadromuzu büyüterek aynı anda daha fazla projeye yetişir hale geldik.',
  },
  {
    year: foundedYear + 8,
    title: 'Hidrolik Sistemler',
    desc: 'Hidrolik kesme sistemleriyle büyük çaplı altyapı ve sanayi projelerine başladık.',
  },
  {
    year: foundedYear + 10,
    title: 'Bölgesel Hizmet Ağı',
    desc: 'Denizli merkez ve çevre ilçelerin tamamına düzenli hizmet verir duruma geldik.',
  },
]

export const values = [
  { icon: 'target', title: 'Kalite', desc: 'Her projede en yüksek işçilik kalitesini hedefliyoruz.' },
  { icon: 'handshake', title: 'Güvenilirlik', desc: 'Söz verdiğimiz zamanda, söz verdiğimiz kalitede teslim.' },
  { icon: 'bolt', title: 'Hız', desc: 'Modern ekipmanlarımızla hızlı ve etkili çözümler.' },
  { icon: 'shield', title: 'Güvenlik', desc: 'İş güvenliği standartlarından asla taviz vermiyoruz.' },
  { icon: 'wallet', title: 'Şeffaf Fiyat', desc: 'Keşif sonrası net teklif, sürpriz maliyet yok.' },
  { icon: 'smile', title: 'Müşteri Memnuniyeti', desc: 'İş bitiminde sahayı temiz teslim ediyoruz.' },
]
