import { useMemo } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import CTASection from '../components/CTASection'
import PageHeader from '../components/PageHeader'
import Icon from '../components/Icon'
import SmartImage from '../components/SmartImage'
import Seo from '../components/Seo'
import services from '../data/services'
import serviceContent from '../data/serviceContent'
import serviceAreas from '../data/serviceAreas'
import siteConfig from '../data/siteConfig'
import { whatsappUrl } from '../utils/links'

export default function ServiceDetail() {
  const { slug } = useParams()
  // Uzun metinler ayrı modülde (bkz. src/data/serviceContent.js) — bu sayfa
  // tembel yüklendiği için o metinler ana pakete girmiyor.
  // useMemo şart: her render yeni nesne üretilirse aşağıdaki JSON-LD useMemo'u
  // da her render yeniden çalışır ve <head> boş yere sürekli güncellenir.
  const service = useMemo(() => {
    const temel = services.find((s) => s.slug === slug)
    return temel ? { ...temel, ...(serviceContent[slug] ?? {}) } : undefined
  }, [slug])
  const currentIndex = services.findIndex((s) => s.slug === slug)

  // Service + FAQPage şeması. FAQPage, Google'da soru-cevap kutusu çıkarabilir.
  const jsonLd = useMemo(() => {
    if (!service) return null

    const hizmet = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.title,
      description: service.girisMetni?.[0] ?? service.description,
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

    if (!service.sss?.length) return hizmet

    return [
      hizmet,
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: service.sss.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      },
    ]
  }, [service])

  if (!service) {
    return <Navigate to="/hizmetler" replace />
  }

  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null
  const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : null
  const paragraflar = service.girisMetni ?? [service.description]

  return (
    <div className="page-enter">
      <Seo
        title={service.seoTitle ?? `Denizli ${service.title} — ${siteConfig.companyName}`}
        description={`Denizli ve çevre ilçelerde ${service.title.toLowerCase()} hizmeti. ${service.shortDescription} Ücretsiz keşif için ${siteConfig.phone}.`}
        path={`/hizmetler/${service.slug}/`}
        /* Sosyal önizleme görseli WebP değil JPG: WhatsApp WebP og:image ile
           kararsız. src/data/routeMeta.js ile aynı yol kullanılmalı. */
        image={`${siteConfig.url}/images/og/${service.slug}.jpg`}
        jsonLd={jsonLd}
      />

      <PageHeader
        align="left"
        breadcrumb={[{ label: 'Hizmetler', to: '/hizmetler' }, { label: service.title }]}
      >
        <div className="flex items-center gap-5 animate-fade-in-up">
          <div className="w-16 h-16 shrink-0 rounded-2xl gradient-primary flex items-center justify-center text-dark">
            <Icon name={service.icon} className="w-9 h-9" strokeWidth={1.75} />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              {siteConfig.address.city} {service.title}
            </h1>
            <p className="text-white/65 mt-2">{service.shortDescription}</p>
          </div>
        </div>
      </PageHeader>

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* ===== Ana içerik ===== */}
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
                  width="1200"
                  height="675"
                />
              </div>

              {/* Giriş metni */}
              <div className="mb-12">
                {paragraflar.map((p, i) => (
                  <p
                    key={p.slice(0, 40)}
                    className={`text-gray-600 leading-relaxed mb-5 ${i === 0 ? 'text-lg' : ''}`}
                  >
                    {p}
                  </p>
                ))}
              </div>

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

              {/* Süreç — sahada iş nasıl ilerliyor */}
              {service.surec?.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl gradient-accent text-white flex items-center justify-center shrink-0">
                      <Icon name="clipboard" className="w-5 h-5" strokeWidth={2} />
                    </span>
                    {service.title} Nasıl Yapılıyor?
                  </h2>

                  <ol className="relative space-y-6">
                    {/* Dikey bağlantı çizgisi */}
                    <span
                      className="absolute left-5 top-3 bottom-3 w-px bg-gray-200"
                      aria-hidden="true"
                    />
                    {service.surec.map((adim, i) => (
                      <li key={adim.baslik} className="relative flex items-start gap-5">
                        <span className="relative z-10 w-10 h-10 shrink-0 rounded-full bg-accent text-white font-bold flex items-center justify-center text-sm ring-4 ring-white">
                          {i + 1}
                        </span>
                        <span className="pt-1">
                          <span className="block font-bold text-dark mb-1.5">{adim.baslik}</span>
                          <span className="block text-gray-600 text-sm leading-relaxed">
                            {adim.aciklama}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Teknik derinlik bölümleri */}
              {service.detaylar?.map((bolum) => (
                <div key={bolum.baslik} className="mb-10">
                  <h2 className="text-xl font-bold text-dark mb-3 flex items-center gap-3">
                    <span className="w-8 h-0.5 bg-accent rounded-full shrink-0" aria-hidden="true" />
                    {bolum.baslik}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">{bolum.metin}</p>
                </div>
              ))}

              {/* Uygulama alanları */}
              <div className="mb-12 mt-12">
                <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                  <span className="w-10 h-10 rounded-xl gradient-accent text-white flex items-center justify-center shrink-0">
                    <Icon name="target" className="w-5 h-5" strokeWidth={2} />
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

              {/* Sık sorulanlar */}
              {service.sss?.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-dark mb-6 flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl gradient-accent text-white flex items-center justify-center shrink-0">
                      <Icon name="chat" className="w-5 h-5" strokeWidth={2} />
                    </span>
                    {service.title} Hakkında Sık Sorulanlar
                  </h2>
                  <div className="space-y-3">
                    {service.sss.map((item) => (
                      <details
                        key={item.q}
                        className="group rounded-xl border border-gray-100 bg-surface p-5 open:bg-accent/5 transition-colors"
                      >
                        <summary className="flex items-start justify-between gap-4 cursor-pointer font-semibold text-dark list-none">
                          <span>{item.q}</span>
                          <Icon
                            name="chevronDown"
                            className="w-5 h-5 shrink-0 mt-0.5 text-accent transition-transform group-open:rotate-180"
                            strokeWidth={2}
                          />
                        </summary>
                        <p className="text-gray-600 leading-relaxed mt-4">{item.a}</p>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* ===== Kenar çubuğu ===== */}
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
                  href={whatsappUrl(
                    `Merhaba, ${service.title} hizmeti hakkında bilgi almak istiyorum.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full border-white/25 text-white hover:bg-green-600 hover:border-green-600 hover:text-white"
                >
                  <Icon name="whatsapp" className="w-5 h-5" />
                  WhatsApp
                </a>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <h3 className="text-white/60 text-xs font-semibold uppercase tracking-wider mb-4">
                    Diğer Hizmetler
                  </h3>
                  <div className="space-y-1">
                    {services
                      .filter((s) => s.slug !== slug)
                      .slice(0, 6)
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

          {/* Hizmet bölgeleri — iç link ağı */}
          <div className="mt-16 pt-10 border-t border-gray-100">
            <h2 className="text-2xl font-bold text-dark mb-2">
              {service.title} Hizmeti Verdiğimiz Bölgeler
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              {siteConfig.address.city} il genelinde {serviceAreas.length} ilçede{' '}
              {service.title.toLowerCase()} hizmeti veriyoruz. Bulunduğunuz ilçeye tıklayın.
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
                <span>
                  <span className="block text-xs text-gray-400">Önceki Hizmet</span>
                  <span className="block font-semibold text-dark group-hover:text-accent transition-colors">
                    {prevService.title}
                  </span>
                </span>
              </Link>
            ) : (
              <div />
            )}

            {nextService && (
              <Link
                to={`/hizmetler/${nextService.slug}`}
                className="group flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors text-right justify-end"
              >
                <span>
                  <span className="block text-xs text-gray-400">Sonraki Hizmet</span>
                  <span className="block font-semibold text-dark group-hover:text-accent transition-colors">
                    {nextService.title}
                  </span>
                </span>
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
