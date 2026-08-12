import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import siteConfig from '../data/siteConfig'

export default function Contact() {
  useEffect(() => {
    document.title = `İletişim | ${siteConfig.companyName} — Denizli`
  }, [])

  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', service: '', message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form gönderimi — backend entegrasyonu sonra yapılacak
    // Şimdilik WhatsApp'a yönlendir
    const text = `Merhaba, ben ${formData.name}.\n\nHizmet: ${formData.service}\n\n${formData.message}\n\nTelefon: ${formData.phone}\nE-posta: ${formData.email}`
    window.open(`https://wa.me/905078549502?text=${encodeURIComponent(text)}`, '_blank')
    setSubmitted(true)
  }

  return (
    <div className="page-enter">
      {/* Header */}
      <section className="gradient-hero pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-primary/20 blur-[100px]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 animate-fade-in-up">İletişim</h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto animate-fade-in-up delay-200">
            Projeleriniz için ücretsiz keşif ve fiyat teklifi alın. Hemen bize ulaşın!
          </p>
          <div className="mt-6 flex items-center justify-center gap-2 text-white/40 text-sm animate-fade-in-up delay-300">
            <Link to="/" className="hover:text-primary transition-colors">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-primary">İletişim</span>
          </div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Quick Contact Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 -mt-20 relative z-10">
            {[
              { icon: '📞', title: 'Telefon', value: siteConfig.phone, href: `tel:${siteConfig.phoneRaw}`, color: 'from-blue-500/10 to-blue-600/5' },
              { icon: '💬', title: 'WhatsApp', value: 'Mesaj Gönderin', href: siteConfig.social.whatsapp, color: 'from-green-500/10 to-green-600/5' },
              { icon: '📧', title: 'E-posta', value: siteConfig.email, href: `mailto:${siteConfig.email}`, color: 'from-purple-500/10 to-purple-600/5' },
              { icon: '📍', title: 'Adres', value: siteConfig.address.district + ', ' + siteConfig.address.city, href: `https://maps.google.com/?q=${siteConfig.geo.lat},${siteConfig.geo.lng}`, color: 'from-red-500/10 to-red-600/5' },
            ].map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`bg-white rounded-2xl p-6 card-hover border border-gray-100 text-center group shadow-lg`}
              >
                <div className={`w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center text-2xl group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-dark mb-1">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.value}</p>
              </a>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-dark mb-6">Bize Yazın</h2>
              {submitted ? (
                <div className="bg-green-50 rounded-2xl p-8 text-center">
                  <div className="text-5xl mb-4">✅</div>
                  <h3 className="text-xl font-bold text-green-800 mb-2">Mesajınız İletildi!</h3>
                  <p className="text-green-600">En kısa sürede size geri dönüş yapacağız.</p>
                  <button onClick={() => setSubmitted(false)} className="btn-primary mt-6">
                    Yeni Mesaj
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Ad Soyad *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={e => setFormData({...formData, name: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                        placeholder="Adınız Soyadınız"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Telefon *</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={e => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                        placeholder="05XX XXX XX XX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">E-posta</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                      placeholder="email@ornek.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Hizmet Türü</label>
                    <select
                      value={formData.service}
                      onChange={e => setFormData({...formData, service: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-white"
                    >
                      <option value="">Seçiniz...</option>
                      <option value="Beton Delme">Beton Delme</option>
                      <option value="Beton Kesme">Beton Kesme</option>
                      <option value="Beton Kırma">Beton Kırma</option>
                      <option value="Asfalt Derz Kesim">Asfalt Derz Kesim</option>
                      <option value="Hidrolik Beton Kesme">Hidrolik Beton Kesme</option>
                      <option value="Filiz Ekimi">Filiz Ekimi</option>
                      <option value="Kimyasal Dübel & Ankraj">Kimyasal Dübel & Ankraj</option>
                      <option value="Kontrollü Bina Yıkımı">Kontrollü Bina Yıkımı</option>
                      <option value="Diğer">Diğer</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mesajınız *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={e => setFormData({...formData, message: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
                      placeholder="Projeniz hakkında kısa bilgi verin..."
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center py-4 text-lg">
                    Mesaj Gönder
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </form>
              )}
            </div>

            {/* Map */}
            <div>
              <h2 className="text-2xl font-bold text-dark mb-6">Konum</h2>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-[400px] lg:h-full min-h-[400px]">
                <iframe
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3000!2d${siteConfig.geo.lng}!3d${siteConfig.geo.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ3JzU2LjgiTiAyOcKwMDUnNTkuNCJF!5e0!3m2!1str!2str!4v1`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Güçlü Karot Konum"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
