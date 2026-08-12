/**
 * Türkçe ek yardımcıları.
 *
 * NEDEN VAR: İlçe sayfalarında başlık `{area.name}'de Karot Hizmeti` şeklinde
 * SABİT "'de" ile yazılıyordu. 20 ilçenin 11'inde ek yanlış çıkıyordu:
 * "Tavas'de", "Acıpayam'de", "Bozkurt'de", "Çardak'de"... Ek elle düzeltilirse
 * yeni ilçe eklendiğinde aynı hata tekrarlanır; bu yüzden kuraldan üretiliyor.
 */

const SESLI = 'aeıioöuüAEIİOÖUÜ'
/** Kalın (art) ünlüler — ekin "a" ile gelmesini gerektirir. */
const KALIN = 'aıouAIOU'
/** Sert (ötümsüz) ünsüzler — "fıstıkçı şahap" — ekin "d" yerine "t" olmasını gerektirir. */
const SERT = 'fstkçşhpFSTKÇŞHP'

/** Kelimenin sonundaki noktalama/parantezleri atıp yalnızca harfleri döndürür. */
function harfler(ad) {
  return [...String(ad)].filter((c) => /[a-zçğıöşüA-ZÇĞİÖŞÜ]/.test(c))
}

/**
 * Bulunma hâli eki (-DA): "Tavas" -> "ta", "Honaz" -> "da", "Çameli" -> "de".
 *
 * İki kural birlikte işler:
 *   1) Ünlü uyumu — son ünlü kalınsa (a, ı, o, u) ek "a"lı, inceyse "e"li olur.
 *   2) Ünsüz benzeşmesi — kelime sert ünsüzle bitiyorsa ek "d" değil "t" ile başlar.
 *
 * "Denizli (Merkez)" gibi parantezli adlarda noktalama atıldığı için ek,
 * son gerçek harfe ("z") ve son ünlüye ("e") göre hesaplanır.
 *
 * @param {string} ad Özel ad (ilçe, il, mahalle)
 * @returns {'da'|'de'|'ta'|'te'}
 */
export function bulunmaEki(ad) {
  const h = harfler(ad)
  if (h.length === 0) return 'de'
  const sonHarf = h[h.length - 1]
  const sonSesli = [...h].reverse().find((c) => SESLI.includes(c)) ?? 'e'
  return (SERT.includes(sonHarf) ? 't' : 'd') + (KALIN.includes(sonSesli) ? 'a' : 'e')
}

/**
 * Kesme işaretiyle birlikte tam ek: "Tavas" -> "'ta".
 * Özel adlara gelen çekim ekleri kesme işaretiyle ayrılır (TDK).
 */
export function bulunmaEkiTam(ad) {
  return `’${bulunmaEki(ad)}`
}
