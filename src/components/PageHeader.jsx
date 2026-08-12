import { Link } from 'react-router-dom'

/**
 * İç sayfaların ortak üst bloğu (koyu zemin + başlık + breadcrumb).
 *
 * `pt-32` kritik: header `position: fixed` olduğu için içerik onun altında
 * kalmasın diye üstten boşluk bırakılır.
 *
 * <PageHeader title="Hizmetlerimiz" description="..."
 *   breadcrumb={[{ label: 'Hizmetler' }]} />
 */
export default function PageHeader({ title, description, breadcrumb = [], align = 'center', children }) {
  const centered = align === 'center'

  return (
    <section className="gradient-hero pt-32 pb-20 relative overflow-hidden">
      {/* Işıma katmanları */}
      <div className="absolute inset-0 opacity-40" aria-hidden="true">
        <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-accent/25 blur-[110px]" />
        <div className="absolute -bottom-20 left-0 w-72 h-72 rounded-full bg-primary/10 blur-[90px]" />
      </div>

      <div
        className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${centered ? 'text-center' : ''}`}
      >
        {children ?? (
          <>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 animate-fade-in-up">
              {title}
            </h1>
            {description && (
              <p
                className={`text-white/65 text-lg max-w-2xl animate-fade-in-up delay-200 ${
                  centered ? 'mx-auto' : ''
                }`}
              >
                {description}
              </p>
            )}
          </>
        )}

        {breadcrumb.length > 0 && (
          <nav
            aria-label="Sayfa yolu"
            className={`mt-6 flex items-center gap-2 text-white/45 text-sm animate-fade-in-up delay-300 ${
              centered ? 'justify-center' : ''
            }`}
          >
            <Link to="/" className="hover:text-primary transition-colors inline-block py-1">
              Ana Sayfa
            </Link>
            {breadcrumb.map((crumb, idx) => (
              <span key={crumb.label} className="flex items-center gap-2">
                <span aria-hidden="true">/</span>
                {crumb.to && idx < breadcrumb.length - 1 ? (
                  <Link to={crumb.to} className="hover:text-primary transition-colors inline-block py-1">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-primary">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
      </div>
    </section>
  )
}
