import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Seo from '../components/Seo'
import Icon from '../components/Icon'
import MapEmbed from '../components/MapEmbed'
import siteConfig from '../data/siteConfig'
import services from '../data/services'
import { mapsUrl, whatsappUrl } from '../utils/links'
import { trackConversion } from '../utils/analytics'

const inputClass =
  'w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-sm'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Backend yok — mesaj WhatsApp'a aktarılıyor.
    // TODO: form backend'i (Formspree / Netlify Forms / kendi PHP endpoint'iniz)
    const text = [
      `Merhaba, ben ${formData.name}.`,
      '',
      formData.service && `Hizmet: ${formData.service}`,
      '',
      formData.message,
      '',
      `Telefon: ${formData.phone}`,
      formData.email && `E-posta: ${formData.email}`,
    ]
      .filter((line) => line !== false && line !== undefined)
      .join('\n')

    // Google Ads / GA4 dönüşümü — tıklama delegasyonu window.open'ı yakalayamaz,
    // bu yüzden form gönderimi burada elle bildiriliyor.
    trackConversion('form', { hizmet: formData.service || 'belirtilmedi' })

    window.open(whatsappUrl(text), '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  const contactCards = [
    {
      icon: 'phone',
      title: 'Telefon',
      value: siteConfig.phone,
      href: `tel:${siteConfig.phoneRaw}`,
    },
    {
      icon: 'whatsapp',
      title: 'WhatsApp',
      value: 'Mesaj Gönderin',
      href: whatsappUrl(),
    },
    {
      icon: 'mail',
      title: 'E-posta',
      value: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
    },
    {
      icon: 'mapPin',
      title: 'Adres',
      value: `${siteConfig.address.district}, ${siteConfig.address.city}`,
      href: mapsUrl(),
    },
  ]

  return (
    <div className="page-enter">
      <Seo
        title={`İletişim | ${siteConfig.companyName} — Denizli Karot`}
        description={`Denizli karot hizmetleri için bize ulaşın. Telefon ${siteConfig.phone}, WhatsApp ve e-posta. Adres: ${siteConfig.address.full}. Ücretsiz keşif.`}
        path="/iletisim/"
      />

      <PageHeader
        title="İletişim"
        description="Projeleriniz için ücretsiz keşif ve fiyat teklifi alın. Hemen bize ulaşın!"
        breadcrumb={[{ label: 'İletişim' }]}
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Hızlı iletişim kartları */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 -mt-20 relative z-10">
            {contactCards.map((item) => {
              const isExternal = item.href.startsWith('http')
              return (
                <a
                  key={item.title}
                  href={item.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  className="bg-white rounded-2xl p-6 card-hover border border-gray-100 text-center group shadow-lg"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-accent/10 text-accent flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                    <Icon name={item.icon} className="w-6 h-6" strokeWidth={1.75} />
                  </div>
                  <h2 className="font-bold text-dark mb-1">{item.title}</h2>
                  <p className="text-gray-600 text-sm break-words">{item.value}</p>
                </a>
              )
            })}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-dark mb-6">Bize Yazın</h2>

              {submitted ? (
                <div className="bg-green-50 border border-green-100 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                    <Icon name="checkCircle" className="w-9 h-9" strokeWidth={1.75} />
                  </div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">WhatsApp&apos;a Yönlendirildiniz</h3>
                  <p className="text-green-700 text-sm">
                    Açılan pencereden mesajınızı gönderin, en kısa sürede dönüş yapalım.
                  </p>
                  <button type="button" onClick={() => setSubmitted(false)} className="btn-primary mt-6">
                    Yeni Mesaj
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="ad-soyad" className="block text-sm font-medium text-gray-700 mb-2">
                        Ad Soyad *
                      </label>
                      <input
                        id="ad-soyad"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={inputClass}
                        placeholder="Adınız Soyadınız"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefon" className="block text-sm font-medium text-gray-700 mb-2">
                        Telefon *
                      </label>
                      <input
                        id="telefon"
                        name="phone"
                        type="tel"
                        required
                        autoComplete="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={inputClass}
                        placeholder="05XX XXX XX XX"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="eposta" className="block text-sm font-medium text-gray-700 mb-2">
                      E-posta
                    </label>
                    <input
                      id="eposta"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={inputClass}
                      placeholder="ornek@eposta.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="hizmet" className="block text-sm font-medium text-gray-700 mb-2">
                      Hizmet Türü
                    </label>
                    <select
                      id="hizmet"
                      name="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className={`${inputClass} bg-white`}
                    >
                      <option value="">Seçiniz...</option>
                      {services.map((s) => (
                        <option key={s.slug} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Diğer">Diğer</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="mesaj" className="block text-sm font-medium text-gray-700 mb-2">
                      Mesajınız *
                    </label>
                    <textarea
                      id="mesaj"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`${inputClass} resize-none`}
                      placeholder="Projeniz hakkında kısa bilgi verin..."
                    />
                  </div>

                  <p className="text-gray-600 text-xs">
                    Gönder&apos;e bastığınızda mesajınız WhatsApp üzerinden iletilir.
                  </p>

                  <button type="submit" className="btn-primary w-full py-4 text-lg">
                    Mesaj Gönder
                    <Icon name="send" className="w-5 h-5" strokeWidth={2} />
                  </button>
                </form>
              )}
            </div>

            {/* Harita */}
            <div>
              <h2 className="text-2xl font-bold text-dark mb-6">Konum</h2>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-[400px] lg:h-[calc(100%-3.5rem)] min-h-[400px]">
                <MapEmbed />
              </div>
              <p className="mt-4 text-gray-600 text-sm flex items-start gap-2">
                <Icon name="mapPin" className="w-5 h-5 shrink-0 text-accent" strokeWidth={2} />
                {siteConfig.address.full}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
