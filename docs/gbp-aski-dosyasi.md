# Google İşletme Profili askı dosyası

> Durum: **askıda** — gerekçe "Aldatıcı içerik". İtiraz 27.08.2026'da reddedildi.
> Bu dosya 28.08.2026'da hazırlandı. Sıradaki adım: kalıcı tabela → fotoğraf → ek inceleme.

**Bu dosya yayına girmiyor** (`docs/` build çıktısına kopyalanmıyor), ama repoda duruyor.
Depo herkese açıksa içeriğinde işletme sahibinin adı ve iş yeri bilgileri geçtiğini bil.

---

## 1. Teşhis

İki ayrı eksik var ve ikisi birlikte hem askıyı hem başarısız video doğrulamasını açıklıyor.

### Eksik 1 — adres metni çakışıyor

Aynı sokak adresinde, aynı kategoride ikinci bir kayıt yayında:

| | Bu işletme | Miray Halı Yıkama |
|---|---|---|
| Adres | Pamukkale Sk. No:17 **İç Kapı No:2** | arı kremit fabrikası, Pamukkale Sk. **no 17** |
| Posta kodu | 20020 Merkezefendi | 20020 Merkezefendi |
| Kategori | Halı Temizleme Hizmeti | Halı Temizleme Hizmeti |
| Telefon | 0537 372 67 04 | 0553 169 91 09 |
| Durum | **Askıda** | **Yayında** |

Miray gerçek bir komşu işletme (işletme sahibi teyit etti). Google'ın kuralı iki gerçek
işletmenin aynı adreste bulunmasına izin veriyor — **şartı: farklı ad + tabelada belirgin fark.**
İkisi de sağlanmıyordu.

### Eksik 2 — tabelada işletmenin adı yazmıyor

Kapıdaki pankartta yalnızca `Denizli Halı Yıkama` yazıyor. Bu bir işletme adı değil, arama
kelimesi — markanın kendisi ("Tomay") hiç geçmiyor. Ayrıca pankart, Google'ın "kalıcı tabela"
tanımına girmiyor.

Google'ın video doğrulama şartı: *videoda gösterilen ad, profildeki adla aynı olmalı* ve ad
**kalıcı bir demirbaşta** yazmalı. Video doğrulamasının tekrar tekrar elenmesinin en olası
açıklaması bu.

### Bu ikisi neyi açıklıyor

| Gözlem | Açıklaması |
|---|---|
| İsim varyantlarının hepsi askıya alındı | Hangi ad denenirse denensin tabela onu söylemiyordu |
| Video doğrulaması kurtarmadı | Video tesisi kanıtlar, adı kanıtlayamaz |
| Belgeler kusursuz ama işe yaramadı | Belgeler varlığı kanıtlıyor, çakışmayı ve ad eşleşmesini çözmüyor |

**Uyarı:** Askının gerçek sebebini Google açıklamıyor. Yukarıdakiler olasılık sıralamasıdır,
kanıt değil. Miray'ın askıyla ilişkisi *kanıtlanmadı* — en fazla ağırlaştırıcı bir sinyal.

---

## 2. Konum

İşletme sahibinin kapıda ölçtüğü koordinat:

```
37°49'10.5"N 29°06'55.2"E
Plus Code: R498+R4P   (tam: 8G9FR498+R4P)
```

Ham koordinatla Plus Code çözümü arasında 0,7 m fark var. `siteConfig.js > geo` bu değere
güncellendi (önceki değer bir adres araması sonucuydu ve kapıdan 63 m uzaktaydı).

Çevredeki kayıtların Google'daki iğnelerine mesafe:

| Mesafe | Kayıt | Plus Code |
|---:|---|---|
| 0 m | **Bu işletme** | R498+R4P |
| 26 m | Horoz çelik kapı | R498+V2 |
| 90 m | Horozteam — Pamukkale Sk. No:21 | R497+MQ |
| 119 m | **Miray Halı Yıkama** | R497+XJ |
| 132 m | King çelik kapı | R497+CR |

Miray fiilen bitişik komşu ama iğnesi 119 m ötede. Yani Google iki kaydı **konumdan değil,
adres metninden** eşleştiriyor. Ayırt edici tek unsur `İç Kapı No:2`.

---

## 3. Tabela

Dosyadaki en yüksek getirili harcama: askıyı, gelecekteki her doğrulamayı ve ad eşleşmesini
aynı anda çözüyor.

### İki yere birden

**① Fabrika girişindeki ortak pano**
```
20 DENİZLİ TOMAY HALI YIKAMA
```
Panoda ayrılan yer neyse ona uy — 50×50 cm uygun. Denetçi adrese vardığı anda adı görür;
tesis içindeki işletmeler için Google'ın beklediği tam olarak budur.

**② Kendi kapının üstü**
```
20 DENİZLİ TOMAY HALI YIKAMA
Fabrikasyon Halı Yıkama        (isteğe bağlı alt satır)
```
Yapabiliyorsan **yatay**: 100×35 veya 120×40 cm. 50×50'ye bu ad üç satıra bölünür, harf ~8 cm
kalır ve uzak çekimde okunmaz.

**③ Kapının yanına ayrı küçük plaka**
```
İÇ KAPI NO: 2
```
Miray'dan ayrıştığını gösteren fiziksel işaret.

### Malzeme

**Pankart olmaz.** Kuşgözlü asma pankart kalıcı tabela sayılmıyor — yazı doğru olsa bile düşer.
Kompozit veya pleksi, kapının üstüne vidalı; ya da kapıya doğrudan uygulanmış kalıcı folyo.

### Neden "20" kalıyor

Ek inceleme formu, işletme kaydının **adı ve adresi profille eşleşsin** diye şart koşuyor.
Vergi levhası `20 DENİZLİ TOMAY HALI YIKAMA` diyor, profil de. Tabela da aynısını söylerse
tabela + levha + fatura + profil dördü birden tutar.

Baştaki sayı öneki ayrı bir risk (Google sayı öneklerini "mağaza kodu" sayıp yasaklıyor), ama
masadaki dava o değil — askıdayken ikinci cephe açmak zarar verir. Profil açıldıktan sonra
ayrıca ele alınır.

**Mevcut pankartın fotoğrafını değiştirmeden önce çek ve sakla.**

---

## 4. İtiraz metni

> ### ⚠ KRİTİK — "eskiden yanlıştı, düzelttik" YAZMA
>
> Ne adres, ne saat, ne kuruluş yılı için. Eski değerleri, eski tarihleri ve "hatalıydı"
> ifadesini dosyaya koyma. Zaten *aldatıcı içerik* damgası vurmuş bir inceleyiciye, yanlış
> beyanın yazılı ikrarını vermiş olursun. Yalnızca **bugünkü durumu** yaz — bilgi aynı,
> risk sıfır.

Aşağıdaki metin forma olduğu gibi yapıştırılabilir.

---

```
İşletme adı: 20 DENİZLİ TOMAY HALI YIKAMA
Adres: Eskihisar Mah. Pamukkale Sk. No:17 İç Kapı No:2,
       Arı Kiremit Fabrikası, 20020 Merkezefendi / Denizli
Konum: 37°49'10.5"N 29°06'55.2"E — Plus Code R498+R4P

Bu adreste tescilli ve fiilen faaliyette olan işletme benim işletmemdir. Mevlüt
Furkan Tomay adına düzenlenmiş vergi levhası; ticaret unvanı 20 DENİZLİ TOMAY
HALI YIKAMA, ana faaliyet kodu 961004 "Halı ve Kilim Yıkama Hizmetleri" ile
ektedir.

İşletmemiz, eski Arı Kiremit Fabrikası binasının bölünmesiyle oluşturulmuş
bağımsız birimlerden birinde faaliyet göstermektedir. Bina tek bir dış kapı
numarası (No:17) taşımakta, içindeki birimler iç kapı numaralarıyla
ayrılmaktadır. Bizim birimimiz İç Kapı No:2'dir ve yukarıda belirtilen
koordinatta yer almaktadır. Birimimizin kendi girişi, kendi kalıcı tabelası ve
kendi ticari elektrik aboneliği bulunmaktadır.

Aynı adreste bize ait olmayan, farklı telefon numarasına sahip ikinci bir halı
yıkama kaydı bulunmaktadır; bu işletmeyle hiçbir ilgimiz yoktur.

Ekteki belgeler:

1. Vergi levhası — işletme adı ve adresi profildekiyle aynıdır.

2. Ticari elektrik faturası — abonelik işletmemiz adına kayıtlıdır. Kurulu güç
   25,20 kW, yıllık tüketim 51.583 kWh'dir. Birimimizin kendi sayacı vardır.

3. Kira sözleşmesi — yalnızca İç Kapı No:2 numaralı birim için düzenlenmiştir.

4. İş yeri fotoğrafları — fabrika girişindeki tabela, birimimizin kapısındaki
   tabela, iç kapı numarası ve halı yıkama üretim alanı.

denizlihaliyikama.net.tr adresindeki web sitemizde yer alan işletme adı, adres,
telefon, çalışma saatleri ve kuruluş yılı, İşletme Profilimizdeki bilgilerle
birebir aynıdır.

Profilimizin yeniden değerlendirilmesini talep ederiz.
```

---

Metin komşu işletmeden **tek tarafsız cümleyle** bahsediyor — ne suçlama, ne "bu yüzden askıya
alındık" tezi. Kanıtlanamayan bir iddiayı dosyanın merkezine koymak zayıflatır; inceleyici
haritaya baktığında zaten görecek, hazırlıksız yakalanmamak yeterli.

---

## 5. Form: nereden ve hangi alan

**`support.google.com/business/contact/local_appeals`**
→ *"Reddedilmiş bir itiraz için ek inceleme isteğinde bulunma"*

İtiraz aracı askı başına bir kez kullanılıyor. Bu ondan **ayrı bir kanal** ve red kararıyla
açılıyor.

| Form alanı | Ne yazılacak |
|---|---|
| İşletme Profili Kimliği | `17463107717893528129` — panele girilemiyorsa Google'ın askı e-postalarında da geçiyor |
| Profilin **askıya alındığı** tarih | ⚠ Bu **askı** tarihi. `27.08.2026` **red** tarihidir, buraya yazılmaz — red tarihi serbest metinde belirtilir |
| Profili yöneten resmî e-posta | Profilin bağlı olduğu Gmail |
| İşletme kaydı / lisansı | Vergi levhası ✅ adı ve adresi profille eşleşiyor |
| Fatura | Aydem elektrik faturası ✅ abone adı "Mevlüt Furkan Tomay - 20 Denizli Tomay Halı" — kurulu güç ve yıllık tüketim satırı görünsün |
| Gerekçe | Yukarıdaki metin |

Sonuç formda görünmez, **e-postayla gelir** — 5 iş gününe kadar. Karar gelmeden ikinci başvuru
gönderilmez.

---

## 6. Canlı görüntülü doğrulama

Kayıtlı video yerine, randevuyla bir Google temsilcisinin görüntülü bağlandığı yöntem. **Bu
dosya için kayıtlı videodan daha iyi:** sorun bağlamsal (paylaşımlı bina, aynı işi yapan komşu,
iç kapı numarası) ve kayıtlı videoda bunu anlatamazsın.

**Sıralamayı karıştırma:** askı itirazı belge üzerinden yürür (şu an buradasın), doğrulama ayrı
bir süreçtir. Canlı görüşme ancak profil doğrulamaya düşerse gündeme gelir — şimdi aranacak bir
düğme yok.

Geldiğinde hazır olacaklar:

- **İşletmeden bağlan**, evden değil. Telefon şarjlı, internet iyi.
- **Dışarıdan başla:** sokak levhası → bina numarası → girişteki ortak panoda kendi adın →
  içeri yürü → kendi kapının tabelası → İÇ KAPI NO: 2 plakası → içeri.
- **Kapıyı sen aç.** Anahtarın sende olması yetkili olduğunun kanıtı; özellikle isterler.
- **Makineler çalışsın.** 16 fırçalı makine, kapalı kurutma odası, halılar.
- **Elektrik sayacını göster.** Komşudan ayrı sayacın olduğunu canlı göstermek, dosyada yazılı
  olan her şeyi tek hamlede kanıtlar.
- Vergi levhası (zaten asılı olmalı), fatura ve kira sözleşmesi elinin altında olsun.

---

## 7. Sıra

| # | Adım | Not |
|---|---|---|
| 0 | Mevcut pankartı fotoğrafla | 5 dakika, değiştirmeden önce |
| 1 | İki tabelayı yaptır ve as | **Kilit adım.** Kalıcı malzeme |
| 2 | Beş fotoğraf | Aşağıdaki liste |
| 3 | Askı tarihini bul | Google'ın askı e-postasında |
| 4 | Ek inceleme gönder | **Tek atış varsay** |
| 5 | Paralel: temiz hesabı yönetici ekle | Risksiz, bedava teşhis |
| 6 | Açılırsa: tek tek düzelt | Aralarında haftalar bırak |

### Beş fotoğraf

1. Sokak levhası + bina + kendi tabelan **aynı karede** (şart)
2. Girişteki ortak panoda kendi şeridinin yakın çekimi
3. Kapı tabelasının yakın çekimi + İÇ KAPI NO: 2 plakası
4. Komşu birimlerin kapıları — ayrı girişler görünsün
5. 16 fırçalı makineler çalışırken + kapalı kurutma odası

### Göndermeden önce

- [ ] İki kalıcı tabela asıldı, ikisinde de `20 DENİZLİ TOMAY HALI YIKAMA` yazıyor
- [ ] İÇ KAPI NO: 2 plakası asıldı
- [ ] Sokak levhası + bina + tabela aynı karede olan fotoğraf çekildi
- [ ] Elektrik faturasında kurulu güç ve yıllık tüketim satırı görünüyor
- [ ] Kira sözleşmesinde İç Kapı No:2 yazıyor
- [ ] Askı tarihi (red tarihi değil) bulundu
- [ ] Metinde eski değerlerden ve "düzelttik"ten hiç bahsedilmiyor

---

## 8. Yapılmayacaklar

1. **"Eskiden şöyleydi, düzelttik" yazmak.** Yanlış beyanın yazılı ikrarı olur.
2. **Komşu işletmeyi şikâyet etmek.** Gerçek bir esnaf; hem yanlış hem geri teper. Talep her
   zaman "düzeltme" olur, "kaldırma" değil.
3. **"Miray yüzünden askıya alındım" tezini dosyanın merkezine koymak.** Kanıtlanamıyor.
4. **Komşu kayıtları, mesafeleri, "bölge kirli" savunmasını dosyaya koymak.** Dosyayı
   savunmadan suçlamaya kaydırır ve aynı testin kendi adresine uygulanmasını davet eder.
5. **Yandex, firma rehberi, forum kayıtlarını delil diye sunmak.** Üçüncü taraf siteler delil
   sayılmıyor.
6. **Askıdayken profilde ad, adres, kategori veya telefon oynatmak.** Art arda düzenleme başlı
   başına tetikleyici.
7. **Yeni profil, yeni Gmail, ikinci hesap açmak.** Kalıcı askıya giden en yaygın hata.
8. **Miray kaydını sahiplenmek.** Kendine ait olmayan kaydı talep etmek yanlış beyandır.
9. **Karar gelmeden ikinci başvuru göndermek.**
10. **Profili silmek veya ev adresine taşımak.** Vergi levhası ve fatura profille çelişir; en
    güçlü kanıt aleyhte delile döner.
11. **Tabela hazır olmadan yeni video çekmek.** Deneme hakkı pratikte tükeniyor.
12. **"Garantili profil açtırma" satan kimseye para vermek.**

### Ajans hesabı sorusu

**Özel bir kanal yok.** Google'ın ajanslara verdiği "organizasyon hesabı" birden çok şubeyi
yönetmek için; toplu doğrulama zaten aynı işletmenin 10+ lokasyonunu gerektiriyor ve tek bir
askılı kayıt için kısayol değil. Askı incelemesini atlatmıyor, doğrulamayı atlatmıyor.

Ajansın sattığı şey deneyimdir, ayrıcalık değil — ve bu dosyada zaten olan şey odur.
**Riski var:** ajansın kendi Google hesabı bayraklıysa (spam yapan ajanslarda olur), yönetici
olarak eklendiğinde seninkine de bulaşabilir. Temiz hesap testini (Adım 5) kendi bildiğin
temiz bir hesapla yap, tanımadığın ajansla değil.

---

## 9. Doğrulananlar ve bilinmeyenler

### Doğrulandı

| Bulgu | Kaynak |
|---|---|
| Miray Halı Yıkama aynı adres ve kategoride yayında | Google Haritalar |
| Miray gerçek bir komşu işletme | İşletme sahibi |
| Kapıdaki pankartta "Denizli Halı Yıkama" yazıyor | İşletme sahibi |
| Koordinat R498+R4P, Miray'a 119 m | Plus Code çözümü, 0,7 m sapma |
| Ek inceleme formu canlı ve Türkçe | Google destek sayfası |
| Elektrik faturası işletme adına | Faturanın kendisi |
| Site artık profil ve levhayla birebir | Canlı JSON-LD |
| Halı yıkama, Google'ın "yüksek riskli sektör" listesinde **değil** | "Sektörümüz riskli" açıklaması elenir |

### Bilinmiyor

1. **Askının gerçek sebebi.** Google açıklamıyor. Teşhis olasılık sıralamasıdır, kanıt değil.
2. **Miray'ın askıyla ilişkisi.** Ne "sebep" ne "sebep değil" gösterilebildi.
3. **Video doğrulamasının hangi gerekçeyle elendiği.** Tabela–ad tezi en güçlü aday, teyit
   edilmedi. Redse gerekçe profildeki "Sorunları inceleyin" alanında yazar.
4. **Video doğrulaması kabul mü edildi red mi.** "Yapıldı ama onaylanmadı" ikisini de karşılıyor.
5. **Yönetici Google hesabının kendisi işaretli mi.** Adım 5 bunu bedavaya test ediyor.
6. **Ek inceleme formu birden çok kez gönderilebilir mi.** Hiçbir Google metni sınır
   belirtmiyor — **tek atış varsay.**
7. **Kira sözleşmesinde iç kapı numarası yazıyor mu.**
8. **Askıdaki bir profilde ad ve adres alanları düzenlenebiliyor mu.**
9. **Sitenin eski adres değerinin ne kadar süre yayında kaldığı.** Depodaki iki kayıt çelişiyor
   (`docs/olgu-sayfasi.md` JSON-LD'den ölçüldüğünü, `siteConfig.js` sözlü alındığını yazıyor).
   Bu yüzden Google'a hiçbir biçimde yazılmıyor.
10. **Türkiye AEA üyesi olmadığı için** Google'ın mahkeme dışı uyuşmazlık çözümü yolu kapalı.

---

## 10. İlgili dosyalar

| Dosya | Ne var |
|---|---|
| `src/data/siteConfig.js` | `googleBusinessName` (s.47), adres bloğu, `geo` (ölçülen koordinat + plusCode) |
| `docs/olgu-sayfasi.md` | Askı dönemindeki canlı site ölçümü (2026-08-25) |
| `vite.config.js` | LocalBusiness JSON-LD'yi üreten yer — `legalName`, `foundingDate`, `openingHoursSpecification` |
| `arac/seo-denetimi.mjs` | Çalışma saati sapma denetimi (`npm run seo`) |

Profil açıldığında doldurulacak: `geo.placeId`, `geo.shortLink`, yorum bağlantısı.
