import { Link } from 'react-router-dom'
import siteConfig from '../data/siteConfig'
import services from '../data/services'
import Icon from './Icon'
import Logo from './Logo'
import { mapsUrl, activeSocials } from '../utils/links'

const quickLinks = [
  { to: '/', label: 'Ana Sayfa' },
  { to: '/hizmetler', label: 'Hizmetler' },
  { to: '/projeler', label: 'Uygulama Alanları' },
  { to: '/hakkimizda', label: 'Hakkımızda' },
  { to: '/iletisim', label: 'İletişim' },
  { to: '/hizmet-bolgeleri', label: 'Hizmet Bölgeleri' },
  { to: '/sikca-sorulan-sorular', label: 'Sıkça Sorulan Sorular' },
]

const yasalLinkler = [
  { to: '/gizlilik-politikasi', label: 'Gizlilik Politikası' },
  { to: '/sartlar-ve-kosullar', label: 'Şartlar ve Koşullar' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const socials = activeSocials()

  return (
    <footer className="bg-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Firma bilgisi */}
          <div>
            <Link to="/" className="inline-block mb-5" aria-label={`${siteConfig.companyName} — ana sayfa`}>
              <Logo variant="light" imgClassName="h-11 w-auto" />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {siteConfig.stats.yearsExperience}+ yıllık saha tecrübesiyle Denizli ve çevresinde
              profesyonel beton delme, kesme ve kırma hizmetleri sunuyoruz.
            </p>

            {socials.length > 0 && (
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.key}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/60 transition-all duration-300 ${s.hover}`}
                  >
                    <Icon name={s.icon} className="w-5 h-5" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Hizmetler */}
          <div>
            <h2 className="text-white font-semibold text-lg mb-5 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary rounded-full" aria-hidden="true" />
              Hizmetler
            </h2>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/hizmetler/${service.slug}`}
                    className="text-white/60 hover:text-primary text-sm transition-colors hover:translate-x-1 inline-block py-1"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hızlı linkler */}
          <div>
            <h2 className="text-white font-semibold text-lg mb-5 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary rounded-full" aria-hidden="true" />
              Hızlı Linkler
            </h2>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/60 hover:text-primary text-sm transition-colors inline-block py-1">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h2 className="text-white font-semibold text-lg mb-5 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-primary rounded-full" aria-hidden="true" />
              İletişim
            </h2>
            <div className="space-y-4">
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-start gap-3 text-white/60 hover:text-primary transition-colors py-1"
              >
                <Icon name="phone" className="w-5 h-5 mt-0.5 shrink-0 text-primary" strokeWidth={2} />
                <span className="text-sm">{siteConfig.phone}</span>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-start gap-3 text-white/60 hover:text-primary transition-colors py-1"
              >
                <Icon name="mail" className="w-5 h-5 mt-0.5 shrink-0 text-primary" strokeWidth={2} />
                <span className="text-sm break-all">{siteConfig.email}</span>
              </a>

              <a
                href={mapsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-white/60 hover:text-primary transition-colors py-1"
              >
                <Icon name="mapPin" className="w-5 h-5 mt-0.5 shrink-0 text-primary" strokeWidth={2} />
                <span className="text-sm">{siteConfig.address.full}</span>
              </a>

              <div className="flex items-start gap-3 text-white/60">
                <Icon name="clock" className="w-5 h-5 mt-0.5 shrink-0 text-primary" strokeWidth={2} />
                <span className="text-sm">
                  {siteConfig.workingHours.days}
                  <br />
                  {siteConfig.workingHours.hours}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Alt bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-sm">
            © {currentYear} {siteConfig.companyName}. Tüm hakları saklıdır.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {yasalLinkler.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-white/40 hover:text-primary text-xs transition-colors inline-block py-1"
              >
                {link.label}
              </Link>
            ))}
            <span className="text-white/25 text-xs">
              {siteConfig.address.district} / {siteConfig.address.city}
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
