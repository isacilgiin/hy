/**
 * MODEL TESTİ — istek teşhisi.
 *
 *   node arac/model-testi/teshis.mjs models/gemini-3.6-flash --saglayici=google
 *   node arac/model-testi/teshis.mjs modelA modelB modelC --saglayici=google
 *
 * NE İŞE YARAR: sağlayıcı `400 INVALID_ARGUMENT` döndüğünde hangi alanın
 * reddedildiğini söylemez. Bu araç alanları teker teker gönderip hangisinin
 * kabul edilip hangisinin reddedildiğini ölçer. Tahmin etmeye gerek kalmaz.
 *
 * NEDEN YAZILDI (2026-08-13): tek commit'te gövdeye iki şey birden eklendi —
 * `reasoning_effort: 'none'` ve `max_tokens` 6000 → 16000 — ve ondan sonra her
 * istek 400 aldı. İki şüpheli, tek hata mesajı. Ayırmanın tek yolu ölçmek.
 *
 * İstekler bilinçli olarak KÜÇÜK: "Merhaba de." ve varsayılan tavan. Amaç metin
 * üretmek değil, ucun gövdeyi kabul edip etmediğini görmek.
 *
 * ÜÇ AŞAMA:
 *  1. Taban gövde (model + messages + stream). Bu da düşerse sorun eklenen
 *     alanlarda değil ve altındaki her satır gürültü olur — orada durulur.
 *     Birden fazla model verilirse hepsi denenir: kota MODEL BAŞINA işliyor,
 *     biri dolmuşken diğeri açık olabilir.
 *  2. Taban + tek alan. Tek başına reddedilen alanları bulur.
 *  3. Tam gövde. Tek tek hepsi geçip tam gövde düşerse sorun bir alanda değil
 *     BİRLEŞİMDE demektir; o durumda alanlar tam gövdeden teker teker çıkarılıp
 *     hangi ikilinin çakıştığı aranır. Yalnızca "tek alan" testi bunu kaçırır.
 *
 * `process.exit` KULLANILMIYOR. Windows'ta açık bağlantı varken süreci zorla
 * sonlandırmak libuv çökmesine yol açıyor:
 *   Assertion failed: !(handle->flags & UV_HANDLE_CLOSING), src\win\async.c
 * Aynı hata `--liste`de de yaşanmıştı. Akış doğal olarak bitiyor, çıkış kodu
 * `process.exitCode` ile veriliyor.
 */

import { saglayiciyiSec, govdeKur, hatayiCozumle } from './ortak.mjs'
import { sistemIstemi } from './gorev.js'

const argumanlar = process.argv.slice(2)
const { saglayici, anahtar, saglayiciAdi } = saglayiciyiSec(argumanlar)
const modeller = argumanlar.filter((a) => !a.startsWith('--'))
const kisaMesaj = [{ role: 'user', content: 'Merhaba de.' }]

/**
 * İSTEKLER ARASI BEKLEME. İlk sürümde yoktu ve teşhisin kendisi dakikalık
 * limiti aşıyordu: 12 yoklama arka arkaya gidince panelde 17/15 RPM göründü.
 * Ölçüm aracının ölçtüğü şeyi bozması kabul edilemez. `--aralik=0` ile
 * kapatılabilir (kotası bol modellerde hızlansın diye).
 */
const aralikArg = Number(argumanlar.find((a) => a.startsWith('--aralik='))?.split('=')[1])
const ARALIK_MS =
  Number.isFinite(aralikArg) && aralikArg >= 0 ? aralikArg * 1000 : saglayici.varsayilanAralikMs

const bekle = () => new Promise((r) => setTimeout(r, ARALIK_MS))

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
    return { olur: false, kod: cevap.status, ...hatayiCozumle(await cevap.text()) }
  } catch (e) {
    return { olur: false, kod: '---', mesaj: e.message }
  }
}

function yaz(ad, sonuc) {
  console.log(`  ${sonuc.olur ? '[ OK  ]' : '[ RED ]'} ${ad}`)
  if (sonuc.olur) return
  console.log(`          ${sonuc.kod} — ${sonuc.mesaj}`)
  if (sonuc.kota) console.log(`          kota: ${sonuc.kota}`)
  if (sonuc.bekleSaniye) console.log(`          saglayici ${sonuc.bekleSaniye}s bekleyin diyor`)
}

async function main() {
  if (!modeller.length) {
    console.error('\nModel kimligi verin:')
    console.error('  node arac/model-testi/teshis.mjs models/gemini-3.6-flash --saglayici=google\n')
    process.exitCode = 1
    return
  }

  console.log(`\nTeshis  (${saglayici.ad})`)
  console.log(`Kucuk istekler, aralarinda ${ARALIK_MS / 1000}s bekleme (--aralik= ile degisir).\n`)

  // --- 1. AŞAMA: taban gövde, her model için ---
  console.log('1) Taban govde (model + messages + stream)')
  let calisan = null
  for (const model of modeller) {
    const kimlik = saglayici.kimligiDuzelt ? saglayici.kimligiDuzelt(model) : model
    const sonuc = await dene({ model: kimlik, messages: kisaMesaj, stream: true })
    yaz(kimlik, sonuc)
    if (sonuc.olur && !calisan) calisan = model
    await bekle()
  }

  if (!calisan) {
    console.log('\n  DURDURULDU. Hicbir model taban govdeyi kabul etmedi.')
    console.log('  Sorun eklenen alanlarda DEGIL. 429 goruyorsaniz kota dolmus demektir —')
    console.log('  kimlik ve anahtar saglam, beklemek ya da baska model gerekiyor.')
    console.log('  Diger ihtimaller:')
    console.log(
      `    · model kimligi:  node arac/model-testi/calistir.mjs --liste --saglayici=${saglayiciAdi}`
    )
    console.log(`    · ${saglayici.anahtarDegiskeni} gecerli mi`)
    console.log(`    · uc adresi: ${saglayici.taban}\n`)
    process.exitCode = 1
    return
  }

  const tabanGovde = {
    model: saglayici.kimligiDuzelt ? saglayici.kimligiDuzelt(calisan) : calisan,
    messages: kisaMesaj,
    stream: true,
  }
  console.log(`\n  Alan testleri ${tabanGovde.model} uzerinden yapilacak.`)

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
  // Uç "düşünme desteklenmiyor" diyorsa bu bir kusur değil: model hiç
  // düşünmüyor demektir, yani düşünme bütçesinin metni kırpması da imkânsız.
  let dusunmeyenModel = false
  for (const t of tekAlanlar) {
    const govde = t.mesajlarla
      ? { ...tabanGovde, messages: [{ role: 'system', content: sistemIstemi }, ...kisaMesaj] }
      : { ...tabanGovde, ...t.alan }
    const sonuc = await dene(govde)
    yaz(t.ad, sonuc)
    if (sonuc.dusunmeYok) dusunmeyenModel = true
    // Kota hatasi alan hakkinda bir sey soylemez — suclu listesine yazilmaz.
    if (!sonuc.olur && sonuc.kod !== 429) redler.push(t.ad)
    await bekle()
  }

  // --- 3. AŞAMA: tam gövde ---
  console.log('\n3) Tam govde (calistir.mjs ne gonderiyorsa o)')

  const ilkSecenek = saglayici.govdeSecenekleri[0]
  const tamGovde = govdeKur({
    model: calisan,
    saglayici,
    secenek: ilkSecenek,
    mesajlar: [{ role: 'system', content: sistemIstemi }, ...kisaMesaj],
  })
  const tam = await dene(tamGovde)
  yaz(ilkSecenek.ad, tam)

  // Tek tek hepsi geçti ama tam gövde düştüyse sorun BİRLEŞİMDE. Alanları tam
  // gövdeden teker teker çıkarıp hangisinin varlığı hatayı doğurduğuna bakılır.
  if (!tam.olur && tam.kod !== 429 && !redler.length) {
    console.log('\n  Tek alanlarin hepsi gecti ama tam govde dustu — birlesim sorunu.')
    console.log('  Tam govdeden alanlar teker teker cikariliyor:\n')
    for (const alanAdi of Object.keys(tamGovde)) {
      if (alanAdi === 'model' || alanAdi === 'messages' || alanAdi === 'stream') continue
      const eksik = { ...tamGovde }
      delete eksik[alanAdi]
      const sonuc = await dene(eksik)
      yaz(`tam govde EKSI ${alanAdi}`, sonuc)
      if (sonuc.olur) redler.push(`${alanAdi} (yalniz degil, birlesimde)`)
      await bekle()
    }
  }

  // --- özet ---
  console.log('\n' + '-'.repeat(60))
  if (tam.olur) {
    console.log(`SONUC: tam govde kabul edildi (${ilkSecenek.ad}).`)
    console.log('Hata bu govdede degil — calistir.mjs cikti alabilmeli.')
  } else if (tam.kod === 429) {
    console.log('SONUC: olculemedi — kota testin ortasinda doldu.')
    console.log('Govde hakkinda bir sey soylenemez. Pencere acilinca tekrar calistirin.')
  } else if (dusunmeyenModel) {
    console.log('SONUC: bu model DUSUNMUYOR — reddedilen alanlarin hepsi dusunme ayari.')
    console.log('Kusur degil, avantaj: dusunme butcesi olmayan model metni kirpamaz.')
    console.log('Duz govde bu model icin DOGRU govde; calistir.mjs kendisi ona geciyor')
    console.log('ve sahte "kirpilma riski" uyarisi basmiyor. Bir sey yapmaniza gerek yok.')
  } else if (redler.length) {
    if (redler.every((r) => r.includes('birlesimde'))) {
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
}

await main()
