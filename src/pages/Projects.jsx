import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ProjectGallery from '../components/ProjectGallery'
import CTASection from '../components/CTASection'

export default function Projects() {
  useEffect(() => {
    document.title = 'Projelerimiz | Güçlü Karot — Denizli Beton Delme, Kesme, Kırma'
  }, [])

  return (
    <div className="page-enter">
      {/* Header */}
      <section className="gradient-hero pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary/20 blur-[100px]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 animate-fade-in-up">
            Projelerimiz
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto animate-fade-in-up delay-200">
            Denizli ve çevresinde başarıyla tamamladığımız projelerden örnekler.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-white/40 text-sm animate-fade-in-up delay-300">
            <Link to="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-primary">Projeler</span>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <ProjectGallery />
        </div>
      </section>

      <CTASection />
    </div>
  )
}
