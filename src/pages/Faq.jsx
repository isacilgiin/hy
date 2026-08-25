import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection'
import PageHeader from '../components/PageHeader'
import Icon from '../components/Icon'
import Seo from '../components/Seo'
import siteConfig from '../data/siteConfig'
import { faq, faqCategories } from '../data/faq'
import { whatsappUrl } from '../utils/links'

export default function Faq() {
  const [acikKategori, setAcikKategori] = useState('hepsi')

  const gruplar = useMemo(
    () =>
      faqCategories
        .map((k) => ({ ...k, sorular: faq.filter((f) => f.kategori === k.id) }))
        .filter((k) => k.sorular.length > 0),
    []
  )

  const gorunen =
    acikKategori === 'hepsi' ? gruplar : gruplar.filter((g) => g.id === acikKategori)

  // FAQPage şeması — Google'da soru-cevap kutusu çıkarabilir
  const jsonLd = useMemo(
    () => ({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    }),
    []
  )

  return (
    <div className="page-enter">
      <Seo
        title={`Halı Yıkama SSS | ${siteConfig.companyShortName}`}
        description={`Halı, koltuk ve perde yıkama hakkında en çok sorulan ${faq.length} soru ve cevabı. Teslim süresi, leke, servis, ödeme ve halı cinsine göre program.`}
        path="/sikca-sorulan-sorular/"
        jsonLd={jsonLd}
      />

      <PageHeader
        title="Sıkça Sorulan Sorular"
        description="Müşterilerimizin en çok sorduğu soruları ve dürüst cevaplarını bir araya getirdik."
        breadcrumb={[{ label: 'Sıkça Sorulan Sorular' }]}
      />

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Kategori filtresi */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <button
              type="button"
              onClick={() => setAcikKategori('hepsi')}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                acikKategori === 'hepsi'
                  ? 'bg-accent text-white'
                  : 'bg-surface text-gray-600 hover:bg-accent/10 hover:text-accent'
              }`}
            >
              Tümü ({faq.length})
            </button>
            {gruplar.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setAcikKategori(g.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
                  acikKategori === g.id
                    ? 'bg-accent text-white'
                    : 'bg-surface text-gray-600 hover:bg-accent/10 hover:text-accent'
                }`}
              >
                {g.title} ({g.sorular.length})
              </button>
            ))}
          </div>

          {/* Sorular */}
          <div className="space-y-12">
            {gorunen.map((grup) => (
              <div key={grup.id}>
                <h2 className="flex items-center gap-3 text-xl font-bold text-dark mb-5">
                  <span className="w-8 h-0.5 bg-accent rounded-full" aria-hidden="true" />
                  {grup.title}
                </h2>

                <div className="space-y-3">
                  {grup.sorular.map((item) => (
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
            ))}
          </div>

          {/* Cevabını bulamadınız mı */}
          <div className="mt-16 rounded-3xl gradient-dark p-8 sm:p-12 text-center">
            <div className="w-16 h-16 mx-auto mb-5 rounded-2xl bg-white/5 text-primary flex items-center justify-center">
              <Icon name="chat" className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">Aradığınız Cevap Yok mu?</h2>
            <p className="text-white/60 max-w-xl mx-auto mb-8">
              Halınızın durumu özelse telefonla anlatın ya da WhatsApp&apos;tan fotoğraf gönderin —
              hangi program uygulanır, ne kadar sürer, ne kadar tutar, hemen söyleyelim.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href={`tel:${siteConfig.phoneRaw}`} className="btn-primary text-lg px-8 py-3.5">
                <Icon name="phone" className="w-5 h-5" strokeWidth={2} />
                {siteConfig.phone}
              </a>
              <a
                href={whatsappUrl('Merhaba, bir sorum olacaktı.')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline border-white/30 text-white hover:bg-green-600 hover:border-green-600 hover:text-white text-lg px-8 py-3.5"
              >
                <Icon name="whatsapp" className="w-5 h-5" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Hizmetlere iç link */}
          <p className="mt-10 text-center text-gray-600 text-sm">
            Hizmetlerimizin ayrıntılarını{' '}
            <Link to="/hizmetler/" className="text-accent font-semibold hover:underline inline-block py-1">
              hizmetler sayfasından
            </Link>{' '}
            inceleyebilir, bölgenizdeki çalışmalarımız için{' '}
            <Link to="/hizmet-bolgeleri/" className="text-accent font-semibold hover:underline inline-block py-1">
              hizmet bölgelerine
            </Link>{' '}
            bakabilirsiniz.
          </p>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
