import siteConfig from '../data/siteConfig'
import Icon from './Icon'
import { whatsappUrl } from '../utils/links'

export default function CTASection() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Zemin */}
      <div className="absolute inset-0 gradient-hero" />
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.35) 1px, transparent 0)',
          backgroundSize: '30px 30px',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Rozet */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
          <Icon name="clipboard" className="w-4 h-4 text-primary" strokeWidth={2} />
          <span className="text-primary text-sm font-medium">Ücretsiz Keşif &amp; Fiyat Teklifi</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Projeniz İçin
          <span className="text-gradient"> Ücretsiz Keşif</span>
          <br />
          İsteyin
        </h2>

        <p className="text-white/65 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
          Deneyimli ekibimiz projenizi yerinde değerlendirsin, size en uygun çözümü ve fiyat
          teklifini sunalım. İlk adımı siz atın!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href={`tel:${siteConfig.phoneRaw}`} className="btn-primary text-lg px-10 py-4 glow-gold">
            <Icon name="phone" className="w-5 h-5" strokeWidth={2} />
            {siteConfig.phone}
          </a>

          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline border-white/35 text-white hover:bg-green-600 hover:border-green-600 hover:text-white text-lg px-10 py-4"
          >
            <Icon name="whatsapp" className="w-5 h-5" />
            WhatsApp ile Yazın
          </a>
        </div>

        {/* Çalışma saatleri */}
        <div className="mt-10 inline-flex items-center gap-3 text-white/45 text-sm">
          <Icon name="clock" className="w-4 h-4" strokeWidth={2} />
          {siteConfig.workingHours.days} | {siteConfig.workingHours.hours}
        </div>
      </div>
    </section>
  )
}
