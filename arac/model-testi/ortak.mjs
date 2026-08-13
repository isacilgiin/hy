/**
 * MODEL TESTİ — sağlayıcı tablosu ve ortak yardımcılar.
 *
 * `calistir.mjs` ile `teshis.mjs` aynı sağlayıcı tanımlarını ve aynı istek
 * gövdesini kullanmak zorunda. teshis, calistir'ı import edemez: o dosya
 * import edilir edilmez testi çalıştırmaya başlıyor. Ortak parçalar burada.
 *
 * Gövdeyi `govdeKur` üretiyor — teşhis aracının "tam gövde" denemesi ile
 * çalıştırıcının gerçekte gönderdiği isteğin birebir aynı olması için. Ayrı
 * ayrı yazılsalardı teşhis, sorunu olmayan bir gövdeyi test ediyor olabilirdi.
 */

import fs from 'node:fs'
import path from 'node:path'

/**
 * GÖVDE MERDİVENİ — sağlayıcının reddedebileceği alanlar için sıralı plan.
 *
 * 2026-08-13: `reasoning_effort: 'none'` + `max_tokens: 16000` eklendikten
 * sonra Google ucu her isteğe `400 INVALID_ARGUMENT` döndü. Hata hangi alanın
 * reddedildiğini söylemiyor, o yüzden çalıştırıcı 400 alınca sıradaki gövdeye
 * geçiyor.
 *
 * SIRALAMA ÖNEMLİ. Ölçüt "200 dönen ilk gövde" DEĞİL, "düşünmeyi bastırmayı
 * koruyan ilk gövde". Sebebi: düşünme bütçeyi yiyip 1200 kelimelik görevde
 * 115 kelime bıraktı. Düşünme denetimi olmayan bir gövde yeşil koşu verir ama
 * sayılar yine geçersiz olur — yani düzeltmeye çalıştığımız hatanın aynısı.
 * Bu yüzden önce düşünmeyi kapatmanın iki ayrı yolu, sonra düşük efor, en
 * sonda denetimsiz gövde denenir.
 */
const dusunmeKapali = { reasoning_effort: 'none' }
const dusunmeBudcesiSifir = { extra_body: { google: { thinking_config: { thinking_budget: 0 } } } }

export const saglayicilar = {
  nim: {
    ad: 'NVIDIA NIM',
    taban: 'https://integrate.api.nvidia.com/v1',
    anahtarDegiskeni: 'NVIDIA_API_KEY',
    govdeSecenekleri: [{ ad: 'duz + 16000', ek: {}, tavan: 16000 }],
  },
  google: {
    ad: 'Google AI Studio',
    taban: 'https://generativelanguage.googleapis.com/v1beta/openai',
    anahtarDegiskeni: 'GOOGLE_API_KEY',
    // Liste ucu kimlikleri "models/gemini-3.6-flash" diye döndürüyor ama
    // OpenAI uyumlu uç öneksiz istiyor. Listeden kopyalayıp yapıştıran
    // kişinin bunu bilmesi gerekmesin diye burada kırpılıyor.
    kimligiDuzelt: (m) => m.replace(/^models\//, ''),
    govdeSecenekleri: [
      { ad: "reasoning_effort:'none' + 16000", ek: dusunmeKapali, tavan: 16000, dusunmeDenetimi: true },
      { ad: 'thinking_budget:0 + 16000', ek: dusunmeBudcesiSifir, tavan: 16000, dusunmeDenetimi: true },
      { ad: "reasoning_effort:'none' + 8192", ek: dusunmeKapali, tavan: 8192, dusunmeDenetimi: true },
      { ad: "reasoning_effort:'low' + 16000", ek: { reasoning_effort: 'low' }, tavan: 16000, dusunmeDenetimi: true },
      { ad: 'duz + 16000', ek: {}, tavan: 16000 },
      { ad: 'duz + 8192', ek: {}, tavan: 8192 },
    ],
  },
}

/**
 * İstek gövdesi. Sıcaklık düşük: yaratıcılık değil kurallara uyma ölçülüyor,
 * modeller arası fark üslup gürültüsüne karışmasın.
 */
export function govdeKur({ model, saglayici, secenek, mesajlar, akis = true }) {
  return {
    model: saglayici.kimligiDuzelt ? saglayici.kimligiDuzelt(model) : model,
    messages: mesajlar,
    temperature: 0.3,
    top_p: 0.9,
    // 1500 kelimelik Türkçe metin ~3000 token; gerisi düşünmeye pay.
    max_tokens: secenek.tavan,
    stream: akis,
    ...(secenek.ek ?? {}),
  }
}

export function anahtariOku(degisken) {
  if (process.env[degisken]) return process.env[degisken]
  try {
    const metin = fs.readFileSync(path.join(process.cwd(), '.env.local'), 'utf8')
    const satir = metin.split('\n').find((s) => s.trim().startsWith(`${degisken}=`))
    if (satir) return satir.slice(satir.indexOf('=') + 1).trim().replace(/^["']|["']$/g, '')
  } catch {
    /* .env.local yok */
  }
  return null
}

export function saglayiciyiSec(argumanlar) {
  const ad = argumanlar.find((a) => a.startsWith('--saglayici='))?.split('=')[1] ?? 'nim'
  const saglayici = saglayicilar[ad]
  if (!saglayici) {
    console.error(`\nBilinmeyen saglayici: ${ad}`)
    console.error(`Secenekler: ${Object.keys(saglayicilar).join(', ')}\n`)
    process.exit(1)
  }
  const anahtar = anahtariOku(saglayici.anahtarDegiskeni)
  if (!anahtar) {
    console.error(`\n${saglayici.anahtarDegiskeni} bulunamadi (${saglayici.ad}).`)
    console.error('Proje kokunde .env.local olusturup su satiri ekleyin:\n')
    console.error(`  ${saglayici.anahtarDegiskeni}=...\n`)
    console.error('(VITE_ oneki KULLANMAYIN — o onek anahtari tarayiciya sizdirir.)\n')
    process.exit(1)
  }
  return { saglayici, anahtar, saglayiciAdi: ad }
}
