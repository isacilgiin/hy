/**
 * Hizmet bölgeleri — TAM VERİ (indeks + metin birleşimi).
 *
 * ┌──────────────────────────────────────────────────────────────────────────┐
 * │ BU DOSYAYI REACT BİLEŞENLERİNDEN İMPORT ETMEYİN.                        │
 * │ 61 bölgenin tam metnini tek pakette topluyor (~208 kB ham / 63 kB gzip). │
 * │ Bir bileşen bunu import ederse o sayfa 61 bölgenin TAMAMINI indirir.     │
 * │                                                                          │
 * │ İstemci tarafında:                                                       │
 * │   • isim/slug/sayı gerekiyorsa  → src/data/bolgelerIndex.js (≈9 kB)      │
 * │   • tek bir bölgenin metni      → src/data/bolgeler/<slug>.js (≈3,4 kB)  │
 * │     (ServiceAreaDetail.jsx import.meta.glob ile dinamik çekiyor)         │
 * │                                                                          │
 * │ Bu dosya BUILD ZAMANI içindir: vite.config.js ve routeMeta.js statik     │
 * │ HTML, sitemap ve llms.txt üretirken tam metne ihtiyaç duyuyor — orada    │
 * │ Node tarafında çalıştığı için paket boyutu sorunu yok.                   │
 * └──────────────────────────────────────────────────────────────────────────┘
 *
 * İÇERİK KURALI ve ölçüm geçmişi: docs/olgu-sayfasi.md §4 ve
 * arac/model-testi/BENIOKU.md. Yeni bölge eklerken benzerliği ölçün:
 *   node arac/model-testi/denetle.mjs
 *
 * BU DOSYA ELLE DÜZENLENMEZ. Metin için src/data/bolgeler/<slug>.js,
 * kimlik alanları için src/data/bolgelerIndex.js düzenlenir.
 */

import bolgelerIndex from './bolgelerIndex.js'
import b_merkezefendi_hali_yikama from './bolgeler/merkezefendi-hali-yikama.js'
import b_pamukkale_hali_yikama from './bolgeler/pamukkale-hali-yikama.js'
import b_babadag_hali_yikama from './bolgeler/babadag-hali-yikama.js'
import b_buldan_hali_yikama from './bolgeler/buldan-hali-yikama.js'
import b_honaz_hali_yikama from './bolgeler/honaz-hali-yikama.js'
import b_saraykoy_hali_yikama from './bolgeler/saraykoy-hali-yikama.js'
import b_serinhisar_hali_yikama from './bolgeler/serinhisar-hali-yikama.js'
import b_tavas_hali_yikama from './bolgeler/tavas-hali-yikama.js'
import b_acipayam_hali_yikama from './bolgeler/acipayam-hali-yikama.js'
import b_baklan_hali_yikama from './bolgeler/baklan-hali-yikama.js'
import b_bekilli_hali_yikama from './bolgeler/bekilli-hali-yikama.js'
import b_beyagac_hali_yikama from './bolgeler/beyagac-hali-yikama.js'
import b_bozkurt_hali_yikama from './bolgeler/bozkurt-hali-yikama.js'
import b_cal_hali_yikama from './bolgeler/cal-hali-yikama.js'
import b_cameli_hali_yikama from './bolgeler/cameli-hali-yikama.js'
import b_cardak_hali_yikama from './bolgeler/cardak-hali-yikama.js'
import b_civril_hali_yikama from './bolgeler/civril-hali-yikama.js'
import b_guney_hali_yikama from './bolgeler/guney-hali-yikama.js'
import b_kale_hali_yikama from './bolgeler/kale-hali-yikama.js'
import b_1200_evler_hali_yikama from './bolgeler/1200-evler-hali-yikama.js'
import b_adalet_hali_yikama from './bolgeler/adalet-hali-yikama.js'
import b_akkonak_hali_yikama from './bolgeler/akkonak-hali-yikama.js'
import b_altintop_hali_yikama from './bolgeler/altintop-hali-yikama.js'
import b_barbaros_hali_yikama from './bolgeler/barbaros-hali-yikama.js'
import b_bereketler_hali_yikama from './bolgeler/bereketler-hali-yikama.js'
import b_degirmenonu_hali_yikama from './bolgeler/degirmenonu-hali-yikama.js'
import b_eskihisar_hali_yikama from './bolgeler/eskihisar-hali-yikama.js'
import b_gerzele_hali_yikama from './bolgeler/gerzele-hali-yikama.js'
import b_gumuscay_hali_yikama from './bolgeler/gumuscay-hali-yikama.js'
import b_hacieyuplu_hali_yikama from './bolgeler/hacieyuplu-hali-yikama.js'
import b_ilbade_hali_yikama from './bolgeler/ilbade-hali-yikama.js'
import b_karahasanli_hali_yikama from './bolgeler/karahasanli-hali-yikama.js'
import b_muratdede_hali_yikama from './bolgeler/muratdede-hali-yikama.js'
import b_servergazi_hali_yikama from './bolgeler/servergazi-hali-yikama.js'
import b_sevindik_hali_yikama from './bolgeler/sevindik-hali-yikama.js'
import b_sirakapilar_hali_yikama from './bolgeler/sirakapilar-hali-yikama.js'
import b_sumer_hali_yikama from './bolgeler/sumer-hali-yikama.js'
import b_semikler_hali_yikama from './bolgeler/semikler-hali-yikama.js'
import b_yenisehir_hali_yikama from './bolgeler/yenisehir-hali-yikama.js'
import b_akkoy_hali_yikama from './bolgeler/akkoy-hali-yikama.js'
import b_aktepe_hali_yikama from './bolgeler/aktepe-hali-yikama.js'
import b_anafartalar_hali_yikama from './bolgeler/anafartalar-hali-yikama.js'
import b_atalar_hali_yikama from './bolgeler/atalar-hali-yikama.js'
import b_bagbasi_hali_yikama from './bolgeler/bagbasi-hali-yikama.js'
import b_cumhuriyet_hali_yikama from './bolgeler/cumhuriyet-hali-yikama.js'
import b_deliktas_hali_yikama from './bolgeler/deliktas-hali-yikama.js'
import b_dokuzkavaklar_hali_yikama from './bolgeler/dokuzkavaklar-hali-yikama.js'
import b_feslegen_hali_yikama from './bolgeler/feslegen-hali-yikama.js'
import b_guzelkoy_hali_yikama from './bolgeler/guzelkoy-hali-yikama.js'
import b_hacikaplanlar_hali_yikama from './bolgeler/hacikaplanlar-hali-yikama.js'
import b_incilipinar_hali_yikama from './bolgeler/incilipinar-hali-yikama.js'
import b_istiklal_hali_yikama from './bolgeler/istiklal-hali-yikama.js'
import b_karahayit_hali_yikama from './bolgeler/karahayit-hali-yikama.js'
import b_karsiyaka_hali_yikama from './bolgeler/karsiyaka-hali-yikama.js'
import b_kayihan_hali_yikama from './bolgeler/kayihan-hali-yikama.js'
import b_kinikli_hali_yikama from './bolgeler/kinikli-hali-yikama.js'
import b_mehmetcik_hali_yikama from './bolgeler/mehmetcik-hali-yikama.js'
import b_pelitlibag_hali_yikama from './bolgeler/pelitlibag-hali-yikama.js'
import b_siteler_hali_yikama from './bolgeler/siteler-hali-yikama.js'
import b_topraklik_hali_yikama from './bolgeler/topraklik-hali-yikama.js'
import b_zeytinkoy_hali_yikama from './bolgeler/zeytinkoy-hali-yikama.js'

export { zoneContent, ilceler, mahalleler, mahalleleriBul } from './bolgelerIndex.js'

const metinler = {
  'merkezefendi-hali-yikama': b_merkezefendi_hali_yikama,
  'pamukkale-hali-yikama': b_pamukkale_hali_yikama,
  'babadag-hali-yikama': b_babadag_hali_yikama,
  'buldan-hali-yikama': b_buldan_hali_yikama,
  'honaz-hali-yikama': b_honaz_hali_yikama,
  'saraykoy-hali-yikama': b_saraykoy_hali_yikama,
  'serinhisar-hali-yikama': b_serinhisar_hali_yikama,
  'tavas-hali-yikama': b_tavas_hali_yikama,
  'acipayam-hali-yikama': b_acipayam_hali_yikama,
  'baklan-hali-yikama': b_baklan_hali_yikama,
  'bekilli-hali-yikama': b_bekilli_hali_yikama,
  'beyagac-hali-yikama': b_beyagac_hali_yikama,
  'bozkurt-hali-yikama': b_bozkurt_hali_yikama,
  'cal-hali-yikama': b_cal_hali_yikama,
  'cameli-hali-yikama': b_cameli_hali_yikama,
  'cardak-hali-yikama': b_cardak_hali_yikama,
  'civril-hali-yikama': b_civril_hali_yikama,
  'guney-hali-yikama': b_guney_hali_yikama,
  'kale-hali-yikama': b_kale_hali_yikama,
  '1200-evler-hali-yikama': b_1200_evler_hali_yikama,
  'adalet-hali-yikama': b_adalet_hali_yikama,
  'akkonak-hali-yikama': b_akkonak_hali_yikama,
  'altintop-hali-yikama': b_altintop_hali_yikama,
  'barbaros-hali-yikama': b_barbaros_hali_yikama,
  'bereketler-hali-yikama': b_bereketler_hali_yikama,
  'degirmenonu-hali-yikama': b_degirmenonu_hali_yikama,
  'eskihisar-hali-yikama': b_eskihisar_hali_yikama,
  'gerzele-hali-yikama': b_gerzele_hali_yikama,
  'gumuscay-hali-yikama': b_gumuscay_hali_yikama,
  'hacieyuplu-hali-yikama': b_hacieyuplu_hali_yikama,
  'ilbade-hali-yikama': b_ilbade_hali_yikama,
  'karahasanli-hali-yikama': b_karahasanli_hali_yikama,
  'muratdede-hali-yikama': b_muratdede_hali_yikama,
  'servergazi-hali-yikama': b_servergazi_hali_yikama,
  'sevindik-hali-yikama': b_sevindik_hali_yikama,
  'sirakapilar-hali-yikama': b_sirakapilar_hali_yikama,
  'sumer-hali-yikama': b_sumer_hali_yikama,
  'semikler-hali-yikama': b_semikler_hali_yikama,
  'yenisehir-hali-yikama': b_yenisehir_hali_yikama,
  'akkoy-hali-yikama': b_akkoy_hali_yikama,
  'aktepe-hali-yikama': b_aktepe_hali_yikama,
  'anafartalar-hali-yikama': b_anafartalar_hali_yikama,
  'atalar-hali-yikama': b_atalar_hali_yikama,
  'bagbasi-hali-yikama': b_bagbasi_hali_yikama,
  'cumhuriyet-hali-yikama': b_cumhuriyet_hali_yikama,
  'deliktas-hali-yikama': b_deliktas_hali_yikama,
  'dokuzkavaklar-hali-yikama': b_dokuzkavaklar_hali_yikama,
  'feslegen-hali-yikama': b_feslegen_hali_yikama,
  'guzelkoy-hali-yikama': b_guzelkoy_hali_yikama,
  'hacikaplanlar-hali-yikama': b_hacikaplanlar_hali_yikama,
  'incilipinar-hali-yikama': b_incilipinar_hali_yikama,
  'istiklal-hali-yikama': b_istiklal_hali_yikama,
  'karahayit-hali-yikama': b_karahayit_hali_yikama,
  'karsiyaka-hali-yikama': b_karsiyaka_hali_yikama,
  'kayihan-hali-yikama': b_kayihan_hali_yikama,
  'kinikli-hali-yikama': b_kinikli_hali_yikama,
  'mehmetcik-hali-yikama': b_mehmetcik_hali_yikama,
  'pelitlibag-hali-yikama': b_pelitlibag_hali_yikama,
  'siteler-hali-yikama': b_siteler_hali_yikama,
  'topraklik-hali-yikama': b_topraklik_hali_yikama,
  'zeytinkoy-hali-yikama': b_zeytinkoy_hali_yikama,
}

const serviceAreas = bolgelerIndex.map((a) => ({ ...a, ...metinler[a.slug] }))

export default serviceAreas
