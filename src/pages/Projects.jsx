import BeforeAfter from '../components/BeforeAfter'
import ProcessSteps from '../components/ProcessSteps'
import CTASection from '../components/CTASection'
import PageHeader from '../components/PageHeader'
import Seo from '../components/Seo'
import Icon from '../components/Icon'
import siteConfig from '../data/siteConfig'
import projects from '../data/projects'
import { haliSureci } from '../data/surec'

/**
 * Öncesi & Sonrası sayfası.
 *
 * Devralınan iskelette burası "Uygulama Alanları" adında bir lightbox
 * galerisiydi. Halı yıkamada tek bir fotoğraf hiçbir şey anlatmıyor — sonucu
 * anlatmanın yolu iki kareyi AYNI ÇERÇEVEDE karşılaştırmak. Sürgü ayrıca
 * "başka halı çekilmiş" şüphesini de kendiliğinden kaldırıyor.
 *
 * Sayfanın altındaki süreç bölümü bilinçli: "bu fark nasıl oluştu" sorusunun
 * cevabı burada, aynı sayfada duruyor.
 *
 * Başlık/açıklama routeMeta.js'teki '/projeler/' kaydıyla AYNI kalmalı — biri
 * build'deki statik HTML'i, diğeri SPA gezinmesini besliyor.
 */
export default function Projects() {
  return (
    <div className="page-enter">
      <Seo
        title={`Öncesi & Sonrası | Halı Yıkama Denizli — ${siteConfig.companyShortName}`}
        description="Yıkamadan önce ve sonra: halı, koltuk ve perde işlerinin sahada nasıl göründüğü. Hangi lekede ne yapıldığını görselleriyle anlattık."
        path="/projeler/"
      />

      <PageHeader
        title="Öncesi & Sonrası"
        description="Sürgüyü kaydırın: aynı kare, yıkamadan önce ve sonra."
        breadcrumb={[{ label: 'Öncesi & Sonrası' }]}
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          {projects.length > 0 ? (
            <>
              {/* H2 şart: H1'den kart H3'üne atlama olmasın */}
              <div className="max-w-2xl mb-12">
                <h2 className="section-title text-dark">
                  Aynı Halı, <span className="text-gradient-accent">İki Kare</span>
                </h2>
                <p className="section-subtitle">
                  Her karşılaştırmanın altında ne yapıldığı yazıyor. Sonuç halının
                  cinsine, lekenin yaşına ve kirliliğin türüne göre değişir —
                  aşağıdakiler o işte ne yapıldığının anlatımıdır, her halı için
                  aynı sonucun taahhüdü değil.
                </p>
              </div>

              <div className="grid gap-10 md:grid-cols-2">
                {projects.map((p) => (
                  <BeforeAfter
                    key={p.id}
                    oncesi={p.oncesi}
                    sonrasi={p.sonrasi}
                    oncesiAlt={`${p.title} — yıkama öncesi`}
                    sonrasiAlt={`${p.title} — yıkama sonrası`}
                    baslik={p.title}
                    aciklama={p.aciklama}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="max-w-xl mx-auto text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-accent/10 text-accent flex items-center justify-center">
                <Icon name="camera" className="w-10 h-10" strokeWidth={1.5} />
              </div>
              <h2 className="text-2xl font-bold text-dark mb-3">Fotoğraflar Yakında</h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                Yıkadığımız işlerin öncesi/sonrası karelerini bu sayfada paylaşacağız.
                Bu arada halınız için doğrudan bize ulaşabilirsiniz.
              </p>
              <a href={`tel:${siteConfig.phoneRaw}`} className="btn-primary">
                <Icon name="phone" className="w-5 h-5" strokeWidth={2} />
                {siteConfig.phone}
              </a>
            </div>
          )}
        </div>
      </section>

      <ProcessSteps
        adimlar={haliSureci}
        baslik="Bu Fark Nasıl Oluşuyor?"
        altBaslik="Halı adresinizden alındıktan sonra tesiste yedi adımdan geçiyor. Aradaki farkın büyük kısmı yıkamadan değil, yıkamadan önceki ve sonraki adımlardan geliyor."
        koyu
      />

      <CTASection />
    </div>
  )
}
