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

/**
 * DİL KİRLİLİĞİ — Türkçe metnin içine sızan yabancı yazı sistemleri.
 *
 * İlk karşılaştırmada nemotron-3-super-120b teknik olarak en iyi metni yazdı
 * ama içine Korece, Çince ve Almanca parçalar karıştırdı:
 *   "rüzgâr으로부터 korunan bir place"   "sistem에充填 edilir"
 *   "Innen ünite"   "consequently water damage'e"
 * İçerik doğru olsa bile böyle bir metin müşteri sitesine konamaz.
 *
 * Bu, uydurma iddiadan farklı olarak TAMAMEN mekanik yakalanabilir: Türkçe
 * metinde Han, Hangul, Kiril, Arap veya Japon karakteri hiç bulunmamalı.
 */
const yabanciYaziSistemleri = [
  { ad: 'Çince/Japonca (Han)', re: /[一-鿿㐀-䶿]/g },
  { ad: 'Korece (Hangul)', re: /[가-힯ᄀ-ᇿ]/g },
  { ad: 'Japonca (kana)', re: /[぀-ヿ]/g },
  { ad: 'Kiril', re: /[Ѐ-ӿ]/g },
  { ad: 'Arapça', re: /[؀-ۿ]/g },
]

function dilKirliligi(metin) {
  const bulgular = []
  for (const { ad, re } of yabanciYaziSistemleri) {
    const eslesmeler = [...metin.matchAll(re)]
    if (!eslesmeler.length) continue
    const ilk = eslesmeler[0].index
    const baglam = metin.slice(Math.max(0, ilk - 30), ilk + 30).replace(/\s+/g, ' ')
    bulgular.push({ ad, adet: eslesmeler.length, ornek: baglam })
  }
  return bulgular
}

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
  const kirlilik = dilKirliligi(metin)
  // Dil kirliliği ağır basıyor: uydurma bir sayı düzeltilebilir, ama içine
  // Korece karışmış bir metin baştan yazılmalı.
  const skor =
    b.yuksekRisk.length * 3 + b.belge.length * 3 + b.ustunluk.length + kirlilik.length * 5

  console.log(`\n${dosya.replace('.md', '')}`)
  console.log(`  ${kelime} kelime  |  ihlal skoru: ${skor}`)

  if (kirlilik.length) {
    console.log(`  DIL KIRLILIGI — metin Turkce degil, yabanci yazi sistemi karismis:`)
    kirlilik.forEach((k) => console.log(`     ✗ ${k.ad}: ${k.adet} karakter — …${k.ornek}…`))
  }

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
