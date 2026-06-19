import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Página no encontrada (404)',
  description: 'La página que buscás no existe o fue movida.',
  robots: { index: false, follow: false },
}

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <p className="text-6xl font-bold text-blue-600 mb-4" aria-hidden="true">
        404
      </p>
      <h1 className="text-2xl font-semibold text-gray-900 mb-4">Página no encontrada</h1>
      <p className="text-gray-600 mb-8">
        La página que estás buscando no existe o fue movida a otra URL.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
      >
        ← Volver al inicio
      </Link>
    </div>
  )
}
