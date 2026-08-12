import { useMemo } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import CTASection from '../components/CTASection'
import PageHeader from '../components/PageHeader'
import Icon from '../components/Icon'
import Seo from '../components/Seo'
import siteConfig from '../data/siteConfig'
import services from '../data/services'
import serviceAreas from '../data/serviceAreas'
import { whatsappUrl } from '../utils/links'

export default function ServiceAreaDetail() {
  const { slug } = useParams()
  const area = serviceAreas.find((a) => a.slug === slug)
  const index = serviceAreas.findIndex((a) => a.slug === slug)

  // Aynı bölgedeki diğer ilçeler — iç link ağı için (SEO'da önemli)
  const nearby = useMemo(() => {
    if (!area) return []
    const sameZone = serviceAreas.filter((a) => a.slug !== slug && a.zone === area.zone)
    const others = serviceAreas.filter((a) => a.slug !== slug && a.zone !== area.zone)
    return [...sameZone, ...others].slice(0, 8)
  }, [area, slug])

  const jsonLd = useMemo(() => {
    if (!area) return null
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `${area.name} Karot — Beton Delme, Kesme ve Kırma`,
      serviceType: 'Karot, beton delme, beton kesme, beton kırma',
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteConfig.url}/#localbusiness`,
        name: siteConfig.companyName,
        telephone: siteConfig.phoneRaw,
      },
      areaServed: { '@type': 'City', name: `${area.name}, ${siteConfig.address.city}` },
      url: `${siteConfig.url}/hizmet-bolgeleri/${area.slug}/`,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${area.name} Karot Hizmetleri`,
        itemListElement: services.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: `${area.name} ${s.title}` },
        })),
      },
    }
  }, [area])

  if (!area) return <Navigate to="/hizmet-bolgeleri" replace />

  const zoneLabel =
    area.zone === 'merkez'
      ? 'Denizli merkez'
      : area.zone === 'yakin'
        ? 'Merkeze yakın ilçe'
        : 'Merkeze uzak ilçe'

  return (
    <div className="page-enter">
      <Seo
        title={`${area.name} Karot | Beton Delme, Kesme, Kırma — ${siteConfig.companyName}`}
        description={`${area.name} karot hizmeti: beton delme, beton kesme, beton kırma, filiz ekimi ve ankraj. Ücretsiz keşif ve net fiyat teklifi için ${siteConfig.phone}.`}
        path={`/hizmet-bolgeleri/${area.slug}/`}
        jsonLd={jsonLd}
      />

      <PageHeader
        title={`${area.name} Karot`}
        description={`${area.name} ve çevresinde beton delme, kesme, kırma, filiz ekimi ve ankraj hizmetleri.`}
        breadcrumb={[
          { label: 'Hizmet Bölgeleri', to: '/hizmet-bolgeleri' },
          { label: area.name },
        ]}
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Bölge etiketi */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 mb-6">
                <Icon name="mapPin" className="w-4 h-4 text-accent" strokeWidth={2} />
                <span className="text-accent text-sm font-semibold">{zoneLabel}</span>
              </div>

              <h2 className="section-title text-dark mb-6">
                <span className="text-gradient-accent">{area.name}</span>&apos;de Karot Hizmeti
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-6">{area.intro}</p>

              {area.note && (
                <div className="border-l-4 border-accent bg-surface rounded-r-xl p-5 mb-8">
                  <p className="text-gray-600 text-sm leading-relaxed">{area.note}</p>
                </div>
              )}

              <p className="text-gray-600 leading-relaxed mb-10">
                {area.name} bölgesindeki işlerde çalışma şeklimiz aynı: önce yerinde (ya da
                fotoğraf üzerinden) ücretsiz keşif, sonra uygulanacak yöntemin ve net fiyatın
                paylaşılması, sonra iş. Taşıyıcı elemana müdahale gerektiren durumlarda statik
                proje ve mühendis onayı olmadan işleme başlamıyoruz.
              </p>

              {/* Hizmetler */}
              <h3 className="text-2xl font-bold text-dark mb-6">
                {area.name}&apos;de Verdiğimiz Hizmetler
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/hizmetler/${s.slug}`}
                    className="flex items-start gap-3 p-4 rounded-xl bg-surface hover:bg-accent/5 transition-colors group"
                  >
                    <span className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                      <Icon name={s.icon} className="w-5 h-5" />
                    </span>
                    <span>
                      <span className="block font-semibold text-dark text-sm group-hover:text-accent transition-colors">
                        {area.name} {s.title}
                      </span>
                      <span className="block text-gray-500 text-xs mt-0.5">{s.shortTitle}</span>
                    </span>
                  </Link>
                ))}
              </div>

              {/* Yakın bölgeler — iç link ağı */}
              <h3 className="text-2xl font-bold text-dark mb-5">Yakın Hizmet Bölgeleri</h3>
              <div className="flex flex-wrap gap-2">
                {nearby.map((a) => (
                  <Link
                    key={a.slug}
                    to={`/hizmet-bolgeleri/${a.slug}`}
                    className="px-4 py-2 rounded-full bg-surface hover:bg-accent hover:text-white text-gray-600 text-sm transition-colors"
                  >
                    {a.name} Karot
                  </Link>
                ))}
              </div>
            </div>

            {/* Kenar çubuğu */}
            <aside className="lg:col-span-1">
              <div className="rounded-2xl gradient-dark p-6 sticky top-28">
                <h3 className="text-white font-bold text-lg mb-2">
                  {area.name} için Teklif Alın
                </h3>
                <p className="text-white/60 text-sm mb-6">
                  Keşif ücretsiz. İşin yöntemini ve fiyatını önceden söylüyoruz.
                </p>

                <a href={`tel:${siteConfig.phoneRaw}`} className="btn-primary w-full mb-3">
                  <Icon name="phone" className="w-5 h-5" strokeWidth={2} />
                  {siteConfig.phone}
                </a>
                <a
                  href={whatsappUrl(
                    `Merhaba, ${area.name} bölgesinde karot/beton kesme işi için bilgi almak istiyorum.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full border-white/25 text-white hover:bg-green-600 hover:border-green-600 hover:text-white"
                >
                  <Icon name="whatsapp" className="w-5 h-5" />
                  WhatsApp
                </a>

                <div className="mt-6 pt-6 border-t border-white/10 space-y-3 text-sm">
                  <div className="flex items-start gap-3 text-white/60">
                    <Icon name="clock" className="w-5 h-5 shrink-0 text-primary" strokeWidth={2} />
                    <span>
                      {siteConfig.workingHours.days}
                      <br />
                      {siteConfig.workingHours.hours}
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-white/60">
                    <Icon name="mapPin" className="w-5 h-5 shrink-0 text-primary" strokeWidth={2} />
                    <span>{area.name} / {siteConfig.address.city}</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Önceki / sonraki bölge */}
          <div className="mt-16 pt-8 border-t border-gray-100 grid grid-cols-2 gap-6">
            {index > 0 ? (
              <Link
                to={`/hizmet-bolgeleri/${serviceAreas[index - 1].slug}`}
                className="group flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors"
              >
                <Icon name="arrowLeft" className="w-6 h-6 text-gray-400 group-hover:text-accent transition-all group-hover:-translate-x-1" strokeWidth={2} />
                <span>
                  <span className="block text-xs text-gray-400">Önceki Bölge</span>
                  <span className="block font-semibold text-dark group-hover:text-accent transition-colors">
                    {serviceAreas[index - 1].name}
                  </span>
                </span>
              </Link>
            ) : (
              <div />
            )}
            {index < serviceAreas.length - 1 && (
              <Link
                to={`/hizmet-bolgeleri/${serviceAreas[index + 1].slug}`}
                className="group flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors justify-end text-right"
              >
                <span>
                  <span className="block text-xs text-gray-400">Sonraki Bölge</span>
                  <span className="block font-semibold text-dark group-hover:text-accent transition-colors">
                    {serviceAreas[index + 1].name}
                  </span>
                </span>
                <Icon name="arrowRight" className="w-6 h-6 text-gray-400 group-hover:text-accent transition-all group-hover:translate-x-1" strokeWidth={2} />
              </Link>
            )}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
