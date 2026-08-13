/**
 * MODEL TESTİ — istek teşhisi.
 *
 *   node arac/model-testi/teshis.mjs models/gemini-3.6-flash --saglayici=google
 *
 * NE İŞE YARAR: sağlayıcı `400 INVALID_ARGUMENT` döndüğünde hangi alanın
 * reddedildiğini söylemez. Bu araç alanları teker teker gönderip hangisinin
 * kabul edilip hangisinin reddedildiğini ölçer. Tahmin etmeye gerek kalmaz.
 *
 * NEDEN YAZILDI (2026-08-13): tek commit'te gövdeye iki şey birden eklendi —
 * `reasoning_effort: 'none'` ve `max_tokens` 6000 → 16000 — ve ondan sonra her
 * istek 400 aldı. İki şüpheli, tek hata mesajı. Ayırmanın tek yolu ölçmek.
 *
 * İstekler bilinçli olarak KÜÇÜK: "Merhaba de." ve 64 token tavan. Amaç metin
 * üretmek değil, ucun gövdeyi kabul edip etmediğini görmek. Kotayı yemez.
 *
 * ÜÇ AŞAMA:
 *  1. Taban gövde (model + messages + stream). Bu da 400 alırsa sorun eklenen
 *     alanlarda değil; model kimliğinde, uçta ya da anahtarda demektir ve
 *     altındaki her satır gürültü olur — o yüzden orada durulur.
 *  2. Taban + tek alan. Tek başına reddedilen alanları bulur.
 *  3. Tam gövde. Tek tek hepsi geçip tam gövde düşerse sorun bir alanda değil
 *     BİRLEŞİMDE demektir; o durumda alanlar tam gövdeden teker teker çıkarılıp
 *     hangi ikilinin çakıştığı aranır. Yalnızca "tek alan" testi yapmak bu
 *     durumu tamamen kaçırır.
 */

import { saglayiciyiSec, govdeKur } from './ortak.mjs'
import { sistemIstemi } from './gorev.js'

const argumanlar = process.argv.slice(2)
const { saglayici, anahtar, saglayiciAdi } = saglayiciyiSec(argumanlar)
const model = argumanlar.find((a) => !a.startsWith('--'))

if (!model) {
  console.error('\nModel kimligi verin:')
  console.error('  node arac/model-testi/teshis.mjs models/gemini-3.6-flash --saglayici=google\n')
  process.exit(1)
}

const kimlik = saglayici.kimligiDuzelt ? saglayici.kimligiDuzelt(model) : model
const kisaMesaj = [{ role: 'user', content: 'Merhaba de.' }]

const tabanGovde = { model: kimlik, messages: kisaMesaj, stream: true }

async function dene(govde) {
  try {
    const cevap = await fetch(`${saglayici.taban}/chat/completions`, {
      method: 'POST',
      signal: AbortSignal.timeout(45_000),
      headers: {
        Authorization: `Bearer ${anahtar}`,
        'Content-Type': 'application/json',
        Accept: 'text/event-stream',
      },
      body: JSON.stringify(govde),
    })
    if (cevap.ok) {
      // Metni okumaya gerek yok; uc govdeyi kabul etti, olcmek istedigimiz buydu.
      await cevap.body?.cancel()
      return { olur: true, kod: cevap.status }
    }
    const govdeMetni = await cevap.text()
    return { olur: false, kod: cevap.status, mesaj: govdeMetni.replace(/\s+/g, ' ').slice(0, 160) }
  } catch (e) {
    return { olur: false, kod: '---', mesaj: e.message }
  }
}

function yaz(ad, sonuc) {
  const damga = sonuc.olur ? '[ OK  ]' : `[ RED ]`
  console.log(`  ${damga} ${ad}`)
  if (!sonuc.olur) console.log(`          ${sonuc.kod} — ${sonuc.mesaj}`)
}

console.log(`\nTeshis: ${kimlik}  (${saglayici.ad})`)
console.log('Kucuk istekler gonderiliyor — kota harcamaz.\n')

// --- 1. AŞAMA: taban gövde ---
console.log('1) Taban govde')
const taban = await dene(tabanGovde)
yaz('model + messages + stream', taban)

if (!taban.olur) {
  console.log('\n  DURDURULDU. Taban govde bile reddedildi — sorun eklenen alanlarda degil.')
  console.log('  Sirasiyla bakin:')
  console.log(
    `    · model kimligi dogru mu:  node arac/model-testi/calistir.mjs --liste --saglayici=${saglayiciAdi}`
  )
  console.log(`    · ${saglayici.anahtarDegiskeni} gecerli mi / kota penceresi acik mi`)
  console.log(`    · uc adresi: ${saglayici.taban}\n`)
  process.exit(1)
}

// --- 2. AŞAMA: taban + tek alan ---
console.log('\n2) Taban + tek alan')

const tekAlanlar = [
  { ad: 'temperature: 0.3', alan: { temperature: 0.3 } },
  { ad: 'top_p: 0.9', alan: { top_p: 0.9 } },
  { ad: 'max_tokens: 4096', alan: { max_tokens: 4096 } },
  { ad: 'max_tokens: 8192', alan: { max_tokens: 8192 } },
  { ad: 'max_tokens: 16000', alan: { max_tokens: 16000 } },
  { ad: 'max_tokens: 32000', alan: { max_tokens: 32000 } },
  { ad: "reasoning_effort: 'none'", alan: { reasoning_effort: 'none' } },
  { ad: "reasoning_effort: 'low'", alan: { reasoning_effort: 'low' } },
  {
    ad: 'extra_body.google.thinking_config.thinking_budget: 0',
    alan: { extra_body: { google: { thinking_config: { thinking_budget: 0 } } } },
  },
  { ad: 'sistem mesaji (role: system)', mesajlarla: true },
]

const redler = []
for (const t of tekAlanlar) {
  const govde = t.mesajlarla
    ? { ...tabanGovde, messages: [{ role: 'system', content: sistemIstemi }, ...kisaMesaj] }
    : { ...tabanGovde, ...t.alan }
  const sonuc = await dene(govde)
  yaz(t.ad, sonuc)
  if (!sonuc.olur) redler.push(t.ad)
}

// --- 3. AŞAMA: tam gövde ---
console.log('\n3) Tam govde (calistir.mjs ne gonderiyorsa o)')

const ilkSecenek = saglayici.govdeSecenekleri[0]
const tamGovde = govdeKur({
  model,
  saglayici,
  secenek: ilkSecenek,
  mesajlar: [{ role: 'system', content: sistemIstemi }, ...kisaMesaj],
})
const tam = await dene(tamGovde)
yaz(ilkSecenek.ad, tam)

// Tek tek hepsi geçti ama tam gövde düştüyse sorun BİRLEŞİMDE. Alanları tam
// gövdeden teker teker çıkarıp hangisinin varlığı hatayı doğurduğuna bakılır.
if (!tam.olur && !redler.length) {
  console.log('\n  Tek alanlarin hepsi gecti ama tam govde dustu — birlesim sorunu.')
  console.log('  Tam govdeden alanlar teker teker cikariliyor:\n')
  for (const alanAdi of Object.keys(tamGovde)) {
    if (alanAdi === 'model' || alanAdi === 'messages' || alanAdi === 'stream') continue
    const eksik = { ...tamGovde }
    delete eksik[alanAdi]
    const sonuc = await dene(eksik)
    yaz(`tam govde EKSI ${alanAdi}`, sonuc)
    if (sonuc.olur) redler.push(`${alanAdi} (yalniz degil, birlesimde)`)
  }
}

// --- özet ---
console.log('\n' + '-'.repeat(60))
if (tam.olur) {
  console.log(`SONUC: tam govde kabul edildi (${ilkSecenek.ad}).`)
  console.log('Hata bu govdede degil — calistir.mjs cikti alabilmeli.')
} else if (redler.length) {
  const birlesimSorunu = redler.every((r) => r.includes('birlesimde'))
  if (birlesimSorunu) {
    console.log('SONUC: tek tek hepsi kabul edildi — sorun bu alanlarin BIRLIKTE')
    console.log('gonderilmesinde. Ikisinden biri govdeden cikmali:')
  } else {
    console.log('SONUC: reddedilen alan(lar):')
  }
  for (const r of redler) console.log(`  · ${r}`)
  console.log('\ncalistir.mjs bunlari kendisi atlar (govde merdiveni), ama merdivenin')
  console.log('alt basamaklari dusunmeyi kapatamiyorsa cikti kirpilir. ortak.mjs')
  console.log('icindeki govdeSecenekleri listesinden reddedileni cikarin.')
} else {
  console.log('SONUC: belirsiz — tam govde dustu ama tek alanlarda suclu bulunamadi.')
  console.log('Yukaridaki hata mesajlarini okuyun.')
}
console.log('-'.repeat(60) + '\n')
