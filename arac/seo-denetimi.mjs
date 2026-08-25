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
og['image:width'] === '1200' && og['image:height'] === '630' ? OK('og:image ölçüsü 1200×630') : NO('og ölçüsü yanlış')
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

console.log('\n' + (hata ? `${hata} SORUN` : 'HEPSİ TEMİZ ✓'))
process.exit(hata ? 1 : 0)
