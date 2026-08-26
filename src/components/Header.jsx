import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import siteConfig from '../data/siteConfig'
import services from '../data/services'
import Icon from './Icon'
import Logo from './Logo'

const navLinks = [
  { to: '/', label: 'Ana Sayfa' },
  { to: '/hizmetler/', label: 'Hizmetler', hasDropdown: true },
  { to: '/projeler/', label: 'Uygulama Alanları' },
  { to: '/hakkimizda/', label: 'Hakkımızda' },
  { to: '/iletisim/', label: 'İletişim' },
  { to: '/hizmet-bolgeleri/', label: 'Hizmet Bölgeleri' },
  { to: '/blog/', label: 'Blog' },
  // Kisa etiket bilincli: Footer'da tam adi ('Sikca Sorulan Sorular') geciyor,
  // burada uzun hali 1024px'te menuyu tasiriyordu. Olculdu: 7 baglantiyla
  // nav 643px + 381px bos; 'SSS' ~40px, tam ad ~200px.
  { to: '/sikca-sorulan-sorular/', label: 'SSS' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Sayfa değiştiğinde menüyü kapat
  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [location])

  // Mobil menü açıkken sayfa kaydırmasını kilitle.
  // Scrollbar genişliği telafi edilir; yoksa menü açılırken sayfa yatayda zıplar.
  useEffect(() => {
    if (!mobileOpen) return

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
    const prevOverflow = document.body.style.overflow
    const prevPadding = document.body.style.paddingRight

    document.body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = prevOverflow
      document.body.style.paddingRight = prevPadding
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-dark shadow-lg shadow-black/30 py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo — BOYUT BÜTÇESİ (büyütmeden önce oku)
              Hero ve PageHeader içeriği `pt-32` (128px) ile başlıyor, header ise
              `fixed`. Header'ın toplam yüksekliği 128px'i aşarsa başlık menünün
              altında kalır. Ölçülmüş formül (logo, satırın en yüksek öğesi):
                üstte        (bg-transparent + py-4)          → logo + 32px
                kaydırılmış  (glass-dark py-2 + 1px kenarlık) → logo + 18px
              Yani logo en fazla 96px olabilir. h-20 (80px) -> 112px, 16px pay kalir.

              IKINCI BUTCE - GENISLIK (bu tur eklendi).
              Logo dosyasi 273x112'ye kirpildi. Eskiden 283x286 tuvaldi ve
              %62'si SAYDAM BOSLUKTU: h-20 verince ekranda gorunen marka
              isareti ancak ~31px oluyordu. "Logo hala kucuk" sikayetinin
              sebebi CSS degil, dosyanin kendisiydi - yukseklik bosluga
              gidiyordu. Kirpma sonrasi oran 2,44:1, yani her 10px yukseklik
              24px genislik demek; ayni sinif birden 79px yerine 195px
              genislige cikti ve 1024'te menuyu IKI SATIRA sardirdi.

              Menunun sarmadan sigmasi icin gereken genislik OLCULDU:
                1280 ve uzeri : menu 755px + CTA 132px -> logoya 345px kaliyor
                1024-1279     : menu 643px + CTA 132px -> logoya 201px kaliyor
              Bu yuzden xl'de h-20 (195px) rahat, lg bandinda h-12 (117px).
              Buyutmeden once bu iki rakami yeniden olcun.

              Yalnizca yukseklik verilir, w-auto genisligi kendi bulur -
              sabit bir w- sinifi gorseli ezer. */}
          <Link to="/" className="group shrink-0" aria-label={`${siteConfig.companyName} — ana sayfa`}>
            <Logo
              variant="light"
              /* Kaydırınca header py-4 → py-2 ile inceliyor; logo da bir kademe
                 küçülüyor, yoksa yapışkan çubuk ekranın çok yerini yer. Geçiş
                 süresi header'ınkiyle (duration-500) aynı, ikisi birlikte insin. */
              imgClassName={`w-auto transition-all duration-500 group-hover:scale-[1.04] ${
                scrolled ? 'h-10 xl:h-16' : 'h-12 xl:h-20'
              }`}
              /* Görsel yüklenemezse devreye giren gömülü işaret de logoyla aynı
                 ölçekte dursun; varsayılan w-10 yanında cüce kalıyordu. */
              markClassName="w-12 h-12 sm:w-14 sm:h-14"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Ana menü">
            {navLinks.map((link) => (
              <div key={link.to} className="relative group">
                <Link
                  to={link.to}
                  /* px-2 xl:px-4 — 1024–1279 arası dar bant: 7 bağlantı + CTA +
                     büyütülmüş logo bir satıra sığmayınca bağlantı yazıları iki
                     satıra sarıyor, header da bu yüzden şişiyordu. Bu bantta
                     bağlantı başına 8px geri kazanılıyor; 1280'den itibaren yer
                     bol olduğu için eski dolguya dönülüyor. */
                  className={`inline-flex items-center gap-1 px-2 xl:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    location.pathname === link.to
                      ? 'text-primary bg-white/10'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <Icon
                      name="chevronDown"
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180"
                      strokeWidth={2.5}
                    />
                  )}
                </Link>

                {/* Hizmetler açılır menüsü */}
                {link.hasDropdown && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 group-focus-within:translate-y-0">
                    <div className="glass-dark rounded-xl p-3 min-w-[280px] shadow-2xl border border-white/10">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          to={`/hizmetler/${service.slug}/`}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/75 hover:text-white hover:bg-white/10 transition-all text-sm group/item"
                        >
                          <Icon
                            name={service.icon}
                            className="w-5 h-5 text-primary shrink-0"
                          />
                          <span className="group-hover/item:translate-x-1 transition-transform">
                            {service.title}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA & Mobil buton */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="btn-primary hidden sm:inline-flex text-sm py-2.5 px-5"
            >
              <Icon name="phone" className="w-4 h-4" strokeWidth={2} />
              Bize Ulaşın
            </a>

            {/* Hamburger */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className={`lg:hidden flex flex-col gap-1.5 p-2 hamburger ${mobileOpen ? 'active' : ''}`}
              aria-label={mobileOpen ? 'Menüyü kapat' : 'Menüyü aç'}
              aria-expanded={mobileOpen}
              aria-controls="mobil-menu"
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobil menü */}
      <div
        id="mobil-menu"
        className={`mobile-menu-overlay lg:hidden ${mobileOpen ? 'active' : ''}`}
        aria-hidden={!mobileOpen}
      >
        <nav
          className="min-h-full flex flex-col items-center justify-center gap-4 px-8 py-28"
          aria-label="Mobil menü"
        >
          {navLinks.map((link) => (
            <div key={link.to} className="text-center">
              {link.hasDropdown ? (
                <>
                  <div className="flex items-center justify-center gap-2">
                    <Link
                      to={link.to}
                      className={`text-2xl font-semibold transition-colors ${
                        location.pathname === link.to ? 'text-primary' : 'text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() => setServicesOpen((v) => !v)}
                      className="p-2 text-white/60 hover:text-primary transition-colors"
                      aria-label={servicesOpen ? 'Hizmetleri gizle' : 'Hizmetleri göster'}
                      aria-expanded={servicesOpen}
                    >
                      <Icon
                        name="chevronDown"
                        className={`w-5 h-5 transition-transform duration-300 ${
                          servicesOpen ? 'rotate-180' : ''
                        }`}
                        strokeWidth={2.5}
                      />
                    </button>
                  </div>

                  {servicesOpen && (
                    <div className="mt-3 space-y-1">
                      {services.map((service) => (
                        <Link
                          key={service.slug}
                          to={`/hizmetler/${service.slug}/`}
                          className="flex items-center justify-center gap-2.5 text-white/70 hover:text-primary text-base transition-colors py-1"
                        >
                          <Icon name={service.icon} className="w-4 h-4 shrink-0" />
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={link.to}
                  className={`text-2xl font-semibold transition-colors ${
                    location.pathname === link.to ? 'text-primary' : 'text-white'
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}

          <a href={`tel:${siteConfig.phoneRaw}`} className="btn-primary mt-6 text-lg px-8 py-3.5">
            <Icon name="phone" className="w-5 h-5" strokeWidth={2} />
            {siteConfig.phone}
          </a>

          <a
            href={siteConfig.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-base px-8 py-3"
          >
            <Icon name="whatsapp" className="w-5 h-5" />
            WhatsApp
          </a>
        </nav>
      </div>
    </>
  )
}
