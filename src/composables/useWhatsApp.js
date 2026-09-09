/**
 * Reusable CTA helper (WhatsApp / SMS deep link).
 * Default number lives in src/data/clinic.js
 */
export function useWhatsApp(phoneNumber, message = '') {
  const digits = String(phoneNumber || '').replace(/\D/g, '')

  function buildUrl(customMessage) {
    const text = customMessage ?? message
    const base = `https://wa.me/${digits}`
    if (!text) return base
    return `${base}?text=${encodeURIComponent(text)}`
  }

  function openWhatsApp(customMessage) {
    const url = buildUrl(customMessage)
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return {
    buildUrl,
    openWhatsApp,
    phoneDigits: digits,
  }
}
