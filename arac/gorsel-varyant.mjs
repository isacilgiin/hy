/**
 * Görsel varyant üreteci — srcset'in beklediği küçük boyutları çıkarır.
 *
 * ┌──────────────────────────────────────────────────────────────────────────┐
 * │ NEDEN GEREKLİ                                                            │
 * │ Kod srcset'i DOSYA ADINDAN türetiyor:                                    │
 * │   hero/hero-1.webp        -> hero/hero-1-800.webp                        │
 * │   hizmetler/<slug>.webp   -> <slug>-600.webp ve <slug>-900.webp          │
 * │ Varyant üretilmezse srcset 404'e gider ve görsel HİÇ gelmez.             │
 * │ Devralınan gemini sürümünde tam olarak bu olmuştu: ana dosyalar halı     │
 * │ görseliyle değiştirilmiş ama varyantlar eski sektörün fotoğrafı olarak   │
 * │ kalmıştı — mobilde yanlış sektörün resmi servis ediliyordu.              │
 * └──────────────────────────────────────────────────────────────────────────┘
 *
 * ┌──────────────────────────────────────────────────────────────────────────┐
 * │ EKSİK VARYANT GÖRSELİN TAMAMINI ÖLDÜRÜR — "en yakın boya düşmez"         │
 * │                                                                          │
 * │ Yaygın ve yanlış beklenti: "varyant yoksa tarayıcı srcset'teki başka bir │
 * │ adaya düşer". DÜŞMEZ. Tarayıcı adayı `sizes` + DPR ile ÖNCE seçer, sonra │
 * │ indirir; seçtiği dosya gelmezse <img> onError'a gider. SmartImage de     │
 * │ onError'da yer tutucuya geçtiği için TEK eksik varyant o görseli komple  │
 * │ yok ediyor.                                                              │
 * │                                                                          │
 * │ Bu tam olarak yaşandı: blog/*-900.webp hiç üretilmemişti. Blog LİSTESİ   │
 * │ çalışıyor görünüyordu (sizes ~380px -> 600w adayı seçiliyor), blog YAZI  │
 * │ sayfası ise ölüydü (sizes 768px -> 900w adayı seçiliyor, dosya yok).     │
 * │ Retina telefonda liste de ölüyordu (92vw x DPR2 ~ 718px -> yine 900w).   │
 * │                                                                          │
 * │ ESKİ DENETİM BUNU KAÇIRDI çünkü beklentiyi KODDAN değil, aşağıda elle    │
 * │ yazılmış bir listeden türetiyordu; listede blog için yalnızca 600 vardı. │
 * │ Araç ile kod ayrışınca denetim de körleşti. ARTIK BEKLENTİ KODUN GERÇEK  │
 * │ srcSet'LERİNDEN OKUNUYOR (aşağıdaki "kod okuma" bölümü).                 │
 * └──────────────────────────────────────────────────────────────────────────┘
 *
 * KULLANIM
 *   npm i -D sharp          (yalnızca bir kez; build için GEREKMEZ)
 *   npm run varyant         (yalnızca denetim için: --denetle, üzerine yaz: --force)
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
import { pathToFileURL } from 'url'

const ZORLA = process.argv.includes('--force')
const YALNIZCA_DENETIM = process.argv.includes('--denetle')

/**
 * Klasör -> üretim TABANI.
 *
 * Bu liste artık tek doğruluk kaynağı DEĞİL, yalnızca bir zemin: kodda srcSet'i
 * bulunmayan klasörler (henüz bileşeni yazılmamış olanlar) için ne üretileceğini
 * söyler. Kodda srcSet'i olan klasörlerde koddan okunan genişlikler bunun
 * ÜSTÜNE eklenir — böylece liste geride kalsa bile üretim geride kalmaz.
 */
const KURALLAR_TABAN = [
  { dizin: 'public/images/hero', ekler: [800] },
  { dizin: 'public/images/hizmetler', ekler: [600, 900] },
  // 900: yazı sayfasında kapak 768px kutuda, listede retina telefonda ~718px
  // isteniyor. Yoksa ikisi de 1200w'a atlamaz — doğrudan ölür (yukarıdaki kutu).
  { dizin: 'public/images/blog', ekler: [600, 900] },
  { dizin: 'public/images/bolgeler', ekler: [600] },
  { dizin: 'public/images/oncesi-sonrasi', ekler: [800] },
  { dizin: 'public/images/projeler', ekler: [800] },
  { dizin: 'public/images', ekler: [600], yalnizca: /^hakkimizda\.webp$/ },
]

/**
 * srcSet'i BİLEREK olmayan, ana görseli tek boyutta servis edilen klasörler.
 *
 * Buraya bir klasör eklemek "bu klasörün görselleri responsive DEĞİL" demek.
 * Listede olmayan ve kodda da srcSet'i bulunamayan her klasör HATA veriyor:
 * denetimin sessizce kör kalmasındansa bağırması yeğdir — bu dosyanın baştaki
 * kutusunda anlatılan hata tam olarak "kimse fark etmedi" diye büyüdü.
 */
const SRCSET_SIZ = new Set(['public/images/logo', 'public/images/og'])

/* ══════════════════════════════════════════════════════════════════════════
   KOD OKUMA — beklenti elle yazılmış listeden değil, gerçek srcSet'lerden
   ══════════════════════════════════════════════════════════════════════════ */

/** src altındaki tüm .jsx/.js dosyaları. */
const kodDosyalari = (dizin, birikim = []) => {
  for (const g of fs.readdirSync(dizin, { withFileTypes: true })) {
    const tam = path.join(dizin, g.name)
    if (g.isDirectory()) kodDosyalari(tam, birikim)
    else if (/\.(jsx|js)$/i.test(g.name)) birikim.push(tam)
  }
  return birikim
}

/**
 * Bir dosyadaki srcSet değerlerini çıkarır.
 *
 * JSX'te iki biçim var: srcSet="düz metin" ve srcSet={`şablon`}. Şablonda
 * içeride backtick kullanılmadığı için ilk ` ile bir sonraki ` arası yeterli;
 * AST kurmaya değmez, ama biçim değişirse aşağıdaki "çözülemedi" hatası bunu
 * sessiz bırakmaz.
 */
const srcsetMetinleri = (kaynak) => {
  const cikan = []
  const re = /srcSet\s*=\s*/g
  while (re.exec(kaynak)) {
    const i = re.lastIndex
    const c = kaynak[i]
    if (c === '"' || c === "'") {
      const son = kaynak.indexOf(c, i + 1)
      if (son > 0) cikan.push(kaynak.slice(i + 1, son))
    } else if (c === '{') {
      const bas = kaynak.indexOf('`', i)
      const son = bas > 0 ? kaynak.indexOf('`', bas + 1) : -1
      if (bas > 0 && son > 0) cikan.push(kaynak.slice(bas + 1, son))
    }
  }
  return cikan
}

/** import yolunu diske çözer ('../data/blog' -> src/data/blog.js). */
const modulYolu = (kaynakDosya, spec) => {
  const p = path.resolve(path.dirname(kaynakDosya), spec)
  for (const aday of [p, `${p}.js`, `${p}.jsx`, path.join(p, 'index.js')])
    if (fs.existsSync(aday) && fs.statSync(aday).isFile()) return aday
  return null
}

/** Bir veri modülündeki, verilen ALANI görsel yolu olan tüm kayıtlar. */
const modulGorselleri = async (dosya, alan) => {
  const mod = await import(pathToFileURL(dosya).href)
  const cikan = []
  for (const dizi of Object.values(mod).filter(Array.isArray))
    for (const kayit of dizi)
      if (kayit && typeof kayit === 'object' && typeof kayit[alan] === 'string')
        if (/^\/images\/.+\.webp$/i.test(kayit[alan])) cikan.push(kayit[alan])
  return cikan
}

/** Bir dosyanın import ettiği veri modülleri. */
const veriImportlari = (kaynakDosya, kaynak) =>
  [...kaynak.matchAll(/from\s+'([^']*\/data\/[^']+)'/g)]
    .map((m) => modulYolu(kaynakDosya, m[1]))
    .filter(Boolean)

const kodDosyalariHepsi = kodDosyalari('src')
const kodIcerik = new Map(kodDosyalariHepsi.map((f) => [f, fs.readFileSync(f, 'utf8')]))

/** dizin -> kodun istediği genişlikler */
const kodBeklentisi = new Map()
/** dizin -> srcSet'in EN BÜYÜK tanımlayıcısı (ana dosyanın vaat ettiği boy) */
const kodAnaGenislik = new Map()
const cozulemeyen = []

for (const [dosya, kaynak] of kodIcerik) {
  for (const metin of srcsetMetinleri(kaynak)) {
    // Kodun isteyeceği varyant dosyaları: "-600.webp" gibi ekler.
    const genislikler = [...metin.matchAll(/-(\d{3,4})\.webp/g)].map((m) => Number(m[1]))
    // srcset tanımlayıcıları: "600w, 900w, 1200w" -> en büyüğü ana dosyanın vaadi.
    const tanimlar = [...metin.matchAll(/(\d{3,4})w\b/g)].map((m) => Number(m[1]))
    if (!genislikler.length) continue

    // Hangi klasörleri etkiliyor?
    let dizinler = []
    // 1) srcSet'te düz yol varsa klasör doğrudan belli (About.jsx/hakkimizda).
    const literaller = [...metin.matchAll(/\/images\/[\w./-]+\.webp/g)].map((m) => m[0])
    if (literaller.length) {
      dizinler = literaller.map((y) => path.posix.join('public', path.posix.dirname(y)))
    } else {
      // 2) Şablon: `${yazi.image...}` -> ALAN adı + dosyanın veri importları.
      const alan = metin.match(/\$\{\s*\w+\.(\w+)/)?.[1]
      let moduller = veriImportlari(dosya, kaynak)
      // 3) Bileşen veriyi prop'tan alıyorsa (ServiceCard) bir sıçrama: onu
      //    kullanan dosyaların veri importlarına bak.
      if (alan && !moduller.length) {
        const ad = path.basename(dosya).replace(/\.(jsx|js)$/i, '')
        for (const [d2, k2] of kodIcerik)
          if (d2 !== dosya && k2.includes(`<${ad}`)) moduller.push(...veriImportlari(d2, k2))
      }
      const yollar = []
      for (const mod of new Set(moduller)) yollar.push(...(await modulGorselleri(mod, alan)))
      dizinler = yollar.map((y) => path.posix.join('public', path.posix.dirname(y)))
    }

    dizinler = [...new Set(dizinler)]
    if (!dizinler.length) {
      cozulemeyen.push(`${dosya} -> ${metin.slice(0, 60)}...`)
      continue
    }
    for (const d of dizinler) {
      if (!kodBeklentisi.has(d)) kodBeklentisi.set(d, new Set())
      for (const g of genislikler) kodBeklentisi.get(d).add(g)
      if (tanimlar.length)
        kodAnaGenislik.set(d, Math.max(kodAnaGenislik.get(d) || 0, Math.max(...tanimlar)))
    }
  }
}

/* ---- Taban ile kodu BİRLEŞTİR: koddan gelen asla düşmesin ---- */
const KURALLAR = KURALLAR_TABAN.map((k) => ({
  ...k,
  ekler: [...new Set([...k.ekler, ...(kodBeklentisi.get(k.dizin) || [])])].sort((a, b) => a - b),
}))
// Tabanda hiç yer almayan ama kodda srcSet'i olan klasör de üretime girsin.
for (const [dizin, gen] of kodBeklentisi)
  if (!KURALLAR.some((k) => k.dizin === dizin))
    KURALLAR.push({ dizin, ekler: [...gen].sort((a, b) => a - b) })

/** Varyant dosya adlarını tanımak için: "-600.webp" mi, ana dosya mı? */
// 1200 elle ekli: diskte kodun artık istemediği bir -1200.webp kalmışsa ANA dosya
// sanılıp ondan varyant üretilmesin.
const TUM_EKLER = new Set([...KURALLAR.flatMap((k) => k.ekler), 1200])
// DİKKAT: /-(\d+)\.webp$/ KULLANMAYIN — "hero-1.webp" dosyasının kendi adı da
// ona uyuyor ve dosya "1px genişlik varyantı" sanılıyor. Bu yüzden açık liste.
const EK_KALIBI = new RegExp(`-(${[...TUM_EKLER].join('|')})\\.webp$`, 'i')

const anaDosyalar = (dizin, yalnizca) =>
  !fs.existsSync(dizin)
    ? []
    : fs
        .readdirSync(dizin)
        .filter((f) => /\.webp$/i.test(f) && !EK_KALIBI.test(f))
        .filter((f) => (yalnizca ? yalnizca.test(f) : true))

/* ══════════════════════════════════════════════════════════════════════════
   DENETİM
   ══════════════════════════════════════════════════════════════════════════ */
let hata = 0

/* ---- 1) Kod okunamadı mı? Kör nokta sessiz kalmasın ---- */
if (cozulemeyen.length) {
  hata++
  console.log(`ÇÖZÜLEMEYEN ${cozulemeyen.length} srcSet (hangi klasöre ait olduğu anlaşılamadı):`)
  for (const s of cozulemeyen) console.log('  - ' + s)
  console.log('  (bu srcSet denetlenmiyor demektir — çözümleyiciyi güncelleyin)\n')
}

/* ---- 2) Denetimin ulaşamadığı klasör var mı? ---- */
const gorselKlasorleri = (dizin, birikim = []) => {
  if (fs.readdirSync(dizin).some((f) => /\.webp$/i.test(f) && !EK_KALIBI.test(f))) birikim.push(dizin)
  for (const g of fs.readdirSync(dizin, { withFileTypes: true }))
    // path.posix ŞART: kodBeklentisi/SRCSET_SIZ anahtarları posix ayraçlı. Windows
    // ayracıyla üretilirse hiçbiri eşleşmez ve TÜM klasörler "kör" sanılıp denetim
    // hata verir — koruma ağı, çalışmayı engelleyen bir tuzağa dönüşür.
    if (g.isDirectory()) gorselKlasorleri(path.posix.join(dizin, g.name), birikim)
  return birikim
}
const korKlasorler = gorselKlasorleri('public/images').filter(
  (d) => !kodBeklentisi.has(d) && !SRCSET_SIZ.has(d)
)
if (korKlasorler.length) {
  hata++
  console.log(`KODDA srcSet'İ BULUNAMAYAN ${korKlasorler.length} GÖRSEL KLASÖRÜ:`)
  for (const d of korKlasorler) console.log('  - ' + d)
  console.log("  (srcSet'siz servis ediliyorsa SRCSET_SIZ listesine ekleyin)\n")
}

/* ---- 3) Ana görseli olmayan kayıtlar (içerik eksiği — varyantla ilgisi yok) ---- */
const anaEksik = []
for (const [dosya, kaynak] of kodIcerik) {
  if (!/\/data\//.test(dosya)) continue
  for (const y of new Set(kaynak.match(/["']\/images\/[\w./-]+\.webp["']/g) || [])) {
    const yol = y.slice(1, -1)
    if (!fs.existsSync('public' + yol)) anaEksik.push(yol)
  }
}
if (anaEksik.length) {
  console.log(`VERİDE GEÇEN AMA DİSKTE OLMAYAN ${anaEksik.length} ANA GÖRSEL:`)
  for (const y of anaEksik.slice(0, 25)) console.log('  - ' + y)
  if (anaEksik.length > 25) console.log(`  ... ve ${anaEksik.length - 25} tane daha`)
  console.log('  (İÇERİK eksiği: SmartImage bunlarda tasarımlı yer tutucuya düşer —')
  console.log('   sayfa bozulmaz. Fotoğraf hazır olunca public/images/... altına koyun.)\n')
}

/* ---- 4) ASIL DENETİM: ana dosyası OLAN görselin, kodun istediği varyantı var mı? ----
 * Bu, yukarıdaki kutuda anlatılan "görseli komple öldüren" hata. Beklenen
 * genişlikler koddan okunduğu için araç ile kod bir daha ayrışamaz.
 */
const varyantEksik = []
for (const { dizin, ekler, yalnizca } of KURALLAR) {
  for (const dosya of anaDosyalar(dizin, yalnizca))
    for (const g of ekler) {
      const hedef = path.join(dizin, dosya.replace(/\.webp$/i, `-${g}.webp`))
      if (!fs.existsSync(hedef)) varyantEksik.push(hedef)
    }
}
if (varyantEksik.length) {
  hata++
  console.log(`KODUN srcSet'TE BİLDİRDİĞİ AMA DİSKTE OLMAYAN ${varyantEksik.length} VARYANT:`)
  for (const y of varyantEksik.slice(0, 25)) console.log('  - ' + y)
  if (varyantEksik.length > 25) console.log(`  ... ve ${varyantEksik.length - 25} tane daha`)
  console.log('  (BU GÖRSELLER SAYFADA HİÇ GÖRÜNMEZ — bu aracı çalıştırın)\n')
} else {
  console.log("Kodun srcSet'te istediği tüm varyantlar diskte. ✓")
}

/* ---- 5) Ölçü denetimi: ana görsel srcset'in vaat ettiği kadar geniş mi? ----
 *
 * hero-1/2/3 uzun süre 1376x768 olduğu halde srcset onları "1600w" diye
 * bildiriyordu. Kimse fark etmedi çünkü kırık bir şey yok: tarayıcı en büyük
 * adayı zaten seçiyor, yalnızca 1920px ekranda LCP görselini %39 büyütüyor —
 * yani sitenin en görünür fotoğrafı yumuşak çıkıyordu.
 *
 * Beklenen boy artık elle yazılmıyor: srcSet'in EN BÜYÜK tanımlayıcısı ne ise
 * (1200w / 1600w) ana dosyadan o bekleniyor. Böylece denetim hero ile sınırlı
 * kalmıyor, srcSet'i olan her klasörü kapsıyor.
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

const olcuSorunlari = []
for (const { dizin, ekler, yalnizca } of KURALLAR) {
  const ana = kodAnaGenislik.get(dizin)
  if (!ana) continue
  for (const dosya of anaDosyalar(dizin, yalnizca)) {
    const o = webpOlcu(`${dizin}/${dosya}`)
    if (!o) continue
    if (o[0] < ana) olcuSorunlari.push([`${dizin}/${dosya}`, o, ana])
    // Ana dosya, kodun istediği bir varyanttan DAR ise o varyant hiç üretilemez
    // (büyütmek anlamsız) ama srcset onu yine de bildiriyor -> 404 -> görsel ölür.
    for (const g of ekler)
      if (o[0] <= g && !fs.existsSync(path.join(dizin, dosya.replace(/\.webp$/i, `-${g}.webp`))))
        console.log(`  ! ${dizin}/${dosya} ${o[0]}px genişlikte ama srcSet ${g}w istiyor — üretilemez, srcSet'ten ${g}w çıkarılmalı`)
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

if (YALNIZCA_DENETIM) process.exit(hata ? 1 : 0)

/* ══════════════════════════════════════════════════════════════════════════
   ÜRETİM — yalnızca buradan sonrası sharp istiyor
   ══════════════════════════════════════════════════════════════════════════ */
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
  for (const dosya of anaDosyalar(dizin, yalnizca)) {
    const kaynak = path.join(dizin, dosya)
    for (const genislik of ekler) {
      const hedef = path.join(dizin, dosya.replace(/\.webp$/i, `-${genislik}.webp`))
      if (fs.existsSync(hedef) && !ZORLA) {
        atlanan++
        continue
      }
      const meta = await sharp(kaynak).metadata()
      if (meta.width && meta.width <= genislik) {
        // Kaynak zaten küçük: büyütmek boşuna bayt, üretilmiyor.
        // DİKKAT: eskiden buraya "srcset kaynağın kendisine düşer" yazıyordu —
        // YANLIŞ. Tarayıcı adayı önce seçer; seçtiği dosya yoksa BAŞKA adaya
        // düşmez, <img> onError'a gider ve SmartImage görseli komple yer
        // tutucuyla değiştirir. Yani bu atlama sessiz bırakılamaz: ya ana
        // görsel daha geniş üretilmeli ya srcSet'ten bu genişlik çıkarılmalı.
        console.log(`  ! ${hedef} üretilemedi: kaynak ${meta.width}px — srcSet ${genislik}w bildiriyorsa o görsel HİÇ GÖRÜNMEZ`)
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
