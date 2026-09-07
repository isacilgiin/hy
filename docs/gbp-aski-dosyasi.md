# Google İşletme Profili askı dosyası

> Durum: **AÇILDI** — profil 07.09.2026 itibarıyla yayında ve yönetiliyor.
> Adres profilde "Arı Kiremit Fabrikası, Eskihisar, Pamukkale Sk. No:17 İç Kapı No:2,
> 20020 Denizli Merkezefendi" biçiminde duruyor: iç kapı numarası girmiş.
>
> 1-10. bölümler askı sürecinin kaydıdır; **geçmiş** olarak okunmalı, iş listesi olarak
> değil. Bundan sonrası **11. bölümde**. Tekrar askıya alınırsa 4. bölümdeki itiraz
> metni ve 5. bölümdeki form haritası hâlâ geçerli — bu yüzden silinmedi.

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

**Serbest metin alanı en fazla 1000 karakter alıyor.** Aşağıdaki iki sürüm de ölçüldü.

### A — tabela asıldıktan sonra (979 karakter) ← kullanılacak olan

```
İşletmem bu adreste fiilen faaliyet göstermektedir; bilgiler ekli resmî belgelerle doğrulanabilir. Vergi levhasındaki unvan profildeki adla aynıdır: 20 DENİZLİ TOMAY HALI YIKAMA; faaliyet kodu 961004 Halı ve Kilim Yıkama Hizmetleri.

Adresimiz Eskihisar Mah. Pamukkale Sk. No:17 İç Kapı No:2, 20020 Merkezefendi/Denizli'dir. Bölünmüş bina tek dış kapı numarası taşır; birimler iç kapı numarasıyla ayrılır. Ölçülen konum: Plus Code R498+R4P. Birimin kendi ticari elektrik aboneliği ve sayacı vardır; abone adı "Mevlüt Furkan Tomay - 20 Denizli Tomay Halı", 25,20 kW kurulu güç, yıllık 51.583 kWh. İşletme tabelamız ekteki fotoğraflardadır.

Aynı adreste bize ait olmayan ikinci bir halı yıkama kaydı vardır; ilgimiz yoktur. Kaydımız yalnızca İç Kapı No:2'deki birimi kapsar; iki kayıt ad ve telefon bakımından farklıdır.

Giriş üzerinde yapılan işlem: adres alanına iç kapı numarası eklenmiştir. denizlihaliyikama.net.tr sitesindeki ad, adres, telefon ve saatler profille aynıdır.
```

### B — tabela henüz asılmadıysa (971 karakter)

Tabelayı iddia eden cümle çıkarılmış hâli. **Olmayan bir tabelayı "vardır" diye yazmak,
"aldatıcı içerik" gerekçesiyle askıya alınmış bir dosyada yapılabilecek en kötü şeydir.**

```
İşletmem bu adreste fiilen faaliyet göstermektedir; profil bilgileri ekli resmî belgelerle doğrulanabilir. Vergi levhasındaki unvan profildeki adla aynıdır: 20 DENİZLİ TOMAY HALI YIKAMA; faaliyet kodu 961004 Halı ve Kilim Yıkama Hizmetleri.

Adresimiz Eskihisar Mah. Pamukkale Sk. No:17 İç Kapı No:2, 20020 Merkezefendi/Denizli'dir. Bölünmüş bina tek dış kapı numarası taşır; birimler iç kapı numarasıyla ayrılır. Ölçülen konum: Plus Code R498+R4P. Birimin kendi ticari elektrik aboneliği ve sayacı vardır; abone adı "Mevlüt Furkan Tomay - 20 Denizli Tomay Halı", 25,20 kW kurulu güç, yıllık 51.583 kWh.

Aynı sokak adresinde bize ait olmayan ikinci bir halı yıkama kaydı vardır; ilgimiz yoktur. Kaydımız yalnızca İç Kapı No:2'deki birimi kapsar; iki kayıt ad ve telefon bakımından farklıdır.

Giriş üzerinde yapılan işlem: adres alanına vergi levhasındaki iç kapı numarası eklenmiştir. denizlihaliyikama.net.tr sitesindeki ad, adres, telefon ve saatler profille aynıdır.
```

### Metinde bilerek olmayanlar

| Çıkarılan | Neden |
|---|---|
| "Kalıcı tabelamız vardır" (A sürümünde fotoğrafa atıf var, iddia yok) | Tabela asılmadan yazılamaz |
| "Başka değişiklik yapılmamıştır" | Google’ın elindeki düzenleme geçmişine karşı doğrulanmamış mutlak olumsuzlama |
| Sitenin eski adres değeri ve "düzelttik" | Yanlış beyanın yazılı ikrarı olur |
| Komşu işletmenin adı | Suçlama değil, ayırt edilebilirlik beyanı veriliyor |

### Metinde bilerek olanlar

- **Unvan = profil adı** eşitliği açıkça yazılı → "aldatıcı içerik"in ad ayağını kapatıyor
- **Faaliyet kodu 961004** → kategori ayağını kapatıyor
- **İç Kapı No:2 + Plus Code R498+R4P** → komşudan ayıran tek unsur
- **Abone adı faturadaki hâliyle tırnak içinde** → "unvanla aynı" demek yerine birebir alıntı;
  ekteki belgeyle çelişmesin diye
- **İkinci kayıt cümlesi** → denetçi haritaya bakınca hazırlıksız yakalanılmıyor

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

---

## 11. Açıldıktan sonra (07.09.2026)

Profil geri geldi. Buradan sonrası "kaybetmemek" oyunu; kazanmak değil.

### Kural: yeni açılmış profile seri düzenleme yapılmaz

Askının gerekçesi "Aldatıcı içerik"ti ve incelenen şey profilin **düzenleme geçmişi**.
Yeni açılan bir kayıt bir süre daha sıkı bakılıyor. Bu yüzden Google'ın kendi
"Profilinizi tamamlayın" listesindeki maddeler **tek tek, aralarında haftalar
olacak şekilde** yapılır.

**Hiç dokunulmayacaklar (aylarca):** işletme adı, adres, kategori, telefon.
Dördü de askının konusuydu. "20" ön ekini kaldırma fikri **rafta** — profil adı
vergi levhasıyla birebir aynı kalmalı; o soru aylar sonra, o da başka hiçbir sorun
yokken açılır.

**Sırayla yapılabilecekler** (her biri arasında ~2 hafta):

1. Fotoğraf — dış cephe, tabela, iç mekan, çalışan makineler. En güvenlisi bu,
   önce bu yapılır.
2. Hizmetler bölümü — sitedeki hizmet adlarıyla aynı yazılır.
3. Ürünler.
4. Güncelleme / duyuru paylaşımı.

### Yorumlar — en riskli başlık

Profilde iki adet 5 yıldızlı yorum var, ikisi de 2 gün önce girilmiş.
Biri **İsa Çılgın** adına. Bu depo da aynı adla işleniyor ve profil sayfası
"Bu İşletme Profili'ni yönetiyorsunuz" diyor.

Google'ın politikasında **çıkar çatışması** açık: işletmeyi yöneten kişi kendi
işletmesine yorum bırakamaz. Yeni açılmış, daha önce aldatıcı içerikten askıya
alınmış bir profilde aynı gün girilmiş iki genel içerikli 5 yıldız, tespit
sistemlerinin doğrudan aradığı desen.

Yapılacak: yöneticiye ait yorum **o hesaptan silinir**. Gerçek müşteriye ait
olmayan varsa o da. Yerine profildeki **"Yorum isteme → Yorum formunuzu eski
müşterilerinizle paylaşın"** kullanılır; bağlantı gerçek müşterilere gönderilir,
metin dikte edilmez, karşılığında indirim teklif edilmez.

### Sitede kapatılan boşluk (bu commit)

Google, sitenin her arama sonucunun altına **"Eksik: 20 · Şu terimi ara: 20"**
basıyordu: profildeki ad `20 DENİZLİ TOMAY HALI YIKAMA`, sitede ise bu dizge
görünür metin olarak hiçbir yerde geçmiyordu. JSON-LD'deki `legalName` ve
`alternateName` doluydu ama Google metinde de karşılığını arıyor.

- `src/data/legal.js` → Şartlar ve Koşullar sayfasına **"İşletme künyesi"**
  bölümü: tescilli unvan, adres, telefon, e-posta, faaliyet kodu 961004.
  Tek yerde duruyor; başka sayfalara çoğaltılmayacak (anahtar kelime doldurması
  gibi görünür).
- `vite.config.js` → `llms.txt` "Firma Bilgileri" altına **Tescilli Unvan**
  satırı. Statik dosya; AI arama motorlarının okuduğu yer.

### Profil bağlantısı — TAMAM (07.09.2026)

İşletme sahibi Haritalar üzerinden paylaştı; kimlikler çözüldü:

| | |
|---|---|
| ftid | `0x14c715ff08da592f:0xfc025e20c1577197` |
| CID | `18159180142286958999` |
| kgmid | `/g/11zfj7mqgk` |
| kısa adres | https://maps.app.goo.gl/iNLW4A1ANQQQwqhs7 |

`siteConfig.geo.shortLink` = `https://maps.google.com/?cid=18159180142286958999`
— kısa adres DEĞİL, CID adresi. Kısa adresler yeniden üretilebiliyor, CID profil
silinmedikçe değişmiyor. Artık JSON-LD `sameAs` dizisinin ilk sırasında: site ile
profil arasındaki bağ makine tarafından okunabilir hâlde.

`geo.embedSrc` de dolduruldu. İletişim sayfasındaki gömme harita artık koordinat
yerine işletme adını gösteriyor.

`geo.placeId` boş kalıyor — Places API biçimi olan `ChIJ...` elimizde yok ve
ftid/CID onun yerine geçmez. Eksik-alan denetimi bunu raporlamaya devam edecek;
bilinçli.

### Geri alınan iki şey (aynı gün)

**`geo.embedSrc` boşaltıldı.** Profilin Paylaş çıktısındaki gömme harita işletme
adını gösteriyor ama işaretçisi Google'ın iğnesi — kapıdan 89 metre uzak. İletişim
sayfasında adı doğru, yeri yanlış bir işaretçi göstermek olurdu; üstelik JSON-LD
aynı anda doğru koordinatı yayınlarken. Bölünmüş bir fabrikada 89 metre yanlış birim
demek. Boş kalınca harita kapının tam üstüne iğne koyuyor. Site-profil bağı zaten
`sameAs` ile kurulu; gömmenin ayrıca ad taşımasına gerek yok. Profildeki iğne kapıya
çekildikten sonra doldurulur.

**Künyedeki bir cümle kısaltıldı.** Şartlar sayfasındaki künyeye önce şu yazılmıştı:
"Adresimizde tek dış kapı numarası altında birden fazla işletme bulunur; birimler iç
kapı numarasıyla ayrılır. Bize ait birim İç Kapı No:2'dir." Doğruydu ama §8'in kendi
kuralını çiğniyordu: *aynı adresteki ikinci kayıttan herkese açık alanda söz edilmez.*
Site artık `sameAs` ile profile bağlı, yani aynı sınıf yüzey. Cümle yol tarifine
indirildi: "Arı Kiremit Fabrikası girişinden içeri girip İç Kapı No:2'yi takip
edebilirsiniz." Künyenin asıl işi — tescilli unvanı görünür metinde yayınlamak —
değişmedi.

### Profildeki iğne 89 metre şaşıyor

Google tarafındaki profil konumu **37.819154 / 29.114473**. Ölçülen kapı
**37.8195833 / 29.1153333**. Arada 89 metre var. Aynı iğne, eskiden sitede duran
geocoder tahminine yalnızca 32 metre uzak — yani Google da kapıyı değil sokak
adresini işaretlemiş.

Sitedeki değer ölçülen kapı olarak KALIYOR (iki bağımsız okumayla doğrulandı).
Profildeki iğneyi kapıya çekmek doğru olur **ama şimdi değil**: konum düzenlemesi
askının tam konusuydu. Aylar sonra, başka hiçbir sorun yokken.

### Profil içeriği hazır

Hizmet kalemleri, güncelleme gönderileri, Soru-Cevap, fotoğraf listesi ve takvim:
**`docs/gbp-profil-icerigi.md`**. Karakter sınırları tek tek ölçüldü.

O dosyanın 0. bölümü sitedeki iki riski anlatıyor (üretilmiş öncesi/sonrası
görselleri, doğrulanmamış üç sayaç) — profil ile site artık sameAs ile bağlı
olduğu için ikisi de bu dosyanın konusu.


### Diğer açık işler

| İş | Nerede | Not |
|---|---|---|
| Search Console doğrulaması | `analytics.googleSiteVerification` boş | Profildeki "web sitesi" alanının karşılığı |
| birmilyonnokta.com kaydı | dış site | Hâlâ eski adresi yayınlıyor: "Pamukkale Sok No21/a". Düzeltme talebi gönderilmeli — dışarıdaki tek NAP çelişkisi |

### Doğrulandı (07.09.2026, canlı site ve v103 build)

| Alan | Profil | Site | Durum |
|---|---|---|---|
| Ad | 20 DENİZLİ TOMAY HALI YIKAMA | `legalName` + `alternateName` | ✓ |
| Adres | No:17 İç Kapı No:2, 20020 | `streetAddress` birebir | ✓ |
| Telefon | 0537 372 67 04 | `telephone` +905373726704 | ✓ |
| Saatler | Kapanış 19:00 | `openingHoursSpecification` Pzt–Cmt 08:00–19:00 | ✓ |
| Kuruluş | "2020 yılından beri" | `foundingDate: 2020` | ✓ |
| Konum | — | `geo` ölçülen kapı koordinatı | ✓ |
| Profil bağlantısı | CID 18159180142286958999 | `sameAs` ilk sırada | ✓ |

---

## 12. Günlük — 07.09.2026 (oturum sonu)

Profil bugün yeniden açıldı. Gün içinde yapılanlar ve yarına kalanlar.

### İşletme sahibinin yaptıkları

- **Üç güncelleme gönderisinin üçü de girildi.** (`docs/gbp-profil-icerigi.md` §2)
  Plan teker teker girilmesiydi; üçü birden girildi. Geri alınacak bir şey yok,
  gönderi düşük riskli. **Sonuç: en az iki hafta yeni gönderi girilmeyecek.**
- Haritalar paylaşım bağlantısı verildi → profilin CID kimliği çözüldü.

### Depoya giren (5 commit)

| Commit | Ne |
|---|---|
| `6c778eb` | Tescilli unvan siteye görünür metin olarak: Şartlar sayfasına künye + `llms.txt` |
| `d676ca5` | `geo.shortLink` = CID adresi → JSON-LD `sameAs` artık profile bağlanıyor |
| `ac52849` | `docs/gbp-profil-icerigi.md` — 13 ajanlı iş akışının çıktısı |
| `c041419` | Künye cümlesi kısaltıldı, `embedSrc` geri alındı |

Build v105. `lint`, `npm run seo` temiz.

### YARIN İLK İŞ — cevaplanmamış iki soru

**1. Logo.** İşletme sahibi profile logo girmedi, sebebi kendi ifadesiyle:
sitedeki logoda *"Tomay Halı Yıkama"* yazıyor, profildeki ad ise
*"20 DENİZLİ TOMAY HALI YIKAMA"* — **"20 Denizli" kısmı logoda yok.**

ARAŞTIRILACAK, HENÜZ CEVAP VERİLMEDİ: Google İşletme Profili logosunun profil
adıyla birebir eşleşmesi gerekiyor mu? İlk izlenim gerekmediği yönünde — logo
bir marka işareti, ad beyanı değil; ayrıca "Tomay Halı Yıkama" farklı bir ad
değil, aynı adın kısa biçimi (sitede `companyName` / `googleBusinessName`
ayrımı zaten böyle kurulu ve JSON-LD `legalName`/`alternateName` ile ilan
ediliyor). AMA doğrulanmadı — Google'ın kendi yardım sayfasından teyit
edilmeden işletme sahibine "koy gitsin" denmeyecek. Askı gerekçesi
"Aldatıcı içerik" olduğu için bu soru gereğinden fazla temkin hak ediyor.

Mevcut dosyalar: `public/images/logo/` altında icon-512.png, icon-192.png,
apple-touch-icon.png, logo.webp, logo-beyaz.webp, og-image.jpg. Boyut denetimi
yapılmadı (oturum bitti). Google en az 250x250 istiyor ve **.webp kabul
etmiyor** — icon-512.png biçim olarak uygun görünüyor, ölçülmedi.

**2. Kapak fotoğrafı.** İşletme sahibi *"kapak fotoğrafını biz yaparız herhalde"* dedi.

**CEVAP: HAYIR — üretilmeyecek.** Kapak fotoğrafı işletmenin gerçek
fotoğrafı olmak zorunda. Bu profil "Aldatıcı içerik"ten askıya alındı;
üretilmiş bir kapak görseli, tam da suçlanılan davranışın kendi elimizle
sağlanmış kanıtı olur. Sitedeki 30 görselin yapay zekâ ile üretilmiş olması
zaten ayrı bir risk (aşağıya bak) — profile o riski taşımayacağız.

Kapak, `docs/gbp-profil-icerigi.md` §5'teki 21 karelik listenin içinden
seçilecek. Aday: sokak levhası + bina No:17 + kendi tabelan aynı karede.
**Ön koşul tabela.** Tabela asılmadan cephe/kapı karesi çekilmeyecek —
eski pankartta hâlâ "Denizli Halı Yıkama" yazıyor ve profildeki adla
uyuşmuyor.

### Açık kalan diğer işler

| İş | Durum | Kimde |
|---|---|---|
| Tabela (2 adet, kalıcı, `20 DENİZLİ TOMAY HALI YIKAMA`) | asılmadı | işletme sahibi |
| Fotoğraf çekimi (21 kare) | tabelayı bekliyor | işletme sahibi |
| Hizmetler (8 kalem, metinler hazır) | ~2 hafta sonra | işletme sahibi |
| Soru-Cevap (5 soru hazır) | ayda 1-2 tane | işletme sahibi |
| `/projeler/` üretilmiş öncesi/sonrası (12 görsel) | karar bekliyor | işletme sahibi |
| Üç sayaç: 15.000 halı / 5.000 müşteri / %100 hijyen | **rakam sorulacak** | işletme sahibi |
| Search Console doğrulaması (`analytics.googleSiteVerification`) | boş | ikisi |
| birmilyonnokta.com hâlâ `No:21/a` yayınlıyor | düzeltme talebi gönderilmedi | işletme sahibi |
| Profildeki iğne kapıdan 89 m uzak | **aylarca dokunulmayacak** | — |
| `20` önekinin profilden kaldırılması | **rafta, aylarca açılmayacak** | — |

### Değişmeyen kural

Ad, adres, kategori, telefon ve konum aylarca oynatılmayacak. Profil
"Aldatıcı içerik"ten yeni çıktı; incelenen şey düzenleme geçmişiydi.
