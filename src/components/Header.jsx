import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import siteConfig from '../data/siteConfig'
import services from '../data/services'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Sayfa değiştiğinde menüyü kapat
  useEffect(() => {
    setMobileOpen(false)
    setServicesOpen(false)
  }, [location])

  // Body scroll lock mobile menü açıkken
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const navLinks = [
    { to: '/', label: 'Ana Sayfa' },
    { to: '/hizmetler', label: 'Hizmetler', hasDropdown: true },
    { to: '/projeler', label: 'Projeler' },
    { to: '/hakkimizda', label: 'Hakkımızda' },
    { to: '/iletisim', label: 'İletişim' },
    { to: '/hizmet-bolgeleri', label: 'Hizmet Bölgeleri' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'glass-dark shadow-lg shadow-black/20 py-2'
            : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center text-dark font-bold text-xl transition-transform group-hover:scale-110">
              GK
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-bold text-lg leading-tight tracking-wide">
                {siteConfig.companyShortName}
              </div>
              <div className="text-primary text-xs font-medium tracking-wider">
                {siteConfig.companySlogan}
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map(link => (
              <div key={link.to} className="relative group">
                <Link
                  to={link.to}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                    location.pathname === link.to
                      ? 'text-primary bg-white/10'
                      : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.label}
                  {link.hasDropdown && (
                    <span className="ml-1 text-[10px]">▼</span>
                  )}
                </Link>

                {/* Services Dropdown */}
                {link.hasDropdown && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                    <div className="glass-dark rounded-xl p-3 min-w-[260px] shadow-2xl border border-white/10">
                      {services.map(service => (
                        <Link
                          key={service.slug}
                          to={`/hizmetler/${service.slug}`}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-all text-sm group/item"
                        >
                          <span className="text-lg">{service.icon}</span>
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

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${siteConfig.phoneRaw}`}
              className="btn-primary hidden sm:inline-flex text-sm py-2.5 px-5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Bize Ulaşın
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden flex flex-col gap-1.5 p-2 hamburger ${mobileOpen ? 'active' : ''}`}
              aria-label="Menü"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu-overlay ${mobileOpen ? 'active' : ''}`}>
        <div className="flex flex-col items-center justify-center h-full gap-4 p-8">
          {navLinks.map(link => (
            <div key={link.to} className="text-center">
              <Link
                to={link.to}
                className={`text-2xl font-semibold transition-colors ${
                  location.pathname === link.to ? 'text-primary' : 'text-white'
                }`}
                onClick={() => {
                  if (link.hasDropdown) {
                    setServicesOpen(!servicesOpen)
                  }
                }}
              >
                {link.label}
              </Link>

              {/* Mobile Services Dropdown */}
              {link.hasDropdown && servicesOpen && (
                <div className="mt-3 space-y-2">
                  {services.map(service => (
                    <Link
                      key={service.slug}
                      to={`/hizmetler/${service.slug}`}
                      className="block text-white/70 hover:text-primary text-base transition-colors"
                    >
                      {service.icon} {service.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <a
            href={`tel:${siteConfig.phoneRaw}`}
            className="btn-primary mt-6 text-lg"
          >
            📞 {siteConfig.phone}
          </a>
        </div>
      </div>
    </>
  )
}
