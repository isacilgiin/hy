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
  { dizin: 'public/images/blog', ekler: [600] },
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

/* ---- Ölçü denetimi: hero görselleri gerçekten srcset'in vaat ettiği kadar mı? ----
 *
 * hero-1/2/3 uzun süre 1376x768 olduğu halde srcset onları "1600w" diye
 * bildiriyordu. Kimse fark etmedi çünkü kırık bir şey yok: tarayıcı en büyük
 * adayı zaten seçiyor, yalnızca 1920px ekranda LCP görselini %39 büyütüyor —
 * yani sitenin en görünür fotoğrafı yumuşak çıkıyordu.
 *
 * sharp'sız çalışır: WebP başlığından okuyor. Üç kapsayıcı biçimin üçü de var,
 * çünkü Gemini/Antigravity çıktısı bazen VP8L (kayıpsız) geliyor.
 */
const webpOlcu = (dosya) => {
  const b = fs.readFileSync(dosya)
  if (b.toString('ascii', 0, 4) !== 'RIFF' || b.toString('ascii', 8, 12) !== 'WEBP') return null
  const tip = b.toString('ascii', 12, 16)
  if (tip === 'VP8X') return [(b.readUIntLE(24, 3) & 0xffffff) + 1, (b.readUIntLE(27, 3) & 0xffffff) + 1]
  if (tip === 'VP8 ') return [b.readUInt16LE(26) & 0x3fff, b.readUInt16LE(28) & 0x3fff]
  if (tip === 'VP8L') { const n = b.readUInt32LE(21); return [(n & 0x3fff) + 1, ((n >> 14) & 0x3fff) + 1] }
  return null
}

/** Dosya adındaki ek genişliği verir; ek yoksa klasörün ana genişliği. */
const ANA_GENISLIK = { 'public/images/hero': 1600 }
const olcuSorunlari = []
for (const { dizin } of KURALLAR) {
  const ana = ANA_GENISLIK[dizin]
  if (!ana || !fs.existsSync(dizin)) continue
  for (const dosya of fs.readdirSync(dizin).filter((f) => /\.webp$/i.test(f))) {
    // DİKKAT: /-(\d+)\.webp$/ KULLANMAYIN — "hero-1.webp" dosyasının kendi adı
    // da ona uyuyor ve dosya "1px genişlik varyantı" sanılıyor. Yukarıdaki
    // üretim döngüsü de aynı sebeple açık listeyle eliyor.
    const ek = dosya.match(/-(600|800|900|1200)\.webp$/i)
    const beklenen = ek ? Number(ek[1]) : ana
    const o = webpOlcu(`${dizin}/${dosya}`)
    if (!o) continue
    // Küçük varyant kaynaktan büyütülmüyor (withoutEnlargement), o yüzden
    // beklenenden DAR olması normal; sorun ana dosyanın vaadini tutmaması.
    if (!ek && o[0] < beklenen) olcuSorunlari.push([`${dizin}/${dosya}`, o, beklenen])
  }
}
if (olcuSorunlari.length) {
  console.log(`\nSRCSET'İN VAAT ETTİĞİNDEN KÜÇÜK ${olcuSorunlari.length} ANA GÖRSEL:`)
  for (const [f, o, bek] of olcuSorunlari) {
    const oran = ((bek / o[0] - 1) * 100).toFixed(0)
    console.log(`  - ${f.replace('public/images/', '').padEnd(24)} ${o[0]}x${o[1]}  ->  ${bek}px ekranda %${oran} büyütülüyor`)
  }
  console.log('  (yeniden üretirken en az bu genişlikte isteyin; büyütmek keskinlik getirmez)')
} else {
  console.log('Ana görsellerin hepsi srcset\'in vaat ettiği genişlikte. ✓')
}

if (YALNIZCA_DENETIM) process.exit(eksik.length || olcuSorunlari.length ? 1 : 0)

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
    .filter((f) => !/-(?:600|800|900|1200)\.webp$/i.test(f))
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
