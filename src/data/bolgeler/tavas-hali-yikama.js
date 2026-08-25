/**
 * Tavas — bölge sayfası metni.
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
    "Tavas'tan gelen halının en zor tarafı kirliliği değil ölçüsü. Ovadaki evlerin odaları geniş; salonlarda oda boyu tek parça halı ve ağır yün halı yaygın. Kuruyken tek kişinin omzunda taşıdığı böyle bir halı ıslandığında birkaç katı ağırlığa çıkıyor. Bahçede yıkamaya kalkan kişi genelde yıkarken değil, halıyı ters çevirmeye çalışırken duruyor; alt yüzü hiç yıkanmadan kalıyor. Bu ebattaki halılarda suyun halıdan çıkarılması, yıkamanın kendisi kadar iş; hattı da aracı da bu ölçüye göre planlıyoruz.",
    "Halıyı bölmüyoruz: oda boyu bir halı tek parça yıkanıyor ve tek parça geri gidiyor. Yıkamadan sonraki kritik adım sıkma. Rulo sıkma makinesinde halı boydan boya sarılarak geçiriliyor ve suyun yaklaşık %95'i alınıyor. Ağır yün halıda bu farkı elle hissedebiliyorsunuz; sıkmadan çıkan halı, hattın başında kaldırdığımız ağırlığa yakın dönüyor. İçinde su kalan kalın bir yün halı ise günlerce ağırlığını bırakmıyor ve o ağırlık halıyı kendi dokusundan çekiştiriyor. Sıkmadan çıkan halı bekletilmeden kurutmaya gidiyor; arada beklerse kalan suyu yeniden tabanda toplanıyor."
  ],
  yerelBaglam: "Tavas ovasında geniş odalı müstakil ev dokusu yaygın; ilçeye bağlı Kızılcabölük de dokumacılığıyla biliniyor. Bizim tarafımızdan bakıldığında bu, adrese çıkmadan önce kaç metrekare halının araca yükleneceğini bilmemiz gerektiği anlamına geliyor. Büyük ebat halı katlanmıyor, sarılarak taşınıyor: katlanan kalın halı kırıldığı yerden iz alıyor, dar kapıdan geçmesi de kolaylaşmıyor. Sarılmış halı araçta yatarak gittiği ve üstüne bir şey konulmadığı için tek seferde kaç parça alabileceğimizi randevuda konuşuyoruz. Araç yerleşimini adreste değil telefonda planlıyoruz; oda boyu iki halı çıkacaksa aracı ona göre boş gönderiyoruz.",
  note: "",
  sss: [
    { q: "Oda boyu büyük bir halı tek parça olarak yıkanabiliyor mu?", a: "Yıkanıyor. Hat, oda boyu halıyı boydan boya alacak şekilde çalışıyor; halının bölünmesi, katlanarak sokulması ya da iki seferde yıkanması gerekmiyor. Katlanarak yıkanan halıda kat yerleri hem yeterince yıkanmıyor hem de sıkmada suyu bırakmıyor; sonuç halının üzerinde çizgi çizgi kalıyor. Tek parça geçen halıda böyle bir ayrım olmuyor ve halı büyüdükçe bu düzenin farkı daha belirgin çıkıyor. Halının kaç metre olduğunu randevuda soruyoruz." },
    { q: "Suyun %95'inin alınması ağır yün halıda neyi değiştiriyor?", a: "Ağırlığı değiştiriyor. Yün elyaf suyu içine alıyor; sıkılmamış bir yün halı ıslak halde kendi ağırlığının birkaç katını taşıyor. Rulo sıkmada halı sarılmış halde bastırılarak geçiyor, su elyafın içinden dışarı alınıyor. Geriye kalan nem az olduğu için halı ne taşınırken zorluyor ne de kendi ağırlığıyla uzuyor. Büyük ebatta bu adım atlanırsa halı kuruduğunda boyu ve eni ilk ölçüsünde durmuyor." },
    { q: "Ağır bir halıyı evde ya da bahçede yıkamak neden mümkün olmuyor?", a: "Yıkamak değil, ıslak halıyla baş etmek mümkün olmuyor. Halı suyu aldığı anda tek kişinin çeviremeyeceği bir ağırlığa geliyor ve çevrilemeyen halının alt yüzü yıkanmadan kalıyor. İkinci sorun suyun atılması: bahçede sıkma imkânı olmadığı için su kendi ağırlığıyla aşağı iniyor, alt kenarda toplanıyor. Bu iki sebeple evde yıkanan büyük halı çoğu zaman temizlenmiyor, yalnızca ıslanıyor. Kuruması da uzuyor, çünkü suyu içinde kalıyor." }
  ],
}
