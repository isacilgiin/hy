/**
 * MODEL TESTİ — çalıştırıcı.
 *
 *   node arac/model-testi/calistir.mjs --liste                        NIM modelleri
 *   node arac/model-testi/calistir.mjs --liste --saglayici=google    Gemini modelleri
 *   node arac/model-testi/calistir.mjs <model>                        varsayilan gorev
 *   node arac/model-testi/calistir.mjs <model> --gorev=uzun          uzun blog yazisi
 *   node arac/model-testi/calistir.mjs <model> --gorev=tuzak         ovgu tuzagi
 *   node arac/model-testi/calistir.mjs <model> --gorev=ilce          4 ilce, kopya olcumu
 *   node arac/model-testi/calistir.mjs <model> --tekrar=3            tutarlilik
 *
 * Anahtar `.env.local` içinden okunur:
 *
 *   NVIDIA_API_KEY=nvapi-...      (--saglayici=nim, varsayilan)
 *   GOOGLE_API_KEY=...            (--saglayici=google)
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
import { sistemIstemi, gorevler } from './gorev.js'

const buradan = path.dirname(fileURLToPath(import.meta.url))
const ciktiKlasoru = path.join(buradan, 'ciktilar')

/**
 * SAĞLAYICILAR.
 *
 * Google'ın OpenAI uyumlu ucu sayesinde iki sağlayıcı da aynı istek/akış
 * kodunu kullanıyor; tek fark taban adres ve anahtarın hangi değişkenden
 * okunduğu. Google'ın kendi yerel API'si farklı bir gövde şeması istiyor —
 * uyumlu ucu seçmemizin sebebi bu, ikinci bir çözümleyici yazmamak.
 *
 * NIM'in ücretsiz kotası ~7-8 istekte doluyor; 1.200 sayfalık gerçek üretim
 * için yetmediği ölçüldü. Google AI Studio'nun günlük sınırı çok daha yüksek
 * deniyor — ama önce Türkçesi ölçülmeli, kota tek başına yeterli sebep değil.
 */
const saglayicilar = {
  nim: {
    ad: 'NVIDIA NIM',
    taban: 'https://integrate.api.nvidia.com/v1',
    anahtarDegiskeni: 'NVIDIA_API_KEY',
  },
  google: {
    ad: 'Google AI Studio',
    taban: 'https://generativelanguage.googleapis.com/v1beta/openai',
    anahtarDegiskeni: 'GOOGLE_API_KEY',
    // Liste ucu kimlikleri "models/gemini-3.6-flash" diye döndürüyor ama
    // OpenAI uyumlu uç öneksiz istiyor. Listeden kopyalayıp yapıştıran
    // kişinin bunu bilmesi gerekmesin diye burada kırpılıyor.
    kimligiDuzelt: (m) => m.replace(/^models\//, ''),
  },
}

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

/**
 * ZAMAN AŞIMI — toplam süreye değil SESSİZLİĞE bakılıyor.
 *
 * İlk sürümde 180 saniyelik toplam sınır vardı ve nemotron-3-super-120b'yi
 * tam metin akarken kesti (178 parça gelmişti). Yavaş model ile ölü uç aynı
 * şey değil: veri geliyorsa beklenir, gelmiyorsa kesilir.
 */
const BOSTA_ASIMI_MS = 75_000 // hiç parça gelmezse bu kadar bekle
const TOPLAM_TAVAN_MS = 900_000 // güvenlik tavanı: sonsuza kadar sürmesin
const DENEME_SAYISI = 3

function anahtariOku(degisken) {
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

async function modelleriListele(anahtar, saglayici) {
  const cevap = await fetch(`${saglayici.taban}/models`, {
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
async function modeliCalistir(anahtar, model, istem, saglayici) {
  const kontrol = new AbortController()
  const basla = Date.now()
  let sonVeri = Date.now()
  let bostaKesildi = false
  const izleyici = setInterval(() => {
    if (Date.now() - sonVeri > BOSTA_ASIMI_MS || Date.now() - basla > TOPLAM_TAVAN_MS) {
      bostaKesildi = Date.now() - sonVeri > BOSTA_ASIMI_MS
      kontrol.abort()
    }
  }, 2000)

  try {
    const cevap = await fetch(`${saglayici.taban}/chat/completions`, {
      method: 'POST',
      signal: kontrol.signal,
      headers: {
        Authorization: `Bearer ${anahtar}`,
        'Content-Type': 'application/json',
        Accept: 'text/event-stream',
      },
      body: JSON.stringify({
        model: saglayici.kimligiDuzelt ? saglayici.kimligiDuzelt(model) : model,
        messages: [
          { role: 'system', content: sistemIstemi },
          { role: 'user', content: istem },
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
      // İki ayrı 404 var ve karıştırılmamalı:
      //   "404 page not found"        → model kimliği yanlış
      //   "Not found for account ..." → kimlik doğru, HESABA AÇIK DEĞİL
      // İkincisinde model listede görünür ama ücretsiz katmana dahil değildir;
      // kimliği düzeltmeye çalışmak boşuna.
      if (cevap.status === 404 && govde.includes('for account')) {
        return { kod: 404, hata: 'bu model hesabiniza acik degil (listede var ama erisim yok)' }
      }
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
      sonVeri = Date.now()
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
      hata:
        e.name === 'AbortError'
          ? bostaKesildi
            ? `sessizlik — ${BOSTA_ASIMI_MS / 1000}s boyunca hic veri gelmedi`
            : `toplam tavan (${TOPLAM_TAVAN_MS / 1000}s) asildi`
          : e.message,
      sure: ((Date.now() - basla) / 1000).toFixed(1),
    }
  } finally {
    clearInterval(izleyici)
  }
}

// --- argümanlar ---
const argumanlar = process.argv.slice(2)

const saglayiciAdi = argumanlar.find((a) => a.startsWith('--saglayici='))?.split('=')[1] ?? 'nim'
const saglayici = saglayicilar[saglayiciAdi]
if (!saglayici) {
  console.error(`\nBilinmeyen saglayici: ${saglayiciAdi}`)
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

/**
 * `--liste` sonrası `process.exit(0)` vardı ve Windows'ta libuv çökmesine yol
 * açıyordu:
 *   Assertion failed: !(handle->flags & UV_HANDLE_CLOSING), src\win\async.c
 * Sebebi, HTTP bağlantısı henüz kapanmadan süreci zorla sonlandırmak. Çıktı
 * zaten basılmış oluyordu, yani zararsız görünüyor — ama hata mesajı gerçek
 * bir sorun sanılıyor. Artık zorla çıkılmıyor; liste basılıp akış doğal
 * olarak sonlanıyor.
 */
const listeModu = argumanlar.includes('--liste')
if (listeModu) {
  await modelleriListele(anahtar, saglayici)
}

const gorevAdi = (argumanlar.find((a) => a.startsWith('--gorev='))?.split('=')[1] ?? 'bolum').trim()
const tekrar = Number(argumanlar.find((a) => a.startsWith('--tekrar='))?.split('=')[1] ?? 1)
const modelArg = argumanlar.find((a) => !a.startsWith('--'))

const gorev = gorevler[gorevAdi]
if (!gorev && !listeModu) {
  console.error(`\nBilinmeyen gorev: ${gorevAdi}`)
  console.error(`Secenekler: ${Object.keys(gorevler).join(', ')}\n`)
  process.exit(1)
}

const denenecek = modelArg ? [modelArg] : modeller

// Görevde `degiskenler` varsa (ilçe testi gibi) her biri ayrı koşu olur;
// yoksa tek koşu, `--tekrar` kadar yinelenir.
// Kota tükendiğinde dört ilçeyi tek oturumda almak mümkün olmuyor.
// --degisken=Pamukkale ile teker teker alınabilir; kota penceresi açıldıkça
// bir tanesini çalıştırıp bırakmak, üçünü birden deneyip üçünü de kaybetmekten
// iyi. Tamamlananlar zaten atlanıyor.
const degiskenFiltre = argumanlar.find((a) => a.startsWith('--degisken='))?.split('=')[1]

const kosular = listeModu
  ? []
  : gorev.degiskenler
  ? gorev.degiskenler
      .filter((d) => !degiskenFiltre || d.toLowerCase() === degiskenFiltre.toLowerCase())
      .map((d) => ({ etiket: d, istem: gorev.istem(d) }))
  : Array.from({ length: tekrar }, (_, i) => ({
      etiket: tekrar > 1 ? `tekrar${i + 1}` : null,
      istem: gorev.istem(),
    }))

if (!kosular.length && !listeModu) {
  console.error(`\n"${degiskenFiltre}" bu gorevin degiskenleri arasinda yok.`)
  console.error(`Secenekler: ${(gorev.degiskenler ?? []).join(', ')}\n`)
  process.exit(1)
}

fs.mkdirSync(ciktiKlasoru, { recursive: true })
console.log(`\ngorev: ${gorev.ad}  (hedef ${gorev.hedef[0]}-${gorev.hedef[1]} kelime)`)
console.log(`${denenecek.length} model x ${kosular.length} kosu (nokta = gelen metin)\n`)

for (const model of denenecek) {
  for (const kosu of kosular) {
    const baslik = kosu.etiket ? `${model}  [${kosu.etiket}]` : model
    console.log(`  ${baslik}`)
    process.stdout.write('    ')

    const taban = [model.replace(/[/\\]/g, '_'), gorevAdi, kosu.etiket]
      .filter(Boolean)
      .join('__')

    // KALDIĞI YERDEN DEVAM: tamamlanmış koşu tekrar edilmez.
    // İlçe testinde dört koşudan biri geçip üçü kotaya takıldı; tekrar
    // denerken geçeni yeniden üretmek hem kotayı hem zamanı boşa harcar.
    // Baştan almak isterseniz o dosyayı silin.
    const hedefDosya = path.join(ciktiKlasoru, `${taban}.md`)
    if (fs.existsSync(hedefDosya)) {
      console.log(`\n    zaten var, atlandi (yeniden uretmek icin dosyayi silin)\n`)
      continue
    }

    let sonuc
    for (let deneme = 1; deneme <= DENEME_SAYISI; deneme++) {
      sonuc = await modeliCalistir(anahtar, model, kosu.istem, saglayici)
      if (sonuc.kod !== 503 && sonuc.kod !== 429) break
      // 429 kota, 503 kapasite. Kota daha uzun sürüyor: 15/30/45 saniye
      // ilçe testinde üç koşuyu birden kaybettirdi.
      const bekle = sonuc.kod === 429 ? [60, 150, 300][deneme - 1] : deneme * 15
      process.stdout.write(
        `\n    ${sonuc.kod === 429 ? 'kota' : 'uc dolu'} (${sonuc.kod}), ${bekle}s bekleniyor... `
      )
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
      fs.writeFileSync(path.join(ciktiKlasoru, `${taban}.DUSUNCE.txt`), sonuc.dusunce)
      continue
    }

    if (!sonuc.kelime) {
      console.log(`\n    BOS CEVAP (${sonuc.sure}s) — icerik de dusunce de gelmedi.\n`)
      continue
    }

    fs.writeFileSync(path.join(ciktiKlasoru, `${taban}.md`), sonuc.metin)
    const [alt, ust] = gorev.hedef
    const uyar = sonuc.kelime < alt ? ' ⚠ hedefin altinda' : sonuc.kelime > ust ? ' ⚠ hedefin ustunde' : ''
    console.log(`\n    ${sonuc.kelime} kelime, ${sonuc.sure}s ✓${uyar}\n`)
    await new Promise((r) => setTimeout(r, 1500))
  }
}

console.log(`Ciktilar: ${path.relative(process.cwd(), ciktiKlasoru)}/`)
console.log('Simdi: node arac/model-testi/denetle.mjs\n')
