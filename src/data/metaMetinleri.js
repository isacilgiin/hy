/**
 * Rota başına <title> ve meta description METİNLERİ — TEK KAYNAK.
 *
 * NEDEN VAR: bu sitede her rotanın meta bilgisi İKİ AYRI ÜRETİCİDEN geçiyor.
 *   1. src/data/routeMeta.js  → build sırasında ham HTML'e yazılıyor.
 *      JavaScript çalıştırmayan istemciler (WhatsApp, Facebook, Twitter link
 *      önizlemeleri) YALNIZCA bunu görür.
 *   2. Sayfa bileşenindeki <Seo> çağrısı → React yüklenince document.title'ı
 *      ve meta etiketlerini EZER. Googlebot sayfayı render ettiği için
 *      indekslediği başlık BUDUR.
 *
 * İkisi ayrıştığında sayfa "ne dediğini" okuyucuya göre değiştiriyor: sosyal
 * önizlemede bir başlık, arama sonucunda başka bir başlık. Google bu tutarsızlığı
 * gördüğünde kendi başlık yeniden yazma mantığını devreye sokuyor ve yazdığımız
 * başlığın hiçbiri kullanılmıyor.
 *
 * Bu ayrışma teoride değil pratikte oldu: 11 blog yazısının başlığı hidrasyondan
 * sonra düz "undefined" oluyordu, /hizmet-bolgeleri/ iki farklı marka adı
 * söylüyordu, /blog/ iki farklı cümle kuruyordu. Hepsinin ortak sebebi aynı
 * metnin iki dosyada ELLE tutulmasıydı. Metin burada bir kez yazılır, iki taraf
 * da buradan okur — böylece ayrışma mümkün olmaktan çıkar.
 *
 * ┌──────────────────────────────────────────────────────────────────────────┐
 * │ BU DOSYA siteConfig.js DIŞINDA HİÇBİR ŞEY İMPORT ETMEMELİ.               │
 * │                                                                          │
 * │ Sebep: aşağıdaki 11 sayfanın hepsi App.jsx'te lazy() ile ayrı parçaya    │
 * │ bölünmüş ve hepsi bu dosyayı import ediyor. Buraya konan her import      │
 * │ ortak parçaya girer ve TÜM sayfalara iner.                               │
 * │                                                                          │
 * │ Somut tehlike: routeMeta.js'i buradan (ya da bir bileşenden) import      │
 * │ etmek. O dosya serviceContent.js (124 kB), blogContent.js (136 kB) ve    │
 * │ serviceAreas.js (61 bölge metni, ~208 kB) çekiyor — yarım megabayt ham   │
 * │ veri ana pakete girer ve kod bölmenin tamamı boşa çıkar. Aynı sebeple    │
 * │ bolgelerIndex.js de burada YOK.                                          │
 * │                                                                          │
 * │ Bu yüzden veriye bağlı sayılar (ilçe sayısı, soru sayısı, hizmet adı)    │
 * │ import edilmez, ÇAĞIRANDAN PARAMETRE olarak alınır. İki taraf da o       │
 * │ sayıyı zaten elinde tutuyor ve aynı kaynaktan okuyor:                    │
 * │ serviceAreas.js `ilceler`i bolgelerIndex.js'ten yeniden dışa veriyor.    │
 * └──────────────────────────────────────────────────────────────────────────┘
 *
 * DENETİM: arac/seo-denetimi.mjs > "BUILD META = REACT META" bölümü bu dosyayı
 * Node tarafında import edip yayın klasöründeki HTML ile karşılaştırıyor.
 * Metin buradan alınmayı bırakırsa denetim kırmızı yanar.
 */

import siteConfig from './siteConfig.js'

const { companyName, companyShortName, phone, address, service } = siteConfig

/**
 * Bölge sayfalarındaki başlıklarda marka "Tomay" — companyShortName DEĞİL.
 *
 * Başlık bütçesi 60 karakter (vite.config.js künyesi bunu ölçüp uyarıyor) ve
 * bu kalıpta ilçe adı + "Halı Yıkama — Ücretsiz Servis" zaten yerin çoğunu
 * yiyor. En uzun ilçe adıyla bile 60'ın altında kalması için marka tek kelimeye
 * iniyor. Bilerek sabit; siteConfig'den türetilirse bütçe taşar.
 */
const BOLGE_MARKA = 'Tomay'

/** Parantezli ek atılır: "Merkezefendi (Merkez)" -> "Merkezefendi". */
const bolgeSeoAd = (ad) => ad.replace(/\s*\(.*?\)/, '')

const metaMetinleri = {
  /* ===== /hizmetler/ ===== */
  hizmetler: {
    /**
     * Başlık HİZMETLE başlar, şehirle değil.
     *
     * Hedef sorgu "halı yıkama denizli" biçiminde geliyor, "denizli halı yıkama"
     * kadar sık ve Google başlığın ilk kelimelerine daha çok ağırlık veriyor.
     * Site bu sorguda 5-6. sayfadaydı; başlık kalıbı bu yüzden değişti.
     *
     * "Halı Yıkama Denizli" ile BAŞLAMIYOR, bilerek: o sorguyu ANA SAYFA
     * sahipleniyor (`seo.defaultTitle`) ve iki sayfayı aynı sorguya sürmek
     * ikisini birden zayıflatır — services.js'teki yamyamlık notunun aynısı.
     * Bu sayfa kardeş sorguları alıyor: "koltuk yıkama denizli",
     * "perde yıkama denizli", "yorgan yıkama denizli".
     */
    baslik: `Koltuk, Perde ve Yorgan Yıkama Denizli | ${companyShortName}`,
    /**
     * H1 — EKRANDA GÖRÜNEN başlık BURADAN geliyor, ayrıca ham HTML'e de
     * buradan yazılıyor. İkisi ayrıştığında (build "Denizli'de Verdiğimiz
     * Yıkama Hizmetleri" derken ekranda "Hizmetlerimiz" yazması) JS
     * çalıştırmayan tarayıcı ile Googlebot'un render ettiği sayfa FARKLI
     * başlık görüyor; vite.config.js'teki noscript notu bunu açıkça
     * yasaklıyor. Kısa hâl ayrıca hiç anahtar kelime taşımıyordu.
     */
    h1: `${address.city}'de Verdiğimiz Yıkama Hizmetleri`,
    aciklama:
      "Denizli'de halı, el dokuma halı, shaggy, koltuk, yatak, stor perde ve yorgan yıkama. Adresinizden ücretsiz alıyor, ambalajlı teslim ediyoruz.",
  },

  /* ===== /hizmet-bolgeleri/ ===== */
  hizmetBolgeleri: {
    /**
     * "Denizli ve Tüm İlçeler" DEĞİL, "Denizli Tüm İlçeler" — ve marka kısa ad.
     *
     * Uzun kalıp ("… ve Tüm İlçeler — Denizli Tomay Halı Yıkama") 69 karakter
     * tutuyordu; build künyesi 60 karakteri aşan başlıkları uyarı olarak
     * yazıyor ve Google 60'ı aşan başlığı sonuçta kesiyor. Kısa kalıp 58.
     */
    baslik: `Hizmet Bölgeleri | Denizli Tüm İlçeler — ${companyShortName}`,
    /** H1 gerekçesi hizmetler.h1'de. */
    h1: `${address.city} Genelinde Hizmet Verdiğimiz İlçeler`,
    /**
     * Açıklama ilçe ADLARINI sayıyor, mahalle SAYISINI değil.
     *
     * Bu bir hub sayfası: değerinin çoğu "sarayköy halı yıkama" gibi uzun
     * kuyruk sorgularda geçen gerçek ilçe adlarından geliyor. Sayıları ve
     * adları birlikte yazmayı denemek 155 karakteri aşıyor, aşınca da kisalt()
     * SONDAN kesiyor — yani tam da o ilçe adlarını siliyor.
     */
    aciklama: (ilceSayisi) =>
      `Denizli il genelinde ${ilceSayisi} ilçede halı, koltuk ve perde yıkama. Merkezefendi, Pamukkale, Honaz, Sarayköy, Çivril, Acıpayam ve tüm ilçeler.`,
  },

  /* ===== /projeler/ ===== */
  projeler: {
    baslik: `Öncesi & Sonrası | Halı Yıkama Denizli — ${companyShortName}`,
    aciklama:
      'Yıkamadan önce ve sonra: halı, koltuk ve perde işlerinin sahada nasıl göründüğü. Hangi lekede ne yapıldığını görselleriyle anlattık.',
  },

  /* ===== /hakkimizda/ ===== */
  hakkimizda: {
    baslik: `Hakkımızda | ${companyShortName} — Halı Yıkama Denizli`,
    /** H1 gerekçesi hizmetler.h1'de. */
    h1: `${companyName} Hakkında`,
    aciklama: `${companyShortName}, Denizli'de halı, koltuk, perde ve yorgan yıkama hizmeti veriyor. Eskihisar'daki tesisimizde 16 fırçalı makinelerle çalışıyoruz.`,
  },

  /* ===== /iletisim/ ===== */
  iletisim: {
    baslik: `İletişim | ${companyShortName} — Halı Yıkama Denizli`,
    // 154 karakter — 155'lik kesme sınırının ALTINDA, bilerek. Burada
    // `address.short` kullanılıyor; `full` (levhadaki bina + iç kapı no)
    // metni taşırıp "...No:17 İç Kapı…" diye ortadan kesiyor ve son cümleyi
    // düşürüyordu. Bu satırı uzatmadan önce npm run seo çalıştırın.
    aciklama: `Halı, koltuk ve perde yıkama için bize ulaşın. Telefon ${phone} ve WhatsApp. Adres: ${address.short}. Alım ve teslim ücretsiz.`,
  },

  /* ===== /sikca-sorulan-sorular/ ===== */
  sss: {
    // 60 karakteri aşmamalı; build künyesi uzun başlıkları yakalıyor.
    baslik: `Halı Yıkama SSS | ${companyShortName}`,
    aciklama: (soruSayisi) =>
      `Halı, koltuk ve perde yıkama hakkında en çok sorulan ${soruSayisi} soru ve cevabı. Teslim süresi, leke, servis, ödeme ve halı cinsine göre program.`,
  },

  /* ===== /gizlilik-politikasi/ · /sartlar-ve-kosullar/ ===== */
  yasal: {
    /**
     * Marka KISA ad. Sitedeki bütün sabit sayfalar "| Tomay Halı Yıkama"
     * kalıbını kullanıyor (hizmetler, projeler, hakkımızda, iletişim, SSS,
     * blog); yasal sayfalar tek istisnaydı ve uzun adı yazıyordu.
     */
    baslik: (sayfaBasligi) => `${sayfaBasligi} | ${companyShortName}`,
    // Açıklama legal.js'teki `ozet` alanından geliyor — zaten tek kaynak,
    // burada tekrarlanmıyor.
  },

  /* ===== /blog/ ===== */
  blog: {
    baslik: `Halı Yıkama Rehberleri | Blog — ${companyShortName}`,
    /**
     * "sahadan" değil "işin içinden": sayfanın GÖRÜNEN giriş metni de
     * ("Halı ve tekstil temizliğini merak eden herkes için işin içinden
     * yazılmış rehberler") aynı ifadeyi kullanıyor. Meta açıklamanın ekrandaki
     * metinden başka şey söylemesi bu projede cloaking sayılıyor.
     */
    aciklama:
      'Halı, koltuk ve perde yıkama hakkında işin içinden yazılmış rehberler. Fiyatı ne belirler, leke nasıl çıkar, halı yıkamacı seçerken nelere bakılır.',
  },

  /* ===== /hizmetler/<slug>/ ===== */
  hizmetDetay: {
    // services.js'te seoTitle varsa o kazanır; yoksa bu kalıp.
    baslik: (seoTitle, hizmetAdi) => seoTitle ?? `Denizli ${hizmetAdi} — ${companyName}`,
    /**
     * "çevre ilçelerde" değil "tüm ilçelerinde".
     *
     * Site 19 ilçenin TAMAMINA gittiğini söylüyor (/hizmet-bolgeleri/ başlığı
     * "Denizli Tüm İlçeler", gövdesi "19 ilçesinin tamamına gidiyoruz").
     * "çevre ilçeler" bu vaadi daraltıyordu ve iki sayfa birbiriyle çelişiyordu.
     *
     * toLowerCase() BURADA yapılıyor, çağıranda değil: Türkçe'de büyük-küçük
     * dönüşümü yerele duyarlı ve iki taraf ayrı ayrı çevirseydi biri
     * locale'li biri locale'siz kullanınca sessizce ayrışabilirdi.
     */
    aciklama: (hizmetAdi, kisaAciklama) =>
      `Denizli ve tüm ilçelerinde ${hizmetAdi.toLowerCase()} hizmeti. ${kisaAciklama} Ücretsiz alım ve teslim. ${phone}.`,
  },

  /* ===== /hizmet-bolgeleri/<slug>/ ===== */
  bolgeDetay: {
    seoAd: bolgeSeoAd,
    /**
     * AÇIKLAMADA ilçe adının önüne il adı konur — başlıkta değil.
     *
     * Sebep coğrafi belirsizlik: Güney, Kale, Çal, Çardak gibi adlar Türkiye'de
     * birden fazla ilde geçiyor. "Kale halı yıkama" ile başlayan bir açıklama
     * hangi Kale olduğunu söylemiyor; arama da çoğu zaman "denizli kale halı
     * yıkama" biçiminde geliyor. Başlıkta yapılmadı çünkü orada bütçe 60 karakter
     * ve ilçe adının en başta durması gerekiyor; açıklamanın 155 karakterlik
     * bütçesi en uzun ilçede bile buna yetiyor.
     */
    acikAd: (ad) => {
      const seoAd = bolgeSeoAd(ad)
      return seoAd.startsWith(address.city) ? seoAd : `${address.city} ${seoAd}`
    },
    /**
     * Başlık kalıbı: hedef kelime EN BAŞTA, sonra ayırt edici vaat, sonra marka.
     *
     * Bölgesel aramalarda ("halı yıkama merkezefendi", "bağbaşı halı yıkama")
     * rekabet il genelindeki ana sorgudan çok daha düşük; ilçe/mahalle adının
     * başlığın ilk kelimesi olması bu yüzden en değerli tercih.
     *
     * "Ücretsiz Servis" eklendi çünkü sektörde gerçek ayrışma noktası bu ve
     * olgu sayfasında doğrulanmış (alım-teslim ücretsiz). En uzun ilçe adıyla
     * bile 60 karakterin altında kalıyor — hiçbiri kesilmiyor.
     */
    baslik: (ad) => `${bolgeSeoAd(ad)} Halı Yıkama — Ücretsiz Servis | ${BOLGE_MARKA}`,
    /**
     * Mahallede ilçe, ilçede il anılıyor — aynı coğrafi belirsizlik sebebiyle.
     * "Cumhuriyet halı yıkama" hangi Cumhuriyet olduğunu söylemiyor; Denizli'nin
     * birçok ilçe merkezinde aynı adda mahalle var.
     */
    aciklama: (bolge) =>
      bolge.tur === 'mahalle'
        ? `${bolge.name} Mahallesi (${bolge.ilce}) halı yıkama: adresinizden ücretsiz alıyor, ${service.teslimSuresi} içinde ambalajlı teslim ediyoruz. Koltuk ve perde de yıkıyoruz.`
        : `${metaMetinleri.bolgeDetay.acikAd(bolge.name)} halı yıkama: adresinizden ücretsiz alıyor, ${service.teslimSuresi} içinde ambalajlı teslim ediyoruz. Koltuk ve perde de yıkıyoruz. ${phone}.`,
  },

  /* ===== /404.html ===== */
  /**
   * DİKKAT: 404 için burası KAYNAK DEĞİL, AYNA.
   *
   * 404.html'i routeMeta.js üretmiyor; vite.config.js ana sayfanın HTML'ini
   * alıp başlığını/açıklamasını string replace ile değiştiriyor ve o metinler
   * orada SABİT yazılı. Yani NotFound.jsx buradan okusa bile üçüncü bir kopya
   * vite.config.js'te duruyor.
   *
   * Değerler oradakiyle BİREBİR aynı tutuldu ve seo-denetimi.mjs yayındaki
   * 404.html ile bu değerleri karşılaştırıyor — vite.config.js'teki metin
   * değişirse denetim kırmızı yanar. vite.config.js'in de buradan okuması
   * gerçek çözüm olurdu; o dosya bu değişikliğin kapsamı dışındaydı.
   */
  bulunamadi: {
    baslik: `Sayfa Bulunamadı — ${companyShortName}`,
    aciklama: 'Aradığınız sayfa bulunamadı.',
  },
}

export default metaMetinleri
