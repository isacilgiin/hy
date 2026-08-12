import { useEffect } from 'react'
import ProjectGallery from '../components/ProjectGallery'
import CTASection from '../components/CTASection'
import PageHeader from '../components/PageHeader'
import siteConfig from '../data/siteConfig'

export default function Projects() {
  useEffect(() => {
    document.title = `Projelerimiz | ${siteConfig.companyName} — Denizli Beton Delme, Kesme, Kırma`
  }, [])

  return (
    <div className="page-enter">
      <PageHeader
        title="Projelerimiz"
        description="Denizli ve çevresinde başarıyla tamamladığımız projelerden örnekler."
        breadcrumb={[{ label: 'Projeler' }]}
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <ProjectGallery />
        </div>
      </section>

      <CTASection />
    </div>
  )
}
