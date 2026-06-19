import Link from 'next/link'

interface PaginationProps {
  currentPage: number
  totalPages: number
}

function pageHref(page: number): string {
  return page === 1 ? '/' : `/${page}`
}

export default function Pagination({ currentPage, totalPages }: PaginationProps) {
  if (totalPages <= 1) return null

  return (
    <nav aria-label="Paginación de artículos" className="mt-12 flex justify-center items-center gap-2">
      {currentPage > 1 ? (
        <Link
          href={pageHref(currentPage - 1)}
          rel="prev"
          className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          aria-label="Página anterior"
        >
          ← Anterior
        </Link>
      ) : (
        <span
          className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-300 cursor-not-allowed"
          aria-disabled="true"
        >
          ← Anterior
        </span>
      )}

      <ol className="flex gap-1" aria-label="Páginas">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <li key={page}>
            <Link
              href={pageHref(page)}
              aria-label={`Página ${page}`}
              aria-current={page === currentPage ? 'page' : undefined}
              className={`w-9 h-9 flex items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                page === currentPage
                  ? 'bg-blue-600 text-white pointer-events-none'
                  : 'border border-gray-300 text-gray-700 hover:bg-gray-50'
              }`}
            >
              {page}
            </Link>
          </li>
        ))}
      </ol>

      {currentPage < totalPages ? (
        <Link
          href={pageHref(currentPage + 1)}
          rel="next"
          className="px-4 py-2 rounded-lg border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          aria-label="Página siguiente"
        >
          Siguiente →
        </Link>
      ) : (
        <span
          className="px-4 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-300 cursor-not-allowed"
          aria-disabled="true"
        >
          Siguiente →
        </span>
      )}
    </nav>
  )
}
