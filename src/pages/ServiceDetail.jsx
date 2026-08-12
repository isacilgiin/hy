import { useMemo } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import CTASection from '../components/CTASection'
import PageHeader from '../components/PageHeader'
import Icon from '../components/Icon'
import SmartImage from '../components/SmartImage'
import Seo from '../components/Seo'
import services from '../data/services'
import serviceAreas from '../data/serviceAreas'
import siteConfig from '../data/siteConfig'
import { whatsappUrl } from '../utils/links'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)
  const currentIndex = services.findIndex((s) => s.slug === slug)

  const jsonLd = useMemo(() => {
    if (!service) return null
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.title,
      description: service.description,
      serviceType: service.title,
      url: `${siteConfig.url}/hizmetler/${service.slug}/`,
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteConfig.url}/#localbusiness`,
        name: siteConfig.companyName,
        telephone: siteConfig.phoneRaw,
      },
      areaServed: serviceAreas.map((a) => ({
        '@type': 'City',
        name: `${a.name}, ${siteConfig.address.city}`,
      })),
    }
  }, [service])

  if (!service) {
    return <Navigate to="/hizmetler" replace />
  }

  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null
  const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : null

  return (
    <div className="page-enter">
      <Seo
        title={`${service.title} | Denizli ${service.title} — ${siteConfig.companyName}`}
        description={`Denizli ve çevre ilçelerde ${service.title.toLowerCase()} hizmeti. ${service.shortDescription} Ücretsiz keşif için ${siteConfig.phone}.`}
        path={`/hizmetler/${service.slug}/`}
        image={`${siteConfig.url}${service.image}`}
        jsonLd={jsonLd}
      />
      <PageHeader
        align="left"
        breadcrumb={[
          { label: 'Hizmetler', to: '/hizmetler' },
          { label: service.title },
        ]}
      >
        <div className="flex items-center gap-5 animate-fade-in-up">
          <div className="w-16 h-16 shrink-0 rounded-2xl gradient-primary flex items-center justify-center text-dark">
            <Icon name={service.icon} className="w-9 h-9" strokeWidth={1.75} />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              {service.title}
            </h1>
            <p className="text-white/65 mt-2">{service.shortDescription}</p>
          </div>
        </div>
      </PageHeader>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Ana içerik */}
            <div className="lg:col-span-2">
              {/* Görsel */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-10 shadow-lg">
                <SmartImage
                  src={service.image}
                  alt={`${service.title} uygulaması`}
                  icon={service.icon}
                  label={service.title}
                  className="absolute inset-0 w-full h-full"
                  imgClassName="w-full h-full object-cover"
                  loading="eager"
                />
              </div>

              <p className="text-gray-600 text-lg leading-relaxed mb-10">{service.description}</p>

              {/* Özellikler */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl gradient-accent text-white flex items-center justify-center shrink-0">
                    <Icon name="cog" className="w-5 h-5" strokeWidth={2} />
                  </span>
                  Özellikler &amp; Ekipman
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 p-4 rounded-xl bg-surface hover:bg-accent/5 transition-colors"
                    >
                      <Icon
                        name="check"
                        className="w-5 h-5 text-accent shrink-0 mt-0.5"
                        strokeWidth={2.5}
                      />
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Uygulama alanları */}
              <div>
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl gradient-accent text-white flex items-center justify-center shrink-0">
                    <Icon name="clipboard" className="w-5 h-5" strokeWidth={2} />
                  </span>
                  Uygulama Alanları
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.applications.map((app) => (
                    <div
                      key={app}
                      className="flex items-center gap-3 p-4 rounded-xl bg-surface hover:bg-accent/5 transition-colors"
                    >
                      <span className="w-2 h-2 rounded-full bg-accent shrink-0" aria-hidden="true" />
                      <span className="text-gray-600 text-sm">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Kenar çubuğu */}
            <aside className="lg:col-span-1">
              <div className="rounded-2xl gradient-dark p-6 sticky top-28">
                <h2 className="text-white font-bold text-lg mb-4">Hemen Teklif Alın</h2>
                <p className="text-white/60 text-sm mb-6">
                  {service.title} hizmetimiz hakkında detaylı bilgi ve fiyat teklifi için bize
                  ulaşın.
                </p>
                <a href={`tel:${siteConfig.phoneRaw}`} className="btn-primary w-full mb-3">
                  <Icon name="phone" className="w-5 h-5" strokeWidth={2} />
                  {siteConfig.phone}
                </a>
                <a
                  href={whatsappUrl(`Merhaba, ${service.title} hizmeti hakkında bilgi almak istiyorum.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full border-white/25 text-white hover:bg-green-600 hover:border-green-600 hover:text-white"
                >
                  <Icon name="whatsapp" className="w-5 h-5" />
                  WhatsApp
                </a>

                {/* Diğer hizmetler */}
                <div className="mt-8 pt-6 border-t border-white/10">
                  <h3 className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-4">
                    Diğer Hizmetler
                  </h3>
                  <div className="space-y-1">
                    {services
                      .filter((s) => s.slug !== slug)
                      .slice(0, 5)
                      .map((s) => (
                        <Link
                          key={s.slug}
                          to={`/hizmetler/${s.slug}`}
                          className="flex items-center gap-3 text-white/55 hover:text-primary text-sm transition-colors py-1.5"
                        >
                          <Icon name={s.icon} className="w-4 h-4 shrink-0" />
                          <span>{s.title}</span>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Hizmet bölgeleri — iç link ağı (SEO) */}
          <div className="mt-16 pt-10 border-t border-gray-100">
            <h2 className="text-2xl font-bold text-dark mb-2">
              {service.title} Hizmeti Verdiğimiz Bölgeler
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Denizli il genelinde {serviceAreas.length} ilçede {service.title.toLowerCase()}{' '}
              hizmeti veriyoruz. Bulunduğunuz ilçeye tıklayın.
            </p>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((a) => (
                <Link
                  key={a.slug}
                  to={`/hizmet-bolgeleri/${a.slug}`}
                  className="px-4 py-2 rounded-full bg-surface hover:bg-accent hover:text-white text-gray-600 text-sm transition-colors"
                >
                  {a.name} {service.shortTitle}
                </Link>
              ))}
            </div>
          </div>

          {/* Önceki / sonraki */}
          <div className="mt-16 pt-8 border-t border-gray-100 grid grid-cols-2 gap-6">
            {prevService ? (
              <Link
                to={`/hizmetler/${prevService.slug}`}
                className="group flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors"
              >
                <Icon
                  name="arrowLeft"
                  className="w-6 h-6 text-gray-400 group-hover:text-accent transition-all group-hover:-translate-x-1"
                  strokeWidth={2}
                />
                <div>
                  <div className="text-xs text-gray-400">Önceki Hizmet</div>
                  <div className="font-semibold text-dark group-hover:text-accent transition-colors">
                    {prevService.title}
                  </div>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextService && (
              <Link
                to={`/hizmetler/${nextService.slug}`}
                className="group flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors text-right justify-end"
              >
                <div>
                  <div className="text-xs text-gray-400">Sonraki Hizmet</div>
                  <div className="font-semibold text-dark group-hover:text-accent transition-colors">
                    {nextService.title}
                  </div>
                </div>
                <Icon
                  name="arrowRight"
                  className="w-6 h-6 text-gray-400 group-hover:text-accent transition-all group-hover:translate-x-1"
                  strokeWidth={2}
                />
              </Link>
            )}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
