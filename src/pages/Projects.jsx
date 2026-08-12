import ProjectGallery from '../components/ProjectGallery'
import CTASection from '../components/CTASection'
import PageHeader from '../components/PageHeader'
import Seo from '../components/Seo'
import Icon from '../components/Icon'
import siteConfig from '../data/siteConfig'
import projects from '../data/projects'

export default function Projects() {
  return (
    <div className="page-enter">
      <Seo
        title={`Uygulama Alanları | Denizli Karot ve Beton Kesme — ${siteConfig.companyName}`}
        description="Karot, beton delme, kesme, kırma ve filiz ekiminin sahada nasıl göründüğü. Hangi işte hangi yöntemin kullanıldığını görselleriyle anlattık."
        path="/projeler/"
      />

      <PageHeader
        title="Uygulama Alanları"
        description="Hangi işte hangi yöntemi kullandığımızı görselleriyle anlattık."
        breadcrumb={[{ label: 'Uygulama Alanları' }]}
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          {projects.length > 0 ? (
            <>
              {/* H2 şart: H1'den kart H3'üne atlama olmasın */}
              <div className="text-center mb-12">
                <h2 className="section-title text-dark">
                  Sahada <span className="text-gradient-accent">Nasıl Görünüyor?</span>
                </h2>
                <p className="section-subtitle">
                  Hangi işte hangi yöntemin kullanıldığını görselleriyle anlattık.
                </p>
              </div>
              <ProjectGallery />
            </>
          ) : (
            <div className="max-w-xl mx-auto text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-accent/10 text-accent flex items-center justify-center">
                <Icon name="camera" className="w-10 h-10" strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl font-bold text-dark mb-3">Proje Fotoğrafları Yakında</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Tamamladığımız işlerin fotoğraflarını bu sayfada paylaşacağız. Bu arada
                yaptığımız işler hakkında bilgi almak için doğrudan bize ulaşabilirsiniz.
              </p>
              <a href={`tel:${siteConfig.phoneRaw}`} className="btn-primary">
                <Icon name="phone" className="w-5 h-5" strokeWidth={2} />
                {siteConfig.phone}
              </a>
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </div>
  )
}
