import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Sayfa geçişlerinde sayfanın en üstüne scroll eder.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
