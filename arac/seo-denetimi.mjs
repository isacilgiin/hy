/**
 * SEO çıktı denetimi — sitemap, canonical, robots, llms.txt, OG ve JSON-LD.
 *
 * Build ÇIKTISINI denetler, kaynağı değil: bu dosyaların hepsi build sırasında
 * üretiliyor ve kaynakta doğru görünen bir şey çıktıda bozuk olabilir.
 *
 * KULLANIM:
 *   npm run seo                       # en son yayın klasörünü denetler
 *   node arac/seo-denetimi.mjs <yol>  # belirli bir klasörü
 * Sorun bulunursa çıkış kodu 1 — CI'a bağlanabilir.
 *
 * DENETLENENLER
 *   sitemap    <loc> sayısı = üretilen sayfa · mutlak URL · sondaki eğik çizgi
 *              W3C lastmod · XML kaçışları · sitemap'te olmayan sayfa
 *   canonical  her sayfanın canonical'ı sitemap'teki karşılığıyla BİREBİR mi
 *   robots     Sitemap satırı · sitenin kapalı olmaması · /assets'in AÇIK olması
 *              (kapalıysa Googlebot SPA'yı render edemez, 90 sayfa aynı görünür)
 *   llms.txt   marka başlığı · her linkin gerçek sayfaya gitmesi · sektör metni
 *              .well-known kopyasının ayrışmamış olması
 *   OG         zorunlu alanlar · mutlak URL · dosyanın diskte olması · 1200×630
 *              her sayfada FARKLI og:title (paylaşım önizlemesi sayfaya özel mi)
 *   JSON-LD    her bloğun geçerli JSON olması · şema tipleri · marka ve telefon
 *              kaynaksız aggregateRating olmaması · LocalBusiness şişkinliği
 *   meta       build HTML'indeki <title>/description ile bileşenlerin <Seo>
 *              değerleri aynı mı · 404 metni vite.config.js ile ayrışmış mı
 *              metin ikinci kez elle yazılmış mı · her meta anahtarı tam
 *              olarak bir sayfaya mı bağlı (hepsi metaMetinleri.js üzerinden)
 */
import fs from 'fs'
import path from 'path'
const K = process.argv[2] ?? (() => {
  const d = fs.readdirSync('yayin').filter((x) => fs.statSync(path.join('yayin', x)).isDirectory())
  if (!d.length) { console.error('yayin/ boş — önce npm run build'); process.exit(1) }
  const sonuncu = d.sort((a, b) => Number(a.match(/-v(\d+)$/)?.[1] ?? 0) - Number(b.match(/-v(\d+)$/)?.[1] ?? 0)).pop()
  return path.join('yayin', sonuncu)
})()
console.log('denetlenen: ' + K + '\n')
const oku = (p) => fs.readFileSync(path.join(K, p), 'utf8')
const bul = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) =>
  e.isDirectory() ? bul(path.join(d, e.name)) : (e.name === 'index.html' ? [path.join(d, e.name)] : []))

let hata = 0
const OK = (m) => console.log('  ✓ ' + m)
const NO = (m) => { console.log('  ✗ ' + m); hata++ }

console.log('=== SITEMAP ===')
const sm = oku('sitemap.xml')
const loc = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1])
const rotalar = bul(K).map((f) => '/' + path.relative(K, f).replace(/index\.html$/, '').replace(/\\/g, '/'))
const rotaSet = new Set(rotalar.map((r) => (r === '/' ? '/' : r)))
loc.length === rotalar.filter((r) => !r.includes('404')).length
  ? OK(`${loc.length} <loc> = ${rotalar.length} üretilen sayfa`)
  : NO(`${loc.length} <loc> ama ${rotalar.length} sayfa üretildi`)
loc.every((u) => u.startsWith('https://denizlihaliyikama.net.tr/')) ? OK('tüm loc mutlak ve doğru alan adında') : NO('yanlış alan adı var')
loc.every((u) => u.endsWith('/')) ? OK('tüm loc sondaki eğik çizgiyle') : NO('eğik çizgisiz loc var')
const eksikSm = [...rotaSet].filter((r) => !loc.includes('https://denizlihaliyikama.net.tr' + r) && !r.includes('404'))
eksikSm.length ? NO('sitemap\'te olmayan sayfa: ' + eksikSm.slice(0, 3).join(', ')) : OK('üretilen her sayfa sitemap\'te')
;(/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/.test(sm) ? OK('lastmod W3C biçiminde') : NO('lastmod biçimi bozuk'))
sm.includes('&') && !/&(amp|lt|gt|quot|apos);/.test(sm.replace(/&amp;/g, '')) ? NO('kaçışsız & var') : OK('XML kaçışları temiz')

console.log('\n=== CANONICAL = SITEMAP ===')
let uyum = 0, sapma = []
for (const f of bul(K)) {
  const h = fs.readFileSync(f, 'utf8')
  const c = h.match(/rel="canonical" href="([^"]+)"/)?.[1]
  const yol = '/' + path.relative(K, f).replace(/index\.html$/, '')
  if (f.includes('404')) continue
  if (!c) { sapma.push(yol + ' (canonical YOK)'); continue }
  if (c === 'https://denizlihaliyikama.net.tr' + yol) uyum++
  else sapma.push(`${yol} -> ${c}`)
}
sapma.length ? NO(`${sapma.length} sapma: ` + sapma.slice(0, 3).join(' | ')) : OK(`${uyum}/${uyum} canonical sitemap ile birebir`)

console.log('\n=== ROBOTS ===')
const rb = oku('robots.txt')
rb.includes('Sitemap: https://denizlihaliyikama.net.tr/sitemap.xml') ? OK('Sitemap satırı doğru') : NO('Sitemap satırı yanlış')
;(/Disallow:\s*\/\s*$/m.test(rb) ? NO('TÜM SİTE kapalı!') : OK('site taramaya açık'))
rb.includes('Disallow: /assets') ? NO('/assets kapalı — Googlebot sayfayı render edemez') : OK('/assets açık')

console.log('\n=== LLMS.TXT ===')
const lt = oku('llms.txt')
lt.startsWith('# Denizli Tomay Halı Yıkama') ? OK('başlık doğru marka') : NO('başlık yanlış: ' + lt.split('\n')[0])
const lin = [...lt.matchAll(/\]\((https:\/\/denizlihaliyikama\.net\.tr[^)]*)\)/g)].map((m) => m[1])
const kirik = lin.filter((u) => {
  const y = u.replace('https://denizlihaliyikama.net.tr', '')
  return y !== '/' && !fs.existsSync(path.join(K, y, 'index.html')) && !fs.existsSync(path.join(K, y.replace(/^\//, '')))
})
kirik.length ? NO(`${kirik.length} kırık link: ` + kirik.slice(0, 3).join(', ')) : OK(`${lin.length} linkin hepsi gerçek sayfaya gidiyor`)
;(/karot|beton delme/i.test(lt) ? NO('karot metni var') : OK('sektör metni doğru'))
OK(`boyut ${(lt.length / 1024).toFixed(1)} KB`)
const ltw = oku('.well-known/llms.txt')
ltw === lt ? OK('.well-known kopyası birebir aynı') : NO('.well-known kopyası ayrışmış')

console.log('\n=== LLMS-FULL.TXT ===')
const lf = oku('llms-full.txt')
;(/karot|beton kesme/i.test(lf) ? NO('karot metni var') : OK('sektör metni doğru'))
OK(`boyut ${(lf.length / 1024).toFixed(0)} KB`)
oku('.well-known/llms-full.txt') === lf ? OK('.well-known kopyası birebir') : NO('.well-known ayrışmış')

console.log('\n=== OG / TWITTER ===')
const ana = oku('index.html')
const og = Object.fromEntries([...ana.matchAll(/<meta property="og:([^"]+)" content="([^"]*)"/g)].map((m) => [m[1], m[2]]))
og.title && og.description && og.url && og.image ? OK('og:title/description/url/image dolu') : NO('eksik og alanı')
og.image?.startsWith('https://') ? OK('og:image mutlak URL') : NO('og:image göreli — sosyal medya çözemez')
const ogYol = og.image?.replace('https://denizlihaliyikama.net.tr', '')
ogYol && fs.existsSync(path.join(K, ogYol)) ? OK('og:image dosyası diskte var') : NO('og:image DOSYASI YOK: ' + ogYol)
/*
 * ÖLÇÜ DOSYADAN OKUNUYOR, bildirilen değerden DEĞİL.
 *
 * Burada eskiden `og['image:width'] === '1200'` yazıyordu: yani şablonun
 * kendi yazdığı sabiti kendisiyle karşılaştırıyordu ve dosyayı hiç açmıyordu.
 * Sonuç: og-image.jpg gerçekte 1376×768 iken araç yıllarca "1200×630 ✓" dedi.
 * Bir denetim, denetlediği şeyin KAYNAĞINA bakmıyorsa denetim değildir.
 */
const ogDosya = path.join(K, ogYol)
const gercek = (() => {
  if (!fs.existsSync(ogDosya)) return null
  const b = fs.readFileSync(ogDosya)
  if (b[0] === 0xff && b[1] === 0xd8) {
    let i = 2
    while (i < b.length - 9) {
      if (b[i] !== 0xff) { i++; continue }
      const m = b[i + 1]
      if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc) return [b.readUInt16BE(i + 7), b.readUInt16BE(i + 5)]
      i += 2 + b.readUInt16BE(i + 2)
    }
  }
  return null
})()
if (!gercek) NO('og:image ölçüsü okunamadı: ' + ogYol)
else if (String(gercek[0]) === og['image:width'] && String(gercek[1]) === og['image:height'])
  OK(`og:image ölçüsü bildirimle aynı (${gercek[0]}×${gercek[1]})`)
else NO(`og:image gerçekte ${gercek[0]}×${gercek[1]} ama ${og['image:width']}×${og['image:height']} bildiriliyor`)
ana.includes('name="twitter:card" content="summary_large_image"') ? OK('twitter:card doğru') : NO('twitter:card eksik')
// og:title her sayfada FARKLI mi
const ogT = new Set(bul(K).map((f) => fs.readFileSync(f, 'utf8').match(/og:title" content="([^"]*)"/)?.[1]))
ogT.size > 80 ? OK(`${ogT.size} benzersiz og:title (sayfa başına ayrı)`) : NO(`yalnızca ${ogT.size} benzersiz og:title`)

console.log('\n=== JSON-LD ===')
let ldHata = 0, ldSayi = 0, tipler = new Set()
for (const f of bul(K)) {
  for (const m of fs.readFileSync(f, 'utf8').matchAll(/<script[^>]*ld\+json[^>]*>([\s\S]*?)<\/script>/g)) {
    ldSayi++
    try {
      const j = JSON.parse(m[1])
      for (const o of Array.isArray(j) ? j : [j]) tipler.add(o['@type'])
    } catch { ldHata++; if (ldHata < 3) console.log('    bozuk JSON-LD:', path.relative(K, f)) }
  }
}
ldHata ? NO(`${ldHata}/${ldSayi} JSON-LD bloğu bozuk`) : OK(`${ldSayi} JSON-LD bloğunun hepsi geçerli`)
OK('şema tipleri: ' + [...tipler].sort().join(', '))
const lb = JSON.parse(ana.match(/<script[^>]*ld\+json[^>]*>([\s\S]*?)<\/script>/)[1])
lb.name === 'Denizli Tomay Halı Yıkama' ? OK('LocalBusiness adı doğru') : NO('LocalBusiness adı: ' + lb.name)
lb.telephone === '+905373726704' ? OK('telefon doğru') : NO('telefon: ' + lb.telephone)
lb.aggregateRating ? NO('aggregateRating var — kaynaksız puan yayınlanıyor') : OK('aggregateRating yok (doğru: puan kaynağı yok)')
JSON.stringify(lb).length < 4000 ? OK(`LocalBusiness ${JSON.stringify(lb).length} bayt (şişkin değil)`) : NO('LocalBusiness şişkin')

console.log('\n=== HERO ÖN BOYAMA = REACT HERO ===')
/*
 * Sayfa yenilemede görülen sıçramanın kaynağı buydu ve İKİ DOSYADA aynı
 * değerlerin elle tutulmasına dayanıyor:
 *   vite.config.js > heroOnizleme   (build'in ürettiği statik HTML)
 *   src/components/HeroSection.jsx  (React devraldığında çizilen)
 * Biri değişip diğeri kalırsa React devraldığı anda ekran kararıyor/açılıyor.
 * O ana kadar bunu yalnızca iki dosyadaki "birini değiştirirsen ötekini de
 * değiştir" yorumu koruyordu; bu denetim onu ölçülebilir hale getiriyor.
 *
 * Karşılaştırma yayına giden HTML üzerinden yapılıyor, kaynak üzerinden değil:
 * asıl önemli olan tarayıcıya ne gittiği.
 */
const onBoyama = ana.match(/<!--ho-->([\s\S]*?)<!--\/ho-->/)?.[1] ?? ''
if (!onBoyama) {
  NO('ana sayfada hero ön boyaması yok (<!--ho--> bulunamadı)')
} else {
  // 1) Örtü değerleri — ön boyamadaki rgba'lar Tailwind'in ürettiğiyle eşleşmeli
  const onRgba = [...onBoyama.matchAll(/rgba\((\d+),(\d+),(\d+),([\d.]+)\)/g)]
    .map((m) => `${m[1]},${m[2]},${m[3]} @${Number(m[4])}`)
  const kaynak = fs.readFileSync('src/components/HeroSection.jsx', 'utf8')
  const KOYU = '10,24,50'
  const LACI = '16,56,140'
  // Tailwind sınıflarını rgba karşılığına çevir: from-dark/95 -> 10,24,50 @0.95
  const tw = [...kaynak.matchAll(/(?:from|via|to)-dark(?:\/(\d+))?\b/g)]
    .map((m) => `${KOYU} @${m[1] ? Number(m[1]) / 100 : 1}`)
  const satirIci = [...kaynak.matchAll(/rgba\(16,56,140,([\d.]+)\)/g)].map((m) => `${LACI} @${Number(m[1])}`)
  const reactDegerler = new Set([...tw, ...satirIci])
  const eksikOrtu = onRgba.filter((v) => !reactDegerler.has(v))
  const fazlaOrtu = [...reactDegerler].filter((v) => !onRgba.includes(v))
  eksikOrtu.length || fazlaOrtu.length
    ? NO(`örtü değerleri ayrışmış — yalnız ön boyamada: [${eksikOrtu}]  yalnız React'te: [${fazlaOrtu}]`)
    : OK(`${onRgba.length} örtü değerinin hepsi iki tarafta aynı`)

  // 2) Kutu yüksekliği — ikisi de 100svh olmalı (100vh yedeğiyle birlikte)
  const onSvh = /min-height:100vh;min-height:100svh/.test(onBoyama)
  const css = fs.readFileSync('src/index.css', 'utf8')
  const reactSvh = /\.hero-foto\s*\{[^}]*height:\s*100vh;[^}]*height:\s*100svh/s.test(css)
  onSvh && reactSvh
    ? OK('fotoğraf kutusu iki tarafta da 100svh (100vh yedekli)')
    : NO(`kutu yüksekliği ayrışmış — ön boyama ${onSvh ? '✓' : '✗'}, .hero-foto ${reactSvh ? '✓' : '✗'}`)

  // 3) .hero-foto yüksekliği İÇERİĞE bağlanmamalı: React'te inset-0 olursa
  //    kutu slaytın boyu kadar uzuyor ve object-fit:cover başka kırpma veriyor.
  // NOT: bu dosya noktalı virgül kullanmıyor; satıra regex ile BAŞLAMAYIN,
  // ASI araya noktalı virgül koymuyor ve önceki satırla bölme işlemi sanılıyor.
  const fotoKatmani = /className="hero-foto"/.test(kaynak)
  const icerigeBagli = /className="hero-foto[^"]*inset-0/.test(kaynak)
  fotoKatmani && !icerigeBagli
    ? OK('fotoğraf katmanı içerik yüksekliğine bağlı değil')
    : NO('.hero-foto kullanılmıyor ya da inset-0 ile içeriğe bağlanmış')

  // 4) Ön boyamadaki görsel gerçekten ilk slaytın görseli mi
  const onSrc = onBoyama.match(/<img[^>]*\ssrc="([^"]+)"/)?.[1]
  const ilkSlayt = fs.readFileSync('src/data/heroSlides.js', 'utf8').match(/image:\s*'([^']+)'/)?.[1]
  onSrc === ilkSlayt ? OK(`ön boyama görseli ilk slaytla aynı (${onSrc})`) : NO(`ön boyama ${onSrc} ama ilk slayt ${ilkSlayt}`)
}

console.log('\n=== BUILD META = REACT META ===')
/*
 * Aynı sayfanın başlığı ve açıklaması İKİ AYRI ÜRETİCİDEN geçiyor:
 *   src/data/routeMeta.js   -> build'in ham HTML'e yazdığı. JavaScript
 *                              çalıştırmayan kazıyıcılar (WhatsApp, Facebook,
 *                              Twitter link önizlemesi) YALNIZCA bunu görür.
 *   src/pages/*.jsx <Seo>   -> React yüklenince document.title'ı ve meta
 *                              etiketlerini EZEN. Googlebot sayfayı render
 *                              ettiği için indekslediği başlık BUDUR.
 *
 * Ayrıştıklarında sayfa "ne dediğini" okuyucuya göre değiştiriyor: önizlemede
 * bir başlık, arama sonucunda başka bir başlık. Google bu tutarsızlığı görünce
 * kendi başlık yeniden yazma mantığını devreye sokuyor ve yazdığımız başlığın
 * hiçbiri kullanılmıyor. Bu, HERO bölümüyle AYNI SINIFTAN bir hata — aynı
 * değerin iki dosyada elle tutulması — ve tek çaresi ölçmek.
 *
 * Gerçekten oldu: 11 blog yazısının başlığı hidrasyondan sonra "undefined"
 * oluyordu, /hizmet-bolgeleri/ iki farklı marka adı söylüyordu, /blog/ iki
 * farklı cümle kuruyordu.
 *
 * İki taraf artık src/data/metaMetinleri.js'ten besleniyor. Burası o modülü
 * Node tarafında çalıştırıp YAYINA GİDEN HTML ile karşılaştırıyor — kaynağı
 * kaynakla değil, tek kaynağı ÇIKTIYLA sınıyor.
 */
const meta = (await import('../src/data/metaMetinleri.js')).default
const bolgelerModul = await import('../src/data/bolgelerIndex.js')
const faqModul = await import('../src/data/faq.js')
const legalModul = await import('../src/data/legal.js')
const hizmetler = (await import('../src/data/services.js')).default

// Seo.jsx ve routeMeta.js'in İKİSİ de açıklamayı 155'te kesiyor; karşılaştırma
// kesilmiş hâl üzerinden yapılmalı, yoksa uzun açıklamalar yanlış alarm verir.
const metaKisalt = (m, sinir = 155) => {
  if (!m || m.length <= sinir) return m
  const kesik = m.slice(0, sinir)
  const bosluk = kesik.lastIndexOf(' ')
  return `${kesik.slice(0, bosluk > 0 ? bosluk : sinir).replace(/[.,;:\s]+$/, '')}…`
}
// Build HTML'e kaçışlı yazıyor ("Öncesi &amp; Sonrası"); modül ham metin tutuyor.
const metaCoz = (t) => String(t ?? '').replace(/&amp;/g, '&').replace(/&#39;/g, "'")
  .replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>')

const ilkHizmet = hizmetler[0]
const ilkBolge = bolgelerModul.default[0]
const yasalSayfa = legalModul.gizlilik

/*
 * Parametreli aileler (90 sayfanın çoğu) TEK TEMSİLCİYLE sınanıyor: hepsi aynı
 * kalıptan üretiliyor, kalıp doğruysa hepsi doğru. HERO bölümü de aynı yaklaşım.
 */
const metaRotalari = [
  ['/hizmetler/', meta.hizmetler.baslik, meta.hizmetler.aciklama],
  ['/hizmet-bolgeleri/', meta.hizmetBolgeleri.baslik, meta.hizmetBolgeleri.aciklama(bolgelerModul.ilceler.length)],
  ['/projeler/', meta.projeler.baslik, meta.projeler.aciklama],
  ['/hakkimizda/', meta.hakkimizda.baslik, meta.hakkimizda.aciklama],
  ['/iletisim/', meta.iletisim.baslik, meta.iletisim.aciklama],
  ['/sikca-sorulan-sorular/', meta.sss.baslik, meta.sss.aciklama(faqModul.faq.length)],
  [`/${yasalSayfa.slug}/`, meta.yasal.baslik(yasalSayfa.baslik), yasalSayfa.ozet],
  ['/blog/', meta.blog.baslik, meta.blog.aciklama],
  [`/hizmetler/${ilkHizmet.slug}/`,
    meta.hizmetDetay.baslik(ilkHizmet.seoTitle, ilkHizmet.title),
    meta.hizmetDetay.aciklama(ilkHizmet.title, ilkHizmet.shortDescription)],
  [`/hizmet-bolgeleri/${ilkBolge.slug}/`,
    meta.bolgeDetay.baslik(ilkBolge.name), meta.bolgeDetay.aciklama(ilkBolge)],
]

let metaUyum = 0
const metaSapma = []
for (const [rota, bekBaslik, bekAciklama] of metaRotalari) {
  const dosya = path.join(K, rota, 'index.html')
  if (!fs.existsSync(dosya)) { metaSapma.push(`${rota} (sayfa üretilmemiş)`); continue }
  const h = fs.readFileSync(dosya, 'utf8')
  const gercekBaslik = metaCoz(h.match(/<title>([\s\S]*?)<\/title>/)?.[1])
  const gercekAciklama = metaCoz(h.match(/<meta name="description" content="([^"]*)"/)?.[1])
  if (gercekBaslik !== bekBaslik) metaSapma.push(`${rota} başlık — HTML: "${gercekBaslik}" · React: "${bekBaslik}"`)
  else if (gercekAciklama !== metaKisalt(bekAciklama)) metaSapma.push(`${rota} açıklama — HTML: "${gercekAciklama}" · React: "${metaKisalt(bekAciklama)}"`)
  else metaUyum++
}
if (metaSapma.length) {
  NO(`${metaSapma.length} rotada build HTML'i ile React metası ayrışmış`)
  for (const x of metaSapma.slice(0, 4)) console.log('      ' + x)
} else OK(`${metaUyum}/${metaRotalari.length} rotada build HTML'i React metasıyla birebir`)

/*
 * 404 AYRI SINANIYOR: 404.html'i routeMeta.js üretmiyor, vite.config.js ana
 * sayfanın HTML'ini alıp başlığını string replace ile değiştiriyor ve o metin
 * ORADA SABİT yazılı. metaMetinleri.js oradaki değerin AYNASI; ikisi ayrışırsa
 * NotFound.jsx hidrasyonda build'in yazdığı başlığı yanlış bir şeyle ezer.
 */
const html404 = oku('404.html')
const baslik404 = metaCoz(html404.match(/<title>([\s\S]*?)<\/title>/)?.[1])
const aciklama404 = metaCoz(html404.match(/<meta name="description" content="([^"]*)"/)?.[1])
if (baslik404 === meta.bulunamadi.baslik && aciklama404 === meta.bulunamadi.aciklama) {
  OK('404.html metası metaMetinleri.js ile birebir (vite.config.js sapmamış)')
} else {
  NO(`404 ayrışmış — HTML: "${baslik404}" / "${aciklama404}" · modül: "${meta.bulunamadi.baslik}" / "${meta.bulunamadi.aciklama}"`)
}

/*
 * METİN İKİNCİ KEZ YAZILMIŞ MI?
 *
 * Yukarıdaki karşılaştırma iki tarafın AYNI ŞEYİ söylediğini gösteriyor ama
 * bunu modülden okuyarak mı yaptıklarını göstermiyor: biri metni tekrar elle
 * yazıp bugün aynı değeri tutturursa denetim yeşil kalır, yarın ayrışır.
 * Burası tam olarak onu yakalıyor — modüldeki her uzun metin parçası tüm
 * src/ ağacında YALNIZCA BİR KEZ geçmeli, o da modülün kendisinde.
 *
 * 40 karakter eşiği bilerek: sayfaların GÖRÜNEN metniyle meta metni kısa
 * ifadeleri paylaşabiliyor (Blog.jsx'te "işin içinden yazılmış rehberler"
 * hem giriş paragrafında hem açıklamada var, 32 karakter). Eşik daha düşük
 * olsaydı bu meşru tekrar yanlış alarm verirdi.
 *
 * BEDELİ: 40 karakterin altındaki metinler bu denetimin DIŞINDA kalıyor —
 * kısa başlıklar çoğunlukla ("Halı Yıkama Rehberleri | Blog — " 32 karakter).
 * Onları aşağıdaki anahtar denetimi karşılıyor: metin elle yeniden yazılırsa
 * o sayfa artık modülden okumuyor demektir ve anahtar sayısı 0'a düşer.
 */
/*
 * Metin parçaları REGEX'LE DEĞİL, elle yürüyen bir tarayıcıyla çıkarılıyor.
 *
 * Önce regex alternasyonu denendi ve SESSİZCE YANLIŞ çalıştı: Türkçe metinde
 * kesme işareti var ("Denizli'de halı, el dokuma halı..."). Çift tırnaklı bir
 * dizenin İÇİNDEKİ kesme işareti, tek tırnaklı alternatifin başlangıcı
 * sanılıyor ve eşleşme oradan bir sonraki kesme işaretine kadar KODU yutuyordu.
 * Çıkan "metinler" kod parçalarıydı; kod parçaları da doğal olarak tek yerde
 * geçtiği için denetim HER ZAMAN yeşil yanıyordu — yani hiçbir şeyi
 * denetlemiyordu. Bu dosyanın og:image notundaki hatanın aynısı.
 *
 * Tarayıcı bir dizeye girdiğinde KENDİ kapanış tırnağına kadar okuyor, o yüzden
 * içerideki başka tür tırnak onu şaşırtmıyor. Şablon dizelerinde ${...}
 * delikleri SINIR sayılıyor: deliğin iki yanı ayrı parça, çünkü metni yeniden
 * elle yazan biri de ancak sabit kısımları birebir kopyalar.
 */
const metinParcalari = (kaynak) => {
  const cikan = []
  let i = 0
  while (i < kaynak.length) {
    const c = kaynak[i]
    if (c === '/' && kaynak[i + 1] === '/') {
      const son = kaynak.indexOf('\n', i)
      if (son < 0) break
      i = son
      continue
    }
    if (c === '/' && kaynak[i + 1] === '*') {
      const son = kaynak.indexOf('*/', i + 2)
      i = son < 0 ? kaynak.length : son + 2
      continue
    }
    if (c !== "'" && c !== '"' && c !== '`') { i++; continue }
    const tirnak = c
    let j = i + 1
    let metin = ''
    while (j < kaynak.length && kaynak[j] !== tirnak) {
      if (kaynak[j] === '\\') { j += 2; metin += ' '; continue }
      if (tirnak === '`' && kaynak[j] === '$' && kaynak[j + 1] === '{') {
        let derinlik = 1
        j += 2
        while (j < kaynak.length && derinlik > 0) {
          if (kaynak[j] === '{') derinlik++
          else if (kaynak[j] === '}') derinlik--
          j++
        }
        cikan.push(metin)
        metin = ''
        continue
      }
      metin += kaynak[j]
      j++
    }
    cikan.push(metin)
    i = j + 1
  }
  return cikan
}
const metaKaynak = fs.readFileSync('src/data/metaMetinleri.js', 'utf8')
const parcalar = new Set()
for (const ham of metinParcalari(metaKaynak)) {
  const p = ham.trim()
  // Boşluksuz ya da satır atlayan parça "metin değil kod/yol" işaretidir.
  if (p.length >= 40 && p.includes(' ') && !p.includes('\n')) parcalar.add(p)
}
const srcDosyalari = (function tara(d) {
  return fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => {
    const t = path.join(d, e.name)
    if (e.isDirectory()) return tara(t)
    return /\.jsx?$/.test(e.name) ? [t] : []
  })
})('src')
const srcMetin = new Map(srcDosyalari.map((f) => [f, fs.readFileSync(f, 'utf8')]))
const tekrar = []
for (const p of parcalar) {
  const nerede = [...srcMetin].filter(([, icerik]) => icerik.includes(p)).map(([f]) => f)
  if (nerede.length > 1) tekrar.push(`"${p.slice(0, 45)}…" -> ${nerede.join(', ')}`)
}
if (!parcalar.size) NO('metaMetinleri.js içinden karşılaştırılacak metin çıkarılamadı')
else if (tekrar.length) {
  NO(`${tekrar.length} metin src/ içinde İKİNCİ KEZ yazılmış (tek kaynak bozuldu)`)
  for (const x of tekrar.slice(0, 3)) console.log('      ' + x)
} else OK(`${parcalar.size} meta metninin hepsi yalnızca metaMetinleri.js'te yazılı`)


/*
 * HANGİ SAYFA HANGİ ANAHTARI OKUYOR?
 *
 * Yukarıdaki iki denetimin İKİSİNİN DE kaçırdığı bir regresyon var: bir sayfanın
 * YANLIŞ ANAHTARI okuması. Blog.jsx `metaMetinleri.hizmetler.aciklama` yazsaydı
 *   • değer denetimi yeşil kalırdı  — routeMeta hâlâ meta.blog'u okuyor, build
 *     HTML'i doğru; ayrışma yalnızca React devraldıktan SONRA ortaya çıkıyor,
 *   • tek kaynak denetimi yeşil kalırdı — yeni bir metin elle yazılmadı.
 * Ama /blog/ çalışma anında hizmetler sayfasının açıklamasını servis ederdi.
 * Yani düzeltilen hatanın ta kendisi, sessizce geri gelirdi.
 *
 * Her meta anahtarı TAM OLARAK bir sayfa bileşenine ait. Yanlış anahtara geçen
 * bir düzenleme bir anahtarı 0'a, diğerini 2'ye düşürür; modülü bırakan bir
 * sayfa da kendi anahtarını 0'a düşürür. İkisi de burada yakalanır.
 *
 * Legal.jsx iki rota sunuyor (gizlilik + şartlar) ama TEK dosya, o yüzden
 * `yasal` anahtarı da 1 sayılıyor — sayılan rota değil, bileşen.
 */
const sayfaDosyalari = srcDosyalari.filter((f) => f.includes(path.join('src', 'pages')))
const anahtarSapma = []
for (const anahtar of Object.keys(meta)) {
  const kacSayfa = sayfaDosyalari.filter((f) => srcMetin.get(f).includes(`metaMetinleri.${anahtar}`)).length
  if (kacSayfa !== 1) anahtarSapma.push(`${anahtar} -> ${kacSayfa} sayfa`)
}
if (anahtarSapma.length) {
  NO(`${anahtarSapma.length} meta anahtarı tam olarak bir sayfa bileşenine bağlı değil`)
  for (const x of anahtarSapma) console.log('      ' + x)
} else OK(`${Object.keys(meta).length} meta anahtarının hepsi tam olarak bir sayfaya bağlı`)
console.log('\n' + (hata ? `${hata} SORUN` : 'HEPSİ TEMİZ ✓'))
process.exit(hata ? 1 : 0)
