/**
 * Duman testi — her rotanın React bileşenini GERÇEKTEN render eder.
 *
 * ┌──────────────────────────────────────────────────────────────────────────┐
 * │ NEDEN VAR — üç kez aynı şekilde kırıldı                                  │
 * │ `npm run build` ve HTTP 200 kontrolü, bileşenin ÇALIŞMA ANINDA çökmesini │
 * │ YAKALAMIYOR. SPA her rotaya aynı index.html'i döndürdüğü için curl 200   │
 * │ görüyor, sayfa tarayıcıda bembeyaz açılıyor.                             │
 * │                                                                          │
 * │ Yaşananlar — üçü de "veri şekli ile bileşen beklentisi ayrıştı":         │
 * │   ProjectGallery  projects.js şekli değişti → project.image undefined   │
 * │   ServiceDetail   blog.js'te ilgiliHizmetler yoktu → .includes çöktü     │
 * │   StatsSection    siteConfig.stats anahtarları değişti → rozet kayboldu  │
 * └──────────────────────────────────────────────────────────────────────────┘
 *
 * App.jsx kendi BrowserRouter'ını kuruyor ve o Node'da window istiyor; bu
 * yüzden App değil, SAYFALAR doğrudan MemoryRouter içinde render ediliyor.
 * Rota tablosu App.jsx'i AYNALAMAK zorunda — App'e rota eklenince buraya da
 * eklenmeli, yoksa yeni sayfa test edilmeden geçer.
 *
 * KULLANIM:  npm run duman     (çöken rota varsa çıkış kodu 1)
 */
import { createServer } from 'vite'
import { renderToString } from 'react-dom/server'
import React from 'react'
import path from 'node:path'

const sunucu = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  logLevel: 'error',
  // react-router-dom v7 CJS derlemesiyle geliyor ve Vite'ın SSR yükleyicisi
  // onu Node'da çalıştıramıyor (ERR_AMBIGUOUS_MODULE_SYNTAX). noExternal ile
  // Vite'ın kendisi işliyor. Node'dan doğrudan import etmek ÇÖZÜM DEĞİL:
  // o zaman iki ayrı react-router kopyası olur, context propagate etmez ve
  // useParams boş döner — test sessizce yanlış sonuç verir.
  ssr: { noExternal: ["react-router-dom", "react-router"] },
  // Paketin "node" koşulu CJS derlemesine düşüyor ve Vite'ın SSR yükleyicisi
  // onu çalıştıramıyor. ESM dosyasını doğrudan gösteriyoruz. Takma ad ŞART:
  // Node'dan ayrıca import etmek iki farklı react-router kopyası yaratır,
  // context propagate etmez ve useParams boş döner — test sessizce yanılır.
  resolve: {
    // TAM EŞLEŞME şart: düz string takma ad ÖN EK olarak eşleşiyor ve
    // "react-router/dom" alt yolunu da yakalayıp kırıyor.
    alias: [
      { find: /^react-router-dom$/, replacement: path.resolve("node_modules/react-router-dom/dist/index.mjs") },
      { find: /^react-router$/, replacement: path.resolve("node_modules/react-router/dist/development/index.mjs") },
    ],
  },
})

const yukle = (y) => sunucu.ssrLoadModule(y)
const { MemoryRouter, Routes, Route } = await yukle('react-router-dom')

const [services, serviceAreas, blog, legal] = await Promise.all([
  yukle('/src/data/services.js'),
  yukle('/src/data/bolgelerIndex.js'),
  yukle('/src/data/blog.js'),
  yukle('/src/data/legal.js'),
])

/** App.jsx'teki rota tablosunun aynası. */
const SAYFALAR = [
  ['/', '/src/pages/Home.jsx', '/'],
  ['/hizmetler/', '/src/pages/Services.jsx', '/hizmetler/'],
  ['/hizmetler/:slug/', '/src/pages/ServiceDetail.jsx', null],
  ['/projeler/', '/src/pages/Projects.jsx', '/projeler/'],
  ['/hakkimizda/', '/src/pages/About.jsx', '/hakkimizda/'],
  ['/iletisim/', '/src/pages/Contact.jsx', '/iletisim/'],
  ['/hizmet-bolgeleri/', '/src/pages/ServiceAreas.jsx', '/hizmet-bolgeleri/'],
  ['/hizmet-bolgeleri/:slug/', '/src/pages/ServiceAreaDetail.jsx', null],
  ['/sikca-sorulan-sorular/', '/src/pages/Faq.jsx', '/sikca-sorulan-sorular/'],
  ['/blog/', '/src/pages/Blog.jsx', '/blog/'],
  ['/blog/:slug/', '/src/pages/BlogPost.jsx', null],
]

/** Parametreli rotalar için TÜM gerçek slug'lar denenir, biri değil. */
const ornekler = {
  '/hizmetler/:slug/': services.default.map((s) => `/hizmetler/${s.slug}/`),
  '/hizmet-bolgeleri/:slug/': serviceAreas.default.map((a) => `/hizmet-bolgeleri/${a.slug}/`),
  '/blog/:slug/': blog.default.map((y) => `/blog/${y.slug}/`),
}

const hatalar = []
let sayac = 0

async function dene(desen, modulYolu, yol) {
  const { default: Sayfa } = await yukle(modulYolu)
  sayac++
  try {
    const html = renderToString(
      React.createElement(
        MemoryRouter,
        { initialEntries: [yol] },
        React.createElement(Routes, null, React.createElement(Route, { path: desen, element: React.createElement(Sayfa) }))
      )
    )
    if (!html || html.length < 150) hatalar.push([yol, `çıktı şüpheli kısa (${html.length} karakter)`])
  } catch (e) {
    hatalar.push([yol, e.message.split('\n')[0]])
  }
}

for (const [desen, modulYolu, sabit] of SAYFALAR) {
  const yollar = sabit ? [sabit] : ornekler[desen]
  for (const y of yollar) await dene(desen, modulYolu, y)
}

// Yasal sayfalar veriyi prop olarak alıyor, ayrı ele alınıyor.
const { default: Legal } = await yukle('/src/pages/Legal.jsx')
for (const sayfa of [legal.gizlilik, legal.sartlar]) {
  sayac++
  try {
    renderToString(
      React.createElement(MemoryRouter, { initialEntries: [`/${sayfa.slug}/`] },
        React.createElement(Legal, { sayfa }))
    )
  } catch (e) {
    hatalar.push([`/${sayfa.slug}/`, e.message.split('\n')[0]])
  }
}

await sunucu.close()

if (hatalar.length) {
  console.error(`\nÇÖKEN ROTA: ${hatalar.length} / ${sayac}\n`)
  for (const [yol, mesaj] of hatalar) console.error(`  ${yol}\n      ${mesaj}`)
  process.exit(1)
}
console.log(`\nHepsi render edildi: ${sayac}/${sayac} ✓`)
