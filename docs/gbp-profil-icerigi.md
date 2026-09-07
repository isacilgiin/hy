# Profil içeriği — hazır metinler

> Hazırlanma: 07.09.2026. Profil 07.09.2026'da yeniden açıldı.
> Bu dosya `docs/gbp-aski-dosyasi.md` §11'in devamıdır; oradaki tempo kuralı geçerli.
> Karakter sayıları burada tek tek ölçüldü, beyana güvenilmedi.

---

## 0. ÖNCE BUNU OKU — sitede iki açık risk

Profil içeriğini hazırlarken denetçiler siteye baktı ve iki şey buldu. İkisini de
kendim doğruladım. İkisi de artık **profile makine tarafından bağlı**: bu oturumda
`geo.shortLink` dolduruldu ve JSON-LD `sameAs` sitenin profille aynı işletme olduğunu
ilan ediyor. Yani Google profilden siteye yürüyebilir.

### 0.1 — Öncesi/sonrası görselleri üretilmiş

`docs/GORSEL-PROMPTLARI.md:110-128` yöntemi kendi yazıyor: önce "sonrası" görseli
üretiliyor, sonra **aynı prompta `same exact camera angle, same framing, same lighting`
eklenip yalnızca kirlilik tarifi değiştirilerek "öncesi" üretiliyor**.

6 çift = 12 görsel. Hepsi `/projeler/` sayfasında (`src/data/projects.js`) işletmenin
yaptığı işin sonucu olarak duruyor: salon halısı, yün halı, shaggy, koltuk, stor perde,
yorgan.

Bunlar tesis atmosferi görseli değil; **uydurulmuş SONUÇ kanıtı**. Askının gerekçesi
"Aldatıcı içerik"ti. Sitedeki en birebir karşılık bu.

Seçenekler: (a) `/projeler/` sayfasını yayından kaldırmak, (b) 12 görseli silip sayfayı
gerçek iş fotoğraflarıyla yeniden kurmak, (c) her karenin altına "temsilî görsel"
ibaresi koymak. (c) en zayıfı — görselin kendisi hâlâ bir öncesi/sonrası iddiası taşıyor.

**Fotoğraf çekimine çıkıldığında (bölüm 5) gerçek öncesi/sonrası kareleri çekilebilir.**
En temiz çözüm bu: üretilmiş 12 kare gider, yerine gerçekleri gelir.

### 0.2 — Üç sayaç doğrulanmadı

`src/data/siteConfig.js:437` zaten uyarıyor: **"AŞAĞIDAKİ ÜÇ SAYI HÂLÂ DOĞRULANMADI"**.

| Sayı | Değer | Nerede görünüyor |
|---|---|---|
| `washedCarpets` | 15.000+ Yıkanan Halı | Ana sayfa + Hakkımızda (`StatsSection`) |
| `happyClients` | 5.000+ Mutlu Müşteri | Ana sayfa + Hakkımızda |
| `hygieneGuarantee` | %100 Hijyen | Ana sayfa + Hakkımızda |

Üçü de devralınan sitenin sayaç hedeflerinden alındı. **Aynı kaynaktan gelen
`foundedYear` yanlış çıktı** (2016 yazıyordu, doğrusu 2020) — kaynağın güvenilmez
olduğu bu yüzden biliniyor.

siteConfig kendi çözümünü de yazmış: *"İşletmeye sorulup ya doğrulanmalı ya da sayaç
bölümü kapatılmalı. Sayıları makul göründüğü için bırakmayın — foundedYear de makul
görünüyordu."*

**İşletme sahibine sorulacak:** 2020'den bugüne kaç halı yıkandı, kaç müşteriye
hizmet verildi? Rakam yoksa sayaç bölümü kapatılır. "%100 hijyen" ise rakam değil
iddia — ölçülmüş bir dayanağı yoksa kaldırılmalı.

### Bunlar profil içeriğini bloklamıyor

Aşağıdaki metinler bu iki maddeden bağımsız; fotoğraf ve hizmetler adımları
başlatılabilir. Ama 0.1 fotoğraf programıyla birlikte çözülmeli, 0.2 için de
işletme sahibinden tek bir cevap yeterli.

---

## 1. Hizmetler — 8 kalem

Hizmet adları sitedeki katalogla BİREBİR aynı; değiştirmeyin. Google sınırı 300 karakter.

### Halı Yıkama  `268/300`

```
Halı adresinizden alınır, her parçaya etiket takılır. Önce toz çırpma makinesinden geçer, sonra 16 fırçalı tam otomatik makinede bitkisel esaslı şampuanla yıkanır. Rulo sıkmanın ardından kapalı kurutma odasında kurutulur, ambalajlı teslim edilir. Ortalama 3-4 iş günü.
```

### El Dokuma & Yün Halı Yıkama  `289/300`

```
Yıkamadan önce görünmeyen bir noktadan renk akma testi yapılır, ölçü kaydedilir. Yün ve el dokuma halı düşük ısıda, yumuşak fırça ayarıyla yıkanır; ıslak bekletilmez. Saçak gövdeden ayrı, elde temizlenir. Çekme riskine karşı kontrollü kurutulur. Alım ve teslim için ayrıca ücret almıyoruz.
```

### İpek & Nepal Halı Yıkama  `287/300`

```
Önce elyaf ve boya değerlendirilir; halının yıkanıp yıkanamayacağına birlikte karar veriyoruz, olumsuzsa sebebini söylüyoruz. Nötr pH şampuan kullanılır, alkali ürün kullanılmaz. Islanma süresi sınırlı tutulur, kritik bölgeler elle çalışılır. Halı düz serilir, kontrollü nemde kurutulur.
```

### Shaggy & Uzun Tüylü Halı Yıkama  `289/300`

```
Hav derinliği ve tüy cinsi belirlenir; fırça sertliği ile çalışma yönü buna göre ayarlanır ve tüy dibindeki toz çıkarılır. Uzun tüy daha fazla su tuttuğu için kurutma makine halısından uzun sürer. Dip nemi kontrol edilir, kuruma sonrası tüy kabartılır. Bambu ve peluş halılar da bu grupta.
```

### Koltuk Yıkama  `284/300`

```
Koltuk taşınmaz, ekip randevuyla adresinize gelir. Kumaş etiketi okunur, görünmeyen bir noktada renk denemesi yapılır. Kumaşa uygun solüsyonla ıslatılır, yumuşak fırçayla kir yumuşatılır, yüksek emişli vakumla kirli su geri çekilir. Ardından temiz suyla durulanır, kalıntı bırakılmaz.
```

### Yatak & Baza Temizliği  `285/300`

```
Yatak taşınmaz, yerinde temizlenir. Önce kuru tarama yapılır; dolgu tipine göre ıslatma sınırı belirlenir ve iç dolguya su geçirilmez. Lekelere nokta müdahale edilir, yüksek emişli vakumla toz ve kalıntı alınır. Baza kumaşı ve başlık ayrı ele alınır, sandık içi kuru vakumla çalışılır.
```

### Stor & Perde Yıkama  `290/300`

```
Perde randevuyla yerinde sökülür; sökme ve tekrar takma işini ekibimiz yapıyor, bunun için ayrıca ücret almıyoruz. Mekanizma yıkamaya girmez, ayrıştırılır. Kumaş katlanmadan yıkanır, gergin ve düz kurutulur. Kuruyan perde randevulu takma gününde yerine takılır. Tül ve fon perde de yıkanır.
```

### Yorgan & Battaniye Yıkama  `264/300`

```
Dolgu tipi (elyaf, yün, pamuk) tespit edilir, program buna göre kurulur. Yorgan, ev tipi makineye sığmayan hacimde serbestçe dönerek yıkanır ve iç dolgusuna kadar durulanır. Topaklanmayı önleyen kurutma yapılır; tam kuruma teslim şartıdır. Ambalajlı teslim edilir.
```

---

## 2. Güncelleme gönderileri — 3 adet

Google sınırı 1500 karakter. **Başlıklar iç etikettir, hiçbir yere yapıştırılmaz** —
güncelleme gönderisinde ayrı başlık alanı yok; panele yalnızca gövde metni girilir,
bağlantı buton alanına yazılır. Hepsini aynı gün girmeyin.

### Toz Çırpma Neden İlk Adım  `813/1500`

Buton: **Daha fazla bilgi** → https://denizlihaliyikama.net.tr/hizmetler/hali-yikama/

```
Halı yıkamada su ilk adım değildir; önce toz çırpma makinesi gelir.

Bir halının dokusunun dibinde, elektrikli süpürgenin ulaşamadığı kuru bir toz katmanı birikir. Bu katman alınmadan halı ıslatılırsa toz suyla birleşir ve çamura döner. Çamur artık yüzeyde değil lifin arasındadır; aynı yıkamayla çıkmaz, ikinci bir yıkama gerekebilir.

Bu yüzden sırayı değiştirmiyoruz: halı önce toz çırpma makinesinden geçer, dokunun dibindeki kuru kir alınır, su ondan sonra devreye girer. Halının cinsi, kirlilik derecesi ya da o günkü yoğunluk bu sırayı değiştirmez.

Toz çırpmanın ardından halı yıkamaya girmeden bir kez daha gözden geçiriliyor; varsa lekeler işaretlenip cinsine uygun leke çıkarıcı uygulanıyor.

Sürecin tamamı, adresten alımdan ambalajlı teslime kadar sitemizdeki halı yıkama sayfasında adım adım yazılı.
```

### Fırça Ayarı Halının Cinsine Göre Değişir  `806/1500`

Buton: **Daha fazla bilgi** → https://denizlihaliyikama.net.tr/hizmetler/

```
Aynı ayarla iki halı yıkanmaz.

Yıkama 16 fırçalı tam otomatik makinede yapılıyor. Fırçanın sertliği ve halıya uyguladığı baskı sabit değil; halının cinsine göre ayarlanıyor.

Ayarı belirleyen şey halının kendisi. Makine halısı ile yün el dokuma aynı sertliği kaldırmaz: yün halılardaki boyalar sentetik boyalar kadar sabit olmadığı için sert fırça ve sıcak su renk akmasına yol açabilir. Shaggy halıda durum terstir; kir tüyün dibinde birikir, fırçanın oraya inmesi gerekir, ama fırça fazla sert olursa tüy yatar ve keçeleşir.

Değişen yalnızca fırça da değil. Genel programda kullandığımız şampuan bitkisel esaslı; ipek ve Nepal halılarda nötr pH'lı ürüne geçiyoruz, ıslanma süresini sınırlı tutuyoruz ve müdahalenin bir bölümünü elle yapıyoruz.

Halının hangi gruba girdiğini yıkamadan önce konuşuyoruz.
```

### Etiketleme ve Parça Takibi  `758/1500`

Buton: **Daha fazla bilgi** → https://denizlihaliyikama.net.tr/sikca-sorulan-sorular/

```
Halılar karışmasın diye etiketleme yıkamada değil, kapıda yapılıyor.

Alma aracımız bir günde birden çok haneden halı topluyor. Aynı desende iki halının farklı hanelerden gelmesi, düşündüğünüzden sık oluyor.

Bu yüzden her parçaya, adresten alındığı anda etiket takılıyor ve hangi adresten geldiği kaydediliyor. Etiket toz çırpma, yıkama, sıkma ve kurutma boyunca halının üzerinde kalıyor; yalnızca paketleme aşamasında çıkarılıyor.

Parçalar tesise girdikten sonra kirlilik ve ebat durumuna göre ayrı ayrı ilerliyor; her parça kendi etiketiyle birlikte. Yani hiçbir parça süreç boyunca kimliksiz kalmıyor.

Karışma ihtimaline karşı kurduğumuz düzen yıkamada değil, kapıda başlıyor. Sürecin ayrıntısını sitemizin sık sorulan sorular bölümünde bulabilirsiniz.
```

---

## 3. İşletme açıklaması — ŞİMDİLİK DOKUNMA

ŞİMDİ DEĞİŞTİRME. Üç sebep: (1) Taslağı hazırlayan tur, canlıdaki açıklamanın yalnızca ilk ~250 karakterini görebildi — tamamı okunmadan yapılan bir değişiklik, olmayan bir kusuru düzeltiyor olabilir. (2) Taslağın kendi ifadesiyle bu bir arıza giderme değil, sıkılaştırma; giderilecek somut bir kusur gösterilmiş değil. (3) §11'e göre düzenleme pencereleri kıt (her adım arasında ~2 hafta) ve açıklama §11'in dört maddelik listesinde hiç yok; pencereyi listedeki maddeye (fotoğraf, sonra hizmetler) harcamak daha değerli. YAPILACAK: önce canlıdaki açıklamanın TAM metnini profil panelinden okuyun. TETİKLEYİCİ KOŞUL: metinde abartı sıfat (en iyi/lider/%100/garanti), doğrulanamayan bir rakam, telefon, URL veya fiyat varsa — o zaman aşağıdaki hazır metinle değiştirin. Yoksa hiç dokunmayın. Aşağıdaki metin, o koşul gerçekleşirse kullanılmak üzere yedekte bekliyor: 729/750 karakter, denetim düzeltmeleri uygulanmış (ücretsiz→'ayrıca ücret almıyoruz', fırça ayarı 'halının cinsine göre' (siteyle birebir), 'her parti için' ifadesi çıkarıldı, antialerjik/antibakteriyel çıkarıldı, adres landmark'ının yanına ayırt edici İç Kapı No:2 eklendi). Girilecekse fotoğraf ve hizmetler adımlarından SONRA, kendi penceresinde, tek başına girilir.

Tetikleyici koşul gerçekleşirse kullanılacak yedek metin (729/750):

```
2020 yılından beri Denizli'de halı, koltuk, perde ve yorgan yıkıyoruz. Tesisimiz Merkezefendi Eskihisar Mahallesi'nde, Arı Kiremit Fabrikası İç Kapı No:2'de; il genelinde 19 ilçeye gidiyoruz. Halınızı adresinizden alıyoruz; alım ve teslim için ayrıca ücret almıyoruz.

Alımda her parçaya etiket takıyoruz; etiket paketlemeye kadar üzerinde kalıyor. Halı önce toz çırpma makinesinden geçiyor, suyla sonra buluşuyor; sıra değişmiyor. 16 fırçalı tam otomatik makinede, fırça sertliği halının cinsine göre ayarlanarak yıkanıyor. Şampuan bitkisel esaslı. Kurutma kapalı odada.

Halınız ambalajlı teslim ediliyor; süre ortalama 3-4 iş günü. Ödeme teslimde: nakit veya kredi kartı. Koltuk, yatak ve baza taşınmıyor, ekip adrese geliyor.
```

---

## 4. Soru-Cevap — 5 soru

Hepsini aynı gün ve tek oturumda sormayın; ayda bir-iki soru.
Cevaplar işletme hesabından yazılmalı ki "İşletme sahibi" etiketi düşsün.

**S: Tesise nasıl gelinir, hangi kapıdan girmem gerekiyor?**

> Adresimiz Eskihisar Mah. Pamukkale Sk. Arı Kiremit Fabrikası No:17 İç Kapı No:2, 20020 Merkezefendi / Denizli. Fabrika girişinden içeri girip iç kapı numarasını takip edin; birimimiz İç Kapı No:2. Bulamazsanız bizi arayın, kapıdan karşılayalım. Tesise gelmeniz de gerekmiyor: halıyı adresinizden alıyoruz.

**S: Halıyı evden alıyor musunuz, alım ve teslim için ayrıca ücret var mı?**

> Halıyı adresinizden biz alıyoruz, yıkandıktan sonra yine adresinize getiriyoruz. Alım ve teslim için ayrıca bir bedel almıyoruz. Denizli'nin 19 ilçesinin tamamına gidiyoruz. Randevuyu evde birinin bulunduğu saate göre kuruyoruz; alım ile teslimin aynı saate düşmesi gerekmiyor. Tesisimiz Pazartesi-Cumartesi 08:00-19:00 arasında açık.

**S: Fiyat neye göre belirleniyor, telefonda öğrenebilir miyim?**

> Halıda metrekare, halının cinsi ve tüy uzunluğu belirleyici; bunlara lekenin durumu ve adet ekleniyor. Koltukta oturma birimi sayısı ve kumaş tipi, perdede perde türü ile sökme-takma gerekliliği hesaba giriyor. Bu kalemler halıyı görmeden tam bilinemediği için hazır bir liste vermiyoruz. Cinsini ve ölçüsünü söylediğinizde ya da fotoğrafını ilettiğinizde fiyatı iletiyoruz. Fiyat alımda netleşiyor ve teslimde aynı rakam geçerli oluyor; değişiklik gerektiren tek durum, alım sırasında bilinmeyen bir işin sonradan ortaya çıkması — o da size sorulmadan yapılmıyor.

**S: Halım kaç günde teslim ediliyor?**

> Ortalama 3-4 iş günü. Süreyi belirleyen yıkama değil kuruma: yün, shaggy ve ipek halılar makine halısından daha uzun sürede kuruyor. Kurutma açık havada değil kapalı kurutma odasında yapılıyor ve halı tam kurumadan paketlenmiyor; nemli katlanan halıda küf kokusu birkaç gün içinde başlıyor. Halınız hazır olduğunda arayıp teslim randevusu veriyoruz, ambalajlı getiriyoruz.

**S: Halı tamiri, saçak yenileme veya halı boyama da yapıyor musunuz?**

> Hayır, bunların hiçbirini yapmıyoruz; bizim işimiz yıkama. Halıyı yıkamadan önce gözden geçiriyoruz: yırtık, sökük veya güve hasarı görürsek onarmıyor, size bildiriyoruz. Onarım ve saçak yenileme halı tamircisinin işi. Solmuş bir halı yıkandığında temizlenir ama rengi geri gelmez; boyama ve renk yenileme de yapmıyoruz. Duvardan duvara döşeli halıfleks temizliği de yapmıyoruz; sökülemeyen zemin kaplaması yerinde temizlenen ayrı bir iş ve bizim kapsamımızda değil.

---

## 5. Fotoğraf çekim listesi — 21 kare

| # | Kare | Ne görünecek | Kategori |
|---|---|---|---|
| 1 | Sokak levhası + bina No:17 + kendi tabelan — ÜÇÜ TEK KAREDE | Karşı kaldırıma geç, yatay kadraj, göz hizası. Aynı karede üç şey okunmalı: Pamukkale Sk. levhası, bina üzerindeki No:17 ve kendi tabelan. Zoom yapma, geriye yürüyerek mesafe al. Işık: sabah 09:00-10:30. Kadraj dışı: park hâlindeki araçların plakaları, yoldan geçenlerin yüzü. ÖN KOŞUL: kalıcı tabela asılı olacak VE üzerindeki dizge vergi levhasındaki '20 DENİZLİ TOMAY HALI YIKAMA' ile karakter karakter aynı olacak — '20' öneki veya 'DENİZLİ' düşmüşse kare ÇEKİLMEZ, önce tabela düzeltilir. Bu kare aynı zamanda KAPAK olarak işaretlenir. | Dış mekan |
| 2 | Fabrika girişindeki ortak panoda kendi şeridin | Panonun tam karşısına geç, dik açı, 1,5-2 m. Kadraj YALNIZCA kendi şeridini ve panonun bir kenarını alsın — başka işletmenin adının okunduğu kare yüklenmez (rötuşla değil, kadrajla çözülür). Işık homojen gölge veya homojen güneş; flaş yok. ÖN KOŞUL: tabela dizgesi vergi levhasıyla birebir doğrulandı. | Dış mekan |
| 3 | Kendi kapının tabelası + İÇ KAPI NO: 2 plakası — aynı karede | Kapının tam karşısından, göz hizası, yatay. Üstte kapı tabelası, yanında/altında İÇ KAPI NO: 2 plakası, ortada kapı. KAPI KAPALI olsun. Plakanın vidaları seçilecek kadar yaklaş — geçici kâğıt izlenimi vermemeli. Flaş yok. ÖN KOŞUL: hem tabela hem plaka kalıcı monte edilmiş ve dizgeleri vergi levhasıyla birebir. | Dış mekan |
| 4 | Eşikten içeri — tabela ile tesis aynı karede | Kendi kapının hemen dışında dur, içeriye doğru çek. Kadrajın bir kenarında kapı kasası ve tabelanın alt kenarı, geri kalanda makineler ve halı istifi. Pozlamayı İÇERİYE göre kilitle; HDR ve gece modu kapalı. ÖN KOŞUL: kalıcı tabela asılı — tabela yokken kapı, kapı kasası veya cephe gösteren HİÇBİR kare yüklenmez (eski pankart kadraja girer ve profildeki adla çelişir). | İç mekan |
| 5 | 16 fırçalı tam otomatik makine — çalışırken | Yan-önden, tüm gövde kadrajda, göz hizası. Makine ÇALIŞSIN: içinde halı, dönen fırça, akan su. Ama kare NET olsun — Google'ın şartı 'in focus'; gerekiyorsa telefonu sabitle, iki kare çekip netini seç. Zemin ve tavandan pay bırak. Flaş yok. Kadraj dışı: izinsiz çalışan yüzü, okunabilir müşteri etiketi. | Ürün-hizmet |
| 6 | Kapalı kurutma odası | Kapı açık, eşikten içeri geniş açı. Asılı/serili halılar VE odanın kapalı bir hacim olduğu görünsün: duvar, tavan ve KAPI KASASI mutlaka kadrajda kalsın — 'kapalı kurutma odası' iddiasını kanıtlayan şey kapıdır. Flaş yok; hafif sarı ton doğaldır, beyaz dengesini zorlama. | İç mekan |
| 7 | Logo — MEVCUT DOSYA, çekim değil | Logo dosyası depoda ZATEN VAR: public/images/logo/icon-512.png — 512x512 PNG, Google'ın 250x250 alt sınırının üzerinde ve kabul edilen biçimde. Doğrudan yüklenebilir. İki kontrol: (a) logo.webp'de görünür mürekkep 273x112, yani kare alanda marka küçük kalıyor — mümkünse kaynak dosyadan ortalanmış 720x720 PNG dışa aktarın; (b) logonun bu işletmeye ait olduğunu işletme sahibiyle teyit edin. Uydurma veya yapay zekâyla üretilmiş logo YÜKLENMEZ. Bu, public/images/ altında profile yüklenebilecek TEK dosyadır. | Kimlik (logo) |
| 8 | Toz çırpma makinesi — halı girerken | Giriş ağzından hafif açılı, halının makineye girdiği an. Kadrajda su, köpük veya ıslak zemin OLMASIN — kuru halı, kuru makine; amaç sıralamayı görsel olarak göstermek. Toz kalkıyorsa flaş kullanma (havadaki tozu beyaz benek yağmuruna çevirir). Makinenin tamamı ve zemin görünsün. | Ürün-hizmet |
| 9 | Rulo sıkma makinesi | Yan açıdan, silindirler ve halının sarıldığı bölüm görünsün, göz hizası. Mümkünse iş üstünde. Zemindeki su ve makinenin ıslaklığı kadrajda kalsın — burada ıslaklık doğru sinyal. Pencereye/lambaya sırtını dönerek çek, yansımayı kadraj dışına al. Hortum, kova, paspas merkezde olmasın. | Ürün-hizmet |
| 10 | Etiketli halı istifi | Hafif yukarıdan ve açılı; birden fazla halının etiketi aynı karede. GİZLİLİK KRİTİK: hiçbir etikette müşteri adı, telefon veya adres OKUNABİLİR olmasın. İki güvenli yol: etiketlerin yazılı yüzünü içe/aşağı çevir, ya da metni seçilmeyecek mesafeden çek. Çekimden sonra fotoğrafı %100 büyüterek KONTROL ET; okunuyorsa sil ve yeniden çek — bulanıklaştırarak kurtarma. | Ürün-hizmet |
| 11 | Yıkama salonu — geniş genel görünüm | Salonun bir köşesinden karşı duvara doğru tek geniş kare. Amaç ölçek: makineler, halılar ve çalışma alanı bir arada. PANORAMA MODU KULLANMA. Telefonu yatay tut, sırtını duvara ver, göz hizası. Tavan aydınlatması açık, mümkünse gündüz. Zemin kadrajın alt üçte birinde görünsün. | İç mekan |
| 12 | Şampuan bidonu ve dozajlama | Bidonu makinenin yanında, kullanım yerinde çek; masaya dizilmiş ürün fotoğrafı gibi olmasın. Mümkünse dozajlama anı. MARKA OKUNMASIN: bidonun marka adı ve logosu kadrajda seçilmesin — etiketi kapatma veya bulanıklaştırma, açı ve mesafeyle çöz (üçüncü taraf markası ayrı bir kaldırma gerekçesi). Kadraj dışı: açık ağızlı veya devrilmiş kimyasal kapları. | Ürün-hizmet |
| 13 | Ambalajlanmış, teslime hazır halılar | Paketlenmiş halıların teslim çıkışında beklediği hâl; hafif açılı, göz hizası, birkaç paket bir arada (tek paket 'örnek' gibi durur). Sitede yazılı 'ambalajlı teslim' ifadesinin görsel karşılığı. GİZLİLİK: paket üzerindeki etiketlerde müşteri bilgisi okunuyorsa aynı kural — okunmayacak mesafeden çek, sonra %100 büyütüp doğrula. | Ürün-hizmet |
| 14 | Alım-teslim aracı yüklenirken | Aracı tesisin önünde, halılar yüklenirken, yandan açılı ve tam gövde kadrajda çek. Araç üzerinde işletme adı varsa okunur olsun; TELEFON veya WEB ADRESİ varsa o bölge okunmayacak biçimde kadraj kur (silme/rötuş yok, açı ve mesafeyle çöz). Kendi plakan kalabilir, arka plandaki başka araçların plakaları kadraj dışında. Araç yoksa bu kare düşer — ama o durumda sitedeki 'alma-teslim aracı her gün yola çıkıyor' cümlesi de düzeltilmeli. | Dış mekan |
| 15 | Yerinde koltuk yıkama — vakum adımı | YALNIZCA gerçek bir müşteri adresinde, ev sahibinin YAZILI izniyle çekilir. Yüksek emişli vakumla kirli suyun geri çekildiği an; vakum başlığı ve kumaş üzerindeki iz aynı karede. Kadraj dışı: ev halkının yüzü, aile fotoğrafı, tablo, evrak, isimlik, kapı numarası, pencereden görünen sokak/cephe. İzin alınamıyorsa kare TAMAMEN DÜŞER — tesiste veya işletme sahibinin evinde kurgu sahne KURULMAZ (site üç yerde koltuğun tesise gelmediğini yazıyor; kurgu sahne doğrudan aldatıcı içeriktir). | Ürün-hizmet |
| 16 | Ekip karesi — tabelanın önünde | Ekibi kendi kapınızın önünde, tabela arkalarında okunur kalacak şekilde, yatay kadraj. 2-4 kişi, iş kıyafeti, iş saati, doğal duruş. Işık sabah veya ikindi. KVKK: kadrajdaki her kişiden yazılı açık rıza — fotoğrafın Google İşletme Profili'nde süresiz yayınlanacağı rıza metninde açıkça yazmalı. İzin vermeyen kadraj dışında kalsın, kimse ikna edilmesin. İzin tamamlanmadıysa yükleme ertelenir; Ekip kategorisi boş kalabilir. | Ekip |
| 17 | Bölünmüş binanın kapı dizisi — komşu birimlerin ayrı girişleri | YÜKLEME. Bu kare askı dosyası §7'deki BAŞVURU EKİ delil listesinden geliyor (Adım 2 → Adım 4 'Ek inceleme gönder'), profil galerisi karesi değil. Komşu işletmenin tabelasını kendi herkese açık galerine koymak, askının teşhis edilen sebebi olan aynı adres-aynı kategori karışıklığını profilin içinde görünür kılar ve §8/4'e (dosyayı savunmadan suçlamaya kaydırma) görselle girer. Çekilir, yerel arşivde tutulur, yalnızca olası bir ek inceleme başvurusunun ekinde kullanılır. | YÜKLENMEZ — arşiv / ek inceleme eki |
| 18 | Mevcut pankart — sökülmeden önce | YÜKLENMEZ. Kapıdaki 'Denizli Halı Yıkama' yazan pankartı DEĞİŞTİRİLMEDEN ÖNCE çek: karşıdan, düz açı, pankartın tamamı ve asıldığı kapı kadrajda. Beş dakikalık iş ve geri dönüşü yok. Profile ASLA girmez — profildeki adla eşleşmeyen bir tabela görüntüsü kendi aleyhine kanıt olur. Değeri yalnızca 'adresteki fiziksel durum şu tarihte şuydu, sonra kalıcı tabela asıldı' zincirini kurmakta; yerel arşivde ve ek inceleme ekinde kalır. | YÜKLENMEZ — arşiv / ek inceleme eki |
| 19 | Kendi ticari elektrik sayacınız | YÜKLENMEZ — ABONE NUMARASI AÇIK. Sayacı abone/sayaç numarası okunacak netlikte çek; ikinci bir kare pano genelini alsın (sayacın komşu birimlerin sayaçlarından ayrı olduğu görünsün). Pano loşsa bu tek istisnada flaş kullanılabilir, cam yansıması için hafif yandan çek. Abone numarası herkese açık bir profilde DURMAZ; bu dosya DEPOYA da girmez. Yalnızca resmî başvuru eki ve yerel arşiv. | YÜKLENMEZ — arşiv / ek inceleme eki |
| 20 | Asılı vergi levhası | YÜKLENMEZ — KESİNLİKLE. VERGİ KİMLİK NUMARASI AÇIK DURUYOR; herkese açık bir profile yüklenmesi doğrudan veri sızıntısıdır. Bu dosya DEPOYA da girmez. Duvarda asılı hâlde çek (masaya konmuş belge taraması gibi değil), çerçeve ve duvar kadrajda, unvan okunur olsun. Cam yansıması için 15-20 derece yandan çek. Yalnızca Google'ın kendi resmî belge yükleme alanında kullanılır. | YÜKLENMEZ — arşiv / ek inceleme eki |
| 21 | Ortak panonun tamamı — geniş kare | YÜKLENMEZ. 2 numaralı karenin tamamlayıcısı: panonun bütününü gösteren geniş kare. Diğer işletmelerin şeritleri kaçınılmaz olarak kadraja girdiği için profile konmaz. Arşivde tutulur, olası bir ek inceleme ekine gider. | YÜKLENMEZ — arşiv / ek inceleme eki |

### Fotoğraf notları

- TEKNİK ŞARTLAR (Google'ın kendi sayfası, support.google.com/business/answer/6103862): Biçim JPG veya PNG — .webp KABUL EDİLMİYOR. Boyut en az 250x250 px, önerilen 720x720. Dosya boyutu 10 KB - 5 MB. Kalite şartı birebir: 'in focus and well lit, and have no significant alterations or excessive use of filters.' 5 MB'ı aşan varsa yalnızca sıkıştırın, yeniden boyutlandırmaya bile gerek yok.

- TABELA DİZGE KONTROLÜ — 1, 2, 3, 4 ve ekip karelerinin ortak ön koşulu: deklanşöre basmadan önce asılı tabeladaki yazı okunur ve vergi levhasındaki '20 DENİZLİ TOMAY HALI YIKAMA' ile KARAKTER KARAKTER karşılaştırılır. Fark varsa — özellikle '20' öneki veya 'DENİZLİ' düşmüşse, ya da site adı ('Denizli Tomay Halı Yıkama') veya logo yazısı ('TOMAY HALI YIKAMA') kopyalanmışsa — kare ÇEKİLMEZ ve YÜKLENMEZ; önce tabela düzeltilir. Askının teşhis edilen sebebi tam olarak tabelada adın yazmamasıydı. Aynı kontrol İÇ KAPI NO: 2 plakası için de geçerli. Tabelaya telefon veya web adresi YAZDIRILMAZ (§3 şartnamesi yalnızca unvanı içeriyor).

- TABELA YOKSA NE OLUR: kapı, kapı kasası ve bina cephesi gösteren HİÇBİR kare yüklenmez — 1, 2, 3, 4 ve ekip karesi ertelenir, kapak seçimi ertelenir. Sebebi somut: tabela asılana kadar kapıda hâlâ 'Denizli Halı Yıkama' yazan eski pankart duruyor ve o pankart profildeki adla eşleşmiyor; kadraja girdiği an kendi aleyhinize kanıt olur. Parti 1 o durumda üç kareye iner (16 fırçalı makine, kurutma odası, logo) ve bu yeterlidir.

- LOGO ZATEN VAR — 'logo klasörü boş' tespiti YANLIŞTI, dosya sisteminde doğrulandı. public/images/logo/ altında altı dosya duruyor: icon-512.png (512x512 PNG, Google'ın 250x250 alt sınırının üzerinde ve kabul edilen biçimde — doğrudan yüklenebilir), icon-192.png, apple-touch-icon.png, logo.webp, logo-beyaz.webp, og-image.jpg. Kimlik/logo alanı gereksiz yere boş bırakılmasın ve uydurma logo üretilmesin. İki kontrol: logo.webp'de görünür mürekkep 273x112 tuvalde durduğu için kare alanda marka küçük kalır — mümkünse kaynaktan ortalanmış 720x720 PNG çıkarın; ve logonun bu işletmeye ait olduğu (devralınan iskeletten gelmediği) işletme sahibince teyit edilsin.

- GİZLİLİK — HER KAREDEN SONRA %100 BÜYÜTÜP KONTROL: hiçbir etikette müşteri adı, telefon veya adres okunabilir olmayacak. Okunuyorsa fotoğrafı SİLİN ve yeniden çekin; bulanıklaştırarak kurtarmaya çalışmayın (hem 'significant alteration' kuralına yaklaşır hem gizlenecek bir şey olduğu izlenimi verir). Telefon kameraları beklenenden çok daha fazla detay yakalıyor.

- İNSAN YÜZÜ: kadrajda tanınabilir hiçbir yüz, yazılı açık rıza olmadan yer almaz — rıza metninde fotoğrafın Google İşletme Profili'nde SÜRESİZ yayınlanacağı açıkça yazmalı. Varsayılan ve en güvenli tercih: eller, arkadan veya profilden çekim. Sokak karelerinde yoldan geçenlerin yüzü ve park hâlindeki araçların plakaları kadraj dışında kalacak — açıyı kaydırarak, sonradan silerek değil.

- DOSYA ADLANDIRMA: TARİH_yer_konu_SIRA.jpg kalıbı (2026-09-14_dis_tabela-sokak-levhasi_01.jpg). Bu tamamen sizin arşiviniz içindir. Anahtar kelime doldurulmuş dosya adları ('denizli-en-iyi-hali-yikama.jpg') hiçbir şey kazandırmaz ve manipülasyon işareti arayan bir incelemede gereksiz bir desen bırakır.

- KAPIDA ÖDEME KARESİ BİLEREK DÜŞÜRÜLDÜ. Sebebi: 'kapı' müşterinin kapısıdır, tesis çıkışında kurulan kare ödemenin nerede alındığını yanlış gösterir ve fotoğrafa açıklama eklenemediği için düzeltilemez. Buna karşılık gerçek bir teslimde çekmek POS ekranı (üye işyeri no, tutar), kart yüzü, müşteri yüzü ve apartman isimliği risklerini birden getiriyor. Kazanç yok: 'kapıda nakit veya kredi kartı' bilgisi profilin kendi Ödemeler alanında zaten beyan ediliyor.

- GÜNCELLEME GÖNDERİLERİNDEKİ 'baslik' ALANLARI İÇ ETİKETTİR, HİÇBİR YERE YAPIŞTIRILMAZ. Güncelleme türü gönderide gövde + görsel + buton vardır; ayrı bir başlık alanı yoktur. Panele yalnızca 'metin' girilir, bağlantı buton alanına yazılır.

- PLANIN SAYILARI: Yüklenecek en çok 16 kare (araç yoksa 15, izinler tamamlanmazsa 13-14). Çekilecek ama profile HİÇ yüklenmeyecek 5 kare: komşu kapı dizisi, mevcut pankart, elektrik sayacı, vergi levhası, pano geneli. Toplam 21 çekim. Fotoğraf sayısı bir sıralama sinyali değil; fotoğrafların yerin gerçekliğini göstermesi önemli.

- SİTE TARAFINDA ÖNCE KAPATILACAK: docs/GORSEL-PROMPTLARI.md, 12 öncesi/sonrası görselinin nasıl üretildiğini yazıyor — önce 'sonrası' üretiliyor, sonra aynı prompta 'same exact camera angle, same framing' eklenip yalnızca kir tarifi değiştirilerek 'öncesi' üretiliyor. Bunlar tesis atmosferi değil, uydurulmuş SONUÇ kanıtıdır. hero-5.webp de aynı durumda ('large industrial quilt and blanket washing drum' promptuyla üretilmiş) ve sitedeki endüstriyel makine iddiasının tek görsel dayanağı o. Site, siteConfig.js:234'teki CID ile JSON-LD sameAs üzerinden profile MAKİNE TARAFINDAN BAĞLI — bu görseller fotoğraf programından önce yayından kaldırılmalı.

---

## 6. Takvim

| Ne zaman | Ne | Neden |
|---|---|---|
| 08-13 Eylül 2026 — profile HİÇ DOKUNMADAN | Ön koşullar. (1) İki kalıcı tabela + İÇ KAPI NO: 2 plakası yaptırılıp asılır; üçünde de dizge vergi levhasındaki '20 DENİZLİ TOMAY HALI YIKAMA' ile birebir aynı olacak, tabelaya telefon/URL YAZDIRILMAYACAK. (2) Profildeki iki adet 5 yıldızlı yorumun durumu çözülür: yöneticiye ait olan o hesaptan silinir, ikincisinin gerçek müşteriye ait olup olmadığı karara bağlanır. (3) Depoda `.gitignore`'a `arsiv/` satırı eklenir (şu an yok — kontrol edildi). (4) Sitedeki 12 uydurma öncesi/sonrası görseli ile hero-5.webp yayından kaldırılır. | Dördü de profil dışı iş, yani hiçbir düzenleme geçmişi bırakmıyor. Tabela olmadan fotoğrafların yarısı çekilemez. Yorumlar §11'in 'en riskli başlık' dediği kalem ve Soru-Cevap'tan önce kapanmalı. `arsiv/` ignore edilmezse VKN ve abone numarası taşıyan kareler uzak depoya gider. Öncesi/sonrası görselleri uydurulmuş SONUÇ kanıtıdır ve site, CID üzerinden `sameAs` ile profile makine tarafından bağlı — askının kendi başlığıyla aynı ihlal türü. |
| Hafta 1 — 14-16 Eylül 2026 (Parti 1, iki oturum) | Fotoğraf Parti 1: dış cephe kareleri sabah (sokak levhası+No:17+tabela, ortak pano şeridi, kapı tabelası+İÇ KAPI NO: 2), iç mekan kareleri öğleden sonra (eşikten içeri, 16 fırçalı makine çalışırken, kapalı kurutma odası) + logo dosyası. Kapak, 1 numaralı kare olarak işaretlenir. TABELA ASILI DEĞİLSE: yalnızca 16 fırçalı makine + kurutma odası + logo yüklenir; kapı, kapı kasası veya cephe gösteren hiçbir kare girmez. | Fotoğraf §11'in kendi 1. adımı ve listedeki en güvenlisi: askının konusu olan dört alanın (ad, adres, kategori, telefon) HİÇBİRİNE dokunmadan profile kanıt ekliyor ve fiziksel varlığı gösteren tek adım bu. Gün, profilin yeniden açıldığı 07.09'a bilerek konmadı; aynı gün toplu yükleme, taslağın kendi uyardığı ani hacim deseni olur. İki oturuma bölmek 'aynı dakika, aynı ışık' desenini kendiliğinden kırar. |
| Hafta 1 sonu — 18 Eylül 2026 (Parti 2) | Toz çırpma makinesi, rulo sıkma makinesi, etiketli halı istifi, yıkama salonu geniş görünüm. Etiket karesi çekildikten sonra %100 büyütülerek müşteri bilgisi okunmuyor mu diye kontrol edilir. | Süreç sırasını gösteren kareler. Parti 1'den 2-3 gün sonra: farklı gün, farklı ışık, doğal bir yükleme temposu. |
| Hafta 2 — 23 Eylül 2026 (Parti 3) | Şampuan bidonu ve dozajlama, ambalajlanmış teslime hazır halılar, alım-teslim aracı (araç fiilen varsa). | Sitedeki 'ambalajlı teslim' ve 'adresten alım' ifadelerinin görsel karşılığı. Araç yoksa kare düşer ve sitedeki araç cümlesi ayrı bir iş kalemi olarak düzeltilir. |
| Hafta 3-4 — 29 Eylül / 6 Ekim 2026 (Parti 4-5) | Yerinde koltuk yıkama (yalnızca gerçek müşteri adresinde ve yazılı izinle) ve ekip karesi (KVKK yazılı rızaları tamamlandığında). İkisi de izne bağlı; izin yoksa kareler düşer, sorun değil. | İzin toplamak zaman aldığı için bilerek en sona bırakıldı. İzin bekleyen bir kare yüzünden bütün program geciktirilmez. |
| Hafta 6 — 12 Ekim 2026 | Hizmetler A: yalnızca dört halı kalemi girilir (Halı Yıkama; El Dokuma & Yün; İpek & Nepal; Shaggy & Uzun Tüylü). Tek oturumda, mevcut birincil kategori 'Halı Temizleme Hizmeti' → 'Özel hizmet ekle' ile. | §11'in 2. adımı; son fotoğraftan ~2 hafta sonra. Sekiz kalemi ikiye bölmek, tek bir oturumda sekiz düzenleme yerine iki küçük olay üretiyor — yeni açılmış bir kayıtta daha sakin bir hacim eğrisi. En çok aranan kalemler önce giriyor. |
| Hafta 8 — 26 Ekim 2026 | Hizmetler B: kalan dört kalem (Koltuk Yıkama; Yatak & Baza Temizliği; Stor & Perde Yıkama; Yorgan & Battaniye Yıkama). Yine tek oturum, yine aynı kategori altında. | ~2 haftalık aralık korunuyor. Bu adımda 'Hizmet alanları' alanına DOKUNULMAZ — o bir konum düzenlemesidir ve §11'in aylarca dokunulmayacaklar listesinde. |
| Hafta 10 — 9 Kasım 2026 | Ürünler bölümü ATLANIR — satılan bir ürün yok. | §11'in 3. adımı. Boş bırakılıyor: satılmayan bir ürünü profile girmek, tam olarak 'Aldatıcı içerik' gerekçesinin tekrarı olur. Sessizce atlanmak yerine bilinçli bir karar olarak kaydediliyor; sıradaki adım iki hafta öne çekilmez, takvim aynen ilerler. |
| Hafta 12 — 23 Kasım 2026 | Güncelleme 1: 'Toz Çırpma Neden İlk Adım'. Buton: Daha fazla bilgi → /hizmetler/hali-yikama/ | §11'in 4. ve son adımı; listedeki en riskli olduğu için en sona bırakılmış. Fotoğraf ve hizmetler adımları tamamlandığında profil zaten kendi kendini anlatıyor olacak. |
| Hafta 14 — 7 Aralık 2026 | Güncelleme 2: 'Fırça Ayarı Halının Cinsine Göre Değişir'. Buton: Daha fazla bilgi → /hizmetler/. Yayınlamadan önce profildeki Hizmetler listesinin gerçekten sekiz kalem olduğu panelden kontrol edilir. | Gönderiler arasında da ~2 hafta bırakılıyor; arka arkaya gönderi yeni açılmış bir profilde başlı başına bir desen. |
| Hafta 16 — 21 Aralık 2026 | Güncelleme 3: 'Etiketleme ve Parça Takibi'. Buton: Daha fazla bilgi → /sikca-sorulan-sorular/ | Üç gönderinin sonuncusu. Dördüncü gönderi ('Yapmadığımız İşler') taslaktan çıkarıldı; aynı içerik Soru-Cevap'ın 5. maddesinde, doğru yerinde duruyor. |
| Ocak 2027'den itibaren — tek tek, aralarında haftalar | Soru-Cevap tohumlaması. Beş soru AYNI GÜN girilmez; ayda bir-iki soruyla ilerlenir ve gerçek müşteri sorusu geldikçe onlar cevaplanır. Cevaplar işletme hesabından yazılır ki 'İşletme sahibi' etiketi düşsün. | §11 aynı gün girilmiş iki 5 yıldızı 'tespit sistemlerinin doğrudan aradığı desen' diye işaretliyor. Tek hesaptan tek oturumda beş soru, aynı sinyalin ikinci kez üretilmesidir. Ön koşul: iki 5 yıldızlı yorumun durumu çözülmüş olacak. |
| Takvimde YER ALMIYOR — koşullu | İşletme açıklaması. Önce canlıdaki TAM metin profil panelinden okunur. Abartı sıfat, doğrulanamayan rakam, telefon, URL veya fiyat yoksa HİÇ DOKUNULMAZ. Varsa, hazır yedek metinle kendi penceresinde değiştirilir. | Açıklama §11'in dört maddelik listesinde yok. Giderilecek bir kusur gösterilmeden yapılan düzenleme, kıt bir düzenleme penceresini ve bir düzenleme geçmişi kaydını karşılıksız harcar. |

---

## 7. Yapılmayacaklar

- Google'ın 'Halı Temizleme Hizmeti' kategorisi altında ÖNERDİĞİ hazır kalemlere tıklanmayacak — özellikle 'halı onarımı', 'saçak onarımı', 'halı boyama' türü maddelere. Yapılmayan bir hizmeti profile eklemek, tam olarak 'Aldatıcı içerik' gerekçesinin tekrarıdır.

- İKİNCİ BİR KATEGORİ AÇILMAYACAK. Koltuk, yatak, perde ve yorgan için 'Döşeme Temizleme Servisi', 'Perde Temizleme', 'Çamaşırhane' veya 'Kuru Temizleme' eklenmeyecek. Sekiz kalemin tamamı mevcut birincil kategori altında toplanır. Kategori, §11'in aylarca dokunulmayacaklar listesinde.

- 'HİZMET ALANLARI' ALANINA DOKUNULMAYACAK. Koltuk/yatak/perde kalemleri girildikten sonra bu alanı doldurmak doğal görünür ama o bir KONUM düzenlemesidir ve §11 konumu ad/adres/kategori/telefon ile birlikte aylarca dokunulmayacaklar listesine koyuyor.

- Ad, adres, kategori, telefon ve konum aylarca hiç oynatılmayacak. Profil adı vergi levhasıyla birebir aynı kalacak; '20' önekini kaldırma fikri rafta. Profildeki iğnenin 89 metre şaşması biliniyor ve şimdi düzeltilmeyecek.

- GEÇİCİ TABELA ASIP FOTOĞRAF ÇEKİLMEYECEK. Pankart, çıktı, karton, yapıştırma — hiçbiri. Tabela yoksa Parti 1 üç kareye iner ve bu yeterlidir.

- public/images/ ALTINDAKİ HİÇBİR GÖRSEL PROFİLE YÜKLENMEYECEK. Sitedeki 30 görselin tamamı yapay zekâ ile üretildi (docs/GORSEL-PROMPTLARI.md). TEK İSTİSNA: public/images/logo/icon-512.png — işletmenin kendi logosu, üretilmiş tesis görseli değil.

- ROTUŞ YAPILMAYACAK: silme, bulanıklaştırma, kırpma, gökyüzü değiştirme, filtre, HDR abartısı, yapay zekâ ile büyütme. İstenmeyen unsur kadrajla çözülür, sonradan değil. Panorama modu kullanılmayacak.

- SAHTE KONUM VERİSİ ÜRETİLMEYECEK. Fotoğrafa sonradan koordinat basan 'geotag' uygulaması kullanılmayacak. Metaveri de topluca silinmeyecek — çekim sırasında konum servisi açık olsun, dosya kendiliğinden dürüst kalsın, sonrasında hiçbir şey yapılmasın.

- Çekimler `npm run varyant` / arac/gorsel-varyant.mjs aracından GEÇİRİLMEYECEK — çıktı .webp olur ve Google .webp kabul etmiyor. Telefondan doğrudan JPG çekilip dokunulmadan yüklenir.

- ARŞİV KLASÖRÜ, `.gitignore`'a `arsiv/` satırı eklenmeden depo içine konmayacak (şu an ignore edilmiyor — doğrulandı). En güvenlisi arşivi depo ağacının tamamen dışında tutmak (ör. ~/gbp-arsiv/2026-09/). Vergi levhası ve elektrik sayacı kareleri ne profile ne depoya girer.

- SORU SORMAK İÇİN İKİNCİ BİR GMAIL / İKİNCİ BİR HESAP AÇILMAYACAK (§8/7 — kalıcı askıya giden en yaygın hata). Beş soru aynı gün ve tek oturumda sorulmayacak.

- İşletmeyi yöneten hesaptan yorum bırakılmayacak; yorum karşılığında indirim, hediye veya herhangi bir teklif yapılmayacak; yorum metni dikte edilmeyecek.

- PROFİL METİNLERİNDE ASKI GEÇMİŞİNE ATIF YAPILMAYACAK. 'Yeniden hizmetinizdeyiz', 'eskiden şöyleydi, düzelttik' türü hiçbir çerçeve kullanılmayacak — yanlış beyanın yazılı ikrarı olur (§8/1).

- PROFİL METİNLERİNDE KOMŞU İŞLETMEDEN, 'bölünmüş bina'dan, 'yanlış birim'den veya aynı adresteki ikinci kayıttan HİÇ SÖZ EDİLMEYECEK. Bu bilgi askı dosyasına ve ek inceleme formuna aittir, herkese açık Soru-Cevap'a değil (§8/4).

- Hizmet açıklamalarına ve gönderi gövdelerine telefon, URL, e-posta veya fiyat rakamı yazılmayacak. %95 sıkma oranı profil metinlerine TAŞINMAYACAK — sitede 'yaklaşık' kaydıyla duruyor, profilde bağlamsız bir ölçüm iddiası olur.

- Sitedeki 15.000+ yıkanan halı, 5.000+ mutlu müşteri ve %100 hijyen sayıları profilde HİÇBİR YERDE kullanılmayacak — siteConfig.js bunları 'HÂLÂ DOĞRULANMADI' diye işaretliyor ve yanlış çıkan 2016 kuruluş yılıyla aynı kaynaktan geliyorlar.

- 'Ultrasonik makine' ve 'endüstriyel makine' adları profil metinlerine yazılmayacak. İkisinin tek kaynağı devralınan sitenin kendi beyanı; işletme sahibinden teyit alınmadı ve askı dosyasının delil paketinde geçmiyorlar. İşletme sahibi bu makineleri kendi tesisinde çalışır hâlde fotoğraflarsa, o fotoğraflar profilde durduktan SONRA metne eklenebilir.

- Kurgu sahne kurulmayacak: koltuk yıkama karesi tesiste veya işletme sahibinin evinde çekilmeyecek, kapıda ödeme karesi tesis çıkışında kurgulanmayacak, ödünç/kiralık araçla sahne yapılmayacak.

- 'Yapmadığımız İşler' gönderisi YAYINLANMAYACAK — taslaktan çıkarıldı. Aynı içerik Soru-Cevap'ın 5. maddesinde duruyor.

---

## 8. Reddedilen denetim bulguları

Denetçiler bazı şeyleri fazla temkinli işaretledi. Reddedilenler ve gerekçeleri:

- REDDEDİLDİ — Gönderi 1'deki 'sırayı değiştirmiyoruz... bu sırayı değiştirmez' cümlesi kaldı: brief'in doğrulanmış olgular listesi 'Önce toz çırpma makinesi, sonra su. Sıra değişmiyor.' diyor ve bu, sonuç vaadi değil işletmenin kendi süreci hakkında bir beyandır (birinci denetçi de bunu açıkça savunulabilir saymıştı).

- REDDEDİLDİ — 'Site düzeltilmeden bu gönderi yayınlanmasın' koşulu kaldırıldı: gönderi 2 artık makine SAYISI iddia etmiyor ('Tesiste ... makinesi kullanıyoruz' ve 'Aynı makinede' ifadeleri çıkarıldı), dolayısıyla iki denetçinin birbirine zıt tekil/çoğul düzeltme talimatı da konusuz kaldı; sitedeki tekil-çoğul tutarsızlığı bir site iş kalemi olarak duruyor ama profili bloklamıyor.

- KISMEN REDDEDİLDİ — 'kumaş kırığı oluşmaz' ibaresi silindi ama birinci denetçinin gerekçesiyle değil: ifade sitede YOK değil, services.js:230'da bir özellik maddesi olarak duruyor. Silinme sebebi ikinci denetçinin gerekçesi — sitenin kendi çekme/dalgalanma şerhleri 300 karakterlik profil alanına sığmıyor, şerhsiz bırakılan cümle sonuç garantisine dönüşüyor.

- REDDEDİLDİ — Sekiz hizmet kaleminin 4+4 bölünmesi TAKVİM gerekçesiyle korundu (tek oturumda sekiz düzenleme yerine iki küçük olay), ama arkasındaki 'yerinde yapılan işler İç Kapı No:2 kapsam beyanını zayıflatır' gerekçesi reddedildi: itiraz cümlesi kaydın hangi BİRİMİ kapsadığıyla ilgili, işin nerede yapıldığıyla değil; ayrıca GBP tesis+hizmet alanı modelini zaten destekliyor. Bu gerekçeden türeyen 'Hizmet alanları'na dokunma' uyarısı ise bağımsız olarak geçerli ve listede duruyor.

- KISMEN REDDEDİLDİ — 'Yapmadığımız İşler' gönderisi tamamen çıkarıldı (birinci denetçinin talebi kabul edildi); ikinci denetçinin 'düzeltilip tutulsun' önerisi reddedildi. Çıkarmak dört bulguyu birden kapatıyor: /hakkimizda/ butonunun doğrulanmamış sayaçlara inmesi, halıfleks cümlesinin yanlış okunması, sitenin kendi içinde çelişen hasar-bildirim zamanı, ve dördüncü tekrar eden kapanış kalıbı. İçerik kaybı yok: aynı bilgi Soru-Cevap 5'te ve zaman belirtmeyen bir dille duruyor.

