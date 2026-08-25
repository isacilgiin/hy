/**
 * Bekilli — bölge sayfası metni.
 *
 * BU DOSYA TEK BAŞINA İNER. src/pages/ServiceAreaDetail.jsx içindeki
 * import.meta.glob yalnızca açılan bölgenin dosyasını çekiyor; 61 bölgenin
 * metni tek pakette dursaydı her bölge sayfası 65 kB gzip indirirdi.
 *
 * İsim/slug/tür gibi hafif alanlar burada DEĞİL, src/data/bolgelerIndex.js'te.
 * Benzerlik ölçümü: node arac/model-testi/denetle.mjs
 */

export default {
  intro: [
    "Perde işi tek ziyarete sığmaz, çünkü sökme ile takma arasına yıkamanın kendisi giriyor. Bekilli'de randevuyu bu yüzden ikili kuruyoruz: perdeler halının alındığı gün sökülüyor, takılması ise teslim gününe yazılıyor. Sökme ve takma bize ait, sizden perdeyi indirmenizi ya da katlayıp hazırlamanızı istemiyoruz; kornişin yüksekliği ve perdenin kaç kanat olduğu randevuda konuşuluyor ki ekip doğru ekipmanla gelsin. İki iş aynı güzergâha bağlandığı için ilçeye sırf perde için ayrıca çıkılması gerekmiyor. Sökme ve takma günleri randevu alınırken birlikte söyleniyor, ikincisi sonradan sürprize bırakılmıyor.",
    "Tesiste tül ve stor perdeler ultrasonik perde yıkama makinesinde yıkanıyor. Buradaki önemli ayrıntı perdenin katlanmadan, düz halde yıkanıp düz halde kurutulması: kumaş kat yeri almadığı için takıldığında kendi ağırlığıyla düzgün duruyor, üzerinde kırık iz kalmıyor. Sineklik, is ve yağ kaynaklı lekeler yıkamadan önce ayrıca ele alınıyor. Perdeyi sökerken kanatları ve askı düzenini kaydediyoruz; geri takıldığında hangi kanadın nereye geleceği bu kayıttan çıkıyor, evde tahmin yürütülmüyor. Aynı evden çıkan tül ile stor da birbirine karışmayacak şekilde ayrı tutuluyor."
  ],
  yerelBaglam: "Bekilli bağcılığıyla anılan küçük bir ilçe; merkeze uzak ve Çal yönünden bağlanıyor. Hanelerden çıkan tekstilde perde çoğu zaman en son akla gelen parça oluyor: halı kaldırılırken perde yerinde kalıyor, oysa odanın en çok toz tutan yüzeyi o. Pencere önünde asılı durduğu için dışarıdan gelen tozu ve içeriden çıkan is ile mutfak buharını sürekli üzerine alıyor. Bu yüzden halı için aradığınızda perdeyi de soruyoruz; ikisi aynı programa girerse ilçeye yapılan tek çıkışta ikisi birden aynı takvime giriyor ve perde her seferinde ertelenen iş olmaktan çıkıyor.",
  note: "",
  sss: [
    { q: "Perdeyi kim söküyor, kim takıyor? Randevuya nasıl yazılıyor?", a: "Sökmeyi de takmayı da biz yapıyoruz ve ikisi için ayrı ücret çıkmıyor. Randevu ikili kuruluyor: sökme, halının alındığı güne; takma ise teslim gününe bağlanıyor. Aramanızda kaç pencerede, kaç kanat perde olduğunu ve kornişlerin yüksekliğini soruyoruz; sökme takım işi olduğu için ekip ve ekipman buna göre planlanıyor. Yüksek kornişlerde tek kişiyle çıkılmıyor. Sizden istediğimiz tek şey o iki gün evde birinin bulunması." },
    { q: "Perde yıkandıktan sonra kırışık mı geliyor?", a: "Gelmiyor, çünkü katlanmıyor. Tül ve stor perdeler ultrasonik perde yıkama makinesinde düz halde yıkanıyor ve düz halde kurutuluyor; kumaş hiçbir aşamada kat yeri almıyor. Perde geri takıldığında kendi ağırlığıyla iniyor ve düzgün duruyor. Katlanarak yıkanan bir perdede kat izleri kumaşta kalıcı çizgi bırakabiliyor; bu yöntemde o sorun baştan doğmuyor. İnce tüller de aynı şekilde, gerilmeden ve asılı halde ele alınıyor." },
    { q: "Perdesiz kalınan süreyi nasıl kısaltıyorsunuz?", a: "Sökme gününü halının alındığı güne denk getirerek. Perde tesise halıyla birlikte gidiyor, ikisi aynı teslim programına giriyor ve takma da halının bırakıldığı gün yapılıyor. Yani perdesiz geçen süre, halının tesiste kaldığı süreden uzun olmuyor. Perde tesiste beklemiyor, sırası halınınkiyle aynı. Pencere sayısı fazlaysa ve evin tamamını aynı anda boşaltmak istemiyorsanız sökmeyi odalara bölerek de planlayabiliyoruz; bunu randevuda konuşuyoruz. Salonun perdesi inerken diğer odalarınki yerinde kalabiliyor." }
  ],
}
