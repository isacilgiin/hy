import { useMemo } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import CTASection from '../components/CTASection'
import PageHeader from '../components/PageHeader'
import Icon from '../components/Icon'
import Seo from '../components/Seo'
import SmartImage from '../components/SmartImage'
import siteConfig from '../data/siteConfig'
import services from '../data/services'
import blog from '../data/blog'
import blogContent from '../data/blogContent'
import { tarihYaz } from './Blog'

export default function BlogPost() {
  const { slug } = useParams()
  const yazi = blog.find((y) => y.slug === slug)
  const icerik = blogContent[slug]

  /**
   * Article + FAQPage şeması.
   *
   * Article'da `author` ve `publisher` firmanın kendisi: yazıyı sahada çalışan
   * ekip yazıyor, dışarıdan bir yazar yok. Uydurma bir yazar adı koymuyoruz.
   */
  const jsonLd = useMemo(() => {
    if (!yazi || !icerik) return null

    const makale = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: yazi.title,
      description: yazi.description,
      image: `${siteConfig.url}${yazi.image}`,
      datePublished: yazi.tarih,
      dateModified: yazi.tarih,
      author: { '@type': 'Organization', name: siteConfig.companyName, url: `${siteConfig.url}/` },
      publisher: {
        '@type': 'Organization',
        name: siteConfig.companyName,
        url: `${siteConfig.url}/`,
      },
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `${siteConfig.url}/blog/${yazi.slug}/`,
      },
    }

    if (!icerik.sss?.length) return makale

    return [
      makale,
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: icerik.sss.map((s) => ({
          '@type': 'Question',
          name: s.q,
          acceptedAnswer: { '@type': 'Answer', text: s.a },
        })),
      },
    ]
  }, [yazi, icerik])

  // Diğer yazılar — döngüsel seçim, böylece her yazı eşit sayıda iç link alır
  const digerYazilar = useMemo(() => {
    const i = blog.findIndex((y) => y.slug === slug)
    if (i < 0) return []
    return Array.from({ length: 3 }, (_, k) => blog[(i + k + 1) % blog.length])
  }, [slug])

  if (!yazi || !icerik) return <Navigate to="/blog/" replace />

  const ilgili = services.filter((s) => (icerik.ilgiliHizmetler ?? []).includes(s.slug))

  return (
    <div className="page-enter">
      <Seo
        title={icerik.seoTitle}
        description={yazi.description}
        path={`/blog/${yazi.slug}/`}
        image={`${siteConfig.url}${yazi.image}`}
        jsonLd={jsonLd}
      />

      <PageHeader
        align="left"
        breadcrumb={[{ label: 'Blog', to: '/blog/' }, { label: yazi.title }]}
      >
        <div className="max-w-3xl animate-fade-in-up">
          <span className="inline-block px-3 py-1 rounded-full bg-primary/15 text-primary text-xs font-semibold mb-5">
            {yazi.kategori}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
            {yazi.title}
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/60 text-sm">
            <span className="inline-flex items-center gap-2">
              <Icon name="calendar" className="w-4 h-4" strokeWidth={2} />
              <time dateTime={yazi.tarih}>{tarihYaz(yazi.tarih)}</time>
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon name="clock" className="w-4 h-4" strokeWidth={2} />
              {yazi.okumaSuresi} dakika okuma
            </span>
          </div>
        </div>
      </PageHeader>

      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          {/* Kapak */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/9] mb-10 shadow-lg">
            <SmartImage
              src={yazi.image}
              alt={yazi.title}
              width="1200"
              height="675"
              loading="eager"
              fetchPriority="high"
              sizes="(min-width: 768px) 768px, 92vw"
              srcSet={`${yazi.image.replace('.webp', '-600.webp')} 600w, ${yazi.image.replace(
                '.webp',
                '-900.webp'
              )} 900w, ${yazi.image} 1200w`}
              className="absolute inset-0 w-full h-full"
            />
          </div>

          {/* Giriş */}
          {icerik.giris.map((p, i) => (
            <p
              key={p.slice(0, 40)}
              className={`text-gray-600 leading-relaxed mb-5 ${i === 0 ? 'text-lg' : ''}`}
            >
              {p}
            </p>
          ))}

          {/* Bölümler */}
          {icerik.bolumler.map((bolum) => (
            <div key={bolum.baslik} className="mt-12">
              <h2 className="text-2xl font-bold text-dark mb-4">{bolum.baslik}</h2>

              {bolum.paragraflar?.map((p) => (
                <p key={p.slice(0, 40)} className="text-gray-600 leading-relaxed mb-5">
                  {p}
                </p>
              ))}

              {bolum.liste && (
                <ul className="space-y-3 mb-5">
                  {bolum.liste.map((madde) => (
                    <li key={madde.slice(0, 40)} className="flex items-start gap-3">
                      <span
                        className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2.5"
                        aria-hidden="true"
                      />
                      <span className="text-gray-600 leading-relaxed">{madde}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* SSS */}
          {icerik.sss?.length > 0 && (
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-dark mb-6">Sık Sorulanlar</h2>
              <div className="space-y-3">
                {icerik.sss.map((item) => (
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

          {/* İlgili hizmetler — yazıdan hizmet sayfasına iç link */}
          {ilgili.length > 0 && (
            <div className="mt-14 rounded-2xl bg-surface p-6 sm:p-8">
              <h2 className="text-lg font-bold text-dark mb-5">Bu yazıyla ilgili hizmetlerimiz</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {ilgili.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/hizmetler/${s.slug}/`}
                    className="flex items-center gap-3 p-4 rounded-xl bg-white hover:bg-accent/5 transition-colors group"
                  >
                    <span className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                      <Icon name={s.icon} className="w-5 h-5" />
                    </span>
                    <span className="font-semibold text-dark text-sm group-hover:text-accent transition-colors">
                      {siteConfig.address.city} {s.title}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Diğer yazılar */}
      <section className="section-padding bg-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-dark mb-8">Diğer Yazılar</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {digerYazilar.map((y) => (
              <Link
                key={y.slug}
                to={`/blog/${y.slug}/`}
                className="group rounded-2xl bg-white p-6 card-hover"
              >
                <span className="text-accent text-xs font-semibold">{y.kategori}</span>
                <h3 className="font-bold text-dark mt-2 mb-2 group-hover:text-accent transition-colors">
                  {y.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{y.ozet}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
