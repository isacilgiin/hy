import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Icon from '../components/Icon'
import Seo from '../components/Seo'
import siteConfig from '../data/siteConfig'
import services from '../data/services'

/**
 * 404 sayfası.
 *
 * Eski WordPress sitesinden gelen ve karşılığı olmayan bir adrese düşen ziyaretçi
 * boş ekranla karşılaşmasın diye var. Sunucu tarafındaki 301 yönlendirmeleri
 * (public/.htaccess) bilinen eski URL'lerin çoğunu zaten doğru sayfaya taşıyor;
 * burası son güvenlik ağı.
 */
export default function NotFound() {
  return (
    <div className="page-enter">
      <Seo
        title={`Sayfa Bulunamadı | ${siteConfig.companyName}`}
        description="Aradığınız sayfa bulunamadı. Hizmetlerimize göz atabilir veya bize doğrudan ulaşabilirsiniz."
        path="/404/"
      />

      <PageHeader
        title="Sayfa Bulunamadı"
        description="Aradığınız sayfa taşınmış veya kaldırılmış olabilir. Aşağıdan devam edebilirsiniz."
        breadcrumb={[{ label: '404' }]}
      />

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title text-dark mb-4">
            Ne <span className="text-gradient-accent">arıyordunuz</span>?
          </h2>
          <p className="section-subtitle mb-10">
            Aşağıdaki hizmetlerden birine geçebilir ya da doğrudan bizi arayabilirsiniz.
          </p>

          <div className="grid sm:grid-cols-2 gap-3 text-left mb-12">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/hizmetler/${s.slug}`}
                className="flex items-center gap-3 p-4 rounded-xl bg-surface hover:bg-accent/5 transition-colors group"
              >
                <span className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                  <Icon name={s.icon} className="w-5 h-5" />
                </span>
                <span className="font-semibold text-dark text-sm group-hover:text-accent transition-colors">
                  {s.title}
                </span>
              </Link>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/" className="btn-primary">
              <Icon name="arrowLeft" className="w-5 h-5" strokeWidth={2} />
              Ana Sayfaya Dön
            </Link>
            <a href={`tel:${siteConfig.phoneRaw}`} className="btn-outline-accent">
              <Icon name="phone" className="w-5 h-5" strokeWidth={2} />
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
