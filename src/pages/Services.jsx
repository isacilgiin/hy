import ServiceCard from '../components/ServiceCard'
import CTASection from '../components/CTASection'
import PageHeader from '../components/PageHeader'
import Seo from '../components/Seo'
import services from '../data/services'
import siteConfig from '../data/siteConfig'

export default function Services() {
  return (
    <div className="page-enter">
      <Seo
        title={`Karot Hizmetleri | Denizli Beton Delme ve Kesme — ${siteConfig.companyName}`}
        description="Denizli'de karot, beton delme, beton kesme, beton kırma, filiz ekimi, ankraj ve kimyasal dübel hizmetleri. Ücretsiz keşif ve net fiyat teklifi."
        path="/hizmetler/"
      />

      <PageHeader
        title="Hizmetlerimiz"
        description="Profesyonel karot ve kesme ekipmanlarımızla sunduğumuz kapsamlı beton delme, kesme ve kırma hizmetleri."
        breadcrumb={[{ label: 'Hizmetler' }]}
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <ServiceCard key={service.id} service={service} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
