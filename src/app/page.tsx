import type { Metadata } from 'next'
import { getPaginatedArticles, getTotalPages } from '@/data/articles'
import ArticleCard from '@/components/ArticleCard'
import Pagination from '@/components/Pagination'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'TechStore Blog – Reviews y comparativas de gadgets',
  description:
    'Explorá nuestra colección de reviews y comparativas sobre smartphones, auriculares, smartwatches, tablets y periféricos.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'TechStore Blog – Reviews de gadgets',
    description: 'Reviews y comparativas de los mejores gadgets del mercado.',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  name: 'TechStore Blog',
  description: 'Reviews y comparativas de gadgets: smartphones, auriculares, smartwatches y más',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  inLanguage: 'es',
}

export default function HomePage() {
  const currentPage = 1
  const totalPages = getTotalPages()
  const pageArticles = getPaginatedArticles(currentPage)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-5xl mx-auto px-4 py-12">
        <section aria-labelledby="hero-heading" className="mb-12 text-center">
          <h1
            id="hero-heading"
            className="text-4xl font-bold text-gray-900 mb-4 text-balance"
          >
            Artículos
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Reviews y comparativas de smartphones, auriculares, smartwatches, tablets y periféricos.
          </p>
        </section>

        <section aria-labelledby="articles-heading">
          <h2 id="articles-heading" className="sr-only">
            Listado de artículos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pageArticles.map((article, index) => (
              <ArticleCard
                key={article.id}
                article={article}
                priority={index < 3}
              />
            ))}
          </div>
          <Pagination currentPage={currentPage} totalPages={totalPages} />
        </section>
      </div>
    </>
  )
}
