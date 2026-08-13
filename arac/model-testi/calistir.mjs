/**
 * MODEL TESTİ — çalıştırıcı.
 *
 *   node arac/model-testi/calistir.mjs
 *
 * Anahtar `.env.local` içinden okunur:
 *
 *   NVIDIA_API_KEY=nvapi-...
 *
 * ÖNEK YOK. `VITE_NVIDIA_API_KEY` yazarsanız Vite onu istemci paketine gömer
 * ve anahtar `yayin/.../assets/*.js` içinde açık metin olarak yayına gider.
 * Bu dosya Node tarafında çalışıyor, öneke ihtiyaç yok.
 *
 * Çıktılar `arac/model-testi/ciktilar/<model>.md` olarak yazılır; sonra
 * `node arac/model-testi/denetle.mjs` ile uydurma taraması yapılır.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { sistemIstemi, kullaniciIstemi } from './gorev.js'

const buradan = path.dirname(fileURLToPath(import.meta.url))
const ciktiKlasoru = path.join(buradan, 'ciktilar')

/**
 * MODEL KİMLİKLERİ — kendi listenizle değiştirin.
 *
 * Kimlikleri TAHMİN ETMEYİN: build.nvidia.com'da modelin sayfasını açıp
 * "Get API Key" / kod örneğindeki `model:` değerini birebir kopyalayın.
 * Yayıncı öneki değişebiliyor (nvidia/, meta/, openai/, google/...).
 */
const modeller = [
  'nvidia/nemotron-3-ultra-550b-a55b',
  'openai/gpt-oss-120b',
  'meta/llama-3.3-70b-instruct',
  'google/gemma-4-31b-it',
  'zai/glm-5.2',
]

const UC_NOKTA = 'https://integrate.api.nvidia.com/v1/chat/completions'

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

async function modeliCalistir(anahtar, model) {
  const basla = Date.now()
  const cevap = await fetch(UC_NOKTA, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${anahtar}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      model,
      messages: [
        { role: 'system', content: sistemIstemi },
        { role: 'user', content: kullaniciIstemi },
      ],
      // Düşük sıcaklık: yaratıcılık değil, kurallara uyma ölçülüyor.
      // Yüksek tutulursa modeller arası fark üslup gürültüsüne karışır.
      temperature: 0.3,
      top_p: 0.9,
      max_tokens: 1500,
    }),
  })

  const sure = ((Date.now() - basla) / 1000).toFixed(1)

  if (!cevap.ok) {
    const govde = await cevap.text()
    return { hata: `HTTP ${cevap.status} — ${govde.slice(0, 300)}`, sure }
  }

  const veri = await cevap.json()
  const metin = veri.choices?.[0]?.message?.content ?? ''
  return {
    metin,
    sure,
    tokenSayisi: veri.usage?.completion_tokens ?? null,
    kelime: metin.trim().split(/\s+/).filter(Boolean).length,
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

fs.mkdirSync(ciktiKlasoru, { recursive: true })
console.log(`\n${modeller.length} model test ediliyor...\n`)

for (const model of modeller) {
  process.stdout.write(`  ${model.padEnd(38)} `)
  try {
    const sonuc = await modeliCalistir(anahtar, model)
    if (sonuc.hata) {
      console.log(`HATA (${sonuc.sure}s) — ${sonuc.hata.split('\n')[0]}`)
      continue
    }
    const dosya = path.join(ciktiKlasoru, `${model.replace(/[/\\]/g, '_')}.md`)
    fs.writeFileSync(dosya, sonuc.metin)
    console.log(`${sonuc.kelime} kelime, ${sonuc.sure}s`)
  } catch (e) {
    console.log(`HATA — ${e.message}`)
  }
  // NIM dakikada 40 istek veriyor; 5 model icin beklemeye gerek yok ama
  // liste buyurse diye araya kisa bir bosluk konuyor.
  await new Promise((r) => setTimeout(r, 1500))
}

console.log(`\nCiktilar: ${path.relative(process.cwd(), ciktiKlasoru)}/`)
console.log('Simdi: node arac/model-testi/denetle.mjs\n')
