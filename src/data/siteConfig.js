/**
 * Site Yapılandırması
 * Tüm firma bilgileri bu dosyadan yönetilir.
 * Domain, telefon, adres değişikliklerinde sadece bu dosyayı güncelle.
 */

const siteConfig = {
  // Firma Bilgileri
  companyName: 'Güçlü Karot',
  companyShortName: 'Güçlü Karot',
  companySlogan: 'Hilti Ekipman & Uzman Kadro',
  companyDescription: 'Denizli\'de beton delme ve kesme işlerinizde Hilti marka profesyonel makinelerimizle sıfır hata, minimum titreşim ve maksimum hız sunuyoruz. 15 yıllık saha tecrübesi ve modern makine parkurumuzla yanınızdayız.',

  // İletişim
  phone: '0507 854 95 02',
  phoneRaw: '+905078549502',
  email: 'info@guclukarot.com',
  
  // Adres
  address: {
    street: 'Sümer, 72. Sk. No:1',
    district: 'Merkezefendi',
    city: 'Denizli',
    country: 'Türkiye',
    postalCode: '20100',
    full: 'Sümer, 72. Sk. No:1, Merkezefendi / Denizli',
  },

  // Konum
  geo: {
    lat: 37.7991192,
    lng: 29.0998408,
    region: 'TR-20',
  },

  // Domain & URL
  domain: 'guclukarot.com',
  url: 'https://guclukarot.com',

  // Çalışma Saatleri
  workingHours: {
    days: 'Pazartesi - Cumartesi',
    hours: '08:00 - 18:00',
    schema: [
      'Mo-Sa 08:00-18:00',
    ],
  },

  // Sosyal Medya
  social: {
    instagram: 'https://instagram.com/guclukarot',
    facebook: 'https://facebook.com/guclukarot',
    youtube: '',
    whatsapp: 'https://wa.me/905078549502',
  },

  // Marka Renkleri
  colors: {
    primary: '#F5A623',
    primaryDark: '#D4891A',
    dark: '#0A0A2E',
    darkLight: '#141440',
  },

  // Tema Rengi (browser bar)
  themeColor: '#F5A623',

  // Analytics
  analytics: {
    ga4: 'G-XXXXXXXXXX', // Google Analytics 4 ID
    googleAds: '', // Google Ads ID
    googleSiteVerification: '', // Google Search Console
  },

  // Hizmet Bölgeleri
  serviceAreas: [
    { name: 'Merkezefendi', slug: 'merkezefendi' },
    { name: 'Pamukkale', slug: 'pamukkale' },
    { name: 'Çivril', slug: 'civril' },
    { name: 'Çal', slug: 'cal' },
    { name: 'Acıpayam', slug: 'acipayam' },
    { name: 'Tavas', slug: 'tavas' },
    { name: 'Honaz', slug: 'honaz' },
    { name: 'Sarayköy', slug: 'saraykoy' },
    { name: 'Buldan', slug: 'buldan' },
    { name: 'Kale', slug: 'kale' },
  ],

  // İstatistikler
  stats: {
    yearsExperience: 15,
    completedProjects: 2500,
    happyClients: 1200,
    teamMembers: 20,
  },

  // SEO
  seo: {
    defaultTitle: 'Denizli Karot: Hilti Ekipman & Uzman Kadro, Beton Kesme Delme Kırma | Güçlü Karot',
    defaultDescription: 'Denizli\'de beton delme ve kesme işlerinizde Hilti marka profesyonel makinelerimizle sıfır hata, minimum titreşim ve maksimum hız sunuyoruz. 15 yıllık saha tecrübesi ve modern makine parkurumuzla Güçlü Karot güvencesiyle yanınızdayız.',
    keywords: 'güçlü karot, denizli karot, hilti karot, hilti beton delme, hilti beton kesme, beton delme, beton kesme, beton kırma, karotçu denizli',
  },
}

export default siteConfig
