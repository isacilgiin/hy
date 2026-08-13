/**
 * MODEL TESTİ — çalıştırıcı.
 *
 *   node arac/model-testi/calistir.mjs --liste          kullanilabilir modelleri yazar
 *   node arac/model-testi/calistir.mjs                  listedeki modelleri sirayla dener
 *   node arac/model-testi/calistir.mjs <model-kimligi>  tek model dener
 *
 * Anahtar `.env.local` içinden okunur:
 *
 *   NVIDIA_API_KEY=nvapi-...
 *
 * ÖNEK YOK. `VITE_NVIDIA_API_KEY` yazarsanız Vite onu istemci paketine gömer
 * ve anahtar `yayin/.../assets/*.js` içinde açık metin olarak yayına gider.
 *
 * İLK KOŞUDA ÖĞRENİLENLER (2026-08-13) — tasarımı bunlar belirledi:
 *  · Akışsız istek 302 saniyede 504 yiyordu. Ağ geçidi uzun süren bağlantıyı
 *    kesiyor. Çözüm `stream: true`: ilk parça hemen geliyor, bağlantı ölmüyor.
 *  · Nemotron Ultra HTTP 200 döndü ama `content` boştu. Akıl yürüten modeller
 *    metni `reasoning_content` alanına yazabiliyor; ikisi de okunuyor artık.
 *  · Ücretsiz uçlar dolabiliyor (503 "worker limit"). Geri çekilmeli tekrar
 *    deneme eklendi — kuyruk boşalınca geçiyor.
 *  · Uydurulan bir model kimliği 404 veriyor. Artık `--liste` ile API'den
 *    alınıyor, tahmin edilmiyor.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { sistemIstemi, kullaniciIstemi } from './gorev.js'

const buradan = path.dirname(fileURLToPath(import.meta.url))
const ciktiKlasoru = path.join(buradan, 'ciktilar')
const TABAN = 'https://integrate.api.nvidia.com/v1'

/**
 * Denenecek modeller — 2026-08-13'te `--liste` çıktısından seçildi (102 model).
 *
 * Sıra bilinçli: Türkçe üretme ihtimali yüksek olanlar önde, en yavaş olan
 * sonda. Ücretsiz uç dolarsa ya da kota biterse en değerli adaylar çoktan
 * denenmiş olur.
 *
 * Seçim gerekçeleri:
 *  · mistral-large-2  — Mistral bu modeli Türkçe dahil çok dilli olarak
 *                       duyurdu; listedeki en açık Türkçe iddiası bu.
 *  · llama-3.3-70b    — Llama'nın Türkçesi bilinen şekilde makul.
 *  · gpt-oss-120b     — talimat takibi güçlü; kural listesine uyması beklenir.
 *  · gemma-4-31b      — Google modelleri çok dilli tarafta iyi.
 *  · glm-5.2          — ilk koşuda 404 vermişti; kimlik `zai/` değil `z-a i/`
 *                       (tire ile). Uydurmanın bedeli buydu.
 *  · nemotron 120b    — 1M bağlam; Ultra'dan hızlı olması beklenir.
 *  · nemotron 550b    — en büyük ama ilk koşuda 221 saniye sürdü, en sonda.
 *
 * Listede ayrıca `writer/palmyra-creative-122b` var — doğrudan içerik yazımı
 * için eğitilmiş. Bu turda denenmedi, adaylar tükenirse sıradaki o.
 */
const modeller = [
  'mistralai/mistral-large-2-instruct',
  'meta/llama-3.3-70b-instruct',
  'openai/gpt-oss-120b',
  'google/gemma-4-31b-it',
  'z-ai/glm-5.2',
  'nvidia/nemotron-3-super-120b-a12b',
  'nvidia/nemotron-3-ultra-550b-a55b',
]

const ZAMAN_ASIMI_MS = 180_000
const DENEME_SAYISI = 3

function anahtariOku() {
  if (process.env.NVIDIA_API_KEY) return process.env.NVIDIA_API_KEY
  try {
    const metin = fs.readFileSync(path.join(process.cwd(), '.env.local'), 'utf8')
    const satir = metin.split('\n').find((s) => s.trim().startsWith('NVIDIA_API_KEY='))
    if (satir) return satir.slice(satir.indexOf('=') + 1).trim().replace(/^["']|["']$/g, '')
  } catch {
    /* .env.local yok */
  }
  return null
}

async function modelleriListele(anahtar) {
  const cevap = await fetch(`${TABAN}/models`, {
    headers: { Authorization: `Bearer ${anahtar}` },
  })
  if (!cevap.ok) {
    console.error(`Liste alinamadi: HTTP ${cevap.status}`)
    process.exit(1)
  }
  const veri = await cevap.json()
  const kimlikler = (veri.data ?? []).map((m) => m.id).sort()
  console.log(`\n${kimlikler.length} model:\n`)
  for (const k of kimlikler) console.log('  ' + k)
  console.log('\nMetin ureten bir tanesini secip calistir.mjs icindeki `modeller` dizisine yazin.')
  console.log('Embed / rerank / safety / vision modelleri bu test icin uygun degil.\n')
}

/**
 * Akışlı istek. Parçalar geldikçe `content` ve `reasoning_content` ayrı ayrı
 * toplanıyor: bazı modeller cevabı ikincisine yazıyor ve ilki boş kalıyor.
 */
async function modeliCalistir(anahtar, model) {
  const kontrol = new AbortController()
  const sayac = setTimeout(() => kontrol.abort(), ZAMAN_ASIMI_MS)
  const basla = Date.now()

  try {
    const cevap = await fetch(`${TABAN}/chat/completions`, {
      method: 'POST',
      signal: kontrol.signal,
      headers: {
        Authorization: `Bearer ${anahtar}`,
        'Content-Type': 'application/json',
        Accept: 'text/event-stream',
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: 'system', content: sistemIstemi },
          { role: 'user', content: kullaniciIstemi },
        ],
        // Yaratıcılık değil kurallara uyma ölçülüyor; sıcaklık düşük tutuluyor
        // ki modeller arası fark üslup gürültüsüne karışmasın.
        temperature: 0.3,
        top_p: 0.9,
        // Akıl yürüten modellerde bütçenin çoğu düşünmeye gidiyor; ilk koşuda
        // 1500 yetmedi ve geriye yazacak token kalmadı.
        max_tokens: 6000,
        stream: true,
      }),
    })

    if (!cevap.ok) {
      const govde = await cevap.text()
      return { kod: cevap.status, hata: govde.slice(0, 200).replace(/\s+/g, ' ') }
    }

    let metin = ''
    let dusunce = ''
    const okuyucu = cevap.body.getReader()
    const cozucu = new TextDecoder()
    let tampon = ''

    for (;;) {
      const { done, value } = await okuyucu.read()
      if (done) break
      tampon += cozucu.decode(value, { stream: true })
      const satirlar = tampon.split('\n')
      tampon = satirlar.pop() ?? ''
      for (const satir of satirlar) {
        if (!satir.startsWith('data:')) continue
        const yuk = satir.slice(5).trim()
        if (!yuk || yuk === '[DONE]') continue
        try {
          const parca = JSON.parse(yuk).choices?.[0]?.delta ?? {}
          if (parca.content) {
            metin += parca.content
            process.stdout.write('.')
          }
          if (parca.reasoning_content) dusunce += parca.reasoning_content
        } catch {
          /* yarım parça, sonraki turda tamamlanır */
        }
      }
    }

    return {
      metin,
      dusunce,
      sure: ((Date.now() - basla) / 1000).toFixed(1),
      kelime: metin.trim().split(/\s+/).filter(Boolean).length,
    }
  } catch (e) {
    return {
      hata: e.name === 'AbortError' ? `zaman asimi (${ZAMAN_ASIMI_MS / 1000}s)` : e.message,
      sure: ((Date.now() - basla) / 1000).toFixed(1),
    }
  } finally {
    clearTimeout(sayac)
  }
}

const anahtar = anahtariOku()
if (!anahtar) {
  console.error('\nNVIDIA_API_KEY bulunamadi.')
  console.error('Proje kokunde .env.local olusturup su satiri ekleyin:\n')
  console.error('  NVIDIA_API_KEY=nvapi-...\n')
  console.error('(VITE_ oneki KULLANMAYIN — o onek anahtari tarayiciya sizdirir.)\n')
  process.exit(1)
}

const arg = process.argv[2]
if (arg === '--liste') {
  await modelleriListele(anahtar)
  process.exit(0)
}

const denenecek = arg ? [arg] : modeller
fs.mkdirSync(ciktiKlasoru, { recursive: true })
console.log(`\n${denenecek.length} model test ediliyor (nokta = gelen metin)\n`)

for (const model of denenecek) {
  console.log(`  ${model}`)
  process.stdout.write('    ')

  let sonuc
  for (let deneme = 1; deneme <= DENEME_SAYISI; deneme++) {
    sonuc = await modeliCalistir(anahtar, model)
    // 503/429 = ucretsiz uc dolu. Bekleyip tekrar denemek genelde geciyor.
    if (sonuc.kod !== 503 && sonuc.kod !== 429) break
    const bekle = deneme * 15
    process.stdout.write(`\n    uc dolu (${sonuc.kod}), ${bekle}s bekleniyor... `)
    await new Promise((r) => setTimeout(r, bekle * 1000))
  }

  if (sonuc.hata) {
    console.log(`\n    HATA ${sonuc.kod ?? ''} (${sonuc.sure ?? '?'}s) — ${sonuc.hata}\n`)
    continue
  }

  if (!sonuc.kelime && sonuc.dusunce) {
    // Model dusundu ama cevap yazmadi: token butcesi dusunmeye gitti.
    console.log(
      `\n    BOS CEVAP (${sonuc.sure}s) — model ${sonuc.dusunce.length} karakter dusunmus` +
        ` ama metin yazmamis. max_tokens yetmemis olabilir.\n`
    )
    fs.writeFileSync(
      path.join(ciktiKlasoru, `${model.replace(/[/\\]/g, '_')}.DUSUNCE.txt`),
      sonuc.dusunce
    )
    continue
  }

  if (!sonuc.kelime) {
    console.log(`\n    BOS CEVAP (${sonuc.sure}s) — icerik de dusunce de gelmedi.\n`)
    continue
  }

  fs.writeFileSync(path.join(ciktiKlasoru, `${model.replace(/[/\\]/g, '_')}.md`), sonuc.metin)
  console.log(`\n    ${sonuc.kelime} kelime, ${sonuc.sure}s ✓\n`)
  await new Promise((r) => setTimeout(r, 1500))
}

console.log(`Ciktilar: ${path.relative(process.cwd(), ciktiKlasoru)}/`)
console.log('Simdi: node arac/model-testi/denetle.mjs\n')
