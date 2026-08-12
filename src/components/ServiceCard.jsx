import { Link } from 'react-router-dom'
import Icon from './Icon'
import SmartImage from './SmartImage'

export default function ServiceCard({ service, index = 0 }) {
  const delayClass = `delay-${((index % 4) + 1) * 100}`

  return (
    <Link
      to={`/hizmetler/${service.slug}/`}
      className={`animate-fade-in-up ${delayClass} group relative flex flex-col bg-white rounded-2xl card-hover border border-gray-100 overflow-hidden`}
    >
      {/* Görsel */}
      <div className="relative aspect-[16/10] overflow-hidden bg-dark">
        <SmartImage
          src={service.image}
          /* Kart en fazla ~380px genişlikte görünüyor; 1200px görsel indirmek
             boşuna. Tarayıcı srcset'ten uygun olanı seçer. */
          srcSet={`${service.image.replace('.webp', '-600.webp')} 600w, ${service.image} 1200w`}
          sizes="(min-width: 1024px) 300px, (min-width: 640px) 45vw, 92vw"
          alt={service.title}
          icon={service.icon}
          label={service.shortTitle}
          width="1200"
          height="675"
          className="absolute inset-0 w-full h-full"
          imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/70 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />

        {/* İkon rozeti */}
        <div className="absolute bottom-3 left-3 w-11 h-11 rounded-xl gradient-primary flex items-center justify-center shadow-lg">
          <Icon name={service.icon} className="w-6 h-6 text-dark" strokeWidth={1.75} />
        </div>
      </div>

      {/* Üst vurgu çizgisi */}
      <div className="absolute top-0 left-0 right-0 h-1 gradient-accent transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-10" />

      {/* İçerik */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-accent transition-colors">
          {service.title}
        </h3>

        <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">
          {service.shortDescription}
        </p>

        <span className="flex items-center gap-2 text-accent font-semibold text-sm">
          Detaylı Bilgi
          <Icon
            name="arrowRight"
            className="w-4 h-4 transition-transform group-hover:translate-x-1.5"
            strokeWidth={2}
          />
        </span>
      </div>
    </Link>
  )
}
