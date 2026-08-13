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
import { olgular, gorevler } from './gorev.js'

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

/**
 * İNGİLİZCE SIZINTI — yukarıdaki yazı sistemi taraması bunu YAKALAYAMAZ,
 * çünkü İngilizce de Latin alfabesi kullanıyor.
 *
 * Gemma 4 31B ilçe metinlerinin içine sistem istemimizin İngilizce çevirisini
 * yazdı: "1. Use ONLY provided facts. 2. No numbers/dates/percentages..."
 * Denetçi bunu "teknik olabilecek sayılar" kovasına atıp 0 puan verdi ve
 * çıktı sıralamada temiz göründü.
 *
 * Yoğunluk üzerinden bakılıyor, tek kelime üzerinden değil: Türkçe teknik
 * metinde "split", "VRF", "inverter" geçer ve bunlar hata değildir. Ama
 * "the / and / of / not" gibi işlev kelimeleri Türkçe bir metinde kümelenmez.
 */
const ingilizceIsaretler =
  /\b(the|and|of|for|with|that|this|these|are|not|you|your|use|only|provided|facts|numbers|claims|write|section|following|must|should|words|list)\b/gi

function ingilizceSizinti(metin) {
  const kelime = metin.trim().split(/\s+/).filter(Boolean).length
  if (kelime < 40) return null
  const adet = [...metin.matchAll(ingilizceIsaretler)].length
  const yogunluk = (100 * adet) / kelime
  // Yüzde 2 eşiği: Türkçe metinde birkaç İngilizce terim doğal, kümelenme değil.
  if (yogunluk < 2) return null
  const ilk = metin.match(ingilizceIsaretler) ? metin.search(ingilizceIsaretler) : 0
  return {
    adet,
    yogunluk,
    ornek: metin.slice(Math.max(0, ilk - 40), ilk + 60).replace(/\s+/g, ' '),
  }
}

/**
 * BOZULMA — model kelimeleri numaralandırmaya başlıyor.
 *
 * İki ayrı modelde görüldü:
 *   Gemini:  "klima 22: kullanımına 23: yönelik 24:"
 *   Gemma:   "(192) bakımı, (193) gaz (194) dolumu, (195) VRF"
 * Metin gibi görünüyor, kelime sayısı da yüksek çıkıyor — ama cümle değil.
 * Artan sayı dizisi aranıyor; normal metinde böyle bir şey olmaz.
 */
function bozulma(metin) {
  const sayilar = [...metin.matchAll(/\((\d{1,4})\)|(?:^|\s)(\d{1,4}):/g)].map((m) =>
    Number(m[1] ?? m[2])
  )
  if (sayilar.length < 15) return null
  let artan = 0
  for (let i = 1; i < sayilar.length; i++) if (sayilar[i] === sayilar[i - 1] + 1) artan++
  if (artan < 10) return null
  return { adet: sayilar.length, artan }
}

function dilKirliligi(metin) {
  const bulgular = []
  for (const { ad, re } of yabanciYaziSistemleri) {
    const eslesmeler = [...metin.matchAll(re)]
    if (!eslesmeler.length) continue
    const ilk = eslesmeler[0].index
    const baglam = metin.slice(Math.max(0, ilk - 30), ilk + 30).replace(/\s+/g, ' ')
    bulgular.push({ ad, adet: eslesmeler.length, ornek: baglam })
  }
  const ing = ingilizceSizinti(metin)
  if (ing) {
    bulgular.push({
      ad: `Ingilizce (yogunluk %${ing.yogunluk.toFixed(1)})`,
      adet: ing.adet,
      ornek: ing.ornek,
    })
  }
  return bulgular
}

/**
 * TÜRKÇE YAZIM HATALARI — dil kirliliğinden farklı, daha sinsi.
 *
 * glm-5.2 temiz görünen metinlerde şunları yazdı:
 *   "süpriz maliyetlerle"      → sürpriz
 *   "Kesif ücretsizdir"        → Keşif   (ş kaybolmuş)
 *   "Merkezefendi'nde"         → Merkezefendi'de   (yanlış ek)
 *
 * Hiçbiri uydurma değil, hiçbiri yabancı karakter değil — denetçi üçünü de
 * 0 puanla geçirdi. Ama müşterinin sayfasında duran yazım hatasıdır.
 *
 * Liste dar tutuluyor: yalnızca KESİN hatalar. "Şüpheli olabilir" diye
 * eklenen her kalıp yanlış alarm üretir ve denetçiye güveni azaltır.
 */
const yazimHatalari = [
  [/\bsüpriz/gi, 'sürpriz'],
  [/\byalnış/gi, 'yanlış'],
  [/\byanlız/gi, 'yalnız'],
  [/\bherkez\b/gi, 'herkes'],
  [/\bhiç bir\b/gi, 'hiçbir'],
  [/\bbir kaç\b/gi, 'birkaç'],
  [/\bher hangi\b/gi, 'herhangi'],
  // "kesif" aslında Türkçe bir kelime (yoğun, sık) ama hizmet firması
  // metninde geçtiğinde neredeyse her zaman "keşif"in ş'siz yazılmışıdır.
  // Yanlış alarm ihtimali var, kabul ediyoruz — kaçırmak daha kötü.
  [/\bkesif\b/gi, 'keşif'],
  [/\bgorus/gi, 'görüş'],
  // Özel isim + ek: "Merkezefendi'nde" gibi araya giren yanlış kaynaştırma.
  // Ünlüyle biten isimlerde bulunma eki "'de/'da" olur, "'nde/'nda" değil.
  [/[A-ZÇĞİÖŞÜ][a-zçğıöşü]+[aeıioöuü]'n(de|da|den|dan)\b/g, "'de / 'da (araya n girmemeli)"],
]

function yazimDenetimi(metin) {
  const bulgular = []
  for (const [re, dogrusu] of yazimHatalari) {
    const eslesmeler = [...metin.matchAll(re)]
    if (eslesmeler.length) {
      bulgular.push({ yanlis: [...new Set(eslesmeler.map((e) => e[0]))].join(', '), dogrusu })
    }
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
  const yazim = yazimDenetimi(metin)
  const bozuk = bozulma(metin)
  // Dil kirliliği ağır basıyor: uydurma bir sayı düzeltilebilir, ama içine
  // Korece karışmış bir metin baştan yazılmalı. Yazım hatası en hafifi —
  // düzeltmesi kolay ama düzeltilmeden yayına gitmemeli.
  // Bozulmuş çıktı en ağırı: metin gibi görünüyor ama cümle değil, yani o
  // koşudan kullanılabilir hiçbir şey çıkmıyor.
  const skor =
    b.yuksekRisk.length * 3 +
    b.belge.length * 3 +
    b.ustunluk.length +
    kirlilik.length * 5 +
    yazim.length +
    (bozuk ? 10 : 0)

  console.log(`\n${dosya.replace('.md', '')}`)
  console.log(`  ${kelime} kelime  |  ihlal skoru: ${skor}`)

  if (bozuk) {
    console.log(
      `  BOZUK CIKTI — model kelimeleri numaralandirmis ` +
        `(${bozuk.adet} sayi, ${bozuk.artan} tanesi ardisik). Bu metin cumle degil.`
    )
  }
  if (kirlilik.length) {
    console.log(`  DIL KIRLILIGI — metin Turkce degil, yabanci dil/yazi sistemi karismis:`)
    kirlilik.forEach((k) => console.log(`     ✗ ${k.ad}: ${k.adet} karakter — …${k.ornek}…`))
  }
  if (yazim.length) {
    console.log(`  YAZIM HATASI (${yazim.length}):`)
    yazim.forEach((y) => console.log(`     ✗ "${y.yanlis}" → ${y.dogrusu}`))
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
/**
 * KOPYA İÇERİK ÖLÇÜMÜ — `--gorev=ilce` çıktıları için.
 *
 * Aynı modelin farklı ilçeler için yazdığı metinler birbirine ne kadar
 * benziyor? Bu, ilçe sayfası üretilip üretilemeyeceğini belirleyen tek soru.
 *
 * Ölçüm 5 kelimelik pencerelerle (shingle) yapılıyor; cümle sırası değişse de
 * yakalıyor. Referans: 20karot.com.tr'nin elle yazılmış 20 ilçe sayfası
 * ortalama %32 benziyor ve Google'da sorun yaşamıyor. Yakın kopya eşiği
 * genelde %70-80 kabul edilir.
 */
const shingle = (metin, n = 5) => {
  const kelimeler = metin.toLowerCase().replace(/[^\wçğıöşüâî\s]/g, ' ').split(/\s+/).filter(Boolean)
  const kume = new Set()
  for (let i = 0; i + n <= kelimeler.length; i++) kume.add(kelimeler.slice(i, i + n).join(' '))
  return kume
}

const ilceDosyalari = dosyalar.filter((d) => d.includes('__ilce__'))
if (ilceDosyalari.length > 1) {
  // Model bazında grupla — farklı modellerin metinleri karşılaştırılmaz.
  const gruplar = {}
  for (const d of ilceDosyalari) {
    const model = d.split('__')[0]
    ;(gruplar[model] ??= []).push(d)
  }

  console.log('\n' + '='.repeat(70))
  console.log('KOPYA ICERIK — ilce sayfalari birbirine ne kadar benziyor')
  console.log('='.repeat(70))

  for (const [model, grup] of Object.entries(gruplar)) {
    // Tek çıktıyla benzerlik ölçülmez. Sessizce atlanırsa o model sorunsuz
    // sanılır — glm-5.2 kota yüzünden dört ilçeden birini alabilmişti ve
    // listede hiç görünmemesi "geçti" diye okunuyordu. Ölçülmedi, geçmedi.
    if (grup.length < 2) {
      console.log(`\n${model}  —  yalnizca ${grup.length} ilce cikti var`)
      console.log('  OLCULEMEDI: benzerlik icin en az 2 metin gerekiyor.')
      continue
    }
    const kumeler = grup.map((d) => ({
      ad: d.replace(`${model}__ilce__`, '').replace('.md', ''),
      k: shingle(fs.readFileSync(path.join(ciktiKlasoru, d), 'utf8')),
    }))

    /**
     * KIRPILMIŞ ÇIKTIYLA BENZERLİK ÖLÇÜLMEZ.
     *
     * Gemini'nin ilk koşusunda ilçe metinleri 69 / 120 / 201 kelime geldi
     * (hedef 250-350) çünkü düşünme tokenları bütçeyi yemişti. Bu parçalar
     * karşılaştırılınca %3 benzerlik çıktı ve araç "SAĞLIKLI" dedi — oysa
     * ölçülen şey içerik değil, birbirinden bağımsız şekilde kesilmiş
     * kırıntılardı. Yarım metinler doğal olarak birbirine benzemez.
     *
     * AYNISI TERS YÖNDE DE GEÇERLİ — ilk sürümde bu unutulmuştu.
     *
     * Gemma 4 31B, 250-350 kelime istenen göreve 1072 / 1221 / 1281 / 2226
     * kelime yazdı; içine sistem istemini İngilizce çevirip koydu ve Sarayköy
     * çıktısında kelimeleri numaralandırmaya başladı ("(192) bakımı, (193)
     * gaz"). Araç bu yığına bakıp "%21, SAGLIKLI" dedi. Ölçtüğü şey ilçe
     * sayfası değildi — o görevin cevabı ortada yoktu.
     *
     * Kısa metin de uzun metin de aynı sebeple geçersiz: karşılaştırılan
     * şeyler istenen işin örneği değil. Hedefin yarısının altı ya da 1,5
     * katının üstü varsa hüküm bastırılıyor.
     */
    const [hedefAlt, hedefUst] = gorevler.ilce?.hedef ?? [250, 350]
    const kelimeSayilari = grup.map((d) => ({
      ad: d.replace(`${model}__ilce__`, '').replace('.md', ''),
      kelime: fs
        .readFileSync(path.join(ciktiKlasoru, d), 'utf8')
        .trim()
        .split(/\s+/)
        .filter(Boolean).length,
    }))
    const kisaOlanlar = kelimeSayilari.filter((x) => x.kelime < hedefAlt / 2)
    const uzunOlanlar = kelimeSayilari.filter((x) => x.kelime > hedefUst * 1.5)

    const skorlar = []
    for (let a = 0; a < kumeler.length; a++) {
      for (let b = a + 1; b < kumeler.length; b++) {
        const kesisim = [...kumeler[a].k].filter((x) => kumeler[b].k.has(x)).length
        const oran = (100 * kesisim) / Math.min(kumeler[a].k.size, kumeler[b].k.size) || 0
        skorlar.push([oran, kumeler[a].ad, kumeler[b].ad])
      }
    }
    skorlar.sort((x, y) => y[0] - x[0])
    const ort = skorlar.reduce((s, x) => s + x[0], 0) / skorlar.length

    const enYuksek = skorlar[0][0]

    console.log(`\n${model}  —  ${grup.length} ilce, ${skorlar.length} cift`)
    console.log(`  ortalama benzerlik: %${ort.toFixed(0)}`)
    console.log(`  en yuksek        : %${enYuksek.toFixed(0)}  (${skorlar[0][1]} ↔ ${skorlar[0][2]})`)

    // Hüküm ORTALAMAYA DEĞİL, en kötü çifte de bakmalı. Kendi testimde
    // ortalama %31 çıkıp "saglikli" dedi ama iki sayfa %93 aynıydı; üçüncü
    // farklı sayfa ortalamayı aşağı çekmişti. Google tek tek sayfalara bakar,
    // ortalamaya değil — bir çift bile yakın kopyaysa o iki sayfa sorunludur.
    const esikAsan = skorlar.filter(([o]) => o > 70)
    let hukum
    if (kisaOlanlar.length) {
      hukum =
        `OLCULEMEDI — ${kisaOlanlar.length} cikti hedefin yarisindan kisa ` +
        `(${kisaOlanlar.map((x) => `${x.ad}:${x.kelime}`).join(', ')}). ` +
        `Yarim metinler dogal olarak benzemez; once uretim duzeltilmeli.`
    } else if (uzunOlanlar.length) {
      hukum =
        `OLCULEMEDI — ${uzunOlanlar.length} cikti hedefin 1,5 katindan uzun ` +
        `(${uzunOlanlar.map((x) => `${x.ad}:${x.kelime}`).join(', ')}), hedef ${hedefAlt}-${hedefUst}. ` +
        `Model istenen isi yapmamis; benzerlik sayisi baska bir seyi olcer.`
    } else if (enYuksek > 70) {
      hukum = `KULLANILAMAZ — ${esikAsan.length} cift %70 uzerinde, doorway page riski`
    } else if (ort > 50 || enYuksek > 55) {
      hukum = 'SINIRDA — istem cesitlendirilmeli'
    } else {
      hukum = 'SAGLIKLI'
    }
    console.log(`  hukum            : ${hukum}`)
    console.log(`  referans         : 20karot elle yazilmis 20 ilce sayfasi = ortalama %32, en yuksek %33`)

    if (esikAsan.length) {
      console.log('  esigi asan ciftler:')
      esikAsan.slice(0, 5).forEach(([o, a, b]) => console.log(`     ✗ %${o.toFixed(0)}  ${a} ↔ ${b}`))
    }
  }
}

console.log(`
Skor makinenin olcebildigi kismi. Geri kalanini gozle bakacagiz:
  1. Turkce dogal mi, ceviri kokuyor mu?
  2. Somut bilgi mi, genel gecer laf mi?
  3. Istenen konularin hepsini islemis mi?
`)
