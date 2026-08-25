import PageHeader from '../components/PageHeader'
import Icon from '../components/Icon'
import Seo from '../components/Seo'
import siteConfig from '../data/siteConfig'
import metaMetinleri from '../data/metaMetinleri'
import { mapsUrl } from '../utils/links'

/**
 * Gizlilik Politikası ve Şartlar & Koşullar sayfalarının ortak şablonu.
 * İçerik src/data/legal.js dosyasından gelir.
 */
export default function Legal({ sayfa }) {
  return (
    <div className="page-enter">
      <Seo
        title={metaMetinleri.yasal.baslik(sayfa.baslik)}
        description={sayfa.ozet}
        path={`/${sayfa.slug}/`}
      />

      <PageHeader
        title={sayfa.baslik}
        description={sayfa.ozet}
        breadcrumb={[{ label: sayfa.baslik }]}
      />

      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-10">
            {sayfa.bolumler.map((bolum) => (
              <div key={bolum.baslik}>
                <h2 className="flex items-center gap-3 text-xl font-bold text-dark mb-4">
                  <span className="w-8 h-0.5 bg-accent rounded-full shrink-0" aria-hidden="true" />
                  {bolum.baslik}
                </h2>

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  {bolum.paragraflar?.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}

                  {bolum.liste && (
                    <ul className="space-y-2.5 pl-1">
                      {bolum.liste.map((madde) => (
                        <li key={madde.slice(0, 40)} className="flex items-start gap-3">
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2.5"
                            aria-hidden="true"
                          />
                          <span>{madde}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {bolum.sonParagraflar?.map((p) => (
                    <p key={p.slice(0, 40)}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* İletişim kutusu */}
          <div className="mt-14 rounded-2xl bg-surface p-6 sm:p-8">
            <h2 className="font-bold text-dark text-lg mb-4">İletişim</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Bu sayfayla ilgili her türlü soru ve talebiniz için:
            </p>
            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-3 text-gray-600">
                <Icon name="building" className="w-5 h-5 shrink-0 text-accent" strokeWidth={2} />
                <span>{siteConfig.companyName}</span>
              </p>
              <a
                href={`tel:${siteConfig.phoneRaw}`}
                className="flex items-start gap-3 text-gray-600 hover:text-accent transition-colors py-1"
              >
                <Icon name="phone" className="w-5 h-5 shrink-0 text-accent" strokeWidth={2} />
                <span>{siteConfig.phone}</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-start gap-3 text-gray-600 hover:text-accent transition-colors py-1"
              >
                <Icon name="mail" className="w-5 h-5 shrink-0 text-accent" strokeWidth={2} />
                <span className="break-all">{siteConfig.email}</span>
              </a>
              <a
                href={mapsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 text-gray-600 hover:text-accent transition-colors py-1"
              >
                <Icon name="mapPin" className="w-5 h-5 shrink-0 text-accent" strokeWidth={2} />
                <span>{siteConfig.address.full}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
