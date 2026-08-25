/**
 * Yasal sayfa metinleri — Gizlilik Politikası ve Şartlar & Koşullar.
 *
 * ┌──────────────────────────────────────────────────────────────────────────┐
 * │ ⚠️ HUKUKİ UYARI                                                          │
 * │ Bu metinler, sitenin GERÇEKTE ne yaptığı esas alınarak hazırlanmış       │
 * │ dürüst taslaklardır — internetten kopyalanmış genel şablon değildir.     │
 * │ Yine de bir avukata okutmadan "hukuki metin" muamelesi yapmayın.         │
 * │ Özellikle KVKK başvuru adresi ve veri saklama süreleri gözden geçirilmeli.│
 * └──────────────────────────────────────────────────────────────────────────┘
 *
 * Sitenin veri açısından gerçek durumu (metinler buna göre yazıldı):
 *   • Üyelik yok, kullanıcı hesabı yok, sunucu tarafında veritabanı yok.
 *   • İletişim formu bir sunucuya POST ETMEZ; girilen bilgiyi ön yazılı bir
 *     WhatsApp mesajına dönüştürüp WhatsApp'ı açar. Veri bizim sunucumuzda
 *     hiç saklanmaz.
 *   • Site statiktir; çerez yazmaz. Google Analytics YALNIZCA siteConfig'e
 *     ölçüm kimliği girilirse yüklenir.
 *   • İletişim sayfasındaki harita Google Haritalar'dan gömülüdür; Google
 *     kendi çerezlerini kullanabilir.
 */

import siteConfig from './siteConfig.js'

export const gizlilik = {
  slug: 'gizlilik-politikasi',
  baslik: 'Gizlilik Politikası',
  ozet:
    `Bu sayfada, ${siteConfig.companyShortName} web sitesinde hangi bilgilerin toplandığını, nasıl kullanıldığını ve haklarınızı açıkça anlatıyoruz.`,
  bolumler: [
    {
      baslik: 'Kısaca',
      paragraflar: [
        'Bu site statik bir tanıtım sitesidir. Üyelik sistemi, kullanıcı hesabı veya sunucu tarafında bir veritabanı yoktur. Sizden bir bilgi istemediğimiz sürece hiçbir kişisel veri toplanmaz.',
        'İletişim formunu doldurduğunuzda bilgileriniz bizim sunucumuza gönderilmez ve orada saklanmaz; girdiğiniz metin hazır bir WhatsApp mesajına dönüştürülür ve mesajı gönderme kararı tamamen sizde kalır.',
      ],
    },
    {
      baslik: 'Hangi verileri işliyoruz?',
      paragraflar: [
        'Bize telefon, WhatsApp veya e-posta ile ulaştığınızda paylaştığınız ad, telefon numarası, alım-teslim adresi ve halınıza dair bilgileri (cins, ölçü, leke durumu, gönderdiğiniz fotoğraflar) işleriz. Bu verileri yalnızca fiyat vermek, alım-teslim randevusunu planlamak ve işi yürütmek için kullanırız.',
        'Bu bilgileri pazarlama amacıyla üçüncü kişilere satmıyor, kiralamıyor veya devretmiyoruz.',
      ],
    },
    {
      baslik: 'İletişim formu nasıl çalışıyor?',
      paragraflar: [
        'Formdaki alanları doldurup "Mesaj Gönder" butonuna bastığınızda, tarayıcınız girdiğiniz metni içeren bir WhatsApp bağlantısı açar. Bu aşamada veri bizim sunucumuza değil, doğrudan WhatsApp uygulamasına gider. Mesajı göndermezseniz bize hiçbir bilgi ulaşmaz.',
        'WhatsApp üzerinden ilettiğiniz mesajlar WhatsApp/Meta’nın kendi gizlilik politikasına tabidir.',
      ],
    },
    {
      baslik: 'Çerezler ve üçüncü taraf servisler',
      paragraflar: [
        'Sitenin kendisi çerez yazmaz. Ancak şu servisler kullanıldığında ilgili sağlayıcılar çerez kullanabilir:',
      ],
      liste: [
        'Google Haritalar — İletişim sayfasındaki gömülü harita. Google kendi çerezlerini kullanabilir.',
        'Google Analytics — Yalnızca ölçüm kimliği tanımlıysa yüklenir. Ziyaretçi sayısı ve sayfa görüntüleme gibi anonim istatistikler için kullanılır; kimliğinizi belirlemeye çalışmaz.',
        'Google Fonts — Yazı tipleri Google sunucularından yüklenir.',
      ],
      sonParagraflar: [
        'Tarayıcı ayarlarınızdan çerezleri engelleyebilir veya silebilirsiniz. Bu, gömülü haritanın çalışmasını etkileyebilir.',
      ],
    },
    {
      baslik: 'Verilerinizi ne kadar süre saklıyoruz?',
      paragraflar: [
        'İş ilişkisi kurulmayan görüşme kayıtlarını makul bir süre sonra siliyoruz. Fatura düzenlenen işlerde ise ilgili kayıtlar, vergi mevzuatının öngördüğü saklama süresi boyunca muhafaza edilir.',
      ],
    },
    {
      baslik: 'KVKK kapsamındaki haklarınız',
      paragraflar: [
        '6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında; kişisel verilerinizin işlenip işlenmediğini öğrenme, işlenmişse buna ilişkin bilgi talep etme, düzeltilmesini veya silinmesini isteme ve işlemenin kanuna aykırı olduğunu düşünüyorsanız itiraz etme haklarına sahipsiniz.',
        'Bu haklarınızı kullanmak için aşağıdaki iletişim kanallarından bize ulaşabilirsiniz. Talebinizi en kısa sürede sonuçlandırırız.',
      ],
    },
  ],
}

export const sartlar = {
  slug: 'sartlar-ve-kosullar',
  baslik: 'Şartlar ve Koşullar',
  ozet:
    'Bu sayfada, web sitesinin kullanımına ve verdiğimiz hizmetlere ilişkin genel şartları özetliyoruz.',
  bolumler: [
    {
      baslik: 'Sitenin kullanımı',
      paragraflar: [
        `Bu site ${siteConfig.companyShortName}'nın tanıtım sitesidir. Sitedeki bilgiler genel bilgilendirme amaçlıdır. Halının cinsine, kirlilik durumuna ve lekenin yaşına göre sonuç değişebilir; sitedeki anlatımlar her halı için birebir aynı sonucu taahhüt etmez.`,
        'Site içeriği (metinler, görseller, tasarım) izinsiz kopyalanamaz, çoğaltılamaz veya başka bir mecrada yayınlanamaz.',
      ],
    },
    {
      baslik: 'Fiyat ve teklifler',
      paragraflar: [
        'Sitede yer alan hizmet açıklamaları fiyat taahhüdü içermez. Fiyat; metrekare, halının cinsi, tüy uzunluğu ve lekenin durumuna göre belirlenir ve alım sırasında tarafınıza bildirilir. Alımda konuşulan rakam teslimde de geçerlidir.',
        'Verilen teklif; işin tarifi, ölçüler ve saha koşulları esas alınarak hazırlanır. Sahada bu koşulların önemli ölçüde farklı çıkması hâlinde teklif yeniden değerlendirilir ve işe başlamadan önce sizinle paylaşılır.',
      ],
    },
    {
      baslik: 'İşin yürütülmesi ve sorumluluk',
      paragraflar: [
        'Halının cinsine uygun olmayan bir işlem talep edilirse (örneğin yün ya da ipek halının yüksek ısıda yıkanması) bu talep yerine getirilmez; sebebi açıklanır. Halı tamiri, saçak yenileme, halı boyama ve renk yenileme hizmet kapsamımız dışındadır.',
        'Halının önceden var olan yırtık, sökük, güve hasarı, renk akması veya solma gibi durumlarından sorumluluk kabul edilmez. Bu tür durumları alım sırasında tespit edip size bildiriyoruz; bildirilmemiş olması hâlinde de yıkama öncesi mevcut olan hasar kapsam dışındadır. Halınızla ilgili bildiğiniz özel bir durumu (daha önce yapılmış onarım, evde yıkama denemesi, kimyasal uygulama) alım sırasında paylaşmanız önemlidir.',
        'Yerinde yapılan işlerde (koltuk, yatak, perde) çalışma alanına erişim, su ve elektrik ile gerekiyorsa site/apartman izni aksi kararlaştırılmadıkça hizmet alana aittir. Halının bulunduğu kata erişimle ilgili özel bir durum varsa (asansör yok, dar merdiven, araç yanaşamıyor) randevu sırasında bildirilmesi gerekir.',
      ],
    },
    {
      baslik: 'İptal ve erteleme',
      paragraflar: [
        'Planlanan iş gününün iptali veya ertelenmesi durumunda mümkün olan en kısa sürede bilgi verilmesini rica ederiz. Ekip ve ekipmanın sahaya intikal ettiği durumlarda yol ve zaman kaybı için bir bedel talep edilebilir.',
      ],
    },
    {
      baslik: 'Değişiklikler',
      paragraflar: [
        'Bu şartlar zaman zaman güncellenebilir. Güncel sürüm her zaman bu sayfada yayınlanır.',
      ],
    },
  ],
}

export const legalPages = [gizlilik, sartlar]
