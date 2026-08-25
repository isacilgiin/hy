/**
 * Görsel varyant üreteci — srcset'in beklediği küçük boyutları çıkarır.
 *
 * ┌──────────────────────────────────────────────────────────────────────────┐
 * │ NEDEN GEREKLİ                                                            │
 * │ Kod srcset'i DOSYA ADINDAN türetiyor:                                    │
 * │   hero/hero-1.webp        -> hero/hero-1-800.webp                        │
 * │   hizmetler/<slug>.webp   -> <slug>-600.webp ve <slug>-900.webp          │
 * │ Varyant üretilmezse srcset 404'e gider ve MOBİLDE görsel hiç gelmez.     │
 * │ Devralınan gemini sürümünde tam olarak bu olmuştu: ana dosyalar halı     │
 * │ görseliyle değiştirilmiş ama varyantlar eski sektörün fotoğrafı olarak   │
 * │ kalmıştı — mobilde yanlış sektörün resmi servis ediliyordu.              │
 * └──────────────────────────────────────────────────────────────────────────┘
 *
 * KULLANIM
 *   npm i -D sharp          (yalnızca bir kez; build için GEREKMEZ)
 *   node arac/gorsel-varyant.mjs
 *
 * sharp bilerek `dependencies` DEĞİL: platforma özel ikili paket getiriyor ve
 * package-lock.json'ı Windows ile Linux arasında sürekli çakıştırıyor. Build
 * ona ihtiyaç duymuyor — yalnızca bu araç duyuyor.
 *
 * Yeni görsel eklerken: dosyayı public/images/... altına koy, bu aracı çalıştır.
 * Zaten üretilmiş varyantların üzerine yazmaz (--force ile zorlanır).
 */
import fs from 'fs'
import path from 'path'

const ZORLA = process.argv.includes('--force')
const YALNIZCA_DENETIM = process.argv.includes('--denetle')

/** Klasör -> üretilecek genişlikler. Kod hangi eki arıyorsa o burada. */
const KURALLAR = [
  { dizin: 'public/images/hero', ekler: [800] },
  { dizin: 'public/images/hizmetler', ekler: [600, 900] },
  { dizin: 'public/images/bolgeler', ekler: [600] },
  { dizin: 'public/images/oncesi-sonrasi', ekler: [800] },
  { dizin: 'public/images/projeler', ekler: [800] },
  { dizin: 'public/images', ekler: [600], yalnizca: /^hakkimizda\.webp$/ },
]

/* ---- Eksik varyant denetimi: kodun aradığı ama diskte olmayan dosyalar ---- */
const eksik = []
const kontrol = async () => {
  const [services, heroSlides, blog, projects] = await Promise.all([
    import('../src/data/services.js'),
    import('../src/data/heroSlides.js'),
    import('../src/data/blog.js'),
    import('../src/data/projects.js'),
  ])
  const bekle = [
    ...heroSlides.default.map((x) => x.image?.replace('.webp', '-800.webp')),
    ...services.default.flatMap((x) => [
      x.image?.replace('.webp', '-600.webp'),
      x.image?.replace('.webp', '-900.webp'),
    ]),
    ...blog.default.map((x) => x.image?.replace('.webp', '-600.webp')),
    ...projects.default.flatMap((x) => [
      x.oncesi?.replace('.webp', '-800.webp'),
      x.sonrasi?.replace('.webp', '-800.webp'),
    ]),
  ].filter(Boolean)
  for (const y of new Set(bekle)) if (!fs.existsSync('public' + y)) eksik.push(y)
}
await kontrol()

if (eksik.length) {
  console.log(`KODUN ARADIĞI AMA DİSKTE OLMAYAN ${eksik.length} VARYANT:`)
  for (const y of eksik.slice(0, 25)) console.log('  - ' + y)
  if (eksik.length > 25) console.log(`  ... ve ${eksik.length - 25} tane daha`)
  console.log('\n(ana dosyayı public/images/... altına koyup bu aracı tekrar çalıştırın)')
} else {
  console.log('Kodun aradığı tüm varyantlar diskte. ✓')
}

if (YALNIZCA_DENETIM) process.exit(eksik.length ? 1 : 0)

/* ---- Üretim: yalnızca buradan sonrası sharp istiyor ---- */
let sharp
try {
  sharp = (await import('sharp')).default
} catch {
  console.log('\nÜretim atlandı — sharp kurulu değil. Kurmak için:  npm i -D sharp')
  console.log('(sharp bilerek kalıcı bağımlılık DEĞİL: platforma özel ikili paket')
  console.log(' getiriyor ve package-lock.json\'ı Windows ile Linux arasında çakıştırıyor.)')
  process.exit(0)
}

console.log('')
let uretilen = 0
let atlanan = 0

for (const { dizin, ekler, yalnizca } of KURALLAR) {
  if (!fs.existsSync(dizin)) continue
  const dosyalar = fs
    .readdirSync(dizin)
    .filter((f) => /\.webp$/i.test(f))
    // Varyantın kendisini tekrar işleme: "-600.webp" ile bitenler atlanır.
    .filter((f) => !/-\d{3,4}\.webp$/i.test(f))
    .filter((f) => (yalnizca ? yalnizca.test(f) : true))

  for (const dosya of dosyalar) {
    const kaynak = path.join(dizin, dosya)
    for (const genislik of ekler) {
      const hedef = path.join(dizin, dosya.replace(/\.webp$/i, `-${genislik}.webp`))
      if (fs.existsSync(hedef) && !ZORLA) {
        atlanan++
        continue
      }
      const meta = await sharp(kaynak).metadata()
      if (meta.width && meta.width <= genislik) {
        // Kaynak zaten küçük: büyütmek boşuna bayt. Kopyalanmıyor, atlanıyor;
        // srcset kaynağın kendisine düşer.
        atlanan++
        continue
      }
      await sharp(kaynak)
        .resize({ width: genislik, withoutEnlargement: true })
        .webp({ quality: 78 })
        .toFile(hedef)
      const kb = (fs.statSync(hedef).size / 1024).toFixed(0)
      console.log(`  + ${hedef.replace('public/images/', '').padEnd(46)} ${kb.padStart(4)} KB`)
      uretilen++
    }
  }
}

console.log(`\nüretilen: ${uretilen}  |  atlanan: ${atlanan}`)
