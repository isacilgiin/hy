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
 *
 * GÖVDE MERDİVENİ (2026-08-13, ikinci tur): sağlayıcı bazı alanları
 * reddedebiliyor ve hangisini reddettiğini söylemiyor (`400 INVALID_ARGUMENT`).
 * 400 alınınca beklemek işe yaramaz — gövde değişmeli. Denenen gövdeler
 * `ortak.mjs` içinde, düşünmeyi bastırma önceliğine göre sıralı. Hangi gövdenin
 * işe yaradığı `<cikti>.KOSUL.json` dosyasına yazılıyor. Merdivenin tamamı
 * reddedilirse `teshis.mjs` hangi alanın suçlu olduğunu ölçer.
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { sistemIstemi, gorevler } from './gorev.js'
import { govdeKur, saglayiciyiSec } from './ortak.mjs'

const buradan = path.dirname(fileURLToPath(import.meta.url))
const ciktiKlasoru = path.join(buradan, 'ciktilar')

/**
 * Sağlayıcı tanımları ve istek gövdesi `ortak.mjs` içinde — teşhis aracı da
 * aynılarını kullanıyor. Bir yerde tanımlı olmaları şart: teşhis, gerçekte
 * gönderilenden farklı bir gövde test ederse hiçbir şey ölçmemiş olur.
 */

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
async function modeliCalistir(anahtar, model, istem, saglayici, secenek) {
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
      body: JSON.stringify(
        govdeKur({
          model,
          saglayici,
          secenek,
          mesajlar: [
            { role: 'system', content: sistemIstemi },
            { role: 'user', content: istem },
          ],
        })
      ),
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

const { saglayici, anahtar, saglayiciAdi } = saglayiciyiSec(argumanlar)

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

/**
 * GÖVDE MERDİVENİ + tekrar deneme.
 *
 * İki ayrı hata sınıfı var ve karıştırılmamalı:
 *  · 429/503 — istek DOĞRU, uç meşgul ya da kota dolu. Beklenip aynı gövdeyle
 *    tekrar denenir.
 *  · 400 — istek REDDEDİLDİ. Beklemek bir şey değiştirmez; gövde değişmeli.
 *
 * Çalışan gövde bulunduğunda `calisanSecenek`e yazılıyor ve sonraki koşular
 * doğrudan oradan başlıyor — dört ilçe için merdiveni dört kez tırmanmak
 * hem zaman hem kota harcar.
 */
let calisanSecenek = null

async function merdivenleCalistir(model, istem) {
  const hepsi = saglayici.govdeSecenekleri
  const merdiven = calisanSecenek
    ? [calisanSecenek, ...hepsi.filter((s) => s !== calisanSecenek)]
    : hepsi

  let sonSonuc
  for (const [sira, secenek] of merdiven.entries()) {
    let sonuc
    for (let deneme = 1; deneme <= DENEME_SAYISI; deneme++) {
      sonuc = await modeliCalistir(anahtar, model, istem, saglayici, secenek)
      if (sonuc.kod !== 503 && sonuc.kod !== 429) break
      // 429 kota, 503 kapasite. Kota daha uzun sürüyor: 15/30/45 saniye
      // ilçe testinde üç koşuyu birden kaybettirdi.
      const bekle = sonuc.kod === 429 ? [60, 150, 300][deneme - 1] : deneme * 15
      process.stdout.write(
        `\n    ${sonuc.kod === 429 ? 'kota' : 'uc dolu'} (${sonuc.kod}), ${bekle}s bekleniyor... `
      )
      await new Promise((r) => setTimeout(r, bekle * 1000))
    }

    sonSonuc = { ...sonuc, secenek }
    if (sonuc.kod !== 400) {
      if (!sonuc.hata) calisanSecenek = secenek
      return sonSonuc
    }
    if (sira < merdiven.length - 1) {
      process.stdout.write(`\n    400 reddedildi (${secenek.ad}) — sonraki govde deneniyor\n    `)
    }
  }
  return sonSonuc
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

    const sonuc = await merdivenleCalistir(model, kosu.istem)

    if (sonuc.hata) {
      console.log(`\n    HATA ${sonuc.kod ?? ''} (${sonuc.sure ?? '?'}s) — ${sonuc.hata}\n`)
      if (sonuc.kod === 400) {
        console.log(`    Merdivendeki govdelerin hepsi reddedildi. Hangi alan reddediliyor:`)
        console.log(`      node arac/model-testi/teshis.mjs ${model} --saglayici=${saglayiciAdi}\n`)
      }
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

    /**
     * KOŞUL DOSYASI. Hangi gövdeyle üretildiği metnin İÇİNE yazılmıyor —
     * denetçi kelime sayıyor, eklenen bir başlık o sayıyı bozar. Konsoldaki
     * uyarı da `denetle.mjs` çalıştığında çoktan kaybolmuş oluyor.
     * Karşılaştırdığımız sayıların hangi ayarla çıktığı burada duruyor.
     */
    fs.writeFileSync(
      path.join(ciktiKlasoru, `${taban}.KOSUL.json`),
      JSON.stringify(
        {
          model,
          saglayici: saglayiciAdi,
          gorev: gorevAdi,
          etiket: kosu.etiket ?? null,
          govde: sonuc.secenek.ad,
          maxTokens: sonuc.secenek.tavan,
          dusunmeDenetimi: Boolean(sonuc.secenek.dusunmeDenetimi),
          kelime: sonuc.kelime,
          sure: sonuc.sure,
        },
        null,
        2
      )
    )

    const [alt, ust] = gorev.hedef
    const uyar = sonuc.kelime < alt ? ' ⚠ hedefin altinda' : sonuc.kelime > ust ? ' ⚠ hedefin ustunde' : ''
    console.log(`\n    ${sonuc.kelime} kelime, ${sonuc.sure}s ✓${uyar}`)

    // Merdivenin ilk basamağı düşünmeyi bastırıyordu; ona inemediysek çıktı
    // kırpılmış olabilir ve sayı geçersizdir. Sessizce geçilmemeli.
    const ilk = saglayici.govdeSecenekleri[0]
    if (ilk.dusunmeDenetimi && !sonuc.secenek.dusunmeDenetimi) {
      console.log(`    ⚠ dusunme denetimsiz govde ile alindi (${sonuc.secenek.ad}) — kirpilma riski`)
    }
    console.log('')
    await new Promise((r) => setTimeout(r, 1500))
  }
}

console.log(`Ciktilar: ${path.relative(process.cwd(), ciktiKlasoru)}/`)
console.log('Simdi: node arac/model-testi/denetle.mjs\n')
