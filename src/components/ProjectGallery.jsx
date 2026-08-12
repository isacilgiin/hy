import { useState, useCallback, lazy, Suspense } from 'react'

/**
 * Lightbox yalnızca bir görsele tıklanınca indirilir. Önceden ana pakete
 * dahildi ve proje galerisi boş olsa bile ~38 KB yer kaplıyordu.
 */
const Lightbox = lazy(async () => {
  await import('yet-another-react-lightbox/styles.css')
  return import('yet-another-react-lightbox')
})
import projects from '../data/projects'
import Icon from './Icon'
import SmartImage from './SmartImage'

/** Gerçek fotoğraf yüklenemediğinde lightbox'ta gösterilecek tasarım karesi. */
function placeholderSlide(project) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
    <rect width="1200" height="900" fill="#14100F"/>
    <circle cx="880" cy="720" r="320" fill="#6E1B2E" opacity="0.35"/>
    <circle cx="300" cy="200" r="240" fill="#C8A24A" opacity="0.08"/>
    <circle cx="600" cy="420" r="86" fill="none" stroke="#C8A24A" stroke-width="6"/>
    <circle cx="600" cy="420" r="36" fill="none" stroke="#C8A24A" stroke-width="6"/>
    <text x="600" y="560" fill="#F2EDE7" font-size="34" font-family="sans-serif" text-anchor="middle">${project.title.replace(/&/g, '&amp;').replace(/</g, '&lt;')}</text>
    <text x="600" y="606" fill="#C8A24A" font-size="22" font-family="sans-serif" text-anchor="middle">${project.category}</text>
  </svg>`
  return `data:image/svg+xml,${encodeURIComponent(svg)}`
}

export default function ProjectGallery({ limit }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  // Hangi fotoğrafların gerçekten yüklenemediğini takip et; lightbox'a
  // kırık görsel yerine tasarım karesi verilsin.
  const [failedIds, setFailedIds] = useState(() => new Set())

  const displayProjects = limit ? projects.slice(0, limit) : projects

  const markFailed = useCallback((id) => {
    setFailedIds((prev) => {
      if (prev.has(id)) return prev
      const next = new Set(prev)
      next.add(id)
      return next
    })
  }, [])

  const openLightbox = (index) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  // projects.js boşaltılırsa galeri hiç render edilmez — sayfada boş yer
  // tutucular görünmez. Fotoğraflar hazır olunca diziyi doldurmanız yeterli.
  // (Tüm hook'lardan SONRA — koşullu hook çağrısı React kuralını bozar.)
  if (displayProjects.length === 0) return null

  const slides = displayProjects.map((p) => ({
    src: failedIds.has(p.id) ? placeholderSlide(p) : p.image,
    alt: p.title,
    title: p.title,
    description: p.category,
  }))

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayProjects.map((project, idx) => (
          <button
            key={project.id}
            type="button"
            onClick={() => openLightbox(idx)}
            aria-label={`${project.title} — büyüt`}
            className="group relative rounded-2xl overflow-hidden cursor-pointer card-hover aspect-[4/3] w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <SmartImage
              src={project.image}
              srcSet={`${project.image.replace('.webp', '-800.webp')} 800w, ${project.image} 1600w`}
              sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 92vw"
              alt={project.title}
              icon={project.icon}
              label={project.category}
              width="1600"
              height="1200"
              className="absolute inset-0 w-full h-full"
              imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onFail={() => markFailed(project.id)}
            />

            {/* Temsili görsel etiketi — bu kare firmanın tamamladığı bir işin
                fotoğrafı değil; yöntemi anlatan örnek bir görsel. Gerçek saha
                fotoğrafı eklendiğinde projects.js'te temsili:false yapılır. */}
            {project.temsili && (
              <span className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-md bg-dark/75 backdrop-blur-sm text-white/85 text-[11px] font-medium tracking-wide">
                Temsili görsel
              </span>
            )}

            {/* Hover katmanı */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/40 to-transparent opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-all duration-500 flex flex-col justify-end p-5">
              <span className="text-primary text-xs font-semibold uppercase tracking-wider mb-1">
                {project.category}
              </span>
              <h3 className="text-white font-bold text-lg leading-tight">{project.title}</h3>
              <span className="mt-3 flex items-center gap-2 text-white/70 text-sm">
                <Icon name="zoomIn" className="w-4 h-4" strokeWidth={2} />
                Büyütmek için tıklayın
              </span>
            </div>
          </button>
        ))}
      </div>

      {lightboxOpen && (
        <Suspense fallback={null}>
          <Lightbox
            open
            close={() => setLightboxOpen(false)}
            index={lightboxIndex}
            slides={slides}
          />
        </Suspense>
      )}
    </>
  )
}
