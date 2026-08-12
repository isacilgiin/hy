import { useState } from 'react'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'

// Placeholder proje görselleri — gerçek görseller sonra eklenecek
const projects = [
  { id: 1, title: 'Beton Delme — Tesisat Geçişi', category: 'Beton Delme', color: '#2563EB' },
  { id: 2, title: 'Duvar Kesimi — Kapı Açıklığı', category: 'Beton Kesme', color: '#DC2626' },
  { id: 3, title: 'Temel Kırım — Tadilat', category: 'Beton Kırma', color: '#059669' },
  { id: 4, title: 'Asfalt Derz Kesimi', category: 'Asfalt Kesim', color: '#7C3AED' },
  { id: 5, title: 'Hidrolik Kesim — Köprü', category: 'Hidrolik Kesme', color: '#EA580C' },
  { id: 6, title: 'Filiz Ekimi — Güçlendirme', category: 'Filiz Ekimi', color: '#0891B2' },
]

// Placeholder SVG generator (gerçek görseller eklenene kadar)
function ProjectPlaceholder({ project, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group relative rounded-2xl overflow-hidden cursor-pointer card-hover aspect-[4/3]"
    >
      {/* Placeholder Background */}
      <div
        className="absolute inset-0 flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${project.color}33, ${project.color}11)` }}
      >
        <div className="text-center p-4">
          <div className="text-5xl mb-3 opacity-30">🔩</div>
          <div className="text-sm font-medium opacity-40" style={{ color: project.color }}>
            Proje Görseli
          </div>
        </div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-5">
        <span className="text-primary text-xs font-semibold uppercase tracking-wider mb-1">
          {project.category}
        </span>
        <h3 className="text-white font-bold text-lg leading-tight">
          {project.title}
        </h3>
        <div className="mt-3 flex items-center gap-2 text-white/60 text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
          </svg>
          Büyütmek için tıklayın
        </div>
      </div>
    </div>
  )
}

export default function ProjectGallery({ limit }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const displayProjects = limit ? projects.slice(0, limit) : projects

  const openLightbox = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  // YARL için slide'lar — gerçek görseller eklendiğinde src güncellenir
  const slides = displayProjects.map(p => ({
    src: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect fill="${p.color}22" width="800" height="600"/><text fill="${p.color}" x="400" y="280" text-anchor="middle" font-size="24" font-family="sans-serif">${p.title}</text><text fill="${p.color}88" x="400" y="320" text-anchor="middle" font-size="16" font-family="sans-serif">${p.category}</text></svg>`)}`,
    alt: p.title,
    title: p.title,
  }))

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayProjects.map((project, idx) => (
          <ProjectPlaceholder
            key={project.id}
            project={project}
            onClick={() => openLightbox(idx)}
          />
        ))}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
      />
    </>
  )
}
