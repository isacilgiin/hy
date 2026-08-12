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

export const gizlilik = {
  slug: 'gizlilik-politikasi',
  baslik: 'Gizlilik Politikası',
  ozet:
    'Bu sayfada, 20 Karot web sitesinde hangi bilgilerin toplandığını, nasıl kullanıldığını ve haklarınızı açıkça anlatıyoruz.',
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
        'Bize telefon, WhatsApp veya e-posta ile ulaştığınızda paylaştığınız ad, telefon numarası, e-posta adresi, iş adresi ve projenize dair bilgileri işleriz. Bu verileri yalnızca talebinizi değerlendirmek, keşif planlamak, teklif hazırlamak ve işi yürütmek için kullanırız.',
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
        'Bu site 20 Karot’un tanıtım sitesidir. Sitedeki bilgiler genel bilgilendirme amaçlıdır ve mühendislik hizmeti, statik hesap veya proje danışmanlığı yerine geçmez.',
        'Site içeriği (metinler, görseller, tasarım) izinsiz kopyalanamaz, çoğaltılamaz veya başka bir mecrada yayınlanamaz.',
      ],
    },
    {
      baslik: 'Fiyat ve teklifler',
      paragraflar: [
        'Sitede yer alan hizmet açıklamaları fiyat taahhüdü içermez. Kesin fiyat, keşif sonrası işin kapsamına göre belirlenir ve tarafınıza yazılı veya sözlü olarak bildirilir.',
        'Verilen teklif; işin tarifi, ölçüler ve saha koşulları esas alınarak hazırlanır. Sahada bu koşulların önemli ölçüde farklı çıkması hâlinde teklif yeniden değerlendirilir ve işe başlamadan önce sizinle paylaşılır.',
      ],
    },
    {
      baslik: 'İşin yürütülmesi ve sorumluluk',
      paragraflar: [
        'Taşıyıcı sistem elemanlarına (kolon, perde, kiriş, döşeme) müdahale gerektiren işlerde statik proje ve yetkili mühendis onayı aranır. Onay olmadan bu tür işlere başlanmaz.',
        'İş sahibinin bildirmediği gizli tesisat, gizli donatı veya belgelenmemiş yapısal değişikliklerden kaynaklanan durumlarda sorumluluk kabul edilmez. Bu nedenle keşif sırasında bildiğiniz tüm detayları paylaşmanız önemlidir.',
        'Çalışma alanının işe hazır hâle getirilmesi (eşyaların kaldırılması, erişim sağlanması, gerekli izinlerin alınması) aksi kararlaştırılmadıkça iş sahibine aittir.',
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
