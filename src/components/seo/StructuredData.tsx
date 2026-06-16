import { useEffect } from 'react'
import { buildStructuredData } from '@/lib/structuredData'

const SCRIPT_ID = 'conciron-structured-data'

/**
 * Injects JSON-LD structured data into `<head>` for SEO rich results.
 */
export function StructuredData() {
  useEffect(() => {
    const existing = document.getElementById(SCRIPT_ID)
    if (existing) return

    const script = document.createElement('script')
    script.id = SCRIPT_ID
    script.type = 'application/ld+json'
    script.textContent = JSON.stringify(buildStructuredData())
    document.head.appendChild(script)

    return () => {
      script.remove()
    }
  }, [])

  return null
}
