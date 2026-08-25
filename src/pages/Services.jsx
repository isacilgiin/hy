import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import CTASection from '../components/CTASection'
import PageHeader from '../components/PageHeader'
import Seo from '../components/Seo'
import services from '../data/services'
import siteConfig from '../data/siteConfig'
import metaMetinleri from '../data/metaMetinleri'

/**
 * "Hangi hizmete ihtiyacınız var?" rehberi.
 *
 * NEDEN VAR: Bu sayfa daha önce başlık + tek cümle + 10 karttan ibaretti;
 * <noscript> gövdesi 139 kelimeydi. Hub sayfası hem kullanıcı hem arama
 * motoru için bir yol ayrımıdır — ziyaretçi çoğu zaman hizmetin ADINI değil,
 * PROBLEMİ biliyor ("duvarda kapı açacağım"). Bu bölüm problemden hizmete
 * köprü kuruyor ve 10 detay sayfasının hepsine iç link veriyor.
 *
 * Metindeki teknik ifadelerin tamamı src/data/services.js içindeki mevcut
 * açıklamalardan türetildi; buraya yeni bir kapasite/referans iddiası
 * EKLENMEDİ. Yeni hizmet eklerseniz ilgili gruba bir cümleyle katın.
 */
const rehber = [
  {
    baslik: 'Tesise gelenler, yerinde temizlenenler',
    metin: (
      <>
        Yıkadığımız tekstil iki gruba ayrılıyor. Halı, yorgan ve perde araçla alınıp
        fabrikada yıkanıyor; <Link to="/hizmetler/koltuk-yikama/">koltuk</Link> ve{' '}
        <Link to="/hizmetler/yatak-baza-temizligi/">yatak</Link> taşınmadığı için ekip
        adrese geliyor. Hangi grupta olduğu işin kendisinden değil, eşyanın
        taşınabilirliğinden belli oluyor. Alım ve teslim için ayrıca ücret almıyoruz.
      </>
    ),
  },
  {
    baslik: 'Halıda program cinse göre değişir',
    metin: (
      <>
        <Link to="/hizmetler/hali-yikama/">Makine halısı</Link> standart fırça sertliğiyle
        yıkanırken <Link to="/hizmetler/el-dokuma-hali-yikama/">el dokuma ve yün halı</Link>{' '}
        düşük ısı ile yumuşak fırça istiyor — boyası sabit olmadığı için yıkamadan önce renk
        akma testi yapılıyor.{' '}
        <Link to="/hizmetler/ipek-nepal-hali-yikama/">İpek ve Nepal halılarda</Link> ıslanma
        süresi sınırlı tutuluyor,{' '}
        <Link to="/hizmetler/shaggy-hali-yikama/">shaggy ve uzun tüylülerde</Link> ise fırça
        ayarı tüy uzunluğuna göre kuruluyor. Aynı makinede yıkanıyorlar, aynı ayarla değil.
      </>
    ),
  },
  {
    baslik: 'Yerinde işlerde belirleyici olan emiş',
    metin: (
      <>
        <Link to="/hizmetler/koltuk-yikama/">Koltuk</Link> ve{' '}
        <Link to="/hizmetler/yatak-baza-temizligi/">yatak</Link> yüksek basınçlı vakumlu
        üniteyle temizleniyor. Burada belirleyici olan ıslatma değil geri emiş: kumaşın içinde
        kalan deterjan, temizlenen eşyayı daha hızlı kirletiyor. Yatakta ayrıca ıslatma sınırı
        var — iç dolguya su geçerse dolgu tam kurumuyor ve içeride nem kalıyor.
      </>
    ),
  },
  {
    baslik: 'Mekanizmalı ve hacimli olanlar',
    metin: (
      <>
        <Link to="/hizmetler/stor-perde-yikama/">Stor ve zebra perdeler</Link> mekanizmalı
        olduğu için ultrasonik makinede, katlanmadan yıkanıyor; katlanarak yıkanan kumaşta
        kalıcı kırık oluşuyor. Sökme ve tekrar takma bize ait.{' '}
        <Link to="/hizmetler/yorgan-battaniye-yikama/">Yorgan ve battaniyeler</Link> ise ev
        tipi makinede dönemedikleri için endüstriyel makinede yıkanıyor — dönemeyen yorgan
        yıkanmıyor, yalnızca ıslanıyor.
      </>
    ),
  },
  {
    baslik: 'Emin değilseniz',
    metin: (
      <>
        Hangisinin gerektiğinden emin değilseniz aramanız yeterli: halının cinsini ve ölçüsünü
        söylediğinizde ya da WhatsApp&apos;tan fotoğraf gönderdiğinizde uygun programı ve
        süreyi baştan iletiyoruz. Teslim ortalama 3-4 iş günü sürüyor.
      </>
    ),
  },
]

export default function Services() {
  return (
    <div className="page-enter">
      <Seo
        title={metaMetinleri.hizmetler.baslik}
        description={metaMetinleri.hizmetler.aciklama}
        path="/hizmetler/"
      />

      <PageHeader
        title={metaMetinleri.hizmetler.h1}
        description="Halı, koltuk, yatak, perde ve yorgan. Hangisinin tesise geldiğini, hangisinin adresinizde yapıldığını aşağıda anlattık."
        breadcrumb={[{ label: 'Hizmetler' }]}
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          {/* H2 şart: H1'den sonra doğrudan kartların H3'üne atlanınca başlık
              hiyerarşisinde seviye atlaması oluyordu (H1 → H3). */}
          <div className="text-center mb-12">
            <h2 className="section-title text-dark">
              Denizli&apos;de Verdiğimiz <span className="text-gradient-accent">Yıkama</span> Hizmetleri
            </h2>
            <p className="section-subtitle">
              Her hizmetin sayfasında yöntemi, sahada nasıl uygulandığını ve sık
              sorulan soruları ayrıntısıyla anlattık.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <ServiceCard key={service.id} service={service} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-dark text-center mb-4">
            Hangi Hizmete <span className="text-gradient-accent">İhtiyacınız</span> Var?
          </h2>
          <p className="section-subtitle text-center mb-12">
            Yıkadığımız tekstil iki gruba ayrılıyor: tesise gelenler ve adresinizde
            temizlenenler. Hangisinin gerektiği işin kendisinden değil, eşyanın
            taşınabilirliğinden belli oluyor.
          </p>

          <div className="space-y-8">
            {rehber.map((g) => (
              <div key={g.baslik} className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100">
                <h3 className="flex items-center gap-3 text-xl font-bold text-dark mb-3">
                  <span className="w-8 h-0.5 bg-accent rounded-full" aria-hidden="true" />
                  {g.baslik}
                </h3>
                <p className="text-gray-700 leading-relaxed [&_a]:text-accent [&_a]:font-medium [&_a]:underline [&_a]:underline-offset-2 [&_a:hover]:text-primary">
                  {g.metin}
                </p>
              </div>
            ))}
          </div>

          <p className="text-gray-600 text-center mt-10 leading-relaxed">
            Hangisinin gerektiğinden emin değilseniz aramanız yeterli — halının cinsini ve
            ölçüsünü söylediğinizde uygun programı ve süreyi baştan iletiyoruz.{' '}
            <a href={`tel:${siteConfig.phoneRaw}`} className="text-accent font-semibold whitespace-nowrap">
              {siteConfig.phone}
            </a>
          </p>
        </div>
      </section>

      <CTASection />
    </div>
  )
}
