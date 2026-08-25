/**
 * Deliktaş (Pamukkale) — bölge sayfası metni.
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
    "Deliktaş'ta aynı sokakta iki bina yan yana duruyor: biri yüksek ve asansörlü, diğeri dört katlı, asansörsüz, merdiveni dar. Halı ikisinde de aynı halı, ama o halının kapıdan araca ulaşması iki binada aynı iş değil. Asansörlü tarafta iş dakikalarla ölçülüyor; asansöre verilen parça aşağıda bizi bekliyor. Diğer tarafta her parça basamak basamak iniyor, dönüşte aynı yol yeniden alınıyor. Bu yüzden randevu verirken adresi öğrenmek yetmiyor; binanın kaç katlı olduğunu ve asansörü bulunup bulunmadığını ayrıca soruyoruz. İki farklı sürenin çıkması sorun değil, hangisinin çıkacağını bilmeden güne adres yazmak sorun; o zaman plan daha ilk durakta bozuluyor.",
    "Bu bilgiyi merak ettiğimiz için değil, o güne kaç adres sığacağını hesaplamak için istiyoruz. Asansörsüz bir adres güne yazılırken önüne ve arkasına pay bırakılıyor; asansörlü adres ise daha sıkı yerleştirilebiliyor. Teslimde durum biraz kolaylaşıyor, çünkü geri gelen halı ıslak değil: suyunun büyük bölümü rulo sıkma makinesinde alınıyor ve taşınacak fazladan ağırlık kalmıyor. Yine de yukarı çıkarmak indirmekten uzun sürdüğü için asansörsüz adreslerin teslimi kendi dilimine yazılıyor. Aynı sokakta olmak bu iki adresi aynı saate koymaya yetmiyor, çoğu zaman aynı yarım güne bile sığmıyor."
  ],
  yerelBaglam: "Deliktaş'ın eski ve yeni tarafı aynı sokakları paylaşıyor. Bir köşede yıllar önce yapılmış, dört beş katlı, asansörsüz binalar duruyor; birkaç kapı ötede yeni bir blok yükseliyor. İkisinden de halı çıkıyor ve ikisi de bize aynı telefonla geliyor, ama sahada bunlar iki ayrı senaryo. Günün programını kurarken ikisini ayrı ayrı hesaplamak gerekiyor, yoksa gecikme o adreste kalmıyor, arkasındaki bütün adreslere yayılıyor. Bu yüzden burada program bir adres listesi olarak değil, bina bina süre tahmini olarak yazılıyor. Sokağın adı aynı olsa bile o sokaktaki her kapı kendi hesabını istiyor ve süresi ayrı yazılıyor.",
  note: "",
  sss: [
    { q: "Asansörsüz binada halı almak neden uzun sürüyor?", a: "Çünkü halı taşınırken katlanmıyor, rulo hâlinde iniyor ve dar merdivende dönüşler geniş yer istiyor. Her parça için merdiven bir kez iniliyor, bir kez çıkılıyor; parça arttıkça bu tekrar hızla büyüyor. Dördüncü kattaki üç parçalık bir iş, asansörlü binadaki aynı işin belirgin şekilde üstüne çıkıyor. Süreyi uzatan ağırlık değil, tekrarın kendisi. Kaç parça olduğunu telefonda net söylemeniz de bu yüzden işimizi kolaylaştırıyor." },
    { q: "Aynı sokaktaki iki adres aynı güne yazılabilir mi?", a: "Yazılabiliyor ama aynı saate değil. Binaların yüksekliği ve asansör durumu farklıysa iki adres arasına gerçekçi bir pay koyuyoruz. Asansörlü olanı öne, asansörsüz olanı arkaya alıyoruz; böylece uzun süren iş günü tıkamıyor. Adresler birbirine çok yakınsa araç arada yer değiştirmiyor, bu da bir miktar kazandırıyor. Kaçıncı katta oturduğunuzu söylerseniz iki adresi de doğru sıraya koyabiliyoruz." }
  ],
}
