import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getPaginatedArticles, getTotalPages } from '@/data/articles'
import ArticleCard from '@/components/ArticleCard'
import Pagination from '@/components/Pagination'

interface Props {
  params: { page: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = Number(params.page)
  const totalPages = getTotalPages()

  if (isNaN(page) || page < 2 || page > totalPages) {
    return { title: 'Página no encontrada' }
  }

  return {
    title: `Artículos – Página ${page}`,
    description: `Explorá reviews y comparativas de gadgets. Página ${page} de ${totalPages}.`,
    alternates: {
      canonical: `/${page}`,
    },
  }
}

export default function ArticlesPage({ params }: Props) {
  const page = Number(params.page)
  const totalPages = getTotalPages()

  if (isNaN(page) || page < 2 || page > totalPages) {
    notFound()
  }

  const pageArticles = getPaginatedArticles(page)

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <section aria-labelledby="articles-heading">
        <h1 id="articles-heading" className="text-2xl font-bold text-gray-900 mb-8">
          Artículos — Página {page}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pageArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        <Pagination currentPage={page} totalPages={totalPages} />
      </section>
    </div>
  )
}
