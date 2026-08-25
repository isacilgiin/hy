import { useState } from 'react'
import Icon from './Icon'

/**
 * Görsel yoksa kırık ikon yerine tasarlanmış bir yer tutucu gösteren <img>.
 *
 * Gerçek fotoğraflar public/images/... altına atılana kadar site "eksik"
 * değil, "kasıtlı tasarım" gibi görünür. Dosya eklendiği anda otomatik
 * olarak gerçek görsel devreye girer — kodda değişiklik gerekmez.
 *
 * <SmartImage src="/images/hizmetler/hali-yikama.webp" alt="Halı yıkama"
 *             icon="carpetRoll" label="Halı Yıkama" className="w-full h-full" />
 */
export default function SmartImage({
  src,
  alt = '',
  icon = 'carpetRoll',
  label,
  className = '',
  imgClassName = 'w-full h-full object-cover',
  loading = 'lazy',
  width,
  height,
  onFail,
  ...rest
}) {
  const [failed, setFailed] = useState(false)
  const showPlaceholder = !src || failed

  const handleError = () => {
    setFailed(true)
    onFail?.()
  }

  if (showPlaceholder) {
    return (
      <div
        className={`relative overflow-hidden bg-dark ${className}`}
        role="img"
        aria-label={alt || label || 'Görsel yakında eklenecek'}
        {...rest}
      >
        {/* Halı dokusunu andıran çapraz tarama */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, #5FD3C4 0, #5FD3C4 1px, transparent 1px, transparent 9px)',
          }}
        />
        {/* Aksan ışıması */}
        <div className="absolute -bottom-1/3 -right-1/4 w-2/3 h-2/3 rounded-full bg-accent/30 blur-3xl" />
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 rounded-full bg-primary/10 blur-3xl" />

        {/* icon={null} verilirse (örn. hero arka planı) yalnızca doku kalır,
            tam ekran zeminin ortasında yalnız bir ikon durmaz. */}
        <div className="relative h-full w-full flex flex-col items-center justify-center gap-3 p-4 text-center">
          {icon && <Icon name={icon} className="w-10 h-10 text-primary/70" />}
          {label && (
            <span className="text-white/45 text-xs font-medium tracking-wide uppercase">
              {label}
            </span>
          )}
        </div>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      decoding="async"
      width={width}
      height={height}
      onError={handleError}
      className={`${className} ${imgClassName}`}
      {...rest}
    />
  )
}
