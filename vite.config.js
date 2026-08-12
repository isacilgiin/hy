import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import siteConfig from './src/data/siteConfig.js'
import services from './src/data/services.js'
import serviceAreas from './src/data/serviceAreas.js'

/**
 * index.html + robots.txt + sitemap.xml içeriğini src/data/siteConfig.js'ten üretir.
 *
 * Neden: domain / telefon / firma adı 5 ayrı dosyada elle tutulursa er ya da geç
 * birbirinden ayrı düşer (bu projede zaten öyle olmuştu). Artık tek kaynak var:
 * siteConfig.js'i güncelle, hepsi otomatik güncellensin.
 */
function seoFromConfig() {
  const { url, domain, companyName, companyDescription, seo, phone, phoneRaw, email, address, workingHours, themeColor, rating, social, analytics } =
    siteConfig

  const ogImage = `${url}/images/logo/og-image.jpg`

  // --- JSON-LD (Schema.org LocalBusiness) ---
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${url}/#localbusiness`,
    name: companyName,
    description: companyDescription,
    url,
    telephone: phoneRaw,
    email,
    image: ogImage,
    priceRange: '₺₺',
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.street,
      addressLocality: address.district,
      addressRegion: address.city,
      postalCode: address.postalCode,
      addressCountry: 'TR',
    },
    openingHoursSpecification: workingHours.alwaysOpen
      ? {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '00:00',
          closes: '23:59',
        }
      : {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: workingHours.hours.split(' - ')[0],
          closes: workingHours.hours.split(' - ')[1],
        },
    areaServed: serviceAreas.map((a) => ({ '@type': 'City', name: `${a.name}, ${address.city}` })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Karot Hizmetleri',
      itemListElement: services.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title, url: `${url}/hizmetler/${s.slug}/` },
      })),
    },
  }

  // Koordinat girilmediyse geo YAZILMAZ — uydurma konum yayınlanmaz.
  if (siteConfig.geo.lat != null && siteConfig.geo.lng != null) {
    jsonLd.geo = {
      '@type': 'GeoCoordinates',
      latitude: siteConfig.geo.lat,
      longitude: siteConfig.geo.lng,
    }
  }

  // Gerçek puan girilmediyse aggregateRating YAZILMAZ — uydurma yorum verisi
  // Google'ın yapılandırılmış veri politikasına aykırıdır.
  if (rating.showInSchema && rating.value != null && rating.count != null) {
    jsonLd.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: String(rating.value),
      reviewCount: String(rating.count),
    }
  }

  const sameAs = [social.instagram, social.facebook, social.youtube].filter(Boolean)
  if (sameAs.length) jsonLd.sameAs = sameAs

  // --- Yalnızca değeri olan meta etiketleri üretilir ---
  const optionalMeta = []
  if (siteConfig.geo.lat != null && siteConfig.geo.lng != null) {
    optionalMeta.push(`<meta name="geo.position" content="${siteConfig.geo.lat};${siteConfig.geo.lng}" />`)
    optionalMeta.push(`<meta name="ICBM" content="${siteConfig.geo.lat}, ${siteConfig.geo.lng}" />`)
  }
  if (analytics.googleSiteVerification) {
    optionalMeta.push(`<meta name="google-site-verification" content="${analytics.googleSiteVerification}" />`)
  }

  const analyticsScript = analytics.ga4
    ? `<script async src="https://www.googletagmanager.com/gtag/js?id=${analytics.ga4}"></script>
  <script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${analytics.ga4}');</script>`
    : '<!-- Google Analytics: siteConfig.analytics.ga4 doldurulunca otomatik eklenir -->'

  const tokens = {
    SITE_URL: url,
    SITE_DOMAIN: domain,
    SITE_NAME: companyName,
    SITE_TITLE: seo.defaultTitle,
    SITE_DESCRIPTION: seo.defaultDescription,
    SITE_KEYWORDS: seo.keywords,
    SITE_THEME_COLOR: themeColor,
    SITE_GEO_REGION: siteConfig.geo.region,
    SITE_CITY: address.city,
    SITE_PHONE: phone,
    SITE_PHONE_RAW: phoneRaw,
    SITE_ADDRESS: address.full,
    SITE_OG_IMAGE: ogImage,
    SITE_OPTIONAL_META: optionalMeta.join('\n  '),
    SITE_ANALYTICS: analyticsScript,
    SITE_JSONLD: JSON.stringify(jsonLd, null, 2),
    SITE_SERVICE_LINKS: services
      .map((s) => `<li><a href="/hizmetler/${s.slug}">${s.title}</a></li>`)
      .join('\n        '),
  }

  // Sondaki eğik çizgi (trailing slash) BİLİNÇLİ: eski WordPress sitesinde
  // indekslenmiş URL'ler bu formatta. Canonical + sitemap onlarla birebir eşleşsin.
  const staticRoutes = [
    { path: '/', priority: '1.0', changefreq: 'weekly' },
    { path: '/hizmetler/', priority: '0.9', changefreq: 'monthly' },
    { path: '/hizmet-bolgeleri/', priority: '0.9', changefreq: 'monthly' },
    { path: '/projeler/', priority: '0.7', changefreq: 'monthly' },
    { path: '/hakkimizda/', priority: '0.6', changefreq: 'yearly' },
    { path: '/iletisim/', priority: '0.8', changefreq: 'yearly' },
  ]

  /**
   * Eski WordPress URL'lerinden yeni yapıya 301 yönlendirmeleri.
   *
   * Karşılığı BİREBİR AYNI olan URL'ler (ör. /hizmetler/beton-kesme/) burada YOK —
   * onlar zaten aynı adreste çalışıyor, yönlendirmeye gerek yok. Burada yalnızca
   * adresi DEĞİŞEN veya karşılığı olmayan sayfalar var.
   */
  const redirects = [
    ['Hizmetler sayfası adı değişti', '^hizmetlerimiz/?$', '/hizmetler/'],
    // Blog yazısı: konusu karot ve beton delme
    [
      'Tek blog yazısı',
      '^denizlide-profesyonel-karot-ve-beton-delme-hizmetleri-20-karot-guvencesiyle/?$',
      '/hizmetler/karot/',
    ],
    ['Blog arşivi (yeni sitede blog yok)', '^blog/?$', '/'],
    // WordPress taksonomi arşivleri
    ['service-category -> hizmet detayı', '^service-category/([a-z0-9-]+)/?$', '/hizmetler/$1/'],
    ['portfolio-category -> hizmet detayı', '^portfolio-category/([a-z0-9-]+)/?$', '/hizmetler/$1/'],
    ['category arşivleri', '^category/.*$', '/hizmetler/'],
    ['tag arşivleri', '^tag/.*$', '/hizmetler/'],
    ['portfolio kayıtları', '^portfolio/.*$', '/projeler/'],
    // WordPress kalıntıları
    ['RSS beslemeleri', '^(.*/)?feed/?$', '/'],
    ['WordPress yönetim', '^wp-(admin|login\\.php).*$', '/'],
    // TODO: Bu 3 sayfa henüz yeni sitede YOK. İçeriklerini ekleyip sayfa
    // oluşturduğunuzda aşağıdaki 3 satırı SİLİN, yoksa sayfalar açılmaz.
    ['SSS sayfası (henüz yok)', '^sikca-sorulan-sorular/?$', '/iletisim/'],
    ['Gizlilik politikası (henüz yok)', '^gizlilik-politikasi/?$', '/'],
    ['Şartlar ve koşullar (henüz yok)', '^sartlar-ve-kosullar/?$', '/'],
  ]

  return {
    name: 'seo-from-siteconfig',

    transformIndexHtml(html) {
      return html.replace(/%(SITE_[A-Z_]+)%/g, (match, key) =>
        key in tokens ? tokens[key] : match
      )
    },

    generateBundle() {
      const urls = [
        ...staticRoutes,
        ...services.map((s) => ({
          path: `/hizmetler/${s.slug}/`,
          priority: '0.8',
          changefreq: 'monthly',
        })),
        ...serviceAreas.map((a) => ({
          path: `/hizmet-bolgeleri/${a.slug}/`,
          priority: '0.8',
          changefreq: 'monthly',
        })),
      ]

      const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${url}${u.path}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`

      const robots = `User-agent: *
Allow: /
Disallow: /assets/

Sitemap: ${url}/sitemap.xml
`

      const htaccess = `# ${companyName} — Apache yapılandırması
# BU DOSYA OTOMATİK ÜRETİLİR (vite.config.js > seoFromConfig).
# Elle düzenlemeyin; değişiklik gerekiyorsa vite.config.js içindeki
# \`redirects\` dizisini güncelleyip yeniden build alın.
#
# dist/ içeriğini hostinge yüklerken BU DOSYAYI DA yükleyin (gizli dosyadır;
# FileZilla > Sunucu > Gizli dosyaları göstermeye zorla).

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # ---------------------------------------------------------------
  # 1) Eski WordPress adreslerinden yeni adreslere kalıcı (301) taşıma
  #    Adresi DEĞİŞMEYEN sayfalar burada yok — onlar zaten çalışıyor.
  # ---------------------------------------------------------------
${redirects.map(([aciklama, from, to]) => `  # ${aciklama}\n  RewriteRule ${from} ${to} [R=301,L]`).join('\n')}

  # ---------------------------------------------------------------
  # 2) Sondaki eğik çizgiyi zorunlu kıl (indeksteki URL formatı bu)
  #    Gerçek dosya/klasör ve uzantılı isteklere dokunulmaz.
  # ---------------------------------------------------------------
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteCond %{REQUEST_URI} !\\.[a-zA-Z0-9]{2,5}$
  RewriteRule ^(.*[^/])$ /$1/ [R=301,L]

  # ---------------------------------------------------------------
  # 3) Tek sayfa uygulaması (SPA) yönlendirmesi
  #    BU BLOK OLMADAN alt sayfalara doğrudan girildiğinde 404 alınır.
  # ---------------------------------------------------------------
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# ---------------------------------------------------------------
# Önbellek
# ---------------------------------------------------------------
<IfModule mod_expires.c>
  ExpiresActive On
  # İçerik hash'i olan varlıklar uzun süre önbelleklenebilir
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
  ExpiresByType image/jpeg "access plus 6 months"
  ExpiresByType image/png "access plus 6 months"
  ExpiresByType image/webp "access plus 6 months"
  ExpiresByType image/svg+xml "access plus 6 months"
  ExpiresByType font/woff2 "access plus 1 year"
  # index.html önbelleklenmemeli — yoksa site güncellenince eski sürüm görünür
  ExpiresByType text/html "access plus 0 seconds"
</IfModule>

<IfModule mod_headers.c>
  <FilesMatch "\\.(html)$">
    Header set Cache-Control "no-cache, must-revalidate"
  </FilesMatch>
  Header set X-Content-Type-Options "nosniff"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/plain text/xml application/javascript application/json image/svg+xml
</IfModule>

ErrorDocument 404 /index.html
`

      this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap })
      this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robots })
      this.emitFile({ type: 'asset', fileName: '.htaccess', source: htaccess })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), seoFromConfig()],
  build: {
    rollupOptions: {
      output: {
        // Vite 8 (rolldown) manualChunks yalnızca fonksiyon formunu destekler.
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('swiper')) return 'swiper'
          if (id.includes('yet-another-react-lightbox')) return 'lightbox'
          if (/[\\/](react|react-dom|react-router|react-router-dom|scheduler)[\\/]/.test(id)) return 'vendor'
        },
      },
    },
  },
})
