import { Link } from 'react-router-dom'

export default function ServiceCard({ service, index = 0 }) {
  const delayClass = `delay-${(index % 4 + 1) * 100}`

  return (
    <Link
      to={`/hizmetler/${service.slug}`}
      className={`animate-fade-in-up ${delayClass} group relative bg-white rounded-2xl p-7 card-hover border border-gray-100 overflow-hidden`}
    >
      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-dark transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

      <div className="relative">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-2xl mb-5 group-hover:bg-primary/20 transition-colors">
          {service.icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-dark mb-3 group-hover:text-primary transition-colors">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed mb-5">
          {service.shortDescription}
        </p>

        {/* Arrow Link */}
        <div className="flex items-center gap-2 text-primary font-semibold text-sm">
          <span>Detaylı Bilgi</span>
          <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </Link>
  )
}
