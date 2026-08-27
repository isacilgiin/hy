/**
 * Sık Sorulan Sorular — Denizli Tomay Halı Yıkama.
 *
 * Tek kaynak: hem /sikca-sorulan-sorular/ sayfası, hem llms.txt, hem de
 * FAQPage yapılandırılmış verisi (Google'da soru-cevap kutusu) buradan beslenir.
 *
 * `oneCikan: true` işaretli sorular llms.txt'ye ve ana FAQ şemasına girer.
 *
 * ┌──────────────────────────────────────────────────────────────────────────┐
 * │ İÇERİK KURALI                                                            │
 * │ • FİYAT RAKAMI YAZILMAZ. Site teklif usulü çalışıyor; fiyatı NEYİN       │
 * │   belirlediği anlatılır, rakam verilmez.                                 │
 * │ • Taahhüt verilmez: "her leke çıkar", "alerjinizi geçirir" gibi cümleler │
 * │   hem doğrulanamaz hem de sahada karşılığı yok.                          │
 * │ • Cevaplar docs/olgu-sayfasi.md §3'teki ekipman ve sürece dayanır.       │
 * │ • Blog yazılarıyla çakışmasın: burada KISA cevap, blogda uzun anlatım.   │
 * └──────────────────────────────────────────────────────────────────────────┘
 */

export const faqCategories = [
  { id: 'genel', title: 'Servis & Fiyat' },
  { id: 'hali', title: 'Halı Cinsleri ve Program' },
  { id: 'yerinde', title: 'Yerinde Hizmet' },
  { id: 'sure', title: 'Süreç & Teslimat' },
]

export const faq = [
  // ===== SERVİS & FİYAT =====
  {
    kategori: 'genel',
    oneCikan: true,
    q: 'Halıyı evden alıyor musunuz, servis ücretli mi?',
    a: 'Halıyı adresinizden biz alıyoruz ve yıkandıktan sonra yine adresinize teslim ediyoruz. Alım ve teslim için ayrıca ücret almıyoruz. Alma-teslim aracı her gün çıkıyor; tesisimiz ise Pazartesi–Cumartesi 08:00–19:00 arasında açık. Randevuyu telefonda evde birinin bulunduğu saate göre kuruyoruz ve alım ile teslimin aynı saate düşmesi gerekmiyor.',
  },
  {
    kategori: 'genel',
    oneCikan: true,
    q: 'Fiyat neye göre belirleniyor?',
    a: 'Halıda metrekare, halının cinsi ve tüy uzunluğu belirleyici; bunlara lekenin durumu ve adet ekleniyor. Koltukta oturma birimi sayısı ve kumaş tipi, perdede ise perde türü ile sökme-takma gerekliliği hesaba giriyor. Bu kalemler halıyı görmeden tam bilinemediği için siteye fiyat listesi koymuyoruz. Cinsini ve ölçüsünü söylediğinizde ya da WhatsApp\'tan fotoğraf gönderdiğinizde net fiyatı hemen iletiyoruz.',
  },
  {
    kategori: 'genel',
    q: 'Ödemeyi nasıl yapıyorum?',
    a: 'Ödeme teslimde, kapıda alınıyor: nakit ya da kredi kartı. Yıkamadan önce peşin ödeme istemiyoruz. Fiyat alım sırasında netleşiyor ve teslimde aynı rakam geçerli oluyor; halıyı gördükten sonra fiyat değiştirmek gibi bir uygulamamız yok. Değişiklik gerektiren tek durum, alım sırasında bilinmeyen bir işin sonradan ortaya çıkması — o da size sorulmadan yapılmıyor.',
  },
  {
    kategori: 'genel',
    q: 'Hangi ilçelere gidiyorsunuz?',
    a: 'Denizli\'nin 19 ilçesinin tamamına gidiyoruz. Değişen şey hizmetin kendisi değil planlaması: merkez ve yakın ilçelerde alma-teslim günübirlik yapılabiliyor, uzak ilçelerde aynı bölgedeki adresleri aynı güne toplayarak çıkıyoruz. Bu yüzden uzak ilçelerde alma günü telefonda birlikte belirleniyor. Her ilçenin kendi sayfasında o bölgede işin nasıl kurulduğu ayrıca yazılı.',
  },
  {
    kategori: 'genel',
    q: 'Halımda yırtık veya sökük var, yine de yıkar mısınız?',
    a: 'Yıkarız, ama önce size söyleriz. Alım sırasında ve yıkamadan önce halıyı gözden geçiriyoruz; yırtık, sökük, güve hasarı veya daha önce yapılmış bir onarım varsa bunu teslimde değil baştan bildiriyoruz. Yıkama sırasında mevcut hasarın büyüme ihtimali varsa bunu da söylüyoruz. Halı tamiri, dokuma onarımı ve saçak yenileme yapmıyoruz — o ayrı bir atölye işidir.',
  },

  // ===== HALI CİNSLERİ VE PROGRAM =====
  {
    kategori: 'hali',
    oneCikan: true,
    q: 'Her halı aynı programda mı yıkanıyor?',
    a: 'Hayır. Makinemiz 16 fırçalı ve fırça sertliği ayarlanabiliyor; program halının cinsine göre kuruluyor. Makine halısı standart ayarla yıkanırken el dokuma ve yün halı düşük ısı ile yumuşak fırça istiyor, ipek ve Nepal halılarda ıslanma süresi sınırlı tutuluyor, shaggy ve uzun tüylülerde fırça ayarı tüy uzunluğuna göre değişiyor. Aynı makinede yıkanıyorlar ama aynı ayarla değil.',
  },
  {
    kategori: 'hali',
    q: 'El dokuma halımın rengi akar mı?',
    a: 'El dokuma ve yün halılardaki boya makine halısındaki sentetik boya gibi sabit değil; sıcak suyla ve sert fırçayla yıkandığında komşu alana akabiliyor. Bu yüzden bu halılarda yıkamadan önce görünmeyen bir noktadan renk akma testi yapıyoruz. Test olumsuz çıkarsa programı değiştiriyor, gerekirse yıkamayı yapmayacağımızı söylüyoruz. Riski görmezden gelip yıkamak, sonradan telafisi olmayan bir hasar bırakıyor.',
  },
  {
    kategori: 'hali',
    q: 'İpek halı yıkıyor musunuz?',
    a: 'Yıkıyoruz, ancak önce değerlendiriyoruz. İpekte değerli olan şey desen kadar lifin parlaklığıdır ve o parlaklık zarar gördüğünde geri gelmiyor. Bu halılar bol suyla, yüksek devirde ve alkali şampuanla yıkanmaz; ıslanma süresi sınırlı tutulur, bir bölümü elle yapılır, kuruma kontrollü nemde yürütülür. Değerlendirme sonucunda yıkamanın riskli olduğunu düşünürsek bunu açıkça söylüyoruz.',
  },
  {
    kategori: 'hali',
    q: 'Shaggy halımın tüyleri yatar mı?',
    a: 'Doğru fırça ayarıyla yatmaz. Uzun tüyde asıl sorun görünen kir değil, tüplerin dibine inen ve elektrikli süpürgenin ulaşamadığı toz; o tozu çıkarmak için tüyü dibinden hareket ettirmek gerekiyor. Fırça fazla sert olursa tüy yatar ve keçeleşir, fazla yumuşak olursa dibe inemez. Fırça sertliğini tüy uzunluğuna göre ayarlıyor, kuruma sonrasında da tüyü kabartıyoruz.',
  },
  {
    kategori: 'hali',
    q: 'Evcil hayvan kokusu ve tüyü çıkar mı?',
    a: 'Tüy, yıkama öncesi toz çırpma ve fırçalama ile büyük ölçüde çıkıyor. Koku ise nereden geldiğine bağlı: yüzeyde kalan bir koku yıkamayla gidiyor, halının tabanına işlemiş idrar gibi durumlarda sonuç halının cinsine ve olayın üzerinden geçen süreye göre değişiyor. Böyle bir durum varsa alım sırasında söylerseniz programı ona göre kuruyoruz. Kesin sonuç sözü vermiyoruz; ne beklemeniz gerektiğini baştan söylüyoruz.',
  },
  {
    kategori: 'hali',
    q: 'Solmuş halı yıkanınca rengi geri gelir mi?',
    a: 'Gelmez. Yıkama halıdaki kiri alır, rengi geri getirmez. Güneşte solmuş ya da yıllar içinde matlaşmış bir halı yıkandığında daha temiz ve daha canlı görünür — çünkü üstündeki gri toz tabakası kalkar — ama solmuş olan kısım solmuş kalır. Halı boyama ve renk yenileme yapmıyoruz. Yıkamadan renk beklentiniz varsa bunu baştan konuşalım.',
  },

  // ===== YERİNDE HİZMET =====
  {
    kategori: 'yerinde',
    oneCikan: true,
    q: 'Koltuğu alıp götürüyor musunuz?',
    a: 'Hayır, koltuk evden çıkmıyor. Ekip yüksek basınçlı vakumlu makineyle adresinize geliyor ve iş baştan sona orada yapılıyor. Koltuğu taşımak hem gereksiz bir risk — kapı ve merdiven geçişlerinde kumaş zarar görebiliyor — hem de gereksiz bir bekleme olurdu. Yatak ve baza için de aynı şey geçerli. Halı, perde ve yorgan ise tesise geliyor.',
  },
  {
    kategori: 'yerinde',
    q: 'Koltuk temizlendikten sonra ne zaman oturabilirim?',
    a: 'Kumaşa ve odanın havalandırmasına göre değişiyor, çoğu koltuk aynı gün kullanılabilir hâle geliyor. Vakumlama adımında kirli suyun büyük bölümü geri çekildiği için koltuk ıslak değil nemli kalıyor. Odayı birkaç saat havalandırmanızı öneriyoruz. Kolçak ya da arka panelde deri bölge varsa onun ne zaman kullanılabileceğini ayrıca söylüyoruz.',
  },
  {
    kategori: 'yerinde',
    q: 'Perdeyi kim söküyor?',
    a: 'Sökme ve tekrar takma bize ait, bunun için ayrıca ücret almıyoruz. Stor ve zebra perdeler mekanizmalı olduğu için evde yıkanmaya uygun değil: katlanarak yıkanan kumaşta kalıcı kırık oluşuyor, makinede döndürülen mekanizma bozuluyor. Perdeleri ultrasonik makinede, katlamadan ve düz hâlde yıkıyoruz. Sökme-takma ekip işi olduğu için bu hizmet randevu ile planlanıyor.',
  },
  {
    kategori: 'yerinde',
    q: 'Yatak temizliği gerçekten gerekli mi?',
    a: 'Yatakta gözle görülen leke çoğu zaman asıl konu değil. Yüzeyde biriken ölü deri hücreleri toz akarının beslendiği şey ve çarşaf yıkamak bu tabakaya ulaşmıyor. Yatak yerinde, vakumlu üniteyle temizleniyor. Buradaki sınır ıslatma miktarı: iç dolguya su geçerse dolgu tam kurumuyor ve içeride nem kalıyor, bu yüzden yüzeyle sınırlı çalışıyoruz. Sağlıkla ilgili bir sonuç vaat etmiyoruz.',
  },
  {
    kategori: 'yerinde',
    q: 'Yerinde hizmet için evde ne hazırlamam gerekiyor?',
    a: 'Özel bir hazırlık gerekmiyor. Koltuğun çevresinde ekibin rahat dolaşabileceği kadar boşluk olması ve su ile elektriğe erişim yeterli. Minderlerin üstündeki eşyaları toplarsanız iş hızlanıyor. Çalışma alanını biz koruma altına alıyoruz. Apartmanda asansör yoksa ya da araç kapıya yanaşamıyorsa bunu randevu sırasında söylerseniz ekip ona göre çıkıyor.',
  },

  // ===== SÜREÇ & TESLİMAT =====
  {
    kategori: 'sure',
    oneCikan: true,
    q: 'Halım kaç günde teslim ediliyor?',
    a: 'Ortalama 3-4 iş günü. Süreyi belirleyen şey yıkamanın kendisi değil kuruma: yün, shaggy ve ipek halılar makine halısından daha uzun sürede kuruyor. Kuruma bizde süre değil şart — tam kurumadan paketlemiyoruz, çünkü nemli katlanan halıda küf kokusu birkaç gün içinde başlıyor ve bir daha çıkmıyor. Halınız hazır olduğunda arayıp teslim randevusu veriyoruz.',
  },
  {
    kategori: 'sure',
    oneCikan: true,
    q: 'Halılar birbirine karışır mı?',
    a: 'Karışmaması için etiketleme yıkamada değil kapıda yapılıyor. Aynı gün birden çok haneden halı toplandığı için her halı alındığı anda etiketleniyor ve hangi adresten geldiği kaydediliyor. Etiket süreç boyunca halının üstünde kalıyor, paketlemede çıkarılıyor. Aynı desende iki halının farklı hanelerden gelmesi düşündüğünüzden sık oluyor; sistem bunun için var.',
  },
  {
    kategori: 'sure',
    q: 'Halı nerede kurutuluyor?',
    a: 'Kapalı kurutma odalarında. Açık havada ya da balkonda kurutulan bir halı kururken toz ve rutubet alıyor; yeni yıkanmış bir halının üstüne inen toz, yıkamanın bir bölümünü geri alıyor. Kapalı oda dış etkenlerden izole olduğu için halı yıkandığı temizlikte kuruyor. Bu, kış aylarında evde halı yıkamanın neden pratikte mümkün olmadığının da cevabı.',
  },
  {
    kategori: 'sure',
    q: 'Halı nasıl teslim ediliyor?',
    a: 'Son kontrolden geçen halı parfümleniyor, ambalajlanıyor ve adresinize getiriliyor. Ambalaj taşıma sırasında halının tekrar toz almasını önlüyor; halıyı serene kadar paketinde bırakabilirsiniz. Teslimde varsa yıkama öncesinde tespit ettiğimiz hasarları da birlikte gözden geçiriyoruz. Ödeme teslimde nakit veya kredi kartıyla alınıyor.',
  },
  {
    kategori: 'sure',
    q: 'Yıkama sırasında halım küçülür mü?',
    a: 'Makine halısında böyle bir risk yok. Doğal elyaflı halılarda — yün ve el dokumalarda — ıslakken çekme ihtimali var ve bunun sebebi yıkamanın kendisi değil, yanlış sıcaklık ile kontrolsüz kuruma. Bu yüzden bu halıları düşük ısıda yıkıyor, kurumayı kontrollü yürütüyoruz. Teslimden önce ölçüyü yıkama öncesiyle karşılaştırıyoruz.',
  },
  {
    kategori: 'sure',
    q: 'Yorganı ev makinemde yıkasam olmaz mı?',
    a: 'Yorganın temizlenebilmesi için makine içinde serbestçe dönebilmesi gerekiyor. Ev tipi makinede sıkışan yorgan dönmüyor; su ve deterjan içeri işlemiyor, işlese de dışarı çıkmıyor — yorgan yıkanmıyor, sadece ıslanıyor. Endüstriyel makinede yorgan rahat dönüyor ve iç dolgusuna kadar durulanıyor. Asıl kritik adım kurutma: dolgu tam kurumadan katlanan yorgan içeriden küfleniyor.',
  },
]

export default faq

/**
 * llms.txt ve ana FAQPage şemasına giren kısa liste.
 *
 * Neden tamamı değil: FAQPage şeması sayfada GÖRÜNEN soruları işaretlemek
 * içindir ve 22 sorunun tamamını ana sayfa şemasına basmak hem gereksiz hem
 * de Google'ın "sayfada olmayan içeriği işaretleme" kuralına yaklaşır.
 * `oneCikan: true` işaretli sorular en sık sorulanlar.
 */
export const oneCikanFaq = faq.filter((s) => s.oneCikan)
