import { useEffect, useMemo, useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import CTASection from '../components/CTASection'
import PageHeader from '../components/PageHeader'
import Icon from '../components/Icon'
import Seo from '../components/Seo'
import siteConfig from '../data/siteConfig'
import metaMetinleri from '../data/metaMetinleri'
import services from '../data/services'
import bolgelerIndex, { zoneContent, ilceler, mahalleler, mahalleleriBul } from '../data/bolgelerIndex'

/**
 * BÖLGE METİNLERİ SLUG BAŞINA DİNAMİK YÜKLENİR.
 *
 * 61 bölgenin metni tek pakette dursaydı her bölge sayfası hepsini indirirdi
 * (ölçüldü: 208 kB ham / 63 kB gzip). Glob her bölgeyi ayrı parçaya çeviriyor,
 * açılan sayfa yalnızca kendi ~3,4 kB'ını çekiyor.
 *
 * LCP ETKİLENMİYOR: sayfanın LCP elemanı PageHeader'daki h1 ve o, metinden
 * değil HAFİF İNDEKSTEN geliyor — senkron. Asenkron inen şey yalnızca gövde.
 *
 * ARAMA MOTORU ETKİLENMİYOR: bölgenin metni build sırasında statik HTML'e
 * zaten yazılıyor (vite.config.js > noscriptGovdesi, routeMeta.js'ten besleniyor
 * ve orada tam veri Node tarafında import ediliyor).
 */
const bolgeMetinleri = import.meta.glob('../data/bolgeler/*.js')
import { whatsappUrl } from '../utils/links'
import { bulunmaEkiTam } from '../utils/turkce'

export default function ServiceAreaDetail() {
  const { slug } = useParams()
  const kimlik = bolgelerIndex.find((a) => a.slug === slug)
  const [metin, setMetin] = useState(null)

  useEffect(() => {
    let iptal = false
    setMetin(null)
    const yukle = bolgeMetinleri[`../data/bolgeler/${slug}.js`]
    if (!yukle) return
    yukle().then((m) => {
      if (!iptal) setMetin(m.default)
    })
    return () => {
      iptal = true
    }
  }, [slug])

  // Kimlik senkron, metin asenkron. Metin inene kadar boş dizilerle çalışıyoruz
  // ki başlık ve gezinme hemen görünsün, gövde sonra dolsun.
  //
  // useMemo ŞART: aşağıdaki üç useMemo (nearby, jsonLd, havuz) `area`ya bağlı.
  // Her render'da yeni bir nesne üretilseydi üçü de her render'da yeniden
  // hesaplanır, jsonLd her seferinde yeni referans döner ve <Seo> DOM'daki
  // JSON-LD bloğunu boş yere silip yeniden yazardı.
  const area = useMemo(
    () =>
      kimlik
        ? { ...kimlik, intro: [], yerelBaglam: '', note: '', sss: [], ...(metin ?? {}) }
        : undefined,
    [kimlik, metin]
  )

  /**
   * Yakın hizmet bölgeleri — iç link ağı.
   *
   * Liste DÖNGÜSEL seçiliyor: her kayıt kendinden sonraki 8 kaydı listeliyor.
   * Sebebi ölçülmüştü: "aynı bölge tipindekiler + kalanlar" sıralamasında
   * dizinin sonundaki ilçeler neredeyse hiç iç link almıyordu (Güney 12,
   * Merkezefendi 20). Döngüsel seçimde her kayıt tam olarak 8 sayfadan link alır.
   *
   * AMA döngü ARTIK KENDİ HAVUZUNDA dönüyor, düz dizide değil. Dizi hem 19 ilçe
   * hem 42 mahalle taşıyor; düz modulo kullanılsaydı Acıpayam sayfası bambaşka
   * bir ilçenin mahallelerine link verirdi — coğrafi olarak anlamsız bir ağ.
   *   • İlçe sayfası  -> kendi mahalleleri ÖNCE, sonra diğer ilçeler
   *   • Mahalle sayfası -> aynı ilçenin kardeş mahalleleri
   * Böylece iç link ağı gerçek coğrafyayı takip ediyor.
   */
  const nearby = useMemo(() => {
    if (!area) return []
    const kardesler = area.tur === 'mahalle'
      ? mahalleler.filter((m) => m.parentSlug === area.parentSlug)
      : ilceler
    const i = kardesler.findIndex((a) => a.slug === area.slug)
    const dongu = Array.from({ length: 8 }, (_, k) => kardesler[(i + k + 1) % kardesler.length])
      .filter((a) => a && a.slug !== area.slug)

    // İlçe sayfasında kendi mahalleleri önce gelsin: en değerli iç link,
    // hub'dan alt sayfaya inen linktir.
    if (area.tur === 'ilce') {
      const kendiMahalleleri = mahalleleriBul(area.slug)
      return [...kendiMahalleleri, ...dongu].slice(0, 10)
    }
    return dongu.slice(0, 8)
  }, [area])

  /**
   * Önceki/sonraki gezinme de kendi havuzunda: ilçe -> ilçe, mahalle -> aynı
   * ilçenin mahalleleri. Düz dizide 19. ilçeden 1. mahalleye geçmek okuyucuya
   * hiçbir şey anlatmıyordu.
   */
  const havuz = area?.tur === 'mahalle'
    ? mahalleler.filter((m) => m.parentSlug === area.parentSlug)
    : ilceler
  const havuzIndex = area ? havuz.findIndex((a) => a.slug === area.slug) : -1

  const zone = area ? zoneContent[area.zone] : null

  // Service + FAQPage şeması birlikte gönderilir. Her ilçenin SSS'i kendine
  // özeldir (ilçeler arası cümle tekrarı yok); FAQPage şeması Google'da
  // soru-cevap kutusu çıkma ihtimali doğurur.
  const jsonLd = useMemo(() => {
    if (!area) return null
    const service = {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name:
        area.tur === 'mahalle'
          ? `${area.name} Mahallesi Halı Yıkama`
          : `${area.name} Halı Yıkama — Koltuk ve Perde Yıkama`,
      serviceType: siteConfig.sector.tanim,
      provider: {
        '@type': 'LocalBusiness',
        '@id': `${siteConfig.url}/#localbusiness`,
        name: siteConfig.companyName,
        telephone: siteConfig.phoneRaw,
      },
      // routeMeta.js > bolgeRotalari ile AYNI kalmalı: biri SPA gezinmesini,
      // diğeri build'deki statik HTML'i besliyor. Mahalle City değil.
      areaServed:
        area.tur === 'mahalle'
          ? { '@type': 'AdministrativeArea', name: `${area.name}, ${area.ilce}, ${siteConfig.address.city}` }
          : { '@type': 'City', name: `${area.name}, ${siteConfig.address.city}` },
      url: `${siteConfig.url}/hizmet-bolgeleri/${area.slug}/`,
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${area.name} ${siteConfig.sector.hizmetKatalogAdi}`,
        itemListElement: services.map((s) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: `${area.name} ${s.title}` },
        })),
      },
    }

    const faq = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: area.sss.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    }

    return [service, faq]
  }, [area])

  if (!area) return <Navigate to="/hizmet-bolgeleri/" replace />

  // routeMeta.js > bolgeRotalari ile AYNI mantık. Devralınan iskelette burada
  // sentetik bir "Denizli (Merkez)" kaydı için özel durum vardı; o kayıt
  // açılmadığı için (gerekçe bolgelerIndex.js başında) özel durum da kalktı.
  const mahalleMi = area.tur === 'mahalle'

  return (
    <div className="page-enter">
      <Seo
        title={metaMetinleri.bolgeDetay.baslik(area.name)}
        description={metaMetinleri.bolgeDetay.aciklama(area)}
        path={`/hizmet-bolgeleri/${area.slug}/`}
        jsonLd={jsonLd}
      />

      <PageHeader
        title={`${area.name} Halı Yıkama`}
        description={`${area.name} ve çevresinde halı, koltuk, yatak, perde ve yorgan yıkama. Alım ve teslim ücretsiz.`}
        breadcrumb={
          mahalleMi
            ? [
                { label: 'Hizmet Bölgeleri', to: '/hizmet-bolgeleri/' },
                { label: area.ilce, to: `/hizmet-bolgeleri/${area.parentSlug}/` },
                { label: area.name },
              ]
            : [
                { label: 'Hizmet Bölgeleri', to: '/hizmet-bolgeleri/' },
                { label: area.name },
              ]
        }
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* Bölge etiketi */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 mb-6">
                <Icon name="mapPin" className="w-4 h-4 text-accent" strokeWidth={2} />
                <span className="text-accent text-sm font-semibold">{zone.label}</span>
              </div>

              <h2 className="section-title text-dark mb-6">
                <span className="text-gradient-accent">{area.name}</span>
                {bulunmaEkiTam(area.name)} Halı Yıkama
              </h2>

              {area.intro.map((paragraf, i) => (
                <p
                  key={paragraf.slice(0, 40)}
                  className={`text-gray-600 leading-relaxed mb-5 ${i === 0 ? 'text-lg' : ''}`}
                >
                  {paragraf}
                </p>
              ))}

              {area.note && (
                <div className="border-l-4 border-accent bg-surface rounded-r-xl p-5 mb-8">
                  <p className="text-gray-600 text-sm leading-relaxed">{area.note}</p>
                </div>
              )}

              {/* Ulaşım/program kutusu — mesafeye göre değişen kısa bilgi (chrome) */}
              <div className="flex items-start gap-4 rounded-2xl bg-surface p-5 mb-12">
                <span className="w-10 h-10 shrink-0 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                  <Icon name="clipboard" className="w-5 h-5" strokeWidth={2} />
                </span>
                <span>
                  <span className="block font-semibold text-dark text-sm mb-1">
                    Ulaşım ve program
                  </span>
                  <span className="block text-gray-600 text-sm leading-relaxed">
                    {zone.howWeWork}
                  </span>
                </span>
              </div>

              {/* Bölgeye özel: halı stoğu ve alma-teslim planlaması.
                  Başlık devralınan iskelette "Saha Koşulları ve Planlama" idi —
                  şantiye dili. Halı yıkamada karşılığı, o bölgeden gelen halının
                  ne olduğu ve aracın oraya nasıl çıktığı. */}
              <h3 className="text-2xl font-bold text-dark mb-4">
                {area.name}
                {bulunmaEkiTam(area.name)} Alma-Teslim Nasıl Planlanıyor?
              </h3>
              <p className="text-gray-600 leading-relaxed mb-12">{area.yerelBaglam}</p>

              {/* Hizmetler */}
              <h3 className="text-2xl font-bold text-dark mb-6">
                {area.name}
                {bulunmaEkiTam(area.name)} Verdiğimiz Hizmetler
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 mb-12">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/hizmetler/${s.slug}/`}
                    className="flex items-start gap-3 p-4 rounded-xl bg-surface hover:bg-accent/5 transition-colors group"
                  >
                    <span className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                      <Icon name={s.icon} className="w-5 h-5" />
                    </span>
                    <span>
                      <span className="block font-semibold text-dark text-sm group-hover:text-accent transition-colors">
                        {area.name} {s.title}
                      </span>
                      <span className="block text-gray-600 text-xs mt-0.5">{s.shortTitle}</span>
                    </span>
                  </Link>
                ))}
              </div>

              {/* Sık sorulanlar — FAQPage şeması ile birlikte */}
              <h3 className="text-2xl font-bold text-dark mb-5">
                {area.name} İçin Sık Sorulanlar
              </h3>
              <div className="space-y-3 mb-12">
                {area.sss.map((item) => (
                  <details
                    key={item.q}
                    className="group rounded-xl border border-gray-100 bg-surface p-5 [&[open]]:bg-accent/5 transition-colors"
                  >
                    <summary className="flex items-start justify-between gap-4 cursor-pointer font-semibold text-dark list-none">
                      <span>{item.q}</span>
                      <Icon
                        name="chevronDown"
                        className="w-5 h-5 shrink-0 text-accent transition-transform group-open:rotate-180"
                        strokeWidth={2}
                      />
                    </summary>
                    <p className="text-gray-600 leading-relaxed mt-3">{item.a}</p>
                  </details>
                ))}
              </div>

              {/* Yakın bölgeler — iç link ağı */}
              <h3 className="text-2xl font-bold text-dark mb-5">Yakın Hizmet Bölgeleri</h3>
              <div className="flex flex-wrap gap-2">
                {nearby.map((a) => (
                  <Link
                    key={a.slug}
                    to={`/hizmet-bolgeleri/${a.slug}/`}
                    className="px-4 py-2 rounded-full bg-surface hover:bg-accent hover:text-white text-gray-600 text-sm transition-colors"
                  >
                    {a.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Kenar çubuğu */}
            <aside className="lg:col-span-1">
              <div className="rounded-2xl gradient-dark p-6 sticky top-28">
                <h3 className="text-white font-bold text-lg mb-2">
                  {area.name} için Teklif Alın
                </h3>
                <p className="text-white/60 text-sm mb-6">
                  Alım ve teslim ücretsiz. Fiyatı ve teslim gününü önceden söylüyoruz.
                </p>

                <a href={`tel:${siteConfig.phoneRaw}`} className="btn-primary w-full mb-3">
                  <Icon name="phone" className="w-5 h-5" strokeWidth={2} />
                  {siteConfig.phone}
                </a>
                <a
                  href={whatsappUrl(
                    `Merhaba, ${area.name} bölgesinde halı yıkama için bilgi almak istiyorum.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full border-white/25 text-white hover:bg-green-600 hover:border-green-600 hover:text-white"
                >
                  <Icon name="whatsapp" className="w-5 h-5" />
                  WhatsApp
                </a>

                <div className="mt-6 pt-6 border-t border-white/10 space-y-3 text-sm">
                  <div className="flex items-start gap-3 text-white/60">
                    <Icon name="clock" className="w-5 h-5 shrink-0 text-primary" strokeWidth={2} />
                    <span>
                      {siteConfig.workingHours.days}
                      <br />
                      {siteConfig.workingHours.hours}
                    </span>
                  </div>
                  <div className="flex items-start gap-3 text-white/60">
                    <Icon name="mapPin" className="w-5 h-5 shrink-0 text-primary" strokeWidth={2} />
                    <span>{area.name} / {siteConfig.address.city}</span>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          {/* Önceki / sonraki bölge */}
          <div className="mt-16 pt-8 border-t border-gray-100 grid grid-cols-2 gap-6">
            {havuzIndex > 0 ? (
              <Link
                to={`/hizmet-bolgeleri/${havuz[havuzIndex - 1].slug}/`}
                className="group flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors"
              >
                <Icon name="arrowLeft" className="w-6 h-6 text-gray-600 group-hover:text-accent transition-all group-hover:-translate-x-1" strokeWidth={2} />
                <span>
                  <span className="block text-xs text-gray-600">Önceki Bölge</span>
                  <span className="block font-semibold text-dark group-hover:text-accent transition-colors">
                    {havuz[havuzIndex - 1].name}
                  </span>
                </span>
              </Link>
            ) : (
              <div />
            )}
            {havuzIndex >= 0 && havuzIndex < havuz.length - 1 && (
              <Link
                to={`/hizmet-bolgeleri/${havuz[havuzIndex + 1].slug}/`}
                className="group flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors justify-end text-right"
              >
                <span>
                  <span className="block text-xs text-gray-600">Sonraki Bölge</span>
                  <span className="block font-semibold text-dark group-hover:text-accent transition-colors">
                    {havuz[havuzIndex + 1].name}
                  </span>
                </span>
                <Icon name="arrowRight" className="w-6 h-6 text-gray-600 group-hover:text-accent transition-all group-hover:translate-x-1" strokeWidth={2} />
              </Link>
            )}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
