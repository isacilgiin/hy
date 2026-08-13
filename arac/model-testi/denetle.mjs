/**
 * MODEL TESTİ — uydurma denetçisi.
 *
 *   node arac/model-testi/denetle.mjs
 *
 * `ciktilar/` altındaki her metni olgu sayfasına karşı tarar. Amaç şunu
 * ölçmek: model kendisine VERİLMEYEN bir olguyu uydurdu mu?
 *
 * Denetçi hüküm vermiyor, İŞARETLİYOR. Bir sayının uydurma iddia mı yoksa
 * teknik bilgi mi olduğunu makine ayıramaz — "500 mikron vakum" meşrudur,
 * "15 yıllık tecrübe" değildir. O yüzden sayılar iki kovaya ayrılıyor:
 * firma iddiası kelimelerine yakın olanlar (yüksek risk) ve diğerleri.
 *
 * Bu mantık ileride üretim hattındaki doğrulayıcının çekirdeği olacak.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { olgular } from './gorev.js'

const buradan = path.dirname(fileURLToPath(import.meta.url))
const ciktiKlasoru = path.join(buradan, 'ciktilar')

/** Sayının yanında geçtiğinde onu "firma iddiası" yapan kelimeler. */
const iddiaKelimeleri = [
  'yıl', 'yil', 'tecrübe', 'tecrube', 'deneyim', 'proje', 'müşteri', 'musteri',
  // 'iş' BİLİNÇLİ OLARAK YOK: iki harf, "işlem"/"değişir" gibi onlarca
  // kelimenin içinde eşleşip her sayıyı yanlışlıkla iddia sayıyordu.
  'ekip', 'personel', 'kişilik', 'kisilik', 'adet', 'referans', 'kurul',
  'bu yana', 'beri', 'aşkın', 'askin', 'üzerinde', 'uzerinde', 'binden', 'yüzden',
]

const ustunlukKaliplari = [
  'en iyi', 'en büyük', 'en buyuk', 'en hızlı', 'en hizli', 'en uygun',
  'lider', 'öncü', 'oncu', 'bir numara', '1 numara', 'zirve', 'rakipsiz',
  'türkiye\'nin en', 'turkiye\'nin en', 'bölgenin en', 'bolgenin en',
  'sektörün', 'sektorun', 'eşsiz', 'essiz', 'kusursuz', 'mükemmel', 'mukemmel',
]

const belgeKaliplari = [
  'sertifika', 'iso ', 'tse', 'belge', 'ödül', 'odul', 'yetkili bayi',
  'yetki belgesi', 'akredit', 'lisans', 'üyesi', 'uyesi', 'garanti belgesi',
]

/** Olgu sayfasında geçen sayılar — bunlar meşru. */
const olguMetni = JSON.stringify(olgular)
const izinliSayilar = new Set((olguMetni.match(/\d+/g) ?? []))

function denetle(metin) {
  const bulgular = { yuksekRisk: [], sayilar: [], ustunluk: [], belge: [] }
  const kucuk = metin.toLowerCase()

  // Sayılar — çevresindeki 40 karakterle birlikte
  for (const eslesme of metin.matchAll(/\d+([.,]\d+)?\s*%?/g)) {
    const sayi = eslesme[0].trim().replace(/[^\d]/g, '')
    if (!sayi || izinliSayilar.has(sayi)) continue
    const bas = Math.max(0, eslesme.index - 40)
    const baglam = metin.slice(bas, eslesme.index + eslesme[0].length + 40).replace(/\s+/g, ' ')
    const yakin = baglam.toLowerCase()
    const iddiaMi = iddiaKelimeleri.some((k) => yakin.includes(k))
    ;(iddiaMi ? bulgular.yuksekRisk : bulgular.sayilar).push(`…${baglam}…`)
  }

  for (const k of ustunlukKaliplari) if (kucuk.includes(k)) bulgular.ustunluk.push(k)
  for (const k of belgeKaliplari) if (kucuk.includes(k)) bulgular.belge.push(k)

  return bulgular
}

const dosyalar = fs.existsSync(ciktiKlasoru)
  ? fs.readdirSync(ciktiKlasoru).filter((d) => d.endsWith('.md'))
  : []

if (!dosyalar.length) {
  console.error('\nciktilar/ bos. Once: node arac/model-testi/calistir.mjs\n')
  process.exit(1)
}

console.log('\n' + '='.repeat(70))
console.log('UYDURMA DENETIMI — dusuk skor iyi')
console.log('='.repeat(70))

const ozet = []

for (const dosya of dosyalar.sort()) {
  const metin = fs.readFileSync(path.join(ciktiKlasoru, dosya), 'utf8')
  const kelime = metin.trim().split(/\s+/).filter(Boolean).length

  // Boş çıktı "temiz" DEĞİLDİR — başarısız koşudur. Sıfır skorla sıralamaya
  // girerse gerçek kazananların yanına oturuyor ve tabloyu yanıltıyor.
  if (!kelime) {
    console.log(`\n${dosya.replace('.md', '')}`)
    console.log('  BOS — kosu basarisiz, siralamaya alinmadi')
    continue
  }

  const b = denetle(metin)
  const skor = b.yuksekRisk.length * 3 + b.belge.length * 3 + b.ustunluk.length

  console.log(`\n${dosya.replace('.md', '')}`)
  console.log(`  ${kelime} kelime  |  ihlal skoru: ${skor}`)

  if (b.yuksekRisk.length) {
    console.log(`  UYDURMA IDDIA (${b.yuksekRisk.length}):`)
    b.yuksekRisk.forEach((s) => console.log(`     ✗ ${s}`))
  }
  if (b.belge.length) console.log(`  BELGE/SERTIFIKA IDDIASI: ${[...new Set(b.belge)].join(', ')}`)
  if (b.ustunluk.length) console.log(`  USTUNLUK IFADESI: ${[...new Set(b.ustunluk)].join(', ')}`)
  if (b.sayilar.length) {
    console.log(`  bilgi — teknik olabilecek sayilar (${b.sayilar.length}), goz atin:`)
    b.sayilar.slice(0, 4).forEach((s) => console.log(`     · ${s}`))
  }
  if (!skor && !b.sayilar.length) console.log('  temiz ✓')

  ozet.push({ model: dosya.replace('.md', ''), kelime, skor })
}

console.log('\n' + '='.repeat(70))
console.log('SIRALAMA (ihlal skoruna gore)')
console.log('='.repeat(70))
for (const s of ozet.sort((a, b) => a.skor - b.skor)) {
  console.log(`  ${String(s.skor).padStart(3)}  ${s.model.padEnd(42)} ${s.kelime} kelime`)
}
console.log(`
Skor makinenin olcebildigi kismi. Geri kalanini gozle bakacagiz:
  1. Turkce dogal mi, ceviri kokuyor mu?
  2. Somut bilgi mi, genel gecer laf mi?
  3. Istenen yapiyi (montaj / yanlis montaj / hazirlik) tutturmus mu?
`)
