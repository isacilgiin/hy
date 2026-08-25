import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection'
import PageHeader from '../components/PageHeader'
import Icon from '../components/Icon'
import Seo from '../components/Seo'
import SmartImage from '../components/SmartImage'
import siteConfig from '../data/siteConfig'
import blog from '../data/blog'

/** "2026-08-12" -> "12 Ağustos 2026" */
const AYLAR = [
  'Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
  'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık',
]
export function tarihYaz(iso) {
  const [y, a, g] = String(iso).split('-').map(Number)
  return `${g} ${AYLAR[a - 1]} ${y}`
}

export default function Blog() {
  // Yeniden eskiye. Kaynak dizi bozulmasın diye kopya üzerinde sıralanıyor.
  const yazilar = [...blog].sort((a, b) => b.tarih.localeCompare(a.tarih))

  return (
    <div className="page-enter">
      <Seo
        title={`Halı Yıkama Rehberleri | Blog — ${siteConfig.companyShortName}`}
        description="Halı, koltuk ve perde yıkama hakkında sahadan yazılmış rehberler. Fiyatı ne belirler, leke nasıl çıkar, halı yıkamacı seçerken nelere bakılır."
        path="/blog/"
      />

      <PageHeader
        title="Blog"
        description="Halı ve tekstil temizliğini merak eden herkes için sahadan yazılmış rehberler. Satış broşürü değil; işi anlatan yazılar."
        breadcrumb={[{ label: 'Blog' }]}
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {yazilar.map((yazi, i) => (
              <Link
                key={yazi.slug}
                to={`/blog/${yazi.slug}/`}
                className="group flex flex-col rounded-2xl overflow-hidden bg-surface card-hover animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <SmartImage
                    src={yazi.image}
                    alt={yazi.title}
                    width="1200"
                    height="675"
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 92vw"
                    srcSet={`${yazi.image.replace('.webp', '-600.webp')} 600w, ${yazi.image.replace(
                      '.webp',
                      '-900.webp'
                    )} 900w, ${yazi.image} 1200w`}
                    className="absolute inset-0 w-full h-full"
                    imgClassName="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-dark/80 text-primary text-xs font-semibold">
                    {yazi.kategori}
                  </span>
                </div>

                <div className="flex flex-col flex-1 p-6">
                  <div className="flex items-center gap-3 text-gray-600 text-xs mb-3">
                    <span>{tarihYaz(yazi.tarih)}</span>
                    <span aria-hidden="true">·</span>
                    <span>{yazi.okumaSuresi} dk okuma</span>
                  </div>

                  <h2 className="text-xl font-bold text-dark mb-3 group-hover:text-accent transition-colors">
                    {yazi.title}
                  </h2>

                  <p className="text-gray-600 text-sm leading-relaxed flex-1">{yazi.ozet}</p>

                  <span className="inline-flex items-center gap-2 text-accent font-semibold text-sm mt-5">
                    Yazıyı oku
                    <Icon
                      name="arrowRight"
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      strokeWidth={2}
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
