import { Link } from 'react-router-dom'
import Icon from './Icon'
import SmartImage from './SmartImage'

/**
 * Hizmet kartı.
 *
 * ┌──────────────────────────────────────────────────────────────────────────┐
 * │ `one` PROP'U: kart ızgarada iki sütun kaplayan ÖNE ÇIKAN kart mı?        │
 * │                                                                          │
 * │ Neden var: eşit boyutta kartlardan oluşan bir ızgara, tasarımda en sık   │
 * │ görülen "şablondan çıkmış" kalıbı. Hepsi aynı boyutta olunca hiçbiri     │
 * │ önemli görünmüyor ve göz nereye bakacağını bilmiyor. Bir kartı büyütmek  │
 * │ hem hiyerarşi kuruyor hem ızgaranın tekdüzeliğini kırıyor.               │
 * │                                                                          │
 * │ Öne çıkan kartta görsel YATAY yerleşiyor ve açıklama uzun sürümüyle      │
 * │ geliyor; sıradan kartta dikey ve kısa.                                   │
 * └──────────────────────────────────────────────────────────────────────────┘
 */
export default function ServiceCard({ service, index = 0, one = false }) {
  const gecikme = `delay-${((index % 4) + 1) * 100}`

  return (
    <Link
      to={`/hizmetler/${service.slug}/`}
      className={`animate-fade-in-up ${gecikme} group relative overflow-hidden rounded-2xl bg-white card-hover ${
        one ? 'sm:col-span-2 sm:grid sm:grid-cols-2 sm:items-stretch' : 'flex flex-col'
      }`}
    >
      {/* Görsel */}
      <div className={`relative overflow-hidden bg-dark ${one ? 'aspect-[4/3] sm:aspect-auto' : 'aspect-[16/10]'}`}>
        <SmartImage
          src={service.image}
          /* BASAMAKLAR ÖLÇÜLEREK SEÇİLDİ — aralık bırakmayın.

             Kart 92vw yer kaplıyor; gereken fiziksel piksel = 92vw × DPR.
             Bir basamak yoksa tarayıcı ARADAKİNE değil, doğrudan bir ÜSTTEKİNE
             atlıyor ve fark tek bir kartta on KB'lerle ölçülüyor:

               412px DPR 1,75 -> 379 × 1,75 =  663 px  ->  700w
               390px DPR 3    -> 359 × 3    = 1077 px  -> 1100w
               360px DPR 3    -> 331 × 3    =  994 px  -> 1100w

             700w ve 1100w eklenmeden önce bu iki durum sırasıyla 900w ve
             ANA DOSYAYA (1200w) atlıyordu; ölçüldü, DPR 3 telefonda ana
             sayfada -113,8 KB, DPR 1,75'te -40,2 KB.

             `sizes` DEĞİŞMEDİ ve değişmemeli: 92vw yalnızca %4-5 fazla
             bildiriyor, o sıçramaları açıklayan şey basamak aralığıydı.

             arac/gorsel-varyant.mjs bu genişlikleri BURADAN okuyup üretiyor;
             yeni bir basamak eklerseniz `npm run varyant` çalıştırmanız yeter.

             TEK ŞABLON LİTERALİ ŞART — bölmeyin, döngüye çevirmeyin.
             arac/gorsel-varyant.mjs:105 `srcsetMetinleri()` İLK backtick ile
             İKİNCİ backtick arasını okuyor. Beş ayrı `...` + `...` yazarsanız
             araç yalnızca ilkini görür: hem yeni basamakları üretmez (sessizce
             "üretilen: 0" der) hem de ana dosyanın 600w vaat ettiğini sanır.
             `-${g}.webp` gibi bir şablon da okunacak rakam bırakmaz.
             (İkisine de bir kez düşüldü — 2026-08-26.) */
          srcSet={`${service.image.replace('.webp', '-600.webp')} 600w, ${service.image.replace(
            '.webp',
            '-700.webp'
          )} 700w, ${service.image.replace('.webp', '-900.webp')} 900w, ${service.image.replace(
            '.webp',
            '-1100.webp'
          )} 1100w, ${service.image} 1200w`}
          sizes={one ? '(min-width: 1024px) 560px, 92vw' : '(min-width: 1024px) 300px, (min-width: 640px) 45vw, 92vw'}
          alt={service.title}
          icon={service.icon}
          label={service.shortTitle}
          width="1200"
          height="675"
          className="absolute inset-0 h-full w-full"
          imgClassName="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Alttan yukarı koyu geçiş — ikon rozetinin okunması için */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/75 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-35" />

        <span className="absolute bottom-3 left-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-dark shadow-lg">
          <Icon name={service.icon} className="h-6 w-6" strokeWidth={1.75} />
        </span>
      </div>

      {/* Üst vurgu çizgisi — hover'da soldan sağa açılır */}
      <div className="absolute left-0 right-0 top-0 z-10 h-0.5 origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" />

      {/* İçerik */}
      <div className={`flex flex-1 flex-col ${one ? 'justify-center p-7 sm:p-8' : 'p-6'}`}>
        <h3
          className={`font-bold text-dark transition-colors group-hover:text-accent ${
            one ? 'mb-3 text-2xl tracking-tight' : 'mb-2 text-lg'
          }`}
        >
          {service.title}
        </h3>

        <p className={`flex-1 leading-relaxed text-gray-600 ${one ? 'mb-6 text-base' : 'mb-5 text-sm'}`}>
          {one ? service.description : service.shortDescription}
        </p>

        <span className="flex items-center gap-2 text-sm font-semibold text-accent">
          Detaylı Bilgi
          <Icon
            name="arrowRight"
            className="h-4 w-4 transition-transform group-hover:translate-x-1.5"
            strokeWidth={2}
          />
        </span>
      </div>
    </Link>
  )
}
