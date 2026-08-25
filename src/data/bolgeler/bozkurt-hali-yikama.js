/**
 * Bozkurt — bölge sayfası metni.
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
    "Bozkurt’tan gelen bir halıda belirleyici olan genel kir değil, tek tek lekelerdir. Halının büyük bölümü sıradan kullanım kiri taşırken üç beş noktada dokuya işlemiş ayrı bir iz oluyor: bahçeden içeri taşınan çamur, tarladan gelen toprak, sofradan düşen bir gıda, evcil hayvan kaynaklı bir leke. Bunların hepsi aynı şey değil ve tek bir programla çözülmüyor. Bu yüzden halıyı alırken lekenin ne olduğunu ve ne zaman oluştuğunu soruyoruz. Cevap 'bilmiyorum' olabilir, o da bilgi; ama biliniyorsa tesiste izleyeceğimiz yolun yarısı alım anında belli oluyor.",
    "Halı tesise girdiğinde lekeli bölgeler ön yıkama ve leke kontrolü adımında tek tek işaretleniyor ve alımda aldığımız bilgiyle karşılaştırılıyor. Leke çıkarıcı halının tamamına değil, işaretlenen noktaya ve halının cinsine göre uygulanıyor; yün bir halı ile makine halısı aynı müdahaleyi kaldırmıyor. Ardından halı normal yıkama hattına giriyor. Bu sıranın anlamı şu: leke, yıkama suyunun içinde kendiliğinden kaybolmasını umduğumuz bir şey değil, yıkamadan önce ayrıca ele alınan bir iş. Her lekenin çıkacağını da söylemiyoruz; çıkmayacak gibi görünen bir iz varsa halıyı teslim etmeden önce bunu haber veriyoruz."
  ],
  yerelBaglam: "Bozkurt, tarım ve hayvancılığın sürdüğü bir ova ilçesi; dokusu müstakil ve bahçeli ev ağırlıklı. Halının bulunduğu odaya bahçeden ya da iş kıyafetiyle doğrudan geçiliyor, dolayısıyla halının üzerine gelen şey sokak kiri değil, toprak, çamur ve iş kaynaklı izler oluyor. Bir de bahçeli evde halı çoğu zaman evcil hayvanla aynı yüzeyi paylaşıyor. Bu tabloda halının geneli temiz görünse bile birkaç noktası ayrı ilgi istiyor. Alımda halının tamamına değil o noktalara bakıyoruz; hanenin lekeyi daha önce neyle temizlemeye çalıştığını da öğrenmek istiyoruz. Halı aracımıza bu notlarla birlikte biniyor.",
  note: "",
  sss: [
    { q: "Halımdaki lekenin çıkıp çıkmayacağını önceden söylüyor musunuz?", a: "Çoğu durumda bir şey söyleyebiliyoruz, ama garanti vermiyoruz. Lekenin ne olduğu, ne kadar beklediği ve halının cinsi sonucu birlikte belirliyor; taze bir gıda lekesiyle aylarca bekleyip dokuya oturmuş bir iz aynı sonucu vermiyor. Halıyı alırken görüp ilk değerlendirmeyi yapıyoruz, ön yıkama adımında leke yakından görülünce bu netleşiyor. Çıkmayacağını düşündüğümüz bir iz varsa teslimden önce haber veriyoruz; halıyı geri götürüp sonucu orada konuşmayı doğru bulmuyoruz." },
    { q: "Leke tesiste hangi adımda ve nasıl ele alınıyor?", a: "Toz alındıktan sonraki ön yıkama ve leke kontrolü adımında. Halı açılıyor, lekeli noktalar tek tek işaretleniyor, alım sırasında not ettiğimiz bilgiyle eşleştiriliyor. Leke çıkarıcı halının tamamına değil işaretlenen bölgeye, halının cinsine ve havının yapısına göre uygulanıyor. Halı sonra otomatik yıkamaya giriyor. Yıkamadan sonra aynı noktalara bir kez daha bakılıyor. Alım sırasında verdiğiniz bilgi tesiste doğrudan bu adımda işe yarıyor." },
    { q: "Lekeyi evde çıkarmayı denedim, bu yıkamayı zorlaştırır mı?", a: "Bazen zorlaştırıyor, o yüzden denediğinizi bize söylemenizi istiyoruz. Ovalayarak yapılan müdahale lekeyi yüzeyden alıp havın dibine itebiliyor ve dokuyu açabiliyor. Kullanılan ürün halının rengiyle tepkimeye girdiyse kalan iz, lekenin kendisinden daha kalıcı olabiliyor. Ne uygulandığını bilmek tesiste seçeceğimiz yolu değiştiriyor; bilmiyorsak ne çıkacağını önceden söylememiz de zorlaşıyor. Lekeyi olduğu gibi bırakıp bize göstermeniz her zaman daha iyi sonuç veriyor." }
  ],
}
