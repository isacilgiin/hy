/**
 * WEBP YENİDEN SIKIŞTIRMA — ölçerek, kanıtla.
 *
 * Neden ayrı bir araç: `gorsel-varyant.mjs` TÜRETİLMİŞ boyutları (600/900/1200)
 * üretir. Bu araç ise DİSKTEKİ dosyayı yerinde yeniden kodlar. İkisi farklı iş;
 * varyant aracı zaten var olan dosyayı atlar, yani şişkin bir dosyayı asla
 * düzeltmez.
 *
 * ============================================================================
 * NEDEN q80 VE DAHA AŞAĞISI DEĞİL — 2026-08-26'da ölçüldü, tahmin değil
 * ============================================================================
 * Öncesi/sonrası fotoğrafları q65..q85 aralığında yeniden kodlanıp her birinin
 * PSNR'ı (asıl dosyaya göre tepe sinyal/gürültü oranı) hesaplandı:
 *
 *   salon-halisi-sonrasi.webp   354 KB
 *     q85 -> 348 KB / 40.6 dB     (kazanç yok: asıl dosya zaten ~q85)
 *     q80 -> 299 KB / 35.9 dB     <-- tavan burası
 *     q75 -> 246 KB / 32.9 dB
 *     q65 -> 213 KB / 31.6 dB
 *
 * q85'te dosya küçülmüyor; demek ki asıl görseller zaten q85 civarında kodlanmış.
 * q75 ve altı ciddi kazanç veriyor AMA bu fotoğrafların VARLIK SEBEBİ dokuyu
 * göstermek: kirli halı ile temiz halının farkı. 33 dB'de o doku ezilir; yani
 * baytı, sayfanın var olma amacından çalmış oluruz. Üstelik PSNR ZATEN KAYIPLI
 * olan asıl dosyaya göre ölçülüyor, gerçek kayıp bu sayıdan daha fazla.
 *
 * Bu yüzden aşağıdaki iki eşik VAR ve düşürülmemeli:
 *   - en az %8 küçülmeyecekse dosyaya DOKUNMA (bir nesil daha kayba değmez)
 *   - PSNR 36 dB'nin altına düşerse dosyaya DOKUNMA (gözle fark edilir)
 * Bir dosya bu eşiklerden geçemiyorsa "atlandı" der ve sebebini yazar.
 *
 * Kullanım:  npm run sikistir              (varsayılan: oncesi-sonrasi/)
 *            npm run sikistir -- blog      (başka bir alt klasör)
 *            npm run sikistir -- . --dene  (hepsi, ama YAZMADAN sadece raporla)
 */
import { createRequire } from 'node:module'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const sharp = createRequire(import.meta.url)('sharp')

const KALITE = 80
const EFOR = 6
const EN_AZ_KAZANC = 0.08 // %8
const EN_DUSUK_PSNR = 36 // dB

const kokDizin = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const gorselKok = path.join(kokDizin, 'public', 'images')

const argumanlar = process.argv.slice(2)
const deneme = argumanlar.includes('--dene')
const altKlasor = argumanlar.find((a) => !a.startsWith('--')) || 'oncesi-sonrasi'
const hedefDizin = path.join(gorselKok, altKlasor === '.' ? '' : altKlasor)

if (!fs.existsSync(hedefDizin)) {
  console.error('Klasör yok: ' + path.relative(kokDizin, hedefDizin))
  process.exit(1)
}

/**
 * PSNR — iki görseli ham piksele açıp ortalama kare hatadan hesaplar.
 * Kabaca: 40+ dB gözle ayırt edilemez, 36-40 çok iyi, 30-35 fark edilebilir.
 * Boyut aynı olmalı; bu araç yeniden boyutlandırmadığı için hep aynıdır.
 */
async function psnr(aBuf, bBuf) {
  const [a, b] = await Promise.all([
    sharp(aBuf).raw().toBuffer(),
    sharp(bBuf).raw().toBuffer(),
  ])
  if (a.length !== b.length) return null
  let kare = 0
  for (let i = 0; i < a.length; i++) {
    const d = a[i] - b[i]
    kare += d * d
  }
  const mse = kare / a.length
  return mse === 0 ? Infinity : 10 * Math.log10((255 * 255) / mse)
}

function webpDosyalari(dizin) {
  const cikti = []
  for (const ad of fs.readdirSync(dizin)) {
    const tam = path.join(dizin, ad)
    if (fs.statSync(tam).isDirectory()) cikti.push(...webpDosyalari(tam))
    else if (ad.endsWith('.webp')) cikti.push(tam)
  }
  return cikti.sort()
}

const dosyalar = webpDosyalari(hedefDizin)
console.log(
  '\n' + (deneme ? 'DENEME (hiçbir dosya yazılmayacak) — ' : '') +
  dosyalar.length + ' webp, q' + KALITE + ' efor' + EFOR +
  ' · eşikler: en az %' + (EN_AZ_KAZANC * 100) + ' kazanç ve en az ' + EN_DUSUK_PSNR + ' dB\n'
)
console.log('  dosya                                    önce    sonra   kazanç    PSNR   sonuç')

let yazilan = 0
let atlanan = 0
let oncekiToplam = 0
let sonrakiToplam = 0

for (const yol of dosyalar) {
  const asil = fs.readFileSync(yol)
  const meta = await sharp(asil).metadata()

  // Alfa kanallı görselleri (logo gibi) bu araç ELLEMEZ: şeffaflığı kayıplı
  // yeniden kodlamak kenarlarda hâle bırakır ve kazanç birkaç KB'dir.
  if (meta.hasAlpha) {
    console.log('  ' + path.relative(gorselKok, yol).padEnd(40) +
      (asil.length / 1024).toFixed(0).padStart(6) + 'KB' + ' '.repeat(24) + 'atlandı (alfa kanallı)')
    atlanan++
    oncekiToplam += asil.length
    sonrakiToplam += asil.length
    continue
  }

  const yeni = await sharp(asil).webp({ quality: KALITE, effort: EFOR }).toBuffer()
  const kazanc = 1 - yeni.length / asil.length
  const p = await psnr(asil, yeni)

  let sonuc
  if (kazanc < EN_AZ_KAZANC) sonuc = 'atlandı (kazanç az)'
  else if (p !== null && p < EN_DUSUK_PSNR) sonuc = 'atlandı (PSNR düşük)'
  else sonuc = deneme ? 'yazılacaktı' : 'yazıldı'

  const yazilacak = sonuc.startsWith('yaz')
  if (yazilacak && !deneme) fs.writeFileSync(yol, yeni)
  if (yazilacak) yazilan++
  else atlanan++

  oncekiToplam += asil.length
  sonrakiToplam += yazilacak ? yeni.length : asil.length

  console.log(
    '  ' + path.relative(gorselKok, yol).padEnd(40) +
    (asil.length / 1024).toFixed(0).padStart(6) + 'KB' +
    (yeni.length / 1024).toFixed(0).padStart(7) + 'KB' +
    ('%' + (kazanc * 100).toFixed(0)).padStart(8) +
    (p === null ? '     —' : (p === Infinity ? '   inf' : p.toFixed(1).padStart(7))) + ' dB  ' +
    sonuc
  )
}

console.log(
  '\n  yazıldı: ' + yazilan + '  |  atlandı: ' + atlanan +
  '  |  toplam ' + (oncekiToplam / 1024).toFixed(0) + ' KB -> ' + (sonrakiToplam / 1024).toFixed(0) + ' KB' +
  '  (%' + ((1 - sonrakiToplam / oncekiToplam) * 100).toFixed(0) + ')\n'
)

if (yazilan && !deneme) {
  console.log('  DİKKAT: türetilmiş varyantlar (-600/-800/-900) bu araçla ayrıca')
  console.log('  yeniden kodlanır; `npm run varyant` var olanı ATLAR, yeniden üretmez.\n')
}
