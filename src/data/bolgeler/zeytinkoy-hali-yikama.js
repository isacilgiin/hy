/**
 * Zeytinköy (Pamukkale) — bölge sayfası metni.
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
    "Müstakil evde oturma odası ile misafir odası ayrı kullanılıyor ve çoğu adreste iki ayrı oturma grubu bulunuyor. Yerinde koltuk yıkama böyle bir evde tek odada bitmiyor; ünite kuruluyor, birinci takım bitiyor, sonra ekipman ikinci odaya taşınıyor ve iş yeniden kuruluyor. Bu yüzden randevuyu bir koltuk takımı üzerinden değil, iki takımın toplam parça sayısı üzerinden planlıyoruz. Telefonda sorduğumuz şey de bu: her odada kaç kişilik takım var, tekli koltuklarla birlikte kaç parça ediyor. İki takım aynı gün yıkanabiliyor, ama süre tek takımlı bir evin iki katına yaklaşıyor. Süreyi belirleyen şey oda sayısı değil, toplam parça sayısı oluyor.",
    "İki takım arasında bir fark daha var. Günlük kullanılan grupta kir yüzeyde ve belirgin; kolçaklarda ve oturma yerinde toplanıyor. Az kullanılan misafir takımı ise gözle bakıldığında temiz duruyor, ama yıllar içinde üzerine inen toz kumaşın dokusuna oturmuş oluyor ve elle bastırıldığında yukarı kalkıyor. Bu ikisi aynı iş değil: birinde belirli bölgelerde daha uzun çalışılıyor, diğerinde takımın tamamı baştan sona geçiliyor. Hangi odadan başlanacağına da buna göre karar veriyoruz; genellikle az kullanılan odayla başlıyor, günlük yaşanan odayı sona bırakıyoruz. Günün planını bu yüzden iki takıma birden bakarak kuruyoruz. Hangi odanın önce boşaltılacağını da bu sıraya göre söylüyoruz."
  ],
  yerelBaglam: "Zeytinköy'deki ev düzeni daireye göre geniş: odalar ayrı ayrı kullanılıyor, misafir odası günlük hayatın dışında kalıyor ve kapısı çoğu zaman kapalı duruyor. Bunun bizim tarafımızdaki karşılığı, tek adreste yan yana duran iki ayrı iş oluyor. Müstakil evde su ve elektrik erişimi de rahat oluyor, ünitenin kurulduğu yerle odalar arasındaki mesafe kısalıyor. Buna karşılık iki oda birden çalışıldığı için evin o günkü düzeni epeyce bozuluyor; her iki takımın da etrafında rahat dönülecek kadar yer açılması gerekiyor. İki takımlı adreslerde o güne başka iş yazmıyoruz. Odalar arasındaki geçişte ekipmanın taşınacağı yolun boş olması gerekiyor, buna da baştan bakıyoruz.",
  note: "",
  sss: [
    { q: "İki oturma grubu aynı gün yıkanabiliyor mu?", a: "Yıkanabiliyor; belirleyici olan oda sayısı değil toplam parça sayısı. İki üçlü, iki ikili ve birkaç tekli koltuktan oluşan bir ev tek ziyarette bitiyor. Parça sayısı bunun üzerine çıktığında ya gün boyu tek adreste kalıyoruz ya da işi ikinci güne bölüyoruz. Randevuda her iki odadaki takımı ayrı ayrı sayıp not ediyoruz, tahminle değil sayıya göre plan yapıyoruz." },
    { q: "Yılda birkaç kez oturulan misafir takımının yıkanmasına gerek var mı?", a: "Az kullanılan takımda kir yüzeyde görünmüyor, ama kumaşın dokusuna inen toz orada duruyor; koltuğa bastırdığınızda havaya kalkan şey bu. Odanın kapalı durması tozu azaltmıyor, görünmez kılıyor. Aynı gün ikinci takım olarak yıkatmak en pratiği, çünkü ünite zaten evde kurulu oluyor. İkinci takım günün planını değiştirdiği için randevuda baştan söylenmesi gerekiyor. İki takımın süresi tek seferde planlanıyor." }
  ],
}
