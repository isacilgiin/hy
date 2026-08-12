import { Link } from 'react-router-dom'
import ServiceCard from '../components/ServiceCard'
import CTASection from '../components/CTASection'
import PageHeader from '../components/PageHeader'
import Seo from '../components/Seo'
import services from '../data/services'
import siteConfig from '../data/siteConfig'

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
    baslik: 'Delik açmak',
    metin: (
      <>
        Tesisat, klima, baca ve havalandırma geçişleri için betonarmede ölçülü delik
        gerekiyorsa <Link to="/hizmetler/karot/">karot</Link> yöntemi kullanılır. Elmas uçlu
        silindirik uç betonu keserek ilerlediği için delik kenarı pürüzsüz çıkar ve kırıcının
        yarattığı türden çatlak oluşmaz. Çap ihtiyacı büyüdükçe iş{' '}
        <Link to="/hizmetler/beton-delme/">beton delme</Link> başlığına geçer; 50 mm ile
        1000 mm arasında çalışılabiliyor.
      </>
    ),
  },
  {
    baslik: 'Kesmek',
    metin: (
      <>
        Duvarda kapı ya da pencere açıklığı açmak, döşemede merdiven veya asansör boşluğu
        oluşturmak <Link to="/hizmetler/beton-kesme/">beton kesme</Link> işidir; kesim hattı
        düz çıktığı için kenarda ek sıva veya tamir işi kalmaz. Ölçü elmas diskin kapasitesini
        aştığında <Link to="/hizmetler/hidrolik-beton-kesme/">hidrolik beton kesme</Link>{' '}
        devreye girer. Yol ve zemin çalışmalarında ise{' '}
        <Link to="/hizmetler/asfalt-derz-kesim/">asfalt derz kesim</Link> ayrı bir uygulama.
      </>
    ),
  },
  {
    baslik: 'Kırmak ve yıkmak',
    metin: (
      <>
        Kaldırılacak beton serbest bir alandaysa ve kenarın düzgün kalması gerekmiyorsa{' '}
        <Link to="/hizmetler/beton-kirma/">beton kırma</Link> hem daha hızlı hem daha
        ekonomik olur. Bütün bir yapı söz konusuysa iş{' '}
        <Link to="/hizmetler/kontrollu-bina-yikimi/">kontrollü bina yıkımı</Link> kapsamına
        girer ve çevre yapılar da planlamanın parçası hâline gelir.
      </>
    ),
  },
  {
    baslik: 'Bağlamak ve güçlendirmek',
    metin: (
      <>
        Mevcut betona yeni bir eleman bağlanacaksa üç yol var:{' '}
        <Link to="/hizmetler/filiz-ekimi/">filiz ekimi</Link> donatı devamlılığı kurar,{' '}
        <Link to="/hizmetler/ankraj/">ankraj</Link> yükü mevcut betonarmeye aktaran bağlantı
        noktası oluşturur, <Link to="/hizmetler/kimyasal-dubel/">kimyasal dübel</Link> ise
        mekanik dübelin tutmadığı durumlarda enjeksiyon reçinesiyle çalışır.
      </>
    ),
  },
]

export default function Services() {
  return (
    <div className="page-enter">
      <Seo
        title={`Karot Hizmetleri | Denizli Beton Delme ve Kesme — ${siteConfig.companyName}`}
        description="Denizli'de karot, beton delme, beton kesme, beton kırma, filiz ekimi, ankraj ve kimyasal dübel hizmetleri. Ücretsiz keşif ve net fiyat teklifi."
        path="/hizmetler/"
      />

      <PageHeader
        title="Hizmetlerimiz"
        description="Profesyonel karot ve kesme ekipmanlarımızla sunduğumuz kapsamlı beton delme, kesme ve kırma hizmetleri."
        breadcrumb={[{ label: 'Hizmetler' }]}
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          {/* H2 şart: H1'den sonra doğrudan kartların H3'üne atlanınca başlık
              hiyerarşisinde seviye atlaması oluyordu (H1 → H3). */}
          <div className="text-center mb-12">
            <h2 className="section-title text-dark">
              Denizli&apos;de Verdiğimiz <span className="text-gradient-accent">Karot</span> Hizmetleri
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
            Beton üzerinde yapılacak işler dört ana grupta toplanıyor. Hangisinin gerektiği
            çoğu zaman işin kendisinden değil çevresinden belli oluyor: elemanın taşıyıcı olup
            olmadığı, çevrede kimlerin bulunduğu ve kenarın düzgün kalması gerekip gerekmediği.
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
            Emin değilseniz aramanız yeterli — yerinde bakıp hangi yöntemin uygun olduğunu
            söylüyoruz, keşif ücretsiz.{' '}
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
