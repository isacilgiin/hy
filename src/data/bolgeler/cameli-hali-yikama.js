/**
 * Çameli — bölge sayfası metni.
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
    "Çameli’de alma günü takvimden değil, o haftanın hava ve yol durumundan çıkıyor. Kış aylarında ilçeye giden yol her gün aynı değil; kar varsa randevuyu zorlamıyor, yolun açık olduğu güne kuruyoruz. Bu bir tercih değil, işin gerçeği: halı yüklü bir aracın kapalı yoldan geri dönmesi hem hanenin gününü hem bizim programımızı boşa harcıyor. Randevu ertelenecekse önceden haber veriyoruz ve yeni günü söylerken teslim tarihini de aynı pencereye göre veriyoruz, çünkü ikisi birbirine bağlı yürüyor. Alma günü kayarsa teslim günü de kayıyor; bunu ayrıca söylüyoruz.",
    "İlçeden gelen halıların ortak bir yanı var: kalınlar ve kışın günün büyük kısmı üzerlerinde geçiyor. Oturuluyor, uyunuyor, çocuk yerde oynuyor. Sürekli temas edilen bir yüzeyde yıkamadan sonra halının ne halde olduğu, ne kadar temiz göründüğünden daha çok şey ifade ediyor. Kullandığımız şampuanlar bitkisel, antialerjik ve antibakteriyel; seçimi halının cinsine ve nerede kullanıldığına göre yapıyoruz. Bu ayrıntı her yerde yazılabilecek bir cümle değil, Çameli gibi halının oturma yüzeyi olduğu bir ilçede somut bir karşılığı var."
  ],
  yerelBaglam: "Çameli dağlık ve ormanlık bir arazide kurulu, Denizli’nin merkeze en uzak ilçelerinden biri ve kışı karlı geçiyor. Bunlar bizim için manzara değil, plan verisi: ilçeye çıkılan gün sayısı sınırlı ve o gün alma ile teslim aynı programda yürüyor. Yerleşim müstakil ev dokusunda, bir haneden birden çok parça çıkabiliyor ve halılar kalın olduğu için taşınması iki kişilik iş. Randevu verirken ilçeye o hafta hangi gün çıkacağımızı söylüyor, hava kapanırsa hangi güne kayacağını da aynı konuşmada belirliyoruz. Hanenin halısız kalacağı günleri baştan bilmesi bu ilçede işin bir parçası.",
  note: "",
  sss: [
    { q: "Kış aylarında Çameli’ye geliyor musunuz, yol kapanırsa ne oluyor?", a: "Geliyoruz, ama günü yol belirliyor. Kar yağışı ya da kapalı yol varsa randevuyu iptal etmiyor, yolun açık olduğu ilk güne alıyoruz ve bunu size önceden bildiriyoruz. Halı henüz alınmadıysa erteliyoruz; alınmış bir halının teslimi gecikecekse de aynı şekilde haber veriyoruz. Alma günü kışın hafta içi bir güne sabitlenmiyor; hangi gün yol açıksa o gün çıkılıyor ve teslim de aynı mantıkla planlanıyor." },
    { q: "Yılın hangi döneminde yıkatmak daha rahat planlanıyor?", a: "Yolun sürekli açık olduğu aylarda gün seçmek serbest kalıyor; ilkbahar ve sonbaharda teslim tarihini hava koşuluna bağlamadan verebiliyoruz. Kışın da geliyoruz, tek fark günün esnek olmaması. Kalın halısını kışa girmeden yıkatmak isteyen haneler için sonbahar en rahat dönem: hem randevu sıkışmıyor hem halı kış başlarken temiz seriliyor, hem de kapanan bir yol yüzünden gün kaydırma ihtimali ortadan kalkıyor." },
    { q: "Şampuanın bitkisel ve antialerjik olması bizim için ne değiştiriyor?", a: "Çameli’de halı, üzerinde oturulan ve uyunan bir yüzey; kışın temas süresi günün büyük kısmını kaplıyor. Kullandığımız şampuanların bitkisel, antialerjik ve antibakteriyel olması tam bu yüzden yazılmaya değer bir ayrıntı. Halının cinsine göre hangisinin uygulanacağını tesiste belirliyoruz. Evde alerjisi olan biri ya da yerde oynayan çocuk varsa bunu alım sırasında söylemeniz bizim için bilgi, programı ona göre kuruyoruz." }
  ],
}
